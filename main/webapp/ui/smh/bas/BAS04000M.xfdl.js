(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04000M");
            this.set_titletext("설비불량코드 연계");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentdefectcodeList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTITEMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"4000\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectItemList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME_US\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME_CN\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME_VN\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validstate","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","74","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","74","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"59","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","69","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"54","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","80","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_equipmenttype","0","34","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("설비타입");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EQUIPMENTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"29","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_equipmenttype","108","34","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,EquipmentDefectType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("VRS 불량코드 연계");
            obj.set_tooltiptext("VRSDEFECTCODEINTERFACE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Button("btn_addRowEquipmentdefectcodeList",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRowEquipmentdefectcodeList","btn_addRowEquipmentdefectcodeList:0","6","29","24",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRowdEquipmentdefectcodeList","btn_addRowEquipmentdefectcodeList:29","6","29","24",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDngrd_ds_equipmentdefectcodeList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_equipmentdefectcodeVrs","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentdefectcodeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"불량 그룹\" tooltiptext=\"DEFECTGROUP\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량 항목\" tooltiptext=\"DEFECTITEM\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"5\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"7\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"8\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"9\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"10\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DEFECTCODECLASSID\" combocodecol=\"C,DefectMapDefectGroup,,Y,Y\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:DEFECTITEMCODE\" combocodecol=\"C,DefectMapDefectGroupSub,NAN,Y,Y\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:EQUIPMENTID\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"100\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" cssclass=\"dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:DEFECTCODE\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editmaxlength=\"100\" textAlign=\"center\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\" editinputtype=\"number\"/><Cell col=\"6\" text=\"bind:DESCRIPTION\" edittype=\"normal\" editmaxlength=\"4000\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"8\" text=\"bind:CREATOR\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" edittype=\"none\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:MODIFIER\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_equipmentdefectcodeList","182","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("VRS 불량코드 연계");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("VRSDEFECTCODELIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("불량항목등록");
            obj.set_tooltiptext("DEFECTITEMINSERT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectItemList","182","0","200","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","165","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("불량항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTITEMLIST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRowDefectItemList",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRowDefectItemList","btn_addRowDefectItemList:0","6","29","24",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_copyRowDefectItemList","btn_delRowDefectItemList:0","6","29","24",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDngrd_ds_defectItemList","btn_copyRowDefectItemList:0","6","29","24",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_defectItem","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectItemList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"57\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"불량 그룹\" cssclass=\"cell_point\" tooltiptext=\"DEFECTGROUP\"/><Cell col=\"2\" tooltiptext=\"DEFECTITEMCODE\" text=\"불량항목코드\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"DEFECTITEMNAMEKR\" text=\"불량유형명(K)\"/><Cell col=\"4\" tooltiptext=\"DEFECTITEMNAMEUS\" text=\"불량유형명(E)\"/><Cell col=\"5\" tooltiptext=\"DICTIONARYNAMECN\" text=\"불량유형명(C)\"/><Cell col=\"6\" tooltiptext=\"DICTIONARYNAMEVN\" text=\"불량유형명(V)\"/><Cell col=\"7\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"8\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"9\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"10\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:PARENTCODEID\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" text=\"bind:LOOKUP_CODE\" editinputtype=\"number,alpha\" maskeditmaskchar=\"_\"/><Cell col=\"3\" text=\"bind:DICTIONARYNAME_KR\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"4\" text=\"bind:DICTIONARYNAME_US\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"5\" text=\"bind:DICTIONARYNAME_CN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"6\" text=\"bind:DICTIONARYNAME_VN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"8\" text=\"bind:CREATOR\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:MODIFIER\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_defectItemVrs","0","35",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectItemList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"57\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"cell_point\" tooltiptext=\"DEFECTGROUP\" text=\"불량 그룹\"/><Cell col=\"2\" tooltiptext=\"DEFECTITEMCODE\" text=\"불량항목코드\" cssclass=\"cell_point\"/><Cell col=\"3\" tooltiptext=\"DEFECTITEMNAMEKR\" text=\"불량유형명(K)\"/><Cell col=\"4\" tooltiptext=\"DEFECTITEMNAMEUS\" text=\"불량유형명(E)\"/><Cell col=\"5\" tooltiptext=\"DICTIONARYNAMECN\" text=\"불량유형명(C)\"/><Cell col=\"6\" tooltiptext=\"DICTIONARYNAMEVN\" text=\"불량유형명(V)\"/><Cell col=\"7\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"8\" tooltiptext=\"CREATOR\" text=\"생성자\"/><Cell col=\"9\" tooltiptext=\"CREATEDTIME\" text=\"생성일\"/><Cell col=\"10\" tooltiptext=\"MODIFIER\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combocodecol=\"C,DefectMapDefectGroup,,Y,Y\" text=\"bind:PARENTCODEID\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" text=\"bind:LOOKUP_CODE\" editinputtype=\"number,alpha\" maskeditmaskchar=\"_\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:DICTIONARYNAME_KR\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"4\" text=\"bind:DICTIONARYNAME_US\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"5\" text=\"bind:DICTIONARYNAME_CN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"6\" text=\"bind:DICTIONARYNAME_VN\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\" editmaxlength=\"500\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"point\"/><Cell col=\"8\" text=\"bind:CREATOR\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:MODIFIER\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0431");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
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
        this.addIncludeScript("BAS04000M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 설비불량코드 연계(기준관리 - 품질기준정보)
         * 파일명         : BAS04000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.09
         *
         * 설  명         : VRS 설비불량코드 등록/수정
         *                   설비타입별 불량항목 등록/수정
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.09   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.enterpriseid = "";
        this.g_equipmenttype = ""; //조회조건 설비타입 global value
        this.g_lookupType;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.enterpriseid = this.gf_getEnterpriseId();
            this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_saveEquipmentdefectcode(); //탭1 VRS 불량코드 연계
                break;
                case 1:
                    this.fn_saveDefectItem();          //탭2 불량항목등록
                break;
            }
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    if (this.g_equipmenttype == "VRS")
                    {
                        this.fn_searchEquipmentdefectcode();  //탭1 VRS 불량코드 연계
                    }
                break;
                case 1:
                    this.fn_searchDefectItem();               //탭2 불량항목등록
                break;
            }
        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
            if (errCD < 0)
            {
                this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
            }
            else
            {
                if (trId == "saveEquipmentdefectcode")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchEquipmentdefectcode();
                }
                else if (trId == "saveDefectItem")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_searchDefectItem();
                }
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
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

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "GRD_EQUIPMENT")    /*그리드-설비ID*/
            {
                oArg.arg_paramCols = "VALIDSTATE";
                oArg.arg_paramValues = "Valid";
                oArg.arg_rtnCols = "EQUIPMENTID|AREANAME";
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "GRD_EQUIPMENT")    /*그리드-설비ID*/
            {
                var nRow = this.ds_equipmentdefectcodeList.rowposition;
                this.ds_equipmentdefectcodeList.setColumn(nRow, "EQUIPMENTID", rtn[0]);
                this.ds_equipmentdefectcodeList.setColumn(nRow, "AREANAME", rtn[1]);
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
            this.tab_search.Tabpage1.form.cbo_validstate.set_value("Valid");
        	this.fn_iniVrs();
        };

        this.fn_iniVrs = function ()
        {
            this.tab_search.Tabpage1.form.cbo_equipmenttype.set_value("VRS");
            this.g_equipmenttype = "VRS";
            this.g_lookupType  = "DefectMapDefectGroupSub";
            this.ds_CEquipmentDefectType.filter("");
            this.ds_CEquipmentDefectType.filter("LOOKUP_CODE =='" + this.g_equipmenttype + "'");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 탭1. VRS 불량코드 리스트 조회
         */
        this.fn_searchEquipmentdefectcode = function(obj, e)
        {
            this.ds_equipmentdefectcodeList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validstate.value;
            var defectcodeclassid = this.tab_search.Tabpage1.form.cbo_equipmenttype.value;

            var sSvcID        = "selectEquipmentdefectcodeList";
            var sController   = "/bas04000/selectEquipmentdefectcodeList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_equipmentdefectcodeList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("DEFECTCODECLASSID", defectcodeclassid);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. VRS 불량코드 리스트 저장
         */
        this.fn_saveEquipmentdefectcode = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_equipmentdefectcodeList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //그리드 필수값 체크
            var component = this.div_work.form.tab.Tabpage1.form.grd_equipmentdefectcodeVrs;
            var strColIdList = "DEFECTCODECLASSID,DEFECTITEMCODE,EQUIPMENTID,DEFECTCODE,VALIDSTATE";
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveEquipmentdefectcode";
            var sController   = "/bas04000/saveEquipmentdefectcode.do";
            var sInDatasets   = "INPUT=ds_equipmentdefectcodeList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭1. VRS 불량코드 리스트 추가
         */
        this.fn_addEquipmentdefectcode = function(obj,e)
        {
            var objDataset = this.ds_equipmentdefectcodeList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            objDataset.setColumn(row,"VALIDSTATE","Valid");    //유효여부
        };

        /*
         * 기능 : 탭1. VRS 불량코드 리스트 삭제
         */
        this.fn_deleteEquipmentdefectcodeList = function(obj,e)
        {
            if(this.ds_equipmentdefectcodeList.getCaseCount("CHK == 1") <=0)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

            for(var i = this.ds_equipmentdefectcodeList.getRowCount(); i>= 0; i--)
            {
                if (this.ds_equipmentdefectcodeList.getColumn(i,"CHK") == 1)
                {
                     if (this.ds_equipmentdefectcodeList.getRowType(i) == "2")
                     {
                         this.ds_equipmentdefectcodeList.deleteRow(i);
                     }

                }
            }// end for
        };

        /*
         * 기능 : 탭1. VRS 불량코드 리스트 복사
         */
        this.fn_copyEquipmentdefectcode = function(obj,e)
        {
            this.basfn_copyDataset(this.ds_equipmentdefectcodeList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /*
         * 기능 : 탭2. 불량항목 리스트 조회
         */
        this.fn_searchDefectItem = function (obj, e)
        {
            this.ds_defectItemList.clearData();

            var validState = this.tab_search.Tabpage1.form.cbo_validstate.value;
            var defectcodeclassid = this.tab_search.Tabpage1.form.cbo_equipmenttype.value;

            var sSvcID        = "selectDefectItemList";
            var sController   = "/bas04000/selectDefectItemList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectItemList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("VALIDSTATE", validState);
                sArgs        += this.gfn_setParam("LOOKUP_TYPE", this.g_lookupType );
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 불량항목 리스트 저장
         */
        this.fn_saveDefectItem = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_defectItemList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //그리드 필수값 체크

            if (this.g_equipmenttype == "VRS")
            {
                var component = this.div_work.form.tab.Tabpage2.form.grd_defectItemVrs;
                var strColIdList = "PARENTCODEID,LOOKUP_CODE,DICTIONARYNAME_KR,DICTIONARYNAME_US,DICTIONARYNAME_CN,DICTIONARYNAME_VN,VALIDSTATE";
            }
            else
            {
                var component = this.div_work.form.tab.Tabpage2.form.grd_defectItem;
                var strColIdList = "LOOKUP_CODE,DICTIONARYNAME_KR,DICTIONARYNAME_US,DICTIONARYNAME_CN,DICTIONARYNAME_VN,VALIDSTATE";
            }
            var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
            if (rtn == false) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveDefectItem";
            var sController   = "/bas04000/saveDefectItem.do";
            var sInDatasets   = "INPUT=ds_defectItemList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 불량항목 리스트 추가
         */
        this.fn_addDefectItemList = function(obj,e)
        {
            var objDataset = this.ds_defectItemList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            if (this.g_equipmenttype == 'BBT' || this.g_equipmenttype == 'HOLE')
            {
                objDataset.setColumn(row, "PARENTCODEID", this.g_equipmenttype);
            }

            objDataset.setColumn(row, "LOOKUP_TYPE", this.g_lookupType);
            objDataset.setColumn(row,"VALIDSTATE","Valid");    //유효여부
        };

        /*
         * 기능 : 탭2. 불량항목 리스트 삭제
         */
        this.fn_deleteDefectItemList = function(obj,e)
        {
            if(this.ds_defectItemList.getCaseCount("CHK == 1") <=0)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

            for(var i = this.ds_defectItemList.getRowCount(); i>= 0; i--)
            {
                if (this.ds_defectItemList.getColumn(i,"CHK") == 1)
                {
                     if (this.ds_defectItemList.getRowType(i) == "2")
                     {
                         this.ds_defectItemList.deleteRow(i);
                     }
                }
            }// end for
        };

        /*
         * 기능 : 탭2. 불량항목 리스트 복사
         */
        this.fn_copyDefectItemList = function(obj,e)
        {
            this.basfn_copyDataset(this.ds_defectItemList, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");
        };

        /*
         * 기능 : 탭2. 불량항목 리스트 엑셀다운로드
         */
        this.fn_excelDown = function(obj,e)
        {
            var sGrdName = "";

            if (this.g_equipmenttype == "VRS")
            {
                sGrdName = "grd_defectItemVrs";
            }
            else
            {
                sGrdName = "grd_defectItem";
            }

            var sFileName = sGrdName;
            this.gfn_export_excel2(sGrdName, "Sheet1", sFileName, "EXCEL");
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 탭 클릭시
         */
        this.div_work_tab_onchanged = function(obj,e)
        {
            this.ds_CEquipmentDefectType.filter("");

            if(e.postindex==0)
            {
                this.ds_CEquipmentDefectType.filter("LOOKUP_CODE =='" + this.g_equipmenttype + "'");
        		this.fn_iniVrs();
            }
        	else
        	{
        		this.ds_CEquipmentDefectType.filter("");
        	}
        };

        /*
         * 이벤트 : 조회조건 설비타입 변경시 그리드 변경
         */
        this.tab_search_Tabpage1_cbo_equipmenttype_onitemchanged = function(obj,e)
        {
            this.ds_defectItemList.clearData();
            var strCnt = 'Count : <fc v="#f31d24">'+0+'</fc><fc v="#999999"></fc>'
            this.div_work.form.tab.Tabpage2.form.sta_cnt_ds_defectItemList.set_text(strCnt);

            this.div_work.form.tab.Tabpage2.form.grd_defectItem.set_visible(false);
            this.div_work.form.tab.Tabpage2.form.grd_defectItemVrs.set_visible(false);

            if (e.postvalue == "VRS")
            {
                this.g_lookupType  = "DefectMapDefectGroupSub";
                this.div_work.form.tab.Tabpage2.form.grd_defectItemVrs.set_visible(true);
            }
            else if (e.postvalue == "BBT")
            {
                this.g_lookupType  = "DefectMapBBTDefectCode";
                this.div_work.form.tab.Tabpage2.form.grd_defectItem.set_visible(true);
            }
            else if (e.postvalue == "HOLE")
            {
                this.g_lookupType = "DefectMapHoleDefectCode";
                this.div_work.form.tab.Tabpage2.form.grd_defectItem.set_visible(true);
            }

            this.g_equipmenttype = e.postvalue; //선택 탭
        };

        /*
         * 이벤트 : 불량그룹이 변경될 경우 하위 불량항목 가져오기
         */
        this.ds_equipmentdefectcodeList_onvaluechanged = function(obj,e)
        {
            if (e.columnid == "DEFECTCODECLASSID")
            {
                if (e.oldvalue == e.newvalue) return;

                //불량항목 초기화 - 불량그룹만 변경하고 저장버튼을 클릭할 경우 반영되어
                obj.setColumn(e.row, obj.getColIndex("DEFECTITEMCODE"), "");

                this.ds_equipmentdefectcodeList.filter("");
                this.ds_CDefectMapDefectGroupSubNAN.filter("PARENTCODEID =='"+e.newvalue+"'||PARENTCODEID == ''");
            }
        };

        /*
         * 이벤트 : 불량 그룹를 선택했을 때 변경내역을 Dataset에 바로 반영
         */
        this.div_work_grd_equipmentdefectcodeVrs_oncloseup = function(obj,e)
        {
            obj.updateToDataset();
        };

        /*
         * 이벤트 : 불량항목 클릭시 불량그룹 값이 없을 경우 리스트 안보여줌
         */
        this.div_work_grd_equipmentdefectcodeVrs_ondropdown = function(obj,e)
        {
            if (e.cell = obj.getBindCellIndex("body", "DEFECTITEMCODE"))
            {
                var currDataset = obj.getBindDataset();
                var currDefectcodeclassid = currDataset.getColumn(e.row, "DEFECTCODECLASSID")

                if (this.nfn_isNull(currDefectcodeclassid))
                {
                    this.ds_CDefectMapDefectGroupSubNAN.filter("");
                    this.ds_CDefectMapDefectGroupSubNAN.filter("PARENTCODEID == ''");
                }
        		else
        		{
                    this.ds_CDefectMapDefectGroupSubNAN.filter("");
                    this.ds_CDefectMapDefectGroupSubNAN.filter("PARENTCODEID == '"+currDefectcodeclassid+"'");
        		}
            }
        };

        /*
         * 이벤트 : 설비ID 버튼 클릭시
         */
        this.div_work_tab_Tabpage1_grd_equipmentdefectcodeVrs_onexpandup = function(obj,e)
        {
            if(e.row < 0) return;
            this.fn_openPop("GRD_EQUIPMENT","P00167"); //설비 조회
        };


        this.div_work_tab_Tabpage2_grd_defectItemVrs_oncloseup = function(obj,e)
        {
            obj.updateToDataset();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.cbo_equipmenttype.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_equipmenttype_onitemchanged,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.btn_addRowEquipmentdefectcodeList.addEventHandler("onclick",this.fn_addEquipmentdefectcode,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRowEquipmentdefectcodeList.addEventHandler("onclick",this.fn_deleteEquipmentdefectcodeList,this);
            this.div_work.form.tab.Tabpage1.form.btn_copyRowdEquipmentdefectcodeList.addEventHandler("onclick",this.fn_copyEquipmentdefectcode,this);
            this.div_work.form.tab.Tabpage1.form.grd_equipmentdefectcodeVrs.addEventHandler("oncloseup",this.div_work_grd_equipmentdefectcodeVrs_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_equipmentdefectcodeVrs.addEventHandler("ondropdown",this.div_work_grd_equipmentdefectcodeVrs_ondropdown,this);
            this.div_work.form.tab.Tabpage1.form.grd_equipmentdefectcodeVrs.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_equipmentdefectcodeVrs_onexpandup,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRowDefectItemList.addEventHandler("onclick",this.fn_addDefectItemList,this);
            this.div_work.form.tab.Tabpage2.form.btn_delRowDefectItemList.addEventHandler("onclick",this.fn_deleteDefectItemList,this);
            this.div_work.form.tab.Tabpage2.form.btn_copyRowDefectItemList.addEventHandler("onclick",this.fn_copyDefectItemList,this);
            this.div_work.form.tab.Tabpage2.form.btn_xlDngrd_ds_defectItemList.addEventHandler("onclick",this.fn_excelDown,this);
            this.div_work.form.tab.Tabpage2.form.grd_defectItemVrs.addEventHandler("oncloseup",this.div_work_tab_Tabpage2_grd_defectItemVrs_oncloseup,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_equipmentdefectcodeList.addEventHandler("onvaluechanged",this.ds_equipmentdefectcodeList_onvaluechanged,this);
            this.ds_defectItemList.addEventHandler("onvaluechanged",this.ds_defectItemList_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS04000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
