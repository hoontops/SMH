(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template13");
            this.set_titletext("조회조건+(그리드T+Detail+그리드M+그리드B)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">Y</Col></Row><Row><Col id=\"data\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">1</Col></Row><Row><Col id=\"data\">1.1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">샘플</Col></Row><Row><Col id=\"data\">시양산</Col></Row><Row><Col id=\"data\">Test</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"SO번호\" type=\"STRING\" size=\"256\"/><Column id=\"라인\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"층수\" type=\"STRING\" size=\"256\"/><Column id=\"합수\" type=\"STRING\" size=\"256\"/><Column id=\"산출수\" type=\"STRING\" size=\"256\"/><Column id=\"수주량\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"면적\" type=\"STRING\" size=\"256\"/><Column id=\"분할여부\" type=\"STRING\" size=\"256\"/><Column id=\"Lot생성여부\" type=\"STRING\" size=\"256\"/><Column id=\"사양결재여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SO번호\">40018129</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.2</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018129</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.3</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018129</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.4</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018130</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.2</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018130</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.3</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018130</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.4</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018130</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.5</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">6,120.1</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018131</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.1</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">0.0</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">40018132</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.2</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"단가\">5,537.4</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">68</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,470.59</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">84004677</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">2</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"Rev\">FA2</Col><Col id=\"품목명\">AMB999RD01 DIGITIZER(2L)</Col><Col id=\"단가\">1,000.0</Col><Col id=\"층수\">2L</Col><Col id=\"합수\">12</Col><Col id=\"산출수\">72</Col><Col id=\"수주량\">100,000</Col><Col id=\"PNL\">8,334</Col><Col id=\"면적\">1,388.89</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row><Row><Col id=\"SO번호\">97001671</Col><Col id=\"생산구분\">양산</Col><Col id=\"라인\">1.2</Col><Col id=\"품목코드\">1010759B2</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매</Col><Col id=\"단가\">0.0</Col><Col id=\"층수\">1L</Col><Col id=\"합수\">8</Col><Col id=\"산출수\">30</Col><Col id=\"수주량\">40</Col><Col id=\"PNL\">5</Col><Col id=\"면적\">1.35</Col><Col id=\"분할여부\">N</Col><Col id=\"Lot생성여부\">N</Col><Col id=\"사양결재여부\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"RollSheet\" type=\"STRING\" size=\"256\"/><Column id=\"수량PHL\" type=\"STRING\" size=\"256\"/><Column id=\"LotSize\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"접합수\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"실투입로스\" type=\"STRING\" size=\"256\"/><Column id=\"순수주로스\" type=\"STRING\" size=\"256\"/><Column id=\"Lot생성여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\"/><Col id=\"품목코드\">1010759B2</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매</Col><Col id=\"RollSheet\">Sheet</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"접합수\">8</Col><Col id=\"LotSize\">0</Col><Col id=\"단위\">PCS</Col><Col id=\"실투입로스\">0.00</Col><Col id=\"순수주로스\">0.00</Col><Col id=\"Lot생성여부\">N</Col></Row><Row><Col id=\"품목코드\">2010759B2CL00011</Col><Col id=\"품목명\">PORCHE NOR(1L)-(1L)CL-IFV재구매</Col><Col id=\"RollSheet\">Sheet</Col><Col id=\"수량PHL\">0</Col><Col id=\"LotSize\">0</Col><Col id=\"수량\">0</Col><Col id=\"접합수\">1</Col><Col id=\"단위\">쪽</Col><Col id=\"실투입로스\">0.00</Col><Col id=\"순수주로스\">0.00</Col><Col id=\"Lot생성여부\">N</Col></Row><Row><Col id=\"품목코드\">2010759B2CL00021</Col><Col id=\"품목명\">PORCHE NOR(1L)-(2L)CL-IFV재구매</Col><Col id=\"RollSheet\">Sheet</Col><Col id=\"수량PHL\">0</Col><Col id=\"LotSize\">0</Col><Col id=\"수량\">0</Col><Col id=\"접합수\">1</Col><Col id=\"단위\">쪽</Col><Col id=\"실투입로스\">0.00</Col><Col id=\"순수주로스\">0.00</Col><Col id=\"Lot생성여부\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"수량PHL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"순투입\" type=\"STRING\" size=\"256\"/><Column id=\"순투입로스\" type=\"STRING\" size=\"256\"/><Column id=\"로스율\" type=\"STRING\" size=\"256\"/><Column id=\"순수주\" type=\"STRING\" size=\"256\"/><Column id=\"투입여부\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("4");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_label_point");
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
            obj.set_taborder("5");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","35",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","175","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","175","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("Lot 생성여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","60","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_03","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("title","0","0","66","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_02","0","77.57%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"수량(PHL)\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"순투입\"/><Cell col=\"5\" text=\"순투입/로스\"/><Cell col=\"6\" text=\"로스율\"/><Cell col=\"7\" text=\"순수주\"/><Cell col=\"8\" text=\"투입여부\"/></Band><Band id=\"body\"><Cell text=\"bind:품목코드\"/><Cell col=\"1\" text=\"bind:LotNo\"/><Cell col=\"2\" text=\"bind:수량PHL\"/><Cell col=\"3\" text=\"bind:수량\"/><Cell col=\"4\" text=\"bind:순투입\"/><Cell col=\"5\" text=\"bind:순투입로스\"/><Cell col=\"6\" text=\"bind:로스율\"/><Cell col=\"7\" text=\"bind:순수주\"/><Cell col=\"8\" text=\"bind:투입여부\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","51.14%",null,null,"0","grd_02:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"Roll/Sheet\"/><Cell col=\"4\" text=\"수량(PHL)\"/><Cell col=\"5\" text=\"Lot Size\"/><Cell col=\"6\" text=\"수량\"/><Cell col=\"7\" text=\"접합수\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"실투입로스\"/><Cell col=\"10\" text=\"순수주로스\"/><Cell col=\"11\" text=\"Lot생성여부\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:품목코드\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RollSheet\"/><Cell col=\"4\" text=\"bind:수량PHL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:LotSize\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:수량\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:접합수\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:단위\"/><Cell col=\"9\" text=\"bind:실투입로스\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:순수주로스\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:Lot생성여부\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01_00","0",null,null,"66","0","grd_01:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label05","59.50%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("기준로스");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label10","59.50%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("기준투입(PHL)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label02","0","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("순수주");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label07","0","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("잉여재고");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label08","19.94%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("잉여재공");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label04","39.67%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("기준투입(PCS)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label09","39.67%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("부족");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label03","19.94%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("순투입");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("label11","79.5%","35","9.00%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("Lot Size");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_00","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_value("40");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_01","label03:10","10",null,"20","label04:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_02","label04:10","10",null,"20","label05:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_03","label05:10","10",null,"20","label11:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_04","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("13");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_05","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("14");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_06","label09:10","35",null,"20","label10:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("15");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_07","label10:10","35",null,"20","label11:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("16");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Spin("spn_08","label11:10","35",null,"20","10",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("17");
            obj.set_value("0");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","Div01_00:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"생산구분\"/><Cell col=\"1\" text=\"SO번호\"/><Cell col=\"2\" text=\"라인\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"단가\"/><Cell col=\"7\" text=\"층수\"/><Cell col=\"8\" text=\"합수\"/><Cell col=\"9\" text=\"산출수\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"PNL\"/><Cell col=\"12\" text=\"면적\"/><Cell col=\"13\" text=\"분할여부\"/><Cell col=\"14\" text=\"Lot생성여부\"/><Cell col=\"15\" text=\"사양결재여부\"/></Band><Band id=\"body\"><Cell text=\"bind:생산구분\"/><Cell col=\"1\" text=\"bind:SO번호\"/><Cell col=\"2\" text=\"bind:라인\"/><Cell col=\"3\" text=\"bind:품목코드\"/><Cell col=\"4\" text=\"bind:Rev\"/><Cell col=\"5\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:단가\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:층수\"/><Cell col=\"8\" text=\"bind:합수\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:산출수\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:수주량\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PNL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:면적\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:분할여부\"/><Cell col=\"14\" text=\"bind:Lot생성여부\"/><Cell col=\"15\" text=\"bind:사양결재여부\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"84","34",null,"grd_01:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("품목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title3","0",null,"59","34",null,"grd_02:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_00",null,"247","45","10","751",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01",null,"323","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01_00",null,"508","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
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
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
