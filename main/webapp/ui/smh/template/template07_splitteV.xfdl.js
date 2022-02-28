(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template07");
            this.set_titletext("조회조건+(DetailT+그리드B)L+그리드R");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">약물검사</Col></Row><Row><Col id=\"data\">규격측정(계측값)</Col></Row><Row><Col id=\"data\">수입(원자재)</Col></Row><Row><Col id=\"data\">신뢰성검증</Col></Row><Row><Col id=\"data\">수입(원자재가공품)</Col></Row><Row><Col id=\"data\">수질검사</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">유효</Col></Row><Row><Col id=\"data\">유효하지 않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"검사방법명\">IPQC</Col><Col id=\"No\">1</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">허준</Col><Col id=\"수정자\">허준</Col><Col id=\"수정일\">2020-04-24 13:35:08</Col><Col id=\"생성일\">2020-04-24 09:57:31</Col></Row><Row><Col id=\"검사방법명\">규격측정(계측값)</Col><Col id=\"No\">2</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"수정자\"/><Col id=\"수정일\"/><Col id=\"생성일\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목유형\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사항목명\">ALIGN MARK 회로폭</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">2</Col><Col id=\"검사항목명\">Au두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"검사항목명\">C/L,PI,SHIELD,EPOXY,SUS</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"검사항목명\">CNC홀사이즈</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">5</Col><Col id=\"검사항목명\">CO2홀사이즈</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"검사항목명\">CP-1</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">7</Col><Col id=\"검사항목명\">CP-2</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">8</Col><Col id=\"검사항목명\">Dimple</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">2020-02-14 16:45:15</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">9</Col><Col id=\"검사항목명\">Hole size</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">10</Col><Col id=\"검사항목명\">Laser C,S면 Hole size</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">11</Col><Col id=\"검사항목명\">Ni두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">12</Col><Col id=\"검사항목명\">OLB 최소 회로폭</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">13</Col><Col id=\"검사항목명\">OLB 회로폭</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">14</Col><Col id=\"검사항목명\">Over fill</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">2020-02-14 16:45:15</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">15</Col><Col id=\"검사항목명\">PD두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">16</Col><Col id=\"검사항목명\">PSR 두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">17</Col><Col id=\"검사항목명\">PSR두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">18</Col><Col id=\"검사항목명\">PTH Hole size</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">19</Col><Col id=\"검사항목명\">RESIST두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">20</Col><Col id=\"검사항목명\">SM두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">21</Col><Col id=\"검사항목명\">SM인쇄두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">SUS X축 사이즈</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Trimming 측정 1</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Trimming 측정 2</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Trimming 측정 3</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Trimming 측정 4</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">Trimming 측정 5</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">UV홀사이즈(MVH)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">UV홀사이즈(PTH)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">XRF(환경유해물질) 측정</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">공정규격</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">동도금두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">동도금두께 C/S면</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">동도금두께 S/S면</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">두께/두께측정POINT</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">면동박</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">2020-02-14 16:45:15</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">보강판두께-1</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">보강판두께-2</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">보강판두께-3</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">외곽 X축 사이즈</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">외곽 Y축 사이즈</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">일반 회로폭</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">임피던스 회로폭(Rigid)</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">적층두께</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">치수 측정</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">평탄도 측정</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">홀내벽</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">임용희</Col><Col id=\"생성일\">2020-02-14 16:45:15</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사항목명\">회로폭</Col><Col id=\"검사항목유형\">SPC</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row></Rows>");
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

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_text("검사 종류 명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","tab_00:10","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("검사 종류 명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","125","5","250","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("규격측정(계측값)");
            obj.set_cssclass("display");
            obj.set_text("규격측정(계측값)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","66","117","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new ImageViewer("splitter_V","420","100","11",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_cssclass("img_splitter_V");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","splitter_V:0","100",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사 항목 유형\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"생성자\"/><Cell col=\"5\" text=\"생성일\"/><Cell col=\"6\" text=\"수정자\"/><Cell col=\"7\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사항목유형\"/><Cell col=\"3\" text=\"bind:유효상태\"/><Cell col=\"4\" text=\"bind:생성자\"/><Cell col=\"5\" text=\"bind:생성일\"/><Cell col=\"6\" text=\"bind:수정자\"/><Cell col=\"7\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","100",null,null,"splitter_V:0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\"/><Cell col=\"2\" text=\"유효상태\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\" expandshow=\"show\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"2\" text=\"bind:유효상태\"/><Cell col=\"3\" text=\"bind:생성자\"/><Cell col=\"4\" text=\"bind:생성일\"/><Cell col=\"5\" text=\"bind:수정자\"/><Cell col=\"6\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","splitter_V:0","66","117","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"72","29","24","splitter_V:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnDel00",null,"72","26","24","btnExcelUp:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAdd00",null,"72","26","24","btnDel00:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnDel01",null,"72","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnAdd01",null,"72","26","24","btnDel01:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp01",null,"72","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

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
            this.div_work.form.splitter_V.addEventHandler("ondrag",this.div_work_splitter_V_ondrag,this);
            this.div_work.form.splitter_V.addEventHandler("onclick",this.div_work_splitter_V_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template07_splitteV.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
