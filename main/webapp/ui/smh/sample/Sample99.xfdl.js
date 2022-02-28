(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_excel");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(970,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"col1\">col1</Col><Col id=\"col2\">col2</Col><Col id=\"col3\">col3</Col><Col id=\"col4\">col4</Col><Col id=\"col5\">col5</Col></Row><Row><Col id=\"col1\">col11</Col><Col id=\"col2\">col22</Col><Col id=\"col3\">col33</Col><Col id=\"col4\">col44</Col><Col id=\"col5\">col55</Col></Row><Row><Col id=\"col1\">col111</Col><Col id=\"col2\">col222</Col><Col id=\"col3\">col333</Col><Col id=\"col4\">col444</Col><Col id=\"col5\">col555</Col></Row><Row><Col id=\"col1\">col1-1</Col><Col id=\"col2\">col2-1</Col><Col id=\"col3\">col3-1</Col><Col id=\"col4\">col4-1</Col><Col id=\"col5\">col5-1</Col></Row><Row><Col id=\"col1\">col1-2</Col><Col id=\"col2\">col1-2</Col><Col id=\"col3\">col1-3</Col><Col id=\"col4\">col1-4</Col><Col id=\"col5\">col1-5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">222</Col><Col id=\"Column2\">333</Col><Col id=\"Column3\">444</Col><Col id=\"Column4\">555</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_combo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">111</Col><Col id=\"nm\">aaa</Col></Row><Row><Col id=\"cd\">222</Col><Col id=\"nm\">가나다</Col></Row><Row><Col id=\"cd\">333</Col><Col id=\"nm\">마바사</Col></Row><Row><Col id=\"cd\">444</Col><Col id=\"nm\">자차카</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"col1\" type=\"STRING\" size=\"256\"/><Column id=\"col2\" type=\"STRING\" size=\"256\"/><Column id=\"col3\" type=\"STRING\" size=\"256\"/><Column id=\"col4\" type=\"STRING\" size=\"256\"/><Column id=\"col5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"BUILD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUILD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popParam", this);
            obj._setContents("<ColumnInfo><Column id=\"HOUSE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"HOUSE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_build", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUILD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BUILD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOUSE_GB\" type=\"STRING\" size=\"256\"/><Column id=\"DONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_GB\" type=\"STRING\" size=\"256\"/><Column id=\"CENTRAL_HEATING_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SIDO\" type=\"STRING\" size=\"256\"/><Column id=\"GUGUN\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ADDR_EUMMYEON\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ADDR_BUNJI\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_ADDR_JIBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_ROAD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_ROAD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_BASEMENT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_BUILD_BONBEON\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_BUILD_BUBEON\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_BUILD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_BUILD_DTL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_ADDR_LAW_DONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_import","535","467","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("excel import");
            this.addChild(obj.name, obj);

            obj = new Button("btn_export","667","467","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("excel export");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","9","781","162",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"col1\"/><Cell col=\"2\" text=\"col2\"/><Cell col=\"3\" text=\"col3\"/><Cell col=\"4\" text=\"col4\"/><Cell col=\"5\" text=\"col5\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:chk\"/><Cell col=\"1\" text=\"bind:col1\"/><Cell col=\"2\" text=\"bind:col2\"/><Cell col=\"3\" text=\"bind:col3\"/><Cell col=\"4\" text=\"bind:col4\"/><Cell col=\"5\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","11","213","781","148",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/><Cell col=\"3\" text=\"col4\"/><Cell col=\"4\" text=\"col5\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"normal\" text=\"bind:col1\" editautoselect=\"true\" combodataset=\"ds_combo\" combocodecol=\"cd\" combodatacol=\"nm\"/><Cell col=\"1\" text=\"bind:col2\"/><Cell col=\"2\" text=\"bind:col3\"/><Cell col=\"3\" text=\"bind:col4\"/><Cell col=\"4\" text=\"bind:col5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","331","468","78","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_srch_build","179","398","15","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_buildNo","97","398","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_clipmode("excludespace");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_buildNm","200","398","231","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","20","398","65","21",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("건물번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","430","65","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("자원번호");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mae_houseNo","97","430","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_clipmode("excludespace");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_houseNm","200","430","231","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_autoselect("true");
            obj.set_cssclass("readonly");
            this.addChild(obj.name, obj);

            obj = new Grid("grd","58.06%","363",null,"99","14.88%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_grd");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"HOUSE_NO\"/><Cell col=\"1\" text=\"HOUSE_NM\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:HOUSE_NO\"/><Cell col=\"1\" text=\"bind:HOUSE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Plugin("plg_scan","91.64%","378",null,"22","1.48%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_classid("{4A1E02DB-F75B-4209-8777-E63BA2E4F3CE}");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","92%","419",null,"23","1.6%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","4.92%","471",null,"20","82.41%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("배치실행1");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","19.31%","471",null,"20","68.02%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("배치실행2");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","810","20","109","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("녹취듣기테스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","811","50","109","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("부분녹취듣기테스트");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","4.43%","368",null,"20","86.22%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("메인화면 호출");
            this.addChild(obj.name, obj);

            obj = new Button("btn_post","834","535","109","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("우편번호검색");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","11","565","929","150",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_build");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"BUILD_NO\"/><Cell col=\"1\" text=\"BUILD_NM\"/><Cell col=\"2\" text=\"HOUSE_GB\"/><Cell col=\"3\" text=\"DONG_CD\"/><Cell col=\"4\" text=\"CENTER_CD\"/><Cell col=\"5\" text=\"INSP_GB\"/><Cell col=\"6\" text=\"CENTRAL_HEATING_YN\"/><Cell col=\"7\" text=\"AREA_CLASS\"/><Cell col=\"8\" text=\"OLD_ADDR\"/><Cell col=\"9\" text=\"NEW_ADDR\"/><Cell col=\"10\" text=\"POST_NO\"/><Cell col=\"11\" text=\"SIDO\"/><Cell col=\"12\" text=\"GUGUN\"/><Cell col=\"13\" text=\"OLD_ADDR_EUMMYEON\"/><Cell col=\"14\" text=\"OLD_ADDR_BUNJI\"/><Cell col=\"15\" text=\"OLD_ADDR_JIBUN\"/><Cell col=\"16\" text=\"NEW_ADDR_ROAD_NO\"/><Cell col=\"17\" text=\"NEW_ADDR_ROAD_NM\"/><Cell col=\"18\" text=\"NEW_ADDR_BASEMENT_YN\"/><Cell col=\"19\" text=\"NEW_ADDR_BUILD_BONBEON\"/><Cell col=\"20\" text=\"NEW_ADDR_BUILD_BUBEON\"/><Cell col=\"21\" text=\"NEW_ADDR_BUILD_NM\"/><Cell col=\"22\" text=\"NEW_ADDR_BUILD_DTL_NM\"/><Cell col=\"23\" text=\"NEW_ADDR_LAW_DONG_NM\"/><Cell col=\"24\" text=\"REMARKS\"/></Band><Band id=\"body\"><Cell text=\"bind:BUILD_NO\"/><Cell col=\"1\" text=\"bind:BUILD_NM\"/><Cell col=\"2\" text=\"bind:HOUSE_GB\"/><Cell col=\"3\" text=\"bind:DONG_CD\"/><Cell col=\"4\" text=\"bind:CENTER_CD\"/><Cell col=\"5\" text=\"bind:INSP_GB\"/><Cell col=\"6\" text=\"bind:CENTRAL_HEATING_YN\"/><Cell col=\"7\" text=\"bind:AREA_CLASS\"/><Cell col=\"8\" text=\"bind:OLD_ADDR\"/><Cell col=\"9\" text=\"bind:NEW_ADDR\"/><Cell col=\"10\" text=\"bind:POST_NO\"/><Cell col=\"11\" text=\"bind:SIDO\"/><Cell col=\"12\" text=\"bind:GUGUN\"/><Cell col=\"13\" text=\"bind:OLD_ADDR_EUMMYEON\"/><Cell col=\"14\" text=\"bind:OLD_ADDR_BUNJI\"/><Cell col=\"15\" text=\"bind:OLD_ADDR_JIBUN\"/><Cell col=\"16\" text=\"bind:NEW_ADDR_ROAD_NO\"/><Cell col=\"17\" text=\"bind:NEW_ADDR_ROAD_NM\"/><Cell col=\"18\" text=\"bind:NEW_ADDR_BASEMENT_YN\"/><Cell col=\"19\" text=\"bind:NEW_ADDR_BUILD_BONBEON\"/><Cell col=\"20\" text=\"bind:NEW_ADDR_BUILD_BUBEON\"/><Cell col=\"21\" text=\"bind:NEW_ADDR_BUILD_NM\"/><Cell col=\"22\" text=\"bind:NEW_ADDR_BUILD_DTL_NM\"/><Cell col=\"23\" text=\"bind:NEW_ADDR_LAW_DONG_NM\"/><Cell col=\"24\" text=\"bind:REMARKS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",970,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample99.xfdl", function() {
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";



        this.btn_export_onclick = function (obj, e)
        {
        	var grd_name = "";
        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	grd_name = "Grid00";
        	if (this.Dataset00.rowcount > 0)
        	{
        		grd_name = grd_name + ":Grid01";
        	}

        	// 저장될 엑셀명
        	var file_name = "한글";
        	this.gfn_export_excel(grd_name, file_name);
        };

        this.btn_import_onclick = function (obj, e)
        {
        	this.ds_list.clearData();
        	// 그리드 바인딩 되는 컬럼과 엑셀의 컬럼명이 일치해야 임포트 가능
        	this.gfn_import_excel("50", "ds_list", "fn_excel_success", "fn_excel_fail", "A1", "E1");
        };
        this.fn_excel_success = function ()
        {
        	alert("SUCCESS");
        	trace(this.ds_list.saveXML());
        	this.Grid01.createFormat();
        };
        this.fn_excel_fail = function ()
        {
        	alert("FAIL");
        };
        this.excel_sample_onload = function (obj, e)
        {
        	// var param1 = Eco.XPComp.getUserProperty(this, "param1");
        	// var param2 = Eco.XPComp.getUserProperty(this, "param2");
        	// if(!Eco.isEmpty(param1))
        	// {
        	// trace("param1===>"+param1);
        	// trace("param2===>"+param2);
        	// }

        	// 데이터셋 로우값 설정
        	this.Dataset01.set_rowposition(2);
        };

        this.Grid00_oncellclick = function (obj, e)
        {
        	trace("cell=>" + e.cell);
        };

        this.Grid00_onheadclick = function (obj, e)
        {
        	if (e.cell == 0)
        	{
        		this.gfn_gridAllCheck(this.Grid00, e.cell);
        	}
        	else
        	{
        		this.gfn_gridSort(obj, e);
        	}
        };

        this.Button00_onclick = function (obj, e)
        {
        	var v_left = nexacro.getApplication().mainframe.getOffsetLeft();
        	var v_top = system.clientToScreenY(this, this.GV_FRAME_LEFT, 0);
        	alert(v_top);
        };

        this.Grid01_oncellclick = function (obj, e)
        {
        	// 콤보컬럼:2,5 이고 선택된 컬럼이 새로 선택된 컬럼이 아니거나 그리드 로우값이 틀릴경우
        	if ((e.cell == 0) && e.cell != this.selCol || this.ds_combo.row != e.row)
        	{
        		var val = obj.getCellText(0);
        		// this.ds_combo.filter("pos(nm,'"+val+"')>-1");
        		this.ds_list.set_rowposition(e.row);
        		this.selCol = e.cell;
        		obj.setCellPos(e.cell);
        		obj.dropdownCombo();
        	}
        };

        this.mae_buildNo_onkeydown = function (obj, e)
        {
        	if (e.keycode != 13)
        	{
        		return;
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "BUILD_NO", this.mae_buildNo.value);

        	var sSvcID = "selectP00001";
        	var popupCd = "P00001";
        	var sParamDs = "ds_search";

        	// this.nfn_getDsCommomPoup(sSvcID, popupCd, sParamDs, sRtnDs);

        	var sComp = "this";
        	var sRtnCols = "BUILD_NO|BUILD_NM";
        	var sRtnComponents = "mae_buildNo|edt_buildNm";
        	this.nfn_setCompsCommomPoup(sSvcID, popupCd, sParamDs, sComp, sRtnCols, sRtnComponents);
        };

        /**************************************************************************
         * 45. CALLBACK 영역
         ***************************************************************************/
        // *callBack 함수
        this.fn_callBack = function (trId, strErrorCode, strErrorMsg)
        {
        	if (strErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}

        	// 조회조건 고객센터
        	if (trId == "selectP00001")
        	{
        		// if(this.ds_result.rowcount==1)
        		// this.edt_buildNm.set_value(this.ds_result.getColumn(0,"BUILD_NM"));

        		// trace(this.ds_result.saveXML());
        	}
        };
        this.mae_houseNo_onkeydown = function (obj, e)
        {
        	if (e.keycode != 13)
        	{
        		return;
        	}
        	this.ds_popParam.clearData();
        	this.ds_popParam.addRow();
        	this.ds_popParam.setColumn(0, "HOUSE_NO", this.mae_houseNo.value);

        	var sSvcID = "selectP00026";
        	var popupCd = "P00026";
        	var sParamDs = "ds_popParam";
        	var sComp = "this";
        	var sRtnCols = "HOUSE_NO|HOUSE_NM";
        	var sRtnComponents = "mae_houseNo|edt_houseNm";
        	this.nfn_setCompsCommomPoup(sSvcID, popupCd, sParamDs, sComp, sRtnCols, sRtnComponents);
        };

        this.Button01_onclick = function (obj, e)
        {
        	alert(0);
        	var txtIp = "127.0.0.1";
        	var txtPort = "27015";
        	var request_msg = "aaaaaa";
        	var request_msg_len = 6;
        	this.Plugin00.KSCATApproval(txtIp, txtPort, request_msg, request_msg_len);

        	// ole_imgscan.object.Image = ls_scanfile										// set scan file name
        	// ole_imgscan.object.StartScan()												//스캔 시작
        	// ole_imgscan.object.CloseScanner()
        	/*
        	 var scanFileNm = "scantest";
        	 this.plg_scan.Image = scanFileNm;
        	 this.plg_scan.StartScan();
        	 this.plg_scan.CloseScanner();
        	 */
        	this.nfn_executeScan();
        };

        this.ds_grd_onvaluechanged = function (obj, e)
        {
        	if (e.columnid != "HOUSE_NO")
        	{
        		return;
        	}
        	if (this.gfn_isNull(e.newvalue))
        	{
        		return;
        	}

        	this.ds_popParam.clearData();
        	this.ds_popParam.addRow();
        	this.ds_popParam.setColumn(0, "HOUSE_NO", e.newvalue);

        	var sSvcID = "selectP00026";
        	var popupCd = "P00026";
        	var sParamDs = "ds_popParam";
        	var sRtnCols = "HOUSE_NM";
        	var sGridCols = "HOUSE_NM";
        	this.nfn_setCompsCommomPoupGrid(this.grd, popupCd, sParamDs, sRtnCols, sGridCols, e.row);
        };


        this.Button02_onclick = function (obj, e)
        {
        	var batWkId = 2;
        	var sKeys = "P_PRGS_LOG";
        	var sVals = "로그로그1";

        	this.nfn_executeBatch(batWkId, sKeys, sVals);
        };

        this.Button03_onclick = function (obj, e)
        {
        	var batWkId = 3;
        	var sKeys = "";
        	var sVals = "";

        	this.nfn_executeBatch(batWkId, sKeys, sVals);
        };

        this.Button04_onclick = function (obj, e)
        {
        	this.nfn_recCall("20180601", "20180601", "201806011719240697", "drmm0002");
        	// this.nfn_recCall("20180517", "20180517", "201805171108110630", "1990175");	//strStartTime, strEndTime, strRecordKey, strUserCode
        	// 0697, 201806011641390697, 201806011641390697G
        	// '0697', '201806011719240697', '201806011719240697G'
        	// '0697', '201806011654270697', '201806011654270697G'
        };

        this.Button05_onclick = function (obj, e)
        {
        	// this.nfn_partRecCall("20180517", "20180517", "201805171108110630", "1990175");	//strStartTime, strEndTime, strRecordKey, strUserCode
        	this.nfn_partRecCall("20180601", "20180601", "201806011641390697", "drmm0002");
        };

        this.Button06_onclick = function (obj, e)
        {
        	var cRow = 1;
        	var businessType = "a";
        	var programCd = "b";
        	var programNm = "c";

        	var pPopupId = "popupCMSL02100M";
        	var pCallUrl = "common::com_formPopup.xfdl";
        	var pArg = {
        		arg_businessType : businessType,
        		arg_programCd : programCd,
        		arg_programNm : programNm,
        		arg_formTitle : "사용자관리",
        		arg_formUrl : "system::CMSY01100M.xfdl",
        		arg_width : "600",
        		arg_height : "600"
        	};
        	var sOption = "";
        	this.gfn_openPopup(pPopupId, pCallUrl, pArg, sOption);
        };

        this.btn_post_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_DAUM_ADDR";
        	var arg = {};
        	this.gfn_openPopup(popupId,"sample::searchPost.xfdl",arg,"");
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_DAUM_ADDR")
        	{
        		var nRow = this.ds_build.rowposition; //selected row
        		this.ds_build.setColumn(nRow, "POST_NO", rtn[0]);					//우편번호
        		this.ds_build.setColumn(nRow, "SIDO", rtn[1]);						//시도
        		this.ds_build.setColumn(nRow, "GUGUN", rtn[2]);						//구군
        		this.ds_build.setColumn(nRow, "OLD_ADDR_EUMMYEON", rtn[3]);			//(구주소)읍면종
        		this.ds_build.setColumn(nRow, "OLD_ADDR_BUNJI", rtn[4]);			//(구주소)번지
        		this.ds_build.setColumn(nRow, "OLD_ADDR_JIBUN", rtn[5]);			//(구주소)지번
        		this.ds_build.setColumn(nRow, "NEW_ADDR_ROAD_NO", rtn[6]);			//(신주소)도로번호
        		this.ds_build.setColumn(nRow, "NEW_ADDR_ROAD_NM", rtn[7]);			//(신주소)도로명
        		this.ds_build.setColumn(nRow, "NEW_ADDR_BUILD_BONBEON", rtn[8]);	//(신주소)본번
        		this.ds_build.setColumn(nRow, "NEW_ADDR_BUILD_BUBEON", rtn[9]);		//(신주소)부번
        		this.ds_build.setColumn(nRow, "NEW_ADDR_BUILD_NM", rtn[10]);		//건물명
        	}
        }

        //데이타셋>>값 변경시
        this.ds_build_oncolumnchanged = function(obj, e)
        {
        	if(e.columnid.indexOf("NEW_ADDR_") > -1)
        	{
        		//목록에 주소(도로명) 조합
        		var newAddr = obj.getColumn(e.row, "SIDO") + obj.getColumn(e.row, "GUGUN");
        		var roadNm  = obj.getColumn(e.row, "NEW_ADDR_ROAD_NM");
        		var bonbeon = obj.getColumn(e.row, "NEW_ADDR_BUILD_BONBEON");
        		var bubeon  = obj.getColumn(e.row, "NEW_ADDR_BUILD_BUBEON");

        		newAddr += this.nfn_isNull(roadNm) ? "" : " " + roadNm;
        		newAddr += this.nfn_isNull(bonbeon)? "" : " " + bonbeon;
        		newAddr += this.nfn_isNull(bubeon) ? "" : "-" + bubeon;

        		obj.setColumn(e.row, "NEW_ADDR", newAddr);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_import.addEventHandler("onclick",this.btn_import_onclick,this);
            this.btn_export.addEventHandler("onclick",this.btn_export_onclick,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Grid00.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.Grid01.addEventHandler("oncellclick",this.Grid01_oncellclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_srch_build.addEventHandler("onclick",this.btn_srch_build_onclick,this);
            this.mae_buildNo.addEventHandler("onkeydown",this.mae_buildNo_onkeydown,this);
            this.mae_houseNo.addEventHandler("onkeydown",this.mae_houseNo_onkeydown,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
            this.Button06.addEventHandler("onclick",this.Button06_onclick,this);
            this.btn_post.addEventHandler("onclick",this.btn_post_onclick,this);
            this.ds_grd.addEventHandler("onvaluechanged",this.ds_grd_onvaluechanged,this);
            this.ds_build.addEventHandler("oncolumnchanged",this.ds_build_oncolumnchanged,this);
        };
        this.loadIncludeScript("Sample99.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
