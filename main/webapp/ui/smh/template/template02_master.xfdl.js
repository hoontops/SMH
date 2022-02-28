(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_application_07");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/><Column id=\"MES고객명\" type=\"STRING\" size=\"256\"/><Column id=\"Site별고객명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"대표자명\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"Fax번호\" type=\"STRING\" size=\"256\"/><Column id=\"납품처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">양희성</Col><Col id=\"주소\">경기 부천시 오정구 내동 94,93,86-1</Col><Col id=\"MES고객명\">신양엔지니어링</Col><Col id=\"고객ID\">1000</Col><Col id=\"사업자번호\">130-81-28064</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\">86-512-62539980</Col><Col id=\"전화번호\">86-512-62538988-5622</Col><Col id=\"대표자명\">Dongwook KIM</Col><Col id=\"주소\">NO.198.Fengzhou Rd,Suzhou Industrial Park,Jiangsu Province (215123)</Col><Col id=\"MES고객명\">SESC</Col><Col id=\"고객ID\">10008</Col><Col id=\"사업자번호\"/><Col id=\"SiteID\">IFC</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">김철</Col><Col id=\"주소\">경북 칠곡군 약목면 교리 514</Col><Col id=\"MES고객명\">피앤텔-칠곡</Col><Col id=\"고객ID\">1001</Col><Col id=\"사업자번호\">513-85-09557</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">이세용</Col><Col id=\"주소\">경기 수원시 영통구 원천동 337-17</Col><Col id=\"MES고객명\">이랜텍(39417)</Col><Col id=\"고객ID\">1002</Col><Col id=\"사업자번호\">124-81-39417</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">정운태</Col><Col id=\"주소\">경기도 안산시 단원구 신길동 1061-6 605블럭 10롯트</Col><Col id=\"MES고객명\">케이비젼</Col><Col id=\"고객ID\">10028</Col><Col id=\"사업자번호\">134-86-70045</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">김종구</Col><Col id=\"주소\">경기도 화성시 삼성 1로 2길 22 (석우동)</Col><Col id=\"MES고객명\">파트론</Col><Col id=\"고객ID\">1003</Col><Col id=\"사업자번호\">124-86-05362</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">강호문</Col><Col id=\"주소\">부산 강서구 송정동 1623-2 녹산공단</Col><Col id=\"MES고객명\">삼성전기-부산</Col><Col id=\"고객ID\">1004</Col><Col id=\"사업자번호\">622-85-02824</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">손희숙</Col><Col id=\"주소\">경기도 안산시 단원구 성곡동 600-4</Col><Col id=\"MES고객명\">이레전자(지점)</Col><Col id=\"고객ID\">10048</Col><Col id=\"사업자번호\">134-85-51361</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">박봉국</Col><Col id=\"주소\">경기 화성시 봉담읍 수영리 379-6</Col><Col id=\"MES고객명\">대양코리아</Col><Col id=\"고객ID\">1005</Col><Col id=\"사업자번호\">124-86-45291</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">현만영</Col><Col id=\"주소\">서울 중구 충무로3가 60-1 극동빌딩15층</Col><Col id=\"MES고객명\">아이마켓코리아</Col><Col id=\"고객ID\">1006</Col><Col id=\"사업자번호\">104-81-58502</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">SOPHIA HUANG</Col><Col id=\"주소\">No.471,Sec.2, Pa Teh Rd.,Hu Kou 30348, Hsin Chu Hsien, Taiwan</Col><Col id=\"MES고객명\">SIMPLO</Col><Col id=\"고객ID\">10068</Col><Col id=\"사업자번호\"/><Col id=\"SiteID\">IFC</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">장동훈</Col><Col id=\"주소\">서울 강남구 도곡동 420-14</Col><Col id=\"MES고객명\">이프러스</Col><Col id=\"고객ID\">1007</Col><Col id=\"사업자번호\">213-86-30948</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">장성돈</Col><Col id=\"주소\">인천 부평구 청천동 420-5</Col><Col id=\"MES고객명\">한국요꼬가와일</Col><Col id=\"고객ID\">1008</Col><Col id=\"사업자번호\">122-81-71556</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\">886-3-396-8899</Col><Col id=\"대표자명\">Kuen-Yao Lee</Col><Col id=\"주소\">189, Hwaya Rd. 2, Kueishan, Taoyuan 33383, Taiwan, R.O.C.</Col><Col id=\"MES고객명\">AU Optronics</Col><Col id=\"고객ID\">10088</Col><Col id=\"사업자번호\"/><Col id=\"SiteID\">IFC</Col><Col id=\"No\">14</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\">031-491-3765</Col><Col id=\"전화번호\">031-495-7523</Col><Col id=\"대표자명\">원종철</Col><Col id=\"주소\">경기도 안산시 단원구 성곡동 641-3 나동 반월공단 604블럭 29로트</Col><Col id=\"MES고객명\">두원</Col><Col id=\"고객ID\">10089</Col><Col id=\"사업자번호\">134-86-62297</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">15</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">하성대</Col><Col id=\"주소\">창원시  마산회원구 자유무역3길 150(양덕동)</Col><Col id=\"MES고객명\">한국성전</Col><Col id=\"고객ID\">1009</Col><Col id=\"사업자번호\">608-81-05924</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">16</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\">031-667-4745</Col><Col id=\"전화번호\">031-660-9200</Col><Col id=\"대표자명\">최대광</Col><Col id=\"주소\">경기도 평택시 진위면 가곡리 338-6</Col><Col id=\"MES고객명\">동양잉크</Col><Col id=\"고객ID\">10090</Col><Col id=\"사업자번호\">125-81-04075</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">김승영</Col><Col id=\"주소\">경기도 용인시 처인구 남사면 완장천로 118-22</Col><Col id=\"MES고객명\">아이디에스</Col><Col id=\"고객ID\">1010</Col><Col id=\"사업자번호\">621-81-33781</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\">031-498-5400</Col><Col id=\"대표자명\">김종월</Col><Col id=\"주소\">경기 안산 단원 신길 1058-4</Col><Col id=\"MES고객명\">오성플렉스</Col><Col id=\"고객ID\">10108</Col><Col id=\"사업자번호\">134-86-68364</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">정제승</Col><Col id=\"주소\">경기 시흥 정왕 2101-14 시화공단 3마 514호</Col><Col id=\"MES고객명\">푸른산업</Col><Col id=\"고객ID\">10109</Col><Col id=\"사업자번호\">140-81-48669</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">20</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">최광훈</Col><Col id=\"주소\">경기 용인시 처인구 남사면 경기동로 101</Col><Col id=\"MES고객명\">엠디플렉스</Col><Col id=\"고객ID\">1011</Col><Col id=\"사업자번호\">134-86-04787</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">21</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">백영현</Col><Col id=\"주소\">경기 평택시 청북면 현곡산단로93번길 6(현곡산업단지내 7블럭)</Col><Col id=\"MES고객명\">씨유테크</Col><Col id=\"고객ID\">1012</Col><Col id=\"사업자번호\">125-81-54366</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">이광구</Col><Col id=\"주소\">경기도 안산시 단원구 성곡동 714 시화공단 4마701호</Col><Col id=\"MES고객명\">트레이스(신규)</Col><Col id=\"고객ID\">10128</Col><Col id=\"사업자번호\">220-81-18442</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">강창귀</Col><Col id=\"주소\">경북 구미시 임수동 280</Col><Col id=\"MES고객명\">한국트로닉스</Col><Col id=\"고객ID\">1013</Col><Col id=\"사업자번호\">513-81-08185</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">강창귀</Col><Col id=\"주소\">충남 천안시 서북구 입장면 양대리118-1</Col><Col id=\"MES고객명\">한국트로닉스-천안</Col><Col id=\"고객ID\">1014</Col><Col id=\"사업자번호\">312-85-26953</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">강창귀</Col><Col id=\"주소\">충청남도 천안시 서북구 입장면 위례성로 1801</Col><Col id=\"MES고객명\">한국컴퓨터</Col><Col id=\"고객ID\">10148</Col><Col id=\"사업자번호\">312-85-26953</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">심상룡</Col><Col id=\"주소\">경기 안산 단원 원시 730-6 4블럭 7롯트</Col><Col id=\"MES고객명\">엘아이테크</Col><Col id=\"고객ID\">10149</Col><Col id=\"사업자번호\">134-86-52412</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">이윤우</Col><Col id=\"주소\">경기 용인시 기흥읍 농서리 24</Col><Col id=\"MES고객명\">삼성전자-기흥</Col><Col id=\"고객ID\">1015</Col><Col id=\"사업자번호\">135-85-00360</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">황인섭,마사로시</Col><Col id=\"주소\">경기 수원시 영통구 매탄동 416</Col><Col id=\"MES고객명\">도시바삼성</Col><Col id=\"고객ID\">1016</Col><Col id=\"사업자번호\">124-86-17441</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">최혜원</Col><Col id=\"주소\">경기 평택 서탄면 금암2길 48-5</Col><Col id=\"MES고객명\">제성</Col><Col id=\"고객ID\">10168</Col><Col id=\"사업자번호\">134-24-98083</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">이윤우</Col><Col id=\"주소\">충남 아산시 배방면 북수리 산74</Col><Col id=\"MES고객명\">삼성전자-온양</Col><Col id=\"고객ID\">1017</Col><Col id=\"사업자번호\">312-85-05185</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">김기순</Col><Col id=\"주소\">경남 창원시 마산회원구 양덕동 973-6번지</Col><Col id=\"MES고객명\">노키아티엠씨</Col><Col id=\"고객ID\">1018</Col><Col id=\"사업자번호\">608-81-07219</Col><Col id=\"SiteID\">IFC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","20","25","280","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("열면서 데이터 전달");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","20","211",null,"319","214",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"고객ID\"/><Cell col=\"4\" text=\"MES고객명\"/><Cell col=\"5\" text=\"Site별고객명\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"대표자명\"/><Cell col=\"9\" text=\"전화번호\"/><Cell col=\"10\" text=\"Fax번호\"/><Cell col=\"11\" text=\"납품처\"/><Cell col=\"12\" text=\"매출처\"/><Cell col=\"13\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"14\" text=\"생성자\"/><Cell col=\"15\" text=\"생성일\"/><Cell col=\"16\" text=\"수정자\"/><Cell col=\"17\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:사업자번호\"/><Cell col=\"3\" text=\"bind:고객ID\"/><Cell col=\"4\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Site별고객명\"/><Cell col=\"6\" text=\"bind:설명\"/><Cell col=\"7\" text=\"bind:주소\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:대표자명\"/><Cell col=\"9\" text=\"bind:전화번호\"/><Cell col=\"10\" text=\"bind:Fax번호\"/><Cell col=\"11\" text=\"bind:납품처\"/><Cell col=\"12\" text=\"bind:매출처\"/><Cell col=\"13\" text=\"bind:유효상태\"/><Cell col=\"14\" text=\"bind:생성자\"/><Cell col=\"15\" text=\"bind:생성일\"/><Cell col=\"16\" text=\"bind:수정자\"/><Cell col=\"17\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","320","26","200","169",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("자식놈에게 줄꺼라고 이거 뿐이다.");
            obj.set_wordWrap("char");
            obj.set_font(" ");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","610","26","200","169",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("자식이 준것");
            obj.set_wordWrap("char");
            obj.set_font(" ");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","20","88","280","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("열고 나서 버턴으로 전달");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","20","145","130","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("send");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("template02_master.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 화면간 데이터 전송 샘플
         * 업무명 		:
         * 파일명 		:
         * 작성자 		: quristyle
         * 작성일 		: 2015.03.18
         *
         * 설  명		: 확장 가능한 화면간 데이터 전송.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.18	quristyle   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function(obj, e){
          //this.nfn_formInit(obj);...... 샘플이니깐 안항.
        }


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/


        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        // 자식한테 데이터 전달.
        this.sendDetailData = function(){
            // 전달 하고자 하는 object 내맘대로정하면됨.
            var oArgs = this.sendDataMaker();
            // 자식한테 만들어 둔 함수나 변수 사용 가능.
            this.gfn_getDetail().fn_anyWhere(oArgs); // fn_anyWhere 는 자식 안에 존재 하는 함수.
        }

        //샘플 데이터 만들기
        this.sendDataMaker = function(){
          var sendMsg = this.TextArea00.value;
          // 전달 하고자 하는 object 내맘대로정하면됨. 받는곳에서 보낸곳의 정의 를 알아서 씀.
          var oArgs = {ttl:'내맘대로정하면됨', sds:this.ds_grd00, msg:sendMsg };
          return oArgs;
        }


        // 자식이 부모를 호출할 함수.. 부모의 데이터를 제어 하거나 적절하 받아서 오면 됨.
        this.getDetailData = function(oargs){
          // alert('master getDetailData');
        	var msg = oargs.msg;
        	this.TextArea00_00.set_value(msg);
        	return "이런 문자를 돌려줌.";
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         // 자식창 열고 즉시 자식의 함수를 호출.
        this.Button00_onclick = function(obj,e){
          // url -> 파일url
          // callBack -> 자식창 열고 나서 실행될 함수
          this.gfn_showPage('template::template02_detail.xfdl', 'sendDetailData');
        };

        // 자식창 열어만 줌.
        this.Button00_onclick22222222222 = function(obj,e){
          this.gfn_showPage('template::template02_detail.xfdl', '');
        };

        // 열린 자식한테 데이터 던짐.
        this.Button00_onclick33333333 = function(obj,e){
          this.sendDetailData();
        };


        // 그리드 row change event
        this.ds_grd00_canrowposchange = function(obj,e){
          var sendMsg = this.TextArea00.value;
          var addMsg = this.ds_grd00.getColumn(e.newrow, 2);
          this.TextArea00.set_value(sendMsg+'\r\n'+addMsg);
        };

























        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.sample_application_07_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_onclick22222222222,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_onclick33333333,this);
            this.ds_grd00.addEventHandler("canrowposchange",this.ds_grd00_canrowposchange,this);
        };
        this.loadIncludeScript("template02_master.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
