(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00500M");
            this.set_titletext("치공구 수리 출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolRepairRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"SENDDATE\" size=\"256\"/><Column id=\"SENDSEQUENCE\" size=\"256\"/><Column id=\"TOOLREPAIRTYPEID\" size=\"256\"/><Column id=\"TOOLREPAIRTYPE\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\"/><Column id=\"TOOLCODE\" size=\"256\"/><Column id=\"TOOLVERSION\" size=\"256\"/><Column id=\"TOOLNAME\" size=\"256\"/><Column id=\"PRODUCTDEFID\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\"/><Column id=\"MAKEVENDORID\" size=\"256\"/><Column id=\"MAKEVENDOR\" size=\"256\"/><Column id=\"SENDAREAID\" size=\"256\"/><Column id=\"SENDAREA\" size=\"256\"/><Column id=\"SENDORID\" size=\"256\"/><Column id=\"SENDOR\" size=\"256\"/><Column id=\"RECEIPTAREAID\" size=\"256\"/><Column id=\"RECEIPTAREA\" size=\"256\"/><Column id=\"REQUESTDATE\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\"/><Column id=\"REPAIRVENDORID\" size=\"256\"/><Column id=\"REPAIRVENDOR\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" size=\"256\"/><Column id=\"TOOLFORMCODE\" size=\"256\"/><Column id=\"TOOLFORM\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" size=\"256\"/><Column id=\"TOOLCATEGORY\" size=\"256\"/><Column id=\"TOOLKINDID\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolRepairRequestDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"SENDDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" size=\"256\" type=\"STRING\"/><Column id=\"SENDSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"SENDUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDUSER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLREPAIRTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"ISMODIFY\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFVER\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"USEDCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"CLEANLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALCLEANCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALUSEDCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"USEDLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALREPAIRCOUNT\" size=\"256\" type=\"STRING\"/><Column id=\"VENDORID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRDESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREA\" size=\"256\" type=\"STRING\"/><Column id=\"RESULTSTATUS\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EDITYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_term","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("출고기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","85","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("출고작업장 ID");
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

            obj = new Static("sta_product","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","206","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sender","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("출고자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_sender","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_sender",null,"160","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
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

            obj = new Static("sta_cnt_ds_toolRepairRequest","155","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","144","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("치공구 수리출고 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","34",null,"49.79%","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_toolRepairRequest");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"56\"/><Column size=\"66\"/><Column size=\"0\"/><Column size=\"137\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"72\"/><Column size=\"0\"/><Column size=\"109\"/><Column size=\"0\"/><Column size=\"87\"/><Column size=\"98\"/><Column size=\"52\"/><Column size=\"136\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"출고일자\"/><Cell col=\"1\" text=\"출고순번\"/><Cell col=\"2\" text=\"수리구분\"/><Cell col=\"3\" text=\"Tool번호---HIDDEN\"/><Cell col=\"4\" text=\"Tool 코드\"/><Cell col=\"5\" text=\"Tool버전---HIDDEN\"/><Cell col=\"6\" text=\"Tool명칭---HIDDEN\"/><Cell col=\"7\" text=\"Tool구분\"/><Cell col=\"8\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"9\" text=\"Tool형식\"/><Cell col=\"10\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"11\" text=\"TOOL종류\"/><Cell col=\"12\" text=\"품목코드\"/><Cell col=\"13\" text=\"품목 Rev.\"/><Cell col=\"14\" text=\"품목명\"/><Cell col=\"15\" text=\"Tool구분아이디---HIDDEN\"/><Cell col=\"16\" text=\"제작업체아이디---HIDDEN\"/><Cell col=\"17\" text=\"제작업체\"/><Cell col=\"18\" text=\"작업장아이디---HIDDEN\"/><Cell col=\"19\" text=\"출고작업장\"/><Cell col=\"20\" text=\"출고자\"/><Cell col=\"21\" text=\"입고작업장\"/><Cell col=\"22\" text=\"수리요청사항\"/></Band><Band id=\"body\"><Cell text=\"bind:SENDDATE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SENDSEQUENCE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TOOLREPAIRTYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PRODUCTDEFVER\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:SENDAREAID\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:SENDAREA\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:SENDOR\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:REPAIRDESCRIPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","2","grd_head:0","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("수리출고 List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolRepairRequestDetail","title2:8","grd_head:0","150","34",null,null,null,null,null,null,this.div_work.form);
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
            obj.set_binddataset("ds_toolRepairRequestDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"118\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"121\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"98\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"79\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출고일\"/><Cell col=\"2\" text=\"출고순번\"/><Cell col=\"3\" text=\"출고자\"/><Cell col=\"4\" text=\"출고자---HIDDEN\"/><Cell col=\"5\" text=\"수리업체\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"출고자---HIDDEN\"/><Cell col=\"7\" text=\"Tool 코드\"/><Cell col=\"8\" text=\"TOOL 구분\"/><Cell col=\"9\" text=\"TOOL 형식\"/><Cell col=\"10\" text=\"TOOL 종류\"/><Cell col=\"11\" text=\"수리구분\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"입고작업장\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"입고작업장---HIDDEN\"/><Cell col=\"14\" text=\"입고작업장---HIDDEN\"/><Cell col=\"15\" text=\"수리요청사항\" cssclass=\"cell_point\"/><Cell col=\"16\" text=\"출고작업장\"/><Cell col=\"17\" text=\"품목코드\"/><Cell col=\"18\" text=\"품목 Rev.\"/><Cell col=\"19\" text=\"품목버전---HIDDEN\"/><Cell col=\"20\" text=\"품목명\"/><Cell col=\"21\" text=\"보증타수\"/><Cell col=\"22\" text=\"연마기준타수\"/><Cell col=\"23\" text=\"사용타수\"/><Cell col=\"24\" text=\"누적타수\"/><Cell col=\"25\" text=\"연마횟수\"/><Cell col=\"26\" text=\"수리횟수\"/><Cell col=\"27\" text=\"ID\"/><Cell col=\"28\" text=\"VER\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"right\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:SENDDATE2\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SENDSEQUENCE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SENDUSER\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:USERID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MAKEVENDOR\" textAlign=\"center\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:EDITYN==&apos;Y&apos;?&apos;show&apos;:&apos;hide&apos;\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLNUMBER\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:TOOLTYPE\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:TOOLFORM\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:TOOLKIND\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:TOOLREPAIRTYPE\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"expr:EDITYN==&apos;Y&apos;?&apos;combo&apos;:&apos;none&apos;\" combocodecol=\"C,ToolRepairType,,Y,Y\"/><Cell col=\"12\" text=\"bind:RECEIPTAREA\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:EDITYN==&apos;Y&apos;?&apos;show&apos;:&apos;hide&apos;\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:ISMODIFY\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:REPAIRDESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"expr:EDITYN==&apos;Y&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"16\" text=\"bind:SENDAREA\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:PRODUCTDEFVER\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:USEDLIMIT\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:CLEANLIMIT\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:USEDCOUNT\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:TOTALCLEANCOUNT\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:TOTALREPAIRCOUNT\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:DURABLEDEFID\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:DURABLEDEFVERSION\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_toolRepairRequestDetail",null,"grd_head:5","26","24","4",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
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

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            obj.set_enable("true");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("치공구 수리 출고");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_toolSelect",null,"16","72","24","btn_save:3",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("Tool선택");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_visible("true");
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
        this.addIncludeScript("TOM00500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00500M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00500M.xfdl", function() {
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
        this.headerDiv = this.div_header.form; //저장영역
        this.detailDiv = this.div_work.form;

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.areaId = ''; //작업장Id(조회조건)
        this.senderId = ''; //출고자Id(조회조건)

        this.isEditable = false; //출고시 하단그리드 편집불가

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        this.areaKeyType = '1'; //1:조회조건작업장, 2:Grid입고작업장
        this.gridAreaName = '';

        this.gridVendorName = ''; //Grid제작업체

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
        	this.ds_toolRepairRequest.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_toolRepairRequestDetail.clearData();

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//출고자명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_sender.value=='') {
        		this.senderId = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.nfn_nvl(this.searchDiv.edt_toolCode.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "SENDUSER", 				this.nfn_nvl(this.senderId, "")); //출고자Id
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId, "")); //작업장Id
        	this.ds_search.setColumn(0, "P_SENDDATE_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_SENDDATE_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolRepairSendListByToolList");

        	var sSvcID 			= "selectToolRepairSendListByToolList";
        	var sController 	= "/tom00500/selectToolRepairSendListByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolRepairRequest=output";
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
        	this.ds_toolRepairRequestDetail.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "SENDDATE", 				this.nfn_nvl(this.ds_toolRepairRequest.getColumn(this.ds_toolRepairRequest.rowposition, "SENDDATE")));
        	this.ds_search.setColumn(0, "SENDSEQUENCE", 			this.nfn_nvl(this.ds_toolRepairRequest.getColumn(this.ds_toolRepairRequest.rowposition, "SENDSEQUENCE")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolRepairLotListForRepairByToolList");

        	var sSvcID 			= "selectToolRepairLotListForRepairByToolList";
        	var sController 	= "/tom00500/selectToolRepairLotListForRepairByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolRepairRequestDetail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 수정출고 [저장]
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_toolRepairRequestDetail)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	var component = this.detailDiv.grd_detail;
        	//var strColIdList = "VENDORID,MAKEVENDOR,RECEIPTAREAID,RECEIPTAREA,TOOLREPAIRTYPE,REPAIRDESCRIPTION";
        	var strColIdList = "MAKEVENDOR,RECEIPTAREA,TOOLREPAIRTYPE,REPAIRDESCRIPTION";

        	/* 그리드 필수 입력 체크 */
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	//Save master pos
        	this.oldSendDate = this.ds_toolRepairRequest.getColumn(this.ds_toolRepairRequest.rowposition, "SENDDATE");
        	this.oldSendSequence = this.ds_toolRepairRequest.getColumn(this.ds_toolRepairRequest.rowposition, "SENDSEQUENCE");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveSendToolGrid";
        	var sController 	= "/tom00500/saveSendToolGrid.do";
        	var sInDatasets 	= "INPUT=ds_toolRepairRequestDetail:U";
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
        		case "selectToolRepairSendListByToolList": //[상단]그리드 CALLBACK
        			this.fn_btnControl();
        			if (this.ds_toolRepairRequest.rowcount > 0)
        			{
        				this.fn_detailSearch();
        			}
        			break;
        		case "selectToolRepairLotListForRepairByToolList": //[하단]그리드 CALLBACK
        			break;
        		case "selectNewSendToolDetailListByToolList":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		case "saveSendToolGrid":
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
        		if(this.areaKeyType == '1') {
        			oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		}else{
        			oArg.arg_searchStr = "AREANAME="+this.gridAreaName;//그리드의 입고작업장 엔터
        		}
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00194"){ //출고자 조회
        		oArg.arg_searchStr = "USERNAME="+this.searchDiv.edt_sender.value;
        		oArg.arg_rtnCols = "USERID|USERNAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.gridVendorName;//그리드의 제작업체 엔터
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
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
        	}else if(sPopupId == "SCH_USERS") //출고자
        	{
        		this.searchDiv.edt_sender.set_value(rtn[1]);
        		this.senderId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_TOOLSELECT_POP")
        	{
        		this.ds_toolRepairRequestDetail.clearData();

        		var count = 0;
        		for(var i=0; i<rtn.length; i++){
        			var colArray 			= rtn[i];
        			//alert('값::'+rtn[i]);
        			var requestDate			= this.nfn_nvl(colArray[0], "");
        			var requestSequence		= this.nfn_nvl(colArray[1], "");
        			var toolNumber 			= this.nfn_nvl(colArray[2], "");
        			var receiptArea 		= this.nfn_nvl(colArray[3], "");
        			var receiptAreaId 		= this.nfn_nvl(colArray[4], "");
        			var isModify 			= this.nfn_nvl(colArray[5], "");
        			var productDefId 		= this.nfn_nvl(colArray[6], "");
        			var productDefName		= this.nfn_nvl(colArray[7], "");

        			var usedCount			= this.nfn_nvl(colArray[8], "");
        			var cleanLimit			= this.nfn_nvl(colArray[9], "");
        			var totalCleanCount		= this.nfn_nvl(colArray[10], "");
        			var totalUsedCount		= this.nfn_nvl(colArray[11], "");
        			var usedLimit			= this.nfn_nvl(colArray[12], "");
        			var totalRepairCount	= this.nfn_nvl(colArray[13], "");

        			var makeVendor			= this.nfn_nvl(colArray[14], "");
        			var vendorId			= this.nfn_nvl(colArray[15], "");
        			var durableDefId		= this.nfn_nvl(colArray[16], "");
        			var durableDefVersion	= this.nfn_nvl(colArray[17], "");
        			var productDefVersion	= this.nfn_nvl(colArray[18], "");
        			var sendDate			= this.nfn_nvl(colArray[19], "");
        			var sendSequence		= this.nfn_nvl(colArray[20], "");
        			var userId				= this.nfn_nvl(colArray[21], "");
        			var sendor				= this.nfn_nvl(colArray[22], "");
        			var repairVendor		= this.nfn_nvl(colArray[23], "");

        			var toolCategoryId		= this.nfn_nvl(colArray[25], "");//TOOLCATEGORYID
        			var toolCategory		= this.nfn_nvl(colArray[26], "");//TOOLCATEGORY
        			var toolFormCode		= this.nfn_nvl(colArray[27], "");//TOOLFORMCODE
        			var toolForm			= this.nfn_nvl(colArray[28], "");//TOOLFORM
        			var toolKindId			= this.nfn_nvl(colArray[29], "");//TOOLKINDID
        			var toolKind			= this.nfn_nvl(colArray[30], "");//TOOLKIND

        			count = this.ds_toolRepairRequestDetail.getCaseCount("TOOLNUMBER=='" + toolNumber + "'"); //하단 리스트에 추가하려는 TOOL코드가 존재하는지 체크 한다.
        			if(count==0)
        			{
        				var npos = this.ds_toolRepairRequestDetail.addRow();
        				this.ds_toolRepairRequestDetail.setColumn(npos, "DURABLEDEFID", 	durableDefId); //치공구Id
        				this.ds_toolRepairRequestDetail.setColumn(npos, "DURABLEDEFVERSION",durableDefVersion); //치공구Ver
        				this.ds_toolRepairRequestDetail.setColumn(npos, "REQUESTDATE", 		requestDate);
        				this.ds_toolRepairRequestDetail.setColumn(npos, "REQUESTSEQUENCE",	requestSequence);

        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDDATE", 		this.tomfn_getCurrentlyDate("YYYY-MM-DD")); //출고일
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDSEQUENCE", 	""); //출고순번
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDUSERID", 		userId); //출고자Id
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDUSER", 		sendor); //출고자
        				this.ds_toolRepairRequestDetail.setColumn(npos, "VENDORID", 		vendorId); //수리업체코드
        				this.ds_toolRepairRequestDetail.setColumn(npos, "MAKEVENDOR", 		makeVendor); //수리업체
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLNUMBER", 		toolNumber); //TOOL코드

        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLTYPEID", 		toolCategoryId); //TOOL구분코드
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLTYPE", 		toolCategory); //TOOL구분
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLFORMCODE", 	toolFormCode); //TOOL형식코드
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLFORM", 		toolForm); //TOOL형식
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLKINDID", 		toolKindId); //TOOL종류Id
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLKIND", 		toolKind); //TOOL종류
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLREPAIRTYPEID", ""); //수리구분코드
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOOLREPAIRTYPE", 	""); //수리구분

        				this.ds_toolRepairRequestDetail.setColumn(npos, "RECEIPTAREAID", 	receiptAreaId); //입고작업장Id : 394:입고작업장의값을출고작업장값으로DEFAULT처리
        				this.ds_toolRepairRequestDetail.setColumn(npos, "RECEIPTAREA", 		receiptArea); //입고작업장
        				this.ds_toolRepairRequestDetail.setColumn(npos, "REPAIRDESCRIPTION",""); //수리요청사항
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDAREAID", 		receiptAreaId); //출고작업장Id
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDAREA", 		receiptArea); //출고작업장
        				this.ds_toolRepairRequestDetail.setColumn(npos, "PRODUCTDEFID", 	productDefId); //품목코드
        				this.ds_toolRepairRequestDetail.setColumn(npos, "PRODUCTDEFVER", 	productDefVersion); //품목Ver

        				this.ds_toolRepairRequestDetail.setColumn(npos, "PRODUCTDEFNAME", 	productDefName); //품목명
        				this.ds_toolRepairRequestDetail.setColumn(npos, "USEDLIMIT", 		usedLimit); //보증타수
        				this.ds_toolRepairRequestDetail.setColumn(npos, "CLEANLIMIT", 		cleanLimit); //연마기준타수
        				this.ds_toolRepairRequestDetail.setColumn(npos, "USEDCOUNT", 		usedCount); //사용타수
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOTALUSEDCOUNT", 	totalUsedCount); //누적타수
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOTALCLEANCOUNT", 	totalCleanCount); //연마횟수
        				this.ds_toolRepairRequestDetail.setColumn(npos, "TOTALREPAIRCOUNT", totalRepairCount); //수리횟수

        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDDATE", this.tomfn_getCurrentlyDate("YYYY-MM-DD"));
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDUSERID", this.tomfn_getUserId());
        				this.ds_toolRepairRequestDetail.setColumn(npos, "SENDUSER", this.tomfn_getUserNm());
        				this.ds_toolRepairRequestDetail.setColumn(npos, "PLANTID", this.gf_getSiteType());
        				this.ds_toolRepairRequestDetail.setColumn(npos, "ENTERPRISEID", this.gf_getEnterpriseId());

        				this.ds_toolRepairRequestDetail.setColumn(npos, "EDITYN", "Y"); //편집가능

        				this.headerDiv.btn_save.set_enable(true);
        			}else{
        				alert('이미 존재 합니다. [SKIP] TOOLNUMBER :: '+toolNumber);
        			}

        			//alert(receiptArea+'/'+receiptAreaId+'/'+sendArea);
        			//alert(requestDate+'/'+requestSequence+'/'+toolNumber+'/'+receiptArea+'/'+receiptAreaId+'/'+isModify+'/'+productDefId+'/'+productDefName);
        			//alert(usedCount+'/'+cleanLimit+'/'+totalCleanCount+'/'+totalUsedCount+'/'+usedLimit+'/'+totalRepairCount);
        			//alert(makeVendor+'/'+vendorId+'/'+toolCode+'/'+durableDefVersion+'/'+sendArea+'/'+sendDate+'/'+sendSequence+'/'+userId+'/'+sendor+'/'+repairVendor);
        			//alert(productDefVersion+'/'+toolCategoryId+'/'+toolCategory+'/'+toolFormCode+'/'+toolForm+'/'+toolKindId+'/'+toolKind);
        		}
        	}
        	else if(sPopupId == "SCH_VENDOR_GRID") //Grid에서 팝업 호출 callback
        	{
        		this.ds_toolRepairRequestDetail.setColumn(this.ds_toolRepairRequestDetail.rowposition, "VENDORID", rtn[0]);
        		this.ds_toolRepairRequestDetail.setColumn(this.ds_toolRepairRequestDetail.rowposition, "MAKEVENDOR", rtn[1]);
        	}
        	else if(sPopupId == "SCH_AREA_GRID") //Grid에서 팝업 호출 callback
        	{
        		//alert(rtn[0] + '/' + rtn[1])
        		this.ds_toolRepairRequestDetail.setColumn(this.ds_toolRepairRequestDetail.rowposition, "RECEIPTAREAID", rtn[0]);
        		this.ds_toolRepairRequestDetail.setColumn(this.ds_toolRepairRequestDetail.rowposition, "RECEIPTAREA", rtn[1]);
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

        	this.areaKeyType = '1';

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        this.tab_search_Tabpage1_btn_sender_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //출고자 조회
        };

        this.fn_vendorSelectPop = function ()
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR_GRID","P00145", sArgs); //수리업체
        }

        this.fn_areaSelectPop = function ()
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA_GRID","P00063", sArgs); //작업장 조회
        }

        //상단 클릭 이벤트
        this.div_work_grd_request_oncellclick = function(obj,e)
        {
        	this.fn_btnControl();

        	this.fn_detailSearch();
        };

        this.fn_btnControlPrepare = function (pRow)
        {
        	this.ds_toolRepairRequest.set_rowposition(pRow);
        	this.fn_btnControl();
        }

        this.fn_btnControl = function ()
        {
        	this.headerDiv.btn_save.set_enable(false); //출고상태이면 저장버튼을 비활성화(삭제 이벤트시 활성화 된다.)
        	this.detailDiv.btn_delRow_ds_toolRepairRequestDetail.set_enable(true);
        }

        //TOOL선택 팝업 호출
        this.div_header_btn_toolSelect_onclick = function(obj,e)
        {
        	var popupId = "SCH_TOOLSELECT_POP";
        	var oArg = {};
        	var opts = "width=1250,height=750";

        	//필수 입력 체크(출고작업장)
        	if(this.areaId == '') {
        		alert('작업장을 입력 바랍니다.');
        		this.searchDiv.edt_area.setFocus();
        		return;
        	}

        	oArg.arg_siteId = this.nfn_nvl(this.searchDiv.cbo_siteId.value, "");	//Site코드
        	oArg.arg_areaId = this.nfn_nvl(this.areaId, "");	//작업장Id
        	oArg.arg_areaName = this.nfn_nvl(this.searchDiv.edt_area.value, ""); //작업장명
        	oArg.arg_productId = this.nfn_nvl(this.productId, ""); //품목코드
        	oArg.arg_productVer = this.nfn_nvl(this.productVer, ""); //품목Ver
        	oArg.arg_productName = this.nfn_nvl(this.searchDiv.edt_product.value, ""); //품목명

        	//this.gfn_Message("DATA 1:: "+oArg.arg_siteId+'/'+oArg.arg_areaId+'/'+oArg.arg_areaName, "", "error", "ok");
        	//this.gfn_Message("DATA 2:: "+oArg.arg_productId+'/'+oArg.arg_productVer+'/'+oArg.arg_productName, "", "error", "ok");

        	this.gfn_openPopup(popupId,"tom::TOM00501P.xfdl",oArg,opts);
        };

        this.div_work_grd_detail_oncloseup = function(obj,e)
        {
        	this.grd_toolMaking.updateToDataset();
        };

        this.div_work_grd_detail_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "MAKEVENDOR")) { //수리업체
        		this.gridVendorName = '';
        		this.fn_vendorSelectPop();
        	}
        	if (this.nfn_isEqualCol(obj, e.col, "RECEIPTAREA")) { //입고작업장
        		this.areaKeyType = '2';
        		this.gridAreaName = '';
        		this.fn_areaSelectPop();
        	}
        };

        //작업장
        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        //품목코드
        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        //출고자
        this.tab_search_Tabpage1_edt_sender_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_sender_onclick();
        	}
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_toolRepairRequest.clearData();
        	this.ds_toolRepairRequestDetail.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_toolRepairRequest.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_toolRepairRequestDetail.set_text(strCnt);
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");

        	this.productId = ''; //제품Id(조회조건)
        	this.productVer = ''; //제품Ver(조회조건)
        	this.areaId = ''; //작업장Id(조회조건)
        	this.senderId = ''; //출고자Id(조회조건)
        };
        this.div_work_btn_delRow_ds_toolRepairRequestDetail_onclick = function(obj,e)
        {
        	this.headerDiv.btn_save.set_enable(true);
        };

        this.div_work_grd_head_onkeyup = function(obj,e)
        {
        	this.fn_btnControlPrepare();

        	this.fn_detailSearch();
        };

        this.div_work_grd_detail_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		if (obj.currentcell == obj.getBindCellIndex("body", "RECEIPTAREA")) {
        			this.areaKeyType = '2';
        			this.gridAreaName = this.nfn_nvl(this.ds_toolRepairRequestDetail.getColumn(this.ds_toolRepairRequestDetail.rowposition, "RECEIPTAREA"));
        			this.fn_areaSelectPop();
        		} else if (obj.currentcell == obj.getBindCellIndex("body", "MAKEVENDOR")) {
        			this.gridVendorName = this.nfn_nvl(this.ds_toolRepairRequestDetail.getColumn(this.ds_toolRepairRequestDetail.rowposition, "MAKEVENDOR"));
        			this.fn_vendorSelectPop();
        		}
        	}
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
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.edt_sender.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_sender_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_sender.addEventHandler("onclick",this.tab_search_Tabpage1_btn_sender_onclick,this);
            this.div_work.form.grd_head.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_work.form.grd_head.addEventHandler("onkeyup",this.div_work_grd_head_onkeyup,this);
            this.div_work.form.grd_detail.addEventHandler("oncellclick",this.div_work_grd_requestDetail_oncellclick,this);
            this.div_work.form.grd_detail.addEventHandler("oncloseup",this.div_work_grd_detail_oncloseup,this);
            this.div_work.form.grd_detail.addEventHandler("onexpandup",this.div_work_grd_detail_onexpandup,this);
            this.div_work.form.grd_detail.addEventHandler("onkeyup",this.div_work_grd_detail_onkeyup,this);
            this.div_work.form.btn_delRow_ds_toolRepairRequestDetail.addEventHandler("onclick",this.div_work_btn_delRow_ds_toolRepairRequestDetail_onclick,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_toolSelect.addEventHandler("onclick",this.div_header_btn_toolSelect_onclick,this);
        };
        this.loadIncludeScript("TOM00500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
