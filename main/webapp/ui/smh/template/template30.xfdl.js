(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04400M");
            this.set_titletext("조회조건+그리드T+ShuttleUB+sub탭B");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"양산구분\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"SIteID\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"RollSheet\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"Locking여부\" type=\"STRING\" size=\"256\"/><Column id=\"보류여부\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCS1\" type=\"STRING\" size=\"256\"/><Column id=\"PNL1\" type=\"STRING\" size=\"256\"/><Column id=\"PCS2\" type=\"STRING\" size=\"256\"/><Column id=\"PNL2\" type=\"STRING\" size=\"256\"/><Column id=\"PCS3\" type=\"STRING\" size=\"256\"/><Column id=\"PNL3\" type=\"STRING\" size=\"256\"/><Column id=\"PCS4\" type=\"STRING\" size=\"256\"/><Column id=\"PNL4\" type=\"STRING\" size=\"256\"/><Column id=\"리드타임\" type=\"STRING\" size=\"256\"/><Column id=\"LOT투입일\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"잔여일수\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB638RD01 DIGITIZER(2L)-IFV직납</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">210104F002-1-FG00-001-002</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">6</Col><Col id=\"PCS1\">1</Col><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\">6</Col><Col id=\"리드타임\">1</Col><Col id=\"LOT투입일\">70106</Col><Col id=\"납기일자\">2021-01-04 14:46:06</Col><Col id=\"잔여일수\">2020-11-02</Col><Col id=\"Column0\">112</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1020994A9</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">WHISTLER TRIGGER FLEX(2L)-CCT반제품</Col><Col id=\"공정수순\">170</Col><Col id=\"공정명\">외층 PLB 인쇄전 정면</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">정면(PSR)_4F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210219F001-1-FG00-001-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">3,696</Col><Col id=\"PCS1\">42</Col><Col id=\"PNL1\">3,696</Col><Col id=\"PCS2\">42</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-19 16:25:50</Col><Col id=\"잔여일수\">2021-03-15</Col><Col id=\"Column0\">-20</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">50</Col><Col id=\"공정명\">내층 B/P 노광</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT 노광_4F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-003-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">58,560</Col><Col id=\"PCS1\">149</Col><Col id=\"PNL1\">58,560</Col><Col id=\"PCS2\">149</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB638RD01 DIGITIZER(2L)-IFV직납</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">210104F002-1-FG00-003-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">1,272</Col><Col id=\"PCS1\">106</Col><Col id=\"PNL1\">1,272</Col><Col id=\"PCS2\">106</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-01-04 14:46:06</Col><Col id=\"잔여일수\">2020-11-02</Col><Col id=\"Column0\">112</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB638RD01 DIGITIZER(2L)-IFV직납</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">210104F002-1-FG00-002-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">1,272</Col><Col id=\"PCS1\">106</Col><Col id=\"PNL1\">1,272</Col><Col id=\"PCS2\">106</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-01-04 14:46:06</Col><Col id=\"잔여일수\">2020-11-02</Col><Col id=\"Column0\">112</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">1055</Col><Col id=\"공정명\">외층 SUB 작업</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">DHI(SUB)_1F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-003</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">6,664</Col><Col id=\"PCS1\">17</Col><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\">6,664</Col><Col id=\"PCS4\">17</Col><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">674852</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">1055</Col><Col id=\"공정명\">외층 SUB 작업</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">DHI(SUB)_1F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-002</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">6,663</Col><Col id=\"PCS1\">17</Col><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\">6,663</Col><Col id=\"PCS4\">17</Col><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">672109</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060839A4</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">B S16N10B RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">820</Col><Col id=\"공정명\">출하검사</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">출하검사_1F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">200908F001-1-FG00-001-003</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">2,400</Col><Col id=\"PCS1\">10</Col><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\">2,400</Col><Col id=\"PCS3\">10</Col><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">5592</Col><Col id=\"납기일자\">2020-09-08 08:47:30</Col><Col id=\"잔여일수\">2020-09-28</Col><Col id=\"Column0\">147</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">40</Col><Col id=\"공정명\">내층 블랙홀</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT 동도금_B1F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">4,162</Col><Col id=\"PCS1\">10</Col><Col id=\"PNL1\">4,162</Col><Col id=\"PCS2\">10</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">970</Col><Col id=\"공정명\">외층 RESIST 박리</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT 박리_5F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-007</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">2,500</Col><Col id=\"PCS1\">7</Col><Col id=\"PNL1\">2,500</Col><Col id=\"PCS2\">7</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">1030</Col><Col id=\"공정명\">외층 포장 TRAY 작업</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">베스트전자(최종검사)_B2F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-006</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">2,000</Col><Col id=\"PCS1\">6</Col><Col id=\"PNL1\">2,000</Col><Col id=\"PCS2\">6</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">200917F001-1-FG00-004-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">312</Col><Col id=\"PCS1\">26</Col><Col id=\"PNL1\">312</Col><Col id=\"PCS2\">26</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\"/><Col id=\"잔여일수\"/><Col id=\"Column0\"/><Col id=\"No\">12</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">210104F001-1-FG00-003-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">12</Col><Col id=\"PCS1\">1</Col><Col id=\"PNL1\">12</Col><Col id=\"PCS2\">1</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\"/><Col id=\"잔여일수\"/><Col id=\"Column0\"/><Col id=\"No\">13</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">1050</Col><Col id=\"공정명\">출하검사</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">출하검사_1F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-005</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">1,176</Col><Col id=\"PCS1\">3</Col><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\">1,176</Col><Col id=\"PCS4\">3</Col><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">31545</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">141</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">1055</Col><Col id=\"공정명\">외층 SUB 작업</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">DHI(SUB)_1F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-001-004</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">352</Col><Col id=\"PCS1\"/><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\">352</Col><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">672109</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">51</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">내층 BASE 재단</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT CNC_B2F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-010-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">23,520</Col><Col id=\"PCS1\">60</Col><Col id=\"PNL1\">23,520</Col><Col id=\"PCS2\">60</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">내층 BASE 재단</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT CNC_B2F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-009-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">23,520</Col><Col id=\"PCS1\">60</Col><Col id=\"PNL1\">23,520</Col><Col id=\"PCS2\">60</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">내층 BASE 재단</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT CNC_B2F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-008-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">23,520</Col><Col id=\"PCS1\">60</Col><Col id=\"PNL1\">23,520</Col><Col id=\"PCS2\">60</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">내층 BASE 재단</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT CNC_B2F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-007-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">23,520</Col><Col id=\"PCS1\">60</Col><Col id=\"PNL1\">23,520</Col><Col id=\"PCS2\">60</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">내층 BASE 재단</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT CNC_B2F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-005-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">23,520</Col><Col id=\"PCS1\">60</Col><Col id=\"PNL1\">23,520</Col><Col id=\"PCS2\">60</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">20</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"공정수순\">50</Col><Col id=\"공정명\">내층 B/P 노광</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">SHT 노광_4F</Col><Col id=\"RollSheet\">SHT</Col><Col id=\"LotNo\">210202F001-1-FG00-002-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">23,520</Col><Col id=\"PCS1\">60</Col><Col id=\"PNL1\">23,520</Col><Col id=\"PCS2\">60</Col><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\"/><Col id=\"리드타임\"/><Col id=\"LOT투입일\">0</Col><Col id=\"납기일자\">2021-02-02 15:04:33</Col><Col id=\"잔여일수\">2020-10-12</Col><Col id=\"Column0\">133</Col><Col id=\"No\">21</Col></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"공정수순\">95</Col><Col id=\"공정명\">외층 C/L 가접전 PLASMA</Col><Col id=\"SIteID\">IFC</Col><Col id=\"작업장\">PLASMA_5F</Col><Col id=\"RollSheet\">RTR</Col><Col id=\"LotNo\">210115F002-1-FG00-002-001</Col><Col id=\"단위\">PCS</Col><Col id=\"Locking여부\">N</Col><Col id=\"보류여부\">N</Col><Col id=\"수량\">120</Col><Col id=\"PCS1\">10</Col><Col id=\"PNL1\"/><Col id=\"PCS2\"/><Col id=\"PNL2\"/><Col id=\"PCS3\"/><Col id=\"PNL3\"/><Col id=\"PCS4\"/><Col id=\"PNL4\">120</Col><Col id=\"리드타임\">10</Col><Col id=\"LOT투입일\">490525</Col><Col id=\"납기일자\">2021-01-18 10:44:00</Col><Col id=\"잔여일수\">2020-09-28</Col><Col id=\"Column0\">147</Col><Col id=\"No\">22</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"양산구분\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"RollSheet\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"Locking여부\" type=\"STRING\" size=\"256\"/><Column id=\"보류여부\" type=\"STRING\" size=\"256\"/><Column id=\"리드타임\" type=\"STRING\" size=\"256\"/><Column id=\"LOT투입일\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"잔여일수\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"양산구분\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"RollSheet\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"Locking여부\" type=\"STRING\" size=\"256\"/><Column id=\"보류여부\" type=\"STRING\" size=\"256\"/><Column id=\"리드타임\" type=\"STRING\" size=\"256\"/><Column id=\"LOT투입일\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"잔여일수\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_2", this);
            obj._setContents("<ColumnInfo><Column id=\"불량코드\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드명\" type=\"STRING\" size=\"256\"/><Column id=\"품질공정\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량률\" type=\"STRING\" size=\"256\"/><Column id=\"원인품목\" type=\"STRING\" size=\"256\"/><Column id=\"원인LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"원인공정\" type=\"STRING\" size=\"256\"/><Column id=\"원인작업장\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
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

            obj = new Static("sta_title","30","16","110","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("LOT 불량처리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("S/O 수주 배분");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"230","45","20","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","256","10","27",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","250","102","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","250","146","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","97",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","85",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label06","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","35",null,"20","37",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","22","20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07_00","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search00_00",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search00_00_00",null,"110","22","20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","108","110",null,"20","37",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","160","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_03","108","185","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_04","108","210","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("수주배분 조회");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,"38%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"13\" text=\"제공현황\" cssclass=\"cell_headMaster\"/><Cell col=\"15\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\"/><Cell col=\"17\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\"/><Cell col=\"19\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\"/><Cell col=\"21\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\"/><Cell col=\"23\" colspan=\"2\" text=\"인계대기\" cssclass=\"cell_headMaster\"/><Cell col=\"25\" colspan=\"4\" text=\"재공현황\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"2\" text=\"양산구분\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\"/><Cell row=\"1\" col=\"4\" text=\"Rev\"/><Cell row=\"1\" col=\"5\" text=\"품목명\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\"/><Cell row=\"1\" col=\"7\" text=\"공정명\"/><Cell row=\"1\" col=\"8\" text=\"SIte ID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"11\" text=\"Lot No.\"/><Cell row=\"1\" col=\"12\" text=\"단위\"/><Cell row=\"1\" col=\"13\" text=\"Locking 여부\"/><Cell row=\"1\" col=\"14\" text=\"보류 여부\"/><Cell row=\"1\" col=\"15\" text=\"수량\"/><Cell row=\"1\" col=\"16\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"리드타임\"/><Cell row=\"1\" col=\"26\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"27\" text=\"납기일자\"/><Cell row=\"1\" col=\"28\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:양산구분\"/><Cell col=\"3\" text=\"bind:품목코드\"/><Cell col=\"4\" text=\"bind:Rev\"/><Cell col=\"5\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:공정수순\"/><Cell col=\"7\" text=\"bind:공정명\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:SIteID\"/><Cell col=\"9\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RollSheet\"/><Cell col=\"11\" text=\"bind:LotNo\"/><Cell col=\"12\" text=\"bind:단위\"/><Cell col=\"13\" text=\"bind:Locking여부\"/><Cell col=\"14\" text=\"bind:보류여부\"/><Cell col=\"15\" text=\"bind:수량\" textAlign=\"right\"/><Cell col=\"16\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:PCS1\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:PNL1\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:PCS2\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:PNL2\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:PCS3\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:PNL3\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:PCS4\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:PNL4\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:리드타임\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:LOT투입일\"/><Cell col=\"27\" text=\"bind:납기일자\"/><Cell col=\"28\" text=\"bind:잔여일수\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","grd_00:19",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("완불처리");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","10",null,"32","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("불량 코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00","31.38%","5","22","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","btn_search00:0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div01.form);
            obj.set_taborder("1");
            this.div_work.form.tab_00.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","42","117","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","76",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd_t1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"공정수순\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"수량(PNL)\"/><Cell col=\"7\" text=\"양산구분\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"Site ID\"/><Cell col=\"13\" text=\"Roll/Sheet\"/><Cell col=\"14\" text=\"단위\"/><Cell col=\"15\" text=\"Locking 여부\"/><Cell col=\"16\" text=\"보류 여부\"/><Cell col=\"17\" text=\"리드타임\"/><Cell col=\"18\" text=\"LOT 투입일\"/><Cell col=\"19\" text=\"납기일자\"/><Cell col=\"20\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LotNo\"/><Cell col=\"3\" text=\"bind:공정수순\"/><Cell col=\"4\" text=\"bind:작업장\"/><Cell col=\"5\" text=\"bind:수량\"/><Cell col=\"6\" text=\"bind:수량PNL\"/><Cell col=\"7\" text=\"bind:양산구분\"/><Cell col=\"8\" text=\"bind:품목코드\"/><Cell col=\"9\" text=\"bind:Rev\"/><Cell col=\"10\" text=\"bind:품목명\"/><Cell col=\"11\" text=\"bind:공정명\"/><Cell col=\"12\" text=\"bind:SiteID\"/><Cell col=\"13\" text=\"bind:RollSheet\"/><Cell col=\"14\" text=\"bind:단위\"/><Cell col=\"15\" text=\"bind:Locking여부\"/><Cell col=\"16\" text=\"bind:보류여부\"/><Cell col=\"17\" text=\"bind:리드타임\"/><Cell col=\"18\" text=\"bind:LOT투입일\"/><Cell col=\"19\" text=\"bind:납기일자\"/><Cell col=\"20\" text=\"bind:잔여일수\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("LOT별 불량");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","10",null,"32","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00","Static30:5","5","200","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form.Div01.form);
            obj.set_taborder("1");
            this.div_work.form.tab_00.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","41.75%","42","38","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0","42","98","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("불량처리 대상");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","41.75%","76",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grd_t2_2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"불량코드 명\"/><Cell col=\"2\" text=\"품질공정\"/><Cell col=\"3\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"수량\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"불량률\"/><Cell col=\"6\" text=\"원인 품목\"/><Cell col=\"7\" text=\"원인 LOTID\"/><Cell col=\"8\" text=\"원인 공정\"/><Cell col=\"9\" text=\"원인 작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:불량코드\"/><Cell col=\"1\" text=\"bind:불량코드명\"/><Cell col=\"2\" text=\"bind:품질공정\"/><Cell col=\"3\" text=\"bind:수량PNL\"/><Cell col=\"4\" text=\"bind:수량\"/><Cell col=\"5\" text=\"bind:불량률\"/><Cell col=\"6\" text=\"bind:원인품목\"/><Cell col=\"7\" text=\"bind:원인LOTID\"/><Cell col=\"8\" text=\"bind:원인공정\"/><Cell col=\"9\" text=\"bind:원인작업장\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","76",null,null,"grd_00_00:10","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd_t2_1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"공정수순\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"수량(PNL)\"/><Cell col=\"7\" text=\"양산구분\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"Site ID\"/><Cell col=\"13\" text=\"Roll/Sheet\"/><Cell col=\"14\" text=\"단위\"/><Cell col=\"15\" text=\"Locking 여부\"/><Cell col=\"16\" text=\"보류 여부\"/><Cell col=\"17\" text=\"리드타임\"/><Cell col=\"18\" text=\"LOT 투입일\"/><Cell col=\"19\" text=\"납기일자\"/><Cell col=\"20\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LotNo\"/><Cell col=\"3\" text=\"bind:공정수순\"/><Cell col=\"4\" text=\"bind:작업장\"/><Cell col=\"5\" text=\"bind:수량\"/><Cell col=\"6\" text=\"bind:수량PNL\"/><Cell col=\"7\" text=\"bind:양산구분\"/><Cell col=\"8\" text=\"bind:품목코드\"/><Cell col=\"9\" text=\"bind:Rev\"/><Cell col=\"10\" text=\"bind:품목명\"/><Cell col=\"11\" text=\"bind:공정명\"/><Cell col=\"12\" text=\"bind:SiteID\"/><Cell col=\"13\" text=\"bind:RollSheet\"/><Cell col=\"14\" text=\"bind:단위\"/><Cell col=\"15\" text=\"bind:Locking여부\"/><Cell col=\"16\" text=\"bind:보류여부\"/><Cell col=\"17\" text=\"bind:리드타임\"/><Cell col=\"18\" text=\"bind:LOT투입일\"/><Cell col=\"19\" text=\"bind:납기일자\"/><Cell col=\"20\" text=\"bind:잔여일수\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"48","29","24","29",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"48","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","106","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("제공현황  <fc v=\"#f31d24\">70</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"300","58","15","450",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp","50.42%","grd_00:15","24","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00","450","338","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"grd_00:15","23","24","btn_suttleUp:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template30.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
