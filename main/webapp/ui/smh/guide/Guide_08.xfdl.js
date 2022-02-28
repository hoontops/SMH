(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_08");
            this.set_titletext("표준 서식");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,781);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_00", this);
            obj._setContents("<ColumnInfo><Column id=\"종류\" type=\"STRING\" size=\"256\"/><Column id=\"입력포멧\" type=\"STRING\" size=\"256\"/><Column id=\"입력예시\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"종류\">날짜(년월일)</Col></Row><Row><Col id=\"종류\">날짜(년월)</Col></Row><Row><Col id=\"종류\">년도</Col></Row><Row><Col id=\"종류\">날짜 + 시:분:초</Col></Row><Row><Col id=\"종류\">날짜 + 시:분:초</Col></Row><Row><Col id=\"종류\">기간</Col></Row><Row><Col id=\"종류\">숫자</Col></Row><Row><Col id=\"종류\">통화</Col></Row><Row><Col id=\"종류\">팝업으로 찾는 데이터(조회영역)</Col></Row><Row><Col id=\"종류\">팝업으로 찾는 데이터</Col></Row><Row><Col id=\"종류\">코드+명</Col></Row><Row><Col id=\"종류\">코드 콤보</Col></Row><Row><Col id=\"종류\">전화번호/휴대폰번호</Col></Row><Row><Col id=\"종류\">주민등록번호/외국인번호</Col></Row><Row><Col id=\"종류\">법인등록번호</Col></Row><Row><Col id=\"종류\">사업자등록번호</Col></Row><Row><Col id=\"종류\">카드번호</Col></Row><Row><Col id=\"종류\">주소</Col></Row><Row><Col id=\"종류\">주소</Col></Row><Row><Col id=\"종류\">이메일</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static14","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("표준 서식");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","51","1024","651",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("grd_detail");
            obj.set_binddataset("ds_00");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"390\"/><Column size=\"440\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"종류\"/><Cell col=\"1\" text=\"입력포멧\"/><Cell col=\"2\" text=\"입력예시\"/></Band><Band id=\"body\"><Cell text=\"bind:종류\" cssclass=\"cell_head\" textAlign=\"left\" padding=\"0px 0px 0px 20px\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:입력포멧\"/><Cell col=\"2\" text=\"bind:입력예시\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","205","87","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00","205","118","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_00","268","118","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01","205","149","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_02","595","118","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_00_00","658","118","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("07");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_00","595","149","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("2020");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","595","87","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200624");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01","205","180","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_00","205","211","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00","318","180","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_format("##:##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","518","180","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_format("##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_01","405","180","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_02","205","242","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","315","242","17","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_02_00","332","242","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_00_00","405","211","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01","205","273","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_format(",###");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00","405","273","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_format(",###");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","495","273","19","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00_00","205","304","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format(",###");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","295","304","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_01","405","304","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00_00_00","468","304","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_format(",###");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","205","335","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","345","335","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","205","366","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","325","366","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","205","397","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","535","397","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","328","397","207","20",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_02","205","428","230","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_03","205","459","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","265","459","14","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","279","459","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("9928");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","339","459","14","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","353","459","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("9928");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00","433","459","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("9928");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02","205","490","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_format("######-#{999999}");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00","205","521","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_format("######-#######");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_00","205","552","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_00_00","205","583","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_format("####-####-####-####");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_00_00_00","205","614","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_format("###-###");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01","265","614","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","290","614","290","20",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02_00","205","645","379","20",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","205","676","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01","345","676","18","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03_00","363","676","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("shinsegae.com");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_04","485","676","99","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_03","595","180","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200624");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_00_01","595","211","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_value("20200624182425000");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_01","708","180","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_format("##:##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00_00","908","180","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_format("##:##");
            obj.set_type("string");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_01_00","795","180","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200624");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_02_01","595","242","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200624");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01","705","242","17","20",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_02_00_00","722","242","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200624");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_00_00_00","795","211","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_value("20200624125300000");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_01","595","273","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_format(",###");
            obj.set_value("1234567890");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00_01","795","273","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_format(",###");
            obj.set_value("1234567890");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_01","885","273","19","20",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("%");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00_00_01","595","304","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_format(",###");
            obj.set_value("1234567890");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_01","685","304","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("원");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_01_00","795","304","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("KRW");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_01_00_00_00_00","858","304","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_format(",###");
            obj.set_value("1234567890");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","595","335","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","730","335","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01","595","366","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_value("홍길동");
            obj.set_text("홍길동");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_02","715","366","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_01","595","397","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_value("1231");
            obj.set_text("1231");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00_00","855","397","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","648","397","207","20",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_value("코드명");
            obj.set_text("코드명");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_02_00","595","428","230","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("012-코드가 함께 나오는 코드 콤보");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_03_00","595","459","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("010");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_02","655","459","14","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01_01","669","459","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_value("1234");
            obj.set_text("1234");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00","729","459","14","20",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_01","743","459","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_value("1234");
            obj.set_text("1234");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01_00_00_00","823","459","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("9928");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_01","595","490","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_format("######-#{999999}");
            obj.set_type("string");
            obj.set_value("6901231833333");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_01","595","521","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_value("1212121212121");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_00_01","595","552","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_format("###-##-#####");
            obj.set_type("string");
            obj.set_value("7938500297");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_00_00_01","595","583","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_format("####-####-####-####");
            obj.set_type("string");
            obj.set_value("1234123412341234");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_02_00_00_00_00_00","595","614","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_format("###-###");
            obj.set_type("string");
            obj.set_value("123123");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_01_00","655","614","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02_01","680","614","290","20",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_readonly("true");
            obj.set_value("경기도 안산시 단원구 초지동 해봉로 149");
            obj.set_text("경기도 안산시 단원구 초지동 해봉로 149");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02_00_00","595","645","379","20",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_value("(주)인터플렉스");
            obj.set_text("(주)인터플렉스");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03_01","595","676","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_value("interflex");
            obj.set_text("interflex");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_01_00","735","676","18","20",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("@");
            obj.set_cssclass("sta_WF_unit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03_00_00","753","676","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_value("interflex.com");
            obj.set_text("interflex.com");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_00_01_04_00","875","676","99","20",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("--선택--");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,781,this,function(p){});
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
        this.loadIncludeScript("Guide_08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
