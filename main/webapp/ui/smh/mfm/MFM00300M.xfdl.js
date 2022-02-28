(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00300M");
            this.set_titletext("공정부하예측");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_load", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETSEGMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIP\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"D1_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D1_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_PLANWIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NOINPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SUJUQTY1\" type=\"STRING\" size=\"256\"/><Column id=\"SUJUQTY2\" type=\"STRING\" size=\"256\"/><Column id=\"SUJUQTY3\" type=\"STRING\" size=\"256\"/><Column id=\"SUJUQTY4\" type=\"STRING\" size=\"256\"/><Column id=\"SUJUQTY5\" type=\"STRING\" size=\"256\"/><Column id=\"SUJUQTY6\" type=\"STRING\" size=\"256\"/><Column id=\"D1_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D2_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D3_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D4_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D5_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D6_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D7_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D8_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D9_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D10_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D11_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D12_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D13_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D14_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D15_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D16_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D17_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D18_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D19_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D20_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D21_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D22_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D23_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D24_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D25_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D26_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D27_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D28_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D29_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D30_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D31_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D32_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D33_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D34_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D35_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D36_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D37_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D38_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D39_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D40_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D41_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D42_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D43_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D44_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D45_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D46_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D47_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D48_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D49_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D50_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D51_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D52_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D53_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D54_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D55_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D56_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D57_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D58_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D59_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D60_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D61_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D62_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D63_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D64_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D65_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D66_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D67_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D68_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D69_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D70_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D71_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D72_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D73_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D74_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D75_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D76_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D77_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D78_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D79_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D80_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D81_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D82_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D83_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D84_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D85_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D86_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D87_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D88_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D89_EDITYN\" type=\"STRING\" size=\"256\"/><Column id=\"D90_EDITYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADDATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayList", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodDivisioList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batch", this);
            obj._setContents("<ColumnInfo><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMS\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_out", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","94",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("공정부하예측");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_confirm",null,"15","50","24","btn_save:16",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_confirm00",null,"15","70","24","btn_confirm:23",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("배치실행");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Spin("spn_numRate",null,"17","65","20","btn_confirm00:8",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("12");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_value("100");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_goodQty",null,"16","79","20","spn_numRate:5",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("11");
            obj.set_text("계산율");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_label0","0","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("확정시간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_label0_00","32.64%","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("확정자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_confirmTime","sta_label0:5","5","140","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_confirmUserName","sta_label0_00:5","5","125","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00","0","66","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("공정별 재공실적");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_load","0","100",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_load");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\" band=\"left\"/><Column size=\"33\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"57\" band=\"left\"/><Column size=\"64\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"118\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"품목코드\"/><Cell col=\"1\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정수순\"/><Cell col=\"4\" rowspan=\"2\" text=\"공정ID\"/><Cell col=\"5\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"6\" rowspan=\"2\" text=\"Site ID\"/><Cell col=\"7\" rowspan=\"2\" text=\"대공정 그룹코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"중공정 그룹코드\"/><Cell col=\"9\" rowspan=\"2\" text=\"소공정 그룹코드\"/><Cell col=\"10\" rowspan=\"2\" text=\"일목표수량(PNL)\"/><Cell col=\"11\" rowspan=\"2\" text=\"일목표공정(개수)\"/><Cell col=\"12\" rowspan=\"2\" text=\"재공 현황\"/><Cell col=\"13\" colspan=\"2\" text=\"2021-02-01\" cssclass=\"cell_headMaster\"/><Cell col=\"15\" colspan=\"2\" text=\"2021-02-02\" cssclass=\"cell_headMaster\"/><Cell col=\"17\" colspan=\"2\" text=\"2021-02-03\" cssclass=\"cell_headMaster\"/><Cell col=\"19\" colspan=\"2\" text=\"2021-02-04\" cssclass=\"cell_headMaster\"/><Cell col=\"21\" colspan=\"2\" text=\"2021-02-05\" cssclass=\"cell_headMaster\"/><Cell col=\"23\" colspan=\"2\" text=\"2021-02-06\" cssclass=\"cell_headMaster\"/><Cell col=\"25\" colspan=\"2\" text=\"2021-02-07\" cssclass=\"cell_headMaster\"/><Cell col=\"27\" colspan=\"2\" text=\"2021-02-08\" cssclass=\"cell_headMaster\"/><Cell col=\"29\" colspan=\"2\" text=\"2021-02-09\" cssclass=\"cell_headMaster\"/><Cell col=\"31\" colspan=\"2\" text=\"2021-02-10\" cssclass=\"cell_headMaster\"/><Cell col=\"33\" colspan=\"2\" text=\"2021-02-11\" cssclass=\"cell_headMaster\"/><Cell col=\"35\" colspan=\"2\" text=\"2021-02-12\" cssclass=\"cell_headMaster\"/><Cell col=\"37\" colspan=\"2\" text=\"2021-02-13\" cssclass=\"cell_headMaster\"/><Cell col=\"39\" colspan=\"2\" text=\"2021-02-14\" cssclass=\"cell_headMaster\"/><Cell col=\"41\" colspan=\"2\" text=\"2021-02-15\" cssclass=\"cell_headMaster\"/><Cell col=\"43\" colspan=\"2\" text=\"2021-02-16\" cssclass=\"cell_headMaster\"/><Cell col=\"45\" colspan=\"2\" text=\"2021-02-17\" cssclass=\"cell_headMaster\"/><Cell col=\"47\" colspan=\"2\" text=\"2021-02-18\" cssclass=\"cell_headMaster\"/><Cell col=\"49\" colspan=\"2\" text=\"2021-02-19\" cssclass=\"cell_headMaster\"/><Cell col=\"51\" colspan=\"2\" text=\"2021-02-20\" cssclass=\"cell_headMaster\"/><Cell col=\"53\" colspan=\"2\" text=\"2021-02-21\" cssclass=\"cell_headMaster\"/><Cell col=\"55\" colspan=\"2\" text=\"2021-02-22\" cssclass=\"cell_headMaster\"/><Cell col=\"57\" colspan=\"2\" text=\"2021-02-23\" cssclass=\"cell_headMaster\"/><Cell col=\"59\" colspan=\"2\" text=\"2021-02-24\" cssclass=\"cell_headMaster\"/><Cell col=\"61\" colspan=\"2\" text=\"2021-02-25\" cssclass=\"cell_headMaster\"/><Cell col=\"63\" colspan=\"2\" text=\"2021-02-26\" cssclass=\"cell_headMaster\"/><Cell col=\"65\" colspan=\"2\" text=\"2021-02-27\" cssclass=\"cell_headMaster\"/><Cell col=\"67\" colspan=\"2\" text=\"2021-02-28\" cssclass=\"cell_headMaster\"/><Cell col=\"69\" colspan=\"2\" text=\"2021-02-29\" cssclass=\"cell_headMaster\"/><Cell col=\"71\" colspan=\"2\" text=\"2021-02-30\" cssclass=\"cell_headMaster\"/><Cell col=\"73\" colspan=\"2\" text=\"2021-02-31\" cssclass=\"cell_headMaster\"/><Cell col=\"75\" colspan=\"2\" text=\"2021-02-32\" cssclass=\"cell_headMaster\"/><Cell col=\"77\" colspan=\"2\" text=\"2021-02-33\" cssclass=\"cell_headMaster\"/><Cell col=\"79\" colspan=\"2\" text=\"2021-02-34\" cssclass=\"cell_headMaster\"/><Cell col=\"81\" colspan=\"2\" text=\"2021-02-35\" cssclass=\"cell_headMaster\"/><Cell col=\"83\" colspan=\"2\" text=\"2021-02-36\" cssclass=\"cell_headMaster\"/><Cell col=\"85\" colspan=\"2\" text=\"2021-02-37\" cssclass=\"cell_headMaster\"/><Cell col=\"87\" colspan=\"2\" text=\"2021-02-38\" cssclass=\"cell_headMaster\"/><Cell col=\"89\" colspan=\"2\" text=\"2021-02-39\" cssclass=\"cell_headMaster\"/><Cell col=\"91\" colspan=\"2\" text=\"2021-02-40\" cssclass=\"cell_headMaster\"/><Cell col=\"93\" colspan=\"2\" text=\"2021-02-41\" cssclass=\"cell_headMaster\"/><Cell col=\"95\" colspan=\"2\" text=\"2021-02-42\" cssclass=\"cell_headMaster\"/><Cell col=\"97\" colspan=\"2\" text=\"2021-02-43\" cssclass=\"cell_headMaster\"/><Cell col=\"99\" colspan=\"2\" text=\"2021-02-44\" cssclass=\"cell_headMaster\"/><Cell col=\"101\" colspan=\"2\" text=\"2021-02-45\" cssclass=\"cell_headMaster\"/><Cell col=\"103\" colspan=\"2\" text=\"2021-02-46\" cssclass=\"cell_headMaster\"/><Cell col=\"105\" colspan=\"2\" text=\"2021-02-47\" cssclass=\"cell_headMaster\"/><Cell col=\"107\" colspan=\"2\" text=\"2021-02-48\" cssclass=\"cell_headMaster\"/><Cell col=\"109\" colspan=\"2\" text=\"2021-02-49\" cssclass=\"cell_headMaster\"/><Cell col=\"111\" colspan=\"2\" text=\"2021-02-50\" cssclass=\"cell_headMaster\"/><Cell col=\"113\" colspan=\"2\" text=\"2021-02-51\" cssclass=\"cell_headMaster\"/><Cell col=\"115\" colspan=\"2\" text=\"2021-02-52\" cssclass=\"cell_headMaster\"/><Cell col=\"117\" colspan=\"2\" text=\"2021-02-53\" cssclass=\"cell_headMaster\"/><Cell col=\"119\" colspan=\"2\" text=\"2021-02-54\" cssclass=\"cell_headMaster\"/><Cell col=\"121\" colspan=\"2\" text=\"2021-02-55\" cssclass=\"cell_headMaster\"/><Cell col=\"123\" colspan=\"2\" text=\"2021-02-56\" cssclass=\"cell_headMaster\"/><Cell col=\"125\" colspan=\"2\" text=\"2021-02-57\" cssclass=\"cell_headMaster\"/><Cell col=\"127\" colspan=\"2\" text=\"2021-02-58\" cssclass=\"cell_headMaster\"/><Cell col=\"129\" colspan=\"2\" text=\"2021-02-59\" cssclass=\"cell_headMaster\"/><Cell col=\"131\" colspan=\"2\" text=\"2021-02-60\" cssclass=\"cell_headMaster\"/><Cell col=\"133\" colspan=\"2\" text=\"2021-02-61\" cssclass=\"cell_headMaster\"/><Cell col=\"135\" colspan=\"2\" text=\"2021-02-62\" cssclass=\"cell_headMaster\"/><Cell col=\"137\" colspan=\"2\" text=\"2021-02-63\" cssclass=\"cell_headMaster\"/><Cell col=\"139\" colspan=\"2\" text=\"2021-02-64\" cssclass=\"cell_headMaster\"/><Cell col=\"141\" colspan=\"2\" text=\"2021-02-65\" cssclass=\"cell_headMaster\"/><Cell col=\"143\" colspan=\"2\" text=\"2021-02-66\" cssclass=\"cell_headMaster\"/><Cell col=\"145\" colspan=\"2\" text=\"2021-02-67\" cssclass=\"cell_headMaster\"/><Cell col=\"147\" colspan=\"2\" text=\"2021-02-68\" cssclass=\"cell_headMaster\"/><Cell col=\"149\" colspan=\"2\" text=\"2021-02-69\" cssclass=\"cell_headMaster\"/><Cell col=\"151\" colspan=\"2\" text=\"2021-02-70\" cssclass=\"cell_headMaster\"/><Cell col=\"153\" colspan=\"2\" text=\"2021-02-71\" cssclass=\"cell_headMaster\"/><Cell col=\"155\" colspan=\"2\" text=\"2021-02-72\" cssclass=\"cell_headMaster\"/><Cell col=\"157\" colspan=\"2\" text=\"2021-02-73\" cssclass=\"cell_headMaster\"/><Cell col=\"159\" colspan=\"2\" text=\"2021-02-74\" cssclass=\"cell_headMaster\"/><Cell col=\"161\" colspan=\"2\" text=\"2021-02-75\" cssclass=\"cell_headMaster\"/><Cell col=\"163\" colspan=\"2\" text=\"2021-02-76\" cssclass=\"cell_headMaster\"/><Cell col=\"165\" colspan=\"2\" text=\"2021-02-77\" cssclass=\"cell_headMaster\"/><Cell col=\"167\" colspan=\"2\" text=\"2021-02-78\" cssclass=\"cell_headMaster\"/><Cell col=\"169\" colspan=\"2\" text=\"2021-02-79\" cssclass=\"cell_headMaster\"/><Cell col=\"171\" colspan=\"2\" text=\"2021-02-80\" cssclass=\"cell_headMaster\"/><Cell col=\"173\" colspan=\"2\" text=\"2021-02-81\" cssclass=\"cell_headMaster\"/><Cell col=\"175\" colspan=\"2\" text=\"2021-02-82\" cssclass=\"cell_headMaster\"/><Cell col=\"177\" colspan=\"2\" text=\"2021-02-83\" cssclass=\"cell_headMaster\"/><Cell col=\"179\" colspan=\"2\" text=\"2021-02-84\" cssclass=\"cell_headMaster\"/><Cell col=\"181\" colspan=\"2\" text=\"2021-02-85\" cssclass=\"cell_headMaster\"/><Cell col=\"183\" colspan=\"2\" text=\"2021-02-86\" cssclass=\"cell_headMaster\"/><Cell col=\"185\" colspan=\"2\" text=\"2021-02-87\" cssclass=\"cell_headMaster\"/><Cell col=\"187\" colspan=\"2\" text=\"2021-02-88\" cssclass=\"cell_headMaster\"/><Cell col=\"189\" colspan=\"2\" text=\"2021-02-89\" cssclass=\"cell_headMaster\"/><Cell col=\"191\" colspan=\"2\" text=\"2021-02-90\" cssclass=\"cell_headMaster\"/><Cell col=\"193\" rowspan=\"2\" text=\"확정여부\"/><Cell col=\"194\" rowspan=\"2\" text=\"확정일자\"/><Cell col=\"195\" rowspan=\"2\" text=\"확정자\"/><Cell col=\"196\" rowspan=\"2\" text=\"D (수주계획)\" textAlign=\"center\"/><Cell col=\"197\" rowspan=\"2\" text=\"D+1\" textAlign=\"center\"/><Cell col=\"198\" rowspan=\"2\" text=\"D+2\" textAlign=\"center\"/><Cell col=\"199\" rowspan=\"2\" text=\"D+3\" textAlign=\"center\"/><Cell col=\"200\" rowspan=\"2\" text=\"D+4\" textAlign=\"center\"/><Cell col=\"201\" rowspan=\"2\" text=\"D+5\" textAlign=\"center\"/><Cell col=\"202\" rowspan=\"2\" text=\"미투입수량\" textAlign=\"center\"/><Cell row=\"1\" col=\"13\" text=\"부하\"/><Cell row=\"1\" col=\"14\" text=\"예상재공\"/><Cell row=\"1\" col=\"15\" text=\"부하\"/><Cell row=\"1\" col=\"16\" text=\"예상재공\"/><Cell row=\"1\" col=\"17\" text=\"부하\"/><Cell row=\"1\" col=\"18\" text=\"예상재공\"/><Cell row=\"1\" col=\"19\" text=\"부하\"/><Cell row=\"1\" col=\"20\" text=\"예상재공\"/><Cell row=\"1\" col=\"21\" text=\"부하\"/><Cell row=\"1\" col=\"22\" text=\"예상재공\"/><Cell row=\"1\" col=\"23\" text=\"부하\"/><Cell row=\"1\" col=\"24\" text=\"예상재공\"/><Cell row=\"1\" col=\"25\" text=\"부하\"/><Cell row=\"1\" col=\"26\" text=\"예상재공\"/><Cell row=\"1\" col=\"27\" text=\"부하\"/><Cell row=\"1\" col=\"28\" text=\"예상재공\"/><Cell row=\"1\" col=\"29\" text=\"부하\"/><Cell row=\"1\" col=\"30\" text=\"예상재공\"/><Cell row=\"1\" col=\"31\" text=\"부하\"/><Cell row=\"1\" col=\"32\" text=\"예상재공\"/><Cell row=\"1\" col=\"33\" text=\"부하\"/><Cell row=\"1\" col=\"34\" text=\"예상재공\"/><Cell row=\"1\" col=\"35\" text=\"부하\"/><Cell row=\"1\" col=\"36\" text=\"예상재공\"/><Cell row=\"1\" col=\"37\" text=\"부하\"/><Cell row=\"1\" col=\"38\" text=\"예상재공\"/><Cell row=\"1\" col=\"39\" text=\"부하\"/><Cell row=\"1\" col=\"40\" text=\"예상재공\"/><Cell row=\"1\" col=\"41\" text=\"부하\"/><Cell row=\"1\" col=\"42\" text=\"예상재공\"/><Cell row=\"1\" col=\"43\" text=\"부하\"/><Cell row=\"1\" col=\"44\" text=\"예상재공\"/><Cell row=\"1\" col=\"45\" text=\"부하\"/><Cell row=\"1\" col=\"46\" text=\"예상재공\"/><Cell row=\"1\" col=\"47\" text=\"부하\"/><Cell row=\"1\" col=\"48\" text=\"예상재공\"/><Cell row=\"1\" col=\"49\" text=\"부하\"/><Cell row=\"1\" col=\"50\" text=\"예상재공\"/><Cell row=\"1\" col=\"51\" text=\"부하\"/><Cell row=\"1\" col=\"52\" text=\"예상재공\"/><Cell row=\"1\" col=\"53\" text=\"부하\"/><Cell row=\"1\" col=\"54\" text=\"예상재공\"/><Cell row=\"1\" col=\"55\" text=\"부하\"/><Cell row=\"1\" col=\"56\" text=\"예상재공\"/><Cell row=\"1\" col=\"57\" text=\"부하\"/><Cell row=\"1\" col=\"58\" text=\"예상재공\"/><Cell row=\"1\" col=\"59\" text=\"부하\"/><Cell row=\"1\" col=\"60\" text=\"예상재공\"/><Cell row=\"1\" col=\"61\" text=\"부하\"/><Cell row=\"1\" col=\"62\" text=\"예상재공\"/><Cell row=\"1\" col=\"63\" text=\"부하\"/><Cell row=\"1\" col=\"64\" text=\"예상재공\"/><Cell row=\"1\" col=\"65\" text=\"부하\"/><Cell row=\"1\" col=\"66\" text=\"예상재공\"/><Cell row=\"1\" col=\"67\" text=\"부하\"/><Cell row=\"1\" col=\"68\" text=\"예상재공\"/><Cell row=\"1\" col=\"69\" text=\"부하\"/><Cell row=\"1\" col=\"70\" text=\"예상재공\"/><Cell row=\"1\" col=\"71\" text=\"부하\"/><Cell row=\"1\" col=\"72\" text=\"예상재공\"/><Cell row=\"1\" col=\"73\" text=\"부하\"/><Cell row=\"1\" col=\"74\" text=\"예상재공\"/><Cell row=\"1\" col=\"75\" text=\"부하\"/><Cell row=\"1\" col=\"76\" text=\"예상재공\"/><Cell row=\"1\" col=\"77\" text=\"부하\"/><Cell row=\"1\" col=\"78\" text=\"예상재공\"/><Cell row=\"1\" col=\"79\" text=\"부하\"/><Cell row=\"1\" col=\"80\" text=\"예상재공\"/><Cell row=\"1\" col=\"81\" text=\"부하\"/><Cell row=\"1\" col=\"82\" text=\"예상재공\"/><Cell row=\"1\" col=\"83\" text=\"부하\"/><Cell row=\"1\" col=\"84\" text=\"예상재공\"/><Cell row=\"1\" col=\"85\" text=\"부하\"/><Cell row=\"1\" col=\"86\" text=\"예상재공\"/><Cell row=\"1\" col=\"87\" text=\"부하\"/><Cell row=\"1\" col=\"88\" text=\"예상재공\"/><Cell row=\"1\" col=\"89\" text=\"부하\"/><Cell row=\"1\" col=\"90\" text=\"예상재공\"/><Cell row=\"1\" col=\"91\" text=\"부하\"/><Cell row=\"1\" col=\"92\" text=\"예상재공\"/><Cell row=\"1\" col=\"93\" text=\"부하\"/><Cell row=\"1\" col=\"94\" text=\"예상재공\"/><Cell row=\"1\" col=\"95\" text=\"부하\"/><Cell row=\"1\" col=\"96\" text=\"예상재공\"/><Cell row=\"1\" col=\"97\" text=\"부하\"/><Cell row=\"1\" col=\"98\" text=\"예상재공\"/><Cell row=\"1\" col=\"99\" text=\"부하\"/><Cell row=\"1\" col=\"100\" text=\"예상재공\"/><Cell row=\"1\" col=\"101\" text=\"부하\"/><Cell row=\"1\" col=\"102\" text=\"예상재공\"/><Cell row=\"1\" col=\"103\" text=\"부하\"/><Cell row=\"1\" col=\"104\" text=\"예상재공\"/><Cell row=\"1\" col=\"105\" text=\"부하\"/><Cell row=\"1\" col=\"106\" text=\"예상재공\"/><Cell row=\"1\" col=\"107\" text=\"부하\"/><Cell row=\"1\" col=\"108\" text=\"예상재공\"/><Cell row=\"1\" col=\"109\" text=\"부하\"/><Cell row=\"1\" col=\"110\" text=\"예상재공\"/><Cell row=\"1\" col=\"111\" text=\"부하\"/><Cell row=\"1\" col=\"112\" text=\"예상재공\"/><Cell row=\"1\" col=\"113\" text=\"부하\"/><Cell row=\"1\" col=\"114\" text=\"예상재공\"/><Cell row=\"1\" col=\"115\" text=\"부하\"/><Cell row=\"1\" col=\"116\" text=\"예상재공\"/><Cell row=\"1\" col=\"117\" text=\"부하\"/><Cell row=\"1\" col=\"118\" text=\"예상재공\"/><Cell row=\"1\" col=\"119\" text=\"부하\"/><Cell row=\"1\" col=\"120\" text=\"예상재공\"/><Cell row=\"1\" col=\"121\" text=\"부하\"/><Cell row=\"1\" col=\"122\" text=\"예상재공\"/><Cell row=\"1\" col=\"123\" text=\"부하\"/><Cell row=\"1\" col=\"124\" text=\"예상재공\"/><Cell row=\"1\" col=\"125\" text=\"부하\"/><Cell row=\"1\" col=\"126\" text=\"예상재공\"/><Cell row=\"1\" col=\"127\" text=\"부하\"/><Cell row=\"1\" col=\"128\" text=\"예상재공\"/><Cell row=\"1\" col=\"129\" text=\"부하\"/><Cell row=\"1\" col=\"130\" text=\"예상재공\"/><Cell row=\"1\" col=\"131\" text=\"부하\"/><Cell row=\"1\" col=\"132\" text=\"예상재공\"/><Cell row=\"1\" col=\"133\" text=\"부하\"/><Cell row=\"1\" col=\"134\" text=\"예상재공\"/><Cell row=\"1\" col=\"135\" text=\"부하\"/><Cell row=\"1\" col=\"136\" text=\"예상재공\"/><Cell row=\"1\" col=\"137\" text=\"부하\"/><Cell row=\"1\" col=\"138\" text=\"예상재공\"/><Cell row=\"1\" col=\"139\" text=\"부하\"/><Cell row=\"1\" col=\"140\" text=\"예상재공\"/><Cell row=\"1\" col=\"141\" text=\"부하\"/><Cell row=\"1\" col=\"142\" text=\"예상재공\"/><Cell row=\"1\" col=\"143\" text=\"부하\"/><Cell row=\"1\" col=\"144\" text=\"예상재공\"/><Cell row=\"1\" col=\"145\" text=\"부하\"/><Cell row=\"1\" col=\"146\" text=\"예상재공\"/><Cell row=\"1\" col=\"147\" text=\"부하\"/><Cell row=\"1\" col=\"148\" text=\"예상재공\"/><Cell row=\"1\" col=\"149\" text=\"부하\"/><Cell row=\"1\" col=\"150\" text=\"예상재공\"/><Cell row=\"1\" col=\"151\" text=\"부하\"/><Cell row=\"1\" col=\"152\" text=\"예상재공\"/><Cell row=\"1\" col=\"153\" text=\"부하\"/><Cell row=\"1\" col=\"154\" text=\"예상재공\"/><Cell row=\"1\" col=\"155\" text=\"부하\"/><Cell row=\"1\" col=\"156\" text=\"예상재공\"/><Cell row=\"1\" col=\"157\" text=\"부하\"/><Cell row=\"1\" col=\"158\" text=\"예상재공\"/><Cell row=\"1\" col=\"159\" text=\"부하\"/><Cell row=\"1\" col=\"160\" text=\"예상재공\"/><Cell row=\"1\" col=\"161\" text=\"부하\"/><Cell row=\"1\" col=\"162\" text=\"예상재공\"/><Cell row=\"1\" col=\"163\" text=\"부하\"/><Cell row=\"1\" col=\"164\" text=\"예상재공\"/><Cell row=\"1\" col=\"165\" text=\"부하\"/><Cell row=\"1\" col=\"166\" text=\"예상재공\"/><Cell row=\"1\" col=\"167\" text=\"부하\"/><Cell row=\"1\" col=\"168\" text=\"예상재공\"/><Cell row=\"1\" col=\"169\" text=\"부하\"/><Cell row=\"1\" col=\"170\" text=\"예상재공\"/><Cell row=\"1\" col=\"171\" text=\"부하\"/><Cell row=\"1\" col=\"172\" text=\"예상재공\"/><Cell row=\"1\" col=\"173\" text=\"부하\"/><Cell row=\"1\" col=\"174\" text=\"예상재공\"/><Cell row=\"1\" col=\"175\" text=\"부하\"/><Cell row=\"1\" col=\"176\" text=\"예상재공\"/><Cell row=\"1\" col=\"177\" text=\"부하\"/><Cell row=\"1\" col=\"178\" text=\"예상재공\"/><Cell row=\"1\" col=\"179\" text=\"부하\"/><Cell row=\"1\" col=\"180\" text=\"예상재공\"/><Cell row=\"1\" col=\"181\" text=\"부하\"/><Cell row=\"1\" col=\"182\" text=\"예상재공\"/><Cell row=\"1\" col=\"183\" text=\"부하\"/><Cell row=\"1\" col=\"184\" text=\"예상재공\"/><Cell row=\"1\" col=\"185\" text=\"부하\"/><Cell row=\"1\" col=\"186\" text=\"예상재공\"/><Cell row=\"1\" col=\"187\" text=\"부하\"/><Cell row=\"1\" col=\"188\" text=\"예상재공\"/><Cell row=\"1\" col=\"189\" text=\"부하\"/><Cell row=\"1\" col=\"190\" text=\"예상재공\"/><Cell row=\"1\" col=\"191\" text=\"부하\"/><Cell row=\"1\" col=\"192\" text=\"예상재공\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:USERSEQUENCE\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PLANTID\"/><Cell col=\"7\" text=\"bind:LOADTOPSEGMENTCLASSID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:LOADMIDDLESEGMENTCLASSID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LOADSMALLSEGMENTCLASSID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TARGETPANELQTY\" textAlign=\"right\" color=\"#434bf4\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"11\" text=\"bind:TARGETSEGMENTQTY\" textAlign=\"right\" color=\"#434bf4\"/><Cell col=\"12\" text=\"bind:WIP\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"13\" text=\"bind:D1_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"D1_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"14\" text=\"bind:D1_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D1_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"15\" text=\"bind:D2_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D2_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"16\" text=\"bind:D2_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D2_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"17\" text=\"bind:D3_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D3_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"18\" text=\"bind:D3_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D3_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"19\" text=\"bind:D4_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D4_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"20\" text=\"bind:D4_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D4_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"21\" text=\"bind:D5_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D5_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"22\" text=\"bind:D5_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D5_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"23\" text=\"bind:D6_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D6_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"24\" text=\"bind:D6_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D6_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"25\" text=\"bind:D7_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D7_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"26\" text=\"bind:D7_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D7_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"27\" text=\"bind:D8_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D8_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"28\" text=\"bind:D8_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D8_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"29\" text=\"bind:D9_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D9_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"30\" text=\"bind:D9_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D9_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"31\" text=\"bind:D10_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D10_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"32\" text=\"bind:D10_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D10_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"33\" text=\"bind:D11_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D11_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"34\" text=\"bind:D11_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D11_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"35\" text=\"bind:D12_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D12_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"36\" text=\"bind:D12_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D12_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"37\" text=\"bind:D13_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D13_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"38\" text=\"bind:D13_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D13_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"39\" text=\"bind:D14_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D14_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"40\" text=\"bind:D14_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D14_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"41\" text=\"bind:D15_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D15_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"42\" text=\"bind:D15_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D15_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"43\" text=\"bind:D16_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D16_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"44\" text=\"bind:D16_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D16_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"45\" text=\"bind:D17_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D17_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"46\" text=\"bind:D17_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D17_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"47\" text=\"bind:D18_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D18_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"48\" text=\"bind:D18_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D18_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"49\" text=\"bind:D19_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D19_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"50\" text=\"bind:D19_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D19_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"51\" text=\"bind:D20_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D20_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"52\" text=\"bind:D20_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D20_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"53\" text=\"bind:D21_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D21_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"54\" text=\"bind:D21_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D21_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"55\" text=\"bind:D22_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D22_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"56\" text=\"bind:D22_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D22_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"57\" text=\"bind:D23_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D23_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"58\" text=\"bind:D23_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D23_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"59\" text=\"bind:D24_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D24_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"60\" text=\"bind:D24_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D24_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"61\" text=\"bind:D25_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D25_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"62\" text=\"bind:D25_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D25_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"63\" text=\"bind:D26_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D26_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"64\" text=\"bind:D26_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D26_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"65\" text=\"bind:D27_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D27_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"66\" text=\"bind:D27_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D27_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"67\" text=\"bind:D28_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D28_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"68\" text=\"bind:D28_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D28_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"69\" text=\"bind:D29_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D29_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"70\" text=\"bind:D29_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D29_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"71\" text=\"bind:D30_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D30_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"72\" text=\"bind:D30_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D30_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"73\" text=\"bind:D31_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D31_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"74\" text=\"bind:D31_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D31_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"75\" text=\"bind:D32_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D32_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"76\" text=\"bind:D32_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D32_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"77\" text=\"bind:D33_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D33_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"78\" text=\"bind:D33_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D33_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"79\" text=\"bind:D34_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D34_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"80\" text=\"bind:D34_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D34_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"81\" text=\"bind:D35_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D35_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"82\" text=\"bind:D35_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D35_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"83\" text=\"bind:D36_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D36_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"84\" text=\"bind:D36_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D36_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"85\" text=\"bind:D37_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D37_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"86\" text=\"bind:D37_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D37_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"87\" text=\"bind:D38_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D38_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"88\" text=\"bind:D38_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D38_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"89\" text=\"bind:D39_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D39_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"90\" text=\"bind:D39_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D39_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"91\" text=\"bind:D40_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D40_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"92\" text=\"bind:D40_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D40_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"93\" text=\"bind:D41_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D41_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"94\" text=\"bind:D41_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D41_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"95\" text=\"bind:D42_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D42_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"96\" text=\"bind:D42_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D42_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"97\" text=\"bind:D43_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D43_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"98\" text=\"bind:D43_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D43_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"99\" text=\"bind:D44_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D44_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"100\" text=\"bind:D44_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D44_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"101\" text=\"bind:D45_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D45_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"102\" text=\"bind:D45_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D45_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"103\" text=\"bind:D46_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D46_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"104\" text=\"bind:D46_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D46_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"105\" text=\"bind:D47_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D47_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"106\" text=\"bind:D47_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D47_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"107\" text=\"bind:D48_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D48_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"108\" text=\"bind:D48_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D48_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"109\" text=\"bind:D49_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D49_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"110\" text=\"bind:D49_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D49_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"111\" text=\"bind:D50_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D50_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"112\" text=\"bind:D50_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D50_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"113\" text=\"bind:D51_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D51_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"114\" text=\"bind:D51_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D51_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"115\" text=\"bind:D52_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D52_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"116\" text=\"bind:D52_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D52_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"117\" text=\"bind:D53_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D53_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"118\" text=\"bind:D53_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D53_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"119\" text=\"bind:D54_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D54_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"120\" text=\"bind:D54_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D54_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"121\" text=\"bind:D55_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D55_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"122\" text=\"bind:D55_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D55_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"123\" text=\"bind:D56_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D56_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"124\" text=\"bind:D56_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D56_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"125\" text=\"bind:D57_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D57_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"126\" text=\"bind:D57_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D57_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"127\" text=\"bind:D58_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D58_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"128\" text=\"bind:D58_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D58_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"129\" text=\"bind:D59_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D59_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"130\" text=\"bind:D59_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D59_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"131\" text=\"bind:D60_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D60_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"132\" text=\"bind:D60_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D60_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"133\" text=\"bind:D61_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D61_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"134\" text=\"bind:D61_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D61_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"135\" text=\"bind:D62_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D62_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"136\" text=\"bind:D62_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D62_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"137\" text=\"bind:D63_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D63_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"138\" text=\"bind:D63_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D63_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"139\" text=\"bind:D64_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D64_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"140\" text=\"bind:D64_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D64_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"141\" text=\"bind:D65_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D65_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"142\" text=\"bind:D65_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D65_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"143\" text=\"bind:D66_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D66_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"144\" text=\"bind:D66_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D66_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"145\" text=\"bind:D67_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D67_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"146\" text=\"bind:D67_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D67_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"147\" text=\"bind:D68_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D68_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"148\" text=\"bind:D68_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D68_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"149\" text=\"bind:D69_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D69_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"150\" text=\"bind:D69_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D69_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"151\" text=\"bind:D70_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D70_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"152\" text=\"bind:D70_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D70_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"153\" text=\"bind:D71_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D71_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"154\" text=\"bind:D71_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D71_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"155\" text=\"bind:D72_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D72_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"156\" text=\"bind:D72_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D72_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"157\" text=\"bind:D73_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D73_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"158\" text=\"bind:D73_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D73_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"159\" text=\"bind:D74_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D74_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"160\" text=\"bind:D74_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D74_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"161\" text=\"bind:D75_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D75_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"162\" text=\"bind:D75_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D75_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"163\" text=\"bind:D76_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D76_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"164\" text=\"bind:D76_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D76_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"165\" text=\"bind:D77_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D77_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"166\" text=\"bind:D77_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D77_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"167\" text=\"bind:D78_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D78_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"168\" text=\"bind:D78_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D78_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"169\" text=\"bind:D79_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D79_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"170\" text=\"bind:D79_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D79_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"171\" text=\"bind:D80_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D80_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"172\" text=\"bind:D80_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D80_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"173\" text=\"bind:D81_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D81_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"174\" text=\"bind:D81_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D81_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"175\" text=\"bind:D82_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D82_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"176\" text=\"bind:D82_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D82_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"177\" text=\"bind:D83_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D83_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"178\" text=\"bind:D83_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D83_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"179\" text=\"bind:D84_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D84_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"180\" text=\"bind:D84_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D84_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"181\" text=\"bind:D85_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D85_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"182\" text=\"bind:D85_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D85_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"183\" text=\"bind:D86_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D86_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"184\" text=\"bind:D86_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D86_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"185\" text=\"bind:D87_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D87_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"186\" text=\"bind:D87_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D87_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"187\" text=\"bind:D88_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D88_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"188\" text=\"bind:D88_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D88_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"189\" text=\"bind:D89_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D89_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"190\" text=\"bind:D89_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D89_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"191\" text=\"bind:D90_LOADQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"expr:ISCONFIRM==&apos;N&apos;?&apos;text&apos;:&apos;none&apos;\" maskeditformat=\"9,990.9999\" editautoselect=\"true\" background=\"#fefff4\" cssclass=\"expr:D90_LOADQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"192\" text=\"bind:D90_PLANWIPQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"9,990.9999\" cssclass=\"expr:D90_PLANWIPQTY&gt;=0?&apos;cell_black&apos;:&apos;cell_red&apos;\"/><Cell col=\"193\" text=\"bind:ISCONFIRM\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"none\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\" combocodecol=\"C,LoadConfirm,,Y,\"/><Cell col=\"194\" text=\"bind:CONFIRMDATE\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"195\" text=\"bind:CONFIRMUSERNAME\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"196\" text=\"bind:SUJUQTY1\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/><Cell col=\"197\" text=\"bind:SUJUQTY2\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/><Cell col=\"198\" text=\"bind:SUJUQTY3\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/><Cell col=\"199\" text=\"bind:SUJUQTY4\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/><Cell col=\"200\" text=\"bind:SUJUQTY5\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/><Cell col=\"201\" text=\"bind:SUJUQTY6\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/><Cell col=\"202\" text=\"bind:NOINPUTQTY\" textAlign=\"right\" displaytype=\"normal\" edittype=\"none\" maskeditformat=\"9,990.9999\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_load","sta_subTitle00_00:5","71","140","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDown_grd_load",null,"72","29","24","3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","200","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","206","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_loadDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("부하일");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_cust","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_loadDate","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productGubun","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_cust","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_loadType","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("부하타입");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_productType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_productGubun","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("CODENAME");
            obj.set_innerdataset("ds_prodDivisioList");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_loadType","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_codecolumn("C,LoadType,,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_header.form.spn_numRate","value","ds_workInfo","GOODQTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MFM00300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM00300M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00300M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM00300M.xfdl", function() {
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
        this.searchDiv = this.tab_search.Tab1.form;
        this.rightDiv = this.div_work.form;
        this.confirmDiv = this.div_work.form.Div01.form;
        this.topDiv = this.div_header.form;

        this.productId = ''; //품목코드
        this.custId = ''; //담당자

        this.selNumPos = 0; //그리드의 선태된 row의 일자에 포함된 컬럼 순서를 구한다.

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_initCombo();

        	// 틀고정
          	this.nfn_cellFix(this.rightDiv.grd_load, 5);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (첫번째 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_load.clearData();

        	this.ds_search.clearData();

        	//부하일이 공백이면 alert
        	if(this.searchDiv.cal_loadDate.value=='') {
        		alert('부하일을 입력 바랍니다.');
        		this.searchDiv.cbo_loadDate.setFocus();
        		return;
        	}

        	//품목코드가 공백이면 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));

        	this.ds_search.setColumn(0, "P_PRODUCTTYPE",				this.nfn_nvl(this.searchDiv.cbo_productType.value, "")); //양산구분
        	this.ds_search.setColumn(0, "P_LOADDATE", 					this.nfn_nvl(this.searchDiv.cal_loadDate.value, "")); //부하일
        	this.ds_search.setColumn(0, "P_LOADTYPE", 					this.nfn_nvl(this.searchDiv.cbo_loadType.value, "")); //부하타입(6일,30일,90일)
        	this.ds_search.setColumn(0, "P_LOADUSER", 					this.nfn_nvl(this.custId, "")); //담당자
        	this.ds_search.setColumn(0, "P_PRODUCTDEFTYPE", 			this.nfn_nvl(this.searchDiv.cbo_productGubun.value, "")); //제품구분
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 				this.nfn_nvl(this.productId, "")); //제품ID (멀티)

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectDaySegmentLoad");

        	var sSvcID 			= "selectDaySegmentLoad";
        	var sController 	= "/mfm00300/selectDaySegmentLoad.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_load=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Period (부하타입 : 6일, 30일, 90일) :: 일자 가지고 오기
         */
        this.fn_period = function (obj, e)
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_LOADDATE", 					this.nfn_nvl(this.searchDiv.cal_loadDate.value, "")); //부하일
        	this.ds_search.setColumn(0, "P_LOADTYPE", 					this.nfn_nvl(this.searchDiv.cbo_loadType.value, "")); //부하타입(6일,30일,90일)
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectDayDulationList");

        	var sSvcID 			= "selectDayDulationList";
        	var sController 	= "/mfmCommon/selectDayDulationList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dayList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	담당자Tab 필터 제품구분 콤보
         */
        this.fn_getProdDivision = function ()
        {
        	this.ds_search.clearData();

        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_search.setColumn(0, "CODECLASSID"		, "ProductDivision2");

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectProdDivision";
        	var sController 	= "/pcm08400/selectTypeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_prodDivisioList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 확정
         */
        this.fn_confirm = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_LOADDATE"	, this.nfn_nvl(this.searchDiv.cal_loadDate.value, "")); //부하일
        	this.ds_search.setColumn(0, "P_LOADTYPE"	, this.nfn_nvl(this.searchDiv.cbo_loadType.value, "")); //부하타입

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveDaySegmentLoadConfirm";
        	var sController 	= "/mfm00300/saveDaySegmentLoadConfirm.do";
        	//var sInDatasets 	= "INPUT0=ds_search:U INPUT=ds_load:U INPUT2=ds_dayList:A";
        	var sInDatasets 	= "INPUT0=ds_search:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_run = function(obj,e)
        {
        	 var tempLoadType = this.nfn_nvl(this.searchDiv.cbo_loadType.value, "");
        	 var numRate = this.nfn_nvl(this.topDiv.spn_numRate.value, ""); //적용율

        	 // DS 초기화
        	 this.ds_batch.clearData();
        	 this.ds_batch.addRow();

        	 // 조건
        	 if(tempLoadType=='SixDay'){
        		this.ds_batch.setColumn(0,"BATCH_CD"           , "mfm_loadsegmentsavebysixday"); // 6일 배치
        	 }else if(tempLoadType=='ThirtyDay'){
        		this.ds_batch.setColumn(0,"BATCH_CD"           , "mfm_loadsegmentsavebythirtyday"); // 30일 배치
        	 }else{
        		this.ds_batch.setColumn(0,"BATCH_CD"           , "mfm_loadsegmentsavebyninetyday"); // 90일 배치
        	 }
        	 this.ds_batch.setColumn(0,"PARAMS"             , "IFC:"+numRate); // 매개변수리스트//  구분자:":"
        	 this.ds_batch.setColumn(0,"BATCH_TYPE"         , "I"); // 배치유형( 즉시실행) //I:Immediate, S:Schedule

        	 //대상 초기화
        	 this.ds_proc_out.clearData();

        	 var sSvcID = "executeBatchJobRun";
        	 var sController = "/cmbm02100/executeBatchJobRun.do";
        	 var sInDatasets = "INPUT=ds_batch";
        	 var sOutDatasets = "ds_proc_out=ouput";
        	 var sArgs = "";
        	 sArgs += this.gfn_setParam("method",sSvcID);

        	 this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_load)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveDaySegmentLoad";
        	var sController 	= "/mfm00300/saveDaySegmentLoad.do";
        	var sInDatasets 	= "INPUT=ds_load:U INPUT2=ds_dayList:A";
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
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.searchDiv.cal_loadDate.set_value(this.tomfn_getCurrentlyDate("YYYY-MM-DD"));
        			//this.searchDiv.cal_loadDate.set_value("2020-01-16");
        			this.fn_period();
        			this.fn_getProdDivision();
        			this.topDiv.btn_confirm.set_enable(false);
        			break;
        		case "selectDaySegmentLoad": //[종합]그리드 CALLBACK
        			if (this.ds_load.rowcount==0) {
        				this.topDiv.btn_confirm.set_enable(false);
        				this.topDiv.btn_save.set_enable(false);
        			}else{
        				//확정정보 화면세팅
        				this.confirmDiv.edt_confirmTime.set_value(this.nfn_nvl(this.ds_load.getColumn(0, "CONFIRMDATE")));
        				this.confirmDiv.edt_confirmUserName.set_value(this.nfn_nvl(this.ds_load.getColumn(0, "CONFIRMUSERNAME")));
        				var tempConfirmDate = this.nfn_nvl(this.ds_load.getColumn(0, "CONFIRMDATE"),'');
        				//alert(tempConfirmDate);
        				if(tempConfirmDate==''){
        					this.topDiv.btn_confirm.set_enable(true);
        					this.topDiv.btn_save.set_enable(true);
        				}else{
        					this.topDiv.btn_confirm.set_enable(false);
        					this.topDiv.btn_save.set_enable(false);
        				}
        			}
        			break;
        		case "selectProdDivision": //제품구분 callback
        			this.ds_prodDivisioList.insertRow(0);
        			this.ds_prodDivisioList.setColumn(0,"CODEID"  ,"");
        			this.ds_prodDivisioList.setColumn(0,"CODENAME",this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.searchDiv.cbo_productGubun.set_index(0);
        			break;
        		case "selectDayDulationList": //부하타입 일자 리스트 callback
        			this.fn_allShowColumn(); //모두 보이고
        			this.fn_setColumnHideApply(); //안보여줄 컬럼 숨기기
        			break;
                case "saveDaySegmentLoadConfirm": //확정 callback
        			this.gfn_Message("Confirmation", "", "information", "ok"); //확정 되었습니다.
        			this.fn_search();
        			break;
        		case "saveDaySegmentLoad": //저장 callback
        			this.gfn_Message("SuccedSave", "", "information", "ok");
        			break;
        		case "executeBatchJobRun": //배치 실행
        			alert("공정 부하 배치가 실행 되었습니다.(6일:30초, 30일:3분, 90일:15분 소요");
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
        	}else if(popId=="P00184"){ //고객 조회
        		oArg.arg_type = "BA";
        		oArg.arg_searchStr = "SEARCH_VALUE="+this.searchDiv.edt_cust.value;//조회조건의 고객
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
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
        				objId += colArray[0]+"|"+colArray[2]+",";
        				objText += colArray[1]+",";
        			}else{
        				objId += colArray[0]+"|"+colArray[2];
        				objText += colArray[1];
        			}
        		}
        		this.searchDiv.edt_product.set_value(objText);
        		this.productId = objId;
        	} else if(sPopupId == "SEARCH_CUSTOMER")
        	{
        		this.searchDiv.edt_cust.set_value(rtn[1]);
        		this.custId = rtn[0];
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
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        this.fn_allShowColumn = function ()
        {
        	var selVal = this.searchDiv.cbo_loadType.value;
        	var selValNum = 0;
        	if(selVal=='SixDay') {
        		selValNum = 6;
        	}else if(selVal=='ThirtyDay') {
        		selValNum = 30;
        	}else{
        		selValNum = 90;
        	}
        	//그리드 컬럼 ALL 보이기
        	for(var i=192; i>=13; i--){
        		this.rightDiv.grd_load.setFormatColProperty(i, "size", 55);
        	}
        	var pos = 0;
        	for(var i=0; i<selValNum; i++){
        		this.rightDiv.grd_load.setCellProperty('Head', 13+i, "text", this.nfn_nvl(this.ds_dayList.getColumn(i, "DATE2")));
        	}
        }

        //해당하는 갯수만큼 안보이게 하기
        this.fn_setColumnHideApply = function ()
        {
        	var selVal = this.searchDiv.cbo_loadType.value;
        	var selValNum = 0;
        	var showColCnt1 = 0;
        	if(selVal=='SixDay') {
        		selValNum = 6;
        		showColCnt1 = 25;
        	}else if(selVal=='ThirtyDay') {
        		selValNum = 30;
        		showColCnt1 = 73;
        	}
        	//alert(selVal+'/'+showColCnt1);
        	if(selVal=='SixDay' || selVal=='ThirtyDay') {
        		for(var i=showColCnt1; i<=192; i++){
        			this.rightDiv.grd_load.setFormatColProperty(i, "size", 0);
        		}
        	}
        	if(selVal=='SixDay') {
        		this.rightDiv.grd_load.setFormatColProperty(196, "size", 0);
        		this.rightDiv.grd_load.setFormatColProperty(197, "size", 0);
        		this.rightDiv.grd_load.setFormatColProperty(198, "size", 0);
        		this.rightDiv.grd_load.setFormatColProperty(199, "size", 0);
        		this.rightDiv.grd_load.setFormatColProperty(200, "size", 0);
        		this.rightDiv.grd_load.setFormatColProperty(201, "size", 0);
        	}else{
        		this.rightDiv.grd_load.setFormatColProperty(196, "size", 80);
        		this.rightDiv.grd_load.setFormatColProperty(197, "size", 80);
        		this.rightDiv.grd_load.setFormatColProperty(198, "size", 80);
        		this.rightDiv.grd_load.setFormatColProperty(199, "size", 80);
        		this.rightDiv.grd_load.setFormatColProperty(200, "size", 80);
        		this.rightDiv.grd_load.setFormatColProperty(201, "size", 80);
        	}
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_searchClear = function(obj,e)
        {
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_load.clearData();
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        };

        this.tab_00_Tab1_cbo_loadType_onitemchanged = function(obj,e)
        {
        	this.ds_load.clearData();
        	this.confirmDiv.edt_confirmTime.set_value('');
        	this.confirmDiv.edt_confirmUserName.set_value('');

        	this.fn_period();
        };

        this.tab_00_Tab1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tab1_btn_product_onclick();
        	}
        };

        this.tab_00_Tab1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.tab_00_Tab1_edt_cust_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tab1_btn_search02_onclick();
        	}
        };

        this.tab_00_Tab1_btn_search02_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	//sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SEARCH_CUSTOMER","P00184", sArgs); //고객 조회
        };

        this.fn_cellCal = function()
        {
        	this.rightDiv.grd_load.set_enableredraw(false);
        	this.rightDiv.grd_load.set_enableevent(false);
        	this.ds_load.set_enableevent(false);

        	var totalCount = this.ds_load.rowcount;
        	var curRow = this.ds_load.rowposition;
        	var productDefId = this.nfn_nvl(this.ds_load.getColumn(this.ds_load.rowposition, "PRODUCTDEFID"),'');
            var productDefVersion = this.nfn_nvl(this.ds_load.getColumn(this.ds_load.rowposition, "PRODUCTDEFVERSION"),'');
            var userSequence = this.nfn_nvl(this.ds_load.getColumn(this.ds_load.rowposition, "USERSEQUENCE"),'');
            var targetPanelQTY = this.nfn_nvl(this.ds_load.getColumn(this.ds_load.rowposition, "TARGETPANELQTY"),'');
            var targetSegmentQTY = this.nfn_nvl(this.ds_load.getColumn(this.ds_load.rowposition, "TARGETSEGMENTQTY"),'');
        	var minusAddQty = 0;

        	//alert(totalCount+'/'+curRow+'/'+productDefId+'/'+productDefVersion+'/'+userSequence+'/'+targetPanelQTY+'/'+targetSegmentQTY);

        	//그리드에서 이벤트 일어난 일자를 구한다.
        	var changeDate = this.fn_getPosDate(this.selNumPos);
        	//alert('그리드에서 선태된 컬럼의 일자 :: '+changeDate);

        	var arrDateAll = [];
        	var arrDate = [];
        	var firstDate = '';
        	var i2Flag = false;
        	var i2 = 0; //담기는 시점 카운트
        	var loadDate = this.searchDiv.cal_loadDate.value; //조회조건의 조회일자
        	var periodCount = this.ds_dayList.rowcount;
        	var toDate = '';

        	//alert(loadDate+'/'+periodCount);

        	for(var i=0; i<periodCount; i++){
        		toDate = this.ds_dayList.getColumn(i, "DATE2"); //마지막일자가 담긴다.
        		if(i==0){
        			firstDate = toDate;
        		}
        		arrDateAll[i] = toDate;
        		if(toDate==changeDate){
        			i2Flag = true; //클릭한 시점
        		}
        		if(i2Flag){
        			arrDate[i2] = toDate; //changeDate 부터 toDate 까지의 일자만 배열에 넣는다.
        			i2++;
        		}
        	}

        	//alert('배열에 담긴 일자 갯수 :: '+arrDate.length);

        	//alert('찾을 값 :: PRODUCTDEFID ['+productDefId+'] PRODUCTDEFVERSION ['+productDefVersion+']');

            var firstIndex = this.ds_load.findRowExpr("PRODUCTDEFID=='" + productDefId + "' && PRODUCTDEFVERSION=='" + productDefVersion + "'");
        	//alert('찾자 :: '+firstIndex+'/'+totalCount);
        	var lastIndex = 0;
        	var tempProductDefId = '';
        	var tempProductDefVersion = '';
        	for(var i=firstIndex; i<=totalCount; i++){ //찾은ROW부터 끝까지 검색
        		tempProductDefId 		= this.nfn_nvl(this.ds_load.getColumn(i, "PRODUCTDEFID"),'');
        		tempProductDefVersion 	= this.nfn_nvl(this.ds_load.getColumn(i, "PRODUCTDEFVERSION"),'');
        		if(tempProductDefId == productDefId && tempProductDefVersion == productDefVersion){ //제품+버젼 같으면 마지막 Index저장
        			lastIndex = i;
        		}
        	}

        	//alert('찾은 결과 Range : ['+firstIndex+'] ~ ['+lastIndex+'] ');

        	var targetSegmentQty = 0;
        	var targetPanelQty = 0;
        	var wipQty = 0;
        	var nowDate = this.tomfn_getCurrentlyDate("YYYY-MM-DD");

        	//alert('현재일자 :: '+nowDate+'/curRow='+curRow+'/lastIndex='+lastIndex+'/arrDate sz : '+arrDate.length);

        	//************************
        	//일자단위 ROW / COL 처리
        	//--------------------------------------------라인단위 날짜별 처리
        	//************************
        	for(var j=curRow; j<=lastIndex; j++) //선택된row부터 해당품목의 마지막 까지 반복
            {
        		tempProductDefId 		= this.nfn_nvl(this.ds_load.getColumn(j, "PRODUCTDEFID"),'');
        		tempProductDefVersion 	= this.nfn_nvl(this.ds_load.getColumn(j, "PRODUCTDEFVERSION"),'');
        		targetSegmentQty = this.ds_load.getColumn(j, "TARGETSEGMENTQTY"); //일목표수량
                targetPanelQty = this.ds_load.getColumn(j, "TARGETPANELQTY"); //일목표공정수
                wipQty = this.ds_load.getColumn(j, "WIP"); //맨처음 재공현황(스냅샷재공수량)

        		//변경한 날짜의 Row부터 예상 재공/부하량 계산하도록 함수 호출
        		for(var k=0; k<=arrDate.length; k++) //foreach (DateTime day in EachDay(changeDate, toDate)), 선택된 컬럼의 일자부터 마지막일자까지 반복
        		{
        			//arrDate : 변경한 일자부터 마지막일자 까지 저장된 배열
        			//changeDate : 수정한 일자
        			minusAddQty = minusAddQty + this.fn_loadCalculator(j, firstIndex, targetSegmentQty, targetPanelQty, wipQty, arrDate[k], changeDate, curRow, firstDate, tempProductDefId, tempProductDefVersion);
        		}
        	}

        	this.rightDiv.grd_load.set_enableredraw(true);
        	this.rightDiv.grd_load.set_enableevent(true);
        	this.ds_load.set_enableevent(true);

        	if(minusAddQty>0){
        		alert("재공 수량이 음수값이 나올 수 없습니다.");
        	}
        };

        //==================
        // 부하 수량 계산 (라인단위 일자별 처리 이다)
        // nexacro.toNumber(
        //==================
        this.fn_loadCalculator = function ( index,		//처리 라인
        									firstIndex, //전체에서 찾은 제품+버젼의 첫번째row 이다.
        									targetSegmentQty,
        									targetPanelQty,
        									wipQty,
        									day,		//처리 일자 (라인단위로 일자별로 처리 한다.)
        									changeDate, //액션이 발생한 일자이다.
        									curRow,		//액션이 발생한 라인이다.
        									firstDate,	//첫번째 일자이다. (스냅샷 재공을 읽어야 하는지 판단 하는데 사용 한다.)
        									productDefId,
        									productDefVersion
        								  )
        {
        	var loadQty = 0;
        	var beforeSegLoadQty = 0; //이전공정부하량
        	var lastDayBeforeSegWipQty = 0;
        	var expectWipQty = 0;
        	var lastDay = this.tomfn_getDateToStringFormat(this.tomfn_getStringToDateFormat(day, "YYYY-MM-DD", -1),'YYYY-MM-DD'); //전일자
        	var dayPos = 0;
        	var lastDayPos = 0;
        	var minusQty = 0;
        	var edityn = 'N';
        	var calyn = 'N';
        	var tempProductDefId = '';
        	var tempProductDefVersion = '';

        	//현재 행이 해당 모델의 Revision의 첫번째 Index와 같으면 이전 공정 부하량 0으로 세팅
        	if (index == firstIndex) //해당 판의 첫번째 ROW이면
        	{
        		beforeSegLoadQty = 0; //day의 이전부하량을 가져온다.
        	}
        	else
        	{
        		dayPos = this.fn_getDatePos(day); //현재일자의pos를 가져온다.
        		beforeSegLoadQty = this.ds_load.getColumn(index-1, "D"+dayPos+"_LOADQTY"); //day의 이전부하량을 가져온다.
        	}

        	//현 공정의 부하량 가져옴
        	dayPos = this.fn_getDatePos(day);
        	loadQty = this.ds_load.getColumn(index, "D"+dayPos+"_LOADQTY");

        	//day의 이전날짜가 존재하는지 확인(중요::::첫날인지확인하는것)
        	lastDayPos = this.fn_getDatePos(lastDay); //이전일자의pos
        	if (lastDayPos>-1) //전일자가 존재하는 경우는 이전일자의 재공을 읽는다.
        	{
        		if (index==curRow && day == changeDate) //수정컬럼 이라면(**중요**)(**중요**)(**중요**)
        		{
        			lastDayBeforeSegWipQty = this.ds_load.getColumn(index, "D"+lastDayPos+"_PLANWIPQTY"); //일자별 재공

        			//변경한 행의 동일 날짜인 경우 예상 재공만 계산하여 Update
        			loadQty = this.ds_load.getColumn(index, "D"+dayPos+"_LOADQTY"); //loadQty 는 입력한값 그대로 계산 한다.(**중요**)(**중요**)(**중요**)

        			expectWipQty = (lastDayBeforeSegWipQty + beforeSegLoadQty) - loadQty;
        			if (expectWipQty < 0) {
        				//alert("재공 수량이 음수값이 나올 수 없습니다.");
        				minusQty++;
        			}
        			this.ds_load.setColumn(index, "D"+dayPos+"_LOADQTY", loadQty);
        			this.ds_load.setColumn(index, "D"+dayPos+"_EDITYN", "Y");
        			this.ds_load.setColumn(index, "D"+dayPos+"_PLANWIPQTY", expectWipQty);
        		}
        		else //옆으로 흐른다....(일자별 처리 반복 이므로)
        		{
        			//일목표 공정 개수 만큼 전일 공정 재공의 합
        			//일목표 수량 보다 크면 일목표 수량이 부하량
        			var beforeSegWipCountSum = 0;
        			lastDayBeforeSegWipQty = this.ds_load.getColumn(index, "D"+lastDayPos+"_PLANWIPQTY"); //일자별 재공

        			for (var j=index; j>(index-targetSegmentQty); j--)
        			{
        				edityn = this.nfn_nvl(this.ds_load.getColumn(j, "D"+dayPos+"_EDITYN"),'N'); //수정여부
        				tempProductDefId 		= this.nfn_nvl(this.ds_load.getColumn(j, "PRODUCTDEFID"),'');
        				tempProductDefVersion 	= this.nfn_nvl(this.ds_load.getColumn(j, "PRODUCTDEFVERSION"),'');
        				if(productDefId==tempProductDefId && productDefVersion==tempProductDefVersion){ //해당제품에 대해서만 처리 한다.

        					if(edityn=='Y'){//값이 변경되었다면
        						beforeSegWipCountSum += this.ds_load.getColumn(j, "D"+dayPos+"_LOADQTY");
        						break;
        					}else{
        						beforeSegWipCountSum += this.ds_load.getColumn(j, "D"+lastDayPos+"_PLANWIPQTY");
        					}

        				}
        			}

        			if (beforeSegWipCountSum > targetPanelQty){
        				loadQty = targetPanelQty;
        			}else{
        				loadQty = beforeSegWipCountSum;
        			}

        			//if (loadCount < 0) {
        			//   throw new Exception("부하량 수량이 음수값이 나올 수 없습니다.");
        			//}

        			//전날 동일 공정 예상재공 + 현재 날짜의 이전 공정 부하량 - 현재 날짜의 진행 공정 부하량
        			expectWipQty = (lastDayBeforeSegWipQty + beforeSegLoadQty) - loadQty;

        			if (expectWipQty < 0) {
        				//alert("재공 수량이 음수값이 나올 수 없습니다.");
        				minusQty++;
        			}

        			this.ds_load.setColumn(index, "D"+dayPos+"_LOADQTY", loadQty);
        			this.ds_load.setColumn(index, "D"+dayPos+"_PLANWIPQTY", expectWipQty);
        		}
        	}
        	else //첫날짜 계산이면 :: 아래 부분은 첫날만 처리 한다.(첫날 수정 없으면 아래 부분 안탄다.)
        	{
        		if(index==curRow){ //이벤트 칸 이면 loadQty 는 입력한값 그대로 계산 한다.
        			loadQty = this.ds_load.getColumn(index, "D"+dayPos+"_LOADQTY");

        			expectWipQty = (wipQty + beforeSegLoadQty) - loadQty;
        			if (expectWipQty < 0) {
        				//alert("재공 수량이 음수값이 나올 수 없습니다.");
        				minusQty++;
        			}
        			this.ds_load.setColumn(index, "D"+dayPos+"_LOADQTY", loadQty);
        			this.ds_load.setColumn(index, "D"+dayPos+"_EDITYN", "Y");
        			this.ds_load.setColumn(index, "D"+dayPos+"_PLANWIPQTY", expectWipQty);
        		}else{
        			//이벤트 컬럼 아래는 loadQty 재계산 한다.
        			var beforeSegWipCountSum = 0;
        			lastDayBeforeSegWipQty = this.ds_load.getColumn(index, "WIP"); //현재라인[계산될컬럼] 스냅샷 재공

        			for (var j=index; j>(index-targetSegmentQty); j--)
        			{
        				edityn = this.nfn_nvl(this.ds_load.getColumn(j, "D"+dayPos+"_EDITYN"),'N'); //수정여부
        				tempProductDefId 		= this.nfn_nvl(this.ds_load.getColumn(j, "PRODUCTDEFID"),'');
        				tempProductDefVersion 	= this.nfn_nvl(this.ds_load.getColumn(j, "PRODUCTDEFVERSION"),'');
        				if(productDefId==tempProductDefId && productDefVersion==tempProductDefVersion){//해당제품에 대해서만 처리 한다.

        					if(edityn=='Y'){//값이 변경되었다면
        						beforeSegWipCountSum += this.ds_load.getColumn(j, "D"+dayPos+"_LOADQTY");
        						break; //공정갯수만큼의 이전공정 계산하지 않고 나간다.
        					}else{
        						beforeSegWipCountSum += this.ds_load.getColumn(j, "WIP");
        					}

        				}
        			}

        			if (beforeSegWipCountSum > targetPanelQty){
        				loadQty = targetPanelQty;
        			}else{
        				loadQty = beforeSegWipCountSum;
        			}

        			//첫날인경우 재공 현황 + 이전 공정 부하량(0) - 현재 공정 부하량 계산
        			expectWipQty = (lastDayBeforeSegWipQty + beforeSegLoadQty) - loadQty;
        			if (expectWipQty < 0) {
        				//alert("재공 수량이 음수값이 나올 수 없습니다.");
        				minusQty++;
        			}

        			this.ds_load.setColumn(index, "D"+dayPos+"_LOADQTY", loadQty);
        			this.ds_load.setColumn(index, "D"+dayPos+"_PLANWIPQTY", expectWipQty);
        		}
        	}

        	//alert('계산 완료...');
        	return minusQty;
        }

        this.div_work_grd_load_oncellclick = function(obj,e)
        {
        	//this.rightDiv.grd_load
        	//if (this.nfn_isEqualCol(obj, e.cell, "ISRC")) {
        	//}
        	var colName = this.gfn_getBindColName(this.rightDiv.grd_load,e.cell); //D1_LOADQTY
        	var dashPos = colName.indexOf('_');
        	var numStr = colName.substr(1,dashPos-1);
        	this.selNumPos = nexacro.toNumber(numStr);
        	//alert(colName+'/'+dashPos+'/'+numStr);
        	//if(dashPos==-1){ //_가 발견되지 않으면 확정 버튼 안보이게 처리
        	//	this.topDiv.btn_confirm.set_enable(false);
        	//}else{
        	//	this.topDiv.btn_confirm.set_enable(true);
        	//}
        };

        this.fn_getDatePos = function (dt)
        {
        	var periodCount = this.ds_dayList.rowcount;
        	var curDt = '';
        	var retPos = -1;
        	for(var i=0; i<periodCount; i++){
        		curDt = this.ds_dayList.getColumn(i, "DATE2"); //마지막일자가 담긴다.
        		if(curDt==dt){
        			retPos = (i+1);
        		}
        	}
        	return retPos;
        };

        this.fn_getPosDate = function (pos)
        {
        	var periodCount = this.ds_dayList.rowcount;
        	var curDt = '';
        	var retDate = '';
        	for(var i=0; i<periodCount; i++){
        		curDt = this.ds_dayList.getColumn(i, "DATE2"); //마지막일자가 담긴다.
        		if(i==(pos-1)){
        			retDate = curDt;
        		}
        	}
        	return retDate;
        };

        this.ds_load_oncolumnchanged = function(obj,e)
        {
        	this.fn_cellCal();
        };

        this.tab_00_Tab1_cal_loadDate_onchanged = function(obj,e)
        {
        	this.ds_load.clearData();
        	this.confirmDiv.edt_confirmTime.set_value('');
        	this.confirmDiv.edt_confirmUserName.set_value('');

        	this.fn_period();
        };

        this.div_work_btn_xlDown_grd_load_onclick = function(obj,e)
        {
        	var sName = "rightDiv.grd_load";
        	// 저장될 엑셀명
        	var file_name = "공정부하예측";
        	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        };

        this.div_work_grd_load_onkeyup = function(obj,e)
        {
        	this.rightDiv.grd_load.set_enableevent(true);
        };

        this.div_work_grd_load_onkeydown = function(obj,e)
        {
        	this.rightDiv.grd_load.set_enableredraw(false);
        	this.rightDiv.grd_load.set_enableevent(false);
        	this.ds_load.set_enableevent(false);

        	//alert('1234 :: '+obj.currentrow+'/'+obj.currentcell);

        	if(		obj.currentcell == (12+1)) { this.ds_load.setColumn(obj.currentrow, "D1_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+2)) { this.ds_load.setColumn(obj.currentrow, "D2_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+3)) { this.ds_load.setColumn(obj.currentrow, "D3_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+4)) { this.ds_load.setColumn(obj.currentrow, "D4_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+5)) { this.ds_load.setColumn(obj.currentrow, "D5_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+6)) { this.ds_load.setColumn(obj.currentrow, "D6_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+7)) { this.ds_load.setColumn(obj.currentrow, "D7_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+8)) { this.ds_load.setColumn(obj.currentrow, "D8_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+9)) { this.ds_load.setColumn(obj.currentrow, "D9_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+10)) { this.ds_load.setColumn(obj.currentrow, "D10_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+11)) { this.ds_load.setColumn(obj.currentrow, "D11_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+12)) { this.ds_load.setColumn(obj.currentrow, "D12_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+13)) { this.ds_load.setColumn(obj.currentrow, "D13_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+14)) { this.ds_load.setColumn(obj.currentrow, "D14_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+15)) { this.ds_load.setColumn(obj.currentrow, "D15_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+16)) { this.ds_load.setColumn(obj.currentrow, "D16_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+17)) { this.ds_load.setColumn(obj.currentrow, "D17_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+18)) { this.ds_load.setColumn(obj.currentrow, "D18_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+19)) { this.ds_load.setColumn(obj.currentrow, "D19_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+20)) { this.ds_load.setColumn(obj.currentrow, "D20_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+21)) { this.ds_load.setColumn(obj.currentrow, "D21_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+22)) { this.ds_load.setColumn(obj.currentrow, "D22_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+23)) { this.ds_load.setColumn(obj.currentrow, "D23_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+24)) { this.ds_load.setColumn(obj.currentrow, "D24_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+25)) { this.ds_load.setColumn(obj.currentrow, "D25_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+26)) { this.ds_load.setColumn(obj.currentrow, "D26_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+27)) { this.ds_load.setColumn(obj.currentrow, "D27_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+28)) { this.ds_load.setColumn(obj.currentrow, "D28_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+29)) { this.ds_load.setColumn(obj.currentrow, "D29_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+30)) { this.ds_load.setColumn(obj.currentrow, "D30_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+31)) { this.ds_load.setColumn(obj.currentrow, "D31_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+32)) { this.ds_load.setColumn(obj.currentrow, "D32_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+33)) { this.ds_load.setColumn(obj.currentrow, "D33_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+34)) { this.ds_load.setColumn(obj.currentrow, "D34_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+35)) { this.ds_load.setColumn(obj.currentrow, "D35_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+36)) { this.ds_load.setColumn(obj.currentrow, "D36_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+37)) { this.ds_load.setColumn(obj.currentrow, "D37_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+38)) { this.ds_load.setColumn(obj.currentrow, "D38_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+39)) { this.ds_load.setColumn(obj.currentrow, "D39_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+40)) { this.ds_load.setColumn(obj.currentrow, "D40_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+41)) { this.ds_load.setColumn(obj.currentrow, "D41_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+42)) { this.ds_load.setColumn(obj.currentrow, "D42_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+43)) { this.ds_load.setColumn(obj.currentrow, "D43_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+44)) { this.ds_load.setColumn(obj.currentrow, "D44_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+45)) { this.ds_load.setColumn(obj.currentrow, "D45_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+46)) { this.ds_load.setColumn(obj.currentrow, "D46_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+47)) { this.ds_load.setColumn(obj.currentrow, "D47_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+48)) { this.ds_load.setColumn(obj.currentrow, "D48_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+49)) { this.ds_load.setColumn(obj.currentrow, "D49_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+50)) { this.ds_load.setColumn(obj.currentrow, "D50_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+51)) { this.ds_load.setColumn(obj.currentrow, "D51_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+52)) { this.ds_load.setColumn(obj.currentrow, "D52_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+53)) { this.ds_load.setColumn(obj.currentrow, "D53_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+54)) { this.ds_load.setColumn(obj.currentrow, "D54_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+55)) { this.ds_load.setColumn(obj.currentrow, "D55_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+56)) { this.ds_load.setColumn(obj.currentrow, "D56_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+57)) { this.ds_load.setColumn(obj.currentrow, "D57_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+58)) { this.ds_load.setColumn(obj.currentrow, "D58_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+59)) { this.ds_load.setColumn(obj.currentrow, "D59_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+60)) { this.ds_load.setColumn(obj.currentrow, "D60_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+61)) { this.ds_load.setColumn(obj.currentrow, "D61_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+62)) { this.ds_load.setColumn(obj.currentrow, "D62_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+63)) { this.ds_load.setColumn(obj.currentrow, "D63_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+64)) { this.ds_load.setColumn(obj.currentrow, "D64_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+65)) { this.ds_load.setColumn(obj.currentrow, "D65_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+66)) { this.ds_load.setColumn(obj.currentrow, "D66_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+67)) { this.ds_load.setColumn(obj.currentrow, "D67_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+68)) { this.ds_load.setColumn(obj.currentrow, "D68_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+69)) { this.ds_load.setColumn(obj.currentrow, "D69_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+70)) { this.ds_load.setColumn(obj.currentrow, "D70_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+71)) { this.ds_load.setColumn(obj.currentrow, "D71_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+72)) { this.ds_load.setColumn(obj.currentrow, "D72_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+73)) { this.ds_load.setColumn(obj.currentrow, "D73_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+74)) { this.ds_load.setColumn(obj.currentrow, "D74_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+75)) { this.ds_load.setColumn(obj.currentrow, "D75_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+76)) { this.ds_load.setColumn(obj.currentrow, "D76_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+77)) { this.ds_load.setColumn(obj.currentrow, "D77_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+78)) { this.ds_load.setColumn(obj.currentrow, "D78_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+79)) { this.ds_load.setColumn(obj.currentrow, "D79_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+80)) { this.ds_load.setColumn(obj.currentrow, "D80_EDITYN", "Y"); }

        	else if(obj.currentcell == (12+81)) { this.ds_load.setColumn(obj.currentrow, "D81_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+82)) { this.ds_load.setColumn(obj.currentrow, "D82_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+83)) { this.ds_load.setColumn(obj.currentrow, "D83_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+84)) { this.ds_load.setColumn(obj.currentrow, "D84_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+85)) { this.ds_load.setColumn(obj.currentrow, "D85_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+86)) { this.ds_load.setColumn(obj.currentrow, "D86_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+87)) { this.ds_load.setColumn(obj.currentrow, "D87_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+88)) { this.ds_load.setColumn(obj.currentrow, "D88_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+89)) { this.ds_load.setColumn(obj.currentrow, "D89_EDITYN", "Y"); }
        	else if(obj.currentcell == (12+90)) { this.ds_load.setColumn(obj.currentrow, "D90_EDITYN", "Y"); }

        	//alert('---1---');

        	this.rightDiv.grd_load.set_enableredraw(true);
        	//this.rightDiv.grd_load.set_enableevent(true);
        	this.ds_load.set_enableevent(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_confirm.addEventHandler("onclick",this.fn_confirm,this);
            this.div_header.form.btn_confirm00.addEventHandler("onclick",this.fn_run,this);
            this.div_work.form.grd_load.addEventHandler("oncellclick",this.div_work_grd_load_oncellclick,this);
            this.div_work.form.grd_load.addEventHandler("onkeyup",this.div_work_grd_load_onkeyup,this);
            this.div_work.form.grd_load.addEventHandler("onkeydown",this.div_work_grd_load_onkeydown,this);
            this.div_work.form.btn_xlDown_grd_load.addEventHandler("onclick",this.div_work_btn_xlDown_grd_load_onclick,this);
            this.tab_search.Tab1.form.btn_01.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.edt_product.addEventHandler("onkeydown",this.tab_00_Tab1_edt_product_onkeydown,this);
            this.tab_search.Tab1.form.btn_product.addEventHandler("onclick",this.tab_00_Tab1_btn_product_onclick,this);
            this.tab_search.Tab1.form.edt_cust.addEventHandler("onkeydown",this.tab_00_Tab1_edt_cust_onkeydown,this);
            this.tab_search.Tab1.form.btn_search02.addEventHandler("onclick",this.tab_00_Tab1_btn_search02_onclick,this);
            this.tab_search.Tab1.form.cal_loadDate.addEventHandler("onchanged",this.tab_00_Tab1_cal_loadDate_onchanged,this);
            this.tab_search.Tab1.form.cbo_loadType.addEventHandler("onitemchanged",this.tab_00_Tab1_cbo_loadType_onitemchanged,this);
            this.ds_load.addEventHandler("oncolumnchanged",this.ds_load_oncolumnchanged,this);
            this.ds_prodDivisioList.addEventHandler("cancolumnchange",this.ds_chkChang,this);
            this.ds_prodDivisioList.addEventHandler("oncolumnchanged",this.ds_chkchanged,this);
            this.ds_batch.addEventHandler("oncolumnchanged",this.ds_load_oncolumnchanged,this);
            this.ds_proc_out.addEventHandler("oncolumnchanged",this.ds_load_oncolumnchanged,this);
        };
        this.loadIncludeScript("MFM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
