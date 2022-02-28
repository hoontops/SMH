(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_01");
            this.set_titletext("Default Components");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,4280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Combo", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">전체</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">가</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">가나</Col><Col id=\"lev\">2</Col></Row><Row><Col id=\"txt\">가나다</Col><Col id=\"lev\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Grid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"Column01\" type=\"STRING\" size=\"256\"/><Column id=\"Column02\" type=\"STRING\" size=\"256\"/><Column id=\"Column03\" type=\"STRING\" size=\"256\"/><Column id=\"Column04\" type=\"STRING\" size=\"256\"/><Column id=\"Column05\" type=\"STRING\" size=\"256\"/><Column id=\"Column06\" type=\"STRING\" size=\"256\"/><Column id=\"Column07\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"버튼1\" type=\"STRING\" size=\"256\"/><Column id=\"버튼2\" type=\"STRING\" size=\"256\"/><Column id=\"버튼3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"순번\">1</Col><Col id=\"Column05\">가</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">전체</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">2</Col><Col id=\"Column05\">가나</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">3</Col><Col id=\"Column05\">가나다</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가나</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">4</Col><Col id=\"Column05\">가나다라</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라</Col><Col id=\"Column04\">expand</Col><Col id=\"Column02\">가나다</Col><Col id=\"lev\">0</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">5</Col><Col id=\"Column05\">가나다라마</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">6</Col><Col id=\"Column05\">가나다라마바</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">7</Col><Col id=\"Column05\">가나다라마바사</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">8</Col><Col id=\"Column05\">가나다라마바사아</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">9</Col><Col id=\"Column05\">가나다라마바사아자</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row><Row><Col id=\"순번\">10</Col><Col id=\"Column05\">가나다라마바사아자차</Col><Col id=\"Column06\">1234567890</Col><Col id=\"Column01\">가나다라마바사아자차</Col><Col id=\"Column04\">expand</Col><Col id=\"Column07\">버튼</Col><Col id=\"버튼1\">상세보기</Col><Col id=\"버튼2\">검수</Col><Col id=\"버튼3\">삭제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Tree", this);
            obj._setContents("<ColumnInfo><Column id=\"txt\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">1 Depth Menu</Col><Col id=\"lev\">0</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row><Row><Col id=\"txt\">2 Depth Menu</Col><Col id=\"lev\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Caption\">2depth Menu01</Col><Col id=\"Id\">00001</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00002</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00003</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00004</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00005</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00006</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00007</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">2depth Menu02</Col><Col id=\"Id\">00008</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00009</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00010</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00011</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00012</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00013</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00014</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu03</Col><Col id=\"Id\">00015</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00016</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00017</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00018</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00019</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00020</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00021</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu04</Col><Col id=\"Id\">00022</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00023</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00024</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00025</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00026</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00027</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00028</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">2depth Menu05</Col><Col id=\"Id\">00029</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">3depth Menu01</Col><Col id=\"Id\">00030</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu02</Col><Col id=\"Id\">00031</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu03</Col><Col id=\"Id\">00032</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu04</Col><Col id=\"Id\">00033</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu05</Col><Col id=\"Id\">00034</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">3depth Menu06</Col><Col id=\"Id\">00035</Col><Col id=\"Level\">1</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("PopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"idx\" type=\"STRING\" size=\"256\"/><Column id=\"lev\" type=\"STRING\" size=\"256\"/><Column id=\"UserData\" type=\"STRING\" size=\"256\"/><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"idx\">1000</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1001</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1002</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1003</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"idx\">1004</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1005</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"enable\">0</Col></Row><Row><Col id=\"idx\">1006</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1007</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1008</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1009</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu01</Col><Col id=\"Caption\">PopupMenu01</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1010</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu02</Col><Col id=\"Caption\">PopupMenu02</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1011</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu03</Col><Col id=\"Caption\">PopupMenu03</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1012</Col><Col id=\"lev\">1</Col><Col id=\"UserData\">PopupMenu04</Col><Col id=\"Caption\">PopupMenu04</Col><Col id=\"enable\">1</Col></Row><Row><Col id=\"idx\">1013</Col><Col id=\"lev\">0</Col><Col id=\"UserData\">PopupMenu05</Col><Col id=\"Caption\">PopupMenu05</Col><Col id=\"enable\">1</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Radio", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">Edit</Col></Row><Row><Col id=\"name\">MaskEdit</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"name\">Combo</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"name\">Calendar</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"name\">TextArea</Col><Col id=\"code\">0</Col></Row><Row><Col id=\"name\">Spin</Col><Col id=\"code\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cal", this);
            obj._setContents("<ColumnInfo><Column id=\"from\" type=\"STRING\" size=\"256\"/><Column id=\"to\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"from\">20200316</Col><Col id=\"to\">20200528</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Menu01", this);
            obj._setContents("<ColumnInfo><Column id=\"Caption\" type=\"STRING\" size=\"256\"/><Column id=\"Id\" type=\"STRING\" size=\"256\"/><Column id=\"Level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Caption\">시스템 관리</Col><Col id=\"Id\">00001</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">코드 관리</Col><Col id=\"Id\">00002</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">코드그룹 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">코드 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사용자 관리</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">사용자그룹 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사용자 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사용자 그룹 - 사용자 매핑</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사용자 신청 승인</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사이트 - 사용자 매핑</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">메뉴 관리</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">메뉴 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">툴바 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">메뉴 권한 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">툴바 권한 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">매뉴얼 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">조건 관리</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">조회조건 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">메뉴 - 조회조건 매핑</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">다국어 관리</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">메세지그룹 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">메세지 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사전그룹 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">사전 정보</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">접속이력 관리</Col><Col id=\"Id\">00003</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">접속이력 조회</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">시스템 로그</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">스케쥴 관리</Col><Col id=\"Id\">00004</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">스케쥴 관리</Col><Col id=\"Level\">2</Col></Row><Row><Col id=\"Caption\">요청 관리</Col><Col id=\"Id\">00005</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">자재 예외 처리</Col><Col id=\"Id\">00006</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">기준정보</Col><Col id=\"Id\"/><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">Setup</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">사양기준관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">사양관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">공정기준정보</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">기준정보조회</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">품질기준정보</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">설비기준정보</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">작업자관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">포장/라벨 관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">생산 관리</Col><Col id=\"Id\"/><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">생산 계획</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">공정 부하</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">우선 순위 관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">납기 관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">공정 관리</Col><Col id=\"Id\"/><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">투입관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">공정작업</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">LOT 관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">재공관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">생산실적</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">최종검사</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">다중 공정작업</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">포장관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">물류창고</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">자재관리</Col><Col id=\"Id\"/><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">TestFolder</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">품질 관리</Col><Col id=\"Level\">0</Col></Row><Row><Col id=\"Caption\">약품관리/에칭레이트</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">수입검사</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">자주/최종검사/품질규격</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">출하검사</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">신뢰성 검증/계측기</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">불량품 관리</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">수율현황 및 불량분석</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">품질 비용분석</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">변경점 / 대책서 관리</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">검사원/AUDIT</Col><Col id=\"Level\">1</Col></Row><Row><Col id=\"Caption\">품질 Claim </Col><Col id=\"Level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","51","111","262",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","110","51",null,"262","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"53","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Component KIT (Default Components)");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","312","111","124",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Edit");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","110","312",null,"124","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","435","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","110","435",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","528","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","110","528",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","663","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Button\r\n");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","110","663",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","756","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","110","756",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0","849","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","110","849",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","984","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Spin");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","110","984",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","1077","111","495",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","110","1077",null,"495","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_guide_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","1571","111","153",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","110","1571",null,"153","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","1723","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Div");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","110","1723",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","0","1816","111","1335",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Grid");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","110","1816",null,"1335","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","0","3150","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","110","3150",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","0","3285","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_guide_Label");
            obj.set_wordWrap("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","110","3285",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","0","3420","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Menu");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","110","3420",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","3555","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("PopupDiv");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","110","3555",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","3648","111","136",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","110","3648",null,"136","0",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","110","3783",null,"94","0",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","3876","111","165",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Radio");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","110","3876",null,"165","0",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","0","4040","111","129",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Tab");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","110","4040",null,"129","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","138","329","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","374","329","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","526","329","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("readonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","138","353","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_displaynulltext("입력하세요");
            obj.set_autoselect("true");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","138","680","80","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","352","680","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","138","704","44","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","352","704","44","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("버튼");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","187","1620","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","370","1620","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","188","1644","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("체크박스");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","370","1643","67","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("nexacro");
            obj.set_enable("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","138","1750","343","41",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("Div는 일반적으로 Form을 로드할 때 사용한다.\r\n디자인 요소가 필요 할 경우 Class로 지정해서 사용한다.");
            obj.set_cssclass("sta_WF_Txt10Blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","138","82","232","60",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("가나다라마바사\r\nABCDEFGHIJKLMNOP\r\n0123456789");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","138","144","232","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("※ usedecorate =\"<b v=\'true\'>true</b>\"");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_guide_comment_Y");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","138","166","562","146",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("fs 글자의 크기(fontsize)를 지정합니다.  ex)<fs v=\'12\'></fs>\r\nfc 글자의 색상(fontcolor)를 지정합니다.  ex)<fc v=\'red\'></fc><fc v=\'#FF00FF\'></fc>\r\nff 글자의 종류(fontface)를 지정합니다.  ex)<ff v=\'굴림\'></ff>\r\nb 굵은글씨를(bold)를 지정합니다. ex)<b v=\'true\'></b>\r\ni 이텔릭체를 (italic)를 지정합니다.  ex)<i v=\'true\'></i>\r\nu 언더라인을(underline)를 지정합니다.  ex)<u v=\'true\'></u>\r\ns 취소선(strike)를 지정합니다.  ex)<s v=\'true\'></s>");
            obj.set_usedecorate("false");
            obj.set_cssclass("sta_WF_Txt10Gray");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","374","353","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_value("nexacro");
            obj.set_enable("false");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","526","353","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_value("nexacro");
            obj.set_readonly("true");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","138","452","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","374","452","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","526","452","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("readonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","138","476","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_displaynulltext("입력하세요");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","374","476","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_value("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","526","476","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_value("17");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","138","545","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","354","545","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","506","545","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("readonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","138","569","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_displaynulltext("입력하세요");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","354","569","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_value("nexacro\nnexacro\nnexacro\nnexacro");
            obj.set_enable("false");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","506","569","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_value("nexacro\nnexacro\nnexacro\nnexacro");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","137","773","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","373","773","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","526","773","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("readonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","138","802","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_displaynulltext("선택하세요");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","373","802","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_enable("false");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","526","802","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_readonly("true");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","137","866","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","353","866","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","138","893","127","69",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_text("가");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","353","888","127","74",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_enable("false");
            obj.set_text("가");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","167","3893","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","380","3893","122","25",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","167","3922","185","20",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("0px 0px px");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","380","3923","185","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","134","3167","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","347","3167","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","134","3191","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("그룹박스");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","347","3191","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("그룹박스");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","134","3302","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","347","3302","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","134","3334","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer01","347","3334","127","61",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","138","3582","343","41",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("PopupDiv는 일반적으로 Form을 로드할 때 사용한다.\r\n디자인 요소가 필요 할 경우 Class로 지정해서 사용한다.");
            obj.set_cssclass("sta_WF_Txt10Blue");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","162","4077","337","86",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("탭버튼01");
            obj.set_tabbuttoncssclass("test");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("탭버튼02");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("탭버튼03");
            obj.set_tabbuttoncssclass("tab_WF_btnRed");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("Tabpage4");
            obj.set_tabbuttoncssclass("tab_WF_btnBlue");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static75","137","1094","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","373","1094","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","526","1094","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("readonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","138","1118","110","20",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("97");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("날짜를 선택하세요");
            obj.set_value("20200325");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","373","1118","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_value("20200325");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","526","1118","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_value("20200325");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","373","1169","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_value("20200325");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","526","1169","120","20",null,null,null,null,null,null,this);
            obj.set_initvalueid("iv_Calendar0");
            obj.set_taborder("101");
            obj.set_value("20200325");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar07","138","1169","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_value("20200325");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("spin");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","137","1216","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("monthonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","373","1001","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","526","1001","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("readonly");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","137","1001","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","138","1025","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin01","373","1025","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_enable("false");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin02","526","1025","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_readonly("true");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","168","1834","844","199",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("Grid");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" style=\"align:center middle;\" text=\"Column0\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"Edit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"Edit+Exapnd\"/><Cell col=\"6\" text=\"Column05\"/><Cell col=\"7\" text=\"Number\"/><Cell col=\"8\" text=\"Button\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:순번\" displaytype=\"text\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" style=\"padding:3 3 3 3;\" text=\"bind:Column01\" editdisplay=\"display\" expandshow=\"hide\"/><Cell col=\"3\" displaytype=\"combocontrol\" edittype=\"combo\" style=\"padding:3 3 3 3;\" text=\"bind:lev\" combodataset=\"Combo\" combocodecol=\"lev\" combodatacol=\"txt\" combodisplayrowcount=\"-1\" combodisplay=\"display\"/><Cell col=\"4\" displaytype=\"calendarcontrol\" edittype=\"date\" style=\"padding:3 3 3 3;\" text=\"bind:Column03\" editdisplay=\"display\" calendardisplay=\"display\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" displaytype=\"editcontrol\" edittype=\"expand\" style=\"padding:3 0 3 2;\" text=\"bind:Column04\" editdisplay=\"display\" expandshow=\"show\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"6\" style=\"padding:0 9 0 9;\" text=\"bind:Column05\"/><Cell col=\"7\" style=\"align:right middle;padding:0 9 0 9;\" text=\"bind:Column06\" mask=\"###,###,###\" maskeditformat=\"###,###\" displaytype=\"number\" cssclass=\"cell_number\"/><Cell col=\"8\" displaytype=\"buttoncontrol\" edittype=\"button\" style=\"align:center middle;padding:3 3 3 3;\" text=\"bind:Column07\" editdisplay=\"edit\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" style=\"align:center middle;\" text=\"합계\" displaytype=\"text\"/><Cell col=\"7\" colspan=\"2\" style=\"align:right middle;padding:0 9 0 9;\" text=\"321456789\" mask=\"###,###,###\" displaytype=\"number\" cssclass=\"cell_number, cell_red\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","138","2118","302","153",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("Tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:txt\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lev\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static90","138","2094","229","14",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("Tree Grid(cssclass : grd_tree)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","138","2319","844","259",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_autofittype("col");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"71\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"순번\"/><Cell col=\"2\" colspan=\"7\" text=\"HeadMaster\" cssclass=\"cell_headMaster,cell_end\"/><Cell row=\"1\" col=\"2\" text=\"Edit\" cssclass=\"cell_point\" displaytype=\"buttoncontrol\"/><Cell row=\"1\" col=\"3\" text=\"Combo\"/><Cell row=\"1\" col=\"4\" text=\"Calendar\"/><Cell row=\"1\" col=\"5\" text=\"Edit+Expand\"/><Cell row=\"1\" col=\"6\" text=\"Column05\"/><Cell row=\"1\" col=\"7\" text=\"Column06\"/><Cell row=\"1\" col=\"8\" text=\"Button\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:순번\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Column01\" displaytype=\"editcontrol\"/><Cell col=\"3\" text=\"bind:Column02\" displaytype=\"combocontrol\"/><Cell col=\"4\" text=\"bind:Column03\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:Column04\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"6\" text=\"bind:Column05\"/><Cell col=\"7\" text=\"bind:Column06\" maskeditformat=\"###,###\" displaytype=\"number\" cssclass=\"cell_number\"/><Cell col=\"8\" text=\"bind:Column07\" displaytype=\"buttoncontrol\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\" displaytype=\"text\"/><Cell col=\"7\" colspan=\"2\" text=\"321654987\" displaytype=\"number\" cssclass=\"cell_number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","138","2727","844","376",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_autofittype("col");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"28\"/><Column size=\"48\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"71\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"head\"/><Cell col=\"2\" rowspan=\"2\" text=\"순번\"/><Cell col=\"3\" colspan=\"7\" text=\"Head Master\" cssclass=\"cell_headMaster\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" cssclass=\"cell_end\"/><Cell row=\"1\" col=\"3\" text=\"Edit\"/><Cell row=\"1\" col=\"4\" text=\"Combo\"/><Cell row=\"1\" col=\"5\" text=\"Calendar\"/><Cell row=\"1\" col=\"6\" text=\"Edit+Expand\"/><Cell row=\"1\" col=\"7\" text=\"Column05\"/><Cell row=\"1\" col=\"8\" text=\"MaskEdit\"/><Cell row=\"1\" col=\"9\" text=\"Button\"/><Cell row=\"1\" col=\"10\" text=\"보기\"/><Cell row=\"1\" col=\"11\" text=\"검수\"/><Cell row=\"1\" col=\"12\" text=\"삭제\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" cssclass=\"cell_headMaster\" text=\"bind:순번\"/><Cell col=\"2\" text=\"bind:순번\" displaytype=\"text\" cssclass=\"cell_head\"/><Cell col=\"3\" text=\"bind:Column01\" displaytype=\"editcontrol\"/><Cell col=\"4\" text=\"bind:Column02\" displaytype=\"combocontrol\"/><Cell col=\"5\" text=\"bind:Column03\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:Column04\" displaytype=\"editcontrol\" expandshow=\"show\" expandsize=\"32\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"7\" text=\"bind:Column05\"/><Cell col=\"8\" text=\"bind:Column06\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" text=\"bind:Column07\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"10\" displaytype=\"buttoncontrol\" text=\"bind:버튼1\" edittype=\"button\"/><Cell col=\"11\" displaytype=\"buttoncontrol\" text=\"bind:버튼2\" edittype=\"button\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" text=\"bind:버튼3\" edittype=\"button\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"소계 03\" displaytype=\"text\" cssclass=\"cell_subSum\"/><Cell col=\"8\" colspan=\"2\" text=\"1000000\" displaytype=\"number\" cssclass=\"cell_subSum\" textAlign=\"right\" padding=\"0px 10px 0px 0px\"/><Cell col=\"10\" cssclass=\"cell_subSum\"/><Cell col=\"11\" cssclass=\"cell_subSum\"/><Cell col=\"12\" cssclass=\"cell_subSum\"/><Cell row=\"1\" colspan=\"8\" text=\"소계 02\" displaytype=\"text\" cssclass=\"cell_subSum\"/><Cell row=\"1\" col=\"8\" colspan=\"2\" text=\"1000000\" displaytype=\"number\" cssclass=\"cell_subSum\" textAlign=\"right\" padding=\"0px 10px 0px 0px\"/><Cell row=\"1\" col=\"10\" cssclass=\"cell_subSum\"/><Cell row=\"1\" col=\"11\" cssclass=\"cell_subSum\"/><Cell row=\"1\" col=\"12\" cssclass=\"cell_subSum\"/><Cell row=\"2\" colspan=\"8\" text=\"소계 01\" displaytype=\"text\" cssclass=\"cell_sumTotal\"/><Cell row=\"2\" col=\"8\" colspan=\"2\" text=\"1000000\" displaytype=\"number\" cssclass=\"cell_sumTotal\" textAlign=\"right\" padding=\"0px 10px 0px 0px\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"3\" colspan=\"8\" text=\"합계\" displaytype=\"text\"/><Cell row=\"3\" col=\"8\" colspan=\"2\" text=\"321654987\" displaytype=\"number\" cssclass=\"cell_red\" textAlign=\"right\" padding=\"0px 10px 0px 0px\"/><Cell row=\"3\" col=\"10\"/><Cell row=\"3\" col=\"11\"/><Cell row=\"3\" col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","138","2703","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("summ");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","165","3807","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","165","3838","260","18",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_smooth("true");
            obj.set_text("50%");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","605","3807","100","18",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar01","605","3838","260","18",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_enable("false");
            obj.set_smooth("true");
            obj.set_text("50%");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.addChild(obj.name, obj);

            obj = new Menu("Menu00","138","3461",null,"38","265",null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_innerdataset("Menu01");
            obj.set_captioncolumn("Caption");
            obj.set_idcolumn("Id");
            obj.set_levelcolumn("Level");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","128","3678","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("PopupMenu");
            this.addChild(obj.name, obj);

            obj = new PopupMenu("PopupMenu00","239","3678","152","97",null,null,null,null,null,null,this);
            obj.set_innerdataset("PopupMenu");
            obj.set_captioncolumn("Caption");
            obj.set_enablecolumn("enable");
            obj.set_idcolumn("idx");
            obj.set_levelcolumn("lev");
            obj.set_userdatacolumn("UserData");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","270","1644","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("체크박스");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","500","2118","222","153",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_binddataset("Grid");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_listbox");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"277\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" style=\"align:center middle;\" text=\"bind:Column0\"/><Cell col=\"1\" style=\"align:center middle;\" text=\"bind:Column01\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","501","2094","272","14",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("ListBox형 Grid(cssclass : grd_listbox)");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","676","353","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("point");
            obj.set_displaynulltext("입력하세요");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","676","476","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_displaynulltext("입력하세요");
            obj.set_cssclass("point");
            obj.set_format("###,");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","676","329","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","676","452","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","656","545","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","656","569","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_displaynulltext("입력하세요");
            obj.set_cssclass("point");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo05","676","802","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_displaynulltext("선택하세요");
            obj.set_cssclass("point");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","676","773","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","676","1096","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","676","1120","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("날짜를 선택하세요");
            obj.set_cssclass("point");
            obj.set_value("20200325");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin03","676","1025","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("point");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","676","1001","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","0","3783","111","94",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02","166","3965","575","20",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_innerdataset("Radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_padding("0px 0px px");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static97","725","2578","163","38",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("cssclass : cell_number,cell_end");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static105","549","3003","80","38",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("cell_subSum");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static89","572","84","232","60",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_text("가나다라마바사\r\nABCDEFGHIJKLMNOP\r\n0123456789");
            obj.set_font("normal 700 15px/normal \"Malgun Gothic\",\"맑은 고딕\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static108","110","4168",null,"112","0",null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static109","0","4168","111","112",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("File Upload &\r\nFileDownload");
            obj.set_cssclass("sta_guide_Label");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","165","4212","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_itemcount("1");
            obj.set_buttontext("파일찾기");
            obj.set_itemheight("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","428","3834","48","24",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("Test");
            this.addChild(obj.name, obj);

            obj = new Static("Static110","492","4187","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static111","612","4187","122","25",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","836","353","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_cssclass("display");
            obj.set_value("디스플레이");
            obj.set_readonly("true");
            obj.set_text("디스플레이");
            this.addChild(obj.name, obj);

            obj = new Static("Static113","836","329","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("cssclass : display");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static114","836","452","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("cssclass : display");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","836","476","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_cssclass("display");
            obj.set_format("###,");
            obj.set_value("1234567");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static115","836","545","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("cssclass : display");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","836","569","120","61",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_cssclass("display");
            obj.set_wordWrap("char");
            obj.set_value("텍스트 입력");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static116","836","773","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("cssclass : display");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo04","836","802","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_innerdataset("Combo");
            obj.set_codecolumn("lev");
            obj.set_datacolumn("txt");
            obj.set_displaynulltext("선택하세요");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin04","836","1025","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_value("201");
            this.addChild(obj.name, obj);

            obj = new Static("Static117","836","1001","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("cssclass : display");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static118","836","1096","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("cssclass : display");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar09","836","1120","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_displaynulltext("날짜를 선택하세요");
            obj.set_cssclass("display");
            obj.set_value("20200325");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static119","672","1620","88","23",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","673","1643","77","20",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_text("nexacro");
            obj.set_value("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static120","636","3893","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio03","636","3922","148","20",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_padding("0px 0px px");
            obj.set_cssclass("point");
            var Radio03_innerdataset = new nexacro.NormalDataset("Radio03_innerdataset", obj);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">nexacro</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">nexacro</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer02","525","3334","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_cssclass("img_photo");
            this.addChild(obj.name, obj);

            obj = new Static("Static122","525","3302","122","24",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("cssclass : img_photo");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer03","608","3334","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_enable("false");
            obj.set_cssclass("img_photo");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer04","725","3334","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("191");
            obj.set_cssclass("img_user");
            this.addChild(obj.name, obj);

            obj = new Static("Static123","725","3302","122","24",null,null,null,null,null,null,this);
            obj.set_taborder("192");
            obj.set_text("cssclass : img_user");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer05","808","3334","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("193");
            obj.set_enable("false");
            obj.set_cssclass("img_user");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","800","1652","37","20",null,null,null,null,null,null,this);
            obj.set_taborder("194");
            obj.set_cssclass("chk_WF_toggle");
            this.addChild(obj.name, obj);

            obj = new Static("Static124","802","1596","143","23",null,null,null,null,null,null,this);
            obj.set_taborder("195");
            obj.set_text("cssclass : Toggle Button");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","940","1652","37","20",null,null,null,null,null,null,this);
            obj.set_taborder("196");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static125","801","1626","80","23",null,null,null,null,null,null,this);
            obj.set_taborder("197");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static126","944","1626","44","23",null,null,null,null,null,null,this);
            obj.set_taborder("198");
            obj.set_text("disabled");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static129","544","3042","115","38",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("cell_sumTotal");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static104","357","3015","161","52",null,null,null,null,null,null,this);
            obj.set_taborder("201");
            obj.set_text("Body, Summary 에서\r\n소계와 소계합계는 각각\r\ncell_subSum, cell_sumTotal 로\r\n합니다.");
            obj.set_font("normal 11px/normal \"나눔바른고딕\",\"Nanum Barun Gothic\"");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static97_00","716","2695","262","32",null,null,null,null,null,null,this);
            obj.set_taborder("202");
            obj.set_text("cell_line(라인보이게)  l  cell_lineX(라인 안보이게)");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03_00","800","1682","37","20",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05_00","940","1682","37","20",null,null,null,null,null,null,this);
            obj.set_taborder("204");
            obj.set_cssclass("chk_WF_toggle");
            obj.set_enable("false");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static48_00","470","1620","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("206");
            obj.set_text("readonly : true");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00","470","1643","67","20",null,null,null,null,null,null,this);
            obj.set_taborder("207");
            obj.set_text("nexacro");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01_00_00","570","1643","67","20",null,null,null,null,null,null,this);
            obj.set_taborder("208");
            obj.set_text("nexacro");
            obj.set_readonly("true");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","473","1672","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_text("value : false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","573","1672","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("210");
            obj.set_text("value : true");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02_00","638","3965","411","20",null,null,null,null,null,null,this);
            obj.set_taborder("209");
            obj.set_innerdataset("Radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_padding("0px 0px px");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_readonly("true");
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00_00","610","4077","455","86",null,null,null,null,null,null,this);
            obj.set_taborder("211");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_00);
            obj.set_text("탭버튼01");
            obj.set_tabbuttoncssclass("test");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_00);
            obj.set_text("탭버튼02");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00_00);
            obj.set_text("탭버튼03");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Static("Static111_00","610","4050","147","25",null,null,null,null,null,null,this);
            obj.set_taborder("212");
            obj.set_text("showextrabutton = true");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","138","389","170","20",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_displaynulltext("입력하세요");
            obj.set_text("nexacro");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_00_01","282","390","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_cssclass("btn_WF_inputDel");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","970","2289","95","24",null,null,null,null,null,null,this);
            obj.set_taborder("203");
            obj.set_text("cssclass : cell_end");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","289","353","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","286","476","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("214");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00","162","704","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("215");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00","285","802","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("216");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00","245","917","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("23px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_01","284","1025","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_01_00","227","1118","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_01_00_00","227","1169","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_01_00_01","318","1245","70","220",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_text("220px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","139","1446","200","50",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("200px");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar08","139","1245","200","220",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_value("20210118");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_type("monthonly");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_01_00_02","818","1652","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_01_00","119","1835","83","24",null,null,null,null,null,null,this);
            obj.set_taborder("217");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_01_00_00","119","1883","83","24",null,null,null,null,null,null,this);
            obj.set_taborder("218");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_01_00_00_00","119","2006","83","26",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_text("26px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","602","2530","60","65",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00_00","333","2587","264","56",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("CellExpand\r\n-expandimage : theme://images/grd_expand.png\r\n-expandshow : show\r\n-expandsize : 24");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00","925","2301","40","32",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00","925","2301","40","51",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00","612","1997","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("219");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00_00_00","343","2014","264","56",null,null,null,null,null,null,this);
            obj.set_taborder("220");
            obj.set_text("CellExpand\r\n-expandimage : theme://images/grd_expand.png\r\n-expandshow : show\r\n-expandsize : 24");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01","896","2571","40","27",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_02","118","3838","90","18",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("18px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_02_00","118","3922","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_02_00_00","118","4077","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_02_00_01","118","4212","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("221");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_02_00_01_00","444","4212","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("222");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","492","4212","96","20",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload01","612","4212","96","20",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static78_00","616","2289","134","24",null,null,null,null,null,null,this);
            obj.set_taborder("223");
            obj.set_text("cssclass : cell_headMaster");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00","571","2301","40","32",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static97_01","55","3068","116","38",null,null,null,null,null,null,this);
            obj.set_taborder("224");
            obj.set_text("cssclass : cell_head");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00","179","2984","40","104",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static97_01_00","0","3009","140","38",null,null,null,null,null,null,this);
            obj.set_taborder("225");
            obj.set_text("cssclass : cell_headMaster");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00_00","148","2984","40","45",null,null,null,null,null,null,this);
            obj.set_taborder("226");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static78_00_00","562","2693","134","24",null,null,null,null,null,null,this);
            obj.set_taborder("227");
            obj.set_text("cssclass : cell_headMaster");
            obj.set_cssclass("sta_guide_status");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00_00","517","2705","40","32",null,null,null,null,null,null,this);
            obj.set_taborder("228");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00_01","653","3669","337","86",null,null,null,null,null,null,this);
            obj.set_taborder("229");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_MDI");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_01);
            obj.set_text("탭버튼01");
            obj.set_tabbuttoncssclass("test");
            this.Tab00_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_01);
            obj.set_text("탭버튼02");
            this.Tab00_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00_01);
            obj.set_text("탭버튼03");
            this.Tab00_01.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","576","3669","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio02_01","166","4005","441","20",null,null,null,null,null,null,this);
            obj.set_taborder("230");
            obj.set_innerdataset("Radio");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            obj.set_cssclass("rdo_lineBox");
            obj.set_text("nexacro");
            obj.set_value("1");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static69_00","546","4003","122","25",null,null,null,null,null,null,this);
            obj.set_taborder("231");
            obj.set_text("rdo_lineBox");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_03_00","401","4016","181","52",null,null,null,null,null,null,this);
            obj.set_taborder("232");
            obj.set_text("불량표시 할 경우에는\r\n cssclass : tab_WF_btnRed");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_01_00","355","4042","40","42",null,null,null,null,null,null,this);
            obj.set_taborder("233");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static68_00","264","4053","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("234");
            obj.set_text("normal");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static68_00_00","164","4053","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("235");
            obj.set_text("selected");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static111_00_00","418","4107","147","25",null,null,null,null,null,null,this);
            obj.set_taborder("236");
            obj.set_text("cssclass : tab_WF_btnBlue");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1100,4280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_01.xfdl", function() {

        this.Button16_onclick = function(obj,e)
        {
        		this.PopupMenu00.trackPopupByComponent(obj, 0, 29);
        };

        this.Button02_onclick = function(obj,e)
        {
        	var i, j;
        	this.ProgressBar00.pos = 0;
        	for( i = 0 ; i < 200 ; i+=2 )
        	{
        		this.ProgressBar00.stepIt();
        		this.updateWindow();
        		this.sleep(5);
        	}
        };

        this.Static104_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static53.addEventHandler("onclick",this.Static53_onclick,this);
            this.Button16.addEventHandler("onclick",this.Button16_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Guide_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
