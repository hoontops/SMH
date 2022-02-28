(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup_02");
            this.set_titletext("공정ID");
            if (Form == this.constructor)
            {
                this._setFormPosition(854,683);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"공정ID\">1010201</Col><Col id=\"공정명\">내층 BASE 재단</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"공정ID\">1010401</Col><Col id=\"공정명\">외층 BASE 재단</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"공정ID\">1012001</Col><Col id=\"공정명\">BASE(부자재) 재단</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"공정ID\">1012002</Col><Col id=\"공정명\">C/L 재단</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"공정ID\">1012003</Col><Col id=\"공정명\">B/S 재단</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"공정ID\">1012004</Col><Col id=\"공정명\">P/P 재단</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"공정ID\">1012005</Col><Col id=\"공정명\">FR-4 재단</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"공정ID\">1012006</Col><Col id=\"공정명\">EPOXY 재단</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"공정ID\">1012007</Col><Col id=\"공정명\">EPOXY 재단 합지</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"공정ID\">1012008</Col><Col id=\"공정명\">SLITTING(부자재)</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"공정ID\">1012009</Col><Col id=\"공정명\">P/I 재단</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"공정ID\">1012010</Col><Col id=\"공정명\">SUS 재단</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"공정ID\">1012011</Col><Col id=\"공정명\">AL 재단</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"공정ID\">1012012</Col><Col id=\"공정명\">C/L 재단-1</Col><Col id=\"No\">14</Col></Row><Row><Col id=\"공정ID\">1012013</Col><Col id=\"공정명\">C/L 재단-2</Col><Col id=\"No\">15</Col></Row><Row><Col id=\"공정ID\">1012014</Col><Col id=\"공정명\">EPOXY 재단-1</Col><Col id=\"No\">16</Col></Row><Row><Col id=\"공정ID\">1012015</Col><Col id=\"공정명\">EPOXY 재단-2</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"공정ID\">1020101</Col><Col id=\"공정명\">ROLL CUTTING</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"공정ID\">1024101</Col><Col id=\"공정명\">RTR SLITTING</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"공정ID\">1510101</Col><Col id=\"공정명\">RTR DRY FILM L/A</Col></Row><Row><Col id=\"공정ID\">1510201</Col><Col id=\"공정명\">내층 DRY FILM L/A</Col></Row><Row><Col id=\"공정ID\">1510401</Col><Col id=\"공정명\">외층 DRY FILM L/A</Col></Row><Row><Col id=\"공정ID\">1512101</Col><Col id=\"공정명\">RTR 노광</Col></Row><Row><Col id=\"공정ID\">1512102</Col><Col id=\"공정명\">RTR 노광-1</Col></Row><Row><Col id=\"공정ID\">1512103</Col><Col id=\"공정명\">RTR 노광-2</Col></Row><Row><Col id=\"공정ID\">1512104</Col><Col id=\"공정명\">RTR 노광-3</Col></Row><Row><Col id=\"공정ID\">1512201</Col><Col id=\"공정명\">내층 노광</Col></Row><Row><Col id=\"공정ID\">1512202</Col><Col id=\"공정명\">내층 노광-1</Col></Row><Row><Col id=\"공정ID\">1512203</Col><Col id=\"공정명\">내층 노광-2</Col></Row><Row><Col id=\"공정ID\">1512301</Col><Col id=\"공정명\">내층 M/T 노광</Col></Row><Row><Col id=\"공정ID\">1512302</Col><Col id=\"공정명\">내층 M/T-1_노광</Col></Row><Row><Col id=\"공정ID\">1512303</Col><Col id=\"공정명\">내층 M/T-2_노광</Col></Row><Row><Col id=\"공정ID\">1512304</Col><Col id=\"공정명\">내층 M/T-3_노광</Col></Row><Row><Col id=\"공정ID\">1512305</Col><Col id=\"공정명\">내층 M/T-4_노광</Col></Row><Row><Col id=\"공정ID\">1512306</Col><Col id=\"공정명\">내층 M/T-5_노광</Col></Row><Row><Col id=\"공정ID\">1512307</Col><Col id=\"공정명\">내층 M/T 노광-1</Col></Row><Row><Col id=\"공정ID\">1512308</Col><Col id=\"공정명\">내층 M/T 노광-2</Col></Row><Row><Col id=\"공정ID\">1512309</Col><Col id=\"공정명\">내층 M/T 노광-3</Col></Row><Row><Col id=\"공정ID\">1512310</Col><Col id=\"공정명\">내층 M/T-1_노광-1</Col></Row><Row><Col id=\"공정ID\">1512311</Col><Col id=\"공정명\">내층 M/T-1_노광-2</Col></Row><Row><Col id=\"공정ID\">1512312</Col><Col id=\"공정명\">내층 M/T-2_노광-1</Col></Row><Row><Col id=\"공정ID\">1512313</Col><Col id=\"공정명\">내층 M/T-2_노광-2</Col></Row><Row><Col id=\"공정ID\">1512314</Col><Col id=\"공정명\">내층 M/T-3_노광-1</Col></Row><Row><Col id=\"공정ID\">1512315</Col><Col id=\"공정명\">내층 M/T-3_노광-2</Col></Row><Row><Col id=\"공정ID\">1512316</Col><Col id=\"공정명\">내층 M/T-4_노광-1</Col></Row><Row><Col id=\"공정ID\">1512317</Col><Col id=\"공정명\">내층 M/T-4_노광-2</Col></Row><Row><Col id=\"공정ID\">1512318</Col><Col id=\"공정명\">내층 M/T-5_노광-1</Col></Row><Row><Col id=\"공정ID\">1512319</Col><Col id=\"공정명\">내층 M/T-5_노광-2</Col></Row><Row><Col id=\"공정ID\">1512320</Col><Col id=\"공정명\">내층 M/T-1_노광-3</Col></Row><Row><Col id=\"공정ID\">1512321</Col><Col id=\"공정명\">내층 M/T-2_노광-3</Col></Row><Row><Col id=\"공정ID\">1512322</Col><Col id=\"공정명\">내층 M/T-3_노광-3</Col></Row><Row><Col id=\"공정ID\">1512323</Col><Col id=\"공정명\">내층 M/T-4_노광-3</Col></Row><Row><Col id=\"공정ID\">1512324</Col><Col id=\"공정명\">내층 M/T-5_노광-3</Col></Row><Row><Col id=\"공정ID\">1512401</Col><Col id=\"공정명\">외층 노광</Col></Row><Row><Col id=\"공정ID\">1512402</Col><Col id=\"공정명\">외층 노광-1</Col></Row><Row><Col id=\"공정ID\">1512403</Col><Col id=\"공정명\">외층 노광-2</Col></Row><Row><Col id=\"공정ID\">1512404</Col><Col id=\"공정명\">외층 노광-3</Col></Row><Row><Col id=\"공정ID\">1512405</Col><Col id=\"공정명\">외층 노광-4</Col></Row><Row><Col id=\"공정ID\">1512406</Col><Col id=\"공정명\">외층 FR-4 노광</Col></Row><Row><Col id=\"공정ID\">1512407</Col><Col id=\"공정명\">외층 CAVITY 노광</Col></Row><Row><Col id=\"공정ID\">1512408</Col><Col id=\"공정명\">외층 CAVITY 노광-1</Col></Row><Row><Col id=\"공정ID\">1512409</Col><Col id=\"공정명\">외층 CAVITY 노광-2</Col></Row><Row><Col id=\"공정ID\">1514101</Col><Col id=\"공정명\">RTR B/P 노광</Col></Row><Row><Col id=\"공정ID\">1514201</Col><Col id=\"공정명\">내층 B/P 노광</Col></Row><Row><Col id=\"공정ID\">1514301</Col><Col id=\"공정명\">내층 M/T B/P 노광</Col></Row><Row><Col id=\"공정ID\">1514302</Col><Col id=\"공정명\">내층 M/T-1_B/P 노광</Col></Row><Row><Col id=\"공정ID\">1514401</Col><Col id=\"공정명\">외층 B/P 노광</Col></Row><Row><Col id=\"공정ID\">1516301</Col><Col id=\"공정명\">내층 M/T CONFORMAL 노광</Col></Row><Row><Col id=\"공정ID\">1516302</Col><Col id=\"공정명\">내층 M/T-1_CONFORMAL 노광</Col></Row><Row><Col id=\"공정ID\">1516303</Col><Col id=\"공정명\">내층 M/T CONFORMAL 노광-1</Col></Row><Row><Col id=\"공정ID\">1516304</Col><Col id=\"공정명\">내층 M/T CONFORMAL 노광-2</Col></Row><Row><Col id=\"공정ID\">1516305</Col><Col id=\"공정명\">내층 M/T-2_CONFORMAL 노광</Col></Row><Row><Col id=\"공정ID\">1516401</Col><Col id=\"공정명\">외층 CONFORMAL 노광</Col></Row><Row><Col id=\"공정ID\">1517401</Col><Col id=\"공정명\">외층 D/F 노광</Col></Row><Row><Col id=\"공정ID\">1518101</Col><Col id=\"공정명\">RTR 현상</Col></Row><Row><Col id=\"공정ID\">1518102</Col><Col id=\"공정명\">RTR 현상-1</Col></Row><Row><Col id=\"공정ID\">1518103</Col><Col id=\"공정명\">RTR 현상-2</Col></Row><Row><Col id=\"공정ID\">1518401</Col><Col id=\"공정명\">외층 현상</Col></Row><Row><Col id=\"공정ID\">1518402</Col><Col id=\"공정명\">외층 현상-1</Col></Row><Row><Col id=\"공정ID\">1518403</Col><Col id=\"공정명\">외층 현상-2</Col></Row><Row><Col id=\"공정ID\">1518404</Col><Col id=\"공정명\">외층 현상-3</Col></Row><Row><Col id=\"공정ID\">1518405</Col><Col id=\"공정명\">외층 현상-4</Col></Row><Row><Col id=\"공정ID\">1520101</Col><Col id=\"공정명\">RTR B/P 현상</Col></Row><Row><Col id=\"공정ID\">1520201</Col><Col id=\"공정명\">내층 B/P 현상</Col></Row><Row><Col id=\"공정ID\">1520301</Col><Col id=\"공정명\">내층 M/T B/P 현상</Col></Row><Row><Col id=\"공정ID\">1520302</Col><Col id=\"공정명\">내층 M/T-1_B/P 현상</Col></Row><Row><Col id=\"공정ID\">1520401</Col><Col id=\"공정명\">외층 B/P 현상</Col></Row><Row><Col id=\"공정ID\">1522401</Col><Col id=\"공정명\">외층 D/F 현상</Col></Row><Row><Col id=\"공정ID\">1526101</Col><Col id=\"공정명\">RTR 현상/부식</Col></Row><Row><Col id=\"공정ID\">1526102</Col><Col id=\"공정명\">RTR 현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526103</Col><Col id=\"공정명\">RTR 현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526201</Col><Col id=\"공정명\">내층 현상/부식</Col></Row><Row><Col id=\"공정ID\">1526202</Col><Col id=\"공정명\">내층 현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526203</Col><Col id=\"공정명\">내층 현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526301</Col><Col id=\"공정명\">내층 M/T 현상/부식</Col></Row><Row><Col id=\"공정ID\">1526302</Col><Col id=\"공정명\">내층 M/T-1_현상/부식</Col></Row><Row><Col id=\"공정ID\">1526303</Col><Col id=\"공정명\">내층 M/T-2_현상/부식</Col></Row><Row><Col id=\"공정ID\">1526304</Col><Col id=\"공정명\">내층 M/T-3_현상/부식</Col></Row><Row><Col id=\"공정ID\">1526305</Col><Col id=\"공정명\">내층 M/T-4_현상/부식</Col></Row><Row><Col id=\"공정ID\">1526306</Col><Col id=\"공정명\">내층 M/T-5_현상/부식</Col></Row><Row><Col id=\"공정ID\">1526307</Col><Col id=\"공정명\">내층 M/T 현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526308</Col><Col id=\"공정명\">내층 M/T 현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526309</Col><Col id=\"공정명\">내층 M/T 현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526310</Col><Col id=\"공정명\">내층 M/T-1_현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526311</Col><Col id=\"공정명\">내층 M/T-1_현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526312</Col><Col id=\"공정명\">내층 M/T-2_현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526313</Col><Col id=\"공정명\">내층 M/T-2_현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526314</Col><Col id=\"공정명\">내층 M/T-3_현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526315</Col><Col id=\"공정명\">내층 M/T-3_현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526316</Col><Col id=\"공정명\">내층 M/T-4_현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526317</Col><Col id=\"공정명\">내층 M/T-4_현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526318</Col><Col id=\"공정명\">내층 M/T-5_현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526319</Col><Col id=\"공정명\">내층 M/T-5_현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526320</Col><Col id=\"공정명\">내층 M/T-1_현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526321</Col><Col id=\"공정명\">내층 M/T-2_현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526322</Col><Col id=\"공정명\">내층 M/T-3_현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526323</Col><Col id=\"공정명\">내층 M/T-4_현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526324</Col><Col id=\"공정명\">내층 M/T-5_현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526401</Col><Col id=\"공정명\">외층 현상/부식</Col></Row><Row><Col id=\"공정ID\">1526402</Col><Col id=\"공정명\">외층 현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526403</Col><Col id=\"공정명\">외층 현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1526404</Col><Col id=\"공정명\">외층 현상/부식-3</Col></Row><Row><Col id=\"공정ID\">1526405</Col><Col id=\"공정명\">외층 현상/부식-4</Col></Row><Row><Col id=\"공정ID\">1526406</Col><Col id=\"공정명\">외층 FR-4 현상/부식</Col></Row><Row><Col id=\"공정ID\">1526407</Col><Col id=\"공정명\">외층 CAVITY 현상/부식</Col></Row><Row><Col id=\"공정ID\">1526408</Col><Col id=\"공정명\">외층 CAVITY 현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1526409</Col><Col id=\"공정명\">외층 CAVITY 현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1530101</Col><Col id=\"공정명\">RTR D/F 박리</Col></Row><Row><Col id=\"공정ID\">1530102</Col><Col id=\"공정명\">RTR D/F 박리-1</Col></Row><Row><Col id=\"공정ID\">1530103</Col><Col id=\"공정명\">RTR D/F 박리-2</Col></Row><Row><Col id=\"공정ID\">1530201</Col><Col id=\"공정명\">내층 D/F 박리</Col></Row><Row><Col id=\"공정ID\">1530202</Col><Col id=\"공정명\">내층 B/P 박리</Col></Row><Row><Col id=\"공정ID\">1530203</Col><Col id=\"공정명\">내층 D/F 박리-1</Col></Row><Row><Col id=\"공정ID\">1530204</Col><Col id=\"공정명\">내층 D/F 박리-2</Col></Row><Row><Col id=\"공정ID\">1530301</Col><Col id=\"공정명\">내층 M/T D/F 박리</Col></Row><Row><Col id=\"공정ID\">1530302</Col><Col id=\"공정명\">내층 M/T-1_D/F 박리</Col></Row><Row><Col id=\"공정ID\">1530401</Col><Col id=\"공정명\">외층 D/F 박리</Col></Row><Row><Col id=\"공정ID\">1530402</Col><Col id=\"공정명\">외층 D/F 박리-1</Col></Row><Row><Col id=\"공정ID\">1530403</Col><Col id=\"공정명\">외층 B/P 박리</Col></Row><Row><Col id=\"공정ID\">1530404</Col><Col id=\"공정명\">외층 D/F 박리-2</Col></Row><Row><Col id=\"공정ID\">1530405</Col><Col id=\"공정명\">외층 회로 박리</Col></Row><Row><Col id=\"공정ID\">1532201</Col><Col id=\"공정명\">내층 RESIST 박리</Col></Row><Row><Col id=\"공정ID\">1532301</Col><Col id=\"공정명\">내층 M/T RESIST 박리</Col></Row><Row><Col id=\"공정ID\">1532302</Col><Col id=\"공정명\">내층 M/T RESIST 박리-1</Col></Row><Row><Col id=\"공정ID\">1532303</Col><Col id=\"공정명\">내층 M/T RESIST 박리-2</Col></Row><Row><Col id=\"공정ID\">1532401</Col><Col id=\"공정명\">외층 RESIST 박리</Col></Row><Row><Col id=\"공정ID\">1532402</Col><Col id=\"공정명\">외층 RESIST 박리-1</Col></Row><Row><Col id=\"공정ID\">1532403</Col><Col id=\"공정명\">외층 표면처리후 RESIST 박리</Col></Row><Row><Col id=\"공정ID\">1532404</Col><Col id=\"공정명\">외층 표면처리후 RESIST 박리-1</Col></Row><Row><Col id=\"공정ID\">1532405</Col><Col id=\"공정명\">외층 RESIST 박리-2</Col></Row><Row><Col id=\"공정ID\">1532406</Col><Col id=\"공정명\">외층 표면처리후 RESIST 박리-2</Col></Row><Row><Col id=\"공정ID\">1534301</Col><Col id=\"공정명\">내층 M/T CONFORMAL 현상/부식</Col></Row><Row><Col id=\"공정ID\">1534302</Col><Col id=\"공정명\">내층 M/T-1_CONFORMAL 현상/부식</Col></Row><Row><Col id=\"공정ID\">1534303</Col><Col id=\"공정명\">내층 M/T CONFORMAL 현상/부식-1</Col></Row><Row><Col id=\"공정ID\">1534304</Col><Col id=\"공정명\">내층 M/T CONFORMAL 현상/부식-2</Col></Row><Row><Col id=\"공정ID\">1534305</Col><Col id=\"공정명\">내층 M/T-2_CONFORMAL 현상/부식</Col></Row><Row><Col id=\"공정ID\">1534401</Col><Col id=\"공정명\">외층 CONFORMAL 현상/부식</Col></Row><Row><Col id=\"공정ID\">1536101</Col><Col id=\"공정명\">RTR 노광전 CARRIER 합지</Col></Row><Row><Col id=\"공정ID\">1536102</Col><Col id=\"공정명\">RTR 부식후 CARRIER 합지</Col></Row><Row><Col id=\"공정ID\">1536103</Col><Col id=\"공정명\">RTR 동도금전 CARRIER 합지</Col></Row><Row><Col id=\"공정ID\">1536401</Col><Col id=\"공정명\">외층 노광전 CARRIER 합지</Col></Row><Row><Col id=\"공정ID\">1536402</Col><Col id=\"공정명\">외층 CNC전 CARRIER 합지</Col></Row><Row><Col id=\"공정ID\">2010101</Col><Col id=\"공정명\">RTR CNC</Col></Row><Row><Col id=\"공정ID\">2010201</Col><Col id=\"공정명\">내층 CNC</Col></Row><Row><Col id=\"공정ID\">2010202</Col><Col id=\"공정명\">내층 CNC-1</Col></Row><Row><Col id=\"공정ID\">2010203</Col><Col id=\"공정명\">내층 CNC-2</Col></Row><Row><Col id=\"공정ID\">2010301</Col><Col id=\"공정명\">내층 M/T CNC</Col></Row><Row><Col id=\"공정ID\">2010302</Col><Col id=\"공정명\">내층 M/T-1_CNC</Col></Row><Row><Col id=\"공정ID\">2010303</Col><Col id=\"공정명\">내층 M/T-2_CNC</Col></Row><Row><Col id=\"공정ID\">2010304</Col><Col id=\"공정명\">내층 M/T-3_CNC</Col></Row><Row><Col id=\"공정ID\">2010305</Col><Col id=\"공정명\">내층 M/T-4_CNC</Col></Row><Row><Col id=\"공정ID\">2010306</Col><Col id=\"공정명\">내층 M/T-5_CNC</Col></Row><Row><Col id=\"공정ID\">2010307</Col><Col id=\"공정명\">내층 M/T CNC-1</Col></Row><Row><Col id=\"공정ID\">2010308</Col><Col id=\"공정명\">내층 M/T CNC-2</Col></Row><Row><Col id=\"공정ID\">2010309</Col><Col id=\"공정명\">내층 M/T CNC-3</Col></Row><Row><Col id=\"공정ID\">2010401</Col><Col id=\"공정명\">외층 CNC(M/T)</Col></Row><Row><Col id=\"공정ID\">2010402</Col><Col id=\"공정명\">외층 CNC(양면)</Col></Row><Row><Col id=\"공정ID\">2010403</Col><Col id=\"공정명\">외층 CNC(양면)-1</Col></Row><Row><Col id=\"공정ID\">2010404</Col><Col id=\"공정명\">외층 CNC(양면)-2</Col></Row><Row><Col id=\"공정ID\">2012001</Col><Col id=\"공정명\">BASE(부자재) CNC</Col></Row><Row><Col id=\"공정ID\">2012002</Col><Col id=\"공정명\">C/L CNC</Col></Row><Row><Col id=\"공정ID\">2012003</Col><Col id=\"공정명\">B/S CNC</Col></Row><Row><Col id=\"공정ID\">2012004</Col><Col id=\"공정명\">P/P CNC</Col></Row><Row><Col id=\"공정ID\">2012005</Col><Col id=\"공정명\">FR-4 CNC</Col></Row><Row><Col id=\"공정ID\">2012006</Col><Col id=\"공정명\">EPOXY CNC</Col></Row><Row><Col id=\"공정ID\">2012007</Col><Col id=\"공정명\">SUS CNC</Col></Row><Row><Col id=\"공정ID\">2012008</Col><Col id=\"공정명\">AL CNC</Col></Row><Row><Col id=\"공정ID\">2012009</Col><Col id=\"공정명\">P/I CNC</Col></Row><Row><Col id=\"공정ID\">2016101</Col><Col id=\"공정명\">RTR UV-LASER</Col></Row><Row><Col id=\"공정ID\">2016102</Col><Col id=\"공정명\">RTR UV-LASER-1</Col></Row><Row><Col id=\"공정ID\">2016103</Col><Col id=\"공정명\">RTR UV-LASER-2</Col></Row><Row><Col id=\"공정ID\">2016201</Col><Col id=\"공정명\">내층 UV-LASER</Col></Row><Row><Col id=\"공정ID\">2016202</Col><Col id=\"공정명\">내층 LASER 가공</Col></Row><Row><Col id=\"공정ID\">2016301</Col><Col id=\"공정명\">내층 M/T UV-LASER</Col></Row><Row><Col id=\"공정ID\">2016302</Col><Col id=\"공정명\">내층 M/T 외곽 LASER 가공</Col></Row><Row><Col id=\"공정ID\">2016303</Col><Col id=\"공정명\">내층 M/T-1_UV-LASER</Col></Row><Row><Col id=\"공정ID\">2016304</Col><Col id=\"공정명\">내층 M/T UV-LASER(Cleaning)</Col></Row><Row><Col id=\"공정ID\">2016305</Col><Col id=\"공정명\">내층 M/T UV-LASER-1</Col></Row><Row><Col id=\"공정ID\">2016306</Col><Col id=\"공정명\">내층 M/T UV-LASER-2</Col></Row><Row><Col id=\"공정ID\">2016401</Col><Col id=\"공정명\">외층 UV-LASER</Col></Row><Row><Col id=\"공정ID\">2016402</Col><Col id=\"공정명\">외층 외곽 LASER 가공</Col></Row><Row><Col id=\"공정ID\">2016403</Col><Col id=\"공정명\">외층 외곽 LASER 가공-1</Col></Row><Row><Col id=\"공정ID\">2016404</Col><Col id=\"공정명\">외층 UV-LASER(Cleaning)</Col></Row><Row><Col id=\"공정ID\">2016405</Col><Col id=\"공정명\">외층 UV-LASER(Lot No)</Col></Row><Row><Col id=\"공정ID\">2016406</Col><Col id=\"공정명\">외층 외곽 LASER 가공-2</Col></Row><Row><Col id=\"공정ID\">2016407</Col><Col id=\"공정명\">외층 외곽 LASER 가공-3</Col></Row><Row><Col id=\"공정ID\">2020001</Col><Col id=\"공정명\">BASE(부자재) LASER 가공</Col></Row><Row><Col id=\"공정ID\">2020002</Col><Col id=\"공정명\">C/L LASER 가공</Col></Row><Row><Col id=\"공정ID\">2020003</Col><Col id=\"공정명\">층간접착제 LASER 가공</Col></Row><Row><Col id=\"공정ID\">2020004</Col><Col id=\"공정명\">P/I LASER 가공</Col></Row><Row><Col id=\"공정ID\">2020005</Col><Col id=\"공정명\">P/P LASER 가공</Col></Row><Row><Col id=\"공정ID\">2024201</Col><Col id=\"공정명\">내층 LASER CUTTING</Col></Row><Row><Col id=\"공정ID\">2024202</Col><Col id=\"공정명\">내층 LASER CUTTING-1</Col></Row><Row><Col id=\"공정ID\">2024203</Col><Col id=\"공정명\">내층 LASER CUTTING-2</Col></Row><Row><Col id=\"공정ID\">2024301</Col><Col id=\"공정명\">내층 M/T LASER CUTTING</Col></Row><Row><Col id=\"공정ID\">2024401</Col><Col id=\"공정명\">외층 LASER CUTTING</Col></Row><Row><Col id=\"공정ID\">2024402</Col><Col id=\"공정명\">외층 LASER CUTTING-1</Col></Row><Row><Col id=\"공정ID\">2024403</Col><Col id=\"공정명\">외층 LASER CUTTING-2</Col></Row><Row><Col id=\"공정ID\">2024404</Col><Col id=\"공정명\">외층 LASER CUTTING-3</Col></Row><Row><Col id=\"공정ID\">2032301</Col><Col id=\"공정명\">내층 M/T CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032302</Col><Col id=\"공정명\">내층 M/T-1_CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032303</Col><Col id=\"공정명\">내층 M/T-2_CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032304</Col><Col id=\"공정명\">내층 M/T-3_CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032305</Col><Col id=\"공정명\">내층 M/T-4_CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032306</Col><Col id=\"공정명\">내층 M/T-5_CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032307</Col><Col id=\"공정명\">내층 M/T CO2-LASER-1</Col></Row><Row><Col id=\"공정ID\">2032308</Col><Col id=\"공정명\">내층 M/T CO2-LASER-2</Col></Row><Row><Col id=\"공정ID\">2032309</Col><Col id=\"공정명\">내층 M/T CO2-LASER-3</Col></Row><Row><Col id=\"공정ID\">2032401</Col><Col id=\"공정명\">외층 CO2-LASER</Col></Row><Row><Col id=\"공정ID\">2032402</Col><Col id=\"공정명\">외층 CO2-LASER-1</Col></Row><Row><Col id=\"공정ID\">2032403</Col><Col id=\"공정명\">외층 CO2-LASER-2</Col></Row><Row><Col id=\"공정ID\">2510201</Col><Col id=\"공정명\">내층 화학동도금</Col></Row><Row><Col id=\"공정ID\">2510301</Col><Col id=\"공정명\">내층 M/T 화학동도금</Col></Row><Row><Col id=\"공정ID\">2510302</Col><Col id=\"공정명\">내층 M/T-1_화학동도금</Col></Row><Row><Col id=\"공정ID\">2510303</Col><Col id=\"공정명\">내층 M/T-2_화학동도금</Col></Row><Row><Col id=\"공정ID\">2510304</Col><Col id=\"공정명\">내층 M/T-3_화학동도금</Col></Row><Row><Col id=\"공정ID\">2510305</Col><Col id=\"공정명\">내층 M/T-4_화학동도금</Col></Row><Row><Col id=\"공정ID\">2510306</Col><Col id=\"공정명\">내층 M/T-5_화학동도금</Col></Row><Row><Col id=\"공정ID\">2510307</Col><Col id=\"공정명\">내층 M/T-1_화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510308</Col><Col id=\"공정명\">내층 M/T-1_화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510309</Col><Col id=\"공정명\">내층 M/T-2_화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510310</Col><Col id=\"공정명\">내층 M/T-2_화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510311</Col><Col id=\"공정명\">내층 M/T-3_화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510312</Col><Col id=\"공정명\">내층 M/T-3_화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510313</Col><Col id=\"공정명\">내층 M/T-4_화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510314</Col><Col id=\"공정명\">내층 M/T-4_화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510315</Col><Col id=\"공정명\">내층 M/T-5_화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510316</Col><Col id=\"공정명\">내층 M/T-5_화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510317</Col><Col id=\"공정명\">내층 M/T 화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510318</Col><Col id=\"공정명\">내층 M/T 화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510401</Col><Col id=\"공정명\">외층 화학동도금</Col></Row><Row><Col id=\"공정ID\">2510402</Col><Col id=\"공정명\">외층 화학동도금-1</Col></Row><Row><Col id=\"공정ID\">2510403</Col><Col id=\"공정명\">외층 화학동도금-2</Col></Row><Row><Col id=\"공정ID\">2510404</Col><Col id=\"공정명\">외층 화학동도금-3</Col></Row><Row><Col id=\"공정ID\">2512101</Col><Col id=\"공정명\">RTR 블랙홀</Col></Row><Row><Col id=\"공정ID\">2512201</Col><Col id=\"공정명\">내층 블랙홀</Col></Row><Row><Col id=\"공정ID\">2512301</Col><Col id=\"공정명\">내층 M/T 블랙홀</Col></Row><Row><Col id=\"공정ID\">2512401</Col><Col id=\"공정명\">외층 블랙홀</Col></Row><Row><Col id=\"공정ID\">2512402</Col><Col id=\"공정명\">외층 블랙홀-1</Col></Row><Row><Col id=\"공정ID\">2514201</Col><Col id=\"공정명\">내층 VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514202</Col><Col id=\"공정명\">내층 VIA FILL-1</Col></Row><Row><Col id=\"공정ID\">2514203</Col><Col id=\"공정명\">내층 VIA FILL-2</Col></Row><Row><Col id=\"공정ID\">2514204</Col><Col id=\"공정명\">내층 B/P VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514205</Col><Col id=\"공정명\">내층 VIA FILL-3</Col></Row><Row><Col id=\"공정ID\">2514206</Col><Col id=\"공정명\">내층 VIA FILL-4</Col></Row><Row><Col id=\"공정ID\">2514301</Col><Col id=\"공정명\">내층 M/T VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514302</Col><Col id=\"공정명\">내층 M/T-1_VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514303</Col><Col id=\"공정명\">내층 M/T-2_VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514304</Col><Col id=\"공정명\">내층 M/T-3_VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514305</Col><Col id=\"공정명\">내층 M/T-4_VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514306</Col><Col id=\"공정명\">내층 M/T-5_VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514401</Col><Col id=\"공정명\">외층 VIA FILL</Col></Row><Row><Col id=\"공정ID\">2514402</Col><Col id=\"공정명\">외층 VIA FILL-1</Col></Row><Row><Col id=\"공정ID\">2514403</Col><Col id=\"공정명\">외층 VIA FILL-2</Col></Row><Row><Col id=\"공정ID\">2514404</Col><Col id=\"공정명\">외층 B/P VIA FILL</Col></Row><Row><Col id=\"공정ID\">2516101</Col><Col id=\"공정명\">RTR 전기동도금</Col></Row><Row><Col id=\"공정ID\">2516201</Col><Col id=\"공정명\">내층 전기동도금</Col></Row><Row><Col id=\"공정ID\">2516204</Col><Col id=\"공정명\">내층 전기동도금-1</Col></Row><Row><Col id=\"공정ID\">2516205</Col><Col id=\"공정명\">내층 전기동도금-2</Col></Row><Row><Col id=\"공정ID\">2516301</Col><Col id=\"공정명\">내층 M/T 전기동도금</Col></Row><Row><Col id=\"공정ID\">2516302</Col><Col id=\"공정명\">내층 M/T-1_전기동도금</Col></Row><Row><Col id=\"공정ID\">2516303</Col><Col id=\"공정명\">내층 M/T FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516304</Col><Col id=\"공정명\">내층 M/T-1_FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516305</Col><Col id=\"공정명\">내층 M/T-2_FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516306</Col><Col id=\"공정명\">내층 M/T-3_FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516307</Col><Col id=\"공정명\">내층 M/T-4_FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516308</Col><Col id=\"공정명\">내층 M/T-5_FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516309</Col><Col id=\"공정명\">내층 M/T 전기동도금-1</Col></Row><Row><Col id=\"공정ID\">2516310</Col><Col id=\"공정명\">내층 M/T 전기동도금-2</Col></Row><Row><Col id=\"공정ID\">2516311</Col><Col id=\"공정명\">내층 M/T FLASH동도금-1</Col></Row><Row><Col id=\"공정ID\">2516312</Col><Col id=\"공정명\">내층 M/T FLASH동도금-2</Col></Row><Row><Col id=\"공정ID\">2516313</Col><Col id=\"공정명\">내층 M/T FLASH동도금-3</Col></Row><Row><Col id=\"공정ID\">2516314</Col><Col id=\"공정명\">내층 M/T FLASH동도금-4</Col></Row><Row><Col id=\"공정ID\">2516315</Col><Col id=\"공정명\">내층 M/T-2_전기동도금</Col></Row><Row><Col id=\"공정ID\">2516316</Col><Col id=\"공정명\">내층 M/T-1_전기동도금-1</Col></Row><Row><Col id=\"공정ID\">2516317</Col><Col id=\"공정명\">내층 M/T-1_전기동도금-2</Col></Row><Row><Col id=\"공정ID\">2516318</Col><Col id=\"공정명\">내층 M/T-2_전기동도금-1</Col></Row><Row><Col id=\"공정ID\">2516319</Col><Col id=\"공정명\">내층 M/T-2_전기동도금-2</Col></Row><Row><Col id=\"공정ID\">2516401</Col><Col id=\"공정명\">외층 전기동도금</Col></Row><Row><Col id=\"공정ID\">2516402</Col><Col id=\"공정명\">외층 전기동도금-1</Col></Row><Row><Col id=\"공정ID\">2516403</Col><Col id=\"공정명\">외층 FLASH동도금</Col></Row><Row><Col id=\"공정ID\">2516407</Col><Col id=\"공정명\">외층 전기동도금-2</Col></Row><Row><Col id=\"공정ID\">2516408</Col><Col id=\"공정명\">외층 전기동도금-3</Col></Row><Row><Col id=\"공정ID\">2518101</Col><Col id=\"공정명\">RTR B/P 전기동도금</Col></Row><Row><Col id=\"공정ID\">2518201</Col><Col id=\"공정명\">내층 B/P 전기동도금</Col></Row><Row><Col id=\"공정ID\">2518301</Col><Col id=\"공정명\">내층 M/T B/P 전기동도금</Col></Row><Row><Col id=\"공정ID\">2518302</Col><Col id=\"공정명\">내층 M/T-1_B/P 전기동도금</Col></Row><Row><Col id=\"공정ID\">2518401</Col><Col id=\"공정명\">외층 B/P 전기동도금</Col></Row><Row><Col id=\"공정ID\">2518402</Col><Col id=\"공정명\">외층 B/P 전기동도금-1</Col></Row><Row><Col id=\"공정ID\">2518403</Col><Col id=\"공정명\">외층 B/P 전기동도금-2</Col></Row><Row><Col id=\"공정ID\">3010301</Col><Col id=\"공정명\">내층 M/T STACK가공</Col></Row><Row><Col id=\"공정ID\">3010302</Col><Col id=\"공정명\">내층 M/T-1_STACK가공</Col></Row><Row><Col id=\"공정ID\">3010303</Col><Col id=\"공정명\">내층 M/T-2_STACK가공</Col></Row><Row><Col id=\"공정ID\">3010304</Col><Col id=\"공정명\">내층 M/T-3_STACK가공</Col></Row><Row><Col id=\"공정ID\">3010305</Col><Col id=\"공정명\">내층 M/T-4_STACK가공</Col></Row><Row><Col id=\"공정ID\">3010306</Col><Col id=\"공정명\">내층 M/T-5_STACK가공</Col></Row><Row><Col id=\"공정ID\">3010307</Col><Col id=\"공정명\">내층 M/T-1_STACK가공-1</Col></Row><Row><Col id=\"공정ID\">3010308</Col><Col id=\"공정명\">내층 M/T-1_STACK가공-2</Col></Row><Row><Col id=\"공정ID\">3010401</Col><Col id=\"공정명\">외층 STACK가공</Col></Row><Row><Col id=\"공정ID\">3014201</Col><Col id=\"공정명\">내층 가접 GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014202</Col><Col id=\"공정명\">내층 GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014203</Col><Col id=\"공정명\">내층 M/K GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014301</Col><Col id=\"공정명\">내층 M/T 가접 GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014302</Col><Col id=\"공정명\">내층 M/T-1_GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014303</Col><Col id=\"공정명\">내층 M/T-2_GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014304</Col><Col id=\"공정명\">내층 M/T-3_GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014305</Col><Col id=\"공정명\">내층 M/T-4_GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014306</Col><Col id=\"공정명\">내층 M/T-5_GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014307</Col><Col id=\"공정명\">내층 M/T GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014401</Col><Col id=\"공정명\">외층 GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014402</Col><Col id=\"공정명\">외층 GUIDE 가공-1</Col></Row><Row><Col id=\"공정ID\">3014403</Col><Col id=\"공정명\">외층 가접GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014404</Col><Col id=\"공정명\">외층 PSR GUIDE 가공</Col></Row><Row><Col id=\"공정ID\">3014405</Col><Col id=\"공정명\">외층 보강판 GUIDE 가공</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">제품</Col></Row><Row><Col id=\"name\">반제품</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch02_00_00_00_00","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","10","39","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","49","10","200","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("2");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","47","24","39",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnRight","48.59%","49.78%","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","62",null,"34","btnRight:15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공정ID 리스트  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","20","96",null,null,"btnRight:15","58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"219\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"공정명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:공정ID\"/><Cell col=\"3\" text=\"bind:공정명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00_00",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_01",null,null,"70","28","btn_02_00_00:5","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","62","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeft","48.59%","btnRight:10","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"340","15","58","346",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00_00",null,"340","15","58","385",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","btnRight:15","62",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("선택 리스트  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","btnRight:15","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"219\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"공정명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:공정ID\"/><Cell col=\"3\" text=\"bind:공정명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",854,683,this,function(p){});
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

        };
        this.loadIncludeScript("popup_04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
