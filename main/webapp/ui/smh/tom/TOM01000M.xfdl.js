(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM01000M");
            this.set_titletext("치공구 정보 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_head", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"AREAID\" size=\"256\" type=\"STRING\"/><Column id=\"AREANAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLESTATEID\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLESTATE\" size=\"256\" type=\"STRING\"/><Column id=\"ISHOLD\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLECLEANSTATEID\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLECLEANSTATE\" size=\"256\" type=\"STRING\"/><Column id=\"SUMMARY\" size=\"256\" type=\"STRING\"/><Column id=\"NETPNL\" size=\"256\" type=\"STRING\"/><Column id=\"USEDCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"CLEANLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALUSEDCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"USEDLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALCLEANCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALREPAIRCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"WEIGHT\" size=\"256\" type=\"STRING\"/><Column id=\"HORIZONTAL\" size=\"256\" type=\"STRING\"/><Column id=\"THEIGHT\" size=\"256\" type=\"STRING\"/><Column id=\"POLISHTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALPOLISHTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"ORIGINTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTHICKNESSLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"CREATEDTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"USEDFACTOR\" size=\"256\" type=\"STRING\"/><Column id=\"UPDATEREASON\" size=\"256\" type=\"STRING\"/><Column id=\"ORIGINISHOLD\" size=\"256\" type=\"STRING\"/><Column id=\"ORIGINDURABLESTATEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKINDID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKIND\" size=\"256\" type=\"STRING\"/><Column id=\"MSTCLEANLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"MSTUSEDLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMOVETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TOPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLESTATE\" size=\"256\" type=\"STRING\"/><Column id=\"UPDATEREASON\" size=\"256\" type=\"STRING\"/><Column id=\"DESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"UPDATEDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptSite","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_durableStatus","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_durableStatus","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_innerdataset("");
            obj.set_codecolumn("C,ToolDurableStatus,ALL,Y,Y");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"154","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","174","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","183","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","174","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isHold","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isHold","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_innerdataset("");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolNo","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("치공구 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolNo","108","135",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_sendSite2","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("출고Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_sendSiteId2","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_sendArea2","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("출고작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_sendArea2","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_sendArea2",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_toolMoveType2","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("이동구분");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_toolMoveType2","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ToolMoveType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_product","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"130","45","20","90",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search2","16","150","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","156","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_init","172","150","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_receiptSite2","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_text("입고Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_receiptSiteId2","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","250","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("title0","1","0","89","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("치공구 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_head","88","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","34",null,null,"2","210",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_head");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"104\"/><Column size=\"31\"/><Column size=\"175\"/><Column size=\"96\"/><Column size=\"115\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"83\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"78\"/><Column size=\"72\"/><Column size=\"82\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"118\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Tool 코드\"/><Cell col=\"1\" text=\"치공구 ID\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"치공구명\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"Ver.\"/><Cell col=\"7\" text=\"작업장\"/><Cell col=\"8\" text=\"Tool구분\"/><Cell col=\"9\" text=\"Tool형식\"/><Cell col=\"10\" text=\"Tool종류\"/><Cell col=\"11\" text=\"상태\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"보류여부\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"사용타수\"/><Cell col=\"14\" text=\"누적사용타수\"/><Cell col=\"15\" text=\"보증타수\" cssclass=\"cell_point\"/><Cell col=\"16\" text=\"연마기준타수\" cssclass=\"cell_point\"/><Cell col=\"17\" text=\"연마횟수\"/><Cell col=\"18\" text=\"수리횟수\"/><Cell col=\"19\" text=\"SCAL X\"/><Cell col=\"20\" text=\"SCAL Y\"/><Cell col=\"21\" text=\"합수\"/><Cell col=\"22\" text=\"PNL타수\" cssclass=\"cell_point\"/><Cell col=\"23\" text=\"제작처\" cssclass=\"cell\"/><Cell col=\"24\" text=\"변경사유\" cssclass=\"cell_point\"/><Cell col=\"25\" text=\"수정일\"/><Cell col=\"26\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:TOOLVERSION\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:DURABLESTATEID\" textAlign=\"left\" combocodecol=\"C,ToolDurableStatus,ALL,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"12\" text=\"bind:ISHOLD\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"13\" text=\"bind:USEDCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"16\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"17\" text=\"bind:TOTALCLEANCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:TOTALREPAIRCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:SCALEX\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:SCALEY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:SUMMARY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:HITCOUNT\" textAlign=\"right\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"23\" text=\"bind:MAKEVENDOR\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"24\" text=\"bind:UPDATEREASON\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"25\" text=\"bind:CREATEDATE\" textAlign=\"right\" displaytype=\"text\"/><Cell col=\"26\" text=\"bind:CREATENAME\" textAlign=\"center\" displaytype=\"text\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0_00","1","grd_head:6","79","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("처리 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_detail","title0_00:10","grd_head:6","85","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","title0_00:0",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"116\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"변경사유\"/><Cell col=\"2\" text=\"비고\"/><Cell col=\"3\" text=\"일시\"/></Band><Band id=\"body\"><Cell text=\"bind:DURABLESTATE\" combocodecol=\"C,ToolDurableStatus,ALL,Y,Y\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:UPDATEREASON\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:UPDATEDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_head",null,"6","29","24","7",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","6",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","37",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("치공구 정보 관리");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1290,750,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM01000M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM01000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.headerDiv = this.div_header.form; //저장영역
        this.detailDiv = this.div_work.form;

        this.areaId = ''; //작업장Id(조회조건)
        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : TAB1 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_head.clearData(); //첫번째 탭은 데이터 초기화 한다.

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	//품목코드명이 공백이면 품목코드Id 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //Site
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId, "")); //작업장Id
        	this.ds_search.setColumn(0, "DURABLESTATE", 			this.nfn_nvl(this.searchDiv.cbo_durableStatus.value, "")); //상태
        	this.ds_search.setColumn(0, "ISHOLD", 					this.nfn_nvl(this.searchDiv.cbo_isHold.value, "")); //보류여부
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목코드
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.searchDiv.edt_toolNo.value); //Tool코드
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolInformationListByToolList");

        	var sSvcID 			= "selectToolInformationListByToolList";
        	var sController 	= "/tom01000/selectToolInformationListByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_head=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_detailSearch = function (obj, e)
        {
        	this.ds_detail.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "TOOLNUMBER", 				this.nfn_nvl(this.ds_head.getColumn(this.ds_head.rowposition, "TOOLNUMBER"), ""));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolInformationReasonList");

        	var sSvcID 			= "selectToolInformationReasonList";
        	var sController 	= "/tom01000/selectToolInformationReasonList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_detail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_head)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//var component = this.gridDiv.grd_head;
        	//var strColIdList = "REPAIRRESULT";

        	/* 그리드 필수 입력 체크 */
        	//if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveInformationTool";
        	var sController 	= "/tom01000/saveInformationTool.do";
        	var sInDatasets 	= "INPUT=ds_head:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

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
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		case "selectToolInformationListByToolList": //그리드 [상단] CALLBACK
        			this.fn_detailSearch();
        			break;
        		case "selectToolInformationReasonList": //그리드 [하단] CALLBACK
        			break;
        		case "saveInformationTool": //저장 CALLBACK
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		default:
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
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

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv.edt_product.value;//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_AREA") //작업장
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];
        	}else if(sPopupId == "SCH_PRODUCT") //품목
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo(); //site
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        //[작업장]
        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        //[품목코드]
        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.div_work_grd_head_oncellclick = function(obj,e)
        {
        	//alert(this.ds_head.getColumn(this.ds_head.rowposition, "TOOLCODE"));
        	this.fn_detailSearch();
        };

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.areaId = ''; //작업장Id(조회조건)
        	this.productId = ''; //제품Id(조회조건)
        	this.productVer = ''; //제품Ver(조회조건)
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_head.clearData();
        	this.ds_detail.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_head.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_detail.set_text(strCnt);
        };

        this.div_work_grd_head_onkeyup = function(obj,e)
        {
        	this.fn_detailSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.tab_search.Tabpage1.form.cbo_durableStatus.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.cbo_isHold.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage2.form.cbo_sendSiteId2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage2.form.btn_sendArea2.addEventHandler("onclick",this.tab_search_Tabpage2_btn_sendArea2_onclick,this);
            this.tab_search.Tabpage2.form.cbo_toolMoveType2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage2.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage2.form.btn_search2.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_init.addEventHandler("onclick",this.tab_search_Tabpage1_btn_init_onclick,this);
            this.tab_search.Tabpage2.form.cbo_receiptSiteId2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.div_work.form.grd_head.addEventHandler("oncellclick",this.div_work_grd_head_oncellclick,this);
            this.div_work.form.grd_head.addEventHandler("onkeyup",this.div_work_grd_head_onkeyup,this);
            this.div_work.form.grd_detail.addEventHandler("oncloseup",this.div_work_grd_head_oncloseup,this);
            this.div_work.form.grd_detail.addEventHandler("onexpandup",this.div_work_grd_head_onexpandup,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("TOM01000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
