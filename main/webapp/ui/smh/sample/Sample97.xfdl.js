(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_page");
            this.set_titletext("공통함수");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"EVL_YY\" type=\"STRING\" size=\"256\"/><Column id=\"EVL_MM\" type=\"STRING\" size=\"256\"/><Column id=\"GRFC_LPSAO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRFC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRFC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL1\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL2\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL3\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL4\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL5\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL6\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL7\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL8\" type=\"STRING\" size=\"256\"/><Column id=\"GOAL9\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRFC_NM\">이순신</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_Base","1.51%","8",null,"760","11.4%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_Base);
            obj.set_text("문자열");
            this.tab_Base.addChild(obj.name, obj);

            obj = new TextArea("txa_Result","0.49%","8",null,"56","16.17%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("0");
            obj.set_font("9pt \"Tahoma\"");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Trim","0.74%","73",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("1");
            obj.set_value("1. 문자열양옆에 공백제거");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Trim","38.89%","73",null,"20","23.58%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("2");
            obj.set_value("gfn_trim(\" 123 \")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Trim","76.67%","73",null,"20","16.17%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_NumFormat","0.74%","178",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("4");
            obj.set_value("6. 전자 메일 주소 체크");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_LTrim","0.74%","199",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("5");
            obj.set_value("7. 왼쪽 공백 제거");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_RTrim","0.74%","220",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("6");
            obj.set_value("8. 오른쪽공백 제거");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Length","0.74%","241",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("7");
            obj.set_value("9. 시작값과 종료값의 크기 체크");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Left","0.74%","262",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("8");
            obj.set_value("10. 왼쪽부분의 입력한 길이만큼 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Right","0.74%","283",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("9");
            obj.set_value("11. 오른쪽부분의 입력한 길이만큼 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Mid","0.74%","304",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("10");
            obj.set_value("12. 해당 함수가 존재하는지 여부를 체크");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_isBzIdNo","0.74%","325",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("11");
            obj.set_value("13. form 안의 컴퍼넌트 필수값을 체크");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Pos","0.74%","346",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("12");
            obj.set_value("14. 찾는 문자열의 위치 확인");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_isEmail","0.74%","367",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("13");
            obj.set_value("15. 문자열이 undefined이면 빈값 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_GetLengthB","0.74%","157",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("14");
            obj.set_value("5. 문자열 길이반환 (byte단위)");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Rand","0.74%","388",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("15");
            obj.set_value("16. 입력한 숫자사이의 랜덤값을 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_AllTrim","0.74%","94",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("16");
            obj.set_value("2. 구분자(콤마)로 된 문자열에대해  한꺼번에 비교");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Rpad","0.74%","115",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("17");
            obj.set_value("3. 오른쪽 설정길이만큼 공백부분 채움");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Lpad","0.74%","136",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("18");
            obj.set_value("4. 왼쪽 설정길이만큼 공백부분 채움");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_decProc00","0.74%","409",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("19");
            obj.set_value("17. decode문을 사용 grid Expr적용가능");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Round","0.74%","430",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("20");
            obj.set_value("18. 숫자를 반올림한다.");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Replace","0.74%","451",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("21");
            obj.set_value("19. 특정문자를 치환한다.");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_Quote","0.74%","473",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("22");
            obj.set_value("20. 문자열의 양쪽에 \"를 붙여 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_IsNull","0.74%","495",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("23");
            obj.set_value("21. Null 여부 확인");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_TransNullToNumber","0.74%","517",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("24");
            obj.set_value("22. null인 경우에 숫자 0을 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_TransNullToChar","0.74%","538",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("25");
            obj.set_value("23. null인 경우에 지정한문자를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LTrim","38.88%","199",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("27");
            obj.set_value("gfn_lTrim(\"  123  \",\"\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_RTrim","38.88%","220",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("28");
            obj.set_value("gfn_rTrim(\"  123  \",\"\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Length","38.88%","241",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("29");
            obj.set_value("gfn_checkFromTo(450, 300)");
            obj.set_autoselect("true");
            obj.set_tooltiptext("시작값이 종료값보다 크면 false 적으면 true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Left","38.88%","262",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("30");
            obj.set_value("gfn_left(\"1234567\",3)");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Right","38.88%","283",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("31");
            obj.set_value("gfn_right(\"1234567\",3)");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Mid","38.88%","304",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("32");
            obj.set_value("gfn_existFunc(\"this.gfn_trim\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_isBzIdNo","38.88%","325",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("33");
            obj.set_value("gfn_cpRequired(this.tab_Base.tabpage1)");
            obj.set_autoselect("true");
            obj.set_tooltiptext("항목 11번의 값으로 테스트 ");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Pos","38.88%","346",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("34");
            obj.set_value("gfn_pos(\"aaBBbbcc\",\"bb\",1)");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_isEmail","38.88%","367",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("35");
            obj.set_value("gfn_transNullToEmpty(\"undefined\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_GetLengthB","38.88%","157",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("36");
            obj.set_value("gfn_getLengthB(\"가나다라바마\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Rand","38.88%","388",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("37");
            obj.set_value("gfn_rand(1,9999)");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AllTrim","38.88%","94",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("38");
            obj.set_value("gfn_equalsOr(\"30,50,60\", \"850\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Rpad","38.88%","115",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("39");
            obj.set_value("gfn_rpad(\"123456\",9,\"0\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Lpad","38.88%","136",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("40");
            obj.set_value("gfn_lpad(\"123456\",9,\"0\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_decProc00","38.88%","409",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("41");
            obj.set_value("gfn_decode(\"01\", \"01\", \"코드1\", \"기타\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Round","38.88%","430",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("42");
            obj.set_value("gfn_round(123456.136,2)");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Replace","38.88%","451",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("43");
            obj.set_value("gfn_replace(\"aabbcc\",\"bb\",\"*\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_Quote","38.88%","473",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("44");
            obj.set_value("gfn_quote(\"abcdef\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_IsNull","38.88%","495",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("45");
            obj.set_value("gfn_isNull(\"\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_TransNullToNumber","38.89%","517",null,"20","23.58%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("46");
            obj.set_value("gfn_transNullToNumber(\"\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_TransNullToChar","38.89%","538",null,"20","23.58%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("47");
            obj.set_value("gfn_transNullToChar(\"\",\"test\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_NumFormat","38.88%","178",null,"20","23.63%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("49");
            obj.set_value("gfn_isEmail(\"214556525@1.com\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Right","76.63%","283",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("50");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Mid","76.63%","304",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("51");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_isBzIdNo","76.63%","325",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("52");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Pos","76.63%","346",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_isEmail","76.63%","367",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_GetLengthB","76.63%","157",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Rand","76.63%","388",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AllTrim","76.67%","94",null,"20","16.17%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("57");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Rpad","76.63%","115",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("58");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Lpad","76.63%","136",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("59");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_decProc00","76.63%","409",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("60");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Round","76.63%","430",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("61");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Replace","76.63%","451",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("62");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Quote","76.63%","473",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("63");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_IsNull","76.63%","495",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("64");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_TransNullToNumber","76.67%","517",null,"20","16.17%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("65");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_TransNullToChar","76.67%","538",null,"20","16.17%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("66");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_NumFormat","76.63%","178",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("68");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LTrim","76.63%","199",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("69");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_RTrim","76.63%","220",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("70");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Length","76.63%","241",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("71");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Left","76.63%","262",null,"20","16.13%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("72");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("sta_getFormat","0.74%","560",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("76");
            obj.set_value("24. 문자 포맷 형식 변환(해당 문자는 @ 사용)");
            obj.set_readonly("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_getFormat","38.89%","560",null,"20","23.58%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("77");
            obj.set_value("gfn_getFormat(\"20130226\",\"@@@@-@@-@@\")");
            obj.set_autoselect("true");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_getFormat","76.67%","560",null,"20","16.17%",null,null,null,null,null,this.tab_Base.tabpage1.form);
            obj.set_taborder("78");
            obj.set_text("실행");
            this.tab_Base.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tab_Base);
            obj.set_text("날짜");
            this.tab_Base.addChild(obj.name, obj);

            obj = new Edit("sta_DateToStr","0.74%","72",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("0");
            obj.set_value("1. date타입을 String으로 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_DateToStr","38.15%","72",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("1");
            obj.set_value("gfn_dateToStr(new Date())");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_AddDate","0.74%","93",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("2");
            obj.set_value("2. 지정날짜를 입력 숫자만큼 가감 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_AddDate","38.15%","93",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("3");
            obj.set_value("gfn_addDate(\"20150702\",3)");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getDayKor","0.74%","156",null,"19","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("4");
            obj.set_value("5. 입력한 날짜의 요일을 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getDayKor","38.15%","156",null,"19","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("5");
            obj.set_value("gfn_getDayKor(\"20150318\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getFirstDate","0.74%","256",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("6");
            obj.set_value("10. 지정월의 1일 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getFirstDate","38.15%","256",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("7");
            obj.set_value("gfn_getFirstDate(\"20150607\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getBeforeMonth","0.74%","298",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("8");
            obj.set_value("12. 입력날짜의 한달전 날짜를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getBeforeMonth","38.15%","298",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("9");
            obj.set_value("gfn_getBeforeMonth(\"20150708\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_MakeDate","0.74%","382",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("10");
            obj.set_value("16. 조합한 날짜를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_MakeDate","38.15%","382",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("11");
            obj.set_value("gfn_makeDate(\"2015\",\"08\",\"07\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_IsLeapYear","0.74%","424",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("12");
            obj.set_value("18. 입력 날짜의 윤년여부 확인");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_IsLeapYear","38.15%","424",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("13");
            obj.set_value("gfn_isLeapYear(\"20160802\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_IsDate","38.15%","403",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("14");
            obj.set_value("gfn_isDate(\"20150827\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_IsDate","0.74%","403",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("15");
            obj.set_value("17. 날짜 여부 확인");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getLastDate","0.74%","135",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("16");
            obj.set_value("4. 지정월의 마지막날짜를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getLastDate","38.15%","135",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("17");
            obj.set_value("gfn_getLastDate(\"20150702\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_AddMonth","0.74%","114",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("18");
            obj.set_value("3. 지정월을 입력 숫자만큼 가감 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_AddMonth","38.15%","114",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("19");
            obj.set_value("gfn_addMonth(\"20150702\",3)");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_diffDate","0.74%","176",null,"19","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("20");
            obj.set_value("6. 입력한 날짜의 날짜간 일수차이 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_diffDate","38.15%","176",null,"19","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("21");
            obj.set_value("gfn_diffDate2(\"20150702\",\"20150815\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_diffMonth","0.74%","196",null,"19","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("22");
            obj.set_value("7. 입력한 월의 월간 월수차이 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_diffMonth","38.15%","196",null,"19","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("23");
            obj.set_value("gfn_diffMonth2(\"201503\",\"201508\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_StrToDate","0.74%","277",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("24");
            obj.set_value("11. 문자를 날짜로 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_StrToDate","38.15%","277",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("25");
            obj.set_value("gfn_strToDate(\"20150301\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getAfterMonth","0.74%","319",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("26");
            obj.set_value("13. 입력날짜의 한달후 날짜를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getAfterMonth","38.15%","319",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("27");
            obj.set_value("gfn_getAfterMonth(\"20150708\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getBeforeYear","0.74%","340",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("28");
            obj.set_value("14. 입력날짜의 일년전 날짜를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getBeforeYear","38.15%","340",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("29");
            obj.set_value("gfn_getBeforeYear(\"20150708\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_compareTime03","0.74%","361",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("30");
            obj.set_value("15. 입력날짜의 일년후 날짜를 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getAfterYear","38.15%","361",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("31");
            obj.set_value("gfn_getAfterYear(\"20150708\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getToday","0.74%","216",null,"19","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("32");
            obj.set_value("8. 오늘 날짜 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getToday","38.15%","216",null,"19","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("33");
            obj.set_value("gfn_today()");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_getTodayTime","0.74%","236",null,"19","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("34");
            obj.set_value("9. 오늘 날짜+시간 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_getTodayTime","38.15%","236",null,"19","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("35");
            obj.set_value("gfn_todayTime()");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_SolarLunar","0.74%","445",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("36");
            obj.set_value("19. 입력날짜의 음력을 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_SolarLunar","38.15%","445",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("37");
            obj.set_value("gfn_solar2Lunar(\"20150318\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_SolarLunar","75.43%","446",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("38");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getTodayTime","75.43%","237",null,"17","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("39");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getToday","75.43%","217",null,"17","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("40");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getAfterYear","75.43%","362",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("41");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getBeforeYear","75.43%","341",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("42");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getAfterMonth","75.43%","320",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("43");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_StrToDate","75.43%","278",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("44");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_diffMonth","75.43%","197",null,"17","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("45");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_diffDate","75.43%","177",null,"17","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("46");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_AddMonth","75.43%","115",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("47");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getLastDate","75.43%","136",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("48");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_IsDate","75.43%","404",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("49");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_IsLeapYear","75.43%","425",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("50");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_MakeDate","75.43%","383",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("51");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getBeforeMonth","75.43%","299",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("52");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getFirstDate","75.43%","257",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("53");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_getDayKor","75.43%","157",null,"17","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("54");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_AddDate","75.43%","94",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("55");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_DateToStr","75.43%","73",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("56");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_LunarSolar","75.43%","467",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("57");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_LunarSolar","38.15%","466",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("58");
            obj.set_value("gfn_lunar2Solar(\"20150318\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_LunarSolar","0.74%","466",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("59");
            obj.set_value("20. 입력날짜의 양력을 반환");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("sta_LunarSolar00","0.74%","488",null,"20","62.22%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("60");
            obj.set_value("21. 년월 정합성 체크");
            obj.set_readonly("true");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_LunarSolar00","38.15%","488",null,"20","24.81%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("61");
            obj.set_value("gfn_isMonth(\"201502\")");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_LunarSolar00","75.43%","489",null,"18","17.41%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("62");
            obj.set_text("실행");
            this.tab_Base.tabpage2.addChild(obj.name, obj);

            obj = new TextArea("txa_Result","0.74%","9",null,"56","17.16%",null,null,null,null,null,this.tab_Base.tabpage2.form);
            obj.set_taborder("63");
            this.tab_Base.tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",930,520,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample97.xfdl","lib::comLib.xjs");
        this.registerScript("Sample97.xfdl", function() {
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        this.btnCommon_onclick = function (obj, e)
        {
        	var nTabIdx = this.tab_Base.tabindex;
        	this.lv_strFunc = eval("this.tab_Base.tabpage" + (nTabIdx + 1) + "." + obj.name.replace("btn_", "edt_"));

        	// this.lv_strFunc = eval("this." + obj.name.replace("btn_", "edt_"));

        	this.lv_strFunc = this.lv_strFunc.value;

        	this.lv_retVal = eval("this." + this.lv_strFunc);
        	this.lv_strRslt = "실행스크립트 : " + this.lv_strFunc;
        	this.lv_strRslt += "\n결과값 : ";

        	if (typeof (this.lv_retVal) == null)
        	{
        		this.lv_strRslt += "null";
        	}
        	else if (typeof (this.lv_retVal) == "string")
        	{
        		this.lv_strRslt += nexacro.wrapQuote(this.lv_retVal);
        	}
        	else
        	{
        		this.lv_strRslt += this.lv_retVal.toString();
        	}

        	eval("this.tab_Base.tabpage" + (nTabIdx + 1)).txa_Result.set_value(this.lv_strRslt);
        	// this.txa_Result.set_value(this.lv_strRslt);
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.tab_Base.tabpage1.form.btn_Trim.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.edt_Rand.addEventHandler("oneditclick",this.tab_Base_tabpage1_edt_Rand_oneditclick,this);
            this.tab_Base.tabpage1.form.btn_Right.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Mid.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_isBzIdNo.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Pos.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_isEmail.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_GetLengthB.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Rand.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_AllTrim.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Rpad.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Lpad.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_decProc00.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Round.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Replace.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Quote.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_IsNull.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_TransNullToNumber.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_TransNullToChar.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_NumFormat.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_LTrim.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_RTrim.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Length.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_Left.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage1.form.btn_getFormat.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_SolarLunar.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getTodayTime.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getToday.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getAfterYear.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getBeforeYear.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getAfterMonth.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_StrToDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_diffMonth.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_diffDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_AddMonth.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getLastDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_IsDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_IsLeapYear.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_MakeDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getBeforeMonth.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getFirstDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_getDayKor.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_AddDate.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_DateToStr.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_LunarSolar.addEventHandler("onclick",this.btnCommon_onclick,this);
            this.tab_Base.tabpage2.form.btn_LunarSolar00.addEventHandler("onclick",this.btnCommon_onclick,this);
        };
        this.loadIncludeScript("Sample97.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
