(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template12");
            this.set_titletext("조회조건(Multi)+Master Tab(shuttleUp&Down)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"수주일\" type=\"STRING\" size=\"256\"/><Column id=\"수준번호\" type=\"STRING\" size=\"256\"/><Column id=\"라인\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"수주량\" type=\"STRING\" size=\"256\"/><Column id=\"미배분수량\" type=\"STRING\" size=\"256\"/><Column id=\"작업구분\" type=\"STRING\" size=\"256\"/><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"영업담당\" type=\"STRING\" size=\"256\"/><Column id=\"사양담당\" type=\"STRING\" size=\"256\"/><Column id=\"RollSheet\" type=\"STRING\" size=\"256\"/><Column id=\"층수\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEX축\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEY축\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PNLmm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"수주번호\" type=\"STRING\" size=\"256\"/><Column id=\"라인\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"수주번호\" type=\"STRING\" size=\"256\"/><Column id=\"라인\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"PSC\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"수주일\" type=\"STRING\" size=\"256\"/><Column id=\"영업담당\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/><Column id=\"사양결제시간\" type=\"STRING\" size=\"256\"/><Column id=\"숭인\" type=\"STRING\" size=\"256\"/><Column id=\"스펙담당자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("S/O 수주 배분");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"230","45","20","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","256","10","27",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","250","102","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","250","146","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","97",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("수주기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("수주");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","110",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","108","135",null,"20","37",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"135","22","20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","108","160",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","108","185",null,"20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","210","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("수주배분 조회");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_00.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage2.addChild(obj.name, obj);

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

            obj = new Tab("tab_01","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_01);
            obj.set_text("S/O 수주 배분");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("title0","0","0","81","34","877",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("S/O 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","53.15%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"수주번호\"/><Cell col=\"3\" text=\"라인\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"Rev\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"고객명\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"PCS\"/><Cell col=\"10\" text=\"PNL\"/><Cell col=\"11\" text=\"MM\"/><Cell col=\"12\" text=\"납기일자\"/><Cell col=\"13\" text=\"승인\"/><Cell col=\"14\" text=\"생성자\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:수주번호\"/><Cell col=\"3\" text=\"bind:라인\"/><Cell col=\"4\" text=\"bind:품목코드\"/><Cell col=\"5\" text=\"bind:Rev\"/><Cell col=\"6\" text=\"bind:품목명\"/><Cell col=\"7\" text=\"bind:고객명\"/><Cell col=\"8\" text=\"bind:단가\"/><Cell col=\"9\" text=\"bind:PCS\"/><Cell col=\"10\" text=\"bind:PNL\"/><Cell col=\"11\" text=\"bind:MM\"/><Cell col=\"12\" text=\"bind:납기일자\"/><Cell col=\"13\" text=\"bind:승인\"/><Cell col=\"14\" text=\"bind:생성자\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"수주량\"/><Cell col=\"5\" text=\"0\" displaytype=\"number\"/><Cell col=\"6\" text=\"합계\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"0\"/><Cell col=\"9\" text=\"0\"/><Cell col=\"10\" text=\"0\"/><Cell col=\"11\" text=\"0\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","grd_01:53",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"수주일\"/><Cell col=\"3\" text=\"수준번호\"/><Cell col=\"4\" text=\"라인\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"Rev\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"고객명\"/><Cell col=\"9\" text=\"단가\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"미배분 수량\"/><Cell col=\"12\" text=\"작업구분\"/><Cell col=\"13\" text=\"생산구분\"/><Cell col=\"14\" text=\"납기일자\"/><Cell col=\"15\" text=\"영업담당\"/><Cell col=\"16\" text=\"사양담당\"/><Cell col=\"17\" text=\"Roll/Sheet\"/><Cell col=\"18\" text=\"층수\"/><Cell col=\"19\" text=\"PCS SIZE(mm)X축\"/><Cell col=\"20\" text=\"PCS SIZE(mm)Y축\"/><Cell col=\"21\" text=\"PCS/PNL\"/><Cell col=\"22\" text=\"PNL/mm\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:수주일\"/><Cell col=\"3\" text=\"bind:수준번호\"/><Cell col=\"4\" text=\"bind:라인\"/><Cell col=\"5\" text=\"bind:품목코드\"/><Cell col=\"6\" text=\"bind:Rev\"/><Cell col=\"7\" text=\"bind:품목명\"/><Cell col=\"8\" text=\"bind:고객명\"/><Cell col=\"9\" text=\"bind:단가\"/><Cell col=\"10\" text=\"bind:수주량\"/><Cell col=\"11\" text=\"bind:미배분수량\"/><Cell col=\"12\" text=\"bind:작업구분\"/><Cell col=\"13\" text=\"bind:생산구분\"/><Cell col=\"14\" text=\"bind:납기일자\"/><Cell col=\"15\" text=\"bind:영업담당\"/><Cell col=\"16\" text=\"bind:사양담당\"/><Cell col=\"17\" text=\"bind:RollSheet\"/><Cell col=\"18\" text=\"bind:층수\"/><Cell col=\"19\" text=\"bind:PCSSIZEX축\"/><Cell col=\"20\" text=\"bind:PCSSIZEY축\"/><Cell col=\"21\" text=\"bind:PCSPNL\"/><Cell col=\"22\" text=\"bind:PNLmm\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1","0",null,"112","34",null,"grd_01:0",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("수주배분 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp","50.42%","grd_00:15","24","23",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"grd_00:14","23","24","btn_suttleUp:10",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"300","58","15","450",null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00","450","338","58","15",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdUp00",null,null,"29","24","0","grd_01:3",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,null,"29","24","29","grd_01:3",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,null,"29","24","58","grd_01:3",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,null,"29","24","87","grd_01:3",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,null,"29","24","116","grd_01:3",null,null,null,null,this.div_work.form.tab_01.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_01);
            obj.set_text("수주배분 조회");
            this.div_work.form.tab_01.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","108","34",null,null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("수주배분리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"수주번호\"/><Cell col=\"2\" text=\"라인\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"고객명\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"PSC\"/><Cell col=\"9\" text=\"PNL\"/><Cell col=\"10\" text=\"MM\"/><Cell col=\"11\" text=\"AMT\"/><Cell col=\"12\" text=\"수주일\"/><Cell col=\"13\" text=\"영업담당\"/><Cell col=\"14\" text=\"납기일자\"/><Cell col=\"15\" text=\"생성일\"/><Cell col=\"16\" text=\"생성자명\"/><Cell col=\"17\" text=\"사양결제시간\"/><Cell col=\"18\" text=\"숭인\"/><Cell col=\"19\" text=\"스펙담당자\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:수주번호\"/><Cell col=\"2\" text=\"bind:라인\"/><Cell col=\"3\" text=\"bind:품목코드\"/><Cell col=\"4\" text=\"bind:Rev\"/><Cell col=\"5\" text=\"bind:품목명\"/><Cell col=\"6\" text=\"bind:고객명\"/><Cell col=\"7\" text=\"bind:단가\"/><Cell col=\"8\" text=\"bind:PSC\"/><Cell col=\"9\" text=\"bind:PNL\"/><Cell col=\"10\" text=\"bind:MM\"/><Cell col=\"11\" text=\"bind:AMT\"/><Cell col=\"12\" text=\"bind:수주일\"/><Cell col=\"13\" text=\"bind:영업담당\"/><Cell col=\"14\" text=\"bind:납기일자\"/><Cell col=\"15\" text=\"bind:생성일\"/><Cell col=\"16\" text=\"bind:생성자명\"/><Cell col=\"17\" text=\"bind:사양결제시간\"/><Cell col=\"18\" text=\"bind:숭인\"/><Cell col=\"19\" text=\"bind:스펙담당자\"/></Band></Format></Formats>");
            this.div_work.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdUp00",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_01.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
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
        this.loadIncludeScript("template12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
