(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_06");
            this.set_titletext("Button");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,1676);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grdHead", this);
            obj._setContents("<ColumnInfo><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"icon_D\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"userdata\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">0001</Col><Col id=\"icon\">theme://images/grd_head_icon1_N.png</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon1_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Sort Ascending</Col><Col id=\"userdata\">Sort Ascending</Col></Row><Row><Col id=\"id\">0002</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon2_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon2_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Sort Descending</Col><Col id=\"userdata\">Sort Descending</Col></Row><Row><Col id=\"id\">0003</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Clear Sorting</Col><Col id=\"userdata\">Clear Sorting</Col></Row><Row><Col id=\"id\">0004</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Clear All Sorting</Col><Col id=\"userdata\">Clear All Sorting</Col></Row><Row><Col id=\"id\">0005</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon5_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon5_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Group By This Column</Col><Col id=\"userdata\">Group By This Column</Col></Row><Row><Col id=\"id\">0006</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon6_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon6_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Group By Box</Col><Col id=\"userdata\">Show Group By Box</Col></Row><Row><Col id=\"id\">0007</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Hide This Column</Col><Col id=\"userdata\">Hide This Column</Col></Row><Row><Col id=\"id\">0008</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon8_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon8_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Column/Band Chooser</Col><Col id=\"userdata\">Column/Band Chooser</Col></Row><Row><Col id=\"id\">0009</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon9_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon9_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Best Fit</Col><Col id=\"userdata\">Best Fit</Col></Row><Row><Col id=\"id\">0010</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Best Fit(All Columns)</Col><Col id=\"userdata\">Best Fit(All Columns)</Col></Row><Row><Col id=\"id\">0011</Col><Col id=\"icon\">url(&apos;theme://images/grd_head_icon11_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_head_icon11_D.png&apos;)</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Filter Editor...</Col><Col id=\"userdata\">Filter Editor...</Col></Row><Row><Col id=\"id\">0012</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Find Panel</Col><Col id=\"userdata\">Show Find Panel</Col></Row><Row><Col id=\"id\">0013</Col><Col id=\"enable\">1</Col><Col id=\"level\">0</Col><Col id=\"caption\">Show Auto Filter Row</Col><Col id=\"userdata\">Show Auto Filter Row</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdBody", this);
            obj._setContents("<ColumnInfo><Column id=\"icon\" type=\"STRING\" size=\"256\"/><Column id=\"icon_D\" type=\"STRING\" size=\"256\"/><Column id=\"menu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"menu\">전체 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon1_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">행 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon2_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">열 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon3_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">전체 행 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon4_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">행 선택</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon5_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">행 추가</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon6_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">행 복사</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon7_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">행 삭제</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon8_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">복사</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon9_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">복사-열제목 포함</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon10_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">붙여넣기</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon11_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">열 고정</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon12_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">열 고정 취소</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon13_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">엑셀 가져오기</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon14_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">엑셀 내보내기</Col><Col id=\"icon\">url(&apos;theme://images/grd_body_icon15_N.png&apos;)</Col><Col id=\"icon_D\">url(&apos;theme://images/grd_body_icon1_D.png&apos;)</Col></Row><Row><Col id=\"menu\">품목사양정보</Col><Col id=\"icon\"/></Row><Row><Col id=\"menu\">Routing</Col><Col id=\"icon\"/></Row><Row><Col id=\"menu\">품목조회</Col><Col id=\"icon\"/></Row><Row><Col id=\"menu\">Routing 자원/치공구/외주단가 등록</Col><Col id=\"icon\"/></Row><Row><Col id=\"menu\">공정 Spec 등록</Col><Col id=\"icon\"/></Row><Row><Col id=\"menu\">Routing Roll Loss</Col><Col id=\"icon\"/></Row><Row><Col id=\"menu\">Routing Window Time</Col><Col id=\"icon\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_04_01_00_01","56","278","90","36",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("36px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","791","955","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("15px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01","791","994","70","15",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("15px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00","410","891","24","50",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("24");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00_01_00_00","363","926","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00_01_00","356","701","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00_01","20","701","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00_00_00","609","535","89","20",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00_00","309","535","89","20",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00","20","535","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","57","221","90","36",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("36px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","817","970","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_shuttleT");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","783","970","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_shuttleB");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button Components");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","441",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("업무화면");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","396","535","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("cssclass : btn_WF_finder");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","360","535","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","457","926","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass : btn_WF_shuttleT");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","410","926","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_shuttleT");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","457","1006","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("cssclass : btn_WF_shuttleL");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","410","1006","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","457","1046","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("cssclass : btn_WF_shuttleR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","410","1046","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","457","966","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("cssclass : btn_WF_shuttleB");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","410","966","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_shuttleB");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","66","535","97","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Default Button");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","67","536","10","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","152","536","10","18",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","142","993","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_shuttleL");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","142","959","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_shuttleR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","142","983","25","10",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","30","916","97","148",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("A영역");
            obj.set_visible("false");
            obj.set_background("#f5f5f5");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","181","916","102","148",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("B영역");
            obj.set_visible("false");
            obj.set_background("#f5f5f5");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","32","1074","243","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("* 셔틀버튼은 좌우 영역과 15px  간격을 둔다.");
            obj.set_cssclass("sta_font_skyBlue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","724","916","180","39",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("A영역");
            obj.set_visible("false");
            obj.set_background("#f5f5f5");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","724","1009","180","40",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("B영역");
            obj.set_visible("false");
            obj.set_background("#f5f5f5");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","807","970","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("w\r\n10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","722","1070","255","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("* 셔틀버튼은 위아래 영역과 15px  간격을 둔다.");
            obj.set_cssclass("sta_font_skyBlue");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button21","67","701","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("그리드관련버튼");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","141","1210","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_paging_prev");
            obj.set_tooltiptext("prev");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","116","1210","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("btn_paging_first");
            obj.set_tooltiptext("First");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","175","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("1");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","462","1210","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_paging_next");
            obj.set_tooltiptext("Next");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","486","1210","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_paging_end");
            obj.set_tooltiptext("End");
            this.addChild(obj.name, obj);

            obj = new Button("Button32","202","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("2");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button33","175","1243","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("btn_paging_num_S");
            this.addChild(obj.name, obj);

            obj = new Button("Button34","229","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("3");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button35","256","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("4");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button36","283","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("5");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button37","310","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("6");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button38","337","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("7");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button39","418","1210","34","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button40","391","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("9");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button41","364","1210","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button45","107","221","142","36",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","0","51",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("공통버튼");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","282","229","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("cssclass : btn_SA_search");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button54_00_00_00",null,"372","31","24","502",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("초기화");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_00_00",null,"372","51","24","776",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("확장3");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00_00",null,"372","51","24","827",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("확장2");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"372","51","24","867",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("확장1");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnForm",null,"372","26","24","533",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"372","31","24","590",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSav",null,"372","31","24","621",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","180","413","124","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("버튼 간격은 0px입니다.");
            obj.set_cssclass("sta_font_skyBlue");
            this.addChild(obj.name, obj);

            obj = new Button("Button31_00","175","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("1");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button32_00","202","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("2");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button34_00","229","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("3");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button35_00","256","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("4");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button36_00","283","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("5");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button37_00","310","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("6");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button38_00","337","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("7");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button39_00","418","1285","34","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button40_00","391","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("9");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("Button41_00","364","1285","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("8");
            obj.set_cssclass("btn_paging_num");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"372","31","24","652",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("신규");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","180","535","79","21",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Default Button");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","60","506","114","18",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("Default Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_00","360","506","224","18",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("상세영역 검색버튼");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Button("Button21_00","404","701","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("btn_WF_grdLink");
            obj.set_text("그리드관련버튼");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00_00","405","702","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00_00_00","510","702","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01","67","676","160","18",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("Grid 우측상단 Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_00","404","676","198","18",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("Grid 우측상단 링크 Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00_00_00_00","162","702","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static53_00_00_01","68","702","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_00_00","636","1215","88","18",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("Splitter H");
            obj.set_cssclass("txt_16B");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_00_00_00","796","1215","88","18",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("Splitter V");
            obj.set_cssclass("txt_16B");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_01","30","881","160","18",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("Shuttle Buttons");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_00_00","660","506","224","18",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("조회영역 검색버튼");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_00","660","535","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01","696","535","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("cssclass : btn_WF_finder");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_00_00","660","567","25","18",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("btn_WF_inputDel");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_01_00","696","565","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("cssclass : btn_WF_inputDel");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","350","576","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_01","470","576","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","660","606","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","803","606","95","20",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("search");
            obj.set_value("데이타입력");
            obj.set_text("데이타입력");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_00_00_00","880","607","16","18",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("btn_WF_inputDel");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_00_01","755","606","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Button("Button14_00","75","575","68","20",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("기본버튼");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","65","552","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("10");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00","148","552","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("10");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01","66","721","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("10");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00","159","721","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("10");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_01_00","402","721","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("10");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00_00_00_00","506","721","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("10");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00","212","1245","154","24",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("cssclass : btn_paging_num_S");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Div("div_Pageing","59","1145","523","24",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_url("common::com_paging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static33_00","59","1114","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("* DIV - url 형태");
            obj.set_cssclass("sta_font_red");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00_00_00_00","609","567","89","18",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("18px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_02","558","1145","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_00","127","958","15","50",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("15");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_00_00","166","958","15","50",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("15");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","528","700","137","24",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("cssclass : btn_WF_grdLink");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","181","700","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("cssclass : btn_WF_grdCom");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00","212","1186","154","24",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("cssclass : btn_paging_num");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button21_01","709","701","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("btn_WF_grdTreeOpen");
            obj.set_text("열기");
            this.addChild(obj.name, obj);

            obj = new Button("Button21_01_00","709","734","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("btn_WF_grdTreeClose");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_00_01","709","676","276","18",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("Grid 우측상단 트리열기&닫기 Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_01","782","701","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("cssclass : btn_WF_grdTreeOpen");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_01_00","784","733","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("cssclass : btn_WF_grdTreeClose");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button44_00","107","278","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_cssclass("btn_SA_reset");
            obj.set_tooltiptext("초기화");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static40_00","279","278","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("cssclass : btn_SA_reset");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button06_00_01_00","898","606","22","20",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_02","67","756","197","18",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("Grid 우측상단 공통 Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdUp","155","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnForm00",null,"372","31","24","559",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"372","31","24","745",null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_cssclass("btn_com_confirm");
            obj.set_tooltiptext("확인");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00","56","372","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDown","126","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy","99","791","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel","73","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd","47","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_02","41","104","213","18",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("검색조건 새로형 조회 Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_01_00","546","278","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_01","540","221","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Button("Button44_01","588","221","46","24",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.addChild(obj.name, obj);

            obj = new Static("Static40_01","669","225","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("cssclass : btn_SA_search");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("Button44_00_00","622","278","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("btn_SA_reset2");
            obj.set_tooltiptext("검색조건 초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static40_00_00","673","282","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("cssclass : btn_SA_reset2");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_02_00","561","104","213","18",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("검색조건 가로형 조회 Button");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Button("Button44_01_00","598","171","46","24",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button44_00_00_00","649","171","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_cssclass("btn_SA_reset2");
            obj.set_tooltiptext("검색조건 초기화");
            this.addChild(obj.name, obj);

            obj = new Button("Button45_00","82","171","142","36",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","234","171","107","36",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01","82","140","142","50",null,null,null,null,null,null,this);
            obj.set_taborder("146");
            obj.set_text("142");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00","234","140","107","50",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("107");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("Static43_00","352","180","133","21",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("버튼 간격은 10px입니다.");
            obj.set_cssclass("sta_font_skyBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static43_00_00","694","174","133","21",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("버튼 간격은 5px입니다.");
            obj.set_cssclass("sta_font_skyBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01","366","630","82","24",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("서블블랙버튼");
            obj.set_cssclass("btn_WF_black");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02","455","630","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("cssclass : btn_WF_black");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdReload","240","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_cssclass("btn_WF_grdReload");
            obj.set_tooltiptext("새로고침");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02","227","1498","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("NO");
            obj.set_cssclass("btn_pop_no_big");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00","62","1498","140","48",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("YES");
            obj.set_cssclass("btn_pop_yes_big");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_00_00","62","1449","41","28",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_text("YES");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_01","116","1449","40","28",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("NO");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static49_01_01_00","30","1401","160","18",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("팝업창 Buttons");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdSave","184","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_cssclass("btn_WF_grdSave");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdUp01","592","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDown01","563","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy01","536","791","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel01","510","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd01","484","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdReload01","677","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_cssclass("btn_WF_grdReload");
            obj.set_tooltiptext("새로고침");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdSave01","621","791","29","24",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_cssclass("btn_WF_grdSave");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button21_02","309","791","86","24",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("불량명 추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button21_00_00",null,"791","81","24","544",null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_cssclass("btn_WF_grdLink");
            obj.set_text("관련화면");
            this.addChild(obj.name, obj);

            obj = new Button("Button28_00","141","1285","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_cssclass("btn_paging_prev");
            obj.set_tooltiptext("prev");
            this.addChild(obj.name, obj);

            obj = new Button("Button29_00","462","1285","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_cssclass("btn_paging_next");
            obj.set_tooltiptext("Next");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"372","31","24","714",null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_cssclass("btn_com_cancel");
            obj.set_tooltiptext("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnReturn",null,"372","31","24","683",null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_cssclass("btn_com_return");
            obj.set_tooltiptext("반려");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00","165","1209","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("w\r\n10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","452","1210","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("w\r\n10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00_01","165","1285","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("w\r\n10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","452","1286","10","24",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("w\r\n10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd01_00","744","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdDel01_00","770","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdFileDown","800","791","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_cssclass("btn_WF_grdFileDown");
            obj.set_tooltiptext("파일다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdFileUp","830","791","25","24",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_cssclass("btn_WF_grdFileUp");
            obj.set_tooltiptext("파일업로드");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01_00","366","605","82","20",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("서블블랙버튼");
            obj.set_cssclass("btn_WF_black");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdZoomOut","890","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_cssclass("btn_WF_grdZoomOut");
            obj.set_tooltiptext("축소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdZoomIn","860","791","26","24",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_cssclass("btn_WF_grdZoomIn");
            obj.set_tooltiptext("확대");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01_01","116","630","88","24",null,null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("서블블랙버튼");
            obj.set_cssclass("btn_WF_green");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_02_00","205","630","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("cssclass : btn_WF_green");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_00","669","1248","11","93",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_cssclass("img_splitter_V");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_01","762","1289","167","11",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_cssclass("img_splitter_H");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_01","586","1351","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("cssclass : img_splitter_V");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_01_00","772","1317","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_text("cssclass : img_splitter_H");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdPrint","213","791","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_cssclass("btn_WF_grdPrint");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_grdPrint00","650","791","27","24",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_cssclass("btn_WF_grdPrint");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,1676,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("Guide_06.xfdl", function() {

        this.btn_03_onclick = function(obj,e)
        {
        		this.popMenu00.trackPopupByComponent(obj, 0, 29);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Guide_06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
