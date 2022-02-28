(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00200M");
            this.set_titletext("Claim 기타비용 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEYESNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_osmOspetcclaimamount", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSEQUENCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLAIMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMUSER\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ETCLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"RELKEYNO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","2","64","295",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","235","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","235","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","387","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","387",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID",null,"35","148","20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_00","0","61","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID",null,"61","148","20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_OSPVENDORID",null,"61","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","0","86","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORNAME","108","86",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_01","0","112","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("05CA3CAD5FFF4A36916B10CF981DD22D");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","14","137","89","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01","0","163","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYESNO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_CLOSEYESNO","108","163","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID_id","60","331",null,"20","85",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID_id","60","361",null,"20","85",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_requestdate_from","108","112","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_requestdate_to","108","137","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","9","56","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","31","24","2",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","34",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","40","16","145","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","31","24","61",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_osmOspetcclaimamount","-1","35",null,null,"1","198",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_osmOspetcclaimamount");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"45\"/><Column size=\"163\"/><Column size=\"94\"/><Column size=\"259\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"CLAIM일자\"/><Cell col=\"1\" text=\"CLAIM순번\"/><Cell col=\"2\" text=\"CLAIM구분\"/><Cell col=\"3\" text=\"CLAIM부서ID\"/><Cell col=\"4\" text=\"CLAIM등록자\"/><Cell col=\"5\" text=\"CLAIM등록자명\"/><Cell col=\"6\" text=\"작업장 ID\"/><Cell col=\"7\" text=\"작업장\"/><Cell col=\"8\" text=\"협력사 ID\"/><Cell col=\"9\" text=\"협력사 명\"/><Cell col=\"10\" text=\"품목코드\"/><Cell col=\"11\" text=\"Rev\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"금액\"/><Cell col=\"14\" text=\"설명\"/><Cell col=\"15\" text=\"마감년월\" tooltiptext=\"CLOSEYM\"/></Band><Band id=\"body\"><Cell text=\"bind:CLAIMDATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"1\" text=\"bind:CLAIMSEQUENCE\"/><Cell col=\"2\" text=\"bind:CLAIMTYPE\" combocodecol=\"C,ClaimType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:CLAIMDEPARTMENT\"/><Cell col=\"4\" text=\"bind:CLAIMUSER\"/><Cell col=\"5\" text=\"bind:CLAIMUSERNAME\"/><Cell col=\"6\" text=\"bind:AREAID\"/><Cell col=\"7\" text=\"bind:AREANAME\"/><Cell col=\"8\" text=\"bind:OSPVENDORID\"/><Cell col=\"9\" text=\"bind:OSPVENDORNAME\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"13\" text=\"bind:CLAIMAMOUNT\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:DESCRIPTION\"/><Cell col=\"15\" text=\"bind:PERIODID\"/></Band><Band id=\"summary\"><Cell colspan=\"13\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;parseFloat(CLAIMAMOUNT)&quot;)&#9;\" displaytype=\"number\"/><Cell col=\"14\" colspan=\"2\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","175","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Claim 기타비용 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_OUTSOURCEDCLAIMBASEAMOUNT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_osmOspetcclaimamount","sta_subTitle:20","0",null,"34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_osmOspetcclaimamount",null,"8","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_osmOspetcclaimamount",null,"9","26","24","61",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"9","26","24","35",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div","-3",null,null,"199","0","3",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00","6","48","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("0");
            obj.set_text("CLAIM 일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLAIMDATE");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00","6","73","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("1");
            obj.set_text("CLAIM 구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLAIMTYPE");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"68","45","5","773",null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("2");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","6","97","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("3");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00_00","6","145","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("4");
            obj.set_text("ETC LOT ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ETCLOTID");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Combo("cbo_CLAIMTYPE","112","73","105","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("5");
            obj.set_innerdataset("");
            obj.set_codecolumn("C,ClaimType,SEL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01","376","49","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("6");
            obj.set_text("CLAIM부서");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLAIMDEPARTMENT");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00_00","376","145","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("7");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AMOUNT");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new MaskEdit("msk_AMOUNT","486","145","170","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("8");
            obj.set_format("#,###");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_01_00","6","170","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("9");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DESCRIPTION");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_CLAIMSEQUENCE","224","49","65","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_DEPARTMENT","486","49","170","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","12","7","175","34",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("12");
            obj.set_text("기타 Claim 비용 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OTHEROUTSOURCEDCLAIMCOSTREGISTRATION");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Calendar("cal_CLAIMDATE","112","49","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00","376","74","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("14");
            obj.set_text("CLAIM등록자명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLAIMUSERNAME");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_CLAIMUSERNAME","486","74","170","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","112","121","168","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_id","282","121","42","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID","327","121","22","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_nm","351","121","305","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_01","6","121","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("20");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00_01","376","97","103","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("21");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORNAME");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORNAME","486","97","170","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID_nm","112","97","212","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Button("btn_AREAID","327","97","22","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_DESCRIPTION","112","170","544","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_ETCLOTID","112","145","211","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFID","698","22",null,"20","118",null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("27");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFVERSION","698","52",null,"20","118",null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.form.div.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","div_work.form.edt_PRODUCTDEFID_nm","value","ds_osmOspetcclaimamount","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.edt_PRODUCTDEFID_id","value","ds_osmOspetcclaimamount","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.form.div.form.cbo_CLAIMTYPE","value","ds_osmOspetcclaimamount","CLAIMTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.div.form.msk_AMOUNT","value","ds_osmOspetcclaimamount","CLAIMAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.div.form.edt_CLAIMSEQUENCE","value","ds_osmOspetcclaimamount","CLAIMSEQUENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.div.form.edt_DEPARTMENT","value","ds_osmOspetcclaimamount","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.div.form.cal_CLAIMDATE","value","ds_osmOspetcclaimamount","CLAIMDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.div.form.edt_CLAIMUSERNAME","value","ds_osmOspetcclaimamount","CLAIMUSERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.div.form.edt_PRODUCTDEFID","value","ds_osmOspetcclaimamount","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.div.form.edt_PRODUCTDEFID_id","value","ds_osmOspetcclaimamount","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.div.form.edt_PRODUCTDEFID_nm","value","ds_osmOspetcclaimamount","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.div.form.edt_OSPVENDORNAME","value","ds_osmOspetcclaimamount","OSPVENDORNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.div.form.edt_AREAID_nm","value","ds_osmOspetcclaimamount","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.div.form.edt_DESCRIPTION","value","ds_osmOspetcclaimamount","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.div.form.edt_ETCLOTID","value","ds_osmOspetcclaimamount","ETCLOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.div.form.edt_PROCESSDEFID","value","ds_productInformatByOsp","PROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.edt_PROCESSDEFID2","value","ds_productInformatByOsp","TOPROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.div.form.edt_PROCESSDEFVERSION","value","ds_productInformatByOsp","PROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.edt_PROCESSDEFVERSION2","value","ds_productInformatByOsp","TOPROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OSM00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Claim 기타비용 등록
         * 파일명 		: OSM00200M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: Claim 기타비용 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
         * 2021.06.24   김진현      저장시 마감년월인 정보 삭제,수정,등록인 경우 오류 발생!
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// (21.07.01) - 추가 협력사 id x 버튼 이벤트 수정
        	this.tab_search.Tabpage1.form.btn_edt_OSPVENDORID.setEventHandler("onclick", this.fn_xClickOSPVENDORID, this );

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.tab_search_Tabpage1_cbo_period_onitemchanged();
        	this.ds_CClaimTypeSEL.filter("LOOKUP_CODE!='DefectScrap'");
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_plantid";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_osmOspetcclaimamount.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_AREAID_id.value);
        	// (21.07.01) 협력사id 수정
        	//this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID.value);
        	this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.value);

        	this.ds_search.setColumn(0, "CLAIMDATE_PERIODFR", this.tab_search.Tabpage1.form.cal_requestdate_from.value);
        	this.ds_search.setColumn(0, "CLAIMDATE_PERIODTO", this.tab_search.Tabpage1.form.cal_requestdate_to.value);
        	this.ds_search.setColumn(0, "OSPVENDORNAME", this.tab_search.Tabpage1.form.edt_OSPVENDORNAME.value);
        	this.ds_search.setColumn(0, "CLOSEYESNO", this.tab_search.Tabpage1.form.cbo_CLOSEYESNO.value);

        	var sSvcID = "selectOsmOspetcclaimamountList";
        	var sController = "/osm00200/selectOsmOspetcclaimamountList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_osmOspetcclaimamount=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_osmOspetcclaimamount) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	if (!this.gfn_GridKeyCheck(this.div_work.form.grd_osmOspetcclaimamount, ["CLAIMDATE", "CLAIMTYPE", "AREAID", "CLAIMAMOUNT"])) return;


        	//trace("저정전 확인 : "+this.ds_osmOspetcclaimamount.saveXML());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveOsmOspetcclaimamount";
        	var sController = "/osm00200/saveOsmOspetcclaimamount.do";
        	var sInDatasets = "INPUT=ds_osmOspetcclaimamount:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
        {
        	var component = this.div_work;
        	var strColIdList = "edt_PRODUCTDEFID,edt_PRODUCTDEFID2_nm";
        	var strColNmList = "PRODUCTDEFID,TOPRODUCTDEFID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if(this.div_work.form.edt_PRODUCTDEFID.value == this.div_work.form.edt_PRODUCTDEFID2.value
        		&& this.div_work.form.edt_PRODUCTDEFVERSION.value == this.div_work.form.edt_PRODUCTDEFID2_id.value ){
        		this.gfn_Message("InValidOspRequiredField", "TOPRODUCTDEFID", "error", "ok");
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_productInformatByOsp) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "deleteOsmOspetcclaimamount";
        	var sController = "/osm00200/deleteOsmOspetcclaimamount.do";
        	var sInDatasets = "INPUT=ds_productInformatByOsp";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message(errMsg, "", "error", "ok");
        		//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveOsmOspetcclaimamount")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "deleteOsmOspetcclaimamount")
        		{
        			this.gfn_Message("SuccessOspProcess", null, "info", "ok");
        			this.fn_search();
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "AREA")
        	{
        		this.tab_search.Tabpage1.form.edt_AREAID_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_AREAID.set_value(rtn[1]);
        	}
        	if(sPopupId == "AREA2")
        	{
        		this.ds_osmOspetcclaimamount.setColumn(this.ds_osmOspetcclaimamount.rowposition,"AREAID",rtn[0]);
        		this.div_work.form.div.form.edt_AREAID_nm.set_value(rtn[1]);
        		this.ds_osmOspetcclaimamount.setColumn(this.ds_osmOspetcclaimamount.rowposition,"OSPVENDORID",rtn[2]);
        		this.div_work.form.div.form.edt_OSPVENDORNAME.set_value(rtn[3]);

        		trace(this.ds_osmOspetcclaimamount.saveXML());
        	}
        	if(sPopupId == "OSPVENDORID")
        	{
        		this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value(rtn[1]);
        	}
        	if(sPopupId == "PRODUCTDEFID")
        	{
        		this.div_work.form.div.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        		this.div_work.form.div.form.edt_PRODUCTDEFID_nm.set_value(rtn[1]);
        		this.div_work.form.div.form.edt_PRODUCTDEFID_id.set_value(rtn[2]);
        		this.div_work.form.div.form.edt_PROCESSDEFID.set_value(rtn[3]);
        		this.div_work.form.div.form.edt_PROCESSDEFVERSION.set_value(rtn[4]);
        	}

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 협력사 x 버튼 이벤트 (21.07.01)
         */
        this.fn_xClickOSPVENDORID  = function ()
        {
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value("");
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.Tabpage1.form.cbo_period.value; //var val = e.postvalue
        	if(this.gfn_isNull(val)) return;

        	var sDate = this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0000";

        	var requestdateFrom = this.tab_search.Tabpage1.form.cal_requestdate_from.value;
        	var requestdateTo = this.tab_search.Tabpage1.form.cal_requestdate_to.value;

        	if(!this.gfn_isNull(requestdateFrom) && requestdateTo.length>=12){
        		sTime = requestdateTo.substring(8,12);
        	}
        	this.tab_search.Tabpage1.form.cal_requestdate_from.set_value(sDateFrom+sTime);
        //	if(!this.gfn_isNull(requestdateTo) && requestdateTo.length==12){
        //		sTime = requestdateTo.substring(8,12);
        //	}
        	this.tab_search.Tabpage1.form.cal_requestdate_to.set_value(sDateTo+sTime);
        };

        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	var popupId = "AREA";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00232";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "AREANAME="+this.tab_search.Tabpage1.form.edt_AREAID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.tab_search_Tabpage1_btn_OSPVENDORID_onclick = function(obj,e)
        {
        	var popupId = "OSPVENDORID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00233";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "OSPVENDORID|OSPVENDORNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;

        	//(21.07.01) 협력사 수정
        	//oArg.arg_searchStr = "OSPVENDORNAME="+this.tab_search.Tabpage1.form.edt_OSPVENDORID.value;
        	oArg.arg_searchStr = "OSPVENDORNAME="+this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_div_btn_AREAID_onclick = function(obj,e)
        {
        	var popupId = "AREA2";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00232";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME|OSPVENDORID|OSPVENDORNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "AREANAME="+this.div_work.form.div.form.edt_AREAID_nm.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_div_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var popupId = "PRODUCTDEFID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00215";
        	oArg.arg_popupNm = "품목코드";
        	oArg.arg_rtnCols =  "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION|PROCESSDEFID|PROCESSDEFVERSION";
        	oArg.arg_paramCols = "ENTERPRISEID|PLANTID";
        	oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value;
        //	oArg.arg_paramCols = "ENTERPRISEID|PLANTID|"+(this.gfn_isNull(this.div_work.form.edt_PRODUCTDEFVERSION.value)?"1":"PRODUCTDEFVERSION");
        //	oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value+"|"+(this.gfn_isNull(this.div_work.form.edt_PRODUCTDEFVERSION.value)?"1":this.div_work.form.edt_PRODUCTDEFVERSION.value);
        	oArg.arg_searchStr = "PRODUCTDEFID="+this.div_work.form.div.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_btn_addRow_ds_osmOspetcclaimamount_onclick = function(obj,e)
        {
        	var nRow = this.ds_osmOspetcclaimamount.rowposition;
        	this.ds_osmOspetcclaimamount.setColumn(nRow,"CLAIMDATE",this.fv_currDate.substring(0,8));
        	this.ds_osmOspetcclaimamount.setColumn(nRow,"CLAIMDEPARTMENT",this.gf_getDeptCd());
        	this.ds_osmOspetcclaimamount.setColumn(nRow,"DEPARTMENT",this.gf_getDeptNm());
        	this.ds_osmOspetcclaimamount.setColumn(nRow,"CLAIMUSER",this.gf_getUserId());
        	this.ds_osmOspetcclaimamount.setColumn(nRow,"CLAIMUSERNAME",this.gf_getUserNm());
        	this.ds_osmOspetcclaimamount.setColumn(nRow,"PLANTID",this.tab_search.Tabpage1.form.cbo_plantid.value);
        };

        this.div_work_btn_delRow_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.ds_osmOspetcclaimamount.getColumn(this.ds_osmOspetcclaimamount.rowposition,"PERIODID"))){
        		this.gfn_Message("InValidOspData014", null, "info", "ok");
        		return;
        	}
        	if(this.ds_osmOspetcclaimamount.getRowType(this.ds_osmOspetcclaimamount.rowposition)!=2){
        		var bOK = this.gfn_Message("OspDoProcessWant", "DELETE", "conf", "yesno");//삭제 처리를 하시겠습니까?
        		if (bOK == false) return;
        	}

        	this.ds_osmOspetcclaimamount.deleteRow(this.ds_osmOspetcclaimamount.rowposition);
        };

        this.div_work_grd_osmOspetcclaimamount_onselectchanged = function(obj,e)
        {
        	if(!this.gfn_isNull(this.ds_osmOspetcclaimamount.getColumn(this.ds_osmOspetcclaimamount.rowposition,"PERIODID"))){
        		this.div_work.form.btn_delRow.set_enable(false);
        	}else{
        		this.div_work.form.btn_delRow.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_OSPVENDORID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_OSPVENDORID_onclick,this);
            this.tab_search.Tabpage1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_period_onitemchanged,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.grd_osmOspetcclaimamount.addEventHandler("onselectchanged",this.div_work_grd_osmOspetcclaimamount_onselectchanged,this);
            this.div_work.form.btn_addRow_ds_osmOspetcclaimamount.addEventHandler("onclick",this.div_work_btn_addRow_ds_osmOspetcclaimamount_onclick,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.div_work_btn_delRow_onclick,this);
            this.div_work.form.div.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.div_work_div_btn_PRODUCTDEFID_onclick,this);
            this.div_work.form.div.form.btn_AREAID.addEventHandler("onclick",this.div_work_div_btn_AREAID_onclick,this);
        };
        this.loadIncludeScript("OSM00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
