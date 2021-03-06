(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01400M");
            this.set_titletext("출하검사LRR현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamOverallStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NORMALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCHGROUP\">202007</Col><Col id=\"INSPECTIONCNT\">100</Col><Col id=\"NGCNT\">10</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"SEARCHGROUP\">202008</Col><Col id=\"INSPECTIONCNT\">200</Col><Col id=\"NGCNT\">10</Col><Col id=\"RJRATE\">5</Col></Row><Row><Col id=\"SEARCHGROUP\">202009</Col><Col id=\"INSPECTIONCNT\">300</Col><Col id=\"NGCNT\">60</Col><Col id=\"RJRATE\">20</Col></Row><Row><Col id=\"SEARCHGROUP\">202010</Col><Col id=\"INSPECTIONCNT\">10</Col><Col id=\"NGCNT\">10</Col><Col id=\"RJRATE\">100</Col></Row><Row><Col id=\"SEARCHGROUP\">202011</Col><Col id=\"INSPECTIONCNT\">200</Col><Col id=\"NGCNT\">0</Col><Col id=\"RJRATE\">0</Col></Row><Row><Col id=\"SEARCHGROUP\">202012</Col><Col id=\"INSPECTIONCNT\">300</Col><Col id=\"NGCNT\">60</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"WORKPERIODTO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"INT\" size=\"256\"/><Column id=\"1_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"5_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"5_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"2_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"3_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"4_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"5_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"6_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"7_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"8_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"9_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"10_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"11_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"12_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"13_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"14_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"15_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"16_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"17_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"18_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"19_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"20_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"21_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"22_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"23_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"24_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"25_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"26_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"27_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"28_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"29_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"30_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"31_RJRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusVendorMon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RJRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusVendorDate", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"INT\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"1_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"5_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"5_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"2_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"3_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"4_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"5_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"6_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"7_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"8_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"9_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"10_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"11_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"12_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"13_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"14_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"15_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"16_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"17_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"18_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"19_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"20_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"21_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"22_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"23_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"24_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"25_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"26_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"27_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"28_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"29_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"30_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"31_RJRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_groupMonList", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_groupDateList", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"INT\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"RJOCCURATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusGroupItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCNT\" type=\"INT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"INT\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"INT\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"RJRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"RJOCCURATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusChartDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"INT\" size=\"256\"/><Column id=\"NORMALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusVendorDateChart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"INT\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_RJRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusProductDefList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NGCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RJRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RJARATEOCCUPANCY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_1\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_1\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_4\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_4\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_5\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_5\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_6\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_6\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_7\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_7\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_8\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_8\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_9\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_9\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODE_10\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME_10\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCODENAME_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_ETC\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatusChartDetail00", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"INT\" size=\"256\"/><Column id=\"1_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_INSPECTIONCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_NGCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"2_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"3_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"4_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"6_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"7_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"8_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"9_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"10_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"11_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"12_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"13_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"14_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"15_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"16_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"17_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"18_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"19_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"20_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"21_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"22_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"23_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"24_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"25_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"26_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"27_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"28_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"29_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"30_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"31_RJRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"1_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"2_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"3_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"4_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"5_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"6_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"7_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"8_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"9_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"10_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"11_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"12_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"13_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"14_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"15_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"16_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"17_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"18_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"19_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"20_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"21_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"22_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"23_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"24_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"25_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"26_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"27_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"28_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"29_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"30_NORMALCNT\" type=\"STRING\" size=\"256\"/><Column id=\"31_NORMALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"STDDATE\">01</Col><Col id=\"INSPECTIONCNT\">1</Col><Col id=\"NGCNT\">1</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">10</Col></Row><Row><Col id=\"STDDATE\">02</Col><Col id=\"INSPECTIONCNT\">2</Col><Col id=\"NGCNT\">2</Col><Col id=\"TARGETVALUE\">3</Col><Col id=\"RJRATE\">20</Col></Row></Rows>");
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

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","138","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("출하검사이력조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0200");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("종합 현황");
            obj.set_tooltiptext("OVERALLSTATUS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new BasicChart("chart_month","0","10",null,"44.89%","635",null,null,null,"200",null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_qamOverallStatus");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e8e8e8");
            obj.set_enableanimation("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "월별 LRR",
            		"textfont": "bold 14pt \"Arial\"",
            		"padding": "0px 0px 5px",
            		"subtextcolor": "gray",
            		"subtextalign": "right",
            		"subtextfont": "italic 8/normal \"Arial\"",
            		"textcolor": "#4c4c4c"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "8pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true",
            		"markertextgap": "5",
            		"markertype": "circle",
            		"verticalitemgap": "5",
            		"align": "topcenter",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "12pt/normal \"Arial\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt/normal \"Arial\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"ticksize": "5",
            		"labelgap": "5",
            		"labelrotate": "-30",
            		"visible": true
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "9pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labelgap": "5",
            			"ticksize": "5"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0"
            		},
            		{
            			"id": "series1"
            		},
            		{
            			"id": "series2"
            		}
            	]
            });
            obj.set_categorycolumn("bind:SEARCHGROUP");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qamOverallStatus",null,"10","625","150","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_qamOverallStatus");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"년/월별\" tooltiptext=\"YEARMONTH\"/><Cell col=\"1\" cssclass=\"cell_head\"/><Cell col=\"2\" cssclass=\"cell_head\"/><Cell col=\"3\" cssclass=\"cell_head\"/><Cell col=\"4\" cssclass=\"cell_head\"/><Cell col=\"5\" cssclass=\"cell_head\"/><Cell col=\"6\" cssclass=\"cell_head\"/><Cell col=\"7\" cssclass=\"cell_head\"/><Cell col=\"8\" cssclass=\"cell_head\"/><Cell col=\"9\" cssclass=\"cell_head\"/><Cell col=\"10\" cssclass=\"cell_head\"/><Cell col=\"11\" cssclass=\"cell_head\"/><Cell col=\"12\" cssclass=\"cell_head\"/><Cell row=\"1\" text=\"검사수\" cssclass=\"cell_head\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"NG수\" tooltiptext=\"NGCNT\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"R/J(%)\"/><Cell row=\"3\" col=\"1\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"2\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"3\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"4\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"5\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"6\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"7\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"8\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"9\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"10\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"11\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"3\" col=\"12\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"목표(%)\" tooltiptext=\"TARGETRATE\"/><Cell row=\"4\" col=\"1\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"2\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"3\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"4\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"5\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"6\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"7\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"8\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"9\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"10\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"11\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"4\" col=\"12\" displaytype=\"mask\" maskeditformat=\"#0.0\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qamOverallStatusDetail","0",null,null,"115","0","0",null,null,null,"115",this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_qamOverallStatusDetail");
            obj.set_selecttype("cell");
            obj.set_scrolltype("horizontal");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일별\" tooltiptext=\"BYDAY\"/><Cell col=\"1\" text=\"목표(%)\" tooltiptext=\"TARGETRATE\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/></Band><Band id=\"body\"><Cell text=\"검사수\" cssclass=\"cell_head\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:1_INSPECTIONCNT\"/><Cell col=\"3\" text=\"bind:2_INSPECTIONCNT\"/><Cell col=\"4\" text=\"bind:3_INSPECTIONCNT\"/><Cell col=\"5\" text=\"bind:4_INSPECTIONCNT\"/><Cell col=\"6\" text=\"bind:5_INSPECTIONCNT\"/><Cell col=\"7\" text=\"bind:6_INSPECTIONCNT\"/><Cell col=\"8\" text=\"bind:7_INSPECTIONCNT\"/><Cell col=\"9\" text=\"bind:8_INSPECTIONCNT\"/><Cell col=\"10\" text=\"bind:9_INSPECTIONCNT\"/><Cell col=\"11\" text=\"bind:10_INSPECTIONCNT\"/><Cell col=\"12\" text=\"bind:11_INSPECTIONCNT\"/><Cell col=\"13\" text=\"bind:12_INSPECTIONCNT\"/><Cell col=\"14\" text=\"bind:13_INSPECTIONCNT\"/><Cell col=\"15\" text=\"bind:14_INSPECTIONCNT\"/><Cell col=\"16\" text=\"bind:15_INSPECTIONCNT\"/><Cell col=\"17\" text=\"bind:16_INSPECTIONCNT\"/><Cell col=\"18\" text=\"bind:17_INSPECTIONCNT\"/><Cell col=\"19\" text=\"bind:18_INSPECTIONCNT\"/><Cell col=\"20\" text=\"bind:19_INSPECTIONCNT\"/><Cell col=\"21\" text=\"bind:20_INSPECTIONCNT\"/><Cell col=\"22\" text=\"bind:21_INSPECTIONCNT\"/><Cell col=\"23\" text=\"bind:22_INSPECTIONCNT\"/><Cell col=\"24\" text=\"bind:23_INSPECTIONCNT\"/><Cell col=\"25\" text=\"bind:24_INSPECTIONCNT\"/><Cell col=\"26\" text=\"bind:25_INSPECTIONCNT\"/><Cell col=\"27\" text=\"bind:26_INSPECTIONCNT\"/><Cell col=\"28\" text=\"bind:27_INSPECTIONCNT\"/><Cell col=\"29\" text=\"bind:28_INSPECTIONCNT\"/><Cell col=\"30\" text=\"bind:29_INSPECTIONCNT\"/><Cell col=\"31\" text=\"bind:30_INSPECTIONCNT\"/><Cell col=\"32\" text=\"bind:31_INSPECTIONCNT\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"NG수\" tooltiptext=\"NGCNT\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"bind:1_NGCNT\"/><Cell row=\"1\" col=\"3\" text=\"bind:2_NGCNT\"/><Cell row=\"1\" col=\"4\" text=\"bind:3_NGCNT\"/><Cell row=\"1\" col=\"5\" text=\"bind:4_NGCNT\"/><Cell row=\"1\" col=\"6\" text=\"bind:5_NGCNT\"/><Cell row=\"1\" col=\"7\" text=\"bind:6_NGCNT\"/><Cell row=\"1\" col=\"8\" text=\"bind:7_NGCNT\"/><Cell row=\"1\" col=\"9\" text=\"bind:8_NGCNT\"/><Cell row=\"1\" col=\"10\" text=\"bind:9_NGCNT\"/><Cell row=\"1\" col=\"11\" text=\"bind:10_NGCNT\"/><Cell row=\"1\" col=\"12\" text=\"bind:11_NGCNT\"/><Cell row=\"1\" col=\"13\" text=\"bind:12_NGCNT\"/><Cell row=\"1\" col=\"14\" text=\"bind:13_NGCNT\"/><Cell row=\"1\" col=\"15\" text=\"bind:14_NGCNT\"/><Cell row=\"1\" col=\"16\" text=\"bind:15_NGCNT\"/><Cell row=\"1\" col=\"17\" text=\"bind:16_NGCNT\"/><Cell row=\"1\" col=\"18\" text=\"bind:17_NGCNT\"/><Cell row=\"1\" col=\"19\" text=\"bind:18_NGCNT\"/><Cell row=\"1\" col=\"20\" text=\"bind:19_NGCNT\"/><Cell row=\"1\" col=\"21\" text=\"bind:20_NGCNT\"/><Cell row=\"1\" col=\"22\" text=\"bind:21_NGCNT\"/><Cell row=\"1\" col=\"23\" text=\"bind:22_NGCNT\"/><Cell row=\"1\" col=\"24\" text=\"bind:23_NGCNT\"/><Cell row=\"1\" col=\"25\" text=\"bind:24_NGCNT\"/><Cell row=\"1\" col=\"26\" text=\"bind:25_NGCNT\"/><Cell row=\"1\" col=\"27\" text=\"bind:26_NGCNT\"/><Cell row=\"1\" col=\"28\" text=\"bind:27_NGCNT\"/><Cell row=\"1\" col=\"29\" text=\"bind:28_NGCNT\"/><Cell row=\"1\" col=\"30\" text=\"bind:29_NGCNT\"/><Cell row=\"1\" col=\"31\" text=\"bind:30_NGCNT\"/><Cell row=\"1\" col=\"32\" text=\"bind:31_NGCNT\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"R/J(%)\"/><Cell row=\"2\" col=\"1\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"2\" text=\"bind:1_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"3\" text=\"bind:2_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"4\" text=\"bind:3_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"5\" text=\"bind:4_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"6\" text=\"bind:5_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"7\" text=\"bind:6_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"8\" text=\"bind:7_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"9\" text=\"bind:8_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"10\" text=\"bind:9_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"11\" text=\"bind:10_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"12\" text=\"bind:11_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"13\" text=\"bind:12_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"14\" text=\"bind:13_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"15\" text=\"bind:14_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"16\" text=\"bind:15_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"17\" text=\"bind:16_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"18\" text=\"bind:17_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"19\" text=\"bind:18_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"20\" text=\"bind:19_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"21\" text=\"bind:20_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"22\" text=\"bind:21_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"23\" text=\"bind:22_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"24\" text=\"bind:23_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"25\" text=\"bind:24_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"26\" text=\"bind:25_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"27\" text=\"bind:26_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"28\" text=\"bind:27_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"29\" text=\"bind:28_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"30\" text=\"bind:29_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"31\" text=\"bind:30_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"32\" text=\"bind:31_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new BasicChart("chart_date","0","chart_month:10",null,null,"0","grd_qamOverallStatusDetail:10",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_qamOverallStatusDetail");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title1",
            		"text": "일별 LRR",
            		"textfont": "bold 14pt \"Arial\"",
            		"padding": "0px 0px 5px",
            		"subtextcolor": "gray",
            		"subtextalign": "right",
            		"subtextfont": "italic 8/normal \"Arial\"",
            		"textcolor": "#4c4c4c",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend1",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "8pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true",
            		"markertextgap": "5",
            		"markertype": "circle",
            		"verticalitemgap": "5",
            		"align": "topcenter",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip1",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board1",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis1",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "12pt/normal \"Arial\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt/normal \"Arial\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"ticksize": "5",
            		"labelgap": "5",
            		"labelrotate": "-30"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "10pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar1",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"vrangebar": {
            		"id": "vrangebar1",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0"
            		},
            		{
            			"id": "series1"
            		},
            		{
            			"id": "series2"
            		}
            	]
            });
            obj.set_categorycolumn("bind:SEARCHGROUP");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("업체별 현황(월)");
            obj.set_tooltiptext("MONTHSTATUSBYCOMPANY");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new BasicChart("chart_vendorMon","0","10",null,"50%","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_groupMonList");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "업체별 월별 LRR",
            		"textfont": "bold 14pt \"Arial\"",
            		"padding": "0px 0px 5px",
            		"subtextcolor": "gray",
            		"subtextalign": "right",
            		"subtextfont": "italic 8/normal \"Arial\"",
            		"textcolor": "#4c4c4c"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "8pt/normal \"Arial\"",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true",
            		"markertextgap": "5",
            		"markertype": "circle",
            		"verticalitemgap": "5",
            		"align": "topcenter",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "12pt/normal \"Arial\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt/normal \"Arial\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"ticksize": "5",
            		"labelgap": "5",
            		"labelrotate": "-30"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "9pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labelgap": "5",
            			"ticksize": "5"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0"
            		},
            		{
            			"id": "series1"
            		},
            		{
            			"id": "series2"
            		}
            	]
            });
            obj.set_categorycolumn("bind:SEARCHGROUP");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_qamOverallStatusVendorMon","0","chart_vendorMon:10",null,"96","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_qamOverallStatusVendorMon");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업체명\" tooltiptext=\"VENDORNAME\"/><Cell col=\"1\" text=\"년/월별\" tooltiptext=\"YEARMONTH\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" text=\"bind:VENDORNAME\" cssclass=\"cell_head\" textAlign=\"left\"/><Cell col=\"1\" text=\"검사수\" cssclass=\"cell_head\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell row=\"1\" col=\"1\" cssclass=\"cell_head\" text=\"NG수\" tooltiptext=\"NGCNT\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"2\" col=\"1\" cssclass=\"cell_head\" text=\"R/J(%)\"/><Cell row=\"2\" col=\"2\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"3\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"4\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"5\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"6\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"7\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"8\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"9\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"10\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"11\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"12\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"13\" displaytype=\"mask\" maskeditformat=\"#0.0\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("업체별 현황(일)");
            obj.set_tooltiptext("DAYSTATUSBYCOMPANY");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("div_search","0","10","320","42",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cal","0","10","120","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("1");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKYEARMON");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","60","8","13",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","56","24","10",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01",null,null,"60","8","13","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_workMonth","120","10","120","21",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form.div_search.form);
            obj.set_taborder("6");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.div_work.form.tab.Tabpage3.form.div_search.addChild(obj.name, obj);

            obj = new BasicChart("chart_vendorDate","0","div_search:10",null,"50%","0",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_groupDateList");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "업체별 일별 LRR",
            		"textfont": "bold 14pt \"Arial\"",
            		"padding": "0px 0px 5px",
            		"subtextcolor": "gray",
            		"subtextalign": "right",
            		"subtextfont": "italic 8/normal \"Arial\"",
            		"textcolor": "#4c4c4c"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c",
            		"itemautofit": "true",
            		"markertextgap": "5",
            		"markertype": "circle",
            		"verticalitemgap": "5",
            		"align": "topcenter"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "12pt/normal \"Arial\"",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "9pt/normal \"Arial\"",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0",
            		"ticksize": "5",
            		"labelgap": "5",
            		"labelrotate": "-30"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #d0d0d0",
            			"labeltextcolor": "#6f6f6f",
            			"labeltextfont": "9pt/normal '맑은 고딕'",
            			"titletextcolor": "#4c4c4c",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #525252",
            			"axislinestyle": "1px solid #525252",
            			"labelgap": "5",
            			"ticksize": "5"
            		}
            	],
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "transparent",
            		"linestyle": "0px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "1",
            		"visible": true
            	},
            	"seriesset": [
            		{
            			"id": "series0"
            		},
            		{
            			"id": "series1"
            		},
            		{
            			"id": "series2"
            		}
            	]
            });
            obj.set_categorycolumn("bind:SEARCHGROUP");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_qamOverallStatusVendorDate","0","chart_vendorDate:10",null,"115","0",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_qamOverallStatusVendorDate");
            obj.set_selecttype("cell");
            obj.set_scrolltype("horizontal");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업체명\" tooltiptext=\"VENDORNAME\"/><Cell col=\"1\" text=\"일별\" tooltiptext=\"BYDAY\"/><Cell col=\"2\" text=\"월누적\" tooltiptext=\"MONTHLYACCUMULATION\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/></Band><Band id=\"body\"><Cell rowspan=\"3\" cssclass=\"cell_head\" textAlign=\"left\" text=\"bind:VENDORNAME\"/><Cell col=\"1\" text=\"검사수\" cssclass=\"cell_head\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"2\" text=\"bind:SUM_INSPECTIONCNT\"/><Cell col=\"3\" text=\"bind:1_INSPECTIONCNT\"/><Cell col=\"4\" text=\"bind:2_INSPECTIONCNT\"/><Cell col=\"5\" text=\"bind:3_INSPECTIONCNT\"/><Cell col=\"6\" text=\"bind:4_INSPECTIONCNT\"/><Cell col=\"7\" text=\"bind:5_INSPECTIONCNT\"/><Cell col=\"8\" text=\"bind:6_INSPECTIONCNT\"/><Cell col=\"9\" text=\"bind:7_INSPECTIONCNT\"/><Cell col=\"10\" text=\"bind:8_INSPECTIONCNT\"/><Cell col=\"11\" text=\"bind:9_INSPECTIONCNT\"/><Cell col=\"12\" text=\"bind:10_INSPECTIONCNT\"/><Cell col=\"13\" text=\"bind:11_INSPECTIONCNT\"/><Cell col=\"14\" text=\"bind:12_INSPECTIONCNT\"/><Cell col=\"15\" text=\"bind:13_INSPECTIONCNT\"/><Cell col=\"16\" text=\"bind:14_INSPECTIONCNT\"/><Cell col=\"17\" text=\"bind:15_INSPECTIONCNT\"/><Cell col=\"18\" text=\"bind:16_INSPECTIONCNT\"/><Cell col=\"19\" text=\"bind:17_INSPECTIONCNT\"/><Cell col=\"20\" text=\"bind:18_INSPECTIONCNT\"/><Cell col=\"21\" text=\"bind:19_INSPECTIONCNT\"/><Cell col=\"22\" text=\"bind:20_INSPECTIONCNT\"/><Cell col=\"23\" text=\"bind:21_INSPECTIONCNT\"/><Cell col=\"24\" text=\"bind:22_INSPECTIONCNT\"/><Cell col=\"25\" text=\"bind:23_INSPECTIONCNT\"/><Cell col=\"26\" text=\"bind:24_INSPECTIONCNT\"/><Cell col=\"27\" text=\"bind:25_INSPECTIONCNT\"/><Cell col=\"28\" text=\"bind:26_INSPECTIONCNT\"/><Cell col=\"29\" text=\"bind:27_INSPECTIONCNT\"/><Cell col=\"30\" text=\"bind:28_INSPECTIONCNT\"/><Cell col=\"31\" text=\"bind:29_INSPECTIONCNT\"/><Cell col=\"32\" text=\"bind:30_INSPECTIONCNT\"/><Cell col=\"33\" text=\"bind:31_INSPECTIONCNT\"/><Cell row=\"1\" col=\"1\" cssclass=\"cell_head\" text=\"NG수\" tooltiptext=\"NGCNT\"/><Cell row=\"1\" col=\"2\" text=\"bind:SUM_NGCNT\"/><Cell row=\"1\" col=\"3\" text=\"bind:1_NGCNT\"/><Cell row=\"1\" col=\"4\" text=\"bind:2_NGCNT\"/><Cell row=\"1\" col=\"5\" text=\"bind:3_NGCNT\"/><Cell row=\"1\" col=\"6\" text=\"bind:4_NGCNT\"/><Cell row=\"1\" col=\"7\" text=\"bind:5_NGCNT\"/><Cell row=\"1\" col=\"8\" text=\"bind:6_NGCNT\"/><Cell row=\"1\" col=\"9\" text=\"bind:7_NGCNT\"/><Cell row=\"1\" col=\"10\" text=\"bind:8_NGCNT\"/><Cell row=\"1\" col=\"11\" text=\"bind:9_NGCNT\"/><Cell row=\"1\" col=\"12\" text=\"bind:10_NGCNT\"/><Cell row=\"1\" col=\"13\" text=\"bind:11_NGCNT\"/><Cell row=\"1\" col=\"14\" text=\"bind:12_NGCNT\"/><Cell row=\"1\" col=\"15\" text=\"bind:13_NGCNT\"/><Cell row=\"1\" col=\"16\" text=\"bind:14_NGCNT\"/><Cell row=\"1\" col=\"17\" text=\"bind:15_NGCNT\"/><Cell row=\"1\" col=\"18\" text=\"bind:16_NGCNT\"/><Cell row=\"1\" col=\"19\" text=\"bind:17_NGCNT\"/><Cell row=\"1\" col=\"20\" text=\"bind:18_NGCNT\"/><Cell row=\"1\" col=\"21\" text=\"bind:19_NGCNT\"/><Cell row=\"1\" col=\"22\" text=\"bind:20_NGCNT\"/><Cell row=\"1\" col=\"23\" text=\"bind:21_NGCNT\"/><Cell row=\"1\" col=\"24\" text=\"bind:22_NGCNT\"/><Cell row=\"1\" col=\"25\" text=\"bind:23_NGCNT\"/><Cell row=\"1\" col=\"26\" text=\"bind:24_NGCNT\"/><Cell row=\"1\" col=\"27\" text=\"bind:25_NGCNT\"/><Cell row=\"1\" col=\"28\" text=\"bind:26_NGCNT\"/><Cell row=\"1\" col=\"29\" text=\"bind:27_NGCNT\"/><Cell row=\"1\" col=\"30\" text=\"bind:28_NGCNT\"/><Cell row=\"1\" col=\"31\" text=\"bind:29_NGCNT\"/><Cell row=\"1\" col=\"32\" text=\"bind:30_NGCNT\"/><Cell row=\"1\" col=\"33\" text=\"bind:31_NGCNT\"/><Cell row=\"2\" col=\"1\" cssclass=\"cell_head\" text=\"R/J(%)\"/><Cell row=\"2\" col=\"2\" text=\"bind:SUM_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"3\" text=\"bind:1_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"4\" text=\"bind:2_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"5\" text=\"bind:3_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"6\" text=\"bind:4_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"7\" text=\"bind:5_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"8\" text=\"bind:6_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"9\" text=\"bind:7_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"10\" text=\"bind:8_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"11\" text=\"bind:9_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"12\" text=\"bind:10_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"13\" text=\"bind:11_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"14\" text=\"bind:12_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"15\" text=\"bind:13_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"16\" text=\"bind:14_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"17\" text=\"bind:15_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"18\" text=\"bind:16_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"19\" text=\"bind:17_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"20\" text=\"bind:18_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"21\" text=\"bind:19_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"22\" text=\"bind:20_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"23\" text=\"bind:21_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"24\" text=\"bind:22_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"25\" text=\"bind:23_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"26\" text=\"bind:24_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"27\" text=\"bind:25_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"28\" text=\"bind:26_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"29\" text=\"bind:27_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"30\" text=\"bind:28_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"31\" text=\"bind:29_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"32\" text=\"bind:30_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell row=\"2\" col=\"33\" text=\"bind:31_RJRATE\" displaytype=\"mask\" maskeditformat=\"#0.0\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab);
            obj.set_text("품목별 현황");
            obj.set_tooltiptext("STATUSBYITEM");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("div_search","0","10","460","42",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_cal","0","10","120","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("1");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ACTUALDATE");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","60","8","13",null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","56","24","10",null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01",null,null,"60","8","13","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","120","10","120","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","250","10","120","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.div_search.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.tab.Tabpage4.form.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_qamOverallStatusItem","0","div_search:10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamOverallStatusProductDefList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"90\"/><Column size=\"51\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"양산구분\" tooltiptext=\"LOTPRODUCTTYPE\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\" cssclass=\"cell_headMaster\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"PRODUCTREVISION\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"5\" rowspan=\"2\" text=\"검사LOT\" tooltiptext=\"INSPECTIONLOT\"/><Cell col=\"6\" rowspan=\"2\" text=\"NG LOT\" tooltiptext=\"NGLOT\"/><Cell col=\"7\" rowspan=\"2\" text=\"R/J(%)\" tooltiptext=\"RJRATE\"/><Cell col=\"8\" rowspan=\"2\" text=\"R/J 점유(%)\" tooltiptext=\"RJRATIO\"/><Cell col=\"9\" rowspan=\"2\" text=\"검사수량\" tooltiptext=\"INSPECTQTY\"/><Cell col=\"10\" rowspan=\"2\" text=\"불량수량\" tooltiptext=\"DEFECTCOUNT\"/><Cell col=\"11\" colspan=\"2\" text=\"WORST1\"/><Cell col=\"13\" colspan=\"2\" text=\"WORST2\"/><Cell col=\"15\" colspan=\"2\" text=\"WORST3\"/><Cell col=\"17\" colspan=\"2\" text=\"WORST4\"/><Cell col=\"19\" colspan=\"2\" text=\"WORST5\"/><Cell col=\"21\" colspan=\"2\" text=\"WORST6\"/><Cell col=\"23\" colspan=\"2\" text=\"WORST7\"/><Cell col=\"25\" colspan=\"2\" text=\"WORST8\"/><Cell col=\"27\" colspan=\"2\" text=\"WORST9\"/><Cell col=\"29\" colspan=\"2\" text=\"WORST10\"/><Cell col=\"31\" colspan=\"2\" text=\"기타\" tooltiptext=\"LockingReasonCode_LotLockinETC\"/><Cell row=\"1\" col=\"11\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"12\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"13\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"14\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"15\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"16\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"17\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"18\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"19\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"20\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"21\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"22\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"23\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"24\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"25\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"26\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"27\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"28\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"29\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"30\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"31\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"32\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTIONTYPENAME\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:INSPECTIONCNT\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:NGCNT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:RJRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell col=\"8\" textAlign=\"right\" expr=\"nexacro.round((RJRATE / dataset.getSum(&apos;RJRATE&apos;) * 100), 1)\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell col=\"9\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:SPECOUTQTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:DEFECTCODENAME_1\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:DEFECTQTY_1\"/><Cell col=\"13\" text=\"bind:DEFECTCODENAME_2\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:DEFECTQTY_2\"/><Cell col=\"15\" text=\"bind:DEFECTCODENAME_3\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:DEFECTQTY_3\"/><Cell col=\"17\" text=\"bind:DEFECTCODENAME_4\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:DEFECTQTY_4\"/><Cell col=\"19\" text=\"bind:DEFECTCODENAME_5\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:DEFECTQTY_5\"/><Cell col=\"21\" text=\"bind:DEFECTCODENAME_6\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:DEFECTQTY_6\"/><Cell col=\"23\" text=\"bind:DEFECTCODENAME_7\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:DEFECTQTY_7\"/><Cell col=\"25\" text=\"bind:DEFECTCODENAME_8\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:DEFECTQTY_8\"/><Cell col=\"27\" text=\"bind:DEFECTCODENAME_9\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:DEFECTQTY_9\"/><Cell col=\"29\" text=\"bind:DEFECTCODENAME_10\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:DEFECTQTY_10\"/><Cell col=\"31\" text=\"bind:DEFECTCODENAME_ETC\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:DEFECTCODENAME_ETC\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;INSPECTIONCNT&apos;);\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;NGCNT&apos;);\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#0.0\" expr=\"nexacro.round((dataset.getSum(&apos;NGCNT&apos;)/dataset.getSum(&apos;INSPECTIONCNT&apos;))*100,1)\"/><Cell col=\"8\" text=\"100.0\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;INSPECTIONQTY&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;SPECOUTQTY&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"11\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;DEFECTCNT_0&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"13\"/><Cell col=\"14\" expr=\"dataset.getSum(&apos;DEFECTCNT_1&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"15\"/><Cell col=\"16\" expr=\"dataset.getSum(&apos;DEFECTCNT_2&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"17\"/><Cell col=\"18\" expr=\"dataset.getSum(&apos;DEFECTCNT_3&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"19\"/><Cell col=\"20\" expr=\"dataset.getSum(&apos;DEFECTCNT_4&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"21\"/><Cell col=\"22\" expr=\"dataset.getSum(&apos;DEFECTCNT_5&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"23\"/><Cell col=\"24\" expr=\"dataset.getSum(&apos;DEFECTCNT_6&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"25\"/><Cell col=\"26\" expr=\"dataset.getSum(&apos;DEFECTCNT_7&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"27\"/><Cell col=\"28\" expr=\"dataset.getSum(&apos;DEFECTCNT_8&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"29\"/><Cell col=\"30\" expr=\"dataset.getSum(&apos;DEFECTCNT_9&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"31\"/><Cell col=\"32\" expr=\"dataset.getSum(&apos;DEFECTCNT_10&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamOverallStatusItem",null,"30","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cal","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKYEARMON");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_customer","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","59","248","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_value("고객사ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","59","275","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_monthFrom","108","35","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_monthTo","108","60","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_url("common::com_monthCalendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_cd","59","302","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_value("품목VER (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목VER (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SHIPMENTINSPHISTORYLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamOverallStatusItem00","380","747",null,null,"580","-172",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamOverallStatusGroupItem");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"양산구분\" tooltiptext=\"LOTPRODUCTTYPE\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\" cssclass=\"cell_headMaster\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"PRODUCTREVISION\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"5\" rowspan=\"2\" text=\"검사LOT\" tooltiptext=\"INSPECTIONLOT\"/><Cell col=\"6\" rowspan=\"2\" text=\"NG LOT\"/><Cell col=\"7\" rowspan=\"2\" text=\"R/J(%)\"/><Cell col=\"8\" rowspan=\"2\" text=\"R/J 점유(%)\" tooltiptext=\"RJRATIO\"/><Cell col=\"9\" rowspan=\"2\" text=\"검사수량\" tooltiptext=\"INSPECTQTY\"/><Cell col=\"10\" rowspan=\"2\" text=\"불량수량\" tooltiptext=\"DEFECTCOUNT\"/><Cell col=\"11\" colspan=\"2\" text=\"WORST1\"/><Cell col=\"13\" colspan=\"2\" text=\"WORST2\"/><Cell col=\"15\" colspan=\"2\" text=\"WORST3\"/><Cell col=\"17\" colspan=\"2\" text=\"WORST4\"/><Cell col=\"19\" colspan=\"2\" text=\"WORST5\"/><Cell col=\"21\" colspan=\"2\" text=\"WORST6\"/><Cell col=\"23\" colspan=\"2\" text=\"WORST7\"/><Cell col=\"25\" colspan=\"2\" text=\"WORST8\"/><Cell col=\"27\" colspan=\"2\" text=\"WORST9\"/><Cell col=\"29\" colspan=\"2\" text=\"WORST10\"/><Cell col=\"31\" colspan=\"2\" text=\"기타\" tooltiptext=\"LockingReasonCode_LotLockinETC\"/><Cell row=\"1\" col=\"11\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"12\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"13\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"14\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"15\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"16\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"17\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"18\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"19\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"20\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"21\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"22\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"23\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"24\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"25\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"26\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"27\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"28\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"29\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"30\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"31\" text=\"불량명\" tooltiptext=\"DEFECTCODECLASS\"/><Cell row=\"1\" col=\"32\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTTYPENAME\" combocodecol=\"C,ProductionType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:INSPECTIONCNT\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:NGCNT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:RJRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell col=\"8\" textAlign=\"right\" expr=\"nexacro.round((RJRATE / dataset.getSum(&apos;RJRATE&apos;) * 100), 1)\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell col=\"9\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:SPECOUTQTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:DEFECTCODENAME_0\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:DEFECTCNT_0\"/><Cell col=\"13\" text=\"bind:DEFECTCODENAME_1\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:DEFECTCNT_1\"/><Cell col=\"15\" text=\"bind:DEFECTCODENAME_2\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:DEFECTCNT_2\"/><Cell col=\"17\" text=\"bind:DEFECTCODENAME_3\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:DEFECTCNT_3\"/><Cell col=\"19\" text=\"bind:DEFECTCODENAME_4\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:DEFECTCNT_4\"/><Cell col=\"21\" text=\"bind:DEFECTCODENAME_5\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:DEFECTCNT_5\"/><Cell col=\"23\" text=\"bind:DEFECTCODENAME_6\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:DEFECTCNT_6\"/><Cell col=\"25\" text=\"bind:DEFECTCODENAME_7\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:DEFECTCNT_7\"/><Cell col=\"27\" text=\"bind:DEFECTCODENAME_8\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:DEFECTCNT_8\"/><Cell col=\"29\" text=\"bind:DEFECTCODENAME_9\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:DEFECTCNT_9\"/><Cell col=\"31\" text=\"bind:DEFECTCODENAME_10\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:DEFECTCNT_10\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"5\" expr=\"dataset.getSum(&apos;INSPECTIONCNT&apos;);\"/><Cell col=\"6\" expr=\"dataset.getSum(&apos;NGCNT&apos;);\"/><Cell col=\"7\" expr=\"dataset.getSum(&apos;RJRATE&apos;);\" displaytype=\"mask\" maskeditformat=\"#0.0\"/><Cell col=\"8\" text=\"100.0\"/><Cell col=\"9\" expr=\"dataset.getSum(&apos;INSPECTIONQTY&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"10\" expr=\"dataset.getSum(&apos;SPECOUTQTY&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"11\"/><Cell col=\"12\" expr=\"dataset.getSum(&apos;DEFECTCNT_0&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"13\"/><Cell col=\"14\" expr=\"dataset.getSum(&apos;DEFECTCNT_1&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"15\"/><Cell col=\"16\" expr=\"dataset.getSum(&apos;DEFECTCNT_2&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"17\"/><Cell col=\"18\" expr=\"dataset.getSum(&apos;DEFECTCNT_3&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"19\"/><Cell col=\"20\" expr=\"dataset.getSum(&apos;DEFECTCNT_4&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"21\"/><Cell col=\"22\" expr=\"dataset.getSum(&apos;DEFECTCNT_5&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"23\"/><Cell col=\"24\" expr=\"dataset.getSum(&apos;DEFECTCNT_6&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"25\"/><Cell col=\"26\" expr=\"dataset.getSum(&apos;DEFECTCNT_7&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"27\"/><Cell col=\"28\" expr=\"dataset.getSum(&apos;DEFECTCNT_8&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"29\"/><Cell col=\"30\" expr=\"dataset.getSum(&apos;DEFECTCNT_9&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"31\"/><Cell col=\"32\" expr=\"dataset.getSum(&apos;DEFECTCNT_10&apos;);\" displaytype=\"mask\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_site","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_productdef_id","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cbo_productdeftype","value","ds_search","PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_productdef_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01400M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질규격 이상발생
         * 파일명 		: QAM01300M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.07
         *
         * 설  명		: 품질관리 > 수입검사 > 출하검사이력조회
         *				  출하검사 결과를 조회한다
         *
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.07	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /*
        	dataset :::::::
        	- ds_qamOverallStatus 					: 종합현황 > 월별 LRR 그리드에 binding 한 dataset
        	- ds_qamOverallStatusDetail 			: 종합현황 > 일별 LRR 그리드에 binding 한 dataset
        	- ds_qamOverallStatusChartDetail		: 종합현황 > 일별 LRR 차트에서 사용할 data를 조회한 dataset
        	- ds_qamOverallStatusVendorMon 			: 업체별 현황(월) 그리드에 binding 한 dataset
        	- ds_groupMonList 						: 업체별 현황(월) 차트에 binding 한 dataset
        	- ds_qamOverallStatusVendorDate 		: 업체별 현황(일) 그리드에 binding 한 dataset
        	- ds_qamOverallStatusVendorDateChart 	: 업체별 현황(일) 차트에서 사용할 data를 조회한 dataset
        	- ds_groupDateList 						: 업체별 현황(일) 차트에 binding 한 dataset
        */
        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_lastDate = 31;
        this.fv_seriesNo = 0;
        this.fv_tabPage = 0; //현재 tabpage
        this.fv_sum = [];
        this.fv_chartContents; //json을 string형태로 저장할 변수
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.tab_search.Tabpage1.form.div_monthFrom.form.fn_initMonthCal(this, this.fn_getYearMonth("F"), null, this.ds_search, "PERIODFR");
        	this.tab_search.Tabpage1.form.div_monthTo.form.fn_initMonthCal(this, this.gfn_getYearMonth(), null, this.ds_search, "PERIODTO");

        	this.fn_formInit();

        	//this.div_work.form.tab.set_tabindex(3);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	//tab3, tab4는 화면안의 조회버튼으로 조회함
         	if(this.fv_tabPage == 0) {
        		this.fn_searchMon();
        	} else if(this.fv_tabPage == 1) {
        		this.fn_searchVendorMon();
        	}
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
        		//종합현황 > 월별
        		if (trId == "selectQamOverallStatusList")
        		{
        			this.fn_initChart("TAB1_MON");
        			this.fn_setGridVal("TAB1_MON");

        			if(this.ds_qamOverallStatus.rowcount > 0) {
        				this.fn_searchDate(this.ds_qamOverallStatus.rowcount);
        			}
        		}
        		//종합현황 > 일별
        		else if (trId == "selectQamOverallStatusDetailList")
        		{
        			//this.fv_lastDate = this.gfn_getLastDate(this.ds_search.getColumn(0, "SEARCHMONTH") + "01");

        			var objDs = this.ds_qamOverallStatusDetail;
        			var objGrd = this.div_work.form.tab.Tabpage1.form.grd_qamOverallStatusDetail;

        			this.fn_setDatasetByDate(objDs, objGrd, 1); //TAB1 (종합현황 > 일별) 은 col2부터 시작
        			this.fn_initChart("TAB1_DATE");
        		}
        		//업체별(월)
        		else if (trId == "selectQamOverallStatusVendorMonList")
        		{
        			var objDs = this.ds_qamOverallStatusVendorMon;
        			var objGrd = this.div_work.form.tab.Tabpage2.form.grd_qamOverallStatusVendorMon;

        			this.fn_setDatasetByMon(objDs);

        			this.fn_initChart("TAB2");
        			this.fn_setHeight(objGrd, objDs.rowcount, 24, 0);
        			this.fn_setGridVal("TAB2");
        		}
        		//업체별(일)
        		else if (trId == "selectQamOverallStatusVendorDateList")
        		{
        			//this.fv_lastDate = this.gfn_getLastDate(this.ds_search.getColumn(0, "SEARCHMONTH") + "01");

        			var objDs = this.ds_qamOverallStatusVendorDateChart;
        			var objGrd = this.div_work.form.tab.Tabpage3.form.grd_qamOverallStatusVendorDate;

        			this.fn_setDatasetByVendorDate(objDs, objGrd, 2); //TAB3 (업체별 현황(일)) 은 col3부터 시작

        			this.fn_initChart("TAB3");
        			this.fn_setHeight(objGrd, objDs.rowcount, 24, 19); //일별을 스크롤이 있어서 스크롤 길이만큼 더해줘야 함.
        		}
        //품목별 현황
        //		else if (trId == "selectQamOverallStatusItemList")
        //		{
        // 			var filterStr = "", newColumn = "";
        //
        // 			var objDs = this.ds_qamOverallStatusGroupItem;
        // 			var objDetailDs = this.ds_qamOverallStatusItem;
        //
        // 			for(var j = 0; j < objDs.rowcount; j++) {
        // 				filterStr = "LOTTYPENAME=='" + objDs.getColumn(j, "LOTTYPENAME") +"' && PRODUCTDEFID=='" + objDs.getColumn(j, "PRODUCTDEFID") +"' && " +
        // 					"PRODUCTDEFVERSION=='" + objDs.getColumn(j, "PRODUCTDEFVERSION") +"' && PRODUCTDEFNAME=='" + objDs.getColumn(j, "PRODUCTDEFNAME") +"' && " +
        // 					"CUSTOMERID=='" + objDs.getColumn(j, "CUSTOMERID") +"' && CUSTOMERNAME=='" + objDs.getColumn(j, "CUSTOMERNAME") +"'";
        //
        // 				objDetailDs.filter(filterStr);
        // 				objDetailDs.set_keystring("S:-SPECOUTQTY+DEFECTCODE");
        //
        // 				var defectCnt = 0;
        // 				for(var i = 0; i < objDetailDs.rowcount; i++) {
        //
        // 					if(i < 10) {
        // 						newColumn = "DEFECTCODENAME_" + i;
        // 						objDs.addColumn(newColumn, "STRING");
        // 						objDs.setColumn(j, newColumn, objDetailDs.getColumn(i, "DEFECTCODENAME"));
        //
        // 						newColumn = "DEFECTCNT_" + i;
        // 						objDs.addColumn(newColumn, "STRING");
        // 						objDs.setColumn(j, newColumn, objDetailDs.getColumn(i, "SPECOUTQTY"));
        //
        // 					} else {
        // 						if(i == 10) {
        // 							newColumn = "DEFECTCODENAME_" + i;
        // 							objDs.addColumn(newColumn, "STRING");
        // 							objDs.setColumn(j, newColumn, objDetailDs.getColumn(10, "DEFECTCODENAME"));
        //
        // 							newColumn = "DEFECTCNT_" + i;
        // 							objDs.addColumn(newColumn, "STRING");
        // 						}
        // 						defectCnt += nexacro.toNumber(objDetailDs.getColumn(i, "SPECOUTQTY"));
        // 						objDs.setColumn(j, newColumn, defectCnt);
        //
        // 					}
        // 				}
        // 				objDetailDs.filter("");
        // 				objDetailDs.set_keystring("");
        // 			}
        //품목별 현황
        		else if (trId == "selectQamOverallStatusProductDefList")
        		{
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_search.set_enableevent(false);
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);

        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty");

        	this.tab_search.Tabpage1.form.div_monthFrom.form.fn_setValue(this.fn_getYearMonth("F"));
        	this.tab_search.Tabpage1.form.div_monthTo.form.fn_setValue(this.gfn_getYearMonth());

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.set_enableevent(true);
        };

        /*
         * 기능 : 검색 > 종합현황 (Tab1) > 월별 LRR
         */
        this.fn_searchMon = function ()
        {
         	this.ds_qamOverallStatus.clearData();
        	this.ds_qamOverallStatusDetail.clearData();
        	this.ds_qamOverallStatusChartDetail.clearData();

        	this.ds_search.setColumn(0, "SEARCH_TYPE", "MONTH");

        	var sSvcID 			= "selectQamOverallStatusList";
        	var sController 	= "/qam01400/selectQamOverallStatusList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamOverallStatus=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 > 종합현황 (Tab1) > 일별 LRR
         */
        this.fn_searchDate = function (nRow)
        {
        	if(this.nfn_isNull(nRow) || nRow <= 0) return;

        	var pObjDs = this.ds_qamOverallStatus;
        	var pDate = pObjDs.getColumn(nRow - 1, "SEARCHGROUP");
        	var rDate = this.qamfn_replace(pDate, "/", "");

        	this.fv_sum = [];
        	this.fv_sum.push(pObjDs.getColumn(nRow - 1, "INSPECTIONCNT"));
        	this.fv_sum.push(pObjDs.getColumn(nRow - 1, "NGCNT"));
        	this.fv_sum.push(pObjDs.getColumn(nRow - 1, "RJRATE"));

         	this.ds_qamOverallStatusDetail.clearData();
        	this.ds_qamOverallStatusChartDetail.clearData();
        	this.ds_search.setColumn(0, "SEARCH_TYPE", "DATE");
        	this.ds_search.setColumn(0, "SEARCHMONTH", rDate);

        	var sSvcID 			= "selectQamOverallStatusDetailList";
        	var sController 	= "/qam01400/selectQamOverallStatusDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamOverallStatusDetail=ds_qamOverallStatusDetail ds_qamOverallStatusChartDetail=ds_qamOverallStatusChartDetail";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 > 업체별 현황(월) (Tab2)
         */
        this.fn_searchVendorMon = function ()
        {
         	this.ds_qamOverallStatusVendorMon.clearData();
        	this.ds_search.setColumn(0, "SEARCH_TYPE", "MONTH");

        	var sSvcID 			= "selectQamOverallStatusVendorMonList";
        	var sController 	= "/qam01400/selectQamOverallStatusVendorMonList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamOverallStatusVendorMon=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 > 업체별 현황(일) (Tab3)
         */
        this.fn_searchVendorDate = function ()
        {
        	var pDate = this.div_work.form.tab.Tabpage3.form.div_search.form.div_workMonth.form.fn_getValue()[0];
        	if(this.nfn_isNull(pDate) || pDate == "undefi") {
        		this.gfn_Message("RequiredSearch2", null, "warning", "ok"); //조회조건을 입력하세요
        		return;
        	}
         	this.ds_qamOverallStatusVendorDate.clearData();
        	this.ds_search.setColumn(0, "SEARCH_TYPE", "DATE");
        	this.ds_search.setColumn(0, "SEARCHMONTH", pDate);

        	var sSvcID 			= "selectQamOverallStatusVendorDateList";
        	var sController 	= "/qam01400/selectQamOverallStatusVendorDateList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamOverallStatusVendorDate=ds_qamOverallStatusVendorDate ds_qamOverallStatusVendorDateChart=ds_qamOverallStatusVendorDateChart";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 > 품목별 현황 (Tab4)
         */
        this.fn_searchItem = function ()
        {
        	var sDate = this.div_work.form.tab.Tabpage4.form.div_search.form.cal_dateFrom.value;
        	var eDate = this.div_work.form.tab.Tabpage4.form.div_search.form.cal_dateTo.value;

        	if(this.nfn_isNull(sDate) || this.nfn_isNull(eDate)) {
        		this.gfn_Message("RequiredSearch2", null, "warning", "ok"); //조회조건을 입력하세요
        		return;
        	}
         	this.ds_qamOverallStatusItem.clearData();
        	this.ds_search.setColumn(0, "SEARCH_TYPE", "PERIOD");
        	this.ds_search.setColumn(0, "WORKPERIODFR", sDate);
        	this.ds_search.setColumn(0, "WORKPERIODTO", eDate);

        // 	var sSvcID 			= "selectQamOverallStatusItemList";
        // 	var sController 	= "/qam01400/selectQamOverallStatusItemList.do";
        // 	var sInDatasets 	= "INPUT=ds_search";
        // 	var sOutDatasets 	= "ds_qamOverallStatusItem=ds_qamOverallStatusItem ds_qamOverallStatusGroupItem=ds_qamOverallStatusGroupItem";
        // 	var sArgs 			= "";

        	var sSvcID 			= "selectQamOverallStatusProductDefList";
        	var sController 	= "/qam01400/selectQamOverallStatusProductDefList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamOverallStatusProductDefList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 월별 LRR 차트 binding
         */
        this.fn_initChart = function(type)
        {
        	var obj, objDs, title, contents;

        	if(type == "TAB1_MON") {
        		obj = this.div_work.form.tab.Tabpage1.form.chart_month;
        		objDs = this.ds_qamOverallStatus;
        		title = this.nfn_getDictionaryname("MONTHLRR",true);
        		contents = this.fn_getContents2(title);
        	} else if(type == "TAB1_DATE") {
        		obj = this.div_work.form.tab.Tabpage1.form.chart_date;
        		objDs = this.ds_qamOverallStatusChartDetail;
        		title = this.nfn_getDictionaryname("DAYLRR",true);
        		contents = this.fn_getContents2(title);
        	} else if(type == "TAB2") {
        		obj = this.div_work.form.tab.Tabpage2.form.chart_vendorMon;
        		objDs = this.ds_groupMonList;
        		title = this.nfn_getDictionaryname("VENDORMONTHLRR",true);
        		contents = this.fn_getLineContents(title);
        	} else if(type == "TAB3") {
        		obj = this.div_work.form.tab.Tabpage3.form.chart_vendorDate;
        		objDs = this.ds_groupDateList;
        		title = this.nfn_getDictionaryname("VENDORDAYLRR",true);
        		contents = this.fn_getContents(title);
        	}

        	obj.set_binddataset(objDs);
        	obj.set_contents(contents);
        	obj.show();

        	//업체별일 경우 series 추가
        	if(type == "TAB2") {
        		this.fn_addLinChartSeries(this.ds_qamOverallStatusVendorMon, obj);
        	} else if(type == "TAB3") {
        		this.fn_addBarChartSeries(this.ds_qamOverallStatusVendorDate, obj);
        	}
        };

        /*
         * 기능 : 그리드에 binding 값 입력
         */
        this.fn_setGridVal = function (type)
        {
        	var arrBindText = ["SEARCHGROUP", "INSPECTIONCNT", "NGCNT", "RJRATE", "TARGETVALUE", "VENDORNAME"];
        	var objGrd, objDs ;
        	var rowCnt, nColIdx, nRowCnt, nCellIdx = 0, nCell = 0, nRow = 0;
        	var arrSearchGroup = []; //TAB2에서 사용할 배열

        	if(type == "TAB1_MON") {
        		objGrd = this.div_work.form.tab.Tabpage1.form.grd_qamOverallStatus;
        		objDs = this.ds_qamOverallStatus;

        		nColIdx = 13; //월별Text + 개월
        		nRowCnt = 5; //row 갯수
        		rowCnt = objDs.rowcount;


        	} else if(type == "TAB2") {
        		arrBindText = ["INSPECTIONCNT", "NGCNT", "RJRATE"];

        		objGrd = this.div_work.form.tab.Tabpage2.form.grd_qamOverallStatusVendorMon;
        		objDs = this.ds_qamOverallStatusVendorMon;

        		//head text 입력
        		for(var i = 0; i < this.ds_groupMonList.rowcount; i++) {
        			var searchGroup = this.ds_groupMonList.getColumn(i, "SEARCHGROUP");
        			objGrd.setCellProperty( "head", i+2, "text", searchGroup);
        			arrSearchGroup.push(searchGroup);
        		}

        		nColIdx = 13; // 업체명(merge라 포함시키지 않음) + 월별 + 개월
        		nRowCnt = 3; //row 갯수
        		rowCnt = objDs.rowcount;

        	}

        	//data set >>>>>>>>>> Start
        	if(type == "TAB1_MON") {
        		for(var i = 0; i <= nRowCnt; i++) {
        			for(var j = 0; j <= nColIdx; j++) {
        				nCellIdx = (i * nColIdx) + j; //Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값
        				nCell = nCellIdx % nColIdx;

        				if(nCell >  0) { //text cell
        					var val = objDs.getColumn(j-1, arrBindText[i]);
        					if(!this.nfn_isNull(val)) {
        						objGrd.setCellProperty( "body", nCellIdx, "text", val);
        					} else {
        						objGrd.setCellProperty( "body", nCellIdx, "text", "");
        					}
        				}
        			}
        		}
        	} else if(type == "TAB2") {
        		for(var i = 0; i <= nRowCnt; i++) {
        			for(var j = 1; j <= nColIdx; j++) { //업체명은 merge 했기 때문에 시작을 1부터
        				nCellIdx = (i * nColIdx) + j; //Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값

        				//objGrd.setCellProperty( "body", nCellIdx, "text", i + "/"+ j);
        				if(j > 1) { //업체명 + 월별 text
        					var columnName = arrSearchGroup[j-2] + "_" + arrBindText[i]; //ex) column name : 2021/06_NGCNT
        					objGrd.setCellProperty( "body", nCellIdx, "text", "bind:" + columnName);
        				}
        			}
        		}
        	}
        };

        /*
         * 기능 : 종합현황 > 일별에서 dataset에 set.
         */
        this.fn_setDatasetByDate = function (objDs, objGrd, nStartCol)
        {
        	for(var i = 1; i <= this.fv_lastDate; i++) {
        		//head text 입력
        		objGrd.setCellProperty( "head", i + nStartCol, "text", i + this.nfn_getDictionarynameUpper("일"));

        	}
        	for(var i = 0; i < 3; i++) {
        		var nCellIdx = (i * 33) + 1; //Sub Row 인덱스 * Column 갯수 + Cell 의 col 속성값
        		objGrd.setCellProperty( "body", nCellIdx, "text", this.fv_sum[i]); //합계
        	}
        };

        /*
         * 기능 : 업체별(월) 에서 dataset에 set.
         */
        this.fn_setDatasetByMon = function (objDs)
        {
        	//STEP1. 검색해온 dataset을 SearchGroup으로 group >> ds_groupMonList
        	var arrGroupColumn = ["SEARCHGROUP"];
        	this.ds_groupMonList.clearData();

        	this.qamfn_setDistinct(objDs, this.ds_groupMonList, arrGroupColumn); //SEARCHGROUP 로 group
        	this.ds_groupMonList.set_keystring("S:+SEARCHGROUP");

        	//STEP2. ds_temp에 objDs 값을 넣고,
        	var nRow = 0;
        	this.ds_temp.clearData();
        	this.ds_temp.appendData(objDs, true);
        	objDs.clearData();

        	var arrColumn = ["INSPECTIONCNT", "NGCNT", "RJRATE"];
        	for(var j = 0; j < this.ds_temp.rowcount; j++) {
        		var vendorId = this.ds_temp.getColumn(j, "VENDORID");
        		var searchGroup = this.ds_temp.getColumn(j, "SEARCHGROUP");

        		var filterStr = "VENDORID == '" + vendorId + "'";
        		var nRowCnt = objDs.getCaseCount(filterStr);

        		if(nRowCnt == 0) {
        			nRow = objDs.addRow();
        			objDs.copyRow(nRow, this.ds_temp, j);

        		} else {
        			//해당 vendor row를 찾아서  set 해줌
        			nRow = objDs.findRowExpr(filterStr);
        		}

        		//실제로 data set
        		for(var i = 0; i < arrColumn.length; i++) {
        			//새로운 column을 넣어줌
        			var newColumn = searchGroup + "_" + arrColumn[i]; //ex.2021/06_RJRATE
        			var val = this.ds_temp.getColumn(j, arrColumn[i]);

        			objDs.addColumn(newColumn, "STRING");
        			objDs.setColumn(nRow, newColumn, val);
        		}
        	}
        	this.fn_setChartDataset(objDs, this.ds_groupMonList);
        };

        /*
         * 기능 : 업체별(일) 에서 dataset에 set.
         */
        this.fn_setDatasetByVendorDate = function (objDs, objGrd, nStartCol)
        {
        // 	nStartCol = nStartCol - 1; // "일"은 1부터 시작하므로 -1 해줌.
         	var nRow = 0;

        	//STEP1. 검색해온 dataset을 SearchGroup으로 넣지 않고, 1일-마지막일자 까지 넣음 (일자를 모두 표현해야 하므로,)
        	this.ds_groupDateList.clearData();
        	for(var i = 1; i <= this.fv_lastDate; i++) {
        		//head text 입력
         		objGrd.setCellProperty( "head", i + nStartCol, "text", i + this.nfn_getDictionarynameUpper("일"));
         		nRow = this.ds_groupDateList.addRow();
         		this.ds_groupDateList.setColumn(nRow, "SEARCHGROUP", i);
        	}

        	//STEP2. ds_temp에 objDs 값을 넣고,
        	this.ds_temp.clearData();
        	this.ds_temp.appendData(objDs, true);
        	objDs.clearData();

         	var arrColumn = ["INSPECTIONCNT", "NGCNT", "RJRATE"];
        	var arrSearchGroup = [];
        	for(var j = 0; j < this.ds_temp.rowcount; j++) {
        		var vendorId = this.ds_temp.getColumn(j, "VENDORID");

        		var filterStr = "VENDORID == '" + vendorId + "'";
        		var nRowCnt = objDs.getCaseCount(filterStr);

        		if(nRowCnt == 0) {
        			nRow = objDs.addRow();
        			objDs.copyRow(nRow, this.ds_temp, j);
        			arrSearchGroup = [];
        		} else {
        			//해당 vendor row를 찾아서  set 해줌
        			nRow = objDs.findRowExpr(filterStr);
        		}

        		//실제로 data set
        		for(var k = 1; k <= this.fv_lastDate; k++) {
        			for(var i = 0; i < arrColumn.length; i++)
        			{
        				//새로운 column을 넣어줌
        				var newColumn = k + "_" + arrColumn[i]; //ex.1_RJRATE (일자_R/J (%))
        				objDs.addColumn(newColumn, "STRING");

        				var val = 0;
        				var searchGroup = nexacro.toNumber(this.ds_temp.getColumn(j, "SEARCHGROUP"));
        				if(k == searchGroup) {
        					val = this.ds_temp.getColumn(j, arrColumn[i]);
        					objDs.setColumn(nRow, newColumn, val);
        				}
        			}
        		}
        	}
         	this.fn_setChartDataset(objDs, this.ds_groupDateList, "TAB3", arrColumn);
        };

        /*
         * 기능 : chart에서 보여줄 dataset에 data setting.
        ------------------------------------------------------------
        TITLE | X축에 보여질 값을 바인딩할 컬럼들..

        EX)
        TITLE | GROUP1_VAL | GROUP2_VAL | GROUP3_VAL
        X1    | 0.1        | 0.2        | 0.3
        Y1    | 0.3        | 0.6        | 0.7

        >>> 일별 LRR에서 보여줘야 하는 data >>>
        GROUP_112 | GROUP_102 .. (GROUP_VENDORID)
        3.3       | 14.7 ....    (해당 VENDOR에 해당하는 값)
        ------------------------------------------------------------
         */
        this.fn_setChartDataset = function(objDs, objChartDs, type, arrColumn)
        {
        	for(var i = 0; i < objDs.rowcount; i++)	{
        		for(var j = 0; j < objChartDs.rowcount; j++) {
        			var searchGroup = objChartDs.getColumn(j, "SEARCHGROUP");
        			var valColumn = searchGroup + "_RJRATE"; //ex.1_RJRATE (일자_R/J (%))
        			var val = objDs.getColumn(i, valColumn);

        			//type == "TAB3"일 경우 추가
        			if(type == "TAB3") {
        				for(var k = 0; k < arrColumn.length; k++) {
        					valColumn = searchGroup + "_" + arrColumn[k]; //ex.1_RJRATE (일자_R/J (%))
        					val = objDs.getColumn(i, valColumn);
        					if(this.nfn_isNull(val)) {
        						objDs.setColumn(i, valColumn, "0");
        					}
        				}
        			}
        			if(!this.nfn_isNull(val)) {
        				//column명 : GROUP_VENDORID (ex. GROUP_112) / value : 2021/06_RJRATE 에 해당하는 값 (일 현황일 경우에는 1_RJRATE)
        				var vendorId = objDs.getColumn(i, "VENDORID");
        				var columnName = "GROUP_" + vendorId;
        				objChartDs.addColumn(columnName, "STRING");
        				objChartDs.setColumn(j, columnName, val);
        			}
        		}
        	}
        };

        /*
         * 기능 : 년월 구하기
         * 	- type : F or T
         *	- date : 변환할 date (없을경우 today)
         */
        this.fn_getYearMonth = function (type, date)
        {
        	if(this.nfn_isNull(date)) {
        		date = this.gfn_today();
        	}
        	var rDate, diffMonth;
        	if(type == "F") { //From
        		diffMonth = -11;

        	} else { //To
        		diffMonth = 11;
        	}
        	return this.gfn_getYearMonth(this.gfn_addMonth(date, diffMonth));
        };

        /*
         * 기능 : tab 변경 시 날짜 초기화
         */
        this.fn_setInitDate = function (idx)
        {
        	switch(idx) {
        	case 2 : //업체별 현황(일)
        		var pDate = this.div_work.form.tab.Tabpage3.form.div_search.form.div_workMonth.form.fn_getValue()[0];
        		if(this.nfn_isNull(pDate) || pDate == "undefi") {
        			this.div_work.form.tab.Tabpage3.form.div_search.form.div_workMonth.form.fn_setValue(this.gfn_getYearMonth()); //현재 년월
        		}
        		break;
        	case 3 : //품목별 현황
        		var sDate = this.div_work.form.tab.Tabpage4.form.div_search.form.cal_dateFrom.value;
        		var eDate = this.div_work.form.tab.Tabpage4.form.div_search.form.cal_dateTo.value;

        		if(this.nfn_isNull(sDate)) {
        			sDate = this.gfn_getYearMonth() + "01"; //현재월의 첫번째 일
        			this.div_work.form.tab.Tabpage4.form.div_search.form.cal_dateFrom.set_value(sDate);
        		}
        		if(this.nfn_isNull(eDate)) {
        			eDate = this.gfn_getYearMonth() + this.gfn_getLastDate(this.gfn_today()); //현재월의 마지막 일
        			this.div_work.form.tab.Tabpage4.form.div_search.form.cal_dateTo.set_value(eDate);
        		}

        		break;
        	default:
        	}
        };

        /*
         * 기능 : 화면 height 조정
         */
        this.fn_setHeight = function(objGrd, rowCnt, rowHeight, scrollHeight)
        {
        	var height = (rowCnt * rowHeight * 3 ) + rowHeight + scrollHeight;
        	objGrd.set_height(height);

        	this.div_work.set_height(nexacro.getApplication().mainframe.height -200);

        	//this.div_work.form.tab.set_height(this.div_work.form.tab.height + height);

        	this.resetScroll();
        };

        /*
         * 크기가 늘어날 경우 원래 size로 height 변경
         */
        this.fn_setOriginHeight = function()
        {
        	var height = nexacro.getApplication().mainframe.height -200;

        	this.div_work.set_height(height);
        	this.div_work.form.tab.set_height(height);

        	this.resetScroll();
        };

        /**************************************************************************
         * 7-1. 차트에서 사용할 속성
         ***************************************************************************/
         /*
         * 기능 : 종합 현황 조회에서 쓰일 chart contents
         *         stacktype : 하나의 그래프로 보이기
         */
        this.fn_getContents2 = function(title) {
        	var obj = {
        		"title": {
        			"id": "title",
        			"text": title,
        			"textfont": "bold 14pt \"Arial\"",
        			"textcolor": "#4c4c4c",
        			"padding": "0px 0px 5px",
        			"subtextcolor": "gray",
        			"subtextalign": "right",
        			"subtextfont": "italic 8/normal \"Arial\"",
        		},
        		"legend": {
        			"id": "legend",
        			"padding": "2px 10px 2px 10px",
        			"itemtextfont": "8pt \"Arial\"",
        			"itemtextcolor": "#4c4c4c",
        			"itemautofit": "true",
        			"markertextgap": "5",
        			"markertype": "circle",
        			"verticalitemgap": "5",
        			"align": "topcenter"
        		},
        		"tooltip": {
        			"id": "tooltip",
        			"background": "#4b4b4b",
        			"linestyle": "0px none",
        			"textcolor": "white",
        			"textfont": "10pt/normal \"Arial\"",
        			"padding": "5px"
        		},
        		"board": {
        			"id": "board",
        			"visible": true
        		},
        		"categoryaxis": {
        			"id": "categoryaxis",
        			"titletextcolor": "#4c4c4c",
        			"titletextfont": "normal 12pt/normal \"Arial\"",
        			"labeltextcolor": "#6f6f6f",
        			"labeltextfont": "normal 9pt/normal \"Arial\"",
        			"axislinestyle": "1px solid #525252",
        			"ticklinestyle": "1px solid #525252",
        			"boardlinestyle": "1px solid #d0d0d0",
        			"ticksize": "5",
        			"labelgap": "5",
        			"labelrotate": "-30"
        		},
        		"valueaxes": [
        			{
        				"id": "valueaxis0",
        				"boardlinevisible": true,
        				"boardlinestyle": "1px solid #d0d0d0",
        				"labeltextcolor": "#6f6f6f",
        				"labeltextfont": "normal 9pt/normal \"Arial\"",
        				"titletextcolor": "#4c4c4c",
        				"titletextfont": "normal 12pt/normal \"Arial\"",
        				"ticklinestyle": "1px solid #525252",
        				"axislinestyle": "1px solid #525252",
        				"labelgap": "5",
        				"ticksize": "5"
        			},
        			{
        				"id": "percentage",
        				"boardlinevisible": false,
        				"boardlinestyle": "1px solid #d0d0d0",
        				"labeltextcolor": "#6f6f6f",
        				"labeltextfont": "normal 9pt/normal \"Arial\"",
        				"labelmask": "###%",
        				"titletextcolor": "#4c4c4c",
        				"titletextfont": "bold 9pt/normal \"Arial\"",
        				"ticklinestyle": "1px solid #525252",
        				"axislinestyle": "1px solid #525252",
        				"labelgap": "5",
        				"ticksize": "5",
        				"opposite": "true",
        				"tickmin": "0",
        		    	"tickmax": "100"
        			}
        		],
        		"hrangebar": {
        			"id": "hrangebar",
        			"trackbarpadding": "1px",
        			"background": "transparent",
        			"linestyle": "0px solid #d5d5d5",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#c9c9c9",
        			"size": "1",
        			"visible": true
        		},
        		"vrangebar": {
        			"id": "vrangebar",
        			"trackbarpadding": "1px",
        			"background": "transparent",
        			"linestyle": "0px solid #d5d5d5",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#c9c9c9",
        			"size": "1",
        			"visible": true
        		},
        		"seriesset": [
        			{
        				"id": "series_" + this.fv_seriesNo++,
        				"titletext": "정상 LOT",
        				"barvisible": true,
        				"barsize": "40",
        				"itemtextcolor": "whitesmoke",
        				"itemtextfont": "9pt/normal \"Arial\"",
        				"valuecolumn": "bind:NORMALCNT",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid #1abd9c",
        				"barfillstyle": "#1abd9c",
        				"baritemtextgap": "10",
        				"baritemtextposition": "end",
        				"itemtextvisible": "true",
        				"baropacity": "0.7",
        				"stacktype": "normal"
        			},
        			{
        				"id": "series_" + this.fv_seriesNo++,
        				"titletext": "불량 LOT",
        				"barvisible": true,
        				"barsize": "40",
        				"itemtextcolor": "whitesmoke",
        				"itemtextfont": "9pt/normal \"Arial\"",
        				"valuecolumn": "bind:NGCNT",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid red",
        				"barfillstyle": "red",
        				"baritemtextposition": "end",
        				"itemtextvisible": "true",
        				"baropacity": "0.7",
        				"stacktype": "normal"
        			},
        			{
        				"id": "series_" + this.fv_seriesNo++,
        				"titletext": "LOT R/J율",
        				"barvisible": "false",
        				"barsize": "75",
        				"itemtextcolor": "#b408ae",
        				"itemtextfont": "9pt/normal \"Arial\"",
        				"valuecolumn": "bind:RJRATE",
        				"itemtextposition": "inside start",
        				"itemtextvisible": "true",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid #aec7e8",
        				"barfillstyle": "#aec7e8",
        				"linevisible": "true",
        				"linestyle": "2px solid #f17dd0",
        				"linefillstyle": "#1abd9c",
                        "pointvisible": "true",
        			    "pointfillstyle": "#f17dd0",
        			    "pointlinestyle": "2px solid #1abd9c",
        				"valueaxis": "percentage",
        				"pointitemtextgap": "10"
        			}
        		]
        	};
        	return obj;
        };
        /*
         * 기능 : 업체별 현황(일) 조회에서 쓰일 chart contents
         */
        this.fn_getContents = function(title) {
        	var obj = {
        		"title": {
        			"id": "title",
        			"text": title,
        			"textfont": "bold 14pt \"Arial\"",
        			"textcolor": "#4c4c4c",
        			"padding": "0px 0px 5px",
        			"subtextcolor": "gray",
        			"subtextalign": "right",
        			"subtextfont": "italic 8/normal \"Arial\""
        		},
        		"legend": {
        			"id": "legend",
        			"padding": "2px 10px 2px 10px",
        			"itemtextfont": "8pt \"Arial\"",
        			"itemtextcolor": "#4c4c4c",
        			"itemautofit": "true",
        			"markertextgap": "5",
        			"markertype": "circle",
        			"verticalitemgap": "5",
        			"align": "topcenter"
        		},
        		"tooltip": {
        			"id": "tooltip",
        			"background": "#4b4b4b",
        			"linestyle": "0px none",
        			"textcolor": "white",
        			"textfont": "10pt/normal \"Arial\"",
        			"padding": "5px"
        		},
        		"board": {
        			"id": "board",
        			"visible": true
        		},
        		"categoryaxis": {
        			"id": "categoryaxis",
        			"titletextcolor": "#4c4c4c",
        			"titletextfont": "normal 12pt/normal \"Arial\"",
        			"labeltextcolor": "#6f6f6f",
        			"labeltextfont": "normal 9pt/normal \"Arial\"",
        			"axislinestyle": "1px solid #525252",
        			"ticklinestyle": "1px solid #525252",
        			"boardlinestyle": "1px solid #d0d0d0",
        			"ticksize": "5",
        			"labelgap": "5",
        			"labelrotate": "-30"
        		},
        		"valueaxes": [
        			{
        				"id": "valueaxis",
        				"boardlinevisible": true,
        				"boardlinestyle": "1px solid #d0d0d0",
        				"labeltextcolor": "#6f6f6f",
        				"labeltextfont": "9pt/normal \"Arial\"",
        				"labelmask": "###%",
                        "titletextcolor": "#4c4c4c",
        				"titletextfont": "bold 9pt/normal \"Arial\"",
        				"ticklinestyle": "1px solid #525252",
        				"axislinestyle": "1px solid #525252",
        				"labelgap": "5",
        				"ticksize": "5",
        				"tickmax": "100"
        			}
        		],
        		"hrangebar": {
        			"id": "hrangebar",
        			"trackbarpadding": "1px",
        			"background": "transparent",
        			"linestyle": "0px solid #d5d5d5",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#c9c9c9",
        			"size": "1",
        			"visible": true
        		},
        		"vrangebar": {
        			"id": "vrangebar",
        			"trackbarpadding": "1px",
        			"background": "transparent",
        			"linestyle": "0px solid #d5d5d5",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#c9c9c9",
        			"size": "1",
        			"visible": true
        		},
        		"seriesset": [
        			{
        				"id": "series_" + this.fv_seriesNo++,
        				"titletext": "검사 LOT",
        				"barvisible": true,
        				"barsize": "40",
        				"itemtextcolor": "whitesmoke",
        				"itemtextfont": "8pt/normal \"Arial\"",
        				"valuecolumn": "bind:INSPECTIONCNT",
        				"itemtextposition": "inside middle",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid #1abd9c",
        				"barfillstyle": "#1abd9c",
        				"itemtextvisible": "true",
        				"baropacity": "0.7"
        			},
        			{
        				"id": "series_" + this.fv_seriesNo++,
        				"titletext": "불량 LOT",
        				"barvisible": true,
        				"barsize": "40",
        				"itemtextcolor": "whitesmoke",
        				"itemtextfont": "8pt/normal \"Arial\"",
        				"valuecolumn": "bind:NGCNT",
        				"itemtextposition": "inside start",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid #1a85be",
        				"barfillstyle": "#1a85be",
        				"itemtextvisible": "true",
        				"baropacity": "0.7"
        			},
        			{
        				"id": "series_" + this.fv_seriesNo++,
        				"titletext": "LOT R/J율",
        				"barvisible": "false",
        				"barsize": "75",
        				"itemtextcolor": "#b408ae",
        				"itemtextfont": "8pt/normal \"Arial\"",
        				"valuecolumn": "bind:RJRATE",
        				"itemtextposition": "inside start",
        				"itemtextvisible": "true",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid #aec7e8",
        				"barfillstyle": "#aec7e8",
        				"linevisible": "true",
        				"linestyle": "2px solid #f17dd0",
        				"linefillstyle": "#1abd9c",
        				"pointitemtextgap": "10",
        				"pointitemtextposition": "lefttop"
        			}
        		]
        	};
        	return obj;
        };

        /*
         * 기능 : 업체별 현황(월) 조회에서 쓰일 line chart contents
         */
        this.fn_getLineContents = function(title) {
        	var obj = {
        		"title": {
        			"id": "title",
        			"text": title,
        			"textfont": "bold 14pt \"Arial\"",
        			"textcolor": "#4c4c4c",
        			"padding": "0px 0px 5px",
        			"subtextcolor": "gray",
        			"subtextalign": "right",
        			"subtextfont": "italic 8/normal \"Arial\""
        		},
        		"legend": {
        			"id": "legend",
        			"padding": "3px 10px 10px",
        			"itemtextfont": "8pt \"Arial\"",
        			"itemtextcolor": "#555555",
        			"horizontalitemgap": "6",
        			"background": "#ffffff",
        			"markertextgap": "3",
        			"align": "leftbottom"
        		},
        		"tooltip": {
        			"id": "tooltip",
        			"background": "#212121",
        			"textcolor": "#ffffff",
        			"textfont": "normal 9pt/normal \"Arial\"",
        			"padding": "5px"
        		},
        		"board": {
        			"id": "board",
        			"visible": true
        		},
        		"categoryaxis": {
        			"id": "categoryaxis",
        			"titletextcolor": "#333333",
        			"titletextfont": "normal 12pt/normal \"Arial\"",
        			"labeltextcolor": "#555555",
        			"labeltextfont": "normal 9pt/normal \"Arial\"",
        			"ticklinestyle": "0px none",
        			"boardlinestyle": "1px solid #f1f1f1",
        			"axislinestyle": "0px none",
        			"visible": "true",
        			"labelrotate": "-30"
        		},
        		"valueaxes": [
        			{
        				"id": "valueaxis",
        				"boardlinevisible": true,
        				"boardlinestyle": "1px solid #f1f1f1",
        				"labeltextcolor": "#777777",
        				"labeltextfont": "9pt/normal \"Arial\"",
        				"labelmask": "###%",
        				"ticklinestyle": "1px solid #525252",
        				"axislinestyle": "1px solid #e8e8e8",
        				"titlegap": "0",
        				"tickmax": "100",
        				"tickmin": "0",
        				"labeltype": "text",
                        "titletextcolor": "#333333",
        				"titletextfont": "bold 9pt/normal \"Arial\""
        			}
        		],
        		"hrangebar": {
        			"id": "hrangebar",
        			"background": "#f0f0f0",
        			"linestyle": "0px none",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#cdcdcd",
        			"size": "12",
        			"visible": false,
        			"trackbarpadding": "0px"
        		},
        		"vrangebar": {
        			"id": "vrangebar",
        			"trackbarpadding": "0px",
        			"background": "#f0f0f0",
        			"linestyle": "0px none",
        			"trackbarlinestyle": "0px none",
        			"trackbarfillstyle": "#cdcdcd",
        			"size": "12",
        			"visible": false
        		},
        		"crosshair": {
        			"id": "crosshair",
        			"type": "y",
        			"xlinestyle": "1px solid #dddddd",
        			"ylinestyle": "1px solid #dddddd",
        			"tooltiptype": "y",
        			"xlinetooltipfillstyle": "#000000",
        			"ylinetooltipfillstyle": "#000000",
        			"ylinetooltippadding": "5px 10px 5px 5px",
        			"xlinetooltippadding": "5px 3px 5px 5px",
        			"xlinetooltiptextcolor": "#ffffff",
        			"xlinetooltipborderradius": "5px",
        			"ylinetooltiptextcolor": "#ffffff",
        			"ylinetooltipborderradius": "5px",
        			"visible": false,
        			"ylinetooltipgap": "7"
        		},
        		"seriesset": [
        			{
        				"id": "series1",
        				"titletext": "GROUP1",
        				"barvisible": "false",
        				"itemtextcolor": "#b408ae",
        				"itemtextfont": "9pt/normal \"Arial\"",
        				"valuecolumn": "bind:GROUP1",
        				"itemtextposition": "inside start",
        				"itemtextvisible": "true",
        				"itemtexttype": "number",
        				"barlinestyle": "1px solid #aec7e8",
        				"barfillstyle": "#aec7e8",
        				"linevisible": "true",
        				"linestyle": "2px solid #f17dd0",
        				"linefillstyle": "#1abd9c",
                        "pointvisible": "true",
        			    "pointfillstyle": "#f17dd0",
        			    "pointlinestyle": "2px solid #1abd9c",
        				"valueaxis": "percentage",
        				"pointitemtextgap": "10"
        			},
        			{
        				"id": "series2",
        				"titletext": "GROUP2",
        				"barvisible": "false",
        				"barsize": "3",
        				"itemtextcolor": "#333333",
        				"itemtextfont": "8pt/normal \"Arial\"",
        				"valuecolumn": "bind:GROUP2",
        				"itemtextposition": "inside start",
        				"linevisible": "true",
        				"linestyle": "2px solid #62be1b",
        				"linefillstyle": "#1abd9c",
        				"lineareavisible": "false",
        				"pointvisible": "true",
        				"pointfillstyle": "#ffffff",
        				"pointlinestyle": "2px solid #62be1b",
        				"linetype": "segment",
        				"stacktype": "none",
        				"itemtextvisible": "true",
        				"pointitemtextgap": "10"
        			}
        		]
        	};
        	return obj;
        };

        /*
         * 업체별 현황(월) 조회에서 쓰일 line chart  series
         */
        this.fn_getLineChartSeries = function(idx, vendorName, vendorId)
        {
        	var arrColor = ["#FF7F50","	#FFA500","#7b68ee","#FFD700","#7FFF00","#87CEFA","#BA55D3","#C71585"];

        	var obj = {
        		"id": "vendorSeries_" + idx,
        		"titletext": vendorName,
        		"barvisible": "false",
        		"barsize": "3",
        		"itemtextcolor": "#333333",
        		"itemtextfont": "bold 9pt/normal \"Arial\"",
        		"valuecolumn": "bind:GROUP_" + vendorId,
        		"itemtextposition": "inside start",
        		"itemtextvisible": "true",
        		"linevisible": "true",
        		"linestyle": "2px solid " + arrColor[idx % 8],
        		"linefillstyle": "#1abd9c",
        		"lineareavisible": "false",
        		"pointvisible": "true",
        		"pointfillstyle": "#ffffff",
        		"pointlinestyle": "2px solid " + arrColor[idx % 8],
        		"linetype": "segment",
        		"stacktype": "none",
        		"pointitemtextgap": "7",
        		"pointitemtextposition": "leftmiddle"
        	};
        	return obj;
        };

        /*
         * 업체별 일
         */
        this.fn_getBarChartSeries = function(idx, vendorName, vendorId)
        {
        	var arrColor = ["#FF7F50","	#FFA500","#7b68ee","#FFD700","#7FFF00","#87CEFA","#BA55D3","#C71585"];

        	var obj = {
        		"id": "vendorDateSeries_" + idx,
        		"titletext": vendorName,
        		"barvisible": "true",
        		"barsize": "75",
        		"itemtextcolor": "#003860",
        		"itemtextfont": "normal 9pt/normal \"Arial\"",
        		"valuecolumn": "bind:GROUP_" + vendorId,
        		"itemtextposition": "inside start",
        		"itemtextvisible": "true",
        		"linevisible": "false",
        		"barlinestyle": "1px solid " + arrColor[idx % 8],
        		"barfillstyle": arrColor[idx % 8],
        		"lineareavisible": "false"
        	};
        	return obj;
        };

        this.fn_addLinChartSeries = function(objDs, objChart)
        {
        	objDs.set_keystring("S:+VENDORNAME");
        	objChart.deleteAllSeries();

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var vendorName = objDs.getColumn(i, "VENDORNAME");
        		var vendorId = objDs.getColumn(i, "VENDORID");

        		var objSeries = this.fn_getLineChartSeries(i, vendorName, vendorId);
        		objChart.setSeries("vendorSeries_" + i, objSeries);

        	}
        	objDs.set_keystring("");
        };

        /*
         * 업체별 (일)
         */
        this.fn_addBarChartSeries = function(objDs, objChart)
        {
        	objDs.set_keystring("S:+VENDORNAME");
        	objChart.deleteAllSeries();

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var vendorName = objDs.getColumn(i, "VENDORNAME");
        		var vendorId = objDs.getColumn(i, "VENDORID");

        		var objSeries = this.fn_getBarChartSeries(i, vendorName, vendorId);
        		objChart.setSeries("vendorDateSeries_" + i, objSeries);

        	}
        	objDs.set_keystring("");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //월별 LRR 그리드 클릭 시 이벤트
        this.div_work_tab_Tabpage1_grd_qamOverallStatus_oncellclick = function(obj,e)
        {
        	if(e.col > 0) {
        		this.fn_searchDate(e.col);
        	}
        };

        //dataset 변경 전 이벤트 - 검사일자 변경 전 value check
        this.ds_search_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PERIODFR" || e.columnid == "PERIODTO") {

        		var type, sDate, eDate;
        		if(e.columnid == "PERIODFR") {
        			type = "F";
        			sDate = e.newvalue;
        			eDate = obj.getColumn(e.row, "PERIODTO");
        		} else if(e.columnid == "PERIODTO") {
        			type = "T";
        			sDate = obj.getColumn(e.row, "PERIODFR");
        			eDate = e.newvalue;
        		}

        		if(this.gfn_diffMonth2(sDate, eDate) >= 12) {
        			this.gfn_Message("MonthLimit", "12", "warning", "ok"); //조회기간의 날짜 범위는 {0}개월 이내로 제한됩니다.
        			return false;
        		}
        	}
        };

        //tab page 변경 시
        this.div_work_tab_onchanged = function(obj,e)
        {
        	if(e.postindex != e.preindex) {
        		this.fn_setOriginHeight();
        	}
        	this.fv_tabPage = e.postindex;
        	this.fn_setInitDate(e.postindex);
        };

        //form 화면 크기 변경 시
        this.QAM01400M_onsize = function(obj,e)
        {
        	this.fn_setOriginHeight();
        };

        //차트 클릭 시 이벤트 (차트 확대 보여주기)
        this.fn_viewChart = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var objContents = obj.contents;
        	this.fv_chartContents = JSON.stringify(objContents);

        	var oArg = {objDs: objDs, contents: JSON.parse(this.fv_chartContents), bindCategoryColumn: "SEARCHGROUP"};
        	var opts = "width=1300,height=740";

        	this.gfn_openPopup("view_chart","qam::QAM03300P3.xfdl",oArg,opts);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onsize",this.QAM01400M_onsize,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.form.chart_month.addEventHandler("onlbuttondown",this.fn_viewChart,this);
            this.div_work.form.tab.Tabpage1.form.grd_qamOverallStatus.addEventHandler("oncellclick",this.div_work_tab_Tabpage1_grd_qamOverallStatus_oncellclick,this);
            this.div_work.form.tab.Tabpage1.form.chart_date.addEventHandler("onlbuttondown",this.fn_viewChart,this);
            this.div_work.form.tab.Tabpage2.form.chart_vendorMon.addEventHandler("onlbuttondown",this.fn_viewChart,this);
            this.div_work.form.tab.Tabpage3.form.div_search.form.btnSearch.addEventHandler("onclick",this.fn_searchVendorDate,this);
            this.div_work.form.tab.Tabpage3.form.chart_vendorDate.addEventHandler("onlbuttondown",this.fn_viewChart,this);
            this.div_work.form.tab.Tabpage4.form.div_search.form.btnSearch.addEventHandler("onclick",this.fn_searchItem,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.ds_search.addEventHandler("cancolumnchange",this.ds_search_cancolumnchange,this);
        };
        this.loadIncludeScript("QAM01400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
