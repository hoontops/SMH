(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test035");
            this.set_titletext("엑셀 import/export");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"DATE\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">1</Col><Col id=\"nm\">1111</Col></Row><Row><Col id=\"cd\">2</Col><Col id=\"nm\">2222</Col></Row><Row><Col id=\"cd\">3</Col><Col id=\"nm\">3333</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/><Column id=\"col6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">col1</Col><Col id=\"col2\">col2</Col><Col id=\"col3\">col3</Col><Col id=\"col4\">col4</Col><Col id=\"col5\">col5</Col><Col id=\"col6\">a</Col></Row><Row><Col id=\"col1\">col11</Col><Col id=\"col2\">가나다라</Col><Col id=\"col3\">col33</Col><Col id=\"col4\">col44</Col><Col id=\"col5\">col55</Col><Col id=\"col6\">2</Col></Row><Row><Col id=\"col1\">col111</Col><Col id=\"col2\">col222</Col><Col id=\"col3\">col333</Col><Col id=\"col4\">col444</Col><Col id=\"col5\">col555</Col><Col id=\"col6\">j</Col></Row><Row><Col id=\"col1\">col1-1</Col><Col id=\"col2\">col2-1</Col><Col id=\"col3\">바바사</Col><Col id=\"col4\">col4-1</Col><Col id=\"col5\">col5-1</Col><Col id=\"col6\">q</Col></Row><Row><Col id=\"col1\">col1-2</Col><Col id=\"col2\">col1-2</Col><Col id=\"col3\">col1-3</Col><Col id=\"col4\">col1-4</Col><Col id=\"col5\">col1-5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject00", this);
            obj.getSetter("importtype").set("0");
            obj.getSetter("onsuccess").set("ExcelImportObject00_onsuccess");
            obj.getSetter("onerror").set("ExcelImportObject00_onerror");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_import","75.87%","416",null,"24","12.61%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("excel import");
            obj.set_cssclass("btn_WF_default");
            this.addChild(obj.name, obj);

            obj = new Button("btn_export","74.78%","228",null,"24","6.52%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("excel export CSV");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0.94%","63",null,"196","56.15%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_extendsizetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/><Cell col=\"3\" text=\"col5\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"normal\" text=\"bind:col1\" combodataset=\"Dataset02\" combocodecol=\"cd\" combodatacol=\"nm\" background=\"bisque\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:col2\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:col3\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0.94%","344",null,null,"25.73%","18",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"C0\"/><Cell col=\"1\" text=\"C1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"6\"/><Cell col=\"7\" text=\"7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" displaytype=\"normal\" text=\"bind:Column10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0%","4",null,"21","58.12%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀 export");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","44.98%","63",null,"196","33.71%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("Dataset01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/><Cell col=\"3\" text=\"col4\"/><Cell col=\"4\" text=\"col5\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"normal\" text=\"bind:col1\" combodataset=\"Dataset02\" combocodecol=\"cd\" combodatacol=\"nm\" background=\"bisque\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:col2\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:col3\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:col4\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1.22%","40",null,"19","93.62%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Grid00");
            obj.set_color("red");
            obj.set_font("bold 9pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","45.07%","41",null,"19","49.77%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Grid03");
            obj.set_color("red");
            obj.set_font("bold 9pt \"arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_grid","75.11%","56",null,"20","4.24%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("Grid00");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","68.04%","56",null,"20","25.87%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Grid명");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","68.08%","112",null,"20","25.92%",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("엑셀파일명");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_filename","75.12%","112",null,"20","4.23%",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("exporttest");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","75.12%","142",null,"26","2.91%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("예제) this.gfn_export_excel(Grid명, 파일명);\t");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","69.46%","166",null,"50","8.04%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("* Grid 및 Sheet가 하나 이상인 경우 :로 구분");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","75.4%","344",null,"26","2.63%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("예제) this.gfn_import_excel(가져올 수 카운트, 넣을 데이터셋); \t");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","75.76%","366",null,"50","2.28%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("* 엑셀파일의 컬럼명과 데이터셋의 컬럼명을 동일해야함");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0%","316",null,"21","58.12%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("엑셀 import");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","75.87%","442",null,"46","7.39%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("그리드  Head 변경\r\n샘플");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","75.87%","490",null,"29","7.39%",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("좌측의 메뉴호출하기");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_sheetname","75.11%","84",null,"20","4.24%",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_value("Sheet00");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","68.04%","84",null,"20","25.87%",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Sheet명");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","152","272","164","83",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","12","7","150","68",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/><Cell col=\"9\" text=\"Column9\"/><Cell col=\"10\" text=\"Column10\"/><Cell col=\"11\" text=\"Column11\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\" text=\"bind:Column9\"/><Cell col=\"10\" text=\"bind:Column10\"/><Cell col=\"11\" text=\"bind:Column11\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_export00","74.57%","262",null,"24","6.41%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("excel export EXCEL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_export00_00","74.67%","296",null,"24","6.09%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("excel export EXCEL 확장");
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
        this.registerScript("Sample03.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Sample03
         * 파일명 		: Sample03.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.02.13
         *
         * 설  명		: 엑셀 Import / Export 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.02.13	UI공통   	디자인표준 적용
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        //include "lib::comLib.xjs"

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        /**
         * 3.1 (필수) 화면 로딩후에 실행되는 함수
         */
        // onlad함수(공통코드관리 화면이 호출될때 바로 실행되는 함수)
        this.form_onload = function (obj, e)
        {
        	// 화면 init 처리함수 호출
        	this.form_init();
        };


        /**
         * 3.2 (필수) 사용자 정의 폼 로드 함수
         */
        // 사용자 정의 폼 로드 함수(form_init 고정)
        this.form_init = function (obj)
        {
        	// 초기 init 시 필요한 로직을 수행합니다.
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*-------------------------------------------------------------------------
         * 설명      : 엑셀 버튼 클릭 시
         *------------------------------------------------------------------------*/
        this.btn_export_onclick = function (obj, e)
        {
        	var sName = "";
        	var vName = "";

        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	sName = this.ed_grid.value;

        	// 익스포트될 시트명, 여러개일 경우 ':'로 구분
        	vName = this.ed_sheetname.value;

        	// 저장될 엑셀명
        	var file_name = this.ed_filename.value;

        	this.gfn_export_excel(sName, vName, file_name, "CSV");
        };
        this.btn_export_EXCELonclick = function (obj, e)
        {
        	var vName = this.ed_sheetname.value;
        	var file_name = this.ed_filename.value;

        	this.gfn_export_excelEx2(this.Grid00  , vName, file_name, "EXCEL");
        };


        this.btn_export_EXCEL2onclick = function(obj,e)
        {
        	var vName = this.ed_sheetname.value;
        	var file_name = this.ed_filename.value;

        	this.gfn_export_excelEx2(this.Grid00  , vName, file_name, "EXCEL", '제목1:col4,제목2:col6');
        };



        this.btn_import_onclick = function (obj, e)
        {
        	this.ds_list.clearData();
        	/**
        	 * @class  엑셀 import 처리
        	 * @param  {Object} sDsName - dataset name
        	 * @param  {String} sSuccFunc - 성공 callback
        	 * @param  {String} sErrFunc -  실패 callback
        	 * @param  {Number} sHead - 엑셀 head
        	 * @param  {Number} sBody - 엑셀 body
        	 * @param  {Number} strSheetNm - 엑셀 sheet name
        	 * @param  {Number} fileType -  EXCEL (defalut), CSV, HANCELL
        	 */
        	 this.gfn_import_excel("ds_list", "fn_excel_success", "fn_excel_fail", "A1", "A2");
        };

        this.fn_excel_fail = function ()
        {
        	alert("error occurred!!");
        };

        this.fn_excel_success = function ()
        {
        	trace("SUCCESS");
        	trace(this.ds_list.saveXML());
        };


        this.Button00_onclick = function (obj, e)
        {
        	var nCount = this.Grid01.getCellCount("Head");

        	for (var i = 0; i < nCount; i++)
        	{
        		alert("changetext" + i);
        		this.Grid01.setCellProperty("Head", i, "text", "changetext" + i);
        	}
        };

        this.Button01_onclick = function (obj, e)
        {
        	alert("'Transaction 처리(Sample05)' 호출합니다(MENU_ID : s8002). 프로젝트 실행 후 확인가능!");

        	this.gfn_showWork("s8002"); //공통코드관리 호출
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Test035_onload,this);
            this.btn_import.addEventHandler("onclick",this.btn_import_onclick,this);
            this.btn_export.addEventHandler("onclick",this.btn_export_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_export00.addEventHandler("onclick",this.btn_export_EXCELonclick,this);
            this.btn_export00_00.addEventHandler("onclick",this.btn_export_EXCEL2onclick,this);
        };
        this.loadIncludeScript("Sample03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
