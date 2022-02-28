(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM01600M");
            this.set_titletext("주요 품목 재공 실적_기준정보화면");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_personMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"OWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOADMNG\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"YESNOUSEPRODUCTDEFCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_prodTypeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodDivisioList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchPerson", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USEPRODUCTDEFCLASS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_GRPCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchRel", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_NOINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISLOADMNG\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentGroup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOADSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_order", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"IDX\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Tabpage("tabpage_personSearch",this.tab_search);
            obj.set_text("담당자");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodType","0","sta_site:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("1");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DC67B95CD188427AAAB84B5346920900");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prdoDefId","0","sta_prodType:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("2");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("1DDB96DA263E4951B88AF933F6A0471A");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodDivision","0","sta_prdoDefId:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("3");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3384BF67439F441199ED9A9D9E7987FB");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_noInput","0","sta_prodDivision:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("4");
            obj.set_text("미입력");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("NOINPUT");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_userId","0","sta_noInput:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("5");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OWNER");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_site","sta_site:5",null,"165","20",null,"sta_site:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prdoDefId","sta_prdoDefId:5",null,null,"20","37","sta_prdoDefId:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("7");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_prdoDefId","edt_prdoDefId:0",null,"22","20",null,"sta_prdoDefId:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("Static04",null,"205","45","20","91",null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("Static05","btn_search:0",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","Static05:0","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodType","sta_prodType:5",null,"165","20",null,"sta_prodType:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_innerdataset("ds_prodTypeList");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_prodDivision","sta_prodDivision:5",null,"165","20",null,"sta_prodDivision:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_innerdataset("ds_prodDivisioList");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_noInput","sta_noInput:5",null,"165","20",null,"sta_noInput:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Edit("edt_userId","sta_userId:5",null,null,"20","37","sta_userId:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("14");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_userId","edt_userId:0",null,"22","20",null,"sta_userId:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_valid","0","sta_userId:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("16");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("973968B5BBDD4C4488E0BCB3E760DA76");
            obj.set_visible("true");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_valid","sta_valid:5",null,"165","20",null,"sta_valid:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_visible("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Static("sta_group","0","sta_valid:5","103","20",null,null,null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("18");
            obj.set_text("그룹");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Edit("edt_grpKind","sta_group:5",null,null,"20","37","sta_group:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("21");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

            obj = new Button("btn_grpKind","edt_grpKind:0",null,"22","20",null,"sta_group:-20",null,null,null,null,this.tab_search.tabpage_personSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_personSearch.addChild(obj.name, obj);

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
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_preload("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_ItemGrp",this.div_work.form.tab_work);
            obj.set_text("제품, 품목그룹");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","155","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_ItemGrp.form);
            obj.set_taborder("0");
            obj.set_text("제품, 품목그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PRODGRP_ITEMGRP_LIST");
            this.div_work.form.tab_work.tabpage_ItemGrp.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_personMain","sta_subTitle:10","0",null,"34","688",null,null,null,null,null,this.div_work.form.tab_work.tabpage_ItemGrp.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_work.tabpage_ItemGrp.addChild(obj.name, obj);

            obj = new Grid("grd_person","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_ItemGrp.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_personMain");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"280\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" tooltiptext=\"ITEMVERSION\" text=\"Rev.\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPENAME\"/><Cell col=\"6\" text=\"품목유형구분\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell col=\"7\" text=\"담당자\" tooltiptext=\"OWNER\"/><Cell col=\"8\" text=\"담당자명\" tooltiptext=\"OWNERNAME\"/><Cell col=\"9\" text=\"제품그룹\" tooltiptext=\"PRODUCTCLASS\"/><Cell col=\"10\" text=\"품목 그룹\" tooltiptext=\"ITEMGROUP\"/><Cell col=\"11\" text=\"품목사용여부\" tooltiptext=\"ISUSEPRODUCT\" edittype=\"none\"/><Cell col=\"12\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\"/><Cell col=\"13\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"14\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:PRODUCTIONTYPENAME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFTYPE\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:OWNER\" textAlign=\"left\" expandshow=\"hide\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" text=\"bind:OWNERNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"hide\" displaytype=\"normal\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" border=\"1px solid #f1f1f1\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:PRODUCTDEFGROUPNAME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFCLASSGROUPNAME\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" combocodecol=\"C,YesNo,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,YesNo,,Y,N\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" text=\"bind:YESNOUSEPRODUCTDEFCLASS\"/><Cell col=\"12\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"13\" text=\"bind:MODIFIER\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_ItemGrp.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_SegmentSort",this.div_work.form.tab_work);
            obj.set_text("공정순서");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_SegmentSort.form);
            obj.set_taborder("0");
            obj.set_text("공정순서");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.tabpage_SegmentSort.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_SegmentSort.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_selecttype("row");
            obj.set_binddataset("ds_order");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정순번\"/><Cell col=\"2\" text=\"표준공정코드\"/><Cell col=\"3\" text=\"표준공정명\"/><Cell col=\"4\" text=\"그룹\"/><Cell col=\"5\" text=\"유효상태\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SORT\" displaytype=\"mask\" maskeditformat=\"########\" textAlign=\"right\" maskeditautoselect=\"true\" edittype=\"mask\" maskeditlimitbymask=\"integer\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:GROUPNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:VALIDSTATE\" textAlign=\"left\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_SegmentSort.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_SegmentSort.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_SegmentSort.addChild(obj.name, obj);

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

            obj = new Button("btn_save00",null,"18","60","21","62",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
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
        this.addIncludeScript("MFM01600M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM01600M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MFM01600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 주요 품목 재공 실적_기준정보화면
         * 파일명 		: MFM01600M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.24
         *
         * 설  명		:  재포장을 등록 합니다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.24	김진현   	최초작성
         * 2021.08.06	김진현		공정순서 엑셀 다운로드 추가
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        //this.searchDiv = this.div_work.form.tab_work.tabpage_ItemGrp.form.div_search.form;

        this.fv_ownerId 		= "";			// 담당자Id

        this.fv_personPos		= 0;			// 담당자Tab Rowpos

        this.fv_segmentRelPos	= 0;			// 표준공정 Tab Rowpos

        this.fv_ProdSegmentPos	= 0;			// 부하량 기준정보 Tab Rowpos

        this.fv_paste 			= false;		// 복사 여부 판단(맵핑)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("MFM01600M");
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// 복사 기능 - 21.04.23 담당자 복사 기능
        	this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.removeEventHandler("onkeydown", this.nfn_grd_onkeydown , this);
        	this.gfn_setGridCopyPaste(this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person);


        	// 그리드 팝업창 x 버튼 추가
        	var nOwnerXIdx 		= this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.getBindCellIndex("body","X_BTN");
        	this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.setCellProperty("body",nOwnerXIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지


        	// x 버튼 이벤트 설정( 담당자)
        	this.tab_search.tabpage_personSearch.form.btn_edt_userId.setEventHandler("onclick", this.fn_xClickUserId, this );

        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/


        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {

        	// 조회
        	this.ds_searchPerson.clearData();
        	this.ds_searchPerson.addRow();

        	this.ds_searchPerson.setColumn(0,"ENTERPRISEID"		,this.gf_getEnterpriseId());			// ENTERPRISEID
        	this.ds_searchPerson.setColumn(0,"P_PLANTID"		,this.gf_getSiteType());				// PLANT
        	this.ds_searchPerson.setColumn(0,"P_PRODUCTDEFID"	,this.tab_search.tabpage_personSearch.form.edt_prdoDefId.value);	// 제품id
        	this.ds_searchPerson.setColumn(0,"P_PRODUCTIONTYPE"	,this.tab_search.tabpage_personSearch.form.cmb_prodType.value);		// 생산구분
        	this.ds_searchPerson.setColumn(0,"P_PRODUCTDEFTYPE"	,this.tab_search.tabpage_personSearch.form.cmb_prodDivision.value);	// 제품구분
        	this.ds_searchPerson.setColumn(0,"P_NOINPUT"		,this.tab_search.tabpage_personSearch.form.cmb_noInput.value);		// 미입력
        	this.ds_searchPerson.setColumn(0,"USERID"			,this.fv_ownerId);						// 담당자
        	//this.ds_searchPerson.setColumn(0,"P_USEPRODUCTDEFCLASS_YN"	,this.tab_search.tabpage_personSearch.form.cmb_IsLoadMng.value);// 품목사용여부

        	// 21.04.30 유효여부 추가
        	this.ds_searchPerson.setColumn(0,"P_VALIDSTATE"		,this.tab_search.tabpage_personSearch.form.cmb_valid.value);

        	this.ds_searchPerson.setColumn(0, "P_GRPCODE" 		, this.tab_search.tabpage_personSearch.form.edt_grpKind.value);


        	var sSvcID 			= "selectWorkDoneProductRelList";
        	var sController 	= "/mfm01600/selectWorkDoneProductRelList.do";
        	var sInDatasets 	= "INPUT=ds_searchPerson";
        	var sOutDatasets 	= "ds_personMain=output1 ds_order=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_personMain) && !this.gfn_dsIsUpdated(this.ds_order))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// 기본 정보 설정
        	this.fn_setWorkDoneProdRelInfo();


        	// 제품그룹, 품목그룹, 담당자 연결 공정 저장
        	var sSvcID 			= "saveWorkDoneProductRel";
        	var sController 	= "/mfm01600/saveWorkDoneProductRel.do";
        	var sInDatasets 	= "ds_personMain=ds_personMain:U ds_order=ds_order:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
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
        			// site 첫값
        			this.tab_search.tabpage_personSearch.form.cmb_site.set_value(this.gf_getSiteType());
        			// 공정 부하 기준 정보 - 담당자(생산구분, 제품구분)
        			this.fn_getProdType();
        			this.fn_getProdDivision();
        			break;
        		case "selectProdType": 		// 필터 조건 (생산구분)
        			this.ds_prodTypeList.insertRow(0);
        			this.ds_prodTypeList.setColumn(0,"CODEID"  ,"");
        			this.ds_prodTypeList.setColumn(0,"CODENAME",this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.tab_search.tabpage_personSearch.form.cmb_prodType.set_value("");
        			break;
        		case "selectProdDivision": 		// 필터 조건 (제품구분)
        			this.ds_prodDivisioList.insertRow(0);
        			this.ds_prodDivisioList.setColumn(0,"CODEID"  ,"");
        			this.ds_prodDivisioList.setColumn(0,"CODENAME",this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.tab_search.tabpage_personSearch.form.cmb_prodDivision.set_value("");
        			break;
        		case "selectWorkDoneProductRelList":
        			if(this.ds_personMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}

        			// 조회 성공 후 (유효상태 설정)
        			this.fn_setValid();
        			break;
        		case "saveWorkDoneProductRel":
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
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
        		case "P_PRODUCTDEFID" :	// 담당자Tab - 품목(다중선택)
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nProdDefId = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nProdDefId += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_personSearch.form.edt_prdoDefId.set_value(nProdDefId);

        			}
        			else
        			{
        				this.tab_search.tabpage_personSearch.form.edt_prdoDefId.set_value("");
        			}
        			break;
        		case "OWNERNAME" :	// 담당자Tab -  담당자(다중선택)
        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nOwnerId = "";
        				var nOwnerNm = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nOwnerId += i==0? rtn[i][0] : ", " +rtn[i][0];
        					nOwnerNm += i==0? rtn[i][1] : ", " +rtn[i][1];
        				}
        				this.tab_search.tabpage_personSearch.form.edt_userId.set_value(nOwnerNm);
        				this.fv_ownerId = nOwnerId;
        			}
        			else
        			{
        				this.tab_search.tabpage_personSearch.form.edt_userId.set_value("");
        				this.fv_ownerId = "";
        			}
        			break;

        		case "OWNERNAME_GRID" :	// 담당자Tab - 품목(단일선택 - 그리드 입력팝업)
        			this.ds_personMain.setColumn(this.fv_personPos, "OWNER" 		,rtn[0]);
        			this.ds_personMain.setColumn(this.fv_personPos, "OWNERNAME" 	,rtn[1]);
        			break;

        		case "GRPKIND" :
        			this.tab_search.tabpage_personSearch.form.edt_grpKind.set_value(rtn[0]);
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

        	if(popId=="P00242")	// 담당장 팝업
        	{
        		oArg.arg_rtnCols = "USERID|USERNAME";								// 담당자id,담당자명
        		oArg.arg_searchStr = "1=1|USERIDNAME="+this.tab_search.tabpage_personSearch.form.edt_userId.value;	// 담당자
        		if(svcId == "OWNERNAME_GRID")
        		{
        			oArg.arg_type 	= "BA";		// 단일 선택
        			var nStrOwnerNm	= this.ds_personMain.getColumn(this.fv_personPos,"OWNERNAME");
        			oArg.arg_searchStr = "1=1|USERIDNAME="+nStrOwnerNm;	// 담당자(명) 그리드 상의
        		}
        	}
        	else if(svcId == "GRPKIND")  //그룹
        	{
        		oArg.arg_type 	= "BA";
        		oArg.arg_rtnCols = "CODE|NAME";
        		oArg.arg_searchStr = "CODENAME="+this.tab_search.tabpage_personSearch.form.edt_grpKind.value;
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
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
         *	필터 생산구분 콤보
         */
        this.fn_getProdType = function ()
        {
        	this.ds_searchFilter.clearData();
        	// 조회 조건 설정
        	this.ds_searchFilter.addRow();
        	this.ds_searchFilter.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchFilter.setColumn(0, "CODECLASSID"		, "ProductionType"); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectProdType";
        	var sController 	= "/pcm08400/selectTypeList.do";
        	var sInDatasets 	= "INPUT=ds_searchFilter";
        	var sOutDatasets 	= "ds_prodTypeList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	필터 제품구분 콤보
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
        	this.tab_search.tabpage_personSearch.form.cmb_site.set_value(this.gf_getSiteType());
        	this.tab_search.tabpage_personSearch.form.cmb_prodType.set_value("");
        	this.tab_search.tabpage_personSearch.form.cmb_prodDivision.set_value("");
        	this.tab_search.tabpage_personSearch.form.cmb_noInput.set_index(0);
        	//this.tab_search.tabpage_personSearch.form.cmb_IsLoadMng.set_index(0);
        	this.fv_ownerId 	= "";			// 담당자Id
        	this.tab_search.tabpage_personSearch.form.edt_prdoDefId.set_value("");
        	this.tab_search.tabpage_personSearch.form.edt_userId.set_value("");
        	this.tab_search.tabpage_personSearch.form.cmb_valid.set_index(0);
        	this.tab_search.tabpage_personSearch.form.edt_grpKind.set_value("");
        };

        /*
         * 부하량 기준정보 수정시 -> 기본 정보 설정
         */
        this.fn_setWorkDoneProdRelInfo = function ()
        {
        	var nCnt = this.ds_personMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nRowType = this.ds_personMain.getRowType(i);
        		if(nRowType == Dataset.ROWTYPE_UPDATE)
        		{
        			this.ds_personMain.setColumn(i,"ENTERPRISEID"	,this.gf_getEnterpriseId());
        			this.ds_personMain.setColumn(i,"PLANTID"		,this.gf_getSiteType());
        		}
        	}
        };



         /*
          * 시작일 빈값 자동 오늘자로 설정_[21.04.23]
          */
         this.fn_setValid = function ()
         {
        	this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.set_enableevent(false);
        	this.ds_personMain.set_enableevent(false);

        	var nCnt  	= this.ds_personMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nValid = this.ds_personMain.getColumn(i,"VALIDSTATE");
        		if(this.gfn_isNull(nValid))
        		{
        			this.ds_personMain.setColumn(i,"VALIDSTATE","Valid");
        		}
        	}
        	this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.set_enableevent(true);
        	this.ds_personMain.set_enableevent(true);

         };


         /*
         * 담당자 Tab 담당자 x 버튼 클릭시
         */
        this.fn_xClickUserId = function ()
        {
        	this.tab_search.tabpage_personSearch.form.edt_userId.set_value("");
        	this.fv_ownerId = "";
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_tabpage_personSearch_btn_prdoDefId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "P_PRODUCTDEFID";
        	var oArg 	= {};
        	var opts 	= "width=800,height=800";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_personSearch.form.edt_prdoDefId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}

        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"mfm::MFM00200P.xfdl" ,oArg ,opts);
        };

        /*
         * 담당자 팝업
         */
        this.tab_search_tabpage_personSearch_btn_userId_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"	 , this.gf_getSiteType()); 		//Site

        	// 필터의 경우 등록된것만 나오도록 수정 (21.07.26)
        	sArgs += this.gfn_setParam("P_FILTER", "Y"); 							//필터의 경우등록된것만 나오도록 설정

        	this.fn_openPop("OWNERNAME","P00242", sArgs); // 담당자 필터
        };

        /*
         * 담당자 그리드 팝업
         */
        this.div_work_tab_work_tabpage_Person_grd_00_onexpanddown = function(obj,e)
        {
        	var nOwnerIdx 		= this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.getBindCellIndex("body","OWNERNAME");
        	this.fv_personPos 	= e.row;
        	if(e.cell == nOwnerIdx)
        	{
        		var sArgs = {};
        		sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        		sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			//Site

        		this.fn_openPop("OWNERNAME_GRID","P00242", sArgs); // 담당자 필터
        	}
        	else
        	{
        		//초기화
        		this.ds_personMain.setColumn(this.fv_personPos, "OWNER" ,"");
        		this.ds_personMain.setColumn(this.fv_personPos, "OWNERNAME" ,"");
        	}
        };

        this.tab_search_tabpage_personSearch_btn_grpKind_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID"	 , this.gf_getSiteType()); 		//Site

        	this.fn_openPop("GRPKIND","P00316", sArgs); // 담당자 필터
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tabpage_personSearch.form.btn_prdoDefId.addEventHandler("onclick",this.tab_search_tabpage_personSearch_btn_prdoDefId_onclick,this);
            this.tab_search.tabpage_personSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tabpage_personSearch.form.btn_userId.addEventHandler("onclick",this.tab_search_tabpage_personSearch_btn_userId_onclick,this);
            this.tab_search.tabpage_personSearch.form.btn_grpKind.addEventHandler("onclick",this.tab_search_tabpage_personSearch_btn_grpKind_onclick,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.div_work_tab_work_onchanged,this);
            this.div_work.form.tab_work.tabpage_ItemGrp.form.grd_person.addEventHandler("onexpanddown",this.div_work_tab_work_tabpage_Person_grd_00_onexpanddown,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.ds_prodTypeList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodTypeList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_prodDivisioList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodDivisioList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
        };
        this.loadIncludeScript("MFM01600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
