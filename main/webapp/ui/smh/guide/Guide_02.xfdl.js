(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_02");
            this.set_titletext("Grid");
            this.getSetter("classname").set("Guide01");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,4576);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"INT\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"progress\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"success\" type=\"STRING\" size=\"256\"/><Column id=\"attachment\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">가나다</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"progress\">완료</Col><Col id=\"icon\">1</Col><Col id=\"success\">1</Col><Col id=\"attachment\">1</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">1234</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"progress\">완료</Col><Col id=\"icon\">1</Col><Col id=\"success\">0</Col><Col id=\"attachment\">2</Col></Row><Row><Col id=\"Column0\">가나다라마</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">12345</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"progress\">실패</Col><Col id=\"icon\">1</Col><Col id=\"success\">1</Col><Col id=\"attachment\">5</Col></Row><Row><Col id=\"Column0\">가나다라마바</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">123456</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"progress\">대기</Col><Col id=\"icon\">0</Col><Col id=\"success\">0</Col><Col id=\"attachment\">12</Col></Row><Row><Col id=\"Column0\">가나다라마바사</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">1234567</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"progress\">대기</Col><Col id=\"icon\">0</Col><Col id=\"success\">0</Col></Row><Row><Col id=\"Column0\">가나다라마바사아</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"progress\">대기</Col><Col id=\"icon\">0</Col><Col id=\"success\">0</Col><Col id=\"attachment\">6</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">123456789</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"success\">0</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자차</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">1234567890</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"success\">0</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자차카</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">123456789</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"success\">0</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자차카타</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"success\">0</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자차카타파</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">1234567</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"success\">0</Col></Row><Row><Col id=\"Column0\">가나다라마바사아자차카타파하</Col><Col id=\"Column1\">홍길동</Col><Col id=\"Column2\">123456</Col><Col id=\"Column3\">http://www.tobesoft.com</Col><Col id=\"success\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다</Col><Col id=\"Column2\">123</Col><Col id=\"Column3\">가나다</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">0</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라</Col><Col id=\"Column2\">1234</Col><Col id=\"Column3\">가나다라</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라마</Col><Col id=\"Column2\">12345</Col><Col id=\"Column3\">가나다라마</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바</Col><Col id=\"Column2\">123456</Col><Col id=\"Column3\">가나다라마바</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라마바사</Col><Col id=\"Column2\">1234567</Col><Col id=\"Column3\">가나다라마바사</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">4</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바사아</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">가나다라마바사아</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">5</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라마바사아자</Col><Col id=\"Column2\">123456789</Col><Col id=\"Column3\">가나다라마바사아자</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">0</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바사아자차</Col><Col id=\"Column2\">1234567890</Col><Col id=\"Column3\">가나다라마바사아자차</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">1</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라마바사아자차카</Col><Col id=\"Column2\">123456789</Col><Col id=\"Column3\">가나다라마바사아자차카</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">2</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바사아자차카타</Col><Col id=\"Column2\">12345678</Col><Col id=\"Column3\">가나다라마바사아자차카타</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">3</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">가나다라마바사아자차카타파</Col><Col id=\"Column2\">1234567</Col><Col id=\"Column3\">가나다라마바사아자차카타파</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">4</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">가나다라마바사아자차카타파하</Col><Col id=\"Column2\">123456</Col><Col id=\"Column3\">가나다라마바사아자차카타파하</Col><Col id=\"Column7\">Button</Col><Col id=\"Column6\">Expand</Col><Col id=\"Column5\">20200326</Col><Col id=\"Column4\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_cb", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">Edit</Col></Row><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">MaskEdit</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">TextArea</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">Combo</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">ListBox</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">CheckBox</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"Edit\" type=\"STRING\" size=\"256\"/><Column id=\"MaskEdit\" type=\"STRING\" size=\"256\"/><Column id=\"TextArea\" type=\"STRING\" size=\"256\"/><Column id=\"Combo\" type=\"STRING\" size=\"256\"/><Column id=\"Calendar\" type=\"STRING\" size=\"256\"/><Column id=\"Button\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"chk\">1</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"Edit\">가나다</Col><Col id=\"MaskEdit\">12345</Col><Col id=\"TextArea\">가나다</Col><Col id=\"Combo\">가나다</Col><Col id=\"Calendar\">20210118</Col><Col id=\"Button\">가나다</Col><Col id=\"No\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menu", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리</Col><Col id=\"Caption\">인사관리</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1000</Col></Row><Row><Col id=\"UserData\">인사마스터생성</Col><Col id=\"Caption\">인사마스터생성</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1001</Col></Row><Row><Col id=\"UserData\">인적사항</Col><Col id=\"Caption\">인적사항</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+K</Col><Col id=\"idx\">1002</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1003</Col></Row><Row><Col id=\"UserData\">개인사진등록 관리(승인 )</Col><Col id=\"Caption\">개인사진등록 관리(승인 )</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1004</Col></Row><Row><Col id=\"UserData\">보훈자 관리</Col><Col id=\"Caption\">보훈자 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1005</Col></Row><Row><Col id=\"UserData\">징계 관리</Col><Col id=\"Caption\">징계 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1006</Col></Row><Row><Col id=\"UserData\">포상 등록 신청</Col><Col id=\"Caption\">포상 등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1007</Col></Row><Row><Col id=\"UserData\">포상 관리(승인 )</Col><Col id=\"Caption\">포상 관리(승인 )</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1008</Col></Row><Row><Col id=\"UserData\">신원보증관리</Col><Col id=\"Caption\">신원보증관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1009</Col></Row><Row><Col id=\"UserData\">증명서 관리</Col><Col id=\"Caption\">증명서 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1010</Col></Row><Row><Col id=\"UserData\">개인정보(특이사항) 관리</Col><Col id=\"Caption\">개인정보(특이사항) 관리</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1011</Col></Row><Row><Col id=\"UserData\">인원현황</Col><Col id=\"Caption\">인원현황</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1012</Col></Row><Row><Col id=\"UserData\">인원현황 보고서</Col><Col id=\"Caption\">인원현황 보고서</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1013</Col></Row><Row><Col id=\"UserData\">재고용대상자</Col><Col id=\"Caption\">재고용대상자</Col><Col id=\"lev\">2</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1014</Col></Row><Row><Col id=\"UserData\">연령별인원현황</Col><Col id=\"Caption\">연령별인원현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1015</Col></Row><Row><Col id=\"UserData\">인사기록카드 출력</Col><Col id=\"Caption\">인사기록카드 출력</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1016</Col></Row><Row><Col id=\"UserData\">기념일 조회</Col><Col id=\"Caption\">기념일 조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1017</Col></Row><Row><Col id=\"lev\">0</Col><Col id=\"UserData\">인사관리(개인)</Col><Col id=\"Caption\">인사관리(개인)</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1100</Col></Row><Row><Col id=\"UserData\">인적사항(개인)</Col><Col id=\"Caption\">인적사항(개인)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1101</Col></Row><Row><Col id=\"UserData\">증명서인쇄</Col><Col id=\"Caption\">증명서인쇄</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1102</Col></Row><Row><Col id=\"UserData\">재고용신청서</Col><Col id=\"Caption\">재고용신청서</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1103</Col></Row><Row><Col id=\"UserData\">조직 및 사원조회</Col><Col id=\"Caption\">조직 및 사원조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1104</Col></Row><Row><Col id=\"UserData\">개인사진등록 신청</Col><Col id=\"Caption\">개인사진등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">0</Col><Col id=\"idx\">1105</Col></Row><Row><Col id=\"UserData\">포상 등록 신청</Col><Col id=\"Caption\">포상 등록 신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1106</Col></Row><Row><Col id=\"UserData\">인사정보조회</Col><Col id=\"Caption\">인사정보조회</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1200</Col></Row><Row><Col id=\"UserData\">인적사항(인사위)</Col><Col id=\"Caption\">인적사항(인사위)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1201</Col></Row><Row><Col id=\"UserData\">발령관리</Col><Col id=\"Caption\">발령관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1300</Col></Row><Row><Col id=\"UserData\">발령코드관리</Col><Col id=\"Caption\">발령코드관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1301</Col></Row><Row><Col id=\"UserData\">일괄발령 관리</Col><Col id=\"Caption\">일괄발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1302</Col></Row><Row><Col id=\"UserData\">연례호봉발령 관리</Col><Col id=\"Caption\">연례호봉발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1303</Col></Row><Row><Col id=\"UserData\">승진발령 관리</Col><Col id=\"Caption\">승진발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1304</Col></Row><Row><Col id=\"UserData\">승진자 DM주소 출력</Col><Col id=\"Caption\">승진자 DM주소 출력</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"hotkey\">Alt+O</Col><Col id=\"idx\">1305</Col></Row><Row><Col id=\"UserData\">특별호봉승급 관리</Col><Col id=\"Caption\">특별호봉승급 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1306</Col></Row><Row><Col id=\"UserData\">재계약 대상자 관리</Col><Col id=\"Caption\">재계약 대상자 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1307</Col></Row><Row><Col id=\"UserData\">발령 추천서 작성</Col><Col id=\"Caption\">발령 추천서 작성</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1308</Col></Row><Row><Col id=\"UserData\">발령 추천자 지정</Col><Col id=\"Caption\">발령 추천자 지정</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1309</Col></Row><Row><Col id=\"UserData\">발령 추천서 승인</Col><Col id=\"Caption\">발령 추천서 승인</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1310</Col></Row><Row><Col id=\"UserData\">재고용추천</Col><Col id=\"Caption\">재고용추천</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1311</Col></Row><Row><Col id=\"UserData\">개별발령 관리</Col><Col id=\"Caption\">개별발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1312</Col></Row><Row><Col id=\"UserData\">자매사 발령 관리</Col><Col id=\"Caption\">자매사 발령 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1313</Col></Row><Row><Col id=\"UserData\">발령조회(전사원)</Col><Col id=\"Caption\">발령조회(전사원)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1314</Col></Row><Row><Col id=\"UserData\">사외파견</Col><Col id=\"Caption\">사외파견</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1400</Col></Row><Row><Col id=\"UserData\">사외파견 인력관리</Col><Col id=\"Caption\">사외파견 인력관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1401</Col></Row><Row><Col id=\"UserData\">노조관리</Col><Col id=\"Caption\">노조관리</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1500</Col></Row><Row><Col id=\"UserData\">인적사항(노조)</Col><Col id=\"Caption\">인적사항(노조)</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1501</Col></Row><Row><Col id=\"UserData\">노조원 관리</Col><Col id=\"Caption\">노조원 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1502</Col></Row><Row><Col id=\"UserData\">노조원직책 관리</Col><Col id=\"Caption\">노조원직책 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1503</Col></Row><Row><Col id=\"UserData\">노조비공제 현황</Col><Col id=\"Caption\">노조비공제 현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1504</Col></Row><Row><Col id=\"UserData\">노조원 현황</Col><Col id=\"Caption\">노조원 현황</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1505</Col></Row><Row><Col id=\"UserData\">사내공모</Col><Col id=\"Caption\">사내공모</Col><Col id=\"lev\">0</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1600</Col></Row><Row><Col id=\"UserData\">사내공모 공고 관리</Col><Col id=\"Caption\">사내공모 공고 관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1601</Col></Row><Row><Col id=\"UserData\">사내공모  신청</Col><Col id=\"Caption\">사내공모  신청</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1602</Col></Row><Row><Col id=\"UserData\">사내공모  관리</Col><Col id=\"Caption\">사내공모  관리</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1603</Col></Row><Row><Col id=\"UserData\">사내공모 이력 조회</Col><Col id=\"Caption\">사내공모 이력 조회</Col><Col id=\"lev\">1</Col><Col id=\"enable\">1</Col><Col id=\"idx\">1604</Col></Row><Row><Col id=\"UserData\">통계정보</Col><Col id=\"Caption\">통계정보</Col><Col id=\"lev\">0</Col><Col id=\"idx\">1700</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("GridSample2", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"유형\" type=\"STRING\" size=\"256\"/><Column id=\"크기\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Check\">1</Col><Col id=\"파일명\">Zip</Col><Col id=\"유형\">url(&apos;theme://images/icon_zip.png&apos;)</Col><Col id=\"크기\">579KB</Col></Row><Row><Col id=\"Check\">2</Col><Col id=\"파일명\">Excel</Col><Col id=\"유형\">url(&apos;theme://images/icon_xlsx.png&apos;)</Col><Col id=\"크기\">579KB</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_ppt.png&apos;)</Col><Col id=\"파일명\">PPT</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">3</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_png.png&apos;)</Col><Col id=\"파일명\">png</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">4</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_pdf.png&apos;)</Col><Col id=\"파일명\">pdf</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">5</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_mp3.png&apos;)</Col><Col id=\"파일명\">mp3</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">6</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_jpg.png&apos;)</Col><Col id=\"파일명\">jpg</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">7</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_hwp.png&apos;)</Col><Col id=\"파일명\">hwp</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">8</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_gif.png&apos;)</Col><Col id=\"파일명\">gif</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">9</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_docx.png&apos;)</Col><Col id=\"파일명\">doc</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">10</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_disk.png&apos;)</Col><Col id=\"파일명\">disk</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">11</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_bmp.png&apos;)</Col><Col id=\"파일명\">bmp</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">12</Col></Row><Row><Col id=\"유형\">url(&apos;theme://images/icon_avi.png&apos;)</Col><Col id=\"파일명\">avi</Col><Col id=\"크기\">579KB</Col><Col id=\"Check\">13</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_download", this);
            obj._setContents("<ColumnInfo><Column id=\"Check\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"유형\" type=\"STRING\" size=\"256\"/><Column id=\"크기\" type=\"STRING\" size=\"256\"/><Column id=\"progress\" type=\"STRING\" size=\"256\"/><Column id=\"bg\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Check\">0</Col><Col id=\"파일명\">TEST FILE1.doc</Col><Col id=\"유형\">url(&apos;theme://images/icon_docx.png&apos;)</Col><Col id=\"크기\">579KB</Col><Col id=\"progress\">대기</Col><Col id=\"bg\">blue</Col></Row><Row><Col id=\"Check\">0</Col><Col id=\"파일명\">TEST FILE1.doc</Col><Col id=\"유형\">url(&apos;theme://images/icon_docx.png&apos;)</Col><Col id=\"크기\">579KB</Col><Col id=\"progress\">대기</Col><Col id=\"bg\">gray</Col></Row><Row><Col id=\"파일명\">TEST FILE1.doc</Col><Col id=\"유형\">url(&apos;theme://images/icon_docx.png&apos;)</Col><Col id=\"크기\">579KB</Col><Col id=\"progress\">완료</Col><Col id=\"bg\">green</Col><Col id=\"Check\">1</Col></Row><Row><Col id=\"파일명\">TEST FILE1.doc</Col><Col id=\"유형\">url(&apos;theme://images/icon_docx.png&apos;)</Col><Col id=\"크기\">579KB</Col><Col id=\"progress\">실패</Col><Col id=\"bg\">red</Col><Col id=\"Check\">1</Col></Row><Row><Col id=\"bg\">yellow</Col><Col id=\"progress\">실패</Col><Col id=\"크기\">579KB</Col><Col id=\"파일명\">TEST FILE1.doc</Col><Col id=\"유형\">url(&apos;theme://images/icon_docx.png&apos;)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd03", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"권역\" type=\"STRING\" size=\"256\"/><Column id=\"지역명\" type=\"STRING\" size=\"256\"/><Column id=\"인구\" type=\"INT\" size=\"256\"/><Column id=\"가구\" type=\"INT\" size=\"256\"/><Column id=\"세대당인구수\" type=\"INT\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\">1</Col><Col id=\"인구\">123456</Col><Col id=\"가구\">3567</Col><Col id=\"세대당인구수\">3</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"인구\">23453</Col><Col id=\"가구\">4444</Col><Col id=\"세대당인구수\">4</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"인구\">23423</Col><Col id=\"가구\">5555</Col><Col id=\"세대당인구수\">3</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"인구\">432546</Col><Col id=\"가구\">6666</Col><Col id=\"세대당인구수\">2</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"인구\">64343</Col><Col id=\"가구\">262</Col><Col id=\"세대당인구수\">2</Col></Row><Row><Col id=\"chk\">0</Col><Col id=\"인구\">32435</Col><Col id=\"가구\">1800</Col><Col id=\"세대당인구수\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd04", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"항목\" type=\"STRING\" size=\"256\"/><Column id=\"소속\" type=\"STRING\" size=\"256\"/><Column id=\"직책\" type=\"STRING\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"배정\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\"/><Col id=\"항목\">상품관리(농산물)</Col><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">black</Col><Col id=\"배정\">선택</Col></Row><Row><Col id=\"chk\"/><Col id=\"항목\">상품관리(농산물)</Col><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">blue</Col><Col id=\"배정\">선택</Col></Row><Row><Col id=\"chk\"/><Col id=\"항목\">상품관리(농산물)</Col><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">brown</Col><Col id=\"배정\">선택</Col></Row><Row><Col id=\"chk\"/><Col id=\"항목\">CS</Col><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">gray</Col><Col id=\"배정\">선택</Col></Row><Row><Col id=\"chk\"/><Col id=\"항목\">CRM</Col><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">gray2</Col><Col id=\"배정\">선택</Col></Row><Row><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">green</Col><Col id=\"항목\">POG</Col></Row><Row><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">orange</Col><Col id=\"항목\">경영분석</Col></Row><Row><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">bold</Col><Col id=\"항목\">매장환경개선(레이아웃)</Col></Row><Row><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\">red</Col><Col id=\"항목\">기타</Col></Row><Row><Col id=\"소속\">종합지원센터</Col><Col id=\"직책\">차장</Col><Col id=\"color\"/><Col id=\"항목\">기타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbBg", this);
            obj._setContents("<ColumnInfo><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"bg\" type=\"STRING\" size=\"256\"/><Column id=\"colorcode\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"color\">blue</Col><Col id=\"bg\">URL(&apos;theme://images/cell_bg_blue.png&apos;)</Col><Col id=\"colorcode\">#4891dc</Col></Row><Row><Col id=\"color\">gray</Col><Col id=\"bg\">URL(&apos;theme://images/cell_bg_gray.png&apos;)</Col><Col id=\"colorcode\">#cccccc</Col></Row><Row><Col id=\"color\">green</Col><Col id=\"bg\">URL(&apos;theme://images/cell_bg_green.png&apos;)</Col><Col id=\"colorcode\">#63be6a</Col></Row><Row><Col id=\"color\">red</Col><Col id=\"bg\">URL(&apos;theme://images/cell_bg_red.png&apos;)</Col><Col id=\"colorcode\">#fa4b4b</Col></Row><Row><Col id=\"color\">yellow</Col><Col id=\"bg\">URL(&apos;theme://images/cell_bg_yellow.png&apos;)</Col><Col id=\"colorcode\">#ffcb00</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdHead", this);
            obj._setContents("<ColumnInfo><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"icon_D\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"userdata\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">0001</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon1_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon1_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Sort Ascending</Col><Col id=\"userdata\">Sort Ascending</Col></Row><Row><Col id=\"id\">0002</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon2_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon2_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Sort Descending</Col><Col id=\"userdata\">Sort Descending</Col></Row><Row><Col id=\"id\">0003</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Clear Sorting</Col><Col id=\"userdata\">Clear Sorting</Col></Row><Row><Col id=\"id\">0004</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col><Col id=\"caption\">Clear All Sorting</Col><Col id=\"userdata\">Clear All Sorting</Col></Row><Row><Col id=\"id\">0005</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon5_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon5_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Group By This Column</Col><Col id=\"userdata\">Group By This Column</Col></Row><Row><Col id=\"id\">0006</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon6_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon6_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col><Col id=\"caption\">Show Group By Box</Col><Col id=\"userdata\">Show Group By Box</Col></Row><Row><Col id=\"id\">0007</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Hide This Column</Col><Col id=\"userdata\">Hide This Column</Col></Row><Row><Col id=\"id\">0008</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon8_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon8_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Column/Band Chooser</Col><Col id=\"userdata\">Column/Band Chooser</Col></Row><Row><Col id=\"id\">0009</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon9_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon9_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Best Fit</Col><Col id=\"userdata\">Best Fit</Col></Row><Row><Col id=\"id\">0010</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col><Col id=\"caption\">Best Fit(All Columns)</Col><Col id=\"userdata\">Best Fit(All Columns)</Col></Row><Row><Col id=\"id\">0011</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon11_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon11_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Filter Editor...</Col><Col id=\"userdata\">Filter Editor...</Col></Row><Row><Col id=\"id\">0012</Col><Col id=\"enable\">0</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Find Panel</Col><Col id=\"userdata\">Show Find Panel</Col></Row><Row><Col id=\"id\">0013</Col><Col id=\"enable\">0</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Auto Filter Row</Col><Col id=\"userdata\">Show Auto Filter Row</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBody", this);
            obj._setContents("<ColumnInfo><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"icon_D\" type=\"STRING\" size=\"256\"/><Column id=\"menu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu\">전체 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon1_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">행 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon2_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon2_D.png&apos;)</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">열 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon3_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon3_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"menu\">전체 행 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon4_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon4_D.png&apos;)</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">행 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon5_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon5_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"menu\">행 추가</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon6_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon6_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\"/></Row><Row><Col id=\"menu\">행 복사</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon7_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon7_D.png&apos;)</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">행 삭제</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon8_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon8_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"menu\">복사</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon9_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon9_D.png&apos;)</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">복사-열제목 포함</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon10_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon10_D.png&apos;)</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">붙여넣기</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon11_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon11_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"menu\">열 고정</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon12_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon12_D.png&apos;)</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"menu\">열 고정 취소</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon13_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon13_D.png&apos;)</Col><Col id=\"enable\">0</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"menu\">엑셀 가져오기</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon14_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon14_D.png&apos;)</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"menu\">엑셀 내보내기</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon15_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon15_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"menu\">품목사양정보</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">Routing</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">품목조회</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">Routing 자원/치공구/외주단가 등록</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">공정 Spec 등록</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">Routing Roll Loss</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row><Row><Col id=\"menu\">Routing Window Time</Col><Col id=\"icon\"/><Col id=\"enable\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSample00", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">1200</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid01_01","70","503","730","199",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_nodatatext("데이타가 없습니다.");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Edit\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"MaskEdit\"/><Cell col=\"4\" text=\"TextArea\"/><Cell col=\"5\" text=\"Combo\"/><Cell col=\"6\" text=\"Calendar\"/><Cell col=\"7\" text=\"Button\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:Edit\" displaytype=\"editcontrol\" edittype=\"text\" cssclass=\"point\"/><Cell col=\"3\" text=\"bind:MaskEdit\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"4\" text=\"bind:TextArea\" displaytype=\"textareacontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:Combo\" edittype=\"combo\" displaytype=\"combocontrol\"/><Cell col=\"6\" text=\"bind:Calendar\" edittype=\"date\" displaytype=\"calendarcontrol\"/><Cell col=\"7\" text=\"bind:Button\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","51",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","70","125","730","147",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_summarytype("top");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_head_icon11_N.png&apos;)\" expandsize=\"24\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Number\"/><Cell col=\"3\" cssclass=\"cell_end\" text=\"LinkText\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column2\" cssclass=\"cell_number\" edittype=\"normal\"/><Cell col=\"3\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\" text=\"bind:Column3\"/></Band><Band id=\"summary\" cssclass=\"top\"><Cell text=\"소계\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell row=\"1\" text=\"합계\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" text=\"expr:ds_grd00.getSum(&apos;Column2&apos;)\"/><Cell row=\"1\" col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","70","1411","373","145",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"비정형 Data\"/><Cell col=\"1\" text=\"정형 Data\"/><Cell col=\"2\" text=\"Number Data\"/><Cell col=\"3\" cssclass=\"cell_end\" text=\"Link Data\"/></Band><Band id=\"body\" style=\"border: ;\"><Cell style=\"align:left;\" text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column2\" cssclass=\"cell_number\" expandshow=\"show\" expandchar=\"원\" expandsize=\"28\"/><Cell col=\"3\" displaytype=\"normal\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","70","96","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Default");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","70","1855","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("cssClass : grd_sub");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","70","1883","914","171",null,null,null,null,null,null,this);
            obj.set_cssclass("grd_sub");
            obj.set_taborder("6");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"106\"/><Column size=\"171\"/><Column size=\"28\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"비정형 Data\"/><Cell col=\"1\" text=\"정형 Data\"/><Cell col=\"2\" colspan=\"2\" text=\"Number Data\"/><Cell col=\"4\" cssclass=\"cell_end\" text=\"Link Data\"/></Band><Band id=\"body\" style=\"border: ;\"><Cell style=\"align:left;\" text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column2\" cssclass=\"cell_number,cell_lineX\" edittype=\"mask\"/><Cell col=\"3\" cssclass=\"cell_unit\" text=\"원\"/><Cell col=\"4\" displaytype=\"normal\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&apos;Column2&apos;)\" displaytype=\"number\"/><Cell col=\"3\" cssclass=\"cell_unit\" text=\"원\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","70","317","730","166",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.getSetter("sum").set("Column2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Column Name&#13;&#10;2 Line\"/><Cell col=\"3\" cssclass=\"cell_end\" text=\"LinkText\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column2\" cssclass=\"cell_number\"/><Cell col=\"3\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:ds_grd00.getSum(&apos;Column2&apos;)\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","70","288","231","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Default (Head 2줄 height 30px)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","867","126","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Head height");
            obj.set_cssclass("sta_font_gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","867","198","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Body 1개 Row height");
            obj.set_cssclass("sta_font_gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","867","248","148","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Summary height");
            obj.set_cssclass("sta_font_gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","868","318","164","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Head height 30px(24px + 6px)");
            obj.set_cssclass("sta_font_gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","419","94","386","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("* Grid의 Head 마지막 셀의 cssclass는 \"<b v=\"true\">cell_end</b>\"을 적용합니다.");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","70","2163","730","337",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("GridSample2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"417\"/><Column size=\"60\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"유형\"/><Cell col=\"3\" style=\"line:0 none #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff;\" text=\"크기\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" cssclass=\"cell_linkTxt\" text=\"bind:파일명\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"imagecontrol\" text=\"bind:유형\" cssclass=\"cell_img\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:크기\" cssclass=\"cell_gray,cell_end\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06","70","2592","849","192",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_download");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.getSetter("scrollbars").set("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"228\"/><Column size=\"79\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"119\"/><Column size=\"102\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"파일명\" cssclass=\"cell_bg_white\"/><Cell col=\"2\" text=\"유형\" cssclass=\"cell_bg_blue\"/><Cell col=\"3\" style=\"line: ;\" text=\"크기\" cssclass=\"cell_bg_gray\"/><Cell col=\"4\" style=\"line:0 none #808080ff,0 none #808080ff,1 solid #ddddddff,0 none #808080ff;\" text=\"진행상태\" cssclass=\"cell_bg_green\"/><Cell col=\"5\" text=\"bg\" cssclass=\"cell_bg_red\"/><Cell col=\"6\" text=\"Combo\" cssclass=\"cell_end,cell_bg_yellow\"/><Cell col=\"7\" cssclass=\"cell_bg_midnightBlue\" text=\"컬럼명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:Check\"/><Cell col=\"1\" cssclass=\"cell_linkTxt,cell_bg_white\" text=\"bind:파일명\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"imagecontrol\" text=\"bind:유형\" cssclass=\"cell_img\"/><Cell col=\"3\" displaytype=\"text\" text=\"bind:크기\" cssclass=\"cell_txtGray\"/><Cell col=\"4\" style=\"background:center middle;background2:center middle;selectbackground:center middle;backgroundimage:EXPR(progress==&apos;완료&apos;?&apos;img::img_grd_complete.png&apos;:progress==&apos;실패&apos;?&apos;img::img_grd_error.png&apos;:&apos;&apos;);\" text=\"bind:progress\" cssclass=\"expr:progress==&quot;완료&quot;?&apos;cell_txtGray&apos;:progress==&quot;실패&quot;?&apos;cell_txtRed&apos;:progress==&quot;대기&quot;?&apos;cell_txtBlue&apos;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:bg\" cssclass=\"expr:bg==&quot;blue&quot;?&apos;cell_bg_blue&apos;:bg==&quot;gray&quot;?&apos;cell_bg_gray&apos;:bg==&quot;green&quot;?&apos;cell_bg_green&apos;:bg==&quot;red&quot;?&apos;cell_bg_red&apos;:bg==&quot;yellow&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:bg\" displaytype=\"combocontrol\" edittype=\"combo\" cssclass=\"cell_end\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","165","516","20","11",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid07","70","767","731","147",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_grd03");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"chk\"/><Cell col=\"1\" text=\"권역\"/><Cell col=\"2\" text=\"지역명\"/><Cell col=\"3\" text=\"인구\"/><Cell col=\"4\" colspan=\"2\" text=\"가구\"/><Cell col=\"6\" text=\"세대당인구수\"/><Cell col=\"7\" cssclass=\"cell_end\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" cssclass=\"bodyEssential\" text=\"bind:권역\" combodisplay=\"display\"/><Cell col=\"2\" edittype=\"text\" cssclass=\"bodyEssential\" text=\"bind:지역명\" editdisplay=\"display\"/><Cell col=\"3\" displaytype=\"number\" edittype=\"masknumber\" style=\"align: ;\" cssclass=\"cell_number\" text=\"bind:인구\" editdisplay=\"display\" expandshow=\"show\" expandchar=\"명\" expandsize=\"24\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" style=\"align:right middle;\" cssclass=\"cell_number,cell_end\" text=\"bind:가구\" editdisplay=\"display\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 0;\" cssclass=\"cell_unit\" text=\"세대\"/><Cell col=\"6\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:세대당인구수\"/><Cell col=\"7\" edittype=\"text\" cssclass=\"cell_end\" text=\"bind:비고\" editdisplay=\"display\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:ds_grd03.getSum(&apos;인구&apos;)\"/><Cell col=\"4\" displaytype=\"number\" style=\"align:right middle;\" text=\"expr:ds_grd03.getSum(&apos;가구&apos;)\"/><Cell col=\"5\" style=\"align:left middle;padding:0 0 0 0;\" cssclass=\"cell_unit\" text=\"세대\"/><Cell col=\"6\"/><Cell col=\"7\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","178","816","20","11",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","288","816","20","11",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","378","816","20","11",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","707","816","20","11",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid08","70","2837","718","145",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.getSetter("scrollbars").set("none");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_fillareatype("datarow");
            obj.set_cssclass("grd_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"264\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"255\"/></Columns><Rows><Row size=\"27\" band=\"head\"/><Row size=\"49\"/><Row size=\"68\"/></Rows><Band id=\"head\"><Cell text=\"전환형\"/><Cell col=\"1\" colspan=\"2\" text=\"단독형\"/><Cell col=\"3\" style=\"line: ;\" text=\"복합형\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"차세대 도시형&#13;&#10;판매농협 점포모델\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"지역 상권특성 및 매장규모에 따라 다양한 모델 개발\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"매장규모, 입지상권 등에 따른 운영모델\" cssclass=\"cell_end\" wordWrap=\"char\" textAlign=\"left\"/><Cell row=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"- 1층 판매장, 2층 금융점포&#13;&#10;- 금융점포내 판매장 운용\" wordWrap=\"char\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"- 편의점형&#13;&#10;- sm형\" wordWrap=\"char\" textAlign=\"left\"/><Cell row=\"1\" col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"- SSM형&#13;&#10;- 할인점형\" wordWrap=\"char\" textAlign=\"left\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" edittype=\"normal\" style=\"align:left middle;\" text=\"- 마트 + 한우프라자&#13;&#10;- 마트 + 식자재&#13;&#10;- 신용 + 마트 등\" cssclass=\"cell_end\" wordWrap=\"char\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid09","70","970","730","241",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("ds_grd04");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"chk\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"소속\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"Color\"/><Cell col=\"5\" cssclass=\"cell_end\" text=\"배정\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:항목\" combodisplay=\"display\" textAlign=\"left\" cssclass=\"cell_linkTxt\"/><Cell col=\"2\" text=\"bind:소속\" edittype=\"combo\" cssclass=\"cell_link\"/><Cell col=\"3\" text=\"bind:직책\"/><Cell col=\"4\" text=\"bind:color\" cssclass=\"expr:color==&quot;black&quot;?&apos;cell_black&apos;:color==&quot;blue&quot;?&apos;cell_blue&apos;:color==&quot;brown&quot;?&apos;cell_brown&apos;:color==&quot;gray&quot;?&apos;cell_gray&apos;:color==&quot;gray2&quot;?&apos;cell_gray2&apos;:color==&quot;green&quot;?&apos;cell_green&apos;:color==&quot;orange&quot;?&apos;cell_orange&apos;:color==&quot;red&quot;?&apos;cell_red&apos;:color==&quot;bold&quot;?&apos;cell_bold&apos;:&apos;&apos;\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" style=\"align:left;padding:5 0 5 10;\" text=\"bind:배정\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"24\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid10","70","1264","914","97",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("scrollbars").set("none");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_nodatatext("조회결과가 없습니다.");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"chk\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"점포명\"/><Cell col=\"3\" text=\"면적\"/><Cell col=\"4\" text=\"주차\"/><Cell col=\"5\" text=\"거리\"/><Cell col=\"6\" text=\"첨부파일\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" colspan=\"4\" cssclass=\"cell_point,cell_end\" text=\"경합\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:chk\" cssclass=\"cell_checkBlue\"/><Cell col=\"1\" text=\"bind:번호\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:점포명\"/><Cell col=\"3\" text=\"bind:면적\"/><Cell col=\"4\" text=\"bind:주차\"/><Cell col=\"5\" text=\"bind:거리\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"bind:attachment\"/><Cell col=\"7\" cssclass=\"cell_img\" text=\"expr:success==&quot;1&quot;?&apos;theme://images/status_completed.png&apos;:success==&quot;0&quot;?&apos;theme://images/status_start.png&apos;:&quot;&quot;\" displaytype=\"imagecontrol\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"cell_rdo,cell_end\" text=\"bind:여\"/><Cell col=\"9\" style=\"align:left;padding:0 0 0 0;\" text=\"여\" padding=\"0px\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"cell_rdo,cell_end\" text=\"bind:부\"/><Cell col=\"11\" style=\"align:left;padding:0 0 0 0;\" text=\"부\" padding=\"0px\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","831","1364","108","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("cssclass : cell_rdo");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","816","949","163","262",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("<b v=\'true\'>* Text의 Font Color List</b>\r\n\r\n<fc v=\'#1e2023\'>cell_black</fc>\r\n<fc v=\'#917240\'>cell_brown</fc>\r\n<fc v=\'#176bfb\'>cell_blue</fc>\r\n<fc v=\'#82878e\'>cell_gray</fc>\r\n<fc v=\'#aaafb4\'>cell_gray2</fc>\r\n<fc v=\'#3ca455\'>cell_green</fc>\r\n<fc v=\'#e67337\'>cell_orange</fc>\r\n<fc v=\'#ec0928\'>cell_red</fc>\r\n<b v=\'true\'>cell_bold</b>");
            obj.set_cssclass("sta_font_gray");
            obj.set_usedecorate("true");
            obj.set_font("normal 12px/1.7 \"Dotum\",\"돋움\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","70","2810","118","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("cssClass : grd_detail");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid12","517","1411","419","145",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_line");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"Head Master\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" text=\"비정형 Data\"/><Cell row=\"1\" col=\"1\" text=\"정형 Data\"/><Cell row=\"1\" col=\"2\" text=\"Number Data\"/><Cell row=\"1\" col=\"3\" cssclass=\"cell_end\" text=\"Link Data\"/></Band><Band id=\"body\" style=\"border: ;\"><Cell style=\"align:left;\" text=\"bind:Column0\" textAlign=\"left\" cssclass=\"cell_headMaster\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\" cssclass=\"cell_head\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column2\" cssclass=\"cell_number\"/><Cell col=\"3\" displaytype=\"normal\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid15","70","1643","914","171",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_binddataset("ds_grd00");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_line");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\" band=\"left\"/><Column size=\"106\" band=\"left\"/><Column size=\"171\"/><Column size=\"28\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"비정형 Data\"/><Cell col=\"1\" text=\"정형 Data\" border=\"1px solid #e0e0e0,1px solid #333333,1px solid #e0e0e0,1px solid #e0e0e0\"/><Cell col=\"2\" colspan=\"2\" text=\"Number Data\"/><Cell col=\"4\" cssclass=\"cell_end\" text=\"Link Data\"/></Band><Band id=\"body\" style=\"border: ;\"><Cell style=\"align:left;\" text=\"bind:Column0\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"decoratetext\" text=\"bind:Column1\" cssclass=\"cell_line\" border=\"1px solid #f1f1f1,1px solid #333333,1px solid #f1f1f1,1px solid #f1f1f1\"/><Cell col=\"2\" displaytype=\"number\" style=\"align:right middle;\" text=\"bind:Column2\" cssclass=\"cell_number,cell_lineX\"/><Cell col=\"3\" cssclass=\"cell_unit\" text=\"원\"/><Cell col=\"4\" displaytype=\"normal\" style=\"color2: ;font:antialias underline 9 NanumGothic;cursor:hand;selectcolor:#1955b8ff;selectfont:antialias underline 9 NanumGothic;\" cssclass=\"cell_linkTxt\" text=\"bind:Column3\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" border=\"1px solid #f2f2f2,1px solid #333333,1px solid #f2f2f2,1px solid #f2f2f2\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&apos;Column2&apos;)\" displaytype=\"number\" cssclass=\"cell_lineX\"/><Cell col=\"3\" cssclass=\"cell_unit\" text=\"원\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","336","2570","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("cell_bg_blue");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","426","2570","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("cell_bg_gray");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","511","2570","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("cell_bg_green");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","611","2570","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("cell_bg_red");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","68","949","231","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Sub Grid (cssclass : grd_sub)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","70","2132","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("cssClass : grd_sub");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","69","3358","302","145",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("Tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" cssclass=\"expr:lev==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","69","3331","229","14",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Tree Grid(cssclass : grd_tree)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static06_00","868","527","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Body 1개 Row height");
            obj.set_cssclass("sta_font_gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","70","2564","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Grid Cell Color");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00","487","732","40","65",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","533","721","181","52",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text(" \"세대\"의 단위를 나타낼 때에는\r\n cssclass : cell_unit\r\n");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01","352","732","40","65",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01","241","722","113","21",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("\"명\" Expand로 처리  ");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","769","527","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","769","318","81","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("30px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01","769","126","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01_00","769","198","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01_00_00","769","245","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("26px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00","670","439","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","825","455","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("cssclass : cell_linkTxt");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00","811","1239","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01_00","659","1228","151","42",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("cssclass : cell_point ");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_02","910","1412","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_02_00","910","1436","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_02_01","953","1884","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_02_00_00","953","1932","81","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_02_00_00_00","953","2027","81","26",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("26px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_01","657","1550","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00","702","1561","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("cssclass : cell_head");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","344","1526","60","45",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00_00","193","1560","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("cssclass : cell_linkTxt ");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01_00_00","444","1611","151","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            obj.set_text("cssclass : cell_lineX ");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00_00","596","1621","40","55",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_02","706","2048","40","24",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_01","751","2060","151","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("cssclass : cell_unit");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00_00_00","567","2140","40","55",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01_00_00_00","415","2130","151","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            obj.set_text("cssclass : cell_img");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00","735","2140","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02","784","2129","98","21",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("cssclass : cell_gray");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00_00","691","3358","302","145",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("grd_treeGroup");
            obj.set_binddataset("Tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\" cssclass=\"expr:lev==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static90_00","691","3331","184","14",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Tree Grid(cssclass : grd_treeGroup)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","70","743","231","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("단위 표시 방법 2가지");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00","254","1622","40","26",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02_00","303","1611","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("틀고정 보더값 참고");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","70","1615","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("cssClass : grd_line");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_02","563","1548","32","24",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00_00_00","412","1560","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("cssclass : cell_headMaster");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00_01","700","1392","40","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01_00_01","548","1371","151","42",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("cssclass : cell_headMaster");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grd_head","80","3532","128","24",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("Grid Head 공통기능");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_grdHead","238","3533","191","340",null,null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","0",null,null,"0","0",null,null,null,null,this.pdiv_grdHead.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_comPop");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grdHead");
            obj.set_autofittype("col");
            obj.set_fillareatype("datarow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"10\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:icon\" displaytype=\"imagecontrol\" cssclass=\"cell_img,cell_bg_white\"/><Cell col=\"1\" text=\"bind:userdata\" cssclass=\"expr:enable==&quot;0&quot;?&apos;cell_gray2&apos;:&apos;&apos;(level==&quot;1&quot;?&apos;cell_level1&apos;:&apos;&apos;)\"/><Cell col=\"2\" cssclass=\"cell_bg_white\"/></Band></Format></Formats>");
            this.pdiv_grdHead.addChild(obj.name, obj);

            obj = new Button("btn_grd_body","80","3562","128","24",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("Grid Body 공통기능");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_grdBody","458","3532","270","574",null,null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_body","0","0",null,null,"0","0",null,null,null,null,this.pdiv_grdBody.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_comPop");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grdBody");
            obj.set_fillareatype("datarow");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"228\"/><Column size=\"10\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell text=\"bind:icon\" displaytype=\"imagecontrol\" cssclass=\"cell_img,cell_bg_white\"/><Cell col=\"1\" text=\"bind:menu\" cssclass=\"expr:enable==&quot;0&quot;?&apos;cell_gray2&apos;:&apos;&apos;(level==&quot;1&quot;?&apos;cell_level1&apos;:&apos;&apos;)\"/><Cell col=\"2\" cssclass=\"cell_bg_white\"/></Band></Format></Formats>");
            this.pdiv_grdBody.addChild(obj.name, obj);

            obj = new Static("Static51_00","226","2570","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("cell_bg_white");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01","935","2592","135","80",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("Head/cell\r\nBodt/cell\r\nSummary/cell\r\n에 적용됩니다.");
            obj.set_cssclass("sta_WF_helpInfo");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","70","1814","336","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("셀의 구분선이 필요할 경우 cssclass : grd_line를 사용합니다.");
            obj.set_cssclass("sta_font_red");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","816","584","254","56",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("* Grid>body>cell>Edit, MaskEdit, Combo, Calendar, Spin, Textarea등 입력폼의 필수표시는 cssclass : point로 공통적용됩니다.");
            obj.set_cssclass("sta_font_orange");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00","70","3005","144","21",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("cssClass : grd_detail_Master");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01","70","3032","718","94",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_scrolltype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"고객사명\"/><Cell col=\"1\" text=\"IFV\" displaytype=\"combocontrol\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목코드\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"내부 Rev\"/><Cell col=\"5\" colspan=\"3\" text=\"FA1\"/><Cell row=\"1\" cssclass=\"cell_head,cell_point\" text=\"품목명\"/><Cell row=\"1\" col=\"1\" colspan=\"5\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"작업구분\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"생산구분\"/><Cell row=\"2\" col=\"1\" text=\"양산\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"PNL X\"/><Cell row=\"2\" col=\"3\" text=\"Roll\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"작업구분\"/><Cell row=\"2\" col=\"5\" text=\"500\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"PNL Y\"/><Cell row=\"2\" col=\"7\" text=\"350\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01_00","70","3172","718","82",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("grd_detail_Sub");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_scrolltype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"95\"/></Columns><Rows><Row size=\"2\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"25\"/><Row size=\"3\"/></Rows><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"고객사명\"/><Cell row=\"1\" col=\"1\" text=\"IFV\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목코드\"/><Cell row=\"1\" col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" expandshow=\"show\" expandsize=\"24\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"내부 Rev\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"FA1\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"2\" cssclass=\"cell_head,cell_point\" text=\"품목명\"/><Cell row=\"2\" col=\"1\" colspan=\"5\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"작업구분\"/><Cell row=\"2\" col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"생산구분\"/><Cell row=\"3\" col=\"1\" text=\"양산\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"PNL X\"/><Cell row=\"3\" col=\"3\" text=\"Roll\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"작업구분\"/><Cell row=\"3\" col=\"5\" text=\"500\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"PNL Y\"/><Cell row=\"3\" col=\"7\" text=\"350\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell row=\"4\"/><Cell row=\"4\" col=\"1\"/><Cell row=\"4\" col=\"2\"/><Cell row=\"4\" col=\"3\"/><Cell row=\"4\" col=\"4\"/><Cell row=\"4\" col=\"5\"/><Cell row=\"4\" col=\"6\"/><Cell row=\"4\" col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static13_00_00","70","3148","144","21",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("cssClass : grd_detail_Sub");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_03","445","924","324","52",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("텍스트에 Underline표시 할 경우에는\r\n cssclass : cell_link (Font Color css와 조합가능함)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_01","399","935","40","65",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_03_00","275","924","181","52",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("링크표시 할 경우에는\r\n cssclass : cell_linkTxt");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_01_00","229","935","40","65",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static55_00","721","2570","78","21",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("cell_bg_yellow");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static55_00_00","823","2570","111","21",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("cell_bg_midnightBlue");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","936","389","45","40",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("sta_00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","23","4221","422","325",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_binddataset("dsSample00");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"rowLevel\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"expr:dataset.getRowLevel(currow)\" cssclass=\"cell_line\"/><Cell col=\"1\" text=\"bind:Column0\" suppress=\"1\" textAlign=\"left\" cssclass=\"cell_line\"/><Cell col=\"2\" text=\"bind:Column1\" suppress=\"2\" textAlign=\"left\" cssclass=\"cell_line\"/><Cell col=\"3\" text=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;소계&apos;\" cssclass=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;cell_subSum&apos;\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 0 ? Column2 : &apos;cell_subSum&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\" textAlign=\"right\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;Column3&apos;)\" displaytype=\"number\" cssclass=\"cell_red\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","23","4183","328","28",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("소계,합계");
            obj.set_font("bold 10pt \"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02_00_00","270","4176","90","21",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("cssclass : cell_line");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00_00","80","4185","179","75",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00_00_00","140","4185","119","75",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00_00_00_00","230","4185","29","75",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_02.xfdl", function() {
        this.Button14_onclick = function(obj,  e)
        {
        	this.pMenu.trackPopupByComponent(obj, 0, 25);
        }


        this.Btn01_onclick = function(obj,  e)
        {
        	var i, j;
        	this.Pbr01.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.Pbr01.stepIt();
        		this.updateWindow();
        		this.sleep(5);
        	}
        }


        this.btn_grd_head_onclick = function(obj,e)
        {
        	this.pdiv_grdHead.trackPopupByComponent(obj, 0, 25);
        };

        this.btn_grd_body_onclick = function(obj,e)
        {
        	this.pdiv_grdBody.trackPopupByComponent(obj, 0, 25);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static37.addEventHandler("onclick",this.Static37_onclick,this);
            this.btn_grd_head.addEventHandler("onclick",this.btn_grd_head_onclick,this);
            this.btn_grd_body.addEventHandler("onclick",this.btn_grd_body_onclick,this);
        };
        this.loadIncludeScript("Guide_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
