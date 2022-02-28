(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00300M");
            this.set_titletext("치공구 제작 입고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolMaking", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDATE2\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORY\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKINDID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKIND\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDEPARTMENT\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTUSER\" size=\"256\" type=\"STRING\"/><Column id=\"VENDORID\" size=\"256\" type=\"STRING\"/><Column id=\"VENDORNAME\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDELIVERYDATE\" size=\"256\" type=\"STRING\"/><Column id=\"PLANDELIVERYDATE\" size=\"256\" type=\"STRING\"/><Column id=\"AREAID\" size=\"256\" type=\"STRING\"/><Column id=\"AREANAME\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLMAKETYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLMAKETYPENAME\" size=\"256\" type=\"STRING\"/><Column id=\"ISMODIFY\" size=\"256\" type=\"STRING\"/><Column id=\"OWNSHIPTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODFR2\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODTO2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolMakingStatics", this);
            obj._setContents("<ColumnInfo><Column id=\"RECEIPTDATE\" size=\"256\"/><Column id=\"RECEIPTDATE2\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\"/><Column id=\"TOOLCODE\" size=\"256\"/><Column id=\"TOOLVERSION\" size=\"256\"/><Column id=\"TOOLNAME\" size=\"256\"/><Column id=\"PRODUCTDEFID\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\"/><Column id=\"TOOLFORMCODE\" size=\"256\"/><Column id=\"TOOLFORM\" size=\"256\"/><Column id=\"VENDORID\" size=\"256\"/><Column id=\"MAKEVENDOR\" size=\"256\"/><Column id=\"AREAID\" size=\"256\"/><Column id=\"RECEIPTAREA\" size=\"256\"/><Column id=\"RECEIPTERID\" size=\"256\"/><Column id=\"RECEIPTUSER\" size=\"256\"/><Column id=\"WEIGHT\" size=\"256\"/><Column id=\"HORIZONTAL\" size=\"256\"/><Column id=\"VERTICAL\" size=\"256\"/><Column id=\"THEIGHT\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" size=\"256\"/><Column id=\"TOOLCATEGORY\" size=\"256\"/><Column id=\"TOOLCATEGORYDETAILID\" size=\"256\"/><Column id=\"TOOLCATEGORYDETAIL\" size=\"256\"/><Column id=\"TOOLDETAILID\" size=\"256\"/><Column id=\"TOOLDETAIL\" size=\"256\"/><Column id=\"TOOLKINDID\" size=\"256\"/><Column id=\"TOOLKIND\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" size=\"256\"/><Column id=\"SUMMARY\" size=\"256\"/><Column id=\"DESCRIPTION\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("의뢰기간");
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

            obj = new Static("label02","0","136","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"136","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","136",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","0","161","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","108","161","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","206","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site2","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId2","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_area2","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_area2","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_area2",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_manufactId2","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("제작업체");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_vendor2","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_vendor2",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label022","0","136","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_product2","108","136",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_product2",null,"136","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_toolCode2","0","161","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode2","108","161","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_term2","0","86","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("입고기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr2","109","86",null,"20","14",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType2","11","111","94","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo2","109","111",null,"20","14",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"181","45","20","90",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search2","16","201","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","207","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear2","172","201","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
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

            obj = new Tab("tabHistory","0","31",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("1");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tabHistory);
            obj.set_text("제작입고");
            obj.set_tooltiptext("TOOLHISTORY");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Grid("grd_toolMaking","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_toolMaking");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"36\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"133\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"125\"/><Column size=\"0\"/><Column size=\"84\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"124\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"56\"/><Column size=\"274\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제작구분---HIDDEN\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"제작구분\"/><Cell col=\"3\" text=\"Tool번호---HIDDEN\"/><Cell col=\"4\" text=\"Tool 코드\"/><Cell col=\"5\" text=\"Tool버전---HIDDEN\"/><Cell col=\"6\" text=\"치공구명---HIDDEN\"/><Cell col=\"7\" text=\"상태-(이회면에서입력해야한다면SetIsReadOnly를풀어준다.\"/><Cell col=\"8\" text=\"Tool구분아이디---HIDDEN\"/><Cell col=\"9\" text=\"Tool구분\"/><Cell col=\"10\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"11\" text=\"Tool형식\"/><Cell col=\"12\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"13\" text=\"Tool종류\"/><Cell col=\"14\" text=\"제작업체아이디---HIDDEN\"/><Cell col=\"15\" text=\"작업장Id---HIDDEN\"/><Cell col=\"16\" text=\"입고작업장\" cssclass=\"cell_point\"/><Cell col=\"17\" text=\"의뢰일\"/><Cell col=\"18\" text=\"의뢰일_8자리\"/><Cell col=\"19\" text=\"품목코드\"/><Cell col=\"20\" text=\"품목 Rev.\"/><Cell col=\"21\" text=\"품목명\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLMAKETYPE\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:TOOLMAKETYPENAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLFORMCODE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLCATEGORY\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:AREANAME\" textAlign=\"left\" displaytype=\"text\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" edittype=\"text\"/><Cell col=\"17\" text=\"bind:REQUESTDATE2\" textAlign=\"center\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"18\" text=\"bind:REQUESTDATE\" textAlign=\"left\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"19\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolMaking","8","-3",null,"34","844",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_toolMaking",null,"6","29","24","1",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tabHistory);
            obj.set_text("제작입고현황");
            obj.set_tooltiptext("TOOLUSESTATUS");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_toolMakingStatics",null,"6","29","24","5",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_toolMakingStatics","0","34",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_toolMakingStatics");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"124\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"38\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"175\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"입고일자\"/><Cell col=\"2\" text=\"입고일자_8자리\"/><Cell col=\"3\" text=\"제작구분---HIDDEN\"/><Cell col=\"4\" text=\"제작구분\"/><Cell col=\"5\" text=\"Tool번호---HIDDEN\"/><Cell col=\"6\" text=\"Tool 코드\"/><Cell col=\"7\" text=\"Tool버전---HIDDEN\"/><Cell col=\"8\" text=\"치공구명---HIDDEN\"/><Cell col=\"9\" text=\"상태-(이회면에서입력해야한다면SetIsReadOnly를풀어준다.\"/><Cell col=\"10\" text=\"Tool구분아이디---HIDDEN\"/><Cell col=\"11\" text=\"Tool구분\"/><Cell col=\"12\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"13\" text=\"Tool형식\"/><Cell col=\"14\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"15\" text=\"Tool종류\"/><Cell col=\"16\" text=\"제작업체아이디---HIDDEN\"/><Cell col=\"17\" text=\"합수\"/><Cell col=\"18\" text=\"품목코드\"/><Cell col=\"19\" text=\"품목 Rev.\"/><Cell col=\"20\" text=\"품목명\"/><Cell col=\"21\" text=\"제작처\"/><Cell col=\"22\" text=\"작업장아이디---HIDDEN\"/><Cell col=\"23\" text=\"입고작업장\"/><Cell col=\"24\" text=\"의뢰자명---HIDDEN\"/><Cell col=\"25\" text=\"입고자\"/><Cell col=\"26\" text=\"무게\"/><Cell col=\"27\" text=\"가로\"/><Cell col=\"28\" text=\"세로\"/><Cell col=\"29\" text=\"높이\"/><Cell col=\"30\" text=\"두께\"/><Cell col=\"31\" text=\"특이사항\"/><Cell col=\"32\" text=\"의뢰사유\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:RECEIPTDATE2\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:RECEIPTDATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:TOOLMAKETYPE\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLMAKETYPENAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TOOLFORMCODE\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLCATEGORY\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:SUMMARY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:RECEIPTERID\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:WEIGHT\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:HORIZONTAL\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:VERTICAL\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:THEIGHT\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:CREATEDTHICKNESS\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolMakingStatics","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","2",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:5",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"15","70","24","66",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("입고 취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_black");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("치공구 제작 입고");
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
        this.addIncludeScript("TOM00300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00300M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00300M.xfdl", function() {
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
        this.searchDiv2 = this.tab_search.Tabpage2.form;
        this.tabDiv = this.div_work.form;
        this.tabInputDiv = this.div_work.form.tabHistory.Tabpage1.form;
        this.tabInputDiv2 = this.div_work.form.tabHistory.Tabpage2.form;
        this.headerDiv = this.div_header.form; //저장영역

        //TAB1
        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.areaId = ''; //작업장Id(조회조건)
        this.vendorId = ''; //제작업체Id(조회조건)

        //TAB2
        this.productId2 = ''; //제품Id(조회조건)
        this.productVer2 = ''; //제품Ver(조회조건)
        this.areaId2 = ''; //작업장Id(조회조건)
        this.vendorId2 = ''; //제작업체Id(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        this.vendorKeyType = '1'; //1:TAB1, 2:TAB2
        this.productKeyType = '1'; //1:TAB1, 2:TAB2
        this.areaKeyType = '1'; //1:조회조건작업장, 2:Grid입고작업장, 3:TAB2
        this.gridAreaName = '';

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
         * 기능 : 검색 (첫번째 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_toolMaking.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_toolMakingStatics.clearData();

        	this.ds_search.clearData();

        	//작업장명이 공백이면 작업장Id 공백 처리----------->필수입력 체크로 변경
        	if(this.nfn_nvl(this.searchDiv.edt_area.value, '')=='') {
        		// 작업장을 선택하여 주십시오.
        		this.gfn_Message("NoAreaSelected", "", "warning", "ok"); //선택된 작업장이 없습니다.
        		return;
        	}

        	//제작업체명이 공백이면 제작업체Id 공백 처리
        	if(this.nfn_nvl(this.searchDiv.edt_vendor.value, '')=='') {
        		this.vendorId = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.nfn_nvl(this.searchDiv.edt_product.value, '')=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "VENDORID", 				this.nfn_nvl(this.vendorId, "")); //제작업체Id
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId, "")); //작업장Id
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.nfn_nvl(this.searchDiv.edt_toolCode.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectGridReceiptInput");

        	var sSvcID 			= "selectGridReceiptInput";
        	var sController 	= "/tom00300/selectGridReceiptInput.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolMaking=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (두번째 Grid)
         */
        this.fn_search2 = function (obj, e)
        {
        	if(this.nfn_nvl(this.searchDiv2.edt_area2.value, '')=='') {
        		// 작업장을 선택하여 주십시오.
        		this.gfn_Message("NoAreaSelected", "", "warning", "ok"); //선택된 작업장이 없습니다.
        		return;
        	}

        	//제작업체명이 공백이면 제작업체Id 공백 처리
        	if(this.nfn_nvl(this.searchDiv2.edt_vendor2.value, '')=='') {
        		this.vendorId2 = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.nfn_nvl(this.searchDiv2.edt_product2.value, '')=='') {
        		this.productId2 = '';
        		this.productVer2 = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv2.cbo_siteId2.value, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId2, "")); //품목Id
        	this.ds_search.setColumn(0, "VENDORID", 				this.nfn_nvl(this.vendorId2, "")); //제작업체Id
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId2, "")); //작업장Id
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.nfn_nvl(this.searchDiv2.edt_toolCode2.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODFR2", 	this.nfn_nvl(this.searchDiv2.cal_periodFr2.value, "")); //시작일자2 (입고시작일자)
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODTO2", 	this.nfn_nvl(this.searchDiv2.cal_periodTo2.value, "")); //종료일자2 (입고종료일자)
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolRequestReceipt");

        	var sSvcID 			= "selectToolRequestReceipt";
        	var sController 	= "/tom00300/selectToolRequestReceipt.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolMakingStatics=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 제작입고 저장
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_toolMaking)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	var component = this.tabInputDiv.grd_toolMaking;
        	var strColIdList = "AREAID,AREANAME";

        	/* 그리드 필수 입력 체크 */
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveToolMakeReceipt";
        	var sController 	= "/tom00300/saveToolMakeReceipt.do";
        	var sInDatasets 	= "INPUT=ds_toolMaking:U";
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
        			this.tabDiv.tabHistory.set_tabindex(0);
        			this.fn_btnControl();
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectGridReceiptInput": //[상단]그리드 CALLBACK
        			//this.fn_search2(); //두번째 그리드 자동 검색
        			break;
        		case "selectToolRequestReceipt":
        			break;
        		case "saveToolMakeReceipt":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		case "saveToolMakeReceiptCancel":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		default:
        	}
        };

        this.fn_callBack2 = function (trId, errCD, errMsg)
        {
        	switch(trId) {
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate2("THISMONTH");
        			break;
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv2.cbo_siteId2.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		default:
        	}
        }

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
        		if(this.productKeyType == '1') {
        			oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv.edt_product.value;//조회조건의 품목명
        		}else{
        			oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv2.edt_product2.value;//조회조건의 품목명
        		}
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00063"){ //작업장조회 조회
        		if(this.areaKeyType == '1') { //TAB1 에서만 사용하기 때문에 그대로 유지 한다.
        			oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		}else if(this.areaKeyType == '2') { //Grid 입력
        			oArg.arg_searchStr = "AREANAME="+this.gridAreaName;//Grid 작업장
        		}else if(this.areaKeyType == '3') { //TAB2
        			oArg.arg_searchStr = "AREANAME="+this.searchDiv2.edt_area2.value;//TAB2 작업장
        		}
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		if(this.vendorKeyType == '1') {
        			oArg.arg_searchStr = "VENDORNAME="+this.searchDiv.edt_vendor.value;//조회조건의 협력업체
        		}else{
        			oArg.arg_searchStr = "VENDORNAME="+this.searchDiv2.edt_vendor2.value;//TAB2의 협력업체
        		}
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
        	} else if(sPopupId == "SCH_PRODUCT2") //-----------------------------TAB2
        	{
        		this.searchDiv2.edt_product2.set_value(rtn[1]);
        		this.productId2 = rtn[0]; //HIDDEN 필드
        		this.productVer2 = rtn[2]; //HIDDEN 필드
        	} else if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];
        	} else if(sPopupId == "SCH_AREA2") //-----------------------------TAB2
        	{
        		this.searchDiv2.edt_area2.set_value(rtn[1]);
        		this.areaId2 = rtn[0];
        	}else if(sPopupId == "SCH_VENDOR")
        	{
        		this.searchDiv.edt_vendor.set_value(rtn[1]);
        		this.vendorId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_VENDOR2") //-----------------------------TAB2
        	{
        		this.searchDiv2.edt_vendor2.set_value(rtn[1]);
        		this.vendorId2 = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_AREA_GRID") //Grid에서 팝업 호출 callback
        	{
        		this.ds_toolMaking.setColumn(this.ds_toolMaking.rowposition, "AREAID", rtn[0]);
        		this.ds_toolMaking.setColumn(this.ds_toolMaking.rowposition, "AREANAME", rtn[1]);
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
        	this.tomfn_getPeriodData("ds_periodType2","","fn_callBack2");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.searchDiv2.cbo_periodType2.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo();
        	this.fn_initSiteCombo2();
        }

        /*
         * 기능 : 'Site' 콤보 조회 : TAB1
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

        //TAB2
        this.fn_initSiteCombo2 = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage2.form.cbo_siteId2 // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack2"); //콜백함수 지정
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }
        this.fn_changeCustom2 = function ()
        {
        	this.searchDiv.cbo_periodType2.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }
        this.fn_setDate2 = function (periodType)
        {
        	this.searchDiv2.cal_periodFr2.set_value(this.ds_periodType2.getColumn(0,periodType+"_S"));
        	this.searchDiv2.cal_periodTo2.set_value(this.ds_periodType2.getColumn(0,periodType+"_E"));
        }

        this.fn_btnControl = function ()
        {
        	var tabIdx = this.tabDiv.tabHistory.tabindex;
        	if(tabIdx==0){
        		this.headerDiv.btn_cancel.set_visible(false);
        		this.headerDiv.btn_save.set_visible(true);
        	}else{
        		this.headerDiv.btn_cancel.set_visible(true);
        		this.headerDiv.btn_save.set_visible(false);
        	}
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

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };
        this.tab_search_Tabpage1_cbo_periodType2_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate2(e.postvalue);
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

        //TAB2
        this.tab_search_Tabpage1_btn_product2_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv2.cbo_siteId2.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT2","P00126", sArgs); //품목코드 조회
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

        //TAB2
        this.tab_search_Tabpage1_btn_area2_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv2.cbo_siteId2.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA2","P00063", sArgs); //작업장 조회
        };

        this.tab_search_Tabpage1_btn_vendor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	this.vendorKeyType = '1';
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        };

        //TAB2
        this.tab_search_Tabpage1_btn_vendor2_onclick = function(obj,e)
        {
        	var sArgs = {};
        	this.vendorKeyType = '2';
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv2.cbo_siteId2.value);

        	this.fn_openPop("SCH_VENDOR2","P00145", sArgs); //제작처(협력업체) 조회
        };

        this.tab_onchanged = function(obj,e)
        {
        	this.fn_btnControl();
        	var tabIdx = this.tabDiv.tabHistory.tabindex;
        	if(tabIdx==0){
        		this.tab_search.set_tabindex(0);
        		//this.headerDiv.btn_cancel.set_visible(true);
        		//this.headerDiv.btn_save.set_enable(false);
        	}else{
        		this.tab_search.set_tabindex(1);
        		//this.headerDiv.btn_cancel.set_visible(false);
        		//this.headerDiv.btn_save.set_enable(true);
        	}
        };

        this.div_work_tabHistory_Tabpage1_grd_toolMaking_oncloseup = function(obj,e)
        {
        	this.grd_toolMaking.updateToDataset();
        };

        this.div_work_tabHistory_Tabpage1_grd_toolMaking_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "AREANAME")) {
        		this.gridAreaName = '';
        		this.fn_areaSelectPop();
        	}
        };

        this.div_header_btn_cancel_onclick = function(obj,e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_toolMakingStatics)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveToolMakeReceiptCancel";
        	var sController 	= "/tom00300/saveToolMakeReceiptCancel.do";
        	var sInDatasets 	= "INPUT=ds_toolMakingStatics:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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

        //작업장 (TAB1)
        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = '1';
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        //작업장 (TAB2)
        this.tab_search_Tabpage1_edt_area2_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = '3';
        		this.tab_search_Tabpage1_btn_area2_onclick();
        	}
        };

        //제작업체 (TAB1)
        this.tab_search_Tabpage1_edt_vendor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_vendor_onclick();
        	}
        };

        //제작업체 (TAB2)
        this.tab_search_Tabpage1_edt_vendor2_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_vendor2_onclick();
        	}
        };

        //품목 (TAB1)
        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.productKeyType = '1';
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        //품목 (TAB2)
        this.tab_search_Tabpage1_edt_product2_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.productKeyType = '2';
        		this.tab_search_Tabpage1_btn_product2_onclick();
        	}
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_toolMaking.clearData();
        	this.ds_toolMakingStatics.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.tabInputDiv2.sta_cnt_ds_toolMakingStatics.set_text(strCnt);
        };

        this.div_work_tabHistory_Tabpage1_grd_toolMaking_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = '2';
        		this.gridAreaName = this.nfn_nvl(this.ds_toolMaking.getColumn(this.ds_toolMaking.rowposition, "AREANAME"));
        		this.fn_areaSelectPop();
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
            this.tab_search.Tabpage1.form.edt_vendor.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_vendor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_vendor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_vendor_onclick,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage2.form.cbo_siteId2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage2.form.edt_area2.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area2_onkeydown,this);
            this.tab_search.Tabpage2.form.btn_area2.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.tab_search.Tabpage2.form.edt_vendor2.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_vendor2_onkeydown,this);
            this.tab_search.Tabpage2.form.btn_vendor2.addEventHandler("onclick",this.tab_search_Tabpage1_btn_vendor_onclick,this);
            this.tab_search.Tabpage2.form.edt_product2.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product2_onkeydown,this);
            this.tab_search.Tabpage2.form.btn_product2.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage2.form.cal_periodFr2.addEventHandler("onchanged",this.fn_changeCustom2,this);
            this.tab_search.Tabpage2.form.cbo_periodType2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType2_onitemchanged,this);
            this.tab_search.Tabpage2.form.cal_periodTo2.addEventHandler("onchanged",this.fn_changeCustom2,this);
            this.tab_search.Tabpage2.form.btn_search2.addEventHandler("onclick",this.fn_search2,this);
            this.tab_search.Tabpage2.form.btn_clear2.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.tabHistory.addEventHandler("onchanged",this.tab_onchanged,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_toolMaking.addEventHandler("oncloseup",this.div_work_tabHistory_Tabpage1_grd_toolMaking_oncloseup,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_toolMaking.addEventHandler("onexpandup",this.div_work_tabHistory_Tabpage1_grd_toolMaking_onexpandup,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_toolMaking.addEventHandler("onkeyup",this.div_work_tabHistory_Tabpage1_grd_toolMaking_onkeyup,this);
            this.div_work.form.tabHistory.Tabpage2.form.grd_toolMakingStatics.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_cancel.addEventHandler("onclick",this.div_header_btn_cancel_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("TOM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
