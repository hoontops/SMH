(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00400M");
            this.set_titletext("치공구 수정 출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolRepairSend", this);
            obj._setContents("<ColumnInfo><Column id=\"SENDSTATUS\" size=\"256\"/><Column id=\"REQUESTDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" size=\"256\"/><Column id=\"PRODUCTDEFID\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\"/><Column id=\"REQUESTQTY\" size=\"256\"/><Column id=\"SENDQTY\" size=\"256\"/><Column id=\"DELIVERYDATE\" size=\"256\"/><Column id=\"REQUESTUSERID\" size=\"256\"/><Column id=\"REQUESTUSER\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" size=\"256\"/><Column id=\"DESCRIPTION\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolRepairSendDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"NEXTDURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"REVDURABLEDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"VENDORID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"SENDDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" size=\"256\" type=\"STRING\"/><Column id=\"SENDUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDUSER\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLESTATE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDELIVERYDATE\" size=\"256\" type=\"STRING\"/><Column id=\"PLANDELIVERYDATE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYDETAIL\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLDETAIL\" size=\"256\" type=\"STRING\"/><Column id=\"ISSENDED\" size=\"256\" type=\"STRING\"/><Column id=\"OWNSHIPTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTSTATUS\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRSENDDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRSENDSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"DESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTCOMMENT\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("의뢰기간");
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
            obj.set_text("작업장 ID");
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

            obj = new Static("sta_manufactId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("제작업체");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sendStatus","0","183","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("출고여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_sendStatus","108","183","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,OutboundYN,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","208","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"208","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","208",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"228","45","20","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","248","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","254","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","248","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_state00","0","159","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("제작구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_toolMakeType","108","159","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,ToolMakeType,ALL,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","270","34",null,null,null,null,null,null,this);
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

            obj = new Static("sta_cnt_ds_toolRepairSend","155","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","144","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("치공구 수정출고 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","34",null,null,"2","319",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_toolRepairSend");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"54\"/><Column size=\"118\"/><Column size=\"55\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"96\"/><Column size=\"54\"/><Column size=\"183\"/><Column size=\"0\"/><Column size=\"55\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"55\"/><Column size=\"153\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제작구분\"/><Cell col=\"1\" text=\"출고여부\"/><Cell col=\"2\" text=\"의뢰일\"/><Cell col=\"3\" text=\"의뢰순번\"/><Cell col=\"4\" text=\"제작구분명---HIDDEN\"/><Cell col=\"5\" text=\"제작구분명---HIDDEN\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"품목 Rev.\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"제작업체---HIDDEN\"/><Cell col=\"10\" text=\"의뢰수량\"/><Cell col=\"11\" text=\"작업장---HIDDEN\"/><Cell col=\"12\" text=\"의뢰자---HIDDEN\"/><Cell col=\"13\" text=\"출고수량\"/><Cell col=\"14\" text=\"의뢰사유\"/><Cell col=\"15\" text=\"의뢰부서\"/><Cell col=\"16\" text=\"의뢰자\"/><Cell col=\"17\" text=\"설명---HIDDEN\"/><Cell col=\"18\" text=\"제품명---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLMAKETYPENAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SENDSTATUS\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REQUESTDATE2\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLMAKETYPEID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLMAKETYPE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:REQUESTQTY\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:REQUESTQTY\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:DELIVERYDATE\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:REQUESTUSERID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:SENDQTY\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:REQUESTDEPARTMENT\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:REQUESTUSER\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_toolRepairSendDetail",null,"grd_head:5","26","24","4",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","2","grd_head:0","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("수정출고 List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolRepairSendDetail","title2:6","grd_head:0","150","34",null,null,null,null,null,null,this.div_work.form);
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
            obj.set_binddataset("ds_toolRepairSendDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"35\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"54\"/><Column size=\"78\"/><Column size=\"75\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"118\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"78\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Tool번호---HIDDEN\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Tool 코드\"/><Cell col=\"3\" text=\"이전 Tool 코드\"/><Cell col=\"4\" text=\"Tool버전---HIDDEN\"/><Cell col=\"5\" text=\"변경Tool버전---HIDDEN\"/><Cell col=\"6\" text=\"제작업체아이디---HIDDEN\"/><Cell col=\"7\" text=\"입고작업장아이디---HIDDEN\"/><Cell col=\"8\" text=\"Tool구분\"/><Cell col=\"9\" text=\"TOOL형식\"/><Cell col=\"10\" text=\"TOOL종류\"/><Cell col=\"11\" text=\"제작처\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"입고작업장\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"출고일\"/><Cell col=\"14\" text=\"출고자아이디---HIDDEN\"/><Cell col=\"15\" text=\"Tool명칭---HIDDEN\"/><Cell col=\"16\" text=\"출고자\"/><Cell col=\"17\" text=\"상태\"/><Cell col=\"18\" text=\"유형2---HIDDEN\"/><Cell col=\"19\" text=\"수리결과등록여부---HIDDEN\"/><Cell col=\"20\" text=\"출고일---HIDDEN\"/><Cell col=\"21\" text=\"REPAIRSENDSEQUENCE---HIDDEN\"/><Cell col=\"22\" text=\"입고예정일\"/><Cell col=\"23\" text=\"특이사항\"/><Cell col=\"24\" text=\"의뢰사유\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CHK\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:NEXTDURABLELOTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLNUMBER\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REVDURABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:MAKEVENDOR\" textAlign=\"center\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:comp.parent.parent.parent.isEditable?&apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"12\" text=\"bind:RECEIPTAREA\" textAlign=\"center\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:comp.parent.parent.parent.isEditable?&apos;show&apos;:&apos;hide&apos;\"/><Cell col=\"13\" text=\"bind:SENDDATE2\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:SENDUSERID\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:SENDUSER\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:DURABLESTATE\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:ISSENDED\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:RESULTSTATUS\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:REPAIRSENDDATE\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:REPAIRSENDSEQUENCE\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:PLANDELIVERYDATE\" textAlign=\"center\"/><Cell col=\"23\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/></Band></Format></Formats>");
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
            obj.set_text("치공구 수정 출고");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00400M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00400M.xfdl", function() {
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
        this.vendorId = ''; //제작업체Id(조회조건)

        this.isEditable = false; //출고시 하단그리드 편집불가

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        //공통팝업:검색키구별값
        this.areaKeyType = '1'; //1:작업장Id(조회조건), 2:Grid:입고작업장

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
        	this.ds_toolRepairSend.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_toolRepairSendDetail.clearData();

        	this.ds_search.clearData();

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	//제작업체명이 공백이면 제작업체Id 공백 처리
        	if(this.searchDiv.edt_vendor.value=='') {
        		this.vendorId = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.nfn_nvl(this.searchDiv.edt_toolCode.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "TOOLMAKETYPE", 			this.nfn_nvl(this.searchDiv.cbo_toolMakeType.value, "")); //제작구분
        	this.ds_search.setColumn(0, "SENDSTATUS", 				this.nfn_nvl(this.searchDiv.cbo_sendStatus.value, "")); //출고여부
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "VENDORID", 				this.nfn_nvl(this.vendorId, "")); //제작업체Id
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId, "")); //작업장Id
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectNewSendToolListByToolList");

        	var sSvcID 			= "selectNewSendToolListByToolList";
        	var sController 	= "/tom00400/selectNewSendToolListByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolRepairSend=output";
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
        	this.ds_toolRepairSendDetail.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(this.ds_toolRepairSend.getColumn(this.ds_toolRepairSend.rowposition, "REQUESTDATE")));
        	this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(this.ds_toolRepairSend.getColumn(this.ds_toolRepairSend.rowposition, "REQUESTSEQUENCE")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectNewSendToolDetailListByToolList");

        	var sSvcID 			= "selectNewSendToolDetailListByToolList";
        	var sController 	= "/tom00400/selectNewSendToolDetailListByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolRepairSendDetail=output";
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
        	if(!this.gfn_dsIsUpdated(this.ds_toolRepairSendDetail)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//#################################################################################################################
        	//var component = this.detailDiv.grd_detail;
        	//var strColIdList = "VENDORID,MAKEVENDOR,RECEIPTAREAID,RECEIPTAREA";

        	/* 그리드 필수 입력 체크 */
        	//if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;
        	var tempVendorId = '';
        	var tempMakevendor = '';
        	var tempReceiptAreaId = '';
        	var tempReceiptArea = '';
        	var validYn1 = true;
        	var validYn2 = true;
        	var chkVal = "";
        	for(var i=0; i<this.ds_toolRepairSendDetail.rowcount; i++){
        		chkVal = this.ds_toolRepairSendDetail.getColumn(i, "CHK");
        		if(chkVal=='1'){
        			tempVendorId = this.ds_toolRepairSendDetail.getColumn(this.ds_toolRepairSendDetail.rowposition, "VENDORID");
        			tempMakevendor = this.ds_toolRepairSendDetail.getColumn(this.ds_toolRepairSendDetail.rowposition, "MAKEVENDOR");
        			tempReceiptAreaId = this.ds_toolRepairSendDetail.getColumn(this.ds_toolRepairSendDetail.rowposition, "RECEIPTAREAID");
        			tempReceiptArea = this.ds_toolRepairSendDetail.getColumn(this.ds_toolRepairSendDetail.rowposition, "RECEIPTAREA");
        			if(tempVendorId==''||tempMakevendor==''){
        				validYn1 = false;
        			}
        			if(tempReceiptAreaId==''||tempReceiptArea==''){
        				validYn2 = false;
        			}
        		}
        	}
        	if(!validYn1){
        		this.gfn_Message("VENDORREQUIER", "", "warning", "ok");
        		return;
        	}
        	if(!validYn2){
        		this.gfn_Message("AREAREQUIER", "", "warning", "ok");
        		return;
        	}
        	//#################################################################################################################

        	//Save master pos
        	this.oldRequestDate = this.ds_toolRepairSend.getColumn(this.ds_toolRepairSend.rowposition, "REQUESTDATE");
        	this.oldRequestSequence = this.ds_toolRepairSend.getColumn(this.ds_toolRepairSend.rowposition, "REQUESTSEQUENCE");

        	for(var i=0; i<this.ds_toolRepairSendDetail.rowcount; i++){
        		chkVal = this.ds_toolRepairSendDetail.getColumn(i, "CHK");
        		if(chkVal=='1'){
        			//this.ds_toolRepairSendDetail.setColumn(i, "SENDDATE", this.tomfn_getCurrentlyDate("YYYY-MM-DD"));
        			this.ds_toolRepairSendDetail.setColumn(i, "SENDUSERID", this.tomfn_getUserId());
        			this.ds_toolRepairSendDetail.setColumn(i, "SENDUSER", this.tomfn_getUserNm());
        			this.ds_toolRepairSendDetail.setColumn(i, "PLANTID", this.gf_getSiteType());
        			this.ds_toolRepairSendDetail.setColumn(i, "ENTERPRISEID", this.gf_getEnterpriseId());
        			//alert(this.gf_getSiteType()+'/'+this.gf_getEnterpriseId());
        		}
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveSendToolGrid";
        	var sController 	= "/tom00400/saveSendToolGrid.do";
        	var sInDatasets 	= "INPUT=ds_toolRepairSendDetail:U";
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
        		case "selectNewSendToolListByToolList": //[상단]그리드 CALLBACK
        			this.fn_btnControl();
        			if (this.ds_toolRepairSend.rowcount > 0)
        			{
        				this.fn_detailSearch();
        			}
        			break;
        		case "selectNewSendToolDetailListByToolList":
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
        		if(this.areaKeyType == 1){
        			oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		}else{
        			oArg.arg_searchStr = "AREANAME=";//그리드의의 입고작업장
        		}
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.searchDiv.edt_vendor.value;//조회조건의 협력업체
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
        	}else if(sPopupId == "SCH_VENDOR_GRID") //Grid에서 팝업 호출 callback
        	{
        		this.ds_toolRepairSendDetail.setColumn(this.ds_toolRepairSendDetail.rowposition, "VENDORID", rtn[0]);
        		this.ds_toolRepairSendDetail.setColumn(this.ds_toolRepairSendDetail.rowposition, "MAKEVENDOR", rtn[1]);
        	}else if(sPopupId == "SCH_AREA_GRID") //Grid에서 팝업 호출 callback
        	{
        		this.ds_toolRepairSendDetail.setColumn(this.ds_toolRepairSendDetail.rowposition, "RECEIPTAREAID", rtn[0]);
        		this.ds_toolRepairSendDetail.setColumn(this.ds_toolRepairSendDetail.rowposition, "RECEIPTAREA", rtn[1]);
        	}else if(sPopupId == "SCH_VENDOR") //제작업체
        	{
        		this.searchDiv.edt_vendor.set_value(rtn[1]);
        		this.vendorId = rtn[0]; //HIDDEN 필드
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
         * 기능 : 그리드 '제작업체' 콤보 조회
         */
        this.fn_vendorSelectPop = function ()
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR_GRID","P00145", sArgs); //제작처(협력업체) 조회
        }

        /*
         * 기능 : 그리드 '작업장' 콤보 조회
         */
        this.fn_areaSelectPop = function ()
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA_GRID","P00063", sArgs); //작업장 조회
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

        	this.areaKeyType = '1';

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        };

        //상단 클릭 이벤트
        this.div_work_grd_request_oncellclick = function(obj,e)
        {
        	this.fn_btnControl();

        	this.fn_detailSearch();
        };

        this.fn_btnControlPrepare = function (pRow)
        {
        	this.ds_toolRepairSend.set_rowposition(pRow);
        	this.fn_btnControl();
        }

        this.fn_btnControl = function ()
        {
        	this.isEditable = false;
        	var sendStatus = this.nfn_nvl(this.ds_toolRepairSend.getColumn(this.ds_toolRepairSend.rowposition, "SENDSTATUS")); //출고상태 : 출고/미출고
        	if(sendStatus=='출고' || sendStatus=='부분출고'){
        		this.isEditable = false;
        		this.headerDiv.btn_save.set_enable(false); //출고상태이면 저장버튼을 비활성화(삭제 이벤트시 활성화 된다.)
        		this.detailDiv.btn_delRow_ds_toolRepairSendDetail.set_enable(true);
        	}else{
        		this.isEditable = true;
        		this.headerDiv.btn_save.set_enable(true);
        		this.detailDiv.btn_delRow_ds_toolRepairSendDetail.set_enable(false);
        	}
        }

        this.div_work_grd_detail_oncloseup = function(obj,e)
        {
        	this.grd_toolMaking.updateToDataset();
        };

        this.div_work_grd_detail_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "MAKEVENDOR")) {
        		this.fn_vendorSelectPop();
        	}
        	if (this.nfn_isEqualCol(obj, e.col, "RECEIPTAREA")) {

        		this.areaKeyType = '1';

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

        //제작업체
        this.tab_search_Tabpage1_edt_vendor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_vendor_onclick();
        	}
        };

        //품목
        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
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
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_toolRepairSend.clearData();
        	this.ds_toolRepairSendDetail.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_toolRepairSend.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_toolRepairSendDetail.set_text(strCnt);
        };

        this.div_work_btn_delRow_ds_toolRepairSendDetail_onclick = function(obj,e)
        {
        	this.headerDiv.btn_save.set_enable(true); //하단 그리드 삭제 이벤트시 저장 버튼 활성화 처리
        };

        this.div_work_grd_head_onkeyup = function(obj,e)
        {
        	this.fn_btnControlPrepare(e.row);

        	this.fn_detailSearch();
        };

        this.tab_search_Tabpage1_cbo_toolMakeType_oninnerdatachanged = function(obj,e)
        {
        	this.ds_CToolMakeTypeALL.filter("LOOKUP_CODE != 'New' &&  LOOKUP_CODE != 'Add'");
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
            this.tab_search.Tabpage1.form.cbo_sendStatus.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.cbo_toolMakeType.addEventHandler("oninnerdatachanged",this.tab_search_Tabpage1_cbo_toolMakeType_oninnerdatachanged,this);
            this.div_work.form.grd_head.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_work.form.grd_head.addEventHandler("onkeyup",this.div_work_grd_head_onkeyup,this);
            this.div_work.form.btn_delRow_ds_toolRepairSendDetail.addEventHandler("onclick",this.div_work_btn_delRow_ds_toolRepairSendDetail_onclick,this);
            this.div_work.form.grd_detail.addEventHandler("oncellclick",this.div_work_grd_requestDetail_oncellclick,this);
            this.div_work.form.grd_detail.addEventHandler("oncloseup",this.div_work_grd_detail_oncloseup,this);
            this.div_work.form.grd_detail.addEventHandler("onexpandup",this.div_work_grd_detail_onexpandup,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("TOM00400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
