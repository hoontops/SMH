(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSL02000M");
            this.set_titletext("다양한 쿼리 등록[K]");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dynamicSqlHeader", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dynamicSqlPrintAlias", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_NO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIELD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_PRINT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIELD_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_SUM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dynamicSqlParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_NO\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PARAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_SQL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_DEFAULT\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_NULL_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_REQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popParam", this);
            obj._setContents("<ColumnInfo><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_run", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"O_RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"P_SQL_TEXT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROGRAM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_out", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"O_RTN_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_program_cd", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_totCnt1",null,"87","162","21","141",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","69",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("yellowgreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"5","0.22%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dynamicSqlPrintAlias",null,"108","558",null,"10","184",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_dynamicSqlPrintAlias");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"항목\"/><Cell col=\"2\" text=\"출력명\"/><Cell col=\"3\" text=\"유형\"/><Cell col=\"4\" text=\"크기\"/><Cell col=\"5\" text=\"포멧형식\"/><Cell col=\"6\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"expr:comp.parent.gfn_isNull(ROW_ID) ? &apos;masknumber&apos; : &apos;none&apos;\" editfilter=\"digit\" text=\"bind:FIELD_NO\" mask=\"###\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:comp.parent.gfn_isNull(ROW_ID) ? &apos;text&apos; : &apos;none&apos;\" text=\"bind:FIELD_NM\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:FIELD_PRINT_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"expr:comp.parent.gfn_isNull(ROW_ID) ? &apos;combo&apos; : &apos;none&apos;\" text=\"bind:FIELD_TYPE\" combocodecol=\"C,CMD_FIELD_TYPE,VAL,Y,U\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"masknumber\" editfilter=\"digit\" text=\"bind:FIELD_SIZE\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:FIELD_FORMAT\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:FIELD_SUM_YN\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","84","196","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("쿼리 내역");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","98","500","10",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","622","103",null,"5","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","452",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","21","389",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sqlRun",null,"0","80","21","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("쿼리 실행");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","51","586",null,"15","451",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("yellowgreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","595","196","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("매개변수 설정");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","50","614",null,"5","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("fuchsia");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_dynamicSqlParam","0",null,null,"149","10","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_dynamicSqlParam");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"264\"/><Column size=\"196\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\" textAlign=\"center\"/><Cell col=\"1\" text=\"매개변수\"/><Cell col=\"2\" text=\"매개변수 설명\"/><Cell col=\"3\" text=\"유형\"/><Cell col=\"4\" text=\"기본값\"/><Cell col=\"5\" text=\"리스트 쿼리(Order by / Union All 제외)\"/><Cell col=\"6\" text=\"NULL치환값\"/><Cell col=\"7\" text=\"필수\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID) ? &apos;masknumber&apos; : &apos;none&apos;\" text=\"bind:PARAM_NO\" mask=\"###\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:PARAM_CD\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:PARAM_NM\" combodisplay=\"edit\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:PARAM_TYPE\" combocodecol=\"C,CMD_PARAM_TYPE,SEL,Y,Y\" combodisplay=\"edit\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:PARAM_DEFAULT\" editlimit=\"500\"/><Cell col=\"5\" displaytype=\"expr:PARAM_TYPE == &apos;LIST&apos; ? &apos;text&apos; : &apos;normal&apos;\" edittype=\"expr:PARAM_TYPE == &apos;LIST&apos; ? &apos;text&apos; : &apos;none&apos;\" text=\"bind:PARAM_SQL_TEXT\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" text=\"bind:PARAM_NULL_VALUE\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:PARAM_REQUIRED\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt2",null,null,"162","21","141","149",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0%","26",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_programCd","340","10","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_inputmode("upper");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_businessType","95","10","150","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SystemWorkType,ALL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchWrokClass","20","10","65","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchBatchCd","253","10","77","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("프로그램코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_programNm","520","10","256","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_maxlength("30");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%","31",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","32.61%","1","10",null,null,"-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","8.4%","1","10",null,null,"-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","245","0","20","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_sqlNoPopup","492","10","25","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static08",null,"84","196","24","372",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("출력명칭 및 포멧 설정");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_form","0","108",null,null,"575","184",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_programCd","340","10","102","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("1");
            obj.set_inputmode("upper");
            obj.getSetter("lengthunit").set("ascii");
            obj.set_maxlength("7");
            obj.set_cssclass("readonly");
            obj.set_readonly("true");
            obj.set_font("9pt \"Dotum\"");
            this.div_form.addChild(obj.name, obj);

            obj = new Combo("cbo_businessType","95","10","150","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SystemWorkType,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            obj.set_value("null");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("lbl_srchWrokClass","20","10","65","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("35");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("lbl_srchBatchCd","253","10","77","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("36");
            obj.set_text("프로그램코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_form.addChild(obj.name, obj);

            obj = new Edit("edt_programNm","95","39","347","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("2");
            obj.set_maxlength("30");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("lbl_srchDescription","20","39","65","21",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("38");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static04","0%","31",null,"8","0%",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("40");
            obj.set_text("8");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","20","107",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("43");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static01","17.17%","1","10",null,null,"-1",null,null,null,null,this.div_form.form);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static03","0%","60",null,"10","0%",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new TextArea("txa_select","5","94",null,null,"6","6",null,null,null,null,this.div_form.form);
            obj.set_taborder("3");
            obj.set_value("SELECT *\r\n  FROM DRRC_BILLS DBS\r\n WHERE 1=1\r\n   AND DBS.INSP_YYMM = #{1}\r\n ORDER BY DBS.INSP_YYMM");
            obj.set_imemode("alpha");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("20000");
            obj.set_cssclass("essential");
            obj.set_tooltiptext("SQL 문구를 입력하시기 바랍니다.");
            obj.set_wordWrap("char");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static05","244","0","20","67",null,null,null,null,null,null,this.div_form.form);
            obj.set_taborder("48");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_sqlValidation",null,"70","120","21","136",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("4");
            obj.set_text("SQL 유효성 검사");
            obj.set_cssclass("btn_DR_Basic2");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_createPrintAlias",null,"70","128","21","5",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("5");
            obj.set_text("출력명칭 일괄생성");
            obj.set_cssclass("btn_DR_Basic2");
            this.div_form.addChild(obj.name, obj);

            obj = new Static("Static02","0%","91",null,"10","0%",null,null,null,null,null,this.div_form.form);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_form.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","21","263",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"0","60","21","326",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신규");
            obj.set_cssclass("btn_DR_GridCopy");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add2",null,null,"60","21","73","154",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del1",null,"82","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add1",null,"82","60","21","73",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Div("div_sqlResult","578","188",null,null,"165","456",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_proc_out","10","44",null,null,"10","0",null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_proc_out");
            obj.set_autoenter("select");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\" background=\"aquamarine\" font=\"bold 9pt &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","10",null,"0","0",null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Static("sta_title","1.08%","14",null,"31","16.93%",null,null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("12");
            obj.set_text("쿼리실행 결과");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 11pt \"Dotum\"");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Button("btn_excelDownload",null,"20","105","21","69",null,null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("13");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_DR_GridDownload");
            obj.set_tooltiptext("파일다운로드");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","56","21","10",null,null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("14");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Static("sta_totCnt1",null,"23","162","21","181",null,null,null,null,null,this.div_sqlResult.form);
            obj.set_taborder("15");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_sqlResult.addChild(obj.name, obj);

            obj = new Button("btn_sqlView",null,"0","104","21","93",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("쿼리 문장 보기");
            obj.set_cssclass("btn_DR_Basic2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del2",null,null,"60","21","10","154",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"0","60","21","200",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            this.addChild(obj.name, obj);

            obj = new Div("div_sqlView","61","796",null,null,"62","-755",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","10",null,"0","0",null,null,null,null,this.div_sqlView.form);
            obj.set_taborder("28");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_sqlView.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","10",null,null,"0",null,null,null,null,this.div_sqlView.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_sqlView.addChild(obj.name, obj);

            obj = new Static("sta_title","0.78%","14",null,"31","15.65%",null,null,null,null,null,this.div_sqlView.form);
            obj.set_taborder("30");
            obj.set_text("쿼리 문장 보기");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 11pt \"Dotum\"");
            this.div_sqlView.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"20","56","21","10",null,null,null,null,null,this.div_sqlView.form);
            obj.set_taborder("31");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            this.div_sqlView.addChild(obj.name, obj);

            obj = new TextArea("txa_select","10","44",null,null,"10","10",null,null,null,null,this.div_sqlView.form);
            obj.set_taborder("32");
            obj.set_imemode("alpha");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("20000");
            obj.set_cssclass("readonly");
            obj.set_wordWrap("char");
            obj.set_background("rgba(247,247,247,1)");
            this.div_sqlView.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_programCd","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_programNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search00.edt_sqlCd","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search00.edt_sqlNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_form.form.cbo_businessType","value","ds_dynamicSqlHeader","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_form.form.edt_programCd","value","ds_dynamicSqlHeader","PROGRAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_form.form.edt_programNm","value","ds_dynamicSqlHeader","PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_form.form.txa_select","value","ds_dynamicSqlHeader","SQL_TEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSL02000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명      : 대륜E&S 빌링시스템
         * 업무명        : 다양한 쿼리 등록
         * 파일명        : CMSL02000M.xfdl
         * 작성자        :Jin Sung Ha
         * 작성일        : 2021.05.25
         *
         * 설  명        : 배치실행 및 조회
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.25   Jin Sung Ha      	최초작성
         *---------------------------------------------------------------------------------------
         ***************************************************************************************/


        /***************************************************************************************
         * 10. 라이브러리 include
         ***************************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";


        /***************************************************************************************
         * 20. FORM 변수 선언 영역
         ***************************************************************************************/

        /***************************************************************************************
         * 30. FORM 시작 영역
         ***************************************************************************************/

        // (필수) 화면 로딩후에 실행되는 함수
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 기본값 설정
        	this.fn_setDefaultVal();

        	// 엔터키 설정 함수(조회)
        //	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	// 틀고정
        	this.nfn_cellFix(this.grd_dynamicSqlParam, 2);
        };


        /***************************************************************************************
         * 40. TRANSACTION 영역
         ***************************************************************************************/

        // 조회 버튼
        this.fn_search = function (obj, e)
        {
        	// 검색조건 필수 체크
        	if (this.fn_searchValidation() == false)
        	{
        		return;
        	}

        	// 대상초기화
        	this.ds_dynamicSqlHeader.clearData();
        	this.ds_dynamicSqlPrintAlias.clearData();
        	this.ds_dynamicSqlParam.clearData();

        	var sSvcID = "selectcmdDynamicSqlList";
        	var sController = "/cmsl02000/selectcmdDynamicSqlList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_dynamicSqlHeader=output1 ds_dynamicSqlPrintAlias=output2 ds_dynamicSqlParam=output3";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 기본값 설정
        this.fn_clear = function ()
        {
        	// 초기화 버튼
        	this.fn_setDefaultVal();
        };


        // 신규 버튼
        this.fn_new = function (obj, e)
        {
        	// 화면에 데이터 수정 체크
        	if (this.gfn_dsIsUpdated(this.ds_dynamicSqlHeader)
        		 || this.gfn_dsIsUpdated(this.ds_dynamicSqlPrintAlias)
        		 || this.gfn_dsIsUpdated(this.ds_dynamicSqlParam))
        	{
        		//var bOK = this.gfn_Message("수정된 자료가 있습니다. 취소 후 작업하시겠습니까?", null, "conf", "yesno");
        		var bOK = this.gfn_Message("IsChangedButContinue", null, "conf", "yesno");
        		if (bOK == false)
        		{
        			return;
        		}
        	}

        	this.ds_dynamicSqlHeader.clearData();
        	nRow = this.ds_dynamicSqlHeader.addRow();

        	this.ds_dynamicSqlPrintAlias.clearData();
        	this.ds_dynamicSqlParam.clearData();

        	// 수정가능
        	this.div_form.form.cbo_businessType.set_cssclass("essential");
        	this.div_form.form.cbo_businessType.set_readonly(false);

        	this.ds_dynamicSqlHeader.setColumn(nRow, "BUSINESS_TYPE", this.div_search.form.cbo_businessType.value);
        	this.div_form.form.cbo_businessType.setFocus();
        };


        // 저장 버튼
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_dynamicSqlHeader)
        		 && !this.gfn_dsIsUpdated(this.ds_dynamicSqlPrintAlias)
        		 && !this.gfn_dsIsUpdated(this.ds_dynamicSqlParam))
        	{
        		// 변경된 정보가 없습니다.
        		this.gfn_Message("NoDataChanged", null, "warning", "ok");
        		return;
        	}

        	// 매개변수 저장 시 필수여부에 따른 입력 값 체크
        	if (this.fn_grdRequiredCheck() == false)
        	{
        		return;
        	}


        	// 필수입력 체크(업무구분,프로그램명)
        	var component = this.div_form;
        	var strColIdList = "cbo_businessType,edt_programNm";
        	var strColNmList = "SYSTEMWORKTYPE,ProgramName";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	// 그리드 => 필수값 확인
        	if (!this.gfn_GridKeyCheck(this.grd_dynamicSqlPrintAlias, ["FIELD_NO", "FIELD_NM", "FIELD_PRINT_NM", "FIELD_TYPE"]))
        	{
        		return;
        	}
        	if (!this.gfn_GridKeyCheck(this.grd_dynamicSqlParam, ["PARAM_NO", "PARAM_CD", "PARAM_NM", "PARAM_TYPE"]))
        	{
        		return;
        	}

        	var bOK = this.gfn_Message("InfoIndexIdPopupSave", "", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	var sSvcID = "saveDynamicData";
        	var sController = "/cmsl02000/saveDynamicData.do";
        	var sInDatasets = "input1=ds_dynamicSqlHeader:u input2=ds_dynamicSqlPrintAlias:u input3=ds_dynamicSqlParam:u";
        	var sOutDatasets = "ds_result=ouput ds_program_cd=result_header";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 삭제 버튼
        this.fn_delete = function (obj, e)
        {
        	if (this.ds_dynamicSqlHeader.rowcount == 0)
        	{
        		// 변경된 정보가 없습니다.
        		this.gfn_Message("InValidOspData011", null, "warning", "ok");
        		this.btn_search.setFocus();
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", "", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	this.ds_search.clearData();
        	nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "BUSINESS_TYPE", this.gfn_blankStr(this.div_search.form.cbo_businessType.value));
        	this.ds_search.setColumn(nRow, "PROGRAM_CD", this.gfn_blankStr(this.div_search.form.edt_programCd.value));
        	// trace(this.ds_search.saveXML());

        	var sSvcID = "deleteDynamicDataAll";
        	var sController = "/cmsl02000/deleteDynamicDataAll.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // SQL 유효성 검사 버튼
        this.fn_sqlValidation = function (obj, e)
        {
        	if(this.gfn_isNull(this.div_form.form.txa_select.value)) return;

        	if (this.ds_dynamicSqlHeader.rowcount == 0)
        	{
        		this.gfn_Message("ProceedAfterSearchOrNewInput", null, "info", "ok");//SQL 내역을 조회 또는 신규 입력 후 처리하시기 바랍니다.
        		return;
        	}

        	this.ds_proc_run.clearData();
        	//alert(this.div_form.form.txa_select.value);
        	nRow = this.ds_proc_run.addRow();
        	this.ds_proc_run.setColumn(nRow, "P_SQL_TEXT", this.div_form.form.txa_select.value);
        	this.ds_proc_run.setColumn(nRow, "P_PROGRAM_CD", this.div_form.form.edt_programCd.value);
        	// trace(this.ds_proc_run.saveXML());

        	var sSvcID = "executeDynamicSqlValidation";
        	var sController = "/cmsl02000/executeDynamicSqlValidation.do";
        	var sInDatasets = "INPUT=ds_proc_run";
        	var sOutDatasets = "ds_proc_run=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", false, "", "");
        };


        // 출력명칭 일괄생성 버튼
        this.fn_createPrintAlias = function (obj, e)
        {
        	if (this.ds_dynamicSqlHeader.rowcount == 0)
        	{
        		this.gfn_Message("ProceedAfterSearchOrNewInput", null, "info", "ok");
        		return;
        	}

        	// 필수입력 체크(업무구분,프로그램명)
        	var component = this.div_form;
        	var strColIdList = "cbo_businessType,edt_programNm";
        	var strColNmList = "SYSTEMWORKTYPE,ProgramName";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}


        	if (this.ds_dynamicSqlPrintAlias.rowcount == 0)
        	{
        		var bOK = this.gfn_Message("CreateData", "", "conf", "yesno");//데이터를 생성하시겠습니까?
        		if (bOK == false)
        		{
        			return;
        		}
        	}
        	else
        	{	//출력명칭 및 포멧 설정 자료가 존재합니다.\n삭제 후 생성하시겠습니까?
        		var bOK = this.gfn_Message("isExistButCreateAfterDelete", null, "conf", "yesno");
        		if (bOK == false)
        		{
        			return;
        		}
        	}

        	this.ds_dynamicSqlPrintAlias.deleteAll();
        	this.ds_proc_run.clearData();
        	nRow = this.ds_proc_run.addRow();
        	this.ds_proc_run.setColumn(nRow, "P_SQL_TEXT", this.div_form.form.txa_select.value);
        	this.ds_proc_run.setColumn(nRow, "P_PROGRAM_CD", this.div_form.form.edt_programCd.value);
        	// trace(this.ds_proc_run.saveXML());

        	var sSvcID = "executeDynamicSqlPrintAlias";
        	var sController = "/cmsl02000/executeDynamicSqlPrintAlias.do";
        	var sInDatasets = "INPUT=ds_proc_run";
        	var sOutDatasets = "ds_proc_run=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 쿼리실행 버튼
        this.fn_sqlRun = function (obj, e)
        {
        	if (this.ds_dynamicSqlHeader.rowcount == 0)
        	{
        		this.gfn_Message("ProceedAfterSearchOrNewInput", null, "info", "ok");//SQL 내역을 조회 또는 신규 입력 후 처리하시기 바랍니다
        		return;
        	}

        	var cRow = this.ds_dynamicSqlHeader.rowposition;
        	var businessType = this.div_form.form.cbo_businessType.value;
        	var programCd = this.div_form.form.edt_programCd.value;
        	var programNm = this.div_form.form.edt_programNm.value;

        	var pPopupId = "popupCMSL02100M";
        	var pCallUrl = "common::com_formPopup.xfdl";
        	var pArg = {
        		arg_businessType : businessType,
        		arg_programCd : programCd,
        		arg_programNm : programNm,
        		arg_formTitle : "다양한 쿼리 실행",
        		arg_formUrl : "cmd::CMSL02100M.xfdl"
        	};

        	this.gfn_openPopup(pPopupId, pCallUrl, pArg, "");


        	// 신규 화면 오픈
        	// this.gfn_openPopup(pPopupId, pCallUrl, pArg, "modeless=true");

        	// 본 화면에서 div_sqlResult 에서 자체 실행할 경우 로직
        	// if(this.ds_dynamicSqlHeader.rowcount == 0)
        	// {
        	// this.gfn_Message("SQL 내역을 조회 또는 신규 입력 후 처리하시기 바랍니다.", null, "info", "ok");
        	// return;
        	// }
        	//
        	// // 쿼리실행 결과 div 활성화
        	// this.div_sqlResult.set_visible(true);
        	// this.div_sqlResult.sta_title.set_text("쿼리실행 결과(" + this.div_form.edt_programNm.value + ")");
        	// this.div_sqlResult.sta_totCnt1.set_text("(조회  0 건)");
        	//
        	// // 쿼리실행 결과 데이터셋 초기화
        	// this.ds_proc_out.clearData();
        	//
        	// this.ds_proc_run.clearData();
        	// nRow = this.ds_proc_run.addRow();
        	// this.ds_proc_run.setColumn(nRow, "P_PROGRAM_CD", this.div_form.edt_programCd.value);
        	// //trace(this.ds_proc_run.saveXML());
        	//
        	// var sSvcID        = "executeDynamicSqlRun";
        	// var sController   = "/cmsl02000/executeDynamicSqlRun.do";
        	// var sInDatasets   = "INPUT=ds_proc_run";
        	// var sOutDatasets  = "ds_proc_out=ouput";
        	// var sArgs         = "";
        	// sArgs            += this.gfn_setParam("method", sSvcID);
        	// this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 쿼리실행 버튼
        this.fn_sqlView = function (obj, e)
        {
        	if (this.ds_dynamicSqlHeader.rowcount == 0)
        	{
        		this.gfn_Message("ProceedAfterSearchOrNewInput", null, "info", "ok");//SQL 내역을 조회 또는 신규 입력 후 처리하시기 바랍니다.
        		return;
        	}

        	if(this.gfn_isNull(this.div_form.form.edt_programCd.value)) return;

        	// 쿼리 문장 조회 div 활성화
        	this.div_sqlView.set_visible(true);
        	this.div_sqlView.set_top(36);
        	this.ds_proc_run.clearData();
        	nRow = this.ds_proc_run.addRow();
        	this.ds_proc_run.setColumn(nRow, "P_PROGRAM_CD", this.div_form.form.edt_programCd.value);
        	// trace(this.ds_proc_run.saveXML());

        	var sSvcID = "executeDynamicSqlView";
        	var sController = "/cmsl02000/executeDynamicSqlView.do";
        	var sInDatasets = "INPUT=ds_proc_run";
        	var sOutDatasets = "ds_proc_run=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 출력명칭 및 포멧 설정 - 행추가 버튼
        this.fn_add1 = function (obj, e)
        {
        	// 기준정보 그리드 필수 체크
        	if (!this.gfn_GridKeyCheck(this.grd_dynamicSqlPrintAlias, ["FIELD_NO", "FIELD_NM", "FIELD_PRINT_NM", "FIELD_TYPE"]))
        	{
        		return;
        	}

        	if (this.ds_dynamicSqlPrintAlias.rowcount == 0)
        	{
        		var nRow = this.ds_dynamicSqlPrintAlias.insertRow(0);
        	}
        	else
        	{
        		var nRow = this.ds_dynamicSqlPrintAlias.rowposition + 1;
        		this.ds_dynamicSqlPrintAlias.insertRow(nRow);
        	}
        	this.ds_dynamicSqlPrintAlias.setColumn(nRow, "PROGRAM_CD", this.div_form.form.edt_programCd.value);
        };


        // 출력명칭 및 포멧 설정 - 행삭제 버튼
        this.fn_del1 = function (obj, e)
        {
        	if (this.ds_dynamicSqlPrintAlias.rowcount == 0)
        	{
        		this.gfn_Message("InValidOspData011", null, "warning", "ok"); //삭제할 자료가 없습니다.
        		return;
        	}

        	if (!nexacro.getApplication().confirm("IsDeleted")) //선택된 데이터를 삭제하시겠습니까?
        	{
        		return;
        	}

        	var nRow = this.ds_dynamicSqlPrintAlias.rowposition;
        	this.ds_dynamicSqlPrintAlias.deleteRow(nRow);
        };


        // 매개변수 설정 - 행추가 버튼
        this.fn_add2 = function (obj, e)
        {
        	// 기준정보 그리드 필수 체크
        	if (!this.gfn_GridKeyCheck(this.grd_dynamicSqlParam, ["PARAM_NO", "PARAM_CD", "PARAM_NM", "PARAM_TYPE"]))
        	{
        		return;
        	}

        	if (this.ds_dynamicSqlParam.rowcount == 0)
        	{
        		var nRow = this.ds_dynamicSqlParam.insertRow(0);
        	}
        	else
        	{
        		var nRow = this.ds_dynamicSqlParam.rowposition + 1;
        		this.ds_dynamicSqlParam.insertRow(nRow);
        	}
        	this.ds_dynamicSqlParam.setColumn(nRow, "PROGRAM_CD", this.div_form.form.edt_programCd.value);
        	this.ds_dynamicSqlParam.setColumn(nRow, "PARAM_NO", (nRow + 1) * 10);
        	this.ds_dynamicSqlParam.setColumn(nRow, "PARAM_CD", "P" + (nRow + 1));
        };


        // 매개변수 설정 - 행삭제 버튼
        this.fn_del2 = function (obj, e)
        {
        	if (this.ds_dynamicSqlParam.rowcount == 0)
        	{
        		this.gfn_Message("InValidOspData011", null, "warning", "ok"); //삭제할 자료가 없습니다.
        		return;
        	}

        	if (!nexacro.getApplication().confirm("IsDeleted")) //선택된 데이터를 삭제하시겠습니까?
        	{
        		return;
        	}

        	var nRow = this.ds_dynamicSqlParam.rowposition;
        	this.ds_dynamicSqlParam.deleteRow(nRow);
        };


        // 엑셀 다운로드
        this.fn_excelDown = function ()
        {
        	if (this.ds_proc_out.rowcount == 0)
        	{
        		this.gfn_Message("NoSelectCondData", null, "warning", "ok");
        		return;
        	}

        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	var grdName = "div_sqlResult.grd_proc_out";

        	// 익스포트될 시트명, 여러개일 경우 ':'로 구분
        	var excelSheetName = this.div_form.form.edt_programNm.value;

        	// 익스포트될 엑셀 파일명
        	var excelFileName = "다양한 쿼리 실행";

        	// 저장될 엑셀명
        	this.gfn_export_excel(grdName, excelSheetName, excelFileName, "EXCEL");
        };


        // 닫기 버튼
        this.fn_close = function (obj, e)
        {
        	this.div_sqlResult.set_visible(false);
        	this.div_sqlView.set_visible(false);
        };


        /***************************************************************************************
         * 50. CALLBACK 영역
         ***************************************************************************************/

        // 콜백: 업무로직
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	// trace("trId => " + trId + ", errCD => " + errCD + ", errMsg => " + errMsg);
        	// 오류처리
        	if (errCD < 0)
        	{
        		/*
        		var localErrMsg = errMsg.substring(errMsg.lastIndexOf("ORA-") + 11, errMsg.length - 1);

        		// BizException
        		if (errCD == -200)
        		{
        			this.gfn_alert(localErrMsg);
        			return;
        		}

        		// BizException
        		if (errCD == -500)
        		{
        			this.gfn_alert(localErrMsg);
        			return;
        		}

        		if (trId.substring(0, 7) == "execute")
        		{
        			// 을/를 실패하였습니다.
        			this.gfn_Message("SMCMM0001", new Array("프로시져 실행", "\n" + localErrMsg), "error", "ok");
        		}
        		else if (trId.substring(0, 6) == "select")
        		{
        			// 조회에 실패하였습니다.
        			this.gfn_Message("SMCMM0005", "\n" + localErrMsg, "error", "ok");
        		}
        		else if (trId.substring(0, 6) == "delete")
        		{
        			// 삭제가 실패하였습니다.
        			this.gfn_Message("SMCMM0004", "\n" + localErrMsg, "error", "ok");
        		}
        		else if (trId.substring(0, 4) == "save")
        		{
        			// 저장을/를 실패하였습니다.
        			this.gfn_Message("SMCMM0001", new Array("저장", "\n" + localErrMsg), "error", "ok");
        		}
        		else
        		{
        			// 을/를 실패하였습니다.
        			this.gfn_Message("SMCMM0001", new Array("처리", "\n" + localErrMsg), "error", "ok");
        		}
        		*/
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	// 정상처리
        	switch (trId)
        	{
        		// 조회 버튼
        		case "selectcmdDynamicSqlList":
        			this.sta_totCnt1.set_text("(조회  " + this.nfn_appendComma(this.ds_dynamicSqlPrintAlias.rowcount) + " 건)");
        			this.sta_totCnt2.set_text("(조회  " + this.nfn_appendComma(this.ds_dynamicSqlParam.rowcount) + " 건)");

        			// 수정가능
        			this.div_form.form.cbo_businessType.set_cssclass("essential");
        			this.div_form.form.cbo_businessType.set_readonly(false);

        			if (this.ds_dynamicSqlHeader.rowcount == 0)
        			{
        				// 조회된 자료가 없습니다.
        				this.gfn_Message("NoSelectCondData", null, "info", "ok");
        			}
        			else
        			{
        				// 기존 값이 존재할 경우 수정 불가
        				if (!this.gfn_isNull(this.ds_dynamicSqlHeader.getColumn(0, "ROW_ID")))
        				{
        					this.div_form.form.cbo_businessType.set_cssclass("readonly");
        					this.div_form.form.cbo_businessType.set_readonly(true);
        				}
        			}
        			break;

        			// 저장 버튼
        		case "saveDynamicData":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			// 신규일 경우에만 조회조건의 프로그램 코드 및 명칭에 값 할당
        			if (this.ds_program_cd.rowcount > 0)
        			{
        				this.div_search.form.edt_programCd.set_value(this.ds_program_cd.getColumn(0, "PROGRAM_CD"));
        				this.div_search.form.edt_programNm.set_value(this.ds_program_cd.getColumn(0, "PROGRAM_NM"));
        				this.ds_program_cd.clearData();
        			}
        			this.fn_search();
        			break;

        			// 삭제 버튼
        		case "deleteDynamicDataAll":
        			this.gfn_Message("삭제되었습니다.", null, "info", "ok");

        			this.ds_dynamicSqlHeader.clearData();
        			this.ds_dynamicSqlParam.clearData();
        			this.ds_dynamicSqlPrintAlias.clearData();
        			this.btn_search.setFocus();
        			break;

        			// SQL 유효성 검사 버튼
        		case "executeDynamicSqlValidation":
        			// SQL 정상
        			if (this.ds_proc_run.getColumn(0, "O_RTN_CD") == "0")
        			{
        				this.div_form.form.btn_createPrintAlias.set_enable(true);
        				var oRtnMsg = this.ds_proc_run.getColumn(0, "O_RTN_MSG");
        				this.gfn_Message(oRtnMsg, null, "info", "ok");
        			}
        			// SQL 비정상
        			else
        			{
        				this.div_form.form.btn_createPrintAlias.set_enable(false);
        				var oRtnMsg = this.ds_proc_run.getColumn(0, "O_RTN_MSG");
        				this.gfn_Message(oRtnMsg, null, "info", "ok");
        			}
        			break;

        			// 출력명칭 일괄생성 버튼
        		case "executeDynamicSqlPrintAlias":
        			this.div_form.form.btn_createPrintAlias.set_enable(false);
        			if (this.ds_proc_run.getColumn(0, "O_RTN_CD") == "-1")
        			{
        				var oRtnMsg = this.ds_proc_run.getColumn(0, "O_RTN_MSG");
        				this.gfn_Message(oRtnMsg, null, "info", "ok");
        			}
        			else
        			{
        				this.ds_dynamicSqlPrintAlias.clearData();

        				// 출력된 컬럼을 1차 분리하여 배열에 담기
        				var oRtnMsg = this.ds_proc_run.getColumn(0, "O_RTN_VAL");
        				var arr1 = oRtnMsg.split("|");

        				programCd = this.gfn_blankStr(this.div_form.form.edt_programCd.value);

        				for (var i = 0; i < arr1.length; i++)
        				{
        					// 각 항목을 필드명과 유형으로 분리
        					var arr2 = arr1[i].split("-");
        					nRow = this.ds_dynamicSqlPrintAlias.addRow();

        					this.ds_dynamicSqlPrintAlias.setColumn(nRow, "PROGRAM_CD", programCd); //프로그램코드
        					this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_NO", (i + 1) * 10); //순번
        					this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_NM", arr2[0]); //필드명
        					this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_TYPE", arr2[1]); //필드유형
        					this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_PRINT_NM", arr2[2]); //trace("nRow => " + this.ds_dynamicSqlPrintAlias.getRowType(nRow));

        					switch (arr2[0])
        					{
        						// 고객번호
        						case "CUST_NO":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 110);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "###-###-####");
        							continue;

        							// 자원번호
        						case "HOUSE_NO":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 100);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "####-####");
        							continue;

        							// 사업자등록번호
        						case "COM_REG_NO":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 110);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "###-##-#####");
        							continue;

        							// 검침년월
        						case "INSP_YYMM":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 80);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "####/##");
        							continue;

        							// 매출년월
        						case "SALE_YYMM":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 80);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "####/##");
        							continue;

        							// 검침진로순
        						case "INSP_PATH":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 120);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "###-####-####");
        							continue;

        							// 송달진로순
        						case "CHARGE_DELIVERY_PATH":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 120);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", "###-####-####");
        							continue;
        					}


        					// 필드유형에 따른 포멧 및 크기
        					switch (arr2[1])
        					{
        						// 문자
        						case "1":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 150);
        							continue;

        							// 숫자
        						case "2":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 80);

        							var colFieldNm = arr2[0];
        							if (colFieldNm.indexOf("ID") > -1 || colFieldNm.indexOf("CD") > -1 || colFieldNm.indexOf("CODE") > -1)
        							{
        								if (colFieldNm.indexOf("IDX") > -1)
        								{
        									this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", '!#,###,##0');
        								}
        								continue;
        							}
        							else
        							{
        								this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", '!#,###,##0');
        								continue;
        							}

        							// 날짜
        						case "12":
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_SIZE", 110);
        							this.ds_dynamicSqlPrintAlias.setColumn(nRow, "FIELD_FORMAT", 'yyyy/MM/dd');
        							continue;
        					}
        				}
        				// trace(this.ds_dynamicSqlPrintAlias.saveXML());
        				// this.sta_totCnt1.set_text("(조회  "+ this.nfn_appendComma(this.ds_dynamicSqlPrintAlias.rowcount) + " 건)");
        			}
        			break;

        			// 쿼리 문장 보기 버튼
        		case "executeDynamicSqlView":
        			//trace("executeDynamicSqlView => " + this.ds_proc_run.saveXML());
        			if (this.ds_proc_run.rowcount == 0)
        			{
        				// 조회된 자료가 없습니다.
        				this.gfn_Message("NoSelectCondData", null, "info", "ok");
        			}
        			else
        			{
        				var oSqlText = this.ds_proc_run.getColumn(0, "O_SQL_TEXT");
        				this.div_sqlView.form.txa_select.set_value(oSqlText);
        			}
        			break;

        			// 쿼리실행 버튼
        		case "executeDynamicSqlRun":
        			this.div_sqlResult.form.sta_totCnt1.set_text("(조회  " + this.nfn_appendComma(this.ds_proc_out.rowcount) + " 건)");

        			// 쿼리 실행 결과 그리드 셋팅
        			this.fn_grdSetting();

        			if (this.ds_proc_out.rowcount == 0)
        			{
        				// 조회된 자료가 없습니다.
        				this.gfn_Message("NoSelectCondData", null, "info", "ok");
        			}
        			else
        			{
        				// 틀고정
        				this.fn_grdCellFix(this.div_sqlResult.form.grd_proc_out, 2);
        			}
        			break;
        	}
        };


        /***************************************************************************************
         * 60. 기타 함수
         ***************************************************************************************/

        // 초기화 버튼
        this.fn_setDefaultVal = function ()
        {
        	// 전체 초기화
        	this.ds_search.clearData();
        	this.ds_dynamicSqlHeader.clearData();
        	this.ds_dynamicSqlPrintAlias.clearData();
        	this.ds_dynamicSqlParam.clearData();

        	this.sta_totCnt1.set_text("(조회  0 건)");
        	this.sta_totCnt2.set_text("(조회  0 건)");
        	this.div_sqlResult.form.sta_totCnt1.set_text("(조회  0 건)");

        	var objDiv = this.div_search;
        	this.nfn_clearAllInDiv(objDiv);

        	this.div_sqlResult.set_visible(false);
        	this.div_form.form.btn_createPrintAlias.set_enable(false);

        	this.div_sqlView.form.txa_select.set_value("");
        	this.div_sqlView.set_visible(false);

        	this.div_search.form.edt_programCd.setFocus();
        };


        // 검색조건 필수 체크
        this.fn_searchValidation = function ()
        {
        	// 필수입력 체크(업무구분,프로그램코드)
        	var component = this.div_search;
        	var strColIdList = "edt_programCd";
        	var strColNmList = "프로그램코드";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return false;
        	}

        	// 검색조건 초기화
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "BUSINESS_TYPE", this.gfn_blankStr(this.div_search.form.cbo_businessType.value));
        	this.ds_search.setColumn(nRow, "PROGRAM_CD", this.gfn_blankStr(this.div_search.form.edt_programCd.value));
        	// trace(this.ds_search.saveXML());

        	return true;
        };


        // 매개변수 저장 시 필수여부에 따른 입력 값 체크
        this.fn_grdRequiredCheck = function ()
        {
        	var rtnValue = true;

        	// 그리드 열 추가
        	for (var i = 0; i < this.ds_dynamicSqlParam.rowcount; i++)
        	{
        		trace("bbbbbbbb => " + this.ds_dynamicSqlParam.getColumn(i, "PARAM_REQUIRED"));

        		if (this.gfn_isNull(this.ds_dynamicSqlParam.getColumn(i, "PARAM_REQUIRED"))
        			 || this.ds_dynamicSqlParam.getColumn(i, "PARAM_REQUIRED") == "0")
        		{
        			trace("aaaaaa => " + this.gfn_isNull(this.ds_dynamicSqlParam.getColumn(i, "PARAM_NULL_VALUE")));
        			if (this.gfn_isNull(this.ds_dynamicSqlParam.getColumn(i, "PARAM_NULL_VALUE")))
        			{
        				//필수 매개변수가 아닌 경우 반드시 '조건 제외' 값을 입력하시기 바랍니다.
        				this.gfn_Message("InputConditionExceptCaseEssentialParameter", null, "info", "ok");
        				this.ds_dynamicSqlParam.set_rowposition(i);
        				this.grd_dynamicSqlParam.setFocus();
        				this.grd_dynamicSqlParam.setCellPos(6);
        				rtnValue = false;
        				break;
        			}
        		}
        	}
        	return rtnValue;
        };


        // 쿼리 실행 결과 그리드 셋팅
        this.fn_grdSetting = function ()
        {
        	// 그리드 열 갯수(데이터 재 조회시 삭제하기 위하여 조회)
        	var dsCols = this.div_sqlResult.form.grd_proc_out.getFormatColCount();

        	// 그리드 열 삭제
        	for (var j = dsCols; j >= 0; j--)
        	{
        		this.div_sqlResult.form.grd_proc_out.deleteContentsCol(j);
        	}

        	// 그리드 열 추가
        	for (var j = 0; j < this.ds_dynamicSqlPrintAlias.rowcount; j++)
        	{
        		// 컬럼에 대한 상세정보 가져오기
        		var colBindNm = "bind:" + this.ds_dynamicSqlPrintAlias.getColumn(j, "FIELD_NM");
        		var colFieldNm = this.ds_dynamicSqlPrintAlias.getColumn(j, "FIELD_NM");
        		var colType = this.ds_dynamicSqlPrintAlias.getColumn(j, "FIELD_TYPE");
        		var colTitleNm = this.ds_dynamicSqlPrintAlias.getColumn(j, "FIELD_PRINT_NM");
        		var colSize = this.ds_dynamicSqlPrintAlias.getColumn(j, "FIELD_SIZE");
        		var colFormat = this.ds_dynamicSqlPrintAlias.getColumn(j, "FIELD_FORMAT");
        		// trace("colTitleNm => " + colTitleNm + ", colSize => " + colSize);

        		this.div_sqlResult.form.grd_proc_out.appendContentsCol();

        		// 그리드 헤더 명칭 생성
        		this.div_sqlResult.form.grd_proc_out.setCellProperty('Head', j, "text", colTitleNm);

        		// 그리드 컬럼 사이즈 생성
        		this.div_sqlResult.form.grd_proc_out.setFormatColProperty(j, "size", colSize);

        		// 그리드 데이터 영역 데이테 셋과 연동
        		this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "text", colBindNm);

        		// 그리드 합계 영역 색상 및 폰트 굵게
        		this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "style", "background:aquamarine");
        		this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "style", "background2:aquamarine");
        		this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "style", "font:bold 9 Arial");

        		// 디스플레이 타입 설정
        		// 문자
        		if (colType == "1")
        		{
        			// 표기형식 지정
        			this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "text");

        			// 아래 필드는 중앙정렬
        			switch (colFieldNm)
        			{
        				case "CUST_NO":
        					// 고객번호
        				case "HOUSE_NO":
        					// 자원번호
        				case "COM_REG_NO":
        					// 사업자등록번호
        				case "INSP_YYMM":
        					// 검침년월
        				case "SALE_YYMM":
        					// 매출년월
        				case "INSP_PATH":
        					// 검침진로순
        				case "CHARGE_DELIVERY_PATH":
        					// 송달진로순
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        					break;
        			}

        			// 필드명이 아래 값이 존재하면 중앙정렬
        			if (colFieldNm.indexOf("ID") > -1 || colFieldNm.indexOf("CD") > -1 || colFieldNm.indexOf("CODE") > -1)
        			{
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        			}
        		}

        		// 숫자
        		if (colType == "2")
        		{
        			// 천단위 콤마 제거, 중앙정렬
        			if (colFieldNm.indexOf("ID") > -1 || colFieldNm.indexOf("CD") > -1 || colFieldNm.indexOf("CODE") > -1)
        			{
        				// 그렇지만 IDX의 경우 천단위 콤마, 우측정렬
        				if (colFieldNm.indexOf("IDX") > -1)
        				{
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "number");
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "style", "align:right");

        					// 그리드 숫자 합계 구하기
        					var fieldGetSum = "expr:dataset.getSum('" + colFieldNm + "')";
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "text", fieldGetSum);
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "displaytype", "number");
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "style", "align:right");
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "mask", "!#,###,##0");
        				}

        				// ID, CD, CODE가 포함된 필드은 중앙정렬 및 텍스트로 설정
        				else
        				{
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "text");
        					this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        				}
        			}
        			else
        			{
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "number");
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "style", "align:right");

        				// 그리드 숫자 합계 구하기
        				var fieldGetSum = "expr:dataset.getSum('" + colFieldNm + "')";
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "text", fieldGetSum);
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "displaytype", "number");
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "style", "align:right");
        				this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', j, "mask", "!#,###,##0");
        			}
        		}

        		// 날짜
        		if (colType == "12")
        		{
        			this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "displaytype", "date");
        			this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "calendardisplaynulltype", "none");
        			this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "style", "align:center");
        		}

        		// 포멧설정
        		if (!this.gfn_isNull(colFormat))
        		{
        			this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', j, "mask", colFormat);
        		}
        	}

        	// 첫 열에 순서 컬럼 정의 (헤더, 바디, 합계)
        	this.div_sqlResult.form.grd_proc_out.insertContentsCol(0);
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Head', 0, "text", "No");
        	this.div_sqlResult.form.grd_proc_out.setFormatColProperty(0, "size", 60);
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', 0, "text", "expr:currow + 1");
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Body', 0, "style", "align:center");
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', 0, "text", "합계");
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', 0, "style", "align:center");
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', 0, "style", "background:aquamarine");
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', 0, "style", "background2:aquamarine");
        	this.div_sqlResult.form.grd_proc_out.setCellProperty('Summary', 0, "style", "font:bold 9 Arial");
        };


        /***************************************************************************************
         * 70. 이벤트
         ***************************************************************************************/

        this.fn_sqlParamOnValueChanged = function (obj, e)
        {
        	// 유형 콤보를 선택할 경우
        	if (e.columnid == "PARAM_TYPE")
        	{
        		// 값이 리스트가 아닐 경우 리스트쿼리 값 clear
        		if (e.newvalue != "LIST")
        		{
        			obj.setColumn(e.row, "PARAM_SQL_TEXT", "");
        		}

        		// 매개변수 유형이 변경된 경우 기본값 clear
        		if (e.newvalue != e.oldvalue)
        		{
        			obj.setColumn(e.row, "PARAM_DEFAULT", "");
        		}
        	}

        	// 기본 값이 변경될 경우
        	if (e.columnid == "PARAM_DEFAULT")
        	{
        		// 매개변수 실제 값에 할당
        		obj.setColumn(e.row, "PARAM_VALUE", e.newvalue);
        	}
        };


        this.fn_sqlPrintAliasOnValueChanged = function (obj, e)
        {
        	// 유형 콤보를 선택할 경우
        	if (e.columnid == "FIELD_TYPE")
        	{
        		if (e.newvalue == "2")
        		{
        			obj.setColumn(e.row, "FIELD_FORMAT", "!#,###,##0");
        		}
        		else if (e.newvalue == "12")
        		{
        			obj.setColumn(e.row, "FIELD_FORMAT", "yyyy/MM/dd");
        		}
        	}
        };

        /***************************************************************************************
         * 80. 페이징
         ***************************************************************************************/


        /***************************************************************************************
         * 90. 팝업
         ***************************************************************************************/

        // 팝업 - 입력 후 명칭 자동 조회
        this.fn_popupTextOnChanged = function (obj, e)
        {
        	if (this.nfn_isNull(e.postvalue))
        	{
        		this.div_search.form.edt_programNm.set_value(null);
        	}
        	else
        	{
        		this.ds_popParam.clearData();
        		nRow = this.ds_popParam.addRow();
        		this.ds_popParam.setColumn(nRow, "BUSINESS_TYPE", this.div_search.form.cbo_businessType.value);
        		this.ds_popParam.setColumn(nRow, "PROGRAM_CD", this.div_search.form.edt_programCd.value);

        		var sComp = "this.div_search";
        		var sSvcID = "selectP00184";
        		var popupCd = "P00184";
        		var sRtnCols = "BUSINESS_TYPE|PROGRAM_CD|PROGRAM_NM";
        		var sRtnComponents = "cbo_businessType|edt_programCd|edt_programNm";
        		var sParamDs = "ds_popParam";
        		this.nfn_setCompsCommomPoup(sSvcID, popupCd, sParamDs, sComp, sRtnCols, sRtnComponents);
        	}
        };


        // 팝업 - 오픈 버튼
        this.fn_popupOpenButton = function (obj, e)
        {
        /*
        	var popupId = "selectP00184";
        	var popupCd = "P00184";
        	var popupNm = "다양한 SQL 조회";
        	var paramCols = "";
        	var paramValues = "";
        	var searchStr = "";
        	var rtnCols = "BUSINESS_TYPE|PROGRAM_CD|PROGRAM_NM";
        	var oArg = {
        		arg_popupCd : popupCd,
        		arg_rtnCols : rtnCols,
        		arg_paramCols : paramCols,
        		arg_paramValues : paramValues,
        		arg_popupNm : popupNm,
        		arg_searchStr : searchStr
        	};
        	this.gfn_openPopup(popupId, "cmd::CMSA00100P.xfdl", oArg, "");
        */

        	var oArg = {
        	};
        	this.gfn_openPopup("CMSL02100P", "cmd::CMSL02100P.xfdl", oArg, "");
        };


        // 팝업 - CLEAR 버튼
        this.fn_popupDataClear = function (obj, e)
        {
        	this.div_search.form.edt_programCd.set_value(null);
        	this.div_search.form.edt_programNm.set_value(null);
        };


        // 팝업 - Callback
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        /*
        	if (sPopupId == "selectP00184")
        	{
        		if (this.nfn_isNull(this.fv_rtnValue))
        		{
        			return;
        		}

        		this.div_search.form.cbo_businessType.set_value(this.fv_rtnValue[0]);
        		this.div_search.form.edt_programCd.set_value(this.fv_rtnValue[1]);
        		this.div_search.form.edt_programNm.set_value(this.fv_rtnValue[2]);
        	}
        */
        	if (sPopupId == "CMSL02100P")
        	{
        		if (this.nfn_isNull(this.fv_rtnValue))
        		{
        			return;
        		}
        		this.div_search.form.cbo_businessType.set_value(this.fv_rtnValue[2]);
        		this.div_search.form.edt_programCd.set_value(this.fv_rtnValue[0]);
        		this.div_search.form.edt_programNm.set_value(this.fv_rtnValue[1]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_dynamicSqlPrintAlias.addEventHandler("onselectchanged",this.grd_batchRun_onselectchanged,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_clear,this);
            this.btn_sqlRun.addEventHandler("onclick",this.fn_sqlRun,this);
            this.div_search.form.edt_programCd.addEventHandler("onchanged",this.fn_popupTextOnChanged,this);
            this.div_search.form.btn_sqlNoPopup.addEventHandler("onclick",this.fn_popupOpenButton,this);
            this.div_form.form.edt_programCd.addEventHandler("onkeydown",this.div_search_edt_srchBatchCd_onkeydown,this);
            this.div_form.form.edt_programNm.addEventHandler("onkeydown",this.div_search_edt_srchDescription_onkeydown,this);
            this.div_form.form.txa_select.addEventHandler("oneditclick",this.Div03_TextArea00_oneditclick,this);
            this.div_form.form.btn_sqlValidation.addEventHandler("onclick",this.fn_sqlValidation,this);
            this.div_form.form.btn_createPrintAlias.addEventHandler("onclick",this.fn_createPrintAlias,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.btn_add2.addEventHandler("onclick",this.fn_add2,this);
            this.btn_del1.addEventHandler("onclick",this.fn_del1,this);
            this.btn_add1.addEventHandler("onclick",this.fn_add1,this);
            this.div_sqlResult.form.grd_proc_out.addEventHandler("onselectchanged",this.grd_batchRun_onselectchanged,this);
            this.div_sqlResult.form.sta_title.addEventHandler("onclick",this.sta_title_onclick,this);
            this.div_sqlResult.form.btn_excelDownload.addEventHandler("onclick",this.fn_excelDown,this);
            this.div_sqlResult.form.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_sqlView.addEventHandler("onclick",this.fn_sqlView,this);
            this.btn_del2.addEventHandler("onclick",this.fn_del2,this);
            this.btn_delete.addEventHandler("onclick",this.fn_delete,this);
            this.div_sqlView.form.sta_title.addEventHandler("onclick",this.sta_title_onclick,this);
            this.div_sqlView.form.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.div_sqlView.form.txa_select.addEventHandler("oneditclick",this.Div03_TextArea00_oneditclick,this);
            this.ds_dynamicSqlPrintAlias.addEventHandler("onvaluechanged",this.ds_dynamicSqlPrintAlias_onvaluechanged,this);
            this.ds_dynamicSqlParam.addEventHandler("onvaluechanged",this.fn_sqlParamOnValueChanged,this);
        };
        this.loadIncludeScript("CMSL02000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
