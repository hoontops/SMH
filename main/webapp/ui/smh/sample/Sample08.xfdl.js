(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample07");
            this.set_titletext("Validation체크 (css가이드)");
            this.set_color("rgba(52,52,52,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","11","47","890","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","70","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("콤보조건");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","184","10","70","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("캘린더조건");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","374","10","70","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("스핀조건");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","274","41","110","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("에디트텍스트조건");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","387","41",null,"21","186",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","263","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","435","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("36");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            obj.set_value("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","556","10","83","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("37");
            obj.set_text("체크박스조건");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","20","41","94","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("38");
            obj.set_text("라디오버튼조건");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","120","41","153","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("39");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">TRUE</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">FALSE</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","650","10","65","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("40");
            obj.set_text("TRUE");
            obj.set_value("false");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","83","10","89","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("선택");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo01_innerdataset", obj);
            Div00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">FALSE</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">TRUE</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo01_innerdataset);
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","890","48","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","849","48","20","10",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","849","79","20","10",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","16","16","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("검색조건 영역의 validation css처리 샘플");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","16","162","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("입력폼의 validation css처리 샘플");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","132","221","771","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","132","191","771","31",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","13","221","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("체크박스입력");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","13","191","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("콤보입력");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","309","191","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("캘린더입력");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","309","221","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("라디오입력");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","605","191","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("스핀입력");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","605","221","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("에디트입력");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","13","190","890","2",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Button("Button73","861","256","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","138","196","166","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_displaynulltext("선택");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">FALSE</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">TRUE</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","434","196","166","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","730","196","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","138","226","166","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("TRUE");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","434","226","166","21",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">TRUE</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">FALSE</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","730","226","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","16","294","314","154",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Div01");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","46","152","90",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("콤보        : TRUE선택\r\n캘린더     : 오늘날짜선택\r\n스핀        : 1이상의 수 선택\r\n체크박스  : TRUE 체크\r\n라디오     : TRUE선택\r\n에디트     : 텍스트입력\r\n");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","13","5","300","38",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("샘플입력양식 validation 만족값");
            obj.set_color("crimson");
            obj.set_font("bold 15pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div02","358","294","418","154",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Div01");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","46","152","50",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("guide::Guide_01.xfdl\r\nguide::Guide_03.xfdl\r\nguide::Guide_05.xfdl");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","13","5","300","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("CSS 참조 가이드");
            obj.set_color("crimson");
            obj.set_font("bold 15pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","13","109","388","38",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("위 가이드내 입력양식의 cssclass명 참조");
            obj.set_color("dodgerblue");
            obj.set_font("bold 15pt \"Dotum\"");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","16","469","804","38",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("필수 입력값이 아닌 경우도 validation 체크후 오류값 입력폼에 대해 빨간테두리 적용");
            obj.set_color("lightseagreen");
            obj.set_font("bold 15pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","15","196","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","226","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","313","196","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","313","227","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","608","196","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","608","226","9","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample08.xfdl","lib::comLib.xjs");
        this.registerScript("Sample08.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Validation체크 (css가이드) Sample
         * 파일명 		: Sample08.xfdl
         * 작성자 		: 진성하(UI공통)
         * 작성일 		: 2014.05.21
         *
         * 설  명		: validation 체크 후 입력폼 강조방식에 대한 가이드
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        /* 조회버튼클릭 */
        this.Div00_Button52_onclick = function (obj, e)
        {
        	/*콤보선택 validation 샘플*/
        	if (this.Div00.form.Combo01.value != 1)
        	{
        		this.Div00.form.Combo01.set_cssclass("essential_error"); //콤보값 미선택 혹은 FALSE선택시 실패 (경고css적용)
        	}
        	else
        	{
        		this.Div00.form.Combo01.set_cssclass("essential"); //콤보값 1인 TRUE선택시 성공 (초기css적용)
        	}

        	/*캘린더선택 validation샘플*/
        	var today = this.gfn_today();
        	if (this.Div00.form.Calendar00.value != today)
        	{
        		this.Div00.form.Calendar00.set_cssclass("essential_error"); //오늘이 아닌날짜 선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Div00.form.Calendar00.set_cssclass("essential"); //오늘날짜 선택시 성공 (초기css적용)
        	}

        	/*스핀조건 validation샘플 */
        	if (this.Div00.form.Spin00.value == 0)
        	{
        		this.Div00.form.Spin00.set_cssclass("essential_error"); //스핀값 0 선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Div00.form.Spin00.set_cssclass("essential"); //스핀값 1이상 선택시 성공 (초기css적용)
        	}

        	/*체크박스조건 validation샘플 */
        	if (this.Div00.form.CheckBox00.value != true)
        	{
        		this.Div00.form.CheckBox00.set_cssclass("essential_error"); //체크박스 미선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Div00.form.CheckBox00.set_cssclass("essential"); //체크박스 선택시 성공 (초기css적용)
        	}

        	/*라디오버튼조건 validation샘플 */
        	if (this.Div00.form.Radio00.value != true)
        	{
        		this.Div00.form.Radio00.set_cssclass("essential_error"); //라디오버튼 미선택 혹은 FALSE선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Div00.form.Radio00.set_cssclass("essential"); //라디오버튼 선택시 성공 (초기css적용)
        	}

        	/*에디트텍스트조건 validation샘플 */
        	if ((this.Div00.form.Edit02.value == null) || (this.Div00.form.Edit02.value == ""))
        	{
        		this.Div00.form.Edit02.set_cssclass("essential_error"); //에디트박스에 텍스트 미입력시 실패(경고css적용)
        	}
        	else
        	{
        		this.Div00.form.Edit02.set_cssclass("essential"); //에디트박스에 텍스트 입력시 성공 (초기css적용)
        	}
        };


        /*******************************************************샘플 로직 위와 상동 *******************************************************/


        /* 등록버튼클릭 */
        this.Button73_onclick = function (obj, e)
        {
        	/*콤보선택 validation 샘플*/
        	if (this.Combo01.value != 1)
        	{
        		this.Combo01.set_cssclass("essential_error"); //콤보값 미선택 혹은 FALSE선택시 실패 (경고css적용)
        	}
        	else
        	{
        		this.Combo01.set_cssclass("essential"); //콤보값 1인 TRUE선택시 성공 (초기css적용)
        	}

        	/*캘린더선택 validation샘플*/
        	var today = this.gfn_today();
        	if (this.Calendar00.value != today)
        	{
        		this.Calendar00.set_cssclass("essential_error"); //오늘이 아닌날짜 선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Calendar00.set_cssclass("essential"); //오늘날짜 선택시 성공 (초기css적용)
        	}

        	/*스핀조건 validation샘플 */
        	if (this.Spin00.value == 0)
        	{
        		this.Spin00.set_cssclass("essential_error"); //스핀값 0 선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Spin00.set_cssclass("essential"); //스핀값 1이상 선택시 성공 (초기css적용)
        	}

        	/*체크박스조건 validation샘플 */
        	if (this.CheckBox00.value != true)
        	{
        		this.CheckBox00.set_cssclass("essential_error"); //체크박스 미선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.CheckBox00.set_cssclass("essential"); //체크박스 선택시 성공 (초기css적용)
        	}

        	/*라디오버튼조건 validation샘플 */
        	if (this.Radio00.value != true)
        	{
        		this.Radio00.set_cssclass("essential_error"); //라디오버튼 미선택 혹은 FALSE선택시 실패(경고css적용)
        	}
        	else
        	{
        		this.Radio00.set_cssclass("essential"); //라디오버튼 선택시 성공 (초기css적용)
        	}

        	/*에디트텍스트조건 validation샘플 */
        	if ((this.Edit02.value == null) || (this.Div00.form.Edit02.value == ""))
        	{
        		this.Edit02.set_cssclass("essential_error"); //에디트박스에 텍스트 미입력시 실패(경고css적용)
        	}
        	else
        	{
        		this.Edit02.set_cssclass("essential"); //에디트박스에 텍스트 입력시 성공 (초기css적용)
        	}
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Button52.addEventHandler("onclick",this.Div00_Button52_onclick,this);
            this.Div00.form.Edit02.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Button73.addEventHandler("onclick",this.Button73_onclick,this);
            this.Edit02.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div02.form.Static00.addEventHandler("onclick",this.Div02_Static00_onclick,this);
        };
        this.loadIncludeScript("Sample08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
