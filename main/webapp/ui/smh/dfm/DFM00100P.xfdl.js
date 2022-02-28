(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00100P");
            this.set_titletext("이미지 확대 팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_imgPoint", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PANELID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNO\" type=\"STRING\" size=\"256\"/><Column id=\"X\" type=\"STRING\" size=\"256\"/><Column id=\"Y\" type=\"STRING\" size=\"256\"/><Column id=\"VRSDEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"INPPROC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">1</Col><Col id=\"X\">100.950012</Col><Col id=\"Y\">10.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">13</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">2</Col><Col id=\"X\">110.950012</Col><Col id=\"Y\">60.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">14</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">3</Col><Col id=\"X\">120.950012</Col><Col id=\"Y\">110.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">18</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">4</Col><Col id=\"X\">130.950012</Col><Col id=\"Y\">160.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">1L</Col><Col id=\"DEGREE\">18</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">5</Col><Col id=\"X\">140.950012</Col><Col id=\"Y\">210.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">24</Col><Col id=\"X\">150.950012</Col><Col id=\"Y\">260.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">25</Col><Col id=\"X\">160.950012</Col><Col id=\"Y\">310.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">2</Col><Col id=\"DEFECTNO\">26</Col><Col id=\"X\">170.950012</Col><Col id=\"Y\">360.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">3</Col><Col id=\"DEFECTNO\">27</Col><Col id=\"X\">180.950012</Col><Col id=\"Y\">410.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">1</Col><Col id=\"PANELID\">3</Col><Col id=\"DEFECTNO\">28</Col><Col id=\"X\">190.950012</Col><Col id=\"Y\">460.790009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">2</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">29</Col><Col id=\"X\">200.950012</Col><Col id=\"Y\">510.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">3</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">30</Col><Col id=\"X\">210.950012</Col><Col id=\"Y\">560.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">33</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">31</Col><Col id=\"X\">220.950012</Col><Col id=\"Y\">610.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">39</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">32</Col><Col id=\"X\">230.950012</Col><Col id=\"Y\">660.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">4</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">33</Col><Col id=\"X\">240.950012</Col><Col id=\"Y\">710.790009</Col><Col id=\"VRSDEFECTCODE\">10</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">5</Col><Col id=\"DEFECTNO\">34</Col><Col id=\"X\">250.950012</Col><Col id=\"Y\">695.315009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">35</Col><Col id=\"X\">260.950012</Col><Col id=\"Y\">679.840009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">44</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">36</Col><Col id=\"X\">270.950012</Col><Col id=\"Y\">664.365009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">45</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">37</Col><Col id=\"X\">280.950012</Col><Col id=\"Y\">648.890009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">290.950012</Col><Col id=\"Y\">633.415009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">2L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">8</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">300.950012</Col><Col id=\"Y\">617.940009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">310.950012</Col><Col id=\"Y\">602.465009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">320.950012</Col><Col id=\"Y\">586.990009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">330.950012</Col><Col id=\"Y\">571.515009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">340.950012</Col><Col id=\"Y\">556.040009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">350.950012</Col><Col id=\"Y\">540.565009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">360.950012</Col><Col id=\"Y\">525.090009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">370.950012</Col><Col id=\"Y\">509.615009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">380.950012</Col><Col id=\"Y\">494.140009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">390.950012</Col><Col id=\"Y\">478.665009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">400.950012</Col><Col id=\"Y\">463.190009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">410.950012</Col><Col id=\"Y\">447.715009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">420.950012</Col><Col id=\"Y\">432.240009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">430.950012</Col><Col id=\"Y\">416.765009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">440.950012</Col><Col id=\"Y\">401.290009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">450.950012</Col><Col id=\"Y\">385.815009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">460.950012</Col><Col id=\"Y\">370.340009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">470.950012</Col><Col id=\"Y\">354.865009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">480.950012</Col><Col id=\"Y\">339.390009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">490.950012</Col><Col id=\"Y\">323.915009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">485.796012</Col><Col id=\"Y\">308.440009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">480.642012</Col><Col id=\"Y\">292.965009</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">475.488012</Col><Col id=\"Y\">161.9575045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">470.334012</Col><Col id=\"Y\">154.2200045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">465.180012</Col><Col id=\"Y\">146.4825045</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">460.026012</Col><Col id=\"Y\">80.97875225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">454.872012</Col><Col id=\"Y\">77.11000225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">449.718012</Col><Col id=\"Y\">73.24125225</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">444.564012</Col><Col id=\"Y\">40.48937612</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">439.410012</Col><Col id=\"Y\">38.55500112</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">434.256012</Col><Col id=\"Y\">36.62062612</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">429.102012</Col><Col id=\"Y\">20.24468806</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">423.948012</Col><Col id=\"Y\">19.07128164</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">418.794012</Col><Col id=\"Y\">18.24989715</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">413.640012</Col><Col id=\"Y\">17.67492801</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">408.486012</Col><Col id=\"Y\">17.2724496</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">403.332012</Col><Col id=\"Y\">16.99071472</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">398.178012</Col><Col id=\"Y\">16.79350031</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">393.024012</Col><Col id=\"Y\">16.65545021</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9998</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">387.870012</Col><Col id=\"Y\">16.55881515</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">382.716012</Col><Col id=\"Y\">16.4911706</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">377.562012</Col><Col id=\"Y\">16.44381942</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">372.408012</Col><Col id=\"Y\">73.08820137</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">367.254012</Col><Col id=\"Y\">135.3970215</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">362.100012</Col><Col id=\"Y\">203.9367237</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">356.946012</Col><Col id=\"Y\">279.330396</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">351.792012</Col><Col id=\"Y\">362.2634356</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">346.638012</Col><Col id=\"Y\">453.4897792</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">341.484012</Col><Col id=\"Y\">553.8387571</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">336.330012</Col><Col id=\"Y\">664.2226328</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">331.176012</Col><Col id=\"Y\">569.0003695</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">326.022012</Col><Col id=\"Y\">483.3003326</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">3L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">320.868012</Col><Col id=\"Y\">406.1702993</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">998</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">4L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">315.714012</Col><Col id=\"Y\">336.7532694</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row><Row><Col id=\"EQUIPMENTTYPE\">AOI</Col><Col id=\"EQUIPMENTID\">VRS_GIGAVIS_12</Col><Col id=\"LOTID\">40017390-0101-FG00000-003-1-S</Col><Col id=\"PRODUCTDEFID\">1060754B2</Col><Col id=\"PRODUCTDEFVERSION\">B2</Col><Col id=\"LAYERID\">4L</Col><Col id=\"DEGREE\">46</Col><Col id=\"PANELID\">1</Col><Col id=\"DEFECTNO\">38</Col><Col id=\"X\">310.560012</Col><Col id=\"Y\">274.2779424</Col><Col id=\"VRSDEFECTCODE\">34</Col><Col id=\"GROUPCODE\">999</Col><Col id=\"SUBCODE\">9999</Col><Col id=\"COLOR\">#AF6B3D</Col><Col id=\"INPPROC\">7012301</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_zoom", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">50</Col><Col id=\"NAME\">50%</Col><Col id=\"POINT\">2</Col></Row><Row><Col id=\"CODE\">100</Col><Col id=\"NAME\">100%</Col><Col id=\"POINT\">3</Col></Row><Row><Col id=\"CODE\">120</Col><Col id=\"NAME\">120%</Col><Col id=\"POINT\">3</Col></Row><Row><Col id=\"CODE\">150</Col><Col id=\"NAME\">150%</Col><Col id=\"POINT\">3</Col></Row><Row><Col id=\"CODE\">200</Col><Col id=\"NAME\">200%</Col><Col id=\"POINT\">4</Col></Row><Row><Col id=\"CODE\">250</Col><Col id=\"NAME\">250%</Col><Col id=\"POINT\">4</Col></Row><Row><Col id=\"CODE\">300</Col><Col id=\"NAME\">300%</Col><Col id=\"POINT\">5</Col></Row><Row><Col id=\"CODE\">350</Col><Col id=\"NAME\">350%</Col><Col id=\"POINT\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","66","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","20","24",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_proc",null,"3","120","20","btn_close:10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("ds_zoom");
            obj.set_text("100");
            obj.set_value("100");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","3",null,"20","cmb_proc:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("txt_12B");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DFM00100P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00100P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("DFM00100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Defect Map 확대 팝업
         * 파일명 		: DFM00100P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.05.15
         *
         * 설  명		: defect Map 이미지 확대 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.15	김진현   	최초작성
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

        var lv_rtnCols;

        this.parentDc;			// 화면에서 넘어온 주차정보
        this.v_popType;			// 화면에서 호출시 type (R/S) -> 등록 조회 구분


        this.fv_layer;
        this.fv_panel;
        this.fv_image;
        this.fv_color;
        this.fv_h;
        this.fv_w;


        this.fv_LayerTitle;		// 21.05.20  추가 Layer 의 경우 타이틀 넘겨 받음



        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 공통 기능 호출
        	this.nfn_formInit(obj);

        	this.ds_imgPoint.clearData();
        	this.ds_imgPoint.copyData(this.parent.arg_DsPoint);
        	this.fv_layer	= this.parent.arg_LayerId;
        	this.fv_panel	= this.parent.arg_PanelId;
        	this.fv_image	= this.parent.arg_Image;
        	this.fv_color	= this.parent.arg_Color;

        	this.fv_LayerTitle	= this.parent.arg_Title;

        	this.fv_h		= this.parent.arg_H;
        	this.fv_w		= this.parent.arg_W;

        	// 판넬 or Layer 명 (21.05.20) 수정 조건 추가 같이 표현 되는지.
        	this.sta_title.set_text(this.gfn_isNull(this.fv_panel) ? this.fv_LayerTitle : this.fv_panel );

        	this.fn_setImget("100");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
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
        		/*
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        		*/

        		if (trId == "savePackInvNo")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			}
        			/*
        			else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        			*/
        		}
        		else
        		{
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        		return;
        	}

        	switch(trId) {



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

        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {


        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 이미지 설정 함수
         */
        this.fn_setImget = function (nRate)
        {


        	/*
        	this.fv_layer;
        	this.fv_panel;
        	this.fv_image;
        	this.fv_color;
        	this.fv_h;
        	this.fv_w;
        	*/

        	// 21.05.18 김진현 포인트 확대에 따른 설정
        	var nPointRow 	= this.ds_zoom.findRow("CODE",nRate);
        	var nPoint		= this.ds_zoom.getColumn(nPointRow, "POINT");

        	var nDivNum = 1;			// div 시작 id
        	var divLeft = 0;			// 시작 left
        	var divTop  = 0;			// 시작 top (이미지 있는 Layer 생성후 그 다음 설정)

        	var f_divLeft = 0;			// 첫 시작 left
        	var f_divTop  = 0;			// 첫 시작 top


        	//trace("원본 사이즈(2% 적용전-비율만적용) : "+parseFloat(this.fv_h)+" | "+parseFloat(this.fv_w));

        	var nH 	= ((parseFloat(this.fv_h)*1.02) * (parseFloat(nRate)/100));		// 높이 (여백필요)	-> 이미지 뷰어 사이즈
        	var nW 	= ((parseFloat(this.fv_w)*1.02) * (parseFloat(nRate)/100));		// 넓이 (여백필요)	-> 이미지 뷰어 사이즈


        	//trace("원본 사이즈(2% 적용전-비율만적용) : "+nH+" | "+nW);


        	var nR	= (parseInt(nRate)/100);



        	// [20% 증가시킨 사이즈 - 차이]
        	var nH2 = (((parseFloat(this.fv_h)* 1.02) - this.fv_h) * 0.5)* nR;		// [21.05.31]
        	var nW2 = (((parseFloat(this.fv_w)* 1.02) - this.fv_w) * 0.5)* nR;		// [21.05.31]

        	trace("차이 : "+nW2+" | "+nH2);

        	var objDiv = this.div_work;		// 밖div

        	trace(" ===> 생성된 높이 : "+nH);
        	trace(" ===> 생성된 넓이 : "+nW);


        	// 내부 div 설정(겉)   [21.05.31] - 여백을 위해서 추가
        	//var objDivIn = new Div("div_in_panel_img", 0, 0, nW, nH);
        	var objDivIn_M = new Div("div_in_panel_img_M", 0, 0, nW+10, nH+10);		// [21.05.31]
        	objDiv.addChild("div_in_panel_img_M" ,objDivIn_M);
        	objDivIn_M.set_border("hidden,hidden,hidden,hidden");
        	objDivIn_M.set_visible(true);
        	objDivIn_M.show();

        	// 내부 div 설정
        	//var objDivIn = new Div("div_in_panel_img", 0, 0, nW, nH);
        	var objDivIn = new Div("div_in_panel_img", 5, 5, nW, nH);		// [21.05.31]
        	objDivIn_M.addChild("div_in_panel_img" ,objDivIn);
        	objDivIn.set_border("hidden,hidden,hidden,hidden");
        	objDivIn.set_visible(true);
        	objDivIn.show();

        	// 이미지 뷰어 설정
        	//var objImageViewer = new ImageViewer("img_"+divIndex, 2, 2, nW, nH);			// 여백 버전
        	var objImageViewer = new ImageViewer("img_panel_true", 0, 0, nW, nH);
        	objDivIn.addChild("img_panel_true" ,objImageViewer);
        	objImageViewer.set_image(this.fv_image);					// 이미지 설정 (Layer 이미지 적용)
        	objImageViewer.set_stretch("fit");							// 사이즈 맞춤
        	objImageViewer.set_cssclass("img_photo");					// layer의 경우 css 불필요
        	//objImageViewer.set_border("hidden,hidden,hidden,hidden");		// (21.07.23) 이미지의 경우 테두리 필요
        	objImageViewer.show();

        	// 좌표 설정 (필터링 정보)
        	this.ds_imgPoint.filter("");

        	// 21.05.20 조건 분기 처리 (Layer 확대 / Panel 확대 같이 사용시도중)
        	if(this.gfn_isNull(this.fv_panel))
        	{
        		this.ds_imgPoint.filter("LAYERID =='"+this.fv_layer+"'");
        	}
        	else
        	{
        		this.ds_imgPoint.filter("LAYERID =='"+this.fv_layer+"' && PANELID =='"+this.fv_panel+"'");
        	}

        	var nPointCnt = this.ds_imgPoint.rowcount;

        	if(nPointCnt != 0)
        	{
        		// db에서 값을 가져 온 좌표값으로 설정 한다.
        		for(var j=0; j < nPointCnt; j++)
        		{
        			var objStaPoint = new Static();//new Button();

        			var nX 		= this.ds_imgPoint.getColumn(j,"X");
        			var nY 		= this.ds_imgPoint.getColumn(j,"Y");


        			// [21.05.17] 색상 선택 안한경우 기본색상 적용
        			var nDsColor	= this.ds_imgPoint.getColumn(j,"COLOR");
        			var nColor 		= this.gfn_isNull(this.fv_color) ? nDsColor : this.fv_color;					// 선택된 색상 지정
        			//var nColor 	= this.fv_color;					// 선택된 색상 지정

        			//objStaPoint.init( "sta_panel_point_img_"+j, (nX*nR), (nH - (nY*nR)), nPoint, nPoint);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)
        			// (21.05.25) 높에 위치 조정
        			objStaPoint.init( "sta_panel_point_img_"+j
        								//, (nX*nR)
        								//, (nH - (nY*nR))
        								, ((nX*nR) + nW2)					// [21.05.31] 2% 증가된값에 반정도 시작 정보만큰 더함 (0 -> 5)
        								//, (nH - (nY * nR) - nH2)		// [21.05.31] 2% 증가된값에 반정도 시작 정보만큰 차감 계산 후 값 (477->472)
        								, ((nY * nR) + nH2)		// [21.06.01] (기준점 왼쪽하단 -> 왼쪽상단으로 변경)
        								, nPoint, nPoint);			// left, top  (1/4 -> 4씩, 1/2 -> 2씩 같음)

        			var nIndex = objDivIn.addChild("sta_panel_point_img_"+j, objStaPoint );
        			// DB에서 받아온 색상 설정
        			objStaPoint.set_background(nColor);

        			objStaPoint.show();
        		}
        	}
        	this.div_work.form.set_scrollbartype('auto fixed');		// 스크롤바 생성
        	this.div_work.form.resetScroll();
        	this.resetScroll();
        };

        /*
         * Layer 이미지 생성시 기존 생성된 내용 삭제(div 안에)
         */
        this.fn_divAllDestroy = function ()
        {
        	var objComps = this.div_work.form.components;
        	var nCompsLen = objComps.length-1;
        	for(var i=nCompsLen; i>=0; i--) {
        		//alert("type=>"+this.gfnTypeOf(objComps[i]));
        		var objRtn = this.div_work.removeChild(objComps[i].name);
        		objRtn.destroy();
        		objRtn = null;
        	}
        	this.resetScroll();
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };


        /*
         * 콤보 값 변경시
         */
        this.cmb_proc_onitemchanged = function(obj,e)
        {
        	trace(" ====[변경값]===> : "+e.postvalue);

        	this.fn_divAllDestroy();

        	this.fn_setImget(e.postvalue);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.cmb_proc.addEventHandler("onitemchanged",this.cmb_proc_onitemchanged,this);
        };
        this.loadIncludeScript("DFM00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
