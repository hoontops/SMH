(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00700M");
            this.set_titletext("치공구 수리 입고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receiptRepairTool", this);
            obj._setContents("<ColumnInfo><Column id=\"RECEIPTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLREPAIRTYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLREPAIRTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"NEXTDURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNUMBER3\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTDURABLELOTID3\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"PREVTOOLVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDORID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTUSER\" size=\"256\" type=\"STRING\"/><Column id=\"POLISH\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRDESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYDETAILID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYDETAIL\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLDETAILID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLDETAIL\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receiptRepairToolDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RECEIPTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTUSER\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDORID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"NEXTDURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNUMBER3\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTDURABLELOTID3\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREA\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"WEIGHT\" size=\"256\" type=\"STRING\"/><Column id=\"HORIZONTAL\" size=\"256\" type=\"STRING\"/><Column id=\"VERTICAL\" size=\"256\" type=\"STRING\"/><Column id=\"THEIGHT\" size=\"256\" type=\"STRING\"/><Column id=\"POLISHTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALPOLISHTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"CREATEDTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"POLISH\" size=\"256\" type=\"STRING\"/><Column id=\"PREVTOOLVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRDESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"EDITABLEYN\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLREPAIRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRTRTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
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

            obj = new Static("sta_term","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("입고기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","110","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_manufactId","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("제작업체");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"205","45","20","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","225","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","231","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","225","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptor","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("입고자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiptor","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_receiptor",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","260","34",null,null,null,null,null,null,this);
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

            obj = new Static("title0","1","0","144","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("치공구 수리입고 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_receiptRepairTool","155","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","34",null,"49.79%","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_receiptRepairTool");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"55\"/><Column size=\"0\"/><Column size=\"59\"/><Column size=\"59\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"46\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"입고일\"/><Cell col=\"1\" text=\"입고순번\"/><Cell col=\"2\" text=\"수리구분---HIDDEN\"/><Cell col=\"3\" text=\"수리구분\"/><Cell col=\"4\" text=\"제작구분\"/><Cell col=\"5\" text=\"Tool번호---HIDDEN\"/><Cell col=\"6\" text=\"Tool 코드\"/><Cell col=\"7\" text=\"이전 Tool 코드\"/><Cell col=\"8\" text=\"Tool버전---HIDDEN\"/><Cell col=\"9\" text=\"이전Tool버전---HIDDEN\"/><Cell col=\"10\" text=\"Tool명칭---HIDDEN\"/><Cell col=\"11\" text=\"TOOL 구분\"/><Cell col=\"12\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"13\" text=\"TOOL 유형\"/><Cell col=\"14\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"15\" text=\"TOOL 종류\"/><Cell col=\"16\" text=\"품목코드\"/><Cell col=\"17\" text=\"품목 Rev.\"/><Cell col=\"18\" text=\"품목명\"/><Cell col=\"19\" text=\"Tool구분아이디---HIDDEN\"/><Cell col=\"20\" text=\"제작업체아이디---HIDDEN\"/><Cell col=\"21\" text=\"수리업체\"/><Cell col=\"22\" text=\"수리자내용---HIDDEN\"/><Cell col=\"23\" text=\"입고작업장아이디---HIDDEN\"/><Cell col=\"24\" text=\"입고작업장\"/><Cell col=\"25\" text=\"입고자아이디---HIDDEN\"/><Cell col=\"26\" text=\"입고자\"/></Band><Band id=\"body\"><Cell text=\"bind:RECEIPTDATE2\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TOOLREPAIRTYPEID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TOOLREPAIRTYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLMAKETYPE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:NEXTDURABLELOTID3\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLNUMBER3\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PREVTOOLVERSION\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:MAKEVENDORID\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:REPAIRDESCRIPTION\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:RECEIPTUSERID\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:RECEIPTUSER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","2","grd_head:0","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("수리입고 List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_receiptRepairToolDetail","title2:11","grd_head:0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","-1","title2:0",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_receiptRepairToolDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"118\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"61\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"55\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"87\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"28\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"입고일\"/><Cell col=\"2\" text=\"입고순번\"/><Cell col=\"3\" text=\"입고자\"/><Cell col=\"4\" text=\"입고자아이디---HIDDEN\"/><Cell col=\"5\" text=\"수리업체\"/><Cell col=\"6\" text=\"수리업체아이디---HIDDEN\"/><Cell col=\"7\" text=\"Tool번호---HIDDEN\"/><Cell col=\"8\" text=\"Tool 코드\"/><Cell col=\"9\" text=\"이전 Tool 코드\"/><Cell col=\"10\" text=\"Tool 구분\"/><Cell col=\"11\" text=\"Tool 형식\"/><Cell col=\"12\" text=\"Tool 종류\"/><Cell col=\"13\" text=\"품목코드\"/><Cell col=\"14\" text=\"품목 Rev.\"/><Cell col=\"15\" text=\"품목명\"/><Cell col=\"16\" text=\"EDITABLEYN\"/><Cell col=\"17\" text=\"연마여부\"/><Cell col=\"18\" text=\"수리 요청사항\"/><Cell col=\"19\" text=\"수리 결과\"/><Cell col=\"20\" text=\"입고작업장---HIDDEN\"/><Cell col=\"21\" text=\"입고작업장---HIDDEN\"/><Cell col=\"22\" text=\"입고작업장\"/><Cell col=\"23\" text=\"무게---HIDDEN\"/><Cell col=\"24\" text=\"가로---HIDDEN\"/><Cell col=\"25\" text=\"세로---HIDDEN\"/><Cell col=\"26\" text=\"높이---HIDDEN\"/><Cell col=\"27\" text=\"연마두께---HIDDEN\"/><Cell col=\"28\" text=\"누적연마두께---HIDDEN\"/><Cell col=\"29\" text=\"최초두께---HIDDEN\"/><Cell col=\"30\" text=\"출고일---HIDDEN\"/><Cell col=\"31\" text=\"출고순번---HIDDEN\"/><Cell col=\"32\" text=\"의뢰일자---HIDDEN\"/><Cell col=\"33\" text=\"의뢰순번---HIDDEN\"/><Cell col=\"34\" text=\"툴코드---HIDDEN\"/><Cell col=\"35\" text=\"툴버전---HIDDEN\"/><Cell col=\"36\" text=\"새로운툴버전---HIDDEN\"/><Cell col=\"37\" text=\"새로운툴버전---HIDDEN\"/><Cell col=\"38\" text=\"출고작업장\"/><Cell col=\"39\" text=\"출고일자\"/><Cell col=\"40\" text=\"출고순번\"/><Cell col=\"41\" text=\"의뢰일자\"/><Cell col=\"42\" text=\"의뢰순번\"/><Cell col=\"43\" text=\"수리구분\"/><Cell col=\"44\" text=\"TR\"/><Cell col=\"45\" text=\"ToolMakeType\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:RECEIPTDATE2\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RECEIPTUSERID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MAKEVENDORID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:NEXTDURABLELOTID3\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLNUMBER3\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:EDITABLEYN\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:POLISH\" textAlign=\"left\" edittype=\"expr:EDITABLEYN==&apos;Y&apos;?&apos;checkbox&apos;:&apos;none&apos;\" displaytype=\"checkboxcontrol\"/><Cell col=\"18\" text=\"bind:REPAIRDESCRIPTION\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:REPAIRRESULT\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:SENDAREAID\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:SENDAREA\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:WEIGHT\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:HORIZONTAL\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:VERTICAL\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:THEIGHT\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:POLISHTHICKNESS\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:TOTALPOLISHTHICKNESS\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:CREATEDTHICKNESS\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:SENDDATE\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:SENDSEQUENCE\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:REQUESTDATE\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"35\" text=\"bind:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"36\" text=\"bind:PREVTOOLVERSION\" textAlign=\"left\"/><Cell col=\"37\" text=\"bind:TOOLREPAIRTYPEID\" textAlign=\"left\"/><Cell col=\"38\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"39\" text=\"bind:SENDDATE\" textAlign=\"left\"/><Cell col=\"40\" text=\"bind:SENDSEQUENCE\" textAlign=\"left\"/><Cell col=\"41\" text=\"bind:REQUESTDATE\" textAlign=\"left\"/><Cell col=\"42\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"left\"/><Cell col=\"43\" text=\"bind:TOOLREPAIRTYPE\" textAlign=\"left\"/><Cell col=\"44\" text=\"bind:REPAIRTRTYPE\" textAlign=\"left\"/><Cell col=\"45\" text=\"bind:TOOLMAKETYPE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset2",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","96",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("치공구 수리 입고");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_toolSelect",null,"16","72","24","btn_save:3",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("Tool선택");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1290,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00700M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00700M.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.tabDiv = this.div_work.form;
        this.headerDiv = this.div_header.form; //저장영역

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.areaId = ''; //작업장Id(조회조건)
        this.vendorId = ''; //제작업체Id(조회조건)
        this.receiptorId = ''; //입고자Id(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        //설명,직책 빠져 있슴.(조회조건)

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
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_receiptRepairTool.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_receiptRepairToolDetail.clearData();

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	//제작업체명이 공백이면 제작처Id 공백 처리
        	if(this.searchDiv.edt_vendor.value=='') {
        		this.vendorId = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//입고자명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_receiptor.value=='') {
        		this.receiptorId = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.nfn_nvl(this.searchDiv.edt_toolCode.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "RECEIPTUSERID", 			this.nfn_nvl(this.receiptorId, "")); //입고자Id
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId, "")); //작업장Id
        	this.ds_search.setColumn(0, "VENDORID", 				this.nfn_nvl(this.vendorId, "")); //제작업체Id
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODFR",	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODTO",	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectReceiptToolRepairListForReceiptByToolList");

        	var sSvcID 			= "selectReceiptToolRepairListForReceiptByToolList";
        	var sController 	= "/tom00700/selectReceiptToolRepairListForReceiptByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_receiptRepairTool=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.fn_btnControl();
        };

        /*
         * 기능 : 검색 (하단 조회)
         */
        this.fn_detailSearch = function ()
        {
        	this.ds_receiptRepairToolDetail.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "RECEIPTDATE", 				this.nfn_nvl(this.ds_receiptRepairTool.getColumn(this.ds_receiptRepairTool.rowposition, "RECEIPTDATE")));
        	this.ds_search.setColumn(0, "RECEIPTSEQUENCE", 			this.nfn_nvl(this.ds_receiptRepairTool.getColumn(this.ds_receiptRepairTool.rowposition, "RECEIPTSEQUENCE")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectRepairToolResultLotListForReceiptByToolList");

        	var sSvcID 			= "selectRepairToolResultLotListForReceiptByToolList";
        	var sController 	= "/tom00700/selectRepairToolResultLotListForReceiptByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_receiptRepairToolDetail=output";
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
        	if(!this.gfn_dsIsUpdated(this.ds_receiptRepairToolDetail)){ //변경데이터 확인
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
        	var sSvcID 			= "saveToolRepairReceipt";
        	var sController 	= "/tom00700/saveToolRepairReceipt.do";
        	var sInDatasets 	= "INPUT=ds_receiptRepairToolDetail:U";
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
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectReceiptToolRepairListForReceiptByToolList": //[상단]그리드 CALLBACK
        			this.fn_btnControl();
        			if (this.ds_receiptRepairTool.rowcount > 0)
        			{
        				this.fn_detailSearch();
        			}
        			break;
        		case "selectRepairToolResultLotListForReceiptByToolList":
        			break;
        		case "saveToolRepairReceipt":
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

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv.edt_product.value;//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.searchDiv.edt_vendor.value;//조회조건의 협력업체
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
        	}else if(popId=="P00194"){ //입고자 조회
        		oArg.arg_searchStr = "USERNAME="+this.searchDiv.edt_receiptor.value;
        		oArg.arg_rtnCols = "USERID|USERNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	} else if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];
        	}else if(sPopupId == "SCH_VENDOR")
        	{
        		this.searchDiv.edt_vendor.set_value(rtn[1]);
        		this.vendorId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_USERS")
        	{
        		this.searchDiv.edt_receiptor.set_value(rtn[1]);
        		this.receiptorId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_TOOLSELECT_POP")
        	{
        		//팝업에서 선택건 지정하면, 현재 아래 그리드를 비운다.(2021-06-17)
        		this.ds_receiptRepairToolDetail.clearData(); //tool선택 입력을 위해 데이터를 비운다.

        		var count = 0;
        		for(var i=0; i<rtn.length; i++){
        			var colArray 			= rtn[i];
        			//alert('값::'+rtn[i]);

        			var RECEIPTDATE			= this.nfn_nvl(colArray[0], "");
        			var RECEIPTSEQUENCE		= this.nfn_nvl(colArray[1], "");
        			var RECEIPTUSER 		= this.nfn_nvl(colArray[2], "");
        			var RECEIPTUSERID 		= this.nfn_nvl(colArray[3], "");
        			var REPAIRVENDOR 		= this.nfn_nvl(colArray[4], "");

        			var REPAIRVENDORID 		= this.nfn_nvl(colArray[5], "");
        			var TOOLNUMBER 			= this.nfn_nvl(colArray[6], "");
        			var TOOLNAME			= this.nfn_nvl(colArray[7], "");
        			var PRODUCTDEFID		= this.nfn_nvl(colArray[8], "");
        			var PRODUCTDEFNAME		= this.nfn_nvl(colArray[9], "");

        			var TOOLVERSION			= this.nfn_nvl(colArray[10], "");
        			var RECEIPTAREAID		= this.nfn_nvl(colArray[11], "");
        			var RECEIPTAREA			= this.nfn_nvl(colArray[12], "");
        			var SENDAREAID			= this.nfn_nvl(colArray[13], "");
        			var SENDAREA			= this.nfn_nvl(colArray[14], "");

        			var REPAIRFINISHDATE	= this.nfn_nvl(colArray[15], "");
        			var FINISHERID			= this.nfn_nvl(colArray[16], "");
        			var FINISHER			= this.nfn_nvl(colArray[17], "");
        			var HORIZONTAL			= this.nfn_nvl(colArray[18], "");
        			var VERTICAL			= this.nfn_nvl(colArray[19], "");

        			var WEIGHT				= this.nfn_nvl(colArray[20], "");
        			var THEIGHT				= this.nfn_nvl(colArray[21], "");
        			var POLISHTHICKNESS		= this.nfn_nvl(colArray[22], "");
        			var PREVTOTALPOLISHTHICKNESS= this.nfn_nvl(colArray[23], "");
        			var TOTALPOLISHTHICKNESS= this.nfn_nvl(colArray[24], "");

        			var CREATEDTHICKNESS	= this.nfn_nvl(colArray[25], "");
        			var REQUESTDATE			= this.nfn_nvl(colArray[26], "");
        			var REQUESTSEQUENCE		= this.nfn_nvl(colArray[27], "");
        			var SENDDATE			= this.nfn_nvl(colArray[28], "");
        			var SENDSEQUENCE		= this.nfn_nvl(colArray[29], "");

        			var TOOLCODE			= this.nfn_nvl(colArray[30], "");
        			var POLISH				= this.nfn_nvl(colArray[31], "");
        			var PREVTOOLVERSION		= this.nfn_nvl(colArray[32], "");
        			var TOOLREPAIRTYPEID	= this.nfn_nvl(colArray[33], "");
        			var MAKEVENDORID		= this.nfn_nvl(colArray[34], "");

        			var MAKEVENDOR			= this.nfn_nvl(colArray[35], "");
        			var REPAIRDESCRIPTION	= this.nfn_nvl(colArray[36], "");
        			var TOOLFORMCODE		= this.nfn_nvl(colArray[37], "");
        			var TOOLFORM			= this.nfn_nvl(colArray[38], "");
        			var TOOLTYPEID			= this.nfn_nvl(colArray[39], "");

        			var TOOLTYPE			= this.nfn_nvl(colArray[40], "");
        			var TOOLKINDID			= this.nfn_nvl(colArray[41], "");
        			var TOOLKIND			= this.nfn_nvl(colArray[42], "");
        			var CHK					= this.nfn_nvl(colArray[43], "");

        			var USERID				= this.nfn_nvl(colArray[44], "");
        			var USERNAME			= this.nfn_nvl(colArray[45], "");
        			var PRODUCTDEFVERSION	= this.nfn_nvl(colArray[46], "");

        			var DURABLEDEFID		= this.nfn_nvl(colArray[47], ""); //20210415/PHW/APPENDED
        			var DURABLEDEFVERSION	= this.nfn_nvl(colArray[48], ""); //20210415/PHW/APPENDED

        			var REPAIRRESULT		= this.nfn_nvl(colArray[49], "");

        			var NEXTDURABLELOTID	= this.nfn_nvl(colArray[50], ""); //2021-06-09 / 수정의경우 NEXTDURABLELOTID 를 받아서 아래 그리드에 보여 준다.
        			var TOOLMAKETYPE		= this.nfn_nvl(colArray[51], ""); //2021-06-10 / 제작구분
        			var TOOLNUMBER3			= this.nfn_nvl(colArray[52], ""); //2021-06-17 / 툴코드통합
        			var NEXTDURABLELOTID3	= this.nfn_nvl(colArray[53], ""); //2021-06-18 / 툴코드통합

        			var REPAIRTRTYPE		= this.nfn_nvl(colArray[54], ""); //2021-06-29 / 1:수정출고,2:수리출고



        			//alert(REPAIRRESULT);

        			//alert("LN1 :: "+RECEIPTDATE+'/'+RECEIPTSEQUENCE+'/'+RECEIPTUSER+'/'+RECEIPTUSERID+'/'+REPAIRVENDOR+'/'+REPAIRVENDORID+'/'+TOOLNUMBER+'/'+TOOLNAME+'/'+PRODUCTDEFID+'/'+PRODUCTDEFNAME);
        			//alert("LN2 :: "+TOOLVERSION+'/'+RECEIPTAREAID+'/'+RECEIPTAREA+'/'+SENDAREAID+'/'+SENDAREA+'/'+REPAIRFINISHDATE+'/'+FINISHERID+'/'+FINISHER+'/'+HORIZONTAL+'/'+VERTICAL);
        			//alert("LN3 :: "+WEIGHT+'/'+THEIGHT+'/'+POLISHTHICKNESS+'/'+PREVTOTALPOLISHTHICKNESS+'/'+TOTALPOLISHTHICKNESS+'/'+CREATEDTHICKNESS+'/'+REQUESTDATE+'/'+REQUESTSEQUENCE+'/'+SENDDATE+'/'+SENDSEQUENCE);
        			//alert("LN4 :: "+TOOLCODE+'/'+POLISH+'/'+PREVTOOLVERSION+'/'+TOOLREPAIRTYPEID+'/'+MAKEVENDORID+'/'+MAKEVENDOR+'/'+REPAIRDESCRIPTION+'/'+TOOLFORMCODE+'/'+TOOLFORM+'/'+TOOLTYPEID);
        			//alert("LN5 :: "+TOOLTYPE+'/'+TOOLKINDID+'/'+TOOLKIND+'/'+CHK+'/'+USERID+'/'+USERNAME+'/'+PRODUCTDEFVERSION);
        			//alert(DURABLEDEFID+'/'+DURABLEDEFVERSION);
        			count = this.ds_receiptRepairToolDetail.getCaseCount("TOOLNUMBER=='" + TOOLNUMBER + "'"); //하단 리스트에 추가하려는 TOOL코드가 존재하는지 체크 한다.
        			if(count==0)
        			{
        				var npos = this.ds_receiptRepairToolDetail.addRow();
        				this.ds_receiptRepairToolDetail.setColumn(npos, "RECEIPTDATE", 			this.tomfn_getCurrentlyDate("YYYY-MM-DD")); //입력시점
        				this.ds_receiptRepairToolDetail.setColumn(npos, "RECEIPTSEQUENCE",		"");
        				this.ds_receiptRepairToolDetail.setColumn(npos, "RECEIPTUSERID", 		USERID);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "RECEIPTUSER",			USERNAME);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "MAKEVENDORID",			MAKEVENDORID); //제작 업체

        				this.ds_receiptRepairToolDetail.setColumn(npos, "MAKEVENDOR", 			MAKEVENDOR);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLNUMBER", 			TOOLNUMBER);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLNAME", 			TOOLNAME);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "RECEIPTAREAID", 		RECEIPTAREAID); //입고 작업장
        				this.ds_receiptRepairToolDetail.setColumn(npos, "RECEIPTAREA", 			RECEIPTAREA);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "SENDAREAID", 			SENDAREAID); //출고 작업장
        				this.ds_receiptRepairToolDetail.setColumn(npos, "SENDAREA", 			SENDAREA);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "PRODUCTDEFID", 		PRODUCTDEFID);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "PRODUCTDEFVERSION",	PRODUCTDEFVERSION);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "PRODUCTDEFNAME", 		PRODUCTDEFNAME);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "WEIGHT", 				WEIGHT);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "HORIZONTAL", 			HORIZONTAL);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "VERTICAL", 			VERTICAL);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "THEIGHT", 				THEIGHT);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "POLISHTHICKNESS", 		POLISHTHICKNESS);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOTALPOLISHTHICKNESS", TOTALPOLISHTHICKNESS);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "CREATEDTHICKNESS", 	CREATEDTHICKNESS);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "POLISH", 				POLISH);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "PREVTOOLVERSION",		PREVTOOLVERSION);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "REPAIRDESCRIPTION", 	REPAIRDESCRIPTION);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLTYPEID", 			TOOLTYPEID);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLTYPE", 			TOOLTYPE);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLFORMCODE", 		TOOLFORMCODE);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLFORM", 			TOOLFORM);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLKINDID", 			TOOLKINDID);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLKIND", 			TOOLKIND);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        				this.ds_receiptRepairToolDetail.setColumn(npos, "PLANTID", 				this.gf_getSiteType());
        				this.ds_receiptRepairToolDetail.setColumn(npos, "SENDDATE", 			SENDDATE);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "SENDSEQUENCE", 		SENDSEQUENCE);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "EDITABLEYN", 			"Y"); //TOOL선택을 통해 온 건은 Y로 세팅해서 서버에 저장되게 한다.

        				this.ds_receiptRepairToolDetail.setColumn(npos, "DURABLEDEFID", 		DURABLEDEFID);
        				this.ds_receiptRepairToolDetail.setColumn(npos, "DURABLEDEFVERSION", 	DURABLEDEFVERSION);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "REPAIRRESULT", 		REPAIRRESULT);

        				this.ds_receiptRepairToolDetail.setColumn(npos, "NEXTDURABLELOTID", 	NEXTDURABLELOTID); //2021-06-09 수정의 경우 NEXTDURABLELOTID 를 입고 처리 한다.
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLMAKETYPE", 		TOOLMAKETYPE);     //2021-06-10 / 제작구분 추가
        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLNUMBER3", 			TOOLNUMBER3);      //2021-06-17 / 툴코드통합
        				this.ds_receiptRepairToolDetail.setColumn(npos, "NEXTDURABLELOTID3", 	NEXTDURABLELOTID3);//2021-06-18 / 툴코드통합

        				this.ds_receiptRepairToolDetail.setColumn(npos, "REQUESTDATE", 			REQUESTDATE);		//2021-06-22 / 의뢰 상태코드 변경용 필드 추가
        				this.ds_receiptRepairToolDetail.setColumn(npos, "REQUESTSEQUENCE", 		REQUESTSEQUENCE);	//2021-06-22 / 의뢰 상태코드 변경용 필드 추가

        				this.ds_receiptRepairToolDetail.setColumn(npos, "TOOLREPAIRTYPE", 		TOOLREPAIRTYPEID);	//2021-06-29 / 수리구분코드
        				this.ds_receiptRepairToolDetail.setColumn(npos, "REPAIRTRTYPE", 		REPAIRTRTYPE);		//2021-06-29 / 1:수정출고,2:수리출고

        				this.headerDiv.btn_save.set_enable(true); //저장버튼 활성화 처리

        				//alert(SENDDATE+'/'+SENDSEQUENCE);

        				//trace("====> : "+ this.ds_receiptRepairToolDetail.saveXML());
        			}
        		}
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
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo();
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

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        this.tab_search_Tabpage1_btn_vendor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        };

        this.tab_search_Tabpage1_btn_receiptor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //입고자 조회
        };

        //TOOL선택 팝업 호출
        this.div_header_btn_toolSelect_onclick = function(obj,e)
        {
        	var popupId = "SCH_TOOLSELECT_POP";
        	var oArg = {};
        	var opts = "width=1250,height=750";

        	oArg.arg_siteId = this.nfn_nvl(this.searchDiv.cbo_siteId.value, "");	//Site코드
        	oArg.arg_periodType = this.nfn_nvl(this.searchDiv.cbo_periodType.value, "");	//[입고기간]Period타입
        	oArg.arg_periodFr = this.nfn_nvl(this.searchDiv.cal_periodFr.value, ""); //[입고기간]시작일자
        	oArg.arg_periodTo = this.nfn_nvl(this.searchDiv.cal_periodTo.value, ""); //[입고기간]종료일자

        	oArg.arg_areaName = this.nfn_nvl(this.searchDiv.edt_area.value, ""); //입고작업장명
        	oArg.arg_areaId = this.nfn_nvl(this.areaId, ""); //입고작업장Id

        	oArg.arg_productId = this.nfn_nvl(this.productId, ""); //품목코드
        	oArg.arg_productVer = this.nfn_nvl(this.productVer, ""); //품목Ver
        	oArg.arg_productName = this.nfn_nvl(this.searchDiv.edt_product.value, ""); //품목명

        	//this.gfn_Message("DATA 1:: "+oArg.arg_siteId+'@@@@@'+oArg.arg_periodType+'/'+oArg.arg_periodFr+'/'+oArg.arg_periodTo, "", "error", "ok");
        	//this.gfn_Message("DATA 2:: "+oArg.arg_areaName+'/'+oArg.arg_areaId+'@@@@@'+oArg.arg_productId+'/'+oArg.arg_productVer+'/'+oArg.arg_productName, "", "error", "ok");

        	this.gfn_openPopup(popupId,"tom::TOM00701P.xfdl",oArg,opts);
        };

        this.div_work_grd_head_oncellclick = function(obj,e)
        {
        	this.fn_btnControl();

        	this.fn_detailSearch();
        };

        this.fn_btnControlPrepare = function (pRow)
        {
        	this.ds_receiptRepairTool.set_rowposition(pRow);

        	this.headerDiv.btn_save.set_enable(false); //입고상태이면 저장버튼을 비활성화
        }

        this.fn_btnControl = function ()
        {
        	this.headerDiv.btn_save.set_enable(false); //입고상태이면 저장버튼을 비활성화
        }

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_vendor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_vendor_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_receiptor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_receiptor_onclick();
        	}
        };
        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");

        	this.productId = ''; //제품Id(조회조건)
        	this.productVer = ''; //제품Ver(조회조건)
        	this.areaId = ''; //작업장Id(조회조건)
        	this.vendorId = ''; //제작업체Id(조회조건)
        	this.receiptorId = ''; //입고자Id(조회조건)
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_receiptRepairTool.clearData();
        	this.ds_receiptRepairToolDetail.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.tabDiv.sta_cnt_ds_receiptRepairTool.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.tabDiv.sta_cnt_ds_receiptRepairToolDetail.set_text(strCnt);
        };

        this.div_work_grd_head_onkeyup = function(obj,e)
        {
        	this.fn_btnControlPrepare(e.row);

        	this.fn_detailSearch();
        };

        this.div_work_btn_delRow_ds_receiptRepairToolDetail_onclick = function(obj,e)
        {
        	//
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.tab_search.Tabpage1.form.edt_vendor.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_vendor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_vendor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_vendor_onclick,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.edt_receiptor.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_receiptor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_receiptor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_receiptor_onclick,this);
            this.div_work.form.grd_head.addEventHandler("oncellclick",this.div_work_grd_head_oncellclick,this);
            this.div_work.form.grd_head.addEventHandler("onkeyup",this.div_work_grd_head_onkeyup,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_toolSelect.addEventHandler("onclick",this.div_header_btn_toolSelect_onclick,this);
        };
        this.loadIncludeScript("TOM00700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
