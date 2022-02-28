(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS05200M");
            this.set_titletext("자사작업자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basAreaTree", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREALEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basAreaworker", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basAreaworkerExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SITENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNO\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_plantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("1493039772944A708CF4F968BF7D80E7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_readonly("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

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

            obj = new Static("Static01","240","0",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("작업자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basAreaworker","240","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basAreaworker");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"24\"/><Column size=\"101\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" colspan=\"2\" text=\"사용자ID\" cssclass=\"cell_point\" tooltiptext=\"USERID\"/><Cell col=\"3\" text=\"작업자명\" tooltiptext=\"WORKERNAME\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"자사구분\" cssclass=\"cell_point\" tooltiptext=\"OWNTYPE\" color=\"#333333\"/><Cell col=\"5\" text=\"작업자구분\" cssclass=\"cell_point\" tooltiptext=\"WORKERTYPE\"/><Cell col=\"6\" text=\"주작업장구분\" cssclass=\"cell_point\" tooltiptext=\"ISMAINAREA\"/><Cell col=\"7\" text=\"Site ID\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"작업장명\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"작업자 번호\"/><Cell col=\"10\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"11\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"12\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"13\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"14\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"1\" text=\"bind:USERID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"2\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_N.png&apos;)\" expandsize=\"24\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\" text=\"bind:USERID_X_BTN\"/><Cell col=\"3\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" text=\"bind:WORKERNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:OWNTYPE\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"left\" combocodecol=\"C,OwnType,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"5\" text=\"bind:WORKERTYPE\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,WORKERTYPE,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"6\" text=\"bind:ISMAINAREA\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"7\" text=\"bind:PLANTID\" displaytype=\"combotext\" combodataset=\"ds_plant\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;combo&quot; : &quot;none&quot;\"/><Cell col=\"8\" text=\"bind:AREAID\" combodataset=\"ds_area\" combocodecol=\"AREAID\" combodatacol=\"AREANAME\" displaytype=\"combotext\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;combo&quot; : &quot;none&quot;\" combodisplayrowcount=\"15\" combotype=\"filterlike\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"normal\" text=\"bind:WORKERNO\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"11\" text=\"bind:CREATOR\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"12\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr: dataset.getRowType(currow) ==2 ? &apos;none&apos;:&apos;normal&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"13\" text=\"bind:MODIFIER\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:(dataset.getRowType(currow) ==2 || MODIFIEDTIME == null) ? &apos;none&apos;:&apos;normal&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTreeAreaList","0","0","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("작업장 트리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TREEAREALIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_00","0","34","230","42",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_treeSearch","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("0");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_searchTree",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","75","230",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_basAreaTree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:AREANAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:AREALEVEL\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","26","24","111",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","26","24","85",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_mainExcel",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
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

            obj = new Button("btn_save",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","122","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("외주작업자관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0163");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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

            obj = new Grid("grd_mainExcel","540","770",null,null,"20","-193",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_basAreaworker");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"101\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사용자ID\" cssclass=\"cell_point\" tooltiptext=\"USERID\"/><Cell col=\"1\" text=\"작업자명\" tooltiptext=\"WORKERNAME\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"자사구분\" cssclass=\"cell_point\" tooltiptext=\"OWNTYPE\" color=\"#333333\"/><Cell col=\"3\" text=\"작업자구분\" cssclass=\"cell_point\" tooltiptext=\"WORKERTYPE\"/><Cell col=\"4\" text=\"주작업장구분\" cssclass=\"cell_point\" tooltiptext=\"ISMAINAREA\"/><Cell col=\"5\" text=\"Site ID\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"작업장명\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"작업자 번호\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"bind:USERID\" expandshow=\"hide\" expandsize=\"24\" textAlign=\"left\" border=\"1px solid #f1f1f1\"/><Cell col=\"1\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" text=\"bind:WORKERNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:OWNTYPE\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"left\" combocodecol=\"C,OwnType,,Y,Y\"/><Cell col=\"3\" text=\"bind:WORKERTYPE\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,WORKERTYPE,,Y,Y\"/><Cell col=\"4\" text=\"bind:ISMAINAREA\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:PLANTID\" displaytype=\"combotext\" combodataset=\"ds_plant\" combocodecol=\"CODE\" combodatacol=\"NAME\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;combo&quot; : &quot;none&quot;\"/><Cell col=\"6\" text=\"bind:AREAID\" combodataset=\"ds_area\" combocodecol=\"AREAID\" combodatacol=\"AREANAME\" displaytype=\"combotext\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;combo&quot; : &quot;none&quot;\" combodisplayrowcount=\"15\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"normal\" text=\"bind:WORKERNO\"/><Cell col=\"8\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS05200M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS05200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자사작업자관리
         * 파일명 		: BAS05200M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.27
         *
         * 설  명		: 기준관리 - 작업자관리 - 자사작업자관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.27	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_areaId;
        this.fv_areaType;

        this.fv_preAreaId 	= "";				// 조회시 이전에 선택한 tree값
        this.fv_mainPos		= "";				// 메인 그리드 팝업 클릭시 row 위치

        this.fv_preArea		= "";				// Tree 조회시 이전 값

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	this.fn_formInit();
        	this.fn_searchTreeList();		// 작업장 트리 조회


        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchTreeList();
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_basAreaworker;
        	var rowPosition = this.ds_basAreaTree.rowposition;
        	if(dsObj == null || rowPosition < 0) return;

        	var areaType 	= this.ds_basAreaTree.getColumn(rowPosition, "AREATYPE");
        	var areaId 		= this.ds_basAreaTree.getColumn(rowPosition, "AREAID");
        	var ownType 	= this.ds_basAreaTree.getColumn(rowPosition, "OWNTYPE");

        	if(areaType == "Area") {
        		var row = dsObj.addRow();

        		dsObj.setColumn(row,"USERID"		, "");
        		dsObj.setColumn(row,"AREAID"		, areaId);
        		dsObj.setColumn(row,"OWNTYPE"		, ownType);
        		dsObj.setColumn(row,"ENTERPRISEID"	, this.gf_getEnterpriseId());//ENTERPRISEID
        		dsObj.setColumn(row,"PLANTID"		, this.gf_getSiteType());//PLANTID
        		dsObj.setColumn(row,"VALIDSTATE"	, "Valid");			//유효여부
        	}
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_basAreaworker) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_basAreaworker;
        	var strColIdList = "USERID,WORKERNAME,OWNTYPE,WORKERTYPE,ISMAINAREA,PLANTID,AREAID,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;


        	if (!this.fn_checkValidationDup(this.ds_basAreaworker) )
        	{
        		//this.gfn_Message("DuplicationItem", this.nfn_getDictionarynameUpper("USERID"), "warning", "ok"); //중복 등록된 항목이 있습니다.
        		// SAMEUSEREXIST
        		this.gfn_Message("SAMEUSEREXIST",  null, "warning", "ok");	// 동일한 작업자가 이미 존재합니다.
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasAreaPerson";
        	var sController 	= "/bas05200/saveBasAreaPerson.do";
        	var sInDatasets 	= "INPUT=ds_basAreaworker:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_basAreaworker;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);
        	trace(nRowType);
        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		//this.gfn_Message("CantdelSaveData", null, "info", "ok");
        		// rowType 변경
        		/*
        		this.ds_basAreaworker.set_updatecontrol(false);
        		var nR = dsObj.setRowType(dsObj.rowposition,"D");
        		this.ds_basAreaworker.set_updatecontrol(true);
        		*/
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	}
        };

        /*
         * 기능 : 행복사
         */
        this.fn_copy = function(obj,e)
        {
        	// GridNoChecked
        	var nChkCnt 	= this.ds_basAreaworker.getCaseCount("CHK=='1'");
        	if(nChkCnt == 0)
        	{
        		this.gfn_Message("GridNoChecked", null, "error", "ok");		// 체크된 행이 없습니다.
        		return false;
        	}

        	var dsObj = this.ds_basAreaworker;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
        	dsObj.setColumn(row,"AreaworkerID",""); //ID
        	dsObj.setColumn(row,"CREATOR",""); 		//생성자
        	dsObj.setColumn(row,"CREATEDTIME",""); 	//생성일
        	dsObj.setColumn(row,"MODIFIER",""); 	//수정자
        	dsObj.setColumn(row,"MODIFIEDTIME",""); //수정일
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{

        		if (trId == "saveBasAreaPerson")
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
        	else
        	{
        		if (trId == "saveBasAreaPerson")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_searchGridList();
        		}
        		else if (trId == "selecBasAreaPersonMainList")
        		{
        			// 그리드 컬럼 추가
        			this.ds_basAreaworker.addColumn("USERID_X_BTN","string",10);
        		}
        		else if (trId == "selectBasAreaPersonTreeList")
        		{
        			// Tree에서 선택한 값 있는 경우 조회시 자동 선택
        			if(!this.gfn_isNull(this.fv_preAreaId))
        			{
        				var nFrow = this.ds_basAreaTree.findRow("AREAID",this.fv_preAreaId);
        				if(nFrow != -1)
        				{
        					this.ds_basAreaTree.set_enableevent(true);
        					this.ds_basAreaTree.set_rowposition(nFrow);
        				}
        			}
        			this.ds_basAreaTree.set_enableevent(true);
        		}
        		else if (trId == "selectInitComboList") 		// site, area 콤보값 조회
        		{

        		}
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

        		case "P_GetUserIdInfo" :	// 사용자 팝업 호출 후
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				//var nProdDefId = "";
        				trace(" ===> : "+nLen);
        				// 신규 로우 추가시 필요 정보
        				var rowPosition = this.ds_basAreaTree.rowposition;
        				var areaType 	= this.ds_basAreaTree.getColumn(rowPosition, "AREATYPE");
        				var areaId 		= this.ds_basAreaTree.getColumn(rowPosition, "AREAID");
        				var ownType 	= this.ds_basAreaTree.getColumn(rowPosition, "OWNTYPE");

        				for(var i=0; i<nLen; i++)
        				{
        					if(i == 0)
        					{
        						// 클릭한 row
        						this.ds_basAreaworker.setColumn(this.fv_mainPos, "USERID", rtn[i][0]);
        						this.ds_basAreaworker.setColumn(this.fv_mainPos, "WORKERNAME", rtn[i][1]);
        					}
        					else
        					{
        						// row추가
        						if(areaType == "Area") {
        							var row = this.ds_basAreaworker.addRow();
        							//dsObj.setColumn(row,"USERID"		, "*");
        							this.ds_basAreaworker.setColumn(row,"AREAID"		, areaId);
        							this.ds_basAreaworker.setColumn(row,"OWNTYPE"		, ownType);
        							this.ds_basAreaworker.setColumn(row,"ENTERPRISEID"	, this.gf_getEnterpriseId());//ENTERPRISEID
        							this.ds_basAreaworker.setColumn(row,"PLANTID"		, this.gf_getSiteType());//PLANTID
        							this.ds_basAreaworker.setColumn(row,"VALIDSTATE"	, "Valid");			//유효여부
        							// 클릭한 row
        							this.ds_basAreaworker.setColumn(row, "USERID"		, rtn[i][0]);
        							this.ds_basAreaworker.setColumn(row, "WORKERNAME"	, rtn[i][1]);
        						}
        					}
        				}
        			}
        			else
        			{
        				trace("==== 해당 row 삭제 ===== ");
        				this.ds_basAreaworker.set_enableevent(false);
        				this.ds_basAreaworker.deleteRow(this.fv_mainPos);
        				this.ds_basAreaworker.set_enableevent(true);
        			}
        			break;



        		default :
        			break;
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.tab_search.Tabpage1.form.cbo_site.set_value(this.gf_getSiteType());
         	this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 트리 조회
         */
        this.fn_searchTreeList = function ()
        {

        	this.ds_basAreaTree.set_enableevent(false);
        	// 이전 선택 값을 찾는다 (21.04.27)
        	var nPos = this.ds_basAreaTree.rowposition;
        	if (this.ds_basAreaTree.rowcount != 0)
        	{
        		this.fv_preAreaId = this.ds_basAreaTree.getColumn(this.ds_basAreaTree.rowposition, "AREAID");
        	}

        	this.ds_basAreaTree.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// [필요 트리에 선택된 상태에서 조회 버튼 클릭시 ](21.04.27)

        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "AREATYPE", "Area");
        	this.ds_search.setColumn(0, "OWNTYPE", "OurCompany,MajorSuppliers");		// 외주작업자 관리 쿼리 같이 사용함


        	var sSvcID 			= "selectBasAreaPersonTreeList";
        	var sController 	= "/bas05200/selectBasAreaPersonTreeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basAreaTree=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 트리 필터
         */
        this.fn_filterTree = function (searchText)
        {
        	this.fv_preArea	 = this.ds_basAreaTree.getColumn(this.ds_basAreaTree.rowposition, "AREAID");

        	if(this.nfn_isNull(searchText)) {
        		this.ds_basAreaTree.filter("");
        	} else {
        		this.ds_basAreaTree.filter("AREANAME.toUpperCase().indexOf('"+searchText.toUpperCase()+"') > -1");
        	}
        	// 이전 선택 값 확인
        	var nRowPos = this.ds_basAreaTree.findRow("AREAID",this.fv_preArea);
        	trace(" ====> : ");
        	if(nRowPos != -1)
        	{
        		this.ds_basAreaTree.set_rowposition(nRowPos);
        	}
        	else
        	{
        		this.ds_basAreaTree.set_rowposition(0);
        	}
        };

        /*
         * 작업자 리스트 조회
         */
        this.fn_searchGridList = function()
        {
        	this.ds_basAreaworker.clearData();
        	if(this.fv_areaType != "Area") return;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validState.value);
        	this.ds_search.setColumn(0, "AREAID", this.fv_areaId);

        	var sSvcID 			= "selecBasAreaPersonMainList";
        	var sController 	= "/bas05200/selecBasAreaPersonMainList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basAreaworker=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 유효성 체크 (중복체크)
         */
        this.fn_checkValidationDup = function ()
        {
        	var ret = true, objDs = this.ds_basAreaworker;

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var planId 		= objDs.getColumn(i, "PLANTID");
        		var areaId 		= objDs.getColumn(i, "AREAID");
        		var workerName 	= objDs.getColumn(i, "WORKERNAME");
        		var userId		= objDs.getColumn(i, "USERID");

        		var filterStr = "PLANTID == '"+planId+"' && AREAID =='"+areaId+"' && WORKERNAME =='"+workerName+"' && USERID =='"+userId+"'";

        		if(objDs.getCaseCount(filterStr) > 1) {
        			ret =  false;
        			return ret;
        		}
        	}

        	return ret;
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

        	this.ds_plant.clearData();
        	this.ds_area.clearData();
        	this.ds_searchInitCombo.clearData();

        	// 조회 조건 설정
        	this.ds_searchInitCombo.addRow();
        	this.ds_searchInitCombo.setColumn(0, "ENTERPRISEID"		, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchInitCombo.setColumn(0, "PLANTID"	    	, this.gf_getSiteType()); 		// PLANTID
        	this.ds_searchInitCombo.setColumn(0, "LANGUAGETYPE"		, this.gf_getLanguageType()); 	// LANGUAGETYPE

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectInitComboList";
        	var sController 	= "/bas05200/selectInitComboList.do";
        	var sInDatasets 	= "INPUT=ds_searchInitCombo";
        	var sOutDatasets 	= "ds_plant=output1 ds_area=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 사용자 id 팝업 호출
         */
        this.fn_getUserId = function ()
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var nType 			= nType;						//대중소

        	var popupId = "P_GetUserIdInfo";
        	var oArg 	= {};
        	var opts 	= "width=800,height=600";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.ds_basAreaworker.getColumn(this.fv_mainPos,"USERID");

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_Text = nSearch;
        	}

        	// ds 추가
        	oArg.arg_DataSet 	= this.ds_basAreaworker;

        	oArg.arg_nEnt 		= nEnterpriseId;
        	oArg.arg_nSite 		= nSite;
        	oArg.arg_nType 		= nType;
        	// 넘길대 데이터셋 OR 팝업에서 부모창 데이터셋 접근 해서 이미 등록된 내용인지 확인필요
        	oArg.arg_rtnCols = "USERID|USERNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"bas::BAS05200P.xfdl" ,oArg ,opts);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * Tree 선택시 조회
         */
        this.ds_basAreaTree_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1  && e.oldrow != e.newrow) {
        		this.fv_areaId 		= this.ds_basAreaTree.getColumn(e.newrow, "AREAID");
        		this.fv_areaType 	= this.ds_basAreaTree.getColumn(e.newrow, "AREATYPE");
        		this.fn_searchGridList();
        	}
        };

        this.div_work_div_00_edt_03_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_filterTree(obj.value);
        	}
        };

        this.div_work_div_00_btn_search03_onclick = function(obj,e)
        {
        	this.fn_filterTree(this.div_work.form.div_00.form.edt_treeSearch.value);
        };

        this.div_work_btn_xlUp_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_basAreaworker))
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false) return;
        	}
        	this.gfn_import_excel("ds_basAreaworkerExcel", "fn_excel_success", "fn_excel_fail", "A1", "A2");
        };

        /*
         *	엑셀 업로드 실패 시
         */
        this.fn_excel_fail = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        };

        /*
         *	엑셀 업로드 이후...
         */
        this.fn_excel_success = function ()
        {
        	var nRow = 0, objName, objCode;

        	var dsObj 		= this.ds_basAreaworker;
        	var dsObjExcel 	= this.ds_basAreaworkerExcel;

        	if(dsObjExcel.rowcount > 0 ) {
        		for(var i = 0; i < dsObjExcel.rowcount; i++) {
        			this.fn_add();
        			var addRow = dsObj.rowposition;		// 신규 ROW 생성

        			// USERID
        			objName = dsObjExcel.getColumn(i, "USERID");
        			dsObj.setColumn(addRow, "USERID", objName);
        			// 작업자명
        			objName = dsObjExcel.getColumn(i, "WORKERNAME");
        			dsObj.setColumn(addRow, "WORKERNAME", objName);
        			// 자사구분
        			objName = dsObjExcel.getColumn(i, "OWNTYPENAME");
        			nRow = this.ds_COwnType.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_COwnType.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "OWNTYPE", objCode);
        			// 작업자 구분
        			objName = dsObjExcel.getColumn(i, "WORKERTYPENAME");
        			nRow = this.ds_CWORKERTYPE.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CWORKERTYPE.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "WORKERTYPE", objCode);
        			// 주작업자 구분
        			objName = dsObjExcel.getColumn(i, "ISMAINAREANAME");
        			nRow = this.ds_CYesNo.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CYesNo.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "ISMAINAREA", objCode);

        			// site Id
        			objName = dsObjExcel.getColumn(i, "SITENAME");
        			nRow = this.ds_plant.findRow("NAME", objName);
        			objCode = nRow == -1 ? "" : this.ds_plant.getColumn(nRow, "CODE");
        			dsObj.setColumn(addRow, "PLANTID", objCode);

        			// 작업장명
        			objName = dsObjExcel.getColumn(i, "AREANAME");
        			nRow = this.ds_area.findRow("AREANAME", objName);
        			objCode = nRow == -1 ? "" : this.ds_area.getColumn(nRow, "AREAID");
        			dsObj.setColumn(addRow, "AREAID", objCode);

        			// 작업자 번호
        			objName = dsObjExcel.getColumn(i, "WORKERNO");
        			dsObj.setColumn(addRow, "WORKERNO", objName);

        			// 유효상태
        			objName = dsObjExcel.getColumn(i, "VALIDSTATENAME");
        			nRow = this.ds_CValidState.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CValidState.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "VALIDSTATE", objCode);
        		}
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}

        }

        /*
         * 사용자 팝업 호출 (값을 바로 받아 와야 되어서 up에 설정)
         */
        this.div_work_grd_basAreaworker_onexpandup = function(obj,e)
        {
        	var nUserIdx 	= this.div_work.form.grd_basAreaworker.getBindCellIndex("body","USERID");
        	var nXbtnIdx 	= this.div_work.form.grd_basAreaworker.getBindCellIndex("body","USERID_X_BTN");

        	this.fv_mainPos		= e.row;

        	var nRowType = this.ds_basAreaworker.getRowType(this.fv_mainPos);
        	if(nRowType  != Dataset.ROWTYPE_INSERT )
        	{
        		return;
        	}
        	switch(e.cell) {
        		case nUserIdx:	// 팝업 호출
        			// 팝업 호출
        			this.fn_getUserId();
        			break;
        		case nXbtnIdx: 	// x 버튼
        			// 삭제 및 row가 삭제된다.
        			this.ds_basAreaworker.set_enableevent(false);
        			this.ds_basAreaworker.deleteRow(e.row);
        			this.ds_basAreaworker.set_enableevent(true);
        			break;
        		default:
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.grd_basAreaworker.addEventHandler("onexpandup",this.div_work_grd_basAreaworker_onexpandup,this);
            this.div_work.form.div_00.form.edt_treeSearch.addEventHandler("onkeydown",this.div_work_div_00_edt_03_onkeydown,this);
            this.div_work.form.div_00.form.btn_searchTree.addEventHandler("onclick",this.div_work_div_00_btn_search03_onclick,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_copyRow.addEventHandler("onclick",this.fn_copy,this);
            this.div_work.form.btn_xlUp.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_basAreaTree.addEventHandler("onrowposchanged",this.ds_basAreaTree_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS05200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
