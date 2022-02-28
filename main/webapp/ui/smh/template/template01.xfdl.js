(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template01");
            this.set_titletext("조회_그리드(조회기간-금일,전일,금주..)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">유효</Col></Row><Row><Col id=\"data\">유효하지 않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">고객ID</Col></Row><Row><Col id=\"data\">MES고객명</Col></Row><Row><Col id=\"data\">Site고객명</Col></Row><Row><Col id=\"data\">설명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/><Column id=\"MES고객명\" type=\"STRING\" size=\"256\"/><Column id=\"Site별고객명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"대표자명\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"Fax번호\" type=\"STRING\" size=\"256\"/><Column id=\"납품처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">양희성</Col><Col id=\"주소\">경기 부천시 오정구 내동 94,93,86-1</Col><Col id=\"MES고객명\">신양엔지니어링</Col><Col id=\"고객ID\">1000</Col><Col id=\"사업자번호\">130-81-28064</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\">86-512-62539980</Col><Col id=\"전화번호\">86-512-62538988-5622</Col><Col id=\"대표자명\">Dongwook KIM</Col><Col id=\"주소\">NO.198.Fengzhou Rd,Suzhou Industrial Park,Jiangsu Province (215123)</Col><Col id=\"MES고객명\">SESC</Col><Col id=\"고객ID\">10008</Col><Col id=\"사업자번호\"/><Col id=\"SiteID\">IFC</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">김철</Col><Col id=\"주소\">경북 칠곡군 약목면 교리 514</Col><Col id=\"MES고객명\">피앤텔-칠곡</Col><Col id=\"고객ID\">1001</Col><Col id=\"사업자번호\">513-85-09557</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">이세용</Col><Col id=\"주소\">경기 수원시 영통구 원천동 337-17</Col><Col id=\"MES고객명\">이랜텍(39417)</Col><Col id=\"고객ID\">1002</Col><Col id=\"사업자번호\">124-81-39417</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">정운태</Col><Col id=\"주소\">경기도 안산시 단원구 신길동 1061-6 605블럭 10롯트</Col><Col id=\"MES고객명\">케이비젼</Col><Col id=\"고객ID\">10028</Col><Col id=\"사업자번호\">134-86-70045</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">김종구</Col><Col id=\"주소\">경기도 화성시 삼성 1로 2길 22 (석우동)</Col><Col id=\"MES고객명\">파트론</Col><Col id=\"고객ID\">1003</Col><Col id=\"사업자번호\">124-86-05362</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">강호문</Col><Col id=\"주소\">부산 강서구 송정동 1623-2 녹산공단</Col><Col id=\"MES고객명\">삼성전기-부산</Col><Col id=\"고객ID\">1004</Col><Col id=\"사업자번호\">622-85-02824</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">손희숙</Col><Col id=\"주소\">경기도 안산시 단원구 성곡동 600-4</Col><Col id=\"MES고객명\">이레전자(지점)</Col><Col id=\"고객ID\">10048</Col><Col id=\"사업자번호\">134-85-51361</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">박봉국</Col><Col id=\"주소\">경기 화성시 봉담읍 수영리 379-6</Col><Col id=\"MES고객명\">대양코리아</Col><Col id=\"고객ID\">1005</Col><Col id=\"사업자번호\">124-86-45291</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">현만영</Col><Col id=\"주소\">서울 중구 충무로3가 60-1 극동빌딩15층</Col><Col id=\"MES고객명\">아이마켓코리아</Col><Col id=\"고객ID\">1006</Col><Col id=\"사업자번호\">104-81-58502</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">SOPHIA HUANG</Col><Col id=\"주소\">No.471,Sec.2, Pa Teh Rd.,Hu Kou 30348, Hsin Chu Hsien, Taiwan</Col><Col id=\"MES고객명\">SIMPLO</Col><Col id=\"고객ID\">10068</Col><Col id=\"사업자번호\"/><Col id=\"SiteID\">IFC</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">장동훈</Col><Col id=\"주소\">서울 강남구 도곡동 420-14</Col><Col id=\"MES고객명\">이프러스</Col><Col id=\"고객ID\">1007</Col><Col id=\"사업자번호\">213-86-30948</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">장성돈</Col><Col id=\"주소\">인천 부평구 청천동 420-5</Col><Col id=\"MES고객명\">한국요꼬가와일</Col><Col id=\"고객ID\">1008</Col><Col id=\"사업자번호\">122-81-71556</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\">886-3-396-8899</Col><Col id=\"대표자명\">Kuen-Yao Lee</Col><Col id=\"주소\">189, Hwaya Rd. 2, Kueishan, Taoyuan 33383, Taiwan, R.O.C.</Col><Col id=\"MES고객명\">AU Optronics</Col><Col id=\"고객ID\">10088</Col><Col id=\"사업자번호\"/><Col id=\"SiteID\">IFC</Col><Col id=\"No\">14</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\">031-491-3765</Col><Col id=\"전화번호\">031-495-7523</Col><Col id=\"대표자명\">원종철</Col><Col id=\"주소\">경기도 안산시 단원구 성곡동 641-3 나동 반월공단 604블럭 29로트</Col><Col id=\"MES고객명\">두원</Col><Col id=\"고객ID\">10089</Col><Col id=\"사업자번호\">134-86-62297</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">15</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">하성대</Col><Col id=\"주소\">창원시  마산회원구 자유무역3길 150(양덕동)</Col><Col id=\"MES고객명\">한국성전</Col><Col id=\"고객ID\">1009</Col><Col id=\"사업자번호\">608-81-05924</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">16</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\">031-667-4745</Col><Col id=\"전화번호\">031-660-9200</Col><Col id=\"대표자명\">최대광</Col><Col id=\"주소\">경기도 평택시 진위면 가곡리 338-6</Col><Col id=\"MES고객명\">동양잉크</Col><Col id=\"고객ID\">10090</Col><Col id=\"사업자번호\">125-81-04075</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">김승영</Col><Col id=\"주소\">경기도 용인시 처인구 남사면 완장천로 118-22</Col><Col id=\"MES고객명\">아이디에스</Col><Col id=\"고객ID\">1010</Col><Col id=\"사업자번호\">621-81-33781</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\">031-498-5400</Col><Col id=\"대표자명\">김종월</Col><Col id=\"주소\">경기 안산 단원 신길 1058-4</Col><Col id=\"MES고객명\">오성플렉스</Col><Col id=\"고객ID\">10108</Col><Col id=\"사업자번호\">134-86-68364</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"전화번호\"/><Col id=\"대표자명\">정제승</Col><Col id=\"주소\">경기 시흥 정왕 2101-14 시화공단 3마 514호</Col><Col id=\"MES고객명\">푸른산업</Col><Col id=\"고객ID\">10109</Col><Col id=\"사업자번호\">140-81-48669</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">20</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">최광훈</Col><Col id=\"주소\">경기 용인시 처인구 남사면 경기동로 101</Col><Col id=\"MES고객명\">엠디플렉스</Col><Col id=\"고객ID\">1011</Col><Col id=\"사업자번호\">134-86-04787</Col><Col id=\"SiteID\">IFC</Col><Col id=\"No\">21</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">백영현</Col><Col id=\"주소\">경기 평택시 청북면 현곡산단로93번길 6(현곡산업단지내 7블럭)</Col><Col id=\"MES고객명\">씨유테크</Col><Col id=\"고객ID\">1012</Col><Col id=\"사업자번호\">125-81-54366</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">이광구</Col><Col id=\"주소\">경기도 안산시 단원구 성곡동 714 시화공단 4마701호</Col><Col id=\"MES고객명\">트레이스(신규)</Col><Col id=\"고객ID\">10128</Col><Col id=\"사업자번호\">220-81-18442</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">강창귀</Col><Col id=\"주소\">경북 구미시 임수동 280</Col><Col id=\"MES고객명\">한국트로닉스</Col><Col id=\"고객ID\">1013</Col><Col id=\"사업자번호\">513-81-08185</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">강창귀</Col><Col id=\"주소\">충남 천안시 서북구 입장면 양대리118-1</Col><Col id=\"MES고객명\">한국트로닉스-천안</Col><Col id=\"고객ID\">1014</Col><Col id=\"사업자번호\">312-85-26953</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">강창귀</Col><Col id=\"주소\">충청남도 천안시 서북구 입장면 위례성로 1801</Col><Col id=\"MES고객명\">한국컴퓨터</Col><Col id=\"고객ID\">10148</Col><Col id=\"사업자번호\">312-85-26953</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">심상룡</Col><Col id=\"주소\">경기 안산 단원 원시 730-6 4블럭 7롯트</Col><Col id=\"MES고객명\">엘아이테크</Col><Col id=\"고객ID\">10149</Col><Col id=\"사업자번호\">134-86-52412</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">이윤우</Col><Col id=\"주소\">경기 용인시 기흥읍 농서리 24</Col><Col id=\"MES고객명\">삼성전자-기흥</Col><Col id=\"고객ID\">1015</Col><Col id=\"사업자번호\">135-85-00360</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">황인섭,마사로시</Col><Col id=\"주소\">경기 수원시 영통구 매탄동 416</Col><Col id=\"MES고객명\">도시바삼성</Col><Col id=\"고객ID\">1016</Col><Col id=\"사업자번호\">124-86-17441</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">최혜원</Col><Col id=\"주소\">경기 평택 서탄면 금암2길 48-5</Col><Col id=\"MES고객명\">제성</Col><Col id=\"고객ID\">10168</Col><Col id=\"사업자번호\">134-24-98083</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">이윤우</Col><Col id=\"주소\">충남 아산시 배방면 북수리 산74</Col><Col id=\"MES고객명\">삼성전자-온양</Col><Col id=\"고객ID\">1017</Col><Col id=\"사업자번호\">312-85-05185</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">김기순</Col><Col id=\"주소\">경남 창원시 마산회원구 양덕동 973-6번지</Col><Col id=\"MES고객명\">노키아티엠씨</Col><Col id=\"고객ID\">1018</Col><Col id=\"사업자번호\">608-81-07219</Col><Col id=\"SiteID\">IFC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_work","0","82",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","6",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("고객리스트  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","43",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"고객ID\"/><Cell col=\"4\" text=\"MES고객명\"/><Cell col=\"5\" text=\"Site별고객명\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"대표자명\"/><Cell col=\"9\" text=\"전화번호\"/><Cell col=\"10\" text=\"Fax번호\"/><Cell col=\"11\" text=\"납품처\"/><Cell col=\"12\" text=\"매출처\"/><Cell col=\"13\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"14\" text=\"생성자\"/><Cell col=\"15\" text=\"생성일\"/><Cell col=\"16\" text=\"수정자\"/><Cell col=\"17\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:사업자번호\"/><Cell col=\"3\" text=\"bind:고객ID\"/><Cell col=\"4\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Site별고객명\"/><Cell col=\"6\" text=\"bind:설명\"/><Cell col=\"7\" text=\"bind:주소\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:대표자명\"/><Cell col=\"9\" text=\"bind:전화번호\"/><Cell col=\"10\" text=\"bind:Fax번호\"/><Cell col=\"11\" text=\"bind:납품처\"/><Cell col=\"12\" text=\"bind:매출처\"/><Cell col=\"13\" text=\"bind:유효상태\"/><Cell col=\"14\" text=\"bind:생성자\"/><Cell col=\"15\" text=\"bind:생성일\"/><Cell col=\"16\" text=\"bind:수정자\"/><Cell col=\"17\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add01",null,"18","60","20","174",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del01",null,"18","60","20","109",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDown",null,"19","90","20","240",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_DR_GridDownload");
            obj.set_tooltiptext("FILEDOWNLOAD");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"17","105","21","335",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_DR_GridDownload");
            obj.set_tooltiptext("파일다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload00",null,"18","105","21","443",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_DR_GridDownload");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"20","60","20","8",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("복사");
            obj.set_cssclass("btn_DR_GridCopy");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","21","139",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","21","74",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"8","60","21","8",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_search","0.00%","36",null,"43","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lookupType","88","10","170","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","22","10","62","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("코드그룹");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("4D11357CF39E475E94177AF8B379F814");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_description","349","10","173","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","278","10","63","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("코드그룹명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("CODECLASSNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.87%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","7.03%","1",null,null,"88.68%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","27.03%","0",null,"43","67.69%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","36.04%","-1",null,null,"59.67%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0.00%","79",null,"15","90.54%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0.00%","115",null,"10","90.54%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_lookupType","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_description","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("template01.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 고도화
         * 업무명 		: 업무화면 이름...
         * 파일명 		: cmsa00300.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2015.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2015.03.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e){

         alert('runtime test');
        	//this.nfn_formInit(obj);
        	//this.tab_search_Tabpage1_cbo_period_onitemchanged();
        };


        this.fn_search = function(obj,e)
        {
        trace('debug test');


        trace('next');

        	alert('real time append script');

        trace('next2222');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_work.form.btn_add01.addEventHandler("onclick",this.btn_add01_onclick,this);
            this.div_work.form.btn_del01.addEventHandler("onclick",this.btn_del01_onclick,this);
            this.div_work.form.btn_xlDown.addEventHandler("onclick",this.btn_xlDown_onclick,this);
            this.div_work.form.btn_excelDownload.addEventHandler("onclick",this.fn_excelDown,this);
            this.div_work.form.btn_excelDownload00.addEventHandler("onclick",this.fn_excelDown,this);
            this.div_work.form.btn_copy.addEventHandler("onclick",this.btn_copy_onclick,this);
            this.div_header.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_header.form.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
