(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00800M");
            this.set_titletext("조회조건+그리드T+(그리드L+(그리드R+이미지B)R)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"처리일시\" type=\"STRING\" size=\"256\"/><Column id=\"대공정명\" type=\"STRING\" size=\"256\"/><Column id=\"중공정명\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"검사구분\" type=\"STRING\" size=\"256\"/><Column id=\"검사자명\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"REV\" type=\"STRING\" size=\"256\"/><Column id=\"모LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LotNO\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"검사수PCS\" type=\"STRING\" size=\"256\"/><Column id=\"검사수PNL\" type=\"STRING\" size=\"256\"/><Column id=\"불량수PCS\" type=\"STRING\" size=\"256\"/><Column id=\"불량수PNL\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/><Column id=\"NCR발행여부\" type=\"STRING\" size=\"256\"/><Column id=\"재검사유\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"대공정명\">드릴</Col><Col id=\"중공정명\">UV LASER</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">전태선</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"품목명\">AMB999RD01 DIGITIZER(2L)</Col><Col id=\"REV\">FA2</Col><Col id=\"모LOT\">210104F002-1-FG00-001-001</Col><Col id=\"LotNO\">210104F002-1-FG00-001-001</Col><Col id=\"PCS\">3,588</Col><Col id=\"PNL\">299</Col><Col id=\"검사수PCS\">60</Col><Col id=\"검사수PNL\">5</Col><Col id=\"불량수PCS\">3</Col><Col id=\"불량수PNL\">1</Col><Col id=\"불량율\">5</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">검사</Col><Col id=\"중공정명\">AOI</Col><Col id=\"공정수순\">90</Col><Col id=\"공정명\">외층 AOI검사</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">나노테크_5F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">전태선</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">200908F003-1-FG00-001-001</Col><Col id=\"LotNO\">200908F003-1-FG00-001-002</Col><Col id=\"PCS\">720</Col><Col id=\"PNL\">60</Col><Col id=\"검사수PCS\">60</Col><Col id=\"검사수PNL\">5</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">전처리</Col><Col id=\"중공정명\">PLASMA</Col><Col id=\"공정수순\">95</Col><Col id=\"공정명\">외층 C/L 가접전 PLASMA</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">PLASMA_5F</Col><Col id=\"검사구분\">자주검사(입고)</Col><Col id=\"검사자명\">전태선</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">200908F003-1-FG00-001-001</Col><Col id=\"LotNO\">200908F003-1-FG00-001-001</Col><Col id=\"PCS\">720</Col><Col id=\"PNL\">60</Col><Col id=\"검사수PCS\">60</Col><Col id=\"검사수PNL\">5</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">검사</Col><Col id=\"중공정명\">AOI</Col><Col id=\"공정수순\">90</Col><Col id=\"공정명\">외층 AOI검사</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">나노테크_5F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">전태선</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">200908F004-1-FG00-001-001</Col><Col id=\"LotNO\">200908F004-1-FG00-001-004</Col><Col id=\"PCS\">720</Col><Col id=\"PNL\">60</Col><Col id=\"검사수PCS\">60</Col><Col id=\"검사수PNL\">5</Col><Col id=\"불량수PCS\">60</Col><Col id=\"불량수PNL\">5</Col><Col id=\"불량율\">100</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">드릴</Col><Col id=\"중공정명\">UV LASER</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,328</Col><Col id=\"PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"검사수PNL\">194</Col><Col id=\"불량수PCS\">72</Col><Col id=\"불량수PNL\">6</Col><Col id=\"불량율\">3.09</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">동도금</Col><Col id=\"중공정명\">전해동(전기동)</Col><Col id=\"공정수순\">30</Col><Col id=\"공정명\">RTR 전기동도금</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR 동도금_B1F</Col><Col id=\"검사구분\">자주검사(입고)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">60</Col><Col id=\"검사수PNL\">5</Col><Col id=\"불량수PCS\">6</Col><Col id=\"불량수PNL\">1</Col><Col id=\"불량율\">10</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">동도금</Col><Col id=\"중공정명\">전해동(전기동)</Col><Col id=\"공정수순\">30</Col><Col id=\"공정명\">RTR 전기동도금</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR 동도금_B1F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">24</Col><Col id=\"검사수PNL\">2</Col><Col id=\"불량수PCS\">2</Col><Col id=\"불량수PNL\">1</Col><Col id=\"불량율\">8.33</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">회로</Col><Col id=\"중공정명\">D/F L/A</Col><Col id=\"공정수순\">55</Col><Col id=\"공정명\">RTR DRY FILM L/A</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR 노광_4F</Col><Col id=\"검사구분\">자주검사(입고)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">2,244</Col><Col id=\"검사수PNL\">187</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">회로</Col><Col id=\"중공정명\">D/F L/A</Col><Col id=\"공정수순\">55</Col><Col id=\"공정명\">RTR DRY FILM L/A</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR 노광_4F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">120</Col><Col id=\"검사수PNL\">10</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">회로</Col><Col id=\"중공정명\">D/F L/A</Col><Col id=\"공정수순\">55</Col><Col id=\"공정명\">RTR DRY FILM L/A</Col><Col id=\"차수\">2</Col><Col id=\"작업장\">RTR 노광_4F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">1,200</Col><Col id=\"검사수PNL\">100</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">회로</Col><Col id=\"중공정명\">D/F L/A</Col><Col id=\"공정수순\">55</Col><Col id=\"공정명\">RTR DRY FILM L/A</Col><Col id=\"차수\">3</Col><Col id=\"작업장\">RTR 노광_4F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">36</Col><Col id=\"검사수PNL\">3</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row><Row><Col id=\"대공정명\">회로</Col><Col id=\"중공정명\">DES</Col><Col id=\"공정수순\">70</Col><Col id=\"공정명\">RTR 현상/부식</Col><Col id=\"차수\">1</Col><Col id=\"작업장\">RTR 부식_4F</Col><Col id=\"검사구분\">자주검사(출하)</Col><Col id=\"검사자명\">빌트원</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"REV\">FA1</Col><Col id=\"모LOT\">210115F002-1-FG00-002-001</Col><Col id=\"LotNO\">210115F002-1-FG00-002-001</Col><Col id=\"PCS\">2,244</Col><Col id=\"PNL\">187</Col><Col id=\"검사수PCS\">120</Col><Col id=\"검사수PNL\">10</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량율\">0</Col><Col id=\"NCR발행여부\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"판정등급\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드명\" type=\"STRING\" size=\"256\"/><Column id=\"품질공정명\" type=\"STRING\" size=\"256\"/><Column id=\"검사수PNL\" type=\"STRING\" size=\"256\"/><Column id=\"검사수PCS\" type=\"STRING\" size=\"256\"/><Column id=\"불량수PNL\" type=\"STRING\" size=\"256\"/><Column id=\"불량수PCS\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/><Column id=\"원인품목명\" type=\"STRING\" size=\"256\"/><Column id=\"원인LotID\" type=\"STRING\" size=\"256\"/><Column id=\"원인공정명\" type=\"STRING\" size=\"256\"/><Column id=\"원인작업장명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">홀쏠림</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">3</Col><Col id=\"불량수PCS\">36</Col><Col id=\"불량율\">1.55</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\">20190829-000037</Col></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">홀미관통</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">1</Col><Col id=\"불량수PCS\">12</Col><Col id=\"불량율\">0.52</Col><Col id=\"원인품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"원인LotID\">210115F002-1-FG00-002-001</Col></Row><Row><Col id=\"판정등급\">A</Col><Col id=\"불량코드명\">레진잔존</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">A</Col><Col id=\"불량코드명\">홀관통</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">ROLL LOSS</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">구김</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">찢김</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">이물</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">스크래치</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">홀과가공</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">찍힘</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">A</Col><Col id=\"불량코드명\">홀막힘</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">홀BURR</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">A</Col><Col id=\"불량코드명\">홀SIZE</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">B</Col><Col id=\"불량코드명\">홀터짐</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">0</Col><Col id=\"불량수PCS\">0</Col><Col id=\"불량율\">0</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row><Row><Col id=\"판정등급\">A</Col><Col id=\"불량코드명\">홀누락</Col><Col id=\"품질공정명\">LASER</Col><Col id=\"검사수PNL\">194</Col><Col id=\"검사수PCS\">2,328</Col><Col id=\"불량수PNL\">2</Col><Col id=\"불량수PCS\">24</Col><Col id=\"불량율\">1.03</Col><Col id=\"원인품목명\"/><Col id=\"원인LotID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"확장자\" type=\"STRING\" size=\"256\"/><Column id=\"파일크기\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"파일명\">images-불량</Col><Col id=\"확장자\">jfif</Col><Col id=\"파일크기\">9,525</Col></Row></Rows>");
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

            obj = new Static("sta_title","30","16","220","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("자주검사(입고-출하)결과조회");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","224","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("자주검사(입고,출하)결과 조회현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0",null,"66","34",null,"362",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("상세현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","sta_subTitle01:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"160\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"9\" cssclass=\"cell_headMaster\" text=\"공정정보(발견공정)\"/><Cell col=\"10\" colspan=\"7\" text=\"제품정보\" cssclass=\"cell_headMaster\"/><Cell col=\"17\" colspan=\"2\" text=\"검사수\" cssclass=\"cell_headMaster\"/><Cell col=\"19\" colspan=\"5\" text=\"불량수\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"1\" text=\"처리일시\"/><Cell row=\"1\" col=\"2\" text=\"대공정명\"/><Cell row=\"1\" col=\"3\" text=\"중공정명\"/><Cell row=\"1\" col=\"4\" text=\"공정수순\"/><Cell row=\"1\" col=\"5\" text=\"공정명\"/><Cell row=\"1\" col=\"6\" text=\"차수\"/><Cell row=\"1\" col=\"7\" text=\"작업장\"/><Cell row=\"1\" col=\"8\" text=\"검사구분\"/><Cell row=\"1\" col=\"9\" text=\"검사자명\"/><Cell row=\"1\" col=\"10\" text=\"품목코드\"/><Cell row=\"1\" col=\"11\" text=\"품목명\"/><Cell row=\"1\" col=\"12\" text=\"REV\"/><Cell row=\"1\" col=\"13\" text=\"모 LOT\"/><Cell row=\"1\" col=\"14\" text=\"Lot No.\"/><Cell row=\"1\" col=\"15\" text=\"PCS\"/><Cell row=\"1\" col=\"16\" text=\"PNL\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"불량수PCS\"/><Cell row=\"1\" col=\"20\" text=\"불량수PNL\"/><Cell row=\"1\" col=\"21\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"22\" text=\"NCR 발행여부\"/><Cell row=\"1\" col=\"23\" text=\"재검사유\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:처리일시\"/><Cell col=\"2\" text=\"bind:대공정명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:중공정명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:공정수순\"/><Cell col=\"5\" text=\"bind:공정명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:차수\"/><Cell col=\"7\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:검사구분\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:검사자명\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:품목코드2\"/><Cell col=\"11\" text=\"bind:품목명\"/><Cell col=\"12\" text=\"bind:REV2\"/><Cell col=\"13\" text=\"bind:모LOT\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:LotNO\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PCS\"/><Cell col=\"16\" text=\"bind:PNL\"/><Cell col=\"17\" text=\"bind:검사수PCS\"/><Cell col=\"18\" text=\"bind:검사수PNL\"/><Cell col=\"19\" text=\"bind:불량수PCS\"/><Cell col=\"20\" text=\"bind:불량수PNL\"/><Cell col=\"21\" text=\"bind:불량율\"/><Cell col=\"22\" text=\"bind:NCR발행여부\"/><Cell col=\"23\" text=\"bind:재검사유\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp00",null,null,"29","24","440","366",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_02",null,null,"430","121","0","241",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_grd02");
            obj.set_autoenter("select");
            obj.set_fillareatype("linerow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"확장자\"/><Cell col=\"3\" text=\"파일크기\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:파일명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:확장자\"/><Cell col=\"3\" text=\"bind:파일크기\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_01","0",null,null,"362","grd_02:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"판정등급\"/><Cell col=\"2\" rowspan=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" rowspan=\"2\" text=\"품질공정 명\"/><Cell col=\"4\" colspan=\"2\" text=\"검사수\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" colspan=\"2\" text=\"불량수\" cssclass=\"cell_headMaster\"/><Cell col=\"8\" rowspan=\"2\" text=\"불량율(%)\"/><Cell col=\"9\" colspan=\"4\" text=\"원인공정\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"4\" text=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\"/><Cell row=\"1\" col=\"6\" text=\"PNL\"/><Cell row=\"1\" col=\"7\" text=\"PCS\"/><Cell row=\"1\" col=\"9\" text=\"원인품목명\"/><Cell row=\"1\" col=\"10\" text=\"원인 Lot ID\"/><Cell row=\"1\" col=\"11\" text=\"원인공정명\"/><Cell row=\"1\" col=\"12\" text=\"원인작업장명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:판정등급\"/><Cell col=\"2\" text=\"bind:불량코드명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:품질공정명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:검사수PNL\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:검사수PCS\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:불량수PNL\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:불량수PCS\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:불량율\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:원인품목명\"/><Cell col=\"10\" text=\"bind:원인LotID\"/><Cell col=\"11\" text=\"bind:원인공정명\"/><Cell col=\"12\" text=\"bind:원인작업장명\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new ImageViewer("img_00",null,null,"430","231","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("img_photo");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01_00","grd_01:10",null,"38","34",null,"362",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("파일");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("검사구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","250","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","250","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"230","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","256","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("처리기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","110",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"110","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","185",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"185","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("모 Lot");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_03","108","210",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"210","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_04","108","160","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
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
        this.loadIncludeScript("template27.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
