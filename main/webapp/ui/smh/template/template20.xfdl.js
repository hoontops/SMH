(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template20");
            this.set_titletext("조회조건+Master Tab(그리드T3,B3)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명K\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명E\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명C\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명V\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류2\" type=\"STRING\" size=\"256\"/><Column id=\"검사유형\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목사용여부\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사종류\">AOIInspection</Col><Col id=\"검사종류명K\">AOI검사</Col><Col id=\"검사종류명E\">AOI inspection</Col><Col id=\"검사종류명C\">AOIInspection</Col><Col id=\"검사종류명V\">Kiểm tra AOI</Col><Col id=\"검사종류2\">규격측정(계측값)</Col><Col id=\"검사유형\">품질공정</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">AOI검사</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사종류\">BBTInspection</Col><Col id=\"검사종류명K\">BBT검사</Col><Col id=\"검사종류명E\">BBT test</Col><Col id=\"검사종류명C\">BBTInspection</Col><Col id=\"검사종류명V\">Kiểm tra BBT</Col><Col id=\"검사종류2\">규격측정(계측값)</Col><Col id=\"검사유형\">품질공정</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">BBT검사</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"검사종류\">ChemicalInspection</Col><Col id=\"검사종류명K\">약품검사</Col><Col id=\"검사종류명E\">Chemical inspection</Col><Col id=\"검사종류명C\">ChemicalInspection</Col><Col id=\"검사종류명V\">Kiểm Tra Hàng Mềm</Col><Col id=\"검사종류2\">약품수질분석</Col><Col id=\"검사유형\">설비+대공정</Col><Col id=\"검사항목사용여부\">Y</Col><Col id=\"유효상태\"/><Col id=\"설명\">약품검사</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"검사종류\">EtchingRateInspection</Col><Col id=\"검사종류명K\">에칭레이트</Col><Col id=\"검사종류명E\">Etching Rate</Col><Col id=\"검사종류명C\">EtchingRateInspection</Col><Col id=\"검사종류명V\">Tỷ Lệ Ăn Mòn</Col><Col id=\"검사종류2\">에칭레이트</Col><Col id=\"검사유형\">해당없음</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">에칭레이트</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"검사종류\">FinishInspection</Col><Col id=\"검사종류명K\">최종검사</Col><Col id=\"검사종류명E\">final inspection</Col><Col id=\"검사종류명C\">FinishInspection</Col><Col id=\"검사종류명V\">Kiểm tra cuối</Col><Col id=\"검사종류2\">최종검사</Col><Col id=\"검사유형\">제품</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">최종검사</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"검사종류\">RawInspection</Col><Col id=\"검사종류명K\">수입(원자재)</Col><Col id=\"검사종류명E\">incoming (raw materials)</Col><Col id=\"검사종류명C\">RawInspection</Col><Col id=\"검사종류명V\">Nhập (Nguyên Vật Liệu)</Col><Col id=\"검사종류2\">수입검사</Col><Col id=\"검사유형\">자재</Col><Col id=\"검사항목사용여부\">Y</Col><Col id=\"유효상태\"/><Col id=\"설명\">수입(원자재)</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">7</Col><Col id=\"검사종류\">ReliabilityInspection</Col><Col id=\"검사종류명K\">신뢰성검증</Col><Col id=\"검사종류명E\">Reliability test</Col><Col id=\"검사종류명C\">ReliabilityInspection</Col><Col id=\"검사종류명V\">Kiểm Chứng Độ Tin Cậy</Col><Col id=\"검사종류2\">신뢰성검증</Col><Col id=\"검사유형\">해당없음</Col><Col id=\"검사항목사용여부\">Y</Col><Col id=\"유효상태\"/><Col id=\"설명\">신뢰성검증</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"검사종류\">SelfInspectionShip</Col><Col id=\"검사종류명K\">자주검사(출하)</Col><Col id=\"검사종류명E\">Self inspection (Output)</Col><Col id=\"검사종류명C\">SelfInspectionShip</Col><Col id=\"검사종류명V\">Kiểm tra thường xuyên( xuất hàng)</Col><Col id=\"검사종류2\">자주검사</Col><Col id=\"검사유형\">품질공정</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">자주검사(출하)</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">9</Col><Col id=\"검사종류\">SelfInspectionTake</Col><Col id=\"검사종류명K\">자주검사(입고)</Col><Col id=\"검사종류명E\">Self inspection (Incoming)</Col><Col id=\"검사종류명C\">SelfInspectionTake</Col><Col id=\"검사종류명V\">Kiểm tra thường xuyên ( nhập kho)</Col><Col id=\"검사종류2\">자주검사</Col><Col id=\"검사유형\">품질공정</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">자주검사(입고)</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"검사종류\">ShipmentInspection</Col><Col id=\"검사종류명K\">출하검사</Col><Col id=\"검사종류명E\">Outcoming inspection</Col><Col id=\"검사종류명C\">ShipmentInspection</Col><Col id=\"검사종류명V\">Kiểm tra xuất hàng</Col><Col id=\"검사종류2\">출하검사</Col><Col id=\"검사유형\">제품</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">출하검사</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"검사종류\">SubassemblyInspection</Col><Col id=\"검사종류명K\">수입(원자재가공품)</Col><Col id=\"검사종류명E\">incoming (raw material processed product)</Col><Col id=\"검사종류명C\">SubassemblyInspection</Col><Col id=\"검사종류명V\">Nhập (Nguyên Vật Liệu Gia Công) </Col><Col id=\"검사종류2\">수입검사</Col><Col id=\"검사유형\">자재</Col><Col id=\"검사항목사용여부\">Y</Col><Col id=\"유효상태\"/><Col id=\"설명\">수입(원자재가공품)</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"검사종류\">WaterInspection</Col><Col id=\"검사종류명K\">수질검사</Col><Col id=\"검사종류명E\">Water quality inspection</Col><Col id=\"검사종류명C\">WaterInspection</Col><Col id=\"검사종류명V\">Kiểm Tra Chất Lượng Nước</Col><Col id=\"검사종류2\">약품수질분석</Col><Col id=\"검사유형\">설비+대공정</Col><Col id=\"검사항목사용여부\">Y</Col><Col id=\"유효상태\"/><Col id=\"설명\">수질검사</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"검사종류\">OperationInspection</Col><Col id=\"검사종류명K\">규격측정(계측값)</Col><Col id=\"검사종류명E\">Standard measurement (measured value)</Col><Col id=\"검사종류명C\">OperationInspection</Col><Col id=\"검사종류명V\">Đo Lường Tiêu Chuẩn  ( Giá Trị Đo Lường)</Col><Col id=\"검사종류2\">규격측정(계측값)</Col><Col id=\"검사유형\">표준공정</Col><Col id=\"검사항목사용여부\">Y</Col><Col id=\"유효상태\"/><Col id=\"설명\">규격측정(계측값)</Col><Col id=\"생성자\">유효</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"검사종류\">OSPInspection</Col><Col id=\"검사종류명K\">수입(외주입고품)</Col><Col id=\"검사종류명E\">incoming (outsourced goods)</Col><Col id=\"검사종류명C\">OSPInspection</Col><Col id=\"검사종류명V\">Nhập(Hàng Nhập Kho Ngoài)</Col><Col id=\"검사종류2\">수입검사</Col><Col id=\"검사유형\">품질공정</Col><Col id=\"검사항목사용여부\">N</Col><Col id=\"유효상태\"/><Col id=\"설명\">수입(외주입고품)</Col><Col id=\"생성자\">유효</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"공정그룹ID\">10</Col><Col id=\"공정그룹명\">재단</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"공정그룹ID\">15</Col><Col id=\"공정그룹명\">회로</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"공정그룹ID\">20</Col><Col id=\"공정그룹명\">드릴</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"공정그룹ID\">25</Col><Col id=\"공정그룹명\">동도금</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"공정그룹ID\">30</Col><Col id=\"공정그룹명\">가이드</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"공정그룹ID\">35</Col><Col id=\"공정그룹명\">부착</Col></Row><Row><Col id=\"No\">7</Col><Col id=\"공정그룹ID\">40</Col><Col id=\"공정그룹명\">적층</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"공정그룹ID\">45</Col><Col id=\"공정그룹명\">전처리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"공정그룹ID\">4512</Col><Col id=\"공정그룹명\">JET 정면</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"공정그룹ID\">4514</Col><Col id=\"공정그룹명\">BRUSH 정면</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"공정그룹ID\">4516</Col><Col id=\"공정그룹명\">BUFF 정면</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"공정그룹ID\">4520</Col><Col id=\"공정그룹명\">HALF E/T</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"공정그룹ID\">4522</Col><Col id=\"공정그룹명\">OXIDE</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"공정그룹ID\">4524</Col><Col id=\"공정그룹명\">OXIDE# LDD</Col></Row><Row><Col id=\"No\">7</Col><Col id=\"공정그룹ID\">4528</Col><Col id=\"공정그룹명\">DESMEAR(표면)</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"공정그룹ID\">4531</Col><Col id=\"공정그룹명\">DESMEAR(홀)</Col></Row><Row><Col id=\"공정그룹ID\">4536</Col><Col id=\"공정그룹명\">초음파세척</Col><Col id=\"No\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01_3", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"공정그룹ID\">4536401</Col><Col id=\"공정그룹명\">외층 초음파 수세</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"공정그룹ID\">4536402</Col><Col id=\"공정그룹명\">외층 최종검사전 초음파 수세</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"공정그룹ID\">4536403</Col><Col id=\"공정그룹명\">외층 표면처리후 초음파 수세</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"공정그룹ID\">4536404</Col><Col id=\"공정그룹명\">외층 SHIELD 부착전 초음파 수세</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"공정그룹ID\">4536405</Col><Col id=\"공정그룹명\">외층 외곽 PRESS전 초음파 수세</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"공정그룹ID\">4536406</Col><Col id=\"공정그룹명\">외층 PNL 검사전 초음파 수세</Col></Row><Row><Col id=\"No\">7</Col><Col id=\"공정그룹ID\">4536407</Col><Col id=\"공정그룹명\">외층 BBT전 초음파 수세</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01_4", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명\" type=\"STRING\" size=\"256\"/><Column id=\"필수여부\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자명\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사종류명\">AOI검사</Col><Col id=\"필수여부\"/><Col id=\"수정일\">20191008000000</Col><Col id=\"생성일\">20191008000000</Col><Col id=\"수정자명\">Manager</Col><Col id=\"생성자명\">Manager</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사종류명\">BBT검사</Col><Col id=\"필수여부\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"검사종류명\">약품검사</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"검사종류명\">에칭레이트</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"검사종류명\">최종검사</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"검사종류명\">수입(원자재)</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"검사종류명\">신뢰성검증</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"검사종류명\">자주검사(출하)</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"검사종류명\">자주검사(입고)</Col><Col id=\"No\">9</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"검사종류명\">출하검사</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"검사종류명\">수입(원자재가공품)</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"검사종류명\">수질검사</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"검사종류명\">규격측정(계측값)</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"검사종류명\">수입(외주입고품)</Col><Col id=\"No\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01_5", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명\" type=\"STRING\" size=\"256\"/><Column id=\"필수여부\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자명\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사종류명\">AOI검사</Col><Col id=\"필수여부\"/><Col id=\"수정일\">20191008000000</Col><Col id=\"생성일\">20191008000000</Col><Col id=\"수정자명\">Manager</Col><Col id=\"생성자명\">Manager</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사종류명\">BBT검사</Col><Col id=\"필수여부\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"검사종류명\">약품검사</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"검사종류명\">에칭레이트</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"검사종류명\">최종검사</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"검사종류명\">수입(원자재)</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"검사종류명\">신뢰성검증</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"검사종류명\">자주검사(출하)</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"검사종류명\">자주검사(입고)</Col><Col id=\"No\">9</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"검사종류명\">출하검사</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"검사종류명\">수입(원자재가공품)</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"검사종류명\">수질검사</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"검사종류명\">규격측정(계측값)</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"검사종류명\">수입(외주입고품)</Col><Col id=\"No\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01_6", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사종류명\" type=\"STRING\" size=\"256\"/><Column id=\"필수여부\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자명\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사종류명\">AOI검사</Col><Col id=\"필수여부\"/><Col id=\"수정일\">20191008000000</Col><Col id=\"생성일\">20191008000000</Col><Col id=\"수정자명\">Manager</Col><Col id=\"생성자명\">Manager</Col><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사종류명\">BBT검사</Col><Col id=\"필수여부\"/><Col id=\"유효상태\">유효</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"검사종류명\">약품검사</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"검사종류명\">에칭레이트</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"검사종류명\">최종검사</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"검사종류명\">수입(원자재)</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"검사종류명\">신뢰성검증</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"검사종류명\">자주검사(출하)</Col><Col id=\"필수여부\"/></Row><Row><Col id=\"검사종류명\">자주검사(입고)</Col><Col id=\"No\">9</Col><Col id=\"필수여부\">Y</Col></Row><Row><Col id=\"검사종류명\">출하검사</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"검사종류명\">수입(원자재가공품)</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"검사종류명\">수질검사</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"검사종류명\">규격측정(계측값)</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"검사종류명\">수입(외주입고품)</Col><Col id=\"No\">14</Col></Row></Rows>");
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

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("검사종류관리");
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

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","50","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","50","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"30","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","56","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","47","162","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("검사 정의");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclass","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"260\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사종류\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사 종류 명(K)\"/><Cell col=\"3\" text=\"검사 종류 명(E)\"/><Cell col=\"4\" text=\"검사 종류 명(C)\"/><Cell col=\"5\" text=\"검사 종류 명(V)\"/><Cell col=\"6\" text=\"검사종류\"/><Cell col=\"7\" text=\"검사유형\"/><Cell col=\"8\" text=\"검사항목사용여부\"/><Cell col=\"9\" text=\"설명\"/><Cell col=\"10\" text=\"유효상태\"/><Cell col=\"11\" text=\"생성자\"/><Cell col=\"12\" text=\"생성일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사종류\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사종류명K\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:검사종류명E\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:검사종류명C\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:검사종류명V\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:검사종류2\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:검사유형\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:검사항목사용여부\"/><Cell col=\"9\" text=\"bind:설명\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:유효상태\"/><Cell col=\"11\" text=\"bind:생성자\"/><Cell col=\"12\" text=\"bind:생성일\"/><Cell col=\"13\" text=\"bind:수정자\"/><Cell col=\"14\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","118","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("검사 정의 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("검사 통제");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_t2_06","67.22%","50.00%",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_binddataset("ds_grd01_6");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사종류명\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자명\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자명\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사종류명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:필수여부\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자명\"/><Cell col=\"5\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:수정자명\"/><Cell col=\"7\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_t2_05","33.61%","50.15%",null,null,"grd_t2_06:10","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd01_5");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사종류명\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자명\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자명\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사종류명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:필수여부\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자명\"/><Cell col=\"5\" text=\"bind:생성일\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:수정자명\"/><Cell col=\"7\" text=\"bind:수정일\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title5","33.61%",null,"66","34",null,"grd_t2_05:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title6","67.22%",null,"66","34",null,"grd_t2_06:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_t2_03","67.22%","34",null,null,"0","sta_title6:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd01_3");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"194\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정그룹ID\"/><Cell col=\"2\" text=\"공정그룹명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:공정그룹ID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:공정그룹명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_t2_02","33.61%","34",null,null,"grd_t2_03:10","sta_title5:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd01_2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"191\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정 그룹 ID\"/><Cell col=\"2\" text=\"공정그룹명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:공정그룹ID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:공정그룹명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_t2_04","0","50.15%",null,null,"grd_t2_05:10","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grd01_4");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 종류 명\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자명\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자명\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사종류명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:필수여부\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자명\"/><Cell col=\"5\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"6\" text=\"bind:수정자명\"/><Cell col=\"7\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title4","0",null,"66","34",null,"grd_t2_04:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("검사종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_t2_01","0","34",null,null,"grd_t2_02:10","sta_title4:0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd01_1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"193\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정 그룹 ID\"/><Cell col=\"2\" text=\"공정그룹명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:공정그룹ID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:공정그룹명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title3","67.22%","0","38","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title2","33.61%","0","38","34","599",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","0","38","34","920",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp3",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp2",null,"6","29","24","sta_title3:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp1",null,"6","29","24","sta_title2:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp6",null,null,"29","24","0","grd_t2_06:3",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp5",null,null,"29","24","sta_title6:10","grd_t2_05:3",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp4",null,null,"29","24","sta_title5:10","grd_t2_04:3",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);
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
        this.loadIncludeScript("template20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
