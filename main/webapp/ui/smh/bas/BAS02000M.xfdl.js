(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02000M");
            this.set_titletext("품목사양정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1580,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_etc1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"MOLDTOOLCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_etc2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"BBTTOOLCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_etc3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"ETCTOOLCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTURER\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDNM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_material", this);
            obj._setContents("<ColumnInfo><Column id=\"ARRAYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMBOMID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BOMID\" type=\"STRING\" size=\"256\"/><Column id=\"BOTASSEMBLYITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATEPCS\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"INKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MAKER\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTBOMID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_BOMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"USERLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSURFACE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDETAILTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ink", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE1\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM\" type=\"STRING\" size=\"256\"/><Column id=\"USERLAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"USERLAYER2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_materialDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ARRAYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMBOMID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BOMID\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATEPCS\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"INKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MAKER\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTBOMID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTS_ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_BOMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"USERLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSURFACE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECPERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECPERSONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDFORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAPN\" type=\"STRING\" size=\"256\"/><Column id=\"SPECPERSON\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTRATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INVALIDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MAINFACTORY\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"QRBUSINESSINFO\" type=\"STRING\" size=\"256\"/><Column id=\"QRBUSINESSSUB\" type=\"STRING\" size=\"256\"/><Column id=\"QRPRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QRMATERIALREV\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"ARYSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"ARYSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"XOUT\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSARY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLMM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"MINCL\" type=\"STRING\" size=\"256\"/><Column id=\"MINPSR\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSCALE1\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSCALE2\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION\" type=\"STRING\" size=\"256\"/><Column id=\"OXIDE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATINGPORTION\" type=\"STRING\" size=\"256\"/><Column id=\"ULMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ASSY\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER3\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS11\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS12\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS21\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS22\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS11UM\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS12UM\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS21UM\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS22UM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTNUMAXIS1\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTNUMAXIS2\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYDIAGONALLENGTH\" type=\"STRING\" size=\"256\"/><Column id=\"RELIABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"HAZARDOUSSUBSTANCES\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERFOILUPLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERFOILDOWNLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"USERLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIMENSIONS\" type=\"STRING\" size=\"256\"/><Column id=\"PSRTOLERANCE\" type=\"STRING\" size=\"256\"/><Column id=\"X\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVENEWDATA\" type=\"STRING\" size=\"256\"/><Column id=\"BASICCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPTO\" type=\"STRING\" size=\"256\"/><Column id=\"BILLTO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPTONAME\" type=\"STRING\" size=\"256\"/><Column id=\"BILLTONAME\" type=\"STRING\" size=\"256\"/><Column id=\"ESTIMATEYIELD\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"XOUTPERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"JOBINPUTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_circuitSpec", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FROMINNERLAYERCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOINNERLAYERCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"FROMOUTERLAYERCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOOUTERLAYERCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"FROMOLBCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLBCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER3\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS11\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS12\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS11UM\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS21\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS22\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS21UM\" type=\"STRING\" size=\"256\"/><Column id=\"FROMPTH\" type=\"STRING\" size=\"256\"/><Column id=\"TOPTH\" type=\"STRING\" size=\"256\"/><Column id=\"FROMIVH\" type=\"STRING\" size=\"256\"/><Column id=\"TOIVH\" type=\"STRING\" size=\"256\"/><Column id=\"FROMMVH\" type=\"STRING\" size=\"256\"/><Column id=\"TOMVH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mvh", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ANNULARING\" type=\"STRING\" size=\"256\"/><Column id=\"ASPECTRATIO\" type=\"STRING\" size=\"256\"/><Column id=\"MVHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LASERSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"LANDSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CLFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONFORMALSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMINGDEPTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEQUENCE\">1</Col></Row><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_circuitSpec3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ELONGATIONCHECK1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATIONCHECK2\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATIONCHECK3\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION_1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION_2\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION_3\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHAFTER1\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHAFTER2\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHAFTER3\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHBEFORE1\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHBEFORE2\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHBEFORE3\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION1_1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION2_1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION3_1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION1_2\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION2_2\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION3_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_etcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"부위1\" type=\"STRING\" size=\"256\"/><Column id=\"부위2\" type=\"STRING\" size=\"256\"/><Column id=\"부위3\" type=\"STRING\" size=\"256\"/><Column id=\"부위4\" type=\"STRING\" size=\"256\"/><Column id=\"부위5\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC4\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC5\" type=\"STRING\" size=\"256\"/><Column id=\"이론치1\" type=\"STRING\" size=\"256\"/><Column id=\"이론치2\" type=\"STRING\" size=\"256\"/><Column id=\"이론치3\" type=\"STRING\" size=\"256\"/><Column id=\"이론치4\" type=\"STRING\" size=\"256\"/><Column id=\"이론치5\" type=\"STRING\" size=\"256\"/><Column id=\"실측치1\" type=\"STRING\" size=\"256\"/><Column id=\"실측치2\" type=\"STRING\" size=\"256\"/><Column id=\"실측치3\" type=\"STRING\" size=\"256\"/><Column id=\"실측치4\" type=\"STRING\" size=\"256\"/><Column id=\"실측치5\" type=\"STRING\" size=\"256\"/><Column id=\"신규Data접수\" type=\"STRING\" size=\"256\"/><Column id=\"투입수축X\" type=\"STRING\" size=\"256\"/><Column id=\"투입수축Y\" type=\"STRING\" size=\"256\"/><Column id=\"사양변경내용1\" type=\"STRING\" size=\"256\"/><Column id=\"사양변경내용2\" type=\"STRING\" size=\"256\"/><Column id=\"사양변경내용3\" type=\"STRING\" size=\"256\"/><Column id=\"사양변경내용4\" type=\"STRING\" size=\"256\"/><Column id=\"치수측정\" type=\"STRING\" size=\"256\"/><Column id=\"신뢰성\" type=\"STRING\" size=\"256\"/><Column id=\"유해물질\" type=\"STRING\" size=\"256\"/><Column id=\"동박방향Up층\" type=\"STRING\" size=\"256\"/><Column id=\"등록일자\" type=\"STRING\" size=\"256\"/><Column id=\"무효화일자\" type=\"STRING\" size=\"256\"/><Column id=\"LOT관리대상\" type=\"STRING\" size=\"256\"/><Column id=\"동방방향Down층\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항1\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항2\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항3\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항4\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_platingSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemSpecDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_specComment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVENEWDATA\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGE1\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGE2\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGE3\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGE4\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGE5\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIALNOTE1\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIALNOTE2\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIALNOTE3\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIALNOTE4\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIALNOTE5\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTNUMAXIS1\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTNUMAXIS2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mvhList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ANNULARING\" type=\"STRING\" size=\"256\"/><Column id=\"ASPECTRATIO\" type=\"STRING\" size=\"256\"/><Column id=\"MVHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LASERSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"LANDSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CLFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CONFORMALSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMINGDEPTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEQUENCE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_platingSpecList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO1\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION1\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO2\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION2\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO3\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION3\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE3\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO4\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION4\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC4\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE4\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO5\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION5\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC5\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE5\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pnlSizeX", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_platingSpec_save", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"THICKNO\" type=\"STRING\" size=\"256\"/><Column id=\"THICKPOSITION\" type=\"STRING\" size=\"256\"/><Column id=\"THICKSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"THICKTHEORETICALVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"THICKEXPERIMENTALVALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemSpecDetail_save", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_specList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOBJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">PITCHAFTER3</Col><Col id=\"SEQUENCE\">1</Col><Col id=\"FROMOBJ\">PITCHAFTER3</Col></Row><Row><Col id=\"CODE\">PITCHBEFORE3</Col><Col id=\"SEQUENCE\">2</Col><Col id=\"FROMOBJ\">PITCHBEFORE3</Col></Row><Row><Col id=\"CODE\">ELONGATIONCHECK3</Col><Col id=\"SEQUENCE\">3</Col><Col id=\"TOOBJ\">ELONGATIONCHECK3</Col></Row><Row><Col id=\"CODE\">PITCHAFTER2</Col><Col id=\"SEQUENCE\">4</Col><Col id=\"FROMOBJ\">PITCHAFTER2</Col></Row><Row><Col id=\"CODE\">PITCHBEFORE2</Col><Col id=\"SEQUENCE\">5</Col><Col id=\"FROMOBJ\">PITCHBEFORE2</Col></Row><Row><Col id=\"CODE\">ELONGATIONCHECK2</Col><Col id=\"SEQUENCE\">6</Col><Col id=\"TOOBJ\">ELONGATIONCHECK2</Col></Row><Row><Col id=\"CODE\">ELONGATIONCHECK1</Col><Col id=\"SEQUENCE\">7</Col><Col id=\"TOOBJ\">ELONGATIONCHECK1</Col></Row><Row><Col id=\"CODE\">ASPECTRATIO</Col><Col id=\"SEQUENCE\">8</Col></Row><Row><Col id=\"CODE\">MVHMACHINGDEPTH</Col><Col id=\"SEQUENCE\">9</Col></Row><Row><Col id=\"CODE\">MVHLAND</Col><Col id=\"SEQUENCE\">10</Col></Row><Row><Col id=\"CODE\">CONFORMALSIZE</Col><Col id=\"SEQUENCE\">11</Col></Row><Row><Col id=\"CODE\">ANNULARING</Col><Col id=\"SEQUENCE\">12</Col></Row><Row><Col id=\"CODE\">APPLYMVH</Col><Col id=\"SEQUENCE\">13</Col></Row><Row><Col id=\"CODE\">LASERSIZE</Col><Col id=\"SEQUENCE\">14</Col></Row><Row><Col id=\"CODE\">MVHKIND</Col><Col id=\"SEQUENCE\">15</Col></Row><Row><Col id=\"CODE\">FLATNESSVALUEUM</Col><Col id=\"SEQUENCE\">16</Col></Row><Row><Col id=\"CODE\">TABHOLE</Col><Col id=\"SEQUENCE\">17</Col></Row><Row><Col id=\"CODE\">LAND</Col><Col id=\"SEQUENCE\">18</Col></Row><Row><Col id=\"CODE\">PTH</Col><Col id=\"SEQUENCE\">19</Col><Col id=\"FROMOBJ\">FROMPTH</Col><Col id=\"TOOBJ\">TOPTH</Col></Row><Row><Col id=\"CODE\">IVH</Col><Col id=\"SEQUENCE\">20</Col><Col id=\"FROMOBJ\">FROMIVH</Col><Col id=\"TOOBJ\">TOIVH</Col></Row><Row><Col id=\"CODE\">MVH</Col><Col id=\"SEQUENCE\">21</Col><Col id=\"FROMOBJ\">FROMMVH</Col><Col id=\"TOOBJ\">TOMVH</Col></Row><Row><Col id=\"CODE\">FLATNESSAREA</Col><Col id=\"SEQUENCE\">22</Col></Row><Row><Col id=\"CODE\">IMPEDANCELAYER</Col><Col id=\"SEQUENCE\">23</Col></Row><Row><Col id=\"CODE\">IMPEDANCETYPE2</Col><Col id=\"SEQUENCE\">24</Col></Row><Row><Col id=\"CODE\">IMPEDANCESPEC2</Col><Col id=\"SEQUENCE\">25</Col></Row><Row><Col id=\"CODE\">IMPEDANCECHECK</Col><Col id=\"SEQUENCE\">26</Col></Row><Row><Col id=\"CODE\">INNERLAYERCIRCUIT</Col><Col id=\"SEQUENCE\">27</Col><Col id=\"FROMOBJ\">FROMINNERLAYERCIRCUIT</Col><Col id=\"TOOBJ\">TOINNERLAYERCIRCUIT</Col></Row><Row><Col id=\"CODE\">OUTERLAYERCIRCUIT</Col><Col id=\"SEQUENCE\">28</Col><Col id=\"FROMOBJ\">FROMOUTERLAYERCIRCUIT</Col><Col id=\"TOOBJ\">TOOUTERLAYERCIRCUIT</Col></Row><Row><Col id=\"CODE\">OLBCIRCUIT</Col><Col id=\"SEQUENCE\">29</Col><Col id=\"FROMOBJ\">FROMOLBCIRCUIT</Col><Col id=\"TOOBJ\">TOOLBCIRCUIT</Col></Row><Row><Col id=\"CODE\">MINSIZEINPUT</Col><Col id=\"SEQUENCE\">30</Col></Row><Row><Col id=\"CODE\">INTERVAL</Col><Col id=\"SEQUENCE\">31</Col></Row><Row><Col id=\"CODE\">BREADTH</Col><Col id=\"SEQUENCE\">32</Col></Row><Row><Col id=\"CODE\">MINSIZEINPUT</Col><Col id=\"SEQUENCE\">33</Col></Row><Row><Col id=\"CODE\">ELONGATION-3</Col><Col id=\"SEQUENCE\">34</Col><Col id=\"FROMOBJ\">ELONGATION_3</Col></Row><Row><Col id=\"CODE\">ELONGATION-2</Col><Col id=\"SEQUENCE\">35</Col><Col id=\"FROMOBJ\">ELONGATION_2</Col></Row><Row><Col id=\"CODE\">ELONGATION-1</Col><Col id=\"SEQUENCE\">36</Col><Col id=\"FROMOBJ\">ELONGATION_1</Col></Row><Row><Col id=\"CODE\">PITCHBEFORE1</Col><Col id=\"SEQUENCE\">37</Col><Col id=\"FROMOBJ\">PITCHBEFORE1</Col></Row><Row><Col id=\"CODE\">PITCHAFTER1</Col><Col id=\"SEQUENCE\">38</Col><Col id=\"FROMOBJ\">PITCHAFTER1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_materialPlatingList", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE3\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_materialPlating", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE1\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME1\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM1\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO1\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL1\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL1\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME1_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME1_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME1_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL1_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL1_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL1_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL1_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL1_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL1_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL1_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL1_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL1_3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE2\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME2\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM2\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO2\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL2\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME2_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME2_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME2_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL2_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL2_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL2_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL2_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL2_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL2_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL2_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL2_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL2_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL2_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL2_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL2_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL2_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL2_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL2_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE3\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME3\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM3\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO3\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL3\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL3\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION3\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID3\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME3_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME3_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME3_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL3_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL3_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL3_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL3_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL3_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL3_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL3_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL3_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL3_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL3_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL3_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL3_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL3_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL3_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL3_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE4\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME4\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM4\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO4\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL4\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL4\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION4\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID4\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME4_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME4_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME4_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL4_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL4_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL4_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL4_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL4_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL4_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL4_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL4_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL4_3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE5\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME5\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM5\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO5\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL5\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL5\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION5\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID5\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME5_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME5_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME5_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL5_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL5_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL5_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL5_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL5_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL5_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL5_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL5_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL5_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL5_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL5_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL5_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL5_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL5_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL5_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE6\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME6\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM6\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO6\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL6\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL6\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION6\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID6\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME6_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME6_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME6_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL6_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL6_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL6_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL6_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL6_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL6_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL6_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL6_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL6_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL6_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL6_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL6_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL6_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL6_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL6_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE7\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME7\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM7\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO7\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL7\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL7\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION7\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID7\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME7_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME7_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME7_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL7_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL7_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL7_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL7_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL7_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL7_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL7_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL7_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL7_3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE8\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME8\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM8\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO8\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL8\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL8\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION8\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID8\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME8_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME8_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME8_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL8_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL8_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL8_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL8_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL8_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL8_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL8_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL8_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL8_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL8_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL8_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL8_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL8_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL8_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL8_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE9\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME9\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM9\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO9\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL9\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL9\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION9\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID9\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME9_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME9_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME9_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL9_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL9_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL9_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL9_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL9_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL9_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL9_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL9_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL9_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL9_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL9_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL9_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL9_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL9_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL9_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE10\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME10\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM10\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO10\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL10\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL10\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION10\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID10\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME10_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME10_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME10_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL10_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL10_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL10_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL10_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL10_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL10_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL10_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL10_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL10_3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE11\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME11\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM11\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO11\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL11\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL11\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION11\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID11\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME11_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME11_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME11_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL11_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL11_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL11_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL11_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL11_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL11_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL11_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL11_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL11_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL11_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL11_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL11_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL11_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL11_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL11_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE12\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME12\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM12\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO12\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL12\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL12\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION12\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID12\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME12_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME12_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME12_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL12_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL12_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL12_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL12_4\" type=\"STRING\" size=\"256\"/><Column id=\"LSL12_5\" type=\"STRING\" size=\"256\"/><Column id=\"SL12_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL12_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL12_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL12_4\" type=\"STRING\" size=\"256\"/><Column id=\"SL12_5\" type=\"STRING\" size=\"256\"/><Column id=\"USL12_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL12_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL12_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL12_4\" type=\"STRING\" size=\"256\"/><Column id=\"USL12_5\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE13\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME13\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM13\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO13\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL13\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL13\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION13\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID13\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME13_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME13_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME13_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL13_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL13_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL13_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL13_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL13_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL13_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL13_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL13_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL13_3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE14\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME14\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM14\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO14\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL14\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL14\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION14\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID14\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME14_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME14_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME14_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL14_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL14_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL14_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL14_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL14_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL14_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL14_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL14_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL14_3\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE15\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME15\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM15\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO15\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL15\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL15\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION15\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID15\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME15_1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME15_2\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME15_3\" type=\"STRING\" size=\"256\"/><Column id=\"LSL15_1\" type=\"STRING\" size=\"256\"/><Column id=\"LSL15_2\" type=\"STRING\" size=\"256\"/><Column id=\"LSL15_3\" type=\"STRING\" size=\"256\"/><Column id=\"SL15_1\" type=\"STRING\" size=\"256\"/><Column id=\"SL15_2\" type=\"STRING\" size=\"256\"/><Column id=\"SL15_3\" type=\"STRING\" size=\"256\"/><Column id=\"USL15_1\" type=\"STRING\" size=\"256\"/><Column id=\"USL15_2\" type=\"STRING\" size=\"256\"/><Column id=\"USL15_3\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID1\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID2\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID3\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID4\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID5\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID6\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID7\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID8\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID9\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID10\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID11\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID12\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID13\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID14\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID15\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_materialPlatingList_save", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"FROMORIGINAL\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILFROM\" type=\"STRING\" size=\"256\"/><Column id=\"SPECDETAILTO\" type=\"STRING\" size=\"256\"/><Column id=\"TOORIGINAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_specList2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMOBJ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOBJ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">PLATINGSPEC1</Col><Col id=\"SEQUENCE\">1</Col><Col id=\"FROMOBJ\">PITCHAFTER3</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC2</Col><Col id=\"SEQUENCE\">2</Col><Col id=\"FROMOBJ\">PITCHBEFORE3</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC3</Col><Col id=\"SEQUENCE\">3</Col><Col id=\"TOOBJ\">ELONGATIONCHECK3</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC4</Col><Col id=\"SEQUENCE\">4</Col><Col id=\"FROMOBJ\">PITCHAFTER2</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC5</Col><Col id=\"SEQUENCE\">5</Col><Col id=\"FROMOBJ\">PITCHBEFORE2</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC6</Col><Col id=\"SEQUENCE\">6</Col><Col id=\"TOOBJ\">ELONGATIONCHECK2</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC7</Col><Col id=\"SEQUENCE\">7</Col><Col id=\"TOOBJ\">ELONGATIONCHECK1</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC8</Col><Col id=\"SEQUENCE\">8</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC9</Col><Col id=\"SEQUENCE\">9</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC10</Col><Col id=\"SEQUENCE\">10</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC11</Col><Col id=\"SEQUENCE\">11</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC12</Col><Col id=\"SEQUENCE\">12</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC13</Col><Col id=\"SEQUENCE\">13</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC14</Col><Col id=\"SEQUENCE\">14</Col></Row><Row><Col id=\"CODE\">PLATINGSPEC15</Col><Col id=\"SEQUENCE\">15</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolTypeMW", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolTypeBJ", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolTypeMWDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_toolTypeBJDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("품목사양정보1");
            obj.set_tooltiptext("PRODUCTSPECINFO1");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_productInfo","0","34",null,"73","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_productInfo");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"품목코드\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ITEMID\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:ITEMID\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"2\" text=\"품목명\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ITEMNAME\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:ITEMNAME\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"4\" text=\"고객사\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"COMPANYCLIENT\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"5\" text=\"bind:CUSTOMER\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"6\" text=\"제품Type\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PRODUCTTYPE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"7\" text=\"bind:PRODUCTTYPE\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"8\" text=\"판매범주\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"SALEORDERCATEGORY\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"9\" text=\"bind:SALEORDERCATEGORY\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"10\" text=\"사양담당\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"SPECPERSON\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"11\" text=\"bind:SPECPERSONNAME\" edittype=\"none\" displaytype=\"text\" expandsize=\"24\" expandshow=\"hide\" cssclass=\"cell_end\" textAlign=\"left\"/><Cell row=\"1\" text=\"Rev.\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"1\" text=\"bind:ITEMVERSION\" textAlign=\"left\" displaytype=\"text\"/><Cell row=\"1\" col=\"2\" text=\"제품등급\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PRODUCTRATING\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"3\" text=\"bind:PRODUCTRATING\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,ProductLevel,,Y,N\"/><Cell row=\"1\" col=\"4\" text=\"고객 Rev\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"CUSTOMERREV\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"5\" text=\"bind:CUSTOMERITEMVERSION\" displaytype=\"text\" edittype=\"none\"/><Cell row=\"1\" col=\"6\" text=\"END USER\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ENDUSER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"7\" text=\"bind:ENDUSER\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,EndUser,null,Y,Y\" combotype=\"caseifilterlike\"/><Cell row=\"1\" col=\"8\" text=\"프로젝트명\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PROJECTNAME\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"9\" text=\"bind:PROJECTNAME\" displaytype=\"text\" edittype=\"text\"/><Cell row=\"1\" col=\"10\" text=\"CAM담당자\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"CAMOWNER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"11\" text=\"bind:CAMOWNERNAME\" edittype=\"none\" displaytype=\"text\" expandsize=\"24\" expandshow=\"hide\" cssclass=\"cell_end\" textAlign=\"left\"/><Cell row=\"2\" text=\"작업구분\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"WORKTYPE\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"1\" text=\"bind:JOBTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,JobType,,Y,N\"/><Cell row=\"2\" col=\"2\" text=\"생산구분\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PRODUCTIONTYPE\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"3\" text=\"bind:PRODUCTIONTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell row=\"2\" col=\"4\" text=\"투입유형\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"INPUTTYPE\" font=\"normal 900 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"5\" text=\"bind:JOBINPUTTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,JOBINPUTTYPE,,Y,N\" edittype=\"none\"/><Cell row=\"2\" col=\"6\" text=\"납기일자\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"DELIVERYDATE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"7\" text=\"bind:DELIVERYDATE\" displaytype=\"text\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" cssclass=\"point\"/><Cell row=\"2\" col=\"8\" text=\"출고형태\" cssclass=\"cell_point\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"OUTBOUNDFORMAT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell row=\"2\" col=\"9\" text=\"bind:OUTBOUNDFORMAT\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,OUTBOUNDFORMAT,null,Y,Y\" cssclass=\"point\"/><Cell row=\"2\" col=\"10\" text=\"영업 담당자\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"SALESOWNER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"11\" text=\"bind:SALESOWNERNAME\" edittype=\"none\" displaytype=\"text\" expandsize=\"24\" expandshow=\"hide\" cssclass=\"cell_end\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","190","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("제품 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("PRODUCTINFORMATION");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","107","280","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("제품 사양");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("PRODUCTSPEC");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_productSpec","0","141",null,"73","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_productInfo");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"25\"/><Column size=\"60\"/><Column size=\"25\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"25\"/><Column size=\"60\"/><Column size=\"25\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"25\"/><Column size=\"60\"/><Column size=\"25\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"PCS SIZE\" cssclass=\"cell_point\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PCSSIZE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell col=\"1\" text=\"X :\" cssclass=\"cell_head\" background=\"white\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" text=\"bind:PCSSIZEXAXIS\" editinputtype=\"number,sign,dot\" maskeditmaskchar=\"X :\" textAlign=\"right\" cssclass=\"point\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"Y :\" background=\"white\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell col=\"4\" text=\"bind:PCSSIZEYAXIS\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editinputtype=\"number,sign,dot\" cssclass=\"point\"/><Cell col=\"5\" text=\"PNL SIZE\" cssclass=\"cell_point\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PNLSIZE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"X :\" background=\"white\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell col=\"7\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:PNLSIZEXAXIS\" editinputtype=\"number\" textAlign=\"right\" combodataset=\"ds_pnlSizeX\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"point\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"Y :\" background=\"white\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell col=\"9\" text=\"bind:PNLSIZEYAXIS\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editinputtype=\"number,sign,dot\" cssclass=\"point\"/><Cell col=\"10\" text=\"ARRY SIZE\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ARYSIZE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"11\" cssclass=\"cell_head\" background=\"white\" text=\"X :\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"text\" text=\"bind:ARYSIZEXAXIS\" editinputtype=\"number,sign,dot\" textAlign=\"right\"/><Cell col=\"13\" cssclass=\"cell_head\" background=\"white\" text=\"Y :\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell col=\"14\" text=\"bind:ARYSIZEYAXIS\" textAlign=\"right\" displaytype=\"text\" edittype=\"text\" editinputtype=\"number,sign,dot\"/><Cell col=\"15\" text=\"PCS/PNL\" cssclass=\"cell_point\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PCSPNL\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell col=\"16\" text=\"bind:PCSPNL\" textAlign=\"right\" edittype=\"normal\" displaytype=\"text\" expandsize=\"24\" expandshow=\"hide\" expandimage=\"url(&apos;theme://images/grd_expand_spin.png&apos;)\" maskeditlimitbymask=\"integer\" editinputtype=\"number,sign\" cssclass=\"point\"/><Cell col=\"17\" text=\"PNL/mm\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PNLMM\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"18\" text=\"bind:PNLMM\" textAlign=\"right\" displaytype=\"text\" edittype=\"none\" editinputtype=\"number\"/><Cell col=\"19\" text=\"PCS/mm\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PCSMM\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"20\" text=\"bind:PCSMM\" edittype=\"none\" displaytype=\"text\" cssclass=\"cell_end\" textAlign=\"right\"/><Cell row=\"1\" text=\"투입 SIZE X축\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"06726A1B395A4351B3584B759CD37F3E\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"1\" colspan=\"4\" edittype=\"combo\" displaytype=\"combotext\" text=\"bind:INPUTSIZEXAXIS\" combocodecol=\"C,InputSize,null,Y,Y\" textAlign=\"right\"/><Cell row=\"1\" col=\"5\" text=\"ARY대각선길이\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ARRAYDIAGONALLENGTH\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"6\" colspan=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:ARRAYDIAGONALLENGTH\" editinputtype=\"number,sign\" textAlign=\"right\"/><Cell row=\"1\" col=\"10\" text=\"PCS/ARY\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"PCSARY\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"11\" colspan=\"4\" text=\"bind:PCSARY\" displaytype=\"text\" edittype=\"normal\" editinputtype=\"number,sign\" textAlign=\"right\"/><Cell row=\"1\" col=\"15\" text=\"X-OUT(PCS)\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"X-OUTPCS\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"16\" text=\"bind:XOUT\" displaytype=\"text\" edittype=\"text\" editinputtype=\"number,sign\" textAlign=\"right\"/><Cell row=\"1\" col=\"17\" text=\"X-OUT(%)\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"X-OUTPERCENT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"18\" text=\"bind:XOUTPERCENT\" displaytype=\"text\" edittype=\"none\" expandsize=\"24\" expandshow=\"show\" expandchar=\"%\" editinputtype=\"number,sign\" textAlign=\"right\"/><Cell row=\"1\" col=\"19\" text=\"Roll/Sheet\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"RTRSHT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"20\" text=\"bind:RTRSHT\" edittype=\"none\" displaytype=\"text\" cssclass=\"cell_end\"/><Cell row=\"2\" text=\"주차관리\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ISWEEKMNG\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"1\" colspan=\"4\" edittype=\"normal\" displaytype=\"text\" text=\"bind:ISWEEKMNG\"/><Cell row=\"2\" col=\"5\" text=\"OXIDE\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"OXIDE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"6\" colspan=\"4\" edittype=\"combo\" displaytype=\"combotext\" text=\"bind:OXIDE\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell row=\"2\" col=\"10\" text=\"분리부\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"SEPARATINGPORTION\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"11\" colspan=\"4\" edittype=\"combo\" displaytype=\"combotext\" text=\"bind:SEPARATINGPORTION\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell row=\"2\" col=\"15\" text=\"ASSY\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ASSY\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"16\" text=\"bind:ASSY\" displaytype=\"combotext\" edittype=\"combo\" calendardateformat=\"yyyy-MM-dd\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell row=\"2\" col=\"17\" text=\"UL MARK\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"ULMARK\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"18\" text=\"bind:ULMARK\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\"/><Cell row=\"2\" col=\"19\" text=\"층수\" cssclass=\"cell_head\" wordWrap=\"char\" textAlign=\"right\" padding=\"0px 10px 0px 0px\" tooltiptext=\"LAYER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"20\" text=\"bind:LAYER\" edittype=\"combo\" displaytype=\"combotext\" cssclass=\"cell_end\" combocodecol=\"C,Layer,null,Y,Y\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00_00","0","214","380","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("회로 및 드릴 사양");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("CIRCUITANDDRILLSPEC");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_circuitSpec1","0","248",null,"97","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_circuitSpec");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"MIN SIZE 입력\" tooltiptext=\"MINSIZEINPUT\" cssclass=\"cell_head\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"폭\" tooltiptext=\"BREADTH\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"간격\" tooltiptext=\"INTERVAL\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"MIN SIZE 입력\" tooltiptext=\"MINSIZEINPUT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"LAND\" tooltiptext=\"LAND\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"5\" cssclass=\"cell_head\" text=\"HOLE\" tooltiptext=\"TABHOLE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"임피던스 유/무\" tooltiptext=\"IMPEDANCECHECK\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"7\" cssclass=\"cell_head\" text=\"임피던스 SPEC\" tooltiptext=\"IMPEDANCESPEC2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"임피던스 구분\" tooltiptext=\"IMPEDANCETYPE2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"9\" cssclass=\"cell_head\" text=\"임피던스 적용층\" tooltiptext=\"IMPEDANCELAYER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"10\" cssclass=\"cell_head\" text=\"평탄도 부위\" tooltiptext=\"FLATNESSAREA\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"11\" cssclass=\"cell_head\" text=\"평탄도 값(um)\" tooltiptext=\"FLATNESSVALUEUM\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"내층회로(um)\" tooltiptext=\"INNERLAYERCIRCUIT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"1\" text=\"bind:FROMINNERLAYERCIRCUIT\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"2\" text=\"bind:TOINNERLAYERCIRCUIT\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" cssclass=\"cell_head\" text=\"MVH(mm)\" tooltiptext=\"MVH\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"4\" text=\"bind:FROMMVH\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"bind:TOMVH\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" rowspan=\"3\" displaytype=\"combotext\" edittype=\"combo\" padding=\"24px 3px\" text=\"bind:IMPEDANCE\" suppress=\"1\" background=\"#ffffff\" combocodecol=\"C,YesNo,null,Y,Y\" textAlign=\"center\"/><Cell row=\"1\" col=\"7\" text=\"bind:IMPEDANCESPEC1\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"8\" text=\"bind:IMPEDANCETYPE1\" displaytype=\"combotext\" edittype=\"combo\" background=\"#ffffff\" combocodecol=\"C,ImpedanceType,null,Y,Y\" textAlign=\"center\"/><Cell row=\"1\" col=\"9\" text=\"bind:IMPEDANCEAPPLYLAYER1\" displaytype=\"text\" edittype=\"normal\" background=\"#ffffff\" combotype=\"caseifilterlike\" textAlign=\"center\"/><Cell row=\"1\" col=\"10\" text=\"bind:FLATNESS11\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"1\" col=\"11\" text=\"bind:FLATNESS21\" displaytype=\"text\" edittype=\"text\" background=\"#ffffff\" textAlign=\"center\"/><Cell row=\"2\" text=\"외층회로(um)\" cssclass=\"cell_head\" tooltiptext=\"OUTERLAYERCIRCUIT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FROMOUTERLAYERCIRCUIT\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:TOOUTERLAYERCIRCUIT\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" cssclass=\"cell_head\" text=\"IVH(mm)\" tooltiptext=\"IVH\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"4\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FROMIVH\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"5\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:TOIVH\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"7\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:IMPEDANCESPEC2\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"8\" displaytype=\"combotext\" background=\"#ffffff\" text=\"bind:IMPEDANCETYPE2\" combocodecol=\"C,ImpedanceType,null,Y,Y\" textAlign=\"center\"/><Cell row=\"2\" col=\"9\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:IMPEDANCEAPPLYLAYER2\" combotype=\"caseifilterlike\" edittype=\"normal\" textAlign=\"center\"/><Cell row=\"2\" col=\"10\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FLATNESS12\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"11\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FLATNESS22\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" text=\"OLB회로(um)\" cssclass=\"cell_head\" tooltiptext=\"OLBCIRCUIT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"1\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FROMOLBCIRCUIT\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"2\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:TOOLBCIRCUIT\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\" cssclass=\"cell_head\" text=\"PTH(mm)\" tooltiptext=\"PTH\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"4\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FROMPTH\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"5\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:TOPTH\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"7\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:IMPEDANCESPEC3\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"8\" displaytype=\"combotext\" background=\"#ffffff\" text=\"bind:IMPEDANCETYPE3\" combocodecol=\"C,ImpedanceType,null,Y,Y\" textAlign=\"center\"/><Cell row=\"3\" col=\"9\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:IMPEDANCEAPPLYLAYER3\" combotype=\"caseifilterlike\" edittype=\"normal\" textAlign=\"center\"/><Cell row=\"3\" col=\"10\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FLATNESS11UM\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"11\" displaytype=\"text\" background=\"#ffffff\" text=\"bind:FLATNESS21UM\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_circuitSpec3","65.3%","344",null,"147","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_circuitSpec3");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_border("1px solid #e8e8e8");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"연신율 유/무-1\" cssclass=\"cell_head\" tooltiptext=\"ELONGATIONCHECK1\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" text=\"연신율-1\" cssclass=\"cell_head\" tooltiptext=\"ELONGATION-1\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"2\" text=\"적용 전 PITCH-1\" cssclass=\"cell_head\" tooltiptext=\"PITCHBEFORE1\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" text=\"적용 후 PITCH-1\" cssclass=\"cell_head,cell_end\" tooltiptext=\"PITCHAFTER1\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" rowspan=\"2\" displaytype=\"combotext\" edittype=\"combo\" padding=\"13px 3px\" combocodecol=\"C,YesNo,null,Y,Y\" text=\"bind:ELONGATIONCHECK1\"/><Cell row=\"1\" col=\"1\" expandshow=\"show\" expandsize=\"24\" expandchar=\"%\" displaytype=\"text\" edittype=\"expr:ELONGATIONCHECK1==&quot;Y&quot; ? &quot;mask&quot;:&quot;none&quot;\" text=\"bind:ELONGATION_1\" cssclass=\"expr:ELONGATIONCHECK1==&quot;Y&quot; ? &quot;point&quot;:&quot;&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"2\" expandshow=\"show\" expandsize=\"24\" expandchar=\"㎜\" displaytype=\"text\" edittype=\"expr:ELONGATIONCHECK1==&quot;Y&quot; ? &quot;mask&quot;:&quot;none&quot;\" text=\"bind:PITCHBEFORE1\" cssclass=\"expr:ELONGATIONCHECK1==&quot;Y&quot; ? &quot;point&quot;:&quot;&quot;\" textAlign=\"right\"/><Cell row=\"1\" col=\"3\" rowspan=\"2\" expandshow=\"show\" expandsize=\"24\" expandchar=\"㎜\" cssclass=\"cell_end\" text=\"bind:PITCHAFTER1\" textAlign=\"right\"/><Cell row=\"2\" col=\"1\" expandsize=\"24\" expandshow=\"show\" expandchar=\"㎛\" text=\"bind:ELONGATION1_1\" textAlign=\"right\"/><Cell row=\"2\" col=\"2\" text=\"bind:ELONGATION1_2\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#9900.90\"/><Cell row=\"3\" text=\"연신율 유/무-2\" cssclass=\"cell_head\" tooltiptext=\"ELONGATIONCHECK2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"1\" text=\"연신율-2\" cssclass=\"cell_head\" tooltiptext=\"ELONGATION-2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"2\" text=\"적용 전 PITCH-2\" cssclass=\"cell_head\" tooltiptext=\"PITCHBEFORE2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"3\" text=\"적용 후 PITCH-2\" cssclass=\"cell_head,cell_end\" tooltiptext=\"PITCHAFTER2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"4\" rowspan=\"2\" displaytype=\"combotext\" edittype=\"combo\" padding=\"13px 3px\" combocodecol=\"C,YesNo,null,Y,Y\" text=\"bind:ELONGATIONCHECK2\"/><Cell row=\"4\" col=\"1\" expandshow=\"show\" expandsize=\"24\" expandchar=\"%\" displaytype=\"text\" edittype=\"expr:ELONGATIONCHECK2==&quot;Y&quot; ? &quot;mask&quot;:&quot;none&quot;\" text=\"bind:ELONGATION_2\" cssclass=\"expr:ELONGATIONCHECK2==&quot;Y&quot; ? &quot;point&quot;:&quot;&quot;\" textAlign=\"right\"/><Cell row=\"4\" col=\"2\" expandshow=\"show\" expandsize=\"24\" expandchar=\"㎜\" displaytype=\"text\" edittype=\"expr:ELONGATIONCHECK2==&quot;Y&quot; ? &quot;mask&quot;:&quot;none&quot;\" text=\"bind:PITCHBEFORE2\" cssclass=\"expr:ELONGATIONCHECK2==&quot;Y&quot; ? &quot;point&quot;:&quot;&quot;\" textAlign=\"right\"/><Cell row=\"4\" col=\"3\" rowspan=\"2\" expandshow=\"show\" expandsize=\"24\" expandchar=\"㎜\" cssclass=\"cell_end\" text=\"bind:PITCHAFTER2\" textAlign=\"right\"/><Cell row=\"5\" col=\"1\" expandsize=\"24\" expandshow=\"show\" expandchar=\"㎛\" text=\"bind:ELONGATION2_1\" textAlign=\"right\"/><Cell row=\"5\" col=\"2\" text=\"bind:ELONGATION2_2\" textAlign=\"right\" maskeditformat=\"#9900.90\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_circuitSpec2","0","344",null,"147","grd_circuitSpec3:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_mvh");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_border("1px solid #e8e8e8");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MVH 종류\" wordWrap=\"char\" cssclass=\"cell_head\" tooltiptext=\"MVHKIND\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"MVH VIA(φ)\" wordWrap=\"char\" tooltiptext=\"MVHVIA\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"MVH LAND(φ)\" wordWrap=\"char\" tooltiptext=\"MVHLAND\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" cssclass=\"cell_head\" text=\"MVH부위 C/L적용\" wordWrap=\"char\" tooltiptext=\"APPLYMVH\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"A/R(0.075MM↑)\" wordWrap=\"char\" tooltiptext=\"ANNULARING\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"5\" cssclass=\"cell_head\" text=\"Conformal Size(φ)\" wordWrap=\"char\" tooltiptext=\"CONFORMALSIZE\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"mvh 가공 깊이(㎛)→외층동박포함\" wordWrap=\"char\" tooltiptext=\"MVHMACHINGDEPTH\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"7\" cssclass=\"cell_head\" text=\"Aspect Ratio 80%↓\" wordWrap=\"char\" tooltiptext=\"ASPECTRATIO\" font=\"normal bold 11px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:MVHTYPE\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:LASERSIZE\" displaytype=\"text\" edittype=\"text\" textAlign=\"right\" editinputtype=\"number,dot,sign\"/><Cell col=\"2\" text=\"bind:LANDSIZE\" displaytype=\"text\" edittype=\"text\" textAlign=\"right\" editinputtype=\"number,dot,sign\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:CLFLAG\" combocodecol=\"C,YesNo,null,Y,Y\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ANNULARING\" displaytype=\"text\" edittype=\"none\" textAlign=\"right\" editinputtype=\"number,sign,dot\" cssclass=\"expr:ANNULARING != &apos;&apos; &amp;&amp; nexacro.toNumber(ANNULARING)&lt;=0.075 ? &quot;cell_bg_red&quot;:&quot;cell_head&quot;\"/><Cell col=\"5\" text=\"bind:CONFORMALSIZE\" displaytype=\"text\" edittype=\"text\" textAlign=\"right\" editinputtype=\"number,sign,dot\"/><Cell col=\"6\" text=\"bind:FORMINGDEPTH\" displaytype=\"text\" edittype=\"text\" textAlign=\"right\" editinputtype=\"number,sign,dot\"/><Cell col=\"7\" cssclass=\"expr:ASPECTRATIO != &apos;&apos; &amp;&amp; nexacro.toNumber(ASPECTRATIO)&gt;=80 ? &quot;cell_bg_red,cell_end&quot;:&quot;cell_head,cell_end&quot;\" text=\"bind:ASPECTRATIO\" displaytype=\"text\" edittype=\"none\" textAlign=\"right\" editinputtype=\"number,sign,dot\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_etcInfo01","57.27%","489",null,"97","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_productInfo");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_border("1px solid #e8e8e8");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"102\"/><Column size=\"156\"/><Column size=\"121\"/><Column size=\"157\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"치수측정\" tooltiptext=\"MEASUREMENT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"mask\" expandsize=\"30\" expandshow=\"show\" expandchar=\"PCS\" text=\"bind:MEASUREMENT\" textAlign=\"right\"/><Cell col=\"2\" text=\"등록일자\" cssclass=\"cell_head\" tooltiptext=\"REGISTRATIONDATE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" cssclass=\"cell_end\" text=\"bind:REGISTRATIONDATE\" textAlign=\"center\"/><Cell row=\"1\" text=\"신뢰성\" cssclass=\"cell_head\" tooltiptext=\"RELIABILITY\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" edittype=\"mask\" expandsize=\"30\" expandshow=\"show\" expandchar=\"PCS\" text=\"bind:RELIABILITY\" textAlign=\"right\"/><Cell row=\"1\" col=\"2\" text=\"무효화일자\" cssclass=\"cell_head\" tooltiptext=\"INVALIDDATE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"3\" cssclass=\"cell_end\" text=\"bind:INVALIDDATE\" displaytype=\"text\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\"/><Cell row=\"2\" text=\"유해물질\" cssclass=\"cell_head\" tooltiptext=\"HAZARDOUSSUBSTANCES\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"1\" displaytype=\"text\" edittype=\"mask\" expandsize=\"30\" expandshow=\"show\" expandchar=\"PCS\" text=\"bind:HAZARDOUSSUBSTANCES\" textAlign=\"right\"/><Cell row=\"2\" col=\"2\" text=\"제조 Application\" cssclass=\"cell_head\" tooltiptext=\"PRODUCEAPPLICATION\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"3\" cssclass=\"cell_end\" text=\"bind:MFG_CATEGORY_NAME\" displaytype=\"normal\" edittype=\"none\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" textAlign=\"center\"/><Cell row=\"3\" text=\"동박방향(↑)층\" cssclass=\"cell_head\" tooltiptext=\"COPPERFOILUPLAYER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"1\" text=\"bind:COPPERFOILUPLAYER\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,CopperLayerUp,null,Y,Y\" combotype=\"caseifilterlike\" textAlign=\"center\"/><Cell row=\"3\" col=\"2\" text=\"동박방향(↓)층\" cssclass=\"cell_head\" tooltiptext=\"COPPERFOILDOWNLAYER\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"3\" cssclass=\"cell_end\" text=\"bind:COPPERFOILDOWNLAYER\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,CopperLayerDown,null,Y,Y\" combotype=\"caseifilterlike\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_etcInfo","0","489",null,"97","grd_etcInfo01:-2",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_platingSpecList");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_border("1px solid #e8e8e8");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"4\" text=\"두께사양\" cssclass=\"cell_headMaster\" tooltiptext=\"THICKNESSSPEC\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" cssclass=\"cell_head\" text=\"부위\" tooltiptext=\"REGION\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:THICKPOSITION1\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:THICKPOSITION2\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:THICKPOSITION3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:THICKPOSITION4\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:THICKPOSITION5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" cssclass=\"cell_head\" text=\"SPEC\" tooltiptext=\"SPEC2\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"2\" text=\"bind:THICKSPEC1\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" text=\"bind:THICKSPEC2\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" text=\"bind:THICKSPEC3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" text=\"bind:THICKSPEC4\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"1\" col=\"6\" text=\"bind:THICKSPEC5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"1\" cssclass=\"cell_head\" text=\"이론치\" tooltiptext=\"THEORETICALFIGURE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"2\" col=\"2\" text=\"bind:THICKTHEORETICALVALUE1\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" text=\"bind:THICKTHEORETICALVALUE2\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"4\" text=\"bind:THICKTHEORETICALVALUE3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"5\" text=\"bind:THICKTHEORETICALVALUE4\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"2\" col=\"6\" text=\"bind:THICKTHEORETICALVALUE5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"1\" cssclass=\"cell_head\" text=\"실측치\" tooltiptext=\"ACTUALMEASUREMENT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"3\" col=\"2\" text=\"bind:THICKEXPERIMENTALVALUE1\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"3\" text=\"bind:THICKEXPERIMENTALVALUE2\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"4\" text=\"bind:THICKEXPERIMENTALVALUE3\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"5\" text=\"bind:THICKEXPERIMENTALVALUE4\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/><Cell row=\"3\" col=\"6\" text=\"bind:THICKEXPERIMENTALVALUE5\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_specComment","0","585",null,"121","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_specComment");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_border("1px solid #e8e8e8");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"103\"/><Column size=\"25\"/><Column size=\"78\"/><Column size=\"25\"/><Column size=\"78\"/><Column size=\"103\"/><Column size=\"102\"/><Column size=\"190\"/><Column size=\"121\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell rowspan=\"5\" text=\"사양변경내용\" cssclass=\"cell_headMaster\" tooltiptext=\"SPECCHANGE\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" cssclass=\"cell_point\" text=\"신규 Data 접수\" tooltiptext=\"RECEIVENEWDATA\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell col=\"2\" text=\"bind:RECEIVENEWDATA\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\" cssclass=\"point\"/><Cell col=\"3\" text=\"투입수축\" cssclass=\"cell_head\" tooltiptext=\"INPUTNUMAXIS\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" background=\"#f7f7f7\"/><Cell col=\"4\" cssclass=\"cell_head\" background=\"white\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" text=\"X :\"/><Cell col=\"5\" text=\"bind:INPUTNUMAXIS1\" displaytype=\"text\" edittype=\"text\" textAlign=\"right\" cssclass=\"point\"/><Cell col=\"6\" cssclass=\"cell_head\" background=\"white\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\" text=\"Y :\"/><Cell col=\"7\" cssclass=\"point\" text=\"bind:INPUTNUMAXIS2\" displaytype=\"text\" edittype=\"text\" textAlign=\"right\"/><Cell col=\"8\"/><Cell col=\"9\" rowspan=\"5\" text=\"특이사항\" cssclass=\"cell_head\" tooltiptext=\"COMMENT\" font=\"normal bold 11px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"10\" colspan=\"3\" text=\"bind:SPECIALNOTE1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" colspan=\"8\" text=\"bind:SPECCHANGE1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"1\" col=\"10\" colspan=\"3\" text=\"bind:SPECIALNOTE2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"2\" col=\"1\" colspan=\"8\" text=\"bind:SPECCHANGE2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"2\" col=\"10\" colspan=\"3\" text=\"bind:SPECIALNOTE3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"3\" col=\"1\" colspan=\"8\" text=\"bind:SPECCHANGE3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"3\" col=\"10\" colspan=\"3\" text=\"bind:SPECIALNOTE4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"4\" col=\"1\" colspan=\"8\" text=\"bind:SPECCHANGE4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell row=\"4\" col=\"10\" colspan=\"3\" text=\"bind:SPECIALNOTE5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("품목사양정보2");
            obj.set_tooltiptext("PRODUCTSPECINFO2");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("원,부자재 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RAWSUBMATERIAL");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_detail","0",null,null,"409","0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_formscrollbartype("none");
            obj.set_background("#ffffff");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("bg111_00","90.85%","168",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("282");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg86","82.64%","168",null,"24","bg111_00:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("146");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg117","90.85%","288",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("176");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg95","82.63%","288",null,"24","bg117:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("157");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg107","90.90%","48",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg77","82.64%","48",null,"24","bg107:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg108","90.77%","72",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("168");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg82","82.64%","72",null,"24","bg108:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("140");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating1_1","74.48%","72",null,"24","bg82:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("137");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_text("");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg78","66.11%","72",null,"72","sta_cbplating1_1:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("136");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg64","57.95%","120",null,"24","bg78:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("124");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg48","49.48%","120",null,"24","bg64:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label27","41.32%","120",null,"24","bg48:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("100");
            obj.set_text("홀내벽(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("HOLEINSIDEWALLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg41","32.95%","120",null,"48","label27:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg29","24.69%","120",null,"48","bg41:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg17","16.53%","120",null,"48","bg29:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label16","8.16%","120",null,"48","bg17:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("67");
            obj.set_text("고객 기준(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CUSTOMERCRITERIAUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label12","0","120",null,"48","label16:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("46");
            obj.set_text("내층동도금1");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("1EB89361220E4E18AA9916DA8314EEAD");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label09","91.00%","0",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("상한값");
            obj.set_cssclass("sta_WF_detailLabel_C");
            obj.set_tooltiptext("USL");
            obj.set_textAlign("center");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label08","82.8%","0",null,"24","label09:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("하한값");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("LSL");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label07","66.24%","0",null,"24","label08:1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("SPEC");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("SPEC2");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label06","57.96%","0",null,"24","label07:1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("상한값");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("USL");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label05","49.68%","0",null,"24","label06:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("하한값");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("LSL");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label04","41.4%","0",null,"24","label05:1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("SPEC");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("SPEC2");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label03","33.12%","0",null,"24","label04:1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("상한값");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("USL");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label02","24.84%","0",null,"24","label03:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("기준값");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("STDVALUE");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label01","16.56%","0",null,"24","label02:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("하한값");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("LSL");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label00","0","0",null,"24","label01:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("SPEC");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_tooltiptext("SPEC2");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg106","90.90%","24",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg76","82.64%","24",null,"24","bg106:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label40","74.48%","24",null,"48","bg76:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("22");
            obj.set_text("도금면적(Sq/mm)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGAREASQMM");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label39","66.11%","24",null,"48","label40:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("21");
            obj.set_text("표면도금1");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("SURFACEPLATING1");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg60","57.95%","24",null,"24","label39:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg44","49.48%","24",null,"24","bg60:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label23","41.32%","24",null,"24","bg44:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("홀내벽(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("HOLEINSIDEWALLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg40","32.95%","24",null,"48","label23:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg28","24.69%","24",null,"48","bg40:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg16","16.53%","24",null,"48","bg28:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label15","8.16%","24",null,"48","bg16:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("고객 기준(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CUSTOMERCRITERIAUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label10","0","24",null,"48","label15:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("외층동도금");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("F7E900B5FB0449278BE8621385A0CE21");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg62","57.95%","72",null,"24","bg78:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg46","49.48%","72",null,"24","bg62:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label25","41.32%","72",null,"24","bg46:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("35");
            obj.set_text("Dimple(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("DIMPLEUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg32","32.95%","72",null,"24","label25:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg20","24.69%","72",null,"24","bg32:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg8","16.53%","72",null,"24","bg20:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label19","8.16%","72",null,"48","bg8:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("28");
            obj.set_text("도금 조건(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGCONDITIONUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label11","0","72",null,"24","label19:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg1","0","96",null,"24","label19:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process2",null,"75","22","17","label19:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_outplating1","5","75",null,"17","btn_process2:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("42");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process3",null,"99","22","17","label19:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_outplating2","5","99",null,"17","btn_process3:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("44");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg111","90.90%","144",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("171");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg85","82.64%","144",null,"24","bg111:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("145");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label42","74.48%","144",null,"48","bg85:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("144");
            obj.set_text("도금면적(Sq/mm)");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGAREASQMM");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label41","66.11%","144",null,"48","label42:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("143");
            obj.set_text("표면도금2");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("SURFACEPLATING2");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg66","57.95%","168",null,"24","label41:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("126");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg50","49.48%","168",null,"24","bg66:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label29","41.32%","168",null,"24","bg50:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("102");
            obj.set_text("Dimple(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("DIMPLEUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg34","32.95%","168",null,"24","label29:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg22","24.69%","168",null,"24","bg34:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg10","16.53%","168",null,"24","bg22:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label20","8.16%","168",null,"48","bg10:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("76");
            obj.set_text("도금 조건(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGCONDITIONUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg2","0","168",null,"24","label20:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg3","0","192",null,"24","label20:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg113","90.90%","192",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("172");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg91","82.64%","192",null,"24","bg113:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("151");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating2_1","74.48%","192",null,"24","bg91:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("148");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg87","66.11%","192",null,"72","sta_cbplating2_1:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("147");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg68","57.95%","216",null,"24","bg87:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("128");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg52","49.48%","216",null,"24","bg68:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label31","41.32%","216",null,"24","bg52:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("104");
            obj.set_text("홀내벽(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("HOLEINSIDEWALLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg42","32.95%","216",null,"48","label31:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg30","24.69%","216",null,"48","bg42:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg18","16.53%","216",null,"48","bg30:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label17","8.16%","216",null,"48","bg18:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("68");
            obj.set_text("고객 기준(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CUSTOMERCRITERIAUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label13","0","216",null,"48","label17:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("53");
            obj.set_text("내층동도금2");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("INNERCOPPERPLATING2");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg116","90.85%","263",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("175");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg94","82.63%","263",null,"24","bg116:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("156");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label44","74.48%","263",null,"48","bg94:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("155");
            obj.set_text("도금면적(Sq/mm)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGAREASQMM");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label43","66.11%","264",null,"48","label44:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("154");
            obj.set_text("표면도금3");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("SURFACEPLATING3");
            obj.set_font("normal bold 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg70","57.95%","264",null,"24","label43:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("130");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg54","49.48%","264",null,"24","bg70:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label33","41.32%","264",null,"24","bg54:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("106");
            obj.set_text("Dimple(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("DIMPLEUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg36","32.95%","264",null,"24","label33:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg24","24.69%","264",null,"24","bg36:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg12","16.53%","264",null,"24","bg24:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label21","8.16%","264",null,"48","bg12:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("77");
            obj.set_text("도금 조건(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGCONDITIONUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg4","0","264",null,"24","label21:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg5","0","288",null,"24","label21:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg118","90.85%","312",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("177");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg100","82.63%","312",null,"24","bg118:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("162");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg97","74.48%","312",null,"24","bg100:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("159");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg96","66.11%","312",null,"72","bg97:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("158");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg72","57.95%","312",null,"24","bg96:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("132");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg56","49.48%","312",null,"24","bg72:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("120");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label35","41.32%","312",null,"24","bg56:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("108");
            obj.set_text("홀내벽(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("HOLEINSIDEWALLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg43","32.95%","312",null,"48","label35:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg31","24.69%","312",null,"48","bg43:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg19","16.53%","312",null,"48","bg31:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_detailBg_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label18","8.16%","312",null,"48","bg19:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("69");
            obj.set_text("고객 기준(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("CUSTOMERCRITERIAUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label14","0","312",null,"48","label18:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("60");
            obj.set_text("내층동도금3");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("77DD1ED4C10248268372137D0BD1291B");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg74","57.95%","360",null,"24","bg96:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("134");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg58","49.48%","360",null,"24","bg74:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("122");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label37","41.32%","360",null,"24","bg58:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("110");
            obj.set_text("Dimple(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("DIMPLEUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg38","32.95%","360",null,"24","label37:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg26","24.69%","360",null,"24","bg38:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg14","16.53%","360",null,"24","bg26:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label22","8.16%","360",null,"48","bg14:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("78");
            obj.set_text("도금 조건(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLATINGCONDITIONUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg6","0","360",null,"24","label22:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg7","0","384",null,"24","label22:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_detailBg_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg63","57.95%","96",null,"24","bg78:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg47","49.48%","96",null,"24","bg63:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label26","41.32%","96",null,"24","bg47:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("38");
            obj.set_text("Over Fill(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("OVERFILLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg33","32.95%","96",null,"24","label26:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg21","24.69%","96",null,"24","bg33:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg9","16.53%","96",null,"24","bg21:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg67","57.95%","192",null,"24","bg87:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("127");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg51","49.48%","192",null,"24","bg67:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label30","41.32%","192",null,"24","bg51:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("103");
            obj.set_text("Over Fill(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("OVERFILLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg35","32.95%","192",null,"24","label30:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg23","24.69%","192",null,"24","bg35:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg11","16.53%","192",null,"24","bg23:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg71","57.95%","288",null,"24","label43:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("131");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg55","49.48%","288",null,"24","bg71:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("119");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label34","41.32%","288",null,"24","bg55:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("107");
            obj.set_text("Over Fill(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("OVERFILLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg37","32.95%","288",null,"24","label34:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg25","24.69%","288",null,"24","bg37:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg13","16.53%","288",null,"24","bg25:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg121","90.85%","384",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("180");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg104","82.63%","384",null,"24","bg121:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("166");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating3_3","74.48%","384",null,"24","bg104:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("165");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg105","66.11%","384",null,"24","sta_cbplating3_3:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("167");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg75","57.95%","384",null,"24","bg105:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("135");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg59","49.48%","384",null,"24","bg75:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("123");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label38","41.32%","384",null,"24","bg59:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("111");
            obj.set_text("Over Fill(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("OVERFILLUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg39","32.95%","384",null,"24","label38:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg27","24.69%","384",null,"24","bg39:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg15","16.53%","384",null,"24","bg27:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg61","57.95%","48",null,"24","label39:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg45","49.48%","48",null,"24","bg61:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label24","41.32%","48",null,"24","bg45:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("면동박(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLANECUFOILUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg65","57.95%","144",null,"24","label41:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("125");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg49","49.48%","144",null,"24","bg65:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label28","41.32%","144",null,"24","bg49:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("101");
            obj.set_text("면동박(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLANECUFOILUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg69","57.95%","240",null,"24","bg87:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("129");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg53","49.48%","240",null,"24","bg69:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label32","41.32%","240",null,"24","bg53:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("105");
            obj.set_text("면동박(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLANECUFOILUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg73","57.95%","336",null,"24","bg96:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("133");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg57","49.48%","336",null,"24","bg73:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("121");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label36","41.32%","336",null,"24","bg57:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("109");
            obj.set_text("면동박(um)");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("PLANECUFOILUM");
            obj.set_font("normal 700 9pt/normal \"Arial\"");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg109","90.90%","96",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("169");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg83","82.64%","96",null,"24","bg109:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("141");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating1_2","74.48%","96",null,"24","bg83:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("138");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg110","90.90%","120",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("170");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg84","82.64%","120",null,"24","bg110:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("142");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating1_3","74.48%","120",null,"24","bg84:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("139");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg114","90.90%","216",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("173");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg92","82.64%","216",null,"24","bg114:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("152");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating2_2","74.48%","216",null,"24","bg92:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("149");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg115","90.85%","240",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("174");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg93","82.64%","240",null,"24","bg115:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("153");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg119","90.85%","336",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("178");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg101","82.63%","336",null,"24","bg119:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("163");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating3_1","74.48%","336",null,"24","bg101:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("160");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_text("");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg120","90.85%","360",null,"24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("179");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("bg102","82.63%","360",null,"24","bg120:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("164");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating3_2","74.41%","360",null,"24","bg102:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("161");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process13",null,"100","23","17","sta_cbplating1_2:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("182");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_faceplating1","bg63:5","100",null,"17","btn_process13:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("181");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process14",null,"219","23","17","sta_cbplating2_2:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("183");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_faceplating2","bg68:5","219",null,"17","btn_process14:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("184");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process15",null,"339","23","17","sta_cbplating3_1:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("186");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_faceplating3","bg73:5","339",null,"17","btn_process15:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("185");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_cbplating1_4","label40:5","27",null,"17","bg106:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("187");
            obj.set_codecolumn("C,ImpedanceLayer,null,Y,Y");
            obj.set_cssclass("display");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_cbplating1_5","label40:5","51",null,"17","bg107:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("188");
            obj.set_codecolumn("C,ImpedanceLayer,null,Y,Y");
            obj.set_cssclass("display");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_cbplating2_4","label42:5","147",null,"17","bg111:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("189");
            obj.set_codecolumn("C,ImpedanceLayer,null,Y,Y");
            obj.set_cssclass("display");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_cbplating2_5","label42:5","171",null,"17","bg111_00:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("190");
            obj.set_codecolumn("C,ImpedanceLayer,null,Y,Y");
            obj.set_cssclass("display");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_cbplating3_4","label44:5","267",null,"17","bg116:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("191");
            obj.set_codecolumn("C,ImpedanceLayer,null,Y,Y");
            obj.set_cssclass("display");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_cbplating3_5","label44:5","291",null,"17","bg117:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("192");
            obj.set_codecolumn("C,ImpedanceLayer,null,Y,Y");
            obj.set_cssclass("display");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_outspeclow1","label19:5","75",null,"17","bg20:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("193");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_outspecstd1","bg8:5","75",null,"17","bg32:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("194");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_outspechigh1","bg20:5","75",null,"17","label25:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("195");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customlow1","label15:5","25",null,"45","bg28:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("196");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customstd1","bg16:5","25",null,"45","bg40:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("197");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customhigh1","bg28:5","25",null,"45","label23:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("198");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_outspeclow2","label19:5","99",null,"17","bg21:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("199");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_outspecstd2","bg9:5","99",null,"17","bg33:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("200");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_outspechigh2","bg21:5","99",null,"17","label26:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("201");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customlow2","label16:5","121",null,"45","bg29:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("202");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customstd2","bg17:5","121",null,"45","bg41:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("203");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customhigh2","bg29:5","121",null,"45","label27:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("204");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner1speclow1","label20:5","171",null,"17","bg22:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("205");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner1specstd1","bg10:5","171",null,"17","bg34:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("206");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner1spechigh1","bg22:5","171",null,"17","label29:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("207");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner1speclow2","label20:5","195",null,"17","bg23:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("208");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner1specstd2","bg11:5","195",null,"17","bg35:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("209");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner1spechigh2","bg23:5","195",null,"17","label30:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("210");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customlow3","label17:5","217",null,"45","bg30:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("211");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customstd3","bg18:5","217",null,"45","bg42:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("212");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customhigh3","bg30:5","217",null,"45","label31:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("213");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner2speclow1","label21:5","267",null,"17","bg24:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("214");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner2specstd1","bg12:5","267",null,"17","bg36:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("215");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner2spechigh1","bg24:5","267",null,"17","label33:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("216");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner2speclow2","label21:5","291",null,"17","bg25:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("217");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner2specstd2","bg13:5","291",null,"17","bg37:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("218");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner2spechigh2","bg25:5","291",null,"17","label34:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("219");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customlow4","label18:5","313",null,"45","bg31:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("220");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customstd4","bg19:5","313",null,"45","bg43:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("221");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_customhigh4","bg31:5","313",null,"45","label35:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("222");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner3speclow1","label22:5","363",null,"17","bg26:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("223");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner3specstd1","bg14:5","363",null,"17","bg38:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("224");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner3spechigh1","bg26:5","363",null,"17","label37:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("225");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner3speclow2","label22:5","387",null,"17","bg27:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("226");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner3specstd2","bg15:5","387",null,"17","bg39:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("227");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_inner3spechigh2","bg27:5","387",null,"17","label38:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("228");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole1_1","label23:5","27",null,"17","bg60:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("229");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole1_2","bg44:5","27",null,"17","label39:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("230");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil1_1","label24:5","51",null,"17","bg61:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("231");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil1_2","bg45:5","51",null,"17","label39:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("232");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple1_1","label25:5","75",null,"17","bg62:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("233");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple1_2","bg46:5","75",null,"17","bg78:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("234");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill1_1","label26:5","99",null,"17","bg63:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("235");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill1_2","bg47:5","99",null,"17","bg78:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("236");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole2_1","label27:5","123",null,"17","bg64:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("237");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole2_2","bg48:5","123",null,"17","bg78:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("238");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil2_1","label28:5","147",null,"17","bg65:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("239");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil2_2","bg49:5","147",null,"17","label41:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("240");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple2_1","label29:5","171",null,"17","bg66:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("241");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple2_2","bg50:5","171",null,"17","label41:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("242");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill2_1","label30:5","195",null,"17","bg67:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("243");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill2_2","bg51:5","195",null,"17","bg87:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("244");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole3_1","label31:5","219",null,"17","bg68:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("245");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole3_2","bg52:5","219",null,"17","bg87:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("246");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil3_1","label32:5","243",null,"17","bg69:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("247");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil3_2","bg53:5","243",null,"17","bg87:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("248");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple3_1","label33:5","267",null,"17","bg70:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("249");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple3_2","bg54:5","267",null,"17","label43:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("250");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill3_1","label34:5","291",null,"17","bg71:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("251");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill3_2","bg55:5","291",null,"17","label43:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("252");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole4_1","label35:5","315",null,"17","bg72:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("253");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_hole4_2","bg56:5","315",null,"17","bg96:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("254");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil4_1","label36:5","339",null,"17","bg73:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("255");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_foil4_2","bg57:5","339",null,"17","bg96:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("256");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple4_1","label37:5","363",null,"17","bg74:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("257");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_dimple4_2","bg58:5","363",null,"17","bg96:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("258");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill4_1","label38:5","387",null,"17","bg75:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("259");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_overfill4_2","bg59:5","387",null,"17","bg105:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("260");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating1_1","sta_cbplating1_1:5","75",null,"17","bg108:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("261");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating1_2","sta_cbplating1_2:5","99",null,"17","bg109:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("262");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating1_3","sta_cbplating1_3:5","123",null,"17","bg110:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("263");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating2_1","sta_cbplating2_1:5","195",null,"17","123",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("264");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating2_2","sta_cbplating2_2:5","219",null,"17","123",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("265");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating2_3","1062","243",null,"17","bg115:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("266");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating3_1","bg97:5","315",null,"17","bg118:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("267");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating3_2","sta_cbplating3_1:5","339",null,"17","bg119:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("268");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_faceplating3_3","sta_cbplating3_2:5","363",null,"17","bg120:6",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("269");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process5",null,"171","22","17","label20:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("50");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_innerplating1_1","5","171",null,"17","btn_process5:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("49");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process6",null,"195","22","17","label20:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_innerplating1_2","5","195",null,"17","btn_process6:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("51");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process8",null,"267","22","17","label21:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("57");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_innerplating2_1","5","267",null,"17","btn_process8:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("56");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process9",null,"291","22","17","label21:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("59");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_innerplating2_2","5","291",null,"17","btn_process9:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("58");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process11",null,"363","22","17","label22:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("64");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_innerplating3_1","5","363",null,"17","btn_process11:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("63");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_process12",null,"387","22","17","label22:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_innerplating3_2","5","387",null,"17","btn_process12:0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("65");
            obj.set_cssclass("display");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_face1_1","bg76:5","27","107","17",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("270");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_face1_2","bg77:5","51","107","17",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("271");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_face2_1","bg85:5","147","107","17",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("272");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_face2_2","bg86:5","171","107","17",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("273");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_face3_1","bg94:5","267","107","17",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("274");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_face3_2","bg95:5","291",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("275");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh1_1","bg82:5","75",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("276");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh1_2","bg83:5","99",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("277");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh1_3","bg84:5","123",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("278");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh2_1","bg91:5","195",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("279");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh2_2","bg92:5","219",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("280");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh2_3","bg93:5","243",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("281");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh3_1","bg100:5","315",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("283");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh3_2","bg101:5","339",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("284");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_facehigh3_3","bg102:5","363",null,"17","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("285");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Static("sta_cbplating2_3","74.48%","240",null,"24","bg93:-1",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.div_detail.form);
            obj.set_taborder("150");
            obj.set_wordWrap("char");
            obj.set_cssclass("sta_WF_detailLabel_C_line");
            obj.set_textAlign("left");
            this.div_work.form.tab.Tabpage2.form.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_materialDetail","50.00%","23.42%",null,null,"0","div_detail:34",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_materialDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"350\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재유형\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"MATERIALNAME\"/><Cell col=\"3\" text=\"작업방식\" tooltiptext=\"ISMAINSEGMENT\"/><Cell col=\"4\" text=\"사용층\" tooltiptext=\"USERLAYER\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MATERIALDETAILTYPE\" edittype=\"none\" combocodecol=\"C,MaterialDetailType,null,Y,N\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:COMPONENTITEMNAME\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:WORKMETHOD\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:USERLAYER\" edittype=\"none\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_ink","50.00%","34",null,null,"0","grd_materialDetail:34",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ink");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목구분\" tooltiptext=\"ITEMTYPE2\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"MATERIALNAME\"/><Cell col=\"3\" text=\"색상\" tooltiptext=\"COLOR\"/><Cell col=\"4\" text=\"사용층1\" tooltiptext=\"USERLAYER1\"/><Cell col=\"5\" text=\"사용층2\" tooltiptext=\"USERLAYER2\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SPECDETAILFROM\" combocodecol=\"C,InkSpec,null,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" combotype=\"caseifilterlike\"/><Cell col=\"2\" text=\"bind:DETAILNAME\" displaytype=\"text\" edittype=\"text\" editmaxlength=\"50\"/><Cell col=\"3\" text=\"bind:COLOR\" combocodecol=\"C,ColorType,null,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:USERLAYER1\" combocodecol=\"C,ImpedanceLayer,null,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:USERLAYER2\" combocodecol=\"C,ImpedanceLayer,null,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_material","0","34",null,null,"grd_ink:10","div_detail:34",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_material");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"250\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재유형\" tooltiptext=\"MATERIALTYPE\"/><Cell col=\"2\" text=\"제조사\" tooltiptext=\"MEASURINGMANUFACTURER\"/><Cell col=\"3\" text=\"자재코드\" tooltiptext=\"MATERIALDEF\"/><Cell col=\"4\" text=\"자재명\" tooltiptext=\"MATERIALNAME\"/><Cell col=\"5\" text=\"사용층\" tooltiptext=\"USERLAYER\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MATERIALDETAILTYPE\" displaytype=\"combotext\" combocodecol=\"C,MaterialDetailType,null,Y,N\"/><Cell col=\"2\" text=\"bind:MAKER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ASSEMBLYITEMID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:BOTASSEMBLYITEMNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USERLAYER\" displaytype=\"text\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","26","24","29",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","26","24","55",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","50.00%",null,"85","34",null,"grd_materialDetail:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("부자재 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SUBSIDIARYINFO");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subTitle0","0","grd_material:0","71","33",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("도금 사양");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PLATINGSPEC");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subTitle1","49.90%","0","147",null,null,"grd_ink:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("잉크 및 기타정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INKINFO2");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inkExcel",null,null,"29","24","0","grd_ink:4",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_inkExcel","67.66%","64",null,null,"135","566",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ink");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목구분\" tooltiptext=\"ITEMTYPE2\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"MATERIALNAME\"/><Cell col=\"3\" text=\"색상\" tooltiptext=\"COLOR\"/><Cell col=\"4\" text=\"사용층1\" tooltiptext=\"USERLAYER1\"/><Cell col=\"5\" text=\"사용층2\" tooltiptext=\"USERLAYER2\"/><Cell col=\"6\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SPECDETAILFROM\" combocodecol=\"C,InkSpec,null,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:DETAILNAME\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:COLOR\" combocodecol=\"C,ColorType,null,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:USERLAYER1\" combocodecol=\"C,ImpedanceLayer,null,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:USERLAYER2\" combocodecol=\"C,ImpedanceLayer,null,Y,Y\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("품목사양정보3");
            obj.set_tooltiptext("PRODUCTSPECINFO3");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_etc1","0","34",null,null,"0","411",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_etc1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"폼목명\" tooltiptext=\"ITEMNAME\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"치공구 형식\" tooltiptext=\"TOOLFORMCODE\"/><Cell col=\"5\" text=\"치공구 종류\" tooltiptext=\"TOOLKIND\"/><Cell col=\"6\" text=\"합수\" tooltiptext=\"SUMMARY\"/><Cell col=\"7\" text=\"구분\" tooltiptext=\"TYPE\"/><Cell col=\"8\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"10\" text=\"SCALE X\" tooltiptext=\"SCALEX\"/><Cell col=\"11\" text=\"SCALE Y\" tooltiptext=\"SCALEY\"/><Cell col=\"12\" text=\"비고\" tooltiptext=\"REMARK\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLFORM\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_toolTypeMW\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:TOOLKIND\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_toolTypeMWDetail\" combocodecol=\"CODE\" combodatacol=\"NAME\" combotype=\"caseifilterlike\"/><Cell col=\"6\" text=\"bind:SUMMARY\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"7\" text=\"bind:TOOLCLASS\" displaytype=\"combotext\" combocodecol=\"C,ProductSpecToolClassify,null,Y,Y\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:MANUFACTURER\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:RECEIPTAREANM\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:SCALEX\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"11\" text=\"bind:SCALEY\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"12\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_customdelRow_etc1",null,null,"26","24","29","grd_etc1:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_etc2","0",null,null,"148","0","224",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_etc2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"폼목명\" tooltiptext=\"ITEMNAME\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"치공구 형식\" tooltiptext=\"TOOLFORMCODE\"/><Cell col=\"5\" text=\"치공구 종류\" tooltiptext=\"TOOLKIND\"/><Cell col=\"6\" text=\"합수\" tooltiptext=\"SUMMARY\"/><Cell col=\"7\" text=\"구분\" tooltiptext=\"TYPE\"/><Cell col=\"8\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"10\" text=\"SCALE X\" tooltiptext=\"SCALEX\"/><Cell col=\"11\" text=\"SCALE Y\" tooltiptext=\"SCALEY\"/><Cell col=\"12\" text=\"비고\" tooltiptext=\"REMARK\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLFORM\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_toolTypeBJ\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"5\" text=\"bind:TOOLKIND\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_toolTypeBJDetail\" combocodecol=\"CODE\" combodatacol=\"NAME\" combotype=\"caseifilterlike\"/><Cell col=\"6\" text=\"bind:SUMMARY\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"7\" text=\"bind:TOOLCLASS\" displaytype=\"combotext\" combocodecol=\"C,ProductSpecToolClassify,null,Y,Y\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:MANUFACTURER\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:RECEIPTAREANM\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:SCALEX\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"11\" text=\"bind:SCALEY\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"12\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_etc2","66",null,"200","34",null,"grd_etc2:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_etc1",null,null,"29","24","0","grd_etc1:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_customaddRow_etc1",null,null,"26","24","btn_xlDn_grd_etc1:26","grd_etc1:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","75","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("금형, 목형");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MOLDANDWOODEN");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_etc3","0",null,null,"194","0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_etc3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"폼목명\" tooltiptext=\"ITEMNAME\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"치공구 형식\" tooltiptext=\"TOOLFORMCODE\"/><Cell col=\"5\" text=\"치공구 종류\" tooltiptext=\"TOOLKIND\"/><Cell col=\"6\" text=\"합수\" tooltiptext=\"SUMMARY\"/><Cell col=\"7\" text=\"구분\" tooltiptext=\"TYPE\"/><Cell col=\"8\" text=\"제작처\" tooltiptext=\"MANUFACTURER\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"10\" text=\"SCALE X\" tooltiptext=\"SCALEX\"/><Cell col=\"11\" text=\"SCALE Y\" tooltiptext=\"SCALEY\"/><Cell col=\"12\" text=\"비고\" tooltiptext=\"REMARK\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLFORM\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ToolFormE,null,Y,Y\"/><Cell col=\"5\" text=\"bind:TOOLKIND\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_toolType\" combocodecol=\"CODE\" combodatacol=\"NAME\" combotype=\"caseifilterlike\"/><Cell col=\"6\" text=\"bind:SUMMARY\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"7\" text=\"bind:TOOLCLASS\" displaytype=\"combotext\" combocodecol=\"C,ProductSpecToolClassify,null,Y,Y\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:MANUFACTURER\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:RECEIPTAREANM\" edittype=\"normal\"/><Cell col=\"10\" text=\"bind:SCALEX\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"11\" text=\"bind:SCALEY\" edittype=\"normal\" editinputtype=\"number,sign,dot\"/><Cell col=\"12\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0",null,"61","34","grd_etc2:-61","grd_etc2:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("BBT,JIG");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("BBTANDJIG");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_customdelRow_etc2",null,null,"26","24","29","grd_etc2:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_customaddRow_etc2",null,null,"26","24","55","grd_etc2:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00_00","0",null,"38","30",null,"grd_etc3:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ETCSPEC");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_customdelRow_etc3",null,null,"26","24","29","grd_etc3:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_customaddRow_etc3","grd_etc3:-81","grd_etc2:6",null,null,"55","grd_etc3:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_etc2",null,null,"29","24","0","grd_etc2:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_etc3",null,null,"29","24","0","grd_etc3:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_etc1","Static20_00_00:5",null,"200","34",null,"grd_etc1:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_etc3","Static20_00_00_00_00:5",null,"200","30",null,"grd_etc3:0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save2",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("품목사양정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0292");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_attach",null,"16","71","24","btn_save2:25",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("층 구성도");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("FLOORCOMPOSITION");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_printCard",null,"16","71","24","btn_attach:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("이력카드");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("FLOORCOMPOSITION");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ENTERPRISE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clearCustom","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_enterpriseid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_id","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_value("품목코드ID(Hidden)");
            obj.set_text("품목코드ID(Hidden)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","166",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_value("품목Rev(Hidden)");
            obj.set_text("품목Rev(Hidden)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1580,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customlow1","value","ds_materialPlating","SPECDETAILFROM1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customstd1","value","ds_materialPlating","SPECDETAILTO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customhigh1","value","ds_materialPlating","FROMORIGINAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.tab.Tabpage2.form.div_detail.form.edt_outplating1","value","ds_materialPlating","DESCRIPTION2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.tab.Tabpage2.form.div_detail.form.edt_outplating2","value","ds_materialPlating","DESCRIPTION3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customlow2","value","ds_materialPlating","SPECDETAILFROM4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customstd2","value","ds_materialPlating","SPECDETAILTO4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customhigh2","value","ds_materialPlating","FROMORIGINAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.tab.Tabpage2.form.div_detail.form.edt_innerplating1_1","value","ds_materialPlating","DESCRIPTION5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.tab.Tabpage2.form.div_detail.form.edt_innerplating1_2","value","ds_materialPlating","DESCRIPTION6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customlow3","value","ds_materialPlating","SPECDETAILFROM7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customstd3","value","ds_materialPlating","SPECDETAILTO7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customhigh3","value","ds_materialPlating","FROMORIGINAL7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.tab.Tabpage2.form.div_detail.form.edt_innerplating2_1","value","ds_materialPlating","DESCRIPTION8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.tab.Tabpage2.form.div_detail.form.edt_innerplating2_2","value","ds_materialPlating","DESCRIPTION9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customlow4","value","ds_materialPlating","SPECDETAILFROM10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customstd4","value","ds_materialPlating","SPECDETAILTO10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.tab.Tabpage2.form.div_detail.form.msk_customhigh4","value","ds_materialPlating","FROMORIGINAL10");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.tab.Tabpage2.form.div_detail.form.edt_innerplating3_1","value","ds_materialPlating","DESCRIPTION11");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.form.tab.Tabpage2.form.div_detail.form.edt_innerplating3_2","value","ds_materialPlating","DESCRIPTION12");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work.form.tab.Tabpage2.form.div_detail.form.edt_faceplating1","value","ds_materialPlating","DESCRIPTION13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work.form.tab.Tabpage2.form.div_detail.form.edt_faceplating2","value","ds_materialPlating","DESCRIPTION14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.form.tab.Tabpage2.form.div_detail.form.edt_faceplating3","value","ds_materialPlating","DESCRIPTION15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating1_4","value","ds_materialPlating","SPECDETAILFROM13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating1_5","value","ds_materialPlating","SPECDETAILTO13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work.form.tab.Tabpage2.form.div_detail.form.msk_face1_1","value","ds_materialPlating","FROMORIGINAL13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_work.form.tab.Tabpage2.form.div_detail.form.msk_face1_2","value","ds_materialPlating","TOORIGINAL13");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating2_4","value","ds_materialPlating","SPECDETAILFROM14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating2_5","value","ds_materialPlating","SPECDETAILTO14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_work.form.tab.Tabpage2.form.div_detail.form.msk_face2_1","value","ds_materialPlating","FROMORIGINAL14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_work.form.tab.Tabpage2.form.div_detail.form.msk_face2_2","value","ds_materialPlating","TOORIGINAL14");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating3_4","value","ds_materialPlating","SPECDETAILFROM15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating3_5","value","ds_materialPlating","SPECDETAILTO15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_work.form.tab.Tabpage2.form.div_detail.form.msk_face3_1","value","ds_materialPlating","FROMORIGINAL15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_work.form.tab.Tabpage2.form.div_detail.form.msk_face3_2","value","ds_materialPlating","TOORIGINAL15");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_work.form.tab.Tabpage2.form.div_detail.form.msk_outspeclow1","value","ds_materialPlating","LSL2_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_work.form.tab.Tabpage2.form.div_detail.form.msk_outspeclow2","value","ds_materialPlating","LSL3_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner1speclow1","value","ds_materialPlating","LSL5_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner1speclow2","value","ds_materialPlating","LSL6_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner2speclow1","value","ds_materialPlating","LSL8_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner2speclow2","value","ds_materialPlating","LSL9_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner3speclow1","value","ds_materialPlating","LSL11_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner3speclow2","value","ds_materialPlating","LSL12_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_work.form.tab.Tabpage2.form.div_detail.form.msk_outspecstd1","value","ds_materialPlating","SL2_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_work.form.tab.Tabpage2.form.div_detail.form.msk_outspecstd2","value","ds_materialPlating","SL3_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner1specstd1","value","ds_materialPlating","SL5_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner1specstd2","value","ds_materialPlating","SL6_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner2specstd1","value","ds_materialPlating","SL8_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner2specstd2","value","ds_materialPlating","SL9_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner3specstd1","value","ds_materialPlating","SL11_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner3specstd2","value","ds_materialPlating","SL12_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_work.form.tab.Tabpage2.form.div_detail.form.msk_outspechigh1","value","ds_materialPlating","USL2_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_work.form.tab.Tabpage2.form.div_detail.form.msk_outspechigh2","value","ds_materialPlating","USL3_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner1spechigh1","value","ds_materialPlating","USL5_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner1spechigh2","value","ds_materialPlating","USL6_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner2spechigh1","value","ds_materialPlating","USL8_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner2spechigh2","value","ds_materialPlating","USL9_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner3spechigh1","value","ds_materialPlating","USL11_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","div_work.form.tab.Tabpage2.form.div_detail.form.msk_inner3spechigh2","value","ds_materialPlating","USL12_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating1_1","text","ds_materialPlating","INSPITEMNAME13_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating1_2","text","ds_materialPlating","INSPITEMNAME13_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating1_3","text","ds_materialPlating","INSPITEMNAME13_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating2_1","text","ds_materialPlating","INSPITEMNAME14_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating2_2","text","ds_materialPlating","INSPITEMNAME14_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating2_3","text","ds_materialPlating","INSPITEMNAME14_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","div_work.form.tab.Tabpage2.form.div_detail.form.bg97","text","ds_materialPlating","INSPITEMNAME15_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating3_1","text","ds_materialPlating","INSPITEMNAME15_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","div_work.form.tab.Tabpage2.form.div_detail.form.sta_cbplating3_2","text","ds_materialPlating","INSPITEMNAME15_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating1_1","value","ds_materialPlating","LSL13_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating1_2","value","ds_materialPlating","LSL13_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating1_3","value","ds_materialPlating","LSL13_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating2_1","value","ds_materialPlating","LSL14_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating2_2","value","ds_materialPlating","LSL14_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating2_3","value","ds_materialPlating","LSL14_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating3_1","value","ds_materialPlating","LSL15_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating3_2","value","ds_materialPlating","LSL15_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_work.form.tab.Tabpage2.form.div_detail.form.msk_faceplating3_3","value","ds_materialPlating","LSL15_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh1_1","value","ds_materialPlating","USL13_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh1_2","value","ds_materialPlating","USL13_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh1_3","value","ds_materialPlating","USL13_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh2_1","value","ds_materialPlating","USL14_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh2_2","value","ds_materialPlating","USL14_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh2_3","value","ds_materialPlating","USL14_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh3_1","value","ds_materialPlating","USL15_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh3_2","value","ds_materialPlating","USL15_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","div_work.form.tab.Tabpage2.form.div_detail.form.msk_facehigh3_3","value","ds_materialPlating","USL15_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil1_1","value","ds_materialPlating","LSL2_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil1_2","value","ds_materialPlating","USL2_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole1_1","value","ds_materialPlating","LSL2_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole1_2","value","ds_materialPlating","USL2_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple1_1","value","ds_materialPlating","LSL2_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple1_2","value","ds_materialPlating","USL2_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill1_1","value","ds_materialPlating","LSL2_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill1_2","value","ds_materialPlating","USL2_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole2_1","value","ds_materialPlating","LSL5_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil2_1","value","ds_materialPlating","LSL5_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple2_1","value","ds_materialPlating","LSL5_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill2_1","value","ds_materialPlating","LSL5_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole3_1","value","ds_materialPlating","LSL8_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil3_1","value","ds_materialPlating","LSL8_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple3_1","value","ds_materialPlating","LSL8_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill3_1","value","ds_materialPlating","LSL8_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole4_1","value","ds_materialPlating","LSL11_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil4_1","value","ds_materialPlating","LSL11_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple4_1","value","ds_materialPlating","LSL11_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill4_1","value","ds_materialPlating","LSL11_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole2_2","value","ds_materialPlating","USL5_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil2_2","value","ds_materialPlating","USL5_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple2_2","value","ds_materialPlating","USL5_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill2_2","value","ds_materialPlating","USL5_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole3_2","value","ds_materialPlating","USL8_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil3_2","value","ds_materialPlating","USL8_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple3_2","value","ds_materialPlating","USL8_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill3_2","value","ds_materialPlating","USL8_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","div_work.form.tab.Tabpage2.form.div_detail.form.msk_hole4_2","value","ds_materialPlating","USL11_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","div_work.form.tab.Tabpage2.form.div_detail.form.msk_foil4_2","value","ds_materialPlating","USL11_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","div_work.form.tab.Tabpage2.form.div_detail.form.msk_dimple4_2","value","ds_materialPlating","USL11_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","div_work.form.tab.Tabpage2.form.div_detail.form.msk_overfill4_2","value","ds_materialPlating","USL11_5");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02000M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품목사양정보
         * 파일명 		: BAS02000M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.03.22
         *
         * 설  명		: 기준관리 - 품목사양정보
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.22	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.searchDiv = this.tab_search.Tabpage1.form;
         this.g_InspIndex = null;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        	this.basfn_saveBtn(this.div_header.form.btn_save2); //저장버튼 공통처리 함수 호출
        	this.basfn_removeEventGrid(this.div_work.form.tab.Tabpage1.form.grd_circuitSpec2);

        	//그리드 틀고정
        	this.nfn_cellFix(this.div_work.form.tab.Tabpage3.form.grd_etc1, 3);
        	this.nfn_cellFix(this.div_work.form.tab.Tabpage3.form.grd_etc2, 3);
        	this.nfn_cellFix(this.div_work.form.tab.Tabpage3.form.grd_etc3, 3);
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {

        	if(!this.fn_checkUpdate()) return;
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_item";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"품목코드");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}

        	var	itemId 			= this.searchDiv.edt_item_id.value;
        	var	itemRev			= this.searchDiv.edt_item_cd.value;
        	var enterpriseId	= this.searchDiv.cmb_enterpriseid.value;

        	this.fn_clearAll(); //전체 DS 초기화 함수 호출

        	var sSvcID 			= "selectProductInfo";
        	var sController 	= "/bas02000/selectProductInfo.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_productInfo=output1 ds_itemSpecDetail=output2 ds_platingSpec=output3 ds_specComment=output4 ds_mvh=output5 ds_material=output6 ds_ink=output7 ds_materialDetail=output8 ds_materialPlatingList=output9 ds_etc1=output10 ds_etc2=output11 ds_etc3=output12";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("ITEMID"		, itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION"	, itemRev);
        		sArgs 			+= this.gfn_setParam("ENTERPRISEID"	, enterpriseId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        };


        this.fn_clearAll = function()
        {
        	/** 탭 1 */
        	this.ds_etcInfo.clearData();		//두께사양
        	this.ds_mvh.clearData();
        	this.ds_platingSpecList.clearData();
        	this.ds_specComment.clearData();

        	/** 탭 2 */
        	this.ds_material.clearData();		//원,부자재 정보
        	this.ds_materialPlating.clearData();//원,부자재 정보
        	this.ds_ink.clearData();			//잉크 및 기타정보
        	this.ds_materialDetail.clearData();	//부자재 정보
        	this.ds_platingSpec.clearData();	//도금 사양

        	/** 탭 3 */
        	this.ds_etc1.clearData();			//금형,목형 정보
        	this.ds_etc2.clearData();			//BBT,JIG 정보
        	this.ds_etc3.clearData();			//기타
        }

        this.fn_addAll = function()
        {
        	/** 탭 1 */
        	if(this.ds_productInfo.rowcount<1)this.ds_productInfo.addRow();		//제품정보
        	if(this.ds_circuitSpec.rowcount<1)this.ds_circuitSpec.addRow();		//회로 및 드릴사양1
        	if(this.ds_circuitSpec3.rowcount<1)this.ds_circuitSpec3.addRow();		//회로 및 드릴사양3
        	if(this.ds_etcInfo.rowcount<1)this.ds_etcInfo.addRow();			//두께사양

        	if(this.ds_mvh.rowcount<1){
        			//MVH종류 그리드 8개로 강제고정 -> 5개로 수정, 임용희 차장 요청 (2021.03.26)
        			var addCount = 5
        			for(var i=0; i<addCount;i++){
        				this.ds_mvh.addRow();
        			}
        	}
        	if(this.ds_platingSpecList.rowcount<1)this.ds_platingSpecList.addRow();
        	if(this.ds_specComment.rowcount<1)this.ds_specComment.addRow();

        	/* 탭 2 */
        	if(this.ds_materialPlating.rowcount<1)this.ds_materialPlating.addRow();		//원,부자재 정보

        }

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClearCustom = function(obj,e)
        {
        	if(!this.fn_checkUpdate()) return;
        	this.searchDiv.edt_item_id.set_value(null);
        	this.searchDiv.edt_item_cd.set_value(null);
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.cmb_enterpriseid.set_value(null);

        	this.fn_clearAll();
        	this.fn_addAll();
        	this.fn_initDs();
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	if(!this.fn_checkProduct()) {return}
        	var componentMain = this.div_work.form.tab.Tabpage1.form;

        	/* 제품정보 그리드 체크 */
        	var strColIdListProduct = "OUTBOUNDFORMAT";
        	var strColNmListProduct = this.nfn_nvl(this.nfn_getDictionarynameUpper("OUTBOUNDFORMAT"),"출고형태");
        	if(!this.fn_saveValidation(componentMain.grd_productInfo, this.ds_productInfo, strColIdListProduct, strColNmListProduct)) return;

        	/* 제품사양 그리드 체크 */
        	var strColIdListSpec = "PCSSIZEXAXIS,PCSSIZEYAXIS,PNLSIZEXAXIS,PNLSIZEYAXIS,PCSPNL";
        	var strColNmListSpec = this.nfn_nvl(this.nfn_getDictionarynameUpper("PCSSIZEXAXIS"),"PCS SIZE X")
        							+","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PCSSIZEYAXIS"),"PCS SIZE Y")
        							+","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PNLSIZEXAXIS"),"PNL SIZE X")
        							+","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PNLSIZEYAXIS"),"PNL SIZE Y")
        							+","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PCSPNL"),"PCS/PNL");
        	if(!this.fn_saveValidation(componentMain.grd_productSpec, this.ds_productInfo, strColIdListSpec, strColNmListSpec)) return;

        	/* 사양변경내용 그리드 체크 */
        	var strColIdListComment = "RECEIVENEWDATA";
        	var strColNmListComment = this.nfn_nvl(this.nfn_getDictionarynameUpper("RECEIVENEWDATA"),"신규 Data 접수")
        	if(!this.fn_saveValidation(componentMain.grd_specComment, this.ds_specComment, strColIdListComment, strColNmListComment)) return;

        	//연신율 관련 검증
        	for(var i=0; i<this.ds_circuitSpec3.rowcount;i++){
        		var check1 = this.ds_circuitSpec3.getColumn(i, "ELONGATIONCHECK1");
        		var check2 = this.ds_circuitSpec3.getColumn(i, "ELONGATIONCHECK2");
        		var check3 = this.ds_circuitSpec3.getColumn(i, "ELONGATIONCHECK3");

        		var elongation1 = this.ds_circuitSpec3.getColumn(i, "ELONGATION_1");
        		var elongation2 = this.ds_circuitSpec3.getColumn(i, "ELONGATION_2");
        		var elongation3 = this.ds_circuitSpec3.getColumn(i, "ELONGATION_3");

        		var before1 = this.ds_circuitSpec3.getColumn(i, "PITCHBEFORE1");
        		var before2 = this.ds_circuitSpec3.getColumn(i, "PITCHBEFORE2");
        		var before3 = this.ds_circuitSpec3.getColumn(i, "PITCHBEFORE3");

        		//연신율 유무1이 Y인경우 연신율1과 적용전 PITCH1은 필수
        		if(check1 =="Y" && (this.nfn_isNull(elongation1) || this.nfn_isNull(before1))){
        			this.gfn_Message("WRONGELONGATION", null, "info", "ok");
        			return;
        		}

        		//연신율 유무2이 Y인경우 연신율2과 적용전 PITCH2은 필수
        		if(check2 =="Y" && (this.nfn_isNull(elongation2) || this.nfn_isNull(before2))){
        			this.gfn_Message("WRONGELONGATION", null, "info", "ok");
        			return;
        		}

        		//연신율 유무3이 Y인경우 연신율3과 적용전 PITCH3은 필수
        		if(check3 =="Y" && (this.nfn_isNull(elongation3) || this.nfn_isNull(before3))){
        			this.gfn_Message("WRONGELONGATION", null, "info", "ok");
        			return;
        		}
        	}

        	/* 탭2 공정 그리드 체크 */
        	var componentInk = this.div_work.form.tab.Tabpage2.form.grd_ink;
        	var strColIdListInk = "SPECDETAILFROM";
        	if(!this.nfn_MandatoryCheckGrid(componentInk, strColIdListInk)) return;

        	/* 탭3 금형,목형 그리드 체크 */
        	var componentEtc1 = this.div_work.form.tab.Tabpage3.form.grd_etc1;
        	var strColIdListEtc1 = "PRODUCTDEFID";
        	if(!this.nfn_MandatoryCheckGrid(componentEtc1, strColIdListEtc1)) return;

        	/* 탭3 BBT,JIG 그리드 체크 */
        	var componentEtc2 = this.div_work.form.tab.Tabpage3.form.grd_etc2;
        	var strColIdListEtc2 = "PRODUCTDEFID";
        	if(!this.nfn_MandatoryCheckGrid(componentEtc2, strColIdListEtc2)) return;

        	/* 탭3 기타 그리드 체크 */
        	var componentEtc3 = this.div_work.form.tab.Tabpage3.form.grd_etc3;
        	var strColIdListEtc3 = "PRODUCTDEFID";
        	if(!this.nfn_MandatoryCheckGrid(componentEtc3, strColIdListEtc3)) return;

        	//저장 데이터 바인딩
        	this.fn_bindSaveData();		//탭1
        	this.fn_bindSaveData2();	//탭2
        	/*
        	trace(this.ds_productInfo.saveCSV());
        	trace(this.ds_itemSpecDetail_save.saveCSV());
        	trace(this.ds_platingSpec_save.saveCSV());
        	trace(this.ds_mvh.saveCSV());
        	trace(this.ds_specComment.saveCSV());
        	*/

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveItemSpec";
        	var sController 	= "/bas02000/saveItemSpec.do";
        	var sInDatasets 	= "ds_productInfo=ds_productInfo:A ds_itemSpecDetail=ds_itemSpecDetail_save:A ds_mvh=ds_mvh:A ds_platingSpec=ds_platingSpec_save:A ds_specComment=ds_specComment:A ds_ink=ds_ink:U ds_materialPlatingList=ds_materialPlatingList_save:A ds_etc1=ds_etc1:U ds_etc2=ds_etc2:U ds_etc3=ds_etc3:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveItemSpec")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectProductInfo") {
        			this.fn_addAll();

        			//MVH종류 그리드 8개로 강제고정 -> 5개로 수정, 임용희 차장 요청 (2021.03.26)
        			var addCount = 5 - this.nfn_nvl(this.ds_mvh.rowcount,0);
        			for(var i=0; i<addCount;i++){
        				this.ds_mvh.addRow();
        			}

        			this.fn_bindData();
        			this.fn_bindData2();

        			//자동계산식 호출
        			this.fn_calcValue('A');
        			this.fn_calcValue('B');
        			this.fn_calcValue('C', "1");
        			this.fn_calcValue('C', "2");
        			this.fn_calcValue('C', "3");

        			//계산 후에 Dataset의 수정여부를 초기화 해야함
        			this.fn_initDs();

        		} else if(trId =="saveItemSpec"){
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_initDs();
        			this.fn_search();
        		}
        	}

        }


        this.fn_initDs = function ()
        {
        	this.ds_productInfo.applyChange();
        	this.ds_circuitSpec3.applyChange();
        	this.ds_mvh.applyChange();
        	this.ds_specComment.applyChange();
        	this.ds_materialPlating.applyChange();
        }

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
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	//품목코드 조회
        	if(svcId =="SCH_ITEM"){
        		var searchKey = this.searchDiv.edt_item.value;
        		oArg.arg_type = "BA";
        		oArg.arg_paramCols = "MASTERDATACLASSID";
        		oArg.arg_paramValues = "Product";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        		if(!this.nfn_isNull(searchKey)) {
        			oArg.arg_searchStr = "SEARCH_KEY="+searchKey.substring(0, (searchKey.indexOf("|")>-1 ? searchKey.indexOf("|") : searchKey.length));
        		}
        	}

        	if (popId=="P00062"){	//담당자 조회
        			oArg.arg_rtnCols = "USERID|USERNAME";
        			oArg.arg_paramCols = "USERGROUPID";
        		if(svcId=="FRM_SPEC_OWNER"){ //사양담당자
        			oArg.arg_paramValues = "SPECOWNER";
        		} else if(svcId=="FRM_CAM_OWNER"){ //CAM담당자
        			oArg.arg_paramValues = "CAMOWNER";
        		} else if(svcId=="FRM_SALES_OWNER"){ //영업담당자
        			oArg.arg_paramValues = "SALESOWNER";
        		}
        	}

        	//제조 Application
        	if(svcId =="MFGAPPLICATION"){
        		oArg.arg_rtnCols = "CODE|NAME";
        	}

        	//공정조회
        	if(svcId.indexOf("process")>-1){
        		oArg.arg_type = "BA";
        		oArg.arg_paramCols 		= "RESOURCEID|RESOURCEVERSION|PLATINGTYPE|PLATINGTYPE2|PLATINGTYPE3";
        		oArg.arg_paramValues 	= this.ds_productInfo.getColumn(0, "ITEMID")+"|"+this.ds_productInfo.getColumn(0, "ITEMVERSION");

        		if(svcId=="process2" || svcId=="process3"){ // 외층동도금 (1,2)
        			oArg.arg_paramValues += "|OuterCopperPlating|OuterAndInner1Plating";
        		}
        		if(svcId=="process5"){ // 내층동도금1 (1)
        			oArg.arg_paramValues += "|InnerCopperPlating1|OuterAndInner1Plating";
        		}
        		if(svcId=="process6"){ // 내층동도금1 (2)
        			oArg.arg_paramValues += "|InnerCopperPlating1|InnerCopperPlaOuterAndInner1Platingting3";
        		}
        		if(svcId=="process8" || svcId=="process9"){ // 내층동도금2 (1,2)
        			oArg.arg_paramValues += "|InnerCopperPlating1|Inner2AndInner3Plating";
        		}
        		if(svcId=="process11" || svcId=="process12"){ // 내층동도금3 (1,2)
        			oArg.arg_paramValues += "|InnerCopperPlating1|Inner2AndInner3Plating";
        		}
        		if(svcId=="process13" || svcId=="process14" || svcId=="process15"){ // 표면도금1,2,3
        			oArg.arg_paramValues += "|SurfacePlating|";
        		} else {
        			oArg.arg_paramValues += "|InOutCopperPlating";	 //내외층동도금 무조건 나오게 추가
        		}
        		oArg.arg_searchStr = "1=1"
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";

        	}

        	//품목코드 조회
        	if(svcId.indexOf("FRM_ITEM")>-1){
        		oArg.arg_paramCols 		= "TOOLTYPE";
        		oArg.arg_paramValues 	= svcId;
        		oArg.arg_type = "C";
        		opts = "width=1024,height=500";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION|DURABLEDEFID|DURABLEDEFNAME|TOOLFORM|TOOLKIND|SUMMARY|MANUFACTURER|SCALEX|SCALEY|DESCRIPTION|DURABLECLASSID|TOOLFORMNAME|TOOLKINDNM|RECEIPTAREAID|RECEIPTAREANM|DURABLEDEFVERSION";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
        	var dsProductInfo 	= this.ds_productInfo;

        	if(sPopupId == "SCH_ITEM")	//검색조건 : 품목 조회
        	{
        		this.searchDiv.edt_item.set_value(rtn[0]+"|"+rtn[2]);
        		this.searchDiv.edt_item_id.set_value(rtn[0]);
        		this.searchDiv.edt_item_cd.set_value(rtn[2]);
        	}
        	if(sPopupId=="FRM_SPEC_OWNER"){ //사양담당자
        		dsProductInfo.setColumn(0, "SPECPERSONID", rtn[0]);
        		dsProductInfo.setColumn(0, "SPECPERSONNAME", rtn[1]);
        	}

        	if(sPopupId=="FRM_CAM_OWNER"){ //CAM담당자
        		dsProductInfo.setColumn(0, "CAMOWNERID", rtn[0]);
        		dsProductInfo.setColumn(0, "CAMOWNERNAME", rtn[1]);
        	}

        	if(sPopupId=="FRM_SALES_OWNER"){ //영업담당자
        		dsProductInfo.setColumn(0, "SALESOWNERID", rtn[0]);
        		dsProductInfo.setColumn(0, "SALESOWNERNAME", rtn[1]);
        	}

        	if(sPopupId =="MFGAPPLICATION"){ //제조 Application
        		dsProductInfo.setColumn(0, "MFG_CATEGORY", rtn[0]);
        		dsProductInfo.setColumn(0, "MFG_CATEGORY_NAME", rtn[1]);
        	}

        	if(sPopupId.indexOf("process")>-1){
        		var dsMaterialPlating = this.ds_materialPlating;

        		if(sPopupId=="process2"){	//외층동도금 1
        			dsMaterialPlating.setColumn(0, "INSPITEMID2", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION2", rtn[1]);
        		}
        		if(sPopupId=="process3"){	//외층동도금 2
        			dsMaterialPlating.setColumn(0, "INSPITEMID3", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION3", rtn[1]);
        		}
        		if(sPopupId=="process5"){	//내층동도금1 (1)
        			dsMaterialPlating.setColumn(0, "INSPITEMID5", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION5", rtn[1]);
        		}
        		if(sPopupId=="process6"){	//내층동도금1 (2)
        			dsMaterialPlating.setColumn(0, "INSPITEMID6", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION6", rtn[1]);
        		}

        		if(sPopupId=="process8"){	//내층동도금2 (1)
        			dsMaterialPlating.setColumn(0, "INSPITEMID8", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION8", rtn[1]);
        		}
        		if(sPopupId=="process9"){	//내층동도금2 (2)
        			dsMaterialPlating.setColumn(0, "INSPITEMID9", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION9", rtn[1]);
        		}
        		if(sPopupId=="process11"){	//내층동도금3 (1)
        			dsMaterialPlating.setColumn(0, "INSPITEMID11", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION11", rtn[1]);
        		}
        		if(sPopupId=="process12"){	//내층동도금3 (2)
        			dsMaterialPlating.setColumn(0, "INSPITEMID12", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION12", rtn[1]);
        		}
        		if(sPopupId=="process13"){	//표면도금1
        			dsMaterialPlating.setColumn(0, "INSPITEMID13", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION13", rtn[1]);
        		}
        		if(sPopupId=="process14"){	//표면도금2
        			dsMaterialPlating.setColumn(0, "INSPITEMID14", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION14", rtn[1]);
        		}
        		if(sPopupId=="process15"){	//표면도금3
        			dsMaterialPlating.setColumn(0, "INSPITEMID15", rtn[0]);
        			dsMaterialPlating.setColumn(0, "DESCRIPTION15", rtn[1]);
        		}

        		//검사 상세정보 조회 함수 호출
        		this.fn_bindInspItemData(rtn[0], sPopupId.replace("process",""));
        	}

        	//품목코드 조회
        	if(sPopupId.indexOf("FRM_ITEM")>-1){
        		for(var i=0; i<rtn.length; i++){
        			var colArray 		= rtn[i];

        			var itemId 			= colArray[0];		// PRODUCTDEFID
        			var itemName 		= colArray[1];		// PRODUCTDEFNAME
        			var itemRev 		= colArray[2];		// PRODUCTDEFVERSION
        			var durableId 		= colArray[3];		// DURABLEDEFID
        			var durableName		= colArray[4];		// DURABLEDEFNAME
        			var toolForm 		= colArray[5];		// TOOLFORM
        			var toolKind 		= colArray[6];		// TOOLKIND
        			var summary 		= colArray[7];		// SUMMARY
        			var manufacturer	= colArray[8];		// MANUFACTURER
        			var scaleX 			= colArray[9];		// SCALEX
        			var scaleY	 		= colArray[10];		// SCALEY
        			var description 	= colArray[11];		// DESCRIPTION
        			var durableClassId 	= colArray[12];		// DURABLECLASSID
        			var durableFormNm	= colArray[13];
        			var durableKindNm	= colArray[14];
        			var areaId			= colArray[15];
        			var areaNm			= colArray[16];
        			var durableVersion	= colArray[17];

        			var toolClass		= "";
        			var dsObj			= this.objects["ds_etc"+sPopupId.replace("FRM_ITEM","")];		;
        			var nRow 			= null;
        			var	addRow			= null;
        			var productId		= this.ds_productInfo.getColumn(0, "ITEMID")
        			var productVersion	= this.ds_productInfo.getColumn(0, "ITEMVERSION")

        			nRow  	= dsObj.rowposition;
        			addRow 	= nRow;
        			if(i!=0) addRow = dsObj.addRow();

        			//공통 영역
        			dsObj.setColumn(addRow, "PRODUCTDEFID", 		itemId);
        			dsObj.setColumn(addRow, "PRODUCTDEFNAME", 		itemName);
        			dsObj.setColumn(addRow, "PRODUCTDEFVERSION", 	itemRev);

        			// 금형,치공구,BBT,JIG
        			//2021-06-08 아래와 같이 로직 수정 / 정원식 대리 요청
        			/*
        				신규	품목코드와 치공구 품목코드 및 내부 Rev.까지 같음(1025500F1 FA1)
        				동일	품목코드와 치공구 품목코드의 코드만 같음(1025500=1025500)
        				공용	품목코드와 치공구 품목코드의 코드가 다름(1025855≠1025500)
        			*/

        			var itemModelCode = itemId.substr(0, itemId.length-2);
        			var toolModelCode = productId.substr(0, productId.length-2);

        			if(itemId == productId && itemRev == productVersion){
        				toolClass = "ProductSpecToolClassify_01";
        			} else {
        				if(itemModelCode==toolModelCode){
        					toolClass = "ProductSpecToolClassify_03";
        				} else {
        					toolClass = "ProductSpecToolClassify_04";
        				}
        			}

        			dsObj.setColumn(addRow, "DURABLEDEFID", 	durableId);
        			dsObj.setColumn(addRow, "DURABLEDEFNAME", 	durableName);
        			dsObj.setColumn(addRow, "DURABLEDEFVERSION",durableVersion);
        			dsObj.setColumn(addRow, "TOOLFORM", 		toolForm);
        			dsObj.setColumn(addRow, "TOOLKIND", 		toolKind);
        			dsObj.setColumn(addRow, "TOOLFORMNAME", 	durableFormNm);
        			dsObj.setColumn(addRow, "TOOLKINDNM", 		durableKindNm);
        			dsObj.setColumn(addRow, "SUMMARY", 			summary);
        			dsObj.setColumn(addRow, "MANUFACTURER", 	manufacturer);
        			dsObj.setColumn(addRow, "SCALEX", 			scaleX);
        			dsObj.setColumn(addRow, "SCALEY", 			scaleY);
        			dsObj.setColumn(addRow, "DESCRIPTION", 		description);
        			dsObj.setColumn(addRow, "TOOLCLASS", 		toolClass);

        			if(sPopupId=="FRM_ITEM3"){
        				dsObj.setColumn(addRow, "DURABLECLASSID", 	"E");
        			} else {
        				if(this.nfn_isNull(durableClassId)){
        					if(sPopupId=="FRM_ITEM1"){
        						dsObj.setColumn(addRow, "DURABLECLASSID", 	"M"); //품목으로 선택시 금형 고정
        					} else if(sPopupId=="FRM_ITEM2"){
        						dsObj.setColumn(addRow, "DURABLECLASSID", 	"B"); //품목으로 선택시 BBT 고정
        					}
        				} else {
        					dsObj.setColumn(addRow, "DURABLECLASSID", 	durableClassId);
        				}

        			}

        			dsObj.setColumn(addRow, "RECEIPTAREAID", 	areaId);
        			dsObj.setColumn(addRow, "RECEIPTAREANM", 	areaNm);
        		}
        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_checkUpdate = function()
        {
        	var bOk = true;
        	if (  this.gfn_dsIsUpdated(this.ds_productInfo)
        		   || this.gfn_dsIsUpdated(this.ds_itemSpecDetail)
        		   || this.gfn_dsIsUpdated(this.ds_platingSpec)
        		   || this.gfn_dsIsUpdated(this.ds_specComment)
        		   || this.gfn_dsIsUpdated(this.ds_mvh)
        		   || this.gfn_dsIsUpdated(this.ds_ink)
        		   || this.gfn_dsIsUpdated(this.ds_materialPlating)
        		   || this.gfn_dsIsUpdated(this.ds_etc1)
        		   || this.gfn_dsIsUpdated(this.ds_etc2)
        		   || this.gfn_dsIsUpdated(this.ds_etc3)
        		   ) {
        			bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		}
        	return bOk;
        }
        this.fn_initCombo = function ()
        {
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cmb_enterpriseid // Object
        								, "selectEnterpriseList,ALL,Y,A" // OPTION
        								, null);	  // 추가 파라미터

        	//PNLXSIZE
        	var sSvcID 			= "selectCodeList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_pnlSizeX=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectCodeList");
        		sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "PNLSIZEX");
        		sArgs 			+= this.gfn_setParam("CMB_TYPE", "null");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	//TOOL 종류
        	var sSvcID 			= "GetToolTypeByClassId";
        	var sController 	= "/bas02000/GetToolTypeByClassId.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_toolType=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	//TOOL 종류
        	var sSvcID 			= "GetToolTypeByClassIdMW";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_toolTypeMWDetail=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectDurableKindDetail");
        	sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "MW");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	var sSvcID 			= "GetToolTypeByClassIdBJ";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_toolTypeBJDetail=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectDurableKindDetail");
        	sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "BJ");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);


        	//TOOL 종류
        	var sSvcID 			= "GetToolTypeByClassIdMW";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_toolTypeMW=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectDurableKind");
        	sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "MW");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	//TOOL 종류
        	var sSvcID 			= "GetToolTypeByClassIdBJ";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_toolTypeBJ=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectDurableKind");
        	sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "BJ");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	this.tab_search.Tabpage1.form.cmb_enterpriseid.set_value(this.gf_getEnterpriseId());
        }

        /*
         *	리스트 형태의 Data를 1차원 배열로 바인딩하는 함수
         */
        this.fn_bindData = function()
        {

        	var dsSource 		= this.ds_itemSpecDetail;	//Product Item Spec Detail 정보
        	var dsObj 			= this.ds_circuitSpec;		//회로 및 드릴 사양
        	var dsPlating 		= this.ds_platingSpecList;	//두께
        	var dsComment		= this.ds_specComment;		//사양변경내용
        	var dsCircuitSpec3  = this.ds_circuitSpec3;

        	/* 1. 회로 및 드릴사양 *************************************************************************/
        	dsObj.setColumn(0, "FROMINNERLAYERCIRCUIT", this.fn_findDsValue(dsSource,"INNERLAYERCIRCUIT", "F"));	// 내층회로(폭)
        	dsObj.setColumn(0, "TOINNERLAYERCIRCUIT", 	this.fn_findDsValue(dsSource,"INNERLAYERCIRCUIT", "T"));	// 내층회로(간격)
        	dsObj.setColumn(0, "FROMOUTERLAYERCIRCUIT", this.fn_findDsValue(dsSource,"OUTERLAYERCIRCUIT", "F"));	// 외층회로(폭)
        	dsObj.setColumn(0, "TOOUTERLAYERCIRCUIT", 	this.fn_findDsValue(dsSource,"OUTERLAYERCIRCUIT", "T"));	// 외층회로(간격)
        	dsObj.setColumn(0, "FROMOLBCIRCUIT", 		this.fn_findDsValue(dsSource,"OLBCIRCUIT"		, "F"));	// OLB(폭)
        	dsObj.setColumn(0, "TOOLBCIRCUIT", 			this.fn_findDsValue(dsSource,"OLBCIRCUIT"		, "T"));	// OLB 간격
        	dsObj.setColumn(0, "FROMPTH", 				this.fn_findDsValue(dsSource,"PTH"		, "F"));			// PTH(LAND)
        	dsObj.setColumn(0, "TOPTH", 				this.fn_findDsValue(dsSource,"PTH"		, "T"));			// PTH(HOLE)
        	dsObj.setColumn(0, "FROMIVH", 				this.fn_findDsValue(dsSource,"IVH"		, "F"));			// IVH(LAND)
        	dsObj.setColumn(0, "TOIVH", 				this.fn_findDsValue(dsSource,"IVH"		, "T"));			// IVH(HOLE)
        	dsObj.setColumn(0, "FROMMVH", 				this.fn_findDsValue(dsSource,"MVH"		, "F"));			// MVH(LAND)
        	dsObj.setColumn(0, "TOMVH", 				this.fn_findDsValue(dsSource,"MVH"		, "T"));			// MVH(HOLE)

        	dsObj.setColumn(0, "IMPEDANCE", 			this.ds_productInfo.getColumn(0,"IMPEDANCE"));				// 임피던스 유무
        	dsObj.setColumn(0, "IMPEDANCESPEC1", 		this.ds_productInfo.getColumn(0,"IMPEDANCESPEC1"));			// 임피던스 SPEC1
        	dsObj.setColumn(0, "IMPEDANCESPEC2", 		this.ds_productInfo.getColumn(0,"IMPEDANCESPEC2"));			// 임피던스 SPEC2
        	dsObj.setColumn(0, "IMPEDANCESPEC3", 		this.ds_productInfo.getColumn(0,"IMPEDANCESPEC3"));			// 임피던스 SPEC3
        	dsObj.setColumn(0, "IMPEDANCETYPE1", 		this.ds_productInfo.getColumn(0,"IMPEDANCETYPE1"));			// 임피던스 구분1
        	dsObj.setColumn(0, "IMPEDANCETYPE2", 		this.ds_productInfo.getColumn(0,"IMPEDANCETYPE2"));			// 임피던스 구분2
        	dsObj.setColumn(0, "IMPEDANCETYPE3", 		this.ds_productInfo.getColumn(0,"IMPEDANCETYPE3"));			// 임피던스 구분3
        	dsObj.setColumn(0, "IMPEDANCEAPPLYLAYER1",	this.ds_productInfo.getColumn(0,"IMPEDANCEAPPLYLAYER1"));	// 임피던스 적용층1
        	dsObj.setColumn(0, "IMPEDANCEAPPLYLAYER2",	this.ds_productInfo.getColumn(0,"IMPEDANCEAPPLYLAYER2"));	// 임피던스 적용층2
        	dsObj.setColumn(0, "IMPEDANCEAPPLYLAYER3",	this.ds_productInfo.getColumn(0,"IMPEDANCEAPPLYLAYER3"));	// 임피던스 적용층3
        	dsObj.setColumn(0, "FLATNESS11",			this.ds_productInfo.getColumn(0,"FLATNESS11"));				// 평탄도 부위1
        	dsObj.setColumn(0, "FLATNESS12",			this.ds_productInfo.getColumn(0,"FLATNESS12"));				// 평탄도 부위2
        	dsObj.setColumn(0, "FLATNESS11UM",			this.ds_productInfo.getColumn(0,"FLATNESS11UM"));			// 평탄도 부위3
        	dsObj.setColumn(0, "FLATNESS21",			this.ds_productInfo.getColumn(0,"FLATNESS21"));				// 평탄도 값1
        	dsObj.setColumn(0, "FLATNESS22",			this.ds_productInfo.getColumn(0,"FLATNESS22"));				// 평탄도 값2
        	dsObj.setColumn(0, "FLATNESS21UM",			this.ds_productInfo.getColumn(0,"FLATNESS21UM"));			// 평탄도 값3


        	//초기화(기본값 N으로 변경하기 위하여)
        	this.ds_productInfo.setColumn(0,"ASSY", this.nfn_nvl(this.ds_productInfo.getColumn(0,"ASSY"),"N"));
        	this.ds_productInfo.setColumn(0,"SEPARATINGPORTION", this.nfn_nvl(this.ds_productInfo.getColumn(0,"SEPARATINGPORTION"),"N"));
        	this.ds_productInfo.setColumn(0,"ULMARK", this.nfn_nvl(this.ds_productInfo.getColumn(0,"ULMARK"),"N"));
        	/* 1. 회로 및 드릴사양 *************************************************************************/

        	/* 2. MVH ****************************************************************************************/
        	dsCircuitSpec3.setColumn(0, "ELONGATIONCHECK1", 	this.fn_findDsValue(dsSource,"ELONGATIONCHECK1", 	"T"));	// 연신율 유/무-1
        	dsCircuitSpec3.setColumn(0, "ELONGATIONCHECK2", 	this.fn_findDsValue(dsSource,"ELONGATIONCHECK2", 	"T"));	// 연신율 유/무-2
        	dsCircuitSpec3.setColumn(0, "ELONGATIONCHECK3", 	this.fn_findDsValue(dsSource,"ELONGATIONCHECK3", 	"T"));	// 연신율 유/무-3
        	dsCircuitSpec3.setColumn(0, "ELONGATION_1", 		this.fn_findDsValue(dsSource,"ELONGATION-1", 		"F"));	// 연신율-1
        	dsCircuitSpec3.setColumn(0, "ELONGATION_2", 		this.fn_findDsValue(dsSource,"ELONGATION-2", 		"F"));	// 연신율-2
        	dsCircuitSpec3.setColumn(0, "ELONGATION_3", 		this.fn_findDsValue(dsSource,"ELONGATION-3", 		"F"));	// 연신율-3
        	dsCircuitSpec3.setColumn(0, "PITCHAFTER1", 			this.fn_findDsValue(dsSource,"PITCHAFTER1", 		"F"));	// 적용 전 PITCH-1
        	dsCircuitSpec3.setColumn(0, "PITCHAFTER2", 			this.fn_findDsValue(dsSource,"PITCHAFTER2", 		"F"));	// 적용 전 PITCH-2
        	dsCircuitSpec3.setColumn(0, "PITCHAFTER3", 			this.fn_findDsValue(dsSource,"PITCHAFTER3", 		"F"));	// 적용 전 PITCH-3
        	dsCircuitSpec3.setColumn(0, "PITCHBEFORE1", 		this.fn_findDsValue(dsSource,"PITCHBEFORE1", 		"F"));	// 적용 후 PITCH-1
        	dsCircuitSpec3.setColumn(0, "PITCHBEFORE2", 		this.fn_findDsValue(dsSource,"PITCHBEFORE2", 		"F"));	// 적용 후 PITCH-2
        	dsCircuitSpec3.setColumn(0, "PITCHBEFORE3", 		this.fn_findDsValue(dsSource,"PITCHBEFORE3", 		"F"));	// 적용 후 PITCH-3
        	/* 2. MVH ****************************************************************************************/

        	/* 3. 두께사양 **********************************************************************************/
        	this.fn_findDsValueCross();
        	/* 3. 두께사양 **********************************************************************************/

        	/* 4. 사양변경내용******************************************************************************/
        	dsComment.setColumn(0, "INPUTNUMAXIS1",		this.ds_productInfo.getColumn(0,"INPUTNUMAXIS1"));	//투입수축X
        	dsComment.setColumn(0, "INPUTNUMAXIS2",		this.ds_productInfo.getColumn(0,"INPUTNUMAXIS2"));	//투입수축Y
        	/* 4. 사양변경내용******************************************************************************/
        }

        /*
         * 2번째 탭의 도금사양 관련 데이터 바인드 함수
         */
        this.fn_bindData2 = function()
        {
        	var dsSource 		= this.ds_materialPlatingList;	//Product Item Spec Detail 정보	(도금사양)
        	var dsObj 			= this.ds_materialPlating;	//도금사양 화면 표시용 DS
        	dsObj.setColumn(0, "DETAILTYPE", "CopperPlating");

        	//15개 항목 무조건 고정
        	for (var  i = 1; i <= 15; i++){
        		var processsegmentId = dsSource.getColumn(i-1, "PROCESSSEGMENTID");
        		var description = dsSource.getColumn(i-1, "DESCRIPTION");

        		dsObj.setColumn(0, "SPECDETAILFROM"+i, 		dsSource.getColumn(i-1, "SPECDETAILFROM"));
        		dsObj.setColumn(0, "SPECDETAILTO"+i, 		dsSource.getColumn(i-1, "SPECDETAILTO"));
        		dsObj.setColumn(0, "FROMORIGINAL"+i, 		dsSource.getColumn(i-1, "FROMORIGINAL"));
        		dsObj.setColumn(0, "TOORIGINAL"+i, 			dsSource.getColumn(i-1, "TOORIGINAL"));
        		dsObj.setColumn(0, "DETAILNAME"+i, 			dsSource.getColumn(i-1, "DETAILNAME"));
        		dsObj.setColumn(0, "DESCRIPTION"+i, 		description);
        		dsObj.setColumn(0, "INSPITEMID"+i, 	processsegmentId);

        		//공정ID가 있는 경우 검사항목 데이터 조회
        		if(!this.nfn_isNull(processsegmentId)){
        			this.fn_bindInspItemData(processsegmentId, i);
        		}

        		//사용층 기본값 세팅 (입력값이 없는경우 기본값)
        		if(i==13 || i==14 || i==15){
        			if(this.nfn_isNull(dsSource.getColumn(i-1, "SPECDETAILFROM"))){
        				dsObj.setColumn(0, "SPECDETAILFROM"+i, 	"CS");
        			}
        			if(this.nfn_isNull(dsSource.getColumn(i-1, "SPECDETAILTO"))){
        				dsObj.setColumn(0, "SPECDETAILTO"+i, 	"SS");
        			}
        		}

        		dsObj.setColumn(0, "PROCESSSEGMENTID"+i, 	dsSource.getColumn(i-1, "PROCESSSEGMENTID"));
        	}
        }

        /*
         *	저장 전 1차원배열을 List로 변경하는 함수 (탭1)
         */
        this.fn_bindSaveData = function()
        {
        	var dsProductInfo 		= this.ds_productInfo;
        	var dsSpecDetailSave	= this.ds_itemSpecDetail_save;
        	var dsPlatingSave 		= this.ds_platingSpec_save;	//두께 저장용 DS
        	var dsCircuitSpec 		= this.ds_circuitSpec;		//회로 및 드릴 사양
        	var dsCircuitSpec3 		= this.ds_circuitSpec3;		//회로 및 드릴 사양
        	var dsComment			= this.ds_specComment;		//사양변경내용
        	/* 기본 값 복사 */
        	dsSpecDetailSave.clearData();

        	/* 1. 회로 및 드릴사양 *************************************************************************/
        	//BAS_PRODUCTITEMSPECDETAIL의 총 상세항목 갯수 28개
        	for(var i=1; i <=this.ds_specList.rowcount; i++){
        		var nRow 		= dsSpecDetailSave.addRow();
        		var detailName 	= this.ds_specList.getColumn(i-1,"CODE");

        		dsSpecDetailSave.setColumn(nRow, "ITEMID", 			dsProductInfo.getColumn(0, "ITEMID"));
        		dsSpecDetailSave.setColumn(nRow, "ITEMVERSION", 	dsProductInfo.getColumn(0, "ITEMVERSION"));
        		dsSpecDetailSave.setColumn(nRow, "SEQUENCE", 		i);
        		dsSpecDetailSave.setColumn(nRow, "DETAILNAME", 		detailName);

        		if( detailName.indexOf("PITCHAFTER")> -1
        		  ||detailName.indexOf("PITCHBEFORE")> -1
        		  ||detailName.indexOf("ELONGATION-")> -1
        		  ){
        			dsSpecDetailSave.setColumn(nRow, "DETAILNAME", 		detailName.replace("_","-")); //ELONGATION때문에 replace (dataset에는 -가 불가)
        			dsSpecDetailSave.setColumn(nRow, "SPECDETAILFROM", 	dsCircuitSpec3.getColumn(0,detailName.replace("-","_")));
        		} else if (detailName.indexOf("ELONGATIONCHECK")> -1){
        			dsSpecDetailSave.setColumn(nRow, "SPECDETAILTO", 	dsCircuitSpec3.getColumn(0,detailName));
        		} else {
        			dsSpecDetailSave.setColumn(nRow, "SPECDETAILFROM", 	dsCircuitSpec.getColumn(0,this.ds_specList.getColumn(i-1,"FROMOBJ")));
        			dsSpecDetailSave.setColumn(nRow, "SPECDETAILTO", 	dsCircuitSpec.getColumn(0,this.ds_specList.getColumn(i-1,"TOOBJ")));
        		}
        	}

        	// MVH(HOLE)
        	dsProductInfo.setColumn(0, "IMPEDANCE", 			dsCircuitSpec.getColumn(0,"IMPEDANCE"));				// 임피던스 유무
        	dsProductInfo.setColumn(0, "IMPEDANCESPEC1", 		dsCircuitSpec.getColumn(0,"IMPEDANCESPEC1"));			// 임피던스 SPEC1
        	dsProductInfo.setColumn(0, "IMPEDANCESPEC2", 		dsCircuitSpec.getColumn(0,"IMPEDANCESPEC2"));			// 임피던스 SPEC2
        	dsProductInfo.setColumn(0, "IMPEDANCESPEC3", 		dsCircuitSpec.getColumn(0,"IMPEDANCESPEC3"));			// 임피던스 SPEC3
        	dsProductInfo.setColumn(0, "IMPEDANCETYPE1", 		dsCircuitSpec.getColumn(0,"IMPEDANCETYPE1"));			// 임피던스 구분1
        	dsProductInfo.setColumn(0, "IMPEDANCETYPE2", 		dsCircuitSpec.getColumn(0,"IMPEDANCETYPE2"));			// 임피던스 구분2
        	dsProductInfo.setColumn(0, "IMPEDANCETYPE3", 		dsCircuitSpec.getColumn(0,"IMPEDANCETYPE3"));			// 임피던스 구분3
        	dsProductInfo.setColumn(0, "IMPEDANCEAPPLYLAYER1",	dsCircuitSpec.getColumn(0,"IMPEDANCEAPPLYLAYER1"));		// 임피던스 적용층1
        	dsProductInfo.setColumn(0, "IMPEDANCEAPPLYLAYER2",	dsCircuitSpec.getColumn(0,"IMPEDANCEAPPLYLAYER2"));		// 임피던스 적용층2
        	dsProductInfo.setColumn(0, "IMPEDANCEAPPLYLAYER3",	dsCircuitSpec.getColumn(0,"IMPEDANCEAPPLYLAYER3"));		// 임피던스 적용층3
        	dsProductInfo.setColumn(0, "FLATNESS11",			dsCircuitSpec.getColumn(0,"FLATNESS11"));				// 평탄도 부위1
        	dsProductInfo.setColumn(0, "FLATNESS12",			dsCircuitSpec.getColumn(0,"FLATNESS12"));				// 평탄도 부위2
        	dsProductInfo.setColumn(0, "FLATNESS11UM",			dsCircuitSpec.getColumn(0,"FLATNESS11UM"));				// 평탄도 부위3
        	dsProductInfo.setColumn(0, "FLATNESS21",			dsCircuitSpec.getColumn(0,"FLATNESS21"));				// 평탄도 값1
        	dsProductInfo.setColumn(0, "FLATNESS22",			dsCircuitSpec.getColumn(0,"FLATNESS22"));				// 평탄도 값2
        	dsProductInfo.setColumn(0, "FLATNESS21UM",			dsCircuitSpec.getColumn(0,"FLATNESS21UM"));				// 평탄도 값3

        	/* 1. 회로 및 드릴사양 *************************************************************************/

        	/* 3. 두께사양 **********************************************************************************/
        	this.fn_saveDsValueCross();
        	/* 3. 두께사양 **********************************************************************************/

        	/* 4. 사양변경내용******************************************************************************/
        	dsProductInfo.setColumn(0, "INPUTNUMAXIS1",		dsComment.getColumn(0,"INPUTNUMAXIS1"));	//투입수축X
        	dsProductInfo.setColumn(0, "INPUTNUMAXIS2",		dsComment.getColumn(0,"INPUTNUMAXIS2"));	//투입수축Y
        	/* 4. 사양변경내용******************************************************************************/
        }

        /*
         *	저장 전 1차원배열을 List로 변경하는 함수 (탭2)
         */
        this.fn_bindSaveData2 = function()
        {
        	var dsProductInfo 			= this.ds_productInfo;
        	var dsMaterialPlatingSave	= this.ds_materialPlatingList_save;
        	var dsMaterialPlating		= this.ds_materialPlating;

        	dsMaterialPlatingSave.clearData();
        	//trace(dsMaterialPlating.saveXML());
        	//도금사양 총 상세항목 갯수 15개
        	for(var i=1; i <=15; i++){
        		var nRow 		= dsMaterialPlatingSave.addRow();
        		var detailName 	= this.ds_specList2.getColumn(i-1,"CODE");
        		dsMaterialPlatingSave.setColumn(nRow, "DETAILTYPE", 		"CopperPlating");
        		dsMaterialPlatingSave.setColumn(nRow, "ITEMID", 			dsProductInfo.getColumn(0, "ITEMID"));
        		dsMaterialPlatingSave.setColumn(nRow, "ITEMVERSION", 		dsProductInfo.getColumn(0, "ITEMVERSION"));
        		dsMaterialPlatingSave.setColumn(nRow, "DESCRIPTION", 		dsMaterialPlating.getColumn(0,"DESCRIPTION"+i));
        		dsMaterialPlatingSave.setColumn(nRow, "DETAILNAME", 		detailName);
        		dsMaterialPlatingSave.setColumn(nRow, "ENTERPRISEID", 		this.nfn_nvl(this.tab_search.Tabpage1.form.cmb_enterpriseid.value, this.gf_getEnterpriseId()));
        		dsMaterialPlatingSave.setColumn(nRow, "FROMORIGINAL", 		dsMaterialPlating.getColumn(0,"FROMORIGINAL"+i));
        		dsMaterialPlatingSave.setColumn(nRow, "TOORIGINAL", 		dsMaterialPlating.getColumn(0,"TOORIGINAL"+i));
        		dsMaterialPlatingSave.setColumn(nRow, "SEQUENCE", 			i);
        		dsMaterialPlatingSave.setColumn(nRow, "PROCESSSEGMENTID", 	dsMaterialPlating.getColumn(0,"INSPITEMID"+i));
        		dsMaterialPlatingSave.setColumn(nRow, "SPECDETAILFROM", 	dsMaterialPlating.getColumn(0,"SPECDETAILFROM"+i));
        		dsMaterialPlatingSave.setColumn(nRow, "SPECDETAILTO", 		dsMaterialPlating.getColumn(0,"SPECDETAILTO"+i));
        	}
        }


        // 도금 공정 선택시 공정 상세값 조회 함수
        this.fn_bindInspItemData = function (inspItemId, row)
        {
        	this.g_InspIndex = row;
        	this.ds_segmentList.clearData();
        	var sSvcID 			= "selectinspItemList";
        	var sController 	= "/bas02000/GetPlatingTypeSegment.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_segmentList=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("RESOURCEID", 			this.ds_productInfo.getColumn(0, "ITEMID"));
        		sArgs 			+= this.gfn_setParam("RESOURCEVERSION", 	this.ds_productInfo.getColumn(0, "ITEMVERSION"));
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID", 	inspItemId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBackSegment", true, false);
        }

        // 도금 공정 선택시 공정 상세값 조회 함수 Callback
        this.fn_callBackSegment = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectinspItemList") {
        			var idx 	= this.g_InspIndex; //어떤 검사항목 것인지 Index...
        			var dsObj 	= this.ds_materialPlating;	//도금사양 화면 표시용 DS

        			if(this.ds_segmentList.rowcount==0){
        				this.fn_clearInspValue(idx);
        				return;
        			}

        			for(var i=0; i <this.ds_segmentList.rowcount; i++){
        				var inspItemName 	= this.ds_segmentList.getColumn(i, "INSPITEMNAME");
        				var lsl 			= this.ds_segmentList.getColumn(i, "LSL");
        				var sl 				= this.ds_segmentList.getColumn(i, "SL");
        				var usl 			= this.ds_segmentList.getColumn(i, "USL");
        				var inspItemId		= this.ds_segmentList.getColumn(i, "INSPITEMID");

        				//동도금두께 고정
        				if(i==0){
        					dsObj.setColumn(0, "INSPITEMNAME"+idx+"_1", 	inspItemName);
        					dsObj.setColumn(0, "LSL"+idx+"_1", 				lsl);
        					dsObj.setColumn(0, "SL"+idx+"_1", 				sl);
        					dsObj.setColumn(0, "USL"+idx+"_1", 				usl);
        				} else {
        					var newIdx = i+1;
        					if(inspItemId=="R0071"){ //홀내벽 - AS-IS:0257
        						newIdx = "2";
        					} else if(inspItemId=="R0072"){ //면동박- AS-IS:0258
        						newIdx = "3";
        					} else if(inspItemId=="R0073"){ //Dimple- AS-IS:0259
        						newIdx = "4";
        					} else if(inspItemId=="R0070"){ //Over fill- AS-IS:0256
        						newIdx = "5";
        					}

        					dsObj.setColumn(0, "INSPITEMNAME"+idx+"_"+newIdx, 	inspItemName);
        					dsObj.setColumn(0, "LSL"+idx+"_"+newIdx, 			lsl);
        					dsObj.setColumn(0, "SL"+idx+"_"+newIdx, 			sl);
        					dsObj.setColumn(0, "USL"+idx+"_"+newIdx, 			usl);

        				}
        			}
        		}
        	}
        }

        //도금별 관련 값 초기화 함수
        this.fn_clearInspValue = function (idx)
        {
        	var dsObj 	= this.ds_materialPlating;	//도금사양 화면 표시용 DS
        	if(idx=="2" || idx=="5" || idx=="8" || idx=="11"){	//내층
        		for(var i=1; i<6;i++){
        			dsObj.setColumn(0, "INSPITEMNAME"+idx+"_"+i, 	null);
        			dsObj.setColumn(0, "LSL"+idx+"_"+i, 			null);
        			dsObj.setColumn(0, "SL"+idx+"_"+i, 			null);
        			dsObj.setColumn(0, "USL"+idx+"_"+i, 			null);
        		}
        	} else if(idx=="13" || idx=="14" || idx=="15" ){ //표면도금
        		for(var i=1; i<4;i++){
        			dsObj.setColumn(0, "INSPITEMNAME"+idx+"_"+i, 	null);
        			dsObj.setColumn(0, "LSL"+idx+"_"+i, 			null);
        			dsObj.setColumn(0, "SL"+idx+"_"+i, 			null);
        			dsObj.setColumn(0, "USL"+idx+"_"+i, 			null);
        		}
        	} else {
        		dsObj.setColumn(0, "INSPITEMNAME"+idx+"_1", 	null);
        		dsObj.setColumn(0, "LSL"+idx+"_1", 				null);
        		dsObj.setColumn(0, "SL"+idx+"_1", 				null);
        		dsObj.setColumn(0, "USL"+idx+"_1", 				null);
        	}
        	dsObj.setColumn(0, "DESCRIPTION"+idx, 			null);
        	dsObj.setColumn(0, "INSPITEMID"+idx, 			null);
        }

        this.fn_findDsValue = function (obj, findKey, type)
        {
        	var fRow = obj.findRow("DETAILNAME", findKey);
        	var value = obj.getColumn(fRow, type=="F"? "SPECDETAILFROM" : "SPECDETAILTO");
        	return this.nfn_nvl(value, "");
        }

        this.fn_findDsValue2 = function (obj, findKey, type)
        {
        	var fRow = obj.findRow("DETAILNAME", findKey);
        	var value = obj.getColumn(fRow, type=="F"? "SPECDETAILFROM" : "SPECDETAILTO");
        	return this.nfn_nvl(value, "");
        }

        // CrossTable 값 찾기 함수 (2차원 -> 1차원)
        this.fn_findDsValueCross = function ()
        {
        	var dsPlating 	= this.ds_platingSpecList;	//두께
        	var obj			= this.ds_platingSpec;

        	for(var i=0; i<obj.rowcount; i++){
        		var thickNo 			= obj.getColumn(i, "THICKNO");
        		var thickPosition 		= obj.getColumn(i, "THICKPOSITION");
        		var thickSpec 			= obj.getColumn(i, "THICKSPEC");
        		var thickTheoretical 	= obj.getColumn(i, "THICKTHEORETICALVALUE");
        		var thickExperimental 	= obj.getColumn(i, "THICKEXPERIMENTALVALUE");

        		dsPlating.setColumn(0, "THICKNO"+thickNo, 					thickNo);
        		dsPlating.setColumn(0, "THICKPOSITION"+thickNo, 			thickPosition);
        		dsPlating.setColumn(0, "THICKSPEC"+thickNo, 				thickSpec);
        		dsPlating.setColumn(0, "THICKTHEORETICALVALUE"+thickNo, 	thickTheoretical);
        		dsPlating.setColumn(0, "THICKEXPERIMENTALVALUE"+thickNo, 	thickExperimental);
        	}
        }

        // 두께정보 CrossTable 함수 (1차원 -> 2차원)
        this.fn_saveDsValueCross = function ()
        {
        	var dsProductInfo	= this.ds_productInfo;
        	var dsPlating 		= this.ds_platingSpecList;	//두께
        	var obj				= this.ds_platingSpec_save;

        	obj.clearData();

        	for(var i=1; i<6; i++){
        		var nRow = obj.addRow();
        		obj.setColumn(nRow, "ITEMID", 		dsProductInfo.getColumn(0, "ITEMID"));
        		obj.setColumn(nRow, "ITEMVERSION", 	dsProductInfo.getColumn(0, "ITEMVERSION"));

        		var thickNo 			= this.nfn_nvl(dsPlating.getColumn(0, "THICKNO"+i), i);
        		var thickPosition 		= dsPlating.getColumn(0, "THICKPOSITION"+i);
        		var thickSpec 			= dsPlating.getColumn(0, "THICKSPEC"+i);
        		var thickTheoretical 	= dsPlating.getColumn(0, "THICKTHEORETICALVALUE"+i);
        		var thickExperimental 	= dsPlating.getColumn(0, "THICKEXPERIMENTALVALUE"+i);

        		obj.setColumn(nRow, "THICKNO", 					thickNo);
        		obj.setColumn(nRow, "THICKPOSITION", 			thickPosition);
        		obj.setColumn(nRow, "THICKSPEC", 				thickSpec);
        		obj.setColumn(nRow, "THICKTHEORETICALVALUE", 	thickTheoretical);
        		obj.setColumn(nRow, "THICKEXPERIMENTALVALUE", 	thickExperimental);
        	}
        }

        // 저장 유효성 검사 함수
        this.fn_saveValidation = function (objGrid, objData, strColIdList, strColNmList)
        {
        	var arrColId = strColIdList.split(",");
        	var arrColNm = strColNmList.split(",");
        	for(var i=0; i < objData.rowcount; i++) {
        		for(var j=0; j < arrColId.length; j++) {
        			var checkValue = objData.getColumn(i, arrColId[j]);
        			if(this.nfn_isNull(checkValue)){
        				this.gfn_Message("InputSomeThing",arrColNm[j] , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        				var colId = this.nfn_GetColNum(objGrid, arrColId[j]);
        				objData.set_rowposition(i);
        				objGrid.setFocus();
        				objGrid.setCellPos(colId);
        				objGrid.showEditor(true);
        				return false;
        			}
        		}
        	}
        	return true;
        }

        /*
         *	제품정보 조회 여부 체크 함수
         */
        this.fn_checkProduct = function()
        {
        	var itemId = this.ds_productInfo.getColumn(0, "ITEMID");
        	if(this.nfn_isNull(itemId)){
        		this.gfn_Message("InputProudctInfo", null, "info", "ok");
        		return false;
        	} else {
        		return true;
        	}
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_searchItem_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00043"); //품목 조회
        }

        this.tab_search_Tabpage1_edt_item_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_searchItem_onclick();
        	}
        }

        this.div_work_tab_Tabpage1_grd_productInfo_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "SPECPERSONNAME")) {	// 사양담당자
        		this.fn_openPop("FRM_SPEC_OWNER","P00062");
        	} else if (this.nfn_isEqualCol(obj, e.cell, "CAMOWNERNAME")) {	// CAM담당자
        		this.fn_openPop("FRM_CAM_OWNER","P00062");
        	} else if (this.nfn_isEqualCol(obj, e.cell, "SALESOWNERNAME")) {	// 영업담당자
        		this.fn_openPop("FRM_SALES_OWNER","P00062");
        	}
        }

        // 탭1 : 제조 그리드 제조처 팝업 이벤트
        this.div_work_tab_Tabpage1_grd_etcInfo01_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "MFG_CATEGORY_NAME")) {	// 제조 Application
        		this.fn_openPop("MFGAPPLICATION","P00186");
        	}
        }

        // SIZE 입력값 변경시 재계산 함수
        this.ds_productInfo_onvaluechanged = function(obj,e)
        {
        	if(e.columnid=="PNLSIZEXAXIS"
        	|| e.columnid=="PNLSIZEYAXIS"
        	|| e.columnid=="PCSPNL"){
        		this.fn_calcValue("A");
        	}

        	if(e.columnid=="PCSARY"
        	|| e.columnid=="XOUT"){
        		this.fn_calcValue("B");
        	}
        }

        /*
         * 자동 계산 함수
         * type : A	: PNL/mm , PCS/mm 계산
                  B : X-OUT Percent 계산
        		  C : 연신율 관련 계산
        		  D : Annula-ring
        		  E : Aspect Ratio
         */
        this.fn_calcValue = function(type, calcRow){
        	var findKey		= this.ds_productInfo.getColumn(0, "PNLSIZEXAXIS");
        	var fRow 		= this.ds_pnlSizeX.findRow("CODE", findKey);
        	var pnlSizeX 	= nexacro.toNumber(this.nfn_nvl(this.ds_pnlSizeX.getColumn(fRow, "ATTRIBUTE1"),"0"));
        	var pnlSizeY 	= nexacro.toNumber(this.nfn_nvl(this.ds_productInfo.getColumn(0, "PNLSIZEYAXIS"),"0"));
        	var pcsPnl	 	= nexacro.toNumber(this.nfn_nvl(this.ds_productInfo.getColumn(0, "PCSPNL"),"0"));
        	var pcsary 		= this.nfn_nvl(this.ds_productInfo.getColumn(0, "PCSARY"),"0");
        	var xout 		= this.nfn_nvl(this.ds_productInfo.getColumn(0, "XOUT"),"0");
        	var xoutPercent	= null;
        	var pnl 		= 0;
        	var pcs 		= 0;

        	//1. PNL/mm , PCS/mm 계산
        	if(type=="A"){
        		if(pnlSizeX=="250"){
        			pnl = nexacro.floor(nexacro.floor(50 / (pnlSizeY / 1000 )) * 2 / 25);
        			pcs = nexacro.floor((nexacro.floor(50 / (pnlSizeY / 1000 )) * 2 / 25) * pcsPnl);
        		} else if(pnlSizeX=="500"){
        			pnl = nexacro.floor(nexacro.floor(50 / (pnlSizeY / 1000 )) / 25);
        			pcs = nexacro.floor((nexacro.floor(50 / (pnlSizeY / 1000 )) / 25) * pcsPnl);
        		}
        		//trace("pnlSizeX:"+pnlSizeX+" pnlSizeY:"+pnlSizeY + "   pnl:"+pnl +"    pcs:"+pcs);
        		this.ds_productInfo.setColumn(0, "PNLMM", nexacro.floor(pnl));
        		this.ds_productInfo.setColumn(0, "PCSMM", nexacro.floor(pcs));
        	}

        	//2. X-OUT Percent 계산
        	if(type=="B"){
        		if(pcsary=="-")pcsary = "-1";
        		if(xout=="-")xout = "-1";

        		if(xout =="0"){
        			xoutPercent = "";
        		} else {
        			xoutPercent = nexacro.round((nexacro.toNumber(xout) / nexacro.toNumber(pcsary) * 100),2);
        		}

        		this.ds_productInfo.setColumn(0, "XOUTPERCENT", xoutPercent);
        	}

        	//3. 연신율 관련 계산
        	if(type=="C"){
        		var dsCircuit 	= this.ds_circuitSpec3;
        		var afterValue 	= "";
        		var after1   	= "";
        		var after2   	= "";
        		var elongation  = this.nfn_nvl(dsCircuit.getColumn(0, "ELONGATION_"+calcRow),"0");
        		var pitchBefore = this.nfn_nvl(dsCircuit.getColumn(0, "PITCHBEFORE"+calcRow),"0");

        		if(elongation=="-")elongation = "-1";
        		if(pitchBefore=="-")pitchBefore = "-1";

        		after1 		= nexacro.round(nexacro.toNumber(elongation) * nexacro.toNumber(pitchBefore) * 10);
        		afterValue 	= nexacro.floor(nexacro.toNumber(pitchBefore)+(after1*0.001),4);
        		after2		= nexacro.round(afterValue / nexacro.toNumber(pitchBefore) * 100,2);

        		dsCircuit.setColumn(0, "PITCHAFTER"+calcRow, 		afterValue);
        		dsCircuit.setColumn(0, "ELONGATION"+calcRow+"_1", 	after1);
        		dsCircuit.setColumn(0, "ELONGATION"+calcRow+"_2", 	after2);
        	}

        	//4. Annula-ring
        	if(type=="D"){
        		var dsMvh 	= this.ds_mvh;
        		var laserSize  	= this.nfn_nvl(dsMvh.getColumn(calcRow, "LASERSIZE"),"0");
        		var landSize 	= this.nfn_nvl(dsMvh.getColumn(calcRow, "LANDSIZE"),"0");
        		var annulaRing	= "";

        		if(laserSize=="-")laserSize = "-1";
        		if(landSize=="-")landSize = "-1";
        		annulaRing 		= nexacro.floor((nexacro.toNumber(landSize) - nexacro.toNumber(laserSize)) / 2, 4);
        		dsMvh.setColumn(calcRow, "ANNULARING", 	annulaRing);
        	}

        	//5. Aspect Ratio
        	if(type=="E"){
        		var dsMvh 			= this.ds_mvh;
        		var laserSize  		= this.nfn_nvl(dsMvh.getColumn(calcRow, "LASERSIZE"),"0");
        		var formingDepth	= this.nfn_nvl(dsMvh.getColumn(calcRow, "FORMINGDEPTH"),"0");
        		var aspectRatio		= "";

        		if(laserSize=="-")laserSize = "-1";
        		if(formingDepth=="-")formingDepth = "-1";
        		aspectRatio 		= nexacro.floor((nexacro.toNumber(formingDepth) * 100 / (nexacro.toNumber(laserSize)*1000)),1);
        		dsMvh.setColumn(calcRow, "ASPECTRATIO", 	aspectRatio);
        	}
        }


        this.div_work_tab_Tabpage1_grd_productSpec_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_work_tab_Tabpage1_grd_productInfo_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_work_tab_Tabpage1_grd_circuitSpec1_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_work_tab_Tabpage1_grd_circuitSpec2_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_work_tab_Tabpage1_grd_circuitSpec3_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_work_tab_Tabpage1_grd_etcInfo00_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        };

        /*
         *  연신율 관련 값 변경 이벤트
         */
        this.ds_circuitSpec3_onvaluechanged = function(obj,e)
        {
        	var colId = e.columnid;
        	var checkNo = colId.substring(colId.length-1, colId.length);

        	if(colId.indexOf("ELONGATIONCHECK")>-1){
        		if(e.newvalue=="N"){	//연신율 사용여부가 N이면 입력값 초기화
        			obj.setColumn(e.row, "ELONGATION_"+checkNo, "");
        			obj.setColumn(e.row, "PITCHBEFORE"+checkNo, "");
        			obj.setColumn(e.row, "PITCHAFTER"+checkNo, "");
        			obj.setColumn(e.row, "ELONGATION"+checkNo+"_1", "");
        			obj.setColumn(e.row, "ELONGATION"+checkNo+"_2", "");
        		} else {	//연신율 사용여부가 Y이면 계산
        			this.fn_calcValue("C",checkNo);
        		}
        	}

        	if(colId.indexOf("ELONGATION")>-1
        	|| colId.indexOf("PITCHBEFORE")>-1 ){
        		this.fn_calcValue("C",checkNo);
        	}
        };


        // MVH 입력값 변경시 재계산 함수
        this.ds_mvh_onvaluechanged = function(obj,e)
        {
        	var colId = e.columnid;
        	if(colId=="LASERSIZE"|| colId=="LANDSIZE"){
        			this.fn_calcValue("D",e.row);
        	}

        	if(colId=="LASERSIZE"|| colId=="FORMINGDEPTH"){
        			this.fn_calcValue("E",e.row);
        	}
        };

        //탭2 도금 공정 팝업이벤트
        this.fn_openInspect = function(obj,e)
        {
        	var objId = obj.id.replace("btn_","");
        	var chkObj = this.ds_materialPlating;
        	var chkValue = "Y";

        	//2번째 공정 선택전에 1번째 공정 입력여부 체크
        	if(objId=="process3"){
        		chkValue = chkObj.getColumn(0, "INSPITEMID2");
        	} else if(objId=="process6"){
        		chkValue = chkObj.getColumn(0, "INSPITEMID5");
        	} else if(objId=="process9"){
        		chkValue = chkObj.getColumn(0, "INSPITEMID8");
        	} else if(objId=="process12"){
        		chkValue = chkObj.getColumn(0, "INSPITEMID11");
        	}

        	if(this.nfn_isNull(chkValue)){
        		this.gfn_Message("REQUIREDFIRSTPLATING", null, "info", "ok");
        		return;
        	}


        	this.fn_openPop(objId,"P00192");
        }

        //탭2 : 잉크 그리드 행추가
        this.fn_addInk = function(obj,e)
        {
        	if(!this.fn_checkProduct()) {return}
        	var dsProductInfo 	= this.ds_productInfo;
        	var nRow 			= this.ds_ink.addRow();
        	var maxSeq 			= this.nfn_nvl(this.ds_ink.getMax("SEQUENCE1"),0);

        	this.ds_ink.setColumn(nRow, "ITEMID", 			dsProductInfo.getColumn(0, "ITEMID"));
        	this.ds_ink.setColumn(nRow, "ITEMVERSION", 		dsProductInfo.getColumn(0, "ITEMVERSION"));
        	this.ds_ink.setColumn(nRow, "SEQUENCE1", maxSeq + 1);
        };

        //탭2 : 잉크 그리드 행삭제
        this.fn_deleteInk = function(obj,e)
        {
        	if(!this.fn_checkProduct()) {return}
        	this.ds_ink.deleteRow(this.ds_ink.rowposition);
        };

        //탭3 : 치공구 그리드 행추가
        this.fn_addDetail = function(obj,e)
        {
        	if(!this.fn_checkProduct()) {return}
        	var objId 				= obj.id.replace("btn_customaddRow_","");
        	var dsObj 				= this.objects["ds_"+objId];
        	if(dsObj==null)return;
        	var nRow 				= dsObj.addRow();
        };

        //탭3 : 치공구 그리드 행삭제
        this.fn_delDetail = function(obj,e)
        {
        	var objId 				= obj.id.replace("btn_customdelRow_","");
        	var dsObj 				= this.objects["ds_"+objId];
        	if(dsObj==null)return;
        	var rowposition			= dsObj.rowposition;

        	if(rowposition < 0 ){
        		this.gfn_Message("CHECKREMOVETOOLDATA", "", "warning", "ok");
        		return;
        	}
        	dsObj.deleteRow(rowposition);
        };

        //목형,금형 치공구 조회 이벤트
        this.div_work_tab_Tabpage3_grd_etc1_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "PRODUCTDEFID")) {
        		this.fn_openPop("FRM_ITEM1","P00201");
        	}
        };

        //BBT, JIG 치공구 조회 이벤트
        this.div_work_tab_Tabpage3_grd_etc2_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "PRODUCTDEFID")) {
        		this.fn_openPop("FRM_ITEM2","P00201");
        	}
        };

        //기타 치공구 조회 이벤트
        this.div_work_tab_Tabpage3_grd_etc3_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "PRODUCTDEFID")) {
        		this.fn_openPop("FRM_ITEM3","P00201");
        	}
        };

        this.div_work_tab_Tabpage3_grd_etc3_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        	if(e.col==4){
        		var toolForm = this.ds_etc3.getColumn(e.row, "TOOLFORM");
        		this.ds_toolType.filter("TOOLFORM=='ToolKindE"+toolForm+"'");
        	}
        	if(e.col==5){
        		this.ds_toolType.filter(null);
        	}
        };

        //기타 치공구 TOOL형식 변경 이벤트
        this.div_work_tab_Tabpage3_grd_etc3_ondropdown = function(obj,e)
        {
        	if(e.col==5){
        		var toolForm = this.ds_etc3.getColumn(e.row, "TOOLFORM");
        		this.ds_toolType.filter("TOOLFORM=='ToolKindE"+toolForm+"'");
        	}
        };

        //도금 공정값 변경 이벤트
        this.ds_materialPlating_onvaluechanged = function(obj,e)
        {
        	var objId = e.columnid.replace("DESCRIPTION","");
        	if(e.columnid.indexOf("DESCRIPTION")>-1){
        		if(this.nfn_isNull(e.newvalue)){
        			this.fn_bindInspItemData("Empty", objId);
        		}
        	}
        };

        this.fn_attach = function(obj,e)
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cmb_enterpriseid,edt_item";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("ENTERPRISE_ID"),"회사")+","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"품목코드");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}

        	var	itemId 			= this.searchDiv.edt_item_id.value;
        	var	itemRev			= this.searchDiv.edt_item_cd.value;
        	var enterpriseId	= this.searchDiv.cmb_enterpriseid.value;
        	var srcKey 			= enterpriseId
        						+ "|" + itemId
        						+ "|" + itemRev;

        	var jobSysCd = "BAS"; 					//업무구분코드 CMD,BAS....
        	var subDir = "itemSpec"; 				//세부업무약어
        	var resouceid = srcKey;					//테이블의 키 값 //RESOURCEID
        	var resourcetype = "BAS_PRODUCTDEFINITION"; 	//테이블명
        	var comments = "품목사양"; 		//파일설명
        	var fileCnt = 1; 					//업로드수
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt};
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
        };

        this.fn_printCard = function(obj,e)
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_item";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"품목코드");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}

        	var	itemId 			= this.searchDiv.edt_item_id.value;
        	var	itemRev			= this.searchDiv.edt_item_cd.value;
        	var enterpriseId	= this.searchDiv.cmb_enterpriseid.value;
        	var title			= this.nfn_nvl(this.nfn_getDictionarynameUpper("PRINTSPECCARD"),"이력카드");

        	var oArg = {
        		sRptPath   : "/bas/",
        		sRptName   : "BAS02000R.mrd",
        		strField   :   "[" + enterpriseId
        					+ "][" + itemId
        					+ "][" + itemRev
        					+ "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        this.div_work_tab_Tabpage3_grd_etc1_ondropdown = function(obj,e)
        {
        	if(e.col==5){
        		var toolForm = this.ds_etc1.getColumn(e.row, "TOOLFORM");
        		this.ds_toolTypeMWDetail.filter("TOOLFORM=='ToolKindM"+toolForm+"' || TOOLFORM=='ToolKindW"+toolForm+"'");
        	}
        };

        this.div_work_tab_Tabpage3_grd_etc1_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        	if(e.col==4){
        		var toolForm = this.ds_etc1.getColumn(e.row, "TOOLFORM");
        		this.ds_toolTypeMWDetail.filter("TOOLFORM=='ToolKindM"+toolForm+"' || TOOLFORM=='ToolKindW"+toolForm+"'");
        	}
        	if(e.col==5){
        		this.ds_toolTypeMWDetail.filter(null);
        	}
        };

        this.div_work_tab_Tabpage3_grd_etc2_ondropdown = function(obj,e)
        {
        	if(e.col==5){
        		var toolForm = this.ds_etc2.getColumn(e.row, "TOOLFORM");
        		this.ds_toolTypeBJDetail.filter("TOOLFORM=='ToolKindB"+toolForm+"' || TOOLFORM=='ToolKindJ"+toolForm+"'");
        	}
        };

        this.div_work_tab_Tabpage3_grd_etc2_oncloseup = function(obj,e)
        {
        	obj.updateToDataset();
        	if(e.col==4){
        		var toolForm = this.ds_etc2.getColumn(e.row, "TOOLFORM");
        		this.ds_toolTypeBJDetail.filter("TOOLFORM=='ToolKindB"+toolForm+"' || TOOLFORM=='ToolKindJ"+toolForm+"'");
        	}
        	if(e.col==5){
        		this.ds_toolTypeBJDetail.filter(null);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_work.form.tab.Tabpage1.form.grd_productInfo.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_productInfo_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_productInfo.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productInfo_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_productSpec.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productSpec_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_circuitSpec1.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_circuitSpec1_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_circuitSpec3.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_circuitSpec3_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_circuitSpec2.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_circuitSpec2_oncloseup,this);
            this.div_work.form.tab.Tabpage1.form.grd_etcInfo01.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_etcInfo01_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grd_specComment.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_etcInfo00_oncloseup,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process2.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process3.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process13.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process14.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process15.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.cbo_cbplating1_4.addEventHandler("onitemchanged",this.div_work_tab_Tabpage2_div_detail_cbo_cbplating1_4_onitemchanged,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process5.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process6.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process8.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process9.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process11.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.div_detail.form.btn_process12.addEventHandler("onclick",this.fn_openInspect,this);
            this.div_work.form.tab.Tabpage2.form.btn_delRow.addEventHandler("onclick",this.fn_deleteInk,this);
            this.div_work.form.tab.Tabpage2.form.btn_addRow.addEventHandler("onclick",this.fn_addInk,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc1.addEventHandler("onexpandup",this.div_work_tab_Tabpage3_grd_etc1_onexpandup,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc1.addEventHandler("ondropdown",this.div_work_tab_Tabpage3_grd_etc1_ondropdown,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc1.addEventHandler("oncloseup",this.div_work_tab_Tabpage3_grd_etc1_oncloseup,this);
            this.div_work.form.tab.Tabpage3.form.btn_customdelRow_etc1.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc2.addEventHandler("onexpandup",this.div_work_tab_Tabpage3_grd_etc2_onexpandup,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc2.addEventHandler("ondropdown",this.div_work_tab_Tabpage3_grd_etc2_ondropdown,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc2.addEventHandler("oncloseup",this.div_work_tab_Tabpage3_grd_etc2_oncloseup,this);
            this.div_work.form.tab.Tabpage3.form.btn_customaddRow_etc1.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc3.addEventHandler("onexpandup",this.div_work_tab_Tabpage3_grd_etc3_onexpandup,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc3.addEventHandler("oncloseup",this.div_work_tab_Tabpage3_grd_etc3_oncloseup,this);
            this.div_work.form.tab.Tabpage3.form.grd_etc3.addEventHandler("ondropdown",this.div_work_tab_Tabpage3_grd_etc3_ondropdown,this);
            this.div_work.form.tab.Tabpage3.form.btn_customdelRow_etc2.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab.Tabpage3.form.btn_customaddRow_etc2.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_work.form.tab.Tabpage3.form.btn_customdelRow_etc3.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab.Tabpage3.form.btn_customaddRow_etc3.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_header.form.btn_save2.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_attach.addEventHandler("onclick",this.fn_attach,this);
            this.div_header.form.btn_printCard.addEventHandler("onclick",this.fn_printCard,this);
            this.tab_search.Tabpage1.form.edt_item.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_item_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btn_searchItem_onclick,this);
            this.tab_search.Tabpage1.form.btn_clearCustom.addEventHandler("onclick",this.fn_searchClearCustom,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.edt_item_id.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_item_onkeydown,this);
            this.tab_search.Tabpage1.form.edt_item_cd.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_item_onkeydown,this);
            this.ds_productInfo.addEventHandler("onvaluechanged",this.ds_productInfo_onvaluechanged,this);
            this.ds_mvh.addEventHandler("onvaluechanged",this.ds_mvh_onvaluechanged,this);
            this.ds_circuitSpec3.addEventHandler("onvaluechanged",this.ds_circuitSpec3_onvaluechanged,this);
            this.ds_materialPlating.addEventHandler("onvaluechanged",this.ds_materialPlating_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS02000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
