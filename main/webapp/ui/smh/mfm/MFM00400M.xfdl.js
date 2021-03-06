(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00400M");
            this.set_titletext("공정부하종합현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_summary", this);
            obj._setContents("<ColumnInfo><Column id=\"LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D1_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D1_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D1_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D1_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_ETCQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_PRODUCTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_ETCQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D1_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_LOADQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADDATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayList", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("생산계획");
            this.tab_00.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","175","102","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","175","146","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_siteId","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_loadDate","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("부하일");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_midProcess","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_midProcess","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductPlanDegree,,Y,Y");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_loadType","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("부하 타입");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","92",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_loadType","108","60","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,LoadType,,Y,Y");
            obj.set_type("dropdown");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_process","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_type("dropdown");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_minProcess","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("소공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_minProcess","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProductPlanDegree,,Y,Y");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_loadDate","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","197","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_01","0","0",null,null,"0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_00.form.tab_01);
            obj.set_text("종합");
            this.div_00.form.tab_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"34","888",null,null,null,null,null,this.div_00.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("공정부하량 종합현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_00.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_summary","0","34",null,null,"0","0",null,null,null,null,this.div_00.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_summary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대공정명\"/><Cell col=\"1\" rowspan=\"2\" text=\"중공정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소공정명\"/><Cell col=\"3\" colspan=\"4\" text=\"2021-05-01\"/><Cell col=\"7\" colspan=\"4\" text=\"2021-05-02\"/><Cell col=\"11\" colspan=\"4\" text=\"2021-05-03\"/><Cell col=\"15\" colspan=\"4\" text=\"2021-05-04\"/><Cell col=\"19\" colspan=\"4\" text=\"2021-05-05\"/><Cell col=\"23\" colspan=\"4\" text=\"2021-05-06\"/><Cell col=\"27\" colspan=\"4\" text=\"2021-05-07\"/><Cell col=\"31\" colspan=\"4\" text=\"2021-05-08\"/><Cell col=\"35\" colspan=\"4\" text=\"2021-05-09\"/><Cell col=\"39\" colspan=\"4\" text=\"2021-05-10\"/><Cell col=\"43\" colspan=\"4\" text=\"2021-05-11\"/><Cell col=\"47\" colspan=\"4\" text=\"2021-05-12\"/><Cell col=\"51\" colspan=\"4\" text=\"2021-05-13\"/><Cell col=\"55\" colspan=\"4\" text=\"2021-05-14\"/><Cell col=\"59\" colspan=\"4\" text=\"2021-05-15\"/><Cell col=\"63\" colspan=\"4\" text=\"2021-05-16\"/><Cell col=\"67\" colspan=\"4\" text=\"2021-05-17\"/><Cell col=\"71\" colspan=\"4\" text=\"2021-05-18\"/><Cell col=\"75\" colspan=\"4\" text=\"2021-05-19\"/><Cell col=\"79\" colspan=\"4\" text=\"2021-05-20\"/><Cell col=\"83\" colspan=\"4\" text=\"2021-05-21\"/><Cell col=\"87\" colspan=\"4\" text=\"2021-05-22\"/><Cell col=\"91\" colspan=\"4\" text=\"2021-05-23\"/><Cell col=\"95\" colspan=\"4\" text=\"2021-05-24\"/><Cell col=\"99\" colspan=\"4\" text=\"2021-05-25\"/><Cell col=\"103\" colspan=\"4\" text=\"2021-05-26\"/><Cell col=\"107\" colspan=\"4\" text=\"2021-05-27\"/><Cell col=\"111\" colspan=\"4\" text=\"2021-05-28\"/><Cell col=\"115\" colspan=\"4\" text=\"2021-05-29\"/><Cell col=\"119\" colspan=\"4\" text=\"2021-05-30\"/><Cell col=\"123\" colspan=\"4\" text=\"2021-05-31\"/><Cell col=\"127\" colspan=\"4\" text=\"2021-05-32\"/><Cell col=\"131\" colspan=\"4\" text=\"2021-05-33\"/><Cell col=\"135\" colspan=\"4\" text=\"2021-05-34\"/><Cell col=\"139\" colspan=\"4\" text=\"2021-05-35\"/><Cell col=\"143\" colspan=\"4\" text=\"2021-05-36\"/><Cell col=\"147\" colspan=\"4\" text=\"2021-05-37\"/><Cell col=\"151\" colspan=\"4\" text=\"2021-05-38\"/><Cell col=\"155\" colspan=\"4\" text=\"2021-05-39\"/><Cell col=\"159\" colspan=\"4\" text=\"2021-05-40\"/><Cell col=\"163\" colspan=\"4\" text=\"2021-05-41\"/><Cell col=\"167\" colspan=\"4\" text=\"2021-05-42\"/><Cell col=\"171\" colspan=\"4\" text=\"2021-05-43\"/><Cell col=\"175\" colspan=\"4\" text=\"2021-05-44\"/><Cell col=\"179\" colspan=\"4\" text=\"2021-05-45\"/><Cell col=\"183\" colspan=\"4\" text=\"2021-05-46\"/><Cell col=\"187\" colspan=\"4\" text=\"2021-05-47\"/><Cell col=\"191\" colspan=\"4\" text=\"2021-05-48\"/><Cell col=\"195\" colspan=\"4\" text=\"2021-05-49\"/><Cell col=\"199\" colspan=\"4\" text=\"2021-05-50\"/><Cell col=\"203\" colspan=\"4\" text=\"2021-05-51\"/><Cell col=\"207\" colspan=\"4\" text=\"2021-05-52\"/><Cell col=\"211\" colspan=\"4\" text=\"2021-05-53\"/><Cell col=\"215\" colspan=\"4\" text=\"2021-05-54\"/><Cell col=\"219\" colspan=\"4\" text=\"2021-05-55\"/><Cell col=\"223\" colspan=\"4\" text=\"2021-05-56\"/><Cell col=\"227\" colspan=\"4\" text=\"2021-05-57\"/><Cell col=\"231\" colspan=\"4\" text=\"2021-05-58\"/><Cell col=\"235\" colspan=\"4\" text=\"2021-05-59\"/><Cell col=\"239\" colspan=\"4\" text=\"2021-05-60\"/><Cell col=\"243\" colspan=\"4\" text=\"2021-05-61\"/><Cell col=\"247\" colspan=\"4\" text=\"2021-05-62\"/><Cell col=\"251\" colspan=\"4\" text=\"2021-05-63\"/><Cell col=\"255\" colspan=\"4\" text=\"2021-05-64\"/><Cell col=\"259\" colspan=\"4\" text=\"2021-05-65\"/><Cell col=\"263\" colspan=\"4\" text=\"2021-05-66\"/><Cell col=\"267\" colspan=\"4\" text=\"2021-05-67\"/><Cell col=\"271\" colspan=\"4\" text=\"2021-05-68\"/><Cell col=\"275\" colspan=\"4\" text=\"2021-05-69\"/><Cell col=\"279\" colspan=\"4\" text=\"2021-05-70\"/><Cell col=\"283\" colspan=\"4\" text=\"2021-05-71\"/><Cell col=\"287\" colspan=\"4\" text=\"2021-05-72\"/><Cell col=\"291\" colspan=\"4\" text=\"2021-05-73\"/><Cell col=\"295\" colspan=\"4\" text=\"2021-05-74\"/><Cell col=\"299\" colspan=\"4\" text=\"2021-05-75\"/><Cell col=\"303\" colspan=\"4\" text=\"2021-05-76\"/><Cell col=\"307\" colspan=\"4\" text=\"2021-05-77\"/><Cell col=\"311\" colspan=\"4\" text=\"2021-05-78\"/><Cell col=\"315\" colspan=\"4\" text=\"2021-05-79\"/><Cell col=\"319\" colspan=\"4\" text=\"2021-05-80\"/><Cell col=\"323\" colspan=\"4\" text=\"2021-05-81\"/><Cell col=\"327\" colspan=\"4\" text=\"2021-05-82\"/><Cell col=\"331\" colspan=\"4\" text=\"2021-05-83\"/><Cell col=\"335\" colspan=\"4\" text=\"2021-05-84\"/><Cell col=\"339\" colspan=\"4\" text=\"2021-05-85\"/><Cell col=\"343\" colspan=\"4\" text=\"2021-05-86\"/><Cell col=\"347\" colspan=\"4\" text=\"2021-05-87\"/><Cell col=\"351\" colspan=\"4\" text=\"2021-05-88\"/><Cell col=\"355\" colspan=\"4\" text=\"2021-05-89\"/><Cell col=\"359\" colspan=\"4\" text=\"2021-05-90\"/><Cell row=\"1\" col=\"3\" text=\"합계\"/><Cell row=\"1\" col=\"4\" text=\"양산\"/><Cell row=\"1\" col=\"5\" text=\"샘플\"/><Cell row=\"1\" col=\"6\" text=\"기타\"/><Cell row=\"1\" col=\"7\" text=\"합계\"/><Cell row=\"1\" col=\"8\" text=\"양산\"/><Cell row=\"1\" col=\"9\" text=\"샘플\"/><Cell row=\"1\" col=\"10\" text=\"기타\"/><Cell row=\"1\" col=\"11\" text=\"합계\"/><Cell row=\"1\" col=\"12\" text=\"양산\"/><Cell row=\"1\" col=\"13\" text=\"샘플\"/><Cell row=\"1\" col=\"14\" text=\"기타\"/><Cell row=\"1\" col=\"15\" text=\"합계\"/><Cell row=\"1\" col=\"16\" text=\"양산\"/><Cell row=\"1\" col=\"17\" text=\"샘플\"/><Cell row=\"1\" col=\"18\" text=\"기타\"/><Cell row=\"1\" col=\"19\" text=\"합계\"/><Cell row=\"1\" col=\"20\" text=\"양산\"/><Cell row=\"1\" col=\"21\" text=\"샘플\"/><Cell row=\"1\" col=\"22\" text=\"기타\"/><Cell row=\"1\" col=\"23\" text=\"합계\"/><Cell row=\"1\" col=\"24\" text=\"양산\"/><Cell row=\"1\" col=\"25\" text=\"샘플\"/><Cell row=\"1\" col=\"26\" text=\"기타\"/><Cell row=\"1\" col=\"27\" text=\"합계\"/><Cell row=\"1\" col=\"28\" text=\"양산\"/><Cell row=\"1\" col=\"29\" text=\"샘플\"/><Cell row=\"1\" col=\"30\" text=\"기타\"/><Cell row=\"1\" col=\"31\" text=\"합계\"/><Cell row=\"1\" col=\"32\" text=\"양산\"/><Cell row=\"1\" col=\"33\" text=\"샘플\"/><Cell row=\"1\" col=\"34\" text=\"기타\"/><Cell row=\"1\" col=\"35\" text=\"합계\"/><Cell row=\"1\" col=\"36\" text=\"양산\"/><Cell row=\"1\" col=\"37\" text=\"샘플\"/><Cell row=\"1\" col=\"38\" text=\"기타\"/><Cell row=\"1\" col=\"39\" text=\"합계\"/><Cell row=\"1\" col=\"40\" text=\"양산\"/><Cell row=\"1\" col=\"41\" text=\"샘플\"/><Cell row=\"1\" col=\"42\" text=\"기타\"/><Cell row=\"1\" col=\"43\" text=\"합계\"/><Cell row=\"1\" col=\"44\" text=\"양산\"/><Cell row=\"1\" col=\"45\" text=\"샘플\"/><Cell row=\"1\" col=\"46\" text=\"기타\"/><Cell row=\"1\" col=\"47\" text=\"합계\"/><Cell row=\"1\" col=\"48\" text=\"양산\"/><Cell row=\"1\" col=\"49\" text=\"샘플\"/><Cell row=\"1\" col=\"50\" text=\"기타\"/><Cell row=\"1\" col=\"51\" text=\"합계\"/><Cell row=\"1\" col=\"52\" text=\"양산\"/><Cell row=\"1\" col=\"53\" text=\"샘플\"/><Cell row=\"1\" col=\"54\" text=\"기타\"/><Cell row=\"1\" col=\"55\" text=\"합계\"/><Cell row=\"1\" col=\"56\" text=\"양산\"/><Cell row=\"1\" col=\"57\" text=\"샘플\"/><Cell row=\"1\" col=\"58\" text=\"기타\"/><Cell row=\"1\" col=\"59\" text=\"합계\"/><Cell row=\"1\" col=\"60\" text=\"양산\"/><Cell row=\"1\" col=\"61\" text=\"샘플\"/><Cell row=\"1\" col=\"62\" text=\"기타\"/><Cell row=\"1\" col=\"63\" text=\"합계\"/><Cell row=\"1\" col=\"64\" text=\"양산\"/><Cell row=\"1\" col=\"65\" text=\"샘플\"/><Cell row=\"1\" col=\"66\" text=\"기타\"/><Cell row=\"1\" col=\"67\" text=\"합계\"/><Cell row=\"1\" col=\"68\" text=\"양산\"/><Cell row=\"1\" col=\"69\" text=\"샘플\"/><Cell row=\"1\" col=\"70\" text=\"기타\"/><Cell row=\"1\" col=\"71\" text=\"합계\"/><Cell row=\"1\" col=\"72\" text=\"양산\"/><Cell row=\"1\" col=\"73\" text=\"샘플\"/><Cell row=\"1\" col=\"74\" text=\"기타\"/><Cell row=\"1\" col=\"75\" text=\"합계\"/><Cell row=\"1\" col=\"76\" text=\"양산\"/><Cell row=\"1\" col=\"77\" text=\"샘플\"/><Cell row=\"1\" col=\"78\" text=\"기타\"/><Cell row=\"1\" col=\"79\" text=\"합계\"/><Cell row=\"1\" col=\"80\" text=\"양산\"/><Cell row=\"1\" col=\"81\" text=\"샘플\"/><Cell row=\"1\" col=\"82\" text=\"기타\"/><Cell row=\"1\" col=\"83\" text=\"합계\"/><Cell row=\"1\" col=\"84\" text=\"양산\"/><Cell row=\"1\" col=\"85\" text=\"샘플\"/><Cell row=\"1\" col=\"86\" text=\"기타\"/><Cell row=\"1\" col=\"87\" text=\"합계\"/><Cell row=\"1\" col=\"88\" text=\"양산\"/><Cell row=\"1\" col=\"89\" text=\"샘플\"/><Cell row=\"1\" col=\"90\" text=\"기타\"/><Cell row=\"1\" col=\"91\" text=\"합계\"/><Cell row=\"1\" col=\"92\" text=\"양산\"/><Cell row=\"1\" col=\"93\" text=\"샘플\"/><Cell row=\"1\" col=\"94\" text=\"기타\"/><Cell row=\"1\" col=\"95\" text=\"합계\"/><Cell row=\"1\" col=\"96\" text=\"양산\"/><Cell row=\"1\" col=\"97\" text=\"샘플\"/><Cell row=\"1\" col=\"98\" text=\"기타\"/><Cell row=\"1\" col=\"99\" text=\"합계\"/><Cell row=\"1\" col=\"100\" text=\"양산\"/><Cell row=\"1\" col=\"101\" text=\"샘플\"/><Cell row=\"1\" col=\"102\" text=\"기타\"/><Cell row=\"1\" col=\"103\" text=\"합계\"/><Cell row=\"1\" col=\"104\" text=\"양산\"/><Cell row=\"1\" col=\"105\" text=\"샘플\"/><Cell row=\"1\" col=\"106\" text=\"기타\"/><Cell row=\"1\" col=\"107\" text=\"합계\"/><Cell row=\"1\" col=\"108\" text=\"양산\"/><Cell row=\"1\" col=\"109\" text=\"샘플\"/><Cell row=\"1\" col=\"110\" text=\"기타\"/><Cell row=\"1\" col=\"111\" text=\"합계\"/><Cell row=\"1\" col=\"112\" text=\"양산\"/><Cell row=\"1\" col=\"113\" text=\"샘플\"/><Cell row=\"1\" col=\"114\" text=\"기타\"/><Cell row=\"1\" col=\"115\" text=\"합계\"/><Cell row=\"1\" col=\"116\" text=\"양산\"/><Cell row=\"1\" col=\"117\" text=\"샘플\"/><Cell row=\"1\" col=\"118\" text=\"기타\"/><Cell row=\"1\" col=\"119\" text=\"합계\"/><Cell row=\"1\" col=\"120\" text=\"양산\"/><Cell row=\"1\" col=\"121\" text=\"샘플\"/><Cell row=\"1\" col=\"122\" text=\"기타\"/><Cell row=\"1\" col=\"123\" text=\"합계\"/><Cell row=\"1\" col=\"124\" text=\"양산\"/><Cell row=\"1\" col=\"125\" text=\"샘플\"/><Cell row=\"1\" col=\"126\" text=\"기타\"/><Cell row=\"1\" col=\"127\" text=\"합계\"/><Cell row=\"1\" col=\"128\" text=\"양산\"/><Cell row=\"1\" col=\"129\" text=\"샘플\"/><Cell row=\"1\" col=\"130\" text=\"기타\"/><Cell row=\"1\" col=\"131\" text=\"합계\"/><Cell row=\"1\" col=\"132\" text=\"양산\"/><Cell row=\"1\" col=\"133\" text=\"샘플\"/><Cell row=\"1\" col=\"134\" text=\"기타\"/><Cell row=\"1\" col=\"135\" text=\"합계\"/><Cell row=\"1\" col=\"136\" text=\"양산\"/><Cell row=\"1\" col=\"137\" text=\"샘플\"/><Cell row=\"1\" col=\"138\" text=\"기타\"/><Cell row=\"1\" col=\"139\" text=\"합계\"/><Cell row=\"1\" col=\"140\" text=\"양산\"/><Cell row=\"1\" col=\"141\" text=\"샘플\"/><Cell row=\"1\" col=\"142\" text=\"기타\"/><Cell row=\"1\" col=\"143\" text=\"합계\"/><Cell row=\"1\" col=\"144\" text=\"양산\"/><Cell row=\"1\" col=\"145\" text=\"샘플\"/><Cell row=\"1\" col=\"146\" text=\"기타\"/><Cell row=\"1\" col=\"147\" text=\"합계\"/><Cell row=\"1\" col=\"148\" text=\"양산\"/><Cell row=\"1\" col=\"149\" text=\"샘플\"/><Cell row=\"1\" col=\"150\" text=\"기타\"/><Cell row=\"1\" col=\"151\" text=\"합계\"/><Cell row=\"1\" col=\"152\" text=\"양산\"/><Cell row=\"1\" col=\"153\" text=\"샘플\"/><Cell row=\"1\" col=\"154\" text=\"기타\"/><Cell row=\"1\" col=\"155\" text=\"합계\"/><Cell row=\"1\" col=\"156\" text=\"양산\"/><Cell row=\"1\" col=\"157\" text=\"샘플\"/><Cell row=\"1\" col=\"158\" text=\"기타\"/><Cell row=\"1\" col=\"159\" text=\"합계\"/><Cell row=\"1\" col=\"160\" text=\"양산\"/><Cell row=\"1\" col=\"161\" text=\"샘플\"/><Cell row=\"1\" col=\"162\" text=\"기타\"/><Cell row=\"1\" col=\"163\" text=\"합계\"/><Cell row=\"1\" col=\"164\" text=\"양산\"/><Cell row=\"1\" col=\"165\" text=\"샘플\"/><Cell row=\"1\" col=\"166\" text=\"기타\"/><Cell row=\"1\" col=\"167\" text=\"합계\"/><Cell row=\"1\" col=\"168\" text=\"양산\"/><Cell row=\"1\" col=\"169\" text=\"샘플\"/><Cell row=\"1\" col=\"170\" text=\"기타\"/><Cell row=\"1\" col=\"171\" text=\"합계\"/><Cell row=\"1\" col=\"172\" text=\"양산\"/><Cell row=\"1\" col=\"173\" text=\"샘플\"/><Cell row=\"1\" col=\"174\" text=\"기타\"/><Cell row=\"1\" col=\"175\" text=\"합계\"/><Cell row=\"1\" col=\"176\" text=\"양산\"/><Cell row=\"1\" col=\"177\" text=\"샘플\"/><Cell row=\"1\" col=\"178\" text=\"기타\"/><Cell row=\"1\" col=\"179\" text=\"합계\"/><Cell row=\"1\" col=\"180\" text=\"양산\"/><Cell row=\"1\" col=\"181\" text=\"샘플\"/><Cell row=\"1\" col=\"182\" text=\"기타\"/><Cell row=\"1\" col=\"183\" text=\"합계\"/><Cell row=\"1\" col=\"184\" text=\"양산\"/><Cell row=\"1\" col=\"185\" text=\"샘플\"/><Cell row=\"1\" col=\"186\" text=\"기타\"/><Cell row=\"1\" col=\"187\" text=\"합계\"/><Cell row=\"1\" col=\"188\" text=\"양산\"/><Cell row=\"1\" col=\"189\" text=\"샘플\"/><Cell row=\"1\" col=\"190\" text=\"기타\"/><Cell row=\"1\" col=\"191\" text=\"합계\"/><Cell row=\"1\" col=\"192\" text=\"양산\"/><Cell row=\"1\" col=\"193\" text=\"샘플\"/><Cell row=\"1\" col=\"194\" text=\"기타\"/><Cell row=\"1\" col=\"195\" text=\"합계\"/><Cell row=\"1\" col=\"196\" text=\"양산\"/><Cell row=\"1\" col=\"197\" text=\"샘플\"/><Cell row=\"1\" col=\"198\" text=\"기타\"/><Cell row=\"1\" col=\"199\" text=\"합계\"/><Cell row=\"1\" col=\"200\" text=\"양산\"/><Cell row=\"1\" col=\"201\" text=\"샘플\"/><Cell row=\"1\" col=\"202\" text=\"기타\"/><Cell row=\"1\" col=\"203\" text=\"합계\"/><Cell row=\"1\" col=\"204\" text=\"양산\"/><Cell row=\"1\" col=\"205\" text=\"샘플\"/><Cell row=\"1\" col=\"206\" text=\"기타\"/><Cell row=\"1\" col=\"207\" text=\"합계\"/><Cell row=\"1\" col=\"208\" text=\"양산\"/><Cell row=\"1\" col=\"209\" text=\"샘플\"/><Cell row=\"1\" col=\"210\" text=\"기타\"/><Cell row=\"1\" col=\"211\" text=\"합계\"/><Cell row=\"1\" col=\"212\" text=\"양산\"/><Cell row=\"1\" col=\"213\" text=\"샘플\"/><Cell row=\"1\" col=\"214\" text=\"기타\"/><Cell row=\"1\" col=\"215\" text=\"합계\"/><Cell row=\"1\" col=\"216\" text=\"양산\"/><Cell row=\"1\" col=\"217\" text=\"샘플\"/><Cell row=\"1\" col=\"218\" text=\"기타\"/><Cell row=\"1\" col=\"219\" text=\"합계\"/><Cell row=\"1\" col=\"220\" text=\"양산\"/><Cell row=\"1\" col=\"221\" text=\"샘플\"/><Cell row=\"1\" col=\"222\" text=\"기타\"/><Cell row=\"1\" col=\"223\" text=\"합계\"/><Cell row=\"1\" col=\"224\" text=\"양산\"/><Cell row=\"1\" col=\"225\" text=\"샘플\"/><Cell row=\"1\" col=\"226\" text=\"기타\"/><Cell row=\"1\" col=\"227\" text=\"합계\"/><Cell row=\"1\" col=\"228\" text=\"양산\"/><Cell row=\"1\" col=\"229\" text=\"샘플\"/><Cell row=\"1\" col=\"230\" text=\"기타\"/><Cell row=\"1\" col=\"231\" text=\"합계\"/><Cell row=\"1\" col=\"232\" text=\"양산\"/><Cell row=\"1\" col=\"233\" text=\"샘플\"/><Cell row=\"1\" col=\"234\" text=\"기타\"/><Cell row=\"1\" col=\"235\" text=\"합계\"/><Cell row=\"1\" col=\"236\" text=\"양산\"/><Cell row=\"1\" col=\"237\" text=\"샘플\"/><Cell row=\"1\" col=\"238\" text=\"기타\"/><Cell row=\"1\" col=\"239\" text=\"합계\"/><Cell row=\"1\" col=\"240\" text=\"양산\"/><Cell row=\"1\" col=\"241\" text=\"샘플\"/><Cell row=\"1\" col=\"242\" text=\"기타\"/><Cell row=\"1\" col=\"243\" text=\"합계\"/><Cell row=\"1\" col=\"244\" text=\"양산\"/><Cell row=\"1\" col=\"245\" text=\"샘플\"/><Cell row=\"1\" col=\"246\" text=\"기타\"/><Cell row=\"1\" col=\"247\" text=\"합계\"/><Cell row=\"1\" col=\"248\" text=\"양산\"/><Cell row=\"1\" col=\"249\" text=\"샘플\"/><Cell row=\"1\" col=\"250\" text=\"기타\"/><Cell row=\"1\" col=\"251\" text=\"합계\"/><Cell row=\"1\" col=\"252\" text=\"양산\"/><Cell row=\"1\" col=\"253\" text=\"샘플\"/><Cell row=\"1\" col=\"254\" text=\"기타\"/><Cell row=\"1\" col=\"255\" text=\"합계\"/><Cell row=\"1\" col=\"256\" text=\"양산\"/><Cell row=\"1\" col=\"257\" text=\"샘플\"/><Cell row=\"1\" col=\"258\" text=\"기타\"/><Cell row=\"1\" col=\"259\" text=\"합계\"/><Cell row=\"1\" col=\"260\" text=\"양산\"/><Cell row=\"1\" col=\"261\" text=\"샘플\"/><Cell row=\"1\" col=\"262\" text=\"기타\"/><Cell row=\"1\" col=\"263\" text=\"합계\"/><Cell row=\"1\" col=\"264\" text=\"양산\"/><Cell row=\"1\" col=\"265\" text=\"샘플\"/><Cell row=\"1\" col=\"266\" text=\"기타\"/><Cell row=\"1\" col=\"267\" text=\"합계\"/><Cell row=\"1\" col=\"268\" text=\"양산\"/><Cell row=\"1\" col=\"269\" text=\"샘플\"/><Cell row=\"1\" col=\"270\" text=\"기타\"/><Cell row=\"1\" col=\"271\" text=\"합계\"/><Cell row=\"1\" col=\"272\" text=\"양산\"/><Cell row=\"1\" col=\"273\" text=\"샘플\"/><Cell row=\"1\" col=\"274\" text=\"기타\"/><Cell row=\"1\" col=\"275\" text=\"합계\"/><Cell row=\"1\" col=\"276\" text=\"양산\"/><Cell row=\"1\" col=\"277\" text=\"샘플\"/><Cell row=\"1\" col=\"278\" text=\"기타\"/><Cell row=\"1\" col=\"279\" text=\"합계\"/><Cell row=\"1\" col=\"280\" text=\"양산\"/><Cell row=\"1\" col=\"281\" text=\"샘플\"/><Cell row=\"1\" col=\"282\" text=\"기타\"/><Cell row=\"1\" col=\"283\" text=\"합계\"/><Cell row=\"1\" col=\"284\" text=\"양산\"/><Cell row=\"1\" col=\"285\" text=\"샘플\"/><Cell row=\"1\" col=\"286\" text=\"기타\"/><Cell row=\"1\" col=\"287\" text=\"합계\"/><Cell row=\"1\" col=\"288\" text=\"양산\"/><Cell row=\"1\" col=\"289\" text=\"샘플\"/><Cell row=\"1\" col=\"290\" text=\"기타\"/><Cell row=\"1\" col=\"291\" text=\"합계\"/><Cell row=\"1\" col=\"292\" text=\"양산\"/><Cell row=\"1\" col=\"293\" text=\"샘플\"/><Cell row=\"1\" col=\"294\" text=\"기타\"/><Cell row=\"1\" col=\"295\" text=\"합계\"/><Cell row=\"1\" col=\"296\" text=\"양산\"/><Cell row=\"1\" col=\"297\" text=\"샘플\"/><Cell row=\"1\" col=\"298\" text=\"기타\"/><Cell row=\"1\" col=\"299\" text=\"합계\"/><Cell row=\"1\" col=\"300\" text=\"양산\"/><Cell row=\"1\" col=\"301\" text=\"샘플\"/><Cell row=\"1\" col=\"302\" text=\"기타\"/><Cell row=\"1\" col=\"303\" text=\"합계\"/><Cell row=\"1\" col=\"304\" text=\"양산\"/><Cell row=\"1\" col=\"305\" text=\"샘플\"/><Cell row=\"1\" col=\"306\" text=\"기타\"/><Cell row=\"1\" col=\"307\" text=\"합계\"/><Cell row=\"1\" col=\"308\" text=\"양산\"/><Cell row=\"1\" col=\"309\" text=\"샘플\"/><Cell row=\"1\" col=\"310\" text=\"기타\"/><Cell row=\"1\" col=\"311\" text=\"합계\"/><Cell row=\"1\" col=\"312\" text=\"양산\"/><Cell row=\"1\" col=\"313\" text=\"샘플\"/><Cell row=\"1\" col=\"314\" text=\"기타\"/><Cell row=\"1\" col=\"315\" text=\"합계\"/><Cell row=\"1\" col=\"316\" text=\"양산\"/><Cell row=\"1\" col=\"317\" text=\"샘플\"/><Cell row=\"1\" col=\"318\" text=\"기타\"/><Cell row=\"1\" col=\"319\" text=\"합계\"/><Cell row=\"1\" col=\"320\" text=\"양산\"/><Cell row=\"1\" col=\"321\" text=\"샘플\"/><Cell row=\"1\" col=\"322\" text=\"기타\"/><Cell row=\"1\" col=\"323\" text=\"합계\"/><Cell row=\"1\" col=\"324\" text=\"양산\"/><Cell row=\"1\" col=\"325\" text=\"샘플\"/><Cell row=\"1\" col=\"326\" text=\"기타\"/><Cell row=\"1\" col=\"327\" text=\"합계\"/><Cell row=\"1\" col=\"328\" text=\"양산\"/><Cell row=\"1\" col=\"329\" text=\"샘플\"/><Cell row=\"1\" col=\"330\" text=\"기타\"/><Cell row=\"1\" col=\"331\" text=\"합계\"/><Cell row=\"1\" col=\"332\" text=\"양산\"/><Cell row=\"1\" col=\"333\" text=\"샘플\"/><Cell row=\"1\" col=\"334\" text=\"기타\"/><Cell row=\"1\" col=\"335\" text=\"합계\"/><Cell row=\"1\" col=\"336\" text=\"양산\"/><Cell row=\"1\" col=\"337\" text=\"샘플\"/><Cell row=\"1\" col=\"338\" text=\"기타\"/><Cell row=\"1\" col=\"339\" text=\"합계\"/><Cell row=\"1\" col=\"340\" text=\"양산\"/><Cell row=\"1\" col=\"341\" text=\"샘플\"/><Cell row=\"1\" col=\"342\" text=\"기타\"/><Cell row=\"1\" col=\"343\" text=\"합계\"/><Cell row=\"1\" col=\"344\" text=\"양산\"/><Cell row=\"1\" col=\"345\" text=\"샘플\"/><Cell row=\"1\" col=\"346\" text=\"기타\"/><Cell row=\"1\" col=\"347\" text=\"합계\"/><Cell row=\"1\" col=\"348\" text=\"양산\"/><Cell row=\"1\" col=\"349\" text=\"샘플\"/><Cell row=\"1\" col=\"350\" text=\"기타\"/><Cell row=\"1\" col=\"351\" text=\"합계\"/><Cell row=\"1\" col=\"352\" text=\"양산\"/><Cell row=\"1\" col=\"353\" text=\"샘플\"/><Cell row=\"1\" col=\"354\" text=\"기타\"/><Cell row=\"1\" col=\"355\" text=\"합계\"/><Cell row=\"1\" col=\"356\" text=\"양산\"/><Cell row=\"1\" col=\"357\" text=\"샘플\"/><Cell row=\"1\" col=\"358\" text=\"기타\"/><Cell row=\"1\" col=\"359\" text=\"합계\"/><Cell row=\"1\" col=\"360\" text=\"양산\"/><Cell row=\"1\" col=\"361\" text=\"샘플\"/><Cell row=\"1\" col=\"362\" text=\"기타\"/></Band><Band id=\"body\"><Cell text=\"bind:LOADTOPSEGMENTCLASSNAME\"/><Cell col=\"1\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"2\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\"/><Cell col=\"3\" text=\"bind:D1_TOTALQTY\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:D1_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:D1_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:D1_ETCQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:D2_TOTALQTY\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:D2_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:D2_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:D2_ETCQTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:D3_TOTALQTY\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:D3_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:D3_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:D3_ETCQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:D4_TOTALQTY\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:D4_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:D4_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:D4_ETCQTY\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:D5_TOTALQTY\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:D5_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:D5_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:D5_ETCQTY\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:D6_TOTALQTY\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:D6_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:D6_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:D6_ETCQTY\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:D7_TOTALQTY\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:D7_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:D7_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:D7_ETCQTY\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:D8_TOTALQTY\" textAlign=\"right\"/><Cell col=\"32\" text=\"bind:D8_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"33\" text=\"bind:D8_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"34\" text=\"bind:D8_ETCQTY\" textAlign=\"right\"/><Cell col=\"35\" text=\"bind:D9_TOTALQTY\" textAlign=\"right\"/><Cell col=\"36\" text=\"bind:D9_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"37\" text=\"bind:D9_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"38\" text=\"bind:D9_ETCQTY\" textAlign=\"right\"/><Cell col=\"39\" text=\"bind:D10_TOTALQTY\" textAlign=\"right\"/><Cell col=\"40\" text=\"bind:D10_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"41\" text=\"bind:D10_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"42\" text=\"bind:D10_ETCQTY\" textAlign=\"right\"/><Cell col=\"43\" text=\"bind:D11_TOTALQTY\" textAlign=\"right\"/><Cell col=\"44\" text=\"bind:D11_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"45\" text=\"bind:D11_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"46\" text=\"bind:D11_ETCQTY\" textAlign=\"right\"/><Cell col=\"47\" text=\"bind:D12_TOTALQTY\" textAlign=\"right\"/><Cell col=\"48\" text=\"bind:D12_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"49\" text=\"bind:D12_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"50\" text=\"bind:D12_ETCQTY\" textAlign=\"right\"/><Cell col=\"51\" text=\"bind:D13_TOTALQTY\" textAlign=\"right\"/><Cell col=\"52\" text=\"bind:D13_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"53\" text=\"bind:D13_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"54\" text=\"bind:D13_ETCQTY\" textAlign=\"right\"/><Cell col=\"55\" text=\"bind:D14_TOTALQTY\" textAlign=\"right\"/><Cell col=\"56\" text=\"bind:D14_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"57\" text=\"bind:D14_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"58\" text=\"bind:D14_ETCQTY\" textAlign=\"right\"/><Cell col=\"59\" text=\"bind:D15_TOTALQTY\" textAlign=\"right\"/><Cell col=\"60\" text=\"bind:D15_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"61\" text=\"bind:D15_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"62\" text=\"bind:D15_ETCQTY\" textAlign=\"right\"/><Cell col=\"63\" text=\"bind:D16_TOTALQTY\" textAlign=\"right\"/><Cell col=\"64\" text=\"bind:D16_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"65\" text=\"bind:D16_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"66\" text=\"bind:D16_ETCQTY\" textAlign=\"right\"/><Cell col=\"67\" text=\"bind:D17_TOTALQTY\" textAlign=\"right\"/><Cell col=\"68\" text=\"bind:D17_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"69\" text=\"bind:D17_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"70\" text=\"bind:D17_ETCQTY\" textAlign=\"right\"/><Cell col=\"71\" text=\"bind:D18_TOTALQTY\" textAlign=\"right\"/><Cell col=\"72\" text=\"bind:D18_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"73\" text=\"bind:D18_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"74\" text=\"bind:D18_ETCQTY\" textAlign=\"right\"/><Cell col=\"75\" text=\"bind:D19_TOTALQTY\" textAlign=\"right\"/><Cell col=\"76\" text=\"bind:D19_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"77\" text=\"bind:D19_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"78\" text=\"bind:D19_ETCQTY\" textAlign=\"right\"/><Cell col=\"79\" text=\"bind:D20_TOTALQTY\" textAlign=\"right\"/><Cell col=\"80\" text=\"bind:D20_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"81\" text=\"bind:D20_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"82\" text=\"bind:D20_ETCQTY\" textAlign=\"right\"/><Cell col=\"83\" text=\"bind:D21_TOTALQTY\" textAlign=\"right\"/><Cell col=\"84\" text=\"bind:D21_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"85\" text=\"bind:D21_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"86\" text=\"bind:D21_ETCQTY\" textAlign=\"right\"/><Cell col=\"87\" text=\"bind:D22_TOTALQTY\" textAlign=\"right\"/><Cell col=\"88\" text=\"bind:D22_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"89\" text=\"bind:D22_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"90\" text=\"bind:D22_ETCQTY\" textAlign=\"right\"/><Cell col=\"91\" text=\"bind:D23_TOTALQTY\" textAlign=\"right\"/><Cell col=\"92\" text=\"bind:D23_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"93\" text=\"bind:D23_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"94\" text=\"bind:D23_ETCQTY\" textAlign=\"right\"/><Cell col=\"95\" text=\"bind:D24_TOTALQTY\" textAlign=\"right\"/><Cell col=\"96\" text=\"bind:D24_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"97\" text=\"bind:D24_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"98\" text=\"bind:D24_ETCQTY\" textAlign=\"right\"/><Cell col=\"99\" text=\"bind:D25_TOTALQTY\" textAlign=\"right\"/><Cell col=\"100\" text=\"bind:D25_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"101\" text=\"bind:D25_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"102\" text=\"bind:D25_ETCQTY\" textAlign=\"right\"/><Cell col=\"103\" text=\"bind:D26_TOTALQTY\" textAlign=\"right\"/><Cell col=\"104\" text=\"bind:D26_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"105\" text=\"bind:D26_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"106\" text=\"bind:D26_ETCQTY\" textAlign=\"right\"/><Cell col=\"107\" text=\"bind:D27_TOTALQTY\" textAlign=\"right\"/><Cell col=\"108\" text=\"bind:D27_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"109\" text=\"bind:D27_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"110\" text=\"bind:D27_ETCQTY\" textAlign=\"right\"/><Cell col=\"111\" text=\"bind:D28_TOTALQTY\" textAlign=\"right\"/><Cell col=\"112\" text=\"bind:D28_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"113\" text=\"bind:D28_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"114\" text=\"bind:D28_ETCQTY\" textAlign=\"right\"/><Cell col=\"115\" text=\"bind:D29_TOTALQTY\" textAlign=\"right\"/><Cell col=\"116\" text=\"bind:D29_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"117\" text=\"bind:D29_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"118\" text=\"bind:D29_ETCQTY\" textAlign=\"right\"/><Cell col=\"119\" text=\"bind:D30_TOTALQTY\" textAlign=\"right\"/><Cell col=\"120\" text=\"bind:D30_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"121\" text=\"bind:D30_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"122\" text=\"bind:D30_ETCQTY\" textAlign=\"right\"/><Cell col=\"123\" text=\"bind:D31_TOTALQTY\" textAlign=\"right\"/><Cell col=\"124\" text=\"bind:D31_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"125\" text=\"bind:D31_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"126\" text=\"bind:D31_ETCQTY\" textAlign=\"right\"/><Cell col=\"127\" text=\"bind:D32_TOTALQTY\" textAlign=\"right\"/><Cell col=\"128\" text=\"bind:D32_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"129\" text=\"bind:D32_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"130\" text=\"bind:D32_ETCQTY\" textAlign=\"right\"/><Cell col=\"131\" text=\"bind:D33_TOTALQTY\" textAlign=\"right\"/><Cell col=\"132\" text=\"bind:D33_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"133\" text=\"bind:D33_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"134\" text=\"bind:D33_ETCQTY\" textAlign=\"right\"/><Cell col=\"135\" text=\"bind:D34_TOTALQTY\" textAlign=\"right\"/><Cell col=\"136\" text=\"bind:D34_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"137\" text=\"bind:D34_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"138\" text=\"bind:D34_ETCQTY\" textAlign=\"right\"/><Cell col=\"139\" text=\"bind:D35_TOTALQTY\" textAlign=\"right\"/><Cell col=\"140\" text=\"bind:D35_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"141\" text=\"bind:D35_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"142\" text=\"bind:D35_ETCQTY\" textAlign=\"right\"/><Cell col=\"143\" text=\"bind:D36_TOTALQTY\" textAlign=\"right\"/><Cell col=\"144\" text=\"bind:D36_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"145\" text=\"bind:D36_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"146\" text=\"bind:D36_ETCQTY\" textAlign=\"right\"/><Cell col=\"147\" text=\"bind:D37_TOTALQTY\" textAlign=\"right\"/><Cell col=\"148\" text=\"bind:D37_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"149\" text=\"bind:D37_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"150\" text=\"bind:D37_ETCQTY\" textAlign=\"right\"/><Cell col=\"151\" text=\"bind:D38_TOTALQTY\" textAlign=\"right\"/><Cell col=\"152\" text=\"bind:D38_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"153\" text=\"bind:D38_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"154\" text=\"bind:D38_ETCQTY\" textAlign=\"right\"/><Cell col=\"155\" text=\"bind:D39_TOTALQTY\" textAlign=\"right\"/><Cell col=\"156\" text=\"bind:D39_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"157\" text=\"bind:D39_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"158\" text=\"bind:D39_ETCQTY\" textAlign=\"right\"/><Cell col=\"159\" text=\"bind:D40_TOTALQTY\" textAlign=\"right\"/><Cell col=\"160\" text=\"bind:D40_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"161\" text=\"bind:D40_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"162\" text=\"bind:D40_ETCQTY\" textAlign=\"right\"/><Cell col=\"163\" text=\"bind:D41_TOTALQTY\" textAlign=\"right\"/><Cell col=\"164\" text=\"bind:D41_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"165\" text=\"bind:D41_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"166\" text=\"bind:D41_ETCQTY\" textAlign=\"right\"/><Cell col=\"167\" text=\"bind:D42_TOTALQTY\" textAlign=\"right\"/><Cell col=\"168\" text=\"bind:D42_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"169\" text=\"bind:D42_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"170\" text=\"bind:D42_ETCQTY\" textAlign=\"right\"/><Cell col=\"171\" text=\"bind:D43_TOTALQTY\" textAlign=\"right\"/><Cell col=\"172\" text=\"bind:D43_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"173\" text=\"bind:D43_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"174\" text=\"bind:D43_ETCQTY\" textAlign=\"right\"/><Cell col=\"175\" text=\"bind:D44_TOTALQTY\" textAlign=\"right\"/><Cell col=\"176\" text=\"bind:D44_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"177\" text=\"bind:D44_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"178\" text=\"bind:D44_ETCQTY\" textAlign=\"right\"/><Cell col=\"179\" text=\"bind:D45_TOTALQTY\" textAlign=\"right\"/><Cell col=\"180\" text=\"bind:D45_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"181\" text=\"bind:D45_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"182\" text=\"bind:D45_ETCQTY\" textAlign=\"right\"/><Cell col=\"183\" text=\"bind:D46_TOTALQTY\" textAlign=\"right\"/><Cell col=\"184\" text=\"bind:D46_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"185\" text=\"bind:D46_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"186\" text=\"bind:D46_ETCQTY\" textAlign=\"right\"/><Cell col=\"187\" text=\"bind:D47_TOTALQTY\" textAlign=\"right\"/><Cell col=\"188\" text=\"bind:D47_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"189\" text=\"bind:D47_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"190\" text=\"bind:D47_ETCQTY\" textAlign=\"right\"/><Cell col=\"191\" text=\"bind:D48_TOTALQTY\" textAlign=\"right\"/><Cell col=\"192\" text=\"bind:D48_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"193\" text=\"bind:D48_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"194\" text=\"bind:D48_ETCQTY\" textAlign=\"right\"/><Cell col=\"195\" text=\"bind:D49_TOTALQTY\" textAlign=\"right\"/><Cell col=\"196\" text=\"bind:D49_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"197\" text=\"bind:D49_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"198\" text=\"bind:D49_ETCQTY\" textAlign=\"right\"/><Cell col=\"199\" text=\"bind:D50_TOTALQTY\" textAlign=\"right\"/><Cell col=\"200\" text=\"bind:D50_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"201\" text=\"bind:D50_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"202\" text=\"bind:D50_ETCQTY\" textAlign=\"right\"/><Cell col=\"203\" text=\"bind:D51_TOTALQTY\" textAlign=\"right\"/><Cell col=\"204\" text=\"bind:D51_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"205\" text=\"bind:D51_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"206\" text=\"bind:D51_ETCQTY\" textAlign=\"right\"/><Cell col=\"207\" text=\"bind:D52_TOTALQTY\" textAlign=\"right\"/><Cell col=\"208\" text=\"bind:D52_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"209\" text=\"bind:D52_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"210\" text=\"bind:D52_ETCQTY\" textAlign=\"right\"/><Cell col=\"211\" text=\"bind:D53_TOTALQTY\" textAlign=\"right\"/><Cell col=\"212\" text=\"bind:D53_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"213\" text=\"bind:D53_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"214\" text=\"bind:D53_ETCQTY\" textAlign=\"right\"/><Cell col=\"215\" text=\"bind:D54_TOTALQTY\" textAlign=\"right\"/><Cell col=\"216\" text=\"bind:D54_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"217\" text=\"bind:D54_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"218\" text=\"bind:D54_ETCQTY\" textAlign=\"right\"/><Cell col=\"219\" text=\"bind:D55_TOTALQTY\" textAlign=\"right\"/><Cell col=\"220\" text=\"bind:D55_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"221\" text=\"bind:D55_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"222\" text=\"bind:D55_ETCQTY\" textAlign=\"right\"/><Cell col=\"223\" text=\"bind:D56_TOTALQTY\" textAlign=\"right\"/><Cell col=\"224\" text=\"bind:D56_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"225\" text=\"bind:D56_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"226\" text=\"bind:D56_ETCQTY\" textAlign=\"right\"/><Cell col=\"227\" text=\"bind:D57_TOTALQTY\" textAlign=\"right\"/><Cell col=\"228\" text=\"bind:D57_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"229\" text=\"bind:D57_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"230\" text=\"bind:D57_ETCQTY\" textAlign=\"right\"/><Cell col=\"231\" text=\"bind:D58_TOTALQTY\" textAlign=\"right\"/><Cell col=\"232\" text=\"bind:D58_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"233\" text=\"bind:D58_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"234\" text=\"bind:D58_ETCQTY\" textAlign=\"right\"/><Cell col=\"235\" text=\"bind:D59_TOTALQTY\" textAlign=\"right\"/><Cell col=\"236\" text=\"bind:D59_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"237\" text=\"bind:D59_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"238\" text=\"bind:D59_ETCQTY\" textAlign=\"right\"/><Cell col=\"239\" text=\"bind:D60_TOTALQTY\" textAlign=\"right\"/><Cell col=\"240\" text=\"bind:D60_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"241\" text=\"bind:D60_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"242\" text=\"bind:D60_ETCQTY\" textAlign=\"right\"/><Cell col=\"243\" text=\"bind:D61_TOTALQTY\" textAlign=\"right\"/><Cell col=\"244\" text=\"bind:D61_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"245\" text=\"bind:D61_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"246\" text=\"bind:D61_ETCQTY\" textAlign=\"right\"/><Cell col=\"247\" text=\"bind:D62_TOTALQTY\" textAlign=\"right\"/><Cell col=\"248\" text=\"bind:D62_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"249\" text=\"bind:D62_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"250\" text=\"bind:D62_ETCQTY\" textAlign=\"right\"/><Cell col=\"251\" text=\"bind:D63_TOTALQTY\" textAlign=\"right\"/><Cell col=\"252\" text=\"bind:D63_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"253\" text=\"bind:D63_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"254\" text=\"bind:D63_ETCQTY\" textAlign=\"right\"/><Cell col=\"255\" text=\"bind:D64_TOTALQTY\" textAlign=\"right\"/><Cell col=\"256\" text=\"bind:D64_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"257\" text=\"bind:D64_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"258\" text=\"bind:D64_ETCQTY\" textAlign=\"right\"/><Cell col=\"259\" text=\"bind:D65_TOTALQTY\" textAlign=\"right\"/><Cell col=\"260\" text=\"bind:D65_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"261\" text=\"bind:D65_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"262\" text=\"bind:D65_ETCQTY\" textAlign=\"right\"/><Cell col=\"263\" text=\"bind:D66_TOTALQTY\" textAlign=\"right\"/><Cell col=\"264\" text=\"bind:D66_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"265\" text=\"bind:D66_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"266\" text=\"bind:D66_ETCQTY\" textAlign=\"right\"/><Cell col=\"267\" text=\"bind:D67_TOTALQTY\" textAlign=\"right\"/><Cell col=\"268\" text=\"bind:D67_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"269\" text=\"bind:D67_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"270\" text=\"bind:D67_ETCQTY\" textAlign=\"right\"/><Cell col=\"271\" text=\"bind:D68_TOTALQTY\" textAlign=\"right\"/><Cell col=\"272\" text=\"bind:D68_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"273\" text=\"bind:D68_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"274\" text=\"bind:D68_ETCQTY\" textAlign=\"right\"/><Cell col=\"275\" text=\"bind:D69_TOTALQTY\" textAlign=\"right\"/><Cell col=\"276\" text=\"bind:D69_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"277\" text=\"bind:D69_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"278\" text=\"bind:D69_ETCQTY\" textAlign=\"right\"/><Cell col=\"279\" text=\"bind:D70_TOTALQTY\" textAlign=\"right\"/><Cell col=\"280\" text=\"bind:D70_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"281\" text=\"bind:D70_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"282\" text=\"bind:D70_ETCQTY\" textAlign=\"right\"/><Cell col=\"283\" text=\"bind:D71_TOTALQTY\" textAlign=\"right\"/><Cell col=\"284\" text=\"bind:D71_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"285\" text=\"bind:D71_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"286\" text=\"bind:D71_ETCQTY\" textAlign=\"right\"/><Cell col=\"287\" text=\"bind:D72_TOTALQTY\" textAlign=\"right\"/><Cell col=\"288\" text=\"bind:D72_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"289\" text=\"bind:D72_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"290\" text=\"bind:D72_ETCQTY\" textAlign=\"right\"/><Cell col=\"291\" text=\"bind:D73_TOTALQTY\" textAlign=\"right\"/><Cell col=\"292\" text=\"bind:D73_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"293\" text=\"bind:D73_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"294\" text=\"bind:D73_ETCQTY\" textAlign=\"right\"/><Cell col=\"295\" text=\"bind:D74_TOTALQTY\" textAlign=\"right\"/><Cell col=\"296\" text=\"bind:D74_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"297\" text=\"bind:D74_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"298\" text=\"bind:D74_ETCQTY\" textAlign=\"right\"/><Cell col=\"299\" text=\"bind:D75_TOTALQTY\" textAlign=\"right\"/><Cell col=\"300\" text=\"bind:D75_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"301\" text=\"bind:D75_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"302\" text=\"bind:D75_ETCQTY\" textAlign=\"right\"/><Cell col=\"303\" text=\"bind:D76_TOTALQTY\" textAlign=\"right\"/><Cell col=\"304\" text=\"bind:D76_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"305\" text=\"bind:D76_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"306\" text=\"bind:D76_ETCQTY\" textAlign=\"right\"/><Cell col=\"307\" text=\"bind:D77_TOTALQTY\" textAlign=\"right\"/><Cell col=\"308\" text=\"bind:D77_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"309\" text=\"bind:D77_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"310\" text=\"bind:D77_ETCQTY\" textAlign=\"right\"/><Cell col=\"311\" text=\"bind:D78_TOTALQTY\" textAlign=\"right\"/><Cell col=\"312\" text=\"bind:D78_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"313\" text=\"bind:D78_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"314\" text=\"bind:D78_ETCQTY\" textAlign=\"right\"/><Cell col=\"315\" text=\"bind:D79_TOTALQTY\" textAlign=\"right\"/><Cell col=\"316\" text=\"bind:D79_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"317\" text=\"bind:D79_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"318\" text=\"bind:D79_ETCQTY\" textAlign=\"right\"/><Cell col=\"319\" text=\"bind:D80_TOTALQTY\" textAlign=\"right\"/><Cell col=\"320\" text=\"bind:D80_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"321\" text=\"bind:D80_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"322\" text=\"bind:D80_ETCQTY\" textAlign=\"right\"/><Cell col=\"323\" text=\"bind:D81_TOTALQTY\" textAlign=\"right\"/><Cell col=\"324\" text=\"bind:D81_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"325\" text=\"bind:D81_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"326\" text=\"bind:D81_ETCQTY\" textAlign=\"right\"/><Cell col=\"327\" text=\"bind:D82_TOTALQTY\" textAlign=\"right\"/><Cell col=\"328\" text=\"bind:D82_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"329\" text=\"bind:D82_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"330\" text=\"bind:D82_ETCQTY\" textAlign=\"right\"/><Cell col=\"331\" text=\"bind:D83_TOTALQTY\" textAlign=\"right\"/><Cell col=\"332\" text=\"bind:D83_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"333\" text=\"bind:D83_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"334\" text=\"bind:D83_ETCQTY\" textAlign=\"right\"/><Cell col=\"335\" text=\"bind:D84_TOTALQTY\" textAlign=\"right\"/><Cell col=\"336\" text=\"bind:D84_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"337\" text=\"bind:D84_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"338\" text=\"bind:D84_ETCQTY\" textAlign=\"right\"/><Cell col=\"339\" text=\"bind:D85_TOTALQTY\" textAlign=\"right\"/><Cell col=\"340\" text=\"bind:D85_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"341\" text=\"bind:D85_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"342\" text=\"bind:D85_ETCQTY\" textAlign=\"right\"/><Cell col=\"343\" text=\"bind:D86_TOTALQTY\" textAlign=\"right\"/><Cell col=\"344\" text=\"bind:D86_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"345\" text=\"bind:D86_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"346\" text=\"bind:D86_ETCQTY\" textAlign=\"right\"/><Cell col=\"347\" text=\"bind:D87_TOTALQTY\" textAlign=\"right\"/><Cell col=\"348\" text=\"bind:D87_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"349\" text=\"bind:D87_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"350\" text=\"bind:D87_ETCQTY\" textAlign=\"right\"/><Cell col=\"351\" text=\"bind:D88_TOTALQTY\" textAlign=\"right\"/><Cell col=\"352\" text=\"bind:D88_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"353\" text=\"bind:D88_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"354\" text=\"bind:D88_ETCQTY\" textAlign=\"right\"/><Cell col=\"355\" text=\"bind:D89_TOTALQTY\" textAlign=\"right\"/><Cell col=\"356\" text=\"bind:D89_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"357\" text=\"bind:D89_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"358\" text=\"bind:D89_ETCQTY\" textAlign=\"right\"/><Cell col=\"359\" text=\"bind:D90_TOTALQTY\" textAlign=\"right\"/><Cell col=\"360\" text=\"bind:D90_PRODUCTIONQTY\" textAlign=\"right\"/><Cell col=\"361\" text=\"bind:D90_SAMPLEQTY\" textAlign=\"right\"/><Cell col=\"362\" text=\"bind:D90_ETCQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_00.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_00.form.tab_01);
            obj.set_text("상세");
            this.div_00.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","190","34",null,null,null,null,null,null,this.div_00.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("공정부하량 종합현황 (상세)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_00.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","34",null,null,"0","0",null,null,null,null,this.div_00.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"83\"/><Column size=\"125\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대공정명\"/><Cell col=\"1\" rowspan=\"2\" text=\"중공정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소공정명\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"4\" rowspan=\"2\" text=\"제품코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"제품명\"/><Cell col=\"6\" text=\"2021-05-01\"/><Cell col=\"7\" text=\"2021-05-02\"/><Cell col=\"8\" text=\"2021-05-03\"/><Cell col=\"9\" text=\"2021-05-04\"/><Cell col=\"10\" text=\"2021-05-05\"/><Cell col=\"11\" text=\"2021-05-06\"/><Cell col=\"12\" text=\"2021-05-07\"/><Cell col=\"13\" text=\"2021-05-08\"/><Cell col=\"14\" text=\"2021-05-09\"/><Cell col=\"15\" text=\"2021-05-10\"/><Cell col=\"16\" text=\"2021-05-11\"/><Cell col=\"17\" text=\"2021-05-12\"/><Cell col=\"18\" text=\"2021-05-13\"/><Cell col=\"19\" text=\"2021-05-14\"/><Cell col=\"20\" text=\"2021-05-15\"/><Cell col=\"21\" text=\"2021-05-16\"/><Cell col=\"22\" text=\"2021-05-17\"/><Cell col=\"23\" text=\"2021-05-18\"/><Cell col=\"24\" text=\"2021-05-19\"/><Cell col=\"25\" text=\"2021-05-20\"/><Cell col=\"26\" text=\"2021-05-21\"/><Cell col=\"27\" text=\"2021-05-22\"/><Cell col=\"28\" text=\"2021-05-23\"/><Cell col=\"29\" text=\"2021-05-24\"/><Cell col=\"30\" text=\"2021-05-25\"/><Cell col=\"31\" text=\"2021-05-26\"/><Cell col=\"32\" text=\"2021-05-27\"/><Cell col=\"33\" text=\"2021-05-28\"/><Cell col=\"34\" text=\"2021-05-29\"/><Cell col=\"35\" text=\"2021-05-30\"/><Cell col=\"36\" text=\"2021-05-31\"/><Cell col=\"37\" text=\"2021-05-32\"/><Cell col=\"38\" text=\"2021-05-33\"/><Cell col=\"39\" text=\"2021-05-34\"/><Cell col=\"40\" text=\"2021-05-35\"/><Cell col=\"41\" text=\"2021-05-36\"/><Cell col=\"42\" text=\"2021-05-37\"/><Cell col=\"43\" text=\"2021-05-38\"/><Cell col=\"44\" text=\"2021-05-39\"/><Cell col=\"45\" text=\"2021-05-40\"/><Cell col=\"46\" text=\"2021-05-41\"/><Cell col=\"47\" text=\"2021-05-42\"/><Cell col=\"48\" text=\"2021-05-43\"/><Cell col=\"49\" text=\"2021-05-44\"/><Cell col=\"50\" text=\"2021-05-45\"/><Cell col=\"51\" text=\"2021-05-46\"/><Cell col=\"52\" text=\"2021-05-47\"/><Cell col=\"53\" text=\"2021-05-48\"/><Cell col=\"54\" text=\"2021-05-49\"/><Cell col=\"55\" text=\"2021-05-50\"/><Cell col=\"56\" text=\"2021-05-51\"/><Cell col=\"57\" text=\"2021-05-52\"/><Cell col=\"58\" text=\"2021-05-53\"/><Cell col=\"59\" text=\"2021-05-54\"/><Cell col=\"60\" text=\"2021-05-55\"/><Cell col=\"61\" text=\"2021-05-56\"/><Cell col=\"62\" text=\"2021-05-57\"/><Cell col=\"63\" text=\"2021-05-58\"/><Cell col=\"64\" text=\"2021-05-59\"/><Cell col=\"65\" text=\"2021-05-60\"/><Cell col=\"66\" text=\"2021-05-61\"/><Cell col=\"67\" text=\"2021-05-62\"/><Cell col=\"68\" text=\"2021-05-63\"/><Cell col=\"69\" text=\"2021-05-64\"/><Cell col=\"70\" text=\"2021-05-65\"/><Cell col=\"71\" text=\"2021-05-66\"/><Cell col=\"72\" text=\"2021-05-67\"/><Cell col=\"73\" text=\"2021-05-68\"/><Cell col=\"74\" text=\"2021-05-69\"/><Cell col=\"75\" text=\"2021-05-70\"/><Cell col=\"76\" text=\"2021-05-71\"/><Cell col=\"77\" text=\"2021-05-72\"/><Cell col=\"78\" text=\"2021-05-73\"/><Cell col=\"79\" text=\"2021-05-74\"/><Cell col=\"80\" text=\"2021-05-75\"/><Cell col=\"81\" text=\"2021-05-76\"/><Cell col=\"82\" text=\"2021-05-77\"/><Cell col=\"83\" text=\"2021-05-78\"/><Cell col=\"84\" text=\"2021-05-79\"/><Cell col=\"85\" text=\"2021-05-80\"/><Cell col=\"86\" text=\"2021-05-81\"/><Cell col=\"87\" text=\"2021-05-82\"/><Cell col=\"88\" text=\"2021-05-83\"/><Cell col=\"89\" text=\"2021-05-84\"/><Cell col=\"90\" text=\"2021-05-85\"/><Cell col=\"91\" text=\"2021-05-86\"/><Cell col=\"92\" text=\"2021-05-87\"/><Cell col=\"93\" text=\"2021-05-88\"/><Cell col=\"94\" text=\"2021-05-89\"/><Cell col=\"95\" text=\"2021-05-90\"/><Cell row=\"1\" col=\"6\" text=\"Qty\"/><Cell row=\"1\" col=\"7\" text=\"Qty\"/><Cell row=\"1\" col=\"8\" text=\"Qty\"/><Cell row=\"1\" col=\"9\" text=\"Qty\"/><Cell row=\"1\" col=\"10\" text=\"Qty\"/><Cell row=\"1\" col=\"11\" text=\"Qty\"/><Cell row=\"1\" col=\"12\" text=\"Qty\"/><Cell row=\"1\" col=\"13\" text=\"Qty\"/><Cell row=\"1\" col=\"14\" text=\"Qty\"/><Cell row=\"1\" col=\"15\" text=\"Qty\"/><Cell row=\"1\" col=\"16\" text=\"Qty\"/><Cell row=\"1\" col=\"17\" text=\"Qty\"/><Cell row=\"1\" col=\"18\" text=\"Qty\"/><Cell row=\"1\" col=\"19\" text=\"Qty\"/><Cell row=\"1\" col=\"20\" text=\"Qty\"/><Cell row=\"1\" col=\"21\" text=\"Qty\"/><Cell row=\"1\" col=\"22\" text=\"Qty\"/><Cell row=\"1\" col=\"23\" text=\"Qty\"/><Cell row=\"1\" col=\"24\" text=\"Qty\"/><Cell row=\"1\" col=\"25\" text=\"Qty\"/><Cell row=\"1\" col=\"26\" text=\"Qty\"/><Cell row=\"1\" col=\"27\" text=\"Qty\"/><Cell row=\"1\" col=\"28\" text=\"Qty\"/><Cell row=\"1\" col=\"29\" text=\"Qty\"/><Cell row=\"1\" col=\"30\" text=\"Qty\"/><Cell row=\"1\" col=\"31\" text=\"Qty\"/><Cell row=\"1\" col=\"32\" text=\"Qty\"/><Cell row=\"1\" col=\"33\" text=\"Qty\"/><Cell row=\"1\" col=\"34\" text=\"Qty\"/><Cell row=\"1\" col=\"35\" text=\"Qty\"/><Cell row=\"1\" col=\"36\" text=\"Qty\"/><Cell row=\"1\" col=\"37\" text=\"Qty\"/><Cell row=\"1\" col=\"38\" text=\"Qty\"/><Cell row=\"1\" col=\"39\" text=\"Qty\"/><Cell row=\"1\" col=\"40\" text=\"Qty\"/><Cell row=\"1\" col=\"41\" text=\"Qty\"/><Cell row=\"1\" col=\"42\" text=\"Qty\"/><Cell row=\"1\" col=\"43\" text=\"Qty\"/><Cell row=\"1\" col=\"44\" text=\"Qty\"/><Cell row=\"1\" col=\"45\" text=\"Qty\"/><Cell row=\"1\" col=\"46\" text=\"Qty\"/><Cell row=\"1\" col=\"47\" text=\"Qty\"/><Cell row=\"1\" col=\"48\" text=\"Qty\"/><Cell row=\"1\" col=\"49\" text=\"Qty\"/><Cell row=\"1\" col=\"50\" text=\"Qty\"/><Cell row=\"1\" col=\"51\" text=\"Qty\"/><Cell row=\"1\" col=\"52\" text=\"Qty\"/><Cell row=\"1\" col=\"53\" text=\"Qty\"/><Cell row=\"1\" col=\"54\" text=\"Qty\"/><Cell row=\"1\" col=\"55\" text=\"Qty\"/><Cell row=\"1\" col=\"56\" text=\"Qty\"/><Cell row=\"1\" col=\"57\" text=\"Qty\"/><Cell row=\"1\" col=\"58\" text=\"Qty\"/><Cell row=\"1\" col=\"59\" text=\"Qty\"/><Cell row=\"1\" col=\"60\" text=\"Qty\"/><Cell row=\"1\" col=\"61\" text=\"Qty\"/><Cell row=\"1\" col=\"62\" text=\"Qty\"/><Cell row=\"1\" col=\"63\" text=\"Qty\"/><Cell row=\"1\" col=\"64\" text=\"Qty\"/><Cell row=\"1\" col=\"65\" text=\"Qty\"/><Cell row=\"1\" col=\"66\" text=\"Qty\"/><Cell row=\"1\" col=\"67\" text=\"Qty\"/><Cell row=\"1\" col=\"68\" text=\"Qty\"/><Cell row=\"1\" col=\"69\" text=\"Qty\"/><Cell row=\"1\" col=\"70\" text=\"Qty\"/><Cell row=\"1\" col=\"71\" text=\"Qty\"/><Cell row=\"1\" col=\"72\" text=\"Qty\"/><Cell row=\"1\" col=\"73\" text=\"Qty\"/><Cell row=\"1\" col=\"74\" text=\"Qty\"/><Cell row=\"1\" col=\"75\" text=\"Qty\"/><Cell row=\"1\" col=\"76\" text=\"Qty\"/><Cell row=\"1\" col=\"77\" text=\"Qty\"/><Cell row=\"1\" col=\"78\" text=\"Qty\"/><Cell row=\"1\" col=\"79\" text=\"Qty\"/><Cell row=\"1\" col=\"80\" text=\"Qty\"/><Cell row=\"1\" col=\"81\" text=\"Qty\"/><Cell row=\"1\" col=\"82\" text=\"Qty\"/><Cell row=\"1\" col=\"83\" text=\"Qty\"/><Cell row=\"1\" col=\"84\" text=\"Qty\"/><Cell row=\"1\" col=\"85\" text=\"Qty\"/><Cell row=\"1\" col=\"86\" text=\"Qty\"/><Cell row=\"1\" col=\"87\" text=\"Qty\"/><Cell row=\"1\" col=\"88\" text=\"Qty\"/><Cell row=\"1\" col=\"89\" text=\"Qty\"/><Cell row=\"1\" col=\"90\" text=\"Qty\"/><Cell row=\"1\" col=\"91\" text=\"Qty\"/><Cell row=\"1\" col=\"92\" text=\"Qty\"/><Cell row=\"1\" col=\"93\" text=\"Qty\"/><Cell row=\"1\" col=\"94\" text=\"Qty\"/><Cell row=\"1\" col=\"95\" text=\"Qty\"/></Band><Band id=\"body\"><Cell text=\"bind:LOADTOPSEGMENTCLASSNAME\"/><Cell col=\"1\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\"/><Cell col=\"2\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:D1_LOADQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:D2_LOADQTY\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:D3_LOADQTY\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:D4_LOADQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:D5_LOADQTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:D6_LOADQTY\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:D7_LOADQTY\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:D8_LOADQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:D9_LOADQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:D10_LOADQTY\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:D11_LOADQTY\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:D12_LOADQTY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:D13_LOADQTY\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:D14_LOADQTY\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:D15_LOADQTY\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:D16_LOADQTY\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:D17_LOADQTY\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:D18_LOADQTY\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:D19_LOADQTY\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:D20_LOADQTY\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:D21_LOADQTY\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:D22_LOADQTY\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:D23_LOADQTY\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:D24_LOADQTY\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:D25_LOADQTY\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:D26_LOADQTY\" textAlign=\"right\"/><Cell col=\"32\" text=\"bind:D27_LOADQTY\" textAlign=\"right\"/><Cell col=\"33\" text=\"bind:D28_LOADQTY\" textAlign=\"right\"/><Cell col=\"34\" text=\"bind:D29_LOADQTY\" textAlign=\"right\"/><Cell col=\"35\" text=\"bind:D30_LOADQTY\" textAlign=\"right\"/><Cell col=\"36\" text=\"bind:D31_LOADQTY\" textAlign=\"right\"/><Cell col=\"37\" text=\"bind:D32_LOADQTY\" textAlign=\"right\"/><Cell col=\"38\" text=\"bind:D33_LOADQTY\" textAlign=\"right\"/><Cell col=\"39\" text=\"bind:D34_LOADQTY\" textAlign=\"right\"/><Cell col=\"40\" text=\"bind:D35_LOADQTY\" textAlign=\"right\"/><Cell col=\"41\" text=\"bind:D36_LOADQTY\" textAlign=\"right\"/><Cell col=\"42\" text=\"bind:D37_LOADQTY\" textAlign=\"right\"/><Cell col=\"43\" text=\"bind:D38_LOADQTY\" textAlign=\"right\"/><Cell col=\"44\" text=\"bind:D39_LOADQTY\" textAlign=\"right\"/><Cell col=\"45\" text=\"bind:D40_LOADQTY\" textAlign=\"right\"/><Cell col=\"46\" text=\"bind:D41_LOADQTY\" textAlign=\"right\"/><Cell col=\"47\" text=\"bind:D42_LOADQTY\" textAlign=\"right\"/><Cell col=\"48\" text=\"bind:D43_LOADQTY\" textAlign=\"right\"/><Cell col=\"49\" text=\"bind:D44_LOADQTY\" textAlign=\"right\"/><Cell col=\"50\" text=\"bind:D45_LOADQTY\" textAlign=\"right\"/><Cell col=\"51\" text=\"bind:D46_LOADQTY\" textAlign=\"right\"/><Cell col=\"52\" text=\"bind:D47_LOADQTY\" textAlign=\"right\"/><Cell col=\"53\" text=\"bind:D48_LOADQTY\" textAlign=\"right\"/><Cell col=\"54\" text=\"bind:D49_LOADQTY\" textAlign=\"right\"/><Cell col=\"55\" text=\"bind:D50_LOADQTY\" textAlign=\"right\"/><Cell col=\"56\" text=\"bind:D51_LOADQTY\" textAlign=\"right\"/><Cell col=\"57\" text=\"bind:D52_LOADQTY\" textAlign=\"right\"/><Cell col=\"58\" text=\"bind:D53_LOADQTY\" textAlign=\"right\"/><Cell col=\"59\" text=\"bind:D54_LOADQTY\" textAlign=\"right\"/><Cell col=\"60\" text=\"bind:D55_LOADQTY\" textAlign=\"right\"/><Cell col=\"61\" text=\"bind:D56_LOADQTY\" textAlign=\"right\"/><Cell col=\"62\" text=\"bind:D57_LOADQTY\" textAlign=\"right\"/><Cell col=\"63\" text=\"bind:D58_LOADQTY\" textAlign=\"right\"/><Cell col=\"64\" text=\"bind:D59_LOADQTY\" textAlign=\"right\"/><Cell col=\"65\" text=\"bind:D60_LOADQTY\" textAlign=\"right\"/><Cell col=\"66\" text=\"bind:D61_LOADQTY\" textAlign=\"right\"/><Cell col=\"67\" text=\"bind:D62_LOADQTY\" textAlign=\"right\"/><Cell col=\"68\" text=\"bind:D63_LOADQTY\" textAlign=\"right\"/><Cell col=\"69\" text=\"bind:D64_LOADQTY\" textAlign=\"right\"/><Cell col=\"70\" text=\"bind:D65_LOADQTY\" textAlign=\"right\"/><Cell col=\"71\" text=\"bind:D66_LOADQTY\" textAlign=\"right\"/><Cell col=\"72\" text=\"bind:D67_LOADQTY\" textAlign=\"right\"/><Cell col=\"73\" text=\"bind:D68_LOADQTY\" textAlign=\"right\"/><Cell col=\"74\" text=\"bind:D69_LOADQTY\" textAlign=\"right\"/><Cell col=\"75\" text=\"bind:D70_LOADQTY\" textAlign=\"right\"/><Cell col=\"76\" text=\"bind:D71_LOADQTY\" textAlign=\"right\"/><Cell col=\"77\" text=\"bind:D72_LOADQTY\" textAlign=\"right\"/><Cell col=\"78\" text=\"bind:D73_LOADQTY\" textAlign=\"right\"/><Cell col=\"79\" text=\"bind:D74_LOADQTY\" textAlign=\"right\"/><Cell col=\"80\" text=\"bind:D75_LOADQTY\" textAlign=\"right\"/><Cell col=\"81\" text=\"bind:D76_LOADQTY\" textAlign=\"right\"/><Cell col=\"82\" text=\"bind:D77_LOADQTY\" textAlign=\"right\"/><Cell col=\"83\" text=\"bind:D78_LOADQTY\" textAlign=\"right\"/><Cell col=\"84\" text=\"bind:D79_LOADQTY\" textAlign=\"right\"/><Cell col=\"85\" text=\"bind:D80_LOADQTY\" textAlign=\"right\"/><Cell col=\"86\" text=\"bind:D81_LOADQTY\" textAlign=\"right\"/><Cell col=\"87\" text=\"bind:D82_LOADQTY\" textAlign=\"right\"/><Cell col=\"88\" text=\"bind:D83_LOADQTY\" textAlign=\"right\"/><Cell col=\"89\" text=\"bind:D84_LOADQTY\" textAlign=\"right\"/><Cell col=\"90\" text=\"bind:D85_LOADQTY\" textAlign=\"right\"/><Cell col=\"91\" text=\"bind:D86_LOADQTY\" textAlign=\"right\"/><Cell col=\"92\" text=\"bind:D87_LOADQTY\" textAlign=\"right\"/><Cell col=\"93\" text=\"bind:D88_LOADQTY\" textAlign=\"right\"/><Cell col=\"94\" text=\"bind:D89_LOADQTY\" textAlign=\"right\"/><Cell col=\"95\" text=\"bind:D90_LOADQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_00.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_summary",null,"6","29","24","6",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_titleBG");
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

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("공정부하종합현황");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
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
        this.addIncludeScript("MFM00400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM00400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00400M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM00400M.xfdl", function() {
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
        this.searchDiv = this.tab_00.Tabpage1.form;
        this.tabDiv = this.div_00.form;
        this.tabInputDiv1 = this.div_00.form.tab_01.Tabpage1.form;
        this.tabInputDiv2 = this.div_00.form.tab_01.Tabpage2.form;

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (첫번째 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_summary.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_detail.clearData();

        	this.ds_search.clearData();

        	//부하일이 공백이면 alert
        	if(this.searchDiv.cal_loadDate.value=='') {
        		alert('부하일을 입력 바랍니다.');
        		this.searchDiv.cbo_loadDate.setFocus();
        		return;
        	}

        	//부하타입이 공백이면 alert
        	if(this.searchDiv.cbo_loadType.value=='') {
        		alert('부하타입을 입력 바랍니다.');
        		this.searchDiv.cbo_loadType.setFocus();
        		return;
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));

        	this.ds_search.setColumn(0, "P_LOADDATE", 					this.nfn_nvl(this.searchDiv.cal_loadDate.value, "")); //부하일
        	this.ds_search.setColumn(0, "P_LOADTYPE", 					this.nfn_nvl(this.searchDiv.cbo_loadType.value, "")); //부하타입(6일,30일,90일)
        	this.ds_search.setColumn(0, "P_LOADTOPSEGMENTCLASSID", 		this.nfn_nvl(this.searchDiv.cbo_process.value, "")); //대공정
        	this.ds_search.setColumn(0, "P_LOADMIDDLESEGMENTCLASSID", 	this.nfn_nvl(this.searchDiv.cbo_midProcess.value, "")); //중공정
        	this.ds_search.setColumn(0, "P_LOADSMALLSEGMENTCLASSID", 	this.nfn_nvl(this.searchDiv.cbo_minProcess.value, "")); //소공정

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 				this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectdaysegmentloadtotalList");

        	var sSvcID 			= "selectdaysegmentloadtotalList";
        	var sController 	= "/mfm00400/selectdaysegmentloadtotalList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_summary=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (두번째 Grid)
         */
        this.fn_search2 = function (obj, e)
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));

        	this.ds_search.setColumn(0, "P_LOADDATE", 					this.nfn_nvl(this.searchDiv.cal_loadDate.value, "")); //부하일
        	this.ds_search.setColumn(0, "P_LOADTYPE", 					this.nfn_nvl(this.searchDiv.cbo_loadType.value, "")); //부하타입(6일,30일,90일)
        	this.ds_search.setColumn(0, "P_LOADTOPSEGMENTCLASSID", 		this.nfn_nvl(this.searchDiv.cbo_process.value, "")); //대공정
        	this.ds_search.setColumn(0, "P_PRODUCTIONTYPE", 			"Production");

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 				this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectdaysegmentloadDetailList");

        	var sSvcID 			= "selectdaysegmentloadDetailList";
        	var sController 	= "/mfm00400/selectdaysegmentloadDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_detail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : [조회조건] 대공정
         */
        this.fn_process = function (obj, e)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.searchDiv.cbo_process // Object
        								, "selectProcessList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_HL1"); //콜백함수 지정
        };

        /*
         * 기능 : [조회조건] 중공정
         */
        this.fn_midProcess = function (obj, e)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 			this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("PROCESSSEGMENTCLASSID", this.nfn_nvl(this.searchDiv.cbo_process.value, "")); //대공정
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 			this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.searchDiv.cbo_midProcess // Object
        								, "selectMidProcessList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_HL2"); //콜백함수 지정
        };

        /*
         * 기능 : [조회조건] 소공정
         */
        this.fn_minProcess = function (obj, e)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 				this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("MIDPROCESSSEGMENTCLASSID", 	this.nfn_nvl(this.searchDiv.cbo_midProcess.value, "")); //중공정
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 				this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.searchDiv.cbo_minProcess // Object
        								, "selectMinProcessList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_HL3"); //콜백함수 지정
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
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
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
        			this.fn_process();
        			break;
        		case "selectdaysegmentloadtotalList": //[종합]그리드 CALLBACK
        			this.fn_search2();
        			break;
        		case "selectdaysegmentloadDetailList": //[상세]그리드 CALLBACK
        			break;
        		case "selectDayDulationList": //부하타입 일자 리스트 callback
        			//alert('부하일자 건수 :: '+this.ds_dayList.rowcount);
        			//this.fn_allClearColumn();
        			this.fn_allShowColumn();
        			//this.fn_setColumnApply();
        			this.fn_setColumnHideApply();
        			break;
        		default:
        	}
        };

        this.fn_callBack_HL1 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_process.set_index(0);
        	this.fn_midProcess();
        }
        this.fn_callBack_HL2 = function (trId, errCD, errMsg)
        {
        	this.fn_minProcess();
        }
        this.fn_callBack_HL3 = function (trId, errCD, errMsg)
        {
        	this.fn_period();
        }
        this.fn_callBack_HL4 = function (trId, errCD, errMsg)
        {
        }

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/


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

        /*
        this.fn_insertGridCol = function ()
        {
        	var nCol = 20; //처음에 insert될 위치
        	var objGrd = this.div_work.form.grd_qamIssue;
        	for(var i = 1; i <= 60; i++) {
        		objGrd.insertContentsCol("body", nCol);
        		objGrd.setFormatColProperty(nCol, "size", 80);
        		objGrd.setCellProperty( "head", nCol, "text", "측정값 " + i);
        		objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        		objGrd.setCellProperty( "body", nCol, "text", "bind:MEASUREVALUE_" + i);
        		objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        		objGrd.setCellProperty( "body", nCol, "cssclass", "expr:comp.parent.parent.parent.fn_setFontColor(currow,"+i+")");
        		nCol++;
        	}
        };
        */
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
        	//종합 그리드 컬럼 ALL 보이기
        	for(var i=362; i>=0; i--){
        		this.tabInputDiv1.grd_summary.setFormatColProperty(i, "size", 80);
        	}
        	var pos = 0;
        	for(var i=0; i<selValNum; i++){
        		this.tabInputDiv1.grd_summary.setCellProperty('Head', 3+i, "text", this.nfn_nvl(this.ds_dayList.getColumn(i, "DATE2")));
        	}
        	//상세 그리드 컬럼 ALL 보이기
        	for(var k=95; k>=0; k--){
        		this.tabInputDiv2.grd_detail.setFormatColProperty(k, "size", 80);
        	}
        	for(var i=0; i<selValNum; i++){
        		this.tabInputDiv2.grd_detail.setCellProperty('Head', 6+i, "text", this.nfn_nvl(this.ds_dayList.getColumn(i, "DATE2")));
        	}
        }

        //해당하는 갯수만큼 안보이게 하기
        this.fn_setColumnHideApply = function ()
        {
        	var selVal = this.searchDiv.cbo_loadType.value;
        	var selValNum = 0;
        	var showColCnt1 = 0;
        	var showColCnt2 = 0;
        	if(selVal=='SixDay') {
        		selValNum = 6;
        		showColCnt1 = 27;
        		showColCnt2 = 12;
        	}else if(selVal=='ThirtyDay') {
        		selValNum = 30;
        		showColCnt1 = 123;
        		showColCnt2 = 36;
        	}
        	if(selVal=='SixDay' || selVal=='ThirtyDay') {
        		for(var i=showColCnt1; i<(362-1)+2; i++){
        			this.tabInputDiv1.grd_summary.setFormatColProperty(i, "size", 0);
        		}
        		for(var k=showColCnt2; k<(95-1)+2; k++){
        			this.tabInputDiv2.grd_detail.setFormatColProperty(k, "size", 0);
        		}
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
        	this.ds_summary.clearData();
        	this.ds_detail.clearData();
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        	//strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv2.sta_cnt_ds_toolMakingStatics.set_text(strCnt);
        };



        this.tab_00_Tabpage1_cbo_process_onitemchanged = function(obj,e)
        {
        	this.fn_midProcess(); //대공정이 바뀌면 중공정 조회
        };

        this.tab_00_Tabpage1_cbo_midProcess_onitemchanged = function(obj,e)
        {
        	this.fn_minProcess(); //중공정이 바뀌면 소공정 조회
        };

        this.div_00_tab_01_onchanged = function(obj,e)
        {
        };

        this.tab_00_Tabpage1_cbo_lotType00_00_onitemchanged = function(obj,e)
        {
        	this.fn_period();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_00.Tabpage1.form.Button44_00_01.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.tab_00.Tabpage1.form.Button45_00.addEventHandler("onclick",this.fn_search,this);
            this.tab_00.Tabpage1.form.cbo_midProcess.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_midProcess_onitemchanged,this);
            this.tab_00.Tabpage1.form.cbo_loadType.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_lotType00_00_onitemchanged,this);
            this.tab_00.Tabpage1.form.cbo_process.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_process_onitemchanged,this);
            this.tab_00.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.div_00.form.tab_01.addEventHandler("onchanged",this.div_00_tab_01_onchanged,this);
            this.div_header.form.btn_reset.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("MFM00400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
