(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template14");
            this.set_titletext("조회조건+(그리드T+DetailM+그리드B)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Y</Col></Row><Row><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">1</Col></Row><Row><Col id=\"data\">1.1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SO번호\" type=\"STRING\" size=\"256\"/><Column id=\"라인\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"기준소요량\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SO번호\">40018091</Col><Col id=\"No\">1</Col><Col id=\"라인\">1.2</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"차수\">1</Col><Col id=\"UOM\">PCS</Col><Col id=\"기준소요량\">12</Col></Row><Row><Col id=\"SO번호\">40018132</Col><Col id=\"No\">2</Col><Col id=\"라인\">1.3</Col><Col id=\"품목코드\">2025362J1CL00011</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-(1L)CL-1-IFV직납</Col><Col id=\"차수\">1</Col><Col id=\"UOM\">쪽</Col><Col id=\"기준소요량\">4</Col></Row><Row><Col id=\"SO번호\">40018132</Col><Col id=\"No\">3</Col><Col id=\"라인\">1.3</Col><Col id=\"품목코드\">2025362J1CL00012</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-(1L)CL-2-IFV직납</Col><Col id=\"차수\">1</Col><Col id=\"UOM\">쪽</Col><Col id=\"기준소요량\">2</Col></Row><Row><Col id=\"SO번호\">40018132</Col><Col id=\"No\">4</Col><Col id=\"라인\">1.3</Col><Col id=\"품목코드\">2025362J1CL00021</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-(2L)CL-IFV직납</Col><Col id=\"차수\">1</Col><Col id=\"UOM\">쪽</Col><Col id=\"기준소요량\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"최초생성수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"투입수량\" type=\"STRING\" size=\"256\"/><Column id=\"자원ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\"/><Col id=\"LotNo\">210104F001-1-CL145-001-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-002-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-003-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-004-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-005-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-006-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-007-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-008-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-009-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-010-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-011-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-012-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-013-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-014-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">14</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-015-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">15</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-016-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">16</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-017-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-018-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-019-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-020-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">20</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-021-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">21</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-022-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">22</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-023-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">23</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-024-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">24</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-025-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">25</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-026-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">26</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-027-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">27</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-028-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">28</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-029-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col><Col id=\"No\">29</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-030-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-031-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-032-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-033-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-034-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-035-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-036-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-037-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-038-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-039-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-040-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-041-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-042-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-043-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-044-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-045-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-046-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-047-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-048-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-049-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-050-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-051-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-052-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-053-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-054-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-055-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-056-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-057-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-058-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-059-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-060-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-061-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-062-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-063-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-064-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-065-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-066-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-067-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-068-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-069-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-070-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-071-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-072-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-073-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-074-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-075-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-076-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-077-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-078-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-079-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-080-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-081-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-082-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-083-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-084-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-085-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-086-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-087-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-088-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-089-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-090-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-091-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-092-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row><Row><Col id=\"LotNo\">210104F001-1-CL145-093-001</Col><Col id=\"단위\">쪽</Col><Col id=\"최초생성수량PNL\">60</Col><Col id=\"수량PNL\">60</Col><Col id=\"투입수량\">120</Col><Col id=\"자원ID\">대건-RTR L/A</Col><Col id=\"공정명\">SUB 자재 C/T 합지</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","35",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","125","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","125","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"105","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","131","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("title","0","0","116","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("품목 리스트  <fc v=\"#f31d24\">4</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01_00","0","36.71%",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02","0","10","87","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("납기일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label02:10","10","100","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20201014");
            obj.set_readonly("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label03","cal_00:10","10","93","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("예상생산완료일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal_01","label03:10","10","100","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20201014");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","cal_01:15","10","98","21",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("Lot Card 출력");
            obj.set_fittocontents("width");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_00","chk_00:10","10","100","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("5");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_00","spn_00:0","10","17","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_00_00","sta_00:0","10","100","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("7");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_00","spn_00_00:3","10","34","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","Div01_00:34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"최초생성수량(PNL)\"/><Cell col=\"5\" text=\"수량(PNL)\"/><Cell col=\"6\" text=\"투입수량\"/><Cell col=\"7\" text=\"자원 ID\"/><Cell col=\"8\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LotNo\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:단위\"/><Cell col=\"4\" text=\"bind:최초생성수량PNL\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:수량PNL\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:투입수량\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:자원ID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:공정명\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"0\"/><Cell col=\"5\" text=\"0\"/><Cell col=\"6\" text=\"0\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","Div01_00:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"50\"/><Column size=\"220\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"S/O번호\"/><Cell col=\"2\" text=\"라인\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"차수\"/><Cell col=\"7\" text=\"UOM\"/><Cell col=\"8\" text=\"기준소요량\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SO번호\"/><Cell col=\"2\" text=\"bind:라인\"/><Cell col=\"3\" text=\"bind:품목코드\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Rev\"/><Cell col=\"5\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:차수\"/><Cell col=\"7\" text=\"bind:UOM\"/><Cell col=\"8\" text=\"bind:기준소요량\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"59","34",null,"grd_01:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_00",null,"246","45","10","751",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01",null,"298","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("화면명");
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
        this.loadIncludeScript("template14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
