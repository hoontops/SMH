(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("accessibilityGuide");
            this.set_titletext("웹접근성 가이드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,1658);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_02","0","120","283","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("웹접근성 운영 및 준수 지침");
            obj.set_cssclass("txt_18B");
            this.addChild(obj.name, obj);

            obj = new Static("guide_00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h60");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","0","54",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("웹접근성 안내");
            obj.set_cssclass("txt_24B");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("guide_02","161","83","317","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h40");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","0","154",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("웹 사이트 이용에 있어 모든사함이 동등하게 접근하고 이용에 불편함이 없도록 하는 것을 목표로 하여, \"한국형 웹 콘텐츠 접근성 지침 2.1’(KCS.OT-1 0.0003/R2)\"을 준수하여 구축 운영하고 있습니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            obj.set_font("normal 400 13px/1.5 \"Malgun Gothic\",\"맑은 고딕\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("guide_03","0","143","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","0","231","201","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("센서리더 설정 안내");
            obj.set_cssclass("txt_18B");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","0","266",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("부동산거래관리시스템을 이용하실 때 스크린리더(센스리더 프로페셔널 5.6.0)을 사용하는 분들을 위한 안내입니다.\r\n센서리더 프로페셔널 5.6.0에서 아래와 같이 환경설정을 하시면 보다 편리하게 이용할 수 있습니다.\r\n<fc v=\'#ff0000\'>※부동산거래관리시스템은 센스리더 5.6.0버전 이상에 최적화되어 있습니다.</fc>");
            obj.set_cssclass("txt_13");
            obj.set_usedecorate("true");
            obj.set_font("normal 400 13px/1.5 \"Malgun Gothic\",\"맑은 고딕\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("guide_04","0","195","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h40");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("guide_05","0","255","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("guide_06","0","327","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h40");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_06","0","363","167","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("센스리더 설정 방법");
            obj.set_cssclass("txt_18B,sta_font_blue");
            this.addChild(obj.name, obj);

            obj = new Static("guide_07","0","384","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("guide_09","0","642","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07","0","618","305","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("키보드 이용 안내 및 참고사항");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("guide_08","0","582","60","40",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("h40");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","0","653","368","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("본 시스템의 키보드 이용 안내 및 이용 시 참고사항입니다.");
            obj.set_cssclass("txt_13,sta_font_gray");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("guide_10","0","674","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","694",null,"964","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","0","0",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_02","0","0","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04","310","15",null,"40","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("- 웹 접근성 모드로 전환됩니다.\r\n- 시각장애인 및 키보드 사용자께서는 Ctrl + SpaceBar를 입력하신 후 본 사이트를 이용하시기 바랍니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_05","20","24","43","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("Ctrl");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_06","92","24","79","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("SpaceBar");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07","63","24","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_08","0","74",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_09","0","74","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_10","20","98","45","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("Tab");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_11","65","98","33","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("or");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_12","310","98",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("- 텍스트 영역을 제외한 다음 항목 또는 이전항목으로 이동합니다. (링크, 버튼 등)");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_13","98","98","51","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("Shift");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_14","182","98","45","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("12");
            obj.set_text("Tab");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_15","149","98","33","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("13");
            obj.set_text("or");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_16","0","148",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_17","0","148","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_18","20","172","35","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("16");
            obj.set_text("↑");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_19","55","172","33","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("17");
            obj.set_text("or");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_20","310","163",null,"40","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("18");
            obj.set_text("- 텍스트 영역을 포함한 화면내의 다음 항목 또는 이전항목으로 이동합니다. \r\n- 그리드표의 셀을 상/하 이동합니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_21","88","172","35","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("19");
            obj.set_text("↓");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_22","0","222",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_23","0","222","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_24","20","246","35","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("22");
            obj.set_text("←");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_25","55","246","33","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("23");
            obj.set_text("or");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_26","310","237",null,"40","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("24");
            obj.set_text("- 라디오버튼의 항목을 선택합니다. \r\n- 그리드표의 셀을 좌/우 이동합니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_27","88","246","35","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("25");
            obj.set_text("→");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_28","0","296",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_29","0","296","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_30","92","320","35","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("28");
            obj.set_text("↑");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_31","127","320","33","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("29");
            obj.set_text("or");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_32","310","320",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("30");
            obj.set_text("- 드롭다운 메뉴 내의 항목을 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_33","160","320","35","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("31");
            obj.set_text("↓");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_34","20","320","43","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("32");
            obj.set_text("Ctrl");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_35","63","320","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("33");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_36","0","370",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_37","0","370","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_38","92","394","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("36");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_39","132","394","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("37");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_40","310","394",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("38");
            obj.set_text("- 그리드표의 해당행의 첫 번째 Cell로 Focus가 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_41","165","394","59","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("39");
            obj.set_text("Home");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_42","20","394","43","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("40");
            obj.set_text("Ctrl");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_43","63","394","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("41");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_44","0","444",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_45","0","444","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_46","92","468","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("44");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_47","132","468","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("45");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_48","310","468",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("46");
            obj.set_text("- 그리드표의 해당행의 마지막 Cell로  Focus가 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_49","160","468","45","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("47");
            obj.set_text("End");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_50","20","468","43","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("48");
            obj.set_text("Ctrl");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_51","63","468","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("49");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_52","0","518",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_53","0","518","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_54","92","542","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("52");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_55","132","542","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("53");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_56","310","542",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("54");
            obj.set_text("- 그리드표의 해당열의 첫 번째 Row로  Focus가 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_57","160","542","70","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("55");
            obj.set_text("PageUp");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_58","20","542","43","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("56");
            obj.set_text("Ctrl");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_59","63","542","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("57");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_60","0","592",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_61","0","592","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_62","92","616","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("60");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_63","132","616","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("61");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_64","310","616",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("62");
            obj.set_text("- 그리드표의 해당열의 마지막 Row로  Focus가 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_65","160","616","88","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("63");
            obj.set_text("PageDown");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_66","20","616","43","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("64");
            obj.set_text("Ctrl");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_67","63","616","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("65");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_68","0","666",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_69","0","666","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_70","89","690","30","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("68");
            obj.set_text("1");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_71","310","690",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("69");
            obj.set_text("- 화면이 이전 헤딩 영역으로 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_72","20","690","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("70");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_73","60","690","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("71");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_74","0","740",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_75","0","740","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_76","89","764","30","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("74");
            obj.set_text("2");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_77","310","764",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("75");
            obj.set_text("- 화면이 다음 헤딩 영역으로 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_78","20","764","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("76");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_79","60","764","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("77");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_80","0","814",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_81","0","814","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_82","89","838","30","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("80");
            obj.set_text("3");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_83","310","838",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("81");
            obj.set_text("- 화면 스크롤을 위로 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_84","20","838","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("82");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_85","60","838","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("83");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_86","0","888",null,"75","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_guide_Bg");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_87","0","888","290","75",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_guide_Label");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_88","89","912","30","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("86");
            obj.set_text("4");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_89","310","912",null,"26","20",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("87");
            obj.set_text("- 화면 스크롤을 아래로 이동합니다. ");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_90","20","912","40","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("88");
            obj.set_text("Alt");
            obj.set_cssclass("sta_guide_button");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_91","60","912","29","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("89");
            obj.set_text("+");
            obj.set_cssclass("sta_guide_combine");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"5","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_detail_topline");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","0","404",null,"178","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08_00","49.9%","37",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            obj.set_border("1px solid #e8e8e8");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_02","49.9%","0",null,"38","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("라벨");
            obj.set_cssclass("sta_guide_Label_M");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_01","0","0",null,"38","sta_02:-1",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("가상커서 설정 해제");
            obj.set_cssclass("sta_guide_Label_M");
            obj.set_textAlign("center");
            obj.set_padding("0px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_08","0","37",null,null,"sta_08_00:-1","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            obj.set_border("1px solid #e8e8e8");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_03","20","52",null,"40","sta_08_00:20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("1. 익스플로러 화면세어 키보드의 <b v=\'true\'>[Ctrl + Shift + F12]</b>키를 동시에 눌러 \r\n   <b v=\'true\'>[가상 커서 해제]</b>로 설정합니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_05","sta_08:20","53",null,"20","22",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("1. 키보드의 <b v=\'true\'>[Ctrl + \\]</b>키를 눌러 센스리더 프로그램을 엽니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_04","20","106",null,"60","sta_08_00:20",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("2. \'숨긴 내용 읽기를 선택, \'변경 내용 자동 구성\'을 선택으로 설정 후 \r\n  <b v=\'true\'> [확인] </b>버튼을 선택하여 지정합니다. <b v=\'true\'>[Ctrl Alt + Shift + S]</b>키를 누르면 \r\n   설정을 저장할 수 있습니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_06","sta_08:20","84",null,"20","22",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("2. 음성설정  <b v=\'true\'>[Alt + S]</b> -> 세부설정 [D] 메뉴를 선택합니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_07","sta_08:20","114",null,"40","22",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("3. 구두점 읽기 목록 중 \'문장+수학기호읽기\' 항목을 선택 후 <b v=\'true\'>[확인]</b> 버튼을 \r\n   선택하여 저장합니다.");
            obj.set_cssclass("txt_13");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"5","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_detail_topline");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,1658,this,function(p){});
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
        this.loadIncludeScript("accessibilityGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
