(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template18");
            this.set_titletext("조회조건+GridT+DetailB(group)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">금일</Col></Row><Row><Col id=\"data\">전일</Col></Row><Row><Col id=\"data\">금주</Col></Row><Row><Col id=\"data\">전주</Col></Row><Row><Col id=\"data\">금월</Col></Row><Row><Col id=\"data\">전월</Col></Row><Row><Col id=\"data\">사용자정의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd0", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"접수번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객사\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드변경전\" type=\"STRING\" size=\"256\"/><Column id=\"REV변경전\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드변경후\" type=\"STRING\" size=\"256\"/><Column id=\"REV변경후\" type=\"STRING\" size=\"256\"/><Column id=\"작업구분\" type=\"STRING\" size=\"256\"/><Column id=\"진행구분\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSizeY\" type=\"STRING\" size=\"256\"/><Column id=\"모델납기일\" type=\"STRING\" size=\"256\"/><Column id=\"사양담당\" type=\"STRING\" size=\"256\"/><Column id=\"CAM담당\" type=\"STRING\" size=\"256\"/><Column id=\"제품타입\" type=\"STRING\" size=\"256\"/><Column id=\"기존고객REV\" type=\"STRING\" size=\"256\"/><Column id=\"적용고객REV\" type=\"STRING\" size=\"256\"/><Column id=\"내층회로보정자\" type=\"STRING\" size=\"256\"/><Column id=\"외층회로보정자\" type=\"STRING\" size=\"256\"/><Column id=\"OLB보정자\" type=\"STRING\" size=\"256\"/><Column id=\"쏠림동박적용\" type=\"STRING\" size=\"256\"/><Column id=\"적용층\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYLYE\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP단자\" type=\"STRING\" size=\"256\"/><Column id=\"PAD보정\" type=\"STRING\" size=\"256\"/><Column id=\"BBT기준\" type=\"STRING\" size=\"256\"/><Column id=\"제작처\" type=\"STRING\" size=\"256\"/><Column id=\"입고처\" type=\"STRING\" size=\"256\"/><Column id=\"연산율\" type=\"STRING\" size=\"256\"/><Column id=\"BBT구분\" type=\"STRING\" size=\"256\"/><Column id=\"JIG제작\" type=\"STRING\" size=\"256\"/><Column id=\"단자구분\" type=\"STRING\" size=\"256\"/><Column id=\"BBT방식\" type=\"STRING\" size=\"256\"/><Column id=\"BBT납기일\" type=\"STRING\" size=\"256\"/><Column id=\"MICROSHORT\" type=\"STRING\" size=\"256\"/><Column id=\"표면도금1\" type=\"STRING\" size=\"256\"/><Column id=\"표면도급2\" type=\"STRING\" size=\"256\"/><Column id=\"표면도급3\" type=\"STRING\" size=\"256\"/><Column id=\"MK표기\" type=\"STRING\" size=\"256\"/><Column id=\"사양주차표기\" type=\"STRING\" size=\"256\"/><Column id=\"Guid기준\" type=\"STRING\" size=\"256\"/><Column id=\"도금선연결층\" type=\"STRING\" size=\"256\"/><Column id=\"외곽Guide\" type=\"STRING\" size=\"256\"/><Column id=\"VisionPress기준\" type=\"STRING\" size=\"256\"/><Column id=\"Trimming인식마크\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"접수번호\">CAM20020001</Col><Col id=\"고객사\">한국성전</Col><Col id=\"품목코드변경전\">10402116B3</Col><Col id=\"REV변경전\">FA1</Col><Col id=\"품목코드변경후\">1042116B7</Col><Col id=\"REV변경후\">FA1</Col><Col id=\"작업구분\">신규</Col><Col id=\"진행구분\">개발샘플</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("Site");
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
            obj.set_taborder("21");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","210",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","350","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","350","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("고객ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_03","108","235",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("제품타입");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("품목 버전");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label09","0","235","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label10","0","260","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("등록번호");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label11","0","285","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("CAM담당");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label12","0","310","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("사양담당");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb00");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("전월");
            obj.set_value("");
            obj.set_index("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210205");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210205");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_03","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_04","108","160","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","185",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"185","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_04","108","260",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_05","108","285",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"285","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_06","108","310",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"310","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
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

            obj = new Static("sta_title","30","16","111","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("CAM작업의뢰");
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

            obj = new Button("btn_00_00",null,"16","44","24","btn_new:5",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("복사");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","129","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("CAM 리스트  <fc v=\"#f31d24\">12</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,"103","34",null,"478",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("CAM 요청정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","Static01_00:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd0");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"접수번호\"/><Cell col=\"3\" text=\"고객사\"/><Cell col=\"4\" text=\"품목코드(변경전)\"/><Cell col=\"5\" text=\"REV(변경전)\"/><Cell col=\"6\" text=\"품목코드(변경후)\"/><Cell col=\"7\" text=\"REV(변경후)\"/><Cell col=\"8\" text=\"작업구분\"/><Cell col=\"9\" text=\"진행구분\"/><Cell col=\"10\" text=\"PNL Size Y\"/><Cell col=\"11\" text=\"모델납기일\"/><Cell col=\"12\" text=\"사양담당\"/><Cell col=\"13\" text=\"CAM담당\"/><Cell col=\"14\" text=\"제품타입\"/><Cell col=\"15\" text=\"기존고객REV\"/><Cell col=\"16\" text=\"적용고객REV\"/><Cell col=\"17\" text=\"내층회로보정자\"/><Cell col=\"18\" text=\"외층회로보정자\"/><Cell col=\"19\" text=\"OLB보정자\"/><Cell col=\"20\" text=\"쏠림동박적용\"/><Cell col=\"21\" text=\"적용층\"/><Cell col=\"22\" text=\"APPLYLYE\"/><Cell col=\"23\" text=\"ZIP단자\"/><Cell col=\"24\" text=\"PAD보정\"/><Cell col=\"25\" text=\"BBT기준\"/><Cell col=\"26\" text=\"제작처\"/><Cell col=\"27\" text=\"입고처\"/><Cell col=\"28\" text=\"연산율\"/><Cell col=\"29\" text=\"BBT구분\"/><Cell col=\"30\" text=\"JIG제작\"/><Cell col=\"31\" text=\"단자구분\"/><Cell col=\"32\" text=\"BBT방식\"/><Cell col=\"33\" text=\"BBT납기일\"/><Cell col=\"34\" text=\"MICROSHORT\"/><Cell col=\"35\" text=\"표면도금1\"/><Cell col=\"36\" text=\"표면도급2\"/><Cell col=\"37\" text=\"표면도급3\"/><Cell col=\"38\" text=\"MK표기\"/><Cell col=\"39\" text=\"사양주차표기\"/><Cell col=\"40\" text=\"Guid기준\"/><Cell col=\"41\" text=\"도금선연결층\"/><Cell col=\"42\" text=\"외곽Guide\"/><Cell col=\"43\" text=\"Vision Press기준\"/><Cell col=\"44\" text=\"Trimming인식마크\"/><Cell col=\"45\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:접수번호\"/><Cell col=\"3\" text=\"bind:고객사\"/><Cell col=\"4\" text=\"bind:품목코드변경전\"/><Cell col=\"5\" text=\"bind:REV변경전\"/><Cell col=\"6\" text=\"bind:품목코드변경후\"/><Cell col=\"7\" text=\"bind:REV변경후\"/><Cell col=\"8\" text=\"bind:작업구분\"/><Cell col=\"9\" text=\"bind:진행구분\"/><Cell col=\"10\" text=\"bind:PNLSizeY\"/><Cell col=\"11\" text=\"bind:모델납기일\"/><Cell col=\"12\" text=\"bind:사양담당\"/><Cell col=\"13\" text=\"bind:CAM담당\"/><Cell col=\"14\" text=\"bind:제품타입\"/><Cell col=\"15\" text=\"bind:기존고객REV\"/><Cell col=\"16\" text=\"bind:적용고객REV\"/><Cell col=\"17\" text=\"bind:내층회로보정자\"/><Cell col=\"18\" text=\"bind:외층회로보정자\"/><Cell col=\"19\" text=\"bind:OLB보정자\"/><Cell col=\"20\" text=\"bind:쏠림동박적용\"/><Cell col=\"21\" text=\"bind:적용층\"/><Cell col=\"22\" text=\"bind:APPLYLYE\"/><Cell col=\"23\" text=\"bind:ZIP단자\"/><Cell col=\"24\" text=\"bind:PAD보정\"/><Cell col=\"25\" text=\"bind:BBT기준\"/><Cell col=\"26\" text=\"bind:제작처\"/><Cell col=\"27\" text=\"bind:입고처\"/><Cell col=\"28\" text=\"bind:연산율\"/><Cell col=\"29\" text=\"bind:BBT구분\"/><Cell col=\"30\" text=\"bind:JIG제작\"/><Cell col=\"31\" text=\"bind:단자구분\"/><Cell col=\"32\" text=\"bind:BBT방식\"/><Cell col=\"33\" text=\"bind:BBT납기일\"/><Cell col=\"34\" text=\"bind:MICROSHORT\"/><Cell col=\"35\" text=\"bind:표면도금1\"/><Cell col=\"36\" text=\"bind:표면도급2\"/><Cell col=\"37\" text=\"bind:표면도급3\"/><Cell col=\"38\" text=\"bind:MK표기\"/><Cell col=\"39\" text=\"bind:사양주차표기\"/><Cell col=\"40\" text=\"bind:Guid기준\"/><Cell col=\"41\" text=\"bind:도금선연결층\"/><Cell col=\"42\" text=\"bind:외곽Guide\"/><Cell col=\"43\" text=\"bind:VisionPress기준\"/><Cell col=\"44\" text=\"bind:Trimming인식마크\"/><Cell col=\"45\" text=\"bind:등록일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"478","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","0","0",null,"200","0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("68");
            obj.set_text("기본정보");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_08","73.80%","43","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("65");
            obj.set_text("품목명(변경후)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_12","73.80%","68","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("66");
            obj.set_text("CAM담당");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_01","0","18","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("57");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_05","0","43","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("58");
            obj.set_text("Rev(변경전)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_09","0","68","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("59");
            obj.set_text("접수번호");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_10","23.80%","68","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("60");
            obj.set_text("사양담당");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_02","23.80%","18","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("61");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_07","47.81%","43","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("62");
            obj.set_text("품목명(변경전)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_11","47.81%","68","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("63");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_06","23.80%","43","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("64");
            obj.set_text("Rev(변경후)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"18","22","20","label01_02:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_25","label01_01:5","18",null,"20","btn_search01:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_03","47.81%","18","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("67");
            obj.set_text("품목코드(변경전)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_04","73.80%","18","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("69");
            obj.set_text("품목코드(변경후)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_13","0","93","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("70");
            obj.set_text("진행구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_17","0","118","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("71");
            obj.set_text("모델납기일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_21","0","143","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("72");
            obj.set_text("OLB보정지");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_14","23.80%","93","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("73");
            obj.set_text("제품타입");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_18","23.80%","118","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("74");
            obj.set_text("적용 고객사REV.");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_15","47.81%","93","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("75");
            obj.set_text("PNL Size Y");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_19","47.81%","118","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("76");
            obj.set_text("내층회로 보정지코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_22","47.81%","143","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("77");
            obj.set_text("쏠림 동박 적용");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_16","73.80%","93","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("78");
            obj.set_text("기존 고객사REV.");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_20","73.80%","118","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("79");
            obj.set_text("외층회로보정지코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_23","73.80%","143","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("80");
            obj.set_text("적용층");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label01_02:6","18",null,"20","label01_03:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("20200527162742000");
            obj.set_dateformat("yyyy-MM-dd ddd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd ddd HH:mm:ss");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_24","0","168","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("81");
            obj.set_text("PAD 보정");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01_25","23.80%","168","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("82");
            obj.set_text("ZIP 단자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"18","22","20","label01_04:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","label01_03:5","18",null,"20","btn_search02:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"18","22","20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","label01_04:5","18",null,"20","btn_search03:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","label01_05:5","43",null,"20","label01_06:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_value("FA1");
            obj.set_readonly("true");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_03","label01_06:5","43",null,"20","label01_07:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_value("FA1");
            obj.set_readonly("true");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_04","label01_07:5","43",null,"20","label01_08:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_05","label01_08:5","43",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_06","label01_09:5","68",null,"20","label01_10:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            obj.set_value("FA1");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search04",null,"68","22","20","label01_11:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_07","label01_10:5","68",null,"20","btn_search04:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search05",null,"68","22","20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_08","label01_12:5","68",null,"20","btn_search05:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label01_11:5","68",null,"20","label01_12:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("14");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label01_13:5","93",null,"20","label01_14:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("17");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_02","label01_14:5","93",null,"20","label01_15:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("18");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_09","label01_15:5","93",null,"20","label01_16:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("19");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_10","label01_16:5","93",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("20");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_01","label01_17:5","118",null,"20","label01_18:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd ddd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd ddd HH:mm:ss");
            obj.set_value("20210312120000000");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_11","label01_18:5","118",null,"20","label01_19:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("22");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_03","label01_19:5","118",null,"20","label01_20:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("23");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_04","label01_20:5","118",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("24");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_12","label01_21:5","143",null,"20","label01_22:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("25");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_05","label01_22:5","143",null,"20","label01_23:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("26");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_06","92.8%","143",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("65ml");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_13","label01_23:5","143",null,"20","cmb_06:3",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("27");
            obj.set_value("2층");
            obj.set_text("2층");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_07","label01_24:5","168",null,"20","label01_25:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("29");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_08","label01_25:5","168",null,"20","label01_22:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("30");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","0","202",null,"175","0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("83");
            obj.set_text("사양 정보");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_01","0","220","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("84");
            obj.set_text("BBT 기준");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_02","23.80%","220","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("85");
            obj.set_text("제작처");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_03","47.81%","220","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("86");
            obj.set_text("입고처");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_04","73.80%","220","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("87");
            obj.set_text("연신율");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_05","0","245","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("88");
            obj.set_text("BBT 구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_06","23.80%","245","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("89");
            obj.set_text("JIG제작");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_07","47.81%","245","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("90");
            obj.set_text("단자구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_08","73.80%","245","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("91");
            obj.set_text("BBT방식");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_09","0","270","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("92");
            obj.set_text("BBT 납기일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_10","23.80%","270","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("93");
            obj.set_text("MICROSHORT");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_11","47.81%","270","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("94");
            obj.set_text("Trimming인식 마크");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_12","73.80%","270","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("95");
            obj.set_text("Vision Press 기준");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_13","0","295","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("96");
            obj.set_text("표면도금1");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_14","23.80%","295","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("97");
            obj.set_text("표면도금2");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_15","47.81%","295","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("98");
            obj.set_text("표면도금3");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_16","73.80%","295","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("99");
            obj.set_text("M/K 표기");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_17","0","320","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("100");
            obj.set_text("사양 주차표기");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_18","23.80%","320","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("101");
            obj.set_text("CAM 주차표기");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_19","47.81%","320","12.53%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("102");
            obj.set_text("Guid 기준");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_20","73.80%","320","12.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("103");
            obj.set_text("도금선 연결층");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02_21","0","345","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("104");
            obj.set_text("외곽 Guide");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_09","label02_01:5","220",null,"20","label02_02:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_10","label02_02:5","220",null,"20","label02_03:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("32");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_11","label02_03:5","220",null,"20","label02_04:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("33");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_12","label02_04:5","220",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("34");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_13","label02_05:5","245",null,"20","label02_06:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("35");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_14","label02_06:5","245",null,"20","label02_07:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("36");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_15","label02_07:5","245",null,"20","label02_08:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("37");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_16","label02_08:5","245",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_02","label02_09:5","270",null,"20","label02_10:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("39");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_17","label02_10:5","270",null,"20","label02_11:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("40");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_18","label02_11:5","270",null,"20","label02_12:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("41");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_14","label02_12:5","270",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("42");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_19","label02_13:5","295",null,"20","label02_14:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("43");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_20","label02_14:5","295",null,"20","label02_15:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("44");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_21","label02_15:5","295",null,"20","label02_16:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("45");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_22","label02_21:5","345",null,"20","label02_18:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("51");
            obj.set_text("cmb_09");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_15","label02_17:5","320",null,"20","label02_18:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("47");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_16","label02_18:5","320",null,"20","label02_19:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("48");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_17","label02_19:5","320",null,"20","label02_20:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("49");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_18","label02_16:5","295",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("46");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_19","label02_20:5","320",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("50");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox02","0","379",null,"99","0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("105");
            obj.set_text("수정사항 리스트");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_1","0","397","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("106");
            obj.set_text("수정사항1");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_4","47.81%","397",null,"20","380",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("107");
            obj.set_text("수정사항4");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_20","label03_4:5","397","370","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("55");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_2","0","422","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("108");
            obj.set_text("수정사항2");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_5","47.81%","422",null,"20","380",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("109");
            obj.set_text("수정사항5");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_21","label03_5:5","422","370","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("56");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_3","0","447","10.44%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("110");
            obj.set_text("수정사항3");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_22","label03_1:5","397",null,"20","label03_4:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("52");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_23","label03_2:5","422",null,"20","label03_5:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("53");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_24","label03_3:5","447",null,"20","label03_5:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("54");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIdclass",null,"6","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);
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
        this.loadIncludeScript("template18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
