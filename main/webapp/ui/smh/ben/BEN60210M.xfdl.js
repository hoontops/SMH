(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60210M");
            this.set_titletext("자녀학자금");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSBEN_SCHOOL_EXPENSES_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schoolExpenseList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSBEN_SCHOOL_EXPENSES_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPROVAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTEND_SCHOOL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"QUARTER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_CARRIER\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BENEFICAIARY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_PRICE_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPROVAL_PRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schoolExpenseInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ATTEND_SCHOOL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"BENEFICAIARY\" type=\"STRING\" size=\"256\"/><Column id=\"BENEFICAIARY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QUARTER\" type=\"STRING\" size=\"256\"/><Column id=\"QUARTER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_CARRIER\" type=\"STRING\" size=\"256\"/><Column id=\"SCHOOL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"OBTAIN_POINT\" type=\"STRING\" size=\"256\"/><Column id=\"BASIS_PERFECTION\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERANCE_FEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCHOOL_FEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCHOOL_SUPPORT_FEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"STUDENT_FEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SCHOOL_OPERATING_FEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUEST_PRICE_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPROVAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_PRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RETURN_REASON\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HJSBEN_SCHOOL_EXPENSES_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_childrenList", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BENEFICAIARY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","36",null,"42","0",null,null,null,null,null,this);
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            obj.set_taborder("5");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>기준년도");
            obj.set_tooltiptext("기준년도");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","90","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","190","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_basisYear","100","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,VAL,Y,Y");
            obj.set_readonly("false");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","200","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("상태");
            obj.set_tooltiptext("상태");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_approvalStatus","280","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_APPROVAL_STATUS,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static78","0","27",null,"9","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_WF_favorite");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Tab("div_work","0","78",null,null,"0","0",null,null,null,null,this);
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master_02");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("자녀학자금 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_gridTitle","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("자녀학자금 신청 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("자녀학자금 신청 내역");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_schoolExpenseList","0","34",null,null,"0","58",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_schoolExpenseList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"년도\" tooltiptext=\"년도\"/><Cell col=\"4\" text=\"분기\" tooltiptext=\"분기\"/><Cell col=\"5\" text=\"학력\" tooltiptext=\"학력\"/><Cell col=\"6\" text=\"학교\" tooltiptext=\"학교\"/><Cell col=\"7\" text=\"수혜자\" tooltiptext=\"수혜자\"/><Cell col=\"8\" text=\"관계\" tooltiptext=\"관계\"/><Cell col=\"9\" text=\"신청금액\" tooltiptext=\"신청금액\"/><Cell col=\"10\" text=\"승인금액\" tooltiptext=\"승인금액\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:APPROVAL_STATUS_NAME\" color=\"blue\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:ATTEND_SCHOOL_YEAR\"/><Cell col=\"4\" text=\"bind:QUARTER_NAME\"/><Cell col=\"5\" text=\"bind:SCHOOL_CARRIER\"/><Cell col=\"6\" text=\"bind:SCHOOL_NAME\"/><Cell col=\"7\" text=\"bind:BENEFICAIARY_NAME\"/><Cell col=\"8\" text=\"bind:RELATIONSHIP_NAME\"/><Cell col=\"9\" text=\"bind:REQUEST_PRICE_SUM\"/><Cell col=\"10\" text=\"bind:APPROVAL_PRICE\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"합계\" tooltiptext=\"합계\" textAlign=\"center\"/><Cell col=\"9\" displaytype=\"currency\" expr=\"dataset.getSum(&apos;parseInt(REQUEST_PRICE_SUM)&apos;)\"/><Cell col=\"10\" displaytype=\"currency\" expr=\"dataset.getSum(&apos;parseInt(APPROVAL_PRICE)&apos;)\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_schoolExpenseList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16","15",null,null,"24","15","24",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("※ 임직원 자녀학자금 신청서 접수 마감일은 매월 10일 입니다. (기한내 신청서 및 관련증빙 필착요망)");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 임직원 자녀학자금 신청서 접수 마감일은 매월 10일 입니다. (기한내 신청서 및 관련증빙 필착요망)");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16_00","15",null,null,"24","15","0",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("※ 자녀학자금 신청서, 등록금 고지서(또는 영수증 사본), 전 학생 성적증명서(대학생)를 제출바랍니다.");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 자녀학자금 신청서, 등록금 고지서(또는 영수증 사본), 전 학생 성적증명서(대학생)를 제출바랍니다.");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_request",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신규");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("자녀학자금 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("수혜자녀 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("수혜자녀 정보");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","67",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"63","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line_sub");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>수혜자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("수혜자");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","580","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>학교");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학교");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("전공");
            obj.set_usedecorate("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","290","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>*</fc>학력");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학력");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>학년");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학년");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학점");
            obj.set_usedecorate("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_major","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_grades","705","36","60","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_inputtype("dot,number");
            obj.set_textAlign("center");
            obj.set_text("9928");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","765","36","14","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("/");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_grades1","779","36","60","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_inputtype("dot,number");
            obj.set_textAlign("center");
            obj.set_text("9928");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_beneficiary","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_childrenList");
            obj.set_codecolumn("PERSON_ID");
            obj.set_datacolumn("BENEFICAIARY_NAME");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_education","415","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_work_Tabpage3_form_div_basicInfo_form_cmb_education_innerdataset = new nexacro.NormalDataset("div_work_Tabpage3_form_div_basicInfo_form_cmb_education_innerdataset", obj);
            div_work_Tabpage3_form_div_basicInfo_form_cmb_education_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">초등재학</Col><Col id=\"datacolumn\">초등재학</Col></Row><Row><Col id=\"codecolumn\">중등재학</Col><Col id=\"datacolumn\">중등재학</Col></Row><Row><Col id=\"codecolumn\">고교재학</Col><Col id=\"datacolumn\">고교재학</Col></Row><Row><Col id=\"codecolumn\">대학재학</Col><Col id=\"datacolumn\">대학재학</Col></Row></Rows>");
            obj.set_innerdataset(div_work_Tabpage3_form_div_basicInfo_form_cmb_education_innerdataset);
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_grade","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,HJS_HR_SCHOOL_LEVEL,SEL,Y,Y");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_school","705","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_textAlign("left");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","97","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("학자금 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("학자금 신청 정보");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00","0","131",null,"156","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_line_sub");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            obj.set_taborder("0");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_text("<fc v=\'red\'>*</fc>분기");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("분기");
            obj.set_usedecorate("true");
            obj.set_taborder("4");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_text("<fc v=\'red\'>*</fc>년도");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("년도");
            obj.set_usedecorate("true");
            obj.set_taborder("2");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDate","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("입학금");
            obj.set_tooltiptext("입학금");
            obj.set_taborder("6");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00","290","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_taborder("8");
            obj.set_text("수업료");
            obj.set_tooltiptext("수업료");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00","580","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("학교운영비");
            obj.set_tooltiptext("학교운영비");
            obj.set_taborder("10");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00","0","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("학생회비");
            obj.set_tooltiptext("학생회비");
            obj.set_taborder("12");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00","290","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("육성회비");
            obj.set_tooltiptext("육성회비");
            obj.set_taborder("14");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00","580","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("기타(입학축하금)");
            obj.set_tooltiptext("기타(입학축하금)");
            obj.set_taborder("16");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_sum","0","124","700","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("합계");
            obj.set_tooltiptext("합계");
            obj.set_taborder("18");
            obj.set_font("bold 12px/normal \"Nanum Gothic\",\"나눔 고딕\",\"Arial\"");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Combo("cmb_attendYear","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,SEL,Y,Y");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Combo("cmb_quarter","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,HJS_HR_QUARTER,SEL,Y,Y");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_admissionFee","125","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("7");
            obj.set_format("###,###");
            obj.set_textAlign("right");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_tuition","415","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("9");
            obj.set_format("###,###");
            obj.set_textAlign("right");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_schoolOperatingExpenses","705","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("11");
            obj.set_format("###,###");
            obj.set_textAlign("right");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_studentUnionFee","125","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("13");
            obj.set_format("###,###");
            obj.set_textAlign("right");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_upbringingFee","415","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("15");
            obj.set_format("###,###");
            obj.set_textAlign("right");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_etc","705","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("17");
            obj.set_format("###,###");
            obj.set_textAlign("right");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_sum","705","129","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_format("###,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_taborder("19");
            obj.set_font("bold 12px/normal \"Nanum Gothic\",\"나눔 고딕\",\"Arial\"");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16","15","297",null,"24","15",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("※ 학교운영비는 고등학교에 한하여 지원가능.");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 학교운영비는 고등학교에 한하여 지원가능.");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","66",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_work.Tabpage3.form.div_basicInfo00.form.cal_requestDate","value","ds_schoolExpenseInfo","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage3.form.div_basicInfo.form.cmb_education","value","ds_schoolExpenseInfo","SCHOOL_CARRIER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage3.form.div_basicInfo.form.edt_school","value","ds_schoolExpenseInfo","SCHOOL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage3.form.div_basicInfo.form.cmb_grade","value","ds_schoolExpenseInfo","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage3.form.div_basicInfo.form.edt_major","value","ds_schoolExpenseInfo","MAJOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage3.form.div_basicInfo.form.edt_grades","value","ds_schoolExpenseInfo","OBTAIN_POINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage3.form.div_basicInfo.form.edt_grades1","value","ds_schoolExpenseInfo","BASIS_PERFECTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.Tabpage3.form.div_basicInfo00.form.cmb_attendYear","value","ds_schoolExpenseInfo","ATTEND_SCHOOL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.Tabpage3.form.div_basicInfo00.form.cmb_quarter","value","ds_schoolExpenseInfo","QUARTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.Tabpage3.form.div_basicInfo.form.cmb_beneficiary","value","ds_schoolExpenseInfo","BENEFICAIARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee","value","ds_schoolExpenseInfo","ENTERANCE_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition","value","ds_schoolExpenseInfo","SCHOOL_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses","value","ds_schoolExpenseInfo","SCHOOL_OPERATING_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee","value","ds_schoolExpenseInfo","STUDENT_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee","value","ds_schoolExpenseInfo","SCHOOL_SUPPORT_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.Tabpage3.form.div_basicInfo00.form.msk_etc","value","ds_schoolExpenseInfo","ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.Tabpage3.form.div_basicInfo00.form.msk_sum","value","ds_schoolExpenseInfo","REQUEST_PRICE_SUM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BEN60210M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : SM상선 myHR Application고도화 사업
         * 업무명         : 자녀 학자금
         * 파일명         : BEN60210M.xfdl
         * 작성자         : 정우영
         * 작성일         : 2022.02.04
         *
         * 설  명         : 임직원이 SSHR을 통해 자녀학자금을 신청하는 작업이다
         *					사용자: SSHR사용자중 자녀학자금 신청 대상자
         *					학자금 신청 메뉴에 접속시 신청했던 내역을 먼저 Display하고 ‘신청’ 버튼을 누르면
         *					실제로 신청하는 화면으로 이동하여 학자금을 신청하면 되고,
         *					전에 신청했던 항목의 상세내역을 보려면 리스트에서 해당 자료의 신청일자를 선택하면
         *					상세내역으로 이동하여 승인상태를 비롯하여 관련 자료를 볼 수 있다.
         *
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.04     정우영      최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var flag;
        var personId = this.gf_getPersonId();
        this.gridTitle = "";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화(공통)
            this.nfn_formInit(obj);

            this.gridTitle = this.div_work.Tabpage2.form.sta_gridTitle.getDisplayText();

        	//조회조건 초기값 Setting
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.div_search.form.cbo_basisYear.set_text(this.gfn_getYear());
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	// 매개변수 초기화
        	this.ds_search.clearData();
        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "BASIS_YEAR", this.div_search.form.cbo_basisYear.value);
        	this.ds_search.setColumn(sRow, "APPROVAL_STATUS", this.div_search.form.cbo_approvalStatus.value);
        	this.ds_search.setColumn(sRow, "PERSON_ID", personId);

        	// 자녀 학자금 신청 내역
        	var sSvcID = "selectSchoolExpenseList";
        	var sController = "/ben60210/selectSchoolExpenseList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_schoolExpenseList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectSchoolExpenseList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 자녀 리스트 조회
         */
        this.fn_searchChildren = function(pDataset)
        {
        	this.ds_search2.clearData();
        	var sRow = this.ds_search2.addRow();
        	this.ds_search2.setColumn(sRow, "PERSON_ID", personId);

        	// 자녀 리스트 조회
        	var sSvcID = "selectChildrenList";
        	var sController = "/ben60210/selectChildrenList.do";
        	var sInDatasets = "INPUT=ds_search2";
        	var sOutDatasets = "ds_childrenList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectChildrenList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 기능 : 신규
         */
        this.fn_request = function(obj,e)
        {
        	// 자녀 리스트 조회
        	this.fn_searchChildren();

        	this.ds_schoolExpenseInfo.clearData();
        	var nRow = this.ds_schoolExpenseInfo.addRow();
        	this.ds_schoolExpenseInfo.setColumn(nRow, "PERSON_ID", personId);
        	this.ds_schoolExpenseInfo.setColumn(nRow, "REQUEST_DATE", this.gfn_today());
        	this.ds_schoolExpenseInfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);
        	this.ds_schoolExpenseInfo.setColumn(nRow, "APPROVAL_STATUS", "10");
        	this.ds_schoolExpenseInfo.setColumn(nRow, "BASIS_YEAR", this.div_search.form.cbo_basisYear.value);
        	this.ds_schoolExpenseInfo.setColumn(nRow, "ATTEND_SCHOOL_YEAR", this.gfn_getYear());


        	/*신청시에는 신청등록 div 활성화 */
        	this.div_work.set_tabindex(1); //자녀 학자금 신청 탭으로 이동
        	this.div_work.Tabpage3.form.div_basicInfo.set_enable(true);
        	this.div_work.Tabpage3.form.btn_cancel.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(true);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(true);
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_delLine = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_schoolExpenseList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0; //승인건수
        	var withdrawalCount = 0; //철회건수

        	for (i=0; i< this.ds_schoolExpenseList.getRowCount(); i++){
        		var checkYn = this.ds_schoolExpenseList.getColumn(i, "CHECK_YN");
        		var status = this.ds_schoolExpenseList.getColumn(i, "APPROVAL_STATUS");
        		/*APPROVAL_STATUS
        			10 : 대기
        			20 : 승인
        			30 : 철회대기
        			40 : 철회
        			50 : 반려
        		*/
        		if (checkYn == "1" && status == "20") //체크대상 중 승인
        		{
        			inValidCount++;
        		}
        		else if (checkYn == "1" && status == "30") //체크대상 중 철회대기
        		{
        			withdrawalCount++;
        		}
        		else if (checkYn == "1" && (status == "10"||status == "40"||status == "50")) //체크대상 중 대기,철회,반려
        		{
        			validCount++;
        		}
        	}

        	if (inValidCount > 0)
        	{
        		this.gfn_Message("ApprovalDeleteCheckByState", null, "info", "ok"); //승인 상태 내역은 삭제할 수 없습니다.
        		return;
        	}

        	if (validCount < 1 && withdrawalCount < 1)
        	{
        		this.gfn_Message("SelectData", this.gridTitle, "info", "ok");//{0}을 선택하여 주십시오.
        		return;
        	}

        	//(10 : 대기, 40 : 철회,50 : 반려) 일 경우는 삭제처리
        	var workMessage = "IsDeleted"; //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?

        	//(30 : 철회대기)일 경우는
        	if(validCount==0 && withdrawalCount>0)
        	{
        		workMessage = "IsCancelCheck"; //철회신청을 취소하시겠습니까?
        	}
        	else if (validCount>0 && withdrawalCount>0)
        	{
        		workMessage = "IsDeletedORIsWithdrawal"; //선택한 내역에 대해 삭제 및 철회신청을 하시겠습니까?
        	}

        	var bOK = this.gfn_Message(workMessage, null, "conf", "yesno");
        	if (!bOK) return;

        	for (i=0; i< this.ds_schoolExpenseList.getRowCount(); i++){
        		var checkYn = this.ds_schoolExpenseList.getColumn(i, "CHECK_YN");
        		var status = this.ds_schoolExpenseList.getColumn(i, "APPROVAL_STATUS");
        		/*APPROVAL_STATUS
        			10 : 대기
        			20 : 승인
        			30 : 철회대기
        			40 : 철회
        			50 : 반려
        		*/
        		if (checkYn == "1" && status == "20") //체크대상 중 승인
        		{
        		}
        		else if (checkYn == "1" && status == "30") //체크대상 중 철회대기
        		{//상태값 [승인]으로 변경
        			this.ds_schoolExpenseList.setColumn(i, "STATUS", "20");
        		}
        		else if (checkYn == "1" && (status == "10"||status == "40"||status == "50")) //체크대상 중 대기,철회,반려
        		{
        			this.ds_schoolExpenseList.deleteRow(i);
        		}
        	}

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveSchoolExpense";
            var sController   = "/ben60210/saveSchoolExpense.do";
            var sInDatasets   = "INPUT=ds_schoolExpenseList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	this.div_work.set_tabindex(0);

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_schoolExpenseInfo.rowcount < 1) return;

        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_schoolExpenseInfo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var objDataset = "ds_schoolExpenseInfo";
        	var strColIdList = "BENEFICAIARY,SCHOOL_CARRIER,SCHOOL_NAME,GRADE,ATTEND_SCHOOL_YEAR,QUARTER";
        	var strColNmList = "수혜자,학력,학교,학년,년도,분기"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	// ---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------

            var sSvcID        = "saveSchoolExpense";
            var sController   = "/ben60210/saveSchoolExpense.do";
            var sInDatasets   = "INPUT=ds_schoolExpenseInfo:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectSchoolExpenseList") //조회
        		{
        			this.div_work.set_tabindex(0); //자녀학자금 현황 탭으로 이동
        			if (this.ds_schoolExpenseList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistListTitle", this.gridTitle, "info", "ok") //{0}정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        		else if (trId == "selectSchoolExpenseDetail") //자녀학자금 상세 조회
        		{
        			var status = this.ds_schoolExpenseInfo.getColumn(this.ds_schoolExpenseInfo.rowposition, "APPROVAL_STATUS");

        			if (status == "10")
        			{
        				this.div_work.Tabpage3.form.btn_save.set_enable(true);
        			}
        			else
        			{
        				this.div_work.Tabpage3.form.btn_save.set_enable(false);
        			}
        			this.div_work.set_tabindex(1);

                    //상세조회된 학력에 따라 components 활성화
        			this.fn_edtEnableControl(this.div_work.Tabpage3.form.div_basicInfo.form.cmb_education,nexacro.ItemChangeEventInfo);
        		}
        		else if (trId == "saveSchoolExpense") //저장
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0); //자녀학자금 현황 탭으로 이동
        			this.fn_search();
        		}
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 화면 로드 후 초기값 적용
         */
        this.fn_formInit = function ()
        {
        	//기준년도를 현재 일자 기준의 년도로 표시
        	this.div_search.form.cbo_basisYear.set_text(this.gfn_getYear());
        };

        /*
         * 학자금 신청 금액 합계--사용안함
         */
         /*
        this.fn_sumFee = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        {
        	var a = parseInt(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.value);
        	var b = parseInt(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.value);
         	var c = parseInt(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.value);
         	var d = parseInt(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.value);
         	var e = parseInt(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.value);
        	var f = parseInt(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_etc.value);

        	if (isNaN(a)) a = 0;
        	if (isNaN(b)) b = 0;
        	if (isNaN(c)) c = 0;
        	if (isNaN(d)) d = 0;
        	if (isNaN(e)) e = 0;
        	if (isNaN(f)) e = 0;

            const array = [a, b, c, d, e, f]
        	let sum = 0;

        	for (let i = 0; i < array.length; i++) {
        		sum += array[i];
        	}

        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_sum.set_value(sum);
        };
        */
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 그리드 셀클릭 - 상세정보 진입
         */
        this.fn_cellClick = function(obj,e)
        {
        	if(e.col != obj.getBindCellIndex("body", "CHECK_YN"))
        	{
        		flag = "select"; //상세정보 조회여부
        		this.ds_schoolExpenseInfo.clearData();
        		this.ds_search.clearData();
        		var nRow = this.ds_search.addRow();
        		var itemSeq = obj.getBindDataset().getColumn(e.row, "HJSBEN_SCHOOL_EXPENSES_SEQ");
        		this.ds_search.setColumn(nRow, "HJSBEN_SCHOOL_EXPENSES_SEQ", itemSeq);

        		var sSvcID = "selectSchoolExpenseDetail";
        		var sController = "/ben60210/selectSchoolExpenseDetail.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_schoolExpenseInfo=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 이벤트 : Tab Page 변경 시(등록탭 페이지화면 로드 될 때)
         */
        this.tab_work_onchanged = function(obj,e)
        {
        	//자녀학자금 등록 탭일경우
        	if (e.postindex == 1) {

        		//상세내역 조회가 아닌경우 초기화
        		if (flag != "select")
        		{
        			this.div_work.Tabpage3.form.div_basicInfo.set_enable( true );

        			this.ds_schoolExpenseInfo.clearData();
        			var nRow = this.ds_schoolExpenseInfo.addRow();

        			this.ds_schoolExpenseInfo.setColumn(nRow, "PERSON_ID", personId);
        			this.ds_schoolExpenseInfo.setColumn(nRow, "REQUEST_DATE", this.gfn_today());
        			this.ds_schoolExpenseInfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);
        			this.ds_schoolExpenseInfo.setColumn(nRow, "APPROVAL_STATUS", "10");
        			this.ds_schoolExpenseInfo.setColumn(nRow, "BASIS_YEAR", this.div_search.form.cbo_basisYear.value);
        			this.ds_schoolExpenseInfo.setColumn(nRow, "ATTEND_SCHOOL_YEAR", this.gfn_getYear());

        			/*신청시에는 신청등록 div 활성화 */
        			this.div_work.set_tabindex(1); //자녀 학자금 신청 탭으로 이동
        			this.div_work.Tabpage3.form.div_basicInfo.set_enable(true);
        			this.div_work.Tabpage3.form.btn_cancel.set_enable(true);
        			this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_enable(true);
        			this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_enable(true);
        			this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_enable(true);
        			this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(true);
        			this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(true);
        		}

        		//자녀 리스트 조회
        		this.fn_searchChildren();
        	}

        	//화면 진입 성공 후 플래그 초기화
        	flag = "";
        };

        // 신청서 작성 중 자녀학자금 현황 탭으로 이동
        this.fn_changeChk = function() {

        	if(this.gfn_dsIsUpdated(this.ds_schoolExpenseInfo))
        	{
        		//변경된 데이터가 있습니다. 취소 후 이동 하시겠습니까?
         		if (this.gfn_Message("IsChangedButContinue", null, "conf", "yesno"))
        		{
        			// 화면이동 및 작성데이터 초기화
        			trace("이동");

        		} else
        		{
        			// 화면이동 x
        			trace("이동안함");
        			return false;
        		}
        	}
        	else {
        		trace("수정사항 X");
        	}
        }

        this.fn_updateChk = function(obj,e)
        {
        	if (e.postindex == 0) {

        		//취소 시 탭 이동 X
        		return this.fn_changeChk();
        	}
        };

        // 콤보 변경 이벤트
        this.fn_selectRelationship = function(obj,e)
        {
        	var row = this.ds_childrenList.findRow("PERSON_ID", e.postvalue);
        	this.ds_schoolExpenseInfo.setColumn(0, "RELATIONSHIP", this.ds_childrenList.getColumn(row, "RELATIONSHIP")); //수혜자와의 관계
        };


        // 학력 구분별 입력, 수정 불가
        this.fn_edtEnableControl = function(obj,e)
        {
        	var schoolCarrier = this.div_work.Tabpage3.form.div_basicInfo.form.cmb_education.value;

        	this.div_work.Tabpage3.form.div_basicInfo.form.edt_major.set_enable(true);//전공
        	this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades.set_enable(true);//학점(From)
        	this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades1.set_enable(true);//학점(To)
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(true);//학생회비
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(true); //육성회비
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_enable(true);//입학금
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_enable(true);//수업료
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_enable(true);//학교운영비

        	/*컬럼 display 처리
        	  -. 초등재학 : 전공 / 학점 / 학생회비 / 육성회비
        	  -. 중학재학 : 전공 / 학점 / 입학금 / 수업료 / 학교운영비 / 학생회비 / 육성회비
        	  -. 고교재학 : 전공 / 학점 / 학생회비 / 육성회비
        	  -. 대학재학 : 학교운영비 / 학생회비 / 육성회비
        	*/
        	if (schoolCarrier == "초등재학" || schoolCarrier == "고교재학")
        	{
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_major.set_enable(false);//전공
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades.set_enable(false);//학점(From)
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades1.set_enable(false);//학점(To)
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(false);//학생회비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(false); //육성회비

        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_major.set_value("");//전공
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades.set_value("");//학점(From)
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades1.set_value("");//학점(To)
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_value("");//학생회비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_value(""); //육성회비
        	}
        	else if (schoolCarrier == "중등재학")
        	{
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_major.set_enable(false);//전공
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades.set_enable(false);//학점(From)
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades1.set_enable(false);//학점(To)
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_enable(false);//입학금
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_enable(false);//수업료
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_enable(false);//학교운영비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(false);//학생회비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(false); //육성회비

        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_major.set_value("");//전공
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades.set_value("");//학점(From)
        		this.div_work.Tabpage3.form.div_basicInfo.form.edt_grades1.set_value("");//학점(To)
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_value("");//입학금
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_value("");//수업료
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_value("");//학교운영비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_value("");//학생회비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_value(""); //육성회비
        	}
        	else if (schoolCarrier == "대학재학")
        	{
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_enable(false);//학교운영비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(false);//학생회비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(false); //육성회비

        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_value("");//학교운영비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_value("");//학생회비
        		this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_value(""); //육성회비
        	}
        };

        /*
         * 이벤트 : 수혜자녀 정보 >> 학년 >> 기타(입학축하금) 선택시
         */
        this.fn_etcControl = function(obj,e)
        {
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_enable(false);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_enable(false);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_enable(false);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_enable(false);
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_enable(false);

        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_admissionFee.set_value("");
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_tuition.set_value("");
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_schoolOperatingExpenses.set_value("");
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_studentUnionFee.set_value("");
        	this.div_work.Tabpage3.form.div_basicInfo00.form.msk_upbringingFee.set_value("");

        	//this.div_work.Tabpage3.form.div_basicInfo00.form.msk_sum.set_value(this.div_work.Tabpage3.form.div_basicInfo00.form.msk_etc.value);
        };

        /*
         * 이벤트 :
         */
        this.ds_schoolExpenseInfo_oncolumnchanged = function(obj,e)
        {
        	if (  e.columnid == "ENTERANCE_FEE" || e.columnid == "SCHOOL_FEE" || e.columnid == "SCHOOL_OPERATING_FEE"
        	    ||e.columnid == "STUDENT_FEE" || e.columnid == "SCHOOL_SUPPORT_FEE" || e.columnid == "ETC")
        	{
        		var sum = nexacro.toNumber(obj.getColumn(e.row, "ENTERANCE_FEE"), 0)
        		        + nexacro.toNumber(obj.getColumn(e.row, "SCHOOL_FEE"), 0)
        		        + nexacro.toNumber(obj.getColumn(e.row, "SCHOOL_OPERATING_FEE"), 0)
        		        + nexacro.toNumber(obj.getColumn(e.row, "STUDENT_FEE"), 0)
        		        + nexacro.toNumber(obj.getColumn(e.row, "SCHOOL_SUPPORT_FEE"), 0)
        		        + nexacro.toNumber(obj.getColumn(e.row, "ETC"), 0)

        		obj.setColumn(e.row, "REQUEST_PRICE_SUM", sum);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.addEventHandler("canchange",this.fn_updateChk,this);
            this.div_work.Tabpage2.form.grd_schoolExpenseList.addEventHandler("oncellclick",this.fn_cellClick,this);
            this.div_work.Tabpage2.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_work.Tabpage2.form.btn_delLine.addEventHandler("onclick",this.fn_delLine,this);
            this.div_work.Tabpage2.form.btn_request.addEventHandler("onclick",this.fn_request,this);
            this.div_work.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.Tabpage3.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cmb_beneficiary.addEventHandler("onitemchanged",this.fn_selectRelationship,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cmb_education.addEventHandler("onitemchanged",this.fn_edtEnableControl,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cmb_grade.addEventHandler("onitemchanged",this.fn_etcControl,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_searchClear,this);
            this.ds_schoolExpenseInfo.addEventHandler("oncolumnchanged",this.ds_schoolExpenseInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("BEN60210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
