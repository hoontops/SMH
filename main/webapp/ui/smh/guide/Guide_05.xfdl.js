(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("guide_05");
            this.set_titletext("Static");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,2679);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","30","140","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","Static01:0","140","37","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<fc v=\"#f31d24\">300</fc>건");
            obj.set_cssclass("sta_WF_count");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static Components");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","30","114","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("cssclass : sta_WF_subTitle");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","184","140","154","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass : sta_WF_count");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","30","406","298","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("가이드 타이틀");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","30","384","154","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("cssclass : sta_guide_Title");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","51",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("업무화면");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","331",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("Publish Guide");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","29","523","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("가이드 라벨");
            obj.set_cssclass("sta_guide_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","30","494","152","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("cssclass : sta_guide_Label");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","250","494","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("cssclass : sta_guide_Label_M");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","249","523","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("가이드 라벨");
            obj.set_cssclass("sta_guide_Label_M");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","30","603","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_guide_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","30","574","152","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("cssclass : sta_guide_Bg");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","254","603","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("sta_guide_status");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","593","459","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Bule");
            obj.set_cssclass("sta_font_blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","593","509","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Gray");
            obj.set_cssclass("sta_font_gray");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","593","569","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Green");
            obj.set_cssclass("sta_font_green");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","593","629","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Red");
            obj.set_cssclass("sta_font_red");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","33","713","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Font 12px Regular");
            obj.set_cssclass("txt_12");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","593","405","199","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Default Font : 12px  color : #333333");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","711","459","161","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("cssclass : sta_font_blue");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","711","509","162","21",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("cssclass : sta_font_gray");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","711","569","178","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("cssclass : sta_font_green");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","711","629","155","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("cssclass : sta_font_red");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","37","1013","518","56",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("* 각 cssclass에는 등록된 클레스를 중복해서 사용할 수 있습니다.\r\n예) \"클레스명, 클레스명\"\r\nsta_font_skyBlue,txt_12B\r\n");
            obj.set_cssclass("sta_font_skyBlue");
            obj.set_usedecorate("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","110","1068","141","24",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("sta_font_skyBlue,txt_12B");
            obj.set_cssclass("sta_font_skyBlue,txt_12B");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","33","753","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Font 13px Regular");
            obj.set_cssclass("txt_13");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","202","753","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("cssclass : txt_13");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","33","793","146","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Font 15px Regular");
            obj.set_cssclass("txt_15");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","202","793","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("cssclass : txt_15");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","202","833","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("cssclass : txt_16");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","33","823","146","38",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Font 16px Regular");
            obj.set_cssclass("txt_16");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","593","599","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Orange");
            obj.set_cssclass("sta_font_orange");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","711","599","178","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("cssclass : sta_font_orange");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","343","713","87","14",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Font 12px Bold");
            obj.set_cssclass("txt_12B");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","537","713","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("cssclass : txt_12B");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","343","753","97","14",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("Font 13px Bold");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","537","753","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("cssclass : txt_13B");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","343","793","109","17",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Font 15px Bold");
            obj.set_cssclass("txt_15B");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","537","793","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("cssclass : txt_15B");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","537","833","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("cssclass : txt_16B");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","343","833","117","18",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("Font 16px Bold");
            obj.set_cssclass("txt_16B");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","537","873","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("cssclass : txt_17B");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","343","873","129","21",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("Font 18px Bold");
            obj.set_cssclass("txt_18B");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","537","917","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("cssclass : txt_24B");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","343","913","176","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("Font 24px Bold");
            obj.set_cssclass("txt_24B");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","110","1102","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("sta_font_orange,txt_13B");
            obj.set_cssclass("sta_font_orange,txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","30","200","81","20",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("1. 서브타이틀");
            obj.set_cssclass("sta_WF_subTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","30","236","91","20",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","171","200","162","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("cssclass : sta_WF_subTitle2");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","173","236","162","20",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("cssclass : sta_WF_subTitle3");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static17_00","593","539","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("Gray2");
            obj.set_cssclass("sta_font_gray2");
            this.addChild(obj.name, obj);

            obj = new Static("Static23_00","711","539","162","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("cssclass : sta_font_gray2");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","593","484","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Bule");
            obj.set_cssclass("sta_font_skyBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_00","711","484","161","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("cssclass : sta_font_skyBlue");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","39","1075","57","84",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("적용예시  \r\n\r\n\r\n\r\n\r\n");
            obj.set_border("0px none,1px solid #cccccc,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01","593","434","120","24",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Black");
            obj.set_cssclass("sta_font_black");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01","711","435","161","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("cssclass : sta_font_black");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","1171",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("Help Guide");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","55","1415","107","20",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("꼭 확인하세요");
            obj.set_cssclass("sta_WF_helpCheck");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01","55","1431","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","55","1444","320","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("도움말 2줄\r\n입니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","55","1479","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("도움말 한줄입니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00","55","1471","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("h10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_01","555","1431","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","555","1415","102","20",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("알려드립니다");
            obj.set_cssclass("sta_WF_helpNote");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_01","555","1444","319","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_01","555","1471","100","10",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("h10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_01","555","1479","319","35",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.도움말 두줄입니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01","0","1232","285","20",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("도움말 입니다.");
            obj.set_cssclass("sta_WF_helpInfo");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01_00","47","1335","285","20",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("도움말입니다.");
            obj.set_cssclass("sta_WF_helpInfo");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","0","1335","47","20",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("도움말");
            obj.set_cssclass("sta_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","529","1262","481","96",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_helpInfoBg");
            obj.set_padding("15px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02_00","544","1277","77","20",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("읽어주세요!");
            obj.set_cssclass("sta_WF_help");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_02","544","1302","336","20",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_text("도움말은 <fc v=\'#ec0928\'>강조하는 텍스트</fc>도움말입니다.");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00","544","1322","451","20",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("도움말 입니다.");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00","293","1232","24","20",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00","529","1262","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_00","529","1297","100","5",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("h5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_01","529","1343","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_01","529","1262","15","96",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("h\r\n15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_02","338","1335","24","20",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01_01","0","1267","285","36",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("도움말입니다.\r\n도움말입니다.");
            obj.set_cssclass("sta_WF_helpInfo");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04","723","753","40","60",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("200px");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00","723","684","40","50",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("200px");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01","723","843","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("200px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","698","904","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("200px");
            obj.set_cssclass("guide_size_VL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","665","1028","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00","736","1028","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01","665","995","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00","735","995","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","781","984","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("cssclass : guide_cssLine_TR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","781","1034","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("cssclass : guide_cssLine_BR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01","513","984","142","21",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("cssclass : guide_cssLine_TL");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00","513","1034","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("cssclass : guide_cssLine_BL");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02","806","704","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("cssclass : guide_size_HT");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02_00","806","767","128","21",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("cssclass : guide_size_HB");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02_00_00","806","847","127","21",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("cssclass : guide_size_VR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_02_00_00_00","806","907","126","21",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("cssclass : guide_size_VL");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static31_00","202","713","103","21",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("cssclass : txt_12");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_00_00_00","0","1554",null,"34","24",null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            obj.set_text("Tutorial Guide");
            this.addChild(obj.name, obj);

            obj = new Static("sta_07","83","1645","60","67",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("guide_clickHand");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00","75","1722","161","21",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("cssclass : guide_clickHand");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08","329","1660","151","48",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("guide_lineBox_red");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00","328","1722","163","21",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_text("cssclass : guide_lineBox_red");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09","587","1613","90","89",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("guide_arrowHelp_BR");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00","587","1718","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("cssclass : guide_arrowHelp_BR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_10","557","1645","59","25",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("도움말");
            obj.set_cssclass("guide_helpBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_00","633","1650","163","21",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("cssclass : guide_helpBox");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_08_00","793","1649","151","48",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("guide_lineBox_blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_01","792","1711","169","21",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("cssclass : guide_lineBox_blue");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00","461","1818","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("guide_arrowHelp_BR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00","461","1868","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("guide_arrowHelp_BL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00","461","1918","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("guide_arrowHelp_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00","461","1968","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("guide_arrowHelp_TL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_01","721","1818","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("guide_arrowHelp_RT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_01","721","1868","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_cssclass("guide_arrowHelp_RB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_01","721","1918","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_cssclass("guide_arrowHelp_LT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_00","721","1968","30","29",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_cssclass("guide_arrowHelp_LB");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01","506","1818","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("cssclass : guide_arrowHelp_BR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00","508","1872","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("cssclass : guide_arrowHelp_BL");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00","509","1922","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("cssclass : guide_arrowHelp_TR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00","511","1976","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("cssclass : guide_arrowHelp_TL");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_01","773","1818","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("cssclass : guide_arrowHelp_RT");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_01","775","1872","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("cssclass : guide_arrowHelp_RB");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_01","776","1922","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("cssclass : guide_arrowHelp_LT");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_00","778","1976","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("cssclass : guide_arrowHelp_LB");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_01","600","2043","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_cssclass("guide_arrow_RT");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_01","679","2058","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("cssclass : guide_arrow_RT");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_00_01","600","2103","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_cssclass("guide_arrow_LT");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_00_01","679","2118","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("cssclass : guide_arrow_LT");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_00_00_01","600","2163","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_cssclass("guide_arrow_LB");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_00_00_01","679","2178","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("cssclass : guide_arrow_LB");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01","310","2043","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("guide_arrow_TL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_00","310","2103","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("guide_arrow_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_00_00","310","2163","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("guide_arrow_BL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_00_00_00","310","2223","60","50",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_cssclass("guide_arrow_BR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_09_00_00_00_00_01_00_00_00_01","310","2283","93","23",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_cssclass("guide_arrow_R");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_00_00_00_01","389","2298","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("cssclass : guide_arrow_R");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_00_00_00","389","2238","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("cssclass : guide_arrow_BR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_00_00","389","2178","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("cssclass : guide_arrow_BL");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01_00","389","2118","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("cssclass : guide_arrow_TR");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static34_00_01_00_01_00_00_00_00_01_00_00_00_01","389","2058","177","21",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("cssclass : guide_arrow_TL");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Div("div_02","305","2339","649","299",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("div_guide");
            this.addChild(obj.name, obj);

            obj = new Static("sta_11","31","20","40","40",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("0");
            obj.set_text("1");
            obj.set_cssclass("sta_guide_circleNum");
            this.div_02.addChild(obj.name, obj);

            obj = new Static("Static53_01","81","20","176","31",null,null,null,null,null,null,this.div_02.form);
            obj.set_taborder("1");
            obj.set_text("Font 24px Bold");
            obj.set_cssclass("txt_24B,sta_font_blue");
            this.div_02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,2679,this,function(p){});
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
        this.loadIncludeScript("Guide_05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
