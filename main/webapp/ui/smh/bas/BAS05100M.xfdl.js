(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS05100M");
            this.set_titletext("설비/설비단 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basAreaworker", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basAreaworkerExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISMAINAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SITENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNO\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEPARATOR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONITEM\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInitCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpStatusMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATOR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODEL\" type=\"STRING\" size=\"256\"/><Column id=\"SERIALNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLMODE\" type=\"STRING\" size=\"256\"/><Column id=\"MINCAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGEMENTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCHARACTERISTICS\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCHARACTERISTICSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONTINUOUSWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASECOST\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTALLATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURECOUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISKPI\" type=\"STRING\" size=\"256\"/><Column id=\"ISCAPA\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPLACE\" type=\"STRING\" size=\"256\"/><Column id=\"LINKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVLINK\" type=\"STRING\" size=\"256\"/><Column id=\"PREVLINKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERLINK\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERLINKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTEQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTEQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpClassTree", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NODETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTNODETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREALEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchTree", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpClassMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATOR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODEL\" type=\"STRING\" size=\"256\"/><Column id=\"SERIALNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLMODE\" type=\"STRING\" size=\"256\"/><Column id=\"MINCAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGEMENTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCHARACTERISTICS\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCHARACTERISTICSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONTINUOUSWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASECOST\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTALLATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURECOUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISKPI\" type=\"STRING\" size=\"256\"/><Column id=\"ISCAPA\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYESNO\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNUM\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATAFORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"EQP_CHA_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"EQPCLASS_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTFOLDER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchEqpClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PARENTEQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEPARATOR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONITEM\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTEQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchEqp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PARENTEQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEPARATOR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONITEM\" type=\"STRING\" size=\"256\"/><Column id=\"P_EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpStateCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STATEID\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpGrpCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTEQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_eqpClassMainExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATOR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_KO_KR\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_EN_US\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_ZH_CN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME_VI_VN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNUM\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MODEL\" type=\"STRING\" size=\"256\"/><Column id=\"SERIALNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLMODE\" type=\"STRING\" size=\"256\"/><Column id=\"MINCAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"MAXCAPACITY\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGEMENTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCHARACTERISTICS\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCHARACTERISTICSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONTINUOUSWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PURCHASECOST\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSTALLATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURECOUNTRY\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISKPI\" type=\"STRING\" size=\"256\"/><Column id=\"ISCAPA\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATAFORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTFOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILEYESNO\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"EQP_CHA_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"PROC_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"VENDOR_X_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_plant");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","200","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"180","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("sta_eqpClass","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("설비 구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("75CD06D9925D438B96E100D61272B97C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_eqpClass","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("C,Separator,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_eqpGrpType","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("설비그룹 유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BB1F9349E1F74C71A8E8106F03AA7D4B");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_eqpGrpType","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("C,EquipmentType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchCon","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EB91C2E0318747209415434463C48B34");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_searchCon","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_searchCon");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_conValue","108","160",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaNm",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaNm","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_label");
            obj.set_text("작업장");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_hidden1","25","431",null,"20","172",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","126","430",null,"20","19",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            obj.set_enable("false");
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

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_eqpStatus",this.div_work.form.tab_work);
            obj.set_text("설비 현황");
            obj.set_tooltiptext("EQUIPMENTSTATUS");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","160","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpStatus.form);
            obj.set_taborder("0");
            obj.set_text("설비/설비단 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENTINFOLIST");
            this.div_work.form.tab_work.tabpage_eqpStatus.addChild(obj.name, obj);

            obj = new Grid("grd_eqpStatus","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpStatus.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_eqpStatusMain");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Site\" tooltiptext=\"SITE\"/><Cell col=\"3\" text=\"설비 타입\" tooltiptext=\"EQUIPMENTTYPE\"/><Cell col=\"4\" text=\"구분자\" tooltiptext=\"SEPARATOR\"/><Cell col=\"5\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"6\" text=\"설비명(K)\" tooltiptext=\"EQUIPMENTNAME_K\"/><Cell col=\"7\" text=\"설비명(E)\" tooltiptext=\"EQUIPMENTNAME_E\"/><Cell col=\"8\" text=\"설비명(C)\" tooltiptext=\"EQUIPMENTNAME_C\"/><Cell col=\"9\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"10\" text=\"설비명(V)\" tooltiptext=\"EQUIPMENTNAME_V\"/><Cell col=\"11\" text=\"설비그룹 ID\" tooltiptext=\"EQUIPMENTCLASSID_2\"/><Cell col=\"12\" text=\"설비그룹 명\" tooltiptext=\"EQUIPMENTCLASSNAME\"/><Cell col=\"13\" text=\"상세 설비 타입\" tooltiptext=\"DETAILEQUIPMENTTYPE\"/><Cell col=\"14\" text=\"작업장 ID\" tooltiptext=\"WORKAREAID\"/><Cell col=\"15\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"16\" text=\"설비 모델\" tooltiptext=\"MODEL\"/><Cell col=\"17\" text=\"설비 Serial No\" tooltiptext=\"EQPSERIALNO\"/><Cell col=\"18\" text=\"ControlMode\" tooltiptext=\"CONTROLMODE\"/><Cell col=\"19\" text=\"최소 Capacity\" tooltiptext=\"MINCAPACITY\"/><Cell col=\"20\" text=\"최대 Capacity\" tooltiptext=\"MAXCAPACITY\"/><Cell col=\"21\" text=\"Tact타임\" tooltiptext=\"TACTTIME\"/><Cell col=\"22\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell col=\"23\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell col=\"24\" text=\"관리상태\" tooltiptext=\"MANAGEMENTSTATE\"/><Cell col=\"25\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"26\" text=\"설비특성\" tooltiptext=\"EQUIPMENTCHARACTERISTICS\"/><Cell col=\"27\" text=\"설비특성 명\" tooltiptext=\"EQUIPMENTCHARACTERISTICSNAME\"/><Cell col=\"28\" text=\"연속작업여부\" tooltiptext=\"ISCONTINUOUSWORK\"/><Cell col=\"29\" text=\"공정 그룹 ID\" tooltiptext=\"PROCESSGROUPID\"/><Cell col=\"30\" text=\"공정그룹명\" tooltiptext=\"PROCESSSEGMENTCLASSNAME\"/><Cell col=\"31\" text=\"구입구분\" tooltiptext=\"2582E2B2E2A44F5DB1027CF291E4390E\"/><Cell col=\"32\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"33\" text=\"설비등급\" tooltiptext=\"EQUIPMENTGRADE\"/><Cell col=\"34\" text=\"구입비용\" tooltiptext=\"PURCHASE_COST\"/><Cell col=\"35\" text=\"제조일\" tooltiptext=\"MANUFACTUREDDATE\"/><Cell col=\"36\" text=\"설치일자\" tooltiptext=\"INSTALLATION_DATE\"/><Cell col=\"37\" text=\"제조국가\" tooltiptext=\"MEASURINGMANUFACTURE_COUNTRY\"/><Cell col=\"38\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"39\" text=\"거래처 코드\" tooltiptext=\"VENDORID\"/><Cell col=\"40\" text=\"거래처명\" tooltiptext=\"VENDORNAME\"/><Cell col=\"41\" text=\"전화번호\" tooltiptext=\"TELNUMBER\"/><Cell col=\"42\" text=\"KPI집계여부\" tooltiptext=\"ISKPI2\"/><Cell col=\"43\" text=\"CAPA반영여부\" tooltiptext=\"ISCAPA\"/><Cell col=\"44\" text=\"유효상태\"/><Cell col=\"45\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"46\" text=\"생성일\" tooltiptext=\"CREATEDATE\"/><Cell col=\"47\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"48\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PLANTID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:EQUIPMENTTYPE\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,EquipmentType,,Y,N\"/><Cell col=\"4\" text=\"bind:SEPARATOR\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"hide\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,Separator,,Y,N\"/><Cell col=\"5\" text=\"bind:EQUIPMENTID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"hide\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME_KO_KR\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:EQUIPMENTNAME_EN_US\" displaytype=\"normal\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:EQUIPMENTNAME_ZH_CN\"/><Cell col=\"9\" text=\"bind:VALIDSTATE\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"10\" text=\"bind:EQUIPMENTNAME_VI_VN\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:EQUIPMENTCLASSID\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:EQUIPMENTCLASSNAME\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:DETAILEQUIPMENTTYPE\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"14\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:AREAID\"/><Cell col=\"15\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell col=\"16\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:MODEL\"/><Cell col=\"17\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:SERIALNO\"/><Cell col=\"18\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:CONTROLMODE\"/><Cell col=\"19\" displaytype=\"mask\" edittype=\"none\" text=\"bind:MINCAPACITY\" textAlign=\"right\" maskeditformat=\"!#,##9\"/><Cell col=\"20\" displaytype=\"mask\" edittype=\"none\" text=\"bind:MAXCAPACITY\" textAlign=\"right\" maskeditformat=\"!#,##9\"/><Cell col=\"21\" displaytype=\"mask\" edittype=\"none\" text=\"bind:TACTTIME\" textAlign=\"right\" maskeditformat=\"!#,##9\"/><Cell col=\"22\" displaytype=\"mask\" edittype=\"none\" text=\"bind:LEADTIME\" textAlign=\"right\" maskeditformat=\"!#,##9\"/><Cell col=\"23\" displaytype=\"normal\" edittype=\"none\" text=\"bind:STATE\"/><Cell col=\"24\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:MANAGEMENTSTATE\" combocodecol=\"C,EquipmentState,,Y,N\"/><Cell col=\"25\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"26\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:EQUIPMENTCHARACTERISTICS\"/><Cell col=\"27\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:EQUIPMENTCHARACTERISTICSNAME\"/><Cell col=\"28\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:ISCONTINUOUSWORK\" combocodecol=\"C,YesNo,,Y,N\"/><Cell col=\"29\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PROCESSSEGMENTCLASSID\" textAlign=\"left\"/><Cell col=\"30\" displaytype=\"normal\" edittype=\"none\" text=\"bind:PROCESSSEGMENTCLASSNAME\" textAlign=\"left\"/><Cell col=\"31\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:PURCHASETYPE\" combocodecol=\"C,PurchaseType,,Y,N\"/><Cell col=\"32\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:PRODUCTIONTYPE\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell col=\"33\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:EQUIPMENTLEVEL\" combocodecol=\"C,EquipmentLevel,,Y,N\"/><Cell col=\"34\" displaytype=\"mask\" edittype=\"none\" text=\"bind:PURCHASECOST\" textAlign=\"right\" maskeditformat=\"!#,##9\"/><Cell col=\"35\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MANUFACTUREDDATE\" textAlign=\"left\"/><Cell col=\"36\" displaytype=\"normal\" edittype=\"none\" text=\"bind:INSTALLATIONDATE\" textAlign=\"left\"/><Cell col=\"37\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MANUFACTURECOUNTRY\" textAlign=\"left\"/><Cell col=\"38\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MANUFACTURER\" textAlign=\"left\"/><Cell col=\"39\" displaytype=\"normal\" edittype=\"none\" text=\"bind:VENDORID\" textAlign=\"left\"/><Cell col=\"40\" displaytype=\"normal\" edittype=\"none\" text=\"bind:VENDORNAME\" textAlign=\"left\"/><Cell col=\"41\" displaytype=\"normal\" edittype=\"none\" text=\"bind:TELNO\"/><Cell col=\"42\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:ISKPI\" combocodecol=\"C,YesNo,,Y,N\"/><Cell col=\"43\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,YesNo,,Y,N\" text=\"bind:ISCAPA\"/><Cell col=\"44\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,ValidState,,Y,N\" text=\"bind:VALIDSTATE\"/><Cell col=\"45\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CREATOR\" textAlign=\"left\"/><Cell col=\"46\" displaytype=\"normal\" edittype=\"none\" text=\"bind:CREATEDTIME\"/><Cell col=\"47\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MODIFIER\" textAlign=\"left\"/><Cell col=\"48\" displaytype=\"normal\" edittype=\"none\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_eqpStatus.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_eqpStatusMain","sta_subtitle:17","0","123","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpStatus.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_work.tabpage_eqpStatus.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_eqpStatus",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpStatus.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.tabpage_eqpStatus.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_eqpReg",this.div_work.form.tab_work);
            obj.set_text("설비 등록");
            obj.set_tooltiptext("EQUIPMENTREGISTER");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_equipmentClassExcel",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_eqpClass",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_eqpClass",null,"6","26","24","116",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","29","24","87",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_equipmentClass",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Div("div_00","0","0","230","42",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_search");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Edit("edt_treeSearch","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.form);
            obj.set_taborder("0");
            this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_treeSearch",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","42","230",null,null,"0",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_eqpClassTree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:AREALEVEL\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Static("sta_mainTitleEquipmentClass","240","0","117","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("7");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new ImageViewer("imageViewer",null,"56.91%","30%",null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("16");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fixaspectratio");
            obj.set_text("");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","240","56.91%",null,null,"imageViewer:10","0",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_eqpMain");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"24\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비 ID\"/><Cell col=\"2\" colspan=\"2\" text=\"설비단 ID\"/><Cell col=\"4\" text=\"설비단 명(K)\"/><Cell col=\"5\" text=\"설비단 명(E)\"/><Cell col=\"6\" text=\"설비단 명(C)\"/><Cell col=\"7\" text=\"설비단 명(V)\"/><Cell col=\"8\" tooltiptext=\"VALIDSTATE\" text=\"유효상태\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:PARENTEQUIPMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:X_BTN\" expandshow=\"show\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"4\" text=\"bind:EQUIPMENTNAME_KO_KR\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:EQUIPMENTNAME_EN_US\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME_ZH_CN\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:EQUIPMENTNAME_VI_VN\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:VALIDSTATE\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Grid("grd_equipmentClass","240","34",null,null,"0","grd_equipment:34",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_eqpClassMain");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"24\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"24\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"24\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"24\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"24\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비 타입\" tooltiptext=\"EQUIPMENTTYPE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"구분자\" tooltiptext=\"SEPARATOR\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"설비명(K)\" tooltiptext=\"EQUIPMENTNAMEK\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"설비명(E)\" tooltiptext=\"EQUIPMENTNAME_E\"/><Cell col=\"6\" text=\"설비명(C)\" tooltiptext=\"EQUIPMENTNAME_C\"/><Cell col=\"7\" text=\"설비명(V)\" tooltiptext=\"EQUIPMENTNAME_V\"/><Cell col=\"8\" text=\"호기\" tooltiptext=\"EQPNUM\" cssclass=\"cell_point\"/><Cell col=\"9\" colspan=\"2\" text=\"설비그룹 ID\" tooltiptext=\"EQUIPMENTCLASSID_2\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"설비그룹 명\" tooltiptext=\"EQUIPMENTCLASSNAME\"/><Cell col=\"12\" colspan=\"2\" text=\"작업장 ID\" tooltiptext=\"WORKAREAID\" cssclass=\"cell_point\"/><Cell col=\"14\" text=\"작업장\" suppressalign=\"first\" tooltiptext=\"WORKAREA\"/><Cell col=\"15\" text=\"설비 모델\" tooltiptext=\"MODEL\"/><Cell col=\"16\" text=\"Serial No\" tooltiptext=\"SerialNo\"/><Cell col=\"17\" text=\"설비제어모드\" tooltiptext=\"EqpControlMode\"/><Cell col=\"18\" text=\"최소 Capacity\" tooltiptext=\"MINCAPACITY\"/><Cell col=\"19\" text=\"최대 Capacity\" tooltiptext=\"MAXCAPACITY\"/><Cell col=\"20\" text=\"Tact타임\" tooltiptext=\"TACTTIME\"/><Cell col=\"21\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell col=\"22\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell col=\"23\" text=\"관리상태\" tooltiptext=\"MANAGEMENTSTATE\" cssclass=\"cell_point\"/><Cell col=\"24\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"25\" colspan=\"2\" text=\"설비특성\" tooltiptext=\"EQUIPMENTCHARACTERISTICS\"/><Cell col=\"27\" text=\"설비특성 명\" tooltiptext=\"EQUIPMENTCHARACTERISTICSNAME\"/><Cell col=\"28\" text=\"연속작업여부\" tooltiptext=\"ISCONTINUOUSWORK\"/><Cell col=\"29\" colspan=\"2\" text=\"공정 그룹 ID\" tooltiptext=\"PROCESSGROUPID\"/><Cell col=\"31\" text=\"공정그룹명\" tooltiptext=\"PROCESSSEGMENTCLASSNAME\"/><Cell col=\"32\" text=\"구입구분\" tooltiptext=\"PURCHASE_COST\"/><Cell col=\"33\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"34\" text=\"설비등급\" tooltiptext=\"EQUIPMENTGRADE\"/><Cell col=\"35\" text=\"구입비용\" tooltiptext=\"PURCHASE_COST\"/><Cell col=\"36\" text=\"제조일\" tooltiptext=\"MANUFACTUREDDATE\"/><Cell col=\"37\" text=\"설치일자\" tooltiptext=\"INSTALLATION_DATE\" cssclass=\"cell_point\"/><Cell col=\"38\" text=\"제조국가\" textAlign=\"center\" tooltiptext=\"MEASURINGMANUFACTURE_COUNTRY\"/><Cell col=\"39\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"40\" colspan=\"2\" text=\"거래처 코드\" tooltiptext=\"VENDORID\"/><Cell col=\"42\" text=\"거래처명\" tooltiptext=\"VENDORNAME\"/><Cell col=\"43\" text=\"전화번호\" tooltiptext=\"TELNUMBER\"/><Cell col=\"44\" text=\"KPI집계여부\" tooltiptext=\"ISKPI2\"/><Cell col=\"45\" text=\"CAPA반영여부\" tooltiptext=\"ISCAPA\"/><Cell col=\"46\" text=\"측정 Data 포맷\" tooltiptext=\"MEASUREDATA_FORMAT\"/><Cell col=\"47\" text=\"VRS결과저장폴더명\" tooltiptext=\"VRSSAVEFOLDER\"/><Cell col=\"48\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\" cssclass=\"cell_point\"/><Cell col=\"49\" text=\"생성자\"/><Cell col=\"50\" text=\"생성일\"/><Cell col=\"51\" text=\"수정자\"/><Cell col=\"52\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:EQUIPMENTTYPE\" displaytype=\"combotext\" combocodecol=\"C,EquipmentType,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"2\" text=\"bind:SEPARATOR\" displaytype=\"combotext\" combocodecol=\"C,Separator,,Y,N\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:EQUIPMENTID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" editautoselect=\"true\" editinputmode=\"upper\" editinputtype=\"alpha,digit\"/><Cell col=\"4\" text=\"bind:EQUIPMENTNAME_KO_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"5\" text=\"bind:EQUIPMENTNAME_EN_US\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME_ZH_CN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"7\" text=\"bind:EQUIPMENTNAME_VI_VN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"8\" textAlign=\"right\" text=\"bind:EQUIPMENTNUM\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"9\" text=\"bind:EQUIPMENTCLASSID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" combodataset=\"ds_eqpGrpCombo\" combocodecol=\"EQUIPMENTCLASSID\" combodatacol=\"EQUIPMENTCLASSID\" combodisplayrowcount=\"15\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"10\" expandsize=\"24\" expandshow=\"show\" text=\"bind:EQPCLASS_X_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"11\" text=\"bind:EQUIPMENTCLASSNAME\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"12\" text=\"bind:AREAID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"13\" expandsize=\"24\" expandshow=\"show\" text=\"bind:AREA_X_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"14\" text=\"bind:AREANAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"15\" text=\"bind:MODEL\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"16\" text=\"bind:SERIALNO\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"17\" text=\"bind:CONTROLMODE\" combocodecol=\"C,ControlMode,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"18\" text=\"bind:MINCAPACITY\" textAlign=\"right\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" displaytype=\"mask\" edittype=\"mask\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"19\" text=\"bind:MAXCAPACITY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"20\" text=\"bind:TACTTIME\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"21\" text=\"bind:LEADTIME\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"22\" text=\"bind:STATE\" combodataset=\"ds_eqpStateCombo\" combocodecol=\"STATEID\" combodatacol=\"STATEID\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"23\" text=\"bind:MANAGEMENTSTATE\" combocodecol=\"C,EquipmentState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"24\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"25\" textAlign=\"left\" text=\"bind:EQUIPMENTCHARACTERISTICS\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"26\" expandsize=\"24\" text=\"bind:EQP_CHA_X_BTN\" expandshow=\"show\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"27\" text=\"bind:EQUIPMENTCHARACTERISTICSNAME\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"28\" text=\"bind:ISCONTINUOUSWORK\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"29\" text=\"bind:PROCESSSEGMENTCLASSID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"30\" expandshow=\"show\" expandsize=\"24\" text=\"bind:PROC_X_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"31\" text=\"bind:PROCESSSEGMENTCLASSNAME\" displaytype=\"normal\" edittype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"32\" text=\"bind:PURCHASETYPE\" combocodecol=\"C,PurchaseType,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"33\" text=\"bind:PRODUCTIONTYPE\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"34\" text=\"bind:EQUIPMENTLEVEL\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,EquipmentLevel,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"35\" text=\"bind:PURCHASECOST\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"36\" text=\"bind:MANUFACTUREDDATE\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"37\" text=\"bind:INSTALLATIONDATE\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"38\" text=\"bind:MANUFACTURECOUNTRY\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"39\" text=\"bind:MANUFACTURER\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"40\" text=\"bind:VENDORID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"41\" expandsize=\"24\" expandshow=\"show\" text=\"bind:VENDOR_X_BTN\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"42\" text=\"bind:VENDORNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"43\" text=\"bind:TELNO\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"44\" text=\"bind:ISKPI\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"45\" text=\"bind:ISCAPA\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"46\" displaytype=\"combotext\" edittype=\"expr:EQUIPMENTTYPE == &apos;Measure&apos; ? &apos;combo&apos; : &apos;none&apos;\" combocodecol=\"C,MeasureDataFormat,,Y,Y\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" text=\"bind:MEASUREDATAFORMAT\"/><Cell col=\"47\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"text\" edittype=\"normal\" text=\"bind:EQUIPMENTFOLDER\" textAlign=\"left\"/><Cell col=\"48\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"49\" text=\"bind:CREATOR\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"50\" text=\"bind:CREATEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"51\" text=\"bind:MODIFIER\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"52\" text=\"bind:MODIFIEDTIME\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Static("sta_mainTitleEquipment","240",null,"117","34",null,"grd_equipment:0",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("9");
            obj.set_text("설비단");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CHILDEQUIPMENT");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_equipment",null,null,"29","24","imageViewer:10","grd_equipment:5",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_equipmentExcel",null,null,"29","24","btn_xlUpCustom_grd_equipment:0","grd_equipment:5",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_eqp",null,null,"26","24","btn_xlDn_grd_equipmentExcel:0","grd_equipment:5",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_copyRowEqpMain",null,null,"29","24","btn_del_ds_eqp:0","grd_equipment:5",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            obj.set_visible("false");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_eqp",null,null,"26","24","btn_del_ds_eqp:0","grd_equipment:5",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_initvalueid("x");
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_eqpClassMain","sta_mainTitleEquipmentClass:17","0","88","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_eqpMain","sta_mainTitleEquipment:17",null,"88","34",null,"grd_equipment:0",null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

            obj = new Button("btn_addImg",null,"6","103","24","btn_add_ds_eqpClass:10",null,null,null,null,null,this.div_work.form.tab_work.tabpage_eqpReg.form);
            obj.set_taborder("19");
            obj.set_text("사진 추가/삭제");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("IMAGE_ADD_DEL");
            this.div_work.form.tab_work.tabpage_eqpReg.addChild(obj.name, obj);

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

            obj = new Button("btn_saveMain",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
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

            obj = new Grid("grd_equipmentExcel","529","105.62%",null,null,"308","-330",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_eqpMain");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비 ID\"/><Cell col=\"2\" text=\"설비단 ID\"/><Cell col=\"3\" text=\"설비단 명(K)\"/><Cell col=\"4\" text=\"설비단 명(E)\"/><Cell col=\"5\" text=\"설비단 명(C)\"/><Cell col=\"6\" text=\"설비단 명(V)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PARENTEQUIPMENTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME_KO_KR\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:EQUIPMENTNAME_EN_US\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"5\" text=\"bind:EQUIPMENTNAME_ZH_CN\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME_VI_VN\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_equipmentClassExcel","529","1095",null,null,"11","-659",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_eqpClassMain");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비 타입\" tooltiptext=\"EQUIPMENTTYPE\"/><Cell col=\"2\" text=\"구분자\" tooltiptext=\"SEPARATOR\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"설비명(K)\" tooltiptext=\"EQUIPMENTNAME_K\"/><Cell col=\"5\" text=\"설비명(E)\" tooltiptext=\"EQUIPMENTNAME_E\"/><Cell col=\"6\" text=\"설비명(C)\" tooltiptext=\"EQUIPMENTNAME_C\"/><Cell col=\"7\" text=\"설비명(V)\" tooltiptext=\"EQUIPMENTNAME_V\"/><Cell col=\"8\" text=\"호기\" tooltiptext=\"EQP_NUM\"/><Cell col=\"9\" text=\"설비그룹 ID\" tooltiptext=\"EQUIPMENTCLASSID_2\"/><Cell col=\"10\" text=\"설비그룹 명\" tooltiptext=\"EQUIPMENTCLASSNAME\"/><Cell col=\"11\" text=\"작업장 ID\" tooltiptext=\"WORKAREAID\"/><Cell col=\"12\" text=\"작업장\" suppressalign=\"first\" tooltiptext=\"WORKAREA\"/><Cell col=\"13\" text=\"설비 모델\" tooltiptext=\"MODEL\"/><Cell col=\"14\" text=\"Serial No\" tooltiptext=\"SerialNo\"/><Cell col=\"15\" text=\"설비제어모드\" tooltiptext=\"EqpControlMode\"/><Cell col=\"16\" text=\"최소 Capacity\" tooltiptext=\"MINCAPACITY\"/><Cell col=\"17\" text=\"최대 Capacity\" tooltiptext=\"MAXCAPACITY\"/><Cell col=\"18\" text=\"Tact타임\" tooltiptext=\"TACTTIME\"/><Cell col=\"19\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell col=\"20\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell col=\"21\" text=\"관리상태\" tooltiptext=\"MANAGEMENTSTATE\"/><Cell col=\"22\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"23\" text=\"설비특성\" tooltiptext=\"EQUIPMENTCHARACTERISTICS\"/><Cell col=\"24\" text=\"설비특성 명\" tooltiptext=\"EQUIPMENTCHARACTERISTICSNAME\"/><Cell col=\"25\" text=\"연속작업여부\" tooltiptext=\"ISCONTINUOUSWORK\"/><Cell col=\"26\" text=\"공정 그룹 ID\" tooltiptext=\"PROCESSGROUPID\"/><Cell col=\"27\" text=\"공정그룹명\" tooltiptext=\"PROCESSSEGMENTCLASSNAME\"/><Cell col=\"28\" text=\"구입구분\" tooltiptext=\"PURCHASE_COST\"/><Cell col=\"29\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"30\" text=\"설비등급\" tooltiptext=\"EQUIPMENTGRADE\"/><Cell col=\"31\" text=\"구입비용\" tooltiptext=\"PURCHASE_COST\"/><Cell col=\"32\" text=\"제조일\" tooltiptext=\"MANUFACTUREDDATE\"/><Cell col=\"33\" text=\"설치일자\" tooltiptext=\"INSTALLATION_DATE\"/><Cell col=\"34\" text=\"제조국가\" textAlign=\"center\" tooltiptext=\"MEASURINGMANUFACTURE_COUNTRY\"/><Cell col=\"35\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"36\" text=\"거래처 코드\" tooltiptext=\"VENDORID\"/><Cell col=\"37\" text=\"거래처명\" tooltiptext=\"VENDORNAME\"/><Cell col=\"38\" text=\"전화번호\" tooltiptext=\"TELNUMBER\"/><Cell col=\"39\" text=\"KPI집계여부\" tooltiptext=\"ISKPI2\"/><Cell col=\"40\" text=\"CAPA반영여부\" tooltiptext=\"ISCAPA\"/><Cell col=\"41\" text=\"측정 Data 포맷\" tooltiptext=\"MEASUREDATA_FORMAT\"/><Cell col=\"42\" text=\"VRS결과저장폴더명\" tooltiptext=\"VRSSAVEFOLDER\"/><Cell col=\"43\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\" cssclass=\"cell_point\"/><Cell col=\"44\" text=\"생성자\"/><Cell col=\"45\" text=\"생성일\"/><Cell col=\"46\" text=\"수정자\"/><Cell col=\"47\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EQUIPMENTTYPE\" displaytype=\"combotext\" combocodecol=\"C,EquipmentType,,Y,Y\"/><Cell col=\"2\" text=\"bind:SEPARATOR\" displaytype=\"combotext\" combocodecol=\"C,Separator,,Y,N\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"3\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:EQUIPMENTNAME_KO_KR\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:EQUIPMENTNAME_EN_US\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME_ZH_CN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:EQUIPMENTNAME_VI_VN\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"8\" textAlign=\"left\" text=\"bind:EQUIPMENTNUM\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:EQUIPMENTCLASSID\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_eqpGrpCombo\" combocodecol=\"EQUIPMENTCLASSID\" combodatacol=\"EQUIPMENTCLASSID\" combodisplayrowcount=\"15\"/><Cell col=\"10\" text=\"bind:EQUIPMENTCLASSNAME\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"11\" text=\"bind:AREAID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:MODEL\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"14\" text=\"bind:SERIALNO\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"15\" text=\"bind:CONTROLMODE\" combocodecol=\"C,ControlMode,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"16\" text=\"bind:MINCAPACITY\" textAlign=\"right\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"17\" text=\"bind:MAXCAPACITY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/><Cell col=\"18\" text=\"bind:TACTTIME\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/><Cell col=\"19\" text=\"bind:LEADTIME\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/><Cell col=\"20\" text=\"bind:STATE\" combodataset=\"ds_eqpStateCombo\" combocodecol=\"STATEID\" combodatacol=\"STATEID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"21\" text=\"bind:MANAGEMENTSTATE\" combocodecol=\"C,EquipmentState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"22\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"23\" textAlign=\"left\" text=\"bind:EQUIPMENTCHARACTERISTICS\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" expandsize=\"24\"/><Cell col=\"24\" text=\"bind:EQUIPMENTCHARACTERISTICSNAME\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"25\" text=\"bind:ISCONTINUOUSWORK\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"26\" text=\"bind:PROCESSSEGMENTCLASSID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"27\" text=\"bind:PROCESSSEGMENTCLASSNAME\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"28\" text=\"bind:PURCHASETYPE\" combocodecol=\"C,PurchaseType,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"29\" text=\"bind:PRODUCTIONTYPE\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,Y\"/><Cell col=\"30\" text=\"bind:EQUIPMENTLEVEL\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,EquipmentLevel,,Y,Y\"/><Cell col=\"31\" text=\"bind:PURCHASECOST\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/><Cell col=\"32\" text=\"bind:MANUFACTUREDDATE\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"33\" text=\"bind:INSTALLATIONDATE\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"34\" text=\"bind:MANUFACTURECOUNTRY\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"35\" text=\"bind:MANUFACTURER\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"36\" text=\"bind:VENDORID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"37\" text=\"bind:VENDORNAME\" textAlign=\"left\"/><Cell col=\"38\" text=\"bind:TELNO\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"39\" text=\"bind:ISKPI\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"40\" text=\"bind:ISCAPA\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"41\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,MeasureDataFormat,,Y,Y\"/><Cell col=\"42\" text=\"bind:EQUIPMENTFOLDER\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"43\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"44\" text=\"bind:CREATOR\" textAlign=\"left\"/><Cell col=\"45\" text=\"bind:CREATEDTIME\"/><Cell col=\"46\" text=\"bind:MODIFIER\" textAlign=\"left\"/><Cell col=\"47\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
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
        this.addIncludeScript("BAS05100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("BAS05100M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("BAS05100M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("BAS05100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 설비/설비단 관리 (Equipment 관리)
         * 파일명 		: BAS05100M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.05.04
         *
         * 설  명		: 기준관리 - 설비기준정보 - 설비/설비단관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.04	김진현   	최초작성
         * 2021.06.15   김진현		작업장 id 입력 불가 -> 팝업으로 선택 해야됨
         * 2021.07.19   김진현		필터 - 작업장 추가 , Tree 한글명 정렬, vrs결과저장폴더명 컬럼 추가
         *							, 삭제시 이미지 정보 삭제 추가 (삭제안됨 - 그러나)
         *							, Tree 필터 수정(설비랑 다른경우 있음 level 2인경우)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_areaId;
        this.fv_areaType;

        this.fv_preAreaId 	= "";				// 조회시 이전에 선택한 tree값
        this.fv_mainPos		= "";				// 메인 그리드 팝업 클릭시 row 위치

        this.fv_preArea		= "";		// Tree 조회시 이전 값
        this.fv_preEqpId 	= "";		// 조회시 이전에 선택한 tree값
        this.fv_eqpId;					// id
        this.fv_nodeType;				// 그룹 타입	this.ds_eqpClassTree.getColumn(e.newrow, "GROUPTYPE");
        this.fv_eqpClassType;			// 설비 타입


        this.fv_preEqpClassId 	= "";		// EqpClassId (선택한)

        this.fv_eqpMainPos		= "";		// 설비단 팝업 호출시 Pos

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

        	// 그리드 팝업창 x 버튼 추가(설비단)
        	var nEqpXBtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipment.getBindCellIndex("body","X_BTN");
        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipment.setCellProperty("body",nEqpXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	// 그리드 팝업창 x 버튼 추가(설비)
        	var nAreaXBtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","AREA_X_BTN");
        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.setCellProperty("body",nAreaXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	var nEqpChaXBtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","EQP_CHA_X_BTN");
        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.setCellProperty("body",nEqpChaXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	var nProcXBtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","PROC_X_BTN");
        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.setCellProperty("body",nProcXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	var nVendorXBtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","VENDOR_X_BTN");
        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.setCellProperty("body",nVendorXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지

        	// 21.05.07 추가
        	var nEqpClassXBtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","EQPCLASS_X_BTN");
        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.setCellProperty("body",nEqpClassXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지


        	// 작업장 x 버튼 이벤트 설정 (21.07.19)
        	this.tab_search.Tabpage1.form.btn_edt_areaNm.addEventHandler( "onclick", this.fn_clickArea, this );

        	// 설비 트리 x 버튼 이벤트 설정 (21.07.19)
        	this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.form.btn_edt_treeSearch.addEventHandler( "onclick", this.fn_clickTreeSearch, this );
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var nMainTab = this.div_work.form.tab_work.tabindex;

        	if( nMainTab == 0 )		// 설비 현황 tab
        	{
        		this.fn_getEqpStatusList();
        	}
        	else		// 설비/설비단 등록 tab
        	{
        		this.fn_searchEqpClassList();	// 상단 설비 그리드 조회
        	}

        	// 조회 분기 로직
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	//this.fn_formInit();
        	this.tab_search.Tabpage1.form.cbo_site.set_value(this.gf_getSiteType());
        	this.tab_search.Tabpage1.form.cbo_eqpClass.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_eqpGrpType.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_validState.set_index(1);
        	this.tab_search.Tabpage1.form.cmb_searchCon.set_index(0);
        	this.tab_search.Tabpage1.form.edt_conValue.set_value("");

        	this.tab_search.Tabpage1.form.edt_areaNm.set_value("");		// 작업장명 (21.07.19)
        	this.tab_search.Tabpage1.form.edt_area_id.set_value("");	// 작업장id (21.07.19)
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {



        };

        /*
         * 기능 : 저장
         */
        this.fn_saveMain = function (obj, e)
        {
        	var nIdx = this.div_work.form.tab_work.tabindex;
        	if(nIdx != 1)
        	{
        		return;
        	}
        	 var bOK = this.gfn_Message("InfoIndexIdPopupSave", "", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// 수정된 내용 있는지확인
            if (!this.gfn_dsIsUpdated(this.ds_eqpMain)
        	 && !this.gfn_dsIsUpdated(this.ds_eqpClassMain)
        	 )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}




        	// 설비단 필수값 체크
        	var component = this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipment;
        	var strColIdList = "PARENTEQUIPMENTID,EQUIPMENTID,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// 설비단 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(	this.ds_eqpMain
        								, "PARENTEQUIPMENTID|EQUIPMENTID"
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.tab_work.tabpage_eqpReg.form.sta_mainTitleEquipment.text
        								)){ return;}


        	// 설비 필수값 체크
        	var component = this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass;
        	// (21.06.03) 관리 상태 필수값 추가
        	var strColIdList = "EQUIPMENTTYPE,SEPARATOR,VALIDSTATE,AREAID,MANAGEMENTSTATE,INSTALLATIONDATE,EQUIPMENTNAME_KO_KR,EQUIPMENTNUM,EQUIPMENTCLASSID";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;
        	// 설비 중복값 확인 불필요 시퀀스 하게 따짐. 키값


        	// (정합성 체크 추가) 21.04.03
        	if(!this.fn_chkValid())
        	{
        		return;
        	}



        	// (21.07.27) - 설비 id 직접 입력시 입력값 맞는지 체크
        	if(!this.fn_checkEqpId())
        	{
        		//CHECKEQPIDRULE  입력하신 설비id가 생성규칙에 맞지 않습니다. (구분자 + 설비그룹id + 숫자3자리)
        		this.gfn_Message("CHECKEQPIDRULE", null, "warning", "ok");
        		return;
        	}
        	//------------------------

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveEquipment";
        	var sController 	= "/bas05100/saveEquipment.do";		// 설비, 설비단 둘다 저장(설비 우성 -> 설비단 ,삭제시 설비단 조회 후 없으면 넘어감)
        	var sInDatasets 	= "ds_eqpMain=ds_eqpMain:U ds_eqpClassMain=ds_eqpClassMain:U";
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
         * 기능 : 행복사
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
        		if (trId == "saveEquipment")
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
        		case "selectPlantList10001": 			//[조회조건 - site]
        			// site 첫값(초기화로 옮길 예정)
        			//this.tab_search.Tabpage1.form.cbo_site.set_value(this.gf_getSiteType());
        			//this.tab_search.Tabpage1.form.cbo_validState.set_index(0);

        			this.fn_getSearchCon();			// 필터 조회 조건 받기

        			break;
        		case "selectConditionitem": 		// [조회조건 ]
        			var nCnt = this.ds_searchCon.rowcount;
        			if(nCnt !=  0)
        			{
        				this.ds_searchCon.insertRow(0);
        				this.ds_searchCon.setColumn(0,"CODE","*");
        				this.ds_searchCon.setColumn(0,"NAME",this.nfn_getDictionaryname("ALL",true));
        			}

        			// 조회 조건 초기값
        			this.fn_searchClear();			// 초기값 설정

        			// 메인 콤보값 조회 (공통코드 이외의 콤보값)
        			this.fn_searchGridCombo();
        			break;
        		case "SelectEquipmentManagementList": 			//[설비현황 조회 ]

        			if(this.ds_eqpStatusMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;

        		case "selectEqpClassTreeList": 		// [Tree 조회조건 ]

        			// Tree에서 선택한 값 있는 경우 조회시 자동 선택
        			if(!this.gfn_isNull(this.fv_preEqpId))
        			{
        				var nFrow = this.ds_eqpClassTree.findRow("ID",this.fv_preEqpId);
        				if(nFrow != -1)
        				{
        					this.ds_eqpClassTree.set_enableevent(true);
        					this.ds_eqpClassTree.set_rowposition(nFrow);
        				}
        			}
        			else
        			{
        				this.ds_eqpClassTree.set_enableevent(true);
        				this.ds_eqpClassTree.set_rowposition(0);
        			}
        			/*
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
        			*/
        			this.ds_eqpClassTree.set_enableevent(true);

        			break;
        		case "SelectEquipmentClass03": 		// [설비 메인 - MC]
        		case "SelectEquipmentClass02": 		// [설비 메인 - SC]

        				var nCnt = this.ds_eqpClassMain.rowcount;

        				this.fn_setGridCnt();		// 등록 Main 그리드 Count 설정

        				if(nCnt != 0)
        				{
        					var nIdx = 0;
        					if(!this.gfn_isNull(this.fv_preEqpClassId))
        					{
        						nIdx = this.ds_eqpClassMain.findRow("EQUIPMENTID", this.fv_preEqpClassId);
        						if(nIdx == -1)
        						{
        							nIdx = 0;
        						}
        					}
        					else
        					{
        						nIdx = 0;
        					}
        					this.ds_eqpClassMain.set_rowposition(nIdx);
        					this.fn_searchEqpList(nIdx);		// 설비단 조회
        					// 이미지 관련 필요 한가?
        					this.ds_eqpClassMain.set_enableevent(true);
        					return;
        				}
        				else
        				{
        					this.div_work.form.tab_work.tabpage_eqpReg.form.imageViewer.set_image("");
        				}
        				this.ds_eqpClassMain.set_enableevent(true);



        				this.fv_eqpClassType= this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition, "EQUIPMENTCLASSTYPE");


        			break;

        		case "saveEquipment": 		// [저장 후 재조회]

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

        		case "P_GetEqpId" :	// 사용자 팝업 호출 후
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{

        				var nParent = this.ds_eqpMain.getColumn(this.fv_eqpMainPos, "PARENTEQUIPMENTID");
        				for(var i=0; i<nLen; i++)
        				{
        					var nAdd = "";
        					if(i == 0)
        					{
        						nAdd = this.fv_eqpMainPos;
        					}
        					else
        					{
        						nAdd	= this.ds_eqpMain.addRow();
        						this.ds_eqpMain.setColumn(nAdd, "PARENTEQUIPMENTID", nParent);
        						this.ds_eqpMain.setColumn(nAdd, "ENTERPRISEID" 			,this.gf_getEnterpriseId());
        						this.ds_eqpMain.setColumn(nAdd, "PLANTID" 				,this.gf_getSiteType());
        						this.ds_eqpMain.setColumn(nAdd, "DETAILEQUIPMENTTYPE" 	,"Sub");
        						this.ds_eqpMain.setColumn(nAdd, "VALIDSTATE" 			,"Valid");
        					}
        					var nEqpId = nParent + rtn[i][0];
        					this.ds_eqpMain.setColumn(nAdd, "EQUIPMENTID",nEqpId);
        					this.ds_eqpMain.setColumn(nAdd, "EQUIPMENTNAME_KO_KR",rtn[i][1]);
        					this.ds_eqpMain.setColumn(nAdd, "EQUIPMENTNAME_EN_US",rtn[i][1]);
        					this.ds_eqpMain.setColumn(nAdd, "EQUIPMENTNAME_ZH_CN",rtn[i][1]);
        					this.ds_eqpMain.setColumn(nAdd, "EQUIPMENTNAME_VI_VN",rtn[i][1]);


        				}
        			}
        			else
        			{
        				this.ds_eqpMain.set_enableevent(false);
        				this.ds_eqpMain.deleteRow(this.fv_eqpMainPos);
        				this.ds_eqpMain.set_enableevent(true);
        			}
        			break;
        		case "AREA_ID" :			// 포장 검사자 조회

        			var nId = rtn[0];
        			var nNm = rtn[1];

        			var nPos = this.ds_eqpClassMain.rowposition;
        			this.ds_eqpClassMain.setColumn(nPos, 'AREAID'  , nId);
        			this.ds_eqpClassMain.setColumn(nPos, 'AREANAME', nNm);

        			break;

        		case "EQP_CHA" :			// 설비 특성

        			var nId = rtn[0];
        			var nNm = rtn[1];

        			var nPos = this.ds_eqpClassMain.rowposition;
        			this.ds_eqpClassMain.setColumn(nPos, 'EQUIPMENTCHARACTERISTICS'  , nId);
        			this.ds_eqpClassMain.setColumn(nPos, 'EQUIPMENTCHARACTERISTICSNAME', nNm);

        			break;

        		case "PROC_POP" :			// 공정 그룹 ID

        			var nId = rtn[0];
        			var nNm = rtn[1];

        			var nPos = this.ds_eqpClassMain.rowposition;
        			this.ds_eqpClassMain.setColumn(nPos, 'PROCESSSEGMENTCLASSID'  , nId);
        			this.ds_eqpClassMain.setColumn(nPos, 'PROCESSSEGMENTCLASSNAME', nNm);

        			break;
        		case "VENDOR_POP" :			// 거래처 ID

        			var nId = rtn[0];
        			var nNm = rtn[1];

        			var nPos = this.ds_eqpClassMain.rowposition;
        			this.ds_eqpClassMain.setColumn(nPos, 'VENDORID'  , nId);
        			this.ds_eqpClassMain.setColumn(nPos, 'VENDORNAME', nNm);

        			break;

        		case "file_upload" :

        			//trace("파일 업로드 등록 / 수정 성공");

        			if (this.gfn_isNull(this.fv_rtnValue))
        			{
        				return;
        			}


        			this.fn_search();
        			//trace("return value--> (재 조회 를 한다.) " + this.fv_rtnValue);

        			/*
        			if(rtn == "SUCC")
        			{
        				var nRow = this.ds_eqpClassMain.rowcount == 1 ? 0 : this.ds_eqpClassMain.rowposition;

        				trace(this.ds_file.saveXML());



        // 				for(var i=0;i<this.ds_file.rowcount;i++)
        // 				{
        // 					var eRow = this.ds_fileCombo.addRow();
        // 					this.ds_fileCombo.setColumn(eRow, "OC_FILE_NM", this.ds_file.getColumn(i,"OC_FILE_NM"));
        // 					this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_GUID", this.ds_file.getColumn(i,"ATCH_FILE_GUID"));
        // 					this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_ID", this.ds_file.getColumn(i,"ATCH_FILE_ID"));
        // 				}


        				var filterString = "ATCH_FILE_ID == '" + this.ds_file.getColumn(0,"ATCH_FILE_ID") + "'"


        				//this.ds_InspectionList.setColumn(nRow,"IMAGERESOURCEID",this.ds_file.getColumn(0,"ATCH_FILE_ID"));
        				//this.ds_fileCombo.set_rowposition(0);

        				this.div_work.form.tab_work.tabpage_eqpReg.form.imageViewer.set_value(this.ds_file.getColumn(0,"ATCH_FILE_GUID"));

        				var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + this.ds_file.getColumn(0,"ATCH_FILE_GUID") + ".do";
        				this.div_work.form.tab_work.tabpage_eqpReg.form.imageViewer.set_image(upUrl);
        			}
        			*/
        			break;

        		case "EQPCLASS_POP" :			// 설비그룹

        			var nId = rtn[0];
        			var nNm = rtn[1];

        			var nPos = this.ds_eqpClassMain.rowposition;
        			this.ds_eqpClassMain.setColumn(nPos, 'EQUIPMENTCLASSID'  , nId);
        			this.ds_eqpClassMain.setColumn(nPos, 'EQUIPMENTCLASSNAME', nNm);

        			break;

        		case "SRCH_AREA228" :			// 필터 작업장(21.07.19)
        			var nId = rtn[0];
        			var nNm = rtn[1];

        			this.tab_search.Tabpage1.form.edt_area_id.set_value(nId);
        			this.tab_search.Tabpage1.form.edt_areaNm.set_value(nNm);

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
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";		// 멀티 선택
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00255"){ //작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";						// 리턴 받을 값

        		var nAreaId		= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition, "AREAID");
        		oArg.arg_searchStr = "1=1|AREA="+nAreaId;	// 검색 조건(이미 입력 된값)
        	}
        	else if(popId=="P00256")// 설비특성
        	{
        		oArg.arg_rtnCols = "CODEID|CODENAME";						// 리턴 받을 값
        		var nAreaId		= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition, "EQUIPMENTCHARACTERISTICS");
        		oArg.arg_searchStr = "1=1|CODEID="+nAreaId;	// 검색 조건(이미 입력 된값)
        	}
        	else if(popId=="P00257")// 공정 그룹 ID
        	{
        		oArg.arg_rtnCols = "PROCESSSEGMENTCLASSID|PROCESSSEGMENTCLASSNAME";						// 리턴 받을 값
        		var nProcId		= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition, "PROCESSSEGMENTCLASSID");
        		oArg.arg_searchStr = "1=1|PROCESSSEGMENTCLASS="+nProcId;	// 검색 조건(이미 입력 된값)
        	}
        	// P00258
        	else if(popId=="P00258")// 거래처 Id
        	{
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";						// 리턴 받을 값
        		var nVendoId		= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition, "VENDORID");
        		oArg.arg_searchStr = "1=1|VENDORID="+nVendoId;					// 검색 조건(이미 입력 된값)
        	}
        	// P00264
        	else if(popId=="P00264")// 설비그룹 Id
        	{
        		oArg.arg_rtnCols 	= "EQUIPMENTCLASSID|EQUIPMENTCLASSNAME";					// 리턴 받을 값
        		var nEqpClassId		= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition, "EQUIPMENTCLASSID");
        		oArg.arg_searchStr 	= "1=1|P_EQUIPMENTCLASSID="+nEqpClassId;					// 검색 조건(이미 입력 된값)
        	}

        	// (21.07.19) - 필터 작업장 추가
        	else if(popId=="P00228"){ //작업장 - 필터
        		oArg.arg_rtnCols 	= "AREAID|AREANAME";						// 리턴 받을 값
        		var nAreaNm			= this.tab_search.Tabpage1.form.edt_areaNm.value;
        		oArg.arg_searchStr 	= "1=1|AREAIDNAME="+nAreaNm;	// 검색 조건(이미 입력 된값)
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
         * 필터 - 조회조건 콤보값
         */
        this.fn_getSearchCon = function ()
        {
        	this.ds_searchCon.clearData();
        	this.ds_searchInitCombo.clearData();

        	// 조회 조건 설정
        	this.ds_searchInitCombo.addRow();
        	this.ds_searchInitCombo.setColumn(0, "DICTIONARYID"	, "EQUIPMENTCLASSID,EQUIPMENTID,EQUIPMENTNAME,DESCRIPTION,DETAILEQUIPMENTTYPE"); 	//
        	// 품목유형코드 콤보 정보 조회  (설비그룹 같이사용)
        	var sSvcID 			= "selectConditionitem";
        	var sController 	= "/bas05000/selectConditionitem.do";
        	var sInDatasets 	= "INPUT=ds_searchInitCombo";
        	var sOutDatasets 	= "ds_searchCon=output1";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 설비 현황 조회
         */
        this.fn_getEqpStatusList = function ()
        {
        	this.ds_eqpStatusMain.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());

        	this.ds_search.setColumn(0, "P_PLANTID"			, this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "P_VALIDSTATE"		, this.tab_search.Tabpage1.form.cbo_validState.value);		//유효상태

        	this.ds_search.setColumn(0, "P_EQUIPMENTCLASSTYPE"	, this.tab_search.Tabpage1.form.cbo_eqpGrpType.value);	//설비그룹유형
        	this.ds_search.setColumn(0, "P_SEPARATOR"		, this.tab_search.Tabpage1.form.cbo_eqpClass.value);		//설비구분
        	this.ds_search.setColumn(0, "P_CONDITIONVALUE"	, this.tab_search.Tabpage1.form.edt_conValue.value);		//조회값
        	this.ds_search.setColumn(0, "P_CONDITIONITEM"	, this.tab_search.Tabpage1.form.cmb_searchCon.value);		//조회조건
        	// (21.07.19) 필터 작업장 추가
        	this.ds_search.setColumn(0, "P_AREA"			, this.tab_search.Tabpage1.form.edt_area_id.value);			// 필터 - 작업장



        	var sSvcID 			= "SelectEquipmentManagementList";
        	var sController 	= "/bas05100/SelectEquipmentManagementList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_eqpStatusMain=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

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
        	this.ds_searchTree.clearData();
        	this.ds_searchTree.addRow();
        	this.ds_searchTree.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());

        	var sSvcID 			= "selectEqpClassTreeList";
        	var sController 	= "/bas05100/selectEqpClassTreeList.do";
        	var sInDatasets 	= "INPUT=ds_searchTree";
        	var sOutDatasets 	= "ds_eqpClassTree=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 설비 그리드 조회
         */
        this.fn_searchEqpClassList = function ()
        {

        	this.ds_eqpClassMain.clearData();
        	this.ds_eqpMain.clearData();
        	this.ds_searchEqpClass.clearData();
        	this.ds_searchEqpClass.addRow();
        	// 조회시 공통 로직
        	//==============================================
        	this.ds_searchEqpClass.setColumn(0, "P_VALIDSTATE"		, this.tab_search.Tabpage1.form.cbo_validState.value);		//유효상태
        	this.ds_searchEqpClass.setColumn(0, "P_EQUIPMENTCLASSTYPE"	, this.tab_search.Tabpage1.form.cbo_eqpGrpType.value);	//설비그룹유형
        	this.ds_searchEqpClass.setColumn(0, "P_SEPARATOR"		, this.tab_search.Tabpage1.form.cbo_eqpClass.value);		//설비구분
        	this.ds_searchEqpClass.setColumn(0, "P_CONDITIONVALUE"	, this.tab_search.Tabpage1.form.edt_conValue.value);		//조회값
        	this.ds_searchEqpClass.setColumn(0, "P_CONDITIONITEM"	, this.tab_search.Tabpage1.form.cmb_searchCon.value);		//조회조건
        	//==============================================

        	this.ds_searchEqpClass.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_searchEqpClass.setColumn(0, "P_PLANTID"		, this.gf_getSiteType());

        	// (21.07.19) 필터 작업장 추가
        	this.ds_searchEqpClass.setColumn(0, "P_AREA"			, this.tab_search.Tabpage1.form.edt_area_id.value);			// 필터 - 작업장

        	var nSearchId = "";

        	if (this.fv_nodeType == "MC")			// 3 Level
        	{
        	    trace(" ===> : "+this.fv_nodeType+" || 3 Level "+this.fv_eqpClassType+" || "+this.fv_eqpId);
        		this.ds_searchEqpClass.setColumn(0, "P_PARENTEQUIPMENTCLASSID"	, this.fv_eqpId);
        		this.ds_searchEqpClass.setColumn(0, "P_GROUPTYPE"		, "");
        		nSearchId = "SelectEquipmentClass03";
        		/*
        		param.Add("p_parentequipmentclassid", focusRow["ID"]);
        		param.Add("p_grouptype", "");
        		this.grdEquipmentClass.DataSource = SqlExecuter.Query("SelectEquipmentClass", "10003", param);
        		equmentclass_FisrtNodeSeleted();	// 설비
        		equmentclass_FocusedFileChanged(); 	// 이미지
        		*/
        	}
        	else if ( this.fv_nodeType ==  "SC"  || this.fv_nodeType == "ENTERPRISE")		// 4 Level  (ENTERPRISE 는왜?)
        	{
        		// 이미지 조회 , 설비 목록 조회
        		trace(" ===> : "+this.fv_nodeType+" || 4 Level "+this.fv_eqpClassType+" || "+this.fv_eqpId);
        		this.ds_searchEqpClass.setColumn(0, "P_EQUIPMENTCLASS"		, this.fv_eqpId);
        		this.ds_searchEqpClass.setColumn(0, "EQUIPMENTCLASSTYPE"	, this.fv_eqpClassType);
        		nSearchId = "SelectEquipmentClass02";
        		/*
        		grdEquipmentClass.GridButtonItem = GridButtonItem.All;
        		param.Add("P_EQUIPMENTCLASS", focusRow["ID"]);
        		param.Add("EQUIPMENTCLASSTYPE", focusRow["EQUIPMENTCLASSTYPE"]);

        		this.grdEquipmentClass.DataSource = SqlExecuter.Query("SelectEquipmentClass", "10002", param);
        		equmentclass_FisrtNodeSeleted();  // 설비
        		equmentclass_FocusedFileChanged();// 이미지
        		*/
        	}
        	else
        	{
        		// 조회 없음
        		this.ds_eqpMain.clearData();
        		this.ds_eqpClassMain.clearData();
        		// 이미지 초기화 필요

        		return;
        	}

        	this.ds_eqpClassMain.set_enableevent(false);

        	var sSvcID 			= nSearchId;
        	var sController 	= "/bas05100/"+nSearchId+".do";
        	var sInDatasets 	= "INPUT=ds_searchEqpClass";
        	var sOutDatasets 	= "ds_eqpClassMain=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 설비단 조회
         */
        this.fn_searchEqpList = function (nMainRow)
        {
        	var nEqpClassCnt = this.ds_eqpClassMain.rowcount;
        	if(nEqpClassCnt = 0)
        	{
        		return;
        	}
        	if(this.gfn_isNull(nMainRow))
        	{
        		return;
        	}

        	//trace(" 설비단 조회 가지전 : "+nMainRow+" || "+this.fv_preEqpClassId);
        	this.fn_setImg();


        	this.ds_eqpMain.clearData();
        	this.ds_searchEqp.clearData();


        	this.ds_searchEqp.addRow();
        	// 조회시 공통 로직
        	//==============================================
        	this.ds_searchEqp.setColumn(0, "P_VALIDSTATE"			, this.tab_search.Tabpage1.form.cbo_validState.value);		//유효상태
        	this.ds_searchEqp.setColumn(0, "P_EQUIPMENTCLASSTYPE"	, this.tab_search.Tabpage1.form.cbo_eqpGrpType.value);	//설비그룹유형
        	this.ds_searchEqp.setColumn(0, "P_SEPARATOR"		, this.tab_search.Tabpage1.form.cbo_eqpClass.value);		//설비구분
        	this.ds_searchEqp.setColumn(0, "P_CONDITIONVALUE"	, this.tab_search.Tabpage1.form.edt_conValue.value);		//조회값
        	this.ds_searchEqp.setColumn(0, "P_CONDITIONITEM"	, this.tab_search.Tabpage1.form.cmb_searchCon.value);		//조회조건
        	this.ds_searchEqp.setColumn(0, "P_ENTERPRISEID"		, this.gf_getEnterpriseId());
        	this.ds_searchEqp.setColumn(0, "P_PLANTID"			, this.gf_getSiteType());

        	// (21.07.19) 필터 작업장 추가
        	this.ds_searchEqp.setColumn(0, "P_AREA"			, this.tab_search.Tabpage1.form.edt_area_id.value);			// 필터 - 작업장
        	//==============================================

        	this.ds_searchEqp.setColumn(0, "P_EQUIPMENTID"		, this.ds_eqpClassMain.getColumn(nMainRow,"EQUIPMENTID"));

        	var sSvcID 			= "SelectEquimentClass";
        	var sController 	= "/bas05100/SelectEquimentClass.do";
        	var sInDatasets 	= "INPUT=ds_searchEqp";
        	var sOutDatasets 	= "ds_eqpMain=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


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

        		// (21.07.19) Tree 설정 수정
        		// (21.07.13) 테스트 -> 필터 정상작동 되는듯.
        		this.ds_eqpClassTree.set_enableevent(false);
        		this.ds_eqpClassTree.filter("");
        		var nFilter 	= "";			// 필터 조건
        		var nSubFilter 	= "NODETYPE == 'ENTERPRISE'";			// 필터 조건(서브)
        		var nCnt 		= this.ds_eqpClassTree.rowcount;
        		var nMaxLev 	= this.ds_eqpClassTree.getMax("AREALEVEL");

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
        					if((parseInt(nMaxLev) != parseInt(nLevel)) && j == 0)		// 찾은것이 마지막 level이 아닌겨우만 (검색어가 직접 있는경우)
        					{
        						if(parseInt(nLevel) == 1)
        						{
        							nSubFilter += this.gfn_isNull(nSubFilter) ? "EQUIPMENTCLASSTYPE == '"+nId+"'" : " || EQUIPMENTCLASSTYPE == '"+nId+"'";
        						}
        						else if(parseInt(nLevel) == 2)
        						{
        							nSubFilter += this.gfn_isNull(nSubFilter) ? "PARENT == '"+nId+"'" : " || PARENT == '"+nId+"'";
        							// 2 Level인경우 조건 추가 해당 밑에 다 나와야됨.
        							for(var e=0; e<nCnt; e++)
        							{
        								var nParentId2Lev = this.ds_eqpClassTree.getColumn(e, "PARENT");
        								var nLevel2Lev = this.ds_eqpClassTree.getColumn(e, "AREALEVEL");
        								// 2에서 설정시 하단 3레벨 전체 다나와야됨. 설정 다름
        								if(nParentId2Lev == nId && nLevel2Lev == 3)
        								{
        									var nId2Lev = this.ds_eqpClassTree.getColumn(e, "ID");
        									//trace(" ====> : "+nId2Lev);
        									nSubFilter += this.gfn_isNull(nSubFilter) ? "PARENT == '"+nId2Lev+"'" : " || PARENT == '"+nId2Lev+"'";
        								}
        							}
        						}
        						else if(parseInt(nLevel) == 3)
        						{
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

        		//trace("-------------------- 필터 설정값 : "+nFilter);
        		//trace("-------------------- this.fv_preEqpId : "+this.fv_preEqpId);
        		this.ds_eqpClassTree.filter(nFilter);
        		this.ds_eqpClassTree.set_enableevent(true);


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
         * 그리드 사용 콤보값 조회
         */
        this.fn_searchGridCombo = function ()
        {
        	this.ds_eqpStateCombo.clearData();
        	this.ds_eqpGrpCombo.clearData();

        	var sSvcID 			= "SelectEqpClassGridCombo";
        	var sController 	= "/bas05100/SelectEqpClassGridCombo.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_eqpStateCombo=output1 ds_eqpGrpCombo=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
         * 설비단 - 설비단 id 팝업 호출
         */
        this.fn_getEqpId = function ()
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site
        	var nType 			= nType;						//대중소

        	var popupId = "P_GetEqpId";
        	var oArg 	= {};
        	var opts 	= "width=800,height=600";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.ds_eqpMain.getColumn(this.fv_eqpMainPos,"EQUIPMENTID");

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_Text = nSearch;
        	}

        	// ds 추가
        	oArg.arg_DataSet 	= this.ds_eqpMain;

        	oArg.arg_nEnt 		= nEnterpriseId;
        	oArg.arg_nSite 		= nSite;
        	oArg.arg_nType 		= nType;
        	// 넘길대 데이터셋 OR 팝업에서 부모창 데이터셋 접근 해서 이미 등록된 내용인지 확인필요
        	oArg.arg_rtnCols = "EQUIPMENTID|CHILDEQUIPMENTNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"bas::BAS05100P.xfdl" ,oArg ,opts);
        };

        /*
         * 설비 그리드 작업장 팝업
         */
        this.fn_getAreaId = function (nRow)
        {

        	var nEqpClassId = this.ds_eqpClassMain.getColumn(nRow, "EQUIPMENTCLASSID");
        	//var nAreaId		= this.ds_eqpClassMain.getColumn(nRow, "AREAID");

        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"		, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"			, this.gf_getSiteType());
        	sArgs += this.gfn_setParam("EQUIPMENTCLASSID"	, nEqpClassId);

        	// 고객파트명 공통팝업 호출
        	this.fn_openPop("AREA_ID","P00255", sArgs); //작업장 조회
        };

        /*
         * 설비 그리드 설비특성 팝업
         */
        this.fn_getEqpCha  = function (nRow)
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"		, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"			, this.gf_getSiteType());
        	sArgs += this.gfn_setParam("CODECLASSID"		, "EquipmentCharacteristics");

        	// 고객파트명 공통팝업 호출
        	this.fn_openPop("EQP_CHA","P00256", sArgs); //설비특성 조회
        };

        /*
         * 공정 그룹 ID Popup
         */
        this.fn_getProcPop = function (nRow)
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"				, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"					, this.gf_getSiteType());
        	sArgs += this.gfn_setParam("PROCESSSEGMENTCLASSTYPE"	, "TopProcessSegmentClass");

        	// 고객파트명 공통팝업 호출
        	this.fn_openPop("PROC_POP","P00257", sArgs); //공정 그룹 조회
        };

        /*
         * 거래처 팝업 호출
         */
        this.fn_getVendorPop  = function ()
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"				, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"					, this.gf_getSiteType());

        	// 고객파트명 공통팝업 호출
        	this.fn_openPop("VENDOR_POP","P00258", sArgs); //거래처 조회
        };

        /*
         * 메인 그리드 설비그룹  팝업
         */
        this.fn_getEqpClassPop  = function ()
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"				, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"					, this.gf_getSiteType());

        	// 고객파트명 공통팝업 호출
        	this.fn_openPop("EQPCLASS_POP","P00264", sArgs); // 설비그룹
        };

        /*******************************************************************************
         * fn_checkGridDup
         * 기능 : 그리드내 중복값 존재여부 체크
         * 최성민(복사해수 구현)
         * Parameter  :
         *				obj 	: 체크 Dataset
         *				chkCol  : 체크 컬럼ID (COLUMN_A|COLUMN_B|COLUMN_C)
         *				msg		: 체크컬럼 오류시 메세지 ID (MSG_A|MSG_B|MSG_C)
        *******************************************************************************/
         this.fn_checkGridDup = function (obj, chkCol, msg, tableNm)
         {
        	//속도문제로 로딩바 이미지 표시
        	if(this.nfn_isNull(chkCol)) return true;
        	var chkColList = chkCol.split("|");
        	//var msgList = msg.split("|");
        	for(var i=0; i <obj.rowcount; i++){

        		var nChkStr = "";
        		for(var j=0; j <chkColList.length; j++){
        			var chkKey = chkColList[j];
        			var chkValue = obj.getColumn(i,chkKey);

        			nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        							:" && " +chkKey+"== '" + chkValue+"'";
        		}

        		// 중복 조건
        		var chkCnt = obj.getCaseCount(nChkStr);

        		if(chkCnt > 1){
        			var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        			//this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        			this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        			return false;
        		}
        	}
        	return true;
         };

        /*
         * 이미지 설정
         */
        this.fn_setImg = function ()
        {
        	var nEqpClassPos = this.ds_eqpClassMain.rowposition;
        	var nFile = this.ds_eqpClassMain.getColumn(nEqpClassPos, "ATCH_FILE_GUID");
        	if(!this.gfn_isNull(nFile))
        	{
        		upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + nFile + ".do";
        	}
        	else
        	{
        		upUrl = "";
        	}
        	this.div_work.form.tab_work.tabpage_eqpReg.form.imageViewer.set_image(upUrl);
        };


        /***************************************
         * 정합성체크(설치일자 체크)
         ***************************************/
        this.fn_chkValid = function ()
        {
        	var nCnt 	= this.ds_eqpClassMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nDsType	= this.ds_eqpClassMain.getRowType(i);
        		var nDate	= this.ds_eqpClassMain.getColumn(i,"INSTALLATIONDATE");

        		if((nDsType ==  Dataset.ROWTYPE_INSERT || nDsType ==  Dataset.ROWTYPE_UPDATE) && !this.gfn_isNull(nDate))
        		{
        			if(!this.gfn_dateCheck(nDate))
        			{
        				this.gfn_Message("CheckDate", "" , "warning", "ok"); // 날짜를 확인해주세요.
        				return false;
        			}
        		}
        	}
        	return true;
        };

        /*
         * 행 추가 / 삭제시  Count 변경
         */
        this.fn_setGridCnt = function ()
        {
        	var nCnt 	= this.ds_eqpClassMain.rowcount;
        	trace("  ==== : "+nCnt);
        	this.div_work.form.tab_work.tabpage_eqpReg.form.sta_cnt_ds_eqpClassMain.set_text("Count : <fc v='#f31d24'>"+nCnt+"</fc>");
        };

        /*
         * 필터 작업장 x 버튼 클릭시 이벤트 설정
         * (21.07.19)
         */
        this.fn_clickArea = function ()
        {
        	this.tab_search.Tabpage1.form.edt_areaNm.set_value("");		// 작업장명
        	this.tab_search.Tabpage1.form.edt_area_id.set_value("");	// 작업장id
        };

        /*
         * 설비그룹 트리 x 버튼 클릭시 이벤트 설정
         * (21.07.19)
         */
        this.fn_clickTreeSearch = function ()
        {
        	this.ds_eqpClassTree.filter("");
        };


        /*
         * 저장시 설비id 직접 입력된 경우 체크
         */
        this.fn_checkEqpId = function ()
        {
        	var nCnt = this.ds_eqpClassMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nType = this.ds_eqpClassMain.getRowType(i);
        		var nEquipmentId 	= this.ds_eqpClassMain.getColumn(i, "EQUIPMENTID");
        		if(nType == Dataset.ROWTYPE_INSERT && !this.gfn_isNull(nEquipmentId))		// 신규 등록인 경우만 체크
        		{
        			var nSeparator 		= this.ds_eqpClassMain.getColumn(i, "SEPARATOR");
        			var nEquip			= this.ds_eqpClassMain.getColumn(i, "EQUIPMENTCLASSID");


        			var nDirectSeparator	= nEquipmentId.substr(0,1);				// 구분자 확인
        			var nDirectEquip		= nEquipmentId.substr(1,3);				// 설비 그룹 id 확인
        			var nDirectNum			= nEquipmentId.substr(4, nEquipmentId.length);	// 숫자 길이 확인
        			// 구분자 맞는지 확인
        			if(nSeparator != nDirectSeparator)
        			{
        				return false;
        			}
        			// 설비 그룹 id 확인
        			if(nEquip != nDirectEquip)
        			{
        				return false;
        			}
        			// 숫자는 3개만 가능
        			if(nDirectNum.length != 3)
        			{
        				return false;
        			}
        			// 숫자인지 체크
        			if(!this.gfn_isNum(nDirectNum))
        			{
        				return false;
        			}
        		}
        	}
        	return true;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * Tree row 변경시
         */
        this.ds_eqpClassTree_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1  && e.oldrow != e.newrow) {
        		this.fv_eqpId 	 	= this.ds_eqpClassTree.getColumn(e.newrow, "ID");
        		this.fv_nodeType 	= this.ds_eqpClassTree.getColumn(e.newrow, "NODETYPE");
        		this.fv_eqpClassType= this.ds_eqpClassTree.getColumn(e.newrow, "EQUIPMENTCLASSTYPE");
        		this.fn_searchEqpClassList();
        	}
        };

        /*
         * 설비 Class row 변경시
         */
        this.ds_eqpClassMain_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1  && e.oldrow != e.newrow) {
        		this.fv_preEqpClassId 	= this.ds_eqpClassMain.getColumn(e.newrow, "EQUIPMENTID");
        		this.fn_searchEqpList(e.newrow);
        	}
        };

        /*
         * tree 조회
         */
        this.div_work_tab_work_tabpage_eqpReg_div_00_edt_treeSearch_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_filterTree(obj.value);
        	}
        };

        /*
         * Tree 조회
         */
        this.div_work_tab_work_tabpage_eqpReg_div_00_btn_treeSearch_onclick = function(obj,e)
        {
        	this.fn_filterTree(this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.form.edt_treeSearch.value);
        };

        /*
         * 설비 그리드 값 변경시
         */
        this.ds_eqpClassMain_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'EQUIPMENTCLASSID')
        	{

        		var nRow = this.ds_eqpGrpCombo.findRow("EQUIPMENTCLASSID",e.newvalue);
        		var nNm	= this.ds_eqpGrpCombo.getColumn(nRow,"EQUIPMENTCLASSNAME");
        		this.ds_eqpClassMain.setColumn(e.row,"EQUIPMENTCLASSNAME",nNm);

        	}
        	// 설비 타입이 계측기인 경우
        	if(e.columnid == 'EQUIPMENTTYPE')
        	{
        		var nType = this.ds_eqpClassMain.getColumn(e.row, "EQUIPMENTTYPE");
        		if(nType == 'Production')
        		{
        			this.ds_eqpClassMain.setColumn(e.row, "MEASUREDATAFORMAT", "");
        		}
        	}
        };

        /*
         * 설비단 추가
         */
        this.fn_eqpAdd = function(obj,e)
        {
        	// e.NewRow["PARENTEQUIPMENTID"] = grdEquipmentClass.View.GetFocusedDataRow()["EQUIPMENTID"];
        	var nClassCnt = this.ds_eqpClassMain.rowcount;
        	if(nClassCnt == 0)
        	{
        		return;
        	}

        	// 설비가 등록 상태가 아닌 경우만 추가 가능(21.07.27) 추가[MSG]  -- 작업 진행중
        	var nPos = this.ds_eqpClassMain.rowposition;
        	var nRowType = this.ds_eqpClassMain.getRowType(nPos);
        	if(nRowType == Dataset.ROWTYPE_INSERT)
        	{
        		this.gfn_Message("CHECKEQPIDINFO", null, "warning", "ok");
        		// CHECKEQPIDINFO   / 선택된 설비ID가 신규 생성된 설비ID 입니다. 설비 저장 후 진행하세요.
        		return;
        	}


        	var nAdd = this.ds_eqpMain.addRow();
        	var nMainEqpId = this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition,"EQUIPMENTID");
        	this.ds_eqpMain.setColumn(nAdd, "PARENTEQUIPMENTID" ,nMainEqpId);

        	this.ds_eqpMain.setColumn(nAdd, "ENTERPRISEID" 			,this.gf_getEnterpriseId());
        	this.ds_eqpMain.setColumn(nAdd, "PLANTID" 				,this.gf_getSiteType());
        	this.ds_eqpMain.setColumn(nAdd, "DETAILEQUIPMENTTYPE" 	,"Sub");
        	this.ds_eqpMain.setColumn(nAdd, "VALIDSTATE" 			,"Valid");

        };
        /*
         * 설비단 삭제
         */
        this.fn_eqpDelete = function(obj,e)
        {
        	var nChkCnt = this.ds_eqpMain.rowcount;
        	var nDsPos  = this.ds_eqpMain.rowposition
        	// 삭제건 체크
        	if (nChkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var nDsType	= this.ds_eqpMain.getRowType(nDsPos);
        	if(nDsType ==  Dataset.ROWTYPE_INSERT) 		// 21.05.06 등록인 상태만 삭제 가능
        	{
        		this.ds_eqpMain.deleteRow(nDsPos);
        	}


        };

        /*
         * 설비단 복사
         */
        this.fn_eqpCopy = function(obj,e)
        {
         	//return;		// as-is 복사 안됨.
        	//this.fn_copyDataset(this.ds_eqpMain, null, "CREATOR,MODIFIER,CREATEDTIME,MODIFIEDTIME");

        	// 복사 기능 수정

        	return;
        	//trace("복사 대기중 설비단 ");
        	/*
        	// 중복되게 못들어감 복사가 의미가 없음 버튼 클릭 불가 처리  (21.07.26)
        	var dsObj = this.ds_eqpMain;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	// KEY,WHO컬럼 관련 복사제외
        	dsObj.setColumn(row,"EQUIPMENTID",""); 	//ID
        	dsObj.setColumn(row,"CREATOR",""); 		//생성자
        	dsObj.setColumn(row,"CREATEDTIME",""); 	//생성일
        	dsObj.setColumn(row,"MODIFIER",""); 	//수정자
        	dsObj.setColumn(row,"MODIFIEDTIME",""); //수정일
        	*/

        };

        /*
         * 설비단 그리드 설비단id 팝업호출
         */
        this.div_work_tab_work_tabpage_eqpReg_grd_equipment_onexpandup = function(obj,e)
        {
        	var nEqpIdIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipment.getBindCellIndex("body","EQUIPMENTID");
        	var nXbtnIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipment.getBindCellIndex("body","X_BTN");

        	this.fv_eqpMainPos		= e.row;

        	var nRowType = this.ds_eqpMain.getRowType(this.fv_eqpMainPos);
        	if(nRowType  != Dataset.ROWTYPE_INSERT )
        	{
        		return;
        	}
        	switch(e.cell) {
        		case nEqpIdIdx:	// 팝업 호출
        			// 팝업 호출
        			this.fn_getEqpId();
        			break;
        		case nXbtnIdx: 	// x 버튼
        			// 삭제 및 row가 삭제된다.
        			this.ds_eqpMain.set_enableevent(false);
        			this.ds_eqpMain.deleteRow(e.row);
        			this.ds_eqpMain.set_enableevent(true);
        			break;
        		default:
        	}
        };

        /*
         * 설비 추가
         */
        this.fn_eqpClassAdd = function(obj,e)
        {
        	if (this.fv_nodeType != "SC")			// 3 Level
        	{
        		return;
        	}

        	var nAdd = this.ds_eqpClassMain.addRow();

        	var nTreeId = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition,"ID");
        	var nTreeNm = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition,"NAME");

        	this.ds_eqpClassMain.setColumn(nAdd, "ENTERPRISEID" 		, this.gf_getEnterpriseId());
        	this.ds_eqpClassMain.setColumn(nAdd, "PLANTID" 				, this.gf_getSiteType());
        	this.ds_eqpClassMain.setColumn(nAdd, "DETAILEQUIPMENTTYPE" 	, "Main");
        	this.ds_eqpClassMain.setColumn(nAdd, "EQUIPMENTCLASSID" 	, nTreeId);
        	this.ds_eqpClassMain.setColumn(nAdd, "EQUIPMENTCLASSNAME" 	, nTreeNm);
        	this.ds_eqpClassMain.setColumn(nAdd, "VALIDSTATE" 			, "Valid");

        	this.ds_eqpClassMain.setColumn(nAdd, "STATE" 				, "Idle");		// 21.05.10

        	// cell 포커스 이동 안됨.
        	//var n = this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.setCellPos(5,nAdd);
        	//this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.set_enableredraw(true);
        	//trace(" ====> : "+n);

        };



        /*
         * 메인 그리드 팝업 호출시
         */
        this.div_work_tab_work_tabpage_eqpReg_grd_equipmentClass_onexpandup = function(obj,e)
        {
        	var nAreaIdIdx 		= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","AREAID");
        	var nAreaXIdIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","AREA_X_BTN");

        	var nEqpChaIdIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","EQUIPMENTCHARACTERISTICS");
        	var nEqpChaXIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","EQP_CHA_X_BTN");

        	var nProcIdIdx 		= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","PROCESSSEGMENTCLASSID");
        	var nProcXIdx 		= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","PROC_X_BTN");

        	var nVendorIdIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","VENDORID");
        	var nVendorXIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","VENDOR_X_BTN");

        	var nEqpClassIdIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","EQUIPMENTCLASSID");
        	var nEqpClassXIdx 	= this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.getBindCellIndex("body","EQPCLASS_X_BTN");

        	if(e.cell == nAreaIdIdx)		// Area Id Popup
        	{
        		// 팝업 호출
        		this.fn_getAreaId(e.row);
        	}
        	else if(e.cell == nAreaXIdIdx)
        	{
        		this.ds_eqpClassMain.setColumn(e.row, "AREAID","");
        		this.ds_eqpClassMain.setColumn(e.row, "AREANAME","");
        	}
        	else if(e.cell == nEqpChaIdIdx)
        	{
        		// 팝업 호출
        		this.fn_getEqpCha(e.row);
        	}
        	else if(e.cell == nEqpChaXIdx)
        	{
        		this.ds_eqpClassMain.setColumn(e.row, "EQUIPMENTCHARACTERISTICS","");
        		this.ds_eqpClassMain.setColumn(e.row, "EQUIPMENTCHARACTERISTICSNAME","");
        	}

        	else if(e.cell == nProcIdIdx)
        	{
        		// 팝업 호출
        		this.fn_getProcPop(e.row);
        	}
        	else if(e.cell == nProcXIdx)
        	{
        		this.ds_eqpClassMain.setColumn(e.row, "PROCESSSEGMENTCLASSID","");
        		this.ds_eqpClassMain.setColumn(e.row, "PROCESSSEGMENTCLASSNAME","");
        	}

        	else if(e.cell == nVendorIdIdx)
        	{
        		// 팝업 호출
        		this.fn_getVendorPop(e.row);
        	}
        	else if(e.cell == nVendorXIdx)
        	{
        		this.ds_eqpClassMain.setColumn(e.row, "VENDORID","");
        		this.ds_eqpClassMain.setColumn(e.row, "VENDORNAME","");
        	}

        	else if(e.cell == nEqpClassIdIdx)
        	{
        		// 팝업 호출
        		this.fn_getEqpClassPop(e.row);
        	}
        	else if(e.cell == nEqpClassXIdx)
        	{
        		this.ds_eqpClassMain.setColumn(e.row, "EQUIPMENTCLASSID","");
        		this.ds_eqpClassMain.setColumn(e.row, "EQUIPMENTCLASSNAME","");
        	}

        };

        /*
         * Main 설비 그리드 삭제
         */
        this.fn_eqpClassDelete = function(obj,e)
        {
        	var nChkCnt = this.ds_eqpClassMain.rowcount;
        	var nDsPos  = this.ds_eqpClassMain.rowposition

        	// 삭제건 체크
        	if (nChkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var nDsType	= this.ds_eqpClassMain.getRowType(nDsPos);
        	if(nDsType ==  Dataset.ROWTYPE_INSERT) 		// 21.05.06 등록인 상태만 삭제 가능
        	{
        		this.ds_eqpClassMain.deleteRow(nDsPos);
        	}


        };

        /*
         * 메인 그리드 복사 -> 체크 박스 없어서 실행 안됨
         */
        this.fn_eqpClassCopy = function(obj,e)
        {
        	//return;
        	//trace("복사 대기중 메인 ");


        	// (21.07.26) 복사기능 추가
        	var dsObj = this.ds_eqpClassMain;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
        	dsObj.setColumn(row,"EQUIPMENTID",""); //ID
        	dsObj.setColumn(row,"CREATOR",""); 		//생성자
        	dsObj.setColumn(row,"CREATEDTIME",""); 	//생성일
        	dsObj.setColumn(row,"MODIFIER",""); 	//수정자
        	dsObj.setColumn(row,"MODIFIEDTIME",""); //수정일
        };

        /*
         * 사진 추가(추가/ 삭제)
         */
        this.fn_file = function(obj,e)
        {
        	var nBtnNm = obj.name;


        	// 설비가 등록 상태가 아닌 경우만 추가 가능(21.07.27) 추가[MSG]  -- 작업 진행중
        	var nPos = this.ds_eqpClassMain.rowposition;
        	var nRowType = this.ds_eqpClassMain.getRowType(nPos);
        	if(nRowType == Dataset.ROWTYPE_INSERT)
        	{
        		this.gfn_Message("CHECKEQPIDINFO", null, "warning", "ok");
        		// CHECKEQPIDINFO   / 선택된 설비ID가 신규 생성된 설비ID 입니다. 설비 저장 후 진행하세요.
        		return;
        	}

        	if(nBtnNm == "btn_deleteImg")
        	{
        		// 체크 해야됨..
        		var nAtchFile 	= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition,"ATCH_FILE_GUID");
        		if(this.gfn_isNull(nAtchFile))
        		{
        			return;
        		}
        	}

        	var nCnt = this.ds_eqpClassMain.rowcount;
        	if(nCnt == 0)
        	{
        		return;
        	}

        	var nEqpId	= this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition,"EQUIPMENTID");
        	if(this.gfn_isNull(nEqpId))
        	{
        		return;
        	}

        	// 허용 파일 확장자
        	// Filter = "Image Files (*.bmp, *.jpg, *.jpeg, *.png)|*.BMP;*.JPG;*.JPEG;*.PNG",

        	//var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;
        	var nRow = this.ds_eqpClassMain.rowcount == 1 ? 0 : this.ds_eqpClassMain.rowposition;
        	var srcKey = "";
        	if(nRow >= 0 ) {//bind:DEFECTCODE
        		srcKey = this.ds_eqpClassMain.getColumn(nRow, "EQUIPMENTID")
        			   ;
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var jobSysCd 		= "BAS"; 					//업무구분코드 CMD,BAS....
        	var subDir 			= "BAS"; 					//세부업무약어
        	var resouceid 		= srcKey;					//테이블의 키 값
        	var resourcetype 	= "BAS_EQUIPMENT"; 			//테이블명
        	var comments 		= "설비(사진)"; 			//파일설명
        	var fileCnt 		= '1'; 						//업로드수
        	//var fileExts 		= [".BMP", ".JPG", ".JPEG", ".PNG"];	//허용 파일 확장자    // (21.07.19) 오류   일단 주석으로 막음
        	/*
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt
        				,ds_file:this.ds_file
        				};
        	this.gfn_openPopup("file_upload","pcm::PCM01500P.xfdl",oArg,"");
        	*/
        	var oArg = {
        		arg_jobSysCd 	: jobSysCd,
        		arg_atchSrcKey 	: resouceid,
        		arg_tableName 	: resourcetype,
        		arg_desc 		: comments,
        		arg_subDir 		: fileCnt,
        		arg_fileCnt 	: fileCnt
        		//, arg_fileExts	: fileExts
        	};
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");		// 실장님화면

        };

        /*
         * 엑셀 업로드 설비단
         */
        this.div_work_btn_xlUp_onclick_eqp = function(obj,e)
        {
        	/*
        	if(this.gfn_dsIsUpdated(this.ds_eqpMain))
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false) return;
        	}
        	*/

        	// 설비가 등록 상태가 아닌 경우만 추가 가능(21.07.27) 추가[MSG]  -- 작업 진행중
        	var nPos = this.ds_eqpClassMain.rowposition;
        	var nRowType = this.ds_eqpClassMain.getRowType(nPos);
        	if(nRowType == Dataset.ROWTYPE_INSERT)
        	{
        		this.gfn_Message("CHECKEQPIDINFO", null, "warning", "ok");
        		// CHECKEQPIDINFO   / 선택된 설비ID가 신규 생성된 설비ID 입니다. 설비 저장 후 진행하세요.
        		return;
        	}


        	this.gfn_import_excel("ds_eqpMainExcel", "fn_excel_eqp_success", "fn_excel_fail", "B1", "B2");
        };
        /*
         * 엑셀 업로드 설비
         */
        this.div_work_btn_xlUp_onclick_eqpClass = function(obj,e)
        {
        	/*
        	if(this.gfn_dsIsUpdated(this.ds_eqpClassMain))
        	{
        		var bRtn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(bRtn == false) return;
        	}
        	*/
        	this.gfn_import_excel("ds_eqpClassMainExcel", "fn_excel_eqpClass_success", "fn_excel_fail", "B1", "B2");
        };
        /************************************************************************
         * 엑셀 업로드 설정
         *************************************************************************/
        /*
         *	엑셀 업로드 실패 시 (설비단)
         */
        this.fn_excel_fail = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        };

        /*
         *	엑셀 업로드 이후...(설비단)
         */
        this.fn_excel_eqp_success = function ()
        {
        	var nRow = 0, objName, objCode;
        	var dsObj 		= this.ds_eqpMain;
        	var dsObjExcel 	= this.ds_eqpMainExcel;

        	if(dsObjExcel.rowcount > 0 ) {
        		var nMainEqpId = this.ds_eqpClassMain.getColumn(this.ds_eqpClassMain.rowposition,"EQUIPMENTID");
        		// 상단 설비 ID 없는 경우 생성 안됨.
        		if(this.gfn_isNull(nMainEqpId))
        		{
        			return;
        		}
        		for(var i = 0; i < dsObjExcel.rowcount; i++) {

        			objName = dsObjExcel.getColumn(i, "PARENTEQUIPMENTID");
        			if(this.gfn_isNull(objName))
        			{
        				objName = nMainEqpId;
        			}
        			var nSt	= objName.length;
        			if(nSt == 0)
        			{
        				return;
        			}

        			// (21.07.27) 설비의 설비id랑 설비단 엑셀의 설비id랑 다르면 안됨
        			if(objName != nMainEqpId)
        			{
        				return;
        			}

        			objName = dsObjExcel.getColumn(i, "EQUIPMENTID");
        			if(this.gfn_isNull(objName))
        			{
        				return
        			}

        			// (21.07.27) 설비단의 설비id랑 설비단의 설비단id 앞자리가 다르면 안됨
        			var nSubEqpId = objName.substr(0,7);
        			if(nMainEqpId != nSubEqpId)
        			{
        				return;
        			}

        			var addRow = dsObj.addRow();;		// 신규 ROW 생성
        			dsObj.setColumn(addRow, "PARENTEQUIPMENTID", 	objName);
        			dsObj.setColumn(addRow, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        			dsObj.setColumn(addRow, "PLANTID", 				this.gf_getSiteType());
        			dsObj.setColumn(addRow, "DETAILEQUIPMENTTYPE", 		"Sub");
        			dsObj.setColumn(addRow, "VALIDSTATE", 				"Valid");
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTID");
        			var nEqpClassId  =  objName.substring(nSt, objName.length);
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSID", 		nEqpClassId);
        			dsObj.setColumn(addRow, "EQUIPMENTID", 				objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_KO_KR");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_KO_KR", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_EN_US");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_EN_US", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_ZH_CN");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_ZH_CN", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_VI_VN");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_VI_VN", 		objName);

        		}
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}
        }

        /*
         *	엑셀 업로드 이후...(설비)
         */
        this.fn_excel_eqpClass_success = function ()
        {
        	var nRow = 0, objName, objCode;
        	var dsObj 		= this.ds_eqpClassMain;
        	var dsObjExcel 	= this.ds_eqpClassMainExcel;

        	this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.set_enableevent(false);
        	this.ds_eqpClassMain.set_enableevent(false);

        	if(dsObjExcel.rowcount > 0 ) {

        		var nTreeId = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition,"ID");
        		var nTreeNm = this.ds_eqpClassTree.getColumn(this.ds_eqpClassTree.rowposition,"NAME");
        		for(var i = 0; i < dsObjExcel.rowcount; i++) {

        			// (21.07.27) 설비 ID 엑셀로 생성시 확인
        			/*
        			// 설비 ID 생성시 확인
        			var eqpId = dsObjExcel.getColumn(i, "EQUIPMENTID");
        			// 구분자 C,Separator,,Y,N
        			var objSeparatorNm = dsObjExcel.getColumn(i, "SEPARATOR");
        			var nRowSeparator = this.ds_CSeparator.findRow("MEANING2", objSeparatorNm);
        			var objSeparatorCode = nRowSeparator == -1 ? "" : this.ds_CSeparator.getColumn(nRowSeparator, "LOOKUP_CODE");
        			// 설비그룹ID
        			var objEqpClass = dsObjExcel.getColumn(i, "EQUIPMENTCLASSID");
        			trace(" [eqpId] : "+eqpId+" [objSeparatorCode] : "+objSeparatorCode+" [objEqpClass] : "+objEqpClass);
        			*/


        			var addRow = dsObj.addRow();;		// 신규 ROW 생성.

        			dsObj.setColumn(addRow, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        			dsObj.setColumn(addRow, "PLANTID", 				this.gf_getSiteType());
        			dsObj.setColumn(addRow, "DETAILEQUIPMENTTYPE", 	"Main");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSID", 	nTreeId);
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSNAME", 	nTreeNm);

        			// 설비타입 C,EquipmentType,,Y,Y
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTTYPE");
        			nRow = this.ds_CEquipmentTypeALL.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CEquipmentTypeALL.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "EQUIPMENTTYPE", objCode);

        			// 구분자 C,Separator,,Y,N
        			objName = dsObjExcel.getColumn(i, "SEPARATOR");
        			nRow = this.ds_CSeparator.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CSeparator.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "SEPARATOR", objCode);

        			// 설비id도 추가 (21.07.27)
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTID");
        			dsObj.setColumn(addRow, "EQUIPMENTID", 		objName);


        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_KO_KR");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_KO_KR", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_EN_US");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_EN_US", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_ZH_CN");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_ZH_CN", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNAME_VI_VN");
        			dsObj.setColumn(addRow, "EQUIPMENTNAME_VI_VN", 		objName);

        			objName = dsObjExcel.getColumn(i, "EQUIPMENTNUM");
        			objName = nexacro.isNumeric(objName)  ? objName : "";			// 숫자
        			dsObj.setColumn(addRow, "EQUIPMENTNUM", 			objName);

        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSID");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSID", 		objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCLASSNAME");
        			dsObj.setColumn(addRow, "EQUIPMENTCLASSNAME", 		objName);
        			objName = dsObjExcel.getColumn(i, "AREAID");
        			dsObj.setColumn(addRow, "AREAID", 					objName);
        			objName = dsObjExcel.getColumn(i, "AREANAME");
        			dsObj.setColumn(addRow, "AREANAME", 				objName);
        			objName = dsObjExcel.getColumn(i, "MODEL");
        			dsObj.setColumn(addRow, "MODEL", 					objName);
        			objName = dsObjExcel.getColumn(i, "SERIALNO");
        			dsObj.setColumn(addRow, "SERIALNO", 				objName);


        			// 설비제어모드   C,ControlMode,,Y,Y
        			objName = dsObjExcel.getColumn(i, "CONTROLMODE");
        			nRow = this.ds_CControlMode.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CControlMode.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "CONTROLMODE", objCode);

        			// nexacro.isNumeric(nT)

        			objName = dsObjExcel.getColumn(i, "MINCAPACITY");
        			objName = nexacro.isNumeric(objName)  ? objName : "";
        			dsObj.setColumn(addRow, "MINCAPACITY", 				objName);

        			objName = dsObjExcel.getColumn(i, "MAXCAPACITY");
        			objName = nexacro.isNumeric(objName)  ? objName : "";
        			dsObj.setColumn(addRow, "MAXCAPACITY", 				objName);

        			objName = dsObjExcel.getColumn(i, "TACTTIME");
        			objName = nexacro.isNumeric(objName)  ? objName : "";
        			dsObj.setColumn(addRow, "TACTTIME", 				objName);

        			objName = dsObjExcel.getColumn(i, "LEADTIME");
        			objName = nexacro.isNumeric(objName)  ? objName : "";
        			dsObj.setColumn(addRow, "LEADTIME", 				objName);


        			// 상태
        			objName = dsObjExcel.getColumn(i, "STATE");
        			nRow = this.ds_eqpStateCombo.findRow("STATEID", objName);
        			objCode = nRow == -1 ? "" : this.ds_eqpStateCombo.getColumn(nRow, "STATEID");
        			dsObj.setColumn(addRow, "STATE", objCode);

        			// 관리상태   C,EquipmentState,,Y,Y
        			objName = dsObjExcel.getColumn(i, "MANAGEMENTSTATE");
        			nRow = this.ds_CEquipmentState.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CEquipmentState.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "MANAGEMENTSTATE", objCode);

        			objName = dsObjExcel.getColumn(i, "DESCRIPTION");
        			dsObj.setColumn(addRow, "DESCRIPTION", 				objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCHARACTERISTICS");
        			dsObj.setColumn(addRow, "EQUIPMENTCHARACTERISTICS", 				objName);
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTCHARACTERISTICSNAME");
        			dsObj.setColumn(addRow, "EQUIPMENTCHARACTERISTICSNAME", 			objName);

        			// 연속작업여부   C,YesNo,,Y,Y
        			objName = dsObjExcel.getColumn(i, "ISCONTINUOUSWORK");
        			nRow = this.ds_CYesNo.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CYesNo.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "ISCONTINUOUSWORK", objCode);

        			objName = dsObjExcel.getColumn(i, "PROCESSSEGMENTCLASSID");
        			dsObj.setColumn(addRow, "PROCESSSEGMENTCLASSID", 				objName);
        			objName = dsObjExcel.getColumn(i, "PROCESSSEGMENTCLASSNAME");
        			dsObj.setColumn(addRow, "PROCESSSEGMENTCLASSNAME", 				objName);

        			// 구입구분   C,PurchaseType,,Y,Y
        			objName = dsObjExcel.getColumn(i, "PURCHASETYPE");
        			nRow = this.ds_CPurchaseType.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CPurchaseType.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "PURCHASETYPE", objCode);

        			// 생상구분  C,ProductionType,,Y,Y
        			objName = dsObjExcel.getColumn(i, "PRODUCTIONTYPE");
        			nRow = this.ds_CProductionType.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CProductionType.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "PRODUCTIONTYPE", objCode);

        			// 설비등급   C,EquipmentLevel,,Y,Y
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTLEVEL");
        			nRow = this.ds_CEquipmentLevel.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CEquipmentLevel.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "EQUIPMENTLEVEL", objCode);

        			objName = dsObjExcel.getColumn(i, "PURCHASECOST");
        			dsObj.setColumn(addRow, "PURCHASECOST", 					objName);
        			objName = dsObjExcel.getColumn(i, "MANUFACTUREDDATE");
        			dsObj.setColumn(addRow, "MANUFACTUREDDATE", 				objName);
        			objName = dsObjExcel.getColumn(i, "INSTALLATIONDATE");
        			dsObj.setColumn(addRow, "INSTALLATIONDATE", 				objName);
        			objName = dsObjExcel.getColumn(i, "MANUFACTURECOUNTRY");
        			dsObj.setColumn(addRow, "MANUFACTURECOUNTRY", 				objName);
        			objName = dsObjExcel.getColumn(i, "MANUFACTURER");
        			dsObj.setColumn(addRow, "MANUFACTURER", 					objName);
        			objName = dsObjExcel.getColumn(i, "VENDORID");
        			dsObj.setColumn(addRow, "VENDORID", 						objName);
        			objName = dsObjExcel.getColumn(i, "VENDORNAME");
        			dsObj.setColumn(addRow, "VENDORNAME", 						objName);
        			objName = dsObjExcel.getColumn(i, "TELNO");
        			dsObj.setColumn(addRow, "TELNO", 							objName);


        			// KPI집계여부  C,YesNo,,Y,Y
        			objName = dsObjExcel.getColumn(i, "ISKPI");
        			nRow = this.ds_CYesNo.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CYesNo.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "ISKPI", objCode);

        			// CAPA반영여부  C,YesNo,,Y,Y
        			objName = dsObjExcel.getColumn(i, "ISCAPA");
        			nRow = this.ds_CYesNo.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "" : this.ds_CYesNo.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "ISCAPA", objCode);

        			objName = dsObjExcel.getColumn(i, "MEASUREDATAFORMAT");
        			dsObj.setColumn(addRow, "MEASUREDATAFORMAT", 							objName);

        			// VRS결과저장폴더명(21.07.19)
        			objName = dsObjExcel.getColumn(i, "EQUIPMENTFOLDER");
        			dsObj.setColumn(addRow, "EQUIPMENTFOLDER", 								objName);

        			// 유효상태   C,ValidState,,Y,Y
        			objName = dsObjExcel.getColumn(i, "VALIDSTATE");
        			nRow = this.ds_CValidState.findRow("MEANING2", objName);
        			objCode = nRow == -1 ? "Valid" : this.ds_CValidState.getColumn(nRow, "LOOKUP_CODE");
        			dsObj.setColumn(addRow, "VALIDSTATE", objCode);

        		}
        		this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.set_enableevent(true);
        		this.ds_eqpClassMain.set_enableevent(true);
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        		this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.set_enableevent(true);
        		this.ds_eqpClassMain.set_enableevent(true);
        	}
        }




        /*
         * 필터 작업장 추가 (21.07.19)
         */
        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	// [품질관리] > [공정품질] > [자주검사 결과조회] 필터 작업장 팝업 참조 P00228

        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"		, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"			, this.gf_getSiteType());
        	sArgs += this.gfn_setParam("LANGUAGETYPE"		, this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("VALIDSTATE"			, "Valid");

        	// 작업장 공통팝업 호출
        	this.fn_openPop("SRCH_AREA228","P00228", sArgs); //작업장 조회

        };

        /*
         * 필터 작업장명 값 변동시 (21.07.19)
         */
        this.tab_search_Tabpage1_edt_areaNm_canchange = function(obj,e)
        {
        	this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tabpage1.form.edt_area_id.set_value("");
        };

        /*
         * 작업장 엔터키 (21.07.19)
         */
        this.tab_search_Tabpage1_edt_areaNm_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_areaNm.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.tab_search.Tabpage1.form.edt_areaNm.addEventHandler("canchange",this.tab_search_Tabpage1_edt_areaNm_canchange,this);
            this.tab_search.Tabpage1.form.edt_areaNm.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_areaNm_onkeydown,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_del_ds_eqpClass.addEventHandler("onclick",this.fn_eqpClassDelete,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_add_ds_eqpClass.addEventHandler("onclick",this.fn_eqpClassAdd,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_copyRow.addEventHandler("onclick",this.fn_eqpClassCopy,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_xlUpCustom_grd_equipmentClass.addEventHandler("onclick",this.div_work_btn_xlUp_onclick_eqpClass,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.form.edt_treeSearch.addEventHandler("onkeydown",this.div_work_tab_work_tabpage_eqpReg_div_00_edt_treeSearch_onkeydown,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.div_00.form.btn_treeSearch.addEventHandler("onclick",this.div_work_tab_work_tabpage_eqpReg_div_00_btn_treeSearch_onclick,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipment.addEventHandler("onexpandup",this.div_work_tab_work_tabpage_eqpReg_grd_equipment_onexpandup,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.grd_equipmentClass.addEventHandler("onexpandup",this.div_work_tab_work_tabpage_eqpReg_grd_equipmentClass_onexpandup,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_xlUpCustom_grd_equipment.addEventHandler("onclick",this.div_work_btn_xlUp_onclick_eqp,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_del_ds_eqp.addEventHandler("onclick",this.fn_eqpDelete,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_copyRowEqpMain.addEventHandler("onclick",this.fn_eqpCopy,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_add_ds_eqp.addEventHandler("onclick",this.fn_eqpAdd,this);
            this.div_work.form.tab_work.tabpage_eqpReg.form.btn_addImg.addEventHandler("onclick",this.fn_file,this);
            this.div_header.form.btn_saveMain.addEventHandler("onclick",this.fn_saveMain,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.grd_equipmentExcel.addEventHandler("onexpandup",this.div_work_tab_work_tabpage_eqpReg_grd_equipment_onexpandup,this);
            this.grd_equipmentClassExcel.addEventHandler("onexpandup",this.div_work_tab_work_tabpage_eqpReg_grd_equipmentClass_onexpandup,this);
            this.ds_eqpClassTree.addEventHandler("onrowposchanged",this.ds_eqpClassTree_onrowposchanged,this);
            this.ds_eqpClassMain.addEventHandler("onrowposchanged",this.ds_eqpClassMain_onrowposchanged,this);
            this.ds_eqpClassMain.addEventHandler("oncolumnchanged",this.ds_eqpClassMain_oncolumnchanged,this);
            this.ds_eqpClassMainExcel.addEventHandler("onrowposchanged",this.ds_eqpClassMain_onrowposchanged,this);
            this.ds_eqpClassMainExcel.addEventHandler("oncolumnchanged",this.ds_eqpClassMain_oncolumnchanged,this);
        };
        this.loadIncludeScript("BAS05100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
