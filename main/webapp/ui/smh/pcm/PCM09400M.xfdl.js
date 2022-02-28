(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09400M");
            this.set_titletext("포장사양관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1647,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grdMst", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PRGMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"BOXLINENO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_ONE_ONLY\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_FL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBtn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODFUNCSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SRCNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKSPECDETSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCOMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREVUSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDup", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nextBtnSeq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODFUNCSEQNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_nextDetailSeq", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PACKSPECDETSEQNEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMstDup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PRGMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBtnDup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODFUNCSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SRCNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdDetailDup", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKSPECDETSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCOMPANYID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREVUSEYN\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMstCopy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PRGMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"BOXLINENO\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_ONE_ONLY\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_FL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("포장사양관리");
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

            obj = new Button("btn_del_ds_grdBtn",null,"58","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_search","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_prodId","0","10","5.5%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("6");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_prodNm","17.26%","10","5.2%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_comp","36.23%","10","5.05%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("8");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_custModelNm","65.59%","10","6.69%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("11");
            obj.set_text("고객모델명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTMODELNAME");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_custPn","51.12%","10","6.69%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("10");
            obj.set_text("고객PN");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMERPN");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"9","62","24","39",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"9","24","24","10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prodId",null,"10","22","20","sta_prodNm:10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prodId","sta_prodId:10","10",null,"20","sta_prodNm:32",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("0");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prodNm","sta_prodNm:10","10",null,"20","sta_comp:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("AMB638RD01 DIGITIZER(2L)-IFV직납");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_custPn","sta_custPn:10","10",null,"20","sta_custModelNm:0",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            obj.set_text("5-PP300009");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_custModelNm","sta_custModelNm:10","10","9.73%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("CAPE RF CAMERA");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_cump","sta_comp:10","10",null,"20","sta_custPn:32",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("13");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_cump",null,"10","22","20","sta_custPn:10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("title_mst","0","52","66","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("고객정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CUSTOMERINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","54.86%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grdDetail");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"270\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"사용\" tooltiptext=\"8CD6983793804615A4B87B0E59AA4DA0\"/><Cell col=\"2\" rowspan=\"2\" text=\"고객모델명\" tooltiptext=\"CUSTMODELNAME\" cssclass=\"cell_point\"/><Cell col=\"3\" rowspan=\"2\" text=\"자사품목코드\" tooltiptext=\"DirectItemCode\" cssclass=\"cell_point\"/><Cell col=\"4\" rowspan=\"2\" text=\"고객품명\" tooltiptext=\"CUSTOMERITEMNAME\"/><Cell col=\"5\" rowspan=\"2\" text=\"고객PN\" tooltiptext=\"CUSTOMERPN\"/><Cell col=\"6\" rowspan=\"2\" text=\"고객업체코드\" tooltiptext=\"CustomerVendorCode\"/><Cell col=\"7\" colspan=\"2\" text=\"고객 Rev\" cssclass=\"cell_headMaster\" tooltiptext=\"CUSTOMERREV\"/><Cell col=\"9\" rowspan=\"2\" text=\"합수\" tooltiptext=\"ARRAY\"/><Cell col=\"10\" rowspan=\"2\" text=\"Attribute1\"/><Cell col=\"11\" rowspan=\"2\" text=\"Attribute2\"/><Cell col=\"12\" rowspan=\"2\" text=\"Attribute3\"/><Cell col=\"13\" rowspan=\"2\" text=\"Attribute4\"/><Cell col=\"14\" rowspan=\"2\" text=\"Attribute5\"/><Cell col=\"15\" rowspan=\"2\" text=\"Attribute6\"/><Cell col=\"16\" rowspan=\"2\" text=\"Attribute7\"/><Cell col=\"17\" rowspan=\"2\" text=\"Attribute8\"/><Cell col=\"18\" rowspan=\"2\" text=\"Attribute9\"/><Cell col=\"19\" rowspan=\"2\" text=\"Attribute10\"/><Cell row=\"1\" col=\"7\" text=\"사용\" tooltiptext=\"8CD6983793804615A4B87B0E59AA4DA0\"/><Cell row=\"1\" col=\"8\" text=\"Rev\" tooltiptext=\"8B803E42B2684B27BA4E31A4B3D97F59\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:VALIDSTATE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:CUSTOMERMODELNM\" textAlign=\"left\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNM\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\"/><Cell col=\"4\" text=\"bind:CUSTOMERPRODNAME\" textAlign=\"left\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"5\" text=\"bind:CUSTOMERPN\" textAlign=\"left\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"6\" text=\"bind:CUSTOMERCOMPANYID\" textAlign=\"left\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"7\" text=\"bind:CUSTOMERREVUSEYN\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"8\" text=\"bind:CUSTOMERREV\" textAlign=\"left\" edittype=\"expr:dataset.getColumn(currow, &apos;CUSTOMERREVUSEYN&apos;) == &apos;N&apos; ? &apos;none&apos;: &apos;normal&apos;\" displaytype=\"expr:dataset.getColumn(currow, &apos;CUSTOMERREVUSEYN&apos;) == &apos;N&apos; ? &apos;none&apos;: &apos;editcontrol&apos;\"/><Cell col=\"9\" text=\"bind:SUMPCS\" textAlign=\"left\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"10\" text=\"bind:ATTRIBUTE1\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"11\" text=\"bind:ATTRIBUTE2\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"12\" text=\"bind:ATTRIBUTE3\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"13\" text=\"bind:ATTRIBUTE4\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"14\" text=\"bind:ATTRIBUTE5\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"15\" text=\"bind:ATTRIBUTE6\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"16\" text=\"bind:ATTRIBUTE7\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"17\" text=\"bind:ATTRIBUTE8\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"18\" text=\"bind:ATTRIBUTE9\" edittype=\"normal\" displaytype=\"editcontrol\"/><Cell col=\"19\" text=\"bind:ATTRIBUTE10\" edittype=\"normal\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_btnInfo","75.00%","86",null,null,"0","grd_detail:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grdBtn");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사용\"/><Cell col=\"2\" text=\"버튼명\" tooltiptext=\"ButtonNm\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"소스명\" tooltiptext=\"SourceNm\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:VALIDSTATE\"/><Cell col=\"2\" text=\"bind:BUTTONNAME\" textAlign=\"left\" edittype=\"combo\" displaytype=\"combocontrol\" combocodecol=\"C,PackingBnt,,Y,Y\"/><Cell col=\"3\" text=\"bind:SRCNAME\" textAlign=\"left\" edittype=\"normal\" displaytype=\"editcontrol\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_master","0","86",null,null,"grd_btnInfo:10","grd_detail:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grdMst");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"사용\" displaytype=\"normal\" edittype=\"none\" tooltiptext=\"8CD6983793804615A4B87B0E59AA4DA0\"/><Cell col=\"2\" text=\"고객코드\" tooltiptext=\"CUSTOMERID\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"고객사명\" tooltiptext=\"CUTOMERNAME\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"D/C\" tooltiptext=\"DC\"/><Cell col=\"5\" text=\"프로그램명\" tooltiptext=\"ProgramName\"/><Cell col=\"6\" text=\"PO NO\"/><Cell col=\"7\" text=\"D NO\"/><Cell col=\"8\" text=\"INV NO\"/><Cell col=\"9\" text=\"ASN\"/><Cell col=\"10\" text=\"내부 Box No\" tooltiptext=\"INBOXNO\"/><Cell col=\"11\" text=\"Pack No 대/소포장\" tooltiptext=\"PackNoLargeSmall\"/><Cell col=\"12\" text=\"비고\" tooltiptext=\"REMARK\"/><Cell col=\"13\" text=\"LOT\" tooltiptext=\"LOT\"/><Cell col=\"14\" text=\"수정가능여부\" tooltiptext=\"MODIFI_FLAG\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:VALIDSTATE\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:CUSTOMERID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"hide\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\"/><Cell col=\"3\" textAlign=\"left\" expandshow=\"hide\" text=\"bind:CUSTOMERNM\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:DC\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,PackingDC,,Y,Y\"/><Cell col=\"5\" text=\"bind:PRGMNAME\" displaytype=\"combocontrol\" edittype=\"combo\" combocodecol=\"C,ProgramName,,Y,Y\"/><Cell col=\"6\" text=\"bind:PONO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:DNO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:INVNO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:ASN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:BOXLINENO\"/><Cell col=\"11\" text=\"bind:PACKNO\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"12\" text=\"bind:REMARK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"13\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LOT_ONE_ONLY\"/><Cell col=\"14\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MOD_FL\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title_btnGrid","75%","51","155","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("버튼 기준정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("BUTTONINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title_detail","0","grd_master:0","70","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("포장 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PACKINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_grdDetail",null,"grd_btnInfo:5","26","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_grdDetail",null,"grd_btnInfo:5","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"grd_btnInfo:5","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_grdBtn",null,"58","26","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_btnInfo",null,"58","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_grdMst",null,"58","26","24","grd_btnInfo:39",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_grdMst",null,"58","26","24","grd_btnInfo:65",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_master",null,"58","29","24","grd_btnInfo:10",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1647,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM09400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM09400M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM09400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장사양조회
         * 파일명 		: PCM09400M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.03.10
         *
         * 설  명		:  조회/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.10	김진현   	최초작성
         * 2021.03.25   김진현	    개선 사항 적용 (권한부분 미적용)
         * 2021.04.02   김진현		헤더명 변경
         * 2021.04.08   김진현		내부 box no 추가
         * 2021.07.21	김진현		고객사 번호 초기 등록시 직접 입력 (기존 등록된값 중복값 등록 불가)
         * 2021.07.28	김진현		상단 필터 조건 포장정보에도 조건 설정(품목코드, 고객PN, 고객모델명)
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
        this.searchDiv = this.div_work.form.div_search.form;

        this.vSaveType = true;		// 저장시 mst 그리드 row 변경 안되도록

        this.CUSTOMERID ="";		// 고객사 ID


        this.vChkAuth	= true;		// 관리자(Admin) 있으면 true/ 없으면 (77) 포장관리자 false

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 그리드 등록시 팝업 정보 설정


        	// x 버튼 이벤트 설정(품목코드) - 21.07.28
        	this.div_work.form.div_search.form.btn_edt_prodId.setEventHandler( "onclick", this.fn_clickProdId, this );

        	// 접속자 권한 정보
        	var nAuth = this.gf_getJobAuthIds(this.gf_getUserId);	// 접속자의 권한 체크

        	if(!this.gfn_isNull(nAuth))
        	{
        		var nAuthArr = nAuth.split(",");
        		this.vChkAuth = false;
        		for(var a=0; a<nAuthArr.length; a++)
        		{
        			var chkAuth = nAuthArr[a];
        			if(chkAuth == 'Admin')
        			{
        				this.vChkAuth = true;
        			}
        		}
        	}
        	if(this.vChkAuth)
        	{
        		this.div_work.form.grd_master.set_readonly(!this.vChkAuth);
        		this.div_work.form.grd_btnInfo.set_readonly(!this.vChkAuth);
        	}
        	else
        	{
        		this.div_work.form.grd_master.set_readonly(!this.vChkAuth);
        		this.div_work.form.grd_btnInfo.set_readonly(!this.vChkAuth);
        	}


        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {

        	this.ds_search.clearData();
        	this.ds_grdDetail.clearData();
        	this.ds_grdBtn.clearData();

        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", 		this.gf_getSiteType());				// 공장
        	this.ds_search.setColumn(0, "CUSTOMERNM", this.searchDiv.edt_cump.value);		// 고객사(명) 으로 변경 21.03.25 김정욱 과장님 요청 사항(명도 추가 조회 가능)
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.searchDiv.edt_prodId.value);			// 품목코드
        	this.ds_search.setColumn(0, "CUSTOMERPN", this.searchDiv.edt_custPn.value); 			// 고객PN
        	this.ds_search.setColumn(0, "CUSTOMERMODELNM",   this.searchDiv.edt_custModelNm.value); // 고객모델명


        	// 고객사 명
        	// 고객사 명 없으면 고객id 초기화
        	if(this.gfn_isNull(this.searchDiv.edt_cump.value))
        	{
        		this.CUSTOMERID = "";			//고객id
        	}

        	this.ds_search.setColumn(0, "CUSTOMERID", this.CUSTOMERID);

        	// 조회 (고객정보 MST 조회)실행
        	var sSvcID 			= "selectPackagProductMstList";
        	var sController 	= "/pcm09400/selectPackagProductMstList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_grdMst=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
           if (!this.gfn_dsIsUpdated(this.ds_grdMst)
        	 && !this.gfn_dsIsUpdated(this.ds_grdDetail)
        	 && !this.gfn_dsIsUpdated(this.ds_grdBtn)
        	 )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	/* 그리드 필수체크 */
        	var mst 	= this.div_work.form.grd_master;
        	var detail 	= this.div_work.form.grd_detail;
        	var btn 	= this.div_work.form.grd_btnInfo;

        	var strMst = "CUSTOMERID,CUSTOMERNM";					// 21.04.12 고객사명 직접 입력, 고객사 코드 선택 (21.07.21) 고객사 선택 -> 직접입력

        	var strBtn = "BUTTONNAME";

        	var strDetail = "CUSTOMERMODELNM,PRODUCTDEFID";			// 21.03.25 김정욱 과장님 요청 사항 필수값 추가 (자사품목코드) -> 필수는 아닌데 중복 체크는 해야됨.

        	/* 고객정보 그리드 체크 */
        	if(!this.nfn_MandatoryCheckGrid(mst, strMst)) return;

        	/* 버튼 기준 정보 그리드 체크 */
        	if(!this.nfn_MandatoryCheckGrid(btn, strBtn)) return;

        	/* 포장정보 그리드 체크 */
        	//if(!this.nfn_MandatoryCheckGrid(detail, strDetail)) return;
        	// 헤더가 두개라서 따로 함수 생성 함
        	if(!this.fn_chekGrid(detail, strDetail, this.ds_grdDetail)) return;

        	//고객정보 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(this.ds_grdMst
        								, "ENTERPRISEID|PLANTID|CUSTOMERID|CUSTOMERNM"										// 고객사명 직접 입력
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.title_mst.text
        								)){ return;}
            //포장 정보 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(this.ds_grdDetail					// PRODUCTDEFVERSION,CUSTOMERREV [21.05.12] 조건 추가
        								, "ENTERPRISEID|PLANTID|CUSTOMERID|CUSTOMERMODELNM|PRODUCTDEFID|PRODUCTDEFVERSION|CUSTOMERREV"	//|PACKSPECDETSEQ"	// 21.03.25 자사품목코드 중복 체크 추가
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.title_detail.text
        								)){ return;}

            //버튼 기준정보 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(this.ds_grdBtn
        								, "ENTERPRISEID|PLANTID|CUSTOMERID|BUTTONNAME"		// |PRODFUNCSEQ
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.title_btnGrid.text)){ return;}



        	// (21.07.21) 고객사 중복 체크
        	this.ds_grdMstCopy.clearData();
        	var nCnt = this.ds_grdMst.rowcount;
        	for(var i=0; i< nCnt; i++)
        	{
        		var nType = this.ds_grdMst.getRowType(i);
        		if(nType ==  Dataset.ROWTYPE_INSERT){
        			var nPos = this.ds_grdMstCopy.addRow();
        			var nRe = this.ds_grdMstCopy.copyRow(nPos, this.ds_grdMst, i);
        		}
        	}

        	// (21.07.21) 고객사 직접 입력 (이미 등록된 고객사 번호 인지 체크)
        	var sSvcID 			= "savePackagMstChk";
        	var sController 	= "/pcm09400/savePackagMstChk.do";
        	var sInDatasets 	= "ds_resourceMst=ds_grdMstCopy";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        	//-------------------------------------------------------------

        	// db의 중복 값 체크 조회 (3개 전부다(3) + seq (2))  - 두조건 걸수 있음
        	//this.fn_chkDbDup();

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
        		// Mst 고객사 번호 신규 생성시 체크
        		if (trId == "savePackagMstChk")
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
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISWEEK");		// 금주
        			break;
        		case "selectPackagProductMstList":		//[메인조회-고객정보 - MST] Site Callback
        			// 조회 조건 없는 경우 msg 출력
        			if(this.ds_grdMst.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        		case "selectPackagProductSubList": //[메인그리드 선택시] sub List 조회

        			break;
        		case "selectPackagProductDupList": //[메인그리드 선택시] sub List 조회

        			this.vSaveType = true;
        			// 신규인경우 (버튼기준정보, 포장정보 SEQ 설정하기)
        			this.fn_setSeq(this.ds_grdDetail, this.ds_nextDetailSeq, "PACKSPECDETSEQ", "PACKSPECDETSEQNEXT");
        			this.fn_setSeq(this.ds_grdBtn, this.ds_nextBtnSeq, "PRODFUNCSEQ", "PRODFUNCSEQNEXT");

        			// 고객정보는 등록값만  (return 시 초기화)
        			if(!this.fn_chkDbDupGrid(this.ds_grdMst, this.ds_grdMstDup
        								, "ENTERPRISEID|PLANTID|CUSTOMERID|CUSTOMERNM"			// 21.04.12 고객사명 추가
        								, this.div_work.form.title_mst.text
        								)){
        								this.fn_setInitSeq(this.ds_grdDetail, "PACKSPECDETSEQ");
        								this.fn_setInitSeq(this.ds_grdBtn, "PRODFUNCSEQ");
        								return;}

        			// 버튼, 포장 수정, 등록시 둘다 체크..
        			//포장 정보 그리드내 중복값 체크
        			if(!this.fn_chkDbDupSubGrid(this.ds_grdDetail, this.ds_grdDetailDup
        											// PRODUCTDEFVERSION,CUSTOMERREV [21.05.12] 조건 추가
        										, "ENTERPRISEID|PLANTID|CUSTOMERID|CUSTOMERMODELNM|PRODUCTDEFID|PRODUCTDEFVERSION|CUSTOMERREV"	// |PACKSPECDETSEQ"			// 21.03.25 김정욱 과장님 요청 추가
        										, this.div_work.form.title_detail.text
        										)){
        										this.fn_setInitSeq(this.ds_grdDetail, "PACKSPECDETSEQ");
        										this.fn_setInitSeq(this.ds_grdBtn, "PRODFUNCSEQ");
        										return;}

        			//버튼 기준정보 그리드내 중복값 체크
        			if(!this.fn_chkDbDupSubGrid(this.ds_grdBtn, this.ds_grdBtnDup
        										, "ENTERPRISEID|PLANTID|CUSTOMERID|BUTTONNAME"		// |PRODFUNCSEQ
        										, this.div_work.form.title_btnGrid.text
        										)){
        										this.fn_setInitSeq(this.ds_grdDetail, "PACKSPECDETSEQ");
        										this.fn_setInitSeq(this.ds_grdBtn, "PRODFUNCSEQ");
        										return;}

        			// 저장(등록/수정/삭제) 호출
        			this.fn_dupAftSave();

        			break;

        		case "savePackagProductList" :
        			{
        				this.gfn_Message("SuccessSave", "", "information", "ok");
        				this.fn_search();
        				break;
        			}
        		case "savePackagMstChk":

        			//trace("나머지 중복 체크 후 진행");
        			// 고객사 중보값 체크 후 진행 (21.07.21)
        			// db의 중복 값 체크 조회 (3개 전부다(3) + seq (2))  - 두조건 걸수 있음
        			this.fn_chkDbDup();




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
        		case "PROD_ITEM_GRP_2" :
        			this.searchDiv.edt_prodId.set_value(rtn[0]);
        			this.searchDiv.edt_prodNm.set_value(rtn[1]);
        			break;

        		case "CUST_ID" :
        			this.searchDiv.edt_cump.set_value(rtn[1]);
        			this.CUSTOMERID = rtn[0];
        			break;

        		case "SEARCH_CUSTID" :
        			// 고객정보 그리드 고객사명 팝업에서 고객사명 선택시
        			var nGrdMstRow = this.ds_grdMst.rowposition;
        			this.ds_grdMst.setColumn(nGrdMstRow,"CUSTOMERID",rtn[0]);

        			//this.ds_grdMst.setColumn(nGrdMstRow,"CUSTOMERNM",rtn[1]);		// 고객사명 직접 입력

        			// 하단 신규건들도 변경 해줘야됨 (우선 하단 초기화 할것)
        			this.fn_setSubCustId();


        			break;
        		case "SCH_PRODUCTDEFID" :
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFID",rtn[0]);
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFVERSION",rtn[3]);

        			// PRODUCTDEFNM (추가)
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFNM",rtn[0]+rtn[3]);
        			break;

        		case "SCH_PRODUCTDEFID_TOP" :
        			/*
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFID",rtn[0]);
        			this.ds_grdDetail.setColumn(this.ds_grdDetail.rowposition,"PRODUCTDEFVERSION",rtn[3]);
        			*/
        			this.searchDiv.edt_prodId.set_value(rtn[0]);
        			this.searchDiv.edt_prodNm.set_value(rtn[1]);
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

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00138"){ //창고 명 조회
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME";
        	} else if(popId=="P00139"){ //창고 명 조회
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";		// 김정욱 과장님 요청 사항 21.03.25 고객명으로 설정 되고 조회도 되도록
        	}
        	else if(popId=="P00225"){ // 고객사 조회(조회조건)

        		// (21.08.03) 바로 조회(엔터는 안됨. 공통.. 팝업..)
        		oArg.arg_type = "BA";
        		oArg.arg_searchStr = "1=1|TXTCUSTOMERID="+this.div_work.form.div_search.form.edt_cump.value;	// 검색 조건(이미 입력 된값)
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNM";
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
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISWEEK"); // 금주
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_site			// Object
        								, "selectMtmPlantList,,Y,A" 		// OPTION
        								, sArgs								// 추가 파라미터
        								, "fn_callBack"); 					//콜백함수 지정

        	this.fn_getMtrGrpCode();
        	this.fn_getMtrVer();

        }
        /*
         * 고객정보 그리드 값 변경시 (subList들 조회 로직 )
         */
        this.fn_setSubList = function (nRow)
        {
        	this.ds_searchDetail.clearData();

        	this.ds_searchDetail.addRow();
        	this.ds_searchDetail.setColumn(0, "ENTERPRISEID", 	this.ds_grdMst.getColumn(nRow, "ENTERPRISEID")); 		// ENTERPRISEID
        	this.ds_searchDetail.setColumn(0, "PLANTID", 		this.ds_grdMst.getColumn(nRow, "PLANTID"));				// 공장
        	this.ds_searchDetail.setColumn(0, "CUSTOMERID", 	this.ds_grdMst.getColumn(nRow, "CUSTOMERID"));			// 고객사
        	// 필터 조건에 해당하는 값들 조회 해야됨. (21.07.28) - (품목코드, 고객PN, 고객모델명)
        	this.ds_searchDetail.setColumn(0, "PRODUCTDEFID",	this.searchDiv.edt_prodId.value);			// 품목코드
        	this.ds_searchDetail.setColumn(0, "CUSTOMERPN", 	this.searchDiv.edt_custPn.value); 			// 고객PN
        	this.ds_searchDetail.setColumn(0, "CUSTOMERMODELNM",this.searchDiv.edt_custModelNm.value); 		// 고객모델명
        	//-----------------------------------------------------


        	var sSvcID 			= "selectPackagProductSubList";
        	var sController 	= "/pcm09400/selectPackagProductSubList.do";
        	var sInDatasets 	= "INPUT=ds_searchDetail";
        	var sOutDatasets 	= "ds_grdDetail=output1 ds_grdBtn=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         * 단일 행 삭제 함수
         */
        this.fn_deleteOne = function (dsObj)
        {
        	var nChkCnt = dsObj.rowcount;
        	var nDsPos  = dsObj.rowposition
        	// 삭제건 체크
        	if (nChkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	// 그리드 선택된행 삭제
        	dsObj.deleteRow(nDsPos);
        };

        /*
         * 고객정보 그리드 고객사명 필수값 미 입력시 조회 안되도록 설정
         */
        this.fn_chkMstCustId = function ()
        {
        	var nCustId = this.ds_grdMst.getColumn(this.ds_grdMst.rowposition,"CUSTOMERID");		// 고객사 id

        	if(!this.gfn_isNull(nCustId))
        	{
        		return true;		// 필수값 입력된 상태
        	}
        	return false;

        };
        /*
         *************************************************************************************[필수값/그리드내 중복값 체크]
        */
        /*
         * 그리드 헤더 두개row 시 필수값 미 입력 체크
         */
        this.fn_chekGrid = function (grdObj, chkText, dsObj)
        {
        	var nCnt = dsObj.rowcount;

        	var nArr = chkText.split(",");

        	for(var i=0; i<nCnt; i++)
        	{
        		for(var j=0; j<nArr.length; j++)
        		{
        			var nChkCol = this.ds_grdDetail.getColumn(i,nArr[j]);

        			var colId = this.nfn_GetColNum(grdObj, nArr[j]);

        			//var title	= this.nfn_nvl(this.nfn_getDictionarynameUpper(nArr[j]),grdObj.getCellProperty("head", colId, "text"));
        			var title	= this.nfn_nvl(grdObj.getCellProperty("head", colId, "text"), this.nfn_getDictionarynameUpper(nArr[j]));
        			//trace(" ===> "+grdObj.getCellProperty("head", colId, "text")+" || "+this.nfn_getDictionarynameUpper(nArr[j]));
        			if(this.gfn_isNull(nChkCol))
        			{
        				this.gfn_Message("InputSomeThing",title , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        				return false;
        			}
        		}
        	}
        	return true;

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

        			// [21.05.12] 조건 추가(고객 Rev는 없는 경우 비교)
        			if(this.gfn_isNull(chkValue))
        			{
        				//trace(" =====[저장전 체크(값이 없는 경우)] : "+chkValue+" || "+chkKey);
        				// 조건 추가
        				nChkStr += j==0? "("+chkKey+"== '" + chkValue+"' || "+chkKey+"== undefined)"
        							:" && (" +chkKey+"== '" + chkValue+"'|| "+chkKey+"== undefined)";
        				continue;
        			}
        			nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        							:" && " +chkKey+"== '" + chkValue+"'";
        		}
        		// 중복 조건
        		var chkCnt = obj.getCaseCount(nChkStr);
        		//trace(" ===> : "+chkCnt+" || "+nChkStr);
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
         * 저장전 db 데이터와 중복 체크 시도
         */
        this.fn_chkDbDup = function ()
        {
        	this.vSaveType = false;

        	this.ds_searchDup.clearData();

        	this.ds_grdDetailDup.clearData();
        	this.ds_grdBtnDup.clearData();
        	this.ds_grdMstDup.clearData();
        	this.ds_nextDetailSeq.clearData();
        	this.ds_nextBtnSeq.clearData();

        	// 조회 조건 설정
        	this.ds_searchDup.addRow();
        	this.ds_searchDup.setColumn(0, "ENTERPRISEID",  this.gf_getEnterpriseId()); 		// ENTERPRISEID
        	this.ds_searchDup.setColumn(0, "PLANTID", 		this.gf_getSiteType());				// 공장

        	var nRow = this.ds_grdMst.rowposition;
        	this.ds_searchDup.setColumn(0, "CUSTOMERID", 	this.ds_grdMst.getColumn(nRow, "CUSTOMERID"));			// 고객사



        	// 조회 (고객정보 MST 조회)실행

        	var sSvcID 			= "selectPackagProductDupList";
        	var sController 	= "/pcm09400/selectPackagProductDupList.do";
        	var sInDatasets 	= "INPUT=ds_searchDup";
        	var sOutDatasets 	= "ds_grdMstDup=output1 ds_grdDetailDup=output2 ds_grdBtnDup=output3 ds_nextDetailSeq=output4 ds_nextBtnSeq=output5";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };


        /*
         * DB 정보 중복 체크
         * 그리드 데이터셋 		: dsObj
         * db 전체 조회 데이터셋  : dupDsObj
         * 중복 체크할 컬럼 정보  : chkCol
         * 중복 체크값의 그리드명 : tableNm
         */
        this.fn_chkDbDupGrid = function (dsObj, dupDsObj, chkCol, tableNm)
        {
        	var nRow = dsObj.rowcount;
        	var chkColList = chkCol.split("|");  // 체크 정보

        	for(var i=0; i<nRow; i++)
        	{
        		var nType = dsObj.getRowType(i);
        		if(nType == Dataset.ROWTYPE_INSERT)			// 신규 추가건에 대해서만 (Db Dup 조회해온 데어터셋에 값이 있는지 확인한다.)
        		{
        			var nChkStr = "";						// 찾을 정보 설정
        			for(var j=0; j <chkColList.length; j++){
        				var chkKey = chkColList[j];
        				var chkValue = dsObj.getColumn(i,chkKey);

        				nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        								:" && " +chkKey+"== '" + chkValue+"'";
        			}
        			// 중복 조건
        			var chkCnt = dupDsObj.getCaseCount(nChkStr);
        			if(chkCnt >= 1){		// 1보다 크거나 같으면 중복 건이 존재 함 (0이여야 중복 값 없음)
        				var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        				//this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        				this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        				return false;
        			}
        		}
        	}
        	return true;
        };


        /*
         * DB 정보 중복 체크(Sub)
         * 그리드 데이터셋 		: dsObj
         * db 전체 조회 데이터셋  : dupDsObj
         * 중복 체크할 컬럼 정보  : chkCol
         * 중복 체크값의 그리드명 : tableNm
         */
        this.fn_chkDbDupSubGrid = function (dsObj, dupDsObj, chkCol, tableNm)
        {
        	var nRow = dsObj.rowcount;

        	var chkColList = chkCol.split("|");  // 체크 정보

        	for(var i=0; i<nRow; i++)
        	{
        		var nType = dsObj.getRowType(i);
        		// 신규 추가건,수정건에 대해서만 (Db Dup 조회해온 데어터셋에 값이 있는지 확인한다.)
        		if(nType == Dataset.ROWTYPE_INSERT || nType == Dataset.ROWTYPE_UPDATE)
        		{
        			var nChkStr = "";						// 찾을 정보 설정
        			for(var j=0; j <chkColList.length; j++){
        				var chkKey = chkColList[j];
        				var chkValue = dsObj.getColumn(i,chkKey);


        				// [21.05.12] 조건 추가(고객 Rev는 없는 경우 비교)
        				if(this.gfn_isNull(chkValue))
        				{
        					//trace(" =====[저장전 체크(값이 없는 경우)] : "+chkValue+" || "+chkKey);
        					// 조건 추가
        					nChkStr += j==0? "("+chkKey+"== '" + chkValue+"' || "+chkKey+"== undefined)"
        								:" && (" +chkKey+"== '" + chkValue+"'|| "+chkKey+"== undefined)";
        					continue;
        				}

        				nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        								:" && " +chkKey+"== '" + chkValue+"'";
        			}
        			// 중복 조건
        			var chkCnt = dupDsObj.getCaseCount(nChkStr);

        			if((chkCnt > 0) && nType == Dataset.ROWTYPE_INSERT){		// 1보다 크거나 같으면 중복 건이 존재 함 (0이여야 중복 값 없음)
        				var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        				//this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        				this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        				return false;
        			}
        			if((chkCnt > 1) && nType == Dataset.ROWTYPE_UPDATE){		// 1보다 크거나 같으면 중복 건이 존재 함 (0이여야 중복 값 없음)
        				var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        				//this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        				this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        				return false;
        			}
        		}
        	}
        	return true;

        };

        /*
         * 포장정보, 버튼 기준정보 신규건 seq 추가
         * seq 설정 정보(신규건들만 설정)
         */
        this.fn_setSeq = function (dsObj, seqDsObje, nColNm, nColNextNm)
        {
        	var nRow = dsObj.rowcount;
        	var nNextSeq = seqDsObje.getColumn(0,nColNextNm);
        	for(var i=0; i<nRow; i++)
        	{
        		var nType = dsObj.getRowType(i);

        		if(nType == Dataset.ROWTYPE_INSERT)
        		{
        			dsObj.setColumn(i, nColNm, nNextSeq);
        			nNextSeq++;
        		}

        	}
        };


        /*
         * 고객정보 고객사 정보 변경시 -> 하단 sub 초기화
         */
        this.fn_setSubCustId = function ()
        {
        	this.ds_grdDetail.clearData();
        	this.ds_grdBtn.clearData();
        };

        /*
         * 중복 설정시 - seq값 초기화 할 것
         */
        this.fn_setInitSeq = function (dsObj, nColNm)
        {
        	var nRow = dsObj.rowcount;

        	for(var i=0; i<nRow; i++)
        	{
        		var nType = dsObj.getRowType(i);

        		if(nType == Dataset.ROWTYPE_INSERT)
        		{
        			dsObj.setColumn(i, nColNm, '');
        		}
        	}
        };


        /*
         * 중복 체크 후 저장 로직 탐
         */
        this.fn_dupAftSave = function ()
        {
        	var sSvcID 			= "savePackagProductList";
        	var sController 	= "/pcm09400/savePackagProductList.do";
        	var sInDatasets 	= "ds_resourceMst=ds_grdMst:U ds_resourceDtl=ds_grdDetail:U ds_resourceBtn=ds_grdBtn:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 조회 조건 초기화
         */
        this.fn_formInit = function(obj,e)
        {
        	this.searchDiv.edt_custModelNm.set_value("");
        	this.searchDiv.edt_custPn.set_value("");
        	this.searchDiv.edt_cump.set_value("");
        	this.searchDiv.edt_prodNm.set_value("");
        	this.searchDiv.edt_prodId.set_value("");
        };

        /*
         * 고객 Rev 사용 콤보 값 변경시 (포장정보 그리드 콤보값 변경시)
         */
        this.div_work_grd_detail_oncloseup = function(obj,e)
        {
        	var nColIdx = this.div_work.form.grd_detail.getBindCellIndex("body","CUSTOMERREVUSEYN");

        	if(e.cell == nColIdx)
        	{
        		if(e.value == 'N')
        		{
        			this.ds_grdDetail.setColumn(e.row, "CUSTOMERREV", "");
        		}
        	}

        };

        /*
         * 버튼 클릭시 권한 체크
         */
        this.fn_chkAuth = function ()
        {
        	if(!this.vChkAuth)
        	{
        		this.gfn_Message("Powers", null, "warning", "ok");// 권한이없습니다.
        		return false;
        	}

        	return true;
        };


        /*
         * (21.07.28) 상단 품목코드 조회 조건 - x 버튼 클릭시
         */
        this.fn_clickProdId = function ()
        {
        	this.searchDiv.edt_prodId.set_value("");
        	this.searchDiv.edt_prodNm.set_value("");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 품목코드 (조회조건 팝업)
         */
        this.div_work_div_search_btn_prodId_onclick = function(obj,e)
        {
        	/*
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID

        	this.fn_openPop("PROD_ITEM_GRP_2","P00138", sArgs); //작업장 조회
        	*/

        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "SCH_PRODUCTDEFID_TOP";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 기 입력값 있는지 확인
        	var nSearch = this.searchDiv.edt_prodId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}

        	this.gfn_openPopup(popupId,"pcm::PCM09400P.xfdl" ,oArg ,opts);

        };
        /*
         * 고객사 (조회조건 팝업)
         */
        this.div_work_div_search_btn_comp_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType()); 			//Site

        	//this.fn_openPop("CUST_ID","P00139", sArgs); //작업장 조회
        	this.fn_openPop("CUST_ID","P00225", sArgs); //작업장 조회
        };

        /*
         * 고객정보 그리드 고객명 팝업 호출시(등록시만 활성화됨)
         */
        this.div_work_grd_master_onexpanddown = function(obj,e)
        {
        	//var nCustNmIdx = this.div_work.form.grd_master.getBindCellIndex("body","CUSTOMERNM");
        	var nCustNmIdx = this.div_work.form.grd_master.getBindCellIndex("body","CUSTOMERID");		// 고객사 코드 선택/명은 직접 입력

        	var popupId 		= "";
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	if(e.cell == nCustNmIdx)
        	{
        		var oArg = {};
        		oArg.arg_type = "B";
        		oArg.arg_popupCd = "P00139";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        		oArg.arg_paramCols = "SAMPLE|ENTERPRISEID|PLANTID";
        		oArg.arg_paramValues = "Y|"+nEnterpriseId + "|" + nSite;
        		//oArg.arg_searchStr = "";
        		popupId = "SEARCH_CUSTID";

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=400,height=500");
        			return;

        	}
        };

        /*
         * 포장정보 그리드 자사품목코드 팝업 호출시
         */
        this.div_work_grd_detail_onexpanddown = function(obj,e)
        {
        	var nProdDefIdIdx = this.div_work.form.grd_detail.getBindCellIndex("body","PRODUCTDEFNM");		// PRODUCTDEFNM로 변경

        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	if(e.cell == nProdDefIdIdx)
        	{
        		var popupId = "SCH_PRODUCTDEFID";
        		var oArg = {};
        		var opts = "width=850,height=500";

        		// 그리드 내 입력값 있으면
        		var nSearch = this.ds_grdDetail.getColumn(e.row,"PRODUCTDEFID");

        		if(!this.gfn_isNull(nSearch))
        		{
        			// 기입력된 값이 있으면
        			oArg.arg_prodId = nSearch;
        		}
        		this.gfn_openPopup(popupId,"pcm::PCM09400P.xfdl" ,oArg ,opts);

        	}
        };

        /*
         * 고객정보 추가
         */
        this.div_work_btn_addRow_mst_onclick = function(obj,e)
        {
        	// 권한에 따른 버튼 이벤트
        	if(!this.fn_chkAuth())
        	{
        		return;
        	}

        	var dsObj = this.ds_grdMst;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row, "CREATER", this.gf_getUserId());   		// 담당자
        	dsObj.setColumn(row, "ENTERPRISEID", this.gf_getEnterpriseId());// EnterpriseId
        	dsObj.setColumn(row, "PLANTID", this.gf_getSiteType());   		// Site
        	dsObj.setColumn(row, "DC", "LargePack");   						// D/C
        	dsObj.setColumn(row, "VALIDSTATE", 1);   						// 사용

        	dsObj.setColumn(row, "PONO", 0);   								// po no
        	dsObj.setColumn(row, "DNO", 0);   								// d no
        	dsObj.setColumn(row, "INVNO", 0);   							// inv no
        	dsObj.setColumn(row, "ASN", 0);   								// asn
        	dsObj.setColumn(row, "PACKNO", 0);   							// pack no 대/소포장
        	dsObj.setColumn(row, "REMARK", 0);   							// 비고

        	dsObj.setColumn(row, "BOXLINENO", 0);   						// 내부BOX NO
        	dsObj.setColumn(row, "LOT_ONE_ONLY", 0);   						// LOT 1건만 등록 가능 체크

        };
        /*
         * 고객정보 삭제
         */
        this.div_work_btn_delRow_mst_onclick = function(obj,e)
        {
        	// 권한에 따른 버튼 이벤트
        	if(!this.fn_chkAuth())
        	{
        		return;
        	}

        	this.fn_deleteOne(this.ds_grdMst);
        };


        /*
         * 고객정보 데이터셋 row 변경시
         */
        this.ds_grdMst_onrowposchanged = function(obj,e)
        {
        	//trace(" ### row 변경시] ### "+e.newrow+" || "+e.oldrow);
        	//if((e.newrow != e.oldrow) && this.vSaveType)	// 저장 중복 체크시 row 변경 되지 않도록 설정
        	if(this.vSaveType)	// 저장 중복 체크시 row 변경 되지 않도록 설정
        	{
        		var nChk = this.fn_chkMstCustId();			// 고객정보 고객사 값 없는 경우 조회 되지 않도록 필수값

        		// (21.07.21) 신규 등록인 경우 재조회 X
        		var nType = this.ds_grdMst.getRowType(this.ds_grdMst.rowposition);					// 신규인지 확인
        		//--------------------------------------------------
        		if(nChk && !(nType ==  Dataset.ROWTYPE_INSERT))
        		{
        			this.fn_setSubList(e.newrow);
        		}
        		else
        		{
        			this.ds_grdDetail.clearData();
        			this.ds_grdBtn.clearData();
        		}
        	}
        };


        /*
         * 포장 정보 추가
         */
        this.div_work_btn_addRow_detail_onclick = function(obj,e)
        {
        	var nChk = this.fn_chkMstCustId();			// 고객정보 고객사 값 없는 경우 조회 되지 않도록 필수값
        	if(!nChk)
        	{
        		//{0}을(를) 먼저 입력하세요.
        		this.gfn_Message("PriorityInputSomething", "고객사명", "error", "ok");		// 고객사명 다국어 적용 하는 방법?
        		return;
        	}
        	var dsObj = this.ds_grdDetail;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();


        	var nMstRow = this.ds_grdMst.rowposition;

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row, "CREATER", this.gf_getUserId());   		// 담당자
        	// 상단 그리드 내용
        	dsObj.setColumn(row, "ENTERPRISEID", this.ds_grdMst.getColumn(nMstRow,"ENTERPRISEID"));// EnterpriseId
        	dsObj.setColumn(row, "PLANTID", this.ds_grdMst.getColumn(nMstRow,"PLANTID"));   		// Site
        	dsObj.setColumn(row, "CUSTOMERID", this.ds_grdMst.getColumn(nMstRow,"CUSTOMERID"));   	// CUSTOMERID
        	dsObj.setColumn(row, "PACKSPECDETSEQ", "");   					// PACKSPECDETSEQ  (중복 체크때 조회 후 채울것!)

        	dsObj.setColumn(row, "CUSTOMERREVUSEYN", "N");   				// CUSTOMERREVUSEYN
        	dsObj.setColumn(row, "VALIDSTATE", 1);   						// 사용

        	dsObj.setColumn(row, "CUSTOMERMODELNM", "");   						// CUSTOMERMODELNM
        	dsObj.setColumn(row, "CUSTOMERPRODNAME", "");   					// CUSTOMERPRODNAME
        	dsObj.setColumn(row, "CUSTOMERPN", "");   							// CUSTOMERPN
        	dsObj.setColumn(row, "CUSTOMERCOMPANYID", "");   					// CUSTOMERCOMPANYID
        	dsObj.setColumn(row, "CUSTOMERREV", "");   							//CUSTOMERREV
        	dsObj.setColumn(row, "PRODUCTDEFID", "");   						// PRODUCTDEFID
        	dsObj.setColumn(row, "PRODUCTDEFVERSION", "");   					// PRODUCTDEFVERSION
        	dsObj.setColumn(row, "SUMPCS", "");   								// SUMPCS
        };

        /*
         * 포장 정보 삭제
         */
        this.div_work_btn_delRow_detail_onclick = function(obj,e)
        {
        	this.fn_deleteOne(this.ds_grdDetail);
        };

        /*
         * 버튼 기준 정보 추가
         */
        this.div_work_btn_addRow_btn_onclick = function(obj,e)
        {
        	// 권한에 따른 버튼 이벤트
        	if(!this.fn_chkAuth())
        	{
        		return;
        	}


        	var nChk = this.fn_chkMstCustId();			// 고객정보 고객사 값 없는 경우 조회 되지 않도록 필수값
        	if(!nChk)
        	{
        		//{0}을(를) 먼저 입력하세요.
        		this.gfn_Message("PriorityInputSomething", "고객사명", "error", "ok");		// 고객사명 다국어 적용 하는 방법?
        		return;
        	}

        	var dsObj = this.ds_grdBtn;
        	if(dsObj == null) return;
        	var row = dsObj.addRow();

        	var nMstRow = this.ds_grdMst.rowposition;

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row, "CREATER", this.gf_getUserId());   		// 담당자
        	// 상단 그리드 내용
        	dsObj.setColumn(row, "ENTERPRISEID", this.ds_grdMst.getColumn(nMstRow,"ENTERPRISEID"));// EnterpriseId
        	dsObj.setColumn(row, "PLANTID", this.ds_grdMst.getColumn(nMstRow,"PLANTID"));   		// Site
        	dsObj.setColumn(row, "CUSTOMERID", this.ds_grdMst.getColumn(nMstRow,"CUSTOMERID"));   	// CUSTOMERID
        	dsObj.setColumn(row, "PRODFUNCSEQ", "");   							// PRODFUNCSEQ  (중복 체크때 조회 후 채울것!)
        	dsObj.setColumn(row, "VALIDSTATE", 1);   							// 사용

        	dsObj.setColumn(row, "BUTTONNAME", "");   							// BUTTONNAME
        	dsObj.setColumn(row, "SRCNAME", "");   								// SRCNAME
        };

        /*
         * 버튼 기준 정보 삭제
         */
        this.div_work_btn_delRow_btn_onclick = function(obj,e)
        {
        	// 권한에 따른 버튼 이벤트
        	if(!this.fn_chkAuth())
        	{
        		return;
        	}

        	this.fn_deleteOne(this.ds_grdBtn);
        };


        /*
         * 고객사 값 변경시 (21.07.21)
         */
        this.ds_grdMst_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == 'CUSTOMERID')		// 고객사인경우 박스일때
        	{
        		this.ds_grdDetail.clearData();
        		this.ds_grdBtn.clearData();
        	}
        };

        /*
         * 21.08.02 품목코드 엔터키 발생시
         */
        this.div_work_div_search_edt_prodId_onkeydown = function(obj,e)
        {
        	// 품목코드 입력 후 엔터 발생시 - 이벤트 발생
        	if(e.keycode == '13')
        	{
        		this.div_work_div_search_btn_prodId_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.btn_del_ds_grdBtn.addEventHandler("onclick",this.div_work_btn_delRow_btn_onclick,this);
            this.div_work.form.div_search.form.btn_reset.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.div_search.form.btn_prodId.addEventHandler("onclick",this.div_work_div_search_btn_prodId_onclick,this);
            this.div_work.form.div_search.form.edt_prodId.addEventHandler("onkeydown",this.div_work_div_search_edt_prodId_onkeydown,this);
            this.div_work.form.div_search.form.btn_cump.addEventHandler("onclick",this.div_work_div_search_btn_comp_onclick,this);
            this.div_work.form.grd_detail.addEventHandler("onexpanddown",this.div_work_grd_detail_onexpanddown,this);
            this.div_work.form.grd_detail.addEventHandler("oncloseup",this.div_work_grd_detail_oncloseup,this);
            this.div_work.form.grd_master.addEventHandler("onexpanddown",this.div_work_grd_master_onexpanddown,this);
            this.div_work.form.btn_add_ds_grdDetail.addEventHandler("onclick",this.div_work_btn_addRow_detail_onclick,this);
            this.div_work.form.btn_del_ds_grdDetail.addEventHandler("onclick",this.div_work_btn_delRow_detail_onclick,this);
            this.div_work.form.btn_add_ds_grdBtn.addEventHandler("onclick",this.div_work_btn_addRow_btn_onclick,this);
            this.div_work.form.btn_del_ds_grdMst.addEventHandler("onclick",this.div_work_btn_delRow_mst_onclick,this);
            this.div_work.form.btn_add_ds_grdMst.addEventHandler("onclick",this.div_work_btn_addRow_mst_onclick,this);
            this.ds_grdMst.addEventHandler("onrowposchanged",this.ds_grdMst_onrowposchanged,this);
            this.ds_grdMst.addEventHandler("cancolumnchange",this.ds_grdMst_cancolumnchange,this);
        };
        this.loadIncludeScript("PCM09400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
