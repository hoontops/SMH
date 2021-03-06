(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00100M");
            this.set_titletext("수주계획조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_workOrderPlan", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCS1\" type=\"STRING\" size=\"256\"/><Column id=\"PCS2\" type=\"STRING\" size=\"256\"/><Column id=\"PCS3\" type=\"STRING\" size=\"256\"/><Column id=\"PCS4\" type=\"STRING\" size=\"256\"/><Column id=\"PCS5\" type=\"STRING\" size=\"256\"/><Column id=\"PCS6\" type=\"STRING\" size=\"256\"/><Column id=\"PCS7\" type=\"STRING\" size=\"256\"/><Column id=\"PCS8\" type=\"STRING\" size=\"256\"/><Column id=\"PCS9\" type=\"STRING\" size=\"256\"/><Column id=\"PCS10\" type=\"STRING\" size=\"256\"/><Column id=\"PCS11\" type=\"STRING\" size=\"256\"/><Column id=\"PCS12\" type=\"STRING\" size=\"256\"/><Column id=\"PCS13\" type=\"STRING\" size=\"256\"/><Column id=\"PCS14\" type=\"STRING\" size=\"256\"/><Column id=\"PCS15\" type=\"STRING\" size=\"256\"/><Column id=\"PCS16\" type=\"STRING\" size=\"256\"/><Column id=\"PCS17\" type=\"STRING\" size=\"256\"/><Column id=\"PCS18\" type=\"STRING\" size=\"256\"/><Column id=\"PCS19\" type=\"STRING\" size=\"256\"/><Column id=\"PCS20\" type=\"STRING\" size=\"256\"/><Column id=\"PCS21\" type=\"STRING\" size=\"256\"/><Column id=\"PCS22\" type=\"STRING\" size=\"256\"/><Column id=\"PCS23\" type=\"STRING\" size=\"256\"/><Column id=\"PCS24\" type=\"STRING\" size=\"256\"/><Column id=\"PCS25\" type=\"STRING\" size=\"256\"/><Column id=\"PCS26\" type=\"STRING\" size=\"256\"/><Column id=\"PCS27\" type=\"STRING\" size=\"256\"/><Column id=\"PCS28\" type=\"STRING\" size=\"256\"/><Column id=\"PCS29\" type=\"STRING\" size=\"256\"/><Column id=\"PCS30\" type=\"STRING\" size=\"256\"/><Column id=\"PCS31\" type=\"STRING\" size=\"256\"/><Column id=\"PCS32\" type=\"STRING\" size=\"256\"/><Column id=\"PCS33\" type=\"STRING\" size=\"256\"/><Column id=\"PCS34\" type=\"STRING\" size=\"256\"/><Column id=\"PCS35\" type=\"STRING\" size=\"256\"/><Column id=\"PCS36\" type=\"STRING\" size=\"256\"/><Column id=\"PCS37\" type=\"STRING\" size=\"256\"/><Column id=\"PCS38\" type=\"STRING\" size=\"256\"/><Column id=\"PCS39\" type=\"STRING\" size=\"256\"/><Column id=\"PCS40\" type=\"STRING\" size=\"256\"/><Column id=\"PCS41\" type=\"STRING\" size=\"256\"/><Column id=\"PCS42\" type=\"STRING\" size=\"256\"/><Column id=\"PCS43\" type=\"STRING\" size=\"256\"/><Column id=\"PCS44\" type=\"STRING\" size=\"256\"/><Column id=\"PCS45\" type=\"STRING\" size=\"256\"/><Column id=\"PCS46\" type=\"STRING\" size=\"256\"/><Column id=\"PCS47\" type=\"STRING\" size=\"256\"/><Column id=\"PCS48\" type=\"STRING\" size=\"256\"/><Column id=\"PCS49\" type=\"STRING\" size=\"256\"/><Column id=\"PCS50\" type=\"STRING\" size=\"256\"/><Column id=\"PCS51\" type=\"STRING\" size=\"256\"/><Column id=\"PCS52\" type=\"STRING\" size=\"256\"/><Column id=\"PCS53\" type=\"STRING\" size=\"256\"/><Column id=\"PCS54\" type=\"STRING\" size=\"256\"/><Column id=\"PCS55\" type=\"STRING\" size=\"256\"/><Column id=\"PCS56\" type=\"STRING\" size=\"256\"/><Column id=\"PCS57\" type=\"STRING\" size=\"256\"/><Column id=\"PCS58\" type=\"STRING\" size=\"256\"/><Column id=\"PCS59\" type=\"STRING\" size=\"256\"/><Column id=\"PCS60\" type=\"STRING\" size=\"256\"/><Column id=\"PCS61\" type=\"STRING\" size=\"256\"/><Column id=\"PCS62\" type=\"STRING\" size=\"256\"/><Column id=\"PCS63\" type=\"STRING\" size=\"256\"/><Column id=\"PCS64\" type=\"STRING\" size=\"256\"/><Column id=\"PCS65\" type=\"STRING\" size=\"256\"/><Column id=\"PCS66\" type=\"STRING\" size=\"256\"/><Column id=\"PCS67\" type=\"STRING\" size=\"256\"/><Column id=\"PCS68\" type=\"STRING\" size=\"256\"/><Column id=\"PCS69\" type=\"STRING\" size=\"256\"/><Column id=\"PCS70\" type=\"STRING\" size=\"256\"/><Column id=\"PCS71\" type=\"STRING\" size=\"256\"/><Column id=\"PCS72\" type=\"STRING\" size=\"256\"/><Column id=\"PCS73\" type=\"STRING\" size=\"256\"/><Column id=\"PCS74\" type=\"STRING\" size=\"256\"/><Column id=\"PCS75\" type=\"STRING\" size=\"256\"/><Column id=\"PCS76\" type=\"STRING\" size=\"256\"/><Column id=\"PCS77\" type=\"STRING\" size=\"256\"/><Column id=\"PCS78\" type=\"STRING\" size=\"256\"/><Column id=\"PCS79\" type=\"STRING\" size=\"256\"/><Column id=\"PCS80\" type=\"STRING\" size=\"256\"/><Column id=\"PCS81\" type=\"STRING\" size=\"256\"/><Column id=\"PCS82\" type=\"STRING\" size=\"256\"/><Column id=\"PCS83\" type=\"STRING\" size=\"256\"/><Column id=\"PCS84\" type=\"STRING\" size=\"256\"/><Column id=\"PCS85\" type=\"STRING\" size=\"256\"/><Column id=\"PCS86\" type=\"STRING\" size=\"256\"/><Column id=\"PCS87\" type=\"STRING\" size=\"256\"/><Column id=\"PCS88\" type=\"STRING\" size=\"256\"/><Column id=\"PCS89\" type=\"STRING\" size=\"256\"/><Column id=\"PCS90\" type=\"STRING\" size=\"256\"/><Column id=\"PCS91\" type=\"STRING\" size=\"256\"/><Column id=\"PCS92\" type=\"STRING\" size=\"256\"/><Column id=\"PCS93\" type=\"STRING\" size=\"256\"/><Column id=\"PCS94\" type=\"STRING\" size=\"256\"/><Column id=\"PCS95\" type=\"STRING\" size=\"256\"/><Column id=\"PCS96\" type=\"STRING\" size=\"256\"/><Column id=\"PCS97\" type=\"STRING\" size=\"256\"/><Column id=\"PCS98\" type=\"STRING\" size=\"256\"/><Column id=\"PCS99\" type=\"STRING\" size=\"256\"/><Column id=\"PNL1\" type=\"STRING\" size=\"256\"/><Column id=\"PNL2\" type=\"STRING\" size=\"256\"/><Column id=\"PNL3\" type=\"STRING\" size=\"256\"/><Column id=\"PNL4\" type=\"STRING\" size=\"256\"/><Column id=\"PNL5\" type=\"STRING\" size=\"256\"/><Column id=\"PNL6\" type=\"STRING\" size=\"256\"/><Column id=\"PNL7\" type=\"STRING\" size=\"256\"/><Column id=\"PNL8\" type=\"STRING\" size=\"256\"/><Column id=\"PNL9\" type=\"STRING\" size=\"256\"/><Column id=\"PNL10\" type=\"STRING\" size=\"256\"/><Column id=\"PNL11\" type=\"STRING\" size=\"256\"/><Column id=\"PNL12\" type=\"STRING\" size=\"256\"/><Column id=\"PNL13\" type=\"STRING\" size=\"256\"/><Column id=\"PNL14\" type=\"STRING\" size=\"256\"/><Column id=\"PNL15\" type=\"STRING\" size=\"256\"/><Column id=\"PNL16\" type=\"STRING\" size=\"256\"/><Column id=\"PNL17\" type=\"STRING\" size=\"256\"/><Column id=\"PNL18\" type=\"STRING\" size=\"256\"/><Column id=\"PNL19\" type=\"STRING\" size=\"256\"/><Column id=\"PNL20\" type=\"STRING\" size=\"256\"/><Column id=\"PNL21\" type=\"STRING\" size=\"256\"/><Column id=\"PNL22\" type=\"STRING\" size=\"256\"/><Column id=\"PNL23\" type=\"STRING\" size=\"256\"/><Column id=\"PNL24\" type=\"STRING\" size=\"256\"/><Column id=\"PNL25\" type=\"STRING\" size=\"256\"/><Column id=\"PNL26\" type=\"STRING\" size=\"256\"/><Column id=\"PNL27\" type=\"STRING\" size=\"256\"/><Column id=\"PNL28\" type=\"STRING\" size=\"256\"/><Column id=\"PNL29\" type=\"STRING\" size=\"256\"/><Column id=\"PNL30\" type=\"STRING\" size=\"256\"/><Column id=\"PNL31\" type=\"STRING\" size=\"256\"/><Column id=\"PNL32\" type=\"STRING\" size=\"256\"/><Column id=\"PNL33\" type=\"STRING\" size=\"256\"/><Column id=\"PNL34\" type=\"STRING\" size=\"256\"/><Column id=\"PNL35\" type=\"STRING\" size=\"256\"/><Column id=\"PNL36\" type=\"STRING\" size=\"256\"/><Column id=\"PNL37\" type=\"STRING\" size=\"256\"/><Column id=\"PNL38\" type=\"STRING\" size=\"256\"/><Column id=\"PNL39\" type=\"STRING\" size=\"256\"/><Column id=\"PNL40\" type=\"STRING\" size=\"256\"/><Column id=\"PNL41\" type=\"STRING\" size=\"256\"/><Column id=\"PNL42\" type=\"STRING\" size=\"256\"/><Column id=\"PNL43\" type=\"STRING\" size=\"256\"/><Column id=\"PNL44\" type=\"STRING\" size=\"256\"/><Column id=\"PNL45\" type=\"STRING\" size=\"256\"/><Column id=\"PNL46\" type=\"STRING\" size=\"256\"/><Column id=\"PNL47\" type=\"STRING\" size=\"256\"/><Column id=\"PNL48\" type=\"STRING\" size=\"256\"/><Column id=\"PNL49\" type=\"STRING\" size=\"256\"/><Column id=\"PNL50\" type=\"STRING\" size=\"256\"/><Column id=\"PNL51\" type=\"STRING\" size=\"256\"/><Column id=\"PNL52\" type=\"STRING\" size=\"256\"/><Column id=\"PNL53\" type=\"STRING\" size=\"256\"/><Column id=\"PNL54\" type=\"STRING\" size=\"256\"/><Column id=\"PNL55\" type=\"STRING\" size=\"256\"/><Column id=\"PNL56\" type=\"STRING\" size=\"256\"/><Column id=\"PNL57\" type=\"STRING\" size=\"256\"/><Column id=\"PNL58\" type=\"STRING\" size=\"256\"/><Column id=\"PNL59\" type=\"STRING\" size=\"256\"/><Column id=\"PNL60\" type=\"STRING\" size=\"256\"/><Column id=\"PNL61\" type=\"STRING\" size=\"256\"/><Column id=\"PNL62\" type=\"STRING\" size=\"256\"/><Column id=\"PNL63\" type=\"STRING\" size=\"256\"/><Column id=\"PNL64\" type=\"STRING\" size=\"256\"/><Column id=\"PNL65\" type=\"STRING\" size=\"256\"/><Column id=\"PNL66\" type=\"STRING\" size=\"256\"/><Column id=\"PNL67\" type=\"STRING\" size=\"256\"/><Column id=\"PNL68\" type=\"STRING\" size=\"256\"/><Column id=\"PNL69\" type=\"STRING\" size=\"256\"/><Column id=\"PNL70\" type=\"STRING\" size=\"256\"/><Column id=\"PNL71\" type=\"STRING\" size=\"256\"/><Column id=\"PNL72\" type=\"STRING\" size=\"256\"/><Column id=\"PNL73\" type=\"STRING\" size=\"256\"/><Column id=\"PNL74\" type=\"STRING\" size=\"256\"/><Column id=\"PNL75\" type=\"STRING\" size=\"256\"/><Column id=\"PNL76\" type=\"STRING\" size=\"256\"/><Column id=\"PNL77\" type=\"STRING\" size=\"256\"/><Column id=\"PNL78\" type=\"STRING\" size=\"256\"/><Column id=\"PNL79\" type=\"STRING\" size=\"256\"/><Column id=\"PNL80\" type=\"STRING\" size=\"256\"/><Column id=\"PNL81\" type=\"STRING\" size=\"256\"/><Column id=\"PNL82\" type=\"STRING\" size=\"256\"/><Column id=\"PNL83\" type=\"STRING\" size=\"256\"/><Column id=\"PNL84\" type=\"STRING\" size=\"256\"/><Column id=\"PNL85\" type=\"STRING\" size=\"256\"/><Column id=\"PNL86\" type=\"STRING\" size=\"256\"/><Column id=\"PNL87\" type=\"STRING\" size=\"256\"/><Column id=\"PNL88\" type=\"STRING\" size=\"256\"/><Column id=\"PNL89\" type=\"STRING\" size=\"256\"/><Column id=\"PNL90\" type=\"STRING\" size=\"256\"/><Column id=\"PNL91\" type=\"STRING\" size=\"256\"/><Column id=\"PNL92\" type=\"STRING\" size=\"256\"/><Column id=\"PNL93\" type=\"STRING\" size=\"256\"/><Column id=\"PNL94\" type=\"STRING\" size=\"256\"/><Column id=\"PNL95\" type=\"STRING\" size=\"256\"/><Column id=\"PNL96\" type=\"STRING\" size=\"256\"/><Column id=\"PNL97\" type=\"STRING\" size=\"256\"/><Column id=\"PNL98\" type=\"STRING\" size=\"256\"/><Column id=\"PNL99\" type=\"STRING\" size=\"256\"/><Column id=\"TOT1\" type=\"STRING\" size=\"256\"/><Column id=\"TOT2\" type=\"STRING\" size=\"256\"/><Column id=\"TOT3\" type=\"STRING\" size=\"256\"/><Column id=\"TOT4\" type=\"STRING\" size=\"256\"/><Column id=\"TOT5\" type=\"STRING\" size=\"256\"/><Column id=\"TOT6\" type=\"STRING\" size=\"256\"/><Column id=\"TOT7\" type=\"STRING\" size=\"256\"/><Column id=\"TOT8\" type=\"STRING\" size=\"256\"/><Column id=\"TOT9\" type=\"STRING\" size=\"256\"/><Column id=\"TOT10\" type=\"STRING\" size=\"256\"/><Column id=\"TOT11\" type=\"STRING\" size=\"256\"/><Column id=\"TOT12\" type=\"STRING\" size=\"256\"/><Column id=\"TOT13\" type=\"STRING\" size=\"256\"/><Column id=\"TOT14\" type=\"STRING\" size=\"256\"/><Column id=\"TOT15\" type=\"STRING\" size=\"256\"/><Column id=\"TOT16\" type=\"STRING\" size=\"256\"/><Column id=\"TOT17\" type=\"STRING\" size=\"256\"/><Column id=\"TOT18\" type=\"STRING\" size=\"256\"/><Column id=\"TOT19\" type=\"STRING\" size=\"256\"/><Column id=\"TOT20\" type=\"STRING\" size=\"256\"/><Column id=\"TOT21\" type=\"STRING\" size=\"256\"/><Column id=\"TOT22\" type=\"STRING\" size=\"256\"/><Column id=\"TOT23\" type=\"STRING\" size=\"256\"/><Column id=\"TOT24\" type=\"STRING\" size=\"256\"/><Column id=\"TOT25\" type=\"STRING\" size=\"256\"/><Column id=\"TOT26\" type=\"STRING\" size=\"256\"/><Column id=\"TOT27\" type=\"STRING\" size=\"256\"/><Column id=\"TOT28\" type=\"STRING\" size=\"256\"/><Column id=\"TOT29\" type=\"STRING\" size=\"256\"/><Column id=\"TOT30\" type=\"STRING\" size=\"256\"/><Column id=\"TOT31\" type=\"STRING\" size=\"256\"/><Column id=\"TOT32\" type=\"STRING\" size=\"256\"/><Column id=\"TOT33\" type=\"STRING\" size=\"256\"/><Column id=\"TOT34\" type=\"STRING\" size=\"256\"/><Column id=\"TOT35\" type=\"STRING\" size=\"256\"/><Column id=\"TOT36\" type=\"STRING\" size=\"256\"/><Column id=\"TOT37\" type=\"STRING\" size=\"256\"/><Column id=\"TOT38\" type=\"STRING\" size=\"256\"/><Column id=\"TOT39\" type=\"STRING\" size=\"256\"/><Column id=\"TOT40\" type=\"STRING\" size=\"256\"/><Column id=\"TOT41\" type=\"STRING\" size=\"256\"/><Column id=\"TOT42\" type=\"STRING\" size=\"256\"/><Column id=\"TOT43\" type=\"STRING\" size=\"256\"/><Column id=\"TOT44\" type=\"STRING\" size=\"256\"/><Column id=\"TOT45\" type=\"STRING\" size=\"256\"/><Column id=\"TOT46\" type=\"STRING\" size=\"256\"/><Column id=\"TOT47\" type=\"STRING\" size=\"256\"/><Column id=\"TOT48\" type=\"STRING\" size=\"256\"/><Column id=\"TOT49\" type=\"STRING\" size=\"256\"/><Column id=\"TOT50\" type=\"STRING\" size=\"256\"/><Column id=\"TOT51\" type=\"STRING\" size=\"256\"/><Column id=\"TOT52\" type=\"STRING\" size=\"256\"/><Column id=\"TOT53\" type=\"STRING\" size=\"256\"/><Column id=\"TOT54\" type=\"STRING\" size=\"256\"/><Column id=\"TOT55\" type=\"STRING\" size=\"256\"/><Column id=\"TOT56\" type=\"STRING\" size=\"256\"/><Column id=\"TOT57\" type=\"STRING\" size=\"256\"/><Column id=\"TOT58\" type=\"STRING\" size=\"256\"/><Column id=\"TOT59\" type=\"STRING\" size=\"256\"/><Column id=\"TOT60\" type=\"STRING\" size=\"256\"/><Column id=\"TOT61\" type=\"STRING\" size=\"256\"/><Column id=\"TOT62\" type=\"STRING\" size=\"256\"/><Column id=\"TOT63\" type=\"STRING\" size=\"256\"/><Column id=\"TOT64\" type=\"STRING\" size=\"256\"/><Column id=\"TOT65\" type=\"STRING\" size=\"256\"/><Column id=\"TOT66\" type=\"STRING\" size=\"256\"/><Column id=\"TOT67\" type=\"STRING\" size=\"256\"/><Column id=\"TOT68\" type=\"STRING\" size=\"256\"/><Column id=\"TOT69\" type=\"STRING\" size=\"256\"/><Column id=\"TOT70\" type=\"STRING\" size=\"256\"/><Column id=\"TOT71\" type=\"STRING\" size=\"256\"/><Column id=\"TOT72\" type=\"STRING\" size=\"256\"/><Column id=\"TOT73\" type=\"STRING\" size=\"256\"/><Column id=\"TOT74\" type=\"STRING\" size=\"256\"/><Column id=\"TOT75\" type=\"STRING\" size=\"256\"/><Column id=\"TOT76\" type=\"STRING\" size=\"256\"/><Column id=\"TOT77\" type=\"STRING\" size=\"256\"/><Column id=\"TOT78\" type=\"STRING\" size=\"256\"/><Column id=\"TOT79\" type=\"STRING\" size=\"256\"/><Column id=\"TOT80\" type=\"STRING\" size=\"256\"/><Column id=\"TOT81\" type=\"STRING\" size=\"256\"/><Column id=\"TOT82\" type=\"STRING\" size=\"256\"/><Column id=\"TOT83\" type=\"STRING\" size=\"256\"/><Column id=\"TOT84\" type=\"STRING\" size=\"256\"/><Column id=\"TOT85\" type=\"STRING\" size=\"256\"/><Column id=\"TOT86\" type=\"STRING\" size=\"256\"/><Column id=\"TOT87\" type=\"STRING\" size=\"256\"/><Column id=\"TOT88\" type=\"STRING\" size=\"256\"/><Column id=\"TOT89\" type=\"STRING\" size=\"256\"/><Column id=\"TOT90\" type=\"STRING\" size=\"256\"/><Column id=\"TOT91\" type=\"STRING\" size=\"256\"/><Column id=\"TOT92\" type=\"STRING\" size=\"256\"/><Column id=\"TOT93\" type=\"STRING\" size=\"256\"/><Column id=\"TOT94\" type=\"STRING\" size=\"256\"/><Column id=\"TOT95\" type=\"STRING\" size=\"256\"/><Column id=\"TOT96\" type=\"STRING\" size=\"256\"/><Column id=\"TOT97\" type=\"STRING\" size=\"256\"/><Column id=\"TOT98\" type=\"STRING\" size=\"256\"/><Column id=\"TOT99\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL1\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pivot", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FCSTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INPUTWEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_term", this);
            obj._setContents("<ColumnInfo><Column id=\"YEARMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YEARWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_period", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_upload", this);
            obj._setContents("<ColumnInfo><Column id=\"DATA01\" type=\"STRING\" size=\"256\"/><Column id=\"DATA02\" type=\"STRING\" size=\"256\"/><Column id=\"DATA03\" type=\"STRING\" size=\"256\"/><Column id=\"DATA04\" type=\"STRING\" size=\"256\"/><Column id=\"DATA05\" type=\"STRING\" size=\"256\"/><Column id=\"DATA06\" type=\"STRING\" size=\"256\"/><Column id=\"DATA07\" type=\"STRING\" size=\"256\"/><Column id=\"DATA08\" type=\"STRING\" size=\"256\"/><Column id=\"DATA09\" type=\"STRING\" size=\"256\"/><Column id=\"DATA10\" type=\"STRING\" size=\"256\"/><Column id=\"DATA11\" type=\"STRING\" size=\"256\"/><Column id=\"DATA12\" type=\"STRING\" size=\"256\"/><Column id=\"QTY01\" type=\"STRING\" size=\"256\"/><Column id=\"QTY02\" type=\"STRING\" size=\"256\"/><Column id=\"QTY03\" type=\"STRING\" size=\"256\"/><Column id=\"QTY04\" type=\"STRING\" size=\"256\"/><Column id=\"QTY05\" type=\"STRING\" size=\"256\"/><Column id=\"QTY06\" type=\"STRING\" size=\"256\"/><Column id=\"QTY07\" type=\"STRING\" size=\"256\"/><Column id=\"QTY08\" type=\"STRING\" size=\"256\"/><Column id=\"QTY09\" type=\"STRING\" size=\"256\"/><Column id=\"QTY10\" type=\"STRING\" size=\"256\"/><Column id=\"QTY11\" type=\"STRING\" size=\"256\"/><Column id=\"QTY12\" type=\"STRING\" size=\"256\"/><Column id=\"QTY13\" type=\"STRING\" size=\"256\"/><Column id=\"QTY14\" type=\"STRING\" size=\"256\"/><Column id=\"QTY15\" type=\"STRING\" size=\"256\"/><Column id=\"QTY16\" type=\"STRING\" size=\"256\"/><Column id=\"QTY17\" type=\"STRING\" size=\"256\"/><Column id=\"QTY18\" type=\"STRING\" size=\"256\"/><Column id=\"QTY19\" type=\"STRING\" size=\"256\"/><Column id=\"QTY20\" type=\"STRING\" size=\"256\"/><Column id=\"QTY21\" type=\"STRING\" size=\"256\"/><Column id=\"QTY22\" type=\"STRING\" size=\"256\"/><Column id=\"QTY23\" type=\"STRING\" size=\"256\"/><Column id=\"QTY24\" type=\"STRING\" size=\"256\"/><Column id=\"QTY25\" type=\"STRING\" size=\"256\"/><Column id=\"QTY26\" type=\"STRING\" size=\"256\"/><Column id=\"QTY27\" type=\"STRING\" size=\"256\"/><Column id=\"QTY28\" type=\"STRING\" size=\"256\"/><Column id=\"QTY29\" type=\"STRING\" size=\"256\"/><Column id=\"QTY30\" type=\"STRING\" size=\"256\"/><Column id=\"QTY31\" type=\"STRING\" size=\"256\"/><Column id=\"QTY32\" type=\"STRING\" size=\"256\"/><Column id=\"QTY33\" type=\"STRING\" size=\"256\"/><Column id=\"QTY34\" type=\"STRING\" size=\"256\"/><Column id=\"QTY35\" type=\"STRING\" size=\"256\"/><Column id=\"QTY36\" type=\"STRING\" size=\"256\"/><Column id=\"QTY37\" type=\"STRING\" size=\"256\"/><Column id=\"QTY38\" type=\"STRING\" size=\"256\"/><Column id=\"QTY39\" type=\"STRING\" size=\"256\"/><Column id=\"QTY40\" type=\"STRING\" size=\"256\"/><Column id=\"QTY41\" type=\"STRING\" size=\"256\"/><Column id=\"QTY42\" type=\"STRING\" size=\"256\"/><Column id=\"QTY43\" type=\"STRING\" size=\"256\"/><Column id=\"QTY44\" type=\"STRING\" size=\"256\"/><Column id=\"QTY45\" type=\"STRING\" size=\"256\"/><Column id=\"QTY46\" type=\"STRING\" size=\"256\"/><Column id=\"QTY47\" type=\"STRING\" size=\"256\"/><Column id=\"QTY48\" type=\"STRING\" size=\"256\"/><Column id=\"QTY49\" type=\"STRING\" size=\"256\"/><Column id=\"QTY50\" type=\"STRING\" size=\"256\"/><Column id=\"QTY51\" type=\"STRING\" size=\"256\"/><Column id=\"QTY52\" type=\"STRING\" size=\"256\"/><Column id=\"QTY53\" type=\"STRING\" size=\"256\"/><Column id=\"QTY54\" type=\"STRING\" size=\"256\"/><Column id=\"QTY55\" type=\"STRING\" size=\"256\"/><Column id=\"QTY56\" type=\"STRING\" size=\"256\"/><Column id=\"QTY57\" type=\"STRING\" size=\"256\"/><Column id=\"QTY58\" type=\"STRING\" size=\"256\"/><Column id=\"QTY59\" type=\"STRING\" size=\"256\"/><Column id=\"QTY60\" type=\"STRING\" size=\"256\"/><Column id=\"QTY61\" type=\"STRING\" size=\"256\"/><Column id=\"QTY62\" type=\"STRING\" size=\"256\"/><Column id=\"QTY63\" type=\"STRING\" size=\"256\"/><Column id=\"QTY64\" type=\"STRING\" size=\"256\"/><Column id=\"QTY65\" type=\"STRING\" size=\"256\"/><Column id=\"QTY66\" type=\"STRING\" size=\"256\"/><Column id=\"QTY67\" type=\"STRING\" size=\"256\"/><Column id=\"QTY68\" type=\"STRING\" size=\"256\"/><Column id=\"QTY69\" type=\"STRING\" size=\"256\"/><Column id=\"QTY70\" type=\"STRING\" size=\"256\"/><Column id=\"QTY71\" type=\"STRING\" size=\"256\"/><Column id=\"QTY72\" type=\"STRING\" size=\"256\"/><Column id=\"QTY73\" type=\"STRING\" size=\"256\"/><Column id=\"QTY74\" type=\"STRING\" size=\"256\"/><Column id=\"QTY75\" type=\"STRING\" size=\"256\"/><Column id=\"QTY76\" type=\"STRING\" size=\"256\"/><Column id=\"QTY77\" type=\"STRING\" size=\"256\"/><Column id=\"QTY78\" type=\"STRING\" size=\"256\"/><Column id=\"QTY79\" type=\"STRING\" size=\"256\"/><Column id=\"QTY80\" type=\"STRING\" size=\"256\"/><Column id=\"QTY81\" type=\"STRING\" size=\"256\"/><Column id=\"QTY82\" type=\"STRING\" size=\"256\"/><Column id=\"QTY83\" type=\"STRING\" size=\"256\"/><Column id=\"QTY84\" type=\"STRING\" size=\"256\"/><Column id=\"QTY85\" type=\"STRING\" size=\"256\"/><Column id=\"QTY86\" type=\"STRING\" size=\"256\"/><Column id=\"QTY87\" type=\"STRING\" size=\"256\"/><Column id=\"QTY88\" type=\"STRING\" size=\"256\"/><Column id=\"QTY89\" type=\"STRING\" size=\"256\"/><Column id=\"QTY90\" type=\"STRING\" size=\"256\"/><Column id=\"QTY91\" type=\"STRING\" size=\"256\"/><Column id=\"QTY92\" type=\"STRING\" size=\"256\"/><Column id=\"QTY93\" type=\"STRING\" size=\"256\"/><Column id=\"QTY94\" type=\"STRING\" size=\"256\"/><Column id=\"QTY95\" type=\"STRING\" size=\"256\"/><Column id=\"QTY96\" type=\"STRING\" size=\"256\"/><Column id=\"QTY97\" type=\"STRING\" size=\"256\"/><Column id=\"QTY98\" type=\"STRING\" size=\"256\"/><Column id=\"QTY99\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_errorData", this);
            obj._setContents("<ColumnInfo><Column id=\"UUID\" type=\"STRING\" size=\"256\"/><Column id=\"IDX\" type=\"STRING\" size=\"256\"/><Column id=\"DATA01\" type=\"STRING\" size=\"256\"/><Column id=\"DATA02\" type=\"STRING\" size=\"256\"/><Column id=\"DATA03\" type=\"STRING\" size=\"256\"/><Column id=\"DATA04\" type=\"STRING\" size=\"256\"/><Column id=\"DATA05\" type=\"STRING\" size=\"256\"/><Column id=\"DATA06\" type=\"STRING\" size=\"256\"/><Column id=\"DATA07\" type=\"STRING\" size=\"256\"/><Column id=\"DATA08\" type=\"STRING\" size=\"256\"/><Column id=\"DATA09\" type=\"STRING\" size=\"256\"/><Column id=\"DATA10\" type=\"STRING\" size=\"256\"/><Column id=\"DATA11\" type=\"STRING\" size=\"256\"/><Column id=\"DATA12\" type=\"STRING\" size=\"256\"/><Column id=\"QTY01\" type=\"STRING\" size=\"256\"/><Column id=\"QTY02\" type=\"STRING\" size=\"256\"/><Column id=\"QTY03\" type=\"STRING\" size=\"256\"/><Column id=\"QTY04\" type=\"STRING\" size=\"256\"/><Column id=\"QTY05\" type=\"STRING\" size=\"256\"/><Column id=\"QTY06\" type=\"STRING\" size=\"256\"/><Column id=\"QTY07\" type=\"STRING\" size=\"256\"/><Column id=\"QTY08\" type=\"STRING\" size=\"256\"/><Column id=\"QTY09\" type=\"STRING\" size=\"256\"/><Column id=\"QTY10\" type=\"STRING\" size=\"256\"/><Column id=\"QTY11\" type=\"STRING\" size=\"256\"/><Column id=\"QTY12\" type=\"STRING\" size=\"256\"/><Column id=\"QTY13\" type=\"STRING\" size=\"256\"/><Column id=\"QTY14\" type=\"STRING\" size=\"256\"/><Column id=\"QTY15\" type=\"STRING\" size=\"256\"/><Column id=\"QTY16\" type=\"STRING\" size=\"256\"/><Column id=\"QTY17\" type=\"STRING\" size=\"256\"/><Column id=\"QTY18\" type=\"STRING\" size=\"256\"/><Column id=\"QTY19\" type=\"STRING\" size=\"256\"/><Column id=\"QTY20\" type=\"STRING\" size=\"256\"/><Column id=\"QTY21\" type=\"STRING\" size=\"256\"/><Column id=\"QTY22\" type=\"STRING\" size=\"256\"/><Column id=\"QTY23\" type=\"STRING\" size=\"256\"/><Column id=\"QTY24\" type=\"STRING\" size=\"256\"/><Column id=\"QTY25\" type=\"STRING\" size=\"256\"/><Column id=\"QTY26\" type=\"STRING\" size=\"256\"/><Column id=\"QTY27\" type=\"STRING\" size=\"256\"/><Column id=\"QTY28\" type=\"STRING\" size=\"256\"/><Column id=\"QTY29\" type=\"STRING\" size=\"256\"/><Column id=\"QTY30\" type=\"STRING\" size=\"256\"/><Column id=\"QTY31\" type=\"STRING\" size=\"256\"/><Column id=\"QTY32\" type=\"STRING\" size=\"256\"/><Column id=\"QTY33\" type=\"STRING\" size=\"256\"/><Column id=\"QTY34\" type=\"STRING\" size=\"256\"/><Column id=\"QTY35\" type=\"STRING\" size=\"256\"/><Column id=\"QTY36\" type=\"STRING\" size=\"256\"/><Column id=\"QTY37\" type=\"STRING\" size=\"256\"/><Column id=\"QTY38\" type=\"STRING\" size=\"256\"/><Column id=\"QTY39\" type=\"STRING\" size=\"256\"/><Column id=\"QTY40\" type=\"STRING\" size=\"256\"/><Column id=\"QTY41\" type=\"STRING\" size=\"256\"/><Column id=\"QTY42\" type=\"STRING\" size=\"256\"/><Column id=\"QTY43\" type=\"STRING\" size=\"256\"/><Column id=\"QTY44\" type=\"STRING\" size=\"256\"/><Column id=\"QTY45\" type=\"STRING\" size=\"256\"/><Column id=\"QTY46\" type=\"STRING\" size=\"256\"/><Column id=\"QTY47\" type=\"STRING\" size=\"256\"/><Column id=\"QTY48\" type=\"STRING\" size=\"256\"/><Column id=\"QTY49\" type=\"STRING\" size=\"256\"/><Column id=\"QTY50\" type=\"STRING\" size=\"256\"/><Column id=\"QTY51\" type=\"STRING\" size=\"256\"/><Column id=\"QTY52\" type=\"STRING\" size=\"256\"/><Column id=\"QTY53\" type=\"STRING\" size=\"256\"/><Column id=\"QTY54\" type=\"STRING\" size=\"256\"/><Column id=\"QTY55\" type=\"STRING\" size=\"256\"/><Column id=\"QTY56\" type=\"STRING\" size=\"256\"/><Column id=\"QTY57\" type=\"STRING\" size=\"256\"/><Column id=\"QTY58\" type=\"STRING\" size=\"256\"/><Column id=\"QTY59\" type=\"STRING\" size=\"256\"/><Column id=\"QTY60\" type=\"STRING\" size=\"256\"/><Column id=\"QTY61\" type=\"STRING\" size=\"256\"/><Column id=\"QTY62\" type=\"STRING\" size=\"256\"/><Column id=\"QTY63\" type=\"STRING\" size=\"256\"/><Column id=\"QTY64\" type=\"STRING\" size=\"256\"/><Column id=\"QTY65\" type=\"STRING\" size=\"256\"/><Column id=\"QTY66\" type=\"STRING\" size=\"256\"/><Column id=\"QTY67\" type=\"STRING\" size=\"256\"/><Column id=\"QTY68\" type=\"STRING\" size=\"256\"/><Column id=\"QTY69\" type=\"STRING\" size=\"256\"/><Column id=\"QTY70\" type=\"STRING\" size=\"256\"/><Column id=\"QTY71\" type=\"STRING\" size=\"256\"/><Column id=\"QTY72\" type=\"STRING\" size=\"256\"/><Column id=\"QTY73\" type=\"STRING\" size=\"256\"/><Column id=\"QTY74\" type=\"STRING\" size=\"256\"/><Column id=\"QTY75\" type=\"STRING\" size=\"256\"/><Column id=\"QTY76\" type=\"STRING\" size=\"256\"/><Column id=\"QTY77\" type=\"STRING\" size=\"256\"/><Column id=\"QTY78\" type=\"STRING\" size=\"256\"/><Column id=\"QTY79\" type=\"STRING\" size=\"256\"/><Column id=\"QTY80\" type=\"STRING\" size=\"256\"/><Column id=\"QTY81\" type=\"STRING\" size=\"256\"/><Column id=\"QTY82\" type=\"STRING\" size=\"256\"/><Column id=\"QTY83\" type=\"STRING\" size=\"256\"/><Column id=\"QTY84\" type=\"STRING\" size=\"256\"/><Column id=\"QTY85\" type=\"STRING\" size=\"256\"/><Column id=\"QTY86\" type=\"STRING\" size=\"256\"/><Column id=\"QTY87\" type=\"STRING\" size=\"256\"/><Column id=\"QTY88\" type=\"STRING\" size=\"256\"/><Column id=\"QTY89\" type=\"STRING\" size=\"256\"/><Column id=\"QTY90\" type=\"STRING\" size=\"256\"/><Column id=\"QTY91\" type=\"STRING\" size=\"256\"/><Column id=\"QTY92\" type=\"STRING\" size=\"256\"/><Column id=\"QTY93\" type=\"STRING\" size=\"256\"/><Column id=\"QTY94\" type=\"STRING\" size=\"256\"/><Column id=\"QTY95\" type=\"STRING\" size=\"256\"/><Column id=\"QTY96\" type=\"STRING\" size=\"256\"/><Column id=\"QTY97\" type=\"STRING\" size=\"256\"/><Column id=\"QTY98\" type=\"STRING\" size=\"256\"/><Column id=\"QTY99\" type=\"STRING\" size=\"256\"/><Column id=\"ERRORDATA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_confirm", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("Button44_00_01","171","149","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","149","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotType","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_degree","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_degree","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cust","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_cust","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_cust",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_week","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("주차");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_week","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_week",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"129","45","20","92",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotType","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_type("dropdown");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
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
            obj.set_text("생산계획");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_workOrderPlan","0","34",null,null,"2","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_workOrderPlan");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\" band=\"left\"/><Column size=\"76\" band=\"left\"/><Column size=\"26\" band=\"left\"/><Column size=\"280\" band=\"left\"/><Column size=\"54\" band=\"left\"/><Column size=\"118\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"양산구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev.\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"PCS/PNL\"/><Cell col=\"5\" rowspan=\"2\" text=\"고객\"/><Cell col=\"6\" colspan=\"2\" text=\"합계\" cssclass=\"cell_headMaster\"/><Cell col=\"8\" colspan=\"2\" text=\"W1\" cssclass=\"cell_headMaster\"/><Cell col=\"10\" colspan=\"2\" text=\"W2\" cssclass=\"cell_headMaster\"/><Cell col=\"12\" colspan=\"2\" text=\"W3\" cssclass=\"cell_headMaster\"/><Cell col=\"14\" colspan=\"2\" text=\"W4\" cssclass=\"cell_headMaster\"/><Cell col=\"16\" colspan=\"2\" text=\"W5\" cssclass=\"cell_headMaster\"/><Cell col=\"18\" colspan=\"2\" text=\"W6\" cssclass=\"cell_headMaster\"/><Cell col=\"20\" colspan=\"2\" text=\"W7\" cssclass=\"cell_headMaster\"/><Cell col=\"22\" colspan=\"2\" text=\"W8\" cssclass=\"cell_headMaster\"/><Cell col=\"24\" colspan=\"2\" text=\"W9\" cssclass=\"cell_headMaster\"/><Cell col=\"26\" colspan=\"2\" text=\"W10\" cssclass=\"cell_headMaster\"/><Cell col=\"28\" colspan=\"2\" text=\"W11\" cssclass=\"cell_headMaster\"/><Cell col=\"30\" colspan=\"2\" text=\"W12\" cssclass=\"cell_headMaster\"/><Cell col=\"32\" colspan=\"2\" text=\"W13\" cssclass=\"cell_headMaster\"/><Cell col=\"34\" colspan=\"2\" text=\"W14\" cssclass=\"cell_headMaster\"/><Cell col=\"36\" colspan=\"2\" text=\"W15\" cssclass=\"cell_headMaster\"/><Cell col=\"38\" colspan=\"2\" text=\"W16\" cssclass=\"cell_headMaster\"/><Cell col=\"40\" colspan=\"2\" text=\"W17\" cssclass=\"cell_headMaster\"/><Cell col=\"42\" colspan=\"2\" text=\"W18\" cssclass=\"cell_headMaster\"/><Cell col=\"44\" colspan=\"2\" text=\"W19\" cssclass=\"cell_headMaster\"/><Cell col=\"46\" colspan=\"2\" text=\"W20\" cssclass=\"cell_headMaster\"/><Cell col=\"48\" colspan=\"2\" text=\"W21\" cssclass=\"cell_headMaster\"/><Cell col=\"50\" colspan=\"2\" text=\"W22\" cssclass=\"cell_headMaster\"/><Cell col=\"52\" colspan=\"2\" text=\"W23\" cssclass=\"cell_headMaster\"/><Cell col=\"54\" colspan=\"2\" text=\"W24\" cssclass=\"cell_headMaster\"/><Cell col=\"56\" colspan=\"2\" text=\"W25\" cssclass=\"cell_headMaster\"/><Cell col=\"58\" colspan=\"2\" text=\"W26\" cssclass=\"cell_headMaster\"/><Cell col=\"60\" colspan=\"2\" text=\"W27\" cssclass=\"cell_headMaster\"/><Cell col=\"62\" colspan=\"2\" text=\"W28\" cssclass=\"cell_headMaster\"/><Cell col=\"64\" colspan=\"2\" text=\"W29\" cssclass=\"cell_headMaster\"/><Cell col=\"66\" colspan=\"2\" text=\"W30\" cssclass=\"cell_headMaster\"/><Cell col=\"68\" colspan=\"2\" text=\"W31\" cssclass=\"cell_headMaster\"/><Cell col=\"70\" colspan=\"2\" text=\"W32\" cssclass=\"cell_headMaster\"/><Cell col=\"72\" colspan=\"2\" text=\"W33\" cssclass=\"cell_headMaster\"/><Cell col=\"74\" colspan=\"2\" text=\"W34\" cssclass=\"cell_headMaster\"/><Cell col=\"76\" colspan=\"2\" text=\"W35\" cssclass=\"cell_headMaster\"/><Cell col=\"78\" colspan=\"2\" text=\"W36\" cssclass=\"cell_headMaster\"/><Cell col=\"80\" colspan=\"2\" text=\"W37\" cssclass=\"cell_headMaster\"/><Cell col=\"82\" colspan=\"2\" text=\"W38\" cssclass=\"cell_headMaster\"/><Cell col=\"84\" colspan=\"2\" text=\"W39\" cssclass=\"cell_headMaster\"/><Cell col=\"86\" colspan=\"2\" text=\"W40\" cssclass=\"cell_headMaster\"/><Cell col=\"88\" colspan=\"2\" text=\"W41\" cssclass=\"cell_headMaster\"/><Cell col=\"90\" colspan=\"2\" text=\"W42\" cssclass=\"cell_headMaster\"/><Cell col=\"92\" colspan=\"2\" text=\"W43\" cssclass=\"cell_headMaster\"/><Cell col=\"94\" colspan=\"2\" text=\"W44\" cssclass=\"cell_headMaster\"/><Cell col=\"96\" colspan=\"2\" text=\"W45\" cssclass=\"cell_headMaster\"/><Cell col=\"98\" colspan=\"2\" text=\"W46\" cssclass=\"cell_headMaster\"/><Cell col=\"100\" colspan=\"2\" text=\"W47\" cssclass=\"cell_headMaster\"/><Cell col=\"102\" colspan=\"2\" text=\"W48\" cssclass=\"cell_headMaster\"/><Cell col=\"104\" colspan=\"2\" text=\"W49\" cssclass=\"cell_headMaster\"/><Cell col=\"106\" colspan=\"2\" text=\"W50\" cssclass=\"cell_headMaster\"/><Cell col=\"108\" colspan=\"2\" text=\"W51\" cssclass=\"cell_headMaster\"/><Cell col=\"110\" colspan=\"2\" text=\"W52\" cssclass=\"cell_headMaster\"/><Cell col=\"112\" colspan=\"2\" text=\"W53\" cssclass=\"cell_headMaster\"/><Cell col=\"114\" colspan=\"2\" text=\"W54\" cssclass=\"cell_headMaster\"/><Cell col=\"116\" colspan=\"2\" text=\"W55\" cssclass=\"cell_headMaster\"/><Cell col=\"118\" colspan=\"2\" text=\"W56\" cssclass=\"cell_headMaster\"/><Cell col=\"120\" colspan=\"2\" text=\"W57\" cssclass=\"cell_headMaster\"/><Cell col=\"122\" colspan=\"2\" text=\"W58\" cssclass=\"cell_headMaster\"/><Cell col=\"124\" colspan=\"2\" text=\"W59\" cssclass=\"cell_headMaster\"/><Cell col=\"126\" colspan=\"2\" text=\"W60\" cssclass=\"cell_headMaster\"/><Cell col=\"128\" colspan=\"2\" text=\"W61\" cssclass=\"cell_headMaster\"/><Cell col=\"130\" colspan=\"2\" text=\"W62\" cssclass=\"cell_headMaster\"/><Cell col=\"132\" colspan=\"2\" text=\"W63\" cssclass=\"cell_headMaster\"/><Cell col=\"134\" colspan=\"2\" text=\"W64\" cssclass=\"cell_headMaster\"/><Cell col=\"136\" colspan=\"2\" text=\"W65\" cssclass=\"cell_headMaster\"/><Cell col=\"138\" colspan=\"2\" text=\"W66\" cssclass=\"cell_headMaster\"/><Cell col=\"140\" colspan=\"2\" text=\"W67\" cssclass=\"cell_headMaster\"/><Cell col=\"142\" colspan=\"2\" text=\"W68\" cssclass=\"cell_headMaster\"/><Cell col=\"144\" colspan=\"2\" text=\"W69\" cssclass=\"cell_headMaster\"/><Cell col=\"146\" colspan=\"2\" text=\"W70\" cssclass=\"cell_headMaster\"/><Cell col=\"148\" colspan=\"2\" text=\"W71\" cssclass=\"cell_headMaster\"/><Cell col=\"150\" colspan=\"2\" text=\"W72\" cssclass=\"cell_headMaster\"/><Cell col=\"152\" colspan=\"2\" text=\"W73\" cssclass=\"cell_headMaster\"/><Cell col=\"154\" colspan=\"2\" text=\"W74\" cssclass=\"cell_headMaster\"/><Cell col=\"156\" colspan=\"2\" text=\"W75\" cssclass=\"cell_headMaster\"/><Cell col=\"158\" colspan=\"2\" text=\"W76\" cssclass=\"cell_headMaster\"/><Cell col=\"160\" colspan=\"2\" text=\"W77\" cssclass=\"cell_headMaster\"/><Cell col=\"162\" colspan=\"2\" text=\"W78\" cssclass=\"cell_headMaster\"/><Cell col=\"164\" colspan=\"2\" text=\"W79\" cssclass=\"cell_headMaster\"/><Cell col=\"166\" colspan=\"2\" text=\"W80\" cssclass=\"cell_headMaster\"/><Cell col=\"168\" colspan=\"2\" text=\"W81\" cssclass=\"cell_headMaster\"/><Cell col=\"170\" colspan=\"2\" text=\"W82\" cssclass=\"cell_headMaster\"/><Cell col=\"172\" colspan=\"2\" text=\"W83\" cssclass=\"cell_headMaster\"/><Cell col=\"174\" colspan=\"2\" text=\"W84\" cssclass=\"cell_headMaster\"/><Cell col=\"176\" colspan=\"2\" text=\"W85\" cssclass=\"cell_headMaster\"/><Cell col=\"178\" colspan=\"2\" text=\"W86\" cssclass=\"cell_headMaster\"/><Cell col=\"180\" colspan=\"2\" text=\"W87\" cssclass=\"cell_headMaster\"/><Cell col=\"182\" colspan=\"2\" text=\"W88\" cssclass=\"cell_headMaster\"/><Cell col=\"184\" colspan=\"2\" text=\"W89\" cssclass=\"cell_headMaster\"/><Cell col=\"186\" colspan=\"2\" text=\"W90\" cssclass=\"cell_headMaster\"/><Cell col=\"188\" colspan=\"2\" text=\"W91\" cssclass=\"cell_headMaster\"/><Cell col=\"190\" colspan=\"2\" text=\"W92\" cssclass=\"cell_headMaster\"/><Cell col=\"192\" colspan=\"2\" text=\"W93\" cssclass=\"cell_headMaster\"/><Cell col=\"194\" colspan=\"2\" text=\"W94\" cssclass=\"cell_headMaster\"/><Cell col=\"196\" colspan=\"2\" text=\"W95\" cssclass=\"cell_headMaster\"/><Cell col=\"198\" colspan=\"2\" text=\"W96\" cssclass=\"cell_headMaster\"/><Cell col=\"200\" colspan=\"2\" text=\"W97\" cssclass=\"cell_headMaster\"/><Cell col=\"202\" colspan=\"2\" text=\"W98\" cssclass=\"cell_headMaster\"/><Cell col=\"204\" colspan=\"2\" text=\"W99\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"6\" text=\"PCS\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"7\" text=\"PNL\" font=\"bold 11px/1.1 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"8\" text=\"PCS\"/><Cell row=\"1\" col=\"9\" text=\"PNL\"/><Cell row=\"1\" col=\"10\" text=\"PCS\"/><Cell row=\"1\" col=\"11\" text=\"PNL\"/><Cell row=\"1\" col=\"12\" text=\"PCS\"/><Cell row=\"1\" col=\"13\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"PCS\"/><Cell row=\"1\" col=\"15\" text=\"PNL\"/><Cell row=\"1\" col=\"16\" text=\"PCS\"/><Cell row=\"1\" col=\"17\" text=\"PNL\"/><Cell row=\"1\" col=\"18\" text=\"PCS\"/><Cell row=\"1\" col=\"19\" text=\"PNL\"/><Cell row=\"1\" col=\"20\" text=\"PCS\"/><Cell row=\"1\" col=\"21\" text=\"PNL\"/><Cell row=\"1\" col=\"22\" text=\"PCS\"/><Cell row=\"1\" col=\"23\" text=\"PNL\"/><Cell row=\"1\" col=\"24\" text=\"PCS\"/><Cell row=\"1\" col=\"25\" text=\"PNL\"/><Cell row=\"1\" col=\"26\" text=\"PCS\"/><Cell row=\"1\" col=\"27\" text=\"PNL\"/><Cell row=\"1\" col=\"28\" text=\"PCS\"/><Cell row=\"1\" col=\"29\" text=\"PNL\"/><Cell row=\"1\" col=\"30\" text=\"PCS\"/><Cell row=\"1\" col=\"31\" text=\"PNL\"/><Cell row=\"1\" col=\"32\" text=\"PCS\"/><Cell row=\"1\" col=\"33\" text=\"PNL\"/><Cell row=\"1\" col=\"34\" text=\"PCS\"/><Cell row=\"1\" col=\"35\" text=\"PNL\"/><Cell row=\"1\" col=\"36\" text=\"PCS\"/><Cell row=\"1\" col=\"37\" text=\"PNL\"/><Cell row=\"1\" col=\"38\" text=\"PCS\"/><Cell row=\"1\" col=\"39\" text=\"PNL\"/><Cell row=\"1\" col=\"40\" text=\"PCS\"/><Cell row=\"1\" col=\"41\" text=\"PNL\"/><Cell row=\"1\" col=\"42\" text=\"PCS\"/><Cell row=\"1\" col=\"43\" text=\"PNL\"/><Cell row=\"1\" col=\"44\" text=\"PCS\"/><Cell row=\"1\" col=\"45\" text=\"PNL\"/><Cell row=\"1\" col=\"46\" text=\"PCS\"/><Cell row=\"1\" col=\"47\" text=\"PNL\"/><Cell row=\"1\" col=\"48\" text=\"PCS\"/><Cell row=\"1\" col=\"49\" text=\"PNL\"/><Cell row=\"1\" col=\"50\" text=\"PCS\"/><Cell row=\"1\" col=\"51\" text=\"PNL\"/><Cell row=\"1\" col=\"52\" text=\"PCS\"/><Cell row=\"1\" col=\"53\" text=\"PNL\"/><Cell row=\"1\" col=\"54\" text=\"PCS\"/><Cell row=\"1\" col=\"55\" text=\"PNL\"/><Cell row=\"1\" col=\"56\" text=\"PCS\"/><Cell row=\"1\" col=\"57\" text=\"PNL\"/><Cell row=\"1\" col=\"58\" text=\"PCS\"/><Cell row=\"1\" col=\"59\" text=\"PNL\"/><Cell row=\"1\" col=\"60\" text=\"PCS\"/><Cell row=\"1\" col=\"61\" text=\"PNL\"/><Cell row=\"1\" col=\"62\" text=\"PCS\"/><Cell row=\"1\" col=\"63\" text=\"PNL\"/><Cell row=\"1\" col=\"64\" text=\"PCS\"/><Cell row=\"1\" col=\"65\" text=\"PNL\"/><Cell row=\"1\" col=\"66\" text=\"PCS\"/><Cell row=\"1\" col=\"67\" text=\"PNL\"/><Cell row=\"1\" col=\"68\" text=\"PCS\"/><Cell row=\"1\" col=\"69\" text=\"PNL\"/><Cell row=\"1\" col=\"70\" text=\"PCS\"/><Cell row=\"1\" col=\"71\" text=\"PNL\"/><Cell row=\"1\" col=\"72\" text=\"PCS\"/><Cell row=\"1\" col=\"73\" text=\"PNL\"/><Cell row=\"1\" col=\"74\" text=\"PCS\"/><Cell row=\"1\" col=\"75\" text=\"PNL\"/><Cell row=\"1\" col=\"76\" text=\"PCS\"/><Cell row=\"1\" col=\"77\" text=\"PNL\"/><Cell row=\"1\" col=\"78\" text=\"PCS\"/><Cell row=\"1\" col=\"79\" text=\"PNL\"/><Cell row=\"1\" col=\"80\" text=\"PCS\"/><Cell row=\"1\" col=\"81\" text=\"PNL\"/><Cell row=\"1\" col=\"82\" text=\"PCS\"/><Cell row=\"1\" col=\"83\" text=\"PNL\"/><Cell row=\"1\" col=\"84\" text=\"PCS\"/><Cell row=\"1\" col=\"85\" text=\"PNL\"/><Cell row=\"1\" col=\"86\" text=\"PCS\"/><Cell row=\"1\" col=\"87\" text=\"PNL\"/><Cell row=\"1\" col=\"88\" text=\"PCS\"/><Cell row=\"1\" col=\"89\" text=\"PNL\"/><Cell row=\"1\" col=\"90\" text=\"PCS\"/><Cell row=\"1\" col=\"91\" text=\"PNL\"/><Cell row=\"1\" col=\"92\" text=\"PCS\"/><Cell row=\"1\" col=\"93\" text=\"PNL\"/><Cell row=\"1\" col=\"94\" text=\"PCS\"/><Cell row=\"1\" col=\"95\" text=\"PNL\"/><Cell row=\"1\" col=\"96\" text=\"PCS\"/><Cell row=\"1\" col=\"97\" text=\"PNL\"/><Cell row=\"1\" col=\"98\" text=\"PCS\"/><Cell row=\"1\" col=\"99\" text=\"PNL\"/><Cell row=\"1\" col=\"100\" text=\"PCS\"/><Cell row=\"1\" col=\"101\" text=\"PNL\"/><Cell row=\"1\" col=\"102\" text=\"PCS\"/><Cell row=\"1\" col=\"103\" text=\"PNL\"/><Cell row=\"1\" col=\"104\" text=\"PCS\"/><Cell row=\"1\" col=\"105\" text=\"PNL\"/><Cell row=\"1\" col=\"106\" text=\"PCS\"/><Cell row=\"1\" col=\"107\" text=\"PNL\"/><Cell row=\"1\" col=\"108\" text=\"PCS\"/><Cell row=\"1\" col=\"109\" text=\"PNL\"/><Cell row=\"1\" col=\"110\" text=\"PCS\"/><Cell row=\"1\" col=\"111\" text=\"PNL\"/><Cell row=\"1\" col=\"112\" text=\"PCS\"/><Cell row=\"1\" col=\"113\" text=\"PNL\"/><Cell row=\"1\" col=\"114\" text=\"PCS\"/><Cell row=\"1\" col=\"115\" text=\"PNL\"/><Cell row=\"1\" col=\"116\" text=\"PCS\"/><Cell row=\"1\" col=\"117\" text=\"PNL\"/><Cell row=\"1\" col=\"118\" text=\"PCS\"/><Cell row=\"1\" col=\"119\" text=\"PNL\"/><Cell row=\"1\" col=\"120\" text=\"PCS\"/><Cell row=\"1\" col=\"121\" text=\"PNL\"/><Cell row=\"1\" col=\"122\" text=\"PCS\"/><Cell row=\"1\" col=\"123\" text=\"PNL\"/><Cell row=\"1\" col=\"124\" text=\"PCS\"/><Cell row=\"1\" col=\"125\" text=\"PNL\"/><Cell row=\"1\" col=\"126\" text=\"PCS\"/><Cell row=\"1\" col=\"127\" text=\"PNL\"/><Cell row=\"1\" col=\"128\" text=\"PCS\"/><Cell row=\"1\" col=\"129\" text=\"PNL\"/><Cell row=\"1\" col=\"130\" text=\"PCS\"/><Cell row=\"1\" col=\"131\" text=\"PNL\"/><Cell row=\"1\" col=\"132\" text=\"PCS\"/><Cell row=\"1\" col=\"133\" text=\"PNL\"/><Cell row=\"1\" col=\"134\" text=\"PCS\"/><Cell row=\"1\" col=\"135\" text=\"PNL\"/><Cell row=\"1\" col=\"136\" text=\"PCS\"/><Cell row=\"1\" col=\"137\" text=\"PNL\"/><Cell row=\"1\" col=\"138\" text=\"PCS\"/><Cell row=\"1\" col=\"139\" text=\"PNL\"/><Cell row=\"1\" col=\"140\" text=\"PCS\"/><Cell row=\"1\" col=\"141\" text=\"PNL\"/><Cell row=\"1\" col=\"142\" text=\"PCS\"/><Cell row=\"1\" col=\"143\" text=\"PNL\"/><Cell row=\"1\" col=\"144\" text=\"PCS\"/><Cell row=\"1\" col=\"145\" text=\"PNL\"/><Cell row=\"1\" col=\"146\" text=\"PCS\"/><Cell row=\"1\" col=\"147\" text=\"PNL\"/><Cell row=\"1\" col=\"148\" text=\"PCS\"/><Cell row=\"1\" col=\"149\" text=\"PNL\"/><Cell row=\"1\" col=\"150\" text=\"PCS\"/><Cell row=\"1\" col=\"151\" text=\"PNL\"/><Cell row=\"1\" col=\"152\" text=\"PCS\"/><Cell row=\"1\" col=\"153\" text=\"PNL\"/><Cell row=\"1\" col=\"154\" text=\"PCS\"/><Cell row=\"1\" col=\"155\" text=\"PNL\"/><Cell row=\"1\" col=\"156\" text=\"PCS\"/><Cell row=\"1\" col=\"157\" text=\"PNL\"/><Cell row=\"1\" col=\"158\" text=\"PCS\"/><Cell row=\"1\" col=\"159\" text=\"PNL\"/><Cell row=\"1\" col=\"160\" text=\"PCS\"/><Cell row=\"1\" col=\"161\" text=\"PNL\"/><Cell row=\"1\" col=\"162\" text=\"PCS\"/><Cell row=\"1\" col=\"163\" text=\"PNL\"/><Cell row=\"1\" col=\"164\" text=\"PCS\"/><Cell row=\"1\" col=\"165\" text=\"PNL\"/><Cell row=\"1\" col=\"166\" text=\"PCS\"/><Cell row=\"1\" col=\"167\" text=\"PNL\"/><Cell row=\"1\" col=\"168\" text=\"PCS\"/><Cell row=\"1\" col=\"169\" text=\"PNL\"/><Cell row=\"1\" col=\"170\" text=\"PCS\"/><Cell row=\"1\" col=\"171\" text=\"PNL\"/><Cell row=\"1\" col=\"172\" text=\"PCS\"/><Cell row=\"1\" col=\"173\" text=\"PNL\"/><Cell row=\"1\" col=\"174\" text=\"PCS\"/><Cell row=\"1\" col=\"175\" text=\"PNL\"/><Cell row=\"1\" col=\"176\" text=\"PCS\"/><Cell row=\"1\" col=\"177\" text=\"PNL\"/><Cell row=\"1\" col=\"178\" text=\"PCS\"/><Cell row=\"1\" col=\"179\" text=\"PNL\"/><Cell row=\"1\" col=\"180\" text=\"PCS\"/><Cell row=\"1\" col=\"181\" text=\"PNL\"/><Cell row=\"1\" col=\"182\" text=\"PCS\"/><Cell row=\"1\" col=\"183\" text=\"PNL\"/><Cell row=\"1\" col=\"184\" text=\"PCS\"/><Cell row=\"1\" col=\"185\" text=\"PNL\"/><Cell row=\"1\" col=\"186\" text=\"PCS\"/><Cell row=\"1\" col=\"187\" text=\"PNL\"/><Cell row=\"1\" col=\"188\" text=\"PCS\"/><Cell row=\"1\" col=\"189\" text=\"PNL\"/><Cell row=\"1\" col=\"190\" text=\"PCS\"/><Cell row=\"1\" col=\"191\" text=\"PNL\"/><Cell row=\"1\" col=\"192\" text=\"PCS\"/><Cell row=\"1\" col=\"193\" text=\"PNL\"/><Cell row=\"1\" col=\"194\" text=\"PCS\"/><Cell row=\"1\" col=\"195\" text=\"PNL\"/><Cell row=\"1\" col=\"196\" text=\"PCS\"/><Cell row=\"1\" col=\"197\" text=\"PNL\"/><Cell row=\"1\" col=\"198\" text=\"PCS\"/><Cell row=\"1\" col=\"199\" text=\"PNL\"/><Cell row=\"1\" col=\"200\" text=\"PCS\"/><Cell row=\"1\" col=\"201\" text=\"PNL\"/><Cell row=\"1\" col=\"202\" text=\"PCS\"/><Cell row=\"1\" col=\"203\" text=\"PNL\"/><Cell row=\"1\" col=\"204\" text=\"PCS\"/><Cell row=\"1\" col=\"205\" text=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTTYPE\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PCSPNL\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:CUSTOMER\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOTAL1\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"7\" text=\"bind:TOTAL2\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\" font=\"bold 12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"8\" text=\"bind:PCS1\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PNL1\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PCS2\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PNL2\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PCS3\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:PNL3\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:PCS4\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:PNL4\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:PCS5\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:PNL5\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:PCS6\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:PNL6\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:PCS7\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:PNL7\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:PCS8\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:PNL8\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:PCS9\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:PNL9\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:PCS10\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:PNL10\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:PCS11\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:PNL11\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:PCS12\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:PNL12\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"32\" text=\"bind:PCS13\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"33\" text=\"bind:PNL13\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"34\" text=\"bind:PCS14\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"35\" text=\"bind:PNL14\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"36\" text=\"bind:PCS15\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"37\" text=\"bind:PNL15\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"38\" text=\"bind:PCS16\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"39\" text=\"bind:PNL16\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"40\" text=\"bind:PCS17\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"41\" text=\"bind:PNL17\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"42\" text=\"bind:PCS18\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"43\" text=\"bind:PNL18\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"44\" text=\"bind:PCS19\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"45\" text=\"bind:PNL19\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"46\" text=\"bind:PCS20\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"47\" text=\"bind:PNL20\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"48\" text=\"bind:PCS21\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"49\" text=\"bind:PNL21\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"50\" text=\"bind:PCS22\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"51\" text=\"bind:PNL22\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"52\" text=\"bind:PCS23\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"53\" text=\"bind:PNL23\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"54\" text=\"bind:PCS24\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"55\" text=\"bind:PNL24\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"56\" text=\"bind:PCS25\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"57\" text=\"bind:PNL25\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"58\" text=\"bind:PCS26\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"59\" text=\"bind:PNL26\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"60\" text=\"bind:PCS27\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"61\" text=\"bind:PNL27\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"62\" text=\"bind:PCS28\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"63\" text=\"bind:PNL28\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"64\" text=\"bind:PCS29\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"65\" text=\"bind:PNL29\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"66\" text=\"bind:PCS30\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"67\" text=\"bind:PNL30\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"68\" text=\"bind:PCS31\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"69\" text=\"bind:PNL31\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"70\" text=\"bind:PCS32\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"71\" text=\"bind:PNL32\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"72\" text=\"bind:PCS33\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"73\" text=\"bind:PNL33\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"74\" text=\"bind:PCS34\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"75\" text=\"bind:PNL34\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"76\" text=\"bind:PCS35\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"77\" text=\"bind:PNL35\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"78\" text=\"bind:PCS36\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"79\" text=\"bind:PNL36\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"80\" text=\"bind:PCS37\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"81\" text=\"bind:PNL37\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"82\" text=\"bind:PCS38\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"83\" text=\"bind:PNL38\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"84\" text=\"bind:PCS39\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"85\" text=\"bind:PNL39\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"86\" text=\"bind:PCS40\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"87\" text=\"bind:PNL40\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"88\" text=\"bind:PCS41\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"89\" text=\"bind:PNL41\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"90\" text=\"bind:PCS42\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"91\" text=\"bind:PNL42\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"92\" text=\"bind:PCS43\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"93\" text=\"bind:PNL43\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"94\" text=\"bind:PCS44\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"95\" text=\"bind:PNL44\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"96\" text=\"bind:PCS45\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"97\" text=\"bind:PNL45\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"98\" text=\"bind:PCS46\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"99\" text=\"bind:PNL46\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"100\" text=\"bind:PCS47\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"101\" text=\"bind:PNL47\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"102\" text=\"bind:PCS48\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"103\" text=\"bind:PNL48\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"104\" text=\"bind:PCS49\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"105\" text=\"bind:PNL49\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"106\" text=\"bind:PCS50\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"107\" text=\"bind:PNL50\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"108\" text=\"bind:PCS51\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"109\" text=\"bind:PNL51\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"110\" text=\"bind:PCS52\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"111\" text=\"bind:PNL52\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"112\" text=\"bind:PCS53\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"113\" text=\"bind:PNL53\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"114\" text=\"bind:PCS54\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"115\" text=\"bind:PNL54\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"116\" text=\"bind:PCS55\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"117\" text=\"bind:PNL55\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"118\" text=\"bind:PCS56\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"119\" text=\"bind:PNL56\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"120\" text=\"bind:PCS57\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"121\" text=\"bind:PNL57\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"122\" text=\"bind:PCS58\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"123\" text=\"bind:PNL58\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"124\" text=\"bind:PCS59\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"125\" text=\"bind:PNL59\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"126\" text=\"bind:PCS60\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"127\" text=\"bind:PNL60\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"128\" text=\"bind:PCS61\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"129\" text=\"bind:PNL61\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"130\" text=\"bind:PCS62\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"131\" text=\"bind:PNL62\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"132\" text=\"bind:PCS63\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"133\" text=\"bind:PNL63\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"134\" text=\"bind:PCS64\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"135\" text=\"bind:PNL64\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"136\" text=\"bind:PCS65\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"137\" text=\"bind:PNL65\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"138\" text=\"bind:PCS66\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"139\" text=\"bind:PNL66\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"140\" text=\"bind:PCS67\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"141\" text=\"bind:PNL67\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"142\" text=\"bind:PCS68\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"143\" text=\"bind:PNL68\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"144\" text=\"bind:PCS69\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"145\" text=\"bind:PNL69\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"146\" text=\"bind:PCS70\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"147\" text=\"bind:PNL70\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"148\" text=\"bind:PCS71\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"149\" text=\"bind:PNL71\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"150\" text=\"bind:PCS72\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"151\" text=\"bind:PNL72\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"152\" text=\"bind:PCS73\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"153\" text=\"bind:PNL73\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"154\" text=\"bind:PCS74\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"155\" text=\"bind:PNL74\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"156\" text=\"bind:PCS75\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"157\" text=\"bind:PNL75\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"158\" text=\"bind:PCS76\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"159\" text=\"bind:PNL76\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"160\" text=\"bind:PCS77\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"161\" text=\"bind:PNL77\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"162\" text=\"bind:PCS78\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"163\" text=\"bind:PNL78\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"164\" text=\"bind:PCS79\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"165\" text=\"bind:PNL79\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"166\" text=\"bind:PCS80\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"167\" text=\"bind:PNL80\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"168\" text=\"bind:PCS81\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"169\" text=\"bind:PNL81\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"170\" text=\"bind:PCS82\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"171\" text=\"bind:PNL82\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"172\" text=\"bind:PCS83\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"173\" text=\"bind:PNL83\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"174\" text=\"bind:PCS84\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"175\" text=\"bind:PNL84\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"176\" text=\"bind:PCS85\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"177\" text=\"bind:PNL85\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"178\" text=\"bind:PCS86\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"179\" text=\"bind:PNL86\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"180\" text=\"bind:PCS87\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"181\" text=\"bind:PNL87\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"182\" text=\"bind:PCS88\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"183\" text=\"bind:PNL88\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"184\" text=\"bind:PCS89\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"185\" text=\"bind:PNL89\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"186\" text=\"bind:PCS90\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"187\" text=\"bind:PNL90\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"188\" text=\"bind:PCS91\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"189\" text=\"bind:PNL91\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"190\" text=\"bind:PCS92\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"191\" text=\"bind:PNL92\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"192\" text=\"bind:PCS93\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"193\" text=\"bind:PNL93\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"194\" text=\"bind:PCS94\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"195\" text=\"bind:PNL94\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"196\" text=\"bind:PCS95\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"197\" text=\"bind:PNL95\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"198\" text=\"bind:PCS96\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"199\" text=\"bind:PNL96\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"200\" text=\"bind:PCS97\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"201\" text=\"bind:PNL97\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"202\" text=\"bind:PCS98\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"203\" text=\"bind:PNL98\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"204\" text=\"bind:PCS99\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"205\" text=\"bind:PNL99\" displaytype=\"number\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_errorList","85","129",null,null,"93","61",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_errorData");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"200\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"200\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"에러 메세지\"/><Cell col=\"1\" text=\"주차구분\"/><Cell col=\"2\" text=\"FCST SET ID\"/><Cell col=\"3\" text=\"FCST NAME ID\"/><Cell col=\"4\" text=\"구분\"/><Cell col=\"5\" text=\"구분ID\"/><Cell col=\"6\" text=\"SCM 품목명\"/><Cell col=\"7\" text=\"SCM 품목명 ID\"/><Cell col=\"8\" text=\"ERP 품목코드\"/><Cell col=\"9\" text=\"REV\"/><Cell col=\"10\" text=\"ERP 품목명\"/><Cell col=\"11\" text=\"ERP 품목ID\"/><Cell col=\"12\" text=\"합계\"/><Cell col=\"13\" text=\"일자\"/><Cell col=\"14\" text=\"일자\"/><Cell col=\"15\" text=\"일자\"/><Cell col=\"16\" text=\"일자\"/><Cell col=\"17\" text=\"일자\"/><Cell col=\"18\" text=\"일자\"/><Cell col=\"19\" text=\"일자\"/><Cell col=\"20\" text=\"일자\"/><Cell col=\"21\" text=\"일자\"/><Cell col=\"22\" text=\"일자\"/><Cell col=\"23\" text=\"일자\"/><Cell col=\"24\" text=\"일자\"/><Cell col=\"25\" text=\"일자\"/><Cell col=\"26\" text=\"일자\"/><Cell col=\"27\" text=\"일자\"/><Cell col=\"28\" text=\"일자\"/><Cell col=\"29\" text=\"일자\"/><Cell col=\"30\" text=\"일자\"/><Cell col=\"31\" text=\"일자\"/><Cell col=\"32\" text=\"일자\"/><Cell col=\"33\" text=\"일자\"/><Cell col=\"34\" text=\"일자\"/><Cell col=\"35\" text=\"일자\"/><Cell col=\"36\" text=\"일자\"/><Cell col=\"37\" text=\"일자\"/><Cell col=\"38\" text=\"일자\"/><Cell col=\"39\" text=\"일자\"/><Cell col=\"40\" text=\"일자\"/><Cell col=\"41\" text=\"일자\"/><Cell col=\"42\" text=\"일자\"/><Cell col=\"43\" text=\"일자\"/><Cell col=\"44\" text=\"일자\"/><Cell col=\"45\" text=\"일자\"/><Cell col=\"46\" text=\"일자\"/><Cell col=\"47\" text=\"일자\"/><Cell col=\"48\" text=\"일자\"/><Cell col=\"49\" text=\"일자\"/><Cell col=\"50\" text=\"일자\"/><Cell col=\"51\" text=\"일자\"/><Cell col=\"52\" text=\"일자\"/><Cell col=\"53\" text=\"일자\"/><Cell col=\"54\" text=\"일자\"/><Cell col=\"55\" text=\"일자\"/><Cell col=\"56\" text=\"일자\"/><Cell col=\"57\" text=\"일자\"/><Cell col=\"58\" text=\"일자\"/><Cell col=\"59\" text=\"일자\"/><Cell col=\"60\" text=\"일자\"/><Cell col=\"61\" text=\"일자\"/><Cell col=\"62\" text=\"일자\"/><Cell col=\"63\" text=\"일자\"/><Cell col=\"64\" text=\"일자\"/><Cell col=\"65\" text=\"일자\"/><Cell col=\"66\" text=\"일자\"/><Cell col=\"67\" text=\"일자\"/><Cell col=\"68\" text=\"일자\"/><Cell col=\"69\" text=\"일자\"/><Cell col=\"70\" text=\"일자\"/><Cell col=\"71\" text=\"일자\"/><Cell col=\"72\" text=\"일자\"/><Cell col=\"73\" text=\"일자\"/><Cell col=\"74\" text=\"일자\"/><Cell col=\"75\" text=\"일자\"/><Cell col=\"76\" text=\"일자\"/><Cell col=\"77\" text=\"일자\"/><Cell col=\"78\" text=\"일자\"/><Cell col=\"79\" text=\"일자\"/><Cell col=\"80\" text=\"일자\"/><Cell col=\"81\" text=\"일자\"/><Cell col=\"82\" text=\"일자\"/><Cell col=\"83\" text=\"일자\"/><Cell col=\"84\" text=\"일자\"/><Cell col=\"85\" text=\"일자\"/><Cell col=\"86\" text=\"일자\"/><Cell col=\"87\" text=\"일자\"/><Cell col=\"88\" text=\"일자\"/><Cell col=\"89\" text=\"일자\"/><Cell col=\"90\" text=\"일자\"/><Cell col=\"91\" text=\"일자\"/><Cell col=\"92\" text=\"일자\"/><Cell col=\"93\" text=\"일자\"/><Cell col=\"94\" text=\"일자\"/><Cell col=\"95\" text=\"일자\"/><Cell col=\"96\" text=\"일자\"/><Cell col=\"97\" text=\"일자\"/><Cell col=\"98\" text=\"일자\"/><Cell col=\"99\" text=\"일자\"/><Cell col=\"100\" text=\"일자\"/><Cell col=\"101\" text=\"일자\"/><Cell col=\"102\" text=\"일자\"/><Cell col=\"103\" text=\"일자\"/><Cell col=\"104\" text=\"일자\"/><Cell col=\"105\" text=\"일자\"/><Cell col=\"106\" text=\"일자\"/><Cell col=\"107\" text=\"일자\"/><Cell col=\"108\" text=\"일자\"/><Cell col=\"109\" text=\"일자\"/><Cell col=\"110\" text=\"일자\"/><Cell col=\"111\" text=\"일자\"/></Band><Band id=\"body\"><Cell text=\"bind:ERRORDATA\" color=\"red\"/><Cell col=\"1\" text=\"bind:DATA01\"/><Cell col=\"2\" text=\"bind:DATA02\"/><Cell col=\"3\" text=\"bind:DATA03\"/><Cell col=\"4\" text=\"bind:DATA04\"/><Cell col=\"5\" text=\"bind:DATA05\"/><Cell col=\"6\" text=\"bind:DATA06\"/><Cell col=\"7\" text=\"bind:DATA07\"/><Cell col=\"8\" text=\"bind:DATA08\"/><Cell col=\"9\" text=\"bind:DATA09\"/><Cell col=\"10\" text=\"bind:DATA10\"/><Cell col=\"11\" text=\"bind:DATA11\"/><Cell col=\"12\" text=\"bind:DATA12\"/><Cell col=\"13\" text=\"bind:QTY01\"/><Cell col=\"14\" text=\"bind:QTY02\"/><Cell col=\"15\" text=\"bind:QTY03\"/><Cell col=\"16\" text=\"bind:QTY04\"/><Cell col=\"17\" text=\"bind:QTY05\"/><Cell col=\"18\" text=\"bind:QTY06\"/><Cell col=\"19\" text=\"bind:QTY07\"/><Cell col=\"20\" text=\"bind:QTY08\"/><Cell col=\"21\" text=\"bind:QTY09\"/><Cell col=\"22\" text=\"bind:QTY10\"/><Cell col=\"23\" text=\"bind:QTY11\"/><Cell col=\"24\" text=\"bind:QTY12\"/><Cell col=\"25\" text=\"bind:QTY13\"/><Cell col=\"26\" text=\"bind:QTY14\"/><Cell col=\"27\" text=\"bind:QTY15\"/><Cell col=\"28\" text=\"bind:QTY16\"/><Cell col=\"29\" text=\"bind:QTY17\"/><Cell col=\"30\" text=\"bind:QTY18\"/><Cell col=\"31\" text=\"bind:QTY19\"/><Cell col=\"32\" text=\"bind:QTY20\"/><Cell col=\"33\" text=\"bind:QTY21\"/><Cell col=\"34\" text=\"bind:QTY22\"/><Cell col=\"35\" text=\"bind:QTY23\"/><Cell col=\"36\" text=\"bind:QTY24\"/><Cell col=\"37\" text=\"bind:QTY25\"/><Cell col=\"38\" text=\"bind:QTY26\"/><Cell col=\"39\" text=\"bind:QTY27\"/><Cell col=\"40\" text=\"bind:QTY28\"/><Cell col=\"41\" text=\"bind:QTY29\"/><Cell col=\"42\" text=\"bind:QTY30\"/><Cell col=\"43\" text=\"bind:QTY31\"/><Cell col=\"44\" text=\"bind:QTY32\"/><Cell col=\"45\" text=\"bind:QTY33\"/><Cell col=\"46\" text=\"bind:QTY34\"/><Cell col=\"47\" text=\"bind:QTY35\"/><Cell col=\"48\" text=\"bind:QTY36\"/><Cell col=\"49\" text=\"bind:QTY37\"/><Cell col=\"50\" text=\"bind:QTY38\"/><Cell col=\"51\" text=\"bind:QTY39\"/><Cell col=\"52\" text=\"bind:QTY40\"/><Cell col=\"53\" text=\"bind:QTY41\"/><Cell col=\"54\" text=\"bind:QTY42\"/><Cell col=\"55\" text=\"bind:QTY43\"/><Cell col=\"56\" text=\"bind:QTY44\"/><Cell col=\"57\" text=\"bind:QTY45\"/><Cell col=\"58\" text=\"bind:QTY46\"/><Cell col=\"59\" text=\"bind:QTY47\"/><Cell col=\"60\" text=\"bind:QTY48\"/><Cell col=\"61\" text=\"bind:QTY49\"/><Cell col=\"62\" text=\"bind:QTY50\"/><Cell col=\"63\" text=\"bind:QTY51\"/><Cell col=\"64\" text=\"bind:QTY52\"/><Cell col=\"65\" text=\"bind:QTY53\"/><Cell col=\"66\" text=\"bind:QTY54\"/><Cell col=\"67\" text=\"bind:QTY55\"/><Cell col=\"68\" text=\"bind:QTY56\"/><Cell col=\"69\" text=\"bind:QTY57\"/><Cell col=\"70\" text=\"bind:QTY58\"/><Cell col=\"71\" text=\"bind:QTY59\"/><Cell col=\"72\" text=\"bind:QTY60\"/><Cell col=\"73\" text=\"bind:QTY61\"/><Cell col=\"74\" text=\"bind:QTY62\"/><Cell col=\"75\" text=\"bind:QTY63\"/><Cell col=\"76\" text=\"bind:QTY64\"/><Cell col=\"77\" text=\"bind:QTY65\"/><Cell col=\"78\" text=\"bind:QTY66\"/><Cell col=\"79\" text=\"bind:QTY67\"/><Cell col=\"80\" text=\"bind:QTY68\"/><Cell col=\"81\" text=\"bind:QTY69\"/><Cell col=\"82\" text=\"bind:QTY70\"/><Cell col=\"83\" text=\"bind:QTY71\"/><Cell col=\"84\" text=\"bind:QTY72\"/><Cell col=\"85\" text=\"bind:QTY73\"/><Cell col=\"86\" text=\"bind:QTY74\"/><Cell col=\"87\" text=\"bind:QTY75\"/><Cell col=\"88\" text=\"bind:QTY76\"/><Cell col=\"89\" text=\"bind:QTY77\"/><Cell col=\"90\" text=\"bind:QTY78\"/><Cell col=\"91\" text=\"bind:QTY79\"/><Cell col=\"92\" text=\"bind:QTY80\"/><Cell col=\"93\" text=\"bind:QTY81\"/><Cell col=\"94\" text=\"bind:QTY82\"/><Cell col=\"95\" text=\"bind:QTY83\"/><Cell col=\"96\" text=\"bind:QTY84\"/><Cell col=\"97\" text=\"bind:QTY85\"/><Cell col=\"98\" text=\"bind:QTY86\"/><Cell col=\"99\" text=\"bind:QTY87\"/><Cell col=\"100\" text=\"bind:QTY88\"/><Cell col=\"101\" text=\"bind:QTY89\"/><Cell col=\"102\" text=\"bind:QTY90\"/><Cell col=\"103\" text=\"bind:QTY91\"/><Cell col=\"104\" text=\"bind:QTY92\"/><Cell col=\"105\" text=\"bind:QTY93\"/><Cell col=\"106\" text=\"bind:QTY94\"/><Cell col=\"107\" text=\"bind:QTY95\"/><Cell col=\"108\" text=\"bind:QTY96\"/><Cell col=\"109\" text=\"bind:QTY97\"/><Cell col=\"110\" text=\"bind:QTY98\"/><Cell col=\"111\" text=\"bind:QTY99\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29",null,"6","grd_workOrderPlan:4",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("Upload");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDown_grd_workOrderPlan",null,"6","29","24","btn_xlUp:5",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("Download");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("투입 실적");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_workOrderPlan","subtitle1:10","4","140","23",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("PIVOT");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("표준공정 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_pivot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_pivot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"83\"/><Column size=\"29\"/><Column size=\"280\"/><Column size=\"144\"/><Column size=\"51\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"56\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"Rev.\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"고객\" textAlign=\"center\"/><Cell col=\"4\" text=\"양산구분\"/><Cell col=\"5\" text=\"계획일자\"/><Cell col=\"6\" text=\"주차\"/><Cell col=\"7\" text=\"월\"/><Cell col=\"8\" text=\"PCS/PNL\"/><Cell col=\"9\" text=\"수량(PCS)\" font=\"12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"10\" text=\"수량(PNL)\" font=\"12px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CUSTOMER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTTYPE\"/><Cell col=\"5\" text=\"bind:FCSTDATE\"/><Cell col=\"6\" text=\"bind:WEEK\"/><Cell col=\"7\" text=\"bind:MONTH\"/><Cell col=\"8\" text=\"bind:PCSPNL\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PANELQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_pivot",null,null,"29","24","6","grd_pivot:4",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_pivot","subtitle1:10","4","140","23",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
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
            obj.set_text("수주계획조회");
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

            obj = new Button("btn_confirm",null,"15","50","24","100",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("확정");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
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
        this.addIncludeScript("MFM00100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MFM00100M.xfdl","lib::lib_mfm.xjs");
        this.addIncludeScript("MFM00100M.xfdl","lib::lib_tom.xjs");
        this.registerScript("MFM00100M.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_mfm.xjs"); /*include "lib::lib_mfm.xjs"*/;	//MFM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.tabDiv = this.div_work.form;
        this.tabInputDiv1 = this.div_work.form.tab_01.Tabpage1.form;
        this.tabInputDiv2 = this.div_work.form.tab_01.Tabpage2.form;

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.custId = ''; //고객Id(조회조건)

        this.weekId = ''; //주차Id(조회조건)
        this.yearId = ''; //년Id(조회조건)
        this.periodFrom = ''; //주차의 시작일자(조회조건)
        this.periodTo = ''; //주차의 종료일자(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        this.firstDraw = 0;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("MFM00100M");
        	this.nfn_formInit(obj);

        	this.fn_initCombo();

        	this.nfn_cellFix(this.tabInputDiv1.grd_workOrderPlan, 5);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (첫번째 Grid)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_workOrderPlan.clearData(); //첫번째 탭은 데이터 초기화 한다.
        	this.ds_pivot.clearData();

        	this.ds_search.clearData();

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//고객명이 공백이면 고객Id 공백 처리
        	if(this.searchDiv.edt_cust.value=='') {
        		this.custId = '';
        	}

        	//주차명이 공백이면 주차ID 공백 처리
        	//if(this.searchDiv.edt_week.value=='') {
        	//	alert('주차를 입력 바랍니다.');
        	//	this.searchDiv.edt_week.setFocus();
        	//	return;
        	//}

        	//this.periodFrom = "2020-09-09";
        	//this.periodTo = "2020-09-15";
        	//this.weekId = "37";
        	//this.yearId = "2020";

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 					this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_LOTTYPE", 				this.nfn_nvl(this.searchDiv.cbo_lotType.value, "")); //양산구분
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목코드
        	this.ds_search.setColumn(0, "P_CUSTOMERID", 			this.nfn_nvl(this.custId, "")); //고객Id
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", 		this.nfn_nvl(this.periodFrom, "")); //시작일자
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", 		this.nfn_nvl(this.periodTo, "")); //종료일자
        	this.ds_search.setColumn(0, "P_INPUTWEEK", 				this.nfn_nvl(this.searchDiv.edt_week.value, "")); //주차
        	this.ds_search.setColumn(0, "P_SEQUENCE", 				this.nfn_nvl(this.searchDiv.cbo_degree.value, "")); //차수
        	this.ds_search.setColumn(0, "WEEK", 					this.nfn_nvl(this.weekId, ""));
        	this.ds_search.setColumn(0, "YEAR", 					this.nfn_nvl(this.yearId, ""));

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectProductPlanList");

        	var sSvcID 			= "selectProductPlanList";
        	var sController 	= "/mfm00100/selectProductPlanList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_workOrderPlan=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (두번째 Grid)
         */
        this.fn_search2 = function (obj, e)
        {
        	//this.periodFrom = "2020-09-09";
        	//this.periodTo = "2020-09-15";
        	//this.weekId = "37";
        	//this.yearId = "2020";

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 					this.nfn_nvl(this.gf_getSiteType(), ""));

        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", 		this.nfn_nvl(this.periodFrom, "")); //시작일자
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", 		this.nfn_nvl(this.periodTo, "")); //종료일자
        	this.ds_search.setColumn(0, "P_INPUTWEEK", 				this.nfn_nvl(this.searchDiv.edt_week.value, "")); //주차
        	this.ds_search.setColumn(0, "P_SEQUENCE", 				this.nfn_nvl(this.searchDiv.cbo_degree.value, "")); //차수
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목코드
        	this.ds_search.setColumn(0, "P_LOTTYPE", 				this.nfn_nvl(this.searchDiv.cbo_lotType.value, "")); //양산구분
        	this.ds_search.setColumn(0, "P_CUSTOMERID", 			this.nfn_nvl(this.custId, "")); //고객Id

        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectProductPlanForPivotList");

        	var sSvcID 			= "selectProductPlanForPivotList";
        	var sController 	= "/mfm00100/selectProductPlanForPivotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_pivot=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //폼초기화시 주차 구하기->주차별일자까지 구해 놓는다.(주차팝업도 선택하면 주차별 일자 구한다.)
        this.fn_defaultWeek = function (obj, e)
        {
        	this.ds_term.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "TXT_DATE" 				, this.tomfn_getCurrentlyDate('YYYY-MM-DD'));
        	this.ds_search.setColumn(0, "SQL_ID" 				, "selectSalespoforcastWeekoftheyearList");

        	var sSvcID 			= "selectSalespoforcastWeekoftheyearList";
        	var sController 	= "/tomCommon/selectSalespoforcastWeekoftheyearList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_term=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //주차별 일자리스트 조회
        this.fn_getPeriod = function (obj, e)
        {
        	this.ds_period.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_INPUTWEEK" 			, this.nfn_nvl(this.searchDiv.edt_week.value, "")); //주차
        	this.ds_search.setColumn(0, "P_SEQUENCE" 			, this.nfn_nvl(this.searchDiv.cbo_degree.value, "")); //차수
        	this.ds_search.setColumn(0, "SQL_ID" 				, "selectSalespoforcastRegWeekDayList2");

        	var sSvcID 			= "selectSalespoforcastRegWeekDayList";
        	var sController 	= "/tomCommon/selectSalespoforcastRegWeekDayList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_period=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //주차별 일자리스트 조회
        //this.fn_getPeriod2 = function (obj:Button, e:nexacro.ClickEventInfo)
        //{
        //	this.ds_period.clearData();
        //
        //	this.ds_search.clearData();
        //	this.ds_search.addRow();
        //	this.ds_search.setColumn(0, "WEEK" 					, this.weekId);
        //	this.ds_search.setColumn(0, "YEAR" 					, this.yearId);
        //	this.ds_search.setColumn(0, "SQL_ID" 				, "selectSalespoforcastRegWeekDayList");
        //
        //	var sSvcID 			= "selectSalespoforcastRegWeekDayList";
        //	var sController 	= "/tomCommon/selectSalespoforcastRegWeekDayList.do";
        //	var sInDatasets 	= "INPUT=ds_search";
        //	var sOutDatasets 	= "ds_period=output";
        //	var sArgs 			= "";
        //	sArgs += this.gfn_setParam("", "");
        //
        //	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        //};

        /*
         * 기능 : 확정
         */
        this.fn_confirm = function (obj, e)
        {
        	//alert('---1---'+this.searchDiv.edt_week.value+'/'+this.nfn_nvl(this.searchDiv.cbo_degree.value, ""));

        	//주차 Validation
        	if(this.searchDiv.edt_week.value=='') {
        		this.gfn_Message("RequierWeek", null, "info", "ok");
        		this.searchDiv.edt_week.setFocus();
        		return;
        	}

        	//차수 Validation
        	if(this.nfn_nvl(this.searchDiv.cbo_degree.value, "")=='') {
        		this.gfn_Message("RequierChasu", null, "info", "ok");
        		this.searchDiv.cbo_degree.setFocus();
        		return;
        	}

        	var bOK = this.gfn_Message("IsConfirmation", null, "conf", "yesno");
        	if (bOK == false) return;

        	this.ds_confirm.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_INPUTWEEK", 				this.nfn_nvl(this.searchDiv.edt_week.value, "")); //주차
        	this.ds_search.setColumn(0, "P_SEQUENCE", 				this.nfn_nvl(this.searchDiv.cbo_degree.value, "")); //차수

        	var sSvcID 			= "saveProductPlanConfirm";
        	var sController 	= "/mfm00100/saveProductPlanConfirm.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_confirm=output";
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
        		case "selectProductPlanList": //[생산계획]그리드 CALLBACK
        			this.fn_search2();
        			break;
        		case "selectProductPlanForPivotList": //[피벗]그리드 CALLBACK
        			break;
        		case "selectSalespoforcastWeekoftheyearList": //폼초기화시 조회조건 주차 구하기 : 1번만 실행된다.
        			this.searchDiv.edt_week.set_value(this.ds_term.getColumn(0, "YEARWEEK"));
        			this.weekId = this.ds_term.getColumn(0, "WEEK"); //HIDDEN 필드
        			this.yearId = this.ds_term.getColumn(0, "YEAR"); //HIDDEN 필드
        			this.fn_initChasuCombo(); //해당 주차의 차수List 구하기
        			break;

        		case "selectSalespoforcastRegWeekDayList": //fn_getPeriod CALLBACK ////////년/주차로 1주일 일자 가져오고, 타이틀 세팅

        			//alert('일자 건수 : '+this.ds_period.rowcount);

        			if(this.ds_period.rowcount==0){
        				//그리드 컬럼 ALL 숨기기
        				for(var j=8; j<=205; j++){
        					this.tabInputDiv1.grd_workOrderPlan.setFormatColProperty(j, "size", 0);
        				}
        			}else{
        				//그리드 컬럼 ALL 보이기
        				for(var i=205; i>=8; i--){
        					this.tabInputDiv1.grd_workOrderPlan.setFormatColProperty(i, "size", 80);
        				}

        				//업로드한 컬럼 이후의 데이터 숨기기 및 날짜 세팅
        				if(this.ds_period.rowcount>0){

        					for(var j=8+(this.ds_period.rowcount*2); j<=205; j++){ //숨기려는 컬럼
        						this.tabInputDiv1.grd_workOrderPlan.setFormatColProperty(j, "size", 0);
        					}

        					for(var k=0; k<this.ds_period.rowcount; k++){
        						this.tabInputDiv1.grd_workOrderPlan.setCellProperty('Head', 7+k, "text", this.nfn_nvl(this.ds_period.getColumn(k, "DATE2")));
        					}
        				}
        			}

        			break;

        		case "saveProductPlanUpload":
        			if(this.ds_errorData.rowcount==0){
        				this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        				this.fn_initChasuCombo(); //차수 콤보 Renderer
        			}else{ //에러가 존재하면 에러 엑셀 파일 다운로드 자동 실행
        				this.excelAdjust();
        				alert('업로드 파일에 에러가 존재 합니다. 수정후 재 업로드 바랍니다.');
        				// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        				var grdName = "tabInputDiv1.grd_errorList";
        				// 익스포트될 시트명, 여러개일 경우 ':'로 구분
        				var excelSheetName = 'ERROR_LIST';
        				// 익스포트될 엑셀 파일명
        				var excelFileName = "MFM00100M_ERROR_LIST";
        				// 저장될 엑셀명
        				this.gfn_export_excel(grdName, excelSheetName, excelFileName, "EXCEL");
        			}
        			break;

        		case "selectProductPlanChasuList": //차수List CALLBACK
        			this.searchDiv.cbo_degree.set_index(this.searchDiv.cbo_degree.getCount()-1);

        			//if(this.firstDraw==0){ //처음1번만 실행된다.
        				this.fn_getPeriod();
        				this.firstDraw=1;
        			//}

        			this.ds_workOrderPlan.clearData();

        			break;

        		case "saveProductPlanConfirm": //확정처리
        			this.gfn_Message("Confirmation", null, "info", "ok"); //저장이 완료되었습니다.
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
        	}else if(popId=="P00145"){ //주차 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.searchDiv.edt_week.value;//조회조건의 주차
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		//this.searchDiv.edt_product.set_value(rtn[1]);
        		//this.productId = rtn[0]; //HIDDEN 필드
        		//this.productVer = rtn[2]; //HIDDEN 필드
        		var objId = "";
        		var objText = "";
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if(i<rtn.length-1){
        				objId += colArray[0]+",";
        				objText += colArray[1]+",";
        			}else{
        				objId += colArray[0];
        				objText += colArray[1];
        			}
        		}
        		this.searchDiv.edt_product.set_value(objText);
        		this.productId = objId;
        	} else if(sPopupId == "SEARCH_CUSTOMER")
        	{
        		this.searchDiv.edt_cust.set_value(rtn[1]);
        		this.custId = rtn[0];
        	}else if(sPopupId == "SCH_WEEK") //공통팝업 주차 구하기
        	{
        		this.searchDiv.edt_week.set_value(rtn[0]);
        		this.weekId = rtn[1]; //HIDDEN 필드
        		this.yearId = rtn[2]; //HIDDEN 필드
        		//this.fn_getPeriod();
        		this.fn_initChasuCombo(); //팝업에섯 선택한 주차의 차수List 구하기
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
        	//최초 1번 실행
        	this.fn_defaultWeek();

        	for(var i=205; i>=8; i--){
        		this.tabInputDiv1.grd_workOrderPlan.setFormatColProperty(i, "size", 0);
        	}
        }

        /*
         * 기능 : '차수' 콤보 조회
         */
        this.fn_initChasuCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("YYYYW", this.searchDiv.edt_week.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.mfmfn_setCustomQueryCmb(this.searchDiv.cbo_degree // Object
        								, "selectProductPlanChasuList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.tab_search_Tabpage1_btn_cust_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	//sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SEARCH_CUSTOMER","P00184", sArgs); //고객 조회
        };

        this.tab_search_Tabpage1_btn_week_onclick = function(obj,e)
        {
        	var popupId = "SCH_WEEK";
        	var oArg = {};

        	oArg.arg_week = this.nfn_nvl(this.searchDiv.edt_week.value, "");	//주차

        	this.gfn_openPopup(popupId,"mfm::MFM00100P.xfdl",oArg,"width=650,height=450");
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.productId = ''; //제품Id(조회조건)
        	this.productVer = ''; //제품Ver(조회조건)
        	this.custId = ''; //고객Id(조회조건)
        	this.weekId = ''; //주차Id(조회조건)
        };

        //품목
        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        //고객
        this.tab_search_Tabpage1_edt_cust_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_cust_onclick();
        	}
        };

        //주차
        this.tab_search_Tabpage1_edt_week_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_week_onclick();
        	}
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_workOrderPlan.clearData();
        	this.ds_pivot.clearData();
        	//var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv.sta_cnt_ds_toolMaking.set_text(strCnt);
        	//strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	//this.tabInputDiv2.sta_cnt_ds_toolMakingStatics.set_text(strCnt);
        };

        this.div_00_btn_xlUp_onclick = function(obj,e)
        {
        	//if(this.gfn_dsIsUpdated(this.ds_workOrderPlan))
        	//{
        	//	var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        	//	if(btn == false) return;
        	//}

        	this.ds_workOrderPlan.clearData();
        	this.ds_errorData.clearData();

        	this.Mode = "Excel";
        	this.ds_upload.clearData();
        	this.gfn_import_excel("ds_upload", "fn_excel_success_evt", "fn_excel_fail_event", "A1", "A1");
        };

        this.fn_excel_success_evt = function()
        {
        	console.log(this.ds_upload.saveXML());

        	var sSvcID 			= "saveProductPlanUpload";
        	var sController 	= "/mfm00100/saveProductPlanUpload.do";
        	var sInDatasets 	= "INPUT=ds_upload:A";
        	var sOutDatasets 	= "ds_errorData=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        this.fn_excel_fail_event = function()
        {
        	alert('Excel Upload Fail');
        }

        this.excelAdjust = function ()
        {
        	//0row의 일자칸 모두 그리드의 title로 변경
        	var data01 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA01"));
        	var data02 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA02"));
        	var data03 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA03"));
        	var data04 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA04"));
        	var data05 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA05"));
        	var data06 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA06"));
        	var data07 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA07"));
        	var data08 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA08"));
        	var data09 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA09"));
        	var data10 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA10"));
        	var data11 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA11"));
        	var data12 = this.nfn_nvl(this.ds_errorData.getColumn(0, "DATA12"));

        	var qty01 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY01"));
        	var qty02 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY02"));
        	var qty03 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY03"));
        	var qty04 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY04"));
        	var qty05 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY05"));
        	var qty06 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY06"));
        	var qty07 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY07"));
        	var qty08 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY08"));
        	var qty09 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY09"));
        	var qty10 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY10"));

        	var qty11 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY11"));
        	var qty12 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY12"));
        	var qty13 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY13"));
        	var qty14 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY14"));
        	var qty15 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY15"));
        	var qty16 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY16"));
        	var qty17 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY17"));
        	var qty18 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY18"));
        	var qty19 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY19"));
        	var qty20 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY20"));

        	var qty21 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY21"));
        	var qty22 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY22"));
        	var qty23 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY23"));
        	var qty24 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY24"));
        	var qty25 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY25"));
        	var qty26 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY26"));
        	var qty27 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY27"));
        	var qty28 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY28"));
        	var qty29 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY29"));
        	var qty30 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY30"));

        	var qty31 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY31"));
        	var qty32 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY32"));
        	var qty33 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY33"));
        	var qty34 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY34"));
        	var qty35 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY35"));
        	var qty36 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY36"));
        	var qty37 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY37"));
        	var qty38 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY38"));
        	var qty39 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY39"));
        	var qty40 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY40"));

        	var qty41 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY41"));
        	var qty42 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY42"));
        	var qty43 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY43"));
        	var qty44 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY44"));
        	var qty45 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY45"));
        	var qty46 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY46"));
        	var qty47 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY47"));
        	var qty48 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY48"));
        	var qty49 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY49"));
        	var qty50 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY50"));

        	var qty51 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY51"));
        	var qty52 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY52"));
        	var qty53 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY53"));
        	var qty54 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY54"));
        	var qty55 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY55"));
        	var qty56 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY56"));
        	var qty57 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY57"));
        	var qty58 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY58"));
        	var qty59 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY59"));
        	var qty60 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY60"));

        	var qty61 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY61"));
        	var qty62 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY62"));
        	var qty63 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY63"));
        	var qty64 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY64"));
        	var qty65 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY65"));
        	var qty66 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY66"));
        	var qty67 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY67"));
        	var qty68 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY68"));
        	var qty69 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY69"));
        	var qty70 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY70"));

        	var qty71 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY71"));
        	var qty72 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY72"));
        	var qty73 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY73"));
        	var qty74 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY74"));
        	var qty75 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY75"));
        	var qty76 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY76"));
        	var qty77 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY77"));
        	var qty78 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY78"));
        	var qty79 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY79"));
        	var qty80 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY80"));

        	var qty81 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY81"));
        	var qty82 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY82"));
        	var qty83 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY83"));
        	var qty84 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY84"));
        	var qty85 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY85"));
        	var qty86 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY86"));
        	var qty87 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY87"));
        	var qty88 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY88"));
        	var qty89 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY89"));
        	var qty90 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY90"));

        	var qty91 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY91"));
        	var qty92 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY92"));
        	var qty93 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY93"));
        	var qty94 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY94"));
        	var qty95 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY95"));
        	var qty96 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY96"));
        	var qty97 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY97"));
        	var qty98 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY98"));
        	var qty99 = this.nfn_nvl(this.ds_errorData.getColumn(0, "QTY99"));

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 1, "text", qty01);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 2, "text", qty02);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 3, "text", qty03);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 4, "text", qty04);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 5, "text", qty05);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 6, "text", qty06);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 7, "text", qty07);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 8, "text", qty08);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+ 9, "text", qty09);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+10, "text", qty10);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+11, "text", qty11);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+12, "text", qty12);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+13, "text", qty13);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+14, "text", qty14);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+15, "text", qty15);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+16, "text", qty16);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+17, "text", qty17);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+18, "text", qty18);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+19, "text", qty19);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+20, "text", qty20);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+21, "text", qty21);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+22, "text", qty22);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+23, "text", qty23);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+24, "text", qty24);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+25, "text", qty25);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+26, "text", qty26);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+27, "text", qty27);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+28, "text", qty28);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+29, "text", qty29);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+30, "text", qty30);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+31, "text", qty31);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+32, "text", qty32);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+33, "text", qty33);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+34, "text", qty34);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+35, "text", qty35);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+36, "text", qty36);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+37, "text", qty37);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+38, "text", qty38);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+39, "text", qty39);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+40, "text", qty40);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+41, "text", qty41);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+42, "text", qty42);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+43, "text", qty43);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+44, "text", qty44);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+45, "text", qty45);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+46, "text", qty46);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+47, "text", qty47);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+48, "text", qty48);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+49, "text", qty49);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+50, "text", qty50);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+51, "text", qty51);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+52, "text", qty52);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+53, "text", qty53);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+54, "text", qty54);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+55, "text", qty55);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+56, "text", qty56);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+57, "text", qty57);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+58, "text", qty58);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+59, "text", qty59);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+60, "text", qty60);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+61, "text", qty61);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+62, "text", qty62);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+63, "text", qty63);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+64, "text", qty64);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+65, "text", qty65);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+66, "text", qty66);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+67, "text", qty67);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+68, "text", qty68);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+69, "text", qty69);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+70, "text", qty70);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+71, "text", qty71);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+72, "text", qty72);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+73, "text", qty73);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+74, "text", qty74);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+75, "text", qty75);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+76, "text", qty76);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+77, "text", qty77);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+78, "text", qty78);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+79, "text", qty79);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+80, "text", qty80);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+81, "text", qty81);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+82, "text", qty82);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+83, "text", qty83);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+84, "text", qty84);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+85, "text", qty85);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+86, "text", qty86);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+87, "text", qty87);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+88, "text", qty88);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+89, "text", qty89);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+90, "text", qty90);

        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+91, "text", qty91);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+92, "text", qty92);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+93, "text", qty93);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+94, "text", qty94);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+95, "text", qty95);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+96, "text", qty96);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+97, "text", qty97);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+98, "text", qty98);
        	this.tabInputDiv1.grd_errorList.setCellProperty('Head', 12+99, "text", qty99);

        	this.ds_errorData.set_rowposition(0);
        	this.basfn_deleteRow(this.ds_errorData);
        }

        // 생산계획
        this.div_00_tab_01_Tabpage1_btn_xlDown_grd_workOrderPlan_onclick = function(obj,e)
        {
        	var sName = "div_work.form.tab_01.Tabpage1.form.grd_workOrderPlan";
        	// 저장될 엑셀명
        	var file_name = "생산계획";
        	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        };

        //PIVOT
        this.div_00_tab_01_Tabpage2_btn_xlDn_grd_pivot_onclick = function(obj,e)
        {
        	var sName = "div_work.form.tab_01.Tabpage2.form.grd_pivot";
        	// 저장될 엑셀명
        	var file_name = "PIVOT";
        	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        };


        this.tab_00_Tabpage1_cbo_degree_onitemchanged = function(obj,e)
        {
        	this.fn_getPeriod();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.Button44_00_01.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.tab_search.Tabpage1.form.Button45_00.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.cbo_degree.addEventHandler("onitemchanged",this.tab_00_Tabpage1_cbo_degree_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_cust.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_cust_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_cust.addEventHandler("onclick",this.tab_search_Tabpage1_btn_cust_onclick,this);
            this.tab_search.Tabpage1.form.edt_week.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_week_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_week.addEventHandler("onclick",this.tab_search_Tabpage1_btn_week_onclick,this);
            this.div_work.form.tab_01.Tabpage1.form.grd_errorList.addEventHandler("oncellclick",this.div_work_grd_dispatchingItem_oncellclick,this);
            this.div_work.form.tab_01.Tabpage1.form.btn_xlUp.addEventHandler("onclick",this.div_00_btn_xlUp_onclick,this);
            this.div_work.form.tab_01.Tabpage1.form.btn_xlDown_grd_workOrderPlan.addEventHandler("onclick",this.div_00_tab_01_Tabpage1_btn_xlDown_grd_workOrderPlan_onclick,this);
            this.div_work.form.tab_01.Tabpage2.form.btn_xlDn_grd_pivot.addEventHandler("onclick",this.div_00_tab_01_Tabpage2_btn_xlDn_grd_pivot_onclick,this);
            this.div_header.form.btn_reset.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_confirm.addEventHandler("onclick",this.fn_confirm,this);
        };
        this.loadIncludeScript("MFM00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
