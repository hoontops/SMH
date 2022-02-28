(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01200M");
            this.set_titletext("Lead Time 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_00Left", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLT\" type=\"STRING\" size=\"256\"/><Column id=\"SITELT\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SITELT2\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQ2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_00Right", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLT\" type=\"STRING\" size=\"256\"/><Column id=\"SITELT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIMEFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_01Top", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLT\" type=\"STRING\" size=\"256\"/><Column id=\"SITELT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIMEFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATETAC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_01Down", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"THEORYTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT3TACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT6TACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"THEORYTACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT3TACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT6TACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETTACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"STDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STDLEADTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTACKTIME2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_02", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLT\" type=\"STRING\" size=\"256\"/><Column id=\"SITELT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLT\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLT2\" type=\"STRING\" size=\"256\"/><Column id=\"SITELT2\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLT2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"P_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"P_CATEGORYSET\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_validStatus","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"205","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","231","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","225","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","225","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validStatus","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_rev","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("내부 Rev");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productType","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productKind","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("제품군");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_layer","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("층수");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_noInput","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_rev","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productName","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productType","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productKind","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_layer","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,Layer,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_noInput","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_01","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_tabjustify("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_01);
            obj.set_text("L/T입력");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","483","0","59","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("L/T입력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00Right","483","34",null,null,"7","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_00Right");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"87\"/><Column size=\"33\"/><Column size=\"168\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"35\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"생산구분\"/><Cell col=\"5\" text=\"CATEGORY\"/><Cell col=\"6\" text=\"층수\"/><Cell col=\"7\" text=\"품목 L/T\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"SITE이동 L/T\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"합산 L/T\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"10\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/><Cell col=\"1\" text=\"bind:ITEMID\" textAlign=\"left\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"2\" text=\"bind:ITEMVERSION\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"3\" text=\"bind:ITEMNAME\" textAlign=\"left\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTIONTYPE\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"5\" text=\"bind:CATEGORY\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"6\" text=\"bind:LAYER\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"7\" text=\"bind:PRODUCTLT\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editautoselect=\"true\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"8\" text=\"bind:SITELT\" textAlign=\"right\" edittype=\"text\" displaytype=\"text\" editautoselect=\"true\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"9\" text=\"bind:TOTALLT\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","0","112","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("카테고리 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00Left","0","34","473",null,null,"0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_00Left");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"118\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"카테고리명\" textAlign=\"center\"/><Cell col=\"2\" colspan=\"2\" text=\"양산\" textAlign=\"center\"/><Cell col=\"4\" colspan=\"2\" text=\"샘플\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"품목 L/T\"/><Cell row=\"1\" col=\"3\" text=\"SITE이동 L/T\"/><Cell row=\"1\" col=\"4\" text=\"품목 L/T\"/><Cell row=\"1\" col=\"5\" text=\"SITE이동 L/T\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/><Cell col=\"1\" text=\"bind:CATEGORYNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTLT\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:SITELT\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:PRODUCTLT2\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SITELT2\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_00Right",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_00Left","442","5","29",null,null,"grd_00Left:5",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_00Left","Static01_00_00:6","-1","101","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_00Right","Static01_00:10","-1","101","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product",null,"7","87","20","btn_xlDn_grd_00Right:3",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("(단위 : Day)");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product00",null,"6","87","20","btn_xlDn_grd_00Left:2",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("(단위 : Day)");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("L/T현황");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","59","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("L/T현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01Down","0","55%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_01Down");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev.\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"Site ID\"/><Cell col=\"5\" rowspan=\"2\" text=\"공정수순\"/><Cell col=\"6\" rowspan=\"2\" text=\"공정ID\"/><Cell col=\"7\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"8\" colspan=\"6\" text=\"Track Time(초/PNL)\" cssclass=\"cell_headMaster\"/><Cell col=\"14\" rowspan=\"2\" text=\"유효상태\"/><Cell col=\"15\" rowspan=\"2\" text=\"수정자\"/><Cell col=\"16\" rowspan=\"2\" text=\"수정일\"/><Cell row=\"1\" col=\"8\" text=\"이론값\"/><Cell row=\"1\" col=\"9\" text=\"실적값(3개월평균)\"/><Cell row=\"1\" col=\"10\" text=\"실적값(6개월평균)\"/><Cell row=\"1\" col=\"11\" text=\"목표값\"/><Cell row=\"1\" col=\"12\" text=\"표준 Lead Time\"/><Cell row=\"1\" col=\"13\" text=\"적용값\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"4\" text=\"bind:PLANTID\"/><Cell col=\"5\" text=\"bind:USERSEQUENCE\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"bind:THEORYTACKTIME\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:RESULT3TACKTIME\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:RESULT6TACKTIME\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:TARGETTACKTIME\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:STDLEADTIME\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:APPLICATIONTACKTIME\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,N\" displaytype=\"combotext\"/><Cell col=\"15\" text=\"bind:MODIFIER\"/><Cell col=\"16\" text=\"bind:MODIFIEDTIME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"합계\"/><Cell col=\"8\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fnCol08()\"/><Cell col=\"9\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fnCol09()\"/><Cell col=\"10\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fnCol10()\"/><Cell col=\"11\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fnCol11()\"/><Cell col=\"12\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fnCol12()\"/><Cell col=\"13\" text=\"expr:comp.parent.parent.parent.parent.parent.parent.fnCol13()\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01Top","0","34",null,null,"0","grd_01Down:34",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_01Top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"100\"/><Column size=\"32\"/><Column size=\"153\"/><Column size=\"55\"/><Column size=\"74\"/><Column size=\"36\"/><Column size=\"76\"/><Column size=\"105\"/><Column size=\"84\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"생산구분\"/><Cell col=\"5\" text=\"CATEGORY\"/><Cell col=\"6\" text=\"층수\"/><Cell col=\"7\" text=\"품목 L/T\"/><Cell col=\"8\" text=\"SITE이동 L/T\"/><Cell col=\"9\" text=\"합산 L/T\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"10\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\" color=\"#444444\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"1\" text=\"bind:ITEMID\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"2\" text=\"bind:ITEMVERSION\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"3\" text=\"bind:ITEMNAME\" textAlign=\"left\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTIONTYPE\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"5\" text=\"bind:CATEGORY\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"6\" text=\"bind:LAYER\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"7\" text=\"bind:PRODUCTLT\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:SITELT\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:TOTALLT\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"10\" text=\"bind:MODIFIER\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:TACTTIMEFLAG==&quot;Y&quot;?&apos;cell_blue&apos;:&apos;cell_black&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subtitle3","0","grd_01Top:0","103","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Tact Time현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_01Top",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_01Down",null,"grd_01Top:6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_01Top","subtitle1:16","0","101","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_01Down","subtitle3:12",null,"101","34",null,"grd_01Down:0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_product",null,"7","87","20","btn_xlDn_grd_01Top:3",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("(단위 : Day)");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_01);
            obj.set_text("제품군L/T 등록");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","125","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("카테고리 L/T 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_02List","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"140\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"카테고리명\"/><Cell col=\"2\" colspan=\"3\" text=\"양산\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"5\" colspan=\"3\" text=\"샘플\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"8\" rowspan=\"2\" text=\"수정자\"/><Cell col=\"9\" rowspan=\"2\" text=\"수정일\"/><Cell row=\"1\" col=\"2\" text=\"품목 L/T\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"3\" text=\"SITE이동 L/T\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"4\" text=\"합산 L/T\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"5\" text=\"품목 L/T\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"6\" text=\"SITE이동 L/T\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"7\" text=\"합산 L/T\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/><Cell col=\"1\" text=\"bind:CATEGORYNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTLT\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:SITELT\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:TOTALLT\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\" background=\"#ffffff\"/><Cell col=\"5\" text=\"bind:PRODUCTLT2\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:SITELT2\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editautoselect=\"true\"/><Cell col=\"7\" text=\"bind:TOTALLT2\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\" background=\"#ffffff\"/><Cell col=\"8\" text=\"bind:MODIFIER\"/><Cell col=\"9\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_02List",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_02","subtitle1:9","0","101","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_product",null,"7","87","20","btn_xlDn_grd_02List:3",null,null,null,null,null,this.div_work.form.tab_01.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("(단위 : Day)");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","126","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("Lead Time 관리");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
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
        this.addIncludeScript("MFM01200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM01200M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM01200M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM01200M.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_mfm.xjs"); /*include "lib::lib_mfm.xjs"*/;	//MFM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.tabDiv = this.div_work.form.tab_01;
        this.gridDiv1 = this.div_work.form.tab_01.Tabpage1.form;
        this.gridDiv2 = this.div_work.form.tab_01.Tabpage2.form;
        this.gridDiv3 = this.div_work.form.tab_01.Tabpage2.form;

        this.loadType = '1'; //1:첫번째Tab, 2:두번째Tab

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("MFM01200M");
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (TAB1 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_00Left.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"getLeadTimeCategory");

        // 	this.ds_search.setColumn(0, "P_VALIDSTATE", 				this.nfn_nvl(this.searchDiv.cbo_validStatus.value, ""));
        // 	this.ds_search.setColumn(0, "P_ITEMID", 					this.nfn_nvl(this.searchDiv.edt_product.value, "")); //품목코드
        // 	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 			this.nfn_nvl(this.searchDiv.edt_rev.value, "")); //품목Ver
        // 	this.ds_search.setColumn(0, "P_PRODUCTDEFNAME", 			this.nfn_nvl(this.searchDiv.edt_productName.value, "")); //품목명
        // 	this.ds_search.setColumn(0, "P_PRODUCTIONDIVISION", 		this.nfn_nvl(this.searchDiv.cbo_productType.value, "")); //제품타입
        // 	this.ds_search.setColumn(0, "P_CATEGORYSET", 				this.nfn_nvl(this.searchDiv.cbo_productKind.value, ""));
        // 	this.ds_search.setColumn(0, "P_LAYER", 						this.nfn_nvl(this.searchDiv.cbo_layer.value, ""));
        // 	this.ds_search.setColumn(0, "P_NOINPUT", 					this.nfn_nvl(this.searchDiv.cbo_noInput.value, ""));


        	var sSvcID 			= "getLeadTimeCategory";
        	var sController 	= "/mfm01200/getLeadTimeCategory.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_00Left=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_search12 = function (obj, e)
        {
        	this.ds_00Right.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_PRODUCTIONDIVISION", 		this.nfn_nvl(this.searchDiv.cbo_productType.value, "")); //제품타입
        	this.ds_search.setColumn(0, "P_CATEGORY", 					this.nfn_nvl(this.ds_00Left.getColumn(this.ds_00Left.rowposition, "CATEGORYID")));
        	this.ds_search.setColumn(0, "P_CATEGORYSET", 				this.nfn_nvl(this.searchDiv.cbo_productKind.value, ""));
        	this.ds_search.setColumn(0, "P_ITEMID", 					this.nfn_nvl(this.searchDiv.edt_product.value, "")); //품목코드
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 			this.nfn_nvl(this.searchDiv.edt_rev.value, "")); //품목Ver
        	this.ds_search.setColumn(0, "P_PRODUCTDEFNAME", 			this.nfn_nvl(this.searchDiv.edt_productName.value, "")); //품목명
        	this.ds_search.setColumn(0, "P_LAYER", 						this.nfn_nvl(this.searchDiv.cbo_layer.value, ""));
        	this.ds_search.setColumn(0, "P_NOINPUT", 					this.nfn_nvl(this.searchDiv.cbo_noInput.value, ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"getLeadTimeList");

        	var sSvcID 			= "getLeadTimeList";
        	var sController 	= "/mfm01200/getLeadTimeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_00Right=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.loadType = '1';

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //두번째 TAB : 상단 그리드
        //fn_search12 와 동일하다.
        this.fn_search21 = function (obj, e)
        {
        	this.ds_01Top.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_PRODUCTIONDIVISION", 		this.nfn_nvl(this.searchDiv.cbo_productType.value, "")); //제품타입
        	this.ds_search.setColumn(0, "P_CATEGORY", 					this.nfn_nvl(this.ds_00Left.getColumn(this.ds_00Left.rowposition, "CATEGORYID")));
        	this.ds_search.setColumn(0, "P_CATEGORYSET", 				this.nfn_nvl(this.searchDiv.cbo_productKind.value, ""));
        	this.ds_search.setColumn(0, "P_ITEMID", 					this.nfn_nvl(this.searchDiv.edt_product.value, "")); //품목코드
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 			this.nfn_nvl(this.searchDiv.edt_rev.value, "")); //품목Ver
        	this.ds_search.setColumn(0, "P_PRODUCTDEFNAME", 			this.nfn_nvl(this.searchDiv.edt_productName.value, "")); //품목명
        	this.ds_search.setColumn(0, "P_LAYER", 						this.nfn_nvl(this.searchDiv.cbo_layer.value, ""));
        	this.ds_search.setColumn(0, "P_NOINPUT", 					this.nfn_nvl(this.searchDiv.cbo_noInput.value, ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"getLeadTimeList");

        	var sSvcID 			= "getLeadTimeList";
        	var sController 	= "/mfm01200/getLeadTimeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_01Top=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.loadType = '2';

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //두번째 TAB : 하단 그리드
        this.fn_search22 = function (obj, e)
        {
        	this.ds_01Down.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 				this.nfn_nvl(this.ds_01Top.getColumn(this.ds_01Top.rowposition, "ITEMID"), ""));
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 			this.nfn_nvl(this.ds_01Top.getColumn(this.ds_01Top.rowposition, "ITEMVERSION"), ""));
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", 			"");
        	this.ds_search.setColumn(0, "P_VALIDSTATE", 				this.nfn_nvl(this.searchDiv.cbo_validStatus.value, ""));
        	this.ds_search.setColumn(0, "P_PRODUCTDEFTYPE", 			this.nfn_nvl(this.searchDiv.cbo_productType.value, ""));


        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectTackTimeList");

        	var sSvcID 			= "selectTackTimeList";
        	var sController 	= "/mfm01200/selectTackTimeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_01Down=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //세번쨰 TAB
        this.fn_search31 = function (obj, e)
        {
        	this.ds_02.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"getLeadTimeCategoryReg");

        	var sSvcID 			= "getLeadTimeCategoryReg";
        	var sController 	= "/mfm01200/getLeadTimeCategoryReg.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_02=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var nTabIdx = this.tabDiv.tabindex;
        	if(nTabIdx==0){
        		this.fn_save1();
        	}else if(nTabIdx==2){
        		this.fn_save2();
        	}
        };

        this.fn_save1 = function ()
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_00Right)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveLeadTime";
        	var sController 	= "/mfm01200/saveLeadTime.do";
        	var sInDatasets 	= "INPUT=ds_00Right:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_save2 = function ()
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_02)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveLeadTimePerCategory";
        	var sController 	= "/mfm01200/saveLeadTimePerCategory.do";
        	var sInDatasets 	= "INPUT=ds_02:U";
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
        		case "getLeadTimeCategory": //TAB1 그리드 CALLBACK

        			var nRow = this.ds_00Left.findRowExpr("CATEGORYID == '" + this.searchDiv.cbo_productKind.value + "'");
        			this.ds_00Left.set_rowposition(nRow);

        			this.fn_search12();
        			this.fn_search21();
        			this.fn_search31();
        			break;
        		case "getLeadTimeList": //TAB2 그리드 CALLBACK
        			//if(this.loadType=='2'){
        				//this.fn_search22();
        			//}
        			break;
        		case "selectTackTimeList":
        			break;
        		case "saveLeadTime": //저장Callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			break;
        		case "saveLeadTimePerCategory": //저장Callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			break;
        		case "getLeadTimeCategoryReg":
        			var nRow = this.ds_02.findRowExpr("CATEGORYID == '" + this.searchDiv.cbo_productKind.value + "'");
        			this.ds_02.set_rowposition(nRow);

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
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;

        	if(sPopupId == "EMAIL" ) this.mfn_ClearGetLotList();

        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[0]);
        		this.searchDiv.edt_rev.set_value(rtn[2]);
        		this.searchDiv.edt_productName.set_value(rtn[1]);
        	}
        };

        this.fn_callBack_HL = function (selectQuery, i, t)
        {

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_productKind();
        }

        /*
         * 기능 : [제품군]
         */
        this.fn_productKind = function (obj, e)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 				this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 					this.nfn_nvl(this.gf_getSiteType(), ""));
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 				this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.searchDiv.cbo_productKind // Object
        								, "selectProductKindList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_HL"); //콜백함수 지정
        };

        this.fnCol08 = function ()
        {
        	var recCount = this.ds_01Down.rowcount;
        	var addSum = 0;
        	for(var i=0; i<recCount; i++){
        		addSum = addSum + Number(this.nfn_nvl(this.ds_01Down.getColumn(this.ds_01Down.rowposition, "THEORYTACKTIME"), "0"));
        	}
        	var TactTimeForDay = addSum / 60 / 24;
        	var strTactTime = addSum + "  ( " + TactTimeForDay + " )";
        	return strTactTime;
        }
        this.fnCol09 = function ()
        {
        	var recCount = this.ds_01Down.rowcount;
        	var addSum = 0;
        	for(var i=0; i<recCount; i++){
        		addSum = addSum + Number(this.nfn_nvl(this.ds_01Down.getColumn(this.ds_01Down.rowposition, "RESULT3TACKTIME"), "0"));
        	}
        	var TactTimeForDay = addSum / 60 / 24;
        	var strTactTime = nexacro.round(addSum,2) + "  ( " + nexacro.round(TactTimeForDay,2) + " )";
        	return strTactTime;
        }
        this.fnCol10 = function ()
        {
        	var recCount = this.ds_01Down.rowcount;
        	var addSum = 0;
        	for(var i=0; i<recCount; i++){
        		addSum = addSum + Number(this.nfn_nvl(this.ds_01Down.getColumn(this.ds_01Down.rowposition, "RESULT6TACKTIME"), "0"));
        	}
        	var TactTimeForDay = addSum / 60 / 24;
        	var strTactTime = nexacro.round(addSum,2) + "  ( " + nexacro.round(TactTimeForDay,2) + " )";
        	return strTactTime;
        }
        this.fnCol11 = function ()
        {
        	var recCount = this.ds_01Down.rowcount;
        	var addSum = 0;
        	for(var i=0; i<recCount; i++){
        		addSum = addSum + Number(this.nfn_nvl(this.ds_01Down.getColumn(this.ds_01Down.rowposition, "TARGETTACKTIME"), "0"));
        	}
        	var TactTimeForDay = addSum / 60 / 24;
        	var strTactTime = addSum + "  ( " + TactTimeForDay + " )";
        	return strTactTime;
        }
        this.fnCol12 = function ()
        {
        	var recCount = this.ds_01Down.rowcount;
        	var addSum = 0;
        	for(var i=0; i<recCount; i++){
        		addSum = addSum + Number(this.nfn_nvl(this.ds_01Down.getColumn(this.ds_01Down.rowposition, "STDLEADTIME"), "0"));
        	}
        	var TactTimeForDay = addSum / 60 / 24;
        	var strTactTime = addSum + "  ( " + TactTimeForDay + " )";
        	return strTactTime;
        }
        this.fnCol13 = function ()
        {
        	var recCount = this.ds_01Down.rowcount;
        	var addSum = 0;
        	for(var i=0; i<recCount; i++){
        		addSum = addSum + Number(this.nfn_nvl(this.ds_01Down.getColumn(this.ds_01Down.rowposition, "APPLICATIONTACKTIME"), "0"));
        	}
        	var TactTimeForDay = addSum / 60 / 24;
        	var strTactTime = addSum + "  ( " + TactTimeForDay + " )";
        	return strTactTime;
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.div_00_tab_01_Tabpage1_grd_00Left_oncellclick = function(obj,e)
        {
        	this.fn_search12();
        	this.fn_search21();
        };

        this.div_00_tab_01_Tabpage2_grd_01Top_oncellclick = function(obj,e)
        {
        	this.fn_search22();
        	//1042231A6, 1025256D1
        };

        this.div_00_tab_01_Tabpage3_grd_02List_onkeyup = function(obj,e)
        {
        	var tmpProductLt = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "PRODUCTLT"), "0"));
            var tmpSITELT = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "SITELT"), "0"));

            var tmpTotalLT = tmpProductLt + tmpSITELT;
            this.ds_02.setColumn(this.ds_02.rowposition, "TOTALLT", tmpTotalLT);
        	//----------------------------------------------------------------------------------------------------------------
        	var tmpProductLt2 = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "PRODUCTLT2"), "0"));
            var tmpSITELT2 = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "SITELT2"), "0"));

            var tmpTotalLT2 = tmpProductLt2 + tmpSITELT2;
            this.ds_02.setColumn(this.ds_02.rowposition, "TOTALLT2", tmpTotalLT2);
        };

        this.div_00_tab_01_Tabpage1_grd_00Right_onkeyup = function(obj,e)
        {
        	var tmpProductLt = Number(this.nfn_nvl(this.ds_00Right.getColumn(this.ds_00Right.rowposition, "PRODUCTLT"), "0"));
            var tmpSITELT = Number(this.nfn_nvl(this.ds_00Right.getColumn(this.ds_00Right.rowposition, "SITELT"), "0"));

            var tmpTotalLT = tmpProductLt + tmpSITELT;
            this.ds_00Right.setColumn(this.ds_00Right.rowposition, "TOTALLT", tmpTotalLT);
        	//----------------------------------------------------------------------------------------------------------------
        	var tmpProductLt2 = Number(this.nfn_nvl(this.ds_00Right.getColumn(this.ds_00Right.rowposition, "PRODUCTLT2"), "0"));
            var tmpSITELT2 = Number(this.nfn_nvl(this.ds_00Right.getColumn(this.ds_00Right.rowposition, "SITELT2"), "0"));

            var tmpTotalLT2 = tmpProductLt2 + tmpSITELT2;
            this.ds_00Right.setColumn(this.ds_00Right.rowposition, "TOTALLT2", tmpTotalLT2);
        };

        this.tab_00_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tabpage1_btn_product_onclick();
        	}
        };

        this.tab_00_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.ds_02_oncolumnchanged = function(obj,e)
        {
        	var tmpProductLt = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "PRODUCTLT"), "0"));
            var tmpSITELT = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "SITELT"), "0"));

            var tmpTotalLT = tmpProductLt + tmpSITELT;
            this.ds_02.setColumn(this.ds_02.rowposition, "TOTALLT", tmpTotalLT);
        	//----------------------------------------------------------------------------------------------------------------
        	var tmpProductLt2 = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "PRODUCTLT2"), "0"));
            var tmpSITELT2 = Number(this.nfn_nvl(this.ds_02.getColumn(this.ds_02.rowposition, "SITELT2"), "0"));

            var tmpTotalLT2 = tmpProductLt2 + tmpSITELT2;
            this.ds_02.setColumn(this.ds_02.rowposition, "TOTALLT2", tmpTotalLT2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.Button45_00.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_00_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_00_Tabpage1_btn_product_onclick,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_00Right.addEventHandler("onkeyup",this.div_00_tab_01_Tabpage1_grd_00Right_onkeyup,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_00Left.addEventHandler("oncellclick",this.div_00_tab_01_Tabpage1_grd_00Left_oncellclick,this);
            this.div_work.form.tab_01.Tabpage2.form.grd_01Top.addEventHandler("oncellclick",this.div_00_tab_01_Tabpage2_grd_01Top_oncellclick,this);
            this.div_work.form.tab_01.Tabpage3.form.grd_02List.addEventHandler("onkeyup",this.div_00_tab_01_Tabpage3_grd_02List_onkeyup,this);
            this.div_work.form.tab_01.Tabpage3.form.grd_02List.addEventHandler("onkillfocus",this.div_00_tab_01_Tabpage3_grd_02List_onkillfocus,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_02.addEventHandler("oncolumnchanged",this.ds_02_oncolumnchanged,this);
        };
        this.loadIncludeScript("MFM01200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
