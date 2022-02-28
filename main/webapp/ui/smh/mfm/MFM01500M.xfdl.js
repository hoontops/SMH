(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01500M");
            this.set_titletext("주요 품목 재공 실적");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_itemKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"STANDARD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D1_BASEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BASEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"D2_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"D1_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T08_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T10_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T12_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T15_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T17_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T20_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T22_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T00_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T03_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T05_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D1_BASEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BASEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"D2_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"D1_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T08_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T10_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T12_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T15_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T17_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T20_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T22_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T00_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T03_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T05_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T08_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T10_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T12_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T15_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T17_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T20_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T22_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T00_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"T03_SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"T05_SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_infoSearch",this.tab_search);
            obj.set_text("표준공정 맵핑");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("7");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_grpTitle","0","sta_date:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("3");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("NOINPUT");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_itemGrp","sta_grpTitle:5",null,"165","20",null,"sta_grpTitle:-20",null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("ds_itemKind");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("10");
            obj.set_type("filterlike");
            obj.set_autoselect("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("Static04",null,"sta_grpTitle:0","45","20","91",null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("Static05","btn_search:0",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_clearCustom","Static05:0","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_date","sta_date:5",null,"56.60%","20",null,"sta_date:-20",null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_productGrp","sta_grpTitle:5",null,"165","20",null,"sta_grpTitle:-20",null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("ds_productKind");
            obj.set_datacolumn("NAME");
            obj.set_visible("false");
            obj.set_type("filterlike");
            obj.set_displayrowcount("10");
            obj.set_autoselect("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
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

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_preload("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_Item",this.div_work.form.tab_work);
            obj.set_text("품목별");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","102","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Item.form);
            obj.set_taborder("0");
            obj.set_text("품목별 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.tabpage_Item.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Item.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_selecttype("area");
            obj.set_binddataset("ds_itemList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"주요공정\"/><Cell col=\"2\" rowspan=\"2\" text=\"전일기초\"/><Cell col=\"3\" rowspan=\"2\" text=\"금일기초\"/><Cell col=\"4\" rowspan=\"2\" text=\"현 재공\"/><Cell col=\"5\" colspan=\"13\" text=\"생산실적\"/><Cell row=\"1\" col=\"5\" text=\"D - 2\"/><Cell row=\"1\" col=\"6\" text=\"D - 1\"/><Cell row=\"1\" col=\"7\" text=\"당일실적\"/><Cell row=\"1\" col=\"8\" text=\"08:30 ~ 10:30\"/><Cell row=\"1\" col=\"9\" text=\"10:30 ~ 12:30\"/><Cell row=\"1\" col=\"10\" text=\"12:30 ~ 15:30\"/><Cell row=\"1\" col=\"11\" text=\"15:30 ~ 17:30\"/><Cell row=\"1\" col=\"12\" text=\"17:30 ~ 20:30\"/><Cell row=\"1\" col=\"13\" text=\"20:30 ~ 22:30\"/><Cell row=\"1\" col=\"14\" text=\"22:30 ~ 00:30\"/><Cell row=\"1\" col=\"15\" text=\"00:30 ~ 03:30\"/><Cell row=\"1\" col=\"16\" text=\"03:30 ~ 05:30\"/><Cell row=\"1\" col=\"17\" text=\"05:30 ~ 08:30\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:D1_BASEPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:BASEPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:WIPPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\"/><Cell col=\"5\" text=\"bind:D2_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:D1_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\"/><Cell col=\"8\" text=\"bind:T08_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:T10_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"10\" text=\"bind:T12_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"11\" text=\"bind:T15_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:T17_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"13\" text=\"bind:T20_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"14\" text=\"bind:T22_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"15\" text=\"bind:T00_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"16\" text=\"bind:T03_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"17\" text=\"bind:T05_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;D1_BASEPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"3\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;BASEPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;WIPPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;D2_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;D1_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T08_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T10_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T12_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T15_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"12\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T17_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T20_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"14\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T22_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"15\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T00_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"16\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T03_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"17\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T05_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Item.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Item.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_Item.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_Product",this.div_work.form.tab_work);
            obj.set_text("제품군별");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Product.form);
            obj.set_taborder("0");
            obj.set_text("제품군별 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.tabpage_Product.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Product.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_prodList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"주요공정\"/><Cell col=\"2\" rowspan=\"2\" text=\"전일기초\"/><Cell col=\"3\" rowspan=\"2\" text=\"금일기초\"/><Cell col=\"4\" rowspan=\"2\" text=\"현 재공\"/><Cell col=\"5\" colspan=\"13\" text=\"생산실적\"/><Cell row=\"1\" col=\"5\" text=\"D - 2\"/><Cell row=\"1\" col=\"6\" text=\"D - 1\"/><Cell row=\"1\" col=\"7\" text=\"당일실적\"/><Cell row=\"1\" col=\"8\" text=\"08:30 ~ 10:30\"/><Cell row=\"1\" col=\"9\" text=\"10:30 ~ 12:30\"/><Cell row=\"1\" col=\"10\" text=\"12:30 ~ 15:30\"/><Cell row=\"1\" col=\"11\" text=\"15:30 ~ 17:30\"/><Cell row=\"1\" col=\"12\" text=\"17:30 ~ 20:30\"/><Cell row=\"1\" col=\"13\" text=\"20:30 ~ 22:30\"/><Cell row=\"1\" col=\"14\" text=\"22:30 ~ 00:30\"/><Cell row=\"1\" col=\"15\" text=\"00:30 ~ 03:30\"/><Cell row=\"1\" col=\"16\" text=\"03:30 ~ 05:30\"/><Cell row=\"1\" col=\"17\" text=\"05:30 ~ 08:30\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:D1_BASEPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:BASEPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:WIPPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\"/><Cell col=\"5\" text=\"bind:D2_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:D1_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\"/><Cell col=\"8\" text=\"bind:T08_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:T10_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"10\" text=\"bind:T12_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"11\" text=\"bind:T15_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:T17_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"13\" text=\"bind:T20_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"14\" text=\"bind:T22_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"15\" text=\"bind:T00_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"16\" text=\"bind:T03_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"17\" text=\"bind:T05_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;D1_BASEPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"3\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;BASEPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;WIPPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;D2_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;D1_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T08_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T10_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T12_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T15_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"12\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T17_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T20_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"14\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T22_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"15\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T00_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"16\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T03_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"17\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T05_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Product.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Product.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_Product.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_Detail",this.div_work.form.tab_work);
            obj.set_text("상세조회");
            obj.set_tooltiptext("MIDDLESEGMENTGROUP");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_Detail.form);
            obj.set_taborder("0");
            obj.set_text("상세");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.tabpage_Detail.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_Detail.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"작업장명\"/><Cell col=\"2\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"5\" rowspan=\"2\" text=\"현 재공\"/><Cell col=\"6\" colspan=\"11\" text=\"생산실적\"/><Cell row=\"1\" col=\"6\" text=\"당일실적\"/><Cell row=\"1\" col=\"7\" text=\"08:30 ~ 10:30\"/><Cell row=\"1\" col=\"8\" text=\"10:30 ~ 12:30\"/><Cell row=\"1\" col=\"9\" text=\"12:30 ~ 15:30\"/><Cell row=\"1\" col=\"10\" text=\"15:30 ~ 17:30\"/><Cell row=\"1\" col=\"11\" text=\"17:30 ~ 20:30\"/><Cell row=\"1\" col=\"12\" text=\"20:30 ~ 22:30\"/><Cell row=\"1\" col=\"13\" text=\"22:30 ~ 00:30\"/><Cell row=\"1\" col=\"14\" text=\"00:30 ~ 03:30\"/><Cell row=\"1\" col=\"15\" text=\"03:30 ~ 05:30\"/><Cell row=\"1\" col=\"16\" text=\"05:30 ~ 08:30\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:WIPPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:T08_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:T10_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:T12_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"10\" text=\"bind:T15_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"11\" text=\"bind:T17_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:T20_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"13\" text=\"bind:T22_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"14\" text=\"bind:T00_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"15\" text=\"bind:T03_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"16\" text=\"bind:T05_SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\" maskeditautoselect=\"true\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;WIPPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T08_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T10_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T12_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T15_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T17_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"12\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T20_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T22_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"14\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T00_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"15\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T03_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/><Cell col=\"16\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;T05_SENDPANELQTY&quot;)\" cssclass=\"cell_blue\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_Detail.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_Detail.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_Detail.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("공정 부하 기준 정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-PM-0060");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Grid("grd_mapExcel","300","770",null,null,"0","-293",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_visible("false");
            obj.set_binddataset("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"표준공정 코드\" tooltiptext=\"STANDARDOPERATIONID\"/><Cell col=\"2\" text=\"표준공정명\" tooltiptext=\"STANDARDOPERATIONNAME\"/><Cell col=\"3\" text=\"대공정 그룹명\" tooltiptext=\"LOADTOPSEGMENTCLASSNAME\" border=\"1px solid #e0e0e0\"/><Cell col=\"4\" text=\"중공정 그룹명\" tooltiptext=\"LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"5\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"6\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"7\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"8\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"9\" text=\"생성일\" tooltiptext=\"CREATEDATE\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:WORKDONETOPSEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"4\" text=\"bind:WORKDONEMIDDLESEGMENTCLASSNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"5\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\" text=\"bind:DESCRIPTION\"/><Cell col=\"6\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"8\" text=\"bind:CREATOR\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tabpage_infoSearch.form.cal_date","value","ds_search","STANDARD_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MFM01500M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM01500M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("MFM01500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("MFM01500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 주요 공정 실적 현황판_기준정보화면
         * 파일명 		: MFM01500M.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.05.24
         *
         * 설  명		: 주요공정 실적 현황판_기준정보화면 (맵핑, 대공정, 중공정)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.24	김성현   	최초작성
         * 2021.07.17	김진현		품목그룹, 제품그룹 필터 적용
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        this.nClickTab = -1;
        this.itemKind_idx = 0;
        this.productKind_idx = 0;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("MFM01500M");
        	// 초기화 (공통)
        	this.nfn_formInit(obj);


        	this.fn_formInit();

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	var nSearchTab = this.div_work.form.tab_work.tabindex;

        	if(nSearchTab != 2)  //상세가 아니면
        	{
        		// 조회 분기 로직
        		this.fn_tabSearch(nSearchTab);
        	}
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
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

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



        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectProductKind":

        			this.AddAll(this.ds_itemKind,"CODE","NAME");
        			this.AddAll(this.ds_productKind,"CODE","NAME");

        			this.tab_search.tabpage_infoSearch.form.cbo_itemGrp.set_index(this.itemKind_idx);
        			this.tab_search.tabpage_infoSearch.form.cbo_productGrp.set_index(this.productKind_idx);

        			break;
        		case "selectItemGrpProductdefList":

        			if(this.ds_itemList.rowcount == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			}

        			break;

        		case "selectProductGrpProductdefList":

        			if(this.ds_prodList.rowcount == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			}

        			break;

        		case "selectItemGrpProductdefDetailList":

        			if(this.ds_detail.rowcount == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			}

        			this.div_work.form.tab_work.set_tabindex(2);

        			break;

        		case "selectProductGrpProductdefDetailList":

        			if(this.ds_detail.rowcount == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			}

        			this.div_work.form.tab_work.set_tabindex(2);

        			break;


        		default:

        			break;
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_tabSearch = function (nIdx)
        {
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID"     , this.gf_getSiteType());

        	switch(nIdx) {
        		case 0: //품목별
        			this.ds_search.setColumn(0, "PRODUCTDEFCLASSGROUPNAME", this.tab_search.tabpage_infoSearch.form.cbo_itemGrp.value);


        			// 품목별 조회
        			var sSvcID 			= "selectItemGrpProductdefList";
        			var sController 	= "/mfm01500/selectItemGrpProductdefList.do";
        			var sInDatasets 	= "INPUT=ds_search";
        			var sOutDatasets 	= "ds_itemList=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        			break;
        		case 1: //제품군별
        			this.ds_search.setColumn(0, "PRODUCTDEFGROUPNAME", this.tab_search.tabpage_infoSearch.form.cbo_productGrp.value);

        			// 제품군별 조회
        			var sSvcID 			= "selectProductGrpProductdefList";
        			var sController 	= "/mfm01500/selectProductGrpProductdefList.do";
        			var sInDatasets 	= "INPUT=ds_search";
        			var sOutDatasets 	= "ds_prodList=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;
        // 		case 2: //상세조회
        // 			this.ds_midMain.clearData();
        //
        // 			selectItemGrpProductdefDetailList
        // 			selectProductGrpProductdefDetailList
        //
        // 			// 상세조회 조회
        // 			var sSvcID 			= "selectDetailProductdefList";
        // 			var sController 	= "/mfm01500/selectDetailProductdefList.do";
        // 			var sInDatasets 	= "INPUT=ds_search";
        // 			var sOutDatasets 	= "ds_detail=output";
        // 			var sArgs 			= "";
        // 			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        //
        // 			break;
        		default:
        	}
        };


        this.fn_initCombo = function (nTabIdx)
        {

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());

        	// 품목그룹, 제품군그룹 조회
        	var sSvcID 			= "selectProductKind";
        	var sController 	= "/mfm01500/selectProductKind.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_itemKind=output1 ds_productKind=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        this.fn_changeCombo = function (nTabIdx)
        {

        	var nObjDs;
        	switch(nTabIdx) {
        		case 0: // 품목별
        			this.tab_search.tabpage_infoSearch.form.sta_grpTitle.set_text("품목그룹");
        			this.tab_search.tabpage_infoSearch.form.cbo_itemGrp.set_visible(true);
        			this.tab_search.tabpage_infoSearch.form.cbo_productGrp.set_visible(false);

        			if(this.tab_search.tabpage_infoSearch.form.cbo_itemGrp.index > -1)
        				this.itemKind_idx = this.tab_search.tabpage_infoSearch.form.cbo_itemGrp.index;


        			break;
        		case 1: // 제품군별
        			this.tab_search.tabpage_infoSearch.form.sta_grpTitle.set_text("제품군그룹");
        			this.tab_search.tabpage_infoSearch.form.cbo_itemGrp.set_visible(false);
        			this.tab_search.tabpage_infoSearch.form.cbo_productGrp.set_visible(true);

        			if(this.tab_search.tabpage_infoSearch.form.cbo_productGrp.index > -1)
        				this.productKind_idx = this.tab_search.tabpage_infoSearch.form.cbo_productGrp.index;

        			break;
        		default:
        	}
        }


        this.fn_formInit = function()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 메인(날짜)
        	// 날짜 처리, 날짜 테스트, 서버 일시
        	var sYDate 		= this.nfn_getCurrentSystemTime(0,0,'yesterday');
        	var arrDate 	= sYDate.split(",");
        	var sDateFrom 	= arrDate[1];		// 어제
        	var sDate 		= arrDate[2];			// 오늘
        	var sDateTo 	= arrDate[0];		// 현재
        	var sTime 		= sDateTo.substring(8,14);
        	// 08:30 이전이면 전날 선택
        	var nRdate = "";
        	if(parseInt(sTime) >= parseInt('083000'))
        	{
        		this.tab_search.tabpage_infoSearch.form.cal_date.set_value(sDate);	//(this.gfn_today()); // 08:30 이후 이면 오늘 날짜
        	}
        	else
        	{
        		this.tab_search.tabpage_infoSearch.form.cal_date.set_value(sDateFrom); // 08:30 이전 이면 어제 날짜
        	}

        	this.itemKind_idx = 0;
        	this.productKind_idx = 0;

        	this.div_work.form.tab_work.set_tabindex(0);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo(0);

        // 	// 그리드 팝업창 x 버튼 추가(표준공정)
        // 	var nMapXTopIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_T_BTN");
        // 	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXTopIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        // 	var nMapXMidIdx 	= this.div_work.form.tab_work.tabpage_map.form.grd_map.getBindCellIndex("body","X_M_BTN");
        // 	this.div_work.form.tab_work.tabpage_map.form.grd_map.setCellProperty("body",nMapXMidIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지
        //
        // 	// 복사 기능 - 21.04.23 맵핑(대/중) 복사 기능
        // 	this.div_work.form.tab_work.tabpage_map.form.grd_map.removeEventHandler("onkeydown", this.nfn_grd_onkeydown , this);
        // 	this.gfn_setGridCopyPaste(this.div_work.form.tab_work.tabpage_map.form.grd_map);
        //
        // 	// (21.04.23) 기능 추가_[복사 붙여 넣기 시 대/중 공정 코드 설정]
        // 	this.div_work.form.tab_work.tabpage_map.form.grd_map.addEventHandler( "onkeydown"
        // 							, this.fn_gridKeyDown
        // 							, this
        // 							);
        //
        // 	// 품목코드 x 버튼 이벤트 설정
        // 	this.tab_search.tabpage_mapSearch.form.btn_edt_mainProcGrp.setEventHandler( "onclick", this.fn_clickMainProcGrp, this );
        // 	this.tab_search.tabpage_mapSearch.form.btn_edt_midProcGrp.setEventHandler( "onclick", this.fn_clickMidProcGrp, this );



        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/




        this.div_work_tab_work_onchanged = function(obj,e)
        {
        	this.fn_changeCombo(e.postindex);
        };


        // 품목별
        this.div_work_tab_work_tabpage_Item_grd_main_oncellclick = function(obj,e)
        {
        	console.log("e.cell >>" + e.cell);
        	console.log("e.col >>" + e.col);
        	console.log("e.row >>" + e.row);

        	if(e.col == 4 || e.col == 7)
        	{
        		//	ds_itemList


        		//상세조회
        		this.ds_search.setColumn(0, "PROCESSSEGMENTNAME"	, this.ds_itemList.getColumn(e.row, "PROCESSSEGMENTNAME"));
        		this.ds_search.setColumn(0, "PROCESSSEGMENTID"		, this.ds_itemList.getColumn(e.row, "PROCESSSEGMENTID"));
        		this.ds_search.setColumn(0, "PROCESSSEGMENTVERSION"	, this.ds_itemList.getColumn(e.row, "PROCESSSEGMENTVERSION"));

        		// 상세조회 조회
        		var sSvcID 			= "selectItemGrpProductdefDetailList";
        		var sController 	= "/mfm01500/selectItemGrpProductdefDetailList.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_detail=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}
        };

        // 제품군별
        this.div_work_tab_work_tabpage_Product_grd_main_oncellclick = function(obj,e)
        {
        //	ds_prodList
        	console.log("e.cell >>" + e.cell);
        	console.log("e.col >>" + e.col);
        	console.log("e.row >>" + e.row);

        	if(e.col == 4 || e.col == 7)
        	{
        		this.ds_search.setColumn(0, "PROCESSSEGMENTNAME"	, this.ds_prodList.getColumn(e.row, "PROCESSSEGMENTNAME"));
        		this.ds_search.setColumn(0, "PROCESSSEGMENTID"		, this.ds_prodList.getColumn(e.row, "PROCESSSEGMENTID"));
        		this.ds_search.setColumn(0, "PROCESSSEGMENTVERSION"	, this.ds_prodList.getColumn(e.row, "PROCESSSEGMENTVERSION"));


        		// 상세조회 조회
        		var sSvcID 			= "selectProductGrpProductdefDetailList";
        		var sController 	= "/mfm01500/selectProductGrpProductdefDetailList.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_detail=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}

        };



        // // 품목별 엑셀 다운로드
        // this.div_work_tab_work_tabpage_Item_btn_xlDn_grd_mapExcel_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sName = "div_work.form.tab_work.tabpage_Item.form.grd_main";
        // 	// 저장될 엑셀명
        // 	var file_name = "품목별 재공실적";
        // 	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        // };
        //
        // // 제품군별 엑셀 다운로드
        // this.div_work_tab_work_tabpage_Product_btn_xlDn_grd_topMain_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sName = "div_work.form.tab_work.tabpage_Product.form.grd_main";
        // 	// 저장될 엑셀명
        // 	var file_name =  "제품군별 재공실적";
        // 	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        // };
        //
        // // 상세조회 엑셀 다운로드
        // this.div_work_tab_work_tabpage_Detail_btn_xlDn_grd_midMain_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var sName = "div_work.form.tab_work.tabpage_Detail.form.grd_detail";
        // 	// 저장될 엑셀명
        // 	var file_name = "재공실적 상세조회"
        // 	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        // };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tabpage_infoSearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tabpage_infoSearch.form.btn_clearCustom.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.tabpage_infoSearch.form.cbo_productGrp.addEventHandler("onitemchanged",this.tab_search_tabpage_infoSearch_cbo_productGrp_onitemchanged,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.div_work_tab_work_onchanged,this);
            this.div_work.form.tab_work.tabpage_Item.form.grd_main.addEventHandler("oncellclick",this.div_work_tab_work_tabpage_Item_grd_main_oncellclick,this);
            this.div_work.form.tab_work.tabpage_Product.form.grd_main.addEventHandler("oncellclick",this.div_work_tab_work_tabpage_Product_grd_main_oncellclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("MFM01500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
