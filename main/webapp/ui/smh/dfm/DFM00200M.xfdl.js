(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00200M");
            this.set_titletext("품목별 Defect Map 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1647,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">유효</Col></Row><Row><Col id=\"data\">유효하지 않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"품목\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"이벤트시간\" type=\"STRING\" size=\"256\"/><Column id=\"AOITotal불량률\" type=\"STRING\" size=\"256\"/><Column id=\"AOICS\" type=\"STRING\" size=\"256\"/><Column id=\"AOI1L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI2L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI3L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI4L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI5L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI6L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI7L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI8L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI9L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI10L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI11L\" type=\"STRING\" size=\"256\"/><Column id=\"AOI12L\" type=\"STRING\" size=\"256\"/><Column id=\"AOISS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLETotal불량률\" type=\"STRING\" size=\"256\"/><Column id=\"HOLECS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE1L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE2L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE3L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE4L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE5L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE6L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE7L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE8L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE9L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE10L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE11L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE12L\" type=\"STRING\" size=\"256\"/><Column id=\"HOLESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사공정\" type=\"STRING\" size=\"256\"/><Column id=\"Layer\" type=\"STRING\" size=\"256\"/><Column id=\"불량항목\" type=\"STRING\" size=\"256\"/><Column id=\"불량률\" type=\"STRING\" size=\"256\"/><Column id=\"불량수\" type=\"STRING\" size=\"256\"/><Column id=\"검사수\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"완료시간\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineChart", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"AOI\" type=\"STRING\" size=\"256\"/><Column id=\"BBT\" type=\"STRING\" size=\"256\"/><Column id=\"HOLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TITLE\">2021-05-25</Col><Col id=\"AOI\">42</Col><Col id=\"BBT\">23</Col><Col id=\"HOLE\">3.333</Col></Row><Row><Col id=\"TITLE\">2</Col><Col id=\"AOI\">33</Col><Col id=\"BBT\">0.086</Col><Col id=\"HOLE\">3</Col></Row><Row><Col id=\"TITLE\">3</Col><Col id=\"AOI\">14</Col><Col id=\"BBT\">12</Col><Col id=\"HOLE\">0.556</Col></Row><Row><Col id=\"TITLE\">4</Col><Col id=\"AOI\">35</Col><Col id=\"BBT\">14</Col><Col id=\"HOLE\">1</Col></Row><Row><Col id=\"TITLE\">5</Col><Col id=\"AOI\">14</Col><Col id=\"BBT\">21</Col><Col id=\"HOLE\">14</Col></Row><Row><Col id=\"TITLE\">6</Col><Col id=\"AOI\">11</Col><Col id=\"BBT\">21</Col><Col id=\"HOLE\">22</Col></Row><Row><Col id=\"TITLE\">7</Col><Col id=\"AOI\">17</Col><Col id=\"BBT\">32</Col><Col id=\"HOLE\">12</Col></Row><Row><Col id=\"TITLE\">8</Col><Col id=\"AOI\">45</Col><Col id=\"BBT\">12</Col><Col id=\"HOLE\">5</Col></Row><Row><Col id=\"TITLE\">9</Col><Col id=\"AOI\">33</Col><Col id=\"BBT\">7</Col><Col id=\"HOLE\">3</Col></Row><Row><Col id=\"TITLE\">10</Col><Col id=\"AOI\">20</Col><Col id=\"BBT\">2</Col><Col id=\"HOLE\">15</Col></Row><Row><Col id=\"TITLE\">11</Col><Col id=\"AOI\">5</Col><Col id=\"BBT\">4</Col><Col id=\"HOLE\">6</Col></Row><Row><Col id=\"TITLE\">12</Col><Col id=\"AOI\">18</Col><Col id=\"BBT\">1</Col><Col id=\"HOLE\">15</Col></Row><Row><Col id=\"TITLE\">13</Col><Col id=\"AOI\">14</Col><Col id=\"BBT\">29</Col><Col id=\"HOLE\">18</Col></Row><Row><Col id=\"TITLE\">14</Col><Col id=\"AOI\">25</Col><Col id=\"BBT\">15</Col><Col id=\"HOLE\">23</Col></Row><Row><Col id=\"TITLE\">15</Col><Col id=\"AOI\">21</Col><Col id=\"BBT\">28</Col><Col id=\"HOLE\">1</Col></Row><Row><Col id=\"TITLE\">16</Col><Col id=\"AOI\">19</Col><Col id=\"BBT\">19</Col><Col id=\"HOLE\">3</Col></Row><Row><Col id=\"TITLE\">17</Col><Col id=\"AOI\">16</Col><Col id=\"BBT\">23</Col><Col id=\"HOLE\">4</Col></Row><Row><Col id=\"TITLE\">18</Col><Col id=\"AOI\">27</Col><Col id=\"BBT\">43</Col><Col id=\"HOLE\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t3", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"설비타입\" type=\"STRING\" size=\"256\"/><Column id=\"설비ID\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"내부Rev\" type=\"STRING\" size=\"256\"/><Column id=\"LayerNo\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"PanelID\" type=\"STRING\" size=\"256\"/><Column id=\"검사수량\" type=\"STRING\" size=\"256\"/><Column id=\"X\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드\" type=\"STRING\" size=\"256\"/><Column id=\"불량타입\" type=\"STRING\" size=\"256\"/><Column id=\"AOI불량코드\" type=\"STRING\" size=\"256\"/><Column id=\"VRS불량코드\" type=\"STRING\" size=\"256\"/><Column id=\"이벤트시간\" type=\"STRING\" size=\"256\"/><Column id=\"그룹코드\" type=\"STRING\" size=\"256\"/><Column id=\"그룹이름\" type=\"STRING\" size=\"256\"/><Column id=\"서브그룹코드\" type=\"STRING\" size=\"256\"/><Column id=\"서브그룹이름\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"설비타입\">AOI</Col><Col id=\"설비ID\">VRS_GIGAVIS_12</Col><Col id=\"LotNo\">40017339-0201-00000-002-1</Col><Col id=\"품목명\">1060777A3</Col><Col id=\"내부Rev\">A3</Col><Col id=\"LayerNo\">CS</Col><Col id=\"차수\">1</Col><Col id=\"PanelID\">10</Col><Col id=\"검사수량\">576</Col><Col id=\"X\">38.34</Col><Col id=\"Y\">34.31</Col><Col id=\"불량코드\"/><Col id=\"불량타입\">AOI</Col><Col id=\"AOI불량코드\">1</Col><Col id=\"VRS불량코드\">1</Col><Col id=\"이벤트시간\">2019-10-01 21:54</Col><Col id=\"그룹코드\">999</Col><Col id=\"그룹이름\">NONE</Col><Col id=\"서브그룹코드\">9999</Col><Col id=\"서브그룹이름\">NONE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"percentage\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ITEMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_revCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_procCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noinputMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_PCSCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_PCSCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputMainChart", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputMainChartLegend", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COLUMNS\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMNS_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"COLUMNS_RATE_MAX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDefectMap", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rawData", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYX\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYY\" type=\"STRING\" size=\"256\"/><Column id=\"X\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AOIDEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"VRSDEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"EVENTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"MAX\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROCNM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDefectGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDefectCode", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROCNM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpChart", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROCNM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartColor", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imgLayerHdr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LAYER\">4L</Col><Col id=\"MAX_LAYER\">4</Col><Col id=\"WIDTH\">500</Col><Col id=\"HEIGHT\">720</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imgPoint", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNO\" type=\"STRING\" size=\"256\"/><Column id=\"X\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"VRSDEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">1</Col><Col id=\"X\">100.950012</Col><Col id=\"Y\">10.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">13</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">2</Col><Col id=\"X\">110.950012</Col><Col id=\"Y\">60.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">14</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">3</Col><Col id=\"X\">120.950012</Col><Col id=\"Y\">110.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">18</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">4</Col><Col id=\"X\">130.950012</Col><Col id=\"Y\">160.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">18</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">5</Col><Col id=\"X\">140.950012</Col><Col id=\"Y\">210.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">24</Col><Col id=\"X\">150.950012</Col><Col id=\"Y\">260.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">25</Col><Col id=\"X\">160.950012</Col><Col id=\"Y\">310.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">26</Col><Col id=\"X\">170.950012</Col><Col id=\"Y\">360.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">3</Col><Col id=\"DEFECTNO\">27</Col><Col id=\"X\">180.950012</Col><Col id=\"Y\">410.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">3</Col><Col id=\"DEFECTNO\">28</Col><Col id=\"X\">190.950012</Col><Col id=\"Y\">460.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">2</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">29</Col><Col id=\"X\">200.950012</Col><Col id=\"Y\">510.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">3</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">30</Col><Col id=\"X\">210.950012</Col><Col id=\"Y\">560.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">33</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">31</Col><Col id=\"X\">220.950012</Col><Col id=\"Y\">610.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">39</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">32</Col><Col id=\"X\">230.950012</Col><Col id=\"Y\">660.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">4</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">33</Col><Col id=\"X\">240.950012</Col><Col id=\"Y\">710.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">34</Col><Col id=\"X\">250.950012</Col><Col id=\"Y\">695.315009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">35</Col><Col id=\"X\">260.950012</Col><Col id=\"Y\">679.840009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">36</Col><Col id=\"X\">270.950012</Col><Col id=\"Y\">664.365009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">45</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">37</Col><Col id=\"X\">280.950012</Col><Col id=\"Y\">648.890009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">290.950012</Col><Col id=\"Y\">633.415009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">300.950012</Col><Col id=\"Y\">617.940009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">310.950012</Col><Col id=\"Y\">602.465009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">320.950012</Col><Col id=\"Y\">586.990009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">330.950012</Col><Col id=\"Y\">571.515009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">340.950012</Col><Col id=\"Y\">556.040009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">350.950012</Col><Col id=\"Y\">540.565009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">360.950012</Col><Col id=\"Y\">525.090009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">370.950012</Col><Col id=\"Y\">509.615009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">380.950012</Col><Col id=\"Y\">494.140009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">390.950012</Col><Col id=\"Y\">478.665009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">400.950012</Col><Col id=\"Y\">463.190009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">410.950012</Col><Col id=\"Y\">447.715009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">420.950012</Col><Col id=\"Y\">432.240009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">430.950012</Col><Col id=\"Y\">416.765009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">440.950012</Col><Col id=\"Y\">401.290009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">450.950012</Col><Col id=\"Y\">385.815009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">460.950012</Col><Col id=\"Y\">370.340009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">470.950012</Col><Col id=\"Y\">354.865009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">480.950012</Col><Col id=\"Y\">339.390009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">490.950012</Col><Col id=\"Y\">323.915009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">485.796012</Col><Col id=\"Y\">308.440009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">480.642012</Col><Col id=\"Y\">292.965009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">475.488012</Col><Col id=\"Y\">161.9575045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">470.334012</Col><Col id=\"Y\">154.2200045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">465.180012</Col><Col id=\"Y\">146.4825045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">460.026012</Col><Col id=\"Y\">80.97875225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">454.872012</Col><Col id=\"Y\">77.11000225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">449.718012</Col><Col id=\"Y\">73.24125225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">444.564012</Col><Col id=\"Y\">40.48937612</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">439.410012</Col><Col id=\"Y\">38.55500112</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">434.256012</Col><Col id=\"Y\">36.62062612</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">429.102012</Col><Col id=\"Y\">20.24468806</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">423.948012</Col><Col id=\"Y\">19.07128164</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">418.794012</Col><Col id=\"Y\">18.24989715</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">413.640012</Col><Col id=\"Y\">17.67492801</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">408.486012</Col><Col id=\"Y\">17.2724496</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">403.332012</Col><Col id=\"Y\">16.99071472</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">398.178012</Col><Col id=\"Y\">16.79350031</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">393.024012</Col><Col id=\"Y\">16.65545021</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">387.870012</Col><Col id=\"Y\">16.55881515</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">382.716012</Col><Col id=\"Y\">16.4911706</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">377.562012</Col><Col id=\"Y\">16.44381942</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">372.408012</Col><Col id=\"Y\">73.08820137</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">367.254012</Col><Col id=\"Y\">135.3970215</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">362.100012</Col><Col id=\"Y\">203.9367237</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">356.946012</Col><Col id=\"Y\">279.330396</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">351.792012</Col><Col id=\"Y\">362.2634356</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">346.638012</Col><Col id=\"Y\">453.4897792</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">341.484012</Col><Col id=\"Y\">553.8387571</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">336.330012</Col><Col id=\"Y\">664.2226328</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">331.176012</Col><Col id=\"Y\">569.0003695</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">326.022012</Col><Col id=\"Y\">483.3003326</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">320.868012</Col><Col id=\"Y\">406.1702993</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">4L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">315.714012</Col><Col id=\"Y\">336.7532694</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">4L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">310.560012</Col><Col id=\"Y\">274.2779424</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imgPointFilter", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNO\" type=\"STRING\" size=\"256\"/><Column id=\"X\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"VRSDEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">1</Col><Col id=\"X\">100.950012</Col><Col id=\"Y\">10.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">13</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">2</Col><Col id=\"X\">110.950012</Col><Col id=\"Y\">60.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">14</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">3</Col><Col id=\"X\">120.950012</Col><Col id=\"Y\">110.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">18</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">4</Col><Col id=\"X\">130.950012</Col><Col id=\"Y\">160.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">18</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">5</Col><Col id=\"X\">140.950012</Col><Col id=\"Y\">210.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">24</Col><Col id=\"X\">150.950012</Col><Col id=\"Y\">260.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">25</Col><Col id=\"X\">160.950012</Col><Col id=\"Y\">310.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">26</Col><Col id=\"X\">170.950012</Col><Col id=\"Y\">360.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">27</Col><Col id=\"X\">180.950012</Col><Col id=\"Y\">410.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">28</Col><Col id=\"X\">190.950012</Col><Col id=\"Y\">460.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">2</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">29</Col><Col id=\"X\">200.950012</Col><Col id=\"Y\">510.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">3</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">30</Col><Col id=\"X\">210.950012</Col><Col id=\"Y\">560.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">33</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">31</Col><Col id=\"X\">220.950012</Col><Col id=\"Y\">610.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">39</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">32</Col><Col id=\"X\">230.950012</Col><Col id=\"Y\">660.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">4</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">33</Col><Col id=\"X\">240.950012</Col><Col id=\"Y\">710.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">34</Col><Col id=\"X\">250.950012</Col><Col id=\"Y\">695.315009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">35</Col><Col id=\"X\">260.950012</Col><Col id=\"Y\">679.840009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">36</Col><Col id=\"X\">270.950012</Col><Col id=\"Y\">664.365009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">45</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">37</Col><Col id=\"X\">280.950012</Col><Col id=\"Y\">648.890009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">290.950012</Col><Col id=\"Y\">633.415009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">300.950012</Col><Col id=\"Y\">617.940009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">310.950012</Col><Col id=\"Y\">602.465009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">320.950012</Col><Col id=\"Y\">586.990009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">330.950012</Col><Col id=\"Y\">571.515009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">340.950012</Col><Col id=\"Y\">556.040009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">350.950012</Col><Col id=\"Y\">540.565009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">360.950012</Col><Col id=\"Y\">525.090009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">370.950012</Col><Col id=\"Y\">509.615009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">380.950012</Col><Col id=\"Y\">494.140009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">390.950012</Col><Col id=\"Y\">478.665009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">400.950012</Col><Col id=\"Y\">463.190009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">410.950012</Col><Col id=\"Y\">447.715009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">420.950012</Col><Col id=\"Y\">432.240009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">430.950012</Col><Col id=\"Y\">416.765009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">440.950012</Col><Col id=\"Y\">401.290009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">450.950012</Col><Col id=\"Y\">385.815009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">460.950012</Col><Col id=\"Y\">370.340009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">470.950012</Col><Col id=\"Y\">354.865009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">480.950012</Col><Col id=\"Y\">339.390009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">490.950012</Col><Col id=\"Y\">323.915009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">485.796012</Col><Col id=\"Y\">308.440009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">480.642012</Col><Col id=\"Y\">292.965009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">475.488012</Col><Col id=\"Y\">161.9575045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">470.334012</Col><Col id=\"Y\">154.2200045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">465.180012</Col><Col id=\"Y\">146.4825045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">460.026012</Col><Col id=\"Y\">80.97875225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">454.872012</Col><Col id=\"Y\">77.11000225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">449.718012</Col><Col id=\"Y\">73.24125225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">444.564012</Col><Col id=\"Y\">40.48937612</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">439.410012</Col><Col id=\"Y\">38.55500112</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">434.256012</Col><Col id=\"Y\">36.62062612</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">429.102012</Col><Col id=\"Y\">20.24468806</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">423.948012</Col><Col id=\"Y\">19.07128164</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">418.794012</Col><Col id=\"Y\">18.24989715</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">413.640012</Col><Col id=\"Y\">17.67492801</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">408.486012</Col><Col id=\"Y\">17.2724496</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">403.332012</Col><Col id=\"Y\">16.99071472</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">398.178012</Col><Col id=\"Y\">16.79350031</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">393.024012</Col><Col id=\"Y\">16.65545021</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">387.870012</Col><Col id=\"Y\">16.55881515</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">382.716012</Col><Col id=\"Y\">16.4911706</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">377.562012</Col><Col id=\"Y\">16.44381942</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">372.408012</Col><Col id=\"Y\">73.08820137</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">367.254012</Col><Col id=\"Y\">135.3970215</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">362.100012</Col><Col id=\"Y\">203.9367237</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">356.946012</Col><Col id=\"Y\">279.330396</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">351.792012</Col><Col id=\"Y\">362.2634356</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">346.638012</Col><Col id=\"Y\">453.4897792</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">341.484012</Col><Col id=\"Y\">553.8387571</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">336.330012</Col><Col id=\"Y\">664.2226328</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">331.176012</Col><Col id=\"Y\">569.0003695</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">326.022012</Col><Col id=\"Y\">483.3003326</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">320.868012</Col><Col id=\"Y\">406.1702993</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">4L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">315.714012</Col><Col id=\"Y\">336.7532694</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">4L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">310.560012</Col><Col id=\"Y\">274.2779424</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_INCLUDEAOI\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LAYER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imgInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BLOB\" type=\"BLOB\" size=\"40000\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BLOB\">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</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpLayer", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROCNM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectGrpChartLayer", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROCNM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imgPanelHdr", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDefectMapPanel", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LAYER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_search01",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cmb_prodType","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ProductionType,,Y,Y ");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("7");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("5A9641FD0CFD479C8E4840FB00D0683C");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"155","45","20","91",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","181","10","27",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_clearC","171","175","102","36",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_prodType","0","60","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7EB39F8C213747B58EF982C5A61CA6A0");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_itemCode","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F112527EF89E45D8BA876725E97E3B30");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_rev","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("13");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Edit("edt_itemCode","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("1");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Button("btn_itemCode",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_proc","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("14");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ED9C851D44B942A2BAA5FA9E07074BB3");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Combo("cmb_rev","108","110","165","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_revCombo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Combo("cmb_proc","108","135","165","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_procCombo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","10","165","21",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("15");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Combo("cbo_period","7","35","89","20",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("16");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","35","165","21",null,null,null,null,null,null,this.tab_search.tab_search01.form);
            obj.set_taborder("17");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_search01.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_mainNoItem",this.div_work.form.tab_work);
            obj.set_text("품목별 현황");
            obj.set_tooltiptext("TABCURRENTBYITEM");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sat_subTitle","0","0","59","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_mainNoItem.form);
            obj.set_taborder("0");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDLOTLIST");
            this.div_work.form.tab_work.tabpage_mainNoItem.addChild(obj.name, obj);

            obj = new Grid("grd_noinputItem","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_mainNoItem.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_noinputMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"180\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" tooltiptext=\"NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"Lot No\" tooltiptext=\"873DD90A54B04DEDA6CAD3D47CE96684\"/><Cell col=\"6\" text=\"불량율\" tooltiptext=\"PCSDEFECTRATE\"/><Cell col=\"7\" text=\"검사 공정\" tooltiptext=\"INSPECTIONPROCESS\"/><Cell col=\"8\" text=\"완료시간\" tooltiptext=\"ENDLOTTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PROCESSDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:LOTID\"/><Cell col=\"6\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setNoInputRate(DEFECT_CNT, TOTAL_PCSCOUNT)\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:WORKENDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_mainNoItem.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_noinputItem",null,"5","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_mainNoItem.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운드");
            this.div_work.form.tab_work.tabpage_mainNoItem.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_mainItem",this.div_work.form.tab_work);
            obj.set_text("품목별 현황");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new BasicChart("chart_line","0","10",null,"240","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_mainItem.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lineChart");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "5",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "leftbottom"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "transparent",
            		"labeltextfont": "normal 8pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "1px solid #ffffff",
            		"labelgap": "5",
            		"visible": "true"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 9pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"tickmax": "50"
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
            		"ylinetooltipgap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series1",
            			"titletext": "AOI",
            			"barvisible": "false",
            			"barsize": "3",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:AOI",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "false",
            			"linevisible": "true",
            			"linestyle": "2px solid #0c84c1",
            			"linefillstyle": "#1abd9c",
            			"lineareavisible": "false",
            			"pointvisible": "true",
            			"pointfillstyle": "#ffffff",
            			"pointlinestyle": "2px solid #0c84c1",
            			"linetype": "segment",
            			"stacktype": "none"
            		},
            		{
            			"id": "series2",
            			"titletext": "BBT",
            			"barvisible": "false",
            			"barsize": "3",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "normal 700 9pt/normal \"맑은 고딕\"",
            			"valuecolumn": "bind:BBT",
            			"itemtextposition": "inside start",
            			"itemtextvisible": "false",
            			"linevisible": "true",
            			"linestyle": "2px solid #62be1b",
            			"linefillstyle": "#1abd9c",
            			"lineareavisible": "false",
            			"pointvisible": "true",
            			"pointfillstyle": "#ffffff",
            			"pointlinestyle": "2px solid #62be1b",
            			"linetype": "segment",
            			"stacktype": "none"
            		}
            	]
            });
            obj.set_categorycolumn("bind:TITLE");
            this.div_work.form.tab_work.tabpage_mainItem.addChild(obj.name, obj);

            obj = new Static("sat_subTitle","0","250","59","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_mainItem.form);
            obj.set_taborder("1");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDLOTLIST");
            this.div_work.form.tab_work.tabpage_mainItem.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inputItem",null,"256","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_mainItem.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운드");
            this.div_work.form.tab_work.tabpage_mainItem.addChild(obj.name, obj);

            obj = new Grid("grd_inputItem","0","284",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_mainItem.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputMain");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"160\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"Lot No\" tooltiptext=\"873DD90A54B04DEDA6CAD3D47CE96684\"/><Cell col=\"6\" text=\"완료시간\" tooltiptext=\"ENDLOTTIME\"/><Cell col=\"7\" text=\"검사 공정\" tooltiptext=\"INSPECTIONPROCESS\"/><Cell col=\"8\" text=\"불량율\" tooltiptext=\"PCSDEFECTRATE\"/><Cell col=\"9\" text=\"LAYER\" tooltiptext=\"44C87C99332444CC8A076FBDB35DA9C2\"/><Cell col=\"10\" text=\"불량율\" tooltiptext=\"PCSDEFECTRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setSuppressChk(currow,&apos;checkboxcontrol&apos;,&apos;normal&apos;)\" edittype=\"expr:comp.parent.parent.parent.parent.parent.parent.fn_setSuppressChk(currow,&apos;checkbox&apos;,&apos;none&apos;)\"/><Cell col=\"2\" textAlign=\"left\" suppress=\"2\" text=\"bind:PROCESSDEFNAME\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" suppress=\"4\"/><Cell col=\"5\" text=\"bind:LOTID\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"6\" text=\"bind:WORKENDTIME\" suppress=\"5\"/><Cell col=\"7\" suppress=\"5\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" textAlign=\"right\" suppress=\"6\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setInspProcRate(LOTID,PROCESSSEGMENTID,TOTAL_PCSCOUNT)\"/><Cell col=\"9\" text=\"bind:LAYER\"/><Cell col=\"10\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setDetailRate(TOTAL_PCSCOUNT, DEFECT_CNT)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_mainItem.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_defectmap",this.div_work.form.tab_work);
            obj.set_text("Defect Map");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectGrp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Static("sta_inpType","0","9","67","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("1");
            obj.set_text("검사 유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONTYPE");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new BasicChart("chart_2y","0","34","393","189",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chart");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 12pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"axislinestyle": "0px none",
            		"gap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "60",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:value",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"lineitemtextposition": "centertop",
            			"stacktype": "none"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": false,
            			"barsize": "65",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:percentage",
            			"linevisible": true,
            			"valueaxis": "percentage",
            			"lineitemtextgap": "5",
            			"lineitemtextposition": "centertop",
            			"linestyle": "2px solid #000000",
            			"barlinestyle": "1px solid #000000",
            			"pointlinestyle": "2px solid #000000",
            			"pointfillstyle": "#ffffff",
            			"pointitemtextposition": "centertop",
            			"itemtext": "expr:percentage+'%'",
            			"pointsize": "10"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": "10",
            			"tickmax": "80",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"tickmin": "0",
            			"tickmax": "3",
            			"labelgap": "5",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "number",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labelmask": "#0.00",
            			"titlegap": "0",
            			"titletextalign": "middle"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Static("sta_subtitleDefectList","chart_2y:10","-1","81","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("2");
            obj.set_text("Defect List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDDEFECTLIST");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Combo("cmb_inpType","72","9","150","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,DefectMapInspactionType,,Y,Y ");
            obj.set_text("AOI");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Button("btn_filter",null,"9","34","20","39",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("15");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("4B93867528004642A7CB31361D41C80E");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Div("div_defectCodeMulti",null,"9","120","20","btn_filter:3",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("14");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            obj.set_text("사이트권한");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Static("sta_defectCode",null,"9","67","20","div_defectCodeMulti:5",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("13");
            obj.set_text("불량코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTCODE");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Div("div_defectGrpMulti",null,"10","120","20","sta_defectCode:5",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("12");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            obj.set_text("사이트권한");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Static("sta_defectGrp",null,"9","67","20","div_defectGrpMulti:5",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("4");
            obj.set_text("불량 그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("E92464F917AC4ED3AF7A55CA15ACAAB1");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Grid("grd_defectGrp","chart_2y:10","34",null,"189","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectGrp");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"3\" text=\"검사공정\" tooltiptext=\"INSPPROCESSSEGMENT\"/><Cell col=\"4\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell col=\"5\" text=\"불량수\" tooltiptext=\"QCMFINALINSPECTSPECOUT\"/><Cell col=\"6\" text=\"검사수\" tooltiptext=\"QCMFINALINSPECTQTY\"/><Cell col=\"7\" text=\"불량명 (그룹)\" tooltiptext=\"DefectGroupRate2\"/><Cell col=\"8\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell col=\"9\" text=\"불량명 (세부)\" tooltiptext=\"DefectDetailName\"/><Cell col=\"10\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSDEFNAME\" suppress=\"1\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" suppress=\"2\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:INPPROCNM\" suppress=\"3\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"left\"/><Cell col=\"4\" suppress=\"4\" suppressalign=\"middle\" cssclass=\"cell_line\" textAlign=\"right\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setTotalRate(INPPROC,INSPECTIONQTY)\"/><Cell col=\"5\" cssclass=\"cell_line\" suppress=\"5\" textAlign=\"right\" suppressalign=\"middle\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setTotalDefectCnt(GROUPCODE,INPPROC)\"/><Cell col=\"6\" text=\"bind:INSPECTIONQTY\" cssclass=\"cell_line\" suppress=\"6\" textAlign=\"right\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"bind:GROUPNAME\" cssclass=\"cell_line\" textAlign=\"left\" suppress=\"7\" suppressalign=\"middle\"/><Cell col=\"8\" cssclass=\"cell_line\" textAlign=\"right\" suppress=\"8\" suppressalign=\"middle\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setGrpRate(GROUPCODE,INPPROC,INSPECTIONQTY)\"/><Cell col=\"9\" text=\"bind:SUBNAME\" cssclass=\"cell_line\" textAlign=\"left\" suppress=\"9\" suppressalign=\"middle\"/><Cell col=\"10\" cssclass=\"cell_line\" textAlign=\"right\" suppressalign=\"middle\" expr=\"comp.parent.parent.parent.parent.parent.parent.fn_setDetailRate(INSPECTIONQTY, DEFECTCOUNT)\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Static("sta_subtitleImg","0","223","71","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("7");
            obj.set_text("Nail Map");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("NAILMAP");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Static("sta_drawCh","90","232","120","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("8");
            obj.set_text("도면선택");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DrawingSelection");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new CheckBox("chk_c","220","232","71","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("9");
            obj.set_text("C면 기준");
            obj.set_value("false");
            obj.set_cssclass("chk_WF_module");
            obj.set_tooltiptext("LayerCstandard");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new CheckBox("chk_s","301","232","70","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("10");
            obj.set_text("S면 기준");
            obj.set_cssclass("chk_WF_module");
            obj.set_tooltiptext("LayerSstandard");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Div("div_module","0","257",null,null,"0","7",null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_moduleGroup");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Button("btn_apply","chk_s:10","232","34","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("17");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("APPLY");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Button("btn_panel","btn_apply:10","232","70","20",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_defectmap.form);
            obj.set_taborder("16");
            obj.set_text("판넬 적용");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PANELAPPlY");
            this.div_work.form.tab_work.tabpage_defectmap.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_rowData",this.div_work.form.tab_work);
            obj.set_text("Row Data");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","73","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_rowData.form);
            obj.set_taborder("0");
            obj.set_text("Raw Data");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TABROWDATA");
            this.div_work.form.tab_work.tabpage_rowData.addChild(obj.name, obj);

            obj = new Grid("grd_rawDate","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_rowData.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_rawData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비 타입\" tooltiptext=\"EQUIPMENTTYPE\"/><Cell col=\"2\" text=\"설비 ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"Layer No\" tooltiptext=\"LAYERID\"/><Cell col=\"7\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"8\" text=\"Panel ID\" tooltiptext=\"PANELID\"/><Cell col=\"9\" text=\"검사 수량\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"10\" text=\"X\"/><Cell col=\"11\" text=\"Y\"/><Cell col=\"12\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"13\" text=\"불량 타입\" tooltiptext=\"DEFECTTYPE\"/><Cell col=\"14\" text=\"AOI 불량 코드\" tooltiptext=\"AOIDEFECTCODE\"/><Cell col=\"15\" text=\"VRS 불량 코드\" tooltiptext=\"VRSDEFECTCODE\"/><Cell col=\"16\" text=\"이벤트 시간\" tooltiptext=\"EVENTTIME\"/><Cell col=\"17\" text=\"그룹 코드\" tooltiptext=\"GROUPCODE\"/><Cell col=\"18\" text=\"그룹 이름\" tooltiptext=\"GROUPNAME\"/><Cell col=\"19\" text=\"서브 그룹 코드\" tooltiptext=\"SUBCODE\"/><Cell col=\"20\" text=\"서브 그룹 이름\" tooltiptext=\"SUBNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EQUIPMENTTYPE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LAYERNM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DEGREE\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:PANELID\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PCSCOUNT\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:X\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9.99\"/><Cell col=\"11\" text=\"bind:Y\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"!#,##9.99\"/><Cell col=\"12\" text=\"bind:DEFECTCODE\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:DEFECTTYPE\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:AOIDEFECTCODE\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:VRSDEFECTCODE\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:EVENTTIME\"/><Cell col=\"17\" text=\"bind:GROUPCODE\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:GROUPNAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:SUBCODE\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:SUBNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_rowData.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_rawDate",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_rowData.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_work.tabpage_rowData.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_resetWork",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_resetWork:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","191","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("품목별 Defect Map 조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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

            obj = new Button("btn_interpretation",null,"16","44","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("해석");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INTERPRETATION");
            this.div_header.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_color","67","798","527","344",null,null,null,null,null,null,this);
            obj.set_text("팝업");
            obj.set_visible("false");
            obj.set_background("#e736b2");
            obj.set_url("common::richtexteditor_colorpicker.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1647,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","dfm::dfm_multiCombo.xfdl");
            this._addPreloadList("fdl","common::richtexteditor_colorpicker.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DFM00200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("DFM00200M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00200M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("DFM00200M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("DFM00200M.xfdl","lib::lib_array.xjs");
        this.addIncludeScript("DFM00200M.xfdl","lib::lib_color.xjs");
        this.registerScript("DFM00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Defect Map / 품목별 Defet Map 조회
         * 파일명 		: DFM00200M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.05.20
         *
         * 설  명		: Defect Map / 품목별 Defet Map 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.20	김진현   	최초작성
         * 2021.07.07   김진현		LINE 차트 X축값 표현식 변경
         * [오픈전에 소수점 3자리 -> 2자리 변경이 필요 합니다.]
         * [필요 화면] - DFM00100M, DFM00100D, DFM00200M(화면+쿼리)변경 해야 됩니다. [반올림] 으로 위치 테스트 해뒀습니다.
         * nexacro.round 부분들...   => 상단에 변수로 수정해 두겠습니다. 해당 부분 숫자 3 -> 2로 변경 해주세요  this.fv_roundNum 변수 사용
         * ###[여기는 추가 내용 있습니다.]### -> 차트(품목코드 있는 경우 라인 차트 툴팁 부분 쿼리에서 가져 오는것)
         * selectInputMainChartList 해당 쿼리 round 3인 내용 2로 변경 필요 합니다. / FM9990.000 --> FM9990.00으로 0하나 제거 해야 됩니다.!
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        // 이미지 동적 생성 관련
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
        this.executeIncludeScript("lib::lib_array.xjs"); /*include "lib::lib_array.xjs"*/;
        this.executeIncludeScript("lib::lib_color.xjs"); /*include "lib::lib_color.xjs"*/;
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        this.nR;				// 축소 비율
        this.nH;				// 높이
        this.nW;				// 넓이

        this.nChkImg 	= "";	// C면/S면 구분
        this.strFileContents;	// 이미지 정보

        this.fv_layerNm;		// Layer 명 (선택된)
        this.fv_layer;			// Layer 층 정보
        this.fv_color;			// 선택된 색상 (없으면 기본 색상 적용)
        this.fv_lot;			// 판넬 생성시 -> 선택된lot

        this.f_lotCnt	= 0;	// lot 수(품목에서만 있음)

        this.nNextTop;			// 다음생성 top
        this.nNextPanelTop;		// 다음생성 top (Panel)


        this.fv_dH2 = 0;		// [21.06.10] 차이 추가
        this.fv_dW2 = 0;		// [21.06.10] 차이 추가

        this.fv_roundNum = 3;	// [반올림] 자릿수(3 -> 2)변경 필요 @.@ 여기 변경 필요 합니다 !!!!!!!!!!!!!!!!!!

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 검색조건 달력 설정
        	this.tab_search.tab_search01.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_search01_cbo_period_onitemchanged();

        	this.tab_search.tab_search01.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.tab_search01.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	// x 버튼 이벤트 설정(Lot No)
        	this.tab_search.tab_search01.form.btn_edt_itemCode.setEventHandler("onclick", this.fn_xClickItemNo, this );

        	// 검색조건 콤보 설정 (Rev -> 공정)
        	this.fn_setRev("");

        	// 품목별 현황 초기 Tab적용
        	this.fn_setInitTab();

        	// [조회 조건 품목코드 선택시 조회 그리드]
        	//sort 제거	(품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_mainItem.form.grd_inputItem.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거 (품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_mainItem.form.grd_inputItem.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.tab_work.tabpage_mainItem.form.grd_inputItem.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리


        	// [Defect Map List]
        	//sort 제거	(품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_defectmap.form.grd_defectGrp.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거 (품목별 현황 - 품목선택한경우)
        	this.div_work.form.tab_work.tabpage_defectmap.form.grd_defectGrp.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.tab_work.tabpage_defectmap.form.grd_defectGrp.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리


        	// defect map 설정
        	// 검사유형 (AOI만 선택 불가능)
        	this.div_work.form.tab_work.tabpage_defectmap.form.cmb_inpType.set_index(0);
        	this.div_work.form.tab_work.tabpage_defectmap.form.cmb_inpType.set_readonly(true);
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {

        	// 품목코드 유무에 따른 분기 처리 진행
        	this.ds_noinputMain.clearData();			// 품목코드 미입력시 ds
        	this.ds_inputMain.clearData();				// 품목코드 입력시 ds
        	this.ds_inputMainChart.clearData();			// 품목코드 입력시 char ds
        	this.ds_inputMainChartLegend.clearData();	// 범레 내용ds
        	this.ds_lineChart.clearData();				// Line 차트용 ds

        	// Defect Map 용
        	this.ds_rawData.clearData();				// Raw Data ds
        	this.ds_cmbDefectGrp.clearData();			// 불량그룹 콤보 ds
        	this.ds_cmbDefectCode.clearData();			// 불량코드 콤보 ds
        	this.ds_defectGrp.clearData();				// Defect List ds
        	this.ds_chart.clearData();					// Defect Map chart ds
        	this.ds_chartColor.clearData();				// 차트 불량그룹별 색상 정보 ds
        	this.ds_imgLayerHdr.clearData();			// 이미지 layer 정보 조회 ds
        	this.ds_imgPoint.clearData();				// 이미지 좌표 ds
        	this.ds_search.clearData();					// 이미지 정보 조회 조건
        	this.ds_imgInfo.clearData();				// 이미지 정보(C/S면 정보) ds
        	this.ds_defectGrpLayer.clearData();			// layer별로 불량 그룹으로 차트 구성을 위해서 ds조회

        	this.ds_imgPanelHdr.clearData();			// 판넬정보
        	this.ds_searchDefectMapPanel.clearData();	// 판넬정보 조회 조건

        	// 체크박스 초기화
        	this.div_work.form.tab_work.tabpage_defectmap.form.chk_c.set_value(false);
        	this.div_work.form.tab_work.tabpage_defectmap.form.chk_s.set_value(false);


        	// 필터 초기화
        	this.ds_defectGrp.filter("");
        	this.ds_defectGrpLayer.filter("");		// 필터 초기화

        	// 이미지 삭제
        	this.fn_divAllDestroy();



        	var nItem	=	this.tab_search.tab_search01.form.edt_itemCode.value;

        	if(this.gfn_isNull(nItem))
        	{	// 품목코드 미입력시
        		this.div_work.form.tab_work.tabpage_mainItem.set_tabbuttonwidth(0);
        		this.div_work.form.tab_work.tabpage_mainNoItem.set_tabbuttonwidth(140);
        		this.div_work.form.tab_work.set_tabindex(0);
        		this.fn_searchNoinput();
        	}
        	else
        	{	// 품목코드 입력시
        		this.div_work.form.tab_work.tabpage_mainNoItem.set_tabbuttonwidth(0);
        		this.div_work.form.tab_work.tabpage_mainItem.set_tabbuttonwidth(140);
        		this.div_work.form.tab_work.set_tabindex(1);
        		this.fn_searchInput();
        	}

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

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
        		if (trId == "saveProcGrpList")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		}
        		if(trId == "selectLayerImageInfo")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			}
        			// (21.06.16) 이미지 없는 경우 msg 추가
        			else if(msgArray[0] == 'DefectCheckImage')
        			{
        				this.gfn_Message(msgArray[0], null, "error", "ok");
        				return;
        			}
        			else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		}
        		else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectItemRevList": 			//[조회조건] rev 조회 성공

        			this.tab_search.tab_search01.form.cmb_rev.set_index(0);

        			// 공정 조회 ()
        			this.fn_setProc();

        			break;

        		case "selectFilterProcComboList": 			//[조회조건] 공정 조회 성공

        			this.tab_search.tab_search01.form.cmb_proc.set_index(0);

        			break;

        		case "selectInputMainList": 				//[품목코드 있는 경우 메인 조회]

        			//trace("[범례] ====> : "+this.ds_inputMainChart.saveXML());
        			//trace("[RATE_7012401] ====> : "+this.ds_inputMainChart.getColumn(0,"RATE_7012401"));
        			if(this.ds_inputMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// [TEST용 - 제거대상]
        			/*
        			var nAdd = this.ds_inputMain.addRow();
        			this.ds_inputMain.setColumn(nAdd, "PROCESSDEFNAME","AMB681XV01 DIGITIZER(2L)");
        			this.ds_inputMain.setColumn(nAdd, "PRODUCTDEFID", "1025445H1");
        			this.ds_inputMain.setColumn(nAdd, "PRODUCTDEFVERSION", "FA2");
        			this.ds_inputMain.setColumn(nAdd, "LOTID", "M210429F004-1-FG-002-XXX");
        			this.ds_inputMain.setColumn(nAdd, "PROCESSSEGMENTID", "7012401");
        			this.ds_inputMain.setColumn(nAdd, "PROCESSSEGMENTNAME", "외층 AOI검사");
        			this.ds_inputMain.setColumn(nAdd, "LAYER", "2L");
        			this.ds_inputMain.setColumn(nAdd, "TOTAL_PCSCOUNT", "1506");
        			this.ds_inputMain.setColumn(nAdd, "DEFECT_CNT", "20");
        			this.ds_inputMain.setColumn(nAdd, "WORKENDTIME", "2021-05-22 18:53:10");
        			this.ds_inputMain.setColumn(nAdd, "CHK", "");
        			*/

        			// Line 차트 설정
        			this.fn_setMainLineChart();

        			break;

        		case "selectNoInputMainList": 					//[품목코드 없는 경우 메인 조회]
        			if(this.ds_noinputMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}
        			break;

        		case "selectDefectMapList": 					//[해석시 데이터 조회]

        			trace(" ### [해석시 조회 결과] ### : "+this.ds_defectGrpLayer.rowcount);
        			if(this.ds_defectGrp.rowcount == 0)		// 변경해야됨
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// Defect Map Tab 이동
        			this.div_work.form.tab_work.set_tabindex(2);

        			// 조회 후 멀티 콤보(상위설정)
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form.ds_initData.applyChange();
        			// 연결된 하위 멀티 콤보 초기화
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);

        			// 하위 멀티 콤보 이벤트 설정.
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.ds_initData.applyChange();
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);

        			// 초기 차트 설정 (불량 그룹별)
        			//this.fn_setChart();
        			this.fn_setChartProcsegId();		// 검사공저별로 변경

        			// 이미지 설정
        			this.fn_getLayerImg();			// Layer 이미지(이미지 없이 좌표만 생성 - Layer 단)


        			break;

        		case "selectProcDefectMapDefectImgPointList": 					// 필터 후 point 정보 재조회
        			if(this.ds_imgPoint.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}
        			// 이미지 + Layer 적용
        			this.fn_getLayerImg();			// Layer 이미지(이미지 없이 좌표만 생성 - Layer 단)

        			break;
        		case "selectLayerImageInfo": 			//[이미지 사진 조회 (C/S면)] - 적용 후
        				//trace(" Image 조회 성공 @..@  "+this.ds_imgInfo.saveXML());
        				if(this.ds_imgInfo.rowcount == 0)
        				{
        					this.gfn_Message("NoSelectData", null, "warning", "ok");

        					return
        				}

        				// Layer 정보 포함된 차트 정보 재조회..(첫조회시 layer 포함 조회 후 필터링 같이 사용 후 차트 구성)
        				// 차트 적용(적용버튼 클릭 Layer 정보렬 불량 그룹별로 차트 구성)
        				this.fn_setChart();

        				// 이미지 + Layer 적용
        				this.fn_setLayerImg();

        			break;

        		case "selectProcDefectMapPanelFilterList": 			//[판넬 적용 조회]
        				trace("Panel 정보 조회 완료"+this.ds_imgPanelHdr.rowcount);
        				this.ds_imgPanelHdr.filter("");
        				if(this.ds_imgPanelHdr.rowcount == 0)
        				{
        					this.gfn_Message("NoSelectData", null, "warning", "ok");
        					return
        				}
        				// 이미지 + Panel 적용  (샘플로 생성된거 똑같이 함수 호출?)
        				this.fn_setDynamicPanelImg();

        			break;
        		case "IMAGE_LAYER_ZOOM_P" :			// 확대 닫힘(리턴값이 없어서 여기 안탐)
        		case "IMAGE_ZOOM_P" :
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
        		case "ITEM_CODE_POP" :			// 필터 품목

        			var nItemCode 	= rtn[0];
        			var nItemNm		= rtn[1];
        			//var nRev	 	= rtn[2];

        			this.tab_search.tab_search01.form.edt_itemCode.set_value(nItemCode);

        			// Rev , 공정 초기화

        			// Rev 조회
        			this.fn_setRev(nItemCode);
        			//this.fn_initProcCombo();	// 공정 재조회

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

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=500,height=400";

        	oArg.arg_type = "B";		// 단일 선택 / 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00278"){ //품목(필터)
        		oArg.arg_rtnCols = "P_PRODUCTDEFID|PROCESSDEFNAME";			// 리턴 받을 값

        		var nItemCode = this.tab_search.tab_search01.form.edt_itemCode.value;

        		oArg.arg_searchStr = "P_PRODUCTDEFID="+nItemCode;	// 검색 조건(이미 입력 된값)
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.tab_search01.form.cbo_period.value))
        	{
        		//this.tab_search.tab_search01.form.cbo_period.set_text("사용자정의");
        		this.tab_search.tab_search01.form.cbo_period.set_value(undefined);		// 21.05.20 명보다는 코드로 설정
        	}
        };

        /*
         * 품목코드 x 버튼 클릭시
         */
        this.fn_xClickItemNo = function ()
        {
        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_search01.form.edt_itemCode.set_value("");
        	// Rev 조회
        	this.fn_setRev("");

        };

        /*
         * 품목코드에 해당 하는 Rev 조회
         */
        this.fn_setRev = function (nItemCd)
        {
        	//trace(" [조회 조건] ===> : "+nItemCd);
        	this.ds_revCombo.clearData();
        	this.ds_searchCombo.clearData();
        	this.ds_searchCombo.addRow();
        	this.ds_searchCombo.setColumn(0,"P_ITEMCODE",nItemCd);

        	var sSvcID 			= "selectItemRevList";
        	var sController 	= "/dfm00200/selectItemRevList.do";
        	var sInDatasets 	= "INPUT=ds_searchCombo";
        	var sOutDatasets 	= "ds_revCombo=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        /*
         * 필터 공정 조회 (AOI)
         */
        this.fn_setProc = function ()
        {
        	this.ds_procCombo.clearData();
        	this.ds_searchCombo.clearData();
        	this.ds_searchCombo.addRow();
        	this.ds_searchCombo.setColumn(0,"ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	var nItemCd	= this.tab_search.tab_search01.form.edt_itemCode.value;
        	this.ds_searchCombo.setColumn(0,"P_ITEMCODE"	, nItemCd);
        	var nRev	= this.tab_search.tab_search01.form.cmb_rev.value;
        	if(this.gfn_isNull(nRev))
        	{
        		nRev 	= this.ds_revCombo.getColumn(0,"MAX_CODE")
        	}
        	this.ds_searchCombo.setColumn(0,"P_REV"	, nRev);

        	//trace(" ==== : "+this.ds_searchCombo.saveXML());

        	var sSvcID 			= "selectFilterProcComboList";
        	var sController 	= "/dfm00200/selectFilterProcComboList.do";
        	var sInDatasets 	= "INPUT=ds_searchCombo";
        	var sOutDatasets 	= "ds_procCombo=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         *	품목코드 미입력시 메인 조회
         */
        this.fn_searchNoinput = function ()
        {
        	this.ds_searchMain.clearData();
        	this.ds_searchMain.addRow();

        	var nPeriodfr = this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;


        	// 날짜체크
        	if( nPeriodfr  > nPeriodto )
        	{
        		this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        		return false;
        	}
        	var nPeriodfr8 = nPeriodfr.substr(0,8);
        	var nPeriodto8 = nPeriodto.substr(0,8);

        	// 날짜 체크
        	if(!this.gfn_isDate(nPeriodfr8) || !this.gfn_isDate(nPeriodto8))
        	{
        		this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        		return;
        	}


        	this.ds_searchMain.setColumn(0,"ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchMain.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr); 	// 시작일
        	this.ds_searchMain.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto); 	// 종료일
        	this.ds_searchMain.setColumn(0,"P_PRODUCTIONTYPE"		, this.tab_search.tab_search01.form.cmb_prodType.value); 	// 생산구분

        	//trace(" === [품목코드 미입력 조회 조건] ===> : "+this.ds_searchMain.saveXML());

        	var sSvcID 			= "selectNoInputMainList";
        	var sController 	= "/dfm00200/selectNoInputMainList.do";
        	var sInDatasets 	= "INPUT=ds_searchMain";
        	var sOutDatasets 	= "ds_noinputMain=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 품목코드 미입력시 그리드 불량률 (%)
         */
        this.fn_setNoInputRate = function (nDefCnt, nTotalPcsCnt)
        {
        	var nR = 0;
        	if(!this.gfn_isNull(nTotalPcsCnt) && !this.gfn_isNull(nDefCnt))
        	{
        		var nPreRate = parseFloat(nDefCnt) / parseFloat(nTotalPcsCnt) * 100;

        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[반올림]
        	}
        	return nR+"%";
        };

        /*
         * Tab 정보 초기화 (0,1 제외 나머지 안보이게 설정)
         */
        this.fn_setInitTab = function ()
        {
        	this.div_work.form.tab_work.tabpage_mainItem.set_tabbuttonwidth(0);
        };

        /*
         * 품목코드 입력시 메인 조회
         */
        this.fn_searchInput = function ()
        {
        	this.ds_searchMain.clearData();
        	this.ds_searchMain.addRow();

        	var nPeriodfr = this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	// 날짜체크
        	if( nPeriodfr  > nPeriodto )
        	{
        		this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        		return false;
        	}
        	var nPeriodfr8 = nPeriodfr.substr(0,8);
        	var nPeriodto8 = nPeriodto.substr(0,8);

        	// 날짜 체크
        	if(!this.gfn_isDate(nPeriodfr8) || !this.gfn_isDate(nPeriodto8))
        	{
        		this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        		return;
        	}

        	this.ds_searchMain.setColumn(0,"ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchMain.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr); 	// 시작일
        	this.ds_searchMain.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto); 	// 종료일
        	this.ds_searchMain.setColumn(0,"P_PRODUCTIONTYPE"		, this.tab_search.tab_search01.form.cmb_prodType.value); 	// 생산구분

        	this.ds_searchMain.setColumn(0,"P_PRODUCTDEFID"			, this.tab_search.tab_search01.form.edt_itemCode.value); 	// 품목코드

        	// (21.07.23) 품목코드 있는경우 rev 전체선택의경우 rev Max 값 설정 -> 전체 조회때 REV 안넘겨 준다.  MAX 값으로 한정하면 안됨
        	/*
        	var nRev	= this.tab_search.tab_search01.form.cmb_rev.value;
        	if(this.gfn_isNull(nRev))
        	{
        		nRev 	= this.ds_revCombo.getColumn(0,"MAX_CODE")
        	}
        	this.ds_searchMain.setColumn(0,"P_PRODUCTDEFVERSION"	, nRev); 		// Rev
        	*/
        	this.ds_searchMain.setColumn(0,"P_PRODUCTDEFVERSION"	, this.tab_search.tab_search01.form.cmb_rev.value); 		// Rev
        	this.ds_searchMain.setColumn(0,"P_PROCESSSEGMENTID"		, this.tab_search.tab_search01.form.cmb_proc.value); 		// 공정

        	trace(" === [품목코드 입력시 조회 조건] ===> : "+this.ds_searchMain.saveXML());

        	var sSvcID 			= "selectInputMainList";
        	var sController 	= "/dfm00200/selectInputMainList.do";
        	var sInDatasets 	= "INPUT=ds_searchMain";
        	var sOutDatasets 	= "ds_inputMain=output1 ds_inputMainChart=output2 ds_inputMainChartLegend=output3";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 불량율(품목별 현황)
         */
        this.fn_setDetailRate = function (total, defectQty)
        {
        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(defectQty))
        	{
        		var nPreRate = parseFloat(defectQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[반올림]
        	}
        	return nR+"%";
        };

        /*
         * 그리드내 체크박스 suppress  (품목별 현황)
         */
        this.fn_setSuppressChk = function (nRow, nYtype, nNtype)
        {
        	var strType = "";
        	if(this.ds_inputMain.getColumn(nRow-1,"LOTID") != this.ds_inputMain.getColumn(nRow,"LOTID"))
        	{
        		strType = nYtype;
        	} else {
        		strType = nNtype;
        	}
        	return strType;
        };

        /*
         * 불량율(검사공정별) - 품목별 현황
         */
        this.fn_setInspProcRate = function (nLot,nProc, total)
        {
        	var nDefectQty = 0;
        	var nCnt = this.ds_inputMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nLotID	 	= this.ds_inputMain.getColumn(i,"LOTID");
        		var nProcId 	= this.ds_inputMain.getColumn(i,"PROCESSSEGMENTID");
        		var nDfQty 		= this.ds_inputMain.getColumn(i,"DEFECT_CNT");
        		if((nLotID == nLot) && (nProcId == nProc))
        		{
        			nDefectQty += parseInt(nDfQty);
        		}
        	}
        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(nDefectQty))
        	{
        		var nPreRate = parseFloat(nDefectQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[반올림]
        	}
        	return nR+"%";
        };

        /*
         * 메인 Line 차트 설정
         */
        this.fn_setMainLineChart = function ()
        {
        	// 차트 데이터셋 설정
        	this.ds_lineChart.clearData();

        	this.ds_lineChart.copyData(this.ds_inputMainChart);

        	// #### 차트 설정 #####

        	// 색상(연두, 보라, 자주, 연푸른, 찐노랑, 찐푸른, 찐분홍, 노랑)
        	var nArrColor = ["2px solid #62be1b","2px solid #3c4596","2px solid #be0071","2px solid #4bc4c2","2px solid #f8b334","2px solid #2ba3a8"];
        	// 데이터셋 컬럼 수
        	var nColCnt = this.ds_lineChart.colcount;


        	//trace(" 컬럼수 : "+this.ds_lineChart.saveXML());
        	//trace(" (전)===> : "+JSON.stringify(this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.contents,2));
        	//trace(" @@@@@@@@@[1]" +this.div_work.form.tab_work.tabpage_mainItem.form.chart_line._graphicsControl.getObjectByID("ChartSeriesGroup"));

        	this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.deleteAllSeries();

        	//trace(" (삭제 후)===> : "+JSON.stringify(this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.contents,2));

        	//trace(" @@@@@@@@@[2]" +this.div_work.form.tab_work.tabpage_mainItem.form.chart_line._graphicsControl.getObjectByID("ChartSeriesGroup"));
        	// max 값 조회
        	var nMaxCol = 0;
        	for(var i=0;i<nColCnt;i++){

        		//this.ds_lineChart.set
        		//trace(" ======================================== ?? "+objColNm);
        		var objColNm = this.ds_lineChart.colinfos[i].name;

        		// 순서로 정렬 안됨 수정 (21.07.06)
        		if(objColNm == "CODE" || objColNm == "PROCESSSEGMENTNAME" || objColNm == "TITLE"
        			|| objColNm == "SUB_TITLE" || objColNm == "WORKENDTIME"		// 21.07.07 LINE 차트 표현 변경 수정
        		)		// code 전까지만 설정
        		{
        			continue;
        			//break;
        		}
        		// 검사공정 코드
        		var nProcSeg	=	objColNm.replace('RATE_','');
        		var nLegendPos	= 	this.ds_inputMainChartLegend.findRow("COLUMNS",nProcSeg);
        		var nTitleText	= 	this.ds_inputMainChartLegend.getColumn(nLegendPos, "NAME");			//

        		var objS =   {
        		"id"				: "series"+(i+1),			// 아이디 중복 안되도록
        		"titletext"			: "-●-"+nTitleText,		// 범례에 표시될 값
        		"barvisible"		: "false",					// 막대 표현 x
        		"linevisible"		: "true",					// 라인 표현 o
        		"pointvisible" 		: "ture",					// 라인 포인트 표현 o
        		"valuecolumn"		: "bind:"+objColNm,			// 데이터 셋 연결
        		//"itemtext" 			: "expr:dataset.getColumn(currow, 'TITLE')",
        		"itemtext" 			: "expr:dataset.getColumn(currow, 'SUB_TITLE')",		// (21.07.07) line 차트 수정 (하나의선 -> 여러건 lot 기준)
        		"barsize"			: "3",						//
        		"itemtextcolor"		: "#003860",				// 표현 색상
        		"itemtextfont"		: "normal 700 9pt/normal \"맑은 고딕\"",
        		"itemtextvisible"	: "false",					// 차트에 text 표현 여부

        		"itemtextposition"	: "inside start",
        		"linestyle"			: nArrColor[i],
        		"linefillstyle"		: "#1abd9c",
        		"lineareavisible"	: "false",
        		"pointfillstyle"	: "#ffffff",
        		"pointlinestyle"	: nArrColor[i],
        		"linetype"			: "segment",
        		"stacktype"			: "none"
        		//"pointshape" 		: "diamond"		// 포인트 모양

        		};

        		var nMaxCnt = this.ds_lineChart.rowcount;
        		for(var j=0; j<nMaxCnt; j++)
        		{
        			var nRate = this.ds_lineChart.getColumn(j, objColNm);

        			if((nMaxCol <=  nRate) && !this.gfn_isNull(nRate))
        			{
        				nMaxCol = nRate;
        			}
        		}
        		this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.setSeries("series"+(i+1),objS); //같은 ID 가 있으면 덮어씌움(다른 id면 새롭게 생성함)

        	}
        	//trace(" (후)===> : "+JSON.stringify(this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.contents,2));
        	//trace(" @@@@@@@@@[3]" +this.div_work.form.tab_work.tabpage_mainItem.form.chart_line._graphicsControl.getObjectByID("ChartSeriesGroup"));

        	// (21.07.06) - 수정함 20% 더
        	this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.valueaxes[0].set_tickmax(parseFloat(nMaxCol)*1.2);

        	// 데이터셋 재 설정 해줘야 생김
        	this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.set_binddataset("ds_lineChart");



        	// 설정된 컨텐츠를 다시 세팅해줘야 함
        	this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.set_contents(this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.contents);

        	// 차트 보이게 설정
        	this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.show();

        	//trace(" ===> : "+JSON.stringify(this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.contents,2));

        };

        /*
         * Defect Map 조회
         */
        this.fn_setDefectMap = function ()
        {
        	// ds 초기화
        	this.ds_rawData.clearData();
        	this.ds_cmbDefectGrp.clearData();
        	this.ds_cmbDefectCode.clearData();
        	this.ds_defectGrp.clearData();
        	this.ds_chart.clearData();					// Defect Map chart ds
        	this.ds_chartColor.clearData();				// 차트 불량그룹별 색상 정보 ds
        	this.ds_imgLayerHdr.clearData();			// 이미지 layer 정보 조회 ds
        	this.ds_imgPoint.clearData();				// 이미지 좌표 ds
        	this.ds_search.clearData();					// 이미지 정보 조회 조건
        	this.ds_imgInfo.clearData();				// 이미지 정보(C/S면 정보) ds
        	this.ds_defectGrpLayer.clearData();			// layer별로 불량 그룹으로 차트 구성을 위해서 ds조회

        	this.ds_imgPanelHdr.clearData();			// 판넬정보
        	this.ds_searchDefectMapPanel.clearData();	// 판넬정보 조회 조건

        	// 체크박스 초기화
        	this.div_work.form.tab_work.tabpage_defectmap.form.chk_c.set_value(false);
        	this.div_work.form.tab_work.tabpage_defectmap.form.chk_s.set_value(false);


        	// 필터 초기화
        	this.ds_defectGrp.filter("");
        	this.ds_defectGrpLayer.filter("");		// 필터 초기화

        	// 이미지 삭제
        	this.fn_divAllDestroy();


        	var sSvcID 			= "selectDefectMapList";
        	var sController 	= "/dfm00200/selectDefectMapList.do";
        	var sInDatasets 	= "INPUT=ds_searchDefectMap";
        	var sOutDatasets 	= "ds_rawData=output1 ds_cmbDefectGrp=output2 ds_cmbDefectCode=output3 ds_defectGrp=output4 ds_imgLayerHdr=output5 ds_imgPoint=output6 ds_chartColor=output7 ds_defectGrpLayer=output8";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 하위 멀티 콤보값 초기화
         */
        this.fn_clickDefectGrp = function (obj, e)
        {
        	//trace("이벤트 발생!!!! 하위 데이터셋 초기화");
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.ds_initData.applyChange();
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.edt_comboResult.set_value("데이터 미 선택");
        };


        /*
         * 하위 멀티 콤보 설정
         */
        this.fn_clickDefectCode =  function (obj, e)
        {
        	//trace("상위값 있으면 필터링 걸어야 한다.");
        	var nPreFilter 	= "";
        	nPreFilter 		= this.ds_cmbDefectCode.filterstr;

        	var nDefectGrpDs = this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form;
        	var nFs			= "";
        	this.ds_cmbDefectCode.filter("");		// 필터 초기화
        	for(var i=0; i<nDefectGrpDs.ds_initData.rowcount; i++){
        		var chk 	= nDefectGrpDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nDefectGrpDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs) ? "P_CODE == '*' || P_CODE == '"+code+"'" : " || P_CODE == '"+code+"'";
        		}
        	}
        	//trace("필터 조건 : "+nFs);
        	//trace(" ====> : "+nPreFilter+" || "+(nFs != nPreFilter));
        	this.ds_cmbDefectCode.filter(nFs);			// 필터 초기화(21.06.04) 필터 하나 추가
        	if(nFs != nPreFilter)			// 이전 필터 조건과 같지 않으면 설정(21.05.12) 이전 선택값 가지고 있기 위해
        	{
        		this.ds_cmbDefectCode.filter(nFs);		// 필터 초기화
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.ds_initData.applyChange();
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.edt_comboResult.set_value("데이터 미 선택");
        	}
        }

        /*
         * 불량율(세부)
         */
        this.fn_setDetailRate = function (total, defectQty)
        {
        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(defectQty))
        	{
        		var nPreRate = parseFloat(defectQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[반올림]
        	}
        	return nR+"%";
        };

        /*
         * 불량율(그룹)
         */
        this.fn_setGrpRate = function (grpCode,grpInpProc,total)
        {
        	var nGrpQty = 0;		// 불량 수량
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= this.ds_defectGrp.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nInpProc 	= this.ds_defectGrp.getColumn(i,"INPPROC");
        		if((nGrpCode == grpCode) && (grpInpProc == nInpProc))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}

        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(nGrpQty))
        	{
        		var nPreRate = parseFloat(nGrpQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 2);//[반올림]
        	}
        	return nR+"%";
        };
        /*
         * 불량수(검사공정 별로)
         */
        this.fn_setTotalDefectCnt  = function (grpCode,grpInpProc)
        {
        	//trace(" ---(grpCode) : "+grpCode);
        	var nGrpQty = 0;
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGrpCode 	= this.ds_defectGrp.getColumn(i,"GROUPCODE");
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nInpProc 	= this.ds_defectGrp.getColumn(i,"INPPROC");
        		if((grpInpProc == nInpProc))
        		{
        			nGrpQty += parseInt(nDefectQty);
        		}
        	}
        	return nGrpQty;
        };
        /*
         * 불량율(Total)
         */
        this.fn_setTotalRate = function (grpInpProc,total)
        {
        	var nTotalQty = 0;
        	var nCnt = this.ds_defectGrp.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nDefectQty 	= this.ds_defectGrp.getColumn(i,"DEFECTCOUNT");
        		var nInpProc 	= this.ds_defectGrp.getColumn(i,"INPPROC");
        		if((grpInpProc == nInpProc))
        		{
        			nTotalQty += parseInt(nDefectQty);
        		}
        	}
        	var nR = 0;
        	if(!this.gfn_isNull(total) && !this.gfn_isNull(nTotalQty))
        	{
        		var nPreRate = parseFloat(nTotalQty) / parseFloat(total) * 100;
        		nR = nexacro.round(nPreRate, this.fv_roundNum);
        		//nR = nexacro.round(nPreRate, 3);//[반올림]
        	}
        	return nR+"%";
        };


        /*
         * 차트 값 설정   (layer 차트 생성 호출 -> 불량 그룹별로 ) - 적용 버튼 클릭시
         */
        this.fn_setChart = function ()
        {
        	this.ds_defectGrpChartLayer.filter("");		// 필터 내용 초기화
        	this.ds_defectGrpChartLayer.clearData();
        	this.ds_defectGrpChartLayer.copyData(this.ds_defectGrpLayer, true);		// 필터링 후 설정(그리드에 있는 내용 필터링 된 내용 그중에)
        	this.ds_chart.clearData();

        	var nLayFilter 	= this.fv_layer;//	체크된 Layer 번호 정보
        	this.ds_defectGrpChartLayer.filter("LAYERID =='"+nLayFilter+"'");	// Layer로만 다시 필터링 후 차트 구성

        	this.ds_defectGrpChartLayer.set_keystring("S:+GROUPCODE");			// 불량 그룹별로 정렬

        	var nDefectSum 	= 0;
        	var nPreGrpCode = "";
        	var nInpProc	= "";				// 불량 그룹별 검사공정별 검사수
        	var nCnt = this.ds_defectGrpChartLayer.rowcount;

        	//trace("차트 설정 전 row 수 : "+this.ds_defectGrpChartLayer.rowcount);


        	// (21.05.27 추가 - 불량코드별 색상 정보)
        	var nArrDefect = [];
        	nArrDefect.length = 0;

        	for(var i=0; i<nCnt; i++)
        	{
        		var nRow 		= i;
        		var nDefectQty 	= this.ds_defectGrpChartLayer.getColumn(i,"DEFECTCOUNT");			// 불량수
        		var nGrpCode 	= this.ds_defectGrpChartLayer.getColumn(i,"GROUPCODE");
        		var nPostGrpCode= this.ds_defectGrpChartLayer.getColumn((nRow+1),"GROUPCODE");		// 이후의 불량그룹
        		var nTotal 		= this.ds_defectGrpChartLayer.getColumn(i,"INSPECTIONQTY");			// 검사수
        		var nGrpName	= this.ds_defectGrpChartLayer.getColumn(i,"GROUPNAME");

        		if(i == 0)		// 첫행이거낭 같은 경우 합침
        		{
        			nDefectSum += parseInt(nDefectQty);
        			nPreGrpCode = nGrpCode;
        		}

        		if(i!=0 && (nPreGrpCode != nGrpCode))		// 첫행 이후 같지않은경우 설정(기준점 재설정)
        		{
        			nPreGrpCode = nGrpCode;					// 초기화
        			nDefectSum  = 0;						// 초기화
        		}
        		if(i != 0 && (nPreGrpCode == nGrpCode))		// 첫행 이후 같지않은경우 설정(불량 수량 증가)
        		{
        			nDefectSum += parseInt(nDefectQty);
        		}

        		// 변경점 체크
        		if(((nPostGrpCode  != nGrpCode)) ||  nCnt == 1)
        		{
        			var nChkInsp = "";			// 같은 불량그룹에 다른 검사공정인 경우 더함 검사수
        			var nCt		 = 0;
        			for(var j=0; j<nCnt; j++)
        			{
        				var nTGrpCode 		= this.ds_defectGrpChartLayer.getColumn(j,"GROUPCODE");
        				var nTInspProc		= this.ds_defectGrpChartLayer.getColumn(j,"INPPROC");
        				var nTTotal 		= this.ds_defectGrpChartLayer.getColumn(j,"INSPECTIONQTY");
        				//trace(" =====> : "+nGrpCode+" || "+nTGrpCode);
        				if((nGrpCode == nTGrpCode) && (nChkInsp != nTInspProc))
        				{
        					nCt += parseInt(nTTotal);
        					nChkInsp = nTInspProc;
        				}
        			}
        			// 불량율 계산
        			var nAdd = this.ds_chart.addRow();
        			this.ds_chart.setColumn(nAdd,"name",nGrpName);
        			this.ds_chart.setColumn(nAdd,"value",parseFloat(nDefectSum));			// 불량수
        			this.ds_chart.setColumn(nAdd,"TOTALQTY",parseFloat(nCt));				// 검사수

        			//trace(" (불량수)==========> "+parseFloat(nDefectSum));
        			//trace(" (검사수)==========> "+parseFloat(nCt));
        			var nPreRate = parseFloat(nDefectSum) / parseFloat(nCt) * 100;
        			var nR = nexacro.round(nPreRate, this.fv_roundNum);
        			this.ds_chart.setColumn(nAdd,"percentage",parseFloat(nR));				// 불량율
        			this.ds_chart.setColumn(nAdd,"TYPE","A");								// TYPE


        			// (21.05.27 - 추가 - 배열 찾아서 색상 추가)
        			var nColorPos 	= this.ds_chartColor.findRow("CODE",nGrpCode);
        			var nColor		= this.ds_chartColor.getColumn(nColorPos,"COLOR");
        			if(!this.gfn_isNull(nColor))
        			{
        				nArrDefect.push(nColor);
        			}
        		}
        	}


        	// 차트 설정
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.set_binddataset("ds_chart");
        	// 타이틀 보이지 않게 설정
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.title.set_visible( false );
        	// 범례 보이지 않게 설정
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.legend.set_visible( false );
        	// X축 타이틀 제거
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.categoryaxis.set_titletext("");

        	//this.div_work.form.tab_work.tabpage_defectMap.form.chart_2y.show();

        	// 색상 설정 (불량그룹별로 적용)
        	var nColor	= "";
        	if(nArrDefect.length != this.ds_chart.rowcount)
        	{
        		nColor	= "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#2ba3a8,#ea5d66,#ffe100";
        	}
        	else
        	{
        		for(var c=0; c<nArrDefect.length; c++)
        		{
        			nColor += c == 0 ? nArrDefect[c] : ","+nArrDefect[c];
        		}
        	}
        	// 색상 다양하게
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.seriesset[0].set_barfillstyle(nColor);

        	// "#86B5BC,#E30513,#C1C1C1,#86BC24,#E5007D,#2F8DCD,#F9D900,#F6A200,#BCBCBC"		// 임시 백업 -> 공통으로 변경

        	this.fn_setMaxY();
        };

        /*
         * Y 축 최대값 설정(차트) -> (value, percentage)
         */
        this.fn_setMaxY = function ()
        {
        	var nMaxCol = this.ds_chart.getCaseMax( "TYPE == 'A'", "value" );				// col의 최대값

        	var nMaxLine = this.ds_chart.getCaseMax( "TYPE == 'A'", "percentage" );			// line의 최대값

        	//trace(" ====> : "+nMaxCol+" || "+nMaxLine);

        	//trace(" ====> : "+this.ds_chart.saveXML());

        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.valueaxes[0].set_tickmax(parseFloat(nMaxCol)+5);
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.valueaxes[1].set_tickmax(parseFloat(nMaxLine)+1);

        };


        /*
         * 차트 값 설정   (검사공정별로 차트 생성 호출) -> X 축 Layer 정보로 설정(첫조회시 / 필터 버튼 클릭시)
         */
        this.fn_setChartProcsegId = function ()
        {
        	//trace(" 차트 설정 간다 @.@ (X축 Layer로)"+this.ds_defectGrp.rowcount);
        	/*해당 부분 함수로 뺀다. (조회 후 필터 클릭 후 사용)*/
        	// 필터링 후 데이터셋 복사

        	this.ds_defectGrpChart.filter("");		// 필터 내용 초기화

        	this.ds_defectGrpChart.clearData();
        	this.ds_defectGrpChart.copyData(this.ds_defectGrp, true);		// 필터링 후 설정
        	this.ds_chart.clearData();

        	this.ds_defectGrpChart.set_keystring("S:+INPPROC");				// Layer 기준으로 차트 구성

        	var nDefectSum 	= 0;
        	var nPreInpProc = "";				// 이전 검사공정
        	var nInpProc	= "";				// 불량 그룹별 검사공정별 검사수
        	var nCnt = this.ds_defectGrpChart.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nRow = i;
        		var nDefectQty 	= this.ds_defectGrpChart.getColumn(i,"DEFECTCOUNT");
        		//var nLayerId 	= this.ds_defectGrpChart.getColumn(i,"INPPROC");
        		var nInpProc	= this.ds_defectGrpChart.getColumn(i,"INPPROC");

        		//var nPostLaterId= this.ds_defectGrpChart.getColumn((nRow+1),"INPPROC");
        		var nPostInpProc= this.ds_defectGrpChart.getColumn((nRow+1),"INPPROC");
        		var nTotal 		= this.ds_defectGrpChart.getColumn(i,"INSPECTIONQTY");
        		//var nLayerName	= this.ds_defectGrpChart.getColumn(i,"LAYERID");
        		var nInpProcName	= this.ds_defectGrpChart.getColumn(i,"INPPROCNM");
        		trace(" ====== (nInpProcName) ===== > "+nInpProcName);
        		if(i == 0)		// 첫행 경우 합침
        		{
        			nDefectSum += parseInt(nDefectQty);
        			nPreInpProc = nInpProc;
        		}
        		//trace(" ==== (비교 체크) : "+(nPreLayerId != nLayerId)+" || "+i);
        		if(i!=0 && (nPreInpProc != nInpProc))		// 첫행 이후 같지않은경우 설정(기준점 재설정)
        		{
        			nPreInpProc = nInpProc;					// 초기화
        			nDefectSum  = 0;						// 초기화
        		}
        		if(i != 0 && (nPreInpProc == nInpProc))		// 첫행 이후 같지않은경우 설정(불량 수량 증가)
        		{
        			nDefectSum += parseInt(nDefectQty);
        		}

        		// 변경점 체크
        		if(((nPostInpProc != nInpProc)) ||  nCnt == 1)
        		{
        			var nChkInsp = "";			// 같은 불량그룹에 다른 검사공정인 경우 더함 검사수
        			var nCt		 = 0;
        			for(var j=0; j<nCnt; j++)
        			{
        				//var nTLayerId 		= this.ds_defectGrpChart.getColumn(j,"LAYERID");
        				var nTInspProc		= this.ds_defectGrpChart.getColumn(j,"INPPROC");
        				var nTTotal 		= this.ds_defectGrpChart.getColumn(j,"INSPECTIONQTY");
        				//trace(" =====> : "+nGrpCode+" || "+nTGrpCode);
        				//if((nInpProc == nTLayerId) && (nChkInsp != nTInspProc))
        				if((nInpProc == nTInspProc) && (nChkInsp != nTInspProc))		// 검사공정이 같지않고(이전과), 담았을때 검사공정과 변경있으면 더한다.
        				{
        					nCt += parseInt(nTTotal);
        					nChkInsp = nTInspProc;
        				}
        			}

        			//trace(" ===== [불량수] ==== > : "+nDefectSum);

        			// 불량율 계산
        			var nAdd = this.ds_chart.addRow();
        			this.ds_chart.setColumn(nAdd,"name",nInpProcName);
        			this.ds_chart.setColumn(nAdd,"value",parseFloat(nDefectSum));			// 불량수
        			this.ds_chart.setColumn(nAdd,"TOTALQTY",parseFloat(nCt));				// 검사수

        			var nPreRate = parseFloat(nDefectSum) / parseFloat(nCt) * 100;
        			var nR = nexacro.round(nPreRate, this.fv_roundNum);
        			this.ds_chart.setColumn(nAdd,"percentage",parseFloat(nR));					// 불량율
        			this.ds_chart.setColumn(nAdd,"TYPE","A");								// TYPE
        		}
        	}

        	//trace(" ==== [차트값 확인] ===> : "+this.ds_chart.saveXML());
        	// 차트 설정
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.set_binddataset("ds_chart");
        	// 타이틀 보이지 않게 설정
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.title.set_visible( false );
        	// 범례 보이지 않게 설정
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.legend.set_visible( false );
        	// X축 타이틀 제거
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.categoryaxis.set_titletext("");

        	//this.div_work.form.tab_work.tabpage_defectMap.form.chart_2y.show();

        	// 색상 다양하게
        	this.div_work.form.tab_work.tabpage_defectmap.form.chart_2y.seriesset[0].set_barfillstyle("#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#2ba3a8,#ea5d66,#ffe100");
        	// "#86B5BC,#E30513,#C1C1C1,#86BC24,#E5007D,#2F8DCD,#F9D900,#F6A200,#BCBCBC"
        	this.fn_setMaxY();
        };

        /**************************************************************************
         * 7-1. 이미지 설정[↓]
         ***************************************************************************/
        /*
         * Layer 단 이미지 설정
         */
        this.fn_getLayerImg = function ()
        {
        	// div 초기화 전부 지운다.
        	//삭제 로직 탄다. (미생성 아직은)
        	this.fn_divAllDestroy();

        	// Layer 이미지 생성 / 좌표
        	this.fn_setDynamicLayerImg();

        };


        /*
         * Layer 이미지 생성시 기존 생성된 내용 삭제(div 안에)
         */
        this.fn_divAllDestroy = function ()
        {
        	var objComps = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen = objComps.length-1;
        	for(var i=nCompsLen; i>=0; i--) {
        		//alert("type=>"+this.gfnTypeOf(objComps[i]));
        		var objRtn = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.removeChild(objComps[i].name);
        		objRtn.destroy();
        		objRtn = null;
        	}
        	this.resetScroll();
        };


        /*
         * Layer 이미지 좌표 설정 (이미지x 빈것)
         */
        this.fn_setDynamicLayerImg = function ()
        {
        	this.nR = 0.5;		// 축소 사이즈  (db에서 사이즈 가져옴 그 내용 기준으로 축소 비율 정해야 될듯.. )

        	var nPreH = this.ds_imgLayerHdr.getColumn(0,"HEIGHT");		// 가로 세로 정보
        	var nPreW = this.ds_imgLayerHdr.getColumn(0,"WIDTH");

        	trace("[품목 Defect Map]___원본 사이즈 : "+nPreW+" | "+nPreH);

        	//this.nH = (parseInt(nPreH) * this.nR);		// 높이 (여백필요)	-> 이미지 뷰어 사이즈
        	//this.nW = (parseInt(nPreW) * this.nR);		// 넓이 (여백필요)	-> 이미지 뷰어 사이즈

        	this.nH = ((parseFloat(nPreH)* 1.02) * this.nR);		// 높이 (여백필요)	-> 이미지 뷰어 사이즈 (2% 증가) [21.06.10]
        	this.nW = ((parseFloat(nPreW)* 1.02) * this.nR);		// 넓이 (여백필요)	-> 이미지 뷰어 사이즈 (2% 증가) [21.06.10]

        	trace("비율 적용 후 원본 사이즈( H ) : "+this.nH+" | (W) "+this.nW);

        	// [20% 증가시킨 사이즈]
        	var nH2 = (((parseFloat(nPreH)* 1.02) - nPreH) * 0.5)*this.nR;		// [21.06.10]
        	var nW2 = (((parseFloat(nPreW)* 1.02) - nPreW) * 0.5)*this.nR;		// [21.06.10]

        	this.fv_dH2 = nH2;		// [21.06.10] 차이 추가
        	this.fv_dW2 = nW2;		// [21.06.10] 차이 추가

        	trace("########################################################");
        	trace("[nPreH]_: "+nPreH+" [nPreW]_: "+nPreW);
        	trace("########################################################");
        	trace("[this.nH]_: "+this.nH+" [this.nW]_: "+this.nW);
        	trace("########################################################");
        	trace("[this.fv_dH2]_: "+this.fv_dH2+" [this.fv_dW2]_: "+this.fv_dW2);

        	//trace("[품목 Defect Map]___비율 적용 후 사이즈 : "+this.nW+" | "+this.nH);

        	//var nPaddingHw = 3;						// 안쪽div와 image 안쪽 여백( 표시할 점이 2*2 인데 border 때문에 +1 씩 더해줌 )
        	// 밖(안쪽 여백)
        	//var nOutsideH = nH + (nPaddingHw*2)+40;	// 밖 div 높이
        	//var nOutsideW = nW + (nPaddingHw*2);		// 밖 div 넓이
        	// 여백 무시
        	//var nOutsideH 	= this.nH + 40;				// 밖 div 높이
        	//var nOutsideW 	= this.nW ;					// 밖 div 넓이

        	var nOutsideH   = this.nH + 50;				// 밖 div 높이(+10)		[21.06.10]
        	var nOutsideW 	= this.nW + 10;				// 밖 div 넓이(+10)		[21.06.10]

        	var nDivNum 	= 1;						// div 시작 id

        	var divLeft 	= 20;						// 시작 left
        	var divTop  	= 20;						// 시작 top (체크박스 title 추가)
        	var divSw		= 10;						// div 사이(넓)
        	var divSh		= 10;						// div 사이(높)

        	var divSubH 	= 40; 						// 내부 div 기본 높이(체크, sta, 콤보값 들어 있어야됨)

        	var nNextRow  	= parseInt(this.ds_imgLayerHdr.getColumn(0,"MAX_LAYER"));			// 한줄당 표시 개수
        	var f_divLeft 	= 20;						// 첫 시작 left
        	var f_divTop  	= 20;						// 첫 시작 top

        	for(var i=0; i<nNextRow; i++)
        	{
        		var divIndex = nDivNum+i;					// 중복되지 않는 id 값
        		if((i % nNextRow == 0) && i != 0)
        		{
        			divLeft = f_divLeft;					// left 시작점 변경(첫 시작 줄바꿈 후)  [20]
        			divTop = divTop + nOutsideH +  divSh;	// top 시작 점 변경 (상단여백 + (img + 내부 div여백 + 내부div 기본높이) + div 사이 높이)
        		}

        		// 밖 div 세팅 (동적 생성) div_part_
        		var objDiv = new Div("div_layer_"+divIndex, divLeft, divTop, nOutsideW, nOutsideH);
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.addChild("div_layer_"+divIndex ,objDiv);
        		objDiv.set_cssclass("div_WF_modulePart");  // 체크시 div_WF_modulePart_S  (이벤트에 넣어 줘야됨.)
        		objDiv.set_visible(true);
        		objDiv.show();

        		// static 생성
        		var objStatic = new Static("sta_layer"+divIndex, 0, 10, null, 20, 0, null);
        		objDiv.addChild("sta_layer"+divIndex, objStatic);
        		objStatic.set_cssclass("txt_12B");
        		if(i == 0)					// 첫행
        		{
        			objStatic.set_text("CS");
        		}else if(i == (nNextRow-1))	// 마지막행
        		{
        			objStatic.set_text("SS");
        		}
        		else
        		{
        			var nLay	= i;
        			objStatic.set_text((nLay+1)+"in");
        		}
        		//objStatic.set_text("test_title_"+i);
        		objStatic.set_textAlign("center");
        		objStatic.show();

        		// 체크 박스 생성
        		var objCheckBox = new CheckBox("chk_layer_"+divIndex, 10, 10, 22, 20);
        		objDiv.addChild("chk_layer_"+divIndex, objCheckBox);
        		objCheckBox.set_cssclass("chk_WF_module");
        		objCheckBox.addEventHandler( "onchanged", this.fn_clickSelect, this );	// 체크박스 변경 후
        		objCheckBox.show();

        		// 버튼 생성
        		var objButton = new Button("btn_layer_"+divIndex, null,10, 43, 20, 10);
        		objDiv.addChild("btn_layer_"+divIndex, objButton);
        		objButton.set_cssclass("btn_WF_colorSelect");
        		objButton.addEventHandler( "onclick", this.fn_clickColor, this );	// 색상 변경 팝업 호출 준비중.
        		objButton.show();

        		// 내부 div 설정
        		//var objDivIn = new Div("div_in_layer_"+divIndex, 0, 40, nOutsideW, nOutsideH-40);
        		var objDivIn = new Div("div_in_layer_"+divIndex, 5, 40, nOutsideW-10, nOutsideH-50);		// [21.06.10] 사이즈 조절 적용
        		objDiv.addChild("div_in_layer_"+divIndex ,objDivIn);
        		//objDivIn.set_background("#ff0000");
        		objDivIn.set_visible(true);

        		objDivIn.set_border("hidden,hidden,hidden,hidden");		// 추가(21.07.23)

        		objDivIn.show();

        		// 이미지 뷰어 설정
        		//var objImageViewer = new ImageViewer("img_"+divIndex, 2, 2, nW, nH);			// 여백 버전
        		var objImageViewer = new ImageViewer("img_layer_"+divIndex, 0, 0, this.nW, this.nH);
        		objDivIn.addChild("img_layer_"+divIndex ,objImageViewer);
        		//objImageViewer.set_image(this.strFileContents);			// 이미지 설정 (Layer 이미지 미적용)
        		objImageViewer.set_stretch("fit");							// 사이즈 맞춤
        		//objImageViewer.set_cssclass("img_photo");					// layer의 경우 css 불필요

        		//objImageViewer.set_border("hidden,hidden,hidden,hidden");		// 추가(21.07.23)

        		objImageViewer.show();

        		//trace(" ### [이미지 뷰어 설정] ### : "+nOutsideW+" > (6) "+nW+" || "+(nOutsideH-40)+" > (6) "+nH);
        		// 이미지 점찍기 첫 행만 테스트


        		// 좌표 설정 (필터링 정보)
        		//this.ds_imgPoint.filter("");
        		this.ds_imgPointFilter.filter("");
        		var nLay		= i;
        		var nLayFilter 	= (nLay+1)+"L";

        		// [테스트용 으로 Filter Ds 생성 해서 처리 조회 하게 되면 필터링 된값만 조회됨]
        		this.ds_imgPointFilter.clearData();
        		//trace(" ====[복사 전 rowcount] : "+this.ds_imgPointFilter.rowcount);
        		this.ds_imgPointFilter.copyData(this.ds_imgPoint, true);		// 필터링 후 설정

        		//trace(" ====[복사 후 rowcount] : "+this.ds_imgPointFilter.rowcount);

        		this.ds_imgPointFilter.filter("LAYERID =='"+nLayFilter+"'");

        		var nPointCnt = this.ds_imgPointFilter.rowcount;

        		//trace(" ====[필터 후 rowcount] : "+this.ds_imgPointFilter.rowcount);

        		if(nPointCnt != 0)
        		{
        			// db에서 값을 가져 온 좌표값으로 설정 한다.
        			for(var j=0; j < nPointCnt; j++)
        			{
        				var objStaPoint = new Static();//new Button();

        				var nX 		= this.ds_imgPointFilter.getColumn(j,"X");
        				var nY 		= this.ds_imgPointFilter.getColumn(j,"Y");
        				var nColor 	= this.ds_imgPointFilter.getColumn(j,"COLOR");

        				//objStaPoint.init( "sta_point_"+i, (0*0.5), (0*0.5), 2, 2 );			// left, top
        				//objStaPoint.init( "sta_point_"+j, 2+(nX*nR), 2+(nY*nR), 2, 2);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)
        				//objStaPoint.init( "sta_layer_point_"+j, (nX*this.nR), (this.nH - (nY*this.nR)), 4, 4);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)
        				//(21.05.25 높이 위치 조정)
        				objStaPoint.init( "sta_layer_point_"+j
        								//, (this.nW-2) >= (nX*this.nR) ? (nX*this.nR)-2 : (nX*this.nR)
        								, ((nX*this.nR) + nW2)
        								//, (this.nH-2) < (this.nH - (nY*this.nR)) ? (this.nH - (nY*this.nR))-2 : (this.nH - (nY*this.nR))
        								, ((nY * this.nR) + nH2)		// [21.06.10] 기준점 (왼쭉 하단에서 왼쪽 상단으로 수정)
        								, 4
        								, 4);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)

        				/*
        				// 긑 좌표 수정 및 y 좌표 위에서 부터 0 시작 적용

        				trace("##################################################################(1)db값 : (x) "+nX+" (y) "+nY);
        				trace("##################################################################(2) Y 축 "+(this.nH - (nY*this.nR)));
        				trace((this.nW-2) >= (nX*this.nR) ? (nX*this.nR)-2 : (nX*this.nR));
        				trace((this.nH-2) < (this.nH - (nY*this.nR)) ? (this.nH - (nY*this.nR))-2 : (this.nH - (nY*this.nR)));
        				*/
        				/*
        				var nType 		= this.ds_imgPointFilter.getColumn(j,"LAYERID");
        				if(nType == '1L')
        				{
        					trace(" ======? 확인 : "+ (nY*this.nR)+" || "+(this.nH - (nY*this.nR))+" || "+this.nH+" || "+(nX*this.nR));
        				}
        				*/

        				//objComp.set_color("red");
        				//var nIndex = this.div_work.form.div_00.addChild( "btn_test_01", objComp );

        				var nIndex = objDivIn.addChild("sta_layer_point_"+j, objStaPoint );
        				// DB에서 받아온 색상 설정
        				objStaPoint.set_background(nColor);

        				objStaPoint.show();
        			}
        		}

        		// 다음 밖 div left 설정
        		divLeft = divLeft + nOutsideW + divSw;


        		this.fv_barLen = divLeft;		// (21.05.18) layer / image / panel 사이 바 적용 길이()
        	}

        	// 다음 높이(하단 이미지 + Layer 설정)
        	this.nNextTop = nOutsideH+divTop;		// (생성된div + 시작 점 높이)

        	trace("(생성된 div) 높이 / 넓이 : "+nOutsideW+" / "+nOutsideH+" / "+nNextRow);

        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.set_scrollbartype('auto fixed');		// 스크롤바 생성
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.resetScroll();
        	this.resetScroll();
        };

        /*
         * popup div 생성
         */
        this.fn_clickColor = function(obj,e)
        {
        	// 마우스 클릭 위치
        	var nX = system.screenToClientX(nexacro.getApplication().mainframe, system.clientToScreenX(obj, 0));
        	var nY = system.screenToClientY(nexacro.getApplication().mainframe, system.clientToScreenY(obj, 0)) + parseInt(obj.getOffsetHeight());

        	// trace(" ### [버튼 ] ### : "+nX+" || "+nY);

        	var objApp = nexacro.getApplication();
        	var objMainframe = objApp.mainframe;

        	//var nx = system.clientToScreenX(obj, 0);
        	//var ny = system.clientToScreenY(obj, obj.getOffsetHeight() + 10);
        	var nTop = Math.round((objMainframe.height - nY));
        	if(nTop > 344){
        		// 정상
        		this.pdv_color.trackPopupByComponent(obj, 0, obj.getOffsetHeight());
        	}else{
        		// 상단으로 표시
        		this.pdv_color.trackPopupByComponent(obj, 0, obj.getOffsetHeight()-344-20);  // 팝업 - 버튼 높이
        	}
        	//trace(" ### [버튼 ](2) ### : "+nTop);

        	// 팝업 호출 객체(버튼)
        	openedBtn = obj;

        	/*
        	this.pdv_color.show();

        	this.pdv_color.trackPopup(nX, nY,  527, 344, "fn_Callback_pdv_ReasonConsumableList");
        	*/

        	return false;
        };

        // 툴바 - 색상 처리(RichTextEditorColorPicker 에 의해 호출되는 함수)
        this.setColor = function(color)
        {
        	//trace(" 팝업이 닫힌다 : "+color+" || "+openedBtn);

        	this.hideDiv();

        	if (!this.gfnIsEmpty(color))
        	{
        		if (!this.gfnIsEmpty(openedBtn))
        		{
        			//this.execCommand(btnComp, [elementId, color]);
        			//trace(" 버튼이 있다. : ");
        			openedBtn.set_background(color);

        			// 안에 해당하는 좌표 있다면 색상 변경.. 로직 (좌표 만큼 for 문 돌아서 색상 변경 할것!) -> db에 정보 있다. 좌표 수
        			//this.fn_setPointColor(openedBtn);  // 우선 불필요(색상 선택 후 적용시 하단에 생성되는 포인터들 색상 적용)
        		}
        		else
        		{
        			//this.execCommand(btnComp, color);
        			trace(" 버튼 없다.. : ");
        		}
        	}


        }
        /*
         *	툴바 관련 팝업 화면 숨기기
         */
        this.hideDiv = function(div)
        {
        	//trace("close______"+div);
        	this.pdv_color.closePopup();
        }

        /*
         * 포인트 색상 변경  (불필요!!! 우선)
         */
        this.fn_setPointColor = function (objBtn)
        {
        	var nCnt = 1;// db에서 정보 가져 올것
        	//trace("====> 버튼 확인 : "+objBtn);
        };

        /*
         * 필터 적용시 이미지 재조회 후 이미지 뷰어 재생성
         */
        this.fn_reSetImageLayer = function ()
        {
        	// 재조회 후 설정
        	var nCnt = this.ds_defectGrp.rowcount;
        	var nGrpCode	= "";
        	var nSubCode	= "";

        	for(var i=0; i< nCnt; i++)
        	{
        		var nG	= this.ds_defectGrp.getColumn(i,"GROUPCODE");
        		var nS	= this.ds_defectGrp.getColumn(i,"SUBCODE");
        		nGrpCode += i==0? nG : ", " +nG;
        		nSubCode += i==0? nS : ", " +nS;
        	}

        	// 조회 조건 재설정
        	var nItem	=	this.tab_search.tab_search01.form.edt_itemCode.value;
        	// Defect Map 조회 조건
        	this.ds_imgPoint.clearData();
        	this.ds_searchDefectMap.clearData();
        	this.ds_searchDefectMap.addRow();

        	var nPeriodfr = this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	this.ds_searchDefectMap.setColumn(0,"ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchDefectMap.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr); 	// 시작일
        	this.ds_searchDefectMap.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto); 	// 종료일
        	this.ds_searchDefectMap.setColumn(0,"P_PRODUCTIONTYPE"		, this.tab_search.tab_search01.form.cmb_prodType.value); 	// 생산구분

        	if(this.gfn_isNull(nItem))
        	{	// 품목코드 미입력시(한건만 선택)
        		var nChkCnt = this.ds_noinputMain.getCaseCount("CHK=='1'");
        		// 삭제건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        			return;
        		}
        		// 한건만 선택
        		if (nChkCnt > 1)
        		{
        			this.gfn_Message("GridOneCheck", "", "warning", "ok");			// 한개만 체크하세요.
        			return;
        		}
        		var nCnt = this.ds_noinputMain.rowcount;
        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk 		= this.ds_noinputMain.getColumn(i,"CHK");
        			var nProcId 	= this.ds_noinputMain.getColumn(i,"PRODUCTDEFID");
        			var nRev 		= this.ds_noinputMain.getColumn(i,"PRODUCTDEFVERSION");
        			var nLotId 		= this.ds_noinputMain.getColumn(i,"LOTID");
        			var nProcSegId	= this.ds_noinputMain.getColumn(i,"PROCESSSEGMENTID");
        			if(nChk == 1)
        			{
        				this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFID"		, nProcId); 	// 품목코드
        				this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFVERSION"	, nRev); 		// Rev
        				this.ds_searchDefectMap.setColumn(0,"P_PROCESSSEGMENTID"	, nProcSegId); 	// 공정(검사)
        				this.ds_searchDefectMap.setColumn(0,"P_LOTID"				, nLotId); 		// LOTID
        			}
        		}
        	}
        	else
        	{	// 품목코드 입력시(여러건 선택 가능?)
        		var nChkCnt = this.ds_inputMain.getCaseCount("CHK=='1'");
        		// 삭제건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        			return;
        		}
        		var f_Rev = "";
        		var f_Lot = "";
        		var nCnt = this.ds_inputMain.rowcount;
        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk 		= this.ds_inputMain.getColumn(i,"CHK");
        			var nProcId 	= this.ds_inputMain.getColumn(i,"PRODUCTDEFID");
        			var nRev 		= this.ds_inputMain.getColumn(i,"PRODUCTDEFVERSION");
        			var nLotId 		= this.ds_inputMain.getColumn(i,"LOTID");
        			var nProcSegId	= this.ds_inputMain.getColumn(i,"PROCESSSEGMENTID");
        			if(nChk == 1)
        			{
        				this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFID"			, nProcId); 	// 품목코드
        				f_Rev += this.gfn_isNull(f_Rev)? nRev : ", " +nRev;
        				f_Lot += this.gfn_isNull(f_Lot)? nLotId : ", " +nLotId;
        			}
        		}
        		this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFVERSION"	, f_Rev); 		// Rev
        		this.ds_searchDefectMap.setColumn(0,"P_LOTID"				, f_Lot); 		// LOTID
        	}

        	this.ds_searchDefectMap.setColumn(0,"P_GROUPCODE"			,nGrpCode);
        	this.ds_searchDefectMap.setColumn(0,"P_SUBCODE"				,nSubCode);


        	trace(" ==== [필터 적용시 Layer재 조회] === "+this.ds_searchDefectMap.saveXML());


        	this.fn_divAllDestroy();				// 생성되었던 이미지 삭제
        	this.div_work.form.tab_work.tabpage_defectmap.form.chk_c.set_value(false);
        	this.div_work.form.tab_work.tabpage_defectmap.form.chk_s.set_value(false);


        	// 조회 조건
        	var sSvcID 			= "selectProcDefectMapDefectImgPointList";
        	var sController 	= "/dfm00200/selectProcDefectMapDefectImgPointList.do";
        	var sInDatasets 	= "INPUT=ds_searchDefectMap";
        	var sOutDatasets 	= "ds_imgPoint=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 이미지 정보 조회 -> 64 (BLOB Type로 조회)
         */
        this.fn_getImage64 = function ()
        {
        	// 조회시 담아둔 조건으로 조회
        	this.ds_search.clearData();

        	this.ds_search.addRow();

        	// 조회 조건 재설정
        	var nItem	=	this.tab_search.tab_search01.form.edt_itemCode.value;
        	var nDs = "";
        	if(this.gfn_isNull(nItem))
        	{
        		nDs	= this.ds_noinputMain;
        	}
        	else
        	{
        		nDs = this.ds_inputMain;
        	}



        	var nInputCnt 	= nDs.rowcount;
        	var nChkCnt		= 0;
        	var nProcId		= "";
        	var nProcRev	= "";
        	var nPreLotId	= "";		// lot 수 체크
        	this.f_lotCnt	=	0;
        	for(var i=0; i<nInputCnt; i++)
        	{
        		var nChk		= nDs.getColumn(i,"CHK");
        		var nId			= nDs.getColumn(i,"PRODUCTDEFID");
        		var nRev		= nDs.getColumn(i,"PRODUCTDEFVERSION");
        		var nPostLot	= nDs.getColumn(i,"LOTID");
        		if(nChk == 1)
        		{
        			nChkCnt++;
        			nProcId 	= nProcId != nId 	? nId : nProcId;
        			nProcRev 	= nProcRev != nRev 	? nRev : nProcRev;
        			if(nPreLotId != nPostLot)
        			{
        				this.f_lotCnt++;
        				nPreLotId = nPostLot;
        			}
        		}
        	}

        	trace("체크된 내용 (수)---> : "+nProcId+" || "+nProcRev+" [LOT수] : "+this.f_lotCnt);

        	//Rev정보 앞에 그리드에 선택된값으로 설정..
        	this.ds_search.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0,"P_PRODUCTDEFID"			,nProcId);
        	this.ds_search.setColumn(0,"P_PRODUCTDEFVERSION"	,nProcRev);

        	this.ds_imgInfo.clearData();				// 이미지 좌표 정보 초기화(이미지 정보)
        	this.ds_defectGrpChart.clearData();			// 차트 정보 초기화

        	var sSvcID 			= "selectLayerImageInfo";
        	var sController 	= "/dfm00100/selectLayerImageInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_imgInfo=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        /*
         * 조회된 이미지 C면/S면 적용 좌표 적용
         */
        this.fn_setLayerImg = function ()
        {
        	var nRow 	= this.ds_imgInfo.findRow("TYPE",this.nChkImg);
        	if(nRow != -1)
        	{
        		this.strFileContents = nexacro.replaceAll(this.ds_imgInfo.getColumn(nRow, "BLOB"), String.fromCharCode(10), '');
        	}
        	else
        	{
        		this.gfn_Message("MessageParamIsNull", "Image", "error", "ok");
        		this.strFileContents = null;
        		return;
        	}
        	//trace("이미지 면 정보) : "+this.nChkImg);						//[ C / S ]
        	//trace("조회 결과(샘플 이미지) : "+this.strFileContents);		// 64 BLOB

        	this.fn_setDynamicLayerImgY();

        };


        /*
         * Layer 이미지 좌표 설정 (이미지 존재하는경우 인것) lot 기준으로 세팅 필요함.
         */
        this.fn_setDynamicLayerImgY = function ()
        {
        	trace("비율 적용 후 사이즈 : "+this.nW+" | "+this.nH+" | "+this.nR);

        	//var nOutsideH = this.nH + 40+30;			// 밖 div 높이
        	var nOutsideH = this.nH + 50+30;			// 밖 div 높이 [21.06.10] - 여백 설정   (2% 증가됨)
        	//var nOutsideW = this.nW ;					// 밖 div 넓이
        	var nOutsideW = this.nW + 10 ;				// 밖 div 넓이 [21.06.10] - 여백 설정   (2% 증가됨)

        	var nDivNum = 1;			// div 시작 id

        	var divLeft = 20;			// 시작 left
        	var divTop  = this.nNextTop + 30;			// 시작 top (체크박스 title 추가)
        	var divSw	= 10;			// div 사이(넓)
        	var divSh	= 10;			// div 사이(높)

        	var divSubH = 40; 			// 내부 div 기본 높이(체크, sta, 콤보값 들어 있어야됨)

        	var nNextRow  = this.f_lotCnt; 			//parseInt(this.ds_imgLayerHdr.getColumn(0,"MAX_LAYER"));			// 한줄당 표시 개수
        	var f_divLeft = 20;			// 첫 시작 left
        	var f_divTop  = 20;			// 첫 시작 top


        	// 구분이 되는 bar 생성 (21.05.18 - 추가)
        	// static 생성
        	trace(" (1) image Bar 생성 : "+this.fv_barLen);
        	trace(" [image Bar]=========> : "+divLeft+" / "+(divTop - 15)+" || "+this.fv_barLen);
        	var objStaticBar = new Static("sta_layer_bar_1", divLeft, (divTop - 15), (this.fv_barLen - 20), 2);
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.addChild("sta_layer_bar_1" ,objStaticBar);
        	objStaticBar.set_cssclass("guide_lineBox_red");
        	objStaticBar.set_background("#FF0000");
        	objStaticBar.show();



        	trace(" for 문 수 : "+nNextRow);

        	// 조회 조건 재설정(품목코드 조회 조건이 있는지 판단)
        	var nItem	=	this.tab_search.tab_search01.form.edt_itemCode.value;
        	var nDs = "";
        	if(this.gfn_isNull(nItem))
        	{
        		nDs	= this.ds_noinputMain;
        	}
        	else
        	{
        		nDs = this.ds_inputMain;
        	}

        	for(var i=0; i<nNextRow; i++)
        	{
        		var divIndex = nDivNum+i;					// 중복되지 않는 id 값
        		/*
        		//[ 불필요함 lot 수만큼 생길것 ]
        		if((i % nNextRow == 0) && i != 0)
        		{
        			divLeft = f_divLeft;					// left 시작점 변경(첫 시작 줄바꿈 후)
        			divTop = divTop + nOutsideH +  divSh;	// top 시작 점 변경 (상단여백 + (img + 내부 div여백 + 내부div 기본높이) + div 사이 높이)
        		}
        		*/

        		// [ Lot 기준으로 설정 준비 ]
        		var nFilterLot	= "";			// 필터 및 lot 명으로 사용
        		var nChkLotCnt = 0;
        		var nDsCnt = nDs.rowcount;
        		for(var li = 0; li < nDsCnt; li++)
        		{
        			var nChkMain 	= nDs.getColumn(li,"CHK");
        			var nLot 		= nDs.getColumn(li,"LOTID");
        			if(nChkMain == 1)
        			{
        				if(i == nChkLotCnt)
        				{
        					nFilterLot = nLot;

        				}
        				nChkLotCnt++;
        			}
        		}
        		trace("필터조건 lot 및 lot 명칭 : "+nFilterLot);

        		// 밖 div 세팅 (동적 생성) div_part_
        		var objDiv = new Div("div_layer_img_"+divIndex, divLeft, divTop, nOutsideW, nOutsideH);
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.addChild("div_layer_img_"+divIndex ,objDiv);
        		objDiv.set_cssclass("div_WF_modulePart");  // 체크시 div_WF_modulePart_S  (이벤트에 넣어 줘야됨.)
        		objDiv.set_visible(true);
        		objDiv.show();

        		// static 생성
        		var objStatic = new Static("sta_layer_img_"+divIndex, 0, 10, null, 20, 0, null);
        		objDiv.addChild("sta_layer_img_"+divIndex, objStatic);
        		objStatic.set_cssclass("txt_12B");
        		objStatic.set_text(nFilterLot);				// lot명으로 구성
        		objStatic.set_textAlign("center");
        		objStatic.set_font("normal 8pt/normal 'Arial'");
        		objStatic.show();


        		// 체크 박스 생성
        		var objCheckBox = new CheckBox("chk_layer_img_"+divIndex, 10, 10+30, 22, 20);
        		objDiv.addChild("chk_layer_img_"+divIndex, objCheckBox);
        		objCheckBox.set_cssclass("chk_WF_module");
        		objCheckBox.addEventHandler( "onchanged", this.fn_clickSelectLayerImg, this );	// 체크박스 변경 후
        		//objCheckBox.set_enable(false);
        		objCheckBox.show();

        		// 21.05.20 이미지 설정된 Layer 확대 버튼 추가
        		// 확대 버튼 생성
        		var objButtonP = new Button("btn_layer_plus_"+divIndex, 37, 10+30, 28, 20);		// 체크박스랑 5 차이
        		objDiv.addChild("btn_layer_plus_"+divIndex, objButtonP);
        		objButtonP.set_cssclass("btn_WF_grdZoomIn");
        		objButtonP.addEventHandler( "onclick", this.fn_clickLayerZoomIn, this );		// 색상 변경 팝업 호출 준비중.(Layer만 따로)
        		objButtonP.show();

        		// 버튼 생성
        		var objButton = new Button("btn_layer_img_"+divIndex, null,10+30, 43, 20, 10);
        		objDiv.addChild("btn_layer_img_"+divIndex, objButton);
        		objButton.set_cssclass("btn_WF_colorSelect");
        		objButton.addEventHandler( "onclick", this.fn_clickColor, this );	// 색상 변경 팝업 호출 준비중.
        		objButton.set_enable(false);
        		// 선택된 색상 설정
        		objButton.set_background( this.gfn_isNull(this.fv_color) ? "" : this.fv_color);		// 없는 경우 미지정 색상
        		objButton.show();

        		// 내부 div 설정
        		//var objDivIn = new Div("div_in_layer_img_"+divIndex, 0, 40+30, nOutsideW, nOutsideH-(40+30));
        		var objDivIn = new Div("div_in_layer_img_"+divIndex, 5, 40+30, nOutsideW-10, nOutsideH-(50+30));	// [21.06.10] 내부는 여백 없이 설정

        		objDiv.addChild("div_in_layer_img_"+divIndex ,objDivIn);
        		//objDivIn.set_background("#ff0000");
        		objDivIn.set_visible(true);
        		objDivIn.set_border("hidden,hidden,hidden,hidden");		// 추가(21.07.23)
        		objDivIn.show();

        		// 이미지 뷰어 설정
        		//var objImageViewer = new ImageViewer("img_"+divIndex, 2, 2, nW, nH);			// 여백 버전
        		var objImageViewer = new ImageViewer("img_layer_true_"+divIndex, 0, 0, this.nW, this.nH);
        		objDivIn.addChild("img_layer_true_"+divIndex ,objImageViewer);
        		objImageViewer.set_image(this.strFileContents);			// 이미지 설정 (Layer 이미지 미적용)
        		objImageViewer.set_stretch("fit");							// 사이즈 맞춤
        		objImageViewer.set_cssclass("img_photo");					// layer의 경우 css 불필요
        		//objImageViewer.set_border("hidden,hidden,hidden,hidden");		// 추가(21.07.23)
        		objImageViewer.show();

        		// 좌표 설정 (필터링 정보)
        		//this.ds_imgPoint.filter("");
        		this.ds_imgPointFilter.filter("");

        		//var nLay		= i;
        		var nLayFilter 	= this.fv_layer;//(nLay+1)+"L";

        		// [테스트용 으로 Filter Ds 생성 해서 처리 조회 하게 되면 필터링 된값만 조회됨]
        		this.ds_imgPointFilter.clearData();
        		this.ds_imgPointFilter.copyData(this.ds_imgPoint, true);		// 필터링 후 설정
        		this.ds_imgPointFilter.filter("LAYERID =='"+nLayFilter+"' && LOTID == '"+nFilterLot+"'");

        		//this.ds_imgPoint.filter("LAYERID =='"+nLayFilter+"'");
        		//var nPointCnt = this.ds_imgPoint.rowcount;
        		var nPointCnt = this.ds_imgPointFilter.rowcount;

        		//trace(" ====[이미지 적용 - 필터 후 rowcount] : "+this.ds_imgPoint.rowcount);

        		if(nPointCnt != 0)
        		{
        			// db에서 값을 가져 온 좌표값으로 설정 한다.
        			for(var j=0; j < nPointCnt; j++)
        			{
        				var objStaPoint = new Static();//new Button();

        				//var nX 		= this.ds_imgPoint.getColumn(j,"X");
        				//var nY 		= this.ds_imgPoint.getColumn(j,"Y");

        				var nX 		= this.ds_imgPointFilter.getColumn(j,"X");
        				var nY 		= this.ds_imgPointFilter.getColumn(j,"Y");

        				// [21.05.17] 색상 선택 안한경우 기본색상 적용
        				var nDsColor	= this.ds_imgPointFilter.getColumn(j,"COLOR");
        				var nColor 		= this.gfn_isNull(this.fv_color) ? nDsColor : this.fv_color;					// 선택된 색상 지정
        				//trace(" 포인터 색상 지정 : "+nColor);

        				//objStaPoint.init( "sta_point_"+i, (0*0.5), (0*0.5), 2, 2 );			// left, top
        				//objStaPoint.init( "sta_point_"+j, 2+(nX*nR), 2+(nY*nR), 2, 2);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)
        				//objStaPoint.init( "sta_layer_point_img_"+j, (nX*this.nR), (this.nH - (nY*this.nR)), 4, 4);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)
        				// (21.05.25) 높이 위치 조정
        				objStaPoint.init( "sta_layer_point_img_"+j
        									//, (this.nW-2) >= (nX*this.nR) ? (nX*this.nR)-2 : (nX*this.nR)
        									, ((nX*this.nR) + this.fv_dW2)				// [21.06.10] 2% 증가된값에 반정도 시작 정보만큰 더함 (0 -> 5)
        									//, (this.nH-2) < (this.nH - (nY*this.nR)) ? (this.nH - (nY*this.nR))-2 : (this.nH - (nY*this.nR))
        									, ((nY * this.nR) + this.fv_dH2)			// [21.06.10] 기준점 (왼쭉 하단에서 왼쪽 상단으로 수정)
        									, 4
        									, 4);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)
        				//trace(" db값 : (x) "+nX+" (y) "+nY+" || "+(nX*this.nR)+" || "+(nY*this.nR));

        				//objComp.set_color("red");
        				//var nIndex = this.div_work.form.div_00.addChild( "btn_test_01", objComp );

        				var nIndex = objDivIn.addChild("sta_layer_point_img_"+j, objStaPoint );
        				// DB에서 받아온 색상 설정
        				objStaPoint.set_background(nColor);

        				objStaPoint.show();
        			}
        		}
        		// 다음 밖 div left 설정
        		divLeft = divLeft + nOutsideW + divSw;

        	}
        	// 다음 높이(하단 이미지 + Layer 설정)
        	this.nNextPanelTop = nOutsideH+divTop;

        	trace("(생성된 div) 높이 / 넓이 : "+nOutsideW+" / "+nOutsideH+" / "+nNextRow+" / "+this.nNextPanelTop);

        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.set_scrollbartype('auto fixed');		// 스크롤바 생성
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.resetScroll();
        	this.resetScroll();
        };

        /*
         * 체크 박스 선택시 테두리 설정
         */
        this.fn_clickSelect = function (obj,e)
        {
        	var nIdx = obj.name.replace('chk_layer_', '');
        	//trace(" 체크 박스 선택시  : "+obj.name+" || "+e.postvalue+" || "+nIdx);
        	if(e.postvalue)
        	{
        		//obj.parent.set_cssclass("div_WF_modulePart_S");
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all["div_layer_"+nIdx].set_cssclass("div_WF_modulePart_S");
        	}
        	else
        	{
        		//obj.parent.set_cssclass("div_WF_modulePart");
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all["div_layer_"+nIdx].set_cssclass("div_WF_modulePart");
        	}

        	// 판넬 정보 있으면 우선 삭제..
        	this.fn_divAllPanelDestroy
        	// 이미지 없는 Layer 제외 전부 삭제(21.05.15) 추가
        	this.fn_divAllLayerDestroy();
        };

        /*
         * 적용시 기존 생성 된것 삭제
         */
        this.fn_divAllLayerDestroy = function ()
        {
        	var objComps = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen = objComps.length-1;
        	var nNonDestroyIdx = this.ds_imgLayerHdr.getColumn(0,"MAX_LAYER")-1;

        	//trace(" Layer 이외의 삭제 불가능 수 : "+nNonDestroyIdx+" || "+nCompsLen);

        	for(var i=nCompsLen; i> nNonDestroyIdx; i--) {
        		//alert("type=>"+this.gfnTypeOf(objComps[i]));
        		//trace(" 이미지 없는 Layer 제외 : "+objComps[i].name+" || "+i+" |Max| "+nNonDestroyIdx);

        		var objRtn = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.removeChild(objComps[i].name);
        		objRtn.destroy();
        		objRtn = null;

        	}
        	this.resetScroll();
        };



        /*
         * 체크 박스 선택시 테두리 설정
         */
        this.fn_clickSelectLayerImg = function (obj,e)
        {
        	var nIdx = obj.name.replace('chk_layer_img_', '');
        	//trace(" 체크 박스 선택시  : "+obj.name+" || "+e.postvalue+" || "+nIdx);
        	if(e.postvalue)
        	{
        		//obj.parent.set_cssclass("div_WF_modulePart_S");
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all["div_layer_img_"+nIdx].set_cssclass("div_WF_modulePart_S");
        	}
        	else
        	{
        		//obj.parent.set_cssclass("div_WF_modulePart");
        		this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all["div_layer_img_"+nIdx].set_cssclass("div_WF_modulePart");
        	}



        };

        /*
         * Panel 정보 조회(판넬 적용 클릭시 - 필터된 내용 기준으로 lay의 판넬 정보를 읽어 온다.)
         */
        this.fn_getPanelInfo = function ()
        {
        	//기존 생성된 판넬 정보 제거 (max lay 정보로 [이미지없는 Layer + 이미지 있는 1개 이후 전부 제거])
        	this.fn_divAllPanelDestroy();

        	// 선택한 판넬 정보
        	//trace("판넬 정보 조회전 Layer 정보 확인 : "+this.fv_layer+" || "+this.fv_lot);			//  Lot 정보 필요

        	// 재조회 후 설정
        	var nCnt = this.ds_defectGrpLayer.rowcount;		// 필터된 내용의 그리드 or 조회된 내용의 그리드 정보
        	var nGrpCode	= "";						// 불량그룹(Layer에 해당하는 것만)
        	var nSubCode	= "";						// 불량세부(layer에 해당하는 것만)
        	for(var i=0; i< nCnt; i++)
        	{
        		var nG	= this.ds_defectGrpLayer.getColumn(i,"GROUPCODE");
        		var nS	= this.ds_defectGrpLayer.getColumn(i,"SUBCODE");
        		var nL	= this.ds_defectGrpLayer.getColumn(i,"LAYERID");
        		if(nL == this.fv_layer)
        		{
        			nGrpCode += i==0? nG : ", " +nG;
        			nSubCode += i==0? nS : ", " +nS;
        		}
        	}
        	this.ds_imgPanelHdr.clearData();		// 판넬의 생성 정보를 가져올 ds

        	// 조회시 담아둔 조건으로 조회
        	var nItem	=	this.tab_search.tab_search01.form.edt_itemCode.value;
        	this.ds_searchDefectMapPanel.clearData();
        	this.ds_searchDefectMapPanel.addRow();

        	// Defect Map 조회 조건
        	var nPeriodfr = this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	this.ds_searchDefectMapPanel.setColumn(0,"ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchDefectMapPanel.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr); 	// 시작일
        	this.ds_searchDefectMapPanel.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto); 	// 종료일
        	this.ds_searchDefectMapPanel.setColumn(0,"P_PRODUCTIONTYPE"		, this.tab_search.tab_search01.form.cmb_prodType.value); 	// 생산구분

        	if(this.gfn_isNull(nItem))
        	{	// 품목코드 미입력시(한건만 선택)
        		var nChkCnt = this.ds_noinputMain.getCaseCount("CHK=='1'");
        		// 삭제건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        			return;
        		}
        		// 한건만 선택
        		if (nChkCnt > 1)
        		{
        			this.gfn_Message("GridOneCheck", "", "warning", "ok");			// 한개만 체크하세요.
        			return;
        		}
        		var nCnt = this.ds_noinputMain.rowcount;
        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk 		= this.ds_noinputMain.getColumn(i,"CHK");
        			var nProcId 	= this.ds_noinputMain.getColumn(i,"PRODUCTDEFID");
        			var nRev 		= this.ds_noinputMain.getColumn(i,"PRODUCTDEFVERSION");
        			var nLotId 		= this.ds_noinputMain.getColumn(i,"LOTID");
        			var nProcSegId	= this.ds_noinputMain.getColumn(i,"PROCESSSEGMENTID");
        			if(nChk == 1)
        			{
        				this.ds_searchDefectMapPanel.setColumn(0,"P_PRODUCTDEFID"		, nProcId); 	// 품목코드
        				this.ds_searchDefectMapPanel.setColumn(0,"P_PRODUCTDEFVERSION"	, nRev); 		// Rev
        				this.ds_searchDefectMapPanel.setColumn(0,"P_PROCESSSEGMENTID"	, nProcSegId); 	// 공정(검사)
        				this.ds_searchDefectMapPanel.setColumn(0,"P_LOTID"				, this.fv_lot); // LOTID (이미지에서 선택된 Lot)
        			}
        		}
        	}
        	else
        	{	// 품목코드 입력시(여러건 선택 가능?)
        		var nChkCnt = this.ds_inputMain.getCaseCount("CHK=='1'");
        		// 삭제건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        			return;
        		}
        		var f_Rev = "";
        		var f_Lot = "";
        		var nCnt = this.ds_inputMain.rowcount;
        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk 		= this.ds_inputMain.getColumn(i,"CHK");
        			var nProcId 	= this.ds_inputMain.getColumn(i,"PRODUCTDEFID");
        			var nRev 		= this.ds_inputMain.getColumn(i,"PRODUCTDEFVERSION");
        			var nLotId 		= this.ds_inputMain.getColumn(i,"LOTID");
        			var nProcSegId	= this.ds_inputMain.getColumn(i,"PROCESSSEGMENTID");
        			if(nChk == 1)
        			{
        				this.ds_searchDefectMapPanel.setColumn(0,"P_PRODUCTDEFID"			, nProcId); 	// 품목코드
        				f_Rev += this.gfn_isNull(f_Rev)? nRev : ", " +nRev;
        				f_Lot += this.gfn_isNull(f_Lot)? nLotId : ", " +nLotId;
        			}
        		}
        		this.ds_searchDefectMapPanel.setColumn(0,"P_PRODUCTDEFVERSION"	, f_Rev); 				// Rev
        		this.ds_searchDefectMapPanel.setColumn(0,"P_LOTID"				, this.fv_lot); 		// LOTID (선택된)
        	}

        	this.ds_searchDefectMapPanel.setColumn(0,"P_LAYER"					,this.fv_layer);		// Layer (선택된)
        	this.ds_searchDefectMapPanel.setColumn(0,"P_GROUPCODE"				,nGrpCode);
        	this.ds_searchDefectMapPanel.setColumn(0,"P_SUBCODE"				,nSubCode);

        	//trace(" [판넬조회 조건]===========> : "+this.ds_searchDefectMapPanel.saveXML());

        	// 조회 조건
        	var sSvcID 			= "selectProcDefectMapPanelFilterList";
        	var sController 	= "/dfm00200/selectProcDefectMapPanelFilterList.do";
        	var sInDatasets 	= "INPUT=ds_searchDefectMapPanel";
        	var sOutDatasets 	= "ds_imgPanelHdr=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        }

        /*
         * 적용시 기존 생성 된것 삭제(판넬 정보만 삭제)
         */
        this.fn_divAllPanelDestroy = function ()
        {
        	var objComps = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen = objComps.length-1;
        	var nNonDestroyIdx = parseInt(this.ds_imgLayerHdr.getColumn(0,"MAX_LAYER"))+this.f_lotCnt;	// bar 하나 더 생심 (21.05.18)

        	trace(" ### [lot 개수 확인] ### :  "+this.f_lotCnt);
        	trace(" ### [삭제 불가능 위치?] ### :  "+nCompsLen+" || "+nNonDestroyIdx);


        	for(var i=nCompsLen; i> nNonDestroyIdx; i--) {
        		//alert("type=>"+this.gfnTypeOf(objComps[i]));
        		//trace(" 판넬정보만 삭제 "+objComps[i].name+" || "+i+" |Max| "+nNonDestroyIdx);
        		var objRtn = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.removeChild(objComps[i].name);
        		objRtn.destroy();

        		objRtn = null;
        	}
        	this.resetScroll();
        };


        /*
         * 동적 판넬 이미지 생성
         */
        this.fn_setDynamicPanelImg = function ()
        {
        	//trace("비율 적용 후 사이즈 (판넬생성): "+this.nW+" | "+this.nH+" | "+this.nR);

        	//var nOutsideH = this.nH + 40;			// 밖 div 높이
        	//var nOutsideW = this.nW ;				// 밖 div 넓이

        	var nOutsideH = this.nH + 50;			// 밖 div 높이	[21.06.11] 5만큼씩 여백 추가
        	var nOutsideW = this.nW + 10;			// 밖 div 넓이 [21.06.11] 5만큼씩 여백 추가

        	var nDivNum = 0;//1;			// div 시작 id

        	var divLeft = 20;			// 시작 left
        	var divTop  = this.nNextPanelTop + 30;			// 시작 top (이미지 있는 Layer 생성후 그 다음 설정)

        	//trace(" ========== [생성될 높이] ==========> : "+this.nNextPanelTop);

        	var divSw	= 10;			// div 사이(넓)
        	var divSh	= 10;			// div 사이(높)

        	var divSubH = 40; 			// 내부 div 기본 높이(체크, sta, 콤보값 들어 있어야됨)
        	// (21.05.21 한줄에 5개 고정 수정)
        	var nNextRow  = 5;			// 한줄당 표시 개수(이미지 없는 Layer내용 표시)
        	var f_divLeft = 20;			// 첫 시작 left
        	var f_divTop  = 20;			// 첫 시작 top

        	// 선택된 Layer로 필터(조회되면 하나일텐데 임시로 or 실재 사용가능 하나의 층만)
        	//this.ds_imgPanelHdr.filter("");
        	//this.ds_imgPanelHdr.filter("LAYERID == '"+this.fv_layer+"'");



        	var nPCnt 	= this.ds_imgPanelHdr.rowcount;			// 생성해야될 판넬 갯수
        	var nRowCnt = 0;									// 총 생성되는 row 수
        	var nShare	= parseInt(nPCnt / nNextRow);			// 몫
        	var nMod 	= parseInt(nPCnt % nNextRow);			// 나머지

        	nMod != 0 ? (nRowCnt = nShare+1) : (nRowCnt = nShare) ;

        	//trace(" =========> : "+nPCnt+" / "+nNextRow+" || "+nShare+"||"+nMod+" ||"+nRowCnt);


        	// 구분이 되는 bar 생성 (21.05.18 - 추가)
        	// static 생성
        	//trace(" [image Bar]=========> : "+divLeft+" / "+(divTop - 15)+" || "+this.fv_barLen);
        	//trace(" [Bar]=========> : "+divLeft+" / "+(divTop - 15)+" || "+this.fv_barLen);
        	var objStaticBar = new Static("sta_layer_panel_bar_1", divLeft, (divTop - 15), (this.fv_barLen - 20), 2);
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.addChild("sta_layer_panel_bar_1" ,objStaticBar);
        	objStaticBar.set_cssclass("guide_lineBox_red");
        	objStaticBar.set_background("#FF0000");
        	objStaticBar.show();

        	trace(" ========== [생성될 높이] ==========> : "+divLeft+" , "+(divTop - 15)+" , "+(this.fv_barLen - 20)+" , "+2);


        	/*
        	 * 총생성될 row 만큼
        	 *       읽어온 판넬 id 로 생성 (체크 박스 대신에 확대 버튼 추가.)
        	 */
        	for(var r=0; r<nRowCnt; r++)
        	{
        		var nOneRowCnt = (nPCnt >= nNextRow) ? nNextRow : nPCnt;
        		var divIndex = 0;
        		for(var i=0; i<nOneRowCnt; i++)					// 한줄에 표시 되는 갯수 설정
        		{
        			divIndex = nDivNum+i+1;					// 중복되지 않는 id 값 (r추가 줄바꿈)

        			trace("생성 indx 확인 : "+divIndex+" || "+nDivNum+" + "+i+" + "+1);
        			/*
        			if((i % nNextRow == 0) && i != 0)
        			{
        				divLeft = f_divLeft;					// left 시작점 변경(첫 시작 줄바꿈 후)
        				divTop = divTop + nOutsideH +  divSh;	// top 시작 점 변경 (상단여백 + (img + 내부 div여백 + 내부div 기본높이) + div 사이 높이)
        			}
        			*/
        			var nFindPanelRow 	= divIndex;								// 판넬명 찾기 위핸 row위치
        			var nPanelId 		= this.ds_imgPanelHdr.getColumn((nFindPanelRow-1),"PANELID")	// 판넬 ID


        			// 밖 div 세팅 (동적 생성) div_part_
        			var objDiv = new Div("div_layer_panel_"+divIndex, divLeft, divTop, nOutsideW, nOutsideH);
        			this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.addChild("div_layer_panel_"+divIndex ,objDiv);
        			objDiv.set_cssclass("div_WF_modulePart");  // 체크시 div_WF_modulePart_S  (이벤트에 넣어 줘야됨.)
        			objDiv.set_visible(true);
        			objDiv.show();

        			// static 생성
        			var objStatic = new Static("sta_layer_panel_"+divIndex, 0, 10, null, 20, 0, null);
        			objDiv.addChild("sta_layer_panel_"+divIndex, objStatic);
        			objStatic.set_cssclass("txt_12B");
        			objStatic.set_text(nPanelId);		// 판넬 ID
        			objStatic.set_textAlign("center");
        			objStatic.show();


        			// 체크 박스 생성 (버튼으로 대체 할 것 -> 확대 팝업 연동)
        			/*
        			var objCheckBox = new CheckBox("chk_layer_img_"+divIndex, 10, 10, 22, 20);
        			objDiv.addChild("chk_layer_img_"+divIndex, objCheckBox);
        			objCheckBox.set_cssclass("chk_WF_module");
        			objCheckBox.addEventHandler( "onchanged", this.fn_clickSelectLayerImg, this );	// 체크박스 변경 후
        			//objCheckBox.set_enable(false);
        			objCheckBox.show();
        			*/
        			// 확대 버튼 생성
        			var objButtonP = new Button("btn_layer_panel_plus_"+divIndex, 10, 10, 43, 22);
        			objDiv.addChild("btn_layer_panel_plus_"+divIndex, objButtonP);
        			objButtonP.set_cssclass("btn_WF_grdZoomIn");
        			objButtonP.addEventHandler( "onclick", this.fn_clickZoomIn, this );	// 색상 변경 팝업 호출 준비중.
        			//objButtonP.set_enable(false);
        			objButtonP.show();


        			// 버튼 생성
        			var objButton = new Button("btn_layer_panel_"+divIndex, null,10, 43, 20, 10);
        			objDiv.addChild("btn_layer_panel_"+divIndex, objButton);
        			objButton.set_cssclass("btn_WF_colorSelect");
        			objButton.addEventHandler( "onclick", this.fn_clickColor, this );	// 색상 변경 팝업 호출 준비중.
        			objButton.set_enable(false);
        			// 선택된 색상 설정
        			objButton.set_background( this.gfn_isNull(this.fv_color) ? "" : this.fv_color);		// 없는 경우 미선택
        			objButton.show();

        			// 내부 div 설정
        			//var objDivIn = new Div("div_in_panel_img_"+divIndex, 0, 40, nOutsideW, nOutsideH-40);
        			var objDivIn = new Div("div_in_panel_img_"+divIndex, 5, 40, nOutsideW-10, nOutsideH-50);	// [21.06.11] 여백 만큰 축소

        			objDiv.addChild("div_in_panel_img_"+divIndex ,objDivIn);
        			//objDivIn.set_background("#ff0000");
        			objDivIn.set_visible(true);
        			objDivIn.set_border("hidden,hidden,hidden,hidden");		// 추가[21.07.23]
        			objDivIn.show();

        			// 이미지 뷰어 설정
        			//var objImageViewer = new ImageViewer("img_"+divIndex, 2, 2, nW, nH);			// 여백 버전
        			var objImageViewer = new ImageViewer("img_panel_true_"+divIndex, 0, 0, this.nW, this.nH);
        			objDivIn.addChild("img_panel_true_"+divIndex ,objImageViewer);
        			objImageViewer.set_image(this.strFileContents);				// 이미지 설정 (Layer 이미지 적용)
        			objImageViewer.set_stretch("fit");							// 사이즈 맞춤
        			objImageViewer.set_cssclass("img_photo");					// layer의 경우 css 불필요

        			//objImageViewer.set_border("hidden,hidden,hidden,hidden");		// 추가(21.07.23)

        			objImageViewer.show();

        			// 좌표 설정 (필터링 정보)
        			//this.ds_imgPoint.filter("");
        			this.ds_imgPointFilter.filter("");

        			//var nLay		= i;
        			var nLayFilter 	= this.fv_layer;//(nLay+1)+"L";				// 선택한 Layer
        			var nFilterLot 	= this.fv_lot;								// 선택한 Lot

        			// [테스트용 으로 Filter Ds 생성 해서 처리 조회 하게 되면 필터링 된값만 조회됨]
        			this.ds_imgPointFilter.clearData();
        			this.ds_imgPointFilter.copyData(this.ds_imgPoint, true);		// 필터링 후 설정 (Layer, Panel 기준으로 필터 후 생성)
        			this.ds_imgPointFilter.filter("LAYERID =='"+nLayFilter+"' && PANELID =='"+nPanelId+"' && LOTID == '"+nFilterLot+"'");

        			trace("[필터 조건] : "+"LAYERID =='"+nLayFilter+"' && PANELID =='"+nPanelId+"' && LOTID == '"+nFilterLot+"'");
        			//this.ds_imgPoint.filter("LAYERID =='"+nLayFilter+"'");
        			//var nPointCnt = this.ds_imgPoint.rowcount;
        			var nPointCnt = this.ds_imgPointFilter.rowcount;

        			trace(" ====[이미지 적용 - 필터 후 rowcount] : "+this.ds_imgPoint.rowcount);

        			if(nPointCnt != 0)
        			{
        				// db에서 값을 가져 온 좌표값으로 설정 한다.
        				for(var j=0; j < nPointCnt; j++)
        				{
        					var objStaPoint = new Static();//new Button();

        					//var nX 		= this.ds_imgPoint.getColumn(j,"X");
        					//var nY 		= this.ds_imgPoint.getColumn(j,"Y");

        					var nX 		= this.ds_imgPointFilter.getColumn(j,"X");
        					var nY 		= this.ds_imgPointFilter.getColumn(j,"Y");


        					// [21.05.17] 색상 선택 안한경우 기본색상 적용
        					var nDsColor	= this.ds_imgPointFilter.getColumn(j,"COLOR");
        					var nColor 		= this.gfn_isNull(this.fv_color) ? nDsColor : this.fv_color;					// 선택된 색상 지정
        					//var nColor 	= this.fv_color;					// 선택된 색상 지정

        					//trace(" 포인터 색상 지정 : "+nColor);

        					//objStaPoint.init( "sta_point_"+i, (0*0.5), (0*0.5), 2, 2 );			// left, top
        					//objStaPoint.init( "sta_point_"+j, 2+(nX*nR), 2+(nY*nR), 2, 2);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)

        					// (21.05.25) 높이 위치 조정
        					objStaPoint.init( "sta_panel_point_img_"+j
        									//, (this.nW-2) >= (nX*this.nR) ? (nX*this.nR)-2 : (nX*this.nR)
        									, ((nX*this.nR) + this.fv_dW2)					// [21.05.31] 2% 증가된값에 반정도 시작 정보만큰 더함 (0 -> 5)
        									//, (this.nH-2) < (this.nH - (nY*this.nR)) ? (this.nH - (nY*this.nR))-2 : (this.nH - (nY*this.nR))
        									, ((nY * this.nR) + this.fv_dH2)			// [21.06.01] 기준점 (왼쭉 하단에서 왼쪽 상단으로 수정)
        									, 4
        									, 4);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)


        					//objComp.set_color("red");
        					//var nIndex = this.div_work.form.div_00.addChild( "btn_test_01", objComp );

        					var nIndex = objDivIn.addChild("sta_panel_point_img_"+j, objStaPoint );
        					// DB에서 받아온 색상 설정
        					objStaPoint.set_background(nColor);

        					objStaPoint.show();
        				}
        			}
        			// 다음 밖 div left 설정
        			divLeft = divLeft + nOutsideW + divSw;
        		}
        		// 인덱스 줄바꿈시 증가값 저장
        		nDivNum = divIndex;
        		// 한줄에 표시 되는 갯수 설정
        		nPCnt = (nPCnt - nNextRow);
        		// 줄바꿈 전에 재 설정
        		divLeft = f_divLeft;					// left 시작점 변경(첫 시작 줄바꿈 후)
        		divTop = divTop + nOutsideH +  divSh;	// top 시작 점 변경 (상단여백 + (img + 내부 div여백 + 내부div 기본높이) + div 사이 높이)
        	}
        	//return;


        	// 다음 높이(하단 이미지 + Layer 설정)
        	// this.nNextPanelTop = nOutsideH+divTop;

        	//trace("(생성된 div-panel) 높이 / 넓이 : "+nOutsideW+" / "+nOutsideH+" / "+nNextRow);

        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.set_scrollbartype('auto fixed');		// 스크롤바 생성
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.resetScroll();
        	this.resetScroll();
        };


        /*
         * 확대 팝업 호출 (Layer 확대시)
         */
        this.fn_clickLayerZoomIn = function(obj,e)
        {
        	var nIdx = obj.name.replace('btn_layer_plus_', '');

        	trace("  ===> : "+nIdx);
        	// panel Id 없음
        	var nTitle	 	= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all["div_layer_img_"+nIdx].form.all["sta_layer_img_"+nIdx].text;
        	var nLayerId	= this.fv_layer;
        	var nImage		= this.strFileContents;
        	var nPointDsCnt	= this.ds_imgPoint.rowcount;

        	// 이미지 확대 필수값
        	if(this.gfn_isNull(nLayerId) || this.gfn_isNull(nImage) || (nPointDsCnt == 0)
        		//	|| this.gfn_isNull(this.fv_color) 		// 21.05.17 값 없는 경우 기본값 설정
        		|| this.gfn_isNull(this.ds_imgLayerHdr.getColumn(0,"HEIGHT"))
        		|| this.gfn_isNull(this.ds_imgLayerHdr.getColumn(0,"WIDTH"))
        	)
        	{
        		this.gfn_Message("MessageParamIsNull", "Image", "error", "ok");
        		return;
        	}

        	//trace(" ===> : "+nTitle+" || "+nLayerId+" || ");



        	var popupId = "IMAGE_LAYER_ZOOM_P";
        	var oArg = {};
        	var opts = "width=600,height=650";
        	// 기입력된 값이 있으면
        	oArg.arg_LayerId	= nLayerId;		// LayerId
        	oArg.arg_LotId		= nTitle;		// LotId
        	//oArg.arg_PanelId 	= nPanelId;		// 판넬id
        	oArg.arg_Title 		= nTitle;		// 타이틀 적용
        	oArg.arg_Image 		= nImage;		// 이미지 정보
        	oArg.arg_DsPoint 	= this.ds_imgPoint;			// 좌표정보들
        	oArg.arg_Color	 	= this.fv_color	// 색상 정보 (없으면 기본값 설정)

        	oArg.arg_H	 		= this.ds_imgLayerHdr.getColumn(0,"HEIGHT");	// 높이
        	oArg.arg_W	 		= this.ds_imgLayerHdr.getColumn(0,"WIDTH");		// 넓이


        	this.gfn_openPopup(popupId,"dfm::DFM00200P.xfdl" ,oArg ,opts);

        };


        /*
         * 확대 팝업 호출
         */
        this.fn_clickZoomIn = function(obj,e)
        {
        	var nIdx = obj.name.replace('btn_layer_panel_plus_', '');
        	trace("[선택된 정보@.@] : "+nIdx);					// 판넬정보
        	/*

        	trace("[이미지 정보] : "+this.strFileContents); 	// 이미지 정보 (C/S면)

        	trace("[선택된 layer] : "+this.fv_layer); 			// LAYER
        	trace("[그외 포인트 좌표 정보 ds] : ");
        	*/
        	var nPanelId 	= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all["div_layer_panel_"+nIdx].form.all["sta_layer_panel_"+nIdx].text;
        	trace("====>  : "+nPanelId);					// 판넬정보
        	var nLayerId	= this.fv_layer;
        	var nImage		= this.strFileContents;
        	var nPointDsCnt	= this.ds_imgPoint.rowcount;

        	// 이미지 확대 필수값
        	if(this.gfn_isNull(nPanelId) || this.gfn_isNull(nLayerId) || this.gfn_isNull(nImage) || (nPointDsCnt == 0)
        		//	|| this.gfn_isNull(this.fv_color) 		// 21.05.17 값 없는 경우 기본값 설정
        		|| this.gfn_isNull(this.ds_imgLayerHdr.getColumn(0,"HEIGHT"))
        		|| this.gfn_isNull(this.ds_imgLayerHdr.getColumn(0,"WIDTH"))
        	)
        	{
        		this.gfn_Message("MessageParamIsNull", "Image", "error", "ok");
        		return;
        	}

        	var popupId = "IMAGE_ZOOM_P";
        	var oArg = {};
        	var opts = "width=800,height=800";
        	// 기입력된 값이 있으면
        	oArg.arg_LayerId	= nLayerId;		// LayerId
        	oArg.arg_PanelId 	= nPanelId;		// 판넬id
        	oArg.arg_LotId		= this.fv_lot;	// LotId
        	oArg.arg_Image 		= nImage;		// 이미지 정보
        	oArg.arg_DsPoint 	= this.ds_imgPoint;			// 좌표정보들
        	oArg.arg_Color	 	= this.fv_color	// 색상 정보 (없으면 기본값 설정)

        	oArg.arg_H	 		= this.ds_imgLayerHdr.getColumn(0,"HEIGHT");	// 높이
        	oArg.arg_W	 		= this.ds_imgLayerHdr.getColumn(0,"WIDTH");		// 넓이


        	this.gfn_openPopup(popupId,"dfm::DFM00200P.xfdl" ,oArg ,opts);

        };

        /**************************************************************************
         * 7-1. 이미지 설정[↑]
         ***************************************************************************/



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
          * 조회기간 콤보 변경시
          */
        this.tab_search_tab_search01_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.tab_search01.form.cbo_period.value; //var val = e.postvalue

        	if(this.gfn_isNull(val)) return;

        	var sDate 		= this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate 	= sDate.split(",");
        	var sDateFrom 	= arrDate[1];
        	var sDateTo 	= arrDate[2];
        	var sTime 		= "0830";

        	var dateFrom 	= this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var dateTo 		= this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(dateFrom) && dateTo.length>=12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_search01.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);

        	if(!this.gfn_isNull(dateTo) && dateTo.length==12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_search01.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 필터 품목코드 팝업
         */
        this.tab_search_tab_search01_btn_itemCode_onclick = function(obj,e)
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"		, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"			, this.gf_getSiteType());

        	this.fn_openPop("ITEM_CODE_POP","P00278", sArgs); //품목 코드 조회
        };

        /*
         * Rev 콤보값 변경시
         */
        this.tab_search_tab_search01_cmb_rev_onitemchanged = function(obj,e)
        {
        	trace("Rev이 변경됩니다.");
        	// 공정 조회 ()
        	this.fn_setProc();
        };

        /*
         * 필터 초기화
         */
        this.fn_initSearch = function(obj,e)
        {
        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_search01.form.edt_itemCode.set_value("");
        	this.tab_search.tab_search01.form.cmb_prodType.set_index(0);
        	// 검색조건 달력 설정
        	this.tab_search.tab_search01.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_search01_cbo_period_onitemchanged();
        	// Rev 조회
        	this.fn_setRev("");
        };

        /*
         * 해석 버튼 클릭시 (품목코드O / X 경우 체크 된 내용만 간다.)
         */
        this.div_header_btn_interpretation_onclick = function(obj,e)
        {
        	var nItem	=	this.tab_search.tab_search01.form.edt_itemCode.value;
        	// Defect Map 조회 조건
        	this.ds_searchDefectMap.clearData();
        	this.ds_searchDefectMap.addRow();

        	var nPeriodfr = this.tab_search.tab_search01.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_search01.form.div_dateTo.form.calStart.value;

        	this.ds_searchDefectMap.setColumn(0,"ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchDefectMap.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr); 	// 시작일
        	this.ds_searchDefectMap.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto); 	// 종료일
        	this.ds_searchDefectMap.setColumn(0,"P_PRODUCTIONTYPE"		, this.tab_search.tab_search01.form.cmb_prodType.value); 	// 생산구분

        	if(this.gfn_isNull(nItem))
        	{	// 품목코드 미입력시(한건만 선택)
        		var nChkCnt = this.ds_noinputMain.getCaseCount("CHK=='1'");
        		// 삭제건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        			return;
        		}
        		// 한건만 선택
        		if (nChkCnt > 1)
        		{
        			this.gfn_Message("GridOneCheck", "", "warning", "ok");			// 한개만 체크하세요.
        			return;
        		}

        		var nCnt = this.ds_noinputMain.rowcount;
        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk 		= this.ds_noinputMain.getColumn(i,"CHK");
        			var nProcId 	= this.ds_noinputMain.getColumn(i,"PRODUCTDEFID");
        			var nRev 		= this.ds_noinputMain.getColumn(i,"PRODUCTDEFVERSION");
        			var nLotId 		= this.ds_noinputMain.getColumn(i,"LOTID");
        			var nProcSegId	= this.ds_noinputMain.getColumn(i,"PROCESSSEGMENTID");
        			if(nChk == 1)
        			{
        				this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFID"		, nProcId); 	// 품목코드
        				this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFVERSION"	, nRev); 		// Rev
        				this.ds_searchDefectMap.setColumn(0,"P_PROCESSSEGMENTID"	, nProcSegId); 	// 공정(검사)
        				this.ds_searchDefectMap.setColumn(0,"P_LOTID"				, nLotId); 		// LOTID
        			}
        		}

        	}
        	else
        	{	// 품목코드 입력시(여러건 선택 가능?)
        		var nChkCnt = this.ds_inputMain.getCaseCount("CHK=='1'");
        		// 삭제건 체크
        		if (nChkCnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");			// 선택된 항목이 없습니다.
        			return;
        		}

        		var f_Rev = "";
        		var f_Lot = "";
        		var nCnt = this.ds_inputMain.rowcount;
        		for(var i=0; i<nCnt; i++)
        		{
        			var nChk 		= this.ds_inputMain.getColumn(i,"CHK");
        			var nProcId 	= this.ds_inputMain.getColumn(i,"PRODUCTDEFID");
        			var nRev 		= this.ds_inputMain.getColumn(i,"PRODUCTDEFVERSION");
        			var nLotId 		= this.ds_inputMain.getColumn(i,"LOTID");
        			var nProcSegId	= this.ds_inputMain.getColumn(i,"PROCESSSEGMENTID");
        			if(nChk == 1)
        			{
        				this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFID"			, nProcId); 	// 품목코드
        				f_Rev += this.gfn_isNull(f_Rev)? nRev : ", " +nRev;
        				f_Lot += this.gfn_isNull(f_Lot)? nLotId : ", " +nLotId;
        			}
        		}
        		this.ds_searchDefectMap.setColumn(0,"P_PRODUCTDEFVERSION"	, f_Rev); 		// Rev
        		this.ds_searchDefectMap.setColumn(0,"P_LOTID"				, f_Lot); 		// LOTID

        	}

        	// 조회 로직 호출
        	this.fn_setDefectMap();
        	//trace(" ### [Defect Map 조회 조건] ### : "+this.ds_searchDefectMap.saveXML());
        };

        /*
         * 메인 초기화
         */
        this.div_header_btn_resetWork_onclick = function(obj,e)
        {
        	trace(" ### [메인 초기화 설정] ### ");
        	// 품목코드 유무에 따른 분기 처리 진행
        	this.ds_noinputMain.clearData();			// 품목코드 미입력시 ds
        	this.ds_inputMain.clearData();				// 품목코드 입력시 ds
        	this.ds_inputMainChart.clearData();			// 품목코드 입력시 char ds
        	this.ds_inputMainChartLegend.clearData();	// 범레 내용ds
        	this.ds_lineChart.clearData();				// Line 차트용 ds

        	// Defect Map 용
        	this.ds_rawData.clearData();				// Raw Data ds
        	this.ds_cmbDefectGrp.clearData();			// 불량그룹 콤보 ds
        	this.ds_cmbDefectCode.clearData();			// 불량코드 콤보 ds
        	this.ds_defectGrp.clearData();				// Defect List ds
        	this.ds_chart.clearData();					// Defect Map chart ds
        	this.ds_chartColor.clearData();				// 차트 불량그룹별 색상 정보 ds
        	this.ds_imgLayerHdr.clearData();			// 이미지 layer 정보 조회 ds
        	this.ds_imgPoint.clearData();				// 이미지 좌표 ds
        	this.ds_search.clearData();					// 이미지 정보 조회 조건
        	this.ds_imgInfo.clearData();				// 이미지 정보(C/S면 정보) ds
        	this.ds_defectGrpLayer.clearData();			// layer별로 불량 그룹으로 차트 구성을 위해서 ds조회

        	this.ds_imgPanelHdr.clearData();			// 판넬정보
        	this.ds_searchDefectMapPanel.clearData();	// 판넬정보 조회 조건


        	// 이미지 삭제
        	this.fn_divAllDestroy();

        	// 필터 초기화
        	this.ds_defectGrp.filter("");
        	this.ds_defectGrpLayer.filter("");		// 필터 초기화


        	// 조회 후 멀티 콤보(상위설정)
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form.ds_initData.applyChange();

        	// 하위 멀티 콤보 이벤트 설정.
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        	this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form.ds_initData.applyChange();

        	this.fv_dH2 = 0;		// [21.06.10] 차이 추가
        	this.fv_dW2 = 0;		// [21.06.10] 차이 추가

        };

        /*
         * 필터 버튼 클릭
         */
        this.div_work_tab_work_tabpage_defectmap_btn_filter_onclick = function(obj,e)
        {

        	var nFs			= "";		// 필터 조건
        	var nFsub		= "";		// 필터 조건(세부)

        	// 상위
        	var nDefectGrpDs = this.div_work.form.tab_work.tabpage_defectmap.form.div_defectGrpMulti.form;

        	this.ds_defectGrp.filter("");		// 필터 초기화
        	this.ds_defectGrpLayer.filter("");		// 필터 초기화
        	for(var i=0; i<nDefectGrpDs.ds_initData.rowcount; i++){
        		var chk = nDefectGrpDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectGrpDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs) ? "GROUPCODE == '"+code+"'" : " || GROUPCODE == '"+code+"'";
        		}
        	}

        	if(!this.gfn_isNull(nFs))
        	{
        		nFs = "("+nFs+")";
        	}

        	// 하위
        	var nDefectCodeDs = this.div_work.form.tab_work.tabpage_defectmap.form.div_defectCodeMulti.form;

        	for(var i=0; i<nDefectCodeDs.ds_initData.rowcount; i++){
        		var chk = nDefectCodeDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectCodeDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFsub += this.gfn_isNull(nFsub) ? "SUBCODE == '"+code+"'" : " || SUBCODE == '"+code+"'";
        		}
        	}

        	// (21.08.03) 필터 하위만 선택한 경우 필터 되도록 수정
        	if(!this.gfn_isNull(nFsub) && !this.gfn_isNull(nFs))
        	{
        		nFsub = "&& ("+nFsub+")";
        	}
        	nFs = nFs+nFsub;
        	trace(" ------ (필터 조건) : "+nFs);
        	this.ds_defectGrp.filter("");		// 필터 초기화
        	this.ds_defectGrp.filter(nFs);		// 필터 설정

        	// layer 차트를 위해서 추가
        	this.ds_defectGrpLayer.filter("");		// 필터 초기화
        	this.ds_defectGrpLayer.filter(nFs);		// 필터 설정

        	// 차트 설정
        	this.fn_setChartProcsegId();

        	// 이미지 설정(기존은 재조회 / 샘플인경우 필터링건다.)
        	this.fn_reSetImageLayer();

        };

        /*
         * 이미지 Layer 적용 이벤트
         */
        this.div_work_tab_work_tabpage_defectmap_btn_apply_onclick = function(obj,e)
        {
        	var nC	= this.div_work.form.tab_work.tabpage_defectmap.form.chk_c.value;
        	var nS	= this.div_work.form.tab_work.tabpage_defectmap.form.chk_s.value;

        	// 생성된 컨퍼넌트에서 체크박스 확인
        	var objComps 		= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen 		= objComps.length;
        	var nNonDestroyIdx 	= this.ds_imgLayerHdr.getColumn(0,"MAX_LAYER");


        	// 조회 후 Layer가 있는 상태에서 적용 버튼 클릭 가능
        	if(nCompsLen == 0)
        	{
        		//NoSelections 선택된 항목이 없습니다.(Layer 부분이 생성안됨.)
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return;
        	}

        	// Layer 밑에 삭제
        	if(nCompsLen > nNonDestroyIdx)
        	{
        		// 이전의 생성된 내용 있으면 삭제 한다.
        		this.fn_divAllLayerDestroy();
        	}

        	var nChkLayer 	= "";
        	this.nChkImg 	= "";

        	var nChkCnt	= 0;
        	if(nC)
        	{
        		nChkCnt += 1;
        		this.nChkImg  = 'C';
        	}
        	if(nS)
        	{
        		nChkCnt += 1;
        		this.nChkImg  = 'S';
        	}


        	if(nChkCnt == 0)
        	{
        		//NoSelections 선택된 항목이 없습니다.
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return;
        	}

        	if(nChkCnt > 1)
        	{
        		// {0} (은)는 하나의 {1} 만 선택해야 합니다. [도면,기준정보]
        		this.gfn_Message("ValidPackOne", [this.nfn_getDictionaryname("DrawingSelection",true),this.nfn_getDictionaryname("SYSTEMWORKTYPE_BAS",true)], "error", "ok");
        		return;
        	}

        	var nChkCnt = this.ds_imgLayerHdr.rowcount;
        	if(nChkCnt == 0)
        	{
        		return;
        	}

        	var nLayCnt = 0;		// Layer 선택 수
        	// 생성된 컨퍼넌트에서 체크박스 확인
        	var objComps = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen = objComps.length;

        	for(var i=0; i<nCompsLen; i++) {
        		var objRtn 	= objComps[i].name;
        		var nIdx	= i;
        		var nChk	= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all[objRtn].form.all["chk_layer_"+(nIdx+1)].value;
        		if(nChk)
        		{
        			nLayCnt 	+= 1;
        			nChkLayer 	= (nIdx+1)+"L";
        			// Layer 명
        			this.fv_layerNm = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all[objRtn].form.all["sta_layer"+(nIdx+1)].text;
        			// Layer 층
        			this.fv_layer	= nChkLayer;

        			this.fv_color   = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all[objRtn].form.all["btn_layer_"+(nIdx+1)].background;
        			// 색상 지정
        			if(this.gfn_isNull(this.fv_color))
        			{
        				this.fv_color = ""; 			//"#000000";		// [21.05.17] 색상 없으면 미선택
        			}

        		}
        	}
        	// #000000  (기본 색상) - 색상 없는 경우
        	if(this.gfn_isNull(this.fv_color))
        	{
        		this.fv_color = "";		// 선택된 색상 없는 경우 그대로 [21.05.17]	//"#000000";
        	}
        	if(nLayCnt == 0)
        	{
        		//NoSelections 선택된 항목이 없습니다.
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return;
        	}

        	if(nLayCnt > 1)
        	{
        		// Layer은 한개만 선택하세요.
        		this.gfn_Message("LayerOneCheck", null, "error", "ok");
        		return;
        	}


        	// 이미지 조회(정상/반전)
        	this.fn_getImage64();
        };

        /*
         * 판넬 적용 버튼
         */
        this.div_work_tab_work_tabpage_defectmap_btn_panel_onclick = function(obj,e)
        {
        	// 생성된 컨퍼넌트에서 체크박스 확인
        	var objComps = this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen = objComps.length;
        	var nNonDestroyIdx = this.ds_imgLayerHdr.getColumn(0,"MAX_LAYER");
        	// 조회 후 Layer가 있는 상태에서 적용 버튼 클릭 가능
        	if(nCompsLen == 0)
        	{
        		//NoSelections 선택된 항목이 없습니다.(Layer 부분이 생성안됨.)
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return;
        	}

        	var nLayCnt 	= 0;		// Layer 선택 수
        	// 생성된 컨퍼넌트에서 체크박스 확인
        	var objComps 	= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.components;
        	var nCompsLen 	= objComps.length;
        	var nChkImgLayer= false;
        	var nChk		= false;
        	var nChkCnt		= 0;
        	for(var i=0; i<nCompsLen; i++) {
        		var objRtn 			= objComps[i].name;
        		var objImage		= objRtn.substr(0,14);
        		var objImageIndex	= objRtn.substr(14);
        		//trace(" 컨퍼넌트 확인 : "+objRtn+" || "+objImage+" || "+objImageIndex);
        		if(objImage == "div_layer_img_")		// 이미지가 존재하는지 판단.
        		{
        			nChkImgLayer 	= true;
        			var nName		= "chk_layer_img_"+objImageIndex;
        			//trace(" ------ [체크된 이미지 판단] : "+nName);
        			var nImageChk	= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all[objRtn].form.all[nName].value;
        			var nLotNam		= "sta_layer_img_"+objImageIndex;
        			var nLot		= this.div_work.form.tab_work.tabpage_defectmap.form.div_module.form.all[objRtn].form.all[nLotNam].text;
        			//trace(" ------ [체크된 이미지 판단] : "+nImageChk+" || "+nLot);
        			if(nImageChk)
        			{
        				nChkCnt++;
        				nChk = nImageChk;
        				this.fv_lot	=	nLot;
        			}
        		}
        	}

        	// nChkCnt == 1
        	if(nChkCnt > 1)
        	{
        		// LayerOneCheck - Layer은 한개만 선택하세요.
        		// LotOneCheck   - Lot은 한개만 선택하세요.
        		this.gfn_Message("LotOneCheck", null, "error", "ok");
        		return;
        	}

        	if((!nChkImgLayer) || (!nChk) || (nChkCnt == 0))
        	{
        		//NoSelections 선택된 항목이 없습니다.
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return;
        	}

        	//trace("판넬 정보 조회 -> 해당 조건에 or 존재하는 판넬 정보 조회");
        	// 필터링 조건 으로 판넬정보 조회 -> 이미지 그리기
        	this.fn_getPanelInfo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_search01.form.btn_clearC.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tab_search01.form.btn_itemCode.addEventHandler("onclick",this.tab_search_tab_search01_btn_itemCode_onclick,this);
            this.tab_search.tab_search01.form.cmb_rev.addEventHandler("onitemchanged",this.tab_search_tab_search01_cmb_rev_onitemchanged,this);
            this.tab_search.tab_search01.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tab_search01.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_tab_search01_cbo_period_onitemchanged,this);
            this.tab_search.tab_search01.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.div_work.form.tab_work.tabpage_mainItem.form.chart_line.addEventHandler("ondrawend",this.BasicChart00_ondrawend,this);
            this.div_work.form.tab_work.tabpage_defectmap.form.btn_filter.addEventHandler("onclick",this.div_work_tab_work_tabpage_defectmap_btn_filter_onclick,this);
            this.div_work.form.tab_work.tabpage_defectmap.form.btn_apply.addEventHandler("onclick",this.div_work_tab_work_tabpage_defectmap_btn_apply_onclick,this);
            this.div_work.form.tab_work.tabpage_defectmap.form.btn_panel.addEventHandler("onclick",this.div_work_tab_work_tabpage_defectmap_btn_panel_onclick,this);
            this.div_header.form.btn_resetWork.addEventHandler("onclick",this.div_header_btn_resetWork_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_interpretation.addEventHandler("onclick",this.div_header_btn_interpretation_onclick,this);
        };
        this.loadIncludeScript("DFM00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
