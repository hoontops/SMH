(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template32");
            this.set_titletext("조회조건(Multi)+Master Tab(treeL+(그리드T+그리드M+sub탭B) R)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹유형\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명K\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명E\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명C\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명V\" type=\"STRING\" size=\"256\"/><Column id=\"상위분류\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">10</Col><Col id=\"공정그룹명K\">재단</Col><Col id=\"공정그룹명E\">Cutting</Col><Col id=\"공정그룹명C\">CUT</Col><Col id=\"공정그룹명V\">Cắt</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">15</Col><Col id=\"공정그룹명K\">회로</Col><Col id=\"공정그룹명E\">Trace</Col><Col id=\"공정그룹명C\">PATTERN</Col><Col id=\"공정그룹명V\">Mạch điện</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">3</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">20</Col><Col id=\"공정그룹명K\">드릴</Col><Col id=\"공정그룹명E\">drill</Col><Col id=\"공정그룹명C\">DRILL</Col><Col id=\"공정그룹명V\">Khoan</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">25</Col><Col id=\"공정그룹명K\">동도금</Col><Col id=\"공정그룹명E\">Cu plating</Col><Col id=\"공정그룹명C\">COPPER PLATING</Col><Col id=\"공정그룹명V\">Mạ Đồng</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">30</Col><Col id=\"공정그룹명K\">가이드</Col><Col id=\"공정그룹명E\">guide</Col><Col id=\"공정그룹명C\">GUIDE</Col><Col id=\"공정그룹명V\">Guide</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">6</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">35</Col><Col id=\"공정그룹명K\">부착</Col><Col id=\"공정그룹명E\">Attach</Col><Col id=\"공정그룹명C\">ATTACHMENT</Col><Col id=\"공정그룹명V\">Gắn</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">7</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">40</Col><Col id=\"공정그룹명K\">적층</Col><Col id=\"공정그룹명E\">Lamination</Col><Col id=\"공정그룹명C\">H/P</Col><Col id=\"공정그룹명V\">Lamination</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row><Row><Col id=\"No\">8</Col><Col id=\"공정그룹유형\">대공정</Col><Col id=\"공정그룹ID\">45</Col><Col id=\"공정그룹명K\">전처리</Col><Col id=\"공정그룹명E\">Pretreatment</Col><Col id=\"공정그룹명C\">PRE-TREATMENT</Col><Col id=\"공정그룹명V\">Tiền xử lý</Col><Col id=\"상위분류\"/><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-10-01 00:00:00</Col><Col id=\"수정자\">Manager</Col><Col id=\"수정일\">2019-10-01 00:00:00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"표준공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명K\" type=\"STRING\" size=\"256\"/><Column id=\"공정명E\" type=\"STRING\" size=\"256\"/><Column id=\"공정명C\" type=\"STRING\" size=\"256\"/><Column id=\"공정명V\" type=\"STRING\" size=\"256\"/><Column id=\"공정유형\" type=\"STRING\" size=\"256\"/><Column id=\"스탭유형\" type=\"STRING\" size=\"256\"/><Column id=\"작업단위\" type=\"STRING\" size=\"256\"/><Column id=\"세부공정\" type=\"STRING\" size=\"256\"/><Column id=\"외주사양구분\" type=\"STRING\" size=\"256\"/><Column id=\"도금유형\" type=\"STRING\" size=\"256\"/><Column id=\"자재\" type=\"STRING\" size=\"256\"/><Column id=\"공정SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"치공구\" type=\"STRING\" size=\"256\"/><Column id=\"원가코드\" type=\"STRING\" size=\"256\"/><Column id=\"SITE전용공정\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518101</Col><Col id=\"공정명K\">RTR 현상</Col><Col id=\"공정명E\">RTR Development </Col><Col id=\"공정명C\">RTR 显像</Col><Col id=\"공정명V\">Hiện ảnh RTR </Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">RTR</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:28:03</Col></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518102</Col><Col id=\"공정명K\">RTR 현상-1</Col><Col id=\"공정명E\">RTR Development-1</Col><Col id=\"공정명C\">RTR 显像-1</Col><Col id=\"공정명V\">Hiện ảnh RTR-1</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">RTR</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-06-11 08:54:44</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518103</Col><Col id=\"공정명K\">RTR 현상-2</Col><Col id=\"공정명E\">RTR Development-2</Col><Col id=\"공정명C\">RTR 显像-2</Col><Col id=\"공정명V\">Hiện ảnh RTR-2</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">RTR</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-06-11 08:54:44</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518401</Col><Col id=\"공정명K\">외층 현상</Col><Col id=\"공정명E\">Outer layer Development </Col><Col id=\"공정명C\">外层 显像</Col><Col id=\"공정명V\">Hiện Ảnh Tầng Ngoài</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">외층</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:28:03</Col></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518402</Col><Col id=\"공정명K\">외층 현상-1</Col><Col id=\"공정명E\">Outer layer Development -1</Col><Col id=\"공정명C\">外层 显像-1</Col><Col id=\"공정명V\">Hiện Ảnh Tầng Ngoài - 1</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">외층</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:28:03</Col></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518403</Col><Col id=\"공정명K\">외층 현상-2</Col><Col id=\"공정명E\">Outer layer Development -2</Col><Col id=\"공정명C\">外层 显像-2</Col><Col id=\"공정명V\">Hiện Ảnh Tầng Ngoài - 2</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">외층</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:28:03</Col></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518404</Col><Col id=\"공정명K\">외층 현상-3</Col><Col id=\"공정명E\">Outer layer Development -3</Col><Col id=\"공정명C\">外层 显像-3</Col><Col id=\"공정명V\">Hiện Ảnh Tầng Ngoài - 3</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">외층</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:28:03</Col></Row><Row><Col id=\"공정그룹ID\">1518</Col><Col id=\"표준공정ID\">1518405</Col><Col id=\"공정명K\">외층 현상-4</Col><Col id=\"공정명E\">Outer Layer Development -4</Col><Col id=\"공정명C\">外层 显像-4</Col><Col id=\"공정명V\">Hiện Ảnh Tầng Ngoài - 4</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">외층</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/><Col id=\"SITE전용공정\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:28:03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"name\">INTERFLEX</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">10 재단</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">15 회로</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">20 드릴</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">25 동도금</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">30 가이드</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">35 부착</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">40 적층</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">45 전처리</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">50 인쇄</Col></Row><Row><Col id=\"name\">55 표면처리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">60 타발</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">65 SUB</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">70 검사</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">75 SMT</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">80 VHWKD</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"name\">99 기타</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"표준공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명K\" type=\"STRING\" size=\"256\"/><Column id=\"공정명E\" type=\"STRING\" size=\"256\"/><Column id=\"공정명C\" type=\"STRING\" size=\"256\"/><Column id=\"공정명V\" type=\"STRING\" size=\"256\"/><Column id=\"대공정\" type=\"STRING\" size=\"256\"/><Column id=\"중공정\" type=\"STRING\" size=\"256\"/><Column id=\"공정유형\" type=\"STRING\" size=\"256\"/><Column id=\"스탭유형\" type=\"STRING\" size=\"256\"/><Column id=\"작업단위\" type=\"STRING\" size=\"256\"/><Column id=\"세부공정\" type=\"STRING\" size=\"256\"/><Column id=\"치공구작업\" type=\"STRING\" size=\"256\"/><Column id=\"수입검사유무\" type=\"STRING\" size=\"256\"/><Column id=\"외주사양구분\" type=\"STRING\" size=\"256\"/><Column id=\"도금유형\" type=\"STRING\" size=\"256\"/><Column id=\"자재\" type=\"STRING\" size=\"256\"/><Column id=\"공정SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"치공구\" type=\"STRING\" size=\"256\"/><Column id=\"원가코드\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"표준공정ID\">1010201</Col><Col id=\"공정명K\">내층 BASE 재단</Col><Col id=\"작업장E\">INNER BASE CUT</Col><Col id=\"작업장C\">BASE 裁断</Col><Col id=\"작업장V\">INNER BASE CUT</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">BASE 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">4Step</Col><Col id=\"작업장Type\">인수,작업시작,작업완료,인계</Col><Col id=\"자사구분\">자사</Col><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">한주석</Col><Col id=\"수정일\">2020-02-11 09:09:01</Col><Col id=\"상위작업장ID\">내층</Col><Col id=\"공장ID\"/><Col id=\"공정명E\">INNER BASE CUT</Col><Col id=\"공정명C\">BASE 裁断</Col><Col id=\"공정명V\">INNER BASE CUT</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">BASE 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">내층</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">2</Col><Col id=\"표준공정ID\">1010401</Col><Col id=\"공정명K\">외층 BASE 재단</Col><Col id=\"작업장E\">Outer Layer BASE Cutting</Col><Col id=\"작업장C\">BASE 裁断</Col><Col id=\"작업장V\">Cắt Base</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">BASE 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">4Step</Col><Col id=\"작업장Type\">인수,작업시작,작업완료,인계</Col><Col id=\"자사구분\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">전태선</Col><Col id=\"수정일\">2020-06-03 14:18:26</Col><Col id=\"상위작업장ID\">외층</Col><Col id=\"공장ID\"/><Col id=\"공정명E\">Outer Layer BASE Cutting</Col><Col id=\"공정명C\">BASE 裁断</Col><Col id=\"공정명V\">Cắt Base</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">BASE 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">외층</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\">N</Col><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"표준공정ID\">1012001</Col><Col id=\"공정명K\">BASE(부자재) 재단</Col><Col id=\"작업장E\">BASE Cutting</Col><Col id=\"작업장C\">BASE(副资材) 裁断</Col><Col id=\"작업장V\">Cắt BASE (Phụ liệu)</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">BASE Cutting</Col><Col id=\"공정명C\">BASE(副资材) 裁断</Col><Col id=\"공정명V\">Cắt BASE (Phụ liệu)</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"표준공정ID\">1012002</Col><Col id=\"공정명K\">C/L 재단</Col><Col id=\"작업장E\">C / L Cutting</Col><Col id=\"작업장C\">C/L 裁断</Col><Col id=\"작업장V\">Cắt C/L</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">소사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">C / L Cutting</Col><Col id=\"공정명C\">C/L 裁断</Col><Col id=\"공정명V\">Cắt C/L</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">5</Col><Col id=\"표준공정ID\">1012003</Col><Col id=\"공정명K\">B/S 재단</Col><Col id=\"작업장E\">B/S Cutting</Col><Col id=\"작업장C\">B/S 裁断</Col><Col id=\"작업장V\">Cắt B/S</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">소사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">B/S Cutting</Col><Col id=\"공정명C\">B/S 裁断</Col><Col id=\"공정명V\">Cắt B/S</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"표준공정ID\">1012004</Col><Col id=\"공정명K\">P/P 재단</Col><Col id=\"작업장E\">P / P Cutting</Col><Col id=\"작업장C\">P/P 裁断</Col><Col id=\"작업장V\">Cắt P/P</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">P / P Cutting</Col><Col id=\"공정명C\">P/P 裁断</Col><Col id=\"공정명V\">Cắt P/P</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"표준공정ID\">1012005</Col><Col id=\"공정명K\">FR-4 재단</Col><Col id=\"작업장E\">FR-4 Cutting</Col><Col id=\"작업장C\">FR-4 裁断</Col><Col id=\"작업장V\">Cắt FR-4</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">FR-4 Cutting</Col><Col id=\"공정명C\">FR-4 裁断</Col><Col id=\"공정명V\">Cắt FR-4</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"표준공정ID\">1012006</Col><Col id=\"공정명K\">EPOXY 재단</Col><Col id=\"작업장E\">EPOXY Cutting</Col><Col id=\"작업장C\">EPOXY 裁断</Col><Col id=\"작업장V\">Cắt EPOXY</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">EPOXY Cutting</Col><Col id=\"공정명C\">EPOXY 裁断</Col><Col id=\"공정명V\">Cắt EPOXY</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">9</Col><Col id=\"표준공정ID\">1012007</Col><Col id=\"공정명K\">EPOXY 재단 합지</Col><Col id=\"작업장E\">EPOXY Cutting Lamination</Col><Col id=\"작업장C\">EPOXY 裁断 合纸</Col><Col id=\"작업장V\">Cắt giấy EPOXY</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">EPOXY Cutting Lamination</Col><Col id=\"공정명C\">EPOXY 裁断 合纸</Col><Col id=\"공정명V\">Cắt giấy EPOXY</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">10</Col><Col id=\"표준공정ID\">1012008</Col><Col id=\"공정명K\">SLITTING(부자재)</Col><Col id=\"작업장E\">SLITTING (sub materials)</Col><Col id=\"작업장C\">SLITTING</Col><Col id=\"작업장V\">SLITTING(Phụ liệu)</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:01</Col><Col id=\"공정명E\">SLITTING (sub materials)</Col><Col id=\"공정명C\">SLITTING</Col><Col id=\"공정명V\">SLITTING(Phụ liệu)</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">11</Col><Col id=\"표준공정ID\">1012009</Col><Col id=\"공정명K\">P/I 재단</Col><Col id=\"작업장E\">P/I 재단</Col><Col id=\"작업장C\">P/I 재단</Col><Col id=\"작업장V\">P/I 재단</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-09 15:56:11</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-03-17 15:21:04</Col><Col id=\"공정명E\">P/I 재단</Col><Col id=\"공정명C\">P/I 재단</Col><Col id=\"공정명V\">P/I 재단</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">12</Col><Col id=\"표준공정ID\">1012010</Col><Col id=\"공정명K\">SUS 재단</Col><Col id=\"작업장E\">SUS 재단</Col><Col id=\"작업장C\">SUS 재단</Col><Col id=\"작업장V\">SUS 재단</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">소사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-09 16:01:58</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정명E\">SUS 재단</Col><Col id=\"공정명C\">SUS 재단</Col><Col id=\"공정명V\">SUS 재단</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">13</Col><Col id=\"표준공정ID\">1012011</Col><Col id=\"공정명K\">AL 재단</Col><Col id=\"작업장E\">AL 재단</Col><Col id=\"작업장C\">AL 재단</Col><Col id=\"작업장V\">AL 재단</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">자사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-04-09 13:54:43</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정명E\">AL 재단</Col><Col id=\"공정명C\">AL 재단</Col><Col id=\"공정명V\">AL 재단</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">14</Col><Col id=\"표준공정ID\">1012012</Col><Col id=\"공정명K\">C/L 재단-1</Col><Col id=\"작업장E\">C / L Cutting-1</Col><Col id=\"작업장C\">C/L 裁断-1</Col><Col id=\"작업장V\">Cắt C/L-1</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">사내외주</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-05-29 09:32:46</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정명E\">C / L Cutting-1</Col><Col id=\"공정명C\">C/L 裁断-1</Col><Col id=\"공정명V\">Cắt C/L-1</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">15</Col><Col id=\"표준공정ID\">1012013</Col><Col id=\"공정명K\">C/L 재단-2</Col><Col id=\"작업장E\">C / L Cutting-2</Col><Col id=\"작업장C\">C/L 裁断-2</Col><Col id=\"작업장V\">Cắt C/L-2</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">사내외주</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-05-29 09:32:46</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정명E\">C / L Cutting-2</Col><Col id=\"공정명C\">C/L 裁断-2</Col><Col id=\"공정명V\">Cắt C/L-2</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">16</Col><Col id=\"표준공정ID\">1012014</Col><Col id=\"공정명K\">EPOXY 재단-1</Col><Col id=\"작업장E\">EPOXY Cutting-1</Col><Col id=\"작업장C\">EPOXY 裁断-1</Col><Col id=\"작업장V\">Cắt EPOXY-1</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\">사내외주</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-05-29 09:58:00</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정명E\">EPOXY Cutting-1</Col><Col id=\"공정명C\">EPOXY 裁断-1</Col><Col id=\"공정명V\">Cắt EPOXY-1</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">17</Col><Col id=\"표준공정ID\">1012015</Col><Col id=\"공정명K\">EPOXY 재단-2</Col><Col id=\"작업장E\">EPOXY Cutting-2</Col><Col id=\"작업장C\">EPOXY 裁断-2</Col><Col id=\"작업장V\">Cắt EPOXY-2</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SUB 재단</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">구분없음</Col><Col id=\"자사구분\"/><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-05-29 09:58:00</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정명E\">EPOXY Cutting-2</Col><Col id=\"공정명C\">EPOXY 裁断-2</Col><Col id=\"공정명V\">Cắt EPOXY-2</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SUB 재단</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">구분없음</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">18</Col><Col id=\"표준공정ID\">1020101</Col><Col id=\"공정명K\">ROLL CUTTING</Col><Col id=\"작업장E\">ROLL CUTTING</Col><Col id=\"작업장C\">ROLL CUTTING</Col><Col id=\"작업장V\">ROLL CUTTING</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">ROLL CUT</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">4Step</Col><Col id=\"작업장Type\">인수,작업시작,작업완료,인계</Col><Col id=\"상위작업장ID\">RTR</Col><Col id=\"자사구분\">소사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:42</Col><Col id=\"공정명E\">ROLL CUTTING</Col><Col id=\"공정명C\">ROLL CUTTING</Col><Col id=\"공정명V\">ROLL CUTTING</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">ROLL CUT</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">RTR</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">19</Col><Col id=\"표준공정ID\">1024101</Col><Col id=\"공정명K\">RTR SLITTING</Col><Col id=\"작업장E\">SLITTING</Col><Col id=\"작업장C\">SLITTING</Col><Col id=\"작업장V\">SLITTING</Col><Col id=\"창고ID\">재단</Col><Col id=\"창고명\">SLITTING</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">4Step</Col><Col id=\"작업장Type\">인수,작업시작,작업완료,인계</Col><Col id=\"상위작업장ID\">RTR</Col><Col id=\"자사구분\">소사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:24:56</Col><Col id=\"공정명E\">SLITTING</Col><Col id=\"공정명C\">SLITTING</Col><Col id=\"공정명V\">SLITTING</Col><Col id=\"대공정\">재단</Col><Col id=\"중공정\">SLITTING</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">4Step</Col><Col id=\"작업단위\">인수,작업시작,작업완료,인계</Col><Col id=\"세부공정\">RTR</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row><Row><Col id=\"No\">20</Col><Col id=\"표준공정ID\">1510101</Col><Col id=\"공정명K\">RTR DRY FILM L/A</Col><Col id=\"작업장E\">RTR DRY FILM L/A</Col><Col id=\"작업장C\">RTR DRY FILM L/A</Col><Col id=\"작업장V\">RTR DRY FILM L/A</Col><Col id=\"창고ID\">회로</Col><Col id=\"창고명\">D/F L/A</Col><Col id=\"거래처ID\">일반</Col><Col id=\"거래처명\">2StepB</Col><Col id=\"작업장Type\">작업시작,작업완료</Col><Col id=\"상위작업장ID\">RTR</Col><Col id=\"자사구분\">소사</Col><Col id=\"공장ID\"/><Col id=\"무상사급여부\">N</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">Manager</Col><Col id=\"생성일\">2019-11-05 00:00:00</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 08:45:13</Col><Col id=\"공정명E\">RTR DRY FILM L/A</Col><Col id=\"공정명C\">RTR DRY FILM L/A</Col><Col id=\"공정명V\">RTR DRY FILM L/A</Col><Col id=\"대공정\">회로</Col><Col id=\"중공정\">D/F L/A</Col><Col id=\"공정유형\">일반</Col><Col id=\"스탭유형\">2StepB</Col><Col id=\"작업단위\">작업시작,작업완료</Col><Col id=\"세부공정\">RTR</Col><Col id=\"치공구작업\"/><Col id=\"수입검사유무\"/><Col id=\"외주사양구분\"/><Col id=\"도금유형\"/><Col id=\"자재\"/><Col id=\"공정SPEC\"/><Col id=\"치공구\"/><Col id=\"원가코드\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00t1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"설비그룹ID\">I31</Col><Col id=\"설비그룹명\">현상/부식</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-07-15 09:44:31</Col><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"공정ID\">1518405</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00t2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"검사정의ID\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법ID\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목ID\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"화면표시여부\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사방법ID\">I31</Col><Col id=\"검사항목ID\">0256</Col><Col id=\"검사항목명\">유효</Col><Col id=\"화면표시여부\">Y</Col><Col id=\"생성일\">2020-07-15 09:44:31</Col><Col id=\"수정자\"/><Col id=\"수정일\">2020-07-15 09:44:31</Col><Col id=\"검사정의ID\">1518405</Col><Col id=\"유효상태\">유효</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("작업장 등록");
            this.tab_00.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"30","45","20","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","56","10","27",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","97",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("작업자 현황");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label02","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","100","146","36",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"80","45","20","91",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","106","10","27",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","100","102","36",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","55","15","97",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"45","15","97","0",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","223","34",null,null,null,null,null,null,this);
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
            obj.set_text("공정등록");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("공장그룹");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdReload","174","6","26","24",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdReload");
            obj.set_tooltiptext("새로고침");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","0","75","200",null,null,"0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_00","0","34","200","42",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_search");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_03","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.div_00.form);
            obj.set_taborder("0");
            this.div_work.form.tab_01.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_01.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","210","0","52","34","696",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00","210","34",null,"27.93%","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정그룹유형\"/><Cell col=\"3\" text=\"공정 그룹 ID\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"공정그룹명(K)\"/><Cell col=\"5\" text=\"공정그룹명(E)\"/><Cell col=\"6\" text=\"공정그룹명(C)\"/><Cell col=\"7\" text=\"공정그룹명(V)\"/><Cell col=\"8\" text=\"상위분류\"/><Cell col=\"9\" text=\"생성자\"/><Cell col=\"10\" text=\"생성일\"/><Cell col=\"11\" text=\"수정자\"/><Cell col=\"12\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:공정그룹유형\"/><Cell col=\"3\" text=\"bind:공정그룹ID\"/><Cell col=\"4\" text=\"bind:공정그룹명K\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:공정그룹명E\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:공정그룹명C\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:공정그룹명V\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:상위분류\"/><Cell col=\"9\" text=\"bind:생성자\"/><Cell col=\"10\" text=\"bind:생성일\"/><Cell col=\"11\" text=\"bind:수정자\"/><Cell col=\"12\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","111",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","85",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","27","24","58",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","210","grd_00:0","66","34","682",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("표준공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("tab_00","210","74.77%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_tabindex("0");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_01.Tabpage1.form.tab_00);
            obj.set_text("설비그룹");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00t1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"설비그룹ID\"/><Cell col=\"4\" text=\"설비그룹명\"/><Cell col=\"5\" text=\"유효상태\"/><Cell col=\"6\" text=\"생성자\"/><Cell col=\"7\" text=\"생성일\"/><Cell col=\"8\" text=\"수정자\"/><Cell col=\"9\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:공정ID\"/><Cell col=\"3\" text=\"bind:설비그룹ID\"/><Cell col=\"4\" text=\"bind:설비그룹명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:유효상태\"/><Cell col=\"6\" text=\"bind:생성자\"/><Cell col=\"7\" text=\"bind:생성일\"/><Cell col=\"8\" text=\"bind:수정자\"/><Cell col=\"9\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","62","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("설비그룹");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","111",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","85",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","27","24","58",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01.Tabpage1.form.tab_00);
            obj.set_text("Spec 항목");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","69","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("Spec 항목");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","26","24","111",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","85",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","27","24","58",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_sub");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00t2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"검사 정의 ID\"/><Cell col=\"3\" text=\"검사 방법 ID\"/><Cell col=\"4\" text=\"검사항목ID\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"검사항목명\"/><Cell col=\"6\" text=\"화면 표시 여부\"/><Cell col=\"7\" text=\"유효상태\"/><Cell col=\"8\" text=\"생성자\"/><Cell col=\"9\" text=\"생성일\"/><Cell col=\"10\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:검사정의ID\"/><Cell col=\"3\" text=\"bind:검사방법ID\"/><Cell col=\"4\" text=\"bind:검사항목ID\"/><Cell col=\"5\" text=\"bind:검사항목명\"/><Cell col=\"6\" text=\"bind:화면표시여부\"/><Cell col=\"7\" text=\"bind:유효상태\"/><Cell col=\"8\" text=\"bind:생성자\"/><Cell col=\"9\" text=\"bind:생성일\"/><Cell col=\"10\" text=\"bind:수정자\"/><Cell col=\"11\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01","210","grd_00:34",null,null,"0","tab_00:10",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00_2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정그룹ID\"/><Cell col=\"3\" text=\"표준공정ID\"/><Cell col=\"4\" text=\"공정명(K)\"/><Cell col=\"5\" text=\"공정명(E)\"/><Cell col=\"6\" text=\"공정명(C)\"/><Cell col=\"7\" text=\"공정명(V)\"/><Cell col=\"8\" text=\"공정유형\"/><Cell col=\"9\" text=\"스탭유형\"/><Cell col=\"10\" text=\"작업단위\"/><Cell col=\"11\" text=\"세부 공정\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"외주사양 구분\"/><Cell col=\"13\" text=\"도금 유형\"/><Cell col=\"14\" text=\"자재\"/><Cell col=\"15\" text=\"공정SPEC\"/><Cell col=\"16\" text=\"치공구\"/><Cell col=\"17\" text=\"원가코드\"/><Cell col=\"18\" text=\"SITE 전용공정\"/><Cell col=\"19\" text=\"유효상태\"/><Cell col=\"20\" text=\"생성자\"/><Cell col=\"21\" text=\"생성일\"/><Cell col=\"22\" text=\"수정자\"/><Cell col=\"23\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:공정그룹ID\"/><Cell col=\"3\" text=\"bind:표준공정ID\"/><Cell col=\"4\" text=\"bind:공정명K\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:공정명E\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:공정명C\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:공정명V\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:공정유형\"/><Cell col=\"9\" text=\"bind:스탭유형\"/><Cell col=\"10\" text=\"bind:작업단위\"/><Cell col=\"11\" text=\"bind:세부공정\"/><Cell col=\"12\" text=\"bind:외주사양구분\"/><Cell col=\"13\" text=\"bind:도금유형\"/><Cell col=\"14\" text=\"bind:자재\"/><Cell col=\"15\" text=\"bind:공정SPEC\"/><Cell col=\"16\" text=\"bind:치공구\"/><Cell col=\"17\" text=\"bind:원가코드\"/><Cell col=\"18\" text=\"bind:SITE전용공정\"/><Cell col=\"19\" text=\"bind:유효상태\"/><Cell col=\"20\" text=\"bind:생성자\"/><Cell col=\"21\" text=\"bind:생성일\"/><Cell col=\"22\" text=\"bind:수정자\"/><Cell col=\"23\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd00",null,"grd_00:6","26","24","111",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDel00",null,"grd_00:6","26","24","85",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy00",null,"grd_00:6","27","24","58",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDown00",null,"grd_00:6","29","24","29",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdUp00",null,"grd_00:6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("공정현황");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("표준공정 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"표준공정 ID\"/><Cell col=\"2\" text=\"공정명(K)\"/><Cell col=\"3\" text=\"공정명(E)\"/><Cell col=\"4\" text=\"공정명(C)\"/><Cell col=\"5\" text=\"공정명(V)\"/><Cell col=\"6\" text=\"대공정\"/><Cell col=\"7\" text=\"중공정\"/><Cell col=\"8\" text=\"공정유형\"/><Cell col=\"9\" text=\"스탭유형\"/><Cell col=\"10\" text=\"작업단위\"/><Cell col=\"11\" text=\"세부 공정\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"치공구 작업\"/><Cell col=\"13\" text=\"수입검사유무\"/><Cell col=\"14\" text=\"외주사양 구분\"/><Cell col=\"15\" text=\"도금 유형\"/><Cell col=\"16\" text=\"자재\"/><Cell col=\"17\" text=\"공정SPEC\"/><Cell col=\"18\" text=\"치공구\"/><Cell col=\"19\" text=\"원가코드\"/><Cell col=\"20\" text=\"유효상태\"/><Cell col=\"21\" text=\"생성자\"/><Cell col=\"22\" text=\"생성일\"/><Cell col=\"23\" text=\"수정자\"/><Cell col=\"24\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:표준공정ID\"/><Cell col=\"2\" text=\"bind:공정명K\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:공정명E\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:공정명C\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:공정명V\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:대공정\"/><Cell col=\"7\" text=\"bind:중공정\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:공정유형\"/><Cell col=\"9\" text=\"bind:스탭유형\"/><Cell col=\"10\" text=\"bind:작업단위\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:세부공정\"/><Cell col=\"12\" text=\"bind:치공구작업\"/><Cell col=\"13\" text=\"bind:수입검사유무\"/><Cell col=\"14\" text=\"bind:외주사양구분\"/><Cell col=\"15\" text=\"bind:도금유형\"/><Cell col=\"16\" text=\"bind:자재\"/><Cell col=\"17\" text=\"bind:공정SPEC\"/><Cell col=\"18\" text=\"bind:치공구\"/><Cell col=\"19\" text=\"bind:원가코드\"/><Cell col=\"20\" text=\"bind:유효상태\"/><Cell col=\"21\" text=\"bind:생성자\"/><Cell col=\"22\" text=\"bind:생성일\"/><Cell col=\"23\" text=\"bind:수정자\"/><Cell col=\"24\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

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

            obj = new Static("sta_title","30","16","59","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("SETUP");
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
        this.loadIncludeScript("template32.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
