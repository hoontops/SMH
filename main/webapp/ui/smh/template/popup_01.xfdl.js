(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup_01");
            this.set_titletext("품목 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목유형구분\" type=\"STRING\" size=\"256\"/><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"품목코드\">1010567C1</Col><Col id=\"품목명\">AMSA05BV01 MFPC LEFT(1L)-CCT상품</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"품목코드\">1010568C1</Col><Col id=\"품목명\">AMSA05BV01 MFPC RIGHT(1L)-CCT상품</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"품목코드\">1010635A5</Col><Col id=\"품목명\">OPX20153(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">3</Col></Row><Row><Col id=\"품목코드\">1010637A4</Col><Col id=\"품목명\">OPX33203(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">4</Col></Row><Row><Col id=\"품목코드\">1010730B2</Col><Col id=\"품목명\">TAB PRO LCD SUB(1L)</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">5</Col></Row><Row><Col id=\"품목코드\">1010730B3</Col><Col id=\"품목명\">TAB PRO LCD SUB(1L)-CCT상품</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">6</Col></Row><Row><Col id=\"품목코드\">1010738B1</Col><Col id=\"품목명\">PROTO STEP2 PANEL(1L)</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">7</Col></Row><Row><Col id=\"품목코드\">1010743A1</Col><Col id=\"품목명\">E1 PROTO STEP2 PANEL(1L)</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">8</Col></Row><Row><Col id=\"품목코드\">1010757A1</Col><Col id=\"품목명\">500X720 LED(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">9</Col></Row><Row><Col id=\"품목코드\">1010758A1</Col><Col id=\"품목명\">NECK TEST BOARD(1L)-IFV직납-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">10</Col></Row><Row><Col id=\"품목코드\">1010759A1</Col><Col id=\"품목명\">PORCHE NOR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">11</Col></Row><Row><Col id=\"품목코드\">1010759A2</Col><Col id=\"품목명\">PORCHE NOR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">12</Col></Row><Row><Col id=\"품목코드\">1010759A3</Col><Col id=\"품목명\">PORCHE NOR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">13</Col></Row><Row><Col id=\"품목코드\">1010759A4</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">14</Col></Row><Row><Col id=\"품목코드\">1010759A5</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">15</Col></Row><Row><Col id=\"품목코드\">1010759A6</Col><Col id=\"품목명\">PORCHE NOR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">16</Col></Row><Row><Col id=\"품목코드\">1010759A7</Col><Col id=\"품목명\">PORSCHE NOR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">17</Col></Row><Row><Col id=\"품목코드\">1010759B1</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">18</Col></Row><Row><Col id=\"품목코드\">1010759B2</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col><Col id=\"No\">19</Col></Row><Row><Col id=\"품목코드\">1010759B3</Col><Col id=\"품목명\">PORSCHE NOR(1L)-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010759B4</Col><Col id=\"품목명\">PORSCHE NOR(1L)-시양산-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">시양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010759B5</Col><Col id=\"품목명\">PORSCHE NOR(1L)-시양산-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">시양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A1</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A2</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A3</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A4</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A5</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A6</Col><Col id=\"품목명\">VW-MEB(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A7</Col><Col id=\"품목명\">VW-MEB(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A8</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760A9</Col><Col id=\"품목명\">VW-MEB(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760B1</Col><Col id=\"품목명\">VW-MEB(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760B2</Col><Col id=\"품목명\">VW-MEB(1L)-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760B3</Col><Col id=\"품목명\">VW-MEB(1L)-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760B4</Col><Col id=\"품목명\">VW-MEB(1L)-시양산-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">시양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760B5</Col><Col id=\"품목명\">VW-MEB(1L)-시양산-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">시양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760C1</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760C2</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010760C3</Col><Col id=\"품목명\">VW-MEB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761A1</Col><Col id=\"품목명\">PORCHE MIR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761A2</Col><Col id=\"품목명\">PORCHE MIR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761A3</Col><Col id=\"품목명\">PORCHE MIR(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761A4</Col><Col id=\"품목명\">PORCHE MIR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761A5</Col><Col id=\"품목명\">PORSCHE MIR(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761B1</Col><Col id=\"품목명\">PORCHE MIR(1L)-IFV재구매-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010761B2</Col><Col id=\"품목명\">PORCHE MIR(1L)-IFV재구매</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A1</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A2</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A3</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A4</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A5</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A6</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A7</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A8</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762A9</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B1</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B2</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B3</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B4</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B5</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B6</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B7</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B8</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762B9</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C1</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C2</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C3</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C4</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C5</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C6</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C7</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C8</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762C9</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762D1</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762D2</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010762D3</Col><Col id=\"품목명\">MEB SOLDERING(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010763A1</Col><Col id=\"품목명\">500X688 24MM(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010763A2</Col><Col id=\"품목명\">500X688 24MM(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010763A3</Col><Col id=\"품목명\">500X688 24MM(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010764A1</Col><Col id=\"품목명\">HYDRA FLEX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010764A2</Col><Col id=\"품목명\">HYDRA FLEX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010765A1</Col><Col id=\"품목명\">500X496 24MM(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010768A1</Col><Col id=\"품목명\">506X680 13.68mm(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010768A2</Col><Col id=\"품목명\">506X680 13.68mm(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010768A3</Col><Col id=\"품목명\">506X680 13.68mm(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010769A1</Col><Col id=\"품목명\">LAMP-RIGHT-FPCB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010769A2</Col><Col id=\"품목명\">LAMP-RIGHT-FPCB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010770A1</Col><Col id=\"품목명\">LAMP-LEFT-FPCB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010771A1</Col><Col id=\"품목명\">DELTA CNT HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010771A2</Col><Col id=\"품목명\">DELTA CNT HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010771A3</Col><Col id=\"품목명\">DELTA CNT HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010772A1</Col><Col id=\"품목명\">THOR HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010772A2</Col><Col id=\"품목명\">THOR HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010772A3</Col><Col id=\"품목명\">THOR HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010772A4</Col><Col id=\"품목명\">THOR HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773A1</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773A2</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773A3</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773A4</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773A8</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773A9</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010773B1</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010774A1</Col><Col id=\"품목명\">PATTERN FUSE(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010774A2</Col><Col id=\"품목명\">PATTERN FUSE(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010774A6</Col><Col id=\"품목명\">PATTERN FUSE(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010774A7</Col><Col id=\"품목명\">PATTERN FUSE(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010774A8</Col><Col id=\"품목명\">PATTERN FUSE(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010775A1</Col><Col id=\"품목명\">AMS667UU04 MAIN FPC PI(1L)</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010775A2</Col><Col id=\"품목명\">AMS667UU04 MAIN FPC PI(1L)</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010776A1</Col><Col id=\"품목명\">P14 Metal Mesh(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010776A2</Col><Col id=\"품목명\">P14 Metal Mesh(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010777A1</Col><Col id=\"품목명\">S50N01A(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010778A1</Col><Col id=\"품목명\">500X688 24MM REVERSE(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010779A1</Col><Col id=\"품목명\">P24 Metal Mesh(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010780A1</Col><Col id=\"품목명\">WARMER HEATER LX2(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783A4</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B2</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B3</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B4</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B5</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B6</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B7</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783B8</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783C1</Col><Col id=\"품목명\">WARMER HEATER(1L)</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">양산</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010783C2</Col><Col id=\"품목명\">WARMER HEATER(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010786B1</Col><Col id=\"품목명\">WARMER HEATER QX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010786B2</Col><Col id=\"품목명\">WARMER HEATER QX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010786B3</Col><Col id=\"품목명\">WARMER HEATER QX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010786B4</Col><Col id=\"품목명\">WARMER HEATER QX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010786B5</Col><Col id=\"품목명\">WARMER HEATER QX(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row><Row><Col id=\"품목코드\">1010787A1</Col><Col id=\"품목명\">PIEZO FPCB(1L)-SPL</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"생산구분\">샘플</Col><Col id=\"단위\">PCS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">제품</Col></Row><Row><Col id=\"name\">반제품</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch02_00_00_00_00","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","10","79","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("품목코드/명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label01","289","10","63","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","89","10","200","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("3");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","47","24","39",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","362","10","100","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("제품");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static01","20","62",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("품목선택  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","20","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"260\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목유형구분\"/><Cell col=\"6\" text=\"생산구분\"/><Cell col=\"7\" text=\"단위\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:품목코드\"/><Cell col=\"3\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Rev\"/><Cell col=\"5\" text=\"bind:품목유형구분\"/><Cell col=\"6\" text=\"bind:생산구분\"/><Cell col=\"7\" text=\"bind:단위\"/></Band></Format></Formats>");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,700,this,function(p){});
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
        this.loadIncludeScript("popup_01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
