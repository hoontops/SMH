(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04800M");
            this.set_titletext("Lot Routing");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPECODE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Routing", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"OLDUSERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISFINALTEST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Resource", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISFINALTEST\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Material", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"WIPSUPPLYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Durable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROUTING_VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RoutingCopy", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"OLDUSERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISFINALTEST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("포장사양관리");
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

            obj = new Div("div_search","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","10","5.5%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"9","24","24","10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","staLOTID:10","10","200","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"9","62","24","btn_reset:5",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            obj.set_hotkey("F2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_LOTID","edt_LOTID:0","10","22","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Grid("grdLotInfo","0","52",null,"85","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_cssclass("grd_detail_Master");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_binddataset("ds_LotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"102\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"NEXTPROCESSSEGMENTNAME \"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"공정수순\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"USERSEQUENCE \"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"투입일자\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:INPUTDATE\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"S/O번호\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTIONORDERID \"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"납기일\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"DUEDATE \"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" text=\"bind:DUEDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목유형구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"작업장\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"AREA \"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"고객명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"CUSTOMERNAME \"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"단위\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"UNIT\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" text=\"bind:UNIT\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"라우팅 ID\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PROCESSDEFID\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" text=\"bind:PROCESSDEFID\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PANELQTY\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" text=\"bind:PNLQTY\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"수량(PCS)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PCSQTY \"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"MM\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"MM\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" text=\"bind:MM\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"설명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"DESCRIPTION \"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" text=\"bind:DESCRIPTION\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdRouting","0","211","460",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Routing");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"공정 코드\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PLANTID\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_detail","0","137","460","40",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staVERSION","0","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("INNERREVISION");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_VERSION","staVERSION:17","10","165","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_RevChange","cbo_VERSION:5","10","80","21",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("Rev. 변경");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("INNERREVISIONCHANGE");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staRoutingTitle","0","177","89","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Routing");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Routing","staRoutingTitle:10","177","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdRouting","431","182","29","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_Routing","405","182","26","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Routing","379","182","26","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tabControl","grdRouting:10","137",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgResource",this.div_work.form.tabControl);
            obj.set_text("자원");
            this.div_work.form.tabControl.addChild(obj.name, obj);

            obj = new Grid("grdResource","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabControl.tpgResource.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Resource");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"170\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정 코드\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"자원 코드\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"설비그룹 명\"/><Cell col=\"7\" text=\"주작업여부\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"CREATOR\"/><Cell col=\"9\" text=\"MODIFIER\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:RESOURCEID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:EQUIPMENTCLASSNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:ISPRIMARYRESOURCE\" combocodecol=\"C,YesNo,SEL,Y,Y\" edittype=\"combo\" displaytype=\"combotext\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:CREATOR\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgResource.addChild(obj.name, obj);

            obj = new Static("StaticTitle","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgResource.form);
            obj.set_taborder("1");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tabControl.tpgResource.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Resource",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tabControl.tpgResource.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tabControl.tpgResource.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_Resource",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tabControl.tpgResource.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tabControl.tpgResource.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdResource",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabControl.tpgResource.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabControl.tpgResource.addChild(obj.name, obj);

            obj = new Tabpage("tpgMaterial",this.div_work.form.tabControl);
            obj.set_text("자재");
            this.div_work.form.tabControl.addChild(obj.name, obj);

            obj = new Static("StaticTitle","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgMaterial.form);
            obj.set_taborder("0");
            obj.set_text("자재");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tabControl.tpgMaterial.addChild(obj.name, obj);

            obj = new Grid("grdMaterial","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabControl.tpgMaterial.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Material");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"111\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"85\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정 코드\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"자재품목코드\" tooltiptext=\"MATERIALDEFID\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"6\" text=\"자재명\" tooltiptext=\"MATERIALNAME\"/><Cell col=\"7\" text=\"수량\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"단위\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"공급유형\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:MATERIALDEFID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:MATERIALDEFVERSION\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:QTY\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" edittype=\"mask\" maskeditformat=\"#,##0.################\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:UNIT\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" combocodecol=\"C,Segment,SEL,Y,Y\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"9\" text=\"bind:WIPSUPPLYTYPE\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,WipSupplyType,SEL,Y,Y\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgMaterial.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Material",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tabControl.tpgMaterial.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tabControl.tpgMaterial.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_Material",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tabControl.tpgMaterial.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tabControl.tpgMaterial.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdMaterial",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabControl.tpgMaterial.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabControl.tpgMaterial.addChild(obj.name, obj);

            obj = new Tabpage("tpgDurable",this.div_work.form.tabControl);
            obj.set_text("치공구");
            this.div_work.form.tabControl.addChild(obj.name, obj);

            obj = new Grid("grdDurable","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Durable");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정 코드\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"ITEMCODE\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" text=\"치공구ID\"/><Cell col=\"8\" text=\"치공구명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:DURABLEDEFID\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\" cssclass=\"expr:PROCESSTYPE==&quot;PAST&quot;?&apos;cell_bg_gray&apos;:PROCESSTYPE==&quot;CURRENT&quot;?&apos;cell_bg_yellow&apos;:ISFINALTEST==&quot;Y&quot;?&apos;cell_bg_green&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Static("StaticTitle","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("1");
            obj.set_text("치공구");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_Durable",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Button("btnDelRow_ds_Durable",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdDurable",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemLOTID","div_work.form.div_search.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPROCESSDEFVERSION","div_work.form.div_detail.form.cbo_VERSION","value","ds_search","PROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM04800M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM04800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM04800M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM04800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Lot Routing
         * 파일명 		: PCM04800M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.4.26
         * AS-IS		: SampleRouting
         * 설  명		: 급한 생산 건이 몇개가 들어왔을 때 제품이 아닌
         * 					일부 Lot 만 Routing 을 설정해서 결제 없이 공정을 진행하기 위한 화면이다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.26	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
         this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
         this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
         this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.MAX_PATHSEQUENCE = 99999;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker(); //fn_callback 로 감.

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());

        	//this.fn_initCombo();
        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.GetLotInfo();
        };



        this.fn_searchValidate = function ()
        {
        	var component = this.div_work.form.div_search;
        	var strColIdList = "edt_LOTID";
        	var strColNmList = "LOTID";
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

        	var FirstChangedUserSeq = this.GetChangedMinSequence();
        	if(FirstChangedUserSeq != this.MAX_PATHSEQUENCE) this.SetChangeRowType(FirstChangedUserSeq); //userseq 가 FirstChangedUserSeq보다 크면 ds_RoutingCopy 에 copy

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,PROCESSSEGMENTID,FirstChangedUserSequence,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_LotInfo.getColumn(0, "LOTID"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTID", this.ds_LotInfo.getColumn(0, "PROCESSSEGMENTID"));
        	this.ds_temp.setColumn(0, "FirstChangedUserSequence", FirstChangedUserSeq);
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	var sSvcID 			= "saveLotRouting";  //SaveSampleRouting
        	var sController 	= "/pcm04800/saveLotRouting.do";
        	var sInDatasets 	= "ds_temp=ds_temp ds_RoutingCopy=ds_RoutingCopy ds_Routing=ds_Routing ds_Resource=ds_Resource:A ds_Material=ds_Material:A ds_Durable=ds_Durable:A";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_saveValidate = function ()
        {
        	//공정 순서 확인
        	for(var i=0;i<this.ds_Routing.rowcount;i++){
        		var seq = this.ds_Routing.getColumn(i,"USERSEQUENCE");
        		var cnt = this.ds_Routing.getCaseCount( this.gfnFormat( "USERSEQUENCE == {0}",seq));
        		if(cnt > 1) {
        			this.gfn_Message("DuplicatedUsersequence", seq.toString(), "warning", "ok"); //중복된 공정순서를 등록할 수 없습니다. {0}
        			return false;
        		}
        	}

        	var component = this.div_work.form.grdRouting;
        	var strColIdList = "USERSEQUENCE,PROCESSSEGMENTID";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return false;

        	component = this.div_work.form.tabControl.tpgResource.form.grdResource;
        	strColIdList = "RESOURCEID,ISPRIMARYRESOURCE";
        	rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return false;

        	component = this.div_work.form.tabControl.tpgMaterial.form.grdMaterial;
        	strColIdList = "MATERIALDEFID,QTY,UNIT,WIPSUPPLYTYPE";
        	rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return false;

        	component = this.div_work.form.tabControl.tpgDurable.form.grdDurable;
        	strColIdList = "PRODUCTDEFID";
        	rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return false;

        	if(this.ds_Resource.rowcount != 0 ){
        		for(var i=0; i< this.ds_Routing.rowcount ;i++) {
        			if(this.ds_Resource.getColumn(i,"PROCESSSTATE") != "FUTURE") continue;
        			var segID = this.ds_Routing.getColumn(i,"PROCESSSEGMENTID");
        			if(this.ds_Resource.findRow("PROCESSSEGMENTID", segID) == -1) continue;
        			var cntPrimary = this.ds_Resource.getCaseCount("PROCESSSEGMENTID == '" + segID + "' && ISPRIMARYRESOURCE == 'Y' ");

        			if(cntPrimary == 0){
        				this.gfn_Message("NeedPrimaryJob", null, "warning", "ok"); //한 개의 자원은 주자원 선택해야 합니다.
        				return false;
        			}
        			if(cntPrimary > 1) {
        				this.gfn_Message("DuplicatePrimaryResource", null, "warning", "ok");//한개의 자원만 주자원 설정 가능 합니다.
        				return false;
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
        		this.gfn_Message("ProcessingError", trId + " " + errMsg, "error", "ok");
        		return;
        	}
        	{
        		switch(trId) {
        		case "selectLotInfoBylotID" :
        		{
        			if (this.ds_LotInfo.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};

        			if(this.ds_LotInfo.getColumn(0,"PRODUCTDEFID") == this.ds_LotInfo.getColumn(0,"PROCESSDEFID") ){
        				this.div_work.form.div_detail.form.cbo_VERSION.set_enable(false);
        				this.div_work.form.div_detail.form.btn_RevChange.set_enable(false);
        			} else {
        				this.div_work.form.div_detail.form.cbo_VERSION.set_enable(true);
        				this.div_work.form.div_detail.form.btn_RevChange.set_enable(false);
        			}
        			this.ds_search.setColumn(0,"PROCESSDEFVERSION", this.ds_LotInfo.getColumn(0,"PROCESSDEFVERSION"));
        			this.GetLotRouting();
        			break;
        		}
        		case "selectLotRouting" :
        		{
        			if(this.div_work.form.tabControl.tabindex == 0) this.GetResourceTab();
        			else if(this.div_work.form.tabControl.tabindex == 1) this.GetMaterialTab();
        			else this.GetDurableTab();
        			break;
        		}
        		case "saveLotRouting" :
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.GetLotInfo();
        			break;
        		}
        		case "saveChangeVersion" :
        		{
        			this.gfn_Message("SuccessChangeVersion", null, "info", "ok");
        			this.GetLotInfo();
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

        	if(sPopupId == "SEARCH_LOTID")
        	{
        		this.ds_search.setColumn(0,"LOTID",rtn[0]);
        		this.GetLotInfo();

        	} else if(sPopupId == "SEARCH_PROCESSSEGMENT")
        	{//"PROCESSSEGMENTID|PROCESSSEGMENTNAME";

        		var nRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        		var seq = this.ds_Routing.getColumn(nRow,"USERSEQUENCE");

        		this.ds_Routing.set_enableevent(false);

        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			if(this.ds_Routing.findRow("PROCESSSEGMENTID",colArray[0]) >= 0) {
        				var args = colArray[0] + ":" + colArray[1];
        				this.gfn_Message("ExistsDuplicateProcess", args, "warning", "ok"); //중복된 공정을 등록할 수 없습니다. {0}
        				return;
        			}
        		}

        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 ) this.ds_Routing.insertRow(nRow);
        			var colArray = rtn[i];
        			this.ds_Routing.setColumn(nRow, "USERSEQUENCE", seq);
        			this.ds_Routing.setColumn(nRow, "OLDUSERSEQUENCE", this.MAX_PATHSEQUENCE);
        			this.ds_Routing.setColumn(nRow, "PROCESSTYPE", "FUTURE");
        			this.ds_Routing.setColumn(nRow, "PROCESSSEGMENTID", colArray[0]);
        			this.ds_Routing.setColumn(nRow, "PROCESSSEGMENTNAME", colArray[1]);
        			this.ds_Routing.setColumn(nRow, "PROCESSSEGMENTVERSION", "*");
        			this.ds_Routing.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        			this.ds_Routing.setColumn(nRow, "PLANTID", this.gf_getSiteType());

        			nRow++;
        		}
        		this.ds_Routing.set_enableevent(true);
        	} else if(sPopupId == "SEARCH_RESOURCE")
        	{//RESOURCEID|RESOURCEVERSION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME
        		//Resource 중복 등록 체크
        		var nRow = this.ds_Resource.rowposition;
        		var procSegID = this.ds_Resource.getColumn(nRow, "PROCESSSEGMENTID");
        		if(this.ds_Resource.findRowExpr(this.gfnFormat( "PROCESSSEGMENTID == '{0}'  && RESOURCEID == '{1}'",procSegID,rtn[0])) >= 0) {

        			this.gfn_Message("DuplicatedResource", rtn[0], "warning", "ok"); //중복된 자원을 등록할 수 없습니다. {0}
        			return;
        		}

        		this.ds_Resource.set_enableevent(false);

        		this.ds_Resource.setColumn(nRow,"RESOURCEID",rtn[0]);
        		this.ds_Resource.setColumn(nRow,"RESOURCEVERSION",rtn[1]);
        		this.ds_Resource.setColumn(nRow,"AREAID",rtn[2]);
        		this.ds_Resource.setColumn(nRow,"AREANAME",rtn[3]);
        		this.ds_Resource.setColumn(nRow,"EQUIPMENTCLASSID",rtn[4]);
        		this.ds_Resource.setColumn(nRow,"EQUIPMENTCLASSNAME",rtn[5]);
        		this.ds_Resource.set_enableevent(true);
        	} else if(sPopupId == "SEARCH_MATERIAL")
        	{//"ITEMID|ITEMVERSION|ITEMNAME|UOMDEFID|UOMDEFNAME|MASTERDATACLASSID|CONSUMABLETYPE";
        		var nRow = this.ds_Material.rowposition;
        		var procSegID = this.ds_Resource.getColumn(nRow, "PROCESSSEGMENTID");
        		if(this.ds_Resource.findRowExpr(this.gfnFormat( "PROCESSSEGMENTID == '{0}'  && RESOURCEID == '{1}'",procSegID,rtn[0])) >= 0) {

        			this.gfn_Message("DuplicatedMaterial", rtn[0], "warning", "ok"); //중복된 자재를 등록할 수 없습니다. {0}
        			return;
        		}

        		this.ds_Material.set_enableevent(false);

        		var isRequired = rtn[0].substring(0,1) == "5" ? "Y" : "N" ; // 5번으로 시작하면 원자재임. ROUTING 화면 자재 등록과 똑같이 맞춤.

        		this.ds_Material.setColumn(nRow,"MATERIALDEFID",rtn[0]);
        		this.ds_Material.setColumn(nRow,"MATERIALDEFVERSION",rtn[1]);
        		this.ds_Material.setColumn(nRow,"MATERIALTYPE", rtn[5] == "SubAssembly" ? "Product" : "Consumable" ); //MASTERDATACLASSID
        		this.ds_Material.setColumn(nRow,"CONSUMABLEDEFNAME",rtn[2]);
        		this.ds_Material.setColumn(nRow,"UNIT",rtn[3]);
        		this.ds_Material.setColumn(nRow,"ISREQUIRED",isRequired);
        		this.ds_Material.set_enableevent(true);
        	} else if(sPopupId == "SEARCH_DURABLE")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|DURABLECLASSTYPE|DURABLEDEFID|DURABLEDEFNAME|DURABLEDEFVERSION|FILMUSELAYER1|FILMUSELAYER2|OPERATIONID
        		this.ds_Durable.set_enableevent(false);
        		var nRow = this.ds_Durable.rowcount == 1 ? 0 : this.ds_Durable.rowposition;

        		this.ds_Durable.setColumn(nRow, "PRODUCTDEFID", rtn[0]);
        		this.ds_Durable.setColumn(nRow, "PRODUCTDEFVERSION", rtn[1]);
        		this.ds_Durable.setColumn(nRow, "PRODUCTDEFNAME", rtn[2]);
        		this.ds_Durable.setColumn(nRow, "DURABLETYPE", rtn[3]);
        		this.ds_Durable.setColumn(nRow, "DURABLEDEFID", rtn[4]);
        		this.ds_Durable.setColumn(nRow, "DURABLEDEFNAME", rtn[5]);
        		this.ds_Durable.setColumn(nRow, "DURABLEDEFVERSION", rtn[6]);
        		this.ds_Durable.setColumn(nRow, "OPERATIONID", rtn[9]);

        		this.ds_Durable.set_enableevent(true);
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.GetLotInfo = function ()
        {
        	this.ds_LotInfo.clearData();
        	this.ds_cbo_ProdVersion.clearData();
        	this.ds_Routing.clearData();
        	this.ds_Resource.clearData();
        	this.ds_Material.clearData();
        	this.ds_Durable.clearData();

        	this.ds_Routing.set_loadkeymode( "reset" );

        	if(this.fn_searchValidate() == false) return;
        	this.ds_search.setColumn(0,"LOTID",this.div_work.form.div_search.form.edt_LOTID.value);

        	var sSvcID 			= "selectLotInfoBylotID";
        	var sController 	= "/pcm04800/selectLotInfoBylotID.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_LotInfo=ds_LotInfo ds_cbo_ProdVersion=ds_cbo_ProdVersion";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetLotRouting = function ()
        {
        	var sSvcID 			= "selectLotRouting";
        	var sController 	= "/pcm04800/selectLotRouting.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Routing=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetResourceTab = function ()
        {
        	var sSvcID 			= "selectLotRoutingResource";
        	var sController 	= "/pcm04800/selectLotRoutingResource.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Resource=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetMaterialTab = function ()
        {
        	var sSvcID 			= "selectLotRoutingMaterial";
        	var sController 	= "/pcm04800/selectLotRoutingMaterial.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Material=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetDurableTab = function ()
        {
        	var sSvcID 			= "selectLotRoutingDurable";
        	var sController 	= "/pcm04800/selectLotRoutingDurable.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Durable=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetChangedMinSequence = function(obj)
        {
        	if(this.ds_Routing.rowcount == 0 ) return this.MAX_PATHSEQUENCE;
        	var min = this.MAX_PATHSEQUENCE;
        	var dRow = this.ds_Routing.getDeletedRowset();

        	//삭제된 것 중 작은 값 찾기
        	for (var i = 0; i < dRow.length; i++)
        	{
        		var min_userSequence = dRow[i][this.ds_Resource.getColIndex("USERSEQUENCE")];
        		var min_oldUserSequence = dRow[i][this.ds_Resource.getColIndex("OLDUSERSEQUENCE")];
        		if(this.nfn_isNull(min_oldUserSequence)) min_oldUserSequence = this.MAX_PATHSEQUENCE;
        		var minSequence = min_userSequence < min_oldUserSequence ? min_userSequence: min_oldUserSequence;
        		if(min > minSequence) min = minSequence;
        	}

        	//삭제 안 된 것 중 작은 값 찾기
        	for(var i=0;i<this.ds_Routing.rowcount;i++){
        		if(this.ds_Routing.getRowType(i) != Dataset.ROWTYPE_NORMAL) {
        			var min_userSequence = this.ds_Routing.getColumn(0,"USERSEQUENCE");
        			var min_oldUserSequence = this.ds_Routing.getColumn(0,"OLDUSERSEQUENCE");
        			var minSequence = min_userSequence < min_oldUserSequence ? min_userSequence: min_oldUserSequence;
        			if(min > minSequence) min = minSequence;
        		}
        	}

        	return min;
        };


        //userseq 가 FirstChangedUserSeq보다 크면 ds_RoutingCopy 에 copy
        this.SetChangeRowType = function(FirstChangedUserSeq){

        	this.ds_RoutingCopy.clearData();

        	for(var i=0;i<this.ds_Routing.rowcount;i++){
        		var seq = this.ds_Routing.getColumn(i,"USERSEQUENCE");
        		if(seq >= FirstChangedUserSeq){
        			//this.ds_Routing.setRowType(i,Dataset.ROWTYPE_UPDATE); //실제로 저장할 때 강제로 바뀐 것들은 안 감
        			var nRow = this.ds_RoutingCopy.addRow();
        			this.ds_RoutingCopy.copyRow(nRow, this.ds_Routing, i);
        		}
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.div_work_div_search_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.div_work.form.div_search.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"BA");
        };

        this.div_work_div_search_edt_LOTID_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_search.setColumn(0,"LOTID",this.div_work.form.div_search.form.edt_LOTID.value);
        		this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"BA");
        	}
        };

        this.tab_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) this.GetResourceTab();
        	else if(e.postindex == 1) this.GetMaterialTab();
        	else this.GetDurableTab();
        };

        this.div_work_div_detail_cbo_VERSION_onitemchanged = function(obj,e)
        {
        	if(this.nfn_isNull(e.postvalue) ) return;

        	var nRow = this.ds_cbo_ProdVersion.findRow("PRODUCTDEFVERSIONCODE",e.postvalue);
        	if(this.pfn_allTrim(this.ds_cbo_ProdVersion.getColumn(nRow, "ROUTING_VERSION"))== "") //이 제품 Rev으로 생성된 Routing Rev 이 없으면.
        		this.div_work.form.div_detail.form.btn_RevChange.set_enable(true);
        	else this.div_work.form.div_detail.form.btn_RevChange.set_enable(false);

        	//this.GetLotRouting(); //새로 가져오는 것도 안함.
        };


        /// Routing 그리드 관련 이벤트 [S] =================================================================================

        this.div_work_btnAddRow_ds_Routing_onclick = function(obj,e)
        {

        	var cRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        	if(this.ds_Routing.getColumn(cRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantCurrSegentSeq", "", "warning", "ok"); //현재 공정보다 작은 공정수순으로 할당할 수 없습니다.
        		return;
        	}

        	this.ds_Routing.set_enableevent(false);
        	var userSequence = this.ds_Routing.getColumn(cRow,"USERSEQUENCE") + 5 ;
        	var nRow = this.ds_Routing.insertRow(cRow + 1);

        	this.ds_Routing.setColumn(nRow,"PLANTID", this.gf_getSiteType());
        	this.ds_Routing.setColumn(nRow,"USERSEQUENCE", userSequence);
        	this.ds_Routing.setColumn(nRow,"OLDUSERSEQUENCE",this.MAX_PATHSEQUENCE);
        	this.ds_Routing.setColumn(nRow,"PROCESSTYPE","FUTURE");

        	this.ds_Routing.set_enableevent(true);
        };


        this.div_work_btnDelRow_ds_Routing_onclick = function(obj,e)
        {
        	var nRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        	if(this.ds_Routing.getColumn(nRow, "PROCESSTYPE") != "FUTURE") {
        		this.gfn_Message("CantDeleteSeq", "", "warning", "ok"); //현재까지 작업된 공정은 삭제할 수 없습니다.
        		return;
        	}

        	this.ds_Routing.deleteRow(nRow);

        };


        this.ds_Routing_oncolumnchanged = function(obj,e)
        {
        	this.ds_Routing.set_keystring("S:USERSEQUENCE");

        };

        this.ds_Routing_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "USERSEQUENCE") {
        		//현재/과거 공정보다 같거나 작은 UserSequence 등록 불가.
        		var limitRow = this.ds_Routing.findRow("PROCESSTYPE","CURRENT");
        		var limitUserSeq = nexacro.toNumber(this.ds_Routing.getColumn(limitRow, "USERSEQUENCE"));
        		if(nexacro.toNumber(e.newvalue) <= limitUserSeq){

        			return false;
        		}



        	}
        };


        this.div_work_grdRouting_onexpanddown = function(obj,e)
        {
        	if (this.nfn_isEqualCol(obj, e.cell, "PROCESSSEGMENTID"))
        	{
        		var pProcSegID = this.pfn_allTrim(this.ds_Routing.getColumn(e.row,"PROCESSSEGMENTID"));
        		var pProcSegNM = this.pfn_allTrim(this.ds_Routing.getColumn(e.row,"PROCESSSEGMENTNAME"));

        		var popupId = "SEARCH_PROCESSSEGMENT";
        		var oArg = {};
        		oArg.arg_type = "C";
        		oArg.arg_popupCd = "P00111";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_paramCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME|VALIDSTATE|LANGUAGETYPE|ENTERPRISEID";
        		oArg.arg_paramValues = pProcSegID + "|" + pProcSegNM + "|" + "Valid" + "|" + this.gf_getLanguageType() + "|" + this.gf_getEnterpriseId();
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=600,height=600");

        	}

        };

        /// Routing 그리드 관련 이벤트 [E] =================================================================================


        /// Resource 그리드 관련 이벤트 [S] =================================================================================

        this.div_work_tabControl_tpgResource_btnAddRow_ds_Resource_onclick = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}

        	var mRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        	if(this.ds_Routing.getColumn(mRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantCurrSegentSeq", "", "warning", "ok"); //현재 공정보다 작은 공정수순으로 할당할 수 없습니다.
        		return;
        	}

        	this.ds_Resource.set_enableevent(false);

        	var seq = this.ds_Routing.getColumn(mRow, "USERSEQUENCE");
        	var cRow = this.ds_Resource.findRowExpr(this.gfnFormat( "USERSEQUENCE >= {0}",seq));
        	if(cRow == -1){
        		nRow = this.ds_Resource.insertRow(this.ds_Resource.rowcount);
        	} else {

        		if(this.ds_Resource.findRowExpr(this.gfnFormat( "USERSEQUENCE == {0} && PROCESSSEGMENTID == '{1}' ",seq,this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID"))) >= 0)
        			cRow = this.ds_Resource.findRowExpr(this.gfnFormat( "USERSEQUENCE == {0} && PROCESSSEGMENTID == '{1}' ",seq,this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID")));

        		nRow = this.ds_Resource.insertRow(cRow)
        	}
        	this.ds_Resource.setColumn(nRow,"ENTERPRISEID", this.ds_Routing.getColumn(mRow, "ENTERPRISEID"));
        	this.ds_Resource.setColumn(nRow,"PLANTID", this.ds_Routing.getColumn(mRow, "PLANTID"));
        	this.ds_Resource.setColumn(nRow,"USERSEQUENCE", this.ds_Routing.getColumn(mRow, "USERSEQUENCE"));
        	this.ds_Resource.setColumn(nRow,"PROCESSSEGMENTID", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID"));
        	this.ds_Resource.setColumn(nRow,"PROCESSSEGMENTNAME", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTNAME"));
        	this.ds_Resource.setColumn(nRow,"PROCESSSEGMENTVERSION", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTVERSION"));
        	this.ds_Resource.setColumn(nRow,"PROCESSTYPE", this.ds_Routing.getColumn(mRow, "PROCESSTYPE"));
        	this.ds_Resource.setColumn(nRow,"ISFINALTEST", this.ds_Routing.getColumn(mRow, "ISFINALTEST"));
        	this.ds_Resource.setColumn(nRow,"ISPRIMARYRESOURCE", "N");

        	this.ds_Resource.set_enableevent(true);
        };

        this.div_work_tabControl_tpgResource_btnDelRow_ds_Resource_onclick = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}

        	//2020-03-06 강유라 현재공정중 인수/인수대시 생태에서는 삭제가능
        	var nRow = this.ds_Resource.rowcount == 1 ? 0 : this.ds_Resource.rowposition;
        	if(this.ds_Resource.getColumn(nRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantDeleteResourcePast", "", "warning", "ok"); //현재까지 작업된 공정 리소스는 삭제할 수 없습니다.
        		return;
        	}
        	var procState = this.ds_Resource.getColumn(nRow, "PROCESSSTATE");
        	if(this.ds_Resource.getColumn(nRow, "PROCESSTYPE") == "CURRENT" && procState != "Wait" && procState != "WaitForReceive" ) {
        		this.gfn_Message("CantDeleteResourcePast", "", "warning", "ok"); //현재까지 작업된 공정 리소스는 삭제할 수 없습니다.
        		return;
        	}
        	this.ds_Resource.deleteRow(nRow);

        };


        this.ds_Resource_cancolumnchange = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}
        };


        this.ds_Resource_oncolumnchanged = function(obj,e)
        {
        	this.ds_Resource.set_keystring("S:USERSEQUENCE,S:PROCESSSEGMENTID");
        	if(e.columnid == "ISPRIMARYRESOURCE" && e.newvalue == "Y")
        	{
        		this.ds_Resource.set_enableevent(false);
        		var segID = this.ds_Resource.getColumn(e.row, "PROCESSSEGMENTID");
        		var nRow = this.ds_Resource.findRowExpr(this.gfnFormat( "rowidx != {0} && PROCESSSEGMENTID == '{1}' ", e.row, segID));
        		this.ds_Resource.setColumn(nRow, "ISPRIMARYRESOURCE","N");

        		this.ds_Resource.set_enableevent(true);
        	}
        };


        this.div_work_tabControl_tpgResource_grdResource_onexpanddown = function(obj,e)
        {
        	if (this.nfn_isEqualCol(obj, e.cell, "RESOURCEID"))
        	{
        		var pProcSegID = this.pfn_allTrim(this.ds_Resource.getColumn(e.row,"PROCESSSEGMENTID"));

        		var popupId = "SEARCH_RESOURCE";
        		var oArg = {};
        		oArg.arg_type = "D";
        		oArg.arg_popupCd = "P00261";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "RESOURCEID|RESOURCEVERSION|AREAID|AREANAME|EQUIPMENTCLASSID|EQUIPMENTCLASSNAME";
        		oArg.arg_paramCols = "PROCESSSEGMENTID|LANGUAGETYPE|ENTERPRISEID";
        		oArg.arg_paramValues = pProcSegID + "|" + this.gf_getLanguageType() + "|" + this.gf_getEnterpriseId();
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=700,height=600");

        	}
        };

        /// Resource 그리드 관련 이벤트 [E] =================================================================================



        /// Material 그리드 관련 이벤트 [S] =================================================================================

        this.div_work_tabControl_tpgMaterial_btnAddRow_ds_Material_onclick = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}

        	var mRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        	if(this.ds_Routing.getColumn(mRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantCurrSegentSeq", "", "warning", "ok"); //현재 공정보다 작은 공정수순으로 할당할 수 없습니다.
        		return;
        	}

        	this.ds_Material.set_enableevent(false);

        	var seq = this.ds_Routing.getColumn(mRow, "USERSEQUENCE");
        	var cRow = this.ds_Material.findRowExpr(this.gfnFormat( "USERSEQUENCE >= {0}",seq));
        	if(cRow == -1){
        		nRow = this.ds_Material.insertRow(this.ds_Material.rowcount);
        	} else {

        		if(this.ds_Material.findRowExpr(this.gfnFormat( "USERSEQUENCE == {0} && PROCESSSEGMENTID == '{1}' ",seq,this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID"))) >= 0)
        			cRow = this.ds_Material.findRowExpr(this.gfnFormat( "USERSEQUENCE == {0} && PROCESSSEGMENTID == '{1}' ",seq,this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID")));

        		nRow = this.ds_Material.insertRow(cRow)
        	}

        	this.ds_Material.setColumn(nRow,"ENTERPRISEID", this.ds_Routing.getColumn(mRow, "ENTERPRISEID"));
        	this.ds_Material.setColumn(nRow,"PLANTID", this.ds_Routing.getColumn(mRow, "PLANTID"));
        	this.ds_Material.setColumn(nRow,"USERSEQUENCE", this.ds_Routing.getColumn(mRow, "USERSEQUENCE"));
        	this.ds_Material.setColumn(nRow,"PROCESSSEGMENTID", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID"));
        	this.ds_Material.setColumn(nRow,"PROCESSSEGMENTNAME", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTNAME"));
        	this.ds_Material.setColumn(nRow,"PROCESSSEGMENTVERSION", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTVERSION"));
        	this.ds_Material.setColumn(nRow,"PROCESSTYPE", this.ds_Routing.getColumn(mRow, "PROCESSTYPE"));
        	this.ds_Material.setColumn(nRow,"UNIT","");
        	this.ds_Material.setColumn(nRow,"WIPSUPPLYTYPE","");

        	this.ds_Material.set_enableevent(true);
        };

        this.div_work_tabControl_tpgMaterial_btnDelRow_ds_Material_onclick = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}

        	//2020-03-06 강유라 현재공정중 인수/인수대시 생태에서는 삭제가능
        	var nRow = this.ds_Material.rowcount == 1 ? 0 : this.ds_Material.rowposition;
        	if(this.ds_Material.getColumn(nRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantDeleteMaterialPast", "", "warning", "ok"); //현재까지 작업된 공정 자재는 삭제할 수 없습니다.
        		return;
        	}
        	var procState = this.ds_Material.getColumn(nRow, "PROCESSSTATE");
        	if(this.ds_Material.getColumn(nRow, "PROCESSTYPE") == "CURRENT" && procState != "Wait" && procState != "WaitForReceive" ) {
        		this.gfn_Message("CantDeleteMaterialPast", "", "warning", "ok"); //현재까지 작업된 공정 자재는 삭제할 수 없습니다.
        		return;
        	}
        	this.ds_Material.deleteRow(nRow);

        };

        this.ds_Material_cancolumnchange = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}
        };


        this.ds_Material_oncolumnchanged = function(obj,e)
        {
        	this.ds_Material.set_keystring("S:USERSEQUENCE,S:PROCESSSEGMENTID");
        };


        this.div_work_tabControl_tpgMaterial_grdMaterial_onexpanddown = function(obj,e)
        {
        	if (this.nfn_isEqualCol(obj, e.cell, "MATERIALDEFID"))
        	{
        		var pProcSegID = this.pfn_allTrim(this.ds_Material.getColumn(e.row,"PROCESSSEGMENTID"));

        		var popupId = "SEARCH_MATERIAL";
        		var oArg = {};
        		oArg.arg_type = "D";
        		oArg.arg_popupCd = "P00263";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "ITEMID|ITEMVERSION|ITEMNAME|UOMDEFID|UOMDEFNAME|MASTERDATACLASSID|CONSUMABLETYPE";
        		oArg.arg_paramCols = "";
        		oArg.arg_paramValues = "";
        		oArg.arg_searchStr = "";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=700,height=600");

        	}
        };

        /// Material 그리드 관련 이벤트 [E] =================================================================================

        /// Durable 그리드 관련 이벤트 [S] =================================================================================


        this.div_work_tabControl_tpgDurable_btnAddRow_ds_Durable_onclick = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}

        	var mRow = this.ds_Routing.rowcount == 1 ? 0 : this.ds_Routing.rowposition;
        	if(this.ds_Routing.getColumn(mRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantCurrSegentSeq", "", "warning", "ok"); //현재 공정보다 작은 공정수순으로 할당할 수 없습니다.
        		return;
        	}

        	this.ds_Durable.set_enableevent(false);

        	var seq = this.ds_Routing.getColumn(mRow, "USERSEQUENCE");
        	var cRow = this.ds_Durable.findRowExpr(this.gfnFormat( "USERSEQUENCE >= {0}",seq));
        	if(cRow == -1){
        		nRow = this.ds_Durable.insertRow(this.ds_Durable.rowcount);
        	} else {

        		if(this.ds_Durable.findRowExpr(this.gfnFormat( "USERSEQUENCE == {0} && PROCESSSEGMENTID == '{1}' ",seq,this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID"))) >= 0)
        			cRow = this.ds_Durable.findRowExpr(this.gfnFormat( "USERSEQUENCE == {0} && PROCESSSEGMENTID == '{1}' ",seq,this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID")));

        		nRow = this.ds_Durable.insertRow(cRow)
        	}
        	this.ds_Durable.setColumn(nRow,"ENTERPRISEID", this.ds_Routing.getColumn(mRow, "ENTERPRISEID"));
        	this.ds_Durable.setColumn(nRow,"PLANTID", this.ds_Routing.getColumn(mRow, "PLANTID"));
        	this.ds_Durable.setColumn(nRow,"USERSEQUENCE", this.ds_Routing.getColumn(mRow, "USERSEQUENCE"));
        	this.ds_Durable.setColumn(nRow,"PROCESSSEGMENTID", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTID"));
        	this.ds_Durable.setColumn(nRow,"PROCESSSEGMENTNAME", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTNAME"));
        	this.ds_Durable.setColumn(nRow,"PROCESSSEGMENTVERSION", this.ds_Routing.getColumn(mRow, "PROCESSSEGMENTVERSION"));
        	this.ds_Durable.setColumn(nRow,"PROCESSTYPE", this.ds_Routing.getColumn(mRow, "PROCESSTYPE"));

        	this.ds_Durable.set_enableevent(true);
        };

        this.div_work_tabControl_tpgDurable_btnDelRow_ds_Durable_onclick = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}

        	//2020-03-06 강유라 현재공정중 인수/인수대시 생태에서는 삭제가능
        	var nRow = this.ds_Durable.rowcount == 1 ? 0 : this.ds_Durable.rowposition;
        	if(this.ds_Durable.getColumn(nRow, "PROCESSTYPE") == "PAST") {
        		this.gfn_Message("CantDeleteDurablePast", "", "warning", "ok"); //현재까지 작업된 공정 치공구는 삭제할 수 없습니다.
        		return;
        	}
        	var procState = this.ds_Durable.getColumn(nRow, "PROCESSSTATE");
        	if(this.ds_Durable.getColumn(nRow, "PROCESSTYPE") == "CURRENT" && procState != "Wait" && procState != "WaitForReceive" ) {
        		this.gfn_Message("CantDeleteDurablePast", "", "warning", "ok"); //현재까지 작업된 공정 치공구는 삭제할 수 없습니다.
        		return;
        	}
        	this.ds_Durable.deleteRow(nRow);
        };


        this.ds_Durable_cancolumnchange = function(obj,e)
        {
        	if(this.ds_Routing.findRowExpr("this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT") > -1)
        	{
        		this.gfn_Message("NeedToSaveNewRouting", "", "warning", "ok"); //새로 추가된 라우팅을 먼저 등록 해주세요.
        		return false;
        	}
        };

        this.ds_Durable_oncolumnchanged = function(obj,e)
        {
        	this.ds_Durable.set_keystring("S:USERSEQUENCE,S:PROCESSSEGMENTID");
        };


        this.div_work_tabControl_tpgDurable_grdDurable_onexpanddown = function(obj,e)
        {
        	if (this.nfn_isEqualCol(obj, e.cell, "PRODUCTDEFID"))
        	{
        		var toolCode = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"DURABLEDEFID"));
        		var toolName = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"DURABLEDEFNAME"));
        		var ProdDefID = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"PRODUCTDEFID"));
        		var ProdDefVer = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"PRODUCTDEFVERSION"));
        		var ProdDefName = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"PRODUCTDEFNAME"));
        		var plantID = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"PLANTID"));
        		var operationID = this.pfn_allTrim(this.ds_Durable.getColumn(e.row,"PROCESSSEGMENTID"));


        		var popupId = "SEARCH_DURABLE";
        		var oArg = {};
        		oArg.arg_type = "D";
        		oArg.arg_popupCd = "P00265";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|DURABLECLASSTYPE|DURABLEDEFID|DURABLEDEFNAME|DURABLEDEFVERSION|FILMUSELAYER1|FILMUSELAYER2|OPERATIONID";
        		oArg.arg_paramCols = "ITEMID|ITEMVERSION|ITEMNAME|DURABLEDEFID|DURABLEDEFNAME|PLANTID|OPERATIONID|LANGUAGETYPE|ENTERPRISEID";
        		oArg.arg_paramValues = ProdDefID + "|" + ProdDefVer + "|" + ProdDefName + "|" + toolCode + "|" + toolName + "|" + plantID + "|" + operationID + "|" + this.gf_getLanguageType() + "|" + this.gf_getEnterpriseId();
        		oArg.arg_searchStr = "DURABLECLASSID=M";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        	}
        };

        /// Durable 그리드 관련 이벤트 [E] =================================================================================




        this.div_work_btn_splitComplete_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_Routing) || this.gfn_dsIsUpdated(this.ds_Resource)
        		|| this.gfn_dsIsUpdated(this.ds_Material) || this.gfn_dsIsUpdated(this.ds_Durable)){

        		this.gfn_Message("CantWhileEditing", null, "warning", "ok");//편집중에는 Rev. 변경이 불가능 합니다.
        		return;
        	}


        	var processVer = this.ds_LotInfo.getColumn(0,"PROCESSDEFVERSION");
        	var rcProcessVer = this.div_work.form.div_detail.form.cbo_VERSION.value;

        	var pVer = nexacro.toNumber(processVer.replace("FA",""));
        	var rVer = nexacro.toNumber(rcProcessVer.replace("FA",""));

        	if(pVer >= rVer) {
        		this.gfn_Message("CantChangeRev", null, "warning", "ok");//변경이 불가능한 Rev. 입니다.
        		return;
        	}

        	this.ds_temp.clear();
        	this.ds_temp.copyData(this.ds_LotInfo);
        	this.ds_temp.addColumn("RCPROCESSDEFVERSION");
        	this.ds_temp.setColumn(0,"RCPROCESSDEFVERSION", rcProcessVer);

        	trace(this.ds_temp.saveXML());

        	var sSvcID 			= "saveChangeVersion";
        	var sController 	= "/pcm04800/saveChangeVersion.do";
        	var sInDatasets 	= "ds_temp=ds_temp";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.btn_reset.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.div_search.form.edt_LOTID.addEventHandler("onkeydown",this.div_work_div_search_edt_LOTID_onkeydown,this);
            this.div_work.form.div_search.form.btn_LOTID.addEventHandler("onclick",this.div_work_div_search_btn_LOTID_onclick,this);
            this.div_work.form.grdRouting.addEventHandler("onexpanddown",this.div_work_grdRouting_onexpanddown,this);
            this.div_work.form.div_detail.form.cbo_VERSION.addEventHandler("onitemchanged",this.div_work_div_detail_cbo_VERSION_onitemchanged,this);
            this.div_work.form.div_detail.form.btn_RevChange.addEventHandler("onclick",this.div_work_btn_splitComplete_onclick,this);
            this.div_work.form.btnDelRow_ds_Routing.addEventHandler("onclick",this.div_work_btnDelRow_ds_Routing_onclick,this);
            this.div_work.form.btnAddRow_ds_Routing.addEventHandler("onclick",this.div_work_btnAddRow_ds_Routing_onclick,this);
            this.div_work.form.tabControl.addEventHandler("onchanged",this.tab_onchanged,this);
            this.div_work.form.tabControl.tpgResource.form.grdResource.addEventHandler("onexpanddown",this.div_work_tabControl_tpgResource_grdResource_onexpanddown,this);
            this.div_work.form.tabControl.tpgResource.form.btnAddRow_ds_Resource.addEventHandler("onclick",this.div_work_tabControl_tpgResource_btnAddRow_ds_Resource_onclick,this);
            this.div_work.form.tabControl.tpgResource.form.btnDelRow_ds_Resource.addEventHandler("onclick",this.div_work_tabControl_tpgResource_btnDelRow_ds_Resource_onclick,this);
            this.div_work.form.tabControl.tpgMaterial.form.grdMaterial.addEventHandler("onexpanddown",this.div_work_tabControl_tpgMaterial_grdMaterial_onexpanddown,this);
            this.div_work.form.tabControl.tpgMaterial.form.btnAddRow_ds_Material.addEventHandler("onclick",this.div_work_tabControl_tpgMaterial_btnAddRow_ds_Material_onclick,this);
            this.div_work.form.tabControl.tpgMaterial.form.btnDelRow_ds_Material.addEventHandler("onclick",this.div_work_tabControl_tpgMaterial_btnDelRow_ds_Material_onclick,this);
            this.div_work.form.tabControl.tpgDurable.form.grdDurable.addEventHandler("onexpanddown",this.div_work_tabControl_tpgDurable_grdDurable_onexpanddown,this);
            this.div_work.form.tabControl.tpgDurable.form.btnAddRow_ds_Durable.addEventHandler("onclick",this.div_work_tabControl_tpgDurable_btnAddRow_ds_Durable_onclick,this);
            this.div_work.form.tabControl.tpgDurable.form.btnDelRow_ds_Durable.addEventHandler("onclick",this.div_work_tabControl_tpgDurable_btnDelRow_ds_Durable_onclick,this);
            this.ds_Routing.addEventHandler("onrowposchanged",this.ds_Routing_onrowposchanged,this);
            this.ds_Routing.addEventHandler("oncolumnchanged",this.ds_Routing_oncolumnchanged,this);
            this.ds_Routing.addEventHandler("cancolumnchange",this.ds_Routing_cancolumnchange,this);
            this.ds_Resource.addEventHandler("cancolumnchange",this.ds_Resource_cancolumnchange,this);
            this.ds_Resource.addEventHandler("oncolumnchanged",this.ds_Resource_oncolumnchanged,this);
            this.ds_Material.addEventHandler("cancolumnchange",this.ds_Material_cancolumnchange,this);
            this.ds_Material.addEventHandler("oncolumnchanged",this.ds_Material_oncolumnchanged,this);
            this.ds_Durable.addEventHandler("cancolumnchange",this.ds_Durable_cancolumnchange,this);
            this.ds_Durable.addEventHandler("oncolumnchanged",this.ds_Durable_oncolumnchanged,this);
            this.ds_RoutingCopy.addEventHandler("onrowposchanged",this.ds_Routing_onrowposchanged,this);
            this.ds_RoutingCopy.addEventHandler("oncolumnchanged",this.ds_Routing_oncolumnchanged,this);
            this.ds_RoutingCopy.addEventHandler("cancolumnchange",this.ds_Routing_cancolumnchange,this);
        };
        this.loadIncludeScript("PCM04800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
