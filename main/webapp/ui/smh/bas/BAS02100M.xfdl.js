(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02100M");
            this.set_titletext("ROUTING");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSEMBLYITEMNAME\" type=\"STRING\" size=\"32\"/><Column id=\"DISPLAYNAME\" type=\"STRING\" size=\"32\"/><Column id=\"USERSEQUENCE\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PARENTBOMSEQUENCE\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYQTY\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BOMSEQUENCE\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYITEMID\" type=\"STRING\" size=\"32\"/><Column id=\"PARENTBOMID\" type=\"STRING\" size=\"32\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYTYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"32\"/><Column id=\"BOMID\" type=\"STRING\" size=\"32\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"32\"/><Column id=\"ASSEMBLYSEQUENCE\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTDEFTYPE\"/><Col id=\"PRODUCTDEFID\"/><Col id=\"PRODUCTDEFVERSION\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productDef", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETIONWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERITEMVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORIUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDTOOL\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID\" type=\"STRING\" size=\"0\"/><Column id=\"ASSEMBLYROUTINGID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSIONSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_factory", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTUOM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPSUPPLYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISALTERABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"BOMFORMULAID\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLE1\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLE2\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLE3\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLE4\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLE5\" type=\"STRING\" size=\"256\"/><Column id=\"MAKER\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MULTIPLE\" type=\"STRING\" size=\"256\"/><Column id=\"ALTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"ALTREVISION\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTBOMID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"ISEDITABLE1\" type=\"STRING\" size=\"0\"/><Column id=\"ISEDITABLE2\" type=\"STRING\" size=\"256\"/><Column id=\"ISEDITABLE3\" type=\"STRING\" size=\"256\"/><Column id=\"ISEDITABLE4\" type=\"STRING\" size=\"256\"/><Column id=\"ISEDITABLE5\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PSRPRINTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationSpec", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTCHARTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LCL\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"UCL\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"LOL\" type=\"STRING\" size=\"256\"/><Column id=\"UOL\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"OSL\" type=\"STRING\" size=\"256\"/><Column id=\"OUSL\" type=\"STRING\" size=\"256\"/><Column id=\"OLSL\" type=\"STRING\" size=\"256\"/><Column id=\"SPECTRANSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"WRAPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aoiLayer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AOIQCLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"AOIQCLAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkLot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bom", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTVAR1\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISEDITABLE1\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTVAR2\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISEDITABLE2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTVAR3\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISEDITABLE3\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTVAR4\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISEDITABLE4\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULTVAR5\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISEDITABLE5\" type=\"STRING\" size=\"256\"/><Column id=\"FORMULA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">BOM_P_0000001</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"DEFAULTVAR4\">1</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000002</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"DEFAULTVAR4\">1</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000003</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"DEFAULTVAR4\">1</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000004</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">0</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"DEFAULTVAR4\">1</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000005</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"DEFAULTVAR5\">0</Col><Col id=\"ISEDITABLE5\">true</Col><Col id=\"FORMULA\">v1 / v5</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000006</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4</Col><Col id=\"MATERIALTYPE\">Product</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"DEFAULTVAR4\">1</Col></Row><Row><Col id=\"ID\">BOM_P_0000007</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000008</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"DEFAULTVAR5\">0</Col><Col id=\"ISEDITABLE5\">true</Col><Col id=\"FORMULA\">v1 / v5</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000009</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000010</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"DEFAULTVAR5\">0</Col><Col id=\"ISEDITABLE5\">true</Col><Col id=\"FORMULA\">v1 / v5</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000011</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000012</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000013</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000014</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000015</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">??????</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000016</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000017</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000018</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000019</Col><Col id=\"DEFAULTVAR1\">7000</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"DEFAULTVAR5\">0.03</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 * v5 * 0.01 * 0.0001 * 19.32 * 100 / 68.1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000020</Col><Col id=\"DEFAULTVAR1\">7000</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"DEFAULTVAR5\">0.1</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 * v5 * 0.01 * 0.0001 * 19.32 * 100 / 68.1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000021</Col><Col id=\"DEFAULTVAR1\">7000</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"DEFAULTVAR5\">0.5</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 * v5 * 0.01 * 0.0001 * 19.32 * 100 / 68.1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000022</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000023</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1 / v3</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_P_0000024</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"DEFAULTVAR3\">392</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1</Col><Col id=\"MATERIALTYPE\">Product</Col></Row><Row><Col id=\"ID\">BOM_SA_0000001</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">4</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000002</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">4</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000003</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">v1 / v4</Col></Row><Row><Col id=\"ID\">BOM_SA_0000004</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">5</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000005</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">5</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000006</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">5</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000007</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">v1</Col></Row><Row><Col id=\"ID\">BOM_SA_0000008</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">4</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000009</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"DEFAULTVAR2\">7</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">1</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000010</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">2</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">true</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"DEFAULTVAR5\">0</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4 / v5</Col></Row><Row><Col id=\"ID\">BOM_SA_0000011</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">2</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">true</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"DEFAULTVAR5\">0</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3 / v4 / v5</Col></Row><Row><Col id=\"ID\">BOM_SA_0000012</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">??????</Col></Row><Row><Col id=\"ID\">BOM_SA_0000013</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">4</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v4</Col></Row><Row><Col id=\"ID\">BOM_SA_0000014</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000</Col></Row><Row><Col id=\"ID\">BOM_SA_0000015</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v4</Col></Row><Row><Col id=\"ID\">BOM_SA_0000016</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0.00257</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">false</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">v1 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000017</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">1</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">0</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">v1 / v3 / v4</Col></Row><Row><Col id=\"ID\">BOM_SA_0000018</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">2</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">v1 / 1000 / v4 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000019</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">0</Col><Col id=\"ISEDITABLE1\">true</Col><Col id=\"DEFAULTVAR2\">3</Col><Col id=\"ISEDITABLE2\">true</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">0</Col><Col id=\"ISEDITABLE4\">false</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"FORMULA\">(v1 + v2) / 1000 / v3</Col></Row><Row><Col id=\"ID\">BOM_SA_0000020</Col><Col id=\"MATERIALTYPE\">SubAssembly</Col><Col id=\"DEFAULTVAR1\">365</Col><Col id=\"ISEDITABLE1\">false</Col><Col id=\"ISEDITABLE2\">false</Col><Col id=\"ISEDITABLE3\">true</Col><Col id=\"DEFAULTVAR3\">0</Col><Col id=\"ISEDITABLE4\">true</Col><Col id=\"ISEDITABLE5\">false</Col><Col id=\"DEFAULTVAR4\">0</Col><Col id=\"FORMULA\">v1 / 1000 / v4 / v3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bomList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationExcel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDTOOL\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationExcelOut", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORIUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDMATERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDOPERATIONSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUIREDTOOL\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINPRODUCTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUBSEGMENTID\" type=\"STRING\" size=\"0\"/><Column id=\"ASSEMBLYROUTINGID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSIONSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultDurable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DURABLECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLDETAILTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_spec", this);
            obj._setContents("<ColumnInfo><Column id=\"VAL13_1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL13_2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL14_1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL14_2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL15_1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL15_2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productDefMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPLETIONWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERITEMVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkAOI", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INPUTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"AOICNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aoiLayerCheck", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AOIQCLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"AOIQCLAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkNow", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkNowParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkWeek", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INPUTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEEKCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","150","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("?????????");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","150","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("??????");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","156","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("?????? ??????");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("D803F17F3C844E62AA1972AB54C4432A");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03","0","55",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04","0","130",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_value("FA1");
            obj.set_text("FA1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","60","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_value("1010759A5");
            obj.set_text("1010759A5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03_00","0","30",null,"5","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("???????????????");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","300","669",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("treeRouting","0","35","230",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("collapse,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:DISPLAYNAME\" treestartlevel=\"0\" treelevel=\"bind:BOMLEVEL\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","treeRouting:5","473",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("??????");
            obj.set_tooltiptext("CONSUMABLE");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_consumable","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_consumable");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"73\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"No\"/><Cell col=\"1\" text=\"????????????\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev\"/><Cell col=\"3\" text=\"?????????\"/><Cell col=\"4\" text=\"????????????\"/><Cell col=\"5\" text=\"?????????\"/><Cell col=\"6\" text=\"????????????\"/><Cell col=\"7\" text=\"?????????\"/><Cell col=\"8\" text=\"?????????\"/><Cell col=\"9\" text=\"BOM ????????? ?????????\"/><Cell col=\"10\" text=\"??????1(?????????)\"/><Cell col=\"11\" text=\"??????2(LOSS)\"/><Cell col=\"12\" text=\"??????3(??????)\"/><Cell col=\"13\" text=\"??????4(??????SIZE)\"/><Cell col=\"14\" text=\"??????5(??????)\"/><Cell col=\"15\" text=\"????????????\" cssclass=\"cell_point\"/><Cell col=\"16\" text=\"UOM\"/><Cell col=\"17\" text=\"RTR ??????\"/><Cell col=\"18\" text=\"????????????\"/><Cell col=\"19\" text=\"?????????\"/><Cell col=\"20\" tooltiptext=\"CREATOR\" text=\"?????????\"/><Cell col=\"21\" tooltiptext=\"CREATEDTIME\" text=\"?????????\"/><Cell col=\"22\" tooltiptext=\"MODIFIER\" text=\"?????????\"/><Cell col=\"23\" tooltiptext=\"MODIFIEDTIME\" text=\"?????????\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:COMPONENTITEMID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandsize=\"24\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:COMPONENTITEMVERSION\"/><Cell col=\"3\" text=\"bind:COMPONENTITEMNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MATERIALDETAILTYPE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,MaterialDetailType,null,Y,Y\"/><Cell col=\"5\" text=\"bind:USERLAYER\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,UserLayer,,Y,Y\"/><Cell col=\"6\" text=\"bind:WORKMETHOD\" displaytype=\"combotext\" edittype=\"expr:dataset.parent.fn_chkMaterialType(MATERIALDETAILTYPE)\" combocodecol=\"C,OutsourcingSpecWorkType,,Y,Y\"/><Cell col=\"7\" edittype=\"expr:MATERIALDETAILTYPE==&apos;PSR&apos; ? &apos;combo&apos; : &apos;none&apos;\" displaytype=\"combotext\" combocodecol=\"C,PSRPRINTTYPE,null,Y,Y\" text=\"bind:PSRPRINTTYPE\"/><Cell col=\"8\" text=\"bind:COMPONENTQTY\" displaytype=\"number\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"9\" text=\"bind:BOMFORMULAID\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_bomList\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"10\" edittype=\"expr:ISEDITABLE1==&quot;true&quot; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" displaytype=\"number\" text=\"bind:VARIABLE1\"/><Cell col=\"11\" edittype=\"expr:ISEDITABLE2==&quot;true&quot; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" displaytype=\"number\" text=\"bind:VARIABLE2\"/><Cell col=\"12\" edittype=\"expr:ISEDITABLE3==&quot;true&quot; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" displaytype=\"number\" text=\"bind:VARIABLE3\"/><Cell col=\"13\" edittype=\"expr:ISEDITABLE4==&quot;true&quot; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" displaytype=\"number\" text=\"bind:VARIABLE4\"/><Cell col=\"14\" edittype=\"expr:ISEDITABLE5==&quot;true&quot; ? &quot;normal&quot; : &quot;none&quot;\" editinputtype=\"number\" displaytype=\"number\" text=\"bind:VARIABLE5\"/><Cell col=\"15\" text=\"bind:WIPSUPPLYTYPE\" displaytype=\"combotext\" edittype=\"expr:MATERIALTYPE==&quot;Product&quot; ? &quot;none&quot; : &quot;combo&quot;\" combocodecol=\"C,WipSupplyType,,Y,Y\"/><Cell col=\"16\" text=\"bind:COMPONENTUOM\" displaytype=\"combotext\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"17\" text=\"bind:ISREQUIREDMATERIAL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"18\" text=\"bind:ALTITEM\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"C,YesNo,,Y,Y\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"19\" text=\"bind:MAKER\"/><Cell col=\"20\" text=\"bind:CREATOR\"/><Cell col=\"21\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"22\" text=\"bind:MODIFIER\"/><Cell col=\"23\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delconsumable",null,null,"29","24","29","grd_consumable:0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addconsumable",null,null,"29","24","btn_delconsumable:0","grd_consumable:0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_consumable",null,null,"29","24","0","grd_consumable:0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_consumable","0","-3","200","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("??????SPEC");
            obj.set_tooltiptext("SPECINSPITEM");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_operationSpec","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operationSpec");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" tooltiptext=\"INSPECTIONDEFID\" text=\"???????????????\" cssclass=\"cell_point\"/><Cell col=\"2\" rowspan=\"2\" tooltiptext=\"INSPITEMCLASSID\" text=\"??????\"/><Cell col=\"3\" colspan=\"3\" tooltiptext=\"INSPITEMID\" text=\"?????? SPEC\"/><Cell col=\"6\" rowspan=\"2\" text=\"????????????&#13;&#10;(OZ)\"/><Cell col=\"7\" rowspan=\"2\" tooltiptext=\"CREATOR\" text=\"?????????\"/><Cell col=\"8\" rowspan=\"2\" tooltiptext=\"CREATEDTIME\" text=\"?????????\"/><Cell col=\"9\" rowspan=\"2\" text=\"?????????\" tooltiptext=\"MODIFIER\"/><Cell col=\"10\" rowspan=\"2\" text=\"?????????\" tooltiptext=\"MODIFIEDTIME\"/><Cell row=\"1\" col=\"3\" text=\"?????????\"/><Cell row=\"1\" col=\"4\" text=\"?????????\"/><Cell row=\"1\" col=\"5\" text=\"?????????\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" displaytype=\"text\" textAlign=\"left\" cssclass=\"point\"/><Cell col=\"2\" text=\"bind:LOCATION\" displaytype=\"text\" edittype=\"normal\" combodataset=\"ds_inspection\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LSL\" expandshow=\"hide\" expandsize=\"24\" displaytype=\"text\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"4\" text=\"bind:SL\" displaytype=\"text\" textAlign=\"right\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"5\" text=\"bind:USL\" displaytype=\"text\" edittype=\"normal\" combocodecol=\"C,YesNo,,Y,Y\" textAlign=\"right\" editinputtype=\"number\"/><Cell col=\"6\" text=\"bind:COPPERTHICKNESS\" displaytype=\"number\" edittype=\"expr:dataset.parent.fn_InspType(SPECTRANSTYPE)\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operationSpec","0","-3","200","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addoperationSpec",null,null,"29","24","58","grd_operationSpec:0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_deloperationSpec",null,null,"29","24","29","grd_operationSpec:0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_operationSpec",null,null,"29","24","0","grd_operationSpec:0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_barcharinfo",null,"7","115","20","btn_addoperationSpec:5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ControlType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","sta_cnt_ds_operationSpec:10","5",null,"24","cbo_barcharinfo:5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("?????? ?????? ??????");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEFAULTCHARTTYPE");
            obj.set_cssclass("sta_WF_detail");
            obj.set_textAlign("right");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_00);
            obj.set_text("?????????");
            obj.set_tooltiptext("DURABLE");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_durable","0","-3","200","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_durable","0","26",null,null,"4","0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_durable");
            obj.set_autoupdatetype("itemselect");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"111\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"????????????\" tooltiptext=\"ITEMCODE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"3\" text=\"?????????\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"?????????ID\"/><Cell col=\"5\" text=\"????????? Rev\" tooltiptext=\"TXTTOOLVERSION\"/><Cell col=\"6\" text=\"????????????\"/><Cell col=\"7\" text=\"??????\"/><Cell col=\"8\" text=\"?????????\"/><Cell col=\"9\" text=\"?????????\"/><Cell col=\"10\" text=\"?????????\"/><Cell col=\"11\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"right\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLCODE\"/><Cell col=\"5\" text=\"bind:TOOLVERSION\"/><Cell col=\"6\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:CREATOR\"/><Cell col=\"9\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:MODIFIER\"/><Cell col=\"11\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_deldurable",null,null,"29","24","29","grd_durable:0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_adddurable",null,null,"29","24","btn_deldurable:0","grd_durable:0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_durable",null,null,"29","24","0","grd_durable:0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab_00);
            obj.set_text("AOI ???");
            obj.set_tooltiptext("AOIQCLAYER");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_aoiLayer","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_aoiLayer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"none\" edittype=\"none\" text=\"No\"/><Cell col=\"1\" tooltiptext=\"INSPECTIONDEFID\" text=\"AOI ???\"/><Cell col=\"2\" tooltiptext=\"INSPITEMCLASSID\" text=\"AOI2 ???\"/><Cell col=\"3\" tooltiptext=\"DESCRIPTIOn\" text=\"??????\"/><Cell col=\"4\" tooltiptext=\"CREATOR\" text=\"?????????\"/><Cell col=\"5\" tooltiptext=\"CREATEDTIME\" text=\"?????????\"/><Cell col=\"6\" text=\"?????????\" tooltiptext=\"MODIFIER\"/><Cell col=\"7\" text=\"?????????\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell edittype=\"none\" displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,Layer,,Y,Y\" text=\"bind:AOIQCLAYER\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_inspection\" combocodecol=\"C,Layer,,Y,Y\" combodatacol=\"NAME\" text=\"bind:AOIQCLAYER2\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" expandshow=\"hide\" expandsize=\"24\" displaytype=\"text\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CREATOR\"/><Cell col=\"5\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:MODIFIER\"/><Cell col=\"7\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_aoiLayer","0","-3","200","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_delaoiLayer",null,null,"29","24","29","grd_aoiLayer:0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_addaoiLayer",null,null,"29","24","btn_delaoiLayer:0","grd_aoiLayer:0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("true");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_aoiLayer",null,null,"29","24","0","grd_aoiLayer:0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","260","129","90","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OPERATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operation","sta_subTitle:15","129","200","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_operation","treeRouting:5","166",null,"307","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_binddataset("ds_operation");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"????????????\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"????????????\" cssclass=\"cell_point\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"4\" text=\"?????????\"/><Cell col=\"5\" text=\"????????????\"/><Cell col=\"6\" text=\"??????\" tooltiptext=\"MATERIALCHANGETYPE\"/><Cell col=\"7\" text=\"??????SPEC\"/><Cell col=\"8\" text=\"?????????\" tooltiptext=\"TOOLCHANGETYPE\"/><Cell col=\"9\" text=\"????????????\"/><Cell col=\"10\" text=\"????????????\"/><Cell col=\"11\" text=\"?????????\"/><Cell col=\"12\" text=\"?????????\"/><Cell col=\"13\" text=\"?????????\"/><Cell col=\"14\" text=\"?????????\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_factory\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" textAlign=\"right\" displaytype=\"text\" edittype=\"normal\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\" displaytype=\"text\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:DESCRIPTION\" textAlign=\"left\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:ISREQUIREDMATERIAL\"/><Cell col=\"7\" text=\"bind:ISREQUIREDOPERATIONSPEC\"/><Cell col=\"8\" text=\"bind:ISREQUIREDTOOL\"/><Cell col=\"9\" edittype=\"combo\" combocodecol=\"C,YesNo,null,Y,Y\" text=\"bind:ISWEEKMNG\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:VALIDSTATE\" edittype=\"combo\" combocodecol=\"C,UsageStatus,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:CREATOR\"/><Cell col=\"12\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:MODIFIER\"/><Cell col=\"14\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUpCustom_grd_operation",null,"142","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("???????????????");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_operation",null,null,"29","24","btn_xlUpCustom_grd_operation:0","grd_operation:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delOperation",null,null,"29","24","btn_xlDn_grd_operation:0","grd_operation:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addOperation",null,null,"29","24","btn_delOperation:0","grd_operation:0",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("StaticTitleBOM","0","0","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("BOM ??????");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TREEROUNTING");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","treeRouting:5","35",null,"94","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CUTOMERNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_customerName","sta_00:1","7","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03","edt_customerName:0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","sta_03:5","7","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04","edt_itemId:0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemRev","sta_04:5","7","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00","edt_itemRev:0","0","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","sta_07_00:5","7",null,"20","0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("??????");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("JOBTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_jobType","sta_00:1","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03_00","edt_jobType:0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_productType","sta_03_00:5","36","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04_00","edt_productType:0","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("RTR/SHEET");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("E4DA2FCD959342E4A46DA2A80F76FB42");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_rtr","sta_04_00:0","36","10.00%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,RTRSHT,,Y,Y");
            obj.set_cssclass("display");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00_00","cbo_rtr:5","31","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("PNL X");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PANELX");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","62","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("??????(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ARRAYPCS");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pcspnl","sta_00_00_00:1","67","10.00%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_inputtype("number");
            obj.set_cssclass("display");
            obj.set_text("??????");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03_00_00","edt_pcspnl:0","62","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("?????????(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CALCULATEPCS");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pcsmm","sta_03_00_00:5","67","10.00%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_inputtype("number");
            obj.set_cssclass("display");
            obj.set_text("??????");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04_00_00","edt_pcsmm:0","62","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            obj.set_tooltiptext("USERLAYER");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_layer","sta_04_00_00:0","68","10%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,Layer,null,Y,Y");
            obj.set_visible("false");
            obj.set_cssclass("display");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00_00_00","cbo_layer:5","62","9%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("??????");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_visible("false");
            obj.set_tooltiptext("REMARK");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_remark","sta_07_00_00_00:0","67",null,"20","0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_cssclass("display");
            obj.set_text("??????");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pnlX","sta_07_00_00:0","37","10.00%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_inputtype("number");
            obj.set_cssclass("display");
            obj.set_text("??????");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07_00_00_01","edt_pnlX:5","31","10.94%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("PNL Y");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PANELY");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_pnlY","sta_07_00_00_01:0","37","10.00%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_visible("true");
            obj.set_inputtype("number");
            obj.set_cssclass("display");
            obj.set_text("??????");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_operation00","730","256",null,"84","114",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj.set_binddataset("ds_operationExcel");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"PLANTID\"/><Cell col=\"1\" text=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"DESCRIPTION\"/><Cell col=\"5\" text=\"ISREQUIREDMATERIAL\"/><Cell col=\"6\" text=\"ISREQUIREDOPERATIONSPEC\"/><Cell col=\"7\" text=\"ISREQUIREDTOOL\"/><Cell col=\"8\" text=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\"/><Cell col=\"5\" text=\"bind:ISREQUIREDMATERIAL\"/><Cell col=\"6\" text=\"bind:ISREQUIREDOPERATIONSPEC\"/><Cell col=\"7\" text=\"bind:ISREQUIREDTOOL\"/><Cell col=\"8\" text=\"bind:VALIDSTATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_saveArea",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("ROUTING");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_genNumber",null,"16","100","24","btn_saveArea:25",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("?????? ?????? ??????");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_RoutingSegmentSequence");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_warehouse",null,"16","80","24","btn_genNumber:5",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("????????????");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_SetWarehouse");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_copyRouting",null,"16","90","24","btn_warehouse:5",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("Routing ??????");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_site","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_item_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_item_nm","value","ds_search","PRODUCTDEFNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_item","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.Div01.form.edt_customerName","value","ds_productDef","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.Div01.form.edt_itemId","value","ds_productDef","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.Div01.form.edt_itemRev","value","ds_productDef","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.Div01.form.edt_itemName","value","ds_productDef","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.Div01.form.edt_jobType","value","ds_productDef","JOBTYPENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.Div01.form.edt_productType","value","ds_productDef","PRODUCTIONTYPENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.Div01.form.edt_remark","value","ds_productDef","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.Div01.form.cbo_rtr","value","ds_productDef","RTRSHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.Div01.form.edt_pcsmm","value","ds_productDef","PCSMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.Div01.form.edt_pcspnl","value","ds_productDef","PCSPNL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.Div01.form.edt_pnlX","value","ds_productDef","PNLSIZEXAXIS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.Div01.form.edt_pnlY","value","ds_productDef","PNLSIZEYAXIS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02100M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02100M.xfdl", function() {
        /***************************************************************************************
         * ???????????? 	: IFC MES?????????
         * ????????? 		: ROUTING
         * ????????? 		: BAS02100M.xfdl
         * ????????? 		: ?????????
         * ????????? 		: 2021.03.08
         *
         * ???  ???		: ???????????? - ROUTING
         *---------------------------------------------------------------------------------------
         * ?????????		?????????		????????????
         *---------------------------------------------------------------------------------------
         * 2021.03.08	?????????   	????????????
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. ?????? include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//???????????? ?????? ??????????????? include
        /**************************************************************************
         * 2. FORM ?????? ?????? ??????
         ***************************************************************************/
         this.searchDiv1 = this.tab_search.Tabpage1.form;
         this.g_positionTree; 	//?????? ??? ??????????????? ?????? ????????????
         this.g_positionGrid; 	//?????? ??? ??????????????? ?????? ????????????
         this.g_positionA; 		//?????? ??? ??????????????? ?????? ????????????
         this.g_init = true;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_comboInit();
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_saveArea); //???????????? ???????????? ?????? ??????

        	//??????????????? ????????? ??????
        	this.basfn_removeEventGrid(this.div_work.form.grd_operation);
        };

        /**************************************************************************
         * 4. ?????????????????? (?????? ????????????!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {

        	if(this.ds_productDef.rowcount < 1){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(this.ds_productDef.getColumn(0, "PRODUCTDEFID"))){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//????????????/??????ID ????????? ??????
        	this.ds_operation.set_enableevent(false);
        	this.ds_operation.filter("VALIDSTATE=='Valid'");
        	if(!this.basfn_checkGridDup(this.ds_operation
        								, "USERSEQUENCE|PROCESSSEGMENTID"
        								, "DuplicationUserSequence|DuplicationSegmentID")){
        		this.ds_operation.filter("");
        		this.ds_operation.set_enableevent(true);
        		return;
        	} else {
        		this.ds_operation.filter("");
        	}
        	this.ds_operation.set_enableevent(true);


        	/* ????????? ???????????? */
        	var componentA = this.div_work.form.grd_operation;
        	var componentB = this.div_work.form.tab_00.Tabpage1.form.grd_consumable;
        	var componentC = this.div_work.form.tab_00.Tabpage3.form.grd_durable;
        	var componentD = this.div_work.form.tab_00.Tabpage2.form.grd_operationSpec;

        	var strColIdListA = "PLANTID,USERSEQUENCE,PROCESSSEGMENTID";
        	var strColIdListB = "COMPONENTITEMID,WIPSUPPLYTYPE";
        	var strColIdListC = "TOOLCODE";
        	var strColIdListD = "INSPITEMNAME";

        	/* ?????? ????????? ?????? */
        	if(!this.nfn_MandatoryCheckGrid(componentA, strColIdListA)) return;

        	if(!this.nfn_MandatoryCheckGrid(componentD, strColIdListD)) return;

        	/* ?????? ????????? ?????? */
        	if(!this.nfn_MandatoryCheckGrid(componentB, strColIdListB)) {
        		this.div_work.form.tab_00.set_tabindex(0);
        		return;
        	}



        	if(!this.nfn_MandatoryCheckGrid(componentC, strColIdListC)) {
        		this.div_work.form.tab_00.set_tabindex(2);
        		return;
        	}

        	//?????? ????????? ????????? ??????
        	if(!this.basfn_checkGridDup(this.ds_consumable
        								, "COMPONENTITEMID"
        								, "DuplicationConsumableID")){ return;}
        	//??????Spec ????????? ????????? ??????
        	if(!this.basfn_checkGridDup(this.ds_operationSpec
        								, "INSPITEMID"
        								, "DuplicationInspectionItemID")){ return;}


        	//????????? ????????? ????????? ??????
        	for(var i=0; i <this.ds_durable.rowcount; i++){
        		if(this.ds_durable.getRowType(i) == 2 || this.ds_durable.getRowType(i) == 4){
        			var toolCode 	= this.ds_durable.getColumn(i, "TOOLCODE");
        			var toolVersion = this.ds_durable.getColumn(i, "TOOLVERSION");

        			var chkCnt = this.ds_durable.getCaseCount("TOOLCODE=='" + toolCode +"' && TOOLVERSION=='" +toolVersion+"'");
        			if(chkCnt>1){
        				this.gfn_Message("DuplicatedDurable",toolCode+"/"+toolVersion , "warning", "ok");
        				return false;
        			}
        		}
        	}

        	//????????????????????? ?????? Update (As-Is)
        	this.ds_productDef.setColumn(0, "PROCESSDEFTYPE", "Main");
        	this.ds_productDef.setColumn(0, "VERSIONSTATE", "Active");
        	this.ds_productDef.setColumn(0, "VALIDSTATE", "Valid");

        	this.g_positionTree = this.ds_tree.rowposition;
        	this.g_positionGrid = this.div_work.form.treeRouting.getSelectedRows();
        	this.g_positionA = this.ds_operation.rowposition;

        	var productDefId		= this.ds_productDef.getColumn(0, "PRODUCTDEFID");
        	var productDefVersion	= this.ds_productDef.getColumn(0, "PRODUCTDEFVERSION");
        	var defaultCharType 	= this.div_work.form.tab_00.Tabpage2.form.cbo_barcharinfo.value;

        	for(var i=0; i<this.ds_productDef.rowcount; i++){
        		this.ds_productDef.setColumn(i,"VALIDSATE", "Valid");
        		this.ds_productDef.setColumn(i,"VERSIONSTATE", "Active");
        		this.ds_productDef.setColumn(i,"PROCESSDEFTYPE", "Main");
        		this.ds_productDef.setColumn(i,"PATHTYPE", "StartEnd");
        		this.ds_productDef.setColumn(i,"PROCESSSEGMENTVERSION", "*");
        		this.ds_productDef.setColumn(i,"OPERATIONSEQUENCE", "1");
        	}

        	for(var i=0; i<this.ds_operationSpec.rowcount; i++){
        		this.ds_operationSpec.setColumn(i,"DEFAULTCHARTTYPE", defaultCharType);
        		this.ds_operationSpec.setColumn(i,"RESOURCEID", productDefId);
        		this.ds_operationSpec.setColumn(i,"RESOURCEVERSION", productDefVersion);
        	}

        	this.ds_tree.set_enableevent(false);


        	//AOI ???????????? ??????
        	if(!this.fn_checkAOI()){
        		this.ds_tree.set_enableevent(true);
        		return;
        	}

        	//???????????? ???????????? ??????
        	if(!this.fn_checkWeek()){
        		this.ds_tree.set_enableevent(true);
        		return;
        	}


        	// -------------------------
        	// ??????
        	// ':U' ??? ????????? ???????????? ?????? ?????????????????? ?????????, ':A' ??? ?????? ????????? ????????????.
        	// ':N' ??? ?????? Delete??? ????????? ???????????? Normal ????????? ????????????. ???????????? ?????? ?????????????????? Normal??? ???????????????
        	// -------------------------
        	var sSvcID 			= "saveRouting";
        	var sController 	= "/bas02100/saveRouting.do";
        	var sInDatasets 	= "ds_def=ds_productDef:A ds_operation=ds_operation:U ds_consumable=ds_consumable:U ds_operationSpec=ds_operationSpec:U ds_durable=ds_durable:U ds_aoiLayer=ds_aoiLayer:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
        	2021-06-15, ????????? ??????
        	AOI????????? ??????????????? AOI ??? ???????????? ?????? ?????? ????????? ????????? ??????
        */
        this.fn_checkAOI = function()
        {
        	var fRow = this.ds_operation.findRowExpr("PROCESSSEGMENTNAME.toUpperCase().indexOf('AOI')>-1|| PROCESSSEGMENTNAME.toUpperCase().indexOf('VRS')>-1");
        	//AOI??????
        	if(fRow > -1){
        		this.ds_checkAOI.clearData();
        		this.ds_aoiLayerCheck.copyData(this.ds_aoiLayer);
        		var sSvcID 			= "checkAOI";
        		var sController 	= "/bas02100/checkAOI.do";
        		var sInDatasets 	= "ds_def=ds_productDef:A ds_aoiLayer=ds_aoiLayerCheck:A";
        		var sOutDatasets 	= "ds_checkAOI=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);

        		var inputCnt = nexacro.toNumber(this.nfn_nvl(this.ds_checkAOI.getColumn(0, "INPUTCNT"),"0"));
        		//????????? aoi????????? ?????????
        		inputCnt = inputCnt + (this.ds_aoiLayer.rowcount>0 ? 1 : 0 );

        		var aoiCnt = nexacro.toNumber(this.nfn_nvl(this.ds_checkAOI.getColumn(0, "AOICNT"), "0"));

        		//var result = this.ds_checkAOI.getColumn(0, "RESULT");

        		if(inputCnt < aoiCnt){
        		//if(result=="N"){
        			var bOk = this.gfn_Message("NotInputAOILayer", null, "conf", "yesno");
        			return bOk;
        		}
        	}
        	return true;
        }

        /*
        	2021-07-13, ????????? ??????
        	M/K ??????????????? ??????????????? ?????????????????? ?????? ?????? ????????? ????????? ??????
        */
        this.fn_checkWeek = function()
        {
        	var inputCnt 	= this.ds_operation.getCaseCount("ISWEEKMNG=='Y' && PROCESSSEGMENTTYPE=='MKPrint'");
        	var weekCnt 	= this.ds_operation.getCaseCount("PROCESSSEGMENTTYPE=='MKPrint'");

        	if(inputCnt < weekCnt){
        		var bOk = this.gfn_Message("NotInputPrintWeek", null, "conf", "yesno");
        		return bOk;
        	}

        	return true;
        }

        /*
         * ?????? : ??????
         */
        this.fn_search = function (obj, e)
        {
        	if(!this.g_init){
        		if(!this.fn_checkDsUpdate("A"))return;
        	}
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_item";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"????????????");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}

        	this.g_positionTree = null;
        	this.g_positionA = null;
        	this.g_positionGrid = null;
        	//BOM ?????? ??????
        	this.g_init = false;
        	this.ds_tree.set_enableevent(true);
        	this.fn_searchTreeList();
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {

        	this.setWaitCursor(false, true); //?????? ????????????.
        	if (errCD < 0)
        	{
        		if (trId == "saveRouting")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        			this.ds_tree.set_enableevent(true);
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	} else {
        		if (trId == "selectTreeList")
        		{
        			this.div_work.form.treeRouting.setTreeStatus(0,true);
        			if(this.ds_tree.rowcount>0){
        				var idx = 0;
        				var grdIdx = 0;

        				if(!this.nfn_isNull(this.g_positionTree)){
        					idx = this.g_positionTree;
        				}
        				if(!this.nfn_isNull(this.g_positionGrid)){
        					grdIdx = this.g_positionGrid;
        				}
        				this.ds_tree.set_rowposition(idx);
        				this.fn_selectProductDEFInfo(idx);
        				this.div_work.form.treeRouting.selectRow(grdIdx, true);
        			} else {
        				this.fn_selectProductDEFInfo(-1);
        			}
        			this.g_positionTree = null;
        			this.g_positionGrid = null;
        			this.ds_tree.set_enableevent(true);
        		} else if (trId == "selectProductDEFInfo") {
        			if(this.ds_operation.rowcount>0){
        				var idx = 0;
        				if(!this.nfn_isNull(this.g_positionA)){
        					idx = this.g_positionA;
        				}
        				this.ds_operation.set_rowposition(idx);
        				this.fn_searchProductDetail(idx);
        				this.fn_changeBOMValue();
        			} else {
        				this.fn_searchProductDetail(-1);
        			}

        			if(this.ds_tree.rowposition==0){
        				//????????? ???????????? ?????????????????? ??????
        				this.ds_productDefMaster.copyRow(0,this.ds_productDef,0);
        			}
        			//???????????? ?????? ???????????? ???????????? ????????? ??????????????? ???????????? ??????(2021-04-01, ????????? ?????? ??????)
        			var masterdataClassId = this.ds_tree.getColumn(this.ds_tree.rowposition, "MASTERDATACLASSID");
        			if(masterdataClassId=="SubAssembly"){
        				var pnlX	= this.nfn_nvl(this.ds_productDef.getColumn(0, "PNLSIZEXAXIS"), this.ds_productDefMaster.getColumn(0, "PNLSIZEXAXIS"));
        				var pnlY	= this.nfn_nvl(this.ds_productDef.getColumn(0, "PNLSIZEYAXIS"), this.ds_productDefMaster.getColumn(0, "PNLSIZEYAXIS"));
        				var pcsPnl	= this.nfn_nvl(this.ds_productDef.getColumn(0, "PCSPNL"), 		this.ds_productDefMaster.getColumn(0, "PCSPNL"));

        				this.ds_productDef.setColumn(0, "PNLSIZEXAXIS", pnlX);
        				this.ds_productDef.setColumn(0, "PNLSIZEYAXIS", pnlY);
        				this.ds_productDef.setColumn(0, "PCSPNL", 		pcsPnl);
        			}

        			this.g_positionA = null;
        			this.ds_operation.set_enableevent(true);

        			var strCnt = 'Count : <fc v="#f31d24">'+this.ds_operation.rowcount+'</fc><fc v="#999999"></fc>'
        			this.div_work.form.sta_cnt_ds_operation.set_text(strCnt);

        			this.fn_chkFormulaId(); //?????? ????????? ?????? ??????????????? ???????????? ??????
        		} else if (trId == "selectProductDetail") {
        			this.ds_operation.set_enableevent(true);
        			this.fn_changeOperationSpec(); //??????SPEC ?????? ??????
        		} else if (trId == "saveRouting") {
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.ds_tree.set_enableevent(true);
        			this.fn_searchTreeList();
        		}
        	}
        };


        /**************************************************************************
         * 6. ?????? ??????/??????
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::???????????? ??????, B:: ??????????????? ?????? ??????
        	// popupCd     : ???????????? ?????? ???????????? ???????????? ????????????
        	// popupNm     : ???????????????????????? , ???????????? ?????? ?????? ???????????? ???????????? ??????????????? ???????????? ?????????
        	// rtnCols     : ????????? : "|"   : ???????????? ????????? ?????? ?????? (?????? ?????? ??????????????? ???????????? ?????????)
        	// paramCols   : ????????? : "|" : where ????????? ????????? ??????
        	// paramValues : ????????? : "|"  : where ????????? ????????? ????????? ?????? ???
        	// searchStr   : ?????? ???????????? ????????? = ?????? ???
        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	//???????????? ??????
        	if(svcId =="SCH_ITEM"){
        		//var pPRODUCTDIVISION = "Product";
        		var processDefId = this.ds_search.getColumn(0,"PRODUCTDEFID");
        		var prductIDCondition = processDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + processDefId + "|";
        		var pPlantID =  this.ds_search.getColumn(0,"PLANTID");
        		opts = "width=800,height=800";
        		oArg.arg_type = "BA";
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_paramCols = "PLANTID";
        		oArg.arg_paramValues = pPlantID;
        		oArg.arg_searchStr = prductIDCondition;// + "PRODUCTDIVISION=" + pPRODUCTDIVISION;
        	} else if (svcId =="GRD_ITEM"){
        		opts = "width=800,height=500";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION|UOMDEFID|LOTCONTROL|MASTERDATACLASSID|SPEC|MAKER";
        		oArg.arg_searchStr = "SubAssembly";
        		this.gfn_openPopup(popupId,"bas::BAS02100P4.xfdl",oArg,opts);
        		return;
        	} else {
        		oArg.arg_paramCols = "ENTERPRISEID|LANGUAGETYPE|VALIDSTATE";
        		oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.gf_getLanguageType()+"|Valid";
        	}

        	//?????? ??????
        	if(svcId =="GRD_OPERATION"){
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME|SUBSEGMENTID";
        		oArg.arg_paramCols = "PLANTID|VALIDSTATE";
        		oArg.arg_paramValues = this.gf_getSiteType()+"|Valid";
        	}

        	//?????? ??????
        	if(svcId =="GRD_CONSUMABLE"){
        		opts = "width=800,height=500";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION|UOMDEFID|LOTCONTROL|MASTERDATACLASSID|SPEC|MAKER";
        		this.gfn_openPopup(popupId,"bas::BAS02100P.xfdl",oArg,opts);
        		return;
        	}

        	//?????? ??????
        	if(svcId =="GRD_INSPECTION"){
        		var processSegId 		= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        		oArg.arg_type 			= "C";
        		oArg.arg_paramCols 		= "PROCESSSEGMENTID";
        		oArg.arg_paramValues 	= processSegId;
        		oArg.arg_rtnCols 		= "INSPITEMID|INSPITEMNAME|INSPITEMVERSION|SPECTRANSTYPE";
        	}

        	//????????? ??????
        	if(svcId =="GRD_DURABLE"){
        		var operationId			= this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID");
        		opts = "width=1024,height=500";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION|DURABLEDEFID|DURABLEDEFNAME|DURABLEDEFVERSION|TOOLFORM|TOOLKIND|SUMMARY|MANUFACTURER|SCALEX|SCALEY|DESCRIPTION|DURABLECLASSID";
        		oArg.arg_type 			= "C";
        		oArg.arg_paramCols 		= "OPERATIONID";
        		oArg.arg_paramValues 	= operationId;
        		/*
        		oArg.arg_rtnCols 		= "DURABLECLASSTYPE"
        								+"|DURABLEDEFID"
        								+"|DURABLEDEFNAME"
        								+"|DURABLEDEFVERSION"
        								+"|FILMUSELAYER1"
        								+"|FILMUSELAYER2"
        								+"|DURABLECLASSID"
        								*/
        	}

        	if(svcId =="ITEM_COPY"){
        		opts = "width=800,height=205";
        		var dsObj = this.ds_productDef;
        		var dsPosition = 0;
        		oArg.itemId = dsObj.getColumn(dsPosition,"PRODUCTDEFID");
        		oArg.itemRev = dsObj.getColumn(dsPosition,"PRODUCTDEFVERSION");
        		oArg.itemNm = dsObj.getColumn(dsPosition,"PRODUCTDEFNAME");

        		this.gfn_openPopup(popupId,"bas::BAS02100P1.xfdl",oArg,opts);
        		return;
        	}

        	if(svcId =="ITEM_WAREHOUSE"){
        		opts = "width=600,height=310";
        		var dsObj = this.ds_productDef;
        		var dsPosition = 0;
        		oArg.itemId = dsObj.getColumn(dsPosition,"PRODUCTDEFID");
        		oArg.itemRev = dsObj.getColumn(dsPosition,"PRODUCTDEFVERSION");
        		oArg.itemType = dsObj.getColumn(dsPosition,"PRODUCTDEFCLASSID");


        		this.gfn_openPopup(popupId,"bas::BAS02100P2.xfdl",oArg,opts);
        		return;
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //?????? ?????? ??????
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	var processSegmentId	= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        	var operationId			= this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID");
        	var subSegmentId		= this.ds_operation.getColumn(this.ds_operation.rowposition, "SUBSEGMENTID");	 //????????????ID

        	if(sPopupId == "SCH_ITEM")	//???????????? : ?????? ??????
        	{
        		this.searchDiv1.edt_item.set_value(rtn[0]);
        		this.searchDiv1.edt_item_nm.set_value(rtn[1]);
        		this.searchDiv1.edt_item_cd.set_value(rtn[2]);
        	}

        	if(sPopupId == "GRD_ITEM")	//??????????????? : ???????????? ??????
        	{
        		var nRow = this.ds_consumable.rowposition;
        		this.ds_consumable.setColumn(nRow, "ALTITEM", rtn[0]);
        		this.ds_consumable.setColumn(nRow, "ALTREVISION", rtn[2]);
        	}

        	if(sPopupId == "GRD_OPERATION")	//??????????????? : ??????ID ??????
        	{
        		var nRow = this.ds_operation.rowposition;
        		this.ds_operation.setColumn(nRow, "PROCESSSEGMENTID", rtn[0]);
        		this.ds_operation.setColumn(nRow, "PROCESSSEGMENTNAME", rtn[1]);
        		this.ds_operation.setColumn(nRow, "SUBSEGMENTID", rtn[2]);

        		if(nRow==0){
        			this.fn_setRtrSht();
        		}
        	}


        	if(sPopupId == "GRD_CONSUMABLE")	//?????? ????????? : ???????????? ??????
        	{
        		for(var i=0; i<rtn.length; i++){
        			var colArray 		= rtn[i];
        			var itemId 			= colArray[0];
        			var itemName 		= colArray[1];
        			var itemRev 		= colArray[2];
        			var uom 			= colArray[3];
        			var lot				= colArray[4];
        			var materialType 	= colArray[5]=="SubAssembly" ? "Product" : "Consumable";
        			var spec 			= colArray[6];
        			var maker 			= colArray[7];

        			var nRow = this.ds_consumable.rowposition;
        			var addRow = nRow;
        			if(i!=0){
        				var aRow = nRow + i;
        				if(this.ds_consumable.getRowType(aRow) == 2 || this.ds_consumable.getRowType(aRow) == 4){
        					addRow = aRow;
        				} else {
        					addRow = this.ds_consumable.addRow();
        				}
        			}

        			this.ds_consumable.setColumn(addRow, "COMPONENTITEMID", itemId);
        			this.ds_consumable.setColumn(addRow, "COMPONENTITEMVERSION", itemRev);
        			this.ds_consumable.setColumn(addRow, "COMPONENTITEMNAME", itemName);
        			this.ds_consumable.setColumn(addRow, "COMPONENTUOM", uom);
        			this.ds_consumable.setColumn(addRow, "MATERIALTYPE", materialType);
        			this.ds_consumable.setColumn(addRow, "ISREQUIREDMATERIAL", "N");
        			this.ds_consumable.setColumn(addRow, "ISALTERABLE", "N");
        			this.ds_consumable.setColumn(addRow, "USERLAYER", "");
        			this.ds_consumable.setColumn(addRow, "MULTIPLE", "1");

        			//2021-07-30 ???????????? Push ??????
        			if(materialType=="Product"){
        				this.ds_consumable.setColumn(addRow, "WIPSUPPLYTYPE", "Push");
        			} else {
        				this.ds_consumable.setColumn(addRow, "WIPSUPPLYTYPE", lot=="Y" ? "Push" : "OperationPull");
        			}

        			this.ds_consumable.setColumn(addRow, "SPEC", spec);
        			this.ds_consumable.setColumn(addRow, "MAKER", maker);

        			var userSequence		= this.ds_operation.getColumn(this.ds_operation.rowposition, "USERSEQUENCE");	 //????????????

        			this.ds_consumable.setColumn(addRow, "PLANTID", this.gf_getSiteType());
        			this.ds_consumable.setColumn(addRow, "PROCESSSEGMENTID", processSegmentId);
        			this.ds_consumable.setColumn(addRow, "OPERATIONID", operationId);
        			this.ds_consumable.setColumn(addRow, "USERSEQUENCE", userSequence);

        			//????????? ????????????ID??? RTR?????? ??????????????? 5??? ???????????? RTR?????? Y??????
        			// 2021-04-16 ???????????? RTR????????? ??????, ??????????????? 5??? ???????????? ????????? RTR Y?????? (????????? ??????)
        			//if(subSegmentId=="RTR" && itemId.substring(0,1)=="5"){
        			if(itemId.substring(0,1)=="5"){
        				this.ds_consumable.setColumn(addRow, "ISREQUIREDMATERIAL","Y");
        			} else {
        				this.ds_consumable.setColumn(addRow, "ISREQUIREDMATERIAL","");
        			}

        		}
        	}

        	if(sPopupId == "GRD_INSPECTION")	//??????SPEC ????????? : ???????????? ??????
        	{

        		for(var i=0; i<rtn.length; i++){
        			var colArray 		= rtn[i];
        			var itemId 			= colArray[0];
        			var itemName 		= colArray[1];
        			var itemRev 		= colArray[2];
        			var specType		= colArray[3];

        			var nRow = this.ds_operationSpec.rowposition;
        			var addRow = nRow;
        			if(i!=0){
        				var aRow = nRow + i;
        				if(this.ds_operationSpec.getRowType(aRow) == 2 || this.ds_operationSpec.getRowType(aRow) == 4){
        					addRow = aRow;
        				} else {
        					addRow = this.ds_operationSpec.addRow();
        				}
        			}
        			var processSegId 		= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        			this.ds_operationSpec.setColumn(addRow, "INSPITEMID", itemId);
        			this.ds_operationSpec.setColumn(addRow, "INSPITEMNAME", itemName);
        			this.ds_operationSpec.setColumn(addRow, "INSPITEMVERSION", itemRev);
        			this.ds_operationSpec.setColumn(addRow, "PROCESSSEGMENTID", processSegId);
        			this.ds_operationSpec.setColumn(addRow, "SPECTRANSTYPE", specType);
        			this.ds_operationSpec.setColumn(addRow, "INSPECTIONDEFID", "OperationInspection-OperationInspection");
        			this.ds_operationSpec.setColumn(addRow, "INSPECTIONDEFVERSION", "*");
        			this.ds_operationSpec.setColumn(addRow, "SPECCLASSID", "OperationSpec");
        			this.ds_operationSpec.setColumn(addRow, "DEFAULTCHARTTYPE", "");
        			this.ds_operationSpec.setColumn(addRow, "RESOURCETYPE", "ProcessSegmentID");

        		}
        	}


        	if(sPopupId == "GRD_DURABLE")	//????????? ????????? : ????????? ??????
        	{
        		for(var i=0; i<rtn.length; i++){
        			var colArray 		= rtn[i];
        			//var classType		= colArray[0];
        			var itemId 			= colArray[0];
        			var itemName 		= colArray[1];
        			var itemRev 		= colArray[2];
        			var durableId		= colArray[3];
        			var durableNm		= colArray[4];
        			var durableRev		= colArray[5];

        			var nRow = this.ds_durable.rowposition;
        			var addRow = nRow;
        			if(i!=0){
        				var aRow = nRow + i;
        				if(this.ds_durable.getRowType(aRow) == 2 || this.ds_durable.getRowType(aRow) == 4){
        					addRow = aRow;
        				} else {
        					addRow = this.ds_durable.addRow();
        				}
        			}

        			this.ds_durable.setColumn(addRow, "DURABLETYPE", 'Durable');
        			this.ds_durable.setColumn(addRow, "PRODUCTDEFID", itemId);
        			this.ds_durable.setColumn(addRow, "PRODUCTDEFNAME", itemName);
        			this.ds_durable.setColumn(addRow, "PRODUCTDEFVERSION", itemRev);
        			this.ds_durable.setColumn(addRow, "TOOLCODE", durableId);
        			this.ds_durable.setColumn(addRow, "TOOLNAME", durableNm);
        			this.ds_durable.setColumn(addRow, "TOOLVERSION", durableRev);
        			this.ds_durable.setColumn(addRow, "EQUIPMENTID", "*");
        			this.ds_durable.setColumn(addRow, "RESOURCECLASSID", "*");

        			this.ds_durable.setColumn(addRow, "VALIDSTATE", "Valid");
        			this.ds_durable.setColumn(addRow, "OPERATIONID", operationId);
        			this.ds_durable.setColumn(addRow, "PROCESSSEGMENTID", processSegmentId);
        			this.ds_durable.setColumn(addRow, "PROCESSSEGMENTVERSION", "*");
        			this.ds_durable.setColumn(addRow, "RESOURCECLASSID", "*");

        		}
        	}

        	if(sPopupId =="ITEM_COPY" ){

        	}
        }

        /**************************************************************************
         * 7. ?????? ??????(?????? ?????? ??????)
         **************************************************************************/
        /*
         * ?????? : ?????? ???????????? ????????? ??????
         */
        this.fn_formInit = function ()
        {
        	this.g_init = true;
        	this.searchDiv1.cbo_site.set_value(this.gf_getSiteType());
        	this.searchDiv1.cbo_validState.set_value("Valid");
        	this.searchDiv1.edt_item.set_value("");
        	this.searchDiv1.edt_item_cd.set_value("");
        	this.searchDiv1.edt_item_nm.set_value("");
        	this.div_work.form.tab_00.Tabpage4.set_tabbuttonwidth(0); //AOI ??? ????????????
        	this.div_work.form.tab_00.set_tabindex(0);
        }

        /*
         * ?????? : ???1. ?????? ??????
         */
        this.fn_searchTreeList = function ()
        {

        	this.ds_tree.clearData();
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validState.value);
        	var sSvcID 			= "selectTreeList";
        	var sController 	= "/bas02100/selectTreeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tree=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * ?????? ???????????? ?????? ?????????
         */
        this.fn_selectProductDEFInfo = function (rowPosition)
        {
        	this.ds_operation.set_enableevent(false);
        	var itemId 		= "";
        	var itemRev		= "";
        	var plantId		= "";
        	var validState 	= this.searchDiv1.cbo_validState.value;

        	if(rowPosition == -1){ //BOM??? ???????????? ????????? ???????????? Item?????? ??????
        		itemId 		= this.searchDiv1.edt_item.value;
        		itemRev		= this.searchDiv1.edt_item_cd.value;
        		plantId		= this.gf_getSiteType();
        	} else {
        		itemId 		= this.ds_tree.getColumn(rowPosition, "ASSEMBLYITEMID");
        		itemRev		= this.ds_tree.getColumn(rowPosition, "ASSEMBLYITEMVERSION");
        		plantId		= this.ds_tree.getColumn(rowPosition, "PLANTID");
        	}

        	this.ds_checkLot.clearData();

        	var sSvcID 			= "selectProductDEFInfo";
        	var sController 	= "/bas02100/selectProductDEFInfo.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_productDef=output1 ds_operation=output2 ds_checkLot=output3 ds_spec=output4";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("ITEMID"		, itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION"	, itemRev);
        		sArgs 			+= this.gfn_setParam("PLANTID"		, plantId);
        		sArgs 			+= this.gfn_setParam("VALIDSTATE"	, validState);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         * ???????????? : ??????
         */
        this.fn_searchProductDetail = function (rowPosition)
        {
        	var itemId 			= this.ds_operation.getColumn(rowPosition, "MAINPRODUCTID");
        	var itemRev			= this.ds_operation.getColumn(rowPosition, "MAINPRODUCTVERSION");
        	var operationId		= this.ds_operation.getColumn(rowPosition, "OPERATIONID");
        	var processSegId 	= this.ds_operation.getColumn(rowPosition, "PROCESSSEGMENTID");
        	var plantId			= this.ds_operation.getColumn(rowPosition, "PLANTID");
        	var userSeq			= this.ds_operation.getColumn(rowPosition, "USERSEQUENCE");

        	this.ds_consumable.clearData();
        	this.ds_operationSpec.clearData();
        	this.ds_durable.clearData();
        	this.ds_aoiLayer.clearData();

        	var sSvcID 			= "selectProductDetail";
        	var sController 	= "/bas02100/selectProductDetail.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_consumable=output1 "
        						+ "ds_operationSpec=output2 "
        						+ "ds_durable=output3 "
        						+ "ds_aoiLayer=output4";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("PLANTID"			, plantId);
        		sArgs 			+= this.gfn_setParam("ITEMID"			, itemId);
        		sArgs 			+= this.gfn_setParam("ITEMVERSION"		, itemRev);
        		sArgs 			+= this.gfn_setParam("OPERATIONID"		, operationId);
        		sArgs 			+= this.gfn_setParam("PROCESSSEGMENTID"	, processSegId);
        		sArgs 			+= this.gfn_setParam("USERSEQUENCE"		, userSeq);
        		sArgs 			+= this.gfn_setParam("ATTRIBUTECLASS"	, "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_comboInit = function ()
        {
        	/* Site ?????? ?????? */
        	this.basfn_setCustomQueryCmb(this.searchDiv1.cbo_site // Object
        								, "selectSiteList,,Y,A" // OPTION
        								, null);	  // ?????? ????????????
        	/* ?????? ID ????????? DS */
        	this.ds_factory.clearData();
        	var sSvcID 			= "selectSiteList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_factory=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectSiteList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	//????????????:UOM
        	var sSvcID 			= "selectUOM";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_uom=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectUOMList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	//?????? ??????
        	var sSvcID 			= "selectCheckManager";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_checkUser=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectCheckManager");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         * Dataset ???????????? ?????? ??????
         */
        this.fn_checkDsUpdate = function(type)
        {
        	var bOk = true;
        	if(type=="A"){
        		if (  this.gfn_dsIsUpdated(this.ds_productDef)
        		   || this.gfn_dsIsUpdated(this.ds_operation)
        		   || this.gfn_dsIsUpdated(this.ds_consumable)
        		   || this.gfn_dsIsUpdated(this.ds_operationSpec)
        		   || this.gfn_dsIsUpdated(this.ds_durable)
        		   || this.gfn_dsIsUpdated(this.ds_aoiLayer)
        		   ) {
        			bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		}
        	} else {
        		if (  this.gfn_dsIsUpdated(this.ds_consumable)
        		   || this.gfn_dsIsUpdated(this.ds_operationSpec)
        		   || this.gfn_dsIsUpdated(this.ds_durable)
        		   || this.gfn_dsIsUpdated(this.ds_aoiLayer)
        		   ) {
        			bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		}
        	}
        	return bOk;
        }

        /*
         * ????????? ??????(?????? ??? ??????)
         */
        this.fn_addDetail = function(obj,e)
        {
        	var objId 				= obj.id.replace("btn_add","");
        	var dsObj 				= this.objects["ds_"+objId];
        	if(dsObj==null)return;
        	var processSegmentId	= this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTID");
        	var operationId			= this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID");
        	var operationRowType	= this.ds_operation.getRowType(this.ds_operation.rowposition);
        	var subSegmentId		= this.ds_operation.getColumn(this.ds_operation.rowposition, "SUBSEGMENTID");	 //????????????ID
        	var userSequence		= this.ds_operation.getColumn(this.ds_operation.rowposition, "USERSEQUENCE");	 //????????????

        	//?????????????????? ????????????
        	if(operationRowType==2 || operationRowType==0){
        		this.gfn_Message("NoSelectDataSaveAndProceed", "", "warning", "ok");
        		return;
        	}

        	var nRow 				= dsObj.addRow();

        	switch (objId){
        		//??????
        		case "consumable":
        			dsObj.setColumn(nRow, "WIPSUPPLYTYPE","Push");
        			dsObj.setColumn(nRow, "PLANTID",this.gf_getSiteType());
        			dsObj.setColumn(nRow, "ISREQUIREDMATERIAL","N");
        			dsObj.setColumn(nRow, "ISALTERABLE","N");
        			dsObj.setColumn(nRow, "PROCESSSEGMENTID",processSegmentId);
        			dsObj.setColumn(nRow, "OPERATIONID",operationId);
        			dsObj.setColumn(nRow, "USERSEQUENCE",userSequence);

        			//????????? ????????????ID??? RTR?????? RTR?????? Y??????
        			if(subSegmentId=="RTR"){
        			//	dsObj.setColumn(nRow, "ISREQUIREDMATERIAL","Y");
        			}
        		break;

        		//??????Spec
        		case "operationSpec":
        			var infoObj = this.div_work.form.tab_00.Tabpage2.form.cbo_barcharinfo;
        			dsObj.setColumn(nRow, "PROCESSSEGMENTID",processSegmentId);
        			dsObj.setColumn(nRow, "INSPECTIONDEFID","OperationInspection-OperationInspection");
        			dsObj.setColumn(nRow, "INSPECTIONDEFVERSION","*");
        			dsObj.setColumn(nRow, "SPECCLASSID","OperationSpec");
        			dsObj.setColumn(nRow, "DEFAULTCHARTTYPE",infoObj.value);
        			dsObj.setColumn(nRow, "RESOURCETYPE","ProcessSegmentID");
        		break;

        		//?????????
        		case "durable":
        			dsObj.setColumn(nRow, "PROCESSSEGMENTID",processSegmentId);
        			dsObj.setColumn(nRow, "PROCESSSEGMENTVERSION","*");
        			dsObj.setColumn(nRow, "OPERATIONID",operationId);
        			dsObj.setColumn(nRow, "EQUIPMENTID","*");
        			dsObj.setColumn(nRow, "RESOURCECLASSID","*");
        			dsObj.setColumn(nRow, "VALIDSTATE","Valid");

        		break;

        		//AOI
        		case "aoiLayer":
        			dsObj.setColumn(nRow, "PROCESSSEGMENTID",processSegmentId);
        			dsObj.setColumn(nRow, "PROCESSSEGMENTVERSION","*");
        			dsObj.setColumn(nRow, "OPERATIONID",operationId);
        		break;
        	}

        };

        /*
         * ????????? ??????
         */
        this.fn_delDetail = function(obj,e)
        {
        	var objId 				= obj.id.replace("btn_del","");
        	var dsObj 				= this.objects["ds_"+objId];
        	if(dsObj==null)return;
        	var rowposition			= dsObj.rowposition;

        	if(rowposition < 0 ){
        		this.gfn_Message("CHECKREMOVETOOLDATA", "", "warning", "ok");
        		return;
        	}

        	if(!this.gfn_Message("IsDeleted", null, "conf", "yesno")){
        		return;
        	}

        	dsObj.deleteRow(rowposition);


        };

        /*
         * ??????Spec ????????? ????????? ?????? ?????????
         */
        this.fn_changeOperationSpec = function()
        {
        	var dsCount = this.ds_operationSpec.rowcount;
        	var infoObj = this.div_work.form.tab_00.Tabpage2.form.cbo_barcharinfo;
        	if(dsCount==0){
        		infoObj.set_value("XBARR");
        		infoObj.set_readonly(false);
        	} else {
        		var nRow = this.ds_operationSpec.findRowExpr("DEFAULTCHARTTYPE != $0", 0, -1, [null]);
        		var charType = "XBARR";

        		if(nRow>=0){
        			charType = this.ds_operationSpec.getColumn(nRow, "DEFAULTCHARTTYPE");
        			infoObj.set_readonly(true);
        		} else {
        			infoObj.set_readonly(false);
        		}
        		infoObj.set_value(charType);
        	}
        }

        /*
         *	????????? ????????? RTR????????? Roll??? ?????? ????????? ?????? ??????
         */
        this.fn_setRtrSht = function()
        {
        	var subSegmentId		= this.ds_operation.getColumn(0, "SUBSEGMENTID");	 	 //????????? ?????? ????????????ID
        	var processSegmentName	= this.ds_operation.getColumn(0, "PROCESSSEGMENTNAME");	 //????????? ?????? ?????????

        	//???????????? ????????????ID??? RTR?????? Roll ????????? Sheet??? ????????????
        	if(subSegmentId=="RTR"){
        		this.ds_productDef.setColumn(0, "RTRSHT", "RTR");
        	} else {
        		this.ds_productDef.setColumn(0, "RTRSHT", "SHT");
        	}
        }

        /*
         *	???????????? ?????? ??????
         */
        this.fn_genNumber = function(obj,e)
        {
        	if(!this.gfn_Message("generateUserSequence", null, "conf", "yesno")) return;

        	var rowCount = this.ds_operation.rowcount;
        	for(var i=1; i <=rowCount; i++){
        		var maxSeq 		= i * 10;
        		this.ds_operation.setColumn(i-1, "USERSEQUENCE", maxSeq);
        	}
        };


        /**************************************************************************
         * 8. ?????????
         ***************************************************************************/
        this.div_work_tab_onchanged = function(obj,e)
        {
        	if(e.postindex==0){
        		this.tab_search.set_tabindex(0);
        	} else {
        		this.tab_search.set_tabindex(1);
        		var addParam = "ALLVIEWS|PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        			/* ???????????? ?????? */
        			this.basfn_setCustomQueryCmb(this.searchDiv2.cboSearchType // Object
        								, "selectCustomCodeList,,Y,A" // OPTION
        								, this.gfn_setParam("ADD_PARAM", addParam));	  // ?????? ????????????
        			this.searchDiv2.cboSearchType.set_value("ALLVIEWS");
        	}
        };

        /*
         * BOM Tree Node Control
         */
        this.ds_tree_canrowposchange = function(obj,e)
        {
        	if(e.newrow < 0 || e.newrow == e.oldrow) return;
        	var classID = this.ds_tree.getColumn(e.newrow, "MASTERDATACLASSID");
        	if(classID != "Product" && classID != "SubAssembly" )
        	{
        		return false;
        	}
        };

        /*
         * ???????????? : ???????????? ?????? ??????
         */
        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00105"); //?????? ??????
        };

        /*
         * ????????? : ????????????
         */
        this.ds_operation_canrowposchange = function(obj,e)
        {
        	if(!this.fn_checkDsUpdate("B")){
        		return false;
        	}
        };

        /*
         * ?????? ????????? : ?????????
         */
        this.fn_addOperation = function(obj,e)
        {
        	if(this.ds_productDef.rowcount< 1) return;
        	var dsObj = this.ds_operation;
        	if(dsObj == null) return;

        	var rowPosition = this.ds_productDef.rowposition;
        	var masterdataClassId = this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFCLASSID");
        	var itemId		= this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFID");
        	var itemVersion = this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFVERSION");
        	var maxSeq 		= this.nfn_nvl(dsObj.getMax("USERSEQUENCE"),0);
        	var userSeq 	= this.nfn_nvl(dsObj.getColumn(dsObj.rowposition,"USERSEQUENCE"),0);

        	var userSequence= maxSeq + 10;
        	var userSequence2= userSeq + 1;

        	if(masterdataClassId=="SubAssembly" || masterdataClassId=="Product"){
        		var row = dsObj.insertRow(dsObj.rowposition+1);
        		dsObj.setColumn(row,"PLANTID",this.gf_getSiteType());
        		dsObj.setColumn(row,"USERSEQUENCE",maxSeq==userSeq ? userSequence : userSequence2);
        		dsObj.setColumn(row,"PROCESSUOM","PCS");
        		dsObj.setColumn(row,"VALIDSTATE","Valid");
        		dsObj.setColumn(row,"PATHTYPE","StartEnd");
        		dsObj.setColumn(row,"OPERATIONSEQUENCE","1");
        		dsObj.setColumn(row,"PROCESSDEFTYPE","Main");
        		dsObj.setColumn(row,"VERSIONSTATE","Active");

        		//????????? Row??? ????????? ????????? Y
        		if(row==0){
        			dsObj.setColumn(row,"ISREQUIREDMATERIAL","Y");
        		}
        	} else {
        		this.gfn_Message("WrongRegistBom", "", "warning", "ok");
        	}
        };

        /*
         * ?????? ????????? : ?????????
         */
        this.fn_deleteOperation = function(obj,e)
        {
        	var dsObj = this.ds_operation;
        	if(dsObj == null) return;
        	var isChkCnt = dsObj.getColIndex("CHK");
        	var chkCnt = isChkCnt==-1 ? -1 : dsObj.getCaseCount("CHK=='1'");
        	var rowCount = dsObj.rowcount;
        	var bOk = true;
        	var dsPosition = dsObj.rowposition;

        	//????????? ?????????
        	if(chkCnt==-1){
        		if(dsPosition < 0) {
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		}
        	}

        	var wrkTp = dsObj.getRowType(dsObj.rowposition);

        	//????????? ???????????? ??????
        	if(wrkTp != Dataset.ROWTYPE_INSERT){
        		if(this.ds_checkLot.rowcount > 0){ //LOT??? ?????? (??????????????????)
        			this.gfn_Message("CantDeleteLotRouting", "", "warning", "ok");
        			return;
        		} else {
        			bOk = this.gfn_Message("DeleteLinkedItemBySegment", null, "conf", "yesno");
        			if(!bOk){return}
        		}
        	}
        	dsObj.deleteRow(dsPosition);
        };

        /*
         * ?????? ???????????? ?????? ?????????
         */
        this.ds_tree_onrowposchanged = function(obj,e)
        {
        	if(e.newrow<0) return;
        	if(e.oldrow != e.newrow){
        		this.fn_selectProductDEFInfo(e.newrow);
        	}
        };

        /*
         * ?????????????????? ?????? ???????????? ?????????????????? ?????? ??????
         */
        this.fn_chkMaterialType = function (data)
        {
        	if(data == "GUSSETPLATE"
        	 || data == "SHIELD"
        	 || data == "GULE"
        	 || data == "COVERLAY"
        	 || data == "OTHER"){
        		return "combo";
        	 } else {
        		return "none";
        	 }
        }

        /*
         * ?????????????????? ?????? ???????????? ?????????????????? ?????? ??????
         */
        this.fn_chkFormulaId = function ()
        {
        	var rowPosition 	= this.ds_productDef.rowposition;
        	var materialType 	= this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFCLASSID");
        	var lookupType 		= "";
        	if(materialType=="Product"){
        		lookupType="BOMProducGroup";
        	} else if(materialType=="SubAssembly"){
        		lookupType="BOMSubAssemblyGroup";
        	}

        	//????????????:UOM
        	var sSvcID 			= "selectBom";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_bomList=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectCodeList");
        		sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", lookupType);
        		sArgs 			+= this.gfn_setParam("CMB_TYPE", "null");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         * ??????????????? ????????? ?????? ?????????
         */
        this.div_work_tab_00_Tabpage1_grd_consumable_oncloseup = function(obj,e)
        {
        	this.div_work.form.tab_00.Tabpage1.form.grd_consumable.updateToDataset();
        };

        /*
         * ??????????????? ????????? ?????? ?????????
         */
        this.ds_operation_oncolumnchanged = function(obj,e)
        {
        	if (e.newvalue == e.oldvalue)
        	{
        		return;
        	}

        	//????????? ?????? ??????????????? RTR??? ?????? ??????
        	if (e.columnid == "PROCESSSEGMENTID" && e.row == 0)
        	{
        		if (e.newvalue == null)
        		{
        			return;
        		} else {
        			this.fn_setRtrSht();
        		}
        	}

        	//2021-07-06 ??????2??? ??????????????? #4  - ????????? ?????? ??????
        	//????????? ???????????? ??????????????? ????????????
        	if(e.columnid=="VALIDSTATE"){
        		if(e.newvalue=="Invalid"){
        			this.ds_checkNowParam.clearData();
        			this.ds_checkNow.clearData();
        			this.ds_checkNowParam.addRow();
        			this.ds_checkNowParam.setColumn(0, "ITEMID", this.ds_operation.getColumn(e.row, "MAINPRODUCTID"));
        			this.ds_checkNowParam.setColumn(0, "ITEMVERSION", this.ds_operation.getColumn(e.row, "MAINPRODUCTVERSION"));
        			this.ds_checkNowParam.setColumn(0, "PROCESSSEGMENTID", this.ds_operation.getColumn(e.row, "PROCESSSEGMENTID"));
        			this.ds_checkNowParam.setColumn(0, "USERSEQUENCE", this.ds_operation.getColumn(e.row, "USERSEQUENCE"));

        			var sSvcID 			= "selectCheckLot";
        			var sController 	= "/bas02100/selectCheckLot.do";
        			var sInDatasets 	= "INPUT=ds_checkNowParam";
        			var sOutDatasets 	= "ds_checkNow=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);

        			if(this.ds_checkNow.rowcount>0){
        				this.gfn_Message("CantInvalidProcess", "", "warning", "ok");
        				this.ds_operation.setColumn(e.row, "VALIDSTATE", "Valid");
        			}
        		}
        	}
        };

        /*
         * ??????????????? ????????? ????????? ??????
         */
        this.fn_BOMInit  = function(row, bomFormularId)
        {
        	var rowPosition 	= this.ds_productDef.rowposition;
        	var materialType 	= this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFCLASSID");

        	var dsObj 			= this.ds_bom;
        	var dsConsumable	= this.ds_consumable;
        	var fRow 			= dsObj.findRow("ID", bomFormularId);
        	var defaultVar1		= dsObj.getColumn(fRow, "DEFAULTVAR1");
        	var defaultVar2		= dsObj.getColumn(fRow, "DEFAULTVAR2");
        	var defaultVar3		= dsObj.getColumn(fRow, "DEFAULTVAR3");
        	var defaultVar4		= dsObj.getColumn(fRow, "DEFAULTVAR4");
        	var defaultVar5		= dsObj.getColumn(fRow, "DEFAULTVAR5");
        	var isEditable1		= dsObj.getColumn(fRow, "ISEDITABLE1");
        	var isEditable2		= dsObj.getColumn(fRow, "ISEDITABLE2");
        	var isEditable3		= dsObj.getColumn(fRow, "ISEDITABLE3");
        	var isEditable4		= dsObj.getColumn(fRow, "ISEDITABLE4");
        	var isEditable5		= dsObj.getColumn(fRow, "ISEDITABLE5");

        	dsConsumable.setColumn(row, "ISEDITABLE1", isEditable1);
        	dsConsumable.setColumn(row, "ISEDITABLE2", isEditable2);
        	dsConsumable.setColumn(row, "ISEDITABLE3", isEditable3);
        	dsConsumable.setColumn(row, "ISEDITABLE4", isEditable4);
        	dsConsumable.setColumn(row, "ISEDITABLE5", isEditable5);

        	dsConsumable.setColumn(row, "VARIABLE1", defaultVar1);
        	dsConsumable.setColumn(row, "VARIABLE2", defaultVar2);
        	dsConsumable.setColumn(row, "VARIABLE3", defaultVar3);
        	dsConsumable.setColumn(row, "VARIABLE4", defaultVar4);
        	dsConsumable.setColumn(row, "VARIABLE5", defaultVar5);

        	//?????? ??????
        	this.fn_BOMcalculate(row, bomFormularId);
        }

        /*
         * ?????? ?????? ????????? BOM ???????????? ???????????? ?????? (AS-IS??? ??? ??????.....??????....?????? ????????? ?????????)
         */
        this.fn_changeBOMValue = function()
        {
        	var rowPosition 	= this.ds_productDef.rowposition;
        	var materialType 	= this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFCLASSID");
        	var pnlSizeY		= this.nfn_nvl(this.ds_productDef.getColumn(rowPosition, "PNLSIZEYAXIS"),0);
        	var pcsPnl			= this.nfn_nvl(this.ds_productDef.getColumn(rowPosition, "PCSPNL"),0);
        	var val13_1			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL13_1"),0);		//????????????1(C)
        	var val13_2			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL13_2"),0);		//????????????1(S)
        	var val14_1			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL14_1"),0);		//????????????2(C)
        	var val14_2			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL14_2"),0);		//????????????2(S)
        	var val15_1			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL15_1"),0);		//????????????3(C)
        	var val15_2			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL15_2"),0);		//????????????3(S)
        	var auSize			= this.nfn_nvl(this.ds_spec.getColumn(rowPosition, "VAL3"),0);		//???????????????
        	var dsObj 			= this.ds_bom;
        	var fRow 			= -1;

        	/*
        	trace("val13_1== " + val13_1);
        	trace("val13_2== " + val13_2);
        	trace("val14_1== " + val14_1);
        	trace("val14_2== " + val14_2);
        	trace("val15_1== " + val15_1);
        	trace("val15_2== " + val15_2);
        	*/

        	fRow = dsObj.findRow("ID", "BOM_P_0000001");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000002");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000003");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000004");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000006");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);

        	fRow = dsObj.findRow("ID", "BOM_P_0000007");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000009");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000011");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000012");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000013");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000014");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000016");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000017");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000018");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);

        	fRow = dsObj.findRow("ID", "BOM_P_0000019");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", (nexacro.toNumber(val13_1) + nexacro.toNumber(val13_2)));
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        		dsObj.setColumn(fRow, "DEFAULTVAR5", auSize);

        	fRow = dsObj.findRow("ID", "BOM_P_0000020");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", (nexacro.toNumber(val14_1) + nexacro.toNumber(val14_2)));
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        		dsObj.setColumn(fRow, "DEFAULTVAR5", auSize);

        	fRow = dsObj.findRow("ID", "BOM_P_0000021");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", (nexacro.toNumber(val15_1) + nexacro.toNumber(val15_2)));
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        		dsObj.setColumn(fRow, "DEFAULTVAR5", auSize);

        	fRow = dsObj.findRow("ID", "BOM_P_0000022");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);
        	fRow = dsObj.findRow("ID", "BOM_P_0000023");
        		dsObj.setColumn(fRow, "DEFAULTVAR3", pcsPnl);

        	fRow = dsObj.findRow("ID", "BOM_SA_0000001");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        	fRow = dsObj.findRow("ID", "BOM_SA_0000002");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        	fRow = dsObj.findRow("ID", "BOM_SA_0000004");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        	fRow = dsObj.findRow("ID", "BOM_SA_0000008");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        	fRow = dsObj.findRow("ID", "BOM_SA_0000009");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        	fRow = dsObj.findRow("ID", "BOM_SA_0000020");
        		dsObj.setColumn(fRow, "DEFAULTVAR1", pnlSizeY);
        }

        //BOM ????????? ???????????? ??????
        this.fn_BOMcalculate = function(row, bomFormularId)
        {
        	var rowPosition 	= this.ds_productDef.rowposition;
        	var materialType 	= this.ds_productDef.getColumn(rowPosition, "PRODUCTDEFCLASSID");

        	var dsObj 			= this.ds_bom;
        	var dsConsumable	= this.ds_consumable;
        	var fRow 			= dsObj.findRow("ID", bomFormularId);
        	var formula 		= dsObj.getColumn(fRow, "FORMULA");
        	var v1				= dsConsumable.getColumn(row, "VARIABLE1");
        	var v2				= dsConsumable.getColumn(row, "VARIABLE2");
        	var v3				= dsConsumable.getColumn(row, "VARIABLE3");
        	var v4				= dsConsumable.getColumn(row, "VARIABLE4");
        	var v5				= dsConsumable.getColumn(row, "VARIABLE5");


        	if(this.nfn_isNull(formula) || formula=="??????"){
        		return;
        	} else {
        		formula = formula.replace("v1", nexacro.toNumber(v1,"0"));
        		formula = formula.replace("v2", nexacro.toNumber(v2,"0"));
        		formula = formula.replace("v3", nexacro.toNumber(v3,"0"));
        		formula = formula.replace("v4", nexacro.toNumber(v4,"0"));
        		formula = formula.replace("v5", nexacro.toNumber(v5,"0"));
        		trace("---------------------------------------");
        		trace(formula);
        		var total = eval(formula);
        		trace("---------------------------------------");
        		total = (new nexacro.Decimal((total*100000))) / 100000;
        		trace(total);
        		//total = nexacro.round(total, 5); //????????? 5????????? ???????????????
        		total = nexacro.floor(total, 5); //????????? 5????????? 2021-04-15 ??????????????? ??????
        		dsConsumable.setColumn(row, "COMPONENTQTY", total);
        	}
        }

        /*
         * ??????????????? ??????ID ????????????
         */
        this.div_work_grd_operation_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "PROCESSSEGMENTID")) {
        		this.fn_openPop("GRD_OPERATION","P00206"); //?????? ??????
        	}
        };

        /*
         * ??????????????? ????????? ????????? AOI/VRS ????????????
         */
        this.ds_operation_onrowposchanged = function(obj,e)
        {
        	var processSegmentName 	= this.nfn_nvl(this.ds_operation.getColumn(this.ds_operation.rowposition, "PROCESSSEGMENTNAME"),"").toUpperCase();
        	var isSpec				= this.ds_operation.getColumn(this.ds_operation.rowposition, "ISREQUIREDOPERATIONSPEC");
        	var isConsumable		= this.ds_operation.getColumn(this.ds_operation.rowposition, "ISREQUIREDMATERIAL");
        	var isDurable	 		= this.ds_operation.getColumn(this.ds_operation.rowposition, "ISREQUIREDTOOL");

        	if(processSegmentName.indexOf("AOI")>= 0 || processSegmentName.indexOf("VRS")>= 0){
        		this.div_work.form.tab_00.Tabpage4.set_tabbuttonwidth(100);
        		this.div_work.form.tab_00.set_tabindex(3);
        	} else {
        		this.div_work.form.tab_00.Tabpage4.set_tabbuttonwidth(0);
        		//AOI?????? ?????? ????????? ?????????
        		if(isConsumable=="Y"){
        			this.div_work.form.tab_00.set_tabindex(0);
        		} else {
        			if(isSpec=="Y"){
        				this.div_work.form.tab_00.set_tabindex(1);
        			} else {
        				if(isDurable=="Y"){
        					this.div_work.form.tab_00.set_tabindex(2);
        				} else {
        					this.div_work.form.tab_00.set_tabindex(0);
        				}
        			}
        		}

        		if(this.div_work.form.tab_00.tabindex == 3){
        			this.div_work.form.tab_00.set_tabindex(0);
        		}
        	}
        	if(e.newrow < 0 ) return;
        	this.fn_searchProductDetail(e.newrow);
        };

        /*
         * ??????????????? ?????? ?????????
         */
        this.div_work_tab_00_Tabpage1_grd_consumable_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "COMPONENTITEMID")) {
        		this.fn_openPop("GRD_CONSUMABLE",""); //?????? ??????
        	}
        	if (this.nfn_isEqualCol(obj, e.cell, "ALTITEM")) {
        		this.fn_openPop("GRD_ITEM",""); //???????????? ??????
        	}
        };

        /*
         * ??????SPEC ????????? ?????? ?????????
         */
        this.div_work_tab_00_Tabpage2_grd_operationSpec_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "INSPITEMNAME")) {
        		this.fn_openPop("GRD_INSPECTION","P00136"); //?????? ??????
        	}
        };

        /*
         * ????????? ????????? ?????? ?????????
         */
        this.div_work_tab_00_Tabpage3_grd_durable_onexpandup = function(obj,e)
        {
        	var operationId			= this.ds_operation.getColumn(this.ds_operation.rowposition, "OPERATIONID");
        	var productDefId		= this.ds_productDef.getColumn(0, "PRODUCTDEFID");
        	var productDefVersion	= this.ds_productDef.getColumn(0, "PRODUCTDEFVERSION");
        	var productDefName		= this.ds_productDef.getColumn(0, "PRODUCTDEFNAME");
        	var plantId				= this.searchDiv1.cbo_site.value;

        	if(e.row < 0) return;

        	/*
        	if (this.nfn_isEqualCol(obj, e.cell, "PRODUCTDEFID")) {
        		var popupId = "GRD_DURABLE";
        		var oArg = {};
        		oArg.toolCode 		= this.ds_durable.getColumn(e.row,"TOOLCODE");
        		oArg.toolName 		= this.ds_durable.getColumn(e.row,"TOOLNAME");
        		oArg.ProdDefID 		= productDefId;
        		oArg.ProdDefVer 	= productDefVersion;
        		oArg.ProdDefName 	= productDefName;
        		oArg.plantID 		= plantId;
        		oArg.durableClass	= " ";
        		oArg.operationID 	= operationId;
        		oArg.ds_result 		= this.ds_resultDurable;
        		this.gfn_openPopup(popupId,"bas::BAS02100P3.xfdl",oArg,"width=800,height=700");
        	}*/
        	this.fn_openPop("GRD_DURABLE","P00198"); //?????? ??????

        };

        /*
         * ?????????????????? ????????? ??????Chartset ?????? ??????(????????? ????????????)
         */
        this.div_work_tab_00_Tabpage2_cbo_barcharinfo_onitemchanged = function(obj,e)
        {
        	for(var i=0; i<this.ds_operationSpec.rowcount;i++){
        		this.ds_operationSpec.setColumn(i, "DEFAULTCHARTTYPE", e.postvalue);
        	}
        };

        //Routing ?????? ??????
        this.fn_copyProduct = function(obj,e)
        {
        	/*
        	var dsObj = this.ds_tree;
        	if(dsObj.rowcount <= 0 ){
        		this.gfn_Message("InputProudctInfo", "", "warning", "ok");
        		return;
        	}
        	*/
        	var dsObj = this.ds_productDef;
        	var dsPosition = 0;
        	var itemId = dsObj.getColumn(dsPosition,"PRODUCTDEFID");
        	var itemRev = dsObj.getColumn(dsPosition,"PRODUCTDEFVERSION");

        	if(this.nfn_isNull(itemId) || this.nfn_isNull(itemRev)){
        		this.gfn_Message("InputProudctInfo", "", "warning", "ok");
        		return;
        	}
        	this.fn_openPop("ITEM_COPY","ITEM_COPY", null); //??????
        };

        //???????????? ?????? ?????? ????????? ??????
        this.fn_warehouse = function(obj,e)
        {
        	var dsObj = this.ds_productDef;
        	var dsPosition = 0;
        	var itemId = dsObj.getColumn(dsPosition,"PRODUCTDEFID");
        	var itemRev = dsObj.getColumn(dsPosition,"PRODUCTDEFVERSION");

        	if(this.nfn_isNull(itemId) || this.nfn_isNull(itemRev)){
        		this.gfn_Message("InputProudctInfo", "", "warning", "ok");
        		return;
        	}
        	this.fn_openPop("ITEM_WAREHOUSE","ITEM_WAREHOUSE", null); //???????????? ??????
        };

        //?????? DS ??? ?????? ????????? ??????
        this.ds_consumable_oncolumnchanged = function(obj,e)
        {
        	//????????? ????????? ?????????
        	if (e.columnid == "BOMFORMULAID" ){
        		this.fn_BOMInit(e.row, e.newvalue);
        	}

        	//BOM ????????? ????????? ?????? ????????????
        	if(   e.columnid == "VARIABLE1"
        	   || e.columnid == "VARIABLE2"
        	   || e.columnid == "VARIABLE3"
        	   || e.columnid == "VARIABLE4"
        	   || e.columnid == "VARIABLE5"
            ){
        		//?????? ??????
        		var formularId = obj.getColumn(e.row, "BOMFORMULAID");
        		this.fn_BOMcalculate(e.row, formularId);
        	}

        	//PSR??? ???????????? ????????? ??? ?????????
        	if (e.columnid == "MATERIALDETAILTYPE" ){
        		if(e.newvalue!="PSR"){
        			obj.setColumn(e.row, "PSRPRINTTYPE", "");
        		}
        	}
        };

        //?????? ????????? ?????? ?????? ??????
        this.tab_work_Tabpage1_btn_xlUp_grd_basIdclass_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_operation))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"????????? ????????? ????????? ?????? ???????????? ????????? ?????? ???????????????."
        		if(btn == false) return;
        	}


        	if(this.ds_checkLot.rowcount > 0){ //LOT??? ?????? (??????????????????)
        		this.gfn_Message("CantDeleteLotRouting", "", "warning", "ok");
        		return;
        	} else {
        		var bOK = this.gfn_Message("IsOkIntializeGrid", null, "conf", "yesno");//???????????? ????????? ???????????????????
        		if (!bOK) return;
        		this.ds_operation.set_enableevent(false);
        		for(var i=this.ds_operation.rowcount+1; i>=0; i--){
        			this.ds_operation.deleteRow(i);
        		}
        	}

        	this.Mode = "Excel";
        	this.ds_operationExcel.clearData();
        	this.gfn_import_excel("ds_operationExcel", "fn_excel_success", "fn_excel_fail", "B1", "B2");
        };


        /*
         *	?????? ????????? ?????? ???
         */
        this.fn_excel_fail = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        	this.ds_operation.set_enableevent(true);
        };

        /*
         *	?????? ????????? ??????...
         */
        this.fn_excel_success = function ()
        {
        	this.ds_operation.set_enableevent(false);
        	var dsObj = this.ds_operation;
        	var dsObjExcel = this.ds_operationExcel;

        	if(dsObjExcel.rowcount > 0 ){
        		this.fn_makeExcelData();
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}
        };

         //???????????? ?????????????????? ????????? ????????? ?????? ??????
         this.fn_makeExcelData = function()
         {
         	var sSvcID 			= "uploadRoutingExcel";
         	var sController 	= "/bas02100/uploadRoutingExcel.do";
         	var sInDatasets 	= "INPUT=ds_operationExcel";
         	var sOutDatasets  	= "ds_operationExcelOut=output";
         	var sArgs 		  	= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBackExcelData", true, true);
         }

         this.fn_callBackExcelData = function (trId, errCD, errMsg)
         {
         	if (errCD < 0)
         	{
         		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
         	} else {
        		for(var i=0; i<this.ds_operationExcelOut.rowcount; i++){
        			var addRow = this.ds_operation.addRow();
        			this.ds_operation.copyRow(addRow,this.ds_operationExcelOut,i);
        		}
        		this.fn_setRtrSht();
         	}
        	this.ds_operation.set_enableevent(true);
         }

        this.tab_search_Tabpage1_edt_item_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.ds_search.setColumn(0,"PRODUCTDEFID",obj.value);
        		this.tab_search_Tabpage1_btnProductCode_onclick();
        	}
        };


        //BOM Tree ?????? ?????? ?????????
        this.div_work_treeRouting_oncellclick = function(obj,e)
        {
        	if(e.row<0) return;
        	var classID = this.ds_tree.getColumn(e.row, "MASTERDATACLASSID");
        	if(classID != "Product" && classID != "SubAssembly" )
        	{
        		return false;
        	}

        	this.fn_selectProductDEFInfo(e.row);
        };

        this.ds_operation_cancolumnchange = function(obj,e)
        {

        };

        this.div_work_grd_operation_oncloseup = function(obj,e)
        {
        	this.div_work.form.grd_operation.updateToDataset();
        };


        this.ds_operationSpec_oncolumnchanged = function(obj,e)
        {
        	var specType 	= obj.getColumn(e.row, "SPECTRANSTYPE");
        	var lsl 		= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "LSL"), "0"));
        	var sl 			= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "SL"), "0"));
        	var usl 		= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "USL"), "0"));
        	var thickness 	= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "COPPERTHICKNESS"), "0"));

        	if(specType=="IMPEDANCE"){ 	//???????????? ?????????
        		var ousl = usl==0 ? nexacro.round(sl * 1.1, 2) : usl;
        		var olsl = lsl==0 ? nexacro.round(sl * 0.9, 2) : lsl;
        		if(e.columnid=="SL"){
        			obj.setColumn(e.row, "OSL", sl);
        			obj.setColumn(e.row, "OUSL", ousl);
        			obj.setColumn(e.row, "OLSL", olsl);
        		} else if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        		} else if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", olsl);
        		}
        	} else if(specType=="COPPERIZE"){	//???????????????
        		var ousl = nexacro.round(((thickness * 36) + usl + 3), 2);
        		var olsl = nexacro.round(((thickness * 36) + lsl - 3), 2);
        		if(e.columnid=="SL" || e.columnid=="COPPERTHICKNESS"){
        			obj.setColumn(e.row, "OUSL", ousl);
        			obj.setColumn(e.row, "OLSL", olsl);
        			obj.setColumn(e.row, "OSL", nexacro.floor((((thickness * 36) + usl + 3) + ((thickness * 36) + lsl - 3)) / 2), 5);
        		} else if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        		} else if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", olsl);
        		}
        	} else if(specType=="CO2HOLL"){	//????????????
        		var ousl = nexacro.round(((sl + 30) * 1.2) * 1000, 2);
        		var olsl = nexacro.round(((sl + 30) * 0.8) * 1000, 2);
        		var osl	 = nexacro.round(((sl + 30)      ) * 1000, 2);

        		if(e.columnid=="SL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        			obj.setColumn(e.row, "OLSL", olsl);
        			obj.setColumn(e.row, "OSL",  osl);
        		} else if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", ousl);
        		} else if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", olsl);
        		}
        	} else { //?????????
        		if(e.columnid=="SL"){
        			obj.setColumn(e.row, "OSL", sl);
        		}
        		if(e.columnid=="USL"){
        			obj.setColumn(e.row, "OUSL", usl);
        		}
        		if(e.columnid=="LSL"){
        			obj.setColumn(e.row, "OLSL", lsl);
        		}
        	}
        };


        this.fn_InspType = function (data)
        {
        	var editType = "none";

        	if(!this.nfn_isNull(this.ds_checkUser.getColumn(0, "USER_ID"))){ //????????? ????????? ??????Spec ?????? ????????????
        		if(data == "COPPERIZE"){ //??????????????????????????? ?????? ??????
        			editType = "normal";
        		}
        	}

        	return editType;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.edt_item.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_item_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.div_work.form.treeRouting.addEventHandler("oncellclick",this.div_work_treeRouting_oncellclick,this);
            this.div_work.form.tab_00.addEventHandler("onchanged",this.div_work_tab_00_onchanged,this);
            this.div_work.form.tab_00.Tabpage1.form.grd_consumable.addEventHandler("onexpandup",this.div_work_tab_00_Tabpage1_grd_consumable_onexpandup,this);
            this.div_work.form.tab_00.Tabpage1.form.grd_consumable.addEventHandler("oncloseup",this.div_work_tab_00_Tabpage1_grd_consumable_oncloseup,this);
            this.div_work.form.tab_00.Tabpage1.form.btn_delconsumable.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab_00.Tabpage1.form.btn_addconsumable.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_work.form.tab_00.Tabpage2.form.grd_operationSpec.addEventHandler("onexpandup",this.div_work_tab_00_Tabpage2_grd_operationSpec_onexpandup,this);
            this.div_work.form.tab_00.Tabpage2.form.btn_addoperationSpec.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_work.form.tab_00.Tabpage2.form.btn_deloperationSpec.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab_00.Tabpage2.form.cbo_barcharinfo.addEventHandler("onitemchanged",this.div_work_tab_00_Tabpage2_cbo_barcharinfo_onitemchanged,this);
            this.div_work.form.tab_00.Tabpage3.form.grd_durable.addEventHandler("onexpandup",this.div_work_tab_00_Tabpage3_grd_durable_onexpandup,this);
            this.div_work.form.tab_00.Tabpage3.form.btn_deldurable.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab_00.Tabpage3.form.btn_adddurable.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_work.form.tab_00.Tabpage4.form.grd_aoiLayer.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_tab_00_Tabpage2_grd_processD_onexpandup,this);
            this.div_work.form.tab_00.Tabpage4.form.grd_aoiLayer.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_tab_00_Tabpage2_grd_processD_oncloseup,this);
            this.div_work.form.tab_00.Tabpage4.form.btn_delaoiLayer.addEventHandler("onclick",this.fn_delDetail,this);
            this.div_work.form.tab_00.Tabpage4.form.btn_addaoiLayer.addEventHandler("onclick",this.fn_addDetail,this);
            this.div_work.form.grd_operation.addEventHandler("onexpandup",this.div_work_grd_operation_onexpandup,this);
            this.div_work.form.grd_operation.addEventHandler("oncloseup",this.div_work_grd_operation_oncloseup,this);
            this.div_work.form.btn_xlUpCustom_grd_operation.addEventHandler("onclick",this.tab_work_Tabpage1_btn_xlUp_grd_basIdclass_onclick,this);
            this.div_work.form.btn_delOperation.addEventHandler("onclick",this.fn_deleteOperation,this);
            this.div_work.form.btn_addOperation.addEventHandler("onclick",this.fn_addOperation,this);
            this.div_header.form.btn_saveArea.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_genNumber.addEventHandler("onclick",this.fn_genNumber,this);
            this.div_header.form.btn_warehouse.addEventHandler("onclick",this.fn_warehouse,this);
            this.div_header.form.btn_copyRouting.addEventHandler("onclick",this.fn_copyProduct,this);
            this.ds_tree.addEventHandler("canrowposchange",this.ds_tree_canrowposchange,this);
            this.ds_operation.addEventHandler("canrowposchange",this.ds_operation_canrowposchange,this);
            this.ds_operation.addEventHandler("oncolumnchanged",this.ds_operation_oncolumnchanged,this);
            this.ds_operation.addEventHandler("onrowposchanged",this.ds_operation_onrowposchanged,this);
            this.ds_operation.addEventHandler("cancolumnchange",this.ds_operation_cancolumnchange,this);
            this.ds_consumable.addEventHandler("oncolumnchanged",this.ds_consumable_oncolumnchanged,this);
            this.ds_operationSpec.addEventHandler("onrowposchanged",this.ds_operationSpec_onrowposchanged,this);
            this.ds_operationSpec.addEventHandler("oncolumnchanged",this.ds_operationSpec_oncolumnchanged,this);
            this.ds_aoiLayer.addEventHandler("onrowposchanged",this.ds_operationSpec_onrowposchanged,this);
            this.ds_aoiLayerCheck.addEventHandler("onrowposchanged",this.ds_operationSpec_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS02100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
