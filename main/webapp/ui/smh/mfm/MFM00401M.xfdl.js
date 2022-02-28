(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00401M");
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
            obj._setContents("<ColumnInfo><Column id=\"LOADTOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADMIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOADSMALLSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"D1_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D2_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D3_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D4_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D5_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D6_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D7_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D8_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D9_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D10_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D11_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D12_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D13_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D14_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D15_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D16_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D17_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D18_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D19_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D20_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D21_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D22_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D23_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D24_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D25_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D26_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D27_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D28_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D29_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D30_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D31_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D32_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D33_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D34_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D35_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D36_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D37_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D38_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D39_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D40_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D41_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D42_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D43_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D44_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D45_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D46_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D47_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D48_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D49_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D50_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D51_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D52_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D53_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D54_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D55_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D56_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D57_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D58_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D59_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D60_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D61_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D62_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D63_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D64_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D65_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D66_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D67_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D68_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D69_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D70_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D71_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D72_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D73_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D74_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D75_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D76_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D77_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D78_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D79_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D80_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D81_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D82_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D83_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D84_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D85_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D86_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D87_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D88_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D89_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"D90_LOADQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADDATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADTOPSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADMIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOADSMALLSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEMGROUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayList", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemGroupList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFCLASSGROUPNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("생산계획");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","196","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","196","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_siteId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_loadDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("부하일");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_midProcess","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_midProcess","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductPlanDegree,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_loadType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("부하 타입");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_process","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"176","45","20","92",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_loadType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,LoadType,,Y,Y");
            obj.set_type("dropdown");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_process","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_type("dropdown");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_minProcess","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("소공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_minProcess","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProductPlanDegree,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_loadDate","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptor","0","159","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiptor","108","159",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_receiptor",null,"159","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","197","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_01","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_01);
            obj.set_text("종합");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"34","888",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("공정부하량 종합현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_summary","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_summary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대공정명\"/><Cell col=\"1\" rowspan=\"2\" text=\"중공정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:LOADTOPSEGMENTCLASSNAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\" cssclass=\"expr:dataset.getColumn(currow,&apos;LOADSMALLSEGMENTCLASSNAME&apos;)==&apos;소계&apos;? &apos;cell_linkTxt,cell_bg_green&apos; : (dataset.getColumn(currow,&apos;LOADSMALLSEGMENTCLASSNAME&apos;)==&apos;총계&apos;? &apos;cell_linkTxt,cell_bg_yellow&apos; : &apos;&apos;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_summary",null,"6","29","24","6",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("상세");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","190","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("공정부하량 종합현황 (상세)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"125\" band=\"left\"/><Column size=\"165\" band=\"left\"/><Column size=\"34\" band=\"left\"/><Column size=\"115\" band=\"left\"/><Column size=\"231\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대공정명\"/><Cell col=\"1\" rowspan=\"2\" text=\"중공정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"소공정명\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"4\" rowspan=\"2\" text=\"순위\"/><Cell col=\"5\" rowspan=\"2\" text=\"제품코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"제품명\"/></Band><Band id=\"body\"><Cell text=\"bind:LOADTOPSEGMENTCLASSNAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:LOADMIDDLESEGMENTCLASSNAME\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:LOADSMALLSEGMENTCLASSNAME\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" suppress=\"4\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRIORITY\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:dataset.getColumn(currow,&apos;PRODUCTDEFNAME&apos;)==&apos;소계&apos;? &apos;cell_bg_green&apos; : (dataset.getColumn(currow,&apos;PRODUCTDEFNAME&apos;)==&apos;총계&apos;? &apos;cell_bg_yellow&apos; : &apos;&apos;)\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"6","29","24","6",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("공정부하종합현황");
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
        this.addIncludeScript("MFM00401M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM00401M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00401M.xfdl","lib::lib_mfm.xjs");
        this.registerScript("MFM00401M.xfdl", function() {
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
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.tabDiv = this.div_work.form;
        this.tabInputDiv1 = this.div_work.form.tab_01.Tabpage1.form;
        this.tabInputDiv2 = this.div_work.form.tab_01.Tabpage2.form;

        this.firstDrawFlag = 0;
        this.gridFormatStr = '';
        this.gridFormatStr2 = '';

        this.clickVal = '';
        this.clickCol = 0;
        this.clickRow = 0;

        this.receiptorId = ''; //담당자Id (조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        this.itemGrpSel = ''; //소계/총계의 일자별 컬럼을 클릭시 해당 해당 품목그룹만 보여주게 처리 :: 공백 또는 숫자

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

        	//담당자가 공백이면 alert
        	if(this.searchDiv.edt_receiptor.value=='') {
        		//alert('담당자를 입력 바랍니다.');
        		//this.searchDiv.edt_receiptor.setFocus();
        		//return;
        		this.receiptorId = '';
        	}

        	if(this.ds_itemGroupList.rowcount==0){
        		alert('담당자의 제품그룹이 등록되어 있지 않습니다.');
        		this.searchDiv.edt_receiptor.setFocus();
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
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 				this.nfn_nvl(this.receiptorId, "")); //담당자

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 				this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectdaysegmentloadtotalList");

        	var sSvcID 			= "selectdaysegmentloadtotalList";
        	var sController 	= "/mfm00401/selectdaysegmentloadtotalList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_summary=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (두번째 Grid) : 소공정에 대한 상세 내역 조회
         */
        this.fn_search2 = function (obj, e)
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 				this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));

        	this.ds_search.setColumn(0, "P_LOADDATE", 					this.nfn_nvl(this.searchDiv.cal_loadDate.value, "")); //부하일
        	this.ds_search.setColumn(0, "P_LOADTYPE", 					this.nfn_nvl(this.searchDiv.cbo_loadType.value, "")); //부하타입(6일,30일,90일)
        	if(this.clickVal == '소계'){
        		this.ds_search.setColumn(0, "P_LOADTOPSEGMENTCLASSID", 		this.nfn_nvl(this.ds_summary.getColumn(this.ds_summary.rowposition, "LOADTOPSEGMENTCLASSID"))); //대공정
        		this.ds_search.setColumn(0, "P_LOADMIDDLESEGMENTCLASSID", 	this.nfn_nvl(this.ds_summary.getColumn(this.ds_summary.rowposition, "LOADMIDDLESEGMENTCLASSID"))); //중공정
        		this.ds_search.setColumn(0, "P_LOADSMALLSEGMENTCLASSID", 	""); //소공정
        	}
        	if(this.clickVal == '총계'){
        		this.ds_search.setColumn(0, "P_LOADTOPSEGMENTCLASSID", 		this.nfn_nvl(this.ds_summary.getColumn(this.ds_summary.rowposition, "LOADTOPSEGMENTCLASSID"))); //대공정
        		this.ds_search.setColumn(0, "P_LOADMIDDLESEGMENTCLASSID", 	""); //중공정
        		this.ds_search.setColumn(0, "P_LOADSMALLSEGMENTCLASSID", 	""); //소공정
        	}

        	this.ds_search.setColumn(0, "P_ITEMGROUP", 					this.nfn_nvl(this.itemGrpSel, "")); //ITEM 그룹 선택

        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 				this.nfn_nvl(this.receiptorId, "")); //담당자
        	this.ds_search.setColumn(0, "P_PRODUCTIONTYPE", 			"Production");

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 				this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 				this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectdaysegmentloadDetailList");

        	var sSvcID 			= "selectdaysegmentloadDetailList";
        	var sController 	= "/mfm00401/selectdaysegmentloadDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_detail=output ds_itemGroupList=output2";
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
         * 기능 : 사용자별 item 그룹 List
         */
        this.fn_itemGroupList = function (obj, e)
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 				this.nfn_nvl(this.receiptorId, "")); //담당자
        	this.ds_search.setColumn(0, "SQL_ID", 						"selectItemGroupName");

        	var sSvcID 			= "selectItemGroupName";
        	var sController 	= "/mfmCommon/selectItemGroupName.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_itemGroupList=output";
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
        			//this.receiptorId = this.tomfn_getUserId();
        			//this.searchDiv.edt_receiptor.set_value(this.tomfn_getUserNm());
        			this.fn_period();
        			break;
        		case "selectdaysegmentloadtotalList": //[종합]그리드 CALLBACK
        			//this.fn_search2();
        			break;
        		case "selectdaysegmentloadDetailList": //[상세]그리드 CALLBACK
        			//if(this.itemGrpSel==''){
        			//}else{
        				this.fn_setColumnHideApply2(); //다이나믹 컬럼을 모두 지운다.
        				this.fn_allShowColumn2(); //다이나믹 컬럼을 다시 만든다.
        			//}
        			break;
        		case "selectDayDulationList": //부하타입 일자 리스트 callback
        			this.fn_itemGroupList();
        			//alert('부하일자 건수 :: '+this.ds_dayList.rowcount);
        			break;
        		case "selectItemGroupName": //품목 그룹 callback
        			this.ds_summary.clearData();
        			this.ds_detail.clearData();

        			//alert('품목 그룹 건수 :: '+this.ds_itemGroupList.rowcount);
        			//alert('부하일자 건수 :: '+this.ds_dayList.rowcount);
        			if(this.firstDrawFlag==1){ //화면 초기화시에는 지울것이 없다.
        				this.fn_setColumnHideApply(); //다이나믹 컬럼을 모두 지운다.
        				this.fn_setColumnHideApply2(); //다이나믹 컬럼을 모두 지운다.
        			}else{
        				//그리드폼저장
        				this.gridFormatStr = this.tabInputDiv1.grd_summary.formats;
        				this.gridFormatStr2 = this.tabInputDiv2.grd_detail.formats;
        			}
        			this.fn_allShowColumn(); //다이나믹 컬럼을 다시 만든다.
        			this.fn_allShowColumn2(); //다이나믹 컬럼을 다시 만든다.
        			this.firstDrawFlag = 1;

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

        	if(popId=="P00194"){ //담당자 조회
        		oArg.arg_searchStr = "USERNAME="+this.searchDiv.edt_receiptor.value;
        		oArg.arg_rtnCols = "USERID|USERNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_USERS") //담당자
        	{
        		this.searchDiv.edt_receiptor.set_value(rtn[1]);
        		this.receiptorId = rtn[0]; //HIDDEN 필드

        		this.fn_period();
        	}
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

        	// x 버튼 이벤트 설정(담당장Tab, 담당자)
        	this.searchDiv.btn_edt_receiptor.setEventHandler("onclick", this.fn_xClickReceiptor, this );
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
        	//alert(this.ds_dayList.rowcount + '/' + this.ds_itemGroupList.rowcount);
        	this.tabInputDiv1.grd_summary.set_enableredraw(false);
        	this.div_work.form.tab_01.Tabpage1.form.grd_summary.set_enableevent(false);
        	this.ds_summary.set_enableevent(false);
        	var nCell = 0;
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3; //처음에 insert될 위치
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i = 1; i <= this.ds_dayList.rowcount; i++) {
        			objGrd.insertContentsCol("body", nCol);
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", "합 계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i+"_TOTALQTY");
        			//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bold" );
        			objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : 'cell_bold')" );

        			//objGrd.setCellProperty( "body", nCol, "cssclass", 'expr:dataset.getColumn(currow,"LOADSMALLSEGMENTCLASSNAME")=="소계"? "cell_bg_blue" : ""' );
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_bg_green' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_bg_yellow' : '')" );
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bg_blue" );
        			//하이퍼링크 :: expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : '')
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_bg_green' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_bg_yellow' : '')" );
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_bg_green,cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_bg_yellow,cell_linkTxt,cell_bold' : '')" );

        			nCol++;
        			for(var j = 1; j <= this.ds_itemGroupList.rowcount; j++) {
        				objGrd.insertContentsCol("body", nCol);
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j-1, "PRODUCTDEFCLASSGROUPNAME")));
        				objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i+"_TYPE"+j+"QTY");
        				//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				//objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_bg_green' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_bg_yellow' : '')" );
        				objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'LOADSMALLSEGMENTCLASSNAME')=='총계'? 'cell_linkTxt,cell_bold' : '')" );
        				nCol++;
        			}

        			//trace("z_______________ "+nCol+" || "+i);
        		}

        		//alert(nCol);
        		for(var i2 = 1; i2 <= this.ds_dayList.rowcount; i2++) {
        			objGrd.setFormatColProperty(nCol, "size", 80);
        			objGrd.setCellProperty( "head", nCol, "text", "합 계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			//objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i2+"_TOTALQTY");
        			//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");

        			nCol++;
        			for(var j2 = 1; j2 <= this.ds_itemGroupList.rowcount; j2++) {
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j2-1, "PRODUCTDEFCLASSGROUPNAME")));
        				//objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i2+"_TYPE"+j2+"QTY");
        				//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				nCol++;
        			}
        		}
        		//alert(nCol);

        	}

        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3+this.ds_dayList.rowcount * this.ds_itemGroupList.rowcount+this.ds_dayList.rowcount; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i = this.ds_dayList.rowcount; i >= 1; i--) {
        			nCol--; //total
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        			}
        			//this.div_work.form.grd_plangrid.mergeContentsCell("head", 0, nStartCol, 0, nEndCol, nFirstCell, false);
        			nCell = objGrd.mergeContentsCell("head", 0, nCol, 0, nCol+this.ds_itemGroupList.rowcount, nCol+1, false);
        			//objGrd.setCellProperty('Head', 3*i, "text", this.nfn_nvl(this.ds_dayList.getColumn(i-1, "DATE2")));
        			objGrd.setCellProperty('Head', nCol, "text", this.nfn_nvl(this.ds_dayList.getColumn(i-1, "DATE2")));
        			objGrd.setCellProperty("head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		}
        	}

        	//짝수행 칼라링
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3+this.ds_dayList.rowcount * this.ds_itemGroupList.rowcount+this.ds_dayList.rowcount; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i = this.ds_dayList.rowcount; i >= 1; i--) {
        			nCol--; //total
        			if(i%2==0){ //짝수이면background="#fefff4"
        				objGrd.setCellProperty('body', nCol, "background", "#fefff4"); //여린노랑색
        			}else{
        				objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        			}
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        				if(i%2==0){ //짝수이면background="#fefff4"
        					objGrd.setCellProperty('body', nCol, "background", "#fefff4");
        				}else{
        					objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        				}
        			}
        		}
        	}

        	this.tabInputDiv1.grd_summary.set_enableredraw(true);
        	this.div_work.form.tab_01.Tabpage1.form.grd_summary.set_enableevent(true);
        	this.ds_summary.set_enableevent(true);

        	// 틀고정
        	this.nfn_cellFix(this.tabInputDiv1.grd_summary, 2);
        }

        //해당하는 갯수만큼 안보이게 하기
        this.fn_setColumnHideApply = function ()
        {
        	//alert('---1---delete start');
        	this.tabInputDiv1.grd_summary.set_formats(this.gridFormatStr);
        	this.tabInputDiv1.grd_summary.set_enableredraw(true);
        	this.resetScroll();
        	/*
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 3; //처음에 insert될 위치
        		var objGrd = this.tabInputDiv1.grd_summary;
        		for(var i2 = (this.ds_dayList.rowcount * this.ds_itemGroupList.rowcount + this.ds_dayList.rowcount + 3); i2 >= 3; i2--) {
        			objGrd.deleteContentsCol(nCol);
        		}
        	}
        	*/
        }

        //###################################################
        //###################################################
        //################################################### 2번째 탭 그리드 다이나믹 컬럼 생성/삭제
        //###################################################
        //###################################################
        this.fn_allShowColumn2 = function ()
        {
        	this.tabInputDiv2.grd_detail.set_enableredraw(false);
        	this.div_work.form.tab_01.Tabpage2.form.grd_detail.set_enableevent(false);
        	this.ds_detail.set_enableevent(false);
        	var nCell = 0;
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 7; //처음에 insert될 위치
        		var objGrd = this.tabInputDiv2.grd_detail;
        		for(var i = 1; i <= this.ds_dayList.rowcount; i++) {
        			objGrd.insertContentsCol("body", nCol);
                    if(this.nfn_nvl(this.itemGrpSel, "")==''){
        				objGrd.setFormatColProperty(nCol, "size", 80);
        			}else{
        				objGrd.setFormatColProperty(nCol, "size", 0);
        			}
        			objGrd.setCellProperty( "head", nCol, "text", "합계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i+"_TOTALQTY");
        			//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        			//objGrd.setCellProperty( "body", nCol, "cssclass", "cell_bold" );
        			objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'PRODUCTDEFNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'PRODUCTDEFNAME')=='총계'? 'cell_linkTxt,cell_bold' : 'cell_bold')" );
        			nCol++;

        			for(var j = 1; j <= this.ds_itemGroupList.rowcount; j++) {
        				objGrd.insertContentsCol("body", nCol);
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j-1, "PRODUCTDEFCLASSGROUPNAME")));
        				objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i+"_TYPE"+j+"QTY");
        				//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				objGrd.setCellProperty( "body", nCol, "cssclass", "expr:dataset.getColumn(currow,'PRODUCTDEFNAME')=='소계'? 'cell_linkTxt,cell_bold' : (dataset.getColumn(currow,'PRODUCTDEFNAME')=='총계'? 'cell_linkTxt,cell_bold' : '')" );
        				nCol++;
        			}

        			//trace("z_______________ "+nCol+" || "+i);
        		}

        		//alert(nCol);
        		for(var i2 = 1; i2 <= this.ds_dayList.rowcount; i2++) {
        			if(this.nfn_nvl(this.itemGrpSel, "")==''){
        				objGrd.setFormatColProperty(nCol, "size", 80);
        			}else{
        				objGrd.setFormatColProperty(nCol, "size", 0);
        			}
        			objGrd.setCellProperty( "head", nCol, "text", "합계");
        			objGrd.setCellProperty( "head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        			//objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i2+"_TOTALQTY");
        			//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        			objGrd.setCellProperty( "body", nCol, "textAlign", "right");

        			nCol++;
        			for(var j2 = 1; j2 <= this.ds_itemGroupList.rowcount; j2++) {
        				objGrd.setFormatColProperty(nCol, "size", 80);
        				objGrd.setCellProperty( "head", nCol, "text", this.nfn_nvl(this.ds_itemGroupList.getColumn(j2-1, "PRODUCTDEFCLASSGROUPNAME")));
        				//objGrd.setCellProperty( "body", nCol, "text", "bind:D"+i2+"_TYPE"+j2+"QTY");
        				//objGrd.setCellProperty( "head", nCol, "tooltiptext", "SPCNVALUE " + i);
        				objGrd.setCellProperty( "body", nCol, "textAlign", "right");
        				nCol++;
        			}
        		}
        		//alert(nCol);

        	}

        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 7+this.ds_dayList.rowcount * this.ds_itemGroupList.rowcount+this.ds_dayList.rowcount; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv2.grd_detail;
        		for(var i = this.ds_dayList.rowcount; i >= 1; i--) {
        			nCol--; //total
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        			}
        			//this.div_work.form.grd_plangrid.mergeContentsCell("head", 0, nStartCol, 0, nEndCol, nFirstCell, false);
        			nCell = objGrd.mergeContentsCell("head", 0, nCol, 0, nCol+this.ds_itemGroupList.rowcount, nCol+1, false);
        			//objGrd.setCellProperty('Head', 3*i, "text", this.nfn_nvl(this.ds_dayList.getColumn(i-1, "DATE2")));
        			objGrd.setCellProperty('Head', nCol, "text", this.nfn_nvl(this.ds_dayList.getColumn(i-1, "DATE2")));
        			objGrd.setCellProperty("head", nCol, "font", "bold 11px/1.1 'Malgun Gothic','맑은 고딕','Arial'");
        		}
        	}

        	//짝수행 칼라링
        	if(this.ds_itemGroupList.rowcount>0){
        		var nCol = 7 + this.ds_dayList.rowcount * this.ds_itemGroupList.rowcount + this.ds_dayList.rowcount; //처음에 insert될 위치 :
        		var objGrd = this.tabInputDiv2.grd_detail;
        		for(var i = this.ds_dayList.rowcount; i >= 1; i--) {
        			nCol--; //total
        			if(i%2==0){ //짝수이면background="#fefff4"
        				objGrd.setCellProperty('body', nCol, "background", "#fefff4");
        			}else{
        				objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        			}
        			for(var j = this.ds_itemGroupList.rowcount; j >= 1; j--) {
        				nCol--;
        				if(i%2==0){ //짝수이면background="#fefff4"
        					objGrd.setCellProperty('body', nCol, "background", "#fefff4");
        				}else{
        					objGrd.setCellProperty('body', nCol, "background", "#ffffff");
        				}
        			}
        		}
        	}

        	this.tabInputDiv2.grd_detail.set_enableredraw(true);
        	this.div_work.form.tab_01.Tabpage2.form.grd_detail.set_enableevent(true);
        	this.ds_detail.set_enableevent(true);

        	// 틀고정
        	this.nfn_cellFix(this.tabInputDiv2.grd_detail, 6);
        }

        //해당하는 갯수만큼 안보이게 하기
        this.fn_setColumnHideApply2 = function ()
        {
        	//alert('---1---delete start');
        	this.tabInputDiv2.grd_detail.set_formats(this.gridFormatStr2);
        	this.tabInputDiv2.grd_detail.set_enableredraw(true);
        	this.resetScroll();
        }
        //###################################################
        //###################################################
        //###################################################
        //###################################################
        //###################################################

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

        this.div_00_tab_01_Tabpage1_grd_summary_onheadclick = function(obj,e)
        {
        	//alert(e.cell+'/'+e.col);
        };

        this.tab_00_Tabpage1_cal_loadDate_onchanged = function(obj,e)
        {
        	this.fn_period();
        };

        this.tab_00_Tabpage1_btn_receiptor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //담당자 조회
        };

        this.tab_00_Tabpage1_edt_receiptor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_00_Tabpage1_btn_receiptor_onclick();
        	}
        };

        /*
         * 담당자 Tab 담당자 x 버튼 클릭시
         */
        this.fn_xClickReceiptor = function ()
        {
        	this.searchDiv.edt_receiptor.set_value('');
        	this.receiptorId = '';
        	this.fn_period();
        };
        this.div_00_tab_01_Tabpage1_grd_summary_oncellclick = function(obj,e)
        {
        	this.itemGrpSel = '';
        	var tempVal = this.ds_summary.getColumn(e.row, "LOADSMALLSEGMENTCLASSNAME");
        	//alert(e.col+'/'+e.row+'/'+tempVal);

        	if(e.col==2){
        		if(tempVal == '소계' || tempVal == '총계'){
        			this.clickVal = tempVal;
        			this.clickCol = e.col;
        			this.clickRow = e.row;

        			this.itemGrpSel = '';

        			this.fn_search2();
        			this.tabDiv.tab_01.set_tabindex(1);
        		}
        	}

        	if(e.col>2){
        		//alert(e.col+'/'+e.row+'/'+tempVal);
        		//head, Body
        		var colNm = this.tabInputDiv1.grd_summary.getCellProperty("Body", e.col, "text").replace("bind:","");
        		if(colNm.indexOf("TOTAL")>-1 && (tempVal == '소계' || tempVal == '총계')){
        			this.clickVal = tempVal;
        			this.clickCol = 2;
        			this.clickRow = e.row;

        			this.itemGrpSel = '';

        			this.fn_search2();
        			this.tabDiv.tab_01.set_tabindex(1);
        		}else{
        			var tempArr = colNm.split("_")
        			var tempStr = tempArr[1].replace("TYPE","").replace("QTY","");
        			this.itemGrpSel = tempStr;
        			if(tempVal == '소계' || tempVal == '총계'){
        				this.clickVal = tempVal;
        				this.clickCol = e.col;
        				this.clickRow = e.row;
        				this.fn_search2();
        				this.tabDiv.tab_01.set_tabindex(1);
        			}else{
        				//alert('소계/총계 아니면 skip...');
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.Button44_00_01.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.tab_search.Tabpage1.form.Button45_00.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_midProcess.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_midProcess_onitemchanged,this);
            this.tab_search.Tabpage1.form.cbo_loadType.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_lotType00_00_onitemchanged,this);
            this.tab_search.Tabpage1.form.cbo_process.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_process_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_loadDate.addEventHandler("onchanged",this.tab_00_Tabpage1_cal_loadDate_onchanged,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_receiptor.addEventHandler("onkeydown",this.tab_00_Tabpage1_edt_receiptor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_receiptor.addEventHandler("onclick",this.tab_00_Tabpage1_btn_receiptor_onclick,this);
            this.div_work.form.tab_01.addEventHandler("onchanged",this.div_00_tab_01_onchanged,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_summary.addEventHandler("onheadclick",this.div_00_tab_01_Tabpage1_grd_summary_onheadclick,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_summary.addEventHandler("oncellclick",this.div_00_tab_01_Tabpage1_grd_summary_oncellclick,this);
            this.div_header.form.btn_reset.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("MFM00401M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
