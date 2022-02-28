(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS05000M");
            this.set_titletext("설비 그룹");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">유효</Col></Row><Row><Col id=\"data\">유효하지 않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">고객ID</Col></Row><Row><Col id=\"data\">MES고객명</Col></Row><Row><Col id=\"data\">Site고객명</Col></Row><Row><Col id=\"data\">설명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpClassMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTEQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"HIERARCHY\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpClassTree", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NODETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTNODETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREALEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PARENTEQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONITEM\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpClassMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTEQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HIERARCHY\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_validState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_eqpGrpType","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("설비그룹 유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BB1F9349E1F74C71A8E8106F03AA7D4B");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchCon","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EB91C2E0318747209415434463C48B34");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_eqpGrpType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,EquipmentType,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_searchCon","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_searchCon");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_conValue","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"105","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
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

            obj = new Static("sta_mainTitle","240","0","117","34","601",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("설비 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENTCLASSINFOLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_eqpClassMain","240","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_eqpClassMain");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"회사 ID\" tooltiptext=\"ENTERPRISEID\"/><Cell col=\"3\" text=\"설비그룹 ID\" cssclass=\"cell_point\" tooltiptext=\"EQUIPMENTCLASSID_2\"/><Cell col=\"4\" text=\"설비그룹 명(K)\" tooltiptext=\"EQUIPMENTCLASSNAME_K\"/><Cell col=\"5\" text=\"설비그룹 명(E)\" tooltiptext=\"EQUIPMENTCLASSNAME_E\"/><Cell col=\"6\" text=\"설비그룹 명(C)\" tooltiptext=\"EQUIPMENTCLASSNAME_C\"/><Cell col=\"7\" text=\"설비그룹 명(V)\" tooltiptext=\"EQUIPMENTCLASSNAME_V\"/><Cell col=\"8\" text=\"상위 설비 그룹ID\" tooltiptext=\"PARENTEQUIPMENTCLASSID\"/><Cell col=\"9\" text=\"설비그룹 타입\" cssclass=\"cell_point\" tooltiptext=\"EQUIPMENTCLASSTYPE\"/><Cell col=\"10\" text=\"HIERARCHY\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"12\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"13\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"14\" text=\"생성일\" tooltiptext=\"CREATEDATE\"/><Cell col=\"15\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"16\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"2\" text=\"bind:ENTERPRISEID\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"3\" text=\"bind:EQUIPMENTCLASSID\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;text&quot;:&quot;normal&quot;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"4\" text=\"bind:EQUIPMENTCLASSNAME_KO_KR\" textAlign=\"left\" padding=\"0px 5px\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"5\" text=\"bind:EQUIPMENTCLASSNAME_EN_US\" textAlign=\"left\" padding=\"0px 5px\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"6\" text=\"bind:EQUIPMENTCLASSNAME_ZH_CN\" textAlign=\"left\" padding=\"0px 5px\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"7\" text=\"bind:EQUIPMENTCLASSNAME_VI_VN\" padding=\"0px 5px\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"8\" text=\"bind:PARENTEQUIPMENTCLASSID\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"9\" text=\"bind:EQUIPMENTCLASSTYPE\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,EquipmentType,,Y,N\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"10\" text=\"bind:HIERARCHY\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,EquipmentClassHierarchy,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"11\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"12\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"13\" text=\"bind:CREATOR\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"14\" text=\"bind:CREATEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"15\" text=\"bind:MODIFIER\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/><Cell col=\"16\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:(dataset.getRowType(currow)==&quot;8&quot;?&quot;cell_bg_green&quot;:&quot;&quot;))\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_treeTitle","0","0","103","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("설비 그룹 트리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENTCLASSTREE");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdReload","204","6","26","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdReload");
            obj.set_tooltiptext("새로고침");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_00","0","34","230","42",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_treeSearch","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("0");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_treeSearch",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","75","230",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_eqpClassTree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:AREALEVEL\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","111",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","85",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_eqpClassMain",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
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

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","80","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("설비 그룹");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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
        this.addIncludeScript("BAS05000M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS05000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 설비그룹
         * 파일명 		: BAS05000M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.28
         *
         * 설  명		: 기준관리 - 설비기준정보 - 설비그룹
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.28	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        //this.fv_areaId;
        //this.fv_areaType;


        this.fv_preArea		= "";				// Tree 조회시 이전 값
        this.fv_mainPos		= "";				// 메인 그리드 팝업 클릭시 row 위치


        this.fv_eqpId;					// id
        this.fv_nodeType;				// 그룹 타입	this.ds_eqpClassTree.getColumn(e.newrow, "GROUPTYPE");
        this.fv_preEqpId 	= "";		// 조회시 이전에 선택한 tree값
        this.fv_ReloadYn 	= false;	// 새로고침 여부


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();
        	// 작업장 트리 조회
        	this.fn_searchTreeList();

        	// 설비그룹 Tree x 버튼 이벤트 설정 (21.07.19)
        	this.div_work.form.div_00.form.btn_edt_treeSearch.addEventHandler( "onclick", this.fn_clickTreeSearch, this );


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

        	var nTreePos 	= this.ds_eqpClassTree.rowposition;
        	var nObjDs 		= this.ds_eqpClassTree;

        	var nNodetype	= nObjDs.getColumn(nTreePos, "NODETYPE");

        	var nParentEquipmentId	= "";

        	var nEqpClassType		= "";
        	var nHierarchy			= "";

        	// 설비트리의 포커스 노드가 소그룹 일 때 하위 생성 불가 이벤트
        	if (nNodetype == "ENTERPRISE" || nNodetype == "SC")
        	{
        		this.gfn_Message("SelectRightNodeType", null, "warning", "ok"); // 알맞는 트리 노드를 선택해야 합니다.
        		return;
        	}

        	if (nNodetype != "ENTERPRISE" && nNodetype != "GROUPTYPE")		// 0 ~ 1 level이 아니다.
        	{
        		nParentEquipmentId =  nObjDs.getColumn(nTreePos, "ID");
        	}

        	if (nNodetype == "GROUPTYPE")
        	{//설비 대그룹을 입력할 때
        		nEqpClassType 	=  nObjDs.getColumn(nTreePos, "ID");
        		nHierarchy 		= "TopEquipment";
        	}
        	else if (nNodetype == "LC")			// 2 Level
        	{//설비 중그룹을 입력할 때
        		nEqpClassType 	=  nObjDs.getColumn(nTreePos, "EQUIPMENTCLASSTYPE");
        		nHierarchy 		= "MiddleEquipment";
        	}
        	else if (nNodetype == "MC")			// 3 Level
        	{//설비 중그룹을 입력할 때
        		nEqpClassType 	=  nObjDs.getColumn(nTreePos, "EQUIPMENTCLASSTYPE");
        	}
        	var dsObj = this.ds_eqpClassMain;
        	var row = dsObj.addRow();
        	dsObj.setColumn(row,"ENTERPRISEID"					, this.gf_getEnterpriseId());
        	dsObj.setColumn(row,"PARENTEQUIPMENTCLASSID"		, nParentEquipmentId);
        	dsObj.setColumn(row,"EQUIPMENTCLASSTYPE"			, nEqpClassType);
        	dsObj.setColumn(row,"HIERARCHY"						, nHierarchy);
        	dsObj.setColumn(row,"VALIDSTATE"					, "Valid");			//유효여부

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_eqpClassMain) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}
        	trace("(저장1)____________________");
        	// 필수값 체크
        	var component = this.div_work.form.grd_eqpClassMain;
        	var strColIdList = "ENTERPRISEID,EQUIPMENTCLASSID,EQUIPMENTCLASSTYPE,HIERARCHY,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	trace("(저장2)____________________");
        	// 그리드내 중복 체크
        	if (!this.fn_checkValidationDup(this.ds_eqpClassMain) )
        	{
        		//this.gfn_Message("SAMEUSEREXIST",  null, "warning", "ok");	// 동일한 작업자가 이미 존재합니다.
        		return;
        	}
        	trace("(저장3)____________________");
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveEqpGrp";
        	var sController 	= "/bas05000/saveEqpGrp.do";
        	var sInDatasets 	= "INPUT=ds_eqpClassMain:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj 		= this.ds_eqpClassMain;
        	var isChkCnt 	= dsObj.getColIndex("CHK");
        	var chkCnt 		= isChkCnt==-1 ? -1 : dsObj.getCaseCount("CHK=='1'");
        	var rowCount 	= dsObj.rowcount;

        	//멀티행 삭제건
        	if (chkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false) return;

        	for(var j=rowCount+1; j>=0; j--){
        		if(dsObj.getColumn(j,"CHK")=="1"){
        				dsObj.deleteRow(j);
        		}
        	}
        };

        /*
         * 기능 : 행복사
         */
        this.fn_copy = function(obj,e)
        {
        	this.fn_copyDataset(this.ds_eqpClassMain, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveEqpGrp") 		// 저장시 오류 발생
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else if(msgArray.length==3) {
        				this.gfn_Message(msgArray[0], [msgArray[1], msgArray[2]] , "error", "ok");
        				return;
        			}

        			else {
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
        		if (trId == "selectConditionitem")
        		{
        			this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        			this.ds_searchCon.insertRow(0);
        			this.ds_searchCon.setColumn(0,"CODE","*");
        			this.ds_searchCon.setColumn(0,"NAME",this.nfn_getDictionaryname("ALL",true));
        			this.tab_search.Tabpage1.form.cmb_eqpGrpType.set_index(0);
        			this.tab_search.Tabpage1.form.cmb_searchCon.set_index(0);
        		}
        		else if (trId == "selectEqpClassTreeList")
        		{
        			// Tree에서 선택한 값 있는 경우 조회시 자동 선택
        			if(!this.gfn_isNull(this.fv_preEqpId))
        			{
        				var nFrow = this.ds_eqpClassTree.findRow("ID",this.fv_preEqpId);
        				if(nFrow != -1)
        				{
        					//this.ds_eqpClassTree.set_enableevent(false);
        					this.ds_eqpClassTree.set_enableevent(true);
        					this.ds_eqpClassTree.set_rowposition(nFrow);
        					//this.ds_eqpClassTree.set_enableevent(true);

        					/*
        					this.fv_eqpId = this.ds_eqpClassTree.getColumn(nFrow, "ID");
        					this.fv_nodeType = this.ds_eqpClassTree.getColumn(nFrow, "NODETYPE");
        					this.fn_searchGridList();
        					*/

        				}
        			}
        			if(this.fv_ReloadYn)		// 새로고침 여부 (as-is 는 node 값이 있다.)
        			{
        				this.fv_ReloadYn = false;
        				this.ds_eqpClassTree.set_enableevent(true);
        				this.ds_eqpClassTree.set_rowposition(0);
        				// 직접 실행
        				this.fv_eqpId = this.ds_eqpClassTree.getColumn(0, "ID");
        				this.fv_nodeType = this.ds_eqpClassTree.getColumn(0, "NODETYPE");
        				this.fn_searchGridList();
        			}
        			this.ds_eqpClassTree.set_enableevent(true);

        		}
        		else if (trId == "selectEqpClassList")
        		{
        			var nMainCnt 	= this.ds_eqpClassMain.rowcount;
        			var nTreeCnt	= this.ds_eqpClassTree.rowcount
        			// 해당 조건에 걸리는 경우가 없을것 같은데...
        			if (nMainCnt < 1 && nTreeCnt == 0) // 검색 조건에 해당하는 코드를 포함한 코드클래스가 없는 경우
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok"); // 알맞는 트리 노드를 선택해야 합니다.
        			}
        		}
        		else if (trId == "saveEqpGrp")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			this.fn_searchGridList();
        		}


        	}
        };
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        	this.tab_search.Tabpage1.form.cmb_eqpGrpType.set_index(0);
        	this.tab_search.Tabpage1.form.cmb_searchCon.set_index(0);
        };


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

        	this.ds_searchCon.clearData();
        	this.ds_searchInitCombo.clearData();

        	// 조회 조건 설정
        	this.ds_searchInitCombo.addRow();
        	this.ds_searchInitCombo.setColumn(0, "DICTIONARYID"		, "EQUIPMENTCLASSNAME,EQUIPMENTCLASSID,DESCRIPTION"); 	//

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectConditionitem";
        	var sController 	= "/bas05000/selectConditionitem.do";
        	var sInDatasets 	= "INPUT=ds_searchInitCombo";
        	var sOutDatasets 	= "ds_searchCon=output1";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 트리 조회
         */
        this.fn_searchTreeList = function ()
        {
        	this.ds_eqpClassTree.set_enableevent(false);
        	// 조회시 이전 트리 선택 값 저장
        	if (this.ds_eqpClassTree.rowcount != 0)
        	{
        		this.fv_preEqpId = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition, "ID");
        	}


        	this.ds_eqpClassTree.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());

        	var sSvcID 			= "selectEqpClassTreeList";
        	var sController 	= "/bas05000/selectEqpClassTreeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_eqpClassTree=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 설비 그룹 리스트 조회
         */
        this.fn_searchGridList = function()
        {
        	this.ds_eqpClassMain.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());


        	if(this.fv_nodeType == "GROUPTYPE")		// 1 level (계측기, 설비)
        	{
        		this.ds_search.setColumn(0, "P_PARENTEQUIPMENTCLASSID"	, "");
        		this.ds_search.setColumn(0, "P_GROUPTYPE"				,this.fv_eqpId);
        		// this.grdEquipmentClass.DataSource = SqlExecuter.Query("SelectEquipmentClassManagement", "10001", param);
        	}
        	else if(this.fv_nodeType == "LC" || this.fv_nodeType == "MC")		// 2~3 level (계측기, 설비 밑에들)
        	{
        		this.ds_search.setColumn(0, "P_PARENTEQUIPMENTCLASSID"	, this.fv_eqpId);
        		this.ds_search.setColumn(0, "P_GROUPTYPE"				, "");
        		// this.grdEquipmentClass.DataSource = SqlExecuter.Query("SelectEquipmentClassManagement", "10001", param);
        	}
        	else if(this.fv_nodeType == "SC" || this.fv_nodeType == "ENTERPRISE")
        	{
        		//trace(" 조회 없음?? ");
        	}

        	this.ds_search.setColumn(0, "P_EQUIPMENTCLASSTYPE"	, this.tab_search.Tabpage1.form.cmb_eqpGrpType.value);	//설비그룹유형
        	this.ds_search.setColumn(0, "P_CONDITIONITEM"	, this.tab_search.Tabpage1.form.cmb_searchCon.value);		//조회조건
        	this.ds_search.setColumn(0, "P_CONDITIONVALUE"	, this.tab_search.Tabpage1.form.edt_conValue.value);		//조회값
        	this.ds_search.setColumn(0, "P_VALIDSTATE"	, this.tab_search.Tabpage1.form.cbo_validState.value);			//유효상태


        	var sSvcID 			= "selectEqpClassList";
        	var sController 	= "/bas05000/selectEqpClassList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_eqpClassMain=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 유효성 체크 (중복체크)
         */
        this.fn_checkValidationDup = function (objDs)
        {
        	var ret = true

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var eqpClassId	= objDs.getColumn(i, "EQUIPMENTCLASSID");

        		var filterStr = "EQUIPMENTCLASSID.toUpperCase() =='"+eqpClassId.toUpperCase()+"'";
        		// NAME.toUpperCase()
        		if(objDs.getCaseCount(filterStr) > 1) {

        			this.gfn_Message("InValidData007",  eqpClassId, "warning", "ok");	// 저장할 데이터가 이미 존재합니다.({0})
        			ret =  false;
        			return ret;
        		}
        	}
        	return ret;
        };


        /*******************************************************************************
         * fn_copyDataset
         * 기능 : Dataset 복사 함수
         * 최성민 -> copy 하단에 복사한 결과값 생기도록 수정
         * Parameter  :
         *				dsObjFr : 소스Dataset
         *				dsObjTo : 타겟Dataset
         *				args	: 복사후 초기화할 컬럼 배열 (A,B,C)  -> 수정해서 사용
        *******************************************************************************/
        this.fn_copyDataset = function (dsObjFr, dsObjTo, args)
        {

        	if(dsObjFr == null) return;
        	if(dsObjTo == null) dsObjTo = dsObjFr;
        	var row = -1;
        	var isChkCnt = dsObjFr.getColIndex("CHK");
        	var chkCnt = isChkCnt==-1 ? -1 : dsObjFr.getCaseCount("CHK=='1'");
        	var rowCount = dsObjFr.rowcount;
        	var exceptCol = new Array();

        	if(!this.nfn_isNull(args)){
        		exceptCol = args.split(",");
        	}

        	dsObjFr.set_enableevent(false);
        	dsObjTo.set_enableevent(false);

        	//단일행
        	if(chkCnt==-1){
        		var dsPosition = dsObjFr.rowposition;
        		if(dsPosition < 0) {
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			dsObjFr.set_enableevent(true);
        			dsObjTo.set_enableevent(true);
        			return;
        		} else {
        			row = dsObjTo.insertRow(dsPosition);
        			dsObjTo.copyRow(row, dsObjFr, dsPosition);
        			dsObjTo.setColumn(row,"CHK","0");
        			for(var j=0; j<exceptCol.length; j++){
        				dsObjTo.setColumn(row,exceptCol[j],"");
        			}
        		}
        	} else {
        		if (chkCnt==0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			dsObjFr.set_enableevent(true);
        			dsObjTo.set_enableevent(true);
        			return;
        		}
        		for(var i=0; i<rowCount; i++){
        			if(dsObjFr.getColumn(i,"CHK")=="1"){
        				var nLastRow = dsObjTo.rowcount;
        				row = dsObjTo.insertRow(nLastRow+1);
        				//row = dsObjTo.insertRow(i+1);
        				//i+2;
        				dsObjTo.copyRow(row, dsObjFr, i);
        				/* KEY,WHO컬럼 관련 복사제외 */
        				dsObjTo.setColumn(row,"CHK","0");
        				for(var j=0; j<exceptCol.length; j++){
        					dsObjTo.setColumn(row,exceptCol[j],"");
        				}
        			}
        		}
        	}
        	dsObjFr.set_enableevent(true);
        	dsObjTo.set_enableevent(true);
        	return row;
        };


        /*
         * 트리 필터
         */
        this.fn_filterTree = function (searchText)
        {
        	this.fv_preEqpId	 = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition, "ID");

        	if(this.nfn_isNull(searchText)) {
        		this.ds_eqpClassTree.filter("");
        	} else {

        		// (21.07.13) 테스트 -> 필터 정상작동 되는듯.
        		this.ds_eqpClassTree.set_enableevent(false);
        		this.ds_eqpClassTree.filter("");
        		var nFilter 	= "";			// 필터 조건
        		var nSubFilter = "NODETYPE == 'ENTERPRISE'";			// 필터 조건(서브)
        		var nCnt = this.ds_eqpClassTree.rowcount;
        		var nMaxLev = this.ds_eqpClassTree.getMax("AREALEVEL");
        		for(var i=0; i<nCnt; i++)
        		{
        			var nName = this.ds_eqpClassTree.getColumn(i, "NAME");

        			if(nName.toUpperCase().indexOf(searchText.toUpperCase()) > -1)
        			{
        				var nLevel = this.ds_eqpClassTree.getColumn(i,"AREALEVEL");
        				var nParent = "";
        				for(var j=0; j< nLevel; j++)
        				{
        					var nPos = j == 0 ? i : (this.ds_eqpClassTree.findRow("ID",nParent));
        					nParent = this.ds_eqpClassTree.getColumn(nPos,"PARENT");
        					var nId = this.ds_eqpClassTree.getColumn(nPos,"ID");

        					if(j == 0)
        					{
        						this.fv_preEqpId = nId;
        					}


        					if((parseInt(nMaxLev) != parseInt(nLevel)) && j == 0)
        					{
        						trace(" 레벨 확인(1) : "+nMaxLev+" || "+nLevel+" || "+nName);
        						if(parseInt(nLevel) == 1)
        						{
        							trace(" 레벨 확인(2) : [EQUIPMENTCLASSTYPE]");
        							nSubFilter += this.gfn_isNull(nSubFilter) ? "EQUIPMENTCLASSTYPE == '"+nId+"'" : " || EQUIPMENTCLASSTYPE == '"+nId+"'";
        						}
        						else if(parseInt(nLevel) == 2)
        						{
        							trace(" 레벨 확인(3) : [PARENT]");
        							nSubFilter += this.gfn_isNull(nSubFilter) ? "PARENT == '"+nId+"'" : " || PARENT == '"+nId+"'";
        						}
        					}
        					nFilter += this.gfn_isNull(nFilter) ? "ID == '"+nId+"'" : " || ID == '"+nId+"'";
        				}
        			}
        		}


        		if(!this.gfn_isNull(nFilter))
        		{
        			nFilter = nFilter+ "|| ("+nSubFilter+")";
        		}
        		trace("필터 설정값 : "+nFilter);

        		//trace(" this.fv_preEqpId : "+this.fv_preEqpId);
        		this.ds_eqpClassTree.filter(nFilter);
        		this.ds_eqpClassTree.set_enableevent(true);


        		/*
        		// 검색시 상단 Tree 나타나게 설정
        		var nLvl = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition, "AREALEVEL");
        		var nNod_0	= "";
        		var nNod_1	= "";
        		var nNod_2	= "";

        		switch(nLvl) {
        			case 3:		// 3
        				var nParent_2 = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition, "PARENT");

        				var nParent_2 = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition, "PARENT");
        				break;
        			case 2: 	// 2

        				break;
        			case 1: 	// 1

        				break;
        			default:
        		}
        		trace(" ===>(nLvl) : "+nLvl);
        		*/
        		//this.ds_eqpClassTree.filter("NAME.toUpperCase().indexOf('"+searchText.toUpperCase()+"') > -1");
        	}
        	// 이전 선택 값 확인
        	var nRowPos = this.ds_eqpClassTree.findRow("ID",this.fv_preEqpId);

        	if(nRowPos != -1)
        	{
        		this.ds_eqpClassTree.set_rowposition(nRowPos);
        	}
        	else
        	{
        		this.ds_eqpClassTree.set_rowposition(0);
        	}
        };


        /*
         * 설비그룹 트리 x 버튼 클릭시 이벤트 설정
         * (21.07.19)
         */
        this.fn_clickTreeSearch = function ()
        {
        	this.ds_eqpClassTree.filter("");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * Tree 값 변경 시 마다 .
         */
        this.ds_eqpClassTree_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1  && e.oldrow != e.newrow) {
        		this.fv_eqpId = this.ds_eqpClassTree.getColumn(e.newrow, "ID");
        		this.fv_nodeType = this.ds_eqpClassTree.getColumn(e.newrow, "NODETYPE");
        		this.fn_searchGridList();
        	}
        };

        /*
         *  HIERARCHY 값 변경시
         */
        this.ds_eqpClassMain_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == 'HIERARCHY')
        	{
        		var nTreeRow 	= this.ds_eqpClassTree.rowposition;
        		var nNodeType	= this.ds_eqpClassTree.getColumn(nTreeRow, "NODETYPE");
        		var nValue		= e.newvalue;

        		if( nNodeType == "MC" && !this.gfn_isNull(nValue) && (nValue == "TopEquipment" || nValue == "MiddleEquipment" ))
        		{
        			this.gfn_Message("CantSelectHierarchy", null, "warning", "ok"); // 상위 설비그룹이 중그룹일 경우 설비그룹과 설비단그룹 중에만 선택할 수 있습니다.
        			// msg 호풀만 여기서
        			return;
        		}
        	}
        };

        /*
         * msg 걸리면 값 초기화
         */
        this.ds_eqpClassMain_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'HIERARCHY')
        	{
        		var nTreeRow 	= this.ds_eqpClassTree.rowposition;
        		var nNodeType	= this.ds_eqpClassTree.getColumn(nTreeRow, "NODETYPE");
        		var nValue		= e.newvalue;

        		if( nNodeType == "MC" && !this.gfn_isNull(nValue) && (nValue == "TopEquipment" || nValue == "MiddleEquipment" ))
        		{
        			this.ds_eqpClassMain.setColumn(e.row, "HIERARCHY", "");
        			return;
        		}
        	}
        };

        /*
         * 콤보 생성시
         */
        this.div_work_grd_eqpClassMain_ondropdown = function(obj,e)
        {
        	var nHIdx 		= this.div_work.form.grd_eqpClassMain.getBindCellIndex("body","HIERARCHY");
        	if(e.cell == nHIdx)
        	{
        		var nTreeRow 	= this.ds_eqpClassTree.rowposition;
        		var nNodeType	= this.ds_eqpClassTree.getColumn(nTreeRow, "NODETYPE");

        		if (nNodeType != "MC")
        		{
        			this.gfn_Message("CantSelectEquipmentClassType", null, "warning", "ok"); // 상위 설비그룹이 중그룹 일 경우에만 선택입력 가능 합니다.
        			// msg 호풀만 여기서
        			return;
        		}
        	}
        };

        /*
         * Tree 새로 고침 버튼
         */
        this.div_work_btn_grdReload_onclick = function(obj,e)
        {
        	this.fv_ReloadYn = true;
        	this.ds_eqpClassTree.clearData();
        	this.ds_eqpClassMain.clearData();
        	this.fv_preEqpId 	= "";				// 조회시 이전에 선택한 tree값
        	this.fn_searchTreeList();
        };

        /*
         * Tree 엔터키
         */
        this.div_work_div_00_edt_treeSearch_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_filterTree(obj.value);
        	}
        };
        /*
         * Tree 조회 버튼
         */
        this.div_work_div_00_btn_treeSearch_onclick = function(obj,e)
        {
        	this.fn_filterTree(this.div_work.form.div_00.form.edt_treeSearch.value);
        };

        /*
         * 엑셀 업로드 이벤트
         */
        this.div_work_btn_xlUp_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_eqpClassMain))
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false) return;
        	}
        	this.gfn_import_excel("ds_eqpClassMainExcel", "fn_excel_success", "fn_excel_fail", "C1", "C2");
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

        	var dsObj 		= this.ds_eqpClassMain;
        	var dsObjExcel 	= this.ds_eqpClassMainExcel;

        	if(dsObjExcel.rowcount > 0 ) {
        		for(var i = 0; i < dsObjExcel.rowcount; i++) {
        			this.fn_add();
        			var addRow = dsObj.rowposition;		// 신규 ROW 생성

        			// ENTERPRISEID
        			objName = dsObjExcel.getColumn(i, "ENTERPRISEID");
        			dsObj.setColumn(addRow, "ENTERPRISEID", objName);

        			// 설비그룹id
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSID");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSID", objName);

        			// 설비그룹 명(K)
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSNAME_KO_KR");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSNAME_KO_KR", objName);
        			// 설비그룹 명(E)
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSNAME_EN_US");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSNAME_EN_US", objName);
        			// 설비그룹 명(C)
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSNAME_ZH_CN");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSNAME_ZH_CN", objName);
        			// 설비그룹 명(V)
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSNAME_VI_VN");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSNAME_VI_VN", objName);

        			// 상위 설비 그룹ID
        			objName = dsObjExcel.getColumn(i, "PARENTEQUIPMENTCLASSID");
        			dsObj.setColumn(addRow, "PARENTEQUIPMENTCLASSID", objName);

        			// 설비그룹 타입
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSTYPE");
        			nRow = this.ds_CEquipmentType.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CEquipmentType.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSTYPE", objCode);

        			// HIERARCHY
        			objName = dsObjExcel.getColumn(i, "HIERARCHY");
        			nRow = this.ds_CEquipmentClassHierarchy.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CEquipmentClassHierarchy.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "HIERARCHY", objCode);

        			// 설명
        			objName = dsObjExcel.getColumn(i, "DESCRIPTION");
        			dsObj.setColumn(addRow, "DESCRIPTION", objName);

        			// C,ValidState,,Y,Y
        			// 유효상태
        			objName = dsObjExcel.getColumn(i, "VALIDSTATE");
        			nRow = this.ds_CValidState.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CValidState.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "VALIDSTATE", objCode);
        		}
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.grd_eqpClassMain.addEventHandler("ondropdown",this.div_work_grd_eqpClassMain_ondropdown,this);
            this.div_work.form.btn_grdReload.addEventHandler("onclick",this.div_work_btn_grdReload_onclick,this);
            this.div_work.form.div_00.form.edt_treeSearch.addEventHandler("onkeydown",this.div_work_div_00_edt_treeSearch_onkeydown,this);
            this.div_work.form.div_00.form.btn_treeSearch.addEventHandler("onclick",this.div_work_div_00_btn_treeSearch_onclick,this);
            this.div_work.form.btn_grdAdd.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_grdDel.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_grdCopy.addEventHandler("onclick",this.fn_copy,this);
            this.div_work.form.btn_grdUp.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_eqpClassMain.addEventHandler("cancolumnchange",this.ds_eqpClassMain_cancolumnchange,this);
            this.ds_eqpClassMain.addEventHandler("oncolumnchanged",this.ds_eqpClassMain_oncolumnchanged,this);
            this.ds_eqpClassTree.addEventHandler("onrowposchanged",this.ds_eqpClassTree_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS05000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
