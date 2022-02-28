(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01100M");
            this.set_titletext("품목 Tack Time 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tackTime", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"THEORYTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT3TACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT6TACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"THEORYTACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT3TACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT6TACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETTACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"STDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STDLEADTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTACKTIME2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tactimeApplySTD", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTACKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"179","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","205","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","199","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","199","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_rev","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productType","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validStatus","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("99");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_rev","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productType","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validStatus","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productType00","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productType00","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_noInput","1","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_noInput","109","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("불량코드");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

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
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_01);
            obj.set_text("Tack Time 리스트");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_tackTime","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_tackTime");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"92\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"62\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"62\"/><Column size=\"90\"/><Column size=\"62\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev.\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"5\" rowspan=\"2\" text=\"Site ID\"/><Cell col=\"6\" rowspan=\"2\" text=\"공정수순\"/><Cell col=\"7\" rowspan=\"2\" text=\"공정ID\"/><Cell col=\"8\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"9\" colspan=\"6\" text=\"Tack Time ( 초 / PNL )\" cssclass=\"cell_headMaster\"/><Cell col=\"15\" rowspan=\"2\" text=\"유효상태\" cssclass=\"cell\"/><Cell col=\"16\" rowspan=\"2\" text=\"수정자\"/><Cell col=\"17\" rowspan=\"2\" text=\"수정일\"/><Cell col=\"18\" rowspan=\"2\" text=\"양산구분\"/><Cell col=\"19\" rowspan=\"2\" text=\"제품구분\"/><Cell col=\"20\" rowspan=\"2\" text=\"입력\"/><Cell row=\"1\" col=\"9\" text=\"이론값\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"10\" text=\"실적값(3개월평균)\"/><Cell row=\"1\" col=\"11\" text=\"실적값(6개월평균)\"/><Cell row=\"1\" col=\"12\" text=\"목표값\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"13\" text=\"표준 Lead Time\" cssclass=\"cell_point\"/><Cell row=\"1\" col=\"14\" text=\"적용값\" cssclass=\"cell\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"5\" text=\"bind:PLANTID\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:THEORYTACKTIME\" textAlign=\"right\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:RESULT3TACKTIME\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:RESULT6TACKTIME\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:TARGETTACKTIME\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:STDLEADTIME\" textAlign=\"right\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"14\" text=\"bind:APPLICATIONTACKTIME\" textAlign=\"right\" displaytype=\"text\" edittype=\"none\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"15\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,ValidState,,Y,\"/><Cell col=\"16\" text=\"bind:MODIFIER\"/><Cell col=\"17\" text=\"bind:MODIFIEDTIME\"/><Cell col=\"18\" text=\"bind:PRODUCTIONTYPE\" combocodecol=\"C,YieldProdType,,Y,\" displaytype=\"combotext\"/><Cell col=\"19\" text=\"bind:PRODUCTDEFTYPE\" combocodecol=\"C,ProductDivision2,,Y,\" displaytype=\"combotext\"/><Cell col=\"20\" text=\"bind:INPUTCODE\" combocodecol=\"C,ProductDivision2,,Y,\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("subtitle3","0","0","103","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Tact Time현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tackTime",null,"6","29","24","4",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_tackTime",null,"6","26","24","33",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tackTime","subtitle3:13","-1","104","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_targettacktime",null,"7","52","20","410",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("목표값");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETTACKTIME");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_theorytacktime",null,"7","42","20","sta_targettacktime:0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_trimtype("both");
            obj.set_limitbymask("decimal");
            obj.set_format("!#,##9");
            obj.set_displaynulltext("0");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_theorytacktime",null,"7","52","20","msk_theorytacktime:5",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("이론값");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("THEORYTACKTIME");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_allApply",null,"7","90","21","btn_delRow_ds_tackTime:37",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("일괄적용");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("ALLAPPLY");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_stdleadtime",null,"7","42","20","btn_allApply:24",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_trimtype("both");
            obj.set_limitbymask("decimal");
            obj.set_format("!#,##9");
            obj.set_displaynulltext("0");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_stdleadtime",null,"7","100","20","msk_stdleadtime:5",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("표준 Lead Time");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STDLEADTIME");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_targettacktime",null,"7","42","20","sta_stdleadtime:0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_trimtype("both");
            obj.set_limitbymask("decimal");
            obj.set_format("!#,##9");
            obj.set_displaynulltext("0");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("Tack Time 적용기준");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","138","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Tack Time 적용현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_tactimeApplySTD","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_tactimeApplySTD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"116\"/><Column size=\"32\"/><Column size=\"274\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"139\"/><Column size=\"139\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"생산구분\" cssclass=\"cell\"/><Cell col=\"5\" text=\"제품구분\" cssclass=\"cell\"/><Cell col=\"6\" text=\"적용값\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"유효상태\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,YieldProdType,,Y,\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFTYPE\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,ProductDivision2,,Y,\"/><Cell col=\"6\" text=\"bind:APPLICATIONTACKTIME\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,ApplicationTackTimeType,,Y,Y\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tactimeApplySTD",null,"6","29","24","4",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tactimeApplySTD","151","-1","101","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","6",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","37",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","68",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","163","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("품목 Tack Time 관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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
        this.addIncludeScript("MFM01100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM01100M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM01100M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM01100M.xfdl", function() {
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
        this.gridDiv = this.div_work.form.tab_01.Tabpage1.form;
        this.gridDiv2 = this.div_work.form.tab_01.Tabpage2.form;

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)

        this.processId = '';

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("MFM01100M");
        	this.nfn_formInit(obj);

        	this.fn_initCombo();

        	//체크박스, sort 이벤트 수정(담당자)
        	this.gridDiv.grd_tackTime.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	this.gridDiv.grd_tackTime.addEventHandler("onheadclick", this.fn_onheadclick , this);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (TAB1 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	//품목코드명이 공백이면 품목Id 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//공정명이 공백이면 공정Id 공백 처리
        	if(this.searchDiv.edt_process.value=='') {
        		this.processId = '';
        	}

        	this.ds_tackTime.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_PRODUCTIONDIVISION", 		this.nfn_nvl(this.searchDiv.cbo_productType00.value, "")); //양산구분
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 				this.nfn_nvl(this.productId, "")); //제품코드 : 다중건
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", 			this.nfn_nvl(this.processId, "")); //공정ID : 다중건
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 			this.nfn_nvl(this.searchDiv.cbo_rev.value, "")); //제품버젼
        	this.ds_search.setColumn(0, "P_PRODUCTDEFTYPE", 			this.nfn_nvl(this.searchDiv.cbo_productType.value, "")); //제품구분
        	this.ds_search.setColumn(0, "P_VALIDSTATE", 				this.nfn_nvl(this.searchDiv.cbo_validStatus.value, ""));

        	this.ds_search.setColumn(0, "P_NOINPUT", 					this.nfn_nvl(this.searchDiv.cbo_noInput.value, ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectTackTimeList");

        	var sSvcID 			= "selectTackTimeList";
        	var sController 	= "/mfm01100/selectTackTimeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tackTime=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (TAB2 Grid)
         */
        this.fn_search2 = function (obj, e)
        {
        	//품목코드명이 공백이면 품목Id 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	this.ds_tactimeApplySTD.clearData();

        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 						this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_PRODUCTIONDIVISION", 		this.nfn_nvl(this.searchDiv.cbo_productType00.value, "")); //양산구분
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 				this.nfn_nvl(this.productId, "")); //제품코드 : 다중건
        	this.ds_search.setColumn(0, "P_PRODUCTDEFTYPE", 			this.nfn_nvl(this.searchDiv.cbo_productType.value, "")); //제품구분
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 			this.nfn_nvl(this.searchDiv.cbo_rev.value, "")); //제품버젼
        	this.ds_search.setColumn(0, "P_VALIDSTATE", 				this.nfn_nvl(this.searchDiv.cbo_validStatus.value, ""));

        	this.ds_search.setColumn(0, "P_NOINPUT", 					this.nfn_nvl(this.searchDiv.cbo_noInput.value, ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectTackTimeList");

        	var sSvcID 			= "selectTactimeApplySTD";
        	var sController 	= "/mfm01100/selectTactimeApplySTD.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tactimeApplySTD=output";
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
        	if(!this.gfn_dsIsUpdated(this.ds_tackTime) && !this.gfn_dsIsUpdated(this.ds_tactimeApplySTD)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//-----------------------------------
        	//[1] 왼쪽 그리드 : 필수 입력 체크
        	//-----------------------------------
        	var component = this.gridDiv.grd_tackTime;
        	var strColIdList = "VALIDSTATE";

        	/* 그리드 필수 입력 체크 (왼쪽 그리드) */
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveTackTime";
        	var sController 	= "/mfm01100/saveTackTime.do";
        	var sInDatasets 	= "INPUT=ds_tackTime:U INPUT2=ds_tactimeApplySTD:U";
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
        		case "selectTackTimeList": //TAB1 그리드 CALLBACK
        			this.fn_search2();
        			break;
        		case "selectTactimeApplySTD": //TAB2 그리드 CALLBACK
        			break;
        		case "saveTackTime": //저장Callback
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
        		oArg.arg_type = "CA";
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
        		var objId = "";
        		var objText = "";
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if(i<rtn.length-1){
        				objId += colArray[0]+",";
        				objText += colArray[1]+",";
        			}else{
        				objId += colArray[0];
        				objText += colArray[1];
        			}
        		}
        		this.searchDiv.edt_product.set_value(objText);
        		this.productId = objId;
        		this.fn_productVer();
        	}
        	if (sPopupId == "POPUP_PROCESSSEGMENTID")
        	{
        		var objId = "";
        		var objText = "";
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if(i<rtn.length-1){
        				objId += colArray[0]+",";
        				objText += colArray[1]+",";
        			}else{
        				objId += colArray[0];
        				objText += colArray[1];
        			}
        		}
        		this.searchDiv.edt_process.set_value(objText);
        		this.processId = objId;
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_productVer();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         // 조회 조건 이벤트 [E]
        this.mfn_OpenProcSegment = function ()
        {
        	var oArg = {};
        	oArg.arg_type        = "CA";
        	oArg.arg_popupCd     = "P00156";
        	oArg.arg_popupNm     = "공정 선택";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_PROCESSSEGMENT=" +this.searchDiv.edt_process.value;
        	this.gfn_openPopup( "POPUP_PROCESSSEGMENTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        /*
         * 기능 : [제품Ver]
         */
        this.fn_productVer = function (obj, e)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 				this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 					this.nfn_nvl(this.gf_getSiteType(), ""));
        	if(this.productId=='' || this.searchDiv.edt_product.value==''){
        		sArgs += this.gfn_setParam("P_PRODUCTDEFID", 			"X"); //제품ID가 공백이면 VER 은 전체만 표시되게 한다.
        	}else{
        		sArgs += this.gfn_setParam("P_PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //제품ID : 다중건
        	}
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 				this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.searchDiv.cbo_rev // Object
        								, "selectProductDefVerList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_HL1"); //콜백함수 지정
        };

        this.fn_callBack_HL1  = function(selectQuery, i, a)
        {
        	this.div_work.form.tab_01.Tabpage1.form.cbo_validstate.set_index(0);
        };

        this.fn_searchClear = function(obj,e)
        {
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_dispatchingItem.clearData();
        	this.ds_priorityOfDispatching.clearData();
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
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
        	//sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "*");

        	this.productKeyType = '1';

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.tab_00_Tabpage1_edt_process_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tabpage1_btn_process_onclick();
        	}
        };

        this.tab_00_Tabpage1_btn_process_onclick = function(obj,e)
        {
        	this.mfn_OpenProcSegment();
        };

        this.tab_00_Tabpage1_edt_product_onchanged = function(obj,e)
        {
        	this.fn_productVer();
        };

        this.tab_00_Tabpage1_edt_product_onkillfocus = function(obj,e)
        {
        	this.fn_productVer();
        };

        // 일괄적용
        this.div_00_tab_01_Tabpage1_btn_allApply_onclick = function(obj,e)
        {
        	this.gridDiv.grd_tackTime.set_enableredraw(false);
        	this.gridDiv.grd_tackTime.set_enableevent(false);
        	this.ds_tackTime.set_enableevent(false);

        	var cRow = this.ds_tackTime.findRowExpr("CHK == '1'");

        	if(cRow == -1)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}

        	for(var i = 0; i < this.ds_tackTime.getRowCount(); i++)
        	{
        		if(this.ds_tackTime.getColumn(i, "CHK") == '1')
        		{
        			this.ds_tackTime.setColumn(i, "THEORYTACKTIME", this.nfn_nvl(this.div_work.form.tab_01.Tabpage1.form.msk_theorytacktime.value,0));
        			this.ds_tackTime.setColumn(i, "TARGETTACKTIME", this.nfn_nvl(this.div_work.form.tab_01.Tabpage1.form.msk_targettacktime.value,0));
        			this.ds_tackTime.setColumn(i, "STDLEADTIME", this.nfn_nvl(this.div_work.form.tab_01.Tabpage1.form.msk_stdleadtime.value,0));
        			//this.ds_tackTime.setColumn(i, "APPLICATIONTACKTIME", this.nfn_nvl(this.div_work.form.tab_01.Tabpage1.form.msk_applicationtacktime.value,0));
        			//this.ds_tackTime.setColumn(i, "VALIDSTATE", this.div_work.form.tab_01.Tabpage1.form.cbo_validstate.value);
        		}
        	}

        	this.gridDiv.grd_tackTime.set_enableredraw(true);
        	this.gridDiv.grd_tackTime.set_enableevent(true);
        	this.ds_tackTime.set_enableevent(true);
        };

        /*
         * (21.06.04) - 체크박스 전체 이벤트 제거후 적용 해 볼 것 (속도개선)
         */
        this.fn_onheadclick = function (obj,e)
        {
        	var nObjDs	= obj.getBindDataset();
        	nObjDs.set_updatecontrol(false);
        	nObjDs.set_enableevent(false);
        	obj.set_enableevent(false);
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);

        	// Grid 정렬
        	this.gfn_ProcGrdSort(obj, e.cell);
        	obj.set_enableevent(true);
        	nObjDs.set_enableevent(true);
        	nObjDs.set_updatecontrol(true);

        };
        this.div_00_tab_01_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.Button45_00.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_00_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onchanged",this.tab_00_Tabpage1_edt_product_onchanged,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkillfocus",this.tab_00_Tabpage1_edt_product_onkillfocus,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_00_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_process.addEventHandler("onkeydown",this.tab_00_Tabpage1_edt_process_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_process.addEventHandler("onclick",this.tab_00_Tabpage1_btn_process_onclick,this);
            this.div_work.form.tab_01.addEventHandler("onchanged",this.div_00_tab_01_onchanged,this);
            this.div_work.form.tab_01.Tabpage1.form.btn_allApply.addEventHandler("onclick",this.div_00_tab_01_Tabpage1_btn_allApply_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("MFM01100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
