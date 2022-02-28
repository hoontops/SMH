(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01400M");
            this.set_titletext("주요 공정 실적 현황판");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQFIRST\" type=\"STRING\" size=\"256\"/><Column id=\"SEQDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLEFTORRIGHTDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodDivisioList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainHead", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainLeft", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQFIRST\" type=\"STRING\" size=\"256\"/><Column id=\"SEQDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLEFTORRIGHTDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainRight", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQFIRST\" type=\"STRING\" size=\"256\"/><Column id=\"SEQDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLEFTORRIGHTDISPLAY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailLeft", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("G:+WORKDONETOPSEGMENTCLASSID+WORKDONEMIDDLESEGMENTCLASSID");
            obj.set_loadkeymode("keep");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAMEBYLANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailRight", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAMEBYLANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailHead", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchSum", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sumLeftMain", this);
            obj.set_useclientlayout("true");
            obj.set_keystring("G:+PROCESSSEGMENTID");
            obj.set_loadkeymode("keep");
            obj._setContents("<ColumnInfo><Column id=\"WORKDONTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONETOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKDONEMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAMEBYLANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sumLeftHead", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sumRightMain", this);
            obj.set_useclientlayout("true");
            obj.set_loadkeymode("keep");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAMEBYLANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_3_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_3_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_3_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_3_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_4_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_4_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_4_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_4_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_5_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_5_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_5_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_5_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_6_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_6_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_6_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_6_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_3_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_4_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_5_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_6_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sumRightHead", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailInpStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetailInpStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailHeadInpStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailNotInpStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D_0_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_1_SUM_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"D_2_SUM_PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailHeadNotInpStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetailNotInpStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKDONESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_infoSearch",this.tab_search);
            obj.set_text("부하량 기준정보");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("2");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodClassType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("3");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("4");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodClassType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_text("");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_date","108","10","56.60%","20",null,null,null,null,null,null,this.tab_search.tabpage_infoSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tabpage_infoSearch.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_detail",this.tab_search);
            obj.set_text("상세화면 검색조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","108","10","56.60%","20",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Static("sta_prodClassType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("2");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Combo("cmb_prodClassType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,N");
            obj.set_enable("false");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("4");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_enable("false");
            obj.set_text("");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_enable("false");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_detail.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_enable("false");
            this.tab_search.tabpage_detail.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_inputstatusdetail",this.tab_search);
            obj.set_text("상세화면 검색조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","108","10","56.60%","20",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Static("sta_prodClassType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("2");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Combo("cmb_prodClassType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,N");
            obj.set_enable("false");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("4");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_enable("false");
            obj.set_text("");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_enable("false");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_inputstatusdetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_enable("false");
            this.tab_search.tabpage_inputstatusdetail.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_procSummary_s",this.tab_search);
            obj.set_text("소계상세 검색 조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Calendar("cal_date","108","10","56.60%","20",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Static("sta_prodClassType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("2");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Combo("cmb_prodClassType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,N");
            obj.set_enable("false");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision00","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("4");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_enable("false");
            obj.set_text("");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_enable("false");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_procSummary_s.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_enable("false");
            this.tab_search.tabpage_procSummary_s.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_areaSummary_s",this.tab_search);
            obj.set_text("소계상세 검색 조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_enable("false");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_enable("false");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision00","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("2");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_enable("false");
            obj.set_text("");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Combo("cmb_prodClassType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,N");
            obj.set_enable("false");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Static("sta_prodClassType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("5");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("6");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Calendar("cal_date","108","10","56.60%","20",null,null,null,null,null,null,this.tab_search.tabpage_areaSummary_s.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.tab_search.tabpage_areaSummary_s.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_notinputstatusdetail",this.tab_search);
            obj.set_text("미투입 상세화면 검색조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_date","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("0");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3E392D215E044E78941233EDDB74906D");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Calendar("cal_date","108","10","56.60%","20",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Static("sta_prodClassType","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("2");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CB397083D10E400AA29B0D91A6FB8E1B");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Combo("cmb_prodClassType","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,N");
            obj.set_enable("false");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("4");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E6CFFD81784B43AA8DECDCB5BCC7AD8E");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","108","60","165","20",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_enable("false");
            obj.set_text("");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_enable("false");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tabpage_notinputstatusdetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_enable("false");
            this.tab_search.tabpage_notinputstatusdetail.addChild(obj.name, obj);

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
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_main",this.div_work.form.tab_work);
            obj.set_text("메인화면");
            obj.set_tooltiptext("D276BE3AA71F479B9A5BD3654AB989E4");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_mainR",null,"0","49.50%",null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_main.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_mainRight");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"No\" tooltiptext=\"NO\"/><Cell col=\"1\" rowspan=\"3\" text=\"대공정그룹\" tooltiptext=\"TOPSEGMENTGROUP\"/><Cell col=\"2\" colspan=\"5\" text=\"D - day\"/><Cell col=\"7\" colspan=\"5\" text=\"D - 1\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"4\" colspan=\"3\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"9\" colspan=\"3\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"2\" col=\"2\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"3\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"4\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"5\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"6\" text=\"금액(백만원)\" tooltiptext=\"AMOUNTS100\"/><Cell row=\"2\" col=\"7\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"8\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"9\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"10\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"11\" text=\"금액(백만원)\" tooltiptext=\"AMOUNTS100\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WORKDONESEGMENTCLASSNAME\" textAlign=\"left\" cssclass=\"expr:WORKDONESEGMENTCLASSID != &apos;INPUTSTATUS&apos; ? &apos;cell_linkTxt&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:D_0_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\" cssclass=\"cell_red,cell_bg_yellow\"/><Cell col=\"3\" text=\"bind:D_0_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"4\" text=\"bind:D_0_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\" cssclass=\"cell_red,cell_bg_blue\"/><Cell col=\"5\" text=\"bind:D_0_SUM_WIPMMQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" text=\"bind:D_0_SUM_PRICE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"!#,##0\" text=\"bind:D_1_SUM_INPUTPNLQTY\" textAlign=\"right\" cssclass=\"cell_red,cell_bg_yellow\"/><Cell col=\"8\" text=\"bind:D_1_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"9\" text=\"bind:D_1_SUM_WIPPANELQTY\" displaytype=\"mask\" maskeditformat=\"!#,##0\" textAlign=\"right\" cssclass=\"cell_red,cell_bg_blue\"/><Cell col=\"10\" text=\"bind:D_1_SUM_WIPMMQTY\" displaytype=\"mask\" maskeditformat=\"!#,##0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:D_1_SUM_PRICE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_sumTitle()\"/><Cell col=\"2\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_0_SUM_INPUTPNLQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"3\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_0_SUM_INPUTMMQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"4\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_0_SUM_WIPPANELQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"5\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_0_SUM_WIPMMQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_0_SUM_PRICE&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"7\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_1_SUM_INPUTPNLQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"8\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_1_SUM_INPUTMMQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"9\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_1_SUM_WIPPANELQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"10\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_1_SUM_WIPMMQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"11\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setColSum(&quot;D_1_SUM_PRICE&quot;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_main.addChild(obj.name, obj);

            obj = new Grid("grd_mainL","0","0",null,null,"grd_mainR:5","0",null,null,null,null,this.div_work.form.tab_work.tabpage_main.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_mainLeft");
            obj.set_selecttype("area");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"No\" tooltiptext=\"NO\"/><Cell col=\"1\" rowspan=\"3\" text=\"대공정 그룹\" tooltiptext=\"TOPSEGMENTGROUP\"/><Cell col=\"2\" colspan=\"5\" text=\"D - day\"/><Cell col=\"7\" colspan=\"5\" text=\"D - 1\"/><Cell row=\"1\" col=\"2\" colspan=\"2\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"4\" colspan=\"3\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"9\" colspan=\"3\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"2\" col=\"2\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"3\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"4\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"5\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"6\" text=\"금액(백만원)\" tooltiptext=\"AMOUNTS100\"/><Cell row=\"2\" col=\"7\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"8\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"9\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"2\" col=\"10\" text=\"MM\" tooltiptext=\"OSPTOLOTTYPEMMQTY\"/><Cell row=\"2\" col=\"11\" text=\"금액(백만원)\" tooltiptext=\"AMOUNTS100\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WORKDONESEGMENTCLASSNAME\" textAlign=\"left\" cssclass=\"cell_linkTxt\"/><Cell col=\"2\" text=\"bind:D_0_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\" cssclass=\"cell_red,cell_bg_yellow\"/><Cell col=\"3\" text=\"bind:D_0_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"4\" text=\"bind:D_0_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\" cssclass=\"cell_red,cell_bg_blue\"/><Cell col=\"5\" text=\"bind:D_0_SUM_WIPMMQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" text=\"bind:D_0_SUM_PRICE\" displaytype=\"mask\" maskeditformat=\"!#,##0\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"!#,##0\" text=\"bind:D_1_SUM_INPUTPNLQTY\" textAlign=\"right\" cssclass=\"cell_red,cell_bg_yellow\"/><Cell col=\"8\" text=\"bind:D_1_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"9\" text=\"bind:D_1_SUM_WIPPANELQTY\" displaytype=\"mask\" maskeditformat=\"!#,##0\" textAlign=\"right\" cssclass=\"cell_red,cell_bg_blue\"/><Cell col=\"10\" text=\"bind:D_1_SUM_WIPMMQTY\" displaytype=\"mask\" maskeditformat=\"!#,##0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:D_1_SUM_PRICE\" displaytype=\"mask\" maskeditformat=\"!#,##0\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_main.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_detail",this.div_work.form.tab_work);
            obj.set_text("상세화면");
            obj.set_tooltiptext("detailview");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_detail.form);
            obj.set_taborder("0");
            obj.set_text("상세화면");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("detailview");
            this.div_work.form.tab_work.tabpage_detail.addChild(obj.name, obj);

            obj = new Grid("grd_detailR",null,"34","45%",null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_detail.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detailRight");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"2\" rowspan=\"2\" text=\"표준공정\" tooltiptext=\"C8C37E329F284218852BE09DFEE42256\"/><Cell col=\"3\" colspan=\"3\" text=\"D-day\"/><Cell col=\"6\" colspan=\"3\" text=\"D-1\"/><Cell col=\"9\" colspan=\"3\" text=\"D-2\"/><Cell row=\"1\" col=\"3\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"4\" text=\"재공\" tooltiptext=\"C5856A5468EA4A28A19CA3D5DD030A6F\"/><Cell row=\"1\" col=\"5\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"6\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"7\" text=\"재공\" tooltiptext=\"C5856A5468EA4A28A19CA3D5DD030A6F\"/><Cell row=\"1\" col=\"8\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"9\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"10\" text=\"재공\" tooltiptext=\"C5856A5468EA4A28A19CA3D5DD030A6F\"/><Cell row=\"1\" col=\"11\" text=\"금액\" tooltiptext=\"AMOUNTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:AREANAME\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"2\" text=\"expr:dataset.getRowLevel(currow) == 0 ? PROCESSSEGMENTNAMEBYLANGUAGE  : comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;YIELDSUMTYPE&quot;)\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" suppress=\"2\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_linkTxt&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow)==0?D_0_SUM_INPUTPNLQTY:comp.parent.parent.parent.parent.parent.parent.fn_sumR(&apos;D_0_SUM_INPUTPNLQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"expr:dataset.getRowLevel(currow)==0?D_0_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sumR(&apos;D_0_SUM_WIPPANELQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue,cell_bg_gray&apos; : &apos;cell_bg_gray&apos;\"/><Cell col=\"5\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_0_SUM_PRICE\"/><Cell col=\"6\" text=\"expr:dataset.getRowLevel(currow)==0?D_1_SUM_INPUTPNLQTY:comp.parent.parent.parent.parent.parent.parent.fn_sumR(&apos;D_1_SUM_INPUTPNLQTY&apos;,currow)\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"mask\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"expr:dataset.getRowLevel(currow)==0?D_1_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sumR(&apos;D_1_SUM_WIPPANELQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue,cell_bg_gray&apos; : &apos;cell_bg_gray&apos;\"/><Cell col=\"8\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_1_SUM_PRICE\"/><Cell col=\"9\" text=\"expr:dataset.getRowLevel(currow)==0?D_2_SUM_INPUTPNLQTY:comp.parent.parent.parent.parent.parent.parent.fn_sumR(&apos;D_2_SUM_INPUTPNLQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"expr:dataset.getRowLevel(currow)==0?D_2_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sumR(&apos;D_2_SUM_WIPPANELQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue,cell_bg_gray&apos; : &apos;cell_bg_gray&apos;\"/><Cell col=\"11\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_2_SUM_PRICE\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;SUM&quot;)\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_INPUTPNLQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_WIPPANELQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"5\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_PRICE,0)&apos;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_INPUTPNLQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_WIPPANELQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"8\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_PRICE,0)&apos;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_INPUTPNLQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_WIPPANELQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"11\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_PRICE,0)&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_detail.addChild(obj.name, obj);

            obj = new Grid("grd_detailL","0","34",null,null,"grd_detailR:5","0",null,null,null,null,this.div_work.form.tab_work.tabpage_detail.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detailLeft");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"대공정 그룹\" tooltiptext=\"TOPSEGMENTGROUP\"/><Cell col=\"2\" rowspan=\"2\" text=\"중공정 그룹\" tooltiptext=\"MIDDLESEGMENTGROUP\"/><Cell col=\"3\" rowspan=\"2\" text=\"표준공정\" tooltiptext=\"PROCESSSEGMENTEXTLIST\"/><Cell col=\"4\" colspan=\"3\" text=\"D-day\"/><Cell col=\"7\" colspan=\"3\" text=\"D-1\"/><Cell col=\"10\" colspan=\"3\" text=\"D-2\"/><Cell row=\"1\" col=\"4\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"5\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"1\" col=\"6\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"7\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"8\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"1\" col=\"9\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"10\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"11\" text=\"재공\" tooltiptext=\"A06DB90F81F6448C9B9E961AF4CABC08\"/><Cell row=\"1\" col=\"12\" text=\"금액\" tooltiptext=\"AMOUNTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:WORKDONTOPSEGMENTCLASSNAME\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"2\" text=\"bind:WORKDONEMIDDLESEGMENTCLASSNAME\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" suppress=\"2\" suppressalign=\"first\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? PROCESSSEGMENTNAMEBYLANGUAGE  : comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;YIELDSUMTYPE&quot;)\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_linkTxt&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"expr:dataset.getRowLevel(currow)==0?D_0_SUM_INPUTPNLQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum(&apos;D_0_SUM_INPUTPNLQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue&apos; : &apos;&apos;\"/><Cell col=\"5\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue,cell_bg_gray&apos; : &apos;cell_bg_gray&apos;\" text=\"expr:dataset.getRowLevel(currow)==0?D_0_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum(&apos;D_0_SUM_WIPPANELQTY&apos;,currow)\"/><Cell col=\"6\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:D_0_SUM_PRICE\"/><Cell col=\"7\" text=\"expr:dataset.getRowLevel(currow)==0?D_1_SUM_INPUTPNLQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum(&apos;D_1_SUM_INPUTPNLQTY&apos;,currow)\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"mask\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"expr:dataset.getRowLevel(currow)==0?D_1_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum(&apos;D_1_SUM_WIPPANELQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue,cell_bg_gray&apos; : &apos;cell_bg_gray&apos;\"/><Cell col=\"9\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:D_1_SUM_PRICE\"/><Cell col=\"10\" text=\"expr:dataset.getRowLevel(currow)==0?D_2_SUM_INPUTPNLQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum(&apos;D_2_SUM_INPUTPNLQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"expr:dataset.getRowLevel(currow)==0?D_2_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum(&apos;D_2_SUM_WIPPANELQTY&apos;,currow)\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"expr:dataset.getRowLevel(currow) != 0 ? &apos;cell_blue,cell_bg_gray&apos; : &apos;cell_bg_gray&apos;\"/><Cell col=\"12\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:D_2_SUM_PRICE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;SUM&quot;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_INPUTPNLQTY,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_WIPPANELQTY,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\"/><Cell col=\"6\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_PRICE,0)&apos;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_INPUTPNLQTY,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_WIPPANELQTY,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\"/><Cell col=\"9\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_PRICE,0)&apos;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_INPUTPNLQTY,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_WIPPANELQTY,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\"/><Cell col=\"12\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_PRICE,0)&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_detail.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_inputstatus",this.div_work.form.tab_work);
            obj.set_text("투입현황상세");
            obj.set_tooltiptext("INPUTSTATUSDETAIL");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","190","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_inputstatus.form);
            obj.set_taborder("0");
            obj.set_text("주요 공정 실적_투입 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WorkDoneSegmentInputStatus");
            this.div_work.form.tab_work.tabpage_inputstatus.addChild(obj.name, obj);

            obj = new Grid("grd_InputStatusDetail","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_inputstatus.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detailInpStatus");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"STOPPROCESSSEGMENTNAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" colspan=\"3\" text=\"D-day\"/><Cell col=\"7\" colspan=\"3\" text=\"D-day\"/><Cell col=\"10\" colspan=\"3\" text=\"D-day\"/><Cell row=\"1\" col=\"4\" text=\"투입 PNL\" tooltiptext=\"INPUTPNL\"/><Cell row=\"1\" col=\"5\" text=\"투입 MM\" tooltiptext=\"INPUTMM\"/><Cell row=\"1\" col=\"6\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"7\" text=\"투입 PNL\" tooltiptext=\"INPUTPNL\"/><Cell row=\"1\" col=\"8\" text=\"투입 MM\" tooltiptext=\"INPUTMM\"/><Cell row=\"1\" col=\"9\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"10\" text=\"투입 PNL\" tooltiptext=\"INPUTPNL\"/><Cell row=\"1\" col=\"11\" text=\"투입 MM\" tooltiptext=\"INPUTMM\"/><Cell row=\"1\" col=\"12\" text=\"금액\" tooltiptext=\"AMOUNTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" suppress=\"1\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:D_0_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"5\" text=\"bind:D_0_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_0_SUM_PRICE\"/><Cell col=\"7\" text=\"bind:D_1_SUM_INPUTPNLQTY\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" edittype=\"none\" cssclass=\"cell_bg_gray\"/><Cell col=\"8\" text=\"bind:D_1_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"9\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_1_SUM_PRICE\"/><Cell col=\"10\" text=\"bind:D_2_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"11\" text=\"bind:D_2_SUM_INPUTMMQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"12\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_2_SUM_PRICE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;SUM&quot;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_INPUTPNLQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_INPUTMMQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_PRICE,0)&apos;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_INPUTPNLQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_INPUTMMQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"9\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_PRICE,0)&apos;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_INPUTPNLQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_INPUTMMQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"12\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_PRICE,0)&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_inputstatus.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_procSummary",this.div_work.form.tab_work);
            obj.set_text("소계 상세");
            obj.set_tooltiptext("SUMMARYDETAIL");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_procSummary.form);
            obj.set_taborder("1");
            obj.set_text("상세화면(소계)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DETAILVIEWSUM");
            this.div_work.form.tab_work.tabpage_procSummary.addChild(obj.name, obj);

            obj = new Grid("grd_SummaryDetailL","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_procSummary.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_sumLeftMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"표준공정\" tooltiptext=\"C8C37E329F284218852BE09DFEE42256\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" colspan=\"3\" text=\"D-day\"/><Cell col=\"7\" colspan=\"3\" text=\"D-day\"/><Cell col=\"10\" colspan=\"3\" text=\"D-day\"/><Cell row=\"1\" col=\"4\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"5\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"6\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"7\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"8\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"9\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"10\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"11\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"12\" text=\"금액\" tooltiptext=\"AMOUNTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAMEBYLANGUAGE\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" suppress=\"1\"/><Cell col=\"2\" text=\"expr:dataset.getRowLevel(currow) == 0 ? PRODUCTDEFID  : comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;SUM&quot;)\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:D_0_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_INPUTPNLQTY,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\" cssclass=\"cell_bg_gray\"/><Cell col=\"5\" text=\"bind:D_0_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_WIPPANELQTY,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\"/><Cell col=\"6\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_0_SUM_PRICE\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_PRICE,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\"/><Cell col=\"7\" text=\"bind:D_1_SUM_INPUTPNLQTY\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_INPUTPNLQTY,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\" edittype=\"none\" cssclass=\"cell_bg_gray\"/><Cell col=\"8\" text=\"bind:D_1_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_WIPPANELQTY,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\"/><Cell col=\"9\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_1_SUM_PRICE\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_PRICE,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\"/><Cell col=\"10\" text=\"bind:D_2_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_INPUTPNLQTY,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\" cssclass=\"cell_bg_gray\"/><Cell col=\"11\" text=\"bind:D_2_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_WIPPANELQTY,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\"/><Cell col=\"12\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_2_SUM_PRICE\" expr=\"dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_PRICE,0)&apos;, dataset.getGroupRangeStart(currow), dataset.getGroupRangeStart(currow)+dataset.getGroupRangeCount(currow))\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_procSummary.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_areaSummary",this.div_work.form.tab_work);
            obj.set_text("소계 상세");
            obj.set_tooltiptext("SUMMARYDETAIL");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_areaSummary.form);
            obj.set_taborder("0");
            obj.set_text("상세화면(소계)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DETAILVIEWSUM");
            this.div_work.form.tab_work.tabpage_areaSummary.addChild(obj.name, obj);

            obj = new Grid("grd_SummaryDetailR","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_areaSummary.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_sumRightMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"자원명\" tooltiptext=\"RESOURCENAME\"/><Cell col=\"2\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"STOPPROCESSSEGMENTNAME\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" colspan=\"3\" text=\"D-day\"/><Cell col=\"8\" colspan=\"3\" text=\"D-day\"/><Cell col=\"11\" colspan=\"3\" text=\"D-day\"/><Cell col=\"14\" colspan=\"3\" text=\"D-day\"/><Cell col=\"17\" colspan=\"3\" text=\"D-day\"/><Cell col=\"20\" colspan=\"3\" text=\"D-day\"/><Cell col=\"23\" colspan=\"3\" text=\"D-day\"/><Cell row=\"1\" col=\"5\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"6\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"7\" tooltiptext=\"AMOUNTS\" text=\"금액\"/><Cell row=\"1\" col=\"8\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"9\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"10\" tooltiptext=\"AMOUNTS\" text=\"금액\"/><Cell row=\"1\" col=\"11\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"12\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"13\" tooltiptext=\"AMOUNTS\" text=\"금액\"/><Cell row=\"1\" col=\"14\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"15\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"16\" tooltiptext=\"AMOUNTS\" text=\"금액\"/><Cell row=\"1\" col=\"17\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"18\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"19\" tooltiptext=\"AMOUNTS\" text=\"금액\"/><Cell row=\"1\" col=\"20\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"21\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"22\" tooltiptext=\"AMOUNTS\" text=\"금액\"/><Cell row=\"1\" col=\"23\" text=\"실적\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell row=\"1\" col=\"24\" text=\"재공\" tooltiptext=\"PROPANELQTY\"/><Cell row=\"1\" col=\"25\" tooltiptext=\"AMOUNTS\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RESOURCENAME\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAMEBYLANGUAGE\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" suppress=\"4\"/><Cell col=\"5\" text=\"bind:D_0_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" text=\"bind:D_0_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"7\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_0_SUM_PRICE\"/><Cell col=\"8\" text=\"bind:D_1_SUM_INPUTPNLQTY\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:D_1_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"10\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_1_SUM_PRICE\"/><Cell col=\"11\" text=\"bind:D_2_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"12\" text=\"bind:D_2_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"13\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_2_SUM_PRICE\"/><Cell col=\"14\" text=\"bind:D_3_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"15\" text=\"bind:D_3_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"16\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_3_SUM_PRICE\"/><Cell col=\"17\" text=\"bind:D_4_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"18\" text=\"bind:D_4_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"19\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_4_SUM_PRICE\"/><Cell col=\"20\" text=\"bind:D_5_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"21\" text=\"bind:D_5_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"22\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_5_SUM_PRICE\"/><Cell col=\"23\" text=\"bind:D_6_SUM_INPUTPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"24\" text=\"bind:D_6_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"25\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:D_6_SUM_PRICE\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;SUM&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_0_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_0_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"7\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_0_SUM_PRICE,0),2)&apos;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_1_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_1_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"10\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_1_SUM_PRICE,0),2)&apos;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_2_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_2_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"13\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_2_SUM_PRICE,0),2)&apos;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_3_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_3_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"16\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_3_SUM_PRICE,0),2)&apos;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_4_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_4_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"19\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_4_SUM_PRICE,0),2)&apos;)\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_5_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_5_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"22\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_5_SUM_PRICE,0),2)&apos;)\"/><Cell col=\"23\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_6_SUM_INPUTPNLQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"24\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_6_SUM_WIPPANELQTY,0),2)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"25\" maskeditformat=\"!#,##0\" textAlign=\"right\" displaytype=\"mask\" text=\"expr:dataset.getSum(&apos;nexacro.round(nexacro.toNumber(D_6_SUM_PRICE,0),2)&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_areaSummary.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_notinputstatus",this.div_work.form.tab_work);
            obj.set_text("미투입현황상세");
            obj.set_tooltiptext("INPUTSTATUSDETAIL");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","190","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_notinputstatus.form);
            obj.set_taborder("0");
            obj.set_text("주요 공정 실적_미투입 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.tabpage_notinputstatus.addChild(obj.name, obj);

            obj = new Grid("grd_NotInputStatusDetail","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_notinputstatus.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detailNotInpStatus");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목유형구분\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell col=\"5\" rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"6\" colspan=\"3\" text=\"D-day\"/><Cell col=\"9\" colspan=\"3\" text=\"D-day\"/><Cell col=\"12\" colspan=\"3\" text=\"D-day\"/><Cell row=\"1\" col=\"6\" text=\"PNL\" tooltiptext=\"PLANPNLQTY\"/><Cell row=\"1\" col=\"7\" text=\"MM\" tooltiptext=\"MM\"/><Cell row=\"1\" col=\"8\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"9\" text=\"PNL\" tooltiptext=\"PLANPNLQTY\"/><Cell row=\"1\" col=\"10\" text=\"MM\" tooltiptext=\"MM\"/><Cell row=\"1\" col=\"11\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"PLANPNLQTY\"/><Cell row=\"1\" col=\"13\" text=\"MM\" tooltiptext=\"MM\"/><Cell row=\"1\" col=\"14\" text=\"금액\" tooltiptext=\"AMOUNTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFTYPE\" suppress=\"0\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRODUCTIONTYPE\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\" suppress=\"0\"/><Cell col=\"6\" text=\"bind:D_0_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"7\" text=\"bind:D_0_SUM_WIPMMQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"8\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_0_SUM_PRICE\"/><Cell col=\"9\" text=\"bind:D_1_SUM_WIPPANELQTY\" combocodecol=\"C,LoadSegmentClassType,,Y,N\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" edittype=\"none\" cssclass=\"cell_bg_gray\"/><Cell col=\"10\" text=\"bind:D_1_SUM_WIPMMQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"11\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_1_SUM_PRICE\"/><Cell col=\"12\" text=\"bind:D_2_SUM_WIPPANELQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\" cssclass=\"cell_bg_gray\"/><Cell col=\"13\" text=\"bind:D_2_SUM_WIPMMQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"!#,##0\"/><Cell col=\"14\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##0\" text=\"bind:D_2_SUM_PRICE\"/></Band><Band id=\"summary\"><Cell colspan=\"6\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_YieldSum(&quot;SUM&quot;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_WIPPANELQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_WIPMMQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_0_SUM_PRICE,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_WIPPANELQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_WIPMMQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_1_SUM_PRICE,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_WIPPANELQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_WIPMMQTY,0)&apos;)\" displaytype=\"mask\" maskeditformat=\"!#,##0\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&apos;nexacro.toNumber(D_2_SUM_PRICE,0)&apos;)\" maskeditformat=\"!#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_notinputstatus.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_resetC",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MFM01400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM01400M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("MFM01400M.xfdl","lib::lib_bas.xjs");
        this.registerScript("MFM01400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 주요 공정 실적 현황판
         * 파일명 		: MFM01400M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.23
         *
         * 설  명		:  주요 공정 실적 현황판 메인/상세
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.23	김진현   	최초작성
         * 2021.07.14   김진현		[수정] 미투입현황 추가
         * 2021.07.30	김진현		[수정] 메인 헤더 정보 2일치만 나오도록 설정, 메인 금액 추가(메인, 미투입, 투입) 완료 (나머지 남음)
         * 2021.08.05	김진현		[수정] 합계의 경우 (투입현황, 미투입 현황 제외) fn_setColSum 함수 수정
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//BAS 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        //this.searchDiv = this.div_work.form.div_search.form;

        this.fv_ownerId 		= "";			// 담당자Id

        this.fv_personPos		= 0;			// 담당자Tab Rowpos

        this.fv_segmentRelPos	= 0;			// 표준공정 Tab Rowpos

        this.fv_ProdSegmentPos	= 0;			// 부하량 기준정보 Tab Rowpos


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

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


        	// 메인 그리드 헤더 이벤트 제거(정렬 기준 쿼리에서 가져옴)
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_main.form.grd_mainL);
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_main.form.grd_mainR);

        	// (21.07.07) cell 이동 불가 따로 설정
        	this.div_work.form.tab_work.tabpage_main.form.grd_mainL.set_cellmovingtype("none");
        	this.div_work.form.tab_work.tabpage_main.form.grd_mainR.set_cellmovingtype("none");

        	// 상세 그리드 헤더 이벤트 제거(정렬 기준 쿼리에서 가져옴)
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_detail.form.grd_detailL);
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_detail.form.grd_detailR);

        	// (21.07.07) cell 이동 불가 따로 설정
        	this.div_work.form.tab_work.tabpage_detail.form.grd_detailL.set_cellmovingtype("none");
        	this.div_work.form.tab_work.tabpage_detail.form.grd_detailR.set_cellmovingtype("none");

        	// 소계 상세 (Left)
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_procSummary.form.grd_SummaryDetailL);
        	// (21.07.07) cell 이동 불가 따로 설정
        	this.div_work.form.tab_work.tabpage_procSummary.form.grd_SummaryDetailL.set_cellmovingtype("none");

        	// 소계 상세 (작업장)
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_areaSummary.form.grd_SummaryDetailR);
        	// (21.07.07) cell 이동 불가 따로 설정
        	this.div_work.form.tab_work.tabpage_areaSummary.form.grd_SummaryDetailR.set_cellmovingtype("none");


        	// 투입현황상세
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_inputstatus.form.grd_InputStatusDetail);
        	// (21.07.07) cell 이동 불가 따로 설정
        	this.div_work.form.tab_work.tabpage_inputstatus.form.grd_InputStatusDetail.set_cellmovingtype("none");

        	// 미투입현황상세 (21.07.14)
        	this.basfn_removeEventGrid(this.div_work.form.tab_work.tabpage_notinputstatus.form.grd_NotInputStatusDetail);
        	// 미투입 cell 이동 불가 따로 설정
        	this.div_work.form.tab_work.tabpage_notinputstatus.form.grd_NotInputStatusDetail.set_cellmovingtype("none");


        	// tab 초기화
        	this.fn_setInitTab();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	var nSearchTab = this.tab_search.tabindex;

        	// 조회 분기 로직
        	this.fn_tabSearch(nSearchTab);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

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
        	if (errCD != 0)
        	{
        		if (trId == "saveProcGrpList")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectPlantList10001": 			//[조회조건] Period dataset Callback

        			this.fn_getProdDivision();

        			break;

        		case "selectWorkDoneQtyMainList": 			//[메인조회]

        			if((this.ds_main.rowcount == 0) || this.ds_mainHead.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// 그리드 헤더 설정
        			this.fn_setMainGridHead();
        			// Left, Right 그리드 내용 설정
        			this.fn_setMainGridLR();

        			break;

        		case "selectProdDivision": 		// 필터 조건 (제품구분) - 메인사용
        			this.ds_prodDivisioList.insertRow(0);
        			this.ds_prodDivisioList.setColumn(0,"CODEID"  ,"");
        			this.ds_prodDivisioList.setColumn(0,"CODENAME",this.nfn_getDictionaryname("ALLVIEWS",true));
        			//this.tab_search.tabpage_personSearch.form.cmb_prodDivision.set_value("");		// 불필요
        			this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.set_value("");
        			break;

        		case "selectWorkDoneQtyDetailList": 		// Detail 조회 완료

        			if((this.ds_detailLeft.rowcount == 0))// || this.ds_mainHead.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}



        			// Test용
        			/*
        			var nAdd = this.ds_detailLeft.addRow();
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONTOPSEGMENTCLASSNAME", "UV LASER(RTR)");
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONETOPSEGMENTCLASSID", "TOP60");
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONEMIDDLESEGMENTCLASSNAME", "RTR UV-LASER");
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONEMIDDLESEGMENTCLASSID", "MIDDLE70");
        			this.ds_detailLeft.setColumn(nAdd, "PROCESSSEGMENTNAMEBYLANGUAGE", "TEST0001");
        			this.ds_detailLeft.setColumn(nAdd, "PROCESSSEGMENTID", "20161011");
        			this.ds_detailLeft.setColumn(nAdd, "D_0_SUM_INPUTPNLQTY", "1001.5");
        			this.ds_detailLeft.setColumn(nAdd, "D_0_SUM_WIPPANELQTY", "0");
        			this.ds_detailLeft.setColumn(nAdd, "D_1_SUM_INPUTPNLQTY", "123");
        			this.ds_detailLeft.setColumn(nAdd, "D_1_SUM_WIPPANELQTY", "12");
        			this.ds_detailLeft.setColumn(nAdd, "D_2_SUM_INPUTPNLQTY", "213");
        			this.ds_detailLeft.setColumn(nAdd, "D_2_SUM_WIPPANELQTY", "12");
        			*/
        			// Test용
        			/*
        			var nAdd = this.ds_detailLeft.addRow();
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONTOPSEGMENTCLASSNAME", "UV LASER(RTR)");
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONETOPSEGMENTCLASSID", "TOP60");
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONEMIDDLESEGMENTCLASSNAME", "RTR UV-LASER");
        			this.ds_detailLeft.setColumn(nAdd, "WORKDONEMIDDLESEGMENTCLASSID", "MIDDLE70");
        			this.ds_detailLeft.setColumn(nAdd, "PROCESSSEGMENTNAMEBYLANGUAGE", "TEST0002");
        			this.ds_detailLeft.setColumn(nAdd, "PROCESSSEGMENTID", "20161012");
        			this.ds_detailLeft.setColumn(nAdd, "D_0_SUM_INPUTPNLQTY", "121.5");
        			this.ds_detailLeft.setColumn(nAdd, "D_0_SUM_WIPPANELQTY", "0");
        			this.ds_detailLeft.setColumn(nAdd, "D_1_SUM_INPUTPNLQTY", "123");
        			this.ds_detailLeft.setColumn(nAdd, "D_1_SUM_WIPPANELQTY", "12");
        			this.ds_detailLeft.setColumn(nAdd, "D_2_SUM_INPUTPNLQTY", "213");
        			this.ds_detailLeft.setColumn(nAdd, "D_2_SUM_WIPPANELQTY", "12");
        			*/

        			// Test용
        			/*
        			var nAdd = this.ds_detailRight.addRow();
        			this.ds_detailRight.setColumn(nAdd, "AREAID", "477");
        			this.ds_detailRight.setColumn(nAdd, "AREANAME", "RTR UV_B2F");
        			this.ds_detailRight.setColumn(nAdd, "PROCESSSEGMENTNAMEBYLANGUAGE", "TEST0001");
        			this.ds_detailRight.setColumn(nAdd, "PROCESSSEGMENTID", "20161011");
        			this.ds_detailRight.setColumn(nAdd, "D_0_SUM_INPUTPNLQTY", "1001.5");
        			this.ds_detailRight.setColumn(nAdd, "D_0_SUM_WIPPANELQTY", "0");
        			this.ds_detailRight.setColumn(nAdd, "D_1_SUM_INPUTPNLQTY", "123");
        			this.ds_detailRight.setColumn(nAdd, "D_1_SUM_WIPPANELQTY", "12");
        			this.ds_detailRight.setColumn(nAdd, "D_2_SUM_INPUTPNLQTY", "213");
        			this.ds_detailRight.setColumn(nAdd, "D_2_SUM_WIPPANELQTY", "12");
        			*/
        			// 상세 Left 소계 설정
        			this.ds_detailLeft.set_keystring("G:+WORKDONETOPSEGMENTCLASSID+WORKDONEMIDDLESEGMENTCLASSID");

        			// 상세 Right 소계 설정
        			this.ds_detailRight.set_keystring("G:+AREAID");

        			// 그리드 헤더 설정
        			this.fn_setDetailGridHead();

        			break;

        		case "selectWorkDoneSummaryLeftList": 		// 대/중 소계 조회 완료

        			if((this.ds_sumLeftMain.rowcount == 0))// || this.ds_mainHead.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// Test용
        			/*
        			var nAdd = this.ds_sumLeftMain.addRow();
        			this.ds_sumLeftMain.setColumn(nAdd, "WORKDONTOPSEGMENTCLASSNAME", "UV LASER(RTR)");
        			this.ds_sumLeftMain.setColumn(nAdd, "WORKDONETOPSEGMENTCLASSID", "TOP60");
        			this.ds_sumLeftMain.setColumn(nAdd, "WORKDONEMIDDLESEGMENTCLASSNAME", "RTR UV-LASER");
        			this.ds_sumLeftMain.setColumn(nAdd, "WORKDONEMIDDLESEGMENTCLASSID", "MIDDLE70");
        			this.ds_sumLeftMain.setColumn(nAdd, "PROCESSSEGMENTNAMEBYLANGUAGE", "RTR UV-LASER");
        			this.ds_sumLeftMain.setColumn(nAdd, "PROCESSSEGMENTID", "2016101");

        			this.ds_sumLeftMain.setColumn(nAdd, "PRODUCTDEFID", "1025149S2");
        			this.ds_sumLeftMain.setColumn(nAdd, "PRODUCTDEFNAME", "AMB999RD01 DIGITIZER(3L)");

        			this.ds_sumLeftMain.setColumn(nAdd, "D_0_SUM_INPUTPNLQTY", "1001.5");
        			this.ds_sumLeftMain.setColumn(nAdd, "D_0_SUM_WIPPANELQTY", "0");
        			this.ds_sumLeftMain.setColumn(nAdd, "D_1_SUM_INPUTPNLQTY", "123");
        			this.ds_sumLeftMain.setColumn(nAdd, "D_1_SUM_WIPPANELQTY", "12");
        			this.ds_sumLeftMain.setColumn(nAdd, "D_2_SUM_INPUTPNLQTY", "213");
        			this.ds_sumLeftMain.setColumn(nAdd, "D_2_SUM_WIPPANELQTY", "12");
        			*/

        			// 상세 Left - 대/중 소계 조회 후 그룹 설정
        			this.ds_sumLeftMain.set_keystring("G:+PROCESSSEGMENTID");


        			// 그리드 헤더 설정
        			this.fn_setSumLeftGridHead();

        			break;

        		case "selectWorkDoneSummaryRightList": 		// 작업장 소계 조회 완료

        			if((this.ds_sumRightMain.rowcount == 0))// || this.ds_mainHead.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// 그리드 헤더 설정
        			this.fn_setSumRightGridHead();

        			break;
        		case "selectWorkDoneINPUTSTATUSDetail": 		// 작업장 투입완료(상세) 조회 완료

        			if((this.ds_detailInpStatus.rowcount == 0))// || this.ds_mainHead.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}
        			// 그리드 헤더 설정
        			this.fn_setGridInputStatusHead();

        			break;

        		case "selectWorkDoneNOTINPUTSTATUSDetail": 		//  미투입 현황 상세 조회 완료 (21.07.14)

        			if((this.ds_detailNotInpStatus.rowcount == 0))// || this.ds_mainHead.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}
        			// 그리드 헤더 설정
        			this.fn_setGridNotInputStatusHead();
        			break;

        	default:

        	}

        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "TOP_PROC_GRP" :	// 대공정그룹  (미사용)
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nTop = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nTop += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_topSearch.form.edt_topProc.set_value(nTop);
        			}
        			else
        			{
        				this.tab_search.tabpage_topSearch.form.edt_topProc.set_value("");
        			}
        			break;

        		default :
        			break;
        	}
        };

         /*
         * 기능(공통팝업) : 조회
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
        	var opts = "width=600,height=600";

        	oArg.arg_type = "CA";		// 멀티 선택
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00245"){ // 대공정 그룹 조회 (미사용)
        		oArg.arg_rtnCols = "WORKDONESEGMENTCLASSID";							// 코드만 받아온다
        		oArg.arg_searchStr = "1=1|TXTWORKDONETOPSEGMENTCLASS="+this.tab_search.tabpage_topSearch.form.edt_topProc.value;	// 대
        	}



        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_tabSearch = function (nIdx)
        {
        	switch(nIdx) {
        		case 0:	// 메인
        			this.ds_main.clearData();			// 메인 ds 초기화
        			this.ds_mainLeft.clearData();		// 메인 left ds 초기화
        			this.ds_mainRight.clearData();		// 메인 right ds 초기화
        			this.ds_mainHead.clearData();		// 메인 헤더

        			// 조회시 초기화
        			// tab 초기화
        			this.fn_setInitTab();

        			// Main에서만 조회 할 것!
        			this.fn_searchInfo();				// 주요공정 실적현황판 메인 조회
        			break;
        		/*
        		case 1:	// 상세
        			this.ds_detail.clearData();			// 상세 ds 초기화
        			this.ds_detailLeft.clearData();		// 상세 left ds 초기화
        			this.ds_detailRight.clearData();	// 상세 right ds 초기화

        			// Main에서만 조회 할 것!
        			this.fn_searchDetailInfo();			// 주요공정 실적현황판 상세 조회

        			break;
        		*/
        		default:
        	}
        };


        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();
        }
        /*
         * 기능 : 'site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	this.ds_search.clearData();

        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectPlantList10001";
        	var sController 	= "/pcm08400/selectPlantList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_plant=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        /*
         *	필터 제품구분 콤보 (메인)
         */
        this.fn_getProdDivision = function ()
        {
        	this.ds_searchFilter.clearData();
        	// 조회 조건 설정
        	this.ds_searchFilter.addRow();
        	this.ds_searchFilter.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchFilter.setColumn(0, "CODECLASSID"		, "ProductDivision2"); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectProdDivision";
        	var sController 	= "/pcm08400/selectTypeList.do";
        	var sInDatasets 	= "INPUT=ds_searchFilter";
        	var sOutDatasets 	= "ds_prodDivisioList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        /*
         * 필터 조건의 초기화 설정
         */
        this.fn_initSearch = function ()
        {
        	var nSearchTab = this.tab_search.tabindex;
        	switch(nSearchTab) {
        		case 0:	// 메인화면
        			this.tab_search.tabpage_infoSearch.form.cal_date.set_value(this.gfn_today()); //오늘일자 (date)
        			this.tab_search.tabpage_infoSearch.form.cmb_prodClassType.set_index(0);
        			this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.set_index(0);
        			break;

        		default:
        	}
        };


        /*
         * 주요공정실적 현황판 (메인) 조회
         */
        this.fn_searchInfo  = function ()
        {
        	this.ds_searchInfo.clearData();					// 조회 조건
        	this.ds_searchInfo.addRow();

        	this.ds_searchInfo.setColumn(0,"ENTERPRISEID"		,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchInfo.setColumn(0,"PLANTID"			,this.gf_getSiteType());
        	this.ds_searchInfo.setColumn(0,"P_DATE"				,this.tab_search.tabpage_infoSearch.form.cal_date.value);			// 기준일
        	this.ds_searchInfo.setColumn(0,"P_PRODCLASSTYPE"	,this.tab_search.tabpage_infoSearch.form.cmb_prodClassType.value);	// 양산구분
        	this.ds_searchInfo.setColumn(0,"P_PRODDIVISION"	    ,this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.value);	// 제품구분

        	//trace(" [검색조건] : "+this.ds_searchInfo.saveXML());

        	var sSvcID 			= "selectWorkDoneQtyMainList";
        	var sController 	= "/mfm01400/selectWorkDoneQtyMainList.do";
        	var sInDatasets 	= "INPUT=ds_searchInfo";
        	var sOutDatasets 	= "ds_main=output1 ds_mainHead=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 메인 그리드 헤더 설정
         */
        this.fn_setMainGridHead = function ()
        {
        	var nCnt = this.ds_mainHead.rowcount-1;		// (21.07.30) 메인 헤더 정보 2일치만 나오도록 설정
        	for(var i = 0; i<nCnt; i++)
        	{
        		var nTitle = this.ds_mainHead.getColumn(i,"TITLE");
        		this.div_work.form.tab_work.tabpage_main.form.grd_mainL.setCellProperty('head',(i+2),'text',nTitle);
        		this.div_work.form.tab_work.tabpage_main.form.grd_mainR.setCellProperty('head',(i+2),'text',nTitle);
        	}
        };
        /*
         * [Main] 조회된 내용으로  L,R그리드 설정
         */
        this.fn_setMainGridLR = function ()
        {
        	this.ds_mainLeft.set_enableevent(false);
        	this.ds_mainRight.set_enableevent(false);

        	var nCnt = this.ds_main.rowcount;
        	for(var i = 0 ; i<nCnt; i++)
        	{
        		var nDisplay = this.ds_main.getColumn(i, "ISLEFTORRIGHTDISPLAY");
        		if(nDisplay == 'LEFT')
        		{
        			var nAddLeft = this.ds_mainLeft.addRow();
        			this.ds_mainLeft.copyRow(nAddLeft, this.ds_main, i);
        		}
        		else
        		{
        			var nAddRight = this.ds_mainRight.addRow();
        			this.ds_mainRight.copyRow(nAddRight, this.ds_main, i);
        		}
        	}
        	this.ds_mainLeft.set_enableevent(true);
        	this.ds_mainRight.set_enableevent(true);
        };

        /*
         *	그리드 합계 부분 다국어 적용
         */
        this.fn_sumTitle = function ()
        {
        	return this.nfn_getDictionaryname("TOTALAMOUNT",true);
        };

        /*
         * 합계 계산
         */
        this.fn_setColSum = function (nCol)
        {
        	var nCnt 	= this.ds_main.rowcount;
        	var nRe		= 0;
        	for(var i = 2 ; i<nCnt; i++)		// i = 0  -> i = 2로 수정 미투입, 투입 현황 합계에서 제외 (21.08.05)
        	{
        		var nNum = this.ds_main.getColumn(i, nCol);
        		nRe += parseFloat(nNum);
        	}
        	return nexacro.round(nRe, 2);
        };

        /*
         * main -> 상세로 조회
         */
        this.fn_searchDetail = function (nClassId)
        {
        	// 조회 조건 담는다.
        	var nDay 			= this.tab_search.tabpage_infoSearch.form.cal_date.value;
        	var nProdClassType	= this.tab_search.tabpage_infoSearch.form.cmb_prodClassType.value;
        	var nProdDivision	= this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.value;
        	this.tab_search.tabpage_detail.form.cal_date.set_value(nDay);
        	this.tab_search.tabpage_detail.form.cmb_prodClassType.set_value(nProdClassType);
        	this.tab_search.tabpage_detail.form.cmb_prodDivision.set_value(nProdDivision);

        	// tab 이동
        	this.tab_search.set_tabindex(1);
        	this.div_work.form.tab_work.set_tabindex(1);
        	// 조회 (메인이랑 필터 조건 같고 추가 (대공정 하나 추가 ))
        	var nSearchTab = this.tab_search.tabindex;
        	// 조회 분기 로직
        	//this.fn_tabSearch(nSearchTab);

        	this.ds_detailLeft.clearData();		// 상세 left ds 초기화
        	this.ds_detailRight.clearData();	// 상세 right ds 초기화
        	this.ds_detailHead.clearData()		// 상세 헤더 정보

        	// Main에서만 조회 할 것!
        	this.fn_searchDetailInfo(nClassId);			// 주요공정 실적현황판 상세 조회

        };

        /*
         * main 투입현황 상세 조회
         */
        this.fn_searchInputStatusDetail = function ()
        {
        	var nDay 			= this.tab_search.tabpage_infoSearch.form.cal_date.value;
        	var nProdClassType	= this.tab_search.tabpage_infoSearch.form.cmb_prodClassType.value;
        	var nProdDivision	= this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.value;
        	this.tab_search.tabpage_inputstatusdetail.form.cal_date.set_value(nDay);
        	this.tab_search.tabpage_inputstatusdetail.form.cmb_prodClassType.set_value(nProdClassType);
        	this.tab_search.tabpage_inputstatusdetail.form.cmb_prodDivision.set_value(nProdDivision);

        	// tab 이동
        	this.tab_search.set_tabindex(2);
        	this.div_work.form.tab_work.set_tabindex(2);

        	this.ds_detailInpStatus.clearData();		// 상세 메인 초기화
        	this.ds_detailHeadInpStatus.clearData()		// 상세 헤더 정보

        	// Main에서만 조회 할 것!
        	this.fn_searchInputStatusDetailInfo();		// 주요공정 실적현황판 상세 조회(투입현황)

        };


        /*
         * main 미투입현황 상세 조회 (21.07.14)
         */
        this.fn_searchNotInputStatusDetail = function ()
        {
        	var nDay 			= this.tab_search.tabpage_infoSearch.form.cal_date.value;
        	var nProdClassType	= 'Production';//this.tab_search.tabpage_infoSearch.form.cmb_prodClassType.value;
        	var nProdDivision	= 'Product';// this.tab_search.tabpage_infoSearch.form.cmb_prodDivision.value;
        	this.tab_search.tabpage_notinputstatusdetail.form.cal_date.set_value(nDay);
        	// 미투입 현황 기본적으로 양산, 제품만 조회 됨
        	this.tab_search.tabpage_notinputstatusdetail.form.cmb_prodClassType.set_value(nProdClassType);
        	this.tab_search.tabpage_notinputstatusdetail.form.cmb_prodDivision.set_value(nProdDivision);


        	// tab 이동
        	this.tab_search.set_tabindex(5);
        	this.div_work.form.tab_work.set_tabindex(5);

        	// detail - 미투입현황(21.07.14)
        	this.ds_detailNotInpStatus.clearData();		// Detail 미투입현황  메인
        	this.ds_detailHeadNotInpStatus.clearData();	// Detail 헤더

        	// Main에서만 조회 할 것!
        	this.fn_searchNotInputStatusDetailInfo();		// 주요공정 실적현황판 상세 조회(미투입현황)

        };


        /*
         * 상세 조회
         */
        this.fn_searchDetailInfo  = function (nClassId)
        {
        	this.ds_searchDetail.clearData();					// 조회 조건
        	this.ds_searchDetail.addRow();

        	this.ds_searchDetail.setColumn(0,"ENTERPRISEID"		,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchDetail.setColumn(0,"PLANTID"			,this.gf_getSiteType());
        	this.ds_searchDetail.setColumn(0,"P_DATE"			,this.tab_search.tabpage_detail.form.cal_date.value);			// 기준일
        	this.ds_searchDetail.setColumn(0,"P_PRODCLASSTYPE"	,this.tab_search.tabpage_detail.form.cmb_prodClassType.value);	// 양산구분
        	this.ds_searchDetail.setColumn(0,"P_PRODDIVISION"	,this.tab_search.tabpage_detail.form.cmb_prodDivision.value);	// 제품구분

        	// 상세 (대공정)
        	this.ds_searchDetail.setColumn(0,"P_WORKDONESEGMENTCLASSID",nClassId);	// 대공정

        	//trace(" [검색조건] : "+this.ds_searchDetail.saveXML());

        	var sSvcID 			= "selectWorkDoneQtyDetailList";
        	var sController 	= "/mfm01400/selectWorkDoneQtyDetailList.do";
        	var sInDatasets 	= "INPUT=ds_searchDetail";
        	var sOutDatasets 	= "ds_detailLeft=output1 ds_detailRight=output2 ds_detailHead=output3";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 상세 - 투입현황
         */
        this.fn_searchInputStatusDetailInfo = function ()
        {
        	this.ds_searchDetailInpStatus.clearData();					// 조회 조건
        	this.ds_searchDetailInpStatus.addRow();

        	this.ds_searchDetailInpStatus.setColumn(0,"ENTERPRISEID"	,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchDetailInpStatus.setColumn(0,"PLANTID"			,this.gf_getSiteType());
        	this.ds_searchDetailInpStatus.setColumn(0,"P_DATE"			,this.tab_search.tabpage_inputstatusdetail.form.cal_date.value);			// 기준일
        	this.ds_searchDetailInpStatus.setColumn(0,"P_PRODCLASSTYPE"	,this.tab_search.tabpage_inputstatusdetail.form.cmb_prodClassType.value);	// 양산구분
        	this.ds_searchDetailInpStatus.setColumn(0,"P_PRODDIVISION"	,this.tab_search.tabpage_inputstatusdetail.form.cmb_prodDivision.value);	// 제품구분

        	//trace(" [검색조건] : "+this.ds_searchDetail.saveXML());

        	var sSvcID 			= "selectWorkDoneINPUTSTATUSDetail";
        	var sController 	= "/mfm01400/selectWorkDoneINPUTSTATUSDetail.do";
        	var sInDatasets 	= "INPUT=ds_searchDetailInpStatus";
        	var sOutDatasets 	= "ds_detailInpStatus=output1 ds_detailHeadInpStatus=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 상세 - 미투입현황 (21.07.14)
         */
        this.fn_searchNotInputStatusDetailInfo = function ()
        {
        	this.ds_searchDetailNotInpStatus.clearData();					// 조회 조건 (21.07.14) 미투입현황 상세 조회 조건
        	this.ds_searchDetailNotInpStatus.addRow();

        	this.ds_searchDetailNotInpStatus.setColumn(0,"ENTERPRISEID"		,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchDetailNotInpStatus.setColumn(0,"PLANTID"			,this.gf_getSiteType());
        	this.ds_searchDetailNotInpStatus.setColumn(0,"P_DATE"			,this.tab_search.tabpage_notinputstatusdetail.form.cal_date.value);				// 기준일
        	this.ds_searchDetailNotInpStatus.setColumn(0,"P_PRODCLASSTYPE"	,this.tab_search.tabpage_notinputstatusdetail.form.cmb_prodClassType.value);	// 양산구분
        	this.ds_searchDetailNotInpStatus.setColumn(0,"P_PRODDIVISION"	,this.tab_search.tabpage_notinputstatusdetail.form.cmb_prodDivision.value);		// 제품구분

        	var sSvcID 			= "selectWorkDoneNOTINPUTSTATUSDetail";
        	var sController 	= "/mfm01400/selectWorkDoneNOTINPUTSTATUSDetail.do";
        	var sInDatasets 	= "INPUT=ds_searchDetailNotInpStatus";
        	var sOutDatasets 	= "ds_detailNotInpStatus=output1 ds_detailHeadNotInpStatus=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 그리드 다국서(소계, 합계)
         */
        this.fn_YieldSum = function (nId)
        {
        	return this.nfn_getDictionaryname(nId,true);
        };

        /*
         * 상세 그리드 헤더 설정
         */
        this.fn_setDetailGridHead = function ()
        {
        	var nCnt = this.ds_detailHead.rowcount;
        	for(var i = 0; i<nCnt; i++)
        	{
        		var nTitle = this.ds_detailHead.getColumn(i,"TITLE");
        		this.div_work.form.tab_work.tabpage_detail.form.grd_detailL.setCellProperty('head',(i+4),'text',nTitle);
        		this.div_work.form.tab_work.tabpage_detail.form.grd_detailR.setCellProperty('head',(i+3),'text',nTitle);
        	}
        };

        /*
         * 상세 -> 대/중(Left) 소계 조회
         */
        this.fn_searchSummaryLeft = function (nTop, nMid)
        {
        	// 조회 조건 담는다.
        	var nDay 			= this.tab_search.tabpage_detail.form.cal_date.value;
        	var nProdClassType	= this.tab_search.tabpage_detail.form.cmb_prodClassType.value;
        	var nProdDivision	= this.tab_search.tabpage_detail.form.cmb_prodDivision.value;

        	// 소계쪽 검색 조건 설정
        	this.tab_search.tabpage_procSummary_s.form.cal_date.set_value(nDay);
        	this.tab_search.tabpage_procSummary_s.form.cmb_prodClassType.set_value(nProdClassType);
        	this.tab_search.tabpage_procSummary_s.form.cmb_prodDivision.set_value(nProdDivision);

        	// tab 이동
        	this.tab_search.set_tabindex(3);
        	this.div_work.form.tab_work.set_tabindex(3);

        	// 조회
        	this.fn_searchProcSummary(nTop, nMid);

        };
        /*
         * 상세 -> 작업장 소계 조회
         */
        this.fn_searchSummaryRight = function (nArea, nWorkTopId)
        {
        	// 조회 조건 담는다.
        	var nDay 			= this.tab_search.tabpage_detail.form.cal_date.value;
        	var nProdClassType	= this.tab_search.tabpage_detail.form.cmb_prodClassType.value;
        	var nProdDivision	= this.tab_search.tabpage_detail.form.cmb_prodDivision.value;

        	// 소계쪽 검색 조건 설정
        	this.tab_search.tabpage_areaSummary_s.form.cal_date.set_value(nDay);
        	this.tab_search.tabpage_areaSummary_s.form.cmb_prodClassType.set_value(nProdClassType);
        	this.tab_search.tabpage_areaSummary_s.form.cmb_prodDivision.set_value(nProdDivision);

        	// tab 이동
        	this.tab_search.set_tabindex(4);
        	this.div_work.form.tab_work.set_tabindex(4);

        	// 조회
        	this.fn_searchAreaSummary(nArea, nWorkTopId);
        };

        /*
         * Tab 정보 초기화 (0,1 제외 나머지 안보이게 설정)
         */
        this.fn_setInitTab = function ()
        {
        	this.div_work.form.tab_work.tabpage_procSummary.set_tabbuttonwidth(0);
        	this.div_work.form.tab_work.tabpage_areaSummary.set_tabbuttonwidth(0);
        	this.div_work.form.tab_work.tabpage_inputstatus.set_tabbuttonwidth(0);
        	// (21.07.07) 상세조회 tab도 안보이도록 처리 할것!
        	this.div_work.form.tab_work.tabpage_detail.set_tabbuttonwidth(0);

        	// (21.07.14) 미투입 현황 상세 추가
        	this.div_work.form.tab_work.tabpage_notinputstatus.set_tabbuttonwidth(0);
        };

        /*
         * 대/중 소계 조회
         */
        this.fn_searchProcSummary = function (nTop, nMid)
        {
        	this.ds_sumLeftMain.clearData();				// 대/중 소계 메인
        	this.ds_sumLeftHead.clearData();				// 대/중 소게 헤더
        	this.ds_searchSum.clearData();					// 조회 조건
        	this.ds_searchSum.addRow();

        	this.ds_searchSum.setColumn(0,"ENTERPRISEID"	,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchSum.setColumn(0,"PLANTID"			,this.gf_getSiteType());
        	this.ds_searchSum.setColumn(0,"P_DATE"			,this.tab_search.tabpage_procSummary_s.form.cal_date.value);			// 기준일
        	this.ds_searchSum.setColumn(0,"P_PRODCLASSTYPE"	,this.tab_search.tabpage_procSummary_s.form.cmb_prodClassType.value);	// 양산구분
        	this.ds_searchSum.setColumn(0,"P_PRODDIVISION"	,this.tab_search.tabpage_procSummary_s.form.cmb_prodDivision.value);	// 제품구분

        	// 상세 (대공정)
        	this.ds_searchSum.setColumn(0,"P_WORKDONESEGMENTCLASSID"		,nTop);	// 대공정
        	this.ds_searchSum.setColumn(0,"P_WORKDONEMIDDLESEGMENTCLASSID"	,nMid);	// 중공정
        	//this.ds_searchSum.setColumn(0,"P_PROCESSSEGMENTID"				,nProc);// 표준공정

        	trace(" [검색조건 - sum] : "+this.ds_searchSum.saveXML());

        	var sSvcID 			= "selectWorkDoneSummaryLeftList";
        	var sController 	= "/mfm01400/selectWorkDoneSummaryLeftList.do";
        	var sInDatasets 	= "INPUT=ds_searchSum";
        	var sOutDatasets 	= "ds_sumLeftMain=output1 ds_sumLeftHead=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 소계(Left 대/중) 그리드 헤더 설정
         */
        this.fn_setSumLeftGridHead = function ()
        {
        	var nCnt = this.ds_sumLeftHead.rowcount;
        	for(var i = 0; i<nCnt; i++)
        	{
        		var nTitle = this.ds_sumLeftHead.getColumn(i,"TITLE");
        		this.div_work.form.tab_work.tabpage_procSummary.form.grd_SummaryDetailL.setCellProperty('head',(i+4),'text',nTitle);
        	}
        };

        /*
         * 소계 (작업장) 헤더 설정
         */
        this.fn_setSumRightGridHead = function ()
        {
        	var nCnt = this.ds_sumRightHead.rowcount;
        	for(var i = 0; i<nCnt; i++)
        	{
        		var nTitle = this.ds_sumRightHead.getColumn(i,"TITLE");
        		this.div_work.form.tab_work.tabpage_areaSummary.form.grd_SummaryDetailR.setCellProperty('head',(i+5),'text',nTitle);
        	}
        };

        /*
         * 투입현황 상세 헤더 설정
         */
        this.fn_setGridInputStatusHead = function ()
        {
        	var nCnt = this.ds_detailHeadInpStatus.rowcount;
        	for(var i = 0; i<nCnt; i++)
        	{
        		var nTitle = this.ds_detailHeadInpStatus.getColumn(i,"TITLE");
        		this.div_work.form.tab_work.tabpage_inputstatus.form.grd_InputStatusDetail.setCellProperty('head',(i+4),'text',nTitle);
        	}
        };

        /*
         * 미투입현황 상세 헤더 설정(21.07.14)
         */
        this.fn_setGridNotInputStatusHead = function ()
        {
        	var nCnt = this.ds_detailHeadNotInpStatus.rowcount;
        	for(var i = 0; i<nCnt; i++)
        	{
        		var nTitle = this.ds_detailHeadNotInpStatus.getColumn(i,"TITLE");
        		this.div_work.form.tab_work.tabpage_notinputstatus.form.grd_NotInputStatusDetail.setCellProperty('head',(i+6),'text',nTitle);
        	}
        };

        /*
         * 작업장 소계 조회
         */
        this.fn_searchAreaSummary = function (nArea, nWorkTopId)
        {

        	this.ds_sumRightMain.clearData();				// 대/중 소계 메인
        	this.ds_sumRightHead.clearData();				// 대/중 소게 헤더
        	this.ds_searchSum.clearData();					// 조회 조건
        	this.ds_searchSum.addRow();

        	this.ds_searchSum.setColumn(0,"ENTERPRISEID"	,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchSum.setColumn(0,"PLANTID"			,this.gf_getSiteType());
        	this.ds_searchSum.setColumn(0,"P_DATE"			,this.tab_search.tabpage_areaSummary_s.form.cal_date.value);			// 기준일
        	this.ds_searchSum.setColumn(0,"P_PRODCLASSTYPE"	,this.tab_search.tabpage_areaSummary_s.form.cmb_prodClassType.value);	// 양산구분
        	this.ds_searchSum.setColumn(0,"P_PRODDIVISION"	,this.tab_search.tabpage_areaSummary_s.form.cmb_prodDivision.value);	// 제품구분

        	// 상세 (작업장)
        	this.ds_searchSum.setColumn(0,"P_WORKDONESEGMENTCLASSID"		,nWorkTopId);	// 대공정
        	this.ds_searchSum.setColumn(0,"P_AREA"							,nArea);// 작업장

        	trace(" [검색조건 - sum] : "+this.ds_searchSum.saveXML());

        	var sSvcID 			= "selectWorkDoneSummaryRightList";
        	var sController 	= "/mfm01400/selectWorkDoneSummaryRightList.do";
        	var sInDatasets 	= "INPUT=ds_searchSum";
        	var sOutDatasets 	= "ds_sumRightMain=output1 ds_sumRightHead=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * Tab Page 변경시 필터 조건 변경설정
         */
        this.div_work_tab_work_onchanged = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	// 필터 조건 설정
        	this.tab_search.set_tabindex(nTabIdx);
        };

        /*
         * 메인 그리드 클릭시 (L)
         */
        this.div_work_tab_work_tabpage_main_grd_mainL_oncellclick = function(obj,e)
        {
        	var nWorkNmIdx = this.div_work.form.tab_work.tabpage_main.form.grd_mainL.getBindCellIndex("body","WORKDONESEGMENTCLASSNAME");
        	if(e.cell == nWorkNmIdx)		// 인보이스인 경우만 조회
        	{
        		var nWorkClassId = this.ds_mainLeft.getColumn(e.row,"WORKDONESEGMENTCLASSID");

        		// (21.07.14) 미투입 현황 추가
        		if(e.row == 0)
        		{
        			this.div_work.form.tab_work.tabpage_detail.set_tabbuttonwidth(0);
        			this.div_work.form.tab_work.tabpage_inputstatus.set_tabbuttonwidth(0);
        			this.div_work.form.tab_work.tabpage_procSummary.set_tabbuttonwidth(0);
        			this.div_work.form.tab_work.tabpage_areaSummary.set_tabbuttonwidth(0);
        			// (21.07.14) 미투입 현황 상세 추가
        			this.div_work.form.tab_work.tabpage_notinputstatus.set_tabbuttonwidth(130);
        			//var nSize = this.div_work.form.tab_work.tabpage_detail.tabbuttonwidth;
        			// 상세 연동
        			this.fn_searchNotInputStatusDetail();
        			return;
        		}

        		else if(e.row == 1)
        		{
        			this.div_work.form.tab_work.tabpage_detail.set_tabbuttonwidth(0);
        			this.div_work.form.tab_work.tabpage_inputstatus.set_tabbuttonwidth(130);
        			this.div_work.form.tab_work.tabpage_procSummary.set_tabbuttonwidth(0);
        			this.div_work.form.tab_work.tabpage_areaSummary.set_tabbuttonwidth(0);
        			//var nSize = this.div_work.form.tab_work.tabpage_detail.tabbuttonwidth;
        			// (21.07.14) 미투입 현황 상세 추가
        			this.div_work.form.tab_work.tabpage_notinputstatus.set_tabbuttonwidth(0);

        			// 상세 연동
        			this.fn_searchInputStatusDetail();
        			return;
        		}


        		this.div_work.form.tab_work.tabpage_detail.set_tabbuttonwidth(100);
        		this.div_work.form.tab_work.tabpage_inputstatus.set_tabbuttonwidth(0);
        		// (21.07.14) 미투입 현황 상세 추가
        		this.div_work.form.tab_work.tabpage_notinputstatus.set_tabbuttonwidth(0);

        		trace("대공정 그룹 클릭(L) : "+nWorkClassId +" || 기본 조회 조건에 추가");
        		// 상세 연동
        		this.fn_searchDetail(nWorkClassId);
        	}
        };
        /*
         * 메인 그리드 클릭시 (R)
         */
        this.div_work_tab_work_tabpage_main_grd_mainR_oncellclick = function(obj,e)
        {
        	var nWorkNmIdx = this.div_work.form.tab_work.tabpage_main.form.grd_mainR.getBindCellIndex("body","WORKDONESEGMENTCLASSNAME");
        	if(e.cell == nWorkNmIdx)		// 인보이스인 경우만 조회
        	{
        		this.div_work.form.tab_work.tabpage_detail.set_tabbuttonwidth(100);
        		this.div_work.form.tab_work.tabpage_inputstatus.set_tabbuttonwidth(0);
        		// (21.07.14) 미투입 현황 상세 추가
        		this.div_work.form.tab_work.tabpage_notinputstatus.set_tabbuttonwidth(0);

        		var nWorkClassId = this.ds_mainRight.getColumn(e.row,"WORKDONESEGMENTCLASSID");

        		//trace("대공정 그룹 클릭(R) : "+nWorkClassId +" || 기본 조회 조건에 추가");
        		// 상세 연동
        		this.fn_searchDetail(nWorkClassId);
        	}
        };

        /*
         * 메인 초기화
         */
        this.div_header_btn_resetC_onclick = function(obj,e)
        {
        	this.ds_main.clearData();			// 메인 ds 초기화
        	this.ds_mainLeft.clearData();		// 메인 left ds 초기화
        	this.ds_mainRight.clearData();		// 메인 right ds 초기화
        	this.ds_mainHead.clearData();		// 메인 헤더

        	// detail
        	this.ds_detailLeft.clearData();		// Detail Left  메인
        	this.ds_detailRight.clearData();	// Detail Right 메인
        	this.ds_detailHead.clearData();		// Detail 헤더

        	// detail - 투입현황
        	this.ds_detailInpStatus.clearData();		// Detail 투입현황  메인
        	this.ds_detailHeadInpStatus.clearData();	// Detail 헤더

        	// detail - 미투입현황(21.07.14)
        	this.ds_detailNotInpStatus.clearData();		// Detail 미투입현황  메인
        	this.ds_detailHeadNotInpStatus.clearData();	// Detail 헤더

        	// 소계
        	this.ds_sumLeftMain.clearData();		// 소계 메인
        	this.ds_sumLeftHead.clearData();		// 소계 헤더
        	this.ds_sumRightMain.clearData();		// 소계 메인
        	this.ds_sumRightHead.clearData();		// 소계 헤더

        	// tab 이동
        	this.tab_search.set_tabindex(0);
        	this.div_work.form.tab_work.set_tabindex(0);

        	// tab 초기화
        	this.fn_setInitTab();
        };


        /*
         * 상세 Left 클릭
         */
        this.div_work_tab_work_tabpage_detail_grd_detailL_oncellclick = function(obj,e)
        {
        	var nProcNmIdx = 3;//this.div_work.form.tab_work.tabpage_detail.form.grd_detailL.getBindCellIndex("body","PROCESSSEGMENTNAMEBYLANGUAGE");

        	trace(" ===> : "+nProcNmIdx);
        	if(e.cell == nProcNmIdx)		// 인보이스인 경우만 조회
        	{
        		var nRowLev = this.ds_detailLeft.getRowLevel(e.row);
        		trace("소게 이동 한다. (1)"+nProcNmIdx+" || "+nRowLev);
        		if(nRowLev != 0)
        		{
        			this.div_work.form.tab_work.tabpage_procSummary.set_tabbuttonwidth(100);
        			this.div_work.form.tab_work.tabpage_areaSummary.set_tabbuttonwidth(0);

        			trace("소게 이동 한다. (1)");

        			var nWorkTopId 	= this.ds_detailLeft.getColumn(e.row,"WORKDONETOPSEGMENTCLASSID");
        			var nWorkMidId 	= this.ds_detailLeft.getColumn(e.row,"WORKDONEMIDDLESEGMENTCLASSID");
        			//var nWorkProcId = this.ds_detailLeft.getColumn(e.row,"PROCESSSEGMENTID");

        			trace("대/중 소계 조회전 : "+nWorkTopId +" | "+nWorkMidId+" | ");
        			// 소계 연동
        			this.fn_searchSummaryLeft(nWorkTopId, nWorkMidId);
        		}
        	}
        };
        /*
         * 상세 Right 클릭
         */
        this.div_work_tab_work_tabpage_detail_grd_detailR_oncellclick = function(obj,e)
        {
        	var nProcNmIdx = 2;	// expr 설정되어 있어서 Bind로 못찾음

        	trace(" ===> : "+nProcNmIdx);
        	if(e.cell == nProcNmIdx)		// 인보이스인 경우만 조회
        	{
        		this.div_work.form.tab_work.tabpage_procSummary.set_tabbuttonwidth(0);
        		this.div_work.form.tab_work.tabpage_areaSummary.set_tabbuttonwidth(100);

        		var nRowLev = this.ds_detailRight.getRowLevel(e.row);
        		if(nRowLev != 0)
        		{
        			var nAreaId 	= this.ds_detailRight.getColumn(e.row,"AREAID");				// 작업장
        			var nWorkTopId 	= this.ds_detailRight.getColumn(e.row-1,"WORKDONETOPSEGMENTCLASSID");				// 대공정

        			// 소계 연동
        			this.fn_searchSummaryRight(nAreaId, nWorkTopId);
        		}
        	}
        };



        /*
         * 소계 부분 함수로 처리 해봄(21.06.28) 함수로 뺀다.(Left)
         */
        this.fn_sum = function (nCol, nRow)
        {
        	nText = "nexacro.toNumber("+nCol+")";

        	var nStart 	= this.ds_detailLeft.getGroupRangeStart(nRow);
        	var nCtn	= this.ds_detailLeft.getGroupRangeCount(nRow);
        	//trace(" [sum] ====> : "+this.ds_detailLeft.getSum(nText, nStart, nStart+nCtn));
        	return this.ds_detailLeft.getSum(nText, nStart, nStart+nCtn);

        	// dataset.getRowLevel(currow)==0?D_0_SUM_WIPPANELQTY:comp.parent.parent.parent.parent.parent.parent.fn_sum('D_0_SUM_WIPPANELQTY',currow)
        };

        /*
         * 소계 부분 함수로 처리 해봄(21.06.28) 함수로 뺀다.(Right)
         */
        this.fn_sumR = function (nCol, nRow)
        {
        	nText = "nexacro.toNumber("+nCol+")";
        	var nStart 	= this.ds_detailRight.getGroupRangeStart(nRow);
        	var nCtn	= this.ds_detailRight.getGroupRangeCount(nRow);

        	return this.ds_detailRight.getSum(nText, nStart, nStart+nCtn);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tabpage_infoSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_detail.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_inputstatusdetail.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_procSummary_s.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_areaSummary_s.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_notinputstatusdetail.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.div_work_tab_work_onchanged,this);
            this.div_work.form.tab_work.tabpage_main.form.grd_mainR.addEventHandler("oncellclick",this.div_work_tab_work_tabpage_main_grd_mainR_oncellclick,this);
            this.div_work.form.tab_work.tabpage_main.form.grd_mainL.addEventHandler("oncellclick",this.div_work_tab_work_tabpage_main_grd_mainL_oncellclick,this);
            this.div_work.form.tab_work.tabpage_detail.form.grd_detailR.addEventHandler("oncellclick",this.div_work_tab_work_tabpage_detail_grd_detailR_oncellclick,this);
            this.div_work.form.tab_work.tabpage_detail.form.grd_detailL.addEventHandler("oncellclick",this.div_work_tab_work_tabpage_detail_grd_detailL_oncellclick,this);
            this.div_header.form.btn_resetC.addEventHandler("onclick",this.div_header_btn_resetC_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_prodDivisioList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodDivisioList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
        };
        this.loadIncludeScript("MFM01400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
