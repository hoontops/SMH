(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample10");
            this.set_titletext("Grid Sort / 전체선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\" type=\"STRING\"/><Column id=\"datacolumn\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">GRP_NM</Col><Col id=\"datacolumn\">그룹명</Col></Row><Row><Col id=\"codecolumn\">GRP_CD</Col><Col id=\"datacolumn\">그룹코드</Col></Row><Row><Col id=\"codecolumn\">CD_DSCRP</Col><Col id=\"datacolumn\">코드설명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"1\"/><Column id=\"userid\" type=\"STRING\" size=\"256\" prop=\"KEY\"/><Column id=\"empno\" type=\"STRING\" size=\"256\" prop=\"KEY\"/><Column id=\"regno\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"sex\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"colLimit\" type=\"FLOAT\" size=\"256\"/><Column id=\"colcode\" type=\"STRING\" size=\"256\"/><Column id=\"NOTINP\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100521</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100522</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100523</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100524</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100525</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\">[Undefined]</Col><Col id=\"email\">[Undefined]</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100510</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100511</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100512</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100513</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100514</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100515</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100516</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100517</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100518</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100519</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100521</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100522</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100523</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100524</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100525</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100526</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100527</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100521</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100522</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100523</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100524</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100525</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100526</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100527</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100528</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100510</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100511</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100512</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100513</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100514</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100515</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100516</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100517</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100511</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100512</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100513</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100514</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100515</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100516</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100517</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100518</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100519</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100521</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100522</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100501</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000001</Col><Col id=\"empno\">20100510</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">1</Col><Col id=\"Column4\">20100502</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">100</Col><Col id=\"Column8\">50</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.1</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">kim@tobe.com</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000002</Col><Col id=\"empno\">20100511</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100503</Col><Col id=\"Column5\">1500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">1200</Col><Col id=\"Column8\">55</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">0.122</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\">aaa</Col><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000003</Col><Col id=\"empno\">20100512</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100504</Col><Col id=\"Column5\">22500</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">20000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10333.15</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000004</Col><Col id=\"empno\">20100513</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100505</Col><Col id=\"Column5\">500000</Col><Col id=\"Column6\">20100519</Col><Col id=\"Column7\">600000</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10.0099</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000005</Col><Col id=\"empno\">20100514</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100506</Col><Col id=\"Column5\">5</Col><Col id=\"Column6\">20100520</Col><Col id=\"Column7\">10</Col><Col id=\"Column8\">100</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10998</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000006</Col><Col id=\"empno\">20100515</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100507</Col><Col id=\"Column5\">10</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30</Col><Col id=\"Column8\">60</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000007</Col><Col id=\"empno\">20100516</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100508</Col><Col id=\"Column5\">1000000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">2000000</Col><Col id=\"Column8\">70</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">3</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000008</Col><Col id=\"empno\">20100517</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">28500000</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">30000000</Col><Col id=\"Column8\">80</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">4</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000009</Col><Col id=\"empno\">20100518</Col><Col id=\"sex\">2</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">100</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">200</Col><Col id=\"Column8\">90</Col><Col id=\"Column9\">20100526</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">1</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row><Row><Col id=\"CHK\">0</Col><Col id=\"userid\">1000010</Col><Col id=\"empno\">20100519</Col><Col id=\"sex\">1</Col><Col id=\"Column3\">0</Col><Col id=\"Column4\">20100520</Col><Col id=\"Column5\">120</Col><Col id=\"Column6\">20100526</Col><Col id=\"Column7\">300</Col><Col id=\"Column8\">39</Col><Col id=\"Column9\">20100532</Col><Col id=\"colLimit\">10</Col><Col id=\"colcode\">2</Col><Col id=\"NOTINP\"/><Col id=\"email\"/><Col id=\"phone\">01023456789</Col><Col id=\"regno\">1234567890123</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","0%","104",null,"414","1.63%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("key");
            obj.set_cellsizingtype("col");
            obj.set_summarytype("top");
            obj.set_tooltiptype("hover");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"40\"/><Column size=\"73\"/><Column size=\"76\"/><Column size=\"106\"/><Column size=\"99\"/><Column size=\"47\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"135\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"28\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"아이디\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"phone\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"포상여부\"/><Cell col=\"8\" text=\"시작일\"/><Cell col=\"9\" text=\"금액1\"/><Cell col=\"10\" text=\"종료일\"/><Cell col=\"11\" text=\"금액2\"/><Cell col=\"12\" text=\"점수\"/><Cell col=\"13\" text=\"날짜\"/><Cell col=\"14\" text=\"자리수\"/><Cell col=\"15\" text=\"코드\"/><Cell col=\"16\" text=\"이메일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:userid\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:empno\"/><Cell col=\"4\" text=\"bind:regno\" mask=\"######-{#######}\"/><Cell col=\"5\" text=\"bind:phone\" mask=\"###-{####}-####\"/><Cell col=\"6\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:sex\" combodataset=\"ds_sex\" combocodecol=\"cd\" combodatacol=\"nm\"/><Cell col=\"7\" displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column3\"/><Cell col=\"8\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column4\"/><Cell col=\"9\" text=\"bind:Column5\" textAlign=\"right\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column6\"/><Cell col=\"11\" text=\"bind:Column7\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:Column8\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"date\" edittype=\"date\" text=\"bind:Column9\"/><Cell col=\"14\" text=\"bind:colLimit\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:colcode\"/><Cell col=\"16\" edittype=\"normal\" text=\"bind:email\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&apos;Column5&apos;)\"/><Cell col=\"10\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getMax(&apos;Column7&apos;)\"/><Cell col=\"12\" text=\"expr:dataset.getAvg(&apos;Column8&apos;)\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","13.15%","0",null,"21","47.07%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("20");
            obj.set_tooltiptext("검색할 단어를 작성해주세요");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_group","1.96%","0",null,"21","87.5%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_combo");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("그룹명");
            obj.set_value("GRP_NM");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_Title01","0%","38",null,"21","86.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("리스트");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","55.22%","0",null,"23","38.8%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search02");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","94.24%","36",null,"25","0%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","87.93%","36",null,"25","6.3%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","81.63%","36",null,"25","12.61%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Add");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","21",null,"15","3.26%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","87.61%","36",null,"23","11.85%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","87.39%","37",null,"23","12.07%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0%","60",null,"20","3.26%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","52.93%","0",null,"62","44.89%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0%","-1",null,"62","97.93%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","61.2%","0",null,"23","38.26%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("bottom");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","19.02%","55",null,"46","36.52%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("* 그리드 Head 클릭시 해당 Cell 기준 정렬\r\n\r\n* Ctrl Key + Head클릭 : Multi 정렬");
            obj.set_color("red");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","50.43%","76",null,"25","37.5%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("그리드 정렬 초기화");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample10.xfdl","lib::comLib.xjs");
        this.registerScript("Sample10.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Sample10
         * 파일명 		: Sample10.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.02.13
         *
         * 설  명		: 그리드 공통 기능(정렬, 전체선택, 전체해제) 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.02.13	UI공통   	디자인표준 적용
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        /**
         * 3.1 (필수) 화면 로딩후에 실행되는 함수
         */
        // onlad함수(공통코드관리 화면이 호출될때 바로 실행되는 함수)
        this.form_onload = function (obj, e)
        {
        	// 화면 init 처리함수 호출
        	this.form_init();
        };


        /**
         * 3.2 (필수) 사용자 정의 폼 로드 함수
         */
        // 사용자 정의 폼 로드 함수(form_init 고정)
        this.form_init = function (obj)
        {
        	// 초기 init 시 필요한 로직을 수행합니다.

        	this.gfn_comComboIns(this.cbo_group, "선택", "codecolumn", "datacolumn"); //ALL 추가 및 초기값 지정
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /**
         * 4.1 (필수) 조회
         */
        function fn_Search ()
        {
        }

        /**
         * 4.2 (필수)
         * 설명 : Chart
         */
        function fn_Chart ()
        {
        }

        /**
         * 4.3 엑셀
         */
        function fn_Excel ()
        {
        }

        /**
         * 4.4 (필수) 프린트
         */
        function fn_Print ()
        {
        }

        /**
         * 4.5 (필수) 전송
         */
        function fn_Send ()
        {
        }

        /**
         * 4.6 (필수) 저장
         */
        function fn_Save ()
        {
        }

        /**
         * 4.7 (필수) 닫기
         */
        function fn_Close ()
        {
        }

        /**
         * 4.8 (필수) 도움말
         */
        function fn_Help ()
        {
        }


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*-------------------------------------------------------------------------
         * 설명      : 	Grid Header Click시 Grid 정렬 및 전체 선택/해제
         *-------------------------------------------------------------------------*/
        this.grd_list_oncelldblclick = function (obj, e)
        {
        	var sColumnName = this.gfn_getBindColName(obj, e.col);
        	trace(e.col + " / " + sColumnName);

        	switch (sColumnName)
        	{
        		case "empno":
        			this.alert("사원번호 click");
        			break;
        		case "userid":
        			this.alert("아이디 click");
        			break;
        		default:
        			this.alert("지금 선택한 Cell은 " + e.col + "번째 Cell이며, bind된 칼럼은 " + sColumnName + " 입니다.");
        			break;
        	}
        };

        /*-------------------------------------------------------------------------
         * 설명      : 	Grid Double Click시 Grid Cell에 bind된
         Dataset Column으로 분개 처리
         *-------------------------------------------------------------------------*/
        this.grd_list_onheadclick = function (obj, e)
        {
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);

        	// Grid 정렬
        	this.gfn_ProcGrdSort(obj, e.cell);
        };

        this.div_grid_top_btn_add_onclick = function (obj, e)
        {
        	/*
        	 * 스크립트 또는 이벤트에서 처리 가능
        	 * dataset keystring 값 초기화
        	 */
        	this.gfn_ClearSortMark(this.grd_list, "", true);

        	/*
        	 * 스크립트 또는 이벤트에서 처리 가능
        	 * 그리드 '▲', '▼' 만 초기화
        	 */
        	// this.gfn_ClearSortMark(this.grd_list);
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.edt_search.addEventHandler("onkeydown",this.fn_searchEtr,this);
            this.edt_search.addEventHandler("oneditclick",this.Div00_Edit00_oneditclick,this);
            this.cbo_group.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.sta_Title01.addEventHandler("onclick",this.st_Title01_onclick,this);
            this.btn_search.addEventHandler("onclick",this.Div00_Button02_onclick,this);
            this.btn_save.addEventHandler("onclick",this.div_grid_top_btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.div_grid_top_btn_delete_onclick,this);
            this.btn_add.addEventHandler("onclick",this.div_grid_top_btn_add_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.div_grid_top_btn_add_onclick,this);
        };
        this.loadIncludeScript("Sample10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
