(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template02");
            this.set_titletext("조회조건+(그리드T+디테일B)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"접수일\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"고객사버전\" type=\"STRING\" size=\"256\"/><Column id=\"제품Type\" type=\"STRING\" size=\"256\"/><Column id=\"층수\" type=\"STRING\" size=\"256\"/><Column id=\"작업구분\" type=\"STRING\" size=\"256\"/><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"모델명\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"제품등급\" type=\"STRING\" size=\"256\"/><Column id=\"사양작업\" type=\"STRING\" size=\"256\"/><Column id=\"CAM작업\" type=\"STRING\" size=\"256\"/><Column id=\"Holding\" type=\"STRING\" size=\"256\"/><Column id=\"CAM담당자\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"합수\" type=\"STRING\" size=\"256\"/><Column id=\"산출수\" type=\"STRING\" size=\"256\"/><Column id=\"표면도급타입1\" type=\"STRING\" size=\"256\"/><Column id=\"표면도급타입2\" type=\"STRING\" size=\"256\"/><Column id=\"승인일\" type=\"STRING\" size=\"256\"/><Column id=\"관리번호\" type=\"STRING\" size=\"256\"/><Column id=\"사양담당자\" type=\"STRING\" size=\"256\"/><Column id=\"영업담당자\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"접수일\">2019-12-05</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">A1</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">AMB687VX01 CAP(2L)</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">Y</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019120500001</Col><Col id=\"사양담당자\">권수진</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">이동우</Col><Col id=\"수정일\">2020-06-09 12:23:24</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"접수일\">2019-12-06</Col><Col id=\"고객명\">팬택-김포</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">ABC 모델</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\"/><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019120600001</Col><Col id=\"사양담당자\"/><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"접수일\">2019-12-06</Col><Col id=\"고객명\">LGD</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">GOVERNANCE 변경</Col><Col id=\"품목코드\">1024718A7</Col><Col id=\"Rev\">FA3</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">강호윤</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019120600002</Col><Col id=\"사양담당자\">박윤신</Col><Col id=\"영업담당자\">강유라</Col><Col id=\"특이사항\">어랏 사라지네~!</Col><Col id=\"수정자\">이상진</Col><Col id=\"수정일\">2019-12-06 20:06:02</Col></Row><Row><Col id=\"No\">4</Col><Col id=\"접수일\">2019-12-09</Col><Col id=\"고객명\">한국가가전자</Col><Col id=\"고객사버전\">1A</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\"/><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">GAGA</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\"/><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019120900001</Col><Col id=\"사양담당자\">강호윤</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">임용희</Col><Col id=\"수정일\">2021-01-08 14:55:15</Col></Row><Row><Col id=\"No\">5</Col><Col id=\"접수일\">2019-12-10</Col><Col id=\"고객명\">산신전기</Col><Col id=\"고객사버전\">A1</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">JWS-MES TF</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">이용희</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121000001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">이상영</Col><Col id=\"특이사항\">원식이 모델</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"접수일\">2019-12-10</Col><Col id=\"고객명\">SIMPLO</Col><Col id=\"고객사버전\">A661-11</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">JWS-MES TF(2L)</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">구오형</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121000002</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">김용조</Col><Col id=\"특이사항\">1모델</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"접수일\">2019-12-11</Col><Col id=\"고객명\">삼성전기-부산</Col><Col id=\"고객사버전\">REV01</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">동일</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">AMV654 MAIN(6L)</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">김경웅</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121100001</Col><Col id=\"사양담당자\">김용조</Col><Col id=\"영업담당자\">김현수</Col><Col id=\"특이사항\">동일 진행 121212121212121212123849058908958695891238902138901283902813902819038219083902183918309182903890</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"접수일\">2019-12-11</Col><Col id=\"고객명\">대양코리아</Col><Col id=\"고객사버전\">A2</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">TEST 변경샘플</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">신상철</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121100002</Col><Col id=\"사양담당자\">류시윤</Col><Col id=\"영업담당자\">최별</Col><Col id=\"특이사항\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">9</Col><Col id=\"접수일\">2019-12-11</Col><Col id=\"고객명\">SAMSUNG JAPAN</Col><Col id=\"고객사버전\">6637</Col><Col id=\"제품Type\">DS</Col><Col id=\"층수\">2L</Col><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">Test</Col><Col id=\"모델명\">TEST 신규 TEST(17L)</Col><Col id=\"품목코드\">1025256D6</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB675TG01 DIGITIZER(2L)-IFV직납</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">김기수</Col><Col id=\"PNLSIZE\">500 X 340</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">70</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121100003</Col><Col id=\"사양담당자\">김호철</Col><Col id=\"영업담당자\">이충헌</Col><Col id=\"특이사항\"/><Col id=\"수정자\">임용희</Col><Col id=\"수정일\">2019-12-27 18:21:04</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"접수일\">2019-12-11</Col><Col id=\"고객명\">피앤텔-칠곡</Col><Col id=\"고객사버전\">23424</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">Test</Col><Col id=\"모델명\">TEST 변경 TEST(9L)</Col><Col id=\"품목코드\">1025256G2</Col><Col id=\"Rev\">FA2</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">김정호</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121100004</Col><Col id=\"사양담당자\">허준</Col><Col id=\"영업담당자\">이진형</Col><Col id=\"특이사항\"/><Col id=\"수정자\">임용희</Col><Col id=\"수정일\">2019-12-12 14:56:38</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"접수일\">2019-12-11</Col><Col id=\"고객명\">SunnyOptical(AM)</Col><Col id=\"고객사버전\">601-00</Col><Col id=\"제품Type\">MT</Col><Col id=\"층수\">4L</Col><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">F64S01A RF CAMERA(4L)</Col><Col id=\"품목코드\">1042248A1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">A40N01R RF CAMERA(4L)-M2/3L-SPL</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">Y</Col><Col id=\"CAM담당자\">문명진</Col><Col id=\"PNLSIZE\">500 X 400</Col><Col id=\"합수\">448</Col><Col id=\"산출수\">2240</Col><Col id=\"표면도급타입1\">ENEPIG</Col><Col id=\"표면도급타입2\">ENEPIG</Col><Col id=\"승인일\">2019-12-16 11:29:38</Col><Col id=\"관리번호\">NR2019121100005</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\">신규 모델 진행</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"접수일\">2019-12-16</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">601-00</Col><Col id=\"제품Type\">MT</Col><Col id=\"층수\">4L</Col><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">S50N01A RF CAMERA(4L)</Col><Col id=\"품목코드\">1042226A1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">S50N01A RF CAMERA(4L)-M2/3L-SPL</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">김용조</Col><Col id=\"PNLSIZE\">500 X 385</Col><Col id=\"합수\">192</Col><Col id=\"산출수\">990</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2019-12-27 13:22:15</Col><Col id=\"관리번호\">NR2019121600001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">김용조</Col><Col id=\"특이사항\">P40 중요모델</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"접수일\">2019-12-16</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">FA1</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">F64S01A RF CAMERA(4L)</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">김기수</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019121600002</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">유청희</Col><Col id=\"특이사항\">라라라~</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2019-12-18 10:26:07</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"접수일\">2019-12-27</Col><Col id=\"고객명\">파트론</Col><Col id=\"고객사버전\">A1</Col><Col id=\"제품Type\">MT</Col><Col id=\"층수\">6L</Col><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">TEST_12345</Col><Col id=\"품목코드\">1060733B1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">C2 GW2211L AMS RF(6L)-M3/4L</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">반려</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">구오형</Col><Col id=\"PNLSIZE\">500 X 395</Col><Col id=\"합수\">160</Col><Col id=\"산출수\">806</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-01-04 10:24:51</Col><Col id=\"관리번호\">NR2019122700001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">노석안</Col><Col id=\"특이사항\">첫 TEST임</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-01-13 09:55:35</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"접수일\">2019-12-31</Col><Col id=\"고객명\">한국요꼬가와일</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">TEST 모델</Col><Col id=\"품목코드\">1060808A4</Col><Col id=\"Rev\">FA2</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">이동우</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2019123100001</Col><Col id=\"사양담당자\">권수진</Col><Col id=\"영업담당자\">강기원</Col><Col id=\"특이사항\"/><Col id=\"수정자\">이동우</Col><Col id=\"수정일\">2020-06-09 14:29:38</Col></Row><Row><Col id=\"No\">16</Col><Col id=\"접수일\">2020-01-08</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">601-02</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\"/><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">A64S01A RF CAMERA(4L)-M2/3L-SPL</Col><Col id=\"품목코드\">10402199A1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\">작업중</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">박성수</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020010800001</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">전태선</Col><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"No\">17</Col><Col id=\"접수일\">2020-01-09</Col><Col id=\"고객명\">O-film</Col><Col id=\"고객사버전\">A0</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">O1829 RF CAMERA(6L)-M3/4L</Col><Col id=\"품목코드\">10600785A2</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">허준</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-01-15 09:17:15</Col><Col id=\"관리번호\">NR2020010900001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">노석안</Col><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"No\">18</Col><Col id=\"접수일\">2020-01-13</Col><Col id=\"고객명\">삼성SDI-부산</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">AMB609TC01 MAIN(4L)-M2/3L-IFV직납</Col><Col id=\"품목코드\">10402115B2</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020011300001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"No\">19</Col><Col id=\"접수일\">2020-01-15</Col><Col id=\"고객명\">아이마켓코리아</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">갤럭시S20</Col><Col id=\"품목코드\">1042248A2</Col><Col id=\"Rev\">FA4</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020011500001</Col><Col id=\"사양담당자\"/><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"No\">20</Col><Col id=\"접수일\">2020-01-15</Col><Col id=\"고객명\">O-film</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">OJF1580 RF CAMERA(4L)-M2/3L</Col><Col id=\"품목코드\">10402116B3</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020011500002</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2021-01-04 15:38:32</Col></Row><Row><Col id=\"No\">21</Col><Col id=\"접수일\">2020-01-16</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">601-00</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">Test</Col><Col id=\"모델명\">S16N10A RF CAMERA(6L)-M3/4L</Col><Col id=\"품목코드\">10600790A3</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020011600001</Col><Col id=\"사양담당자\"/><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"접수일\">2020-01-21</Col><Col id=\"고객명\">삼성SDI-부산</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\">MT</Col><Col id=\"층수\">4L</Col><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">667</Col><Col id=\"품목코드\">1042198G1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB667TY01 MAIN(4L)-M2/3L-IFV직납</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\">500 X 425</Col><Col id=\"합수\">48</Col><Col id=\"산출수\">224</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020012100001</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-24 13:34:32</Col></Row><Row><Col id=\"접수일\">2020-01-22</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">601-02</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">A16E58A RF CAMERA(5L)</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020012200001</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-01-30 14:29:29</Col></Row><Row><Col id=\"접수일\">2020-01-30</Col><Col id=\"고객명\">WUHAN CHINA STAR OPTOELECTRONICS SEMICONDUCTOR DISPLAY TECHNOLOGY CO.,LTD.</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\">MT</Col><Col id=\"층수\">6L</Col><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">S2 MAIN(6L)</Col><Col id=\"품목코드\">1060798B1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">S2 MAIN(6L)-M4/5L-IFV재구매</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">노석안</Col><Col id=\"PNLSIZE\">500 X 420</Col><Col id=\"합수\">84</Col><Col id=\"산출수\">399</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-01-30 14:23:23</Col><Col id=\"관리번호\">NR2020013000001</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">최창선</Col><Col id=\"특이사항\">FA1 등록</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-01-30 14:23:23</Col></Row><Row><Col id=\"접수일\">2020-01-30</Col><Col id=\"고객명\">WUHAN CHINA STAR OPTOELECTRONICS SEMICONDUCTOR DISPLAY TECHNOLOGY CO.,LTD.</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">S2 MAIN(6L)</Col><Col id=\"품목코드\">1060798B1</Col><Col id=\"Rev\">FA2</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020013000002</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">노석안</Col><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"접수일\">2020-01-30</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">S40N01J </Col><Col id=\"품목코드\">10402204A4</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-01-30 14:27:42</Col><Col id=\"관리번호\">NR2020013000003</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-02-25 15:46:24</Col></Row><Row><Col id=\"접수일\">2020-02-24</Col><Col id=\"고객명\">삼성SDI-부산</Col><Col id=\"고객사버전\">601-00</Col><Col id=\"제품Type\">MT</Col><Col id=\"층수\">4L</Col><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">AMB667TY01 MAIN(4L)</Col><Col id=\"품목코드\">1042198G1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB667TY01 MAIN(4L)-M2/3L-IFV직납</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">노석안</Col><Col id=\"PNLSIZE\">500 X 425</Col><Col id=\"합수\">48</Col><Col id=\"산출수\">224</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-02-24 14:28:57</Col><Col id=\"관리번호\">NR2020022400001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">최창선</Col><Col id=\"특이사항\">FA1 신규/양산</Col><Col id=\"수정자\">임용희</Col><Col id=\"수정일\">2020-02-24 14:28:57</Col></Row><Row><Col id=\"접수일\">2020-02-26</Col><Col id=\"고객명\">삼성SDI-부산</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">675 DIGITIZER</Col><Col id=\"품목코드\">1025256G3</Col><Col id=\"Rev\">FA3</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">노석안</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-02-26 11:49:33</Col><Col id=\"관리번호\">NR2020022600001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">최창선</Col><Col id=\"특이사항\">FA1 → FA3 공순변경</Col><Col id=\"수정자\">최창선</Col><Col id=\"수정일\">2020-02-26 11:49:33</Col></Row><Row><Col id=\"접수일\">2020-02-27</Col><Col id=\"고객명\">삼성SDI-부산</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">AMB667TY01 MAIN(4L)</Col><Col id=\"품목코드\">1042198G1</Col><Col id=\"Rev\">FA4</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">노석안</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020022700001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">최창선</Col><Col id=\"특이사항\">LOT 이력 조회 용</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-03-17 11:58:08</Col></Row><Row><Col id=\"접수일\">2020-03-03</Col><Col id=\"고객명\">대양코리아</Col><Col id=\"고객사버전\">02</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">샘플</Col><Col id=\"모델명\">GV80 GENESIS(4L)-M2/3L</Col><Col id=\"품목코드\">10400002A1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">진행중</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">최창선</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020030300001</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">정원식</Col><Col id=\"특이사항\">1212</Col><Col id=\"수정자\">임용희</Col><Col id=\"수정일\">2020-05-19 15:14:02</Col></Row><Row><Col id=\"접수일\">2020-03-03</Col><Col id=\"고객명\">삼성SDI-부산</Col><Col id=\"고객사버전\">601-04</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">AMB667TY01 MAIN(4L)</Col><Col id=\"품목코드\">1042198G1</Col><Col id=\"Rev\">FA2</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">승인</Col><Col id=\"CAM작업\">완료</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">노석안</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-03-03 15:49:01</Col><Col id=\"관리번호\">NR2020030300002</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">최창선</Col><Col id=\"특이사항\">FA1 → FA2 변경양산</Col><Col id=\"수정자\">노석안</Col><Col id=\"수정일\">2020-03-03 15:49:01</Col></Row><Row><Col id=\"접수일\">2020-03-06</Col><Col id=\"고객명\">케이비젼</Col><Col id=\"고객사버전\"/><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\"/><Col id=\"생산구분\"/><Col id=\"모델명\">TEST1121</Col><Col id=\"품목코드\"/><Col id=\"Rev\"/><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\"/><Col id=\"Holding\"/><Col id=\"CAM담당자\"/><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020030600001</Col><Col id=\"사양담당자\"/><Col id=\"영업담당자\"/><Col id=\"특이사항\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"접수일\">2020-03-25</Col><Col id=\"고객명\">MOON</Col><Col id=\"고객사버전\">611-00</Col><Col id=\"제품Type\">MT</Col><Col id=\"층수\">4L</Col><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">611 S50N01B RF CAMERA(4L)</Col><Col id=\"품목코드\">1042246A7</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">611 S50N01B RF CAMERA(4L)-M2/3L</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">반려</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">전태선</Col><Col id=\"PNLSIZE\">500 X 385</Col><Col id=\"합수\">240</Col><Col id=\"산출수\">1238</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020032500001</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">박성수</Col><Col id=\"특이사항\">A1</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-03-31 10:00:25</Col></Row><Row><Col id=\"접수일\">2020-05-27</Col><Col id=\"고객명\">SDC</Col><Col id=\"고객사버전\">4.5</Col><Col id=\"제품Type\">DS</Col><Col id=\"층수\">2L</Col><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">AMB687VX01 DIGITIZER(2L)</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"제품등급\">B</Col><Col id=\"사양작업\">투입</Col><Col id=\"CAM작업\"/><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">노석안</Col><Col id=\"PNLSIZE\">500 X 350</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\">2020-05-27 11:16:01</Col><Col id=\"관리번호\">NR2020052700001</Col><Col id=\"사양담당자\">정원식</Col><Col id=\"영업담당자\">최창선</Col><Col id=\"특이사항\">단위 TEST 모델 등록 20.05.27</Col><Col id=\"수정자\">정원식</Col><Col id=\"수정일\">2020-05-27 14:07:34</Col></Row><Row><Col id=\"접수일\">2020-05-27</Col><Col id=\"고객명\">SunnyOptical</Col><Col id=\"고객사버전\">0.1</Col><Col id=\"제품Type\"/><Col id=\"층수\"/><Col id=\"작업구분\">신규</Col><Col id=\"생산구분\">양산</Col><Col id=\"모델명\">TEST-LYH-20200527-01-04</Col><Col id=\"품목코드\">10400009A1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\"/><Col id=\"제품등급\"/><Col id=\"사양작업\">접수</Col><Col id=\"CAM작업\">접수</Col><Col id=\"Holding\">N</Col><Col id=\"CAM담당자\">김용병</Col><Col id=\"PNLSIZE\"/><Col id=\"합수\"/><Col id=\"산출수\"/><Col id=\"표면도급타입1\"/><Col id=\"표면도급타입2\"/><Col id=\"승인일\"/><Col id=\"관리번호\">NR2020052700003</Col><Col id=\"사양담당자\">임용희</Col><Col id=\"영업담당자\">강기원</Col><Col id=\"특이사항\">TEST1</Col><Col id=\"수정자\">임용희</Col><Col id=\"수정일\">2020-05-27 13:48:29</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">금일</Col></Row><Row><Col id=\"data\">전일</Col></Row><Row><Col id=\"data\">금주</Col></Row><Row><Col id=\"data\">전주</Col></Row><Row><Col id=\"data\">금월</Col></Row><Row><Col id=\"data\">사용자정의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">변경</Col></Row><Row><Col id=\"data\">신규</Col></Row><Row><Col id=\"data\">동일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb03", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">양산</Col></Row><Row><Col id=\"data\">샘플</Col></Row><Row><Col id=\"data\">시양산</Col></Row><Row><Col id=\"data\">Test</Col></Row></Rows>");
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

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_00","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb03");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","235","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("CAM 상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label09","0","260","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label10","0","285","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","160",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"160","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","185",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("24");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_01","108","210","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00","108","235","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("26");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb03");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_03","108","260",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("27");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01_00",null,"260","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_04","108","285",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("29");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01_00_00",null,"285","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","325","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","325","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("33");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"305","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","331","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("35");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","125","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("검색결과  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","173",null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"접수일\"/><Cell col=\"3\" text=\"고객명\"/><Cell col=\"4\" text=\"고객사버전\"/><Cell col=\"5\" text=\"제품Type\"/><Cell col=\"6\" text=\"층수\"/><Cell col=\"7\" text=\"작업구분\"/><Cell col=\"8\" text=\"생산구분\"/><Cell col=\"9\" text=\"모델명\"/><Cell col=\"10\" text=\"품목코드\"/><Cell col=\"11\" text=\"Rev\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"제품등급\"/><Cell col=\"14\" text=\"사양작업\"/><Cell col=\"15\" text=\"CAM작업\"/><Cell col=\"16\" text=\"Holding\"/><Cell col=\"17\" text=\"CAM담당자\"/><Cell col=\"18\" text=\"PNLSIZE\"/><Cell col=\"19\" text=\"합수\"/><Cell col=\"20\" text=\"산출수\"/><Cell col=\"21\" text=\"표면도급타입1\"/><Cell col=\"22\" text=\"표면도급타입2\"/><Cell col=\"23\" text=\"승인일\"/><Cell col=\"24\" text=\"관리번호\"/><Cell col=\"25\" text=\"사양담당자\"/><Cell col=\"26\" text=\"영업담당자\"/><Cell col=\"27\" text=\"특이사항\"/><Cell col=\"28\" text=\"수정자\"/><Cell col=\"29\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:접수일\"/><Cell col=\"3\" text=\"bind:고객명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:고객사버전\"/><Cell col=\"5\" text=\"bind:제품Type\"/><Cell col=\"6\" text=\"bind:층수\"/><Cell col=\"7\" text=\"bind:작업구분\"/><Cell col=\"8\" text=\"bind:생산구분\"/><Cell col=\"9\" text=\"bind:모델명\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:품목코드\"/><Cell col=\"11\" text=\"bind:Rev\"/><Cell col=\"12\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:제품등급\"/><Cell col=\"14\" text=\"bind:사양작업\"/><Cell col=\"15\" text=\"bind:CAM작업\"/><Cell col=\"16\" text=\"bind:Holding\"/><Cell col=\"17\" text=\"bind:CAM담당자\"/><Cell col=\"18\" text=\"bind:PNLSIZE\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:합수\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:산출수\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:표면도급타입1\"/><Cell col=\"22\" text=\"bind:표면도급타입2\"/><Cell col=\"23\" text=\"bind:승인일\"/><Cell col=\"24\" text=\"bind:관리번호\"/><Cell col=\"25\" text=\"bind:사양담당자\"/><Cell col=\"26\" text=\"bind:영업담당자\"/><Cell col=\"27\" text=\"bind:특이사항\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:수정자\"/><Cell col=\"29\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"139","0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("label07","60.10%","30","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("27");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label12","60.10%","55","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("CAM당당자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("CAM당당자");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label00","0","5","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label04","0","30","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label09","0","55","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("사양 담당자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("사양 담당자");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label10","19.79%","55","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("영업 담당자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("영업 담당자");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01","19.79%","5","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label06","39.83%","30","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label11","39.83%","55","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("25");
            obj.set_text("Holding");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label05","19.79%","30","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("모델명");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label08","80.13%","30","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("고객사 버전");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("고객사 버전");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label13","80.13%","55","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("30");
            obj.set_text("CAM작업");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label14","0","80","9.54%","52",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","label04:5","30",null,"20","label05:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("5");
            obj.set_value("삼성전자무선구민2공장");
            obj.set_text("삼성전자무선구민2공장");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","label05:5","30",null,"20","label06:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("6");
            obj.set_value("TEST-LYH-20200527-01-04");
            obj.set_text("TEST-LYH-20200527-01-04");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","label06:5","30",null,"20","label07:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("7");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_04","label08:5","30",null,"20","5",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("9");
            obj.set_value("0.1");
            obj.set_text("0.1");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"55","22","20","label10:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_05","label09:5","55",null,"20","btn_search01:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("10");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"55","22","20","label11:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_06","label10:5","55",null,"20","btn_search02:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("12");
            obj.set_value("강기원");
            obj.set_text("강기원");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"55","22","20","label13:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_08","label12:5","55",null,"20","btn_search03:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("15");
            obj.set_tooltiptext("김용병");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_00","label14:5","80",null,"52","5",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("18");
            obj.set_value("가\n나\n다");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02","39.83%","5","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("32");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03","80.13%","5","9.54%","20",null,null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("해외이관");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label00:5","5",null,"20","label01:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("20200527");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"5","22","20","label02:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","label01:7","5",null,"20","btn_search00:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("1");
            obj.set_value("10400009A1");
            obj.set_cssclass("point");
            obj.set_text("10400009A1");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_10","label02:5","5",null,"20","label03:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label03:5","5",null,"20","5",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("N/A");
            obj.set_value("");
            obj.set_index("-1");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00_00","label13:5","55",null,"20","5",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("접수");
            obj.set_value("");
            obj.set_index("-1");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00_00_00","label07:5","30",null,"20","label08:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("-1");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label11:5","55",null,"20","label12:0",null,null,null,null,null,this.div_00.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("N");
            obj.set_value("");
            obj.set_index("-1");
            this.div_00.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,"66","34",null,"139",null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("모델등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"6","29","24","btnExcelUp:0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_00.addChild(obj.name, obj);

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
        this.loadIncludeScript("template02_old.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
