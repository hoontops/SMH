(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02700M");
            this.set_titletext("품목조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1590,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMREV\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"OXIDE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSY\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLATINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERPLATINGTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCEPTFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYDIAGONAL\" type=\"STRING\" size=\"256\"/><Column id=\"ARYSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSY\" type=\"STRING\" size=\"256\"/><Column id=\"CAMMAN\" type=\"STRING\" size=\"256\"/><Column id=\"CAMMANID\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_CUSTOMER_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_CUSTOMER_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_CUSTOMER_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_CUSTOMER_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_CUSTOMER_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_CUSTOMER_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_CUSTOMER_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_CUSTOMER_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION2\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATIONCHECK1\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATIONCHECK2\" type=\"STRING\" size=\"256\"/><Column id=\"ENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"ENDUSERID\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS11\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS11UM\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS12\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS21\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS21UM\" type=\"STRING\" size=\"256\"/><Column id=\"FLATNESS22\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCEAPPLYLAYER3\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCESPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCETYPE3\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCIRCUIT_GAP\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCIRCUIT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSHRINKX\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSHRINKY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INVALIDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"IVH_HOLE\" type=\"STRING\" size=\"256\"/><Column id=\"IVH_LAND\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"MVH_HOLE\" type=\"STRING\" size=\"256\"/><Column id=\"MVH_LAND\" type=\"STRING\" size=\"256\"/><Column id=\"OLBCIRCUIT_GAP\" type=\"STRING\" size=\"256\"/><Column id=\"OLBCIRCUIT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDFORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCIRCUIT_GAP\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCIRCUIT_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"OXIDE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSARY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHBEFORE1\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHBEFORE2\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLMM\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PTH_HOLE\" type=\"STRING\" size=\"256\"/><Column id=\"PTH_LAND\" type=\"STRING\" size=\"256\"/><Column id=\"REGISTRATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SALESMAN\" type=\"STRING\" size=\"256\"/><Column id=\"SALESMANID\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATINGPORTION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONMAN\" type=\"STRING\" size=\"256\"/><Column id=\"SPECPERSON\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AREA1_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AREA1_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AREA2_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AREA2_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AREA1_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AREA1_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AREA2_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AREA2_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AREA1_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AREA1_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AREA2_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AREA2_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_SEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"ULMARK\" type=\"STRING\" size=\"256\"/><Column id=\"XOUT\" type=\"STRING\" size=\"256\"/><Column id=\"XOUTPERCENT\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_PLATINGCONDITION_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_PLATINGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_PLATINGCONDITION_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_HOLEINSIDEWALL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_HOLEINSIDEWALL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_PLANECUFOIL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_PLANECUFOIL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_DIMPLE_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_DIMPLE_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_OVERFILL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_OVERFILL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_PLATINGCONDITION_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_PLATINGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_PLATINGCONDITION_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_HOLEINSIDEWALL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_HOLEINSIDEWALL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_PLANECUFOIL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_PLANECUFOIL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_DIMPLE_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_DIMPLE_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_OVERFILL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_OVERFILL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_PLATINGCONDITION_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_PLATINGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_PLATINGCONDITION_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_HOLEINSIDEWALL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_HOLEINSIDEWALL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_PLANECUFOIL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_PLANECUFOIL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_DIMPLE_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_DIMPLE_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_OVERFILL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_OVERFILL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_PLATINGCONDITION_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_PLATINGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_PLATINGCONDITION_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_HOLEINSIDEWALL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_HOLEINSIDEWALL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_PLANECUFOIL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_PLANECUFOIL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_DIMPLE_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_DIMPLE_USL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_OVERFILL_LSL\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_OVERFILL_USL\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_SPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_NI_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_NI_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_NI_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_NI_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_SPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AU_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AU_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AU_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AU_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_SPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_PD_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_PD_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_PD_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_PD_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_SPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_NI_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_NI_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_NI_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_NI_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_SPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AU_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AU_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AU_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AU_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_SPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_PD_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_PD_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_PD_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_PD_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_SPEC1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_NI_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_NI_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_NI_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_NI_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_SPEC2\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AU_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AU_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AU_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AU_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_SPEC3\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_PD_LOWER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_PD_LOWER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_PD_UPPER_CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_PD_UPPER_TEMP\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHAFTER1\" type=\"STRING\" size=\"256\"/><Column id=\"DATA1\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEVALUE1\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHAFTER2\" type=\"STRING\" size=\"256\"/><Column id=\"DATA2\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEVALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_NI_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_NI_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AU_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_AU_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_PD_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_PD_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_NI_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_NI_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AU_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_AU_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_PD_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_PD_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_NI_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_NI_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AU_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_AU_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_PD_LOWER\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_PD_UPPER\" type=\"STRING\" size=\"256\"/><Column id=\"JOBINPUTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","111","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("품목조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","80","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("ITEM");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_reqList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"38\"/><Cell col=\"39\" colspan=\"2\" text=\"내층회로\"/><Cell col=\"41\" colspan=\"2\" text=\"외층회로\"/><Cell col=\"43\" colspan=\"2\" text=\"OLB회로\"/><Cell col=\"45\" colspan=\"2\" text=\"MVH\"/><Cell col=\"47\" colspan=\"2\" text=\"IVH\"/><Cell col=\"49\" colspan=\"2\" text=\"PTH\"/><Cell col=\"51\" colspan=\"16\" text=\"외층동도금\"/><Cell col=\"67\" colspan=\"16\" text=\"내층동도금1\"/><Cell col=\"83\" colspan=\"16\" text=\"내층동도금2\"/><Cell col=\"99\" colspan=\"16\" text=\"내층동도금3\"/><Cell col=\"115\" colspan=\"12\" text=\"표면도금1\"/><Cell col=\"127\" colspan=\"12\" text=\"표면도금2\"/><Cell col=\"139\" colspan=\"12\" text=\"표면도금3\"/><Cell col=\"151\" colspan=\"5\" text=\"임피던스1\"/><Cell col=\"156\" colspan=\"5\" text=\"임피던스2\"/><Cell col=\"161\" colspan=\"5\" text=\"임피던스3\"/><Cell col=\"166\" colspan=\"6\" text=\"연신율-1\"/><Cell col=\"172\" colspan=\"6\" text=\"연신율-2\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"SITE\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\"/><Cell row=\"1\" col=\"3\" text=\"Rev\"/><Cell row=\"1\" col=\"4\" text=\"품목명\"/><Cell row=\"1\" col=\"5\" text=\"제품Type\"/><Cell row=\"1\" col=\"6\" text=\"층수\"/><Cell row=\"1\" col=\"7\" text=\"고객코드/고객명\"/><Cell row=\"1\" col=\"8\" text=\"고객사 Rev.\"/><Cell row=\"1\" col=\"9\" text=\"제품등급\"/><Cell row=\"1\" col=\"10\" text=\"작업구분\"/><Cell row=\"1\" col=\"11\" text=\"생산구분\"/><Cell row=\"1\" col=\"12\" text=\"사양담당\"/><Cell row=\"1\" col=\"13\" text=\"영업담당\"/><Cell row=\"1\" col=\"14\" text=\"판매범주\"/><Cell row=\"1\" col=\"15\" text=\"신규DATA접수\"/><Cell row=\"1\" col=\"16\" text=\"투입유형\"/><Cell row=\"1\" col=\"17\" text=\"PCS SIZE\"/><Cell row=\"1\" col=\"18\" text=\"ARY SIZE\"/><Cell row=\"1\" col=\"19\" text=\"PNL SIZE\"/><Cell row=\"1\" col=\"20\" text=\"PCS/PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS/MM\"/><Cell row=\"1\" col=\"22\" text=\"PNL/MM\"/><Cell row=\"1\" col=\"23\" text=\"PCS/ARY\"/><Cell row=\"1\" col=\"24\" text=\"ARY대각선길이\"/><Cell row=\"1\" col=\"25\" text=\"RTR/SHT\"/><Cell row=\"1\" col=\"26\" text=\"주차관리\"/><Cell row=\"1\" col=\"27\" text=\"OXIDE\"/><Cell row=\"1\" col=\"28\" text=\"분리부\"/><Cell row=\"1\" col=\"29\" text=\"ASSY\"/><Cell row=\"1\" col=\"30\" text=\"ULMARK\"/><Cell row=\"1\" col=\"31\" text=\"임피던스\"/><Cell row=\"1\" col=\"32\" text=\"등록일\"/><Cell row=\"1\" col=\"33\" text=\"무효화일자\"/><Cell row=\"1\" col=\"34\" text=\"CAM담당\"/><Cell row=\"1\" col=\"35\" text=\"ENDUSER\"/><Cell row=\"1\" col=\"36\" text=\"투입SIZE X축\"/><Cell row=\"1\" col=\"37\" text=\"투입수축 X축\"/><Cell row=\"1\" col=\"38\" text=\"투입수축 Y축\"/><Cell row=\"1\" col=\"39\" text=\"폭\"/><Cell row=\"1\" col=\"40\" text=\"간격\"/><Cell row=\"1\" col=\"41\" text=\"폭\"/><Cell row=\"1\" col=\"42\" text=\"간격\"/><Cell row=\"1\" col=\"43\" text=\"폭\"/><Cell row=\"1\" col=\"44\" text=\"간격\"/><Cell row=\"1\" col=\"45\" text=\"LAND\"/><Cell row=\"1\" col=\"46\" text=\"HOLE\"/><Cell row=\"1\" col=\"47\" text=\"LAND\"/><Cell row=\"1\" col=\"48\" text=\"HOLE\"/><Cell row=\"1\" col=\"49\" text=\"LAND\"/><Cell row=\"1\" col=\"50\" text=\"HOLE\"/><Cell row=\"1\" col=\"51\" text=\"공정ID\"/><Cell row=\"1\" col=\"52\" text=\"공정명\"/><Cell row=\"1\" col=\"53\" text=\"고객기준 하한값\"/><Cell row=\"1\" col=\"54\" text=\"고객기준값\"/><Cell row=\"1\" col=\"55\" text=\"고객기준 상한값\"/><Cell row=\"1\" col=\"56\" text=\"도금기준 하한값\"/><Cell row=\"1\" col=\"57\" text=\"도금기준값\"/><Cell row=\"1\" col=\"58\" text=\"도금기준 상한값\"/><Cell row=\"1\" col=\"59\" text=\"홀내벽 하한\"/><Cell row=\"1\" col=\"60\" text=\"홀내벽 상한\"/><Cell row=\"1\" col=\"61\" text=\"면동박 하한\"/><Cell row=\"1\" col=\"62\" text=\"면동박 상한\"/><Cell row=\"1\" col=\"63\" text=\"Dimple 하한\"/><Cell row=\"1\" col=\"64\" text=\"Dimple 상한\"/><Cell row=\"1\" col=\"65\" text=\"Over fill 하한\"/><Cell row=\"1\" col=\"66\" text=\"Over fill 상한\"/><Cell row=\"1\" col=\"67\" text=\"공정ID1\"/><Cell row=\"1\" col=\"68\" text=\"공정명1\"/><Cell row=\"1\" col=\"69\" text=\"고객기준 하한값1\"/><Cell row=\"1\" col=\"70\" text=\"고객기준1\"/><Cell row=\"1\" col=\"71\" text=\"고객기준 상한값1\"/><Cell row=\"1\" col=\"72\" text=\"도금기준 하한값1\"/><Cell row=\"1\" col=\"73\" text=\"도금기준1\"/><Cell row=\"1\" col=\"74\" text=\"도금기준 상한값1\"/><Cell row=\"1\" col=\"75\" text=\"홀내벽 하한1\"/><Cell row=\"1\" col=\"76\" text=\"홀내벽 상한1\"/><Cell row=\"1\" col=\"77\" text=\"면동박 하한1\"/><Cell row=\"1\" col=\"78\" text=\"면동박 상한1\"/><Cell row=\"1\" col=\"79\" text=\"Dimple 하한1\"/><Cell row=\"1\" col=\"80\" text=\"Dimple 상한1\"/><Cell row=\"1\" col=\"81\" text=\"Over fill 하한1\"/><Cell row=\"1\" col=\"82\" text=\"Over fill 상한1\"/><Cell row=\"1\" col=\"83\" text=\"공정ID 2\"/><Cell row=\"1\" col=\"84\" text=\"공정명2\"/><Cell row=\"1\" col=\"85\" text=\"고객기준2\"/><Cell row=\"1\" col=\"86\" text=\"고객기준 하한값2\"/><Cell row=\"1\" col=\"87\" text=\"고객기준 상한값2\"/><Cell row=\"1\" col=\"88\" text=\"도금기준 하한값2\"/><Cell row=\"1\" col=\"89\" text=\"도금기준2\"/><Cell row=\"1\" col=\"90\" text=\"도금기준 상한값2\"/><Cell row=\"1\" col=\"91\" text=\"홀내벽 하한2\"/><Cell row=\"1\" col=\"92\" text=\"홀내벽 상한2\"/><Cell row=\"1\" col=\"93\" text=\"면동박 하한2\"/><Cell row=\"1\" col=\"94\" text=\"면동박 상한2\"/><Cell row=\"1\" col=\"95\" text=\"Dimple 하한2\"/><Cell row=\"1\" col=\"96\" text=\"Dimple 상한2\"/><Cell row=\"1\" col=\"97\" text=\"Over fill 하한2\"/><Cell row=\"1\" col=\"98\" text=\"Over fill 상한2\"/><Cell row=\"1\" col=\"99\" text=\"공정ID 3\"/><Cell row=\"1\" col=\"100\" text=\"공정명3\"/><Cell row=\"1\" col=\"101\" text=\"고객기준 하한값3\"/><Cell row=\"1\" col=\"102\" text=\"고객기준3\"/><Cell row=\"1\" col=\"103\" text=\"고객기준 상한값3\"/><Cell row=\"1\" col=\"104\" text=\"도금기준 하한값3\"/><Cell row=\"1\" col=\"105\" text=\"도금기준 3\"/><Cell row=\"1\" col=\"106\" text=\"도금기준 상한값3\"/><Cell row=\"1\" col=\"107\" text=\"홀내벽 하한3\"/><Cell row=\"1\" col=\"108\" text=\"홀내벽 상한3\"/><Cell row=\"1\" col=\"109\" text=\"면동박 하한3\"/><Cell row=\"1\" col=\"110\" text=\"면동박 상한3\"/><Cell row=\"1\" col=\"111\" text=\"Dimple 하한 3\"/><Cell row=\"1\" col=\"112\" text=\"Dimple 상한 3\"/><Cell row=\"1\" col=\"113\" text=\"Over fill 하한3\"/><Cell row=\"1\" col=\"114\" text=\"Over fill 상한3\"/><Cell row=\"1\" col=\"115\" text=\"(표면1)공정ID\"/><Cell row=\"1\" col=\"116\" text=\"(표면1)공정명\"/><Cell row=\"1\" col=\"117\" text=\"(표면1)사용층1\"/><Cell row=\"1\" col=\"118\" text=\"(표면1)도금면적1\"/><Cell row=\"1\" col=\"119\" text=\"(표면1)사용층2\"/><Cell row=\"1\" col=\"120\" text=\"(표면1)도금면적2\"/><Cell row=\"1\" col=\"121\" text=\"하한값\"/><Cell row=\"1\" col=\"122\" text=\"상한값\"/><Cell row=\"1\" col=\"123\" text=\"하한값\"/><Cell row=\"1\" col=\"124\" text=\"상한값\"/><Cell row=\"1\" col=\"125\" text=\"하한값\"/><Cell row=\"1\" col=\"126\" text=\"상한값\"/><Cell row=\"1\" col=\"127\" text=\"(표면2)공정ID\"/><Cell row=\"1\" col=\"128\" text=\"(표면2)공정명\"/><Cell row=\"1\" col=\"129\" text=\"(표면2)사용층1\"/><Cell row=\"1\" col=\"130\" text=\"(표면2)도금면적1\"/><Cell row=\"1\" col=\"131\" text=\"(표면2)사용층2\"/><Cell row=\"1\" col=\"132\" text=\"(표면2)도금면적2\"/><Cell row=\"1\" col=\"133\" text=\"하한값\"/><Cell row=\"1\" col=\"134\" text=\"상한값\"/><Cell row=\"1\" col=\"135\" text=\"하한값\"/><Cell row=\"1\" col=\"136\" text=\"상한값\"/><Cell row=\"1\" col=\"137\" text=\"하한값\"/><Cell row=\"1\" col=\"138\" text=\"상한값\"/><Cell row=\"1\" col=\"139\" text=\"(표면3)공정ID\"/><Cell row=\"1\" col=\"140\" text=\"(표면3)공정명\"/><Cell row=\"1\" col=\"141\" text=\"(표면3)사용층1\"/><Cell row=\"1\" col=\"142\" text=\"(표면3)도금면적1\"/><Cell row=\"1\" col=\"143\" text=\"(표면3)사용층2\"/><Cell row=\"1\" col=\"144\" text=\"(표면3)도금면적2\"/><Cell row=\"1\" col=\"145\" text=\"하한값\"/><Cell row=\"1\" col=\"146\" text=\"상한값\"/><Cell row=\"1\" col=\"147\" text=\"하한값\"/><Cell row=\"1\" col=\"148\" text=\"상한값\"/><Cell row=\"1\" col=\"149\" text=\"하한값\"/><Cell row=\"1\" col=\"150\" text=\"상한값\"/><Cell row=\"1\" col=\"151\" text=\"임피던스 SPEC\"/><Cell row=\"1\" col=\"152\" text=\"임피던스 구분\"/><Cell row=\"1\" col=\"153\" text=\"임피던스 적용층\"/><Cell row=\"1\" col=\"154\" text=\"평탄도 부위\"/><Cell row=\"1\" col=\"155\" text=\"평탄도 값(um)\"/><Cell row=\"1\" col=\"156\" text=\"임피던스 SPEC\"/><Cell row=\"1\" col=\"157\" text=\"임피던스 구분\"/><Cell row=\"1\" col=\"158\" text=\"임피던스 적용층\"/><Cell row=\"1\" col=\"159\" text=\"평탄도 부위\"/><Cell row=\"1\" col=\"160\" text=\"평탄도 값(um)\"/><Cell row=\"1\" col=\"161\" text=\"임피던스 SPEC\"/><Cell row=\"1\" col=\"162\" text=\"임피던스 구분\"/><Cell row=\"1\" col=\"163\" text=\"임피던스 적용층\"/><Cell row=\"1\" col=\"164\" text=\"평탄도 부위\"/><Cell row=\"1\" col=\"165\" text=\"평탄도 값(um)\"/><Cell row=\"1\" col=\"166\" text=\"연신율 유/무-1\"/><Cell row=\"1\" col=\"167\" text=\"연신율\"/><Cell row=\"1\" col=\"168\" text=\"적용 전 PITCH-1(mm)\"/><Cell row=\"1\" col=\"169\" text=\"적용 후 PITCH-1(mm)\"/><Cell row=\"1\" col=\"170\" text=\"중간값\"/><Cell row=\"1\" col=\"171\" text=\"SCALE\"/><Cell row=\"1\" col=\"172\" text=\"연신율 유/무-2\"/><Cell row=\"1\" col=\"173\" text=\"연신율\"/><Cell row=\"1\" col=\"174\" text=\"적용 전 PITCH-2(mm)\"/><Cell row=\"1\" col=\"175\" text=\"적용 후 PITCH-2(mm)\"/><Cell row=\"1\" col=\"176\" text=\"중간값\"/><Cell row=\"1\" col=\"177\" text=\"SCALE\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" rowspan=\"2\" text=\"bind:PLANTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:ITEMID\" textAlign=\"left\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:ITEMVERSION\"/><Cell col=\"4\" rowspan=\"2\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"5\" rowspan=\"2\" text=\"bind:PRODUCTTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductType,,Y,N\"/><Cell col=\"6\" rowspan=\"2\" text=\"bind:LAYER\" displaytype=\"combotext\" combocodecol=\"C,Layer,,Y,N\"/><Cell col=\"7\" rowspan=\"2\" text=\"bind:CUSTOMERCODENAME\" textAlign=\"left\"/><Cell col=\"8\" rowspan=\"2\" text=\"bind:CUSTOMERREV\"/><Cell col=\"9\" rowspan=\"2\" text=\"bind:PRODUCTLEVEL\" displaytype=\"combotext\" combocodecol=\"C,ProductLevel,,Y,N\"/><Cell col=\"10\" rowspan=\"2\" text=\"bind:JOBTYPE\" displaytype=\"combotext\" combocodecol=\"C,JobType,,Y,N\"/><Cell col=\"11\" rowspan=\"2\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell col=\"12\" rowspan=\"2\" text=\"bind:SPECPERSON\"/><Cell col=\"13\" rowspan=\"2\" text=\"bind:SALESMAN\"/><Cell col=\"14\" rowspan=\"2\" text=\"bind:SALEORDERCATEGORY\" textAlign=\"left\"/><Cell col=\"15\" rowspan=\"2\" text=\"bind:ACCEPTFLAG\" displaytype=\"combotext\" combocodecol=\"C,YesNo,,Y,N\"/><Cell col=\"16\" rowspan=\"2\" text=\"bind:JOBINPUTTYPE\" displaytype=\"combotext\" combocodecol=\"C,JOBINPUTTYPE,,Y,N\"/><Cell col=\"17\" rowspan=\"2\" text=\"bind:PCSSIZE\" textAlign=\"right\"/><Cell col=\"18\" rowspan=\"2\" text=\"bind:ARYSIZE\" textAlign=\"right\"/><Cell col=\"19\" rowspan=\"2\" text=\"bind:PNLSIZE\" textAlign=\"right\"/><Cell col=\"20\" rowspan=\"2\" text=\"bind:PCSPNL\" textAlign=\"right\"/><Cell col=\"21\" rowspan=\"2\" text=\"bind:PCSMM\" textAlign=\"right\"/><Cell col=\"22\" rowspan=\"2\" text=\"bind:PNLMM\" textAlign=\"right\"/><Cell col=\"23\" rowspan=\"2\" text=\"bind:PCSARY\" textAlign=\"right\"/><Cell col=\"24\" rowspan=\"2\" text=\"bind:ARRAYDIAGONAL\" textAlign=\"right\"/><Cell col=\"25\" rowspan=\"2\" text=\"bind:RTRSHT\" displaytype=\"combotext\" combocodecol=\"C,RTRSHT,,Y,N\"/><Cell col=\"26\" rowspan=\"2\" text=\"bind:ISWEEKMNG\"/><Cell col=\"27\" rowspan=\"2\" text=\"bind:OXIDE\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"28\" rowspan=\"2\" text=\"bind:SEPARATINGPORTION\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"29\" rowspan=\"2\" text=\"bind:ASSY\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"30\" rowspan=\"2\" text=\"bind:ULMARK\" combocodecol=\"C,YesNo,,Y,N\" displaytype=\"combotext\"/><Cell col=\"31\" rowspan=\"2\" text=\"bind:IMPEDANCE\" displaytype=\"combotext\" combocodecol=\"C,YesNo,,Y,N\"/><Cell col=\"32\" rowspan=\"2\" text=\"bind:REGISTRATIONDATE\"/><Cell col=\"33\" rowspan=\"2\" text=\"bind:INVALIDDATE\"/><Cell col=\"34\" rowspan=\"2\" text=\"bind:CAMMAN\"/><Cell col=\"35\" rowspan=\"2\" text=\"bind:ENDUSER\"/><Cell col=\"36\" rowspan=\"2\" text=\"bind:INPUTSIZEXAXIS\" displaytype=\"combotext\" combocodecol=\"C,InputSize,null,Y,N\"/><Cell col=\"37\" rowspan=\"2\" text=\"bind:INPUTSHRINKX\"/><Cell col=\"38\" rowspan=\"2\" text=\"bind:INPUTSHRINKY\"/><Cell col=\"39\" rowspan=\"2\" text=\"bind:INNERLAYERCIRCUIT_WIDTH\"/><Cell col=\"40\" rowspan=\"2\" text=\"bind:INNERLAYERCIRCUIT_GAP\"/><Cell col=\"41\" rowspan=\"2\" text=\"bind:OUTERLAYERCIRCUIT_WIDTH\"/><Cell col=\"42\" rowspan=\"2\" text=\"bind:OUTERLAYERCIRCUIT_GAP\"/><Cell col=\"43\" rowspan=\"2\" text=\"bind:OLBCIRCUIT_WIDTH\"/><Cell col=\"44\" rowspan=\"2\" text=\"bind:OLBCIRCUIT_GAP\"/><Cell col=\"45\" rowspan=\"2\" text=\"bind:MVH_LAND\"/><Cell col=\"46\" rowspan=\"2\" text=\"bind:MVH_HOLE\"/><Cell col=\"47\" rowspan=\"2\" text=\"bind:IVH_LAND\"/><Cell col=\"48\" rowspan=\"2\" text=\"bind:IVH_HOLE\"/><Cell col=\"49\" rowspan=\"2\" text=\"bind:PTH_LAND\"/><Cell col=\"50\" rowspan=\"2\" text=\"bind:PTH_HOLE\"/><Cell col=\"51\" rowspan=\"2\" text=\"bind:COPPER4_SEGMENT\"/><Cell col=\"52\" rowspan=\"2\" text=\"bind:COPPER4_TYPE\"/><Cell col=\"53\" rowspan=\"2\" text=\"bind:COPPER4_CUSTOMER_LOWER\"/><Cell col=\"54\" rowspan=\"2\" text=\"bind:COPPER4_CUSTOMER\"/><Cell col=\"55\" rowspan=\"2\" text=\"bind:COPPER4_CUSTOMER_UPPER\"/><Cell col=\"56\" rowspan=\"2\" text=\"bind:COPPER4_PLATINGCONDITION_LOWER\"/><Cell col=\"57\" rowspan=\"2\" text=\"bind:COPPER4_PLATINGCONDITION\"/><Cell col=\"58\" rowspan=\"2\" text=\"bind:COPPER4_PLATINGCONDITION_UPPER\"/><Cell col=\"59\" rowspan=\"2\" text=\"bind:COPPER4_HOLEINSIDEWALL_LSL\"/><Cell col=\"60\" rowspan=\"2\" text=\"bind:COPPER4_HOLEINSIDEWALL_USL\"/><Cell col=\"61\" rowspan=\"2\" text=\"bind:COPPER4_PLANECUFOIL_LSL\"/><Cell col=\"62\" rowspan=\"2\" text=\"bind:COPPER4_PLANECUFOIL_USL\"/><Cell col=\"63\" rowspan=\"2\" text=\"bind:COPPER4_DIMPLE_LSL\"/><Cell col=\"64\" rowspan=\"2\" text=\"bind:COPPER4_DIMPLE_USL\"/><Cell col=\"65\" rowspan=\"2\" text=\"bind:COPPER4_OVERFILL_LSL\"/><Cell col=\"66\" rowspan=\"2\" text=\"bind:COPPER4_OVERFILL_USL\"/><Cell col=\"67\" rowspan=\"2\" text=\"bind:COPPER1_SEGMENT\"/><Cell col=\"68\" rowspan=\"2\" text=\"bind:COPPER1_TYPE\"/><Cell col=\"69\" rowspan=\"2\" text=\"bind:COPPER1_CUSTOMER_LOWER\"/><Cell col=\"70\" rowspan=\"2\" text=\"bind:COPPER1_CUSTOMER\"/><Cell col=\"71\" rowspan=\"2\" text=\"bind:COPPER1_CUSTOMER_UPPER\"/><Cell col=\"72\" rowspan=\"2\" text=\"bind:COPPER1_PLATINGCONDITION_LOWER\"/><Cell col=\"73\" rowspan=\"2\" text=\"bind:COPPER1_PLATINGCONDITION\"/><Cell col=\"74\" rowspan=\"2\" text=\"bind:COPPER1_PLATINGCONDITION_UPPER\"/><Cell col=\"75\" rowspan=\"2\" text=\"bind:COPPER1_HOLEINSIDEWALL_LSL\"/><Cell col=\"76\" rowspan=\"2\" text=\"bind:COPPER1_HOLEINSIDEWALL_USL\"/><Cell col=\"77\" rowspan=\"2\" text=\"bind:COPPER1_PLANECUFOIL_LSL\"/><Cell col=\"78\" rowspan=\"2\" text=\"bind:COPPER1_PLANECUFOIL_USL\"/><Cell col=\"79\" rowspan=\"2\" text=\"bind:COPPER1_DIMPLE_LSL\"/><Cell col=\"80\" rowspan=\"2\" text=\"bind:COPPER1_DIMPLE_USL\"/><Cell col=\"81\" rowspan=\"2\" text=\"bind:COPPER1_OVERFILL_LSL\"/><Cell col=\"82\" rowspan=\"2\" text=\"bind:COPPER1_OVERFILL_USL\"/><Cell col=\"83\" rowspan=\"2\" text=\"bind:COPPER2_SEGMENT\"/><Cell col=\"84\" rowspan=\"2\" text=\"bind:COPPER2_TYPE\"/><Cell col=\"85\" rowspan=\"2\" text=\"bind:COPPER2_CUSTOMER\"/><Cell col=\"86\" rowspan=\"2\" text=\"bind:COPPER2_CUSTOMER_LOWER\"/><Cell col=\"87\" rowspan=\"2\" text=\"bind:COPPER2_CUSTOMER_UPPER\"/><Cell col=\"88\" rowspan=\"2\" text=\"bind:COPPER2_PLATINGCONDITION_LOWER\"/><Cell col=\"89\" rowspan=\"2\" text=\"bind:COPPER2_PLATINGCONDITION\"/><Cell col=\"90\" rowspan=\"2\" text=\"bind:COPPER2_PLATINGCONDITION_UPPER\"/><Cell col=\"91\" rowspan=\"2\" text=\"bind:COPPER2_HOLEINSIDEWALL_LSL\"/><Cell col=\"92\" rowspan=\"2\" text=\"bind:COPPER2_HOLEINSIDEWALL_USL\"/><Cell col=\"93\" rowspan=\"2\" text=\"bind:COPPER2_PLANECUFOIL_LSL\"/><Cell col=\"94\" rowspan=\"2\" text=\"bind:COPPER2_PLANECUFOIL_USL\"/><Cell col=\"95\" rowspan=\"2\" text=\"bind:COPPER2_DIMPLE_LSL\"/><Cell col=\"96\" rowspan=\"2\" text=\"bind:COPPER2_DIMPLE_USL\"/><Cell col=\"97\" rowspan=\"2\" text=\"bind:COPPER2_OVERFILL_LSL\"/><Cell col=\"98\" rowspan=\"2\" text=\"bind:COPPER2_OVERFILL_USL\"/><Cell col=\"99\" rowspan=\"2\" text=\"bind:COPPER3_SEGMENT\"/><Cell col=\"100\" rowspan=\"2\" text=\"bind:COPPER3_TYPE\"/><Cell col=\"101\" rowspan=\"2\" text=\"bind:COPPER3_CUSTOMER_LOWER\"/><Cell col=\"102\" rowspan=\"2\" text=\"bind:COPPER3_CUSTOMER\"/><Cell col=\"103\" rowspan=\"2\" text=\"bind:COPPER3_CUSTOMER_UPPER\"/><Cell col=\"104\" rowspan=\"2\" text=\"bind:COPPER3_PLATINGCONDITION_LOWER\"/><Cell col=\"105\" rowspan=\"2\" text=\"bind:COPPER3_PLATINGCONDITION\"/><Cell col=\"106\" rowspan=\"2\" text=\"bind:COPPER3_PLATINGCONDITION_UPPER\"/><Cell col=\"107\" rowspan=\"2\" text=\"bind:COPPER3_HOLEINSIDEWALL_LSL\"/><Cell col=\"108\" rowspan=\"2\" text=\"bind:COPPER3_HOLEINSIDEWALL_USL\"/><Cell col=\"109\" rowspan=\"2\" text=\"bind:COPPER3_PLANECUFOIL_LSL\"/><Cell col=\"110\" rowspan=\"2\" text=\"bind:COPPER3_PLANECUFOIL_USL\"/><Cell col=\"111\" rowspan=\"2\" text=\"bind:COPPER3_DIMPLE_LSL\"/><Cell col=\"112\" rowspan=\"2\" text=\"bind:COPPER3_DIMPLE_USL\"/><Cell col=\"113\" rowspan=\"2\" text=\"bind:COPPER3_OVERFILL_LSL\"/><Cell col=\"114\" rowspan=\"2\" text=\"bind:COPPER3_OVERFILL_USL\"/><Cell col=\"115\" rowspan=\"2\" text=\"bind:SURFACE1_SEGMENT\"/><Cell col=\"116\" rowspan=\"2\" text=\"bind:SURFACE1_TYPE\"/><Cell col=\"117\" rowspan=\"2\" text=\"bind:SURFACE1_AREA1_LOWER\"/><Cell col=\"118\" rowspan=\"2\" text=\"bind:SURFACE1_AREA1_UPPER\"/><Cell col=\"119\" rowspan=\"2\" text=\"bind:SURFACE1_AREA2_LOWER\"/><Cell col=\"120\" rowspan=\"2\" text=\"bind:SURFACE1_AREA2_UPPER\"/><Cell col=\"121\" text=\"bind:SURFACE1_SPEC1\"/><Cell col=\"122\" text=\"bind:SURFACE1_SPEC1\"/><Cell col=\"123\" text=\"bind:SURFACE1_SPEC2\"/><Cell col=\"124\" text=\"bind:SURFACE1_SPEC2\"/><Cell col=\"125\" text=\"bind:SURFACE1_SPEC3\"/><Cell col=\"126\" text=\"bind:SURFACE1_SPEC3\"/><Cell col=\"127\" rowspan=\"2\" text=\"bind:SURFACE2_SEGMENT\"/><Cell col=\"128\" rowspan=\"2\" text=\"bind:SURFACE2_TYPE\"/><Cell col=\"129\" rowspan=\"2\" text=\"bind:SURFACE2_AREA1_LOWER\"/><Cell col=\"130\" rowspan=\"2\" text=\"bind:SURFACE2_AREA1_UPPER\"/><Cell col=\"131\" rowspan=\"2\" text=\"bind:SURFACE2_AREA2_LOWER\"/><Cell col=\"132\" rowspan=\"2\" text=\"bind:SURFACE2_AREA2_UPPER\"/><Cell col=\"133\" text=\"bind:SURFACE2_SPEC1\"/><Cell col=\"134\" text=\"bind:SURFACE2_SPEC1\"/><Cell col=\"135\" text=\"bind:SURFACE2_SPEC2\"/><Cell col=\"136\" text=\"bind:SURFACE2_SPEC2\"/><Cell col=\"137\" text=\"bind:SURFACE2_SPEC3\"/><Cell col=\"138\" text=\"bind:SURFACE2_SPEC3\"/><Cell col=\"139\" rowspan=\"2\" text=\"bind:SURFACE3_SEGMENT\"/><Cell col=\"140\" rowspan=\"2\" text=\"bind:SURFACE3_TYPE\"/><Cell col=\"141\" rowspan=\"2\" text=\"bind:SURFACE3_AREA1_LOWER\"/><Cell col=\"142\" rowspan=\"2\" text=\"bind:SURFACE3_AREA1_UPPER\"/><Cell col=\"143\" rowspan=\"2\" text=\"bind:SURFACE3_AREA2_LOWER\"/><Cell col=\"144\" rowspan=\"2\" text=\"bind:SURFACE3_AREA2_UPPER\"/><Cell col=\"145\" text=\"bind:SURFACE3_SPEC1\"/><Cell col=\"146\" text=\"bind:SURFACE3_SPEC1\"/><Cell col=\"147\" text=\"bind:SURFACE3_SPEC2\"/><Cell col=\"148\" text=\"bind:SURFACE3_SPEC2\"/><Cell col=\"149\" text=\"bind:SURFACE3_SPEC3\"/><Cell col=\"150\" text=\"bind:SURFACE3_SPEC3\"/><Cell col=\"151\" rowspan=\"2\" text=\"bind:IMPEDANCESPEC1\"/><Cell col=\"152\" rowspan=\"2\" text=\"bind:IMPEDANCETYPE1\"/><Cell col=\"153\" rowspan=\"2\" text=\"bind:IMPEDANCEAPPLYLAYER1\"/><Cell col=\"154\" rowspan=\"2\" text=\"bind:FLATNESS11\"/><Cell col=\"155\" rowspan=\"2\" text=\"bind:FLATNESS21\"/><Cell col=\"156\" rowspan=\"2\" text=\"bind:IMPEDANCESPEC2\"/><Cell col=\"157\" rowspan=\"2\" text=\"bind:IMPEDANCETYPE2\"/><Cell col=\"158\" rowspan=\"2\" text=\"bind:IMPEDANCEAPPLYLAYER2\"/><Cell col=\"159\" rowspan=\"2\" text=\"bind:FLATNESS11UM\"/><Cell col=\"160\" rowspan=\"2\" text=\"bind:FLATNESS22\"/><Cell col=\"161\" rowspan=\"2\" text=\"bind:IMPEDANCESPEC3\"/><Cell col=\"162\" rowspan=\"2\" text=\"bind:IMPEDANCETYPE3\"/><Cell col=\"163\" rowspan=\"2\" text=\"bind:IMPEDANCEAPPLYLAYER3\"/><Cell col=\"164\" rowspan=\"2\" text=\"bind:FLATNESS12\"/><Cell col=\"165\" rowspan=\"2\" text=\"bind:FLATNESS21UM\"/><Cell col=\"166\" rowspan=\"2\" text=\"bind:ELONGATIONCHECK1\"/><Cell col=\"167\" rowspan=\"2\" text=\"bind:ELONGATION1\" textAlign=\"right\" expandsize=\"24\" expandshow=\"show\" expandchar=\"%\"/><Cell col=\"168\" rowspan=\"2\" text=\"bind:PITCHBEFORE1\" expandsize=\"24\" expandshow=\"show\" expandchar=\"㎛\" textAlign=\"right\"/><Cell col=\"169\" rowspan=\"2\" text=\"bind:PITCHAFTER1\"/><Cell col=\"170\" rowspan=\"2\" text=\"bind:DATA1\"/><Cell col=\"171\" rowspan=\"2\" text=\"bind:SCALEVALUE1\"/><Cell col=\"172\" rowspan=\"2\" text=\"bind:ELONGATIONCHECK2\"/><Cell col=\"173\" rowspan=\"2\" text=\"bind:ELONGATION2\" textAlign=\"right\" expandsize=\"24\" expandshow=\"show\" expandchar=\"%\"/><Cell col=\"174\" rowspan=\"2\" text=\"bind:PITCHBEFORE2\" expandsize=\"24\" expandshow=\"show\" expandchar=\"㎛\" textAlign=\"right\"/><Cell col=\"175\" rowspan=\"2\" text=\"bind:PITCHAFTER2\"/><Cell col=\"176\" rowspan=\"2\" text=\"bind:DATA2\"/><Cell col=\"177\" rowspan=\"2\" text=\"bind:SCALEVALUE2\"/><Cell row=\"1\" col=\"121\" text=\"bind:SURFACE1_NI_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"122\" text=\"bind:SURFACE1_NI_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"123\" text=\"bind:SURFACE1_AU_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"124\" text=\"bind:SURFACE1_AU_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"125\" text=\"bind:SURFACE1_PD_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"126\" text=\"bind:SURFACE1_PD_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"133\" text=\"bind:SURFACE2_NI_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"134\" text=\"bind:SURFACE2_NI_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"135\" text=\"bind:SURFACE2_AU_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"136\" text=\"bind:SURFACE2_AU_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"137\" text=\"bind:SURFACE2_PD_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"138\" text=\"bind:SURFACE2_PD_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"145\" text=\"bind:SURFACE3_NI_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"146\" text=\"bind:SURFACE3_NI_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"147\" text=\"bind:SURFACE3_AU_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"148\" text=\"bind:SURFACE3_AU_UPPER\" textAlign=\"right\"/><Cell row=\"1\" col=\"149\" text=\"bind:SURFACE3_PD_LOWER\" textAlign=\"right\"/><Cell row=\"1\" col=\"150\" text=\"bind:SURFACE3_PD_UPPER\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_reqList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_list","sta_subTitle:0","0","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7693F1DF1E5842AD972326E4CE8D5234");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","578","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","578","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","400","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","400",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"665","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","691","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPlantList","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"105","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"180","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_specOwner",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"180","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","74","661","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_value("사양담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_00",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00",null,"105","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_01",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName00_00","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMERREV");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_01",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_01_00",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName00_00_00","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMERREV");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("표면도금TYPE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_platingType","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00",null,"205","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00",null,"205","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_text("동도금TYPE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_copperPlatingType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00",null,"230","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00",null,"230","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_jobType","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,JobType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00",null,"255","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00",null,"255","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("62");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("63");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productionType","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00",null,"280","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("64");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00",null,"280","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("65");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("66");
            obj.set_text("제품등급");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productLevel","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,ProductLevel,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00",null,"305","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("67");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00",null,"305","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("68");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00","0","360","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("69");
            obj.set_text("제품Type");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productType","108","360","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ProductType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00",null,"380","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("70");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00",null,"380","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("71");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00","0","385","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("72");
            obj.set_text("층수");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_layer","108","385","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,Layer,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName00_00_00_00","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("73");
            obj.set_text("고객코드/고객명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMERREV");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customerCodeName","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00",null,"330","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("74");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_00",null,"330","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("75");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_00","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("76");
            obj.set_text("투입유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_jobInputType","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,JOBINPUTTYPE,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_01",null,"355","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("77");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_01",null,"355","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("78");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02",null,"405","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("79");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_02",null,"405","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("80");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_01","0","410","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("81");
            obj.set_text("Roll/Sheet");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_rtrSht","108","410","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,RTRSHT,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02_00",null,"431","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("82");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_02_00",null,"431","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("83");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_01_00","0","436","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("84");
            obj.set_text("연신율");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_elongation","108","436","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02_00_00",null,"458","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("85");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_02_00_00",null,"458","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("86");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_01_00_00","0","463","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("87");
            obj.set_text("임피던스");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_impedance","108","463","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02_00_00_00",null,"483","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("88");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_02_00_00_00",null,"483","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("89");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_01_00_00_00","0","488","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("90");
            obj.set_text("OXIDE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_oxide","108","488","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02_00_00_00_00",null,"508","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("91");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_02_00_00_00_00",null,"508","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("92");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_01_00_00_00_00","0","513","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("93");
            obj.set_text("ASSY");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_assy","108","513","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00_00_00_00_00_00_00_02_00_00_00_00_00",null,"533","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("94");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00_00_00_00_00_00_02_00_00_00_00_00",null,"533","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("95");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00_00_00_01_00_00_00_00_00","0","538","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("96");
            obj.set_text("분리부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_seperate","108","538","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00",null,"558","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("97");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1590,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cboPlantList","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_specOwner_id","value","ds_search","SPECOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_item","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_seperate","value","ds_search","SEPARATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_assy","value","ds_search","ASSY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.cbo_oxide","value","ds_search","OXIDE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_impedance","value","ds_search","IMPEDANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_elongation","value","ds_search","ELONGATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cbo_rtrSht","value","ds_search","RTRSHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.cbo_layer","value","ds_search","LAYER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.Tabpage1.form.cbo_productType","value","ds_search","PRODUCTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.Tabpage1.form.cbo_jobInputType","value","ds_search","JOBINPUTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_search.Tabpage1.form.edt_customerCodeName","value","ds_search","CUSTOMERCODENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_search.Tabpage1.form.cbo_productLevel","value","ds_search","PRODUCTLEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_search.Tabpage1.form.cbo_productionType","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_search.Tabpage1.form.cbo_jobType","value","ds_search","JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_search.Tabpage1.form.edt_itemName","value","ds_search","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_search.Tabpage1.form.edt_item_cd","value","ds_search","ITEMREV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_search.Tabpage1.form.cbo_platingType","value","ds_search","PLATINGTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_search.Tabpage1.form.cbo_copperPlatingType","value","ds_search","COPPERPLATINGTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02700M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품목조회
         * 파일명 		: BAS02700M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.08
         *
         * 설  명		: 기준관리 - 품목조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.08	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.fn_formInit();

        	/* 표면도금 TYPE조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv.cbo_platingType // Object
        								, "selectProcessBNameList,ALL,Y,A" // OPTION
        								, this.gfn_setParam("PROCESSSEGMENTCLASSTYPE", "MiddleProcessSegmentClass")
        								 +this.gfn_setParam("PARENTPROCESSSEGMENTCLASSID", "55")
        								);

        	/* 동도금 TYPE조회 */
        	this.basfn_setCustomQueryCmb(this.searchDiv.cbo_copperPlatingType // Object
        								, "selectProcessBNameList,ALL,Y,A" // OPTION
        								, this.gfn_setParam("PROCESSSEGMENTCLASSTYPE", "MiddleProcessSegmentClass")
        								 +this.gfn_setParam("PARENTPROCESSSEGMENTCLASSID", "25")
        								);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	this.ds_list.clearData();
        	var sSvcID 			= "selectItemList";
        	var sController 	= "/bas02700/selectItemList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_list=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		if (trId == "selectItemList")
        		{

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

        	if(svcId=="SCH_CUSTOMER"
        	   ||svcId=="SCH_SPEC_OWNER"
        	   ){ //검색조건에서 고객조회시 다건선택 가능하도록
        			oArg.arg_type = "BA";
        	 }


        		if (popId=="P00043" && svcId=="SCH_ITEM"){	//품목 조회
        			oArg.arg_type = "CA";
        			oArg.arg_paramCols = "MASTERDATACLASSID";
        			oArg.arg_paramValues = "Product";
        			oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.searchDiv.edt_item.value, "");
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        		} else if (popId=="P00062"){	//담당자 조회
        			oArg.arg_type = "CA";
        			oArg.arg_rtnCols = "USERID|USERNAME";
        			oArg.arg_paramCols = "USERGROUPID";
        			oArg.arg_paramValues = "SPECOWNER";
        			oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_specOwner.value,"");
        		}
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);

        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;


        	if(sPopupId == "SCH_ITEM")
        	{
        		var objKey = "";
        		var objId = "";
        		var objCd = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        			objCd  += ","+ colArray[2];
        		}


        		this.searchDiv.edt_item.set_value(objId.substr(1));
        		this.searchDiv.edt_item_cd.set_value(objCd.substr(1));
        	}
        	if(sPopupId == "SCH_SPEC_OWNER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_specOwner.set_value(objKey.substr(1));
        		this.searchDiv.edt_specOwner_id.set_value(objId.substr(1));
        	}

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.searchDiv.cboPlantList.set_value(this.gf_getSiteType());
        	this.searchDiv.cboPeriodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.edt_specOwner.set_value(null);
        	this.searchDiv.edt_specOwner_id.set_value(null);
        	this.fn_setDate("THISMONTH");
        	this.ds_list.clearData();
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cboPeriodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.calStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.calEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	//접수일 초기세팅
        	//this.frmDiv.calReceiptDt.set_value(this.ds_periodType.getColumn(0,"THISDAY_S"));
        }


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_btn_search00_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00043"); //품목 조회
        };


        this.tab_search_Tabpage1_btnSpecOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SPEC_OWNER","P00062");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_reqList.addEventHandler("oncellclick",this.div_work_grd_reqList_oncellclick,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.cboPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.calStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.calEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_onclick,this);
            this.tab_search.Tabpage1.form.btn_specOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnSpecOwner_onclick,this);
        };
        this.loadIncludeScript("BAS02700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
