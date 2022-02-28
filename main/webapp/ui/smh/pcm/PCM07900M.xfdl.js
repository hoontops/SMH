(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07900M");
            this.set_titletext("포장실적등록(3블록)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1647,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CARDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"REV\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"LOTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUTERYN\" type=\"STRING\" size=\"256\"/><Column id=\"BARCODENO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCOMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFI_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_line", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGDTLID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKLINE\" type=\"STRING\" size=\"256\"/><Column id=\"BOXLINENO\" type=\"STRING\" size=\"256\"/><Column id=\"BOXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"X_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"CARD\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"BARCODENO\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_invoice", this);
            obj._setContents("<ColumnInfo><Column id=\"PONo\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"양품수량\" type=\"STRING\" size=\"256\"/><Column id=\"출고일자\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"LOT\" type=\"STRING\" size=\"256\"/><Column id=\"Attribute1\" type=\"STRING\" size=\"256\"/><Column id=\"Attribute2\" type=\"STRING\" size=\"256\"/><Column id=\"Attribute3\" type=\"STRING\" size=\"256\"/><Column id=\"Attribute4\" type=\"STRING\" size=\"256\"/><Column id=\"Attribute5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PONo\">4500802401</Col><Col id=\"순번\">10</Col><Col id=\"양품수량\">2,600 </Col><Col id=\"DC\">IK515</Col><Col id=\"출고일자\">2020-06-18</Col><Col id=\"LOT\">40018045-0101-FG00000-001-1-S/40018045-0101-FG00000-004-1-S</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNOTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"BARCODENO\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"DNOTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ProcessState\" type=\"STRING\" size=\"256\"/><Column id=\"CMB_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboPlant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_btnInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODFUNCSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SRCNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_headInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"BOXLINENO\" type=\"STRING\" size=\"256\"/><Column id=\"LOTONLY\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_FL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboPlantGrid", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainDno", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainBox", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CARDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"REV\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"LOTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"BARCODENO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCOMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUTERYN\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFI_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainQty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CARDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"REV\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"LOTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPUTERYN\" type=\"STRING\" size=\"256\"/><Column id=\"BARCODENO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCOMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFI_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_labelPrint", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGDTLID\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defaultUserPlant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inpXoutSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"P_INSPECT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainInpXout", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"X_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"CARD\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"PCSARY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xoutPackInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCOMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREVUSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xoutLotChk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Static("sta_title","30","16","159","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("포장실적등록(2블록)");
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

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","10",null,"117","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_packDate","0","10","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("17");
            obj.set_text("포장일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PACKINGDATE");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_itemNm","13.98%","35","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("18");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_custModelNm","13.98%","60","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("19");
            obj.set_text("고객모델명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTMODELNAME");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","34.65%","10","100","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("22");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("873DD90A54B04DEDA6CAD3D47CE96684");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("20");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_barcodeNo","34.65%","35","100","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("21");
            obj.set_text("Barcode No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BARCODENO");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"9","62","24","39",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_resetSearch",null,"9","24","24","10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_itemId","0","35","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("23");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_custPartNm","0","60","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("24");
            obj.set_text("고객파트명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTMODELNAME");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","sta_packDate:10","10","6.69%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","cal_dateFrom:0","10","17","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","sta_00:0","10","6.69%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_itemId",null,"35","22","20","sta_itemNm:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","sta_itemId:10","35",null,"20","btn_itemId:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_custPartNm",null,"60","22","20","sta_custModelNm:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_custPartNm","sta_custPartNm:10","60",null,"20","btn_custPartNm:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_itemNm","sta_itemNm:10","35",null,"20","sta_barcodeNo:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_text("AMB638RD01 DIGITIZER(2L)-IFV직납");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dateCode","34.65%","60","100","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("26");
            obj.set_text("주차");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("9BD44DF47EDD439CBDBAA6BF3C8AD690");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_custModelNm","sta_custModelNm:10","60",null,"20","sta_dateCode:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("CAPE RF CAMERA");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_sendSite","57.93%","10","88","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("27");
            obj.set_text("출고지");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SENDSITE");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","sta_lotNo:10","10",null,"20","sta_sendSite:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("8");
            obj.set_text("40018823-0101-FG00000-009-1-S");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_invNo","57.81%","60","88","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("34");
            obj.set_text("Inv No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INVNO");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_btn","74.53%","8",null,"101","104",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("32");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_pack05",null,"2","86","20","10",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("0");
            obj.set_text("외부라벨 인쇄");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack05");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack06",null,"27","86","20","10",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("1");
            obj.set_text("내부라벨 인쇄");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack06");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack07",null,"52","86","20","10",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("2");
            obj.set_text("출고집계");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack07");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack08",null,"77","86","20","10",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("3");
            obj.set_text("QR출력");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack08");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack09",null,"2","90","20","104",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("4");
            obj.set_text("송화단출력");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("PackingBnt_pack09");
            obj.set_fittocontents("none");
            obj.set_enable("true");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack10",null,"27","90","20","104",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("5");
            obj.set_text("EXPORT1");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("PackingBnt_pack10");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack11",null,"52","90","20","104",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("6");
            obj.set_text("EXPORT2");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("PackingBnt_pack11");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack04",null,"77","90","20","104",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("7");
            obj.set_text("ASN 일괄 등록");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack04");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Edit("edt_pack04","10","77",null,"20","200",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("8");
            obj.set_text("751-106983-200210-001");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack03",null,"52","90","20","200",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("9");
            obj.set_text("인보이스 등록");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("INVREGISTER2");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack02",null,"27","90","20","200",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("10");
            obj.set_text("D No 취소");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack02");
            obj.set_fittocontents("none");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Button("btn_pack01",null,"2","90","20","200",null,null,null,null,null,this.div_work.form.div_search.form.div_btn.form);
            obj.set_taborder("11");
            obj.set_text("D No 생성");
            obj.set_cssclass("btn_WF_black");
            obj.set_tooltiptext("pack01");
            obj.set_fittocontents("none");
            obj.set_enable("true");
            this.div_work.form.div_search.form.div_btn.addChild(obj.name, obj);

            obj = new Combo("cbo_invNo","67.23%","60",null,"20","div_btn:20",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,write,ALL,Y,Y");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_invNo","sta_invNo:11","60",null,"20","cbo_invNo:2",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("210125S-BI-31");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_type","57.87%","35","88","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("29");
            obj.set_text("TYPE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("701B101FEBC14B9A87C8DB77D7F23880");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_barcodeNo","sta_barcodeNo:10","35",null,"20","sta_type:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("9");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dNo","47.29%","85","5.84%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,write,ALL,Y,Y");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dateCode","sta_dateCode:10","60",null,"20","cbo_dNo:2",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("10");
            obj.set_text("2101");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dNo","34.65%","85","100","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("28");
            obj.set_text("D No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DNO");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_sendSite","sta_sendSite:10","10",null,"20","div_btn:20",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dNo","sta_dNo:10","85",null,"20","cbo_dNo:2",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("11");
            obj.set_text("210125-1");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_type","sta_type:11","35",null,"20","div_btn:20",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,Y");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_comp","0","85","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("33");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_boxNo","13.93%","85","110","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("37");
            obj.set_text("Box No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BOXNO");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_comp",null,"85","22","20","sta_boxNo:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_comp","sta_comp:10","85",null,"20","btn_comp:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("35");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new CheckBox("ckb_boxNo","29.42%","83",null,"24","sta_dNo:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("39");
            obj.set_tooltiptext("DUPLICATEYN");
            obj.set_text("중복여부");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_boxNo","sta_boxNo:10","85",null,"20","ckb_boxNo:10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("38");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_mainTitle","0","127","38","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("메인");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MAIN");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_invoice","60%","66.00%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_invoice");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PO No\" tooltiptext=\"PONO\"/><Cell col=\"1\" text=\"순번\" tooltiptext=\"MAINTSEQUENCE\"/><Cell col=\"2\" text=\"양품 수량\" tooltiptext=\"GOODQTY\"/><Cell col=\"3\" text=\"출고일\" tooltiptext=\"RECEIPTDATEISSUE\"/><Cell col=\"4\" text=\"D/C\" tooltiptext=\"DC\"/><Cell col=\"5\" text=\"LOT\" tooltiptext=\"LOT\"/><Cell col=\"6\" text=\"Attribute1\"/><Cell col=\"7\" text=\"Attribute2\"/><Cell col=\"8\" text=\"Attribute3\"/><Cell col=\"9\" text=\"Attribute4\"/><Cell col=\"10\" text=\"Attribute5\"/></Band><Band id=\"body\"><Cell text=\"bind:PONo\"/><Cell col=\"1\" text=\"bind:순번\"/><Cell col=\"2\" text=\"bind:양품수량\"/><Cell col=\"3\" text=\"bind:출고일자\"/><Cell col=\"4\" text=\"bind:DC\"/><Cell col=\"5\" text=\"bind:LOT\"/><Cell col=\"6\" text=\"bind:Attribute1\"/><Cell col=\"7\" text=\"bind:Attribute2\"/><Cell col=\"8\" text=\"bind:Attribute3\"/><Cell col=\"9\" text=\"bind:Attribute4\"/><Cell col=\"10\" text=\"bind:Attribute5\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lot","36%","66%",null,null,"grd_invoice:10","26",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_lot");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"LOT\" tooltiptext=\"LOT\"/><Cell col=\"1\" text=\"수량\" tooltiptext=\"Quantity\"/><Cell col=\"2\" text=\"주차\" tooltiptext=\"WEEK\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:LOT\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:QUANTITY\" displaytype=\"normal\" textAlign=\"right\" maskeditformat=\"!#,##9\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:LOTWEEK\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" text=\"expr:dataset.getSum(&quot;parseFloat(QUANTITY)&quot;)\" displaytype=\"number\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_line","0","66.00%",null,null,"grd_lot:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_line");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"내부 BOX NO\" tooltiptext=\"INBOXNO\"/><Cell col=\"3\" text=\"Pack Line\" tooltiptext=\"PACKLINE\"/><Cell col=\"4\" text=\"D/C\" tooltiptext=\"DC\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"X_OUT\" tooltiptext=\"D8591E17C04749FA951030E643CF56C8\"/><Cell col=\"6\" text=\"Card\" tooltiptext=\"CARD\"/><Cell col=\"7\" text=\"양품수\" tooltiptext=\"PRICENORMALQTY\"/><Cell col=\"8\" text=\"불량수\" cssclass=\"cell_end\" tooltiptext=\"PCSDEFECTQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:BOXLINENO\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:PACKLINE\" displaytype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;PACKNO&apos;) ? &apos;editcontrol&apos;: &apos;normal&apos;\" textAlign=\"center\" edittype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;PACKNO&apos;) ? &apos;normal&apos;: &apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DC\" displaytype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;DC&apos;) ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;DC&apos;) ? &apos;normal&apos;: &apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:X_OUT\" displaytype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;SUM&apos;) ? &apos;maskeditcontrol&apos;: &apos;normal&apos;\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;SUM&apos;) ? &apos;mask&apos;: &apos;none&apos;\" maskeditformat=\"!#,##9\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:CARD\" displaytype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;SUM&apos;) ? &apos;maskeditcontrol&apos;: &apos;normal&apos;\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;SUM&apos;) ? &apos;mask&apos;: &apos;none&apos;\" maskeditformat=\"!#,##9\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:GOODQTY\" displaytype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;SUM&apos;,&apos;Y&apos;) ? &apos;number&apos;: &apos;maskeditcontrol&apos; \" textAlign=\"right\" maskeditformat=\"!#,##9\" edittype=\"expr:comp.parent.parent.parent.fn_setLineEdit(&apos;SUM&apos;,&apos;Y&apos;) ? &apos;none&apos;: &apos;mask&apos;\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:DEFECTQTY\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"#,##9\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" tooltiptext=\"SUM\" textAlign=\"center\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;parseFloat(X_OUT)&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseFloat(CARD)&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(GOODQTY)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTQTY)&quot;)\"/><Cell row=\"1\" colspan=\"2\" text=\"Pack\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"expr:dataset.rowcount\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\" text=\"expr:dataset.rowcount\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","161",null,null,"0","grd_line:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"SITE\" tooltiptext=\"1493039772944A708CF4F968BF7D80E7\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"BOX NO\" tooltiptext=\"DFBFFFCCD8044DB6A6467EC593337A2F\"/><Cell col=\"4\" text=\"고객사\" tooltiptext=\"F993645129314EB2A2423955D6AB814C\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"고객모델명\" tooltiptext=\"CUSTMODELNAME\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"고객PN\" tooltiptext=\"CUSTOMERPN\"/><Cell col=\"7\" text=\"자사품목코드\" tooltiptext=\"DirectItemCode\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"포장일자\" tooltiptext=\"PACKINGDATE\" cssclass=\"cell_point\"/><Cell col=\"9\" text=\"양품 수량\" tooltiptext=\"GOODQTY\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"불량수량\" tooltiptext=\"DEFECTCOUNT\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"카드수량\" tooltiptext=\"CARDCOUNT\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"포장작업자\" tooltiptext=\"YPEEquipmentClassP96\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"포장검사자\" tooltiptext=\"PACKINSPECTOR\"/><Cell col=\"14\" text=\"Pack No\" tooltiptext=\"PACKNO\"/><Cell col=\"15\" text=\"D/C\" tooltiptext=\"DC\" cssclass=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;DC&apos;) == 1 ? &apos;cell_point&apos;: &apos;&apos;\"/><Cell col=\"16\" text=\"PO NO\" tooltiptext=\"PONO\"/><Cell col=\"17\" text=\"REV\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"18\" text=\"DNO\" tooltiptext=\"DNO\"/><Cell col=\"19\" text=\"INV NO\" tooltiptext=\"INVNO\"/><Cell col=\"20\" text=\"ASN\" tooltiptext=\"ASN\"/><Cell col=\"21\" text=\"비고\" tooltiptext=\"REMARK\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:SITE\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;combocontrol&quot;:&quot;combotext&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;combo&quot;:&quot;none&quot;\" textAlign=\"left\" combocodecol=\"PLANTID\" combodataset=\"ds_cboPlantGrid\" combodatacol=\"PLANTNAME\"/><Cell col=\"3\" text=\"bind:BOXNO\"/><Cell col=\"4\" text=\"bind:COMP_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUSTOMERMODELNM\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow)==&quot;2&quot;?(comp.parent.parent.parent.fn_chkSample(currow) ? &apos;hide&apos;: &apos;show&apos;):&quot;hide&quot;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" displaytype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;normal&apos;: &apos;none&apos;\" expandsize=\"24\"/><Cell col=\"6\" text=\"bind:CUSTOMERPN\" displaytype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;normal&apos;: &apos;none&apos;\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNM\" displaytype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;normal&apos;: &apos;none&apos;\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PACK_DATE\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;calendarcontrol&quot;:&quot;date&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;date&quot;:&quot;none&quot;\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:GOODQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:CARDQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:PACKING_NAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;show&quot;:&quot;hide&quot;\"/><Cell col=\"13\" text=\"bind:INPNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;show&quot;: (comp.parent.parent.parent.fn_chkInvNo(&apos;INPNAME&apos;, currow) ? &quot;show&quot; : &quot;hide&quot;)\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:PACKNO\" edittype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;PACKNO&apos;, currow) == 1 ? &apos;normal&apos; : &apos;none&apos;\" displaytype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;PACKNO&apos;, currow) == 1 ? &apos;editcontrol&apos;: &apos;normal&apos;\"/><Cell col=\"15\" text=\"bind:DC\" displaytype=\"expr:comp.parent.parent.parent.fn_chkInvNo(&apos;DC&apos;,currow) ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkInvNo(&apos;DC&apos;,currow) ? &apos;normal&apos;: &apos;none&apos;\"/><Cell col=\"16\" text=\"bind:PONO\" displaytype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;PONO&apos;, currow) == 1 ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;PONO&apos;, currow) == 1 ? &apos;normal&apos; : &apos;none&apos;\"/><Cell col=\"17\" text=\"bind:REV\" displaytype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkSample(currow) &amp;&amp; dataset.getRowType(currow)==&quot;2&quot; ? &apos;normal&apos;: &apos;none&apos;\"/><Cell col=\"18\" text=\"bind:DNO\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"19\" text=\"bind:INVNO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:ASN\" displaytype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;ASN&apos;, currow) == 1 ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;ASN&apos;, currow) == 1 ? &apos;normal&apos; : &apos;none&apos;\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:REMARK\" displaytype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;REMARK&apos;, currow) == 1 ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.parent.parent.fn_chkGridActivated(&apos;REMARK&apos;, currow) == 1 ? &apos;normal&apos; : &apos;none&apos;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_lineTitle","0","grd_main:0","40","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("LINE");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LINE");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_lineSummary","sta_lineTitle:10","grd_main:7","49","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("합수");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SUMMARY");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_lotTitle","36%","grd_main:0","70","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_line",null,"grd_main:3","26","24","sta_lotTitle:10",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_line",null,"grd_main:3","26","24","btn_del_ds_line:3",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_boxLIneNoCancel",null,"grd_main:3","100","24","btn_add_ds_line:3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("In Box No 취소");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_boxLIneNoCreate",null,"grd_main:3","100","24","btn_boxLIneNoCancel:3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("In Box No 생성");
            obj.set_tooltiptext("boxLIneNoCreate");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_lineSummary","sta_lineSummary:10","grd_main:7",null,"20","btn_boxLIneNoCreate:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_value("0");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_invoiceTitle","60%","grd_main:0","56","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("lnvoice");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INVOICE");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_summary","sta_invoiceTitle:170","grd_main:9","39","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("합수");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SUMMARY");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_summary","sta_summary:10","grd_main:9","90","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_use","msk_summary:0","grd_main:9","39","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("8CD6983793804615A4B87B0E59AA4DA0");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_use","sta_use:10","grd_main:9","90","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_remain","msk_use:0","grd_main:9","39","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("15");
            obj.set_text("잔여");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REMAIN");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_remain","sta_remain:10","grd_main:9","90","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_main",null,"132","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_main",null,"132","26","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_lot",null,"grd_main:3","26","24","sta_invoiceTitle:10",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_lot",null,"grd_main:3","26","24","btn_del_ds_lot:3",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_lotSearch",null,"grd_main:3","62","24","btn_add_ds_lot:3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("LOT조회");
            obj.set_tooltiptext("LotSearch");
            this.div_work.addChild(obj.name, obj);

            obj = new CheckBox("ckb_lotInput",null,"grd_main:3","89","24","btn_lotSearch:3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("22");
            obj.set_text("무전산");
            obj.set_tooltiptext("NonComputerized");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_chkGoodQty","6.13%","134","112","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("25");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPDIFFMONTHSUM");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_chkGoodQty","sta_chkGoodQty:10","134","100","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_inspectNum","msk_chkGoodQty:10","134","110","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("30");
            obj.set_text("검사번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INSPECTIONNUM");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_inspectNum","sta_inspectNum:10","134","150","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("29");
            obj.set_visible("true");
            obj.set_autoselect("true");
            obj.set_text("210125-1");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_inspNoPopup","edt_inspectNum:5","132","90","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_black");
            obj.set_tabstop("true");
            obj.set_tooltiptext("INSPECTIONNUMSEARCH");
            obj.set_text("검사번호 찾기");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1647,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.msk_lineSummary","value","ds_main","SUMPCS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.ckb_lotInput","value","ds_main","COMPUTERYN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM07900M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM07900M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM07900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장실적등록(3블럭)
         * 파일명 		: PCM07900M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.03.26
         *
         * 설  명		:  포장 실적을 등록 합니다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.26	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        //// 포장수량이 LOT수량을 초과할 수 없습니다.  OverPackingQty
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.div_work.form.div_search.form;   // 상단 조회 조건

        this.f_custId = "";			// 고객사 id

        // 수량변경후 Main row 변경시 이전값으로 설정(미사용)
        this.v_preGoodQty 	= "";
        this.v_preDefectQty = "";
        this.v_preCardQty 	= "";

        this.v_printValue	= "";		// 프린트 후 창 닫을때 값 확인(클릭한 버튼명) 21.04.15


        this.v_defaultPlant	= "";		// (21.06.05) 사용자의 기본 사이트 정보

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	this.resetScroll();
        	// 하단 그리드 부분
        	this.div_work.form.resetScroll();
        	// 상단 검색조건 부분 (버튼은 어쩔 수 없음)
        	this.div_work.form.div_search.form.resetScroll();

        	// 오늘 날짜 설정(상단 조회 조건)
        	this.searchDiv.cal_dateFrom.set_value(this.gfn_today()); //오늘일자 (From)
        	this.searchDiv.cal_dateTo.set_value(this.gfn_today());   //오늘일자 (To)

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// x 버튼 이벤트 설정(고객사)
        	this.searchDiv.btn_edt_comp.setEventHandler( "onclick", this.fn_clickComp, this );
        	// 품목코드 x 버튼 이벤트 설정
        	this.searchDiv.btn_edt_itemId.setEventHandler( "onclick", this.fn_clickItem, this );

        	// Tab Key 입력시 행 추가 (21.04.26)
        	this.div_work.form.grd_line.addEventHandler( "onkeyup"
        							, this.fn_lineGridKeyUp
        							, this
        							);

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	// box no 입력시 해당 값만 조회(체크된 상태이면 app/ 미체크이면 신규조회)
        	var nChkV = this.searchDiv.ckb_boxNo.value;
        	if(!nChkV)
        	{
        		this.ds_main.clearData();
        		this.ds_mainBox.clearData();
        	}
        	else
        	{
        		this.ds_mainBox.clearData();
        	}
        	this.ds_search.clearData();
        	this.ds_line.clearData();
        	this.ds_lot.clearData();
        	this.ds_mainQty.clearData();
        	this.div_work.form.msk_chkGoodQty.set_value("");		// 체크값 합계 초기화

        	// Main row 변경시 이전값
        	this.v_preGoodQty 	= "";
        	this.v_preDefectQty = "";
        	this.v_preCardQty 	= "";

        	// 고객사 정보 우선 선택 하도록 설정
        	if(!this.fn_chkComp()) return;

        	// 조회 조건 설정
        	this.ds_search.addRow();

        	var nPeriodfr = this.searchDiv.cal_dateFrom.value;
        	var nPeriodto = this.searchDiv.cal_dateTo.value;

        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", nPeriodfr); // 시작일
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", nPeriodto); // 종료일
        	// 날짜체크
        	if( nPeriodfr  > nPeriodto )
        	{
        		this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        		return false;
        	}
        	// 날짜 체크
        	if(!this.gfn_isDate(nPeriodfr) || !this.gfn_isDate(nPeriodto))
        	{
        		this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        		return;
        	}

        	this.ds_search.setColumn(0, "ITEMID", this.searchDiv.edt_itemId.value); 		// 품목코드(품목명을 그냥 보여지는값)
        	this.ds_search.setColumn(0, "CUSTOMERPN", this.searchDiv.edt_custPartNm.value); 		// 고객파트명
        	this.ds_search.setColumn(0, "CUSTOMERMODELNM", this.searchDiv.edt_custModelNm.value); 	// 고객모델명
        	this.ds_search.setColumn(0, "INVNO", this.searchDiv.edt_invNo.value); 			// inv no
        	this.ds_search.setColumn(0, "INVNOTYPE", this.searchDiv.cbo_invNo.value); 		// inv no type
        	this.ds_search.setColumn(0, "LOTID", this.searchDiv.edt_lotNo.value); 			// LOTID
        	this.ds_search.setColumn(0, "BARCODENO", this.searchDiv.edt_barcodeNo.value); 	// barcodeNo
        	this.ds_search.setColumn(0, "DC", this.searchDiv.edt_dateCode.value); 			// DC
        	this.ds_search.setColumn(0, "BOXNO", this.searchDiv.edt_boxNo.value); 			// box no
        	this.ds_search.setColumn(0, "DNO", this.searchDiv.edt_dNo.value); 				// DNO
        	this.ds_search.setColumn(0, "DNOTYPE", this.searchDiv.cbo_dNo.value); 			// DNO TYPE
        	this.ds_search.setColumn(0, "PLANTID", this.searchDiv.cbo_sendSite.value); 		// site
        	this.ds_search.setColumn(0, "CUSTOMERID", this.f_custId); 						// 고객사id
        	this.ds_search.setColumn(0, "PRODTYPE", this.searchDiv.cbo_type.value); 		// type(품목)
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId()); 					// 사용자
        	this.ds_search.setColumn(0, "ProcessState", 'Wait,Run'); 						// LOT 상태
        	// 조회 (고객정보 MST 조회)실행
        	var sSvcID 			= "selectPackLabelMainList";
        	var sController 	= "/pcm07900/selectPackLabelMainList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "";
        	if(!nChkV)					// 체크 값에 따라서 조회 결과 다름.
        	{
        		sOutDatasets 	= "ds_main=output";
        	}
        	else
        	{
        		sOutDatasets 	= "ds_mainBox=output";
        	}
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	// 수정된 내용 있는지확인
           if (!this.gfn_dsIsUpdated(this.ds_main)
        	 && !this.gfn_dsIsUpdated(this.ds_lot)
        	 && !this.gfn_dsIsUpdated(this.ds_line)
        	 )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// (21.07.06) 추가 (메인 한건 조회 후 삭제 시)
        	var nMainCnt = this.ds_main.rowcount;

        	// 저장시 - Line, Lot row가 없는 경우 진행 불가(21.04.21 조건 추가)
        	var nLineCnt = this.ds_line.rowcount;
        	var nLotCnt = this.ds_lot.rowcount;

        	// (21.07.06) 추가 (메인 한건 조회 후 삭제 시)
        	if(nMainCnt != 0)
        	{
        		if(nLineCnt == 0 || nLotCnt == 0)
        		{
        			var nTitle1 = this.nfn_getDictionaryname("LINE",true);
        			var nTitle2 = this.nfn_getDictionaryname("LOT",true);
        			this.gfn_Message("CheckGridPacPreSave", nTitle1+" ,"+nTitle2, "warning", "ok");//{0}의 입력 사항을 확인하세요.
        			return;
        		}


        	// 그리드 필수체크 (상단) -> 입력 가능이 전부 필수 값은 아닐 것 같음?
        	var mst 	= this.div_work.form.grd_main;
        	var line 	= this.div_work.form.grd_line;
        	var lot 	= this.div_work.form.grd_lot;
        	// site, 고객사, 고객모델명 등록 후 수정 불가사항 들많음, DC,수량들 필수 값으로(하단 lot에 수량이 입력 되어야 저장 진행 하나라도 없으면 진행 불가)
        	var strMst = "SITE,COMP_NAME,CUSTOMERMODELNM,PRODUCTDEFNM,PACK_DATE,GOODQTY,DEFECTQTY,CARDQTY,PACKING_NAME,GOODQTY,DEFECTQTY,CARDQTY";	// ,INPNAME
        	/*
        	PRODUCTDEFID -> PRODUCTDEFNM  (변경)
        	*/
        	// 기준정보에 따라 체크 변경되 packLine
        	var strLine = "X_OUT,CARD,GOODQTY,DEFECTQTY";
        	// 합수가 1인 경우 필수값이 맞는지?	(추후 문의 해야됨.)	--> 변동될것! 합수에 따라서.(필수 입력값 체크 로직 변경 필요)

        	var nSum = this.div_work.form.msk_lineSummary.value;  // 합수가 1인 경우
        	if(nSum == '1')
        	{
        		strLine = "GOODQTY";
        	}

        	var nDc = this.ds_headInfo.getColumn(0,"DC");
        	if(!this.gfn_isNull(nDc))
        	{
        		if(nDc != 'NotInUse')				// 21.04.30 주차 미사용인 경우 있음(Sample)의 경우 저장시 미체크
        		{
        			if(nDc == 'SmallPack')
        			{
        				strLine = strLine + ",DC";
        			}
        			else
        			{
        				strMst = strMst +",DC";
        			}
        		}
        	}

        	var strLot = "LOT,QUANTITY";						// 이거 두개는 필수값 같음
        	var nChk = this.div_work.form.ckb_lotInput.value;

        	// 무전산의 경우 미입력인 경우 값 자동 채우기
        	var nLotPos = this.ds_lot.rowcount;
        	for(var z=0; z<nLotPos; z++)
        	{
        		var nLot = this.ds_lot.getColumn(z,"LOT");
        		if(this.gfn_isNull(nLot) || nLot == '0')
        		{
        			this.ds_lot.setColumn(z,"LOT","00000000-0000-0000000-000-0-0");
        		}
        	}



        	// 메인 그리드 체크
        	if(!this.nfn_MandatoryCheckGrid(mst, strMst)) return;

        	// LINE 그리드 체크
        	if(!this.nfn_MandatoryCheckGrid(line, strLine)) return;

        	// LOT 그리드 체크
        	if(!this.nfn_MandatoryCheckGrid(lot, strLot)) return;

        	// (정합성 체크 추가) 21.04.03
        	if(!this.fn_chkValid())
        	{
        		return;
        	}


        	// Line = Lot(수량 비교)
        	var nSumChk = this.fn_chkQuantity();
        	if(!nSumChk)
        	{
        		var nGoodTitle 	= "Line";
        		var nQtyTitle 	= "Lot";
        		this.gfn_Message("CheckQTY", [nGoodTitle,nQtyTitle], "error", "ok");	//{0}의 수량과 {1}의 수량이 일치하지 않습니다.
        		return;
        	}

        	// 포장 정보 (main) 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(	this.ds_main
        								, "ENTERPRISEID|SITE|COMP|CUSTOMERMODELNM|PRODUCTDEFID|BOXNO"
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.sta_mainTitle.text
        								)){ return;}

        	var nPackNo = this.ds_headInfo.getColumn(0,"PACKNO");
        	if(!this.gfn_isNull(nPackNo))
        	{
        		if(nPackNo == '1')
        		{
        			//포장 정보 (LINE) 그리드내 중복값 체크(기준정보에 따라 체크 한다 packline)
        			if(!this.fn_checkGridDup(	this.ds_line
        										, "PACKLINE"
        										, "DuplicationUserSequence|DuplicationSegmentID"
        										, this.div_work.form.sta_lineTitle.text
        										)){ return;}
        		}
        	}

        	if((nChk != 'Y'))		//무전산이 아닌 경우
        	{
        	//포장 정보 (LOT) 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(this.ds_lot
        								, "LOT"
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.sta_lotTitle.text
        								)){ return;}
        	}

        	// 저상시 수정자 추가
        	this.fn_setModifier(this.ds_main);
        	this.fn_setModifier(this.ds_line);
        	this.fn_setModifier(this.ds_lot);

        	// 저장전 Line 내부 BOX NO 설정
        	this.fn_setLineBoxNo();

        	// lot정보를 main에 담아준다.(바코드 생성시 필요 부분)
        	this.fn_setMainLots();

        	// Line에 총 양품 수량 정보를 추가 한다.(21.04.12)
        	this.fn_setLineSumQty();

        	// 저장전 수량 불필요 변경사항 초기화
        	this.fn_setPrdQty();


        	// 저장전 lot 갯수 체크 21.04.13
        	if(!this.fn_chkCountLot())
        	{
        		return;
        	}

        	// (21.07.06) 추가 (메인 한건 조회 후 삭제 시)
        	}

        	// 저장(등록 후 저장)
        	var sSvcID 			= "savePackLabel";
        	var sController 	= "/pcm07900/savePackLabel.do";
        	var sInDatasets 	= "ds_main=ds_main:U ds_line=ds_line:U ds_lot=ds_lot:U";
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
        		if (trId == "savePackLabel")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			}
        			// 21.05.10 3개짜리
        			else if(msgArray.length==3) {
        				this.gfn_Message(msgArray[0], [" "+msgArray[1], " "+msgArray[2]], "error", "ok");
        			}
        			// 21.04.14 msg 코드만 넘어온 경우 여기서 잡음
        			else {
        				this.gfn_Message(msgArray[0], "", "error", "ok");
        			}
        		}
        		else
        		{
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectPlantListAll": 			//[조회조건] Period dataset Callback
        			//this.searchDiv.cbo_sendSite.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			// 상단 그리드 site 정보 콤보 설정

        			// (21.06.05) - 사용자의 사이트 정보 설정
        			var nPlant	= this.ds_defaultUserPlant.getColumn(0,"PLANTID");
        			this.v_defaultPlant = this.gfn_isNull(nPlant)? this.gf_getSiteType() : nPlant;

        			this.searchDiv.cbo_sendSite.set_value(this.v_defaultPlant); 		// 사용자의 기본 사이트 정보로 초기 콤보 설정

        			break;

        		case "selectBtnAndHeadInfo": 			//[조회조건] Period dataset Callback
        			// 받아은 정보로 설정
        			this.fn_setBtnAndHead();

        			break;

        		case "savePackLabel": 						//[저장]
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			// 저장 완료시
        			this.searchDiv.ckb_boxNo.set_value(false);				// box No 조회시  초기화 전까지 조회된 Box No 표시되게 변경(체트 해제)
        			this.fn_search();

        			break;
        		case "selectPackLabelMainList": 					//[main 조회]

        			// 합수 미입력상태
        			this.div_work.form.msk_lineSummary.set_enable(false);
        			this.div_work.form.msk_lineSummary.set_readonly(true);

        			// box no 입력시 해당 값만 조회(체크된 상태이면 app/ 미체크이면 신규조회)
        			var nChkV = this.searchDiv.ckb_boxNo.value;

        			// 조회 조건 없는 경우 msg 출력
        			if((!nChkV) && this.ds_main.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// Main row 변경시 이전값
        			this.v_preGoodQty 	= this.ds_main.getColumn(0,"GOODQTY");
        			this.v_preDefectQty = this.ds_main.getColumn(0,"DEFECTQTY");
        			this.v_preCardQty 	= this.ds_main.getColumn(0,"CARDQTY");

        			var nBoxCnt = this.ds_mainBox.rowcount;
        			if(nChkV && (nBoxCnt != 0))
        			{
        				this.ds_main.set_updatecontrol(false);
        				// 중보된 값 있는지 체크 로직 필요
        				if(!this.fn_chkAppendDate())
        				{
        					return;
        				}

        				this.ds_main.appendData(this.ds_mainBox);
        				this.ds_main.set_updatecontrol(true);

        			}
        			if((nChkV) && nBoxCnt == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// 수량때문에 복사한다.
        			this.ds_mainQty.copyData(this.ds_main);

        			break;
        		case "selectPackLabelSubList": 					//[main 조회]
        			var nLotCnt = this.ds_lot.rowcount;

        			// 합수
        			this.div_work.form.msk_lineSummary.set_enable(false);
        			this.div_work.form.msk_lineSummary.set_readonly(true);

        			if(nLotCnt == 0)
        			{
        				// 기본 LOT입력창
        				//this.div_work.form.ckb_lotInput.set_value(false);
        				this.div_work.form.ckb_lotInput.set_value("N");
        				this.div_work.form.btn_lotSearch.set_enable(true);
        				this.div_work.form.btn_lotSearch.set_enableevent(true);
        				this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        				this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        				this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","mask");
        				this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","none");
        			}
        			else
        			{
        				// [21.04.30] 포장사양정보 수정가능여부 체크
        				if(!this.fn_SetModifyFlag())
        				{
        					this.div_work.form.btn_lotSearch.set_enable(false);
        					this.div_work.form.btn_lotSearch.set_enableevent(false);

        					this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        					this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        					this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","number");
        					this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","none");

        					return;
        				}
        				// [21.04.30] 포장사양정보 수정가능여부 체크

        				//var nPrdLot = this.ds_lot.getColumn(0,"LOTID");
        				var nComputerChk = this.div_work.form.ckb_lotInput.value;

        				//if(!this.gfn_isNull(nPrdLot))
        				if(!this.gfn_isNull(nComputerChk) && nComputerChk == 'N')
        				{
        					// 기본 LOT입력창(lot조회)
        					//this.div_work.form.ckb_lotInput.set_value(false);
        					//this.div_work.form.ckb_lotInput.set_value("N");
        					this.div_work.form.btn_lotSearch.set_enable(true);
        					this.div_work.form.btn_lotSearch.set_enableevent(true);
        					this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        					this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        					this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","maskeditcontrol");
        					this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","mask");
        				}
        				else
        				{
        					// 기본 LOT입력창(무전산)
        					//this.div_work.form.ckb_lotInput.set_value(true);
        					this.div_work.form.btn_lotSearch.set_enable(false);
        					this.div_work.form.btn_lotSearch.set_enableevent(false);
        					//this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        					//this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        					// 직접 입력
        					this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","editcontrol");
        					this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","normal");
        					this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","maskeditcontrol");
        					this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","mask");
        				}
        			}

        			break;

        		case "savePackLabelUpdate": 					//[수정(일괄등록) - 저장]
        			// 저장 완료시
        			this.searchDiv.ckb_boxNo.set_value(false);
        			this.fn_search();
        			break;
        		case "savePackDnoUpdate": 						//[수정(Dno생성) - 저장]
        			// 저장 완료시
        			this.searchDiv.ckb_boxNo.set_value(false);
        			this.fn_search();
        			break;

        		case "selectInspectXoutList": 						//[검사번호롤 - X_OUT 정보 조회]  (21.06.10)
        			//
        			// 조회 조건 없는 경우 msg 출력
        			if(this.ds_mainInpXout.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// 조회 결과로 -> 포장 사양 정보 조회
        			this.fn_setXoutPackInfo();

        			break;

        		case "selectXoutPackInfoList": 						//[검사번호롤 - X_OUT 정보 조회 -> 포장 사양 정보 조회]  (21.06.10)
        			//
        			// 조회 조건 없는 경우 msg 출력
        			if(this.ds_xoutPackInfo.rowcount == 0)
        			{
        				this.gfn_Message("NoExistPackingSpec", null, "warning", "ok");	// 포장사양이 등록되지 않았습니다. 기준정보를 확인하여 주십시오.
        				return;
        			}

        			// 인수된 Lot인지 판단
        			if(this.ds_xoutLotChk.rowcount == 0)
        			{
        				this.gfn_Message("PackChkTakeOverLot", null, "warning", "ok");	// 인수된 Lot정보가 없습니다.
        				return;
        			}

        			// 1건이면 합수/주차 체크 // 2건 이상이면 팝업으로 선택 가능 하도록 그후 합수,주차 체크
        			//this.fn_setXoutPackInfo();
        			var nCnt	= this.ds_xoutPackInfo.rowcount;
        			if(nCnt == 1)
        			{
        				// 바로 row 세팅 합수,주차 다른지 체크 [확인창 생성] -
        				// 선택된 xout 자동 세팅
        				this.fn_setAddXoutInfo();
        			}
        			else
        			{
        				// 팝업 호출 후 합수,주차 다른지 체크 [확인창 생성] - yes / no ({0} 정보가 다릅니다. 최정검사 x-out 정보로 설정 하시겠습니까?)
        				this.fn_getXoutCustModelNmPopup();
        			}

        			break;

        	default:
        		break;
        	}

        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	if(sPopupId == "reportViewer")
        	{
        		// 21.04.15 라벨 출력 후 조건 담기
        		this.ds_labelPrint.clearData();
        		this.ds_labelPrint.addRow();
        		this.ds_labelPrint.setColumn(0,"ENTERPRISEID", this.gf_getEnterpriseId());	//
        		// (21.06.05) 사이트 정보 ( 콤보값 그대로)
        		this.ds_labelPrint.setColumn(0,"SITE",this.searchDiv.cbo_sendSite.value);	//
        		switch(this.v_printValue) {
        			case "pack06": 			// 내부
        				this.ds_labelPrint.setColumn(0,"PACKINGHDRID",this.ds_paramList.getColumn(0,"value").replace(/'/g,""));	// 외부
        				this.ds_labelPrint.setColumn(0,"PACKINGDTLID",this.ds_paramList.getColumn(1,"value").replace(/'/g,"")); // 내부
        				this.ds_labelPrint.setColumn(0,"TYPE","S"); 	// 소포장
        			break;
        			case "pack05": 			// 외부
        				this.ds_labelPrint.setColumn(0,"PACKINGHDRID",this.ds_paramList.getColumn(0,"value").replace(/'/g,""));	// 외부
        				this.ds_labelPrint.setColumn(0,"TYPE","M"); 	// 대포장
        			break;
        			case "pack08": 			// QR
        				this.ds_labelPrint.setColumn(0,"INVNO",this.ds_paramList.getColumn(0,"value").replace(/'/g,""));		// INVNO
        				this.ds_labelPrint.setColumn(0,"TYPE","M"); 	// 대포장
        			break;
        			case "pack07": 			// 출고
        				this.ds_labelPrint.setColumn(0,"DNO",this.ds_paramList.getColumn(0,"value").replace(/'/g,""));			// DNO
        				this.ds_labelPrint.setColumn(0,"TYPE","M"); 	// 대포장
        			break;
        			case "pack09": 			// 송화단
        				this.ds_labelPrint.setColumn(0,"PACKINGHDRID",this.ds_paramList.getColumn(0,"value").replace(/'/g,""));	// 외부
        				this.ds_labelPrint.setColumn(0,"TYPE","M"); 	// 대포장
        			break;

        			case "pack10": 			// EXPORT1
        			case "pack11": 			// EXPORT2
        				this.ds_labelPrint.setColumn(0,"PACKINGHDRID",this.ds_paramList.getColumn(0,"value").replace(/'/g,""));	// 외부
        				this.ds_labelPrint.setColumn(0,"TYPE","M"); 	// 대포장
        			break;

        			default:
        			break;
        		}

        		// 21.04.15 라벨 출력 후 변수확인용
        		//trace(" #################################################");
        		//trace(" ### [] : "+this.ds_paramList.saveXML());
        		//trace(" #################################################");
        		//trace(" 라벨 수량 수정할 정보 : "+this.ds_labelPrint.saveXML());
        		// 임시로 막음
        		this.fn_setLabelCount();

        		// 콜백에서 출력 수량 업데이트 진행
        	}

        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "SCH_PRODUCTDEFID" :
        			this.searchDiv.edt_itemId.set_value(rtn[0]);
        			this.searchDiv.edt_itemNm.set_value(rtn[1]);
        			break;

        		case "CUST_PART_NM" :
        			this.searchDiv.edt_custPartNm.set_value(rtn[0]);
        			this.searchDiv.edt_custModelNm.set_value(rtn[1]);
        			break;

        		case "CUST_ID_SAMPLE" :
        			this.searchDiv.edt_comp.set_value(rtn[1]);	// 고객사명
        			this.f_custId = rtn[0];
        			// 그리드 데이터셋 초기화
        			this.ds_main.clearData();
        			this.ds_line.clearData();
        			this.ds_lot.clearData();
        			this.div_work.form.msk_chkGoodQty.set_value("");		// 체크값 합계 초기화

        			// 버튼 비활성화 처리
        			this.fn_setDynamicInit(false);

        			// 여기서 초기화 전부 보이게 설정(1)
        			this.fn_setMainGridHead(true);

        			// sample이 아닌 경우
        			//if(this.f_custId != '*')
        			if(this.f_custId != 'Common_1_*')
        			{
        				// 버튼 정보 조회 (없는 경우 전부 비활성화)
        				this.fn_getBtn();
        			}
        			else
        			{
        				this.fn_getBtn();			// 21.04.22 사양정보로 변경
        				/*
        				this.ds_headInfo.clearData();
        				var nAddRow = this.ds_headInfo.addRow();
        				// 전체 활성화(쿼리로 빼도 됨.) - 모든 그리드 입력값
        				this.ds_headInfo.setColumn(nAddRow,"ENTERPRISEID","*");
        				this.ds_headInfo.setColumn(nAddRow,"PLANTID","*");
        				this.ds_headInfo.setColumn(nAddRow,"CUSTOMERID","*");
        				this.ds_headInfo.setColumn(nAddRow,"PONO","1");
        				this.ds_headInfo.setColumn(nAddRow,"DNO","1");
        				this.ds_headInfo.setColumn(nAddRow,"INVNO","1");
        				this.ds_headInfo.setColumn(nAddRow,"ASN","1");
        				this.ds_headInfo.setColumn(nAddRow,"PACKNO","1");
        				this.ds_headInfo.setColumn(nAddRow,"REMARK","1");
        				this.ds_headInfo.setColumn(nAddRow,"DC","0");
        				this.ds_headInfo.setColumn(nAddRow,"BOXLINENO","0");
        				this.ds_headInfo.setColumn(nAddRow,"LOTONLY","0");			// 21.04.13 추가
        				this.div_work.form.btn_boxLIneNoCreate.set_enable(false);
        				this.div_work.form.btn_boxLIneNoCreate.set_enableevent(false);
        				this.div_work.form.btn_boxLIneNoCancel.set_enable(false);
        				this.div_work.form.btn_boxLIneNoCancel.set_enableevent(false);
        				// 버튼 전체 활성화
        				this.fn_setDynamicInit(true);
        				*/
        			}
        			break

        		case "PACK_DTL" :
        			/*
        			0 고객모델명, 1 자사 품목코드, 2 고객pn,	3 품목명, 4 REV, 5 합수
        			*/
        			var nPos = this.ds_main.rowposition;

        			this.ds_main.setColumn(nPos, "CUSTOMERMODELNM", rtn[0]);
        			this.ds_main.setColumn(nPos, "PRODUCTDEFID", rtn[1]);
        			this.ds_main.setColumn(nPos, "CUSTOMERPN", rtn[2]);
        			this.ds_main.setColumn(nPos, "CUSTOMERPRODNAME", rtn[3]);		// 김정욱과장님 표시필요 없음 (21.04.16) 필요함
        			this.ds_main.setColumn(nPos, "REV", rtn[4]);
        			this.ds_main.setColumn(nPos, "SUMPCS", rtn[5]);
        			this.ds_main.setColumn(nPos, "PRODUCTDEFVERSION", rtn[6]);
        			this.ds_main.setColumn(nPos, "CUSTOMERCOMPANYID", rtn[7]);		// 고객 업체코드 추가 21.04.14
        			/*
        			var nidVer = rtn[6];
        			if(this.gfn_isNull(nidVer))
        			{
        				nidVer = "";
        			}
        			else
        			{
        				nidVer = "||"+nidVer;
        			}
        			*/
        			this.ds_main.setColumn(nPos, "PRODUCTDEFNM", rtn[1]+rtn[6]);
        			// 하단 그리드 합수 부분 값 조회됨.
        			break;

        		case "PACK_LOT_ID" :			// lot 조회 팝업
        			var nLot = rtn[0];
        			var nQty = rtn[1];
        			var nWeek = rtn[2];			// (21.06.08) 주차 추가 [test]
        			var nFindCnt = this.ds_lot.getCaseCount("LOT=='"+nLot+"'");
        			if(nFindCnt > 0)
        			{
        				this.gfn_Message("ExistLot", nLot, "warning", "ok");// 이미 추가 된 LOT 입니다. {0}
        				return;
        			}

        			var nPos   = this.ds_main.rowposition;
        			var nMainE = this.ds_main.getColumn(nPos,"ENTERPRISEID");
        			var nMainS = this.ds_main.getColumn(nPos,"SITE");
        			var nMainH = this.ds_main.getColumn(nPos,"PACKINGHDRID");

        			var nAdd = this.ds_lot.addRow();
        			this.ds_lot.setColumn(nAdd, 'LOT', nLot);			// 수정 불가능?
        			this.ds_lot.setColumn(nAdd, 'QUANTITY', nQty);		// 수정가능?
        			this.ds_lot.setColumn(nAdd, 'PACKINGHDRID', nMainH);
        			this.ds_lot.setColumn(nAdd, "ENTERPRISEID",nMainE);
        			this.ds_lot.setColumn(nAdd, "PLANTID",nMainS);
        			this.ds_lot.setColumn(nAdd, "CREATER", this.gf_getUserId());   		// 담당자
        			this.ds_lot.setColumn(nAdd, "LOTWEEK", nWeek);   					// lot주차 추가 (21.06.08)
        			// 포장사양 정보 Lot체크시(Lot 하나만 입력 가능) - 합수 계산산 lot의 첫row값으로 자동 설정 (21.04.23)
        			var nChk = this.ds_headInfo.getColumn(0,"LOTONLY");		// 포장사양 Lot 체크 확인
        			if(nChk == '1')											// 체크인 경우(하나의 lot만 입력시)
        			{
        				var nLotCnt = this.ds_lot.rowcount;
        				if(nLotCnt == 1)	// 추가후 row가 하나이면.
        				{
        					// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)
        					this.fn_setMainQty(nPos);
        				}
        			}

        			break;

        		case "GRD_USER" :			// 포장 검사자 조회
        			var nId = rtn[0];
        			var nNm = rtn[1];
        			var nPos = this.ds_main.rowposition;
        			this.ds_main.setColumn(nPos, 'INPNAME'  , nNm);
        			this.ds_main.setColumn(nPos, 'INSPECTOR', nId);
        			break;

        		case "GRD_PACK_USER" :			// 포장 작업자 조회
        			var nId = rtn[0];
        			var nNm = rtn[1];
        			var nPos = this.ds_main.rowposition;
        			this.ds_main.setColumn(nPos, 'PACKING_NAME'  	, nNm);
        			this.ds_main.setColumn(nPos, 'PACKING_ID'		, nId);
        			break;

        		case "INV_NO_REG" :			// INV NO 등록
        			//팝업 닫히면 재조회
        			if(rtn[0] == 'ok')
        			{
        				// 저장 완료시 중복체크 해제
        				this.searchDiv.ckb_boxNo.set_value(false);
        				this.fn_search();
        			}
        			break;

        		// XOUT_CUST_MODEL_NM
        		case "XOUT_CUST_MODEL_NM" :			// INV NO 등록
        			this.ds_xoutPackInfo.clearData();
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				for(var i=0; i<nLen; i++)
        				{
        					var nAdd = this.ds_xoutPackInfo.addRow();
        					this.ds_xoutPackInfo.setColumn(nAdd, "CUSTOMERMODELNM"		,rtn[i][0]);
        					this.ds_xoutPackInfo.setColumn(nAdd, "PRODUCTDEFID"			,rtn[i][1]);
        					this.ds_xoutPackInfo.setColumn(nAdd, "CUSTOMERPN"			,rtn[i][2]);
        					this.ds_xoutPackInfo.setColumn(nAdd, "CUSTOMERPRODNAME"		,rtn[i][3]);
        					this.ds_xoutPackInfo.setColumn(nAdd, "CUSTOMERREV"			,rtn[i][4]);
        					this.ds_xoutPackInfo.setColumn(nAdd, "SUMPCS"				,rtn[i][5]);
        					this.ds_xoutPackInfo.setColumn(nAdd, "PRODUCTDEFVERSION"	,rtn[i][6]);
        					this.ds_xoutPackInfo.setColumn(nPos, "CUSTOMERCOMPANYID"	,rtn[i][7]);		// 고객 업체코드 추가 21.04.14
        					//this.ds_xoutPackInfo.setColumn(nAdd, "CUSTOMERCOMPANYID"	,rtn[i][1]+rtn[i][6]);
        				}
        				// 선택된 xout 자동 세팅
        				this.fn_setAddXoutInfo();
        			}

        			break;

        		// XOUT_INSP_NUM (21.06.30)
        		case "XOUT_INSP_NUM" :
        			/*
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFID",rtn[0]);
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFVERSION",rtn[3]);
        			*/
        			//trace(" =======> : "+rtn[0]);
        			//trace(" =======> : "+rtn[1]);
        			this.div_work.form.edt_inspectNum.set_value(rtn[0]);

        			var eObj = nexacro.KeyEventInfo;
        			eObj.keycode = 13;
        			//this.div_work_edt_inspectNum_onkeydown(this.div_work.form.edt_inspectNum,eObj);
        			this.div_work_edt_inspectNum_onkeydown(this,eObj);
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

        	if(popId=="P00190"){ //고객 파트명 조회
        		oArg.arg_rtnCols = "CUSTOMERPN|CUSTOMERMODELNM";						// 리턴 받을 값
        		oArg.arg_searchStr = "1=1|CUSTOMERPN="+this.searchDiv.edt_custPartNm.value;	// 검색 조건(이미 입력 된값)
        	}
        	else if(popId=="P00191"){ //고객사 명 조회
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";								// 고객명으로 설정 되고
        		oArg.arg_searchStr = "1=1|TXTCUSTOMERID="+this.searchDiv.edt_comp.value;	// 검색 조건(이미 입력 된값)
        	}
        	else if(popId=="P00193"){ //창고 명 조회

        		opts = "width=700,height=500";
        		oArg.arg_type = "BA";		// 단일 선택
        		oArg.arg_rtnCols = "CUSTOMERMODELNM|PRODUCTDEFID|CUSTOMERPN|CUSTOMERPRODNAME|CUSTOMERREV|SUMPCS|PRODUCTDEFVERSION|CUSTOMERCOMPANYID";		// 리턴값(그리드 설정 0~5)  21.04.14 고객업체코드 추가
        		oArg.arg_searchStr = "1=1|SEARCH=";	// 검색 조건(이미 입력 된값)
        	}
        	else if(popId=="P00204"){ //LOT 조회
        		oArg.arg_type = "B";		// 단일 선택
        		oArg.arg_rtnCols = "LOTID|QTY|WEEK";		// 리턴값(그리드 설정 0~1)		(21.06.08) 주차 추가
        	}
        	else if(popId=="P00249"){ //포장검사자 조회(21.04.24) - 포장 관리자만 나오도록 변경
        		oArg.arg_type = "BA";		// 단일 선택(바로 조회 가능 수정 21.04.27)
        		oArg.arg_rtnCols = "USER_ID|USER_NM";		// 리턴값(그리드 설정 0~1)
        		oArg.arg_searchStr = "1=1";		// 검색 조건(이미 입력 된값)
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 라벨 출력 후 count 변경 21.04.15
         */
        this.fn_setLabelCount = function ()
        {
        	// 저장(등록 후 저장)
        	var sSvcID 			= "saveLabelCount";
        	var sController 	= "/pcm07900/saveLabelCount.do";
        	var sInDatasets 	= "ds_labelPrint=ds_labelPrint";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'site' 콤보 조회(조회조건, 그리드콤보값)
         */
        this.fn_initSiteCombo = function ()
        {
        	this.ds_search.clearData();
        	this.ds_cboPlantGrid.clearData();
        	this.ds_defaultUserPlant.clearData();				// 21.06.05 사용자 기분 사이트 정보
        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_search.setColumn(0, "CMB_TYPE", 'All'); 	// CMB_TYPE	 (21.06.05) - ds_search 에 누락된것 추가
        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectPlantListAll";
        	var sController 	= "/pcm07900/selectPlantAllList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_cboPlant=output1 ds_cboPlantGrid=output2 ds_defaultUserPlant=output3";		// 21.06.05 사용자 기본 사이트 정보 조회
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 초기화 함수
         */
        this.fn_searchReset = function ()
        {
        	// 오늘 날짜 설정(상단 조회 조건)
        	this.searchDiv.cal_dateFrom.set_value(this.gfn_today()); //오늘일자 (From)
        	this.searchDiv.cal_dateTo.set_value(this.gfn_today());   //오늘일자 (To)
        	// edit 초기화 부분
        	this.searchDiv.edt_itemId.set_value("");
        	this.searchDiv.edt_itemNm.set_value("");
        	this.searchDiv.edt_custPartNm.set_value("");
        	this.searchDiv.edt_custModelNm.set_value("");
        	this.searchDiv.edt_invNo.set_value("");

        	this.searchDiv.edt_lotNo.set_value("");
        	this.searchDiv.edt_barcodeNo.set_value("");
        	this.searchDiv.edt_dateCode.set_value("");
        	this.searchDiv.edt_boxNo.set_value("");
        	this.searchDiv.edt_dNo.set_value("");
        	this.searchDiv.edt_comp.set_value("");

        	// 버튼쪽 edit 초기화
        	//this.searchDiv.div_btn.form.edt_pack03.set_value("");		// 제거
        	this.searchDiv.div_btn.form.edt_pack04.set_value("");

        	// 콤보 초기화
        	this.searchDiv.cbo_invNo.set_index(0);
        	this.searchDiv.cbo_dNo.set_index(0);

        	// (21.06.05) 사용자 접속 정보 -> 사용자 기본 설정 사이트로 변경
        	//this.searchDiv.cbo_sendSite.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        	this.searchDiv.cbo_sendSite.set_value(this.v_defaultPlant); //사용자 기본 설정 사이트로 설정 (21.06.05)

        	this.searchDiv.cbo_type.set_index(0);

        	// 변수
        	this.f_custId = "";			// 고객사 id

        	// 버튼 비활성화 처리
        	this.fn_setDynamicInit(false);
        	// 합수 초기화
        	this.div_work.form.msk_lineSummary.set_enable(false);
        	this.div_work.form.msk_lineSummary.set_readonly(true);

        	this.div_work.form.msk_chkGoodQty.set_value("");		// 체크값 합계 초기화

        	this.searchDiv.ckb_boxNo.set_value(false);				// box No 조회시  초기화 전까지 조회된 Box No 표시되게 변경
        };

        /*
         * 고객사 x 클릭시
         */
        this.fn_clickComp = function ()
        {
        	this.searchDiv.edt_comp.set_value("");				// 고객사명 초기화
        	this.f_custId = "";									// 고객사 id 초기화

        	this.searchDiv.edt_custPartNm.set_value("");		// 고객파트명 초기화
        	this.searchDiv.edt_custModelNm.set_value("");		// 고객모델명 초기화

        	// 버튼 비활성화 처리
        	this.fn_setDynamicInit(false);

        	// 그리드 초기화
        	this.ds_main.clearData();
        	this.ds_line.clearData();
        	this.ds_lot.clearData();

        	// 합수 초기화
        	this.div_work.form.msk_lineSummary.set_enable(false);
        	this.div_work.form.msk_lineSummary.set_readonly(true);

        	this.div_work.form.msk_chkGoodQty.set_value("");		// 체크값 합계 초기화

        };

        /*
         * 품목코드 x 클릭시
         */
        this.fn_clickItem = function ()
        {
        	this.searchDiv.edt_itemId.set_value("");				// 품목코드 초기화
        	this.searchDiv.edt_itemNm.set_value("");				// 품목명 초기화
        };

        /*
         * 버튼 비활성화 설정(전체)
         */
        this.fn_setDynamicInit = function (nType)
        {
        	//버튼 (우선 고정 / 나중엔 조회 해서 초기화 하면 전부 삭제??) - 8개 -> 11개
        	for(var i=1; i<=11; i++)
        	{
        		// 두자리수
        		var num = i;
        		var nRnum  = String("0" + num).slice(-2);

        		// 버튼 객체를 구함
        		var nBtnNm = "btn_pack"+nRnum;
        		var nBt = this.searchDiv.div_btn.form.all[nBtnNm];  // btn 객체 구함

        		nBt.set_enable(nType);
        		nBt.set_enableevent(nType);
        		// edit 객체 비활성화
        		var nEdtNm = "edt_pack"+nRnum;
        		var nEdt = this.searchDiv.div_btn.form.all[nEdtNm];  // sta 객체 구함

        		if(!this.gfn_isNull(nEdt))
        		{
        			nEdt.set_enable(nType);
        			nEdt.set_enableevent(nType);
        			nEdt.set_value("");
        		}
        	}
        };

        /*
         * 버튼 정보 조회 (상단 그리드 컬럼 활성화 정보 및 버튼 정보 조회)
         */
        this.fn_getBtn = function ()
        {
        	this.ds_search.clearData();
        	this.ds_btnInfo.clearData();
        	this.ds_headInfo.clearData();

        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	// (21.06.05) 사이트 콤보 -> 접속한 사이트 설정
        	//this.ds_search.setColumn(0, "PLANTID", this.searchDiv.cbo_sendSite.value); 	// 출고지
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType()); 					// 출고지	(21.06.05) 사이트 콤보 -> 접속한 사이트로 설정
        	this.ds_search.setColumn(0, "CUSTOMERID", this.f_custId); 					// 고객사
        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectBtnAndHeadInfo";
        	var sController 	= "/pcm07900/selectBtnAndHeadInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_btnInfo=output1 ds_headInfo=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 고객사에 따른 그리드 활성화, 버튼 활성화 설정
         */
        this.fn_setBtnAndHead = function ()
        {
        	var nBtnCnt = this.ds_btnInfo.rowcount;
        	if(nBtnCnt == 0)
        	{
        		// 버튼 비활성화 처리
        		this.fn_setDynamicInit(false);
        	}
        	else
        	{
        		// 버튼 비활성화 처리(전체 비활성화 후 하나씩 활성화)
        		this.fn_setDynamicInit(false);
        		// 버튼 활성화 정보 설정
        		this.fn_actBtn(nBtnCnt, true);
        	}

        	var nHeadYnCnt = this.ds_headInfo.rowcount;
        	if(nHeadYnCnt == 0)
        	{
        		// 전체 비활성화 변수 설정
        	}
        	else
        	{
        		// 활성화 변수 설정(expr로 설정함)
        		// D/C 설정
        		var nDc = this.ds_headInfo.getColumn(0,"DC");
        		var nDcIdx = this.div_work.form.grd_line.getBindCellIndex("body","DC");
        		// 소포장 그리드 내 D/C 활성화 비활성화
        		if(nDc == 'SmallPack')
        		{
        			//this.div_work.form.grd_line.setCellProperty("body",nDcIdx,"size",80);
        			this.div_work.form.grd_line.setFormatColProperty(nDcIdx,"size",80);
        		}
        		else // [21.04.30] 대포장/미사용인 경우 비활성화 적용
        		{
        			//this.div_work.form.grd_line.setCellProperty("body",nDcIdx,"size",0);
        			this.div_work.form.grd_line.setFormatColProperty(nDcIdx,"size",0);
        		}
        		// Pack Line 설정___[21.04.22](누락된 부분 추가)
        		var nPack = this.ds_headInfo.getColumn(0,"PACKNO");
        		var nPackIdx = this.div_work.form.grd_line.getBindCellIndex("body","PACKLINE");
        		// 소포장 그리드 내 D/C 활성화 비활성화
        		if(nPack == '1')
        		{
        			this.div_work.form.grd_line.setFormatColProperty(nPackIdx,"size",80);
        		}
        		else
        		{
        			this.div_work.form.grd_line.setFormatColProperty(nPackIdx,"size",0);
        		}
        		// 내부 box no 조정
        		var nBoxLineNo = this.ds_headInfo.getColumn(0,"BOXLINENO");
        		var nBoxLineNoIdx = this.div_work.form.grd_line.getBindCellIndex("body","BOXLINENO");
        		if(nBoxLineNo == '1')
        		{
        			this.div_work.form.btn_boxLIneNoCreate.set_enable(true);
        			this.div_work.form.btn_boxLIneNoCreate.set_enableevent(true);
        			this.div_work.form.btn_boxLIneNoCancel.set_enable(true);
        			this.div_work.form.btn_boxLIneNoCancel.set_enableevent(true);
        			this.div_work.form.grd_line.setFormatColProperty(nBoxLineNoIdx,"size",120);
        		}
        		else
        		{
        			this.div_work.form.btn_boxLIneNoCreate.set_enable(false);
        			this.div_work.form.btn_boxLIneNoCreate.set_enableevent(false);
        			this.div_work.form.btn_boxLIneNoCancel.set_enable(false);
        			this.div_work.form.btn_boxLIneNoCancel.set_enableevent(false);
        			this.div_work.form.grd_line.setFormatColProperty(nBoxLineNoIdx,"size",0);
        		}

        		//****************************************************************
        		// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓] - 주석으로 막음
        		//****************************************************************
        		// [21.04.30] 포장사양정보 수정가능여부 체크
        		/*
        		var nCustModflag = this.ds_headInfo.getColumn(0,"MOD_FL");
        		if(nCustModflag != 1)
        		{
        			this.div_work.form.btn_boxLIneNoCreate.set_enable(false);
        			this.div_work.form.btn_boxLIneNoCreate.set_enableevent(false);
        			this.div_work.form.btn_boxLIneNoCancel.set_enable(false);
        			this.div_work.form.btn_boxLIneNoCancel.set_enableevent(false);
        		}
        		*/
        		// [21.04.30] 포장사양정보 수정가능여부 체크
        		//****************************************************************
        		// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        		//****************************************************************
        	}
        	// 헤더 정보 조회 후 설정(2)
        	this.fn_setMainGridHead(false);
        };

        /*
         * 기준정보에 따른 버튼 활성화
         */
        this.fn_actBtn = function (nCnt, nType)
        {
        	for(var i=0; i<nCnt; i++)
        	{
        		var nBtn = this.ds_btnInfo.getColumn(i,"BUTTONNAME");
        		// 버튼 객체를 구함
        		var nBtnNm = "btn_"+nBtn;
        		var nBt = this.searchDiv.div_btn.form.all[nBtnNm];  // btn 객체 구함
        		nBt.set_enable(nType);
        		nBt.set_enableevent(nType);
        		// edit 객체 비활성화
        		var nEdtNm = "edt_"+nBtn;
        		var nEdt = this.searchDiv.div_btn.form.all[nEdtNm];  // sta 객체 구함
        		if(!this.gfn_isNull(nEdt))
        		{
        			nEdt.set_enable(nType);
        			nEdt.set_enableevent(nType);
        			nEdt.set_value("");
        		}
        	}
        };


        /*
         *	고객사 정보 필수값 입력 체크
         */
        this.fn_chkComp = function ()
        {
        	var nCustId = this.f_custId;      //this.searchDiv.edt_comp.value;
        	var nCustNm = this.searchDiv.edt_comp.value;
        	if(this.gfn_isNull(nCustId) || this.gfn_isNull(nCustNm))
        	{
        		// 필수값 입력
        		var nTitle = this.searchDiv.sta_comp.text;
        		this.gfn_Message("InputSomeThing",nTitle , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        		return false;
        	}
        	return true;

        };

        /*
         * 그리드 행 삭제 함수
         */
        this.fn_deleteGrid = function (dsObj, type)
        {
        	var nChkCnt = dsObj.getCaseCount("CHK=='1'");
        	var nDsCnt  = dsObj.rowcount;
        	// 삭제건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	// 21.04.13 삭제시 row 변경시 이벤크 안타도록
        	var nDsName = dsObj.name;
        	if(nDsName == "ds_main")
        	{
        		this.ds_main.set_enableevent(false);
        		this.ds_line.set_enableevent(false);
        		this.ds_line.clearData();
        		this.ds_lot.clearData();
        	}
        	// 선택된 행 삭제
        	for(var i=nDsCnt-1; i>=0;i--)
        	{
        		var nType = dsObj.getRowType(i);

        		if(type)
        		{
        			if ((dsObj.getColumn(i, "CHK") == "1") && nType ==  Dataset.ROWTYPE_INSERT)   // 신규 등록 건만 삭제 가능
        			{
        				dsObj.deleteRow(i);
        			}
        		}
        		else
        		{
        			if ((dsObj.getColumn(i, "CHK") == "1"))   // 체크건만 삭제 가능
        			{
        				dsObj.deleteRow(i);
        			}
        		}
        	}
        	// 21.04.13 메인삭제시 Sub 재조회 과부화 방지
        	if(nDsName == "ds_main")
        	{
        		this.ds_main.set_enableevent(true);
        		this.ds_line.set_enableevent(true);

        		// 첫행 삭제때(21.05.22)
        		var nPos = this.ds_main.rowposition;
        		if(nPos == 0)
        		{
        			trace(" ####[삭제후 1건인 경우] 재조회 (nPos == 0)임  ");
        			// 재조회
        			this.fn_setSubList(0);
        			return;		// (21.06.05) return문 추가
        		}

        		this.ds_main.set_rowposition(0);
        		// 하단 재조회
        		var nCnt = this.ds_main.rowcount;
        		if(nCnt > 0 && nCnt == 1)		// main의 row 수가 1건 이상이여야 sub 조회
        		{
        			// Main row 변경시 이전값
        			//this.v_preGoodQty 	= this.ds_main.getColumn(0,"GOODQTY");		// 기본값 설정
        			//this.v_preDefectQty = this.ds_main.getColumn(0,"DEFECTQTY");
        			//this.v_preCardQty 	= this.ds_main.getColumn(0,"CARDQTY");
        			//trace(" ####[삭제후 1건만 만았을 경우.. 경우] 재조회 1건 남은 경우.. ");
        			// 재조회
        			this.fn_setSubList(0);
        		}
        	}
        };

        /*
         * 그리드내 사양정보에 따른 입력 가능 여부 설정
         */
        //comp.parent.parent.parent.isEditable?'date':'none'
        this.fn_chkGridActivated = function (nColNm, nPos)
        {
        	var nR = this.ds_headInfo.getColumn(0,nColNm);
        	// main의 선택 row가
        	//var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType != Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        		// [21.05.22] 인계 연동 lot 확인후 처리
        		var nRe = this.fn_chkHandOverLot(nPos);
        		return nRe ? 1 : 0;  //0 으로 넘김
        	}

        	// 대소D/C 구분
        	if(nColNm == 'DC')
        	{
        		if(nR == 'SmallPack' || nR == 'NotInUse')			// [21.04.30] 미사용 조건 추가 (상단그리드 비활성화 처리)
        		{
        			return 0;  //0 으로 넘김	(소포장 주차 사용)
        		}
        		else
        		{
        			//return 1;  //1 으로 넘김	(대포자 주차 사용)
        			// [21.05.22] 인계 연동 lot 확인후 처리
        			var nRe = this.fn_chkHandOverLot(nPos);
        			return nRe ? 1 : 0;  //0 으로 넘김
        		}
        	}
        	// 임시로 0으로 전부 필수값 표현 필요 없을 듯
        	// nR = 0;
        	return nR;
        };

        /*
         * 수량 정합성 체크(LINE의 양품합계 == LOT의 합계)
         */
        this.fn_chkQuantity = function ()
        {
        	var nSumLot = this.ds_lot.getSum("parseFloat(QUANTITY)");
        	var nSumLine = this.ds_line.getSum("parseFloat(GOODQTY)");

        	if(nSumLot != nSumLine)
        	{
        		return false;
        	}
        	return true;
        };

        /*
         * RD report 호출
         */
        this.fn_setRdReport = function (nName, nHdrId, nLineId, nHdrOneMain, nSrcNm)
        {
        	// 넘길 파라미터 값 설정
        	var nParam = "";		//보통 HdrId, LineId

        	if(nName == 'pack06' || nName == 'pack05' || nName == 'pack09'|| nName == 'pack10' || nName == 'pack11')		// 외부/내부/송화단
        	{
        		// 외부 라벨 제외 HdrId 값 담기 (main)
        		if(this.gfn_isNull(nHdrId))
        		{
        			nHdrId = this.ds_main.getColumn(this.ds_main.rowposition,"PACKINGHDRID");
        		}
        		else
        		{
        			// 여러건인 경우
        			//nHdrId = "'"+nHdrId+"'";
        			nHdrId = nHdrId;			// 불필요 ' 제거 21.04.20
        		}
        		nParam = nParam + nHdrId;
        		// 외부 라벨 제외 HdrId 값 담기 (main)
        		if(!this.gfn_isNull(nLineId))
        		{
        			var nDtlArr = nLineId.split(',');
        			if(nDtlArr.length > 1)
        			{
        				//nLineId = "'"+nLineId+"'";		// 불필요 ' 제거 21.04.20
        				nLineId = nLineId;		// 불필요 ' 제거 21.04.20
        			}
        			nParam = nParam +"|"+ nLineId;
        		}
        	}
        	else if(nName == 'pack07' || nName == 'pack08')		// 출고집계, QR출력
        	{
        		nParam = "'"+nHdrOneMain+"'";
        		//nParam = nHdrOneMain;		// 불필요 ' 제거 21.04.20
        	}

        	var nArr = nParam.split('|');
        	// parameter값 설정
        	this.ds_paramList.clearData();
        	//var nArr = ['INTERFLEX','IFC','18291'];
        	//var nArr = ['PACKINGHDRID','IFC',''];
        	for(var i=0; i<nArr.length; i++)
        	{
        		//var nV = nArr[i];
        		var nRow = this.ds_paramList.addRow();
        		this.ds_paramList.setColumn(nRow,"code",(i+1));
        		this.ds_paramList.setColumn(nRow,"value",nArr[i]);
        	}
        	var nSrc = "";
        	if(this.gfn_isNull(nSrcNm))
        	{
        		this.gfn_Message("CHECKLABELSOURCE", "", "warning", "ok");// 고객사에 해당하는 소스명 정보가 없습니다.
        		return;
        	}
        	nSrc = nSrcNm+".mrd";

        	var strField = this.gfn_strParameterData(this.ds_paramList, "code", "value");  //code : parameter 순서 : 1,2....
        	//trace(" ## [rd 호출전 테스트] ## : "+this.ds_paramList.saveXML());
        	//또는 strField = [$1값][$2값]....[$n값];
        	this.v_printValue = nName;			// 21.04.15 버튼명을 담는다

        	var oArg = {
        		sRptPath : "/pcm/",
        		sRptName : nSrc,
        		strField : strField,
        		bModalless : false
        	};
        	var sOption = "titletext=Report pack Label (PCM),modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /*
         * Main 그리드 상태에 따른 하단 그리드 edit 상태 변경
         */
        this.fn_setLineEdit = function (nColNm, nYn)		// 양품수량에 설정
        {
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	if(!this.fn_SetModifyFlag())
        	{
        		if(nYn == 'Y')
        		{
        			return true;
        		}
        		return false;
        	}
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	var nR = "";
        	if(!this.gfn_isNull(nColNm))
        	{
        		nR = this.ds_headInfo.getColumn(0,nColNm);
        	}
        	else
        	{
        		nR = 1;
        	}

        	if(nColNm == 'DC')	// 주차의 경우 1,0이 아닌 SmallPack/LargePack 값이 담겨져 온다.
        	{
        		//SmallPack
        		nR = nR == 'SmallPack' ? 1 : 0;	// [21.04.30] Line의 경우 소포장일때만 edit 상태 적용(대포장/미사용)
        	}
        	else if(nColNm == 'SUM')
        	{
        		var nSum = this.div_work.form.msk_lineSummary.value;  // 합수가 1인 경우
        		if(nSum == '1')
        		{
        			nR = 0;
        		}
        		else
        		{
        			nR = 1;
        		}
        	}

        	nR = nR == 1 ? true : false;		// 대/소구분에 따른
        	// 합수가 1인 경우 체크 해야됨.
        	/*
        	var nPos 	= this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType == Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        	*/
        	return nR;		// 합수가 1인 경우 로직 여기 들어가야 될것 같음(일단line 수정 가능)
        };

        /*
         * mian 합계값 표현
         */
        this.fn_setMainQty = function (nPos)
        {
        	var nCnt = this.ds_line.rowcount;
        	var nGoodQty = 0;
        	var nDeftQty = 0;
        	var nCardQty = 0;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nG = this.ds_line.getColumn(i, "GOODQTY");
        		var nD = this.ds_line.getColumn(i, "DEFECTQTY");
        		var nC = this.ds_line.getColumn(i, "CARD");
        		nG = this.gfn_isNull(nG) ? 0 : parseInt(nG);
        		nD = this.gfn_isNull(nD) ? 0 : parseInt(nD);
        		nC = this.gfn_isNull(nC) ? 0 : parseInt(nC);
        		nGoodQty = nGoodQty + nG;
        		nDeftQty = nDeftQty + nD;
        		nCardQty = nCardQty + nC;
        	}
        	// Main그리드 수량값 설정
        	this.ds_main.setColumn(nPos,"GOODQTY"	,nGoodQty);
        	this.ds_main.setColumn(nPos,"DEFECTQTY"	,nDeftQty);
        	this.ds_main.setColumn(nPos,"CARDQTY"	,nCardQty);
        	// 포장사양 정보 Lot체크시(Lot 하나만 입력 가능) - 합수 계산산 lot의 첫row값으로 자동 설정 (21.04.23)
        	var nChk = this.ds_headInfo.getColumn(0,"LOTONLY");		// 포장사양 Lot 체크 확인
        	if(nChk == '1')											// 체크인 경우(하나의 lot만 입력시)
        	{
        		var nLotCnt = this.ds_lot.rowcount;
        		if(nLotCnt != 0)	// 등록해 놓은 값이 있으면
        		{
        			this.ds_lot.setColumn(0,"QUANTITY",nGoodQty);
        		}
        	}
        };
        /*
         * 상단 그리드 row / 변경시 확인 msg
         */
        this.fn_chkRowChange = function ()
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_line) || this.gfn_dsIsUpdated(this.ds_lot)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	if(bOk){
        		return true;
        	} else {
        		return false;
        	}
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
         * sub 조회
         */
        this.fn_setSubList = function (nRow)
        {
        	this.ds_searchDetail.clearData();
        	this.ds_line.clearData();
        	this.ds_lot.clearData();

        	// mian의 상태가 등록이면 진행안함
        	var nMainType = this.ds_main.getRowType(nRow);
        	if(nMainType == Dataset.ROWTYPE_INSERT)
        	{
        		// 샘플의 경우 합수 직접 입력
        		var nCustId = this.f_custId;      //this.searchDiv.edt_comp.value;

        		if(nCustId == 'Common_1_*')		// 블럭마다 달라짐
        		{
        			this.div_work.form.msk_lineSummary.set_enable(true);
        			this.div_work.form.msk_lineSummary.set_readonly(false);
        		}
        		return;
        	}
        	// 조회 필수값 없는 경우 진행 안함
        	var nEnter = this.ds_main.getColumn(nRow, "ENTERPRISEID");
        	var nPant = this.ds_main.getColumn(nRow, "SITE");
        	var nKey = this.ds_main.getColumn(nRow, "PACKINGHDRID");

        	if(this.gfn_isNull(nEnter) || this.gfn_isNull(nPant) || this.gfn_isNull(nKey))
        	{
        		return;
        	}

        	this.ds_searchDetail.addRow();
        	this.ds_searchDetail.setColumn(0, "ENTERPRISEID", 	nEnter); 			// ENTERPRISEID
        	this.ds_searchDetail.setColumn(0, "PLANTID", 		nPant);					// 공장
        	this.ds_searchDetail.setColumn(0, "PACKINGHDRID", 	nKey);			// 헤더key

        	var sSvcID 			= "selectPackLabelSubList";
        	var sController 	= "/pcm07900/selectPackLabelSubList.do";
        	var sInDatasets 	= "INPUT=ds_searchDetail";
        	var sOutDatasets 	= "ds_line=output1 ds_lot=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 샘플의 경우 상단 그리드 전체 활성화
         */
        this.fn_chkSample = function (nRow)
        {
        	var nChk = this.ds_main.getColumn(nRow, "COMP");
        	//if(nChk == '*')
        	if(nChk == 'Common_1_*')
        	{
        		// [21.05.22] 인계 확인 로직 추가
        		var nRe = this.fn_chkHandOverLot(nRow);
        		return nRe;
        	}
        	return false;
        };

        /***************************************
         * 정합성체크(주차, lot수량, card수량 체크)
         ***************************************/
        this.fn_chkValid = function ()
        {
        	var nPos 	= this.ds_main.rowposition;
        	var nChkDc 	= this.ds_headInfo.getColumn(0,"DC");
        	/*
        	// 주차 서버단에서 체크 후 msg 리턴
        	if(!this.gfn_isNull(nChkDc))
        	{
        		if(nChkDc == 'SmallPack')
        		{
        			// card 수량 확인 (0이 있으면 안될것 같음)
        			var nLineCnt = this.ds_line.rowcount;
        			for(var li=0; li<nLineCnt; li++)
        			{
        				var nLineDc = this.ds_line.getColumn(li,"DC");
        				if(this.gfn_isNull(nLineDc))
        				{
        					var nLineDcLen =  this.gfn_trim(nLineDc).length.toString();
        					this.gfn_Message("WEEKLENGTH", nLineDcLen , "warning", "ok"); // 주차 자릿수가 {0} 입니다.  정상 자릿수 : 4자리
        					return false;
        				}
        			}
        		}
        		else
        		{
        			var nDc		= this.ds_main.getColumn(nPos,"DC");
        			// 메인 주차 확인
        			if(this.gfn_trim(nDc).length < 4)
        			{
        				var nLn =  this.gfn_trim(nDc).length.toString();
        				this.gfn_Message("WEEKLENGTH", nLn , "warning", "ok"); // 주차 자릿수가 {0} 입니다.  정상 자릿수 : 4자리
        				return false;
        			}
        		}
        	}
        	*/
        	var nPackDate	= this.ds_main.getColumn(nPos,"PACK_DATE");

        	if(!this.gfn_dateCheck(nPackDate))
        	{
        		this.gfn_Message("CheckDate", "" , "warning", "ok"); // 날짜를 확인해주세요.
        		return false;
        	}
        	// card 수량 확인 (0이 있으면 안될것 같음)
        	var nLineCnt = this.ds_line.rowcount;
        	for(var l=0; l<nLineCnt; l++)
        	{
        		var nCard = this.ds_line.getColumn(l,"CARD");
        		if(nCard == 0)
        		{
        			this.gfn_Message("ChckCardQty", "" , "warning", "ok"); // 카드 수량은 필수 입력 사항입니다. (1 이상의 값을 입력하세요.)
        			return false;
        		}
        	}
        	return true;
        };

        /*
         * sub 추가시 메인 값 있는지 확인
         */
        this.fn_checkMain = function ()
        {
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	if(!this.fn_SetModifyFlag())
        	{
        		return false;
        	}
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	var nPos 	= this.ds_main.rowposition;
        	var nComp 	= this.ds_main.getColumn(nPos,"COMP");			// 고객사
        	var nProdId = this.ds_main.getColumn(nPos,"PRODUCTDEFID");	// 자사 품목 코드
        	var nSite 	= this.ds_main.getColumn(nPos,"SITE");
        	if(this.gfn_isNull(nProdId))
        	{
        		var nText = this.nfn_getDictionaryname('DirectItemCode',true)		// 자사품목코드
        		this.gfn_Message("PriorityInputSomething",nText , "warning","ok");// {0}을(를) 먼저 입력하세요.
        		return false;
        	}
        	if(this.gfn_isNull(nComp))
        	{
        		var nCompText = this.nfn_getDictionaryname('F993645129314EB2A2423955D6AB814C',true)		// 고객사
        		this.gfn_Message("PriorityInputSomething",nCompText , "warning","ok");// {0}을(를) 먼저 입력하세요.
        		return false;
        	}
        	return true;
        };

        /*
         * 수정자 설정
         */
        this.fn_setModifier = function (objDs)
        {
        	var nCnt = objDs.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nType = objDs.getRowType(i);
        		if(nType == Dataset.ROWTYPE_UPDATE)		// 수정의 경우 수정자 반영
        		{
        			objDs.setColumn(i,"MODIFIER", this.gf_getUserId());
        		}
        	}
        };

        /*
         * 두값 비교 후 다르면 ,로 연결
         */
        this.fn_setStringComma = function (postT, preT)
        {
        	if(postT != preT)
        	{
        		if(!this.gfn_isNull(postT))
        		{
        			return postT+","+preT;
        		}
        		else
        		{
        			return preT;
        		}
        	}
        	else
        	{
        		return postT
        	}
        };
        /*
         * LOT정보 Main에 임시로 넣는다.
         */
        this.fn_setMainLots = function ()
        {
        	var nCnt = this.ds_lot.rowcount;
        	var nLotId = "";
        	for(var i=0; i<nCnt; i++)
        	{
        		var nPreLot = this.ds_lot.getColumn(i, "LOT");
        		nLotId = this.fn_setStringComma(nLotId,nPreLot);
        	}
        	var nPos = this.ds_main.rowposition;
        	if(nPos != -1)
        	{
        		this.ds_main.setColumn(nPos, "LOTS", nLotId);
        	}
        };

        /*
         * 체크 후 조회시  app 데이터 확인
         */
        this.fn_chkAppendDate = function ()
        {
        	var nRow = this.ds_main.rowcount;
        	var chkColList = "BOXNO";  // 체크 정보
        	for(var i=0; i<nRow; i++)
        	{
        		var nChkStr = "";						// 찾을 정보 설정
        		for(var j=0; j <1; j++){
        			var chkKey = "BOXNO";
        			var chkValue = this.ds_main.getColumn(i,chkKey);
        			nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        							:" && " +chkKey+"== '" + chkValue+"'";
        		}
        		// 중복 조건
        		var chkCnt = this.ds_mainBox.getCaseCount(nChkStr);
        		if((chkCnt > 0)){
        			this.gfn_Message("CHKBOXNO","" , "warning", "ok");	// 이미 조회된 내용에 동일한 BOX_NO가 있습니다.
        			return false;
        		}
        	}
        	return true;
        };


        /*
         * 메인 그리드 헤더 Size 조정 안보이도록
         */
        this.fn_setMainGridHead = function (nType)
        {
        	var nPoNoIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","PONO");
        	var nDnoIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","DNO");
        	var nInvNoIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","INVNO");
        	var nAsnIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","ASN");
        	var nPackNoIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","PACKNO");
        	var nRemarkIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","REMARK");
        	var nDcIdx 		= this.div_work.form.grd_main.getBindCellIndex("body","DC");
        	// 기본 사이즈
        	if(nType)
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nPoNoIdx	,"size"	,80);
        		this.div_work.form.grd_main.setFormatColProperty(nDnoIdx	,"size"	,80);
        		this.div_work.form.grd_main.setFormatColProperty(nInvNoIdx	,"size"	,120);
        		this.div_work.form.grd_main.setFormatColProperty(nAsnIdx	,"size"	,80);
        		this.div_work.form.grd_main.setFormatColProperty(nPackNoIdx	,"size"	,80);
        		this.div_work.form.grd_main.setFormatColProperty(nRemarkIdx	,"size"	,120);
        		this.div_work.form.grd_main.setFormatColProperty(nDcIdx		,"size"	,80);
        	}
        	else
        	{
        		var nHeadYnCnt = this.ds_headInfo.rowcount;
        		if(nHeadYnCnt != 0)
        		{
        			// 활성화 변수 설정(expr로 설정함)
        			// D/C 설정
        			var nDc = this.ds_headInfo.getColumn(0,"DC");
        			var nDcLineIdx 	= this.div_work.form.grd_line.getBindCellIndex("body","DC");
        			// 소포장 그리드 내 D/C 활성화 비활성화
        			if(nDc == 'SmallPack')
        			{
        				//this.div_work.form.grd_line.setCellProperty("body",nDcIdx,"size",80);
        				this.div_work.form.grd_line.setFormatColProperty(nDcLineIdx,"size",80);
        				this.div_work.form.grd_main.setFormatColProperty(nDcIdx,"size",0);
        			}
        			else if(nDc == 'LargePack')			// [21.04.30] 미사용 추가로 인해 대포장 조건 추가
        			{
        				//this.div_work.form.grd_line.setCellProperty("body",nDcIdx,"size",0);
        				this.div_work.form.grd_line.setFormatColProperty(nDcLineIdx,"size",0);
        				this.div_work.form.grd_main.setFormatColProperty(nDcIdx,"size",80);
        			}
        			else								// [21.04.30] 미사용인경우 전부 사이즈 0
        			{
        				this.div_work.form.grd_line.setFormatColProperty(nDcLineIdx,"size",0);
        				this.div_work.form.grd_main.setFormatColProperty(nDcIdx,"size",0);
        			}
        			var nPoNo 	= this.ds_headInfo.getColumn(0,"PONO");
        			this.fn_setMainHeadCol(nPoNo, nPoNoIdx, 80);
        			var nDno 	= this.ds_headInfo.getColumn(0,"DNO");
        			this.fn_setMainHeadCol(nDno, nDnoIdx, 80);
        			var nInvNo 	= this.ds_headInfo.getColumn(0,"INVNO");
        			this.fn_setMainHeadCol(nInvNo, nInvNoIdx, 120);
        			var nAsn 	= this.ds_headInfo.getColumn(0,"ASN");
        			this.fn_setMainHeadCol(nAsn, nAsnIdx, 80);
        			var nPackNo = this.ds_headInfo.getColumn(0,"PACKNO");
        			this.fn_setMainHeadCol(nPackNo, nPackNoIdx, 80);
        			var nRemark = this.ds_headInfo.getColumn(0,"REMARK");
        			this.fn_setMainHeadCol(nRemark, nRemarkIdx, 120);
        		}
        	}
        };

        /*
         * 헤더 (고객사별)사양정보에 따름 Main Grid 컬럼 숨김 처리
         */
        this.fn_setMainHeadCol = function (nVal, nIdx, nSize)
        {
        	if(nVal == '1')
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nIdx,"size",nSize);
        	}
        	else
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nIdx,"size",0);
        	}
        };

        /*
         * 숫자 앞에 0 추가 하기
         */
        this.fn_LeadingZeros = function(n, digits)
        {
          var zero = '';
          n = n.toString();

          if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++)
              zero += '0';
          }
          return zero + n;
        }

        /*
         * 저장전 내부 BOX NO 설정
         */
        this.fn_setLineBoxNo = function ()
        {
        	var nLineCnt = this.ds_line.rowcount;
        	if(nLineCnt != 0)
        	{
        		// 제일 큰값 구해옴
        		var nMaxVal = this.ds_line.getCaseMax("ENTERPRISEID == '"+this.gf_getEnterpriseId()+"'",'BOXSEQ');

        		if(this.gfn_isNull(nMaxVal))
        		{
        			nMaxVal = 1;
        		}
        		else
        		{
        			nMaxVal = parseInt(nMaxVal)+1;
        		}
        		for(var i=0; i<nLineCnt; i++)
        		{
        			var nBoxSeq = this.ds_line.getColumn(i,"BOXSEQ");
        			if(this.gfn_isNull(nBoxSeq))
        			{
        				// 숫자 앞에 두자리 01~99 까지
        				var nVal = nMaxVal;//this.fn_LeadingZeros(nMaxVal,2);
        				this.ds_line.setColumn(i,"BOXSEQ",nVal);
        				nMaxVal++;
        			}

        		}
        	}
        }

        /*
         * Line에 총 양품수량정보를 담는다.
         */
        this.fn_setLineSumQty = function ()
        {
        	var nSum	= this.ds_main.getColumn(this.ds_main.rowposition,"GOODQTY");	// main의 양품수량

        	this.ds_line.set_updatecontrol(false);
        	var nLineCnt  = this.ds_line.rowcount;
        	for(var l=0; l<nLineCnt; l++)
        	{
        		this.ds_line.setColumn(l,"SUM_QTY",nSum);
        	}
        	this.ds_line.set_updatecontrol(true);
        };

        /*
         * 인보이스가 없는 경우 포장검사자, 주차 수정 가능(삭제는 체크후 삭제 버튼 클릭시) - 그리드 사용 (21.04.13)
         */
        this.fn_chkInvNo = function(col, row)
        {
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	//	var nInvNo = this.ds_main.getColumn(row,"INVNO");			// 21.04.30 - 수정가능 여부
        	var nCustModflag = this.ds_headInfo.getColumn(0,"MOD_FL");		// 21.04.30	- 수정가능여부컬럼값
        	//if(this.gfn_isNull(nInvNo))									// 값이 없으면 수정 가능
        	var nMainRowType	= this.ds_main.getRowType(row);				// 등록 인경우 기존처럼 수정인 경우만
        	if(nMainRowType != Dataset.ROWTYPE_INSERT)						// 21.04.30 수정가능여부값이 1이면 수정가능(사양정보) 등록이외에 경우
        	{
        		if(nCustModflag == 1)
        		{
        			if(col == 'DC')		// 주차의경우
        			{
        				var nR = this.ds_headInfo.getColumn(0,col);
        				if(nR == 'SmallPack' || nR == 'NotInUse')		// [21.04.30] 미사용 추가로 인해 적용
        				{
        					return false;  //(소포장 주차 사용)
        				}
        				else
        				{
        					// [21.05.22] 인게 연동 수정 가능 여부 확인(1)
        					var nRe = this.fn_chkHandOverLot(row);
        					return nRe;  //(대포자 주차 사용)
        				}
        			}
        			else
        			{
        				// [21.05.22] 인게 연동 수정 가능 여부 확인(2)
        				var nRe = this.fn_chkHandOverLot(row);
        				return nRe;
        			}
        		}
        		// [21.05.22] 인게 연동 수정 가능 여부 확인(3)
        		var nRe = this.fn_chkHandOverLot(row);
        		return nRe;		// 수정 불가능
        	}
        	else		// 기존 로직처럼 처리(21.04.30)
        	{
        		if(col == 'DC')		// 주차의경우
        		{
        			var nR = this.ds_headInfo.getColumn(0,col);
        			if(nR == 'SmallPack' || nR == 'NotInUse')		// [21.04.30] 미사용 추가로 인해 적용
        			{
        				return false;  //(소포장 주차 사용)
        			}
        			else
        			{
        				// [21.05.22] 인게 연동 수정 가능 여부 확인(4)
        				var nRe = this.fn_chkHandOverLot(row);
        				return nRe;  //(대포자 주차 사용)
        			}
        		}
        		else
        		{
        			return true;
        		}
        	}
        	return false;
        };

        //****************************************************************
        // [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓]
        //****************************************************************
        /*
         * 메인 기준 정보 [21.05.22]
         */
        this.fn_chkHandOverLot = function (nRow)
        {
        	var nRe = false;
        	var nChkFlag = this.ds_main.getColumn(nRow, "MODIFI_FLAG");
        	if(nChkFlag != "N")
        	{
        		nRe = true;
        	}
        	return nRe;
        };
        //****************************************************************
        // [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        //****************************************************************

        /*
         *	저장전 선택된 row 제외 수량 초기화
         */
        this.fn_setPrdQty = function ()
        {
        	var nMainCnt = this.ds_main.rowcount;
        	var nMainPos = this.ds_main.rowposition;
        	for(var i=0; i<nMainCnt; i++)
        	{
        		var nMainType = this.ds_main.getRowType(i);
        		if(i != nMainPos && (nMainType == Dataset.ROWTYPE_UPDATE))			// 수정인것 중에
        		{
        			var nSeq 	= this.ds_main.getColumn(i,"PACKINGHDRID");
        			var nGood 	= this.ds_main.getColumn(i,"GOODQTY");
        			var nDefect = this.ds_main.getColumn(i,"DEFECTQTY");
        			var nCard 	= this.ds_main.getColumn(i,"CARDQTY");
        			if(!this.gfn_isNull(nSeq))
        			{
        				var nRow = this.ds_mainQty.findRow("PACKINGHDRID",nSeq);
        				var nPreGood = this.ds_mainQty.getColumn(nRow,"GOODQTY");
        				if(nGood != nPreGood)
        				{
        					this.ds_main.setColumn(i,"GOODQTY",nPreGood);
        				}
        				var nPreDefect = this.ds_mainQty.getColumn(nRow,"DEFECTQTY");
        				if(nDefect != nPreDefect)
        				{
        					this.ds_main.setColumn(i,"DEFECTQTY",nPreDefect);
        				}
        				var nPreCard = this.ds_mainQty.getColumn(nRow,"CARDQTY");
        				if(nCard != nPreCard)
        				{
        					this.ds_main.setColumn(i,"CARDQTY",nPreCard);
        				}
        			}
        		}
        	}
        };

        /*
         * 기준 정보에 따른 lot 등록 가능 개수
         */
        this.fn_chkCountLot = function ()
        {
        	var nChk = this.ds_headInfo.getColumn(0,"LOTONLY");

        	if(nChk == '1')
        	{
        		var nLotCnt = this.ds_lot.rowcount;

        		if(nLotCnt != '1')
        		{
        			this.gfn_Message("SelectOnlyOneLot",'' , "warning","ok");//한 개의 Lot만 선택하세요.
        			return false;
        		}
        	}
        	return true;
        };

        /*
         * 마지막 row인 경우 (지정된 컬럼에서 Enter Key 발생시 row 추가) (21.04.26)
         */
        this.fn_setLineTabAdd = function ()
        {
        	//this.div_work_btn_add_ds_line_onclick();
        	// 합수 체크
        	var nSum  = this.div_work.form.msk_lineSummary.value;
        	var nTitle = this.div_work.form.sta_lineSummary.text;
        	if(this.gfn_isNull(nSum))
        	{
        		this.gfn_Message("NoSelectedMsg", nTitle, "warning", "ok");	// 선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return;
        	}

        	// main이 있는 상태에서 값 추가 가능
        	if(!this.fn_checkMain())
        	{
        		return;
        	}

        	// 등록/수정/삭제 가능
        	//this.ds_line.set_enableevent(false);
        	var nPos   = this.ds_main.rowposition;
        	var nMainE = this.ds_main.getColumn(nPos,"ENTERPRISEID");
        	var nMainS = this.ds_main.getColumn(nPos,"SITE");
        	var nMainH = this.ds_main.getColumn(nPos,"PACKINGHDRID");

        	var nAddRow = this.ds_line.addRow();

        	this.ds_line.setColumn(nAddRow, "ENTERPRISEID",nMainE);
        	this.ds_line.setColumn(nAddRow, "SITE",nMainS);
        	this.ds_line.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자
        	this.ds_line.setColumn(nAddRow, "PACKINGHDRID", nMainH);   				// 헤더키값
        	//this.ds_line.set_enableevent(true);

        };

        /*
         * Line 그리드 Enter 입력시 row 추가 후 cell 위치 설정 (21.04.27)
         */
        this.fn_chkLineCell = function (nPos)
        {
        	var nR = nPos;
        	var nPack 	= this.ds_headInfo.getColumn(0,"PACKNO");
        	var nDc		= this.ds_headInfo.getColumn(0,"DC");
        	if(!this.gfn_isNull(nPack))
        	{
        		if(nPack == 1)
        		{
        			nR = 3;
        		}
        		else
        		{
        			if(!this.gfn_isNull(nDc))
        			{
        				if(nDc == 'SmallPack')		// 미사용 대포장인 경우 해당 사항 없음
        				{
        					nR = 4;
        				}
        			}
        		}
        	}
        	return nR;
        };

        /*
         * 포장사양에 따른 return값
         */
        this.fn_SetModifyFlag = function ()
        {
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓] - 기준정보 x -> Main 정보의 인게 lot 확인 후
        	//****************************************************************
        	var nMainPos	 	= this.ds_main.rowposition;
        	var nRe				= this.fn_chkHandOverLot(nMainPos);		// N이 아니면 true(수정가능)
        	return nRe;
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	/*
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	var nCustModflag 	= this.ds_headInfo.getColumn(0,"MOD_FL");		// 21.04.30	- 수정가능여부컬럼값
        	var nMainRowType	= this.ds_main.getRowType(this.ds_main.rowposition);
        	if(nMainRowType != Dataset.ROWTYPE_INSERT)		// 등록상태가 아니면 포장사양 고객사에 따른 수정가능여부 체크
        	{
        		if(nCustModflag != 1)
        		{
        			return false;
        		}
        	}
        	return true;
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	*/
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 검색조건 초기화
         */
        this.fn_formInit = function(obj,e)
        {
        	this.fn_searchReset();
        };

        /*
         * 조회 조건 품목 코드
         */
        this.div_work_div_search_btn_itemId_onclick = function(obj,e)
        {
        	var popupId = "SCH_PRODUCTDEFID";
        	var oArg = {};
        	var opts = "width=850,height=500";
        	// 기존 입력값 있는지 확인
        	var nSearch = this.searchDiv.edt_itemId.value;
        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}
        	this.gfn_openPopup(popupId,"pcm::PCM09400P.xfdl" ,oArg ,opts);
        };

        /*
         * 고객 파트명 조회 팝업 호출
         */
        this.div_work_div_search_btn_custPartNm_onclick = function(obj,e)
        {
        	var nCustId = this.f_custId;      //this.searchDiv.edt_comp.value;
        	if(this.gfn_isNull(nCustId))
        	{
        		// 필수값 입력
        		var nTitle = this.searchDiv.sta_comp.text;
        		this.gfn_Message("InputSomeThing",nTitle , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        		return;
        	}
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	// (21.06.05) - 사이트 정보 콤보 -> 접속 사이트로 설정
        	//sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_sendSite.value );
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());		//  접속한 사이트 정보로 설정 변경
        	sArgs += this.gfn_setParam("CUSTOMERID",nCustId);
        	// 고객파트명 공통팝업 호출
        	this.fn_openPop("CUST_PART_NM","P00190", sArgs); //작업장 조회
        };

        /*
         * 고객사 팝업 호출(Sample 정보가 추가 되어야 한다.)
         */
        this.div_work_div_search_btn_comp_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	// (21.06.05) 사이트정보 콤보 -> 접속한 사이트 정보로 변경
        	//sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_sendSite.value); 	// 선택한 Site
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 	// 선택한 Site -> 접속한 사이트 정보로 설정 변경
        	//sArgs += this.gfn_setParam("CMB_TYPE", 'Sample'); 	// Sample 추가 (21.04.22) - 제거
        	sArgs += this.gfn_setParam("PRGMNAME", 'Common_1'); // 사양정보에 등록된 프로그램명
        	this.fn_openPop("CUST_ID_SAMPLE","P00191", sArgs); //작업장 조회
        };

        /*
         * 고객사명 직접 입력시 초기화 시킴 . 고객사 코드
         */
        this.div_work_div_search_edt_comp_onkeydown = function(obj,e)
        {
        	this.f_custId = "";			// 고객사 id 초기화
        };

        /*
         * 출력 버튼 다이나믹 적용
         */
        this.dynamic_btn_onclick = function(obj,e)
        {
        	this.v_printValue = "";			// 21.04.15 라벨 출력 후 변수확인용

        	var nIdx = obj.name.indexOf('_', 0);
        	var nName = obj.name.substring(nIdx+1, obj.name.length);

        	// 버튼에 해당하는 소스 정보 데이터셋
        	var nCnt = this.ds_btnInfo.rowcount;

            if(nCnt == 0) return;

        	var nIdx = this.ds_btnInfo.findRow("BUTTONNAME", nName);

        	var nSrcNm = "";		// 소스명
        	if(nIdx != -1)
        	{
        		nSrcNm = this.ds_btnInfo.getColumn(nIdx, "SRCNAME");
        	}
        	// 리턴값
        	//trace(" ## [버튼명(출력)] ## : "+nName+" || "+nCnt+" || "+nIdx+" [rd 호출전 소스 정보] "+nSrcNm+" || [RD 호출 나머지 값]");
        	// 저장전 버튼 클릭 안되도록..(일괄등록쪽은 그리드랑 같이 움직인다.. 클릭시 값 있는지 체크/그리드 내용 전부 저장되었는지 확인 필요해보임)
        	// 버튼에 해당하는 소스 정보 구하기
        	// 나머지 출력 정보 설정 (단건, 다건)
        	var nHdrId 		= "";			// 다중선택된 헤더값
        	var nLineId 	= "";			// 내부라벨의 헤더값
        	var nHdrOneMain	= "";			// Dno,Inv -> (값 1개만 )
        	// 외부라벨의 경우 체크 확인 , 송화단 출력, EXPORT1, EXPORT2
        	if(nName == 'pack05' || nName == 'pack09' || nName == 'pack10' || nName == 'pack11')
        	{
        		// 외부 라벨의 경우 (체크 된 것만)
        		var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        		var nDsCnt  = this.ds_main.rowcount;
        		// 선택건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        			return;
        		}
        		// 저장 (기입력된 내용 수정 가능)
        		// 체크된 내용 중 넘어감(주차/key값 넘겨줌 ,구분)
        		var nCnt 	= this.ds_main.rowcount;

        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk = this.ds_main.getColumn(i,"CHK");
        			if(nChk == 1)
        			{
        				// 선택된 값의 pk값
        				var nPreHdrId = this.ds_main.getColumn(i, "PACKINGHDRID");
        				nHdrId = this.fn_setStringComma(nHdrId,nPreHdrId);
        			}
        		}
        	}
        	else if(nName == 'pack06')		// 내부라벨의 경우 체크 확인
        	{
        		// Main 헤더값
        		//nHdrId  = this.ds_main.getColumn(this.ds_main.rowposition,"PACKINGHDRID");

        		// 내부 라벨의 경우 (체크 된 것만)
        		var nChkLineCnt = this.ds_line.getCaseCount("CHK=='1'");
        		var nDtlCnt 	= this.ds_line.rowcount;

        		// 선택건 체크
        		if (nChkLineCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        			return;
        		}
        		for(var j=0; j<nDtlCnt; j++)
        		{
        			var nChk = this.ds_line.getColumn(j,"CHK");
        			if(nChk == 1)
        			{
        				// 선택된 값의 pk값
        				var nPreDtlId = this.ds_line.getColumn(j, "PACKINGDTLID");
        				nLineId = this.fn_setStringComma(nLineId,nPreDtlId);
        			}
        		}
        	}
        	else if(nName == 'pack07' || nName == 'pack08') // 출고 집계, QR출력
        	{
        		// Dno 존재 해야 가능
        		// 하나의 Dno만 전달 가능.
        		// 외부 라벨의 경우 (체크 된 것만)
        		var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        		var nDsCnt  = this.ds_main.rowcount;
        		// 선택건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        			return;
        		}
        		// Dno 집계
        		var nCnt 	= this.ds_main.rowcount;

        		var nCol	= "";		// 찾을 칼럼명
        		var nTitle	= "";		// MSG 타이틀


        		if(nName == 'pack07')			// 출고집계(DNO)
        		{
        			nCol = "DNO";
        			nTitle = this.nfn_getDictionaryname("pack07",true);
        		}
        		else if(nName == 'pack08')		// QR코드(INVNO)
        		{
        			nCol = "INVNO";
        			nTitle = this.nfn_getDictionaryname("pack08",true);
        		}

        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk = this.ds_main.getColumn(i,"CHK");
        			if(nChk == 1)
        			{
        				// 선택된 값의 pk값
        				var nPreOne = this.ds_main.getColumn(i, nCol);
        				// 21.04.15 (dno, invno 없는 경우)
        				if(this.gfn_isNull(nPreOne))
        				{
        					this.gfn_Message("MessageParamIsNull", [nCol], "warning", "ok");		// {0}가 없습니다.
        					return;
        				}
        				nHdrOneMain = this.fn_setStringComma(nHdrOneMain,nPreOne);

        			}
        		}
        		// 21.04.15 (dno, invno 없는 경우)
        		if(this.gfn_isNull(nHdrOneMain))
        		{
        			this.gfn_Message("MessageParamIsNull", [nCol], "warning", "ok");		// {0}가 없습니다.
        			return;
        		}
        		var nLenOne = nHdrOneMain.split(",").length;
        		if(nLenOne != 1)
        		{
        			this.gfn_Message("ValidPackOne", [nTitle,nCol], "warning", "ok");		// 출고집계 출력은 하나의 DNO만 선택해야합니다.
        			return;
        		}
        	}
        	// 수정된 내용 있으면 저장 후 진행 가능.(저장 후 라벨 출력)
        	var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nAddCnt > 0)
        	{
        		this.gfn_Message("CheckAfterAdd",'' , "warning","ok");// 추가된 내용이 있습니다. 저장 후 진행해 주십시오.
        		return;
        	}
        	// rd 출력 부분
        	this.fn_setRdReport(nName, nHdrId, nLineId, nHdrOneMain, nSrcNm);
        };
        /*
         * 등록 버튼 다이나믹 적용
         */
        this.dynamic_create_btn_onclick = function(obj,e)
        {
        	var nIdx = obj.name.indexOf('_', 0);
        	var nName = obj.name.substring(nIdx, obj.name.length);
        	var nEditNm = "edt"+nName;
        	var nEd = this.searchDiv.div_btn.form.all[nEditNm];  // edit 객체 구함

        	var nText = nEd.value;
        	if(this.gfn_isNull(nText))
        	{
        		this.gfn_Message("AllApplyMsg",'' , "warning","ok");//입력된 값이 없어서 일괄등록 할 수 없습니다.
        		return;
        	}
        	var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        	// 체크건 확인
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	// 수정된 내용 있으면 저장 후 진행 가능.
        	var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nAddCnt > 0)
        	{
        		this.gfn_Message("CheckAfterAdd",'' , "warning","ok");// 추가된 내용이 있습니다. 저장 후 진행해 주십시오.
        		return;
        	}
        	// 체크된 내용 확인
        	var nMainCnt = this.ds_main.rowcount;
        	for(var i=0; i<nMainCnt; i++)
        	{
        		var nChk = this.ds_main.getColumn(i,"CHK");
        		if(nChk == '1')
        		{
        			if(nName == '_pack03')
        			{
        				this.ds_main.setColumn(i,"INVNO",nText);
        			}
        			else if(nName == '_pack04')
        			{
        				this.ds_main.setColumn(i,"ASN",nText);
        				this.ds_main.setColumn(i,"MODIFIER",this.gf_getUserId());		// asn만 수정시 수정자명.
        			}
        		}
        	}
        	// 수정 로직 진행(수정 저장 - main) - 일괄등록
        	var sSvcID 			= "savePackLabelUpdate";
        	var sController 	= "/pcm07900/savePackLabelUpdate.do";
        	var sInDatasets 	= "ds_main=ds_main:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 메인 그리드 추가
         * 1건만 신규 추가 가능
         */
        this.div_work_btn_add_ds_main_onclick = function(obj,e)
        {
        	// 고객사 정보 우선 선택 하도록 설정
        	if(!this.fn_chkComp()) return;

        	// 추가시 row 1건만 가능(신규는)
        	var nCnt = this.ds_main.rowcount;
        	// 그리드 상에 추가 건은 1건만 진행 가능
        	var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nAddCnt > 0)
        	{
        		this.gfn_Message("PossibleAdd",'1' , "warning","ok");// {0} 건 까지만 추가 가능합니다.
        		return;
        	}
        	var nAddRow = this.ds_main.addRow();	// 추가
        	// (21.06.05) 콤보값 기본 사이트로 설정 변경
        	//var nSearchSite = this.searchDiv.cbo_sendSite.value;
        	var nSearchSite = this.v_defaultPlant;   // (21.06.05) 접속자의 기본 사이트로 설정
        	if(!this.gfn_isNull(nSearchSite))
        	{
        		this.ds_main.setColumn(nAddRow,"SITE",nSearchSite);		//  초기 설정 (site를 전체가 아니면 설정 가능)
        	}

        	var nCustId = this.f_custId;      //this.searchDiv.edt_comp.value;
        	var nCustNm = this.searchDiv.edt_comp.value;

        	this.ds_main.setColumn(nAddRow,"ENTERPRISEID",this.gf_getEnterpriseId());
        	// 21.04.13 포장작업자 팝업으로
        	//this.ds_main.setColumn(nAddRow,"PACKING_ID",this.gf_getUserId());
        	//this.ds_main.setColumn(nAddRow,"PACKING_NAME",this.gf_getUserNm());
        	this.ds_main.setColumn(nAddRow,"COMP",nCustId);				//  조회 조건으로 설정 (수정 x) -> 수정 가능해지면 뒤에 헤더값 변경 되어야 된다.
        	this.ds_main.setColumn(nAddRow,"COMP_NAME",nCustNm);		//  조회 조건 우선 선택 된 값으로 선택 (수정 X)
        	this.ds_main.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자
        	// 날짜 처리, 날짜 테스트, 서버 일시
        	var sYDate = this.nfn_getCurrentSystemTime(0,0,'yesterday');
        	var arrDate = sYDate.split(",");
        	var sDateFrom = arrDate[1];		// 어제
        	var sDate = arrDate[2];			// 오늘
        	var sDateTo = arrDate[0];		// 현재
        	var sTime = sDateTo.substring(8,14);
        	// 08:30 이전이면 전날 선택
        	var nRdate = "";
        	if(parseInt(sTime) >= parseInt('083000'))
        	{
        		this.ds_main.setColumn(nAddRow,"PACK_DATE",sDate);			// 08:30 이후 이면 오늘 날짜
        	}
        	else
        	{
        		this.ds_main.setColumn(nAddRow,"PACK_DATE",sDateFrom);		// 08:30 이전 이면 어제 날짜
        	}
        	// 샘플의 경우 합수 직접 입력
        	//if(nCustId == '*')
        	if(nCustId == 'Common_1_*')		// 블럭마다 달라짐
        	{
        		this.div_work.form.msk_lineSummary.set_enable(true);
        		this.div_work.form.msk_lineSummary.set_readonly(false);
        	}
        	else
        	{
        		this.div_work.form.msk_lineSummary.set_enable(false);
        		this.div_work.form.msk_lineSummary.set_readonly(true);
        	}
        	// 기본 LOT입력창
        	//this.div_work.form.ckb_lotInput.set_value(false);
        	this.div_work.form.ckb_lotInput.set_value("N");

        	this.div_work.form.btn_lotSearch.set_enable(true);
        	this.div_work.form.btn_lotSearch.set_enableevent(true);
        	this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        	this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        	//this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","mask");
        	//this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","none");
        	// 직접 입력 한다고 하면. (21.06.08) - 기본 수정 가능 수량은..
        	this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","maskeditcontrol");
        	this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","mask");
        	// 활성화 비활성화 expr로 함수 호출함
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	// 내부 box no 조정
        	var nBoxLineNo = this.ds_headInfo.getColumn(0,"BOXLINENO");
        	var nBoxLineNoIdx = this.div_work.form.grd_line.getBindCellIndex("body","BOXLINENO");
        	if(nBoxLineNo == '1')
        	{
        		this.div_work.form.btn_boxLIneNoCreate.set_enable(true);
        		this.div_work.form.btn_boxLIneNoCreate.set_enableevent(true);
        		this.div_work.form.btn_boxLIneNoCancel.set_enable(true);
        		this.div_work.form.btn_boxLIneNoCancel.set_enableevent(true);
        		this.div_work.form.grd_line.setFormatColProperty(nBoxLineNoIdx,"size",120);
        	}
        	else
        	{
        		this.div_work.form.btn_boxLIneNoCreate.set_enable(false);
        		this.div_work.form.btn_boxLIneNoCreate.set_enableevent(false);
        		this.div_work.form.btn_boxLIneNoCancel.set_enable(false);
        		this.div_work.form.btn_boxLIneNoCancel.set_enableevent(false);
        		this.div_work.form.grd_line.setFormatColProperty(nBoxLineNoIdx,"size",0);
        	}
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        };
        /*
         * 메인 그리드 삭제
         */
        this.div_work_btn_del_ds_main_onclick = function(obj,e)
        {
        	// 하단그리드 초기화 msg 함수 필요
        	if(!this.fn_chkRowChange())
        	{
        		return;
        	}
        	// 21.04.13 포장검사자, dc 수정 및 삭제 가능 invno 여부에 따라서
        	/*
        	var nMainCnt = this.ds_main.rowcount;
        	for(var m=0; m<nMainCnt; m++)
        	{
        		if ((this.ds_main.getColumn(m, "CHK") == "1"))   // 체크된 건 중에
        		{
        			var nInvNo = this.ds_main.getColumn(m,"INVNO");
        			if(!this.gfn_isNull(nInvNo))
        			{
        				this.gfn_Message("CHKPACKINVNO", '', "warning", "ok");	// 선택된 내용 중 이미 등록된 인보이스NO가 있습니다.
        				return;
        			}
        		}
        	}
        	// 하단 그리드 초기화
        	this.ds_line.clearData();
        	this.ds_lot.clearData();
        	this.fn_deleteGrid(this.ds_main, false);	// 체크 박스 선택 값 삭제
        	*/
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓]
        	//****************************************************************
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        	// 삭제건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        		return;
        	}
        	// 삭제 하려는 건 중 인계 lot 확인
        	var nFlagCnt = 0;
        	var nCnt = this.ds_main.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nChk 	= this.ds_main.getColumn(i,"MODIFI_FLAG");
        		var nChkYn 	= this.ds_main.getColumn(i,"CHK");
        		if(nChk == "N" && nChkYn == "1")
        		{
        			nFlagCnt += 1;
        		}
        	}
        	if(nFlagCnt == 0)				// main이 등록인 상태에서만 가능
        	{
        		// 하단 그리드 초기화
        		this.ds_line.clearData();
        		this.ds_lot.clearData();
        		this.fn_deleteGrid(this.ds_main, false);	// 체크 박스 선택 값 삭제  (신규건 이외에도 삭제 가능)
        	}
        	else
        	{
        		this.gfn_Message("PackingHandOverCheck", null, "warning", "ok");	// 인계처리된 경우 삭제할 수 없습니다.
        		return;
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType == Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        		// 하단 그리드 초기화
        		this.ds_line.clearData();
        		this.ds_lot.clearData();

        		this.fn_deleteGrid(this.ds_main, true);	// 체크 박스 선택 값 삭제
        	}
        	else
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		return;
        	}
        	*/

        };

        /*
         * 고객 모델명 팝업창
         */
        this.div_work_grd_main_onexpanddown = function(obj,e)
        {
        	// site, 고객사 정보 필수 입력값 없으면 호출 안됨.
        	var nPos = e.row;
        	var nSite = this.ds_main.getColumn(e.row,"SITE");
        	var nComp = this.ds_main.getColumn(e.row,"COMP");
        	if(this.gfn_isNull(nSite))
        	{
        		this.gfn_Message("PriorityInputSomething",'Site' , "warning","ok");// {0}을(를) 먼저 입력하세요.
        		return;
        	}
        	if(this.gfn_isNull(nComp))
        	{
        		this.gfn_Message("PriorityInputSomething",'고객사' , "warning","ok");// {0}을(를) 먼저 입력하세요.
        		return;
        	}
        	var nModelIdx 		= this.div_work.form.grd_main.getBindCellIndex("body","CUSTOMERMODELNM");
        	var nInpNameIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","INPNAME");
        	var nPackingNameIdx = this.div_work.form.grd_main.getBindCellIndex("body","PACKING_NAME");			// 21.04.13 포장작업자도 팝업
        	if(e.cell == nModelIdx)
        	{
        		// 팝업 호출 조건
        		var sArgs = {};
        		sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID

        		// (21.06.05) 메인의 선택한 site 정보에서 -> 접속한 사이트 정보로 변경
        		//sArgs += this.gfn_setParam("PLANTID", nSite); 			// Site
        		sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			// Site
        		sArgs += this.gfn_setParam("CUSTOMERID", nComp); 		// 고객사
        		// 팝업 호출
        		this.fn_openPop("PACK_DTL","P00193", sArgs); 		//고객모델명 조회
        	}
        	if(e.cell == nInpNameIdx)
        	{
        		var sArgs = {};
        		this.fn_openPop("GRD_USER","P00249", sArgs);		// 포장 검사자
        	}
        	if(e.cell == nPackingNameIdx)		// 21.04.13 포장작업자
        	{
        		var sArgs = {};
        		this.fn_openPop("GRD_PACK_USER","P00249", sArgs);		// 포장 검사자
        	}
        };

        this.div_work_ckb_lotInput_onclick = function(obj,e)
        {

        };
        /*
         * 직접 입력 체크 박스 변경시
         */
        this.div_work_ckb_lotInput_onchanged = function(obj,e)
        {
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType != Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		this.div_work.form.ckb_lotInput.set_value(e.prevalue);
        		return;
        	}
        	*/
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType != Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        		this.gfn_Message("ComputationalChk", '', "warning", "ok");	// Main이 추가 상태인 경우만 변경 가능합니다.
        		this.div_work.form.ckb_lotInput.set_value(e.prevalue);
        		return;
        	}
        	// main이 있는 상태에서 값 추가 가능
        	if(!this.fn_checkMain())
        	{
        		this.div_work.form.ckb_lotInput.set_value(e.prevalue);
        		return;
        	}

        	if(e.postvalue == "Y")
        	{
        		this.div_work.form.btn_lotSearch.set_enable(false);
        		this.div_work.form.btn_lotSearch.set_enableevent(false);
        		// 직접 입력
        		this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","editcontrol");
        		this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","normal");
        		//this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        		//this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        		this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","maskeditcontrol");
        		this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","mask");
        	}
        	else
        	{
        		this.div_work.form.btn_lotSearch.set_enable(true);
        		this.div_work.form.btn_lotSearch.set_enableevent(true);
        		this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        		this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        		//this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","mask");
        		//this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","none");

        		// 직접 입력 한다고 하면.
        		this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","maskeditcontrol");
        		this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","mask");
        	}
        	//this.ds_lot.clearData();
        	// 존자하면 삭제를 해야됨.
        	var nCnt = this.ds_lot.rowcount;
        	for(var i=nCnt-1; i>=0;i--)
        	{
        		// 그리드 선택된행 삭제
        		this.ds_lot.deleteRow(i);
        	}
        };

        /*
         * lot 조회 팝업 호출
         */
        this.div_work_btn_lotSearch_onclick = function(obj,e)
        {
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	if(!this.fn_SetModifyFlag())
        	{
        		return false;
        	}
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType != Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		return;
        	}
        	*/
        	var nMainCnt = this.ds_main.rowcount;
        	if(nMainCnt == 0)
        	{
        		this.gfn_Message("CHKMAINYN",'' , "warning","ok");// 메인을 먼저 등록 하세요.
        		return;
        	}
        	// site, 고객사 정보 필수 입력값 없으면 호출 안됨.
        	var nPos = this.ds_main.rowposition;
        	var nComp = this.ds_main.getColumn(nPos,"COMP");
        	var nProdId = this.ds_main.getColumn(nPos,"PRODUCTDEFID");
        	// (21.06.08)  rev 추가
        	var nRev	= this.ds_main.getColumn(nPos,"PRODUCTDEFVERSION");
        	// (21.06.05) 사이트 메인 선택 값 -> 접속한 사이트 기준으로 수정
        	//var nSite = this.ds_main.getColumn(nPos,"SITE");
        	var nSite = this.gf_getSiteType();					// (21.06.05) 접속한 사이트로 설정
        	if(this.gfn_isNull(nProdId))
        	{
        		var nText = this.nfn_getDictionaryname('DirectItemCode',true)		// 자사품목코드
        		this.gfn_Message("PriorityInputSomething",nText , "warning","ok");// {0}을(를) 먼저 입력하세요.
        		return;
        	}
        	if(this.gfn_isNull(nComp))
        	{
        		this.gfn_Message("PriorityInputSomething",'고객사' , "warning","ok");// {0}을(를) 먼저 입력하세요.
        		return;
        	}
        	// lot, 포장, 사용자의 해당 작업장의 lot 목록 조회
        	var nCustId = this.f_custId;      //this.searchDiv.edt_comp.value;
        	if(this.gfn_isNull(nCustId))
        	{
        		// 필수값 입력
        		var nTitle = this.searchDiv.sta_comp.text;
        		this.gfn_Message("InputSomeThing",nTitle , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        		return;
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓]
        	//****************************************************************
        	var nChkOneLot = this.ds_headInfo.getColumn(0,"LOTONLY");		// 포장사양 Lot 체크 확인
        	if(nChkOneLot == '1')											// 체크인 경우(하나의 lot만 입력시)
        	{
        		var nLotCnt = this.ds_lot.rowcount;
        		if(nLotCnt == 1)
        		{
        			return;
        		}
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	// 필수 조회 조건
        	var sArgs = {};
        	//nProdId = '1060839A4';
        	sArgs += this.gfn_setParam("PRODUCTDEFID", nProdId);		// 품목코드
        	sArgs += this.gfn_setParam("CUSTOMERID", nComp);			// 고객사코드
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());		// ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID", nSite );				// site
        	sArgs += this.gfn_setParam("ProcessState",'Wait,Run');
        	sArgs += this.gfn_setParam("USERID",this.gf_getUserId());	// 사용자
        	sArgs += this.gfn_setParam("REV",nRev);						// Rev 추가  (21.06.08)
        	// LOT 조회 공통팝업 호출
        	this.fn_openPop("PACK_LOT_ID","P00204", sArgs); //작업장 조회

        };

        /*
         * Lot 추가 이벤트
         */
        this.div_work_btn_add_ds_lot_onclick = function(obj,e)
        {
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType == Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        	*/
        	var nMainCnt = this.ds_main.rowcount;
        	if(nMainCnt == 0)
        	{
        		this.gfn_Message("CHKMAINYN",'' , "warning","ok");// 메인을 먼저 등록 하세요.
        		return;
        	}
        	// main이 있는 상태에서 값 추가 가능
        	if(!this.fn_checkMain())
        	{
        		return;
        	}
        	// 무전산의 경우만 등록 가능 / lot 조회 시 팝업으로 입력
        	var nChk = this.div_work.form.ckb_lotInput.value;
        	if(nChk != "Y")
        	{
        		this.gfn_Message("PACKLOTADDCHECK", "", "warning", "ok"); // 무전산인 경우만 추가 할 수 있습니다. 전산인 경우 lot조회로 추가하세요.
        		return;
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓]
        	//****************************************************************
        	var nChkOneLot = this.ds_headInfo.getColumn(0,"LOTONLY");		// 포장사양 Lot 체크 확인
        	if(nChkOneLot == '1')											// 체크인 경우(하나의 lot만 입력시)
        	{
        		var nLotCnt = this.ds_lot.rowcount;
        		if(nLotCnt == 1)
        		{
        			return;
        		}
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	// 등록/ 삭제 / 수정 가능
        	var nPos = this.ds_main.rowposition;
        	var nMainE = this.ds_main.getColumn(nPos,"ENTERPRISEID");
        	var nMainS = this.ds_main.getColumn(nPos,"SITE");
        	var nMainH = this.ds_main.getColumn(nPos,"PACKINGHDRID");
        	var nAddRow = this.ds_lot.addRow();
        	this.ds_lot.setColumn(nAddRow, "ENTERPRISEID"	, nMainE);
        	this.ds_lot.setColumn(nAddRow, "PLANTID"		, nMainS);
        	this.ds_lot.setColumn(nAddRow, "PACKINGHDRID"	, nMainH);							// 헤더키값
        	this.ds_lot.setColumn(nAddRow, "CREATER"		, this.gf_getUserId());   			// 담당자
        	// 직접입력
        	if(nChk == "Y")
        	{
        		this.ds_lot.setColumn(nAddRow, "LOT"		, "00000000-0000-0000000-000-0-0"); // lot  (21.04.27) 추가 - 기본 설정
        	}
        	/*
        	}
        	else
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		return;
        	}
        	*/
        	// 포장사양 정보 Lot체크시(Lot 하나만 입력 가능) - 합수 계산산 lot의 첫row값으로 자동 설정 (21.04.23)
        	var nChk = this.ds_headInfo.getColumn(0,"LOTONLY");		// 포장사양 Lot 체크 확인
        	if(nChk == '1')											// 체크인 경우(하나의 lot만 입력시)
        	{
        		var nLotCnt = this.ds_lot.rowcount;
        		if(nLotCnt == 1)	// 등록해 놓은 값이 있으면(t)
        		{
        			// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)
        			var nDsPos  = this.ds_main.rowposition;
        			this.fn_setMainQty(nDsPos);
        		}
        	}
        };
        /*
         * Lot 삭제 이벤트
         */
        this.div_work_btn_del_ds_lot_onclick = function(obj,e)
        {
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	if(!this.fn_SetModifyFlag())
        	{
        		return false;
        	}
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	var nChkCnt = this.ds_lot.rowcount;
        	var nDsPos  = this.ds_lot.rowposition
        	// 삭제건 체크
        	if (nChkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType == Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        	*/
        	// 등록 / 수정 / 삭제 lot
        	// 그리드 선택된행 삭제
        	this.ds_lot.deleteRow(nDsPos);
        	/*
        	}
        	else
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		return;
        	}
        	*/
        	// 포장사양 정보 Lot체크시(Lot 하나만 입력 가능) - 합수 계산산 lot의 첫row값으로 자동 설정 (21.04.23)
        	var nChk = this.ds_headInfo.getColumn(0,"LOTONLY");		// 포장사양 Lot 체크 확인
        	if(nChk == '1')											// 체크인 경우(하나의 lot만 입력시)
        	{
        		var nLotCnt = this.ds_lot.rowcount;
        		if(nLotCnt == 1)	// 마지막 row이면 삭제후
        		{
        			// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)
        			var nDsPos  = this.ds_main.rowposition;
        			this.fn_setMainQty(nDsPos);
        		}
        	}
        };

        /*
         * x_out, CARD 값 변경시 자동 계산
         */
        this.ds_line_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'CHK')
        	{
        		// 21.05.22 - 체크박스인경우 상태 변경 안되도록
        		this.ds_line.set_updatecontrol(true);
        		return;
        	}
        	var nSum = this.div_work.form.msk_lineSummary.value;  // 합수가 1인 경우
        	if(nSum != '1')
        	{
        		var nXout = this.ds_line.getColumn(e.row,"X_OUT");
        		var nCard = this.ds_line.getColumn(e.row,"CARD");
        		var nSum  = this.div_work.form.msk_lineSummary.value;
        		var nGoodQty  = 0;
        		var nDefectQty = 0;
        		// 두값과 합수 값이 존재 해야 계산 가능.
        		if(!this.gfn_isNull(nXout) && !this.gfn_isNull(nCard) && !this.gfn_isNull(nSum))
        		{
        			// 계산 가능
        			nGoodQty = (nSum - nXout) * nCard;
        			nDefectQty = (nSum * nCard)-nGoodQty;
        		}
        		else
        		{
        			nGoodQty = 0;
        			nDefectQty = 0;
        		}
        		// 불량수
        		if(parseInt(nDefectQty) < 0)
        		{
        			this.gfn_Message("NoDefectQtyMinus", '', "warning", "ok");	// 불량수량은 음수가 될 수 없습니다.
        			this.ds_line.setColumn(e.row, "X_OUT", '');
        			this.ds_line.setColumn(e.row, "CARD", '');
        			this.ds_line.setColumn(e.row, "GOODQTY", '');
        			this.ds_line.setColumn(e.row, "DEFECTQTY", '');
        			return;
        		}

        		// 양품수량
        		if(parseInt(nGoodQty) < 0)
        		{
        			this.gfn_Message("GoodQtyLargerThanZero", '', "warning", "ok");	// 양품수량은 0 보다 커야 합니다.
        			this.ds_line.setColumn(e.row, "X_OUT", '');
        			this.ds_line.setColumn(e.row, "CARD", '');
        			this.ds_line.setColumn(e.row, "GOODQTY", '');
        			this.ds_line.setColumn(e.row, "DEFECTQTY", '');
        			return;
        		}

        		// 계산
        		this.ds_line.setColumn(e.row, "GOODQTY", nGoodQty);
        		this.ds_line.setColumn(e.row, "DEFECTQTY", nDefectQty);
        	}

        	// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)
        	var nDsPos  = this.ds_main.rowposition;
        	this.fn_setMainQty(nDsPos);
        };

        /*
         * 라인 추가 이벤트
         */
        this.div_work_btn_add_ds_line_onclick = function(obj,e)
        {
        	// 합수 체크
        	var nSum  = this.div_work.form.msk_lineSummary.value;
        	var nTitle = this.div_work.form.sta_lineSummary.text;
        	if(this.gfn_isNull(nSum))
        	{
        		this.gfn_Message("NoSelectedMsg", nTitle, "warning", "ok");	// 선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return;
        	}
        	// main이 있는 상태에서 값 추가 가능
        	if(!this.fn_checkMain())
        	{
        		return;
        	}
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType == Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        	*/
        	// 등록/수정/삭제 가능
        	var nPos = this.ds_main.rowposition;
        	var nMainE = this.ds_main.getColumn(nPos,"ENTERPRISEID");
        	var nMainS = this.ds_main.getColumn(nPos,"SITE");
        	var nMainH = this.ds_main.getColumn(nPos,"PACKINGHDRID");
        	var nAddRow = this.ds_line.addRow();
        	this.ds_line.setColumn(nAddRow, "ENTERPRISEID",nMainE);
        	this.ds_line.setColumn(nAddRow, "SITE",nMainS);
        	this.ds_line.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자
        	this.ds_line.setColumn(nAddRow, "PACKINGHDRID", nMainH);   				// 헤더키값
        	/*
        	}
        	else
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		return;
        	}
        	*/
        };
        /*
         * 라인 삭제 이벤트
         */
        this.div_work_btn_del_ds_line_onclick = function(obj,e)
        {
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	if(!this.fn_SetModifyFlag())
        	{
        		return false;
        	}
        	// [21.04.30] 포장사양정보 수정가능여부 체크
        	/*
        	var nPos = this.ds_main.rowposition;
        	var nDsType = this.ds_main.getRowType(nPos);
        	if(nDsType == Dataset.ROWTYPE_INSERT)		// main이 등록인 상태에서만 가능
        	{
        	*/
        	// 등록/수정/삭제 가능
        	this.fn_deleteGrid(this.ds_line, false);	// 체크 박스 선택 값 삭제
        	/*
        	}
        	else
        	{
        		var nTitle = this.div_work.form.sta_mainTitle.text;
        		this.gfn_Message("NoaddAndDelet", nTitle, "warning", "ok");	// {0}이 추가 상태인 경우만 추가/삭제 가능합니다.
        		return;
        	}
        	*/
        	// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)
        	var nDsPos  = this.ds_main.rowposition;
        	this.fn_setMainQty(nDsPos);
        };

        /*
         * Main 그리드 더블 클릭시 (Inv no 팝업 호출)
         */
        this.div_work_grd_main_oncelldblclick = function(obj,e)
        {
        	// 사양정보에 체크되어 있고, 저장이 다 되어 있는 상태여야 함
        	var nR = this.ds_headInfo.getColumn(0,'INVNO');
        	//var nDsType = this.ds_main.getRowType(e.row);
        	var nLotCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nLotCnt > 0)		// main이 등록인 상태에서만 가능
        	{
        		return;
        	}
        	if(nR != 1)
        	{
        		return;
        	}
        	var nInvNoIdx = this.div_work.form.grd_main.getBindCellIndex("body","INVNO");
        	if(e.cell == nInvNoIdx)		// 인보이스인 경우만 조회
        	{
        		var nChkInvNo 	= this.ds_main.getColumn(this.ds_main.rowposition,"INVNO");
        		// 체크건 확인
        		if(this.gfn_isNull(nChkInvNo))
        		{
        			this.gfn_Message("NoSelectData", "", "warning", "ok");		// 조회할 데이터가 없습니다.
        			return;
        		}
        		// 팝업을 호출한다 필수값 설정
        		var popupId = "INV_NO_REG";
        		var oArg = {};
        		var opts = "width=850,height=500";

        		// 필수값 설정 (pk값, inv no값, D/N -> popup으로 보냄)
        		//var nDc 	= "";//this.ds_main.getColumn(e.row, "DC");  		// PK값 (주차 정보) -
        		//var nSum 	= 0;// 총 합계 수량 넘겨줌
        		var nEnt	= "";
        		var nSite	= "";
        		var nHdrId	= "";
        		//var nInvNoText	= this.searchDiv.div_btn.form.edt_pack03.value;  // 제거
        		// 체크된 내용 중 넘어감(주차/key값 넘겨줌 ,구분)
        		var nPos = this.ds_main.rowposition;
        		// popup으로 넘길 값들
        		var nPreEnt = this.ds_main.getColumn(nPos, "ENTERPRISEID");
        		nEnt = this.fn_setStringComma(nEnt,nPreEnt);
        		var nPreSite = this.ds_main.getColumn(nPos, "SITE");
        		nSite = this.fn_setStringComma(nSite,nPreSite);
        		var nPreHdrId = this.ds_main.getColumn(nPos, "PACKINGHDRID");
        		nHdrId = this.fn_setStringComma(nHdrId,nPreHdrId);
        		var nLenEnt = nEnt.split(",").length;
        		var nLenSite = nSite.split(",").length;
        		if(nLenEnt > 1 ||  nLenSite > 1)
        		{
        			//trace(" #### [ent / site 종류가 1개이상임] ### ");
        			return;
        		}

        		if(!this.gfn_isNull(nEnt) || !this.gfn_isNull(nSite) || !this.gfn_isNull(nHdrId)  )
        		{
        			// 기입력된 값이 있으면
        			oArg.arg_invNo 	= nChkInvNo;		// 등록된 inv No
        			//oArg.arg_Sum 	= nSum;				// 합계값
        			oArg.arg_Ent 	= nEnt;				// ent
        			oArg.arg_Site 	= nSite;			// site
        			oArg.arg_Hdr 	= nHdrId;			// main key
        			//oArg.arg_Dc 	= nDc;				// 주차
        			oArg.arg_Type 	= "S";				// 등록/조회

        		}
        		else
        		{
        			this.gfn_Message("ValidateRequiredData", "", "warning", "ok");	// 필수값중 일부가 입력되지 않았습니다. 다시 확인해주세요.
        			return;
        		}
        		this.gfn_openPopup(popupId,"pcm::PCM07900P.xfdl" ,oArg ,opts);
        	}

        };

        /*
         * 메인 그리드 row 변경시
         */
        this.ds_main_onrowposchanged = function(obj,e)
        {
        	// Main row 변경시 이전값
        	/*
        	trace(" ----> "+e.newrow+" || "+e.oldrow);
        	if(e.oldrow != -1 && (e.newrow != e.oldrow))
        	{
        		trace(" (이전값 확인[1]) ---> : "+this.v_preGoodQty+" || "+this.v_preDefectQty+" || "+this.v_preCardQty);
        		var nPreGoodQty 	= this.ds_main.getColumn(e.oldrow,"GOODQTY");
        		var nPreDefectQty 	= this.ds_main.getColumn(e.oldrow,"DEFECTQTY");
        		var nPreCardQty 	= this.ds_main.getColumn(e.oldrow,"CARDQTY");
        		trace(" (이전값 확인[2]) ---> : "+nPreGoodQty+" || "+nPreDefectQty+" || "+nPreCardQty);
        		if(nPreGoodQty != this.v_preGoodQty)
        		{
        			this.ds_main.setColumn(e.oldrow, "GOODQTY", this.v_preGoodQty);
        		}
        		if(nPreDefectQty != this.v_preDefectQty)
        		{
        			this.ds_main.setColumn(e.oldrow, "DEFECTQTY", this.v_preDefectQty);
        		}
        		if(nPreCardQty != this.v_preCardQty)
        		{
        			this.ds_main.setColumn(e.oldrow, "CARDQTY", this.v_preCardQty);
        		}

        		this.v_preGoodQty 	= this.ds_main.getColumn(e.newrow,"GOODQTY");
        		this.v_preDefectQty = this.ds_main.getColumn(e.newrow,"DEFECTQTY");
        		this.v_preCardQty 	= this.ds_main.getColumn(e.newrow,"CARDQTY");
        		trace(" (새로운 이전값 확인[3]) ---> : "+this.v_preGoodQty+" || "+this.v_preDefectQty+" || "+this.v_preCardQty);
        	}
        	*/

        	var nCnt = this.ds_main.rowcount;
        	if(nCnt > 0)		// main의 row 수가 1건 이상이여야 sub 조회
        	{
        		//trace("메인 변경되어서 조회탐"+e.newrow);
        		this.fn_setSubList(e.newrow);
        	}
        };

        /*
         * 고객사 변경시
         */
        this.div_work_div_search_cbo_sendSite_onitemchanged = function(obj,e)
        {
        	// (21.06.10) 출고지 변경시 고객사 변동 없도록 설정
        	//this.fn_clickComp();  // 고객사 부터 초기화
        };

        /*
         * 품목코드 값 변경시
         */
        this.div_work_div_search_edt_itemId_onkeydown = function(obj,e)
        {
        	this.searchDiv.edt_itemNm.set_value("");				// 품목명 초기화
        };

        /*
         * 인보이스 등록 버튼 클릭
         */
        this.div_work_div_search_div_btn_btn_pack03_onclick = function(obj,e)
        {
        	var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        	var nDsCnt  = this.ds_main.rowcount;
        	// 선택건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	// 이미 등록된 인보이스 체크
        	for(var i=0; i<nDsCnt; i++)
        	{
        		var nInvNo  = this.ds_main.getColumn(i,"INVNO");
        		var nChk 	= this.ds_main.getColumn(i,"CHK");
        		if((nChk == 1) && (!this.gfn_isNull(nInvNo)))
        		{
        			this.gfn_Message("CHKPACKINVNO", "", "warning", "ok");		// 선택된 내용 중 이미 등록된 인보이스NO가 있습니다.
        			return;
        		}
        	}
        	// 수정된 내용 있으면 저장 후 진행 가능.
        	var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nAddCnt > 0)
        	{
        		this.gfn_Message("CheckAfterAdd",'' , "warning","ok");// 추가된 내용이 있습니다. 저장 후 진행해 주십시오.
        		return;
        	}
        	// 입력된 inv 체크
        	// 인보이스 합계 수량 (체크된 데이터셋의 수량 정보) - 등록시 계산해서 넘기 / 조회시
        	// 팝업을 호출한다 필수값 설정
        	var popupId = "INV_NO_REG";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 필수값 설정 (pk값, inv no값, D/N -> popup으로 보냄)
        	var nDc 	= "";//this.ds_main.getColumn(e.row, "DC");  		// PK값 (주차 정보) -
        	var nSum 	= 0;// 총 합계 수량 넘겨줌
        	var nEnt	= "";
        	var nSite	= "";
        	var nHdrId	= "";
        	var nDno	= "";			// (21.05.27 dno 체크)
        	var nInvNoText	= "";		//this.searchDiv.div_btn.form.edt_pack03.value;		//제거
        	// 체크된 내용 중 넘어감(주차/key값 넘겨줌 ,구분)
        	var nCnt = this.ds_main.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nChk = this.ds_main.getColumn(i,"CHK");
        		if(nChk == 1)
        		{
        			// (21.05.27)  다른 dno  취소 불가능. (위치 수정)
        			var nPreDno = this.ds_main.getColumn(i, "DNO");
        			if(!this.gfn_isNull(nPreDno))
        			{
        				nDno = this.fn_setStringComma(nDno,nPreDno);
        				var nQty = this.ds_main.getColumn(i,"GOODQTY");
        				nSum = nSum + parseInt(nQty);			// 합계 수량
        				// popup으로 넘길 값들
        				var nPreEnt = this.ds_main.getColumn(i, "ENTERPRISEID");
        				nEnt = this.fn_setStringComma(nEnt,nPreEnt);
        				var nPreSite = this.ds_main.getColumn(i, "SITE");
        				nSite = this.fn_setStringComma(nSite,nPreSite);
        				var nPreHdrId = this.ds_main.getColumn(i, "PACKINGHDRID");
        				nHdrId = this.fn_setStringComma(nHdrId,nPreHdrId);
        				var nPreDc = this.ds_main.getColumn(i, "DC");
        				nDc = this.fn_setStringComma(nDc,nPreDc);
        			}
        		}
        	}
        	// (21.05.27)  다른 dno  취소 불가능.
        	if(this.gfn_isNull(nDno)){
        		this.gfn_Message("MessageParamIsEmpty","DNO" , "warning","ok");// {0}가 없습니다.
        		return;
        	}
        	var nArrDno	= nDno.split(',');
        	if(nArrDno.length != 1)
        	{
        		this.gfn_Message("ValidPackOne", [this.nfn_getDictionaryname("INVREGISTER2",true),"DNO"] , "warning","ok");// {0} (은)는 하나의 {1} 만 선택해야 합니다.
        		return;
        	}
        	var nLenEnt = nEnt.split(",").length;
        	var nLenSite = nSite.split(",").length;
        	// (21.06.05) - 사이트 하나의 종류만 선택 가능 하도록
        	if(nLenSite > 1)
        	{
        		this.gfn_Message("SelectSameItem",this.nfn_getDictionaryname("PLANT",true) , "warning","ok");// 같은 {0}끼리만 선택하여 주십시오.  [Site]
        		return;
        	}

        	if(nLenEnt > 1 ||  nLenSite > 1)
        	{
        		//trace(" #### [ent / site 종류가 1개이상임] ### ");
        		return;
        	}
        	// 양품 수량 체크
        	if(nSum == 0)
        	{
        		this.gfn_Message("GoodQtyLargerThanZero", "", "warning", "ok");	// 양품수량은 0 보다 커야 합니다.
        		return;
        	}
        	/*
        	팝업에서 저장 후 이면 INV NO 값을 받아서 해당화면에서 저장?? 아니면 PK값 넘겨서 거기서 처리??
        	체크된 내용 dataSet 넘겨 준다.
        	*/
        	if(!this.gfn_isNull(nSum) || !this.gfn_isNull(nEnt) || !this.gfn_isNull(nSite) || !this.gfn_isNull(nHdrId) || !this.gfn_isNull(nDc) )
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_invNo 	= nInvNoText;		// 등록된 inv No
        		oArg.arg_Sum 	= nSum;				// 합계값
        		oArg.arg_Ent 	= nEnt;				// ent
        		oArg.arg_Site 	= nSite;			// site
        		oArg.arg_Hdr 	= nHdrId;			// main key
        		oArg.arg_Dc 	= nDc;				// 주차
        		oArg.arg_Type 	= "R";				// 등록/조회

        	}
        	else
        	{
        		this.gfn_Message("ValidateRequiredData", "", "warning", "ok");	// 필수값중 일부가 입력되지 않았습니다. 다시 확인해주세요.
        		return;
        	}
        	this.gfn_openPopup(popupId,"pcm::PCM07900P.xfdl" ,oArg ,opts);
        };

        /*
         * D NO 생성/취소 버튼 클릭시
         */
        this.dynamic_btn_dno_onclick = function(obj,e)
        {
        	this.ds_mainDno.clearData();
        	var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        	var nDsCnt  = this.ds_main.rowcount;
        	// 선택건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	// 수정된 내용 있으면 저장 후 진행 가능.
        	var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nAddCnt > 0)
        	{
        		this.gfn_Message("CheckAfterAdd",'' , "warning","ok");// 추가된 내용이 있습니다. 저장 후 진행해 주십시오.
        		return;
        	}
        	// (21.05.03) 취소전 MSG 추가
        	if(obj.name == 'btn_pack02')
        	{
        		var bOK = this.gfn_Message("OspDoProcessWant", this.nfn_getDictionaryname("pack02",true), "conf", "yesno");		// {0} 처리를 하시겠습니까?
        		if (bOK == false) return;
        	}
        	// 저장 (기입력된 내용 수정 가능)
        	// 체크된 내용 중 넘어감(주차/key값 넘겨줌 ,구분)
        	var nCnt 	= this.ds_main.rowcount;
        	var nHdrId 	= "";
        	var nEnt	= "";
        	var nSite	= "";
        	var nDno	= "";
        	var nInvNo	= 0;						// 21.05.20 김진현 선택된것 중 인보이스 있는것 cnt
        	for(var i=0; i<nCnt; i++)
        	{
        		var nChk = this.ds_main.getColumn(i,"CHK");
        		if(nChk == 1)
        		{
        			// 선택된 값의 pk값
        			var nPreHdrId = this.ds_main.getColumn(i, "PACKINGHDRID");
        			nHdrId = this.fn_setStringComma(nHdrId,nPreHdrId);
        			var nPreEnt = this.ds_main.getColumn(i, "ENTERPRISEID");
        			nEnt = this.fn_setStringComma(nEnt,nPreEnt);
        			var nPreSite = this.ds_main.getColumn(i, "SITE");
        			nSite = this.fn_setStringComma(nSite,nPreSite);
        			// 21.05.03 dno 취소시 수정
        			var nPreDno = this.ds_main.getColumn(i, "DNO");
        			if(!this.gfn_isNull(nPreDno))
        			{
        				nDno = this.fn_setStringComma(nDno,nPreDno);
        			}
        			// 21.05.20 인보이스 no 있는것 count
        			var nPreInvNo = this.ds_main.getColumn(i, "INVNO");
        			if(!this.gfn_isNull(nPreInvNo))
        			{
        				nInvNo += 1;
        			}
        		}
        	}
        	// (21.06.05) - site 정보 다른경우 진행 불가..  msg 추가
        	var nSiteCntArr	= nSite.split(",");
        	if(nSiteCntArr.length > 1)
        	{
        		this.gfn_Message("SelectSameItem",this.nfn_getDictionaryname("PLANT",true) , "warning","ok");// 같은 {0}끼리만 선택하여 주십시오.  [Site]
        		return;
        	}

        	var nAdd = this.ds_mainDno.addRow();
        	this.ds_mainDno.setColumn(nAdd,"PACKINGHDRID"	, nHdrId);
        	this.ds_mainDno.setColumn(nAdd,"ENTERPRISEID"	, nEnt);
        	this.ds_mainDno.setColumn(nAdd,"SITE"			, nSite);
        	this.ds_mainDno.setColumn(nAdd,"MODIFIER"		, this.gf_getUserId());

        	// (21.05.03)  - dno취소시 수정
        	this.ds_mainDno.setColumn(nAdd,"DNO"			, nDno);
        	//trace(" ====> : "+this.ds_mainDno.saveXML());
        	var nBtnNm = obj.name;
        	if(nBtnNm == 'btn_pack01')
        	{
        		this.ds_mainDno.setColumn(nAdd,"TYPE"			, "R");			// R(등록), C(취소)
        		// (21.05.28) - 이미 생성된 dno 존재 할 경우 msg
        		var nPreDno	= this.ds_mainDno.getColumn(0,"DNO");
        		if(!this.gfn_isNull(nDno))
        		{
        			this.gfn_Message("ValidPack09",null , "warning","ok");// 선택된 행에 이미 등록된 DNO가 있습니다. DNO 취소 후 생성하세요.
        			return;
        		}

        		// (21.05.28) - 인보이 있으면 생성도 불가능
        		if(nInvNo != 0)
        		{
        			this.gfn_Message("CHKPACKINVNO",null , "warning","ok");// 선택된 내용 중 이미 등록된 인보이스NO가 있습니다.
        			return;
        		}
        	}
        	else
        	{
        		this.ds_mainDno.setColumn(nAdd,"TYPE"			, "C");			// R(등록), C(취소)
        		// 21.05.03
        		if(this.gfn_isNull(nDno))
        		{
        			this.gfn_Message("MessageParamIsNull",this.nfn_getDictionaryname("DNO",true) , "warning","ok");// {0}가 없습니다.
        			return;
        		}
        		// (21.05.20) 인보이스 있는지 확인 (존재하면 취소 불가 -> 인보이스 삭제 후 DNO 취소 가능)
        		if(nInvNo != 0)
        		{
        			this.gfn_Message("CHKPACKINVNO",null , "warning","ok");// 선택된 내용 중 이미 등록된 인보이스NO가 있습니다.
        			return;
        		}
        		// (21.05.27)  다른 dno  취소 불가능.
        		var nArrDno	= nDno.split(',');
        		if(nArrDno.length != 1)
        		{
        			// ValidPack08    DNO취소는 하나의 DNO만 선택해야합니다.
        			this.gfn_Message("ValidPack08",null , "warning","ok");// DNO취소는 하나의 DNO만 선택해야합니다.
        			return;
        		}
        	}
        	//trace(" ===> 조회 조건 (D no) : "+this.ds_mainDno.saveXML());
        	// 수정 로직 진행(수정 저장 - main) - 일괄등록
        	var sSvcID 			= "savePackDnoUpdate";
        	var sController 	= "/pcm07900/savePackDnoUpdate.do";
        	var sInDatasets 	= "ds_mainDno=ds_mainDno";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 체크값 변경시 합계 계산
         */
        this.ds_main_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'CHK' || e.columnid == 'GOODQTY')		// 체크되거나, 양품수량의 값이 변경 될때
        	{
        		// 체크된 값 합계
        		this.div_work.form.msk_chkGoodQty.set_value("");

        		var nCnt = this.ds_main.rowcount;
        		var nSumWty = 0;
        		for(var i = 0; i<nCnt; i++)
        		{
        			if ((this.ds_main.getColumn(i, "CHK") == "1"))   // 체크된것만
        			{
        				var nGoodQty = this.ds_main.getColumn(i,"GOODQTY");
        				if(!this.gfn_isNull(nGoodQty))
        				{
        					 nSumWty = nSumWty + parseInt(nGoodQty);
        				}
        				else
        				{
        					nSumWty = nSumWty + 0;
        				}
        			}
        		}
        		this.div_work.form.msk_chkGoodQty.set_value(nSumWty);
        		// 21.05.22 체크 박스인 경우 상태 변경 안되도록
        		if(e.columnid == 'CHK') this.ds_main.set_updatecontrol(true);
        	}
        	else if(e.columnid == 'SUMPCS')		// 합수의 값 변경시...
        	{
        		// 변경 될대 Line 입력값 초기화
        		var nDsCnt = this.ds_line.rowcount;
        		// 입력된 내용 삭제
        		for(var i=nDsCnt-1; i>=0;i--)
        		{
        			this.ds_line.deleteRow(i);
        		}
        		// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)
        		var nDsPos  = this.ds_main.rowposition;
        		this.fn_setMainQty(nDsPos);
        	}
        	else if(e.columnid == 'PRODUCTDEFNM')		// 자사품목코드 Sample의 경우 직접 입력한다. 21.04.12
        	{
        		if(this.f_custId == 'Common_1_*')		// Sample의 경우
        		{
        			var nProdId = this.ds_main.getColumn(e.row, "PRODUCTDEFNM");
        			this.ds_main.setColumn(e.row,"PRODUCTDEFID",nProdId);
        		}
        	}
        };

        /*
         * 내부 box no 생성
         */
        this.div_work_btn_boxLIneNoCreate_onclick = function(obj,e)
        {
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓]
        	//****************************************************************
        	var nMainPos = this.ds_main.rowposition;
        	if(!this.fn_chkHandOverLot(nMainPos))
        	{
        		this.gfn_Message("PackingHandOverCheckModify", "", "warning", "ok");		// 인계처리된 경우 수정할 수 없습니다.
        		return;
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	// Line (체크 된 것만)
        	var nChkCnt = this.ds_line.getCaseCount("CHK=='1'");
        	// 선택건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	// 체크된 내용 중 넘어감(주차/key값 넘겨줌 ,구분)
        	var nCnt 		= this.ds_line.rowcount;
        	var arrRows 	= [];
        	for(var i=0; i<nCnt; i++)
        	{
        		var nChk = this.ds_line.getColumn(i,"CHK");
        		if(nChk == 1)
        		{
        			arrRows.push(i);
        		}
        	}
        	// 제일 큰값 구해옴
        	var nMaxVal = this.ds_line.getCaseMax("ENTERPRISEID == '"+this.gf_getEnterpriseId()+"'",'BOXSEQ');
        	if(this.gfn_isNull(nMaxVal))
        	{
        		nMaxVal = 1;
        	}
        	else
        	{
        		nMaxVal = parseInt(nMaxVal)+1;
        	}
        	// 숫자 앞에 두자리 01~99 까지
        	nMaxVal = nMaxVal;//this.fn_LeadingZeros(nMaxVal,2);

        	var nHdr = this.ds_main.getColumn(this.ds_main.rowposition, "BOXNO");

        	for(var j=0; j<arrRows.length; j++)
        	{
        		this.ds_line.setColumn(arrRows[j],"BOXSEQ",nMaxVal);

        		var nBoxLineNo = '';
        		if(this.gfn_isNull(nHdr))
        		{
        			nBoxLineNo = nMaxVal;
        		}
        		else
        		{
        			nBoxLineNo = nHdr+"-"+nMaxVal;
        		}
        		this.ds_line.setColumn(arrRows[j],"BOXLINENO",nMaxVal);
        	}
        };

        /*
         * 내부 box no 취소 ()
         */
        this.div_work_btn_boxLIneNoCancel_onclick = function(obj,e)
        {
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↓]
        	//****************************************************************
        	var nMainPos = this.ds_main.rowposition;
        	if(!this.fn_chkHandOverLot(nMainPos))
        	{
        		this.gfn_Message("PackingHandOverCheckModify", "", "warning", "ok");		// 인계처리된 경우 수정할 수 없습니다.
        		return;
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	// Line 경우 (체크 된 것만)
        	var nChkCnt = this.ds_line.getCaseCount("CHK=='1'");
        	// 선택건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}
        	var nLinecnt  = this.ds_line.rowcount;
        	if(nLinecnt != 0)
        	{
        		var nHdr = this.ds_main.getColumn(this.ds_main.rowposition, "BOXNO");
        		// 선택된 행 삭제
        		for(var i=0; i<nLinecnt; i++)
        		{
        			var nBoxLineNo = nHdr;
        			//BOXSEQ
        			this.ds_line.setColumn(i,"BOXSEQ","");
        			this.ds_line.setColumn(i,"BOXLINENO",nBoxLineNo);
        		}
        	}
        };

        /*
        this.div_work_btn_00_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	var nMainCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==4");
        	var nMainICnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	var nMainDCnt = this.ds_main.getDeletedRowCount();

        	trace(" (4)----> : "+nMainCnt);
        	trace(" (2)----> : "+nMainICnt);
        	trace(" (8)----> : "+nMainDCnt);
        };
        */

        /*
         * 특정 Key 입력시 row 추가 (21.04.26)
         */
        this.fn_lineGridKeyUp = function(obj,e)
        {
        	var sKeycode 	= e.keycode;
        	var sCurrcell	= obj.currentcell;
        	var nSum 		= this.div_work.form.msk_lineSummary.value;  // 합수가 1인 경우
        	var nCardIdx 	= this.div_work.form.grd_line.getBindCellIndex("body","CARD");			// Card
        	var nGoodIdx 	= this.div_work.form.grd_line.getBindCellIndex("body","GOODQTY");		// 양품수량

        	var nLastRow	= this.ds_line.rowcount-1;

        	if(!e.ctrlkey && !e.shiftkey && !e.altkey)
        	{
        		//if(sKeycode == 9)		// Tab
        		if(sKeycode == 13)		// Enter
        		{
        			// 판단  (합수가 1이면 양품 , 나머지는 Card)
        			if(nSum == '1' && sCurrcell == nGoodIdx)
        			{
        				if(obj.currentrow == nLastRow)
        				{
        					// 임의의 셀로 변경
        					this.fn_setLineTabAdd();

        					var nCellPos = this.fn_chkLineCell(7);		// 합수가 1인경우 기본 7

        					this.div_work.form.grd_line.setCellPos(nCellPos,obj.currentrow);
        				}
        			}
        			else
        			{
        				if(sCurrcell == nCardIdx)			// 카드인경우
        				{
        					if(obj.currentrow == nLastRow)
        					{
        						// 임의의 셀로 변경
        						this.fn_setLineTabAdd();
        						var nCellPos = this.fn_chkLineCell(5);	// 합수가 1이 아닌 경우 기본 5 - x-out
        						this.div_work.form.grd_line.setCellPos(nCellPos,obj.currentrow);
        					}
        				}
        			}
        		}
        	}
        };

        /*
         * 메인 체크 박스 선택시 상태 변경 안되도록 설정
         */
        this.ds_main_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == 'CHK')		// 체크 박스일때
        	{
        		// 21.05.22
        		if(e.columnid == 'CHK')  this.ds_main.set_updatecontrol(false);
        	}
        };

        /*
         * Line 체크 박스 선택시 상태 변경 안되도록 설정
         */
        this.ds_line_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == 'CHK')		// 체크 박스일때
        	{
        		// 21.05.22
        		if(e.columnid == 'CHK')  this.ds_line.set_updatecontrol(false);
        	}
        };

        /**************************************************************************
        					[ 검사번호 조회 x-out 조회]    [↓]
        **************************************************************************/
        /*
         * 검사번호 입력 후 엔터 발생시 이벤트(21.06.10) - Test 용
         */
        this.div_work_edt_inspectNum_onkeydown = function(obj,e)
        {
        	// 바코드 입력 후 엔터 발생시 - 이벤트 발생
        	if(e.keycode == '13')
        	{
        		// 고객사 체크
        		// 고객사 정보 우선 선택 하도록 설정
        		if(!this.fn_chkComp()) return;
        		var nInspectNum	= this.div_work.form.edt_inspectNum.value;
        		if(this.gfn_isNull(nInspectNum))
        		{
        			// 필수값 입력
        			this.gfn_Message("InputSomeThing",this.nfn_getDictionaryname("INSPECTIONNUM",true) , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        			return;
        		}
        		// 그리드 상에 추가 건은 1건만 진행 가능
        		var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        		if(nAddCnt > 0)
        		{
        			//this.gfn_Message("PossibleAdd",'1' , "warning","ok");// {0} 건 까지만 추가 가능합니다.
        			this.gfn_Message("CHECKCCHANGEINFO",'' , "warning","ok");// 변경된 내용이 있습니다. 저장 후 진행해 주십시오.
        			return;
        		}

        		// 최종검사 x-out 검사 - 조회	-> lot(chk Msg) -> 포장기준정보 -> (1건이면 자동 설정 / 2건이상이면 - Popup)  ->  선택 후 -> 합수 체크 (msg) ->
        		// this.ds_inpXoutSearch();   (21.06.10) 추가
        		this.ds_inpXoutSearch.clearData();
        		this.ds_mainInpXout.clearData();
        		var nAdd	= this.ds_inpXoutSearch.addRow();
        		var nInp	= this.div_work.form.edt_inspectNum.value;
        		this.ds_inpXoutSearch.setColumn(nAdd, "P_INSPECT_NUM", nInp);

        		// (21.06.29) 숫자만 가능
        		if(!this.gfn_isNum(nInp))
        		{
        			this.gfn_Message("OnlyInteger", "", "warning", "ok");//숫자만 입력가능합니다.
        			return;
        		}

        		// (21.06.29) 길이체크 11자리
        		if(nInp.length != 11)
        		{
        			this.gfn_Message("CheckPackLabelInspNoLen", [this.nfn_getDictionaryname("INSPECTIONNUM",true) ,11+" "], "warning", "ok");//{0} 의 정상 길이는 {1}자리 입니다.
        			return;
        		}

        		// 조회 (고객정보 MST 조회)실행
        		var sSvcID 			= "selectInspectXoutList";
        		var sController 	= "/pcm07900/selectInspectXoutList.do";
        		var sInDatasets 	= "INPUT=ds_inpXoutSearch";
        		var sOutDatasets 	= "ds_mainInpXout=output";
        		var sArgs 			= "";
        		sArgs += this.gfn_setParam("", "");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };


        /*
         * 검사번호로 조회 한 결과로 포장 사양 정보 조회
         */
        this.fn_setXoutPackInfo	= function ()
        {
        	this.ds_inpXoutSearch.clearData();
        	this.ds_xoutPackInfo.clearData();
        	this.ds_xoutLotChk.clearData();

        	var nAdd = this.ds_inpXoutSearch.addRow();
        	var nItem	= this.ds_mainInpXout.getColumn(0,"PRODUCTDEFID");
        	this.ds_inpXoutSearch.setColumn(nAdd, "P_PRODUCTDEFID", nItem);
        	var nRev	= this.ds_mainInpXout.getColumn(0,"PRODUCTDEFVERSION");
        	this.ds_inpXoutSearch.setColumn(nAdd, "P_PRODUCTDEFVERSION", nRev);
        	var nLot	= this.ds_mainInpXout.getColumn(0,"LOTID");
        	this.ds_inpXoutSearch.setColumn(nAdd, "LOTID", nLot);
        	this.ds_inpXoutSearch.setColumn(nAdd, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_inpXoutSearch.setColumn(nAdd, "PLANTID"		, this.gf_getSiteType());
        	this.ds_inpXoutSearch.setColumn(nAdd, "CUSTOMERID"	, this.f_custId);
        	//trace(" =====> 포장 기준정보 조회 : "+	this.ds_inpXoutSearch.saveXML());
        	// 조회 (고객정보 MST 조회)실행
        	var sSvcID 			= "selectXoutPackInfoList";
        	var sController 	= "/pcm07900/selectXoutPackInfoList.do";
        	var sInDatasets 	= "INPUT=ds_inpXoutSearch";
        	var sOutDatasets 	= "ds_xoutPackInfo=output1 ds_xoutLotChk=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 조회된 x out 정보 설정
         */
        this.fn_setAddXoutInfo = function ()
        {
        	// 기준정보[1] 설정
        	// 고객사 정보 우선 선택 하도록 설정
        	if(!this.fn_chkComp()) return;
        	// 추가시 row 1건만 가능(신규는)
        	var nCnt = this.ds_main.rowcount;
        	// 그리드 상에 추가 건은 1건만 진행 가능
        	var nAddCnt = this.ds_main.getCaseCount("dataset.getRowType(currow)==2");
        	if(nAddCnt > 0)
        	{
        		this.gfn_Message("PossibleAdd",'1' , "warning","ok");// {0} 건 까지만 추가 가능합니다.
        		return;
        	}
        	/***************************************************************************
        	* 합수 주차 체크
        	***************************************************************************/
        	// 고객 모델명 팝업 선택 시 내용 설정  (합수 / 주차 정보 체크 후 추가 할것 통과 하면)
        	var nModelNm 	= this.ds_xoutPackInfo.getColumn(0, "CUSTOMERMODELNM");
        	var nProdDefId 	= this.ds_xoutPackInfo.getColumn(0, "PRODUCTDEFID");
        	var nPn 		= this.ds_xoutPackInfo.getColumn(0, "CUSTOMERPN");
        	var nProdNm		= this.ds_xoutPackInfo.getColumn(0, "CUSTOMERPRODNAME");
        	var nCustRev 	= this.ds_xoutPackInfo.getColumn(0, "CUSTOMERREV");
        	var nSum		= this.ds_xoutPackInfo.getColumn(0, "SUMPCS");
        	var nprodRev 	= this.ds_xoutPackInfo.getColumn(0, "PRODUCTDEFVERSION");
        	var nCustCompId		= this.ds_xoutPackInfo.getColumn(0, "CUSTOMERCOMPANYID");
        	var nXoutSum	= this.ds_mainInpXout.getColumn(0,"PCSARY");
        	var nXoutWeek	= this.ds_mainInpXout.getColumn(0,"WEEK");
        	// 합수 다르면 msg 추가
        	var bOK = true;
        	if(nXoutSum != nSum)
        	{
        		bOK = this.gfn_Message("PackSetLotXoutSum", [" "+nSum, " "+nXoutSum], "conf", "yesno");//합수 정보가 다릅니다. 포장기준정보 합수 : {0} , 최종검사 X - OUT 합수 : {1} 입니다. 최종검사 합수로 적용 하시겠습니까?
        	}
        	if (bOK == true) nSum = nXoutSum;
        	/***************************************************************************/
        	var nAddRow = this.ds_main.addRow();	// 추가
        	var nSearchSite = this.v_defaultPlant;   // (21.06.05) 접속자의 기본 사이트로 설정
        	if(!this.gfn_isNull(nSearchSite))
        	{
        		this.ds_main.setColumn(nAddRow,"SITE",nSearchSite);		//  초기 설정 (site를 전체가 아니면 설정 가능)
        	}
        	var nCustId = this.f_custId;      //this.searchDiv.edt_comp.value;
        	var nCustNm = this.searchDiv.edt_comp.value;
        	this.ds_main.setColumn(nAddRow,"ENTERPRISEID",this.gf_getEnterpriseId());
        	this.ds_main.setColumn(nAddRow,"COMP",nCustId);				//  조회 조건으로 설정 (수정 x) -> 수정 가능해지면 뒤에 헤더값 변경 되어야 된다.
        	this.ds_main.setColumn(nAddRow,"COMP_NAME",nCustNm);		//  조회 조건 우선 선택 된 값으로 선택 (수정 X)
        	this.ds_main.setColumn(nAddRow, "CREATER", this.gf_getUserId());   		// 담당자

        	// 날짜 처리, 날짜 테스트, 서버 일시
        	var sYDate = this.nfn_getCurrentSystemTime(0,0,'yesterday');
        	var arrDate = sYDate.split(",");
        	var sDateFrom = arrDate[1];		// 어제
        	var sDate = arrDate[2];			// 오늘
        	var sDateTo = arrDate[0];		// 현재
        	var sTime = sDateTo.substring(8,14);
        	// 08:30 이전이면 전날 선택
        	var nRdate = "";
        	if(parseInt(sTime) >= parseInt('083000'))
        	{
        		this.ds_main.setColumn(nAddRow,"PACK_DATE",sDate);			// 08:30 이후 이면 오늘 날짜
        	}
        	else
        	{
        		this.ds_main.setColumn(nAddRow,"PACK_DATE",sDateFrom);		// 08:30 이전 이면 어제 날짜
        	}

        	// 샘플의 경우 합수 직접 입력
        	if(nCustId == 'Common_1_*')		// 블럭마다 달라짐
        	{
        		this.div_work.form.msk_lineSummary.set_enable(true);
        		this.div_work.form.msk_lineSummary.set_readonly(false);
        	}
        	else
        	{
        		this.div_work.form.msk_lineSummary.set_enable(false);
        		this.div_work.form.msk_lineSummary.set_readonly(true);
        	}

        	// 기본 LOT입력창
        	this.div_work.form.ckb_lotInput.set_value("N");
        	this.div_work.form.btn_lotSearch.set_enable(true);
        	this.div_work.form.btn_lotSearch.set_enableevent(true);
        	this.div_work.form.grd_lot.setCellProperty("body",0,"displaytype","normal");
        	this.div_work.form.grd_lot.setCellProperty("body",0,"edittype","none");
        	// 직접 입력 한다고 하면. (21.06.08) - 기본 수정 가능 수량은..
        	this.div_work.form.grd_lot.setCellProperty("body",1,"displaytype","maskeditcontrol");
        	this.div_work.form.grd_lot.setCellProperty("body",1,"edittype","mask");
        	// 활성화 비활성화 expr로 함수 호출함
        	// 내부 box no 조정
        	var nBoxLineNo = this.ds_headInfo.getColumn(0,"BOXLINENO");
        	var nBoxLineNoIdx = this.div_work.form.grd_line.getBindCellIndex("body","BOXLINENO");
        	if(nBoxLineNo == '1')
        	{
        		this.div_work.form.btn_boxLIneNoCreate.set_enable(true);
        		this.div_work.form.btn_boxLIneNoCreate.set_enableevent(true);
        		this.div_work.form.btn_boxLIneNoCancel.set_enable(true);
        		this.div_work.form.btn_boxLIneNoCancel.set_enableevent(true);
        		this.div_work.form.grd_line.setFormatColProperty(nBoxLineNoIdx,"size",120);
        	}
        	else
        	{
        		this.div_work.form.btn_boxLIneNoCreate.set_enable(false);
        		this.div_work.form.btn_boxLIneNoCreate.set_enableevent(false);
        		this.div_work.form.btn_boxLIneNoCancel.set_enable(false);
        		this.div_work.form.btn_boxLIneNoCancel.set_enableevent(false);
        		this.div_work.form.grd_line.setFormatColProperty(nBoxLineNoIdx,"size",0);
        	}
        	// [포장 메인 상단 값 설정]
        	this.ds_main.setColumn(nAddRow, "CUSTOMERMODELNM", nModelNm);
        	this.ds_main.setColumn(nAddRow, "PRODUCTDEFID", nProdDefId);
        	this.ds_main.setColumn(nAddRow, "CUSTOMERPN", nPn);
        	this.ds_main.setColumn(nAddRow, "CUSTOMERPRODNAME", nProdNm);		// 김정욱과장님 표시필요 없음 (21.04.16) 필요함
        	this.ds_main.setColumn(nAddRow, "REV", nCustRev);
        	this.ds_main.setColumn(nAddRow, "SUMPCS", nSum);
        	this.ds_main.setColumn(nAddRow, "PRODUCTDEFVERSION", nprodRev);
        	this.ds_main.setColumn(nAddRow, "CUSTOMERCOMPANYID", nCustCompId);		// 고객 업체코드 추가 21.04.14
        	this.ds_main.setColumn(nAddRow, "PRODUCTDEFNM", nProdDefId+nprodRev);
        	// 대포장 D/C 이면 주차 설정
        	var nDc = this.ds_headInfo.getColumn(0,"DC");
        	if(nDc == 'LargePack')			// [21.04.30] 미사용 추가로 인해 대포장 조건 추가
        	{
        		this.ds_main.setColumn(nAddRow, "DC", nXoutWeek);
        	}
        	// lot 설정 (우선 하고 -> line 설정을 한다.)
        	// 등록/ 삭제 / 수정 가능
        	var nMainE = this.ds_main.getColumn(nAddRow,"ENTERPRISEID");
        	var nMainS = this.ds_main.getColumn(nAddRow,"SITE");
        	var nMainH = this.ds_main.getColumn(nAddRow,"PACKINGHDRID");
        	var nAddLotRow = this.ds_lot.addRow();
        	this.ds_lot.setColumn(nAddLotRow, "ENTERPRISEID"	, nMainE);
        	this.ds_lot.setColumn(nAddLotRow, "PLANTID"			, nMainS);
        	this.ds_lot.setColumn(nAddLotRow, "PACKINGHDRID"	, nMainH);
        	this.ds_lot.setColumn(nAddLotRow, "CREATER"			, 	this.gf_getUserId());   			// 담당자
        	var nLot		= this.ds_mainInpXout.getColumn(0,"LOTID");
        	var nLotWeek	= this.ds_mainInpXout.getColumn(0,"LOTWEEK");
        	this.ds_lot.setColumn(nAddLotRow, 'LOT'			, nLot);		// 수정 불가능?
        	this.ds_lot.setColumn(nAddLotRow, 'QUANTITY'	, 0);		// 수정가능?
        	this.ds_lot.setColumn(nAddLotRow, "LOTWEEK"		, nLotWeek);   	// lot주차 추가 (21.06.08)

        	// line 설정
        	var nXoutCnt = this.ds_mainInpXout.rowcount;
        	var nChkSum	 = this.ds_main.getColumn(nAddRow, "SUMPCS");
        	for(var x=0; x<nXoutCnt; x++)
        	{
        		var nAddLineRow = this.ds_line.addRow();
        		this.ds_line.setColumn(nAddLineRow, "ENTERPRISEID",nMainE);
        		this.ds_line.setColumn(nAddLineRow, "SITE",nMainS);
        		this.ds_line.setColumn(nAddLineRow, "CREATER", this.gf_getUserId());   		// 담당자
        		this.ds_line.setColumn(nAddLineRow, "PACKINGHDRID", nMainH);   				// 헤더키값
        		var nXout	= this.ds_mainInpXout.getColumn(x,"X_OUT");
        		var nCard	= this.ds_mainInpXout.getColumn(x,"CARD");
        		var nGood	= this.ds_mainInpXout.getColumn(x,"GOODQTY");
        		//trace(" 합수 확인 : "+nChkSum);
        		if(nChkSum == 1)
        		{
        			this.ds_line.setColumn(nAddLineRow, "GOODQTY", nGood);   				// GOODQTY
        		}
        		else
        		{
        			this.ds_line.setColumn(nAddLineRow, "X_OUT", nXout);   				// xout
        			this.ds_line.setColumn(nAddLineRow, "CARD", nCard);   				// card
        		}
        		if(nDc == 'SmallPack')
        		{
        			this.ds_line.setColumn(nAddLineRow, "DC", nXoutWeek);   		// 주차
        		}
        	}
        	// 상단 그리드 계산 후 값 추가(삭제 시에도 적용 해야됨)  -> lot 쪽 수량 계산
        	this.fn_setMainQty(nAddRow);
        };

        /*
         * xout 정보에 따른 포장기준정보결과가 2건 이상인 경우 선택 팝업창 호출
         */
        this.fn_getXoutCustModelNmPopup = function ()
        {
        	// 팝업을 호출한다 필수값 설정
        	var popupId = "XOUT_CUST_MODEL_NM";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	var nEnt		= 	this.gf_getEnterpriseId();
        	var nPlant		=	this.gf_getSiteType();
        	var nCustId		=	this.f_custId;
        	var nProdId 	= 	this.ds_mainInpXout.getColumn(0,"PRODUCTDEFID");
        	var nProdRev 	= 	this.ds_mainInpXout.getColumn(0,"PRODUCTDEFVERSION");

        	oArg.arg_Ent 		= nEnt;
        	oArg.arg_Plant 		= nPlant;
        	oArg.arg_CustId 	= nCustId;
        	oArg.arg_ProdId 	= nProdId;
        	oArg.arg_Rev	 	= nProdRev;
        	oArg.arg_rtnCols = "CUSTOMERMODELNM|PRODUCTDEFID|CUSTOMERPN|CUSTOMERPRODNAME|CUSTOMERREV|SUMPCS|PRODUCTDEFVERSION|CUSTOMERCOMPANYID";	// 리턴 받을값

        	this.gfn_openPopup(popupId,"pcm::PCM07901P.xfdl" ,oArg ,opts);
        };

        /*
         * 인수된 LOT 중 검사번호가 존재 하는 것 조회 팝업(21.06.30)
         */
        this.div_work_btn_inspNoPopup_onclick = function(obj,e)
        {
        	// lot, 포장, 사용자의 해당 작업장의 lot 목록 조회
        	var nCustId = this.f_custId;      				// this.searchDiv.edt_comp.value;
        	var nSite 	= this.gf_getSiteType();			// 접속한 사이트로 설정
        	if(this.gfn_isNull(nCustId))
        	{
        		// 필수값 입력
        		var nTitle = this.searchDiv.sta_comp.text;
        		this.gfn_Message("InputSomeThing",nTitle , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        		return;
        	}
        	//****************************************************************
        	// [21.05.22] 인계 연동 lot 확인후 없으면 삭제 가능[↑]
        	//****************************************************************
        	// 팝업을 호출한다 필수값 설정
        	var popupId = "XOUT_INSP_NUM";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	var nEnt		= 	this.gf_getEnterpriseId();
        	var nPlant		=	this.gf_getSiteType();
        	var nCustId		=	nCustId;
        	//var nProdId 	= 	this.ds_mainInpXout.getColumn(0,"PRODUCTDEFID");
        	//var nProdRev 	= 	this.ds_mainInpXout.getColumn(0,"PRODUCTDEFVERSION");

        	oArg.arg_Ent 		= nEnt;
        	oArg.arg_Plant 		= nPlant;
        	oArg.arg_CustId 	= nCustId;
        	//oArg.arg_ProdId 	= nProdId;
        	//oArg.arg_Rev	 	= nProdRev;
        	oArg.arg_rtnCols = "LOTID|INSP_NO|PRODUCTDEFID|PRODUCTDEFVERSION";	// 리턴 받을값

        	this.gfn_openPopup(popupId,"pcm::PCM07902P.xfdl" ,oArg ,opts);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.btn_resetSearch.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.div_search.form.btn_itemId.addEventHandler("onclick",this.div_work_div_search_btn_itemId_onclick,this);
            this.div_work.form.div_search.form.edt_itemId.addEventHandler("onkeydown",this.div_work_div_search_edt_itemId_onkeydown,this);
            this.div_work.form.div_search.form.btn_custPartNm.addEventHandler("onclick",this.div_work_div_search_btn_custPartNm_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack05.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack06.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack07.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack08.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack09.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack10.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack11.addEventHandler("onclick",this.dynamic_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack04.addEventHandler("onclick",this.dynamic_create_btn_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack03.addEventHandler("onclick",this.div_work_div_search_div_btn_btn_pack03_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack02.addEventHandler("onclick",this.dynamic_btn_dno_onclick,this);
            this.div_work.form.div_search.form.div_btn.form.btn_pack01.addEventHandler("onclick",this.dynamic_btn_dno_onclick,this);
            this.div_work.form.div_search.form.cbo_sendSite.addEventHandler("onitemchanged",this.div_work_div_search_cbo_sendSite_onitemchanged,this);
            this.div_work.form.div_search.form.btn_comp.addEventHandler("onclick",this.div_work_div_search_btn_comp_onclick,this);
            this.div_work.form.div_search.form.edt_comp.addEventHandler("onkeydown",this.div_work_div_search_edt_comp_onkeydown,this);
            this.div_work.form.grd_main.addEventHandler("onexpanddown",this.div_work_grd_main_onexpanddown,this);
            this.div_work.form.grd_main.addEventHandler("oncelldblclick",this.div_work_grd_main_oncelldblclick,this);
            this.div_work.form.btn_del_ds_line.addEventHandler("onclick",this.div_work_btn_del_ds_line_onclick,this);
            this.div_work.form.btn_add_ds_line.addEventHandler("onclick",this.div_work_btn_add_ds_line_onclick,this);
            this.div_work.form.btn_boxLIneNoCancel.addEventHandler("onclick",this.div_work_btn_boxLIneNoCancel_onclick,this);
            this.div_work.form.btn_boxLIneNoCreate.addEventHandler("onclick",this.div_work_btn_boxLIneNoCreate_onclick,this);
            this.div_work.form.btn_add_ds_main.addEventHandler("onclick",this.div_work_btn_add_ds_main_onclick,this);
            this.div_work.form.btn_del_ds_main.addEventHandler("onclick",this.div_work_btn_del_ds_main_onclick,this);
            this.div_work.form.btn_del_ds_lot.addEventHandler("onclick",this.div_work_btn_del_ds_lot_onclick,this);
            this.div_work.form.btn_add_ds_lot.addEventHandler("onclick",this.div_work_btn_add_ds_lot_onclick,this);
            this.div_work.form.btn_lotSearch.addEventHandler("onclick",this.div_work_btn_lotSearch_onclick,this);
            this.div_work.form.ckb_lotInput.addEventHandler("onchanged",this.div_work_ckb_lotInput_onchanged,this);
            this.div_work.form.ckb_lotInput.addEventHandler("onclick",this.div_work_ckb_lotInput_onclick,this);
            this.div_work.form.msk_chkGoodQty.addEventHandler("onkeyup",this.div_work_div_detail_msk_SurplusStock_onkeyup,this);
            this.div_work.form.edt_inspectNum.addEventHandler("onkeydown",this.div_work_edt_inspectNum_onkeydown,this);
            this.div_work.form.btn_inspNoPopup.addEventHandler("onclick",this.div_work_btn_inspNoPopup_onclick,this);
            this.ds_main.addEventHandler("onrowposchanged",this.ds_main_onrowposchanged,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_main_oncolumnchanged,this);
            this.ds_main.addEventHandler("cancolumnchange",this.ds_main_cancolumnchange,this);
            this.ds_line.addEventHandler("oncolumnchanged",this.ds_line_oncolumnchanged,this);
            this.ds_line.addEventHandler("cancolumnchange",this.ds_line_cancolumnchange,this);
        };
        this.loadIncludeScript("PCM07900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
