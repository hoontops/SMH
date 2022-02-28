(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSL01520P");
            this.set_titletext("다양한 SQL 컬럼속성 설정");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(530,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_sql_col", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SQL_ID\" type=\"INT\" size=\"10\"/><Column id=\"CLUM_ORDR\" type=\"INT\" size=\"10\"/><Column id=\"INDICT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CLUM_SIZE\" type=\"INT\" size=\"10\"/><Column id=\"CLUM_ATB\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dispYn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CM_CD\">Y</Col><Col id=\"CD_NM\">Y</Col></Row><Row><Col id=\"CM_CD\">N</Col><Col id=\"CD_NM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_moneyYn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CM_CD\">Y</Col><Col id=\"CD_NM\">Y</Col></Row><Row><Col id=\"CM_CD\">N</Col><Col id=\"CD_NM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_size", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VALUE\" type=\"INT\" size=\"10\"/><Column id=\"NAME\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"VALUE\">40</Col><Col id=\"NAME\">40</Col></Row><Row><Col id=\"VALUE\">50</Col><Col id=\"NAME\">50</Col></Row><Row><Col id=\"VALUE\">60</Col><Col id=\"NAME\">60</Col></Row><Row><Col id=\"VALUE\">70</Col><Col id=\"NAME\">70</Col></Row><Row><Col id=\"VALUE\">80</Col><Col id=\"NAME\">80</Col></Row><Row><Col id=\"VALUE\">90</Col><Col id=\"NAME\">90</Col></Row><Row><Col id=\"VALUE\">100</Col><Col id=\"NAME\">100</Col></Row><Row><Col id=\"VALUE\">110</Col><Col id=\"NAME\">110</Col></Row><Row><Col id=\"VALUE\">120</Col><Col id=\"NAME\">120</Col></Row><Row><Col id=\"VALUE\">130</Col><Col id=\"NAME\">130</Col></Row><Row><Col id=\"VALUE\">140</Col><Col id=\"NAME\">140</Col></Row><Row><Col id=\"VALUE\">150</Col><Col id=\"NAME\">150</Col></Row><Row><Col id=\"VALUE\">160</Col><Col id=\"NAME\">160</Col></Row><Row><Col id=\"VALUE\">170</Col><Col id=\"NAME\">170</Col></Row><Row><Col id=\"VALUE\">180</Col><Col id=\"NAME\">180</Col></Row><Row><Col id=\"VALUE\">190</Col><Col id=\"NAME\">190</Col></Row><Row><Col id=\"VALUE\">200</Col><Col id=\"NAME\">200</Col></Row><Row><Col id=\"VALUE\">220</Col><Col id=\"NAME\">220</Col></Row><Row><Col id=\"VALUE\">240</Col><Col id=\"NAME\">240</Col></Row><Row><Col id=\"VALUE\">260</Col><Col id=\"NAME\">260</Col></Row><Row><Col id=\"VALUE\">280</Col><Col id=\"NAME\">280</Col></Row><Row><Col id=\"VALUE\">300</Col><Col id=\"NAME\">300</Col></Row><Row><Col id=\"VALUE\">400</Col><Col id=\"NAME\">400</Col></Row><Row><Col id=\"VALUE\">500</Col><Col id=\"NAME\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ordr", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"VALUE\" type=\"INT\" size=\"10\"/><Column id=\"NAME\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">1</Col><Col id=\"NAME\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"NAME\">2</Col></Row><Row><Col id=\"VALUE\">3</Col><Col id=\"NAME\">3</Col></Row><Row><Col id=\"VALUE\">4</Col><Col id=\"NAME\">4</Col></Row><Row><Col id=\"VALUE\">5</Col><Col id=\"NAME\">5</Col></Row><Row><Col id=\"VALUE\">6</Col><Col id=\"NAME\">6</Col></Row><Row><Col id=\"VALUE\">7</Col><Col id=\"NAME\">7</Col></Row><Row><Col id=\"VALUE\">8</Col><Col id=\"NAME\">8</Col></Row><Row><Col id=\"VALUE\">9</Col><Col id=\"NAME\">9</Col></Row><Row><Col id=\"VALUE\">10</Col><Col id=\"NAME\">10</Col></Row><Row><Col id=\"VALUE\">11</Col><Col id=\"NAME\">11</Col></Row><Row><Col id=\"VALUE\">12</Col><Col id=\"NAME\">12</Col></Row><Row><Col id=\"VALUE\">13</Col><Col id=\"NAME\">13</Col></Row><Row><Col id=\"VALUE\">14</Col><Col id=\"NAME\">14</Col></Row><Row><Col id=\"VALUE\">15</Col><Col id=\"NAME\">15</Col></Row><Row><Col id=\"VALUE\">16</Col><Col id=\"NAME\">16</Col></Row><Row><Col id=\"VALUE\">17</Col><Col id=\"NAME\">17</Col></Row><Row><Col id=\"VALUE\">18</Col><Col id=\"NAME\">18</Col></Row><Row><Col id=\"VALUE\">19</Col><Col id=\"NAME\">19</Col></Row><Row><Col id=\"VALUE\">20</Col><Col id=\"NAME\">20</Col></Row><Row><Col id=\"VALUE\">21</Col><Col id=\"NAME\">21</Col></Row><Row><Col id=\"VALUE\">22</Col><Col id=\"NAME\">22</Col></Row><Row><Col id=\"VALUE\">23</Col><Col id=\"NAME\">23</Col></Row><Row><Col id=\"VALUE\">24</Col><Col id=\"NAME\">24</Col></Row><Row><Col id=\"VALUE\">25</Col><Col id=\"NAME\">25</Col></Row><Row><Col id=\"VALUE\">26</Col><Col id=\"NAME\">26</Col></Row><Row><Col id=\"VALUE\">27</Col><Col id=\"NAME\">27</Col></Row><Row><Col id=\"VALUE\">28</Col><Col id=\"NAME\">28</Col></Row><Row><Col id=\"VALUE\">29</Col><Col id=\"NAME\">29</Col></Row><Row><Col id=\"VALUE\">30</Col><Col id=\"NAME\">30</Col></Row><Row><Col id=\"VALUE\">31</Col><Col id=\"NAME\">31</Col></Row><Row><Col id=\"VALUE\">32</Col><Col id=\"NAME\">32</Col></Row><Row><Col id=\"VALUE\">33</Col><Col id=\"NAME\">33</Col></Row><Row><Col id=\"VALUE\">34</Col><Col id=\"NAME\">34</Col></Row><Row><Col id=\"VALUE\">35</Col><Col id=\"NAME\">35</Col></Row><Row><Col id=\"VALUE\">36</Col><Col id=\"NAME\">36</Col></Row><Row><Col id=\"VALUE\">37</Col><Col id=\"NAME\">37</Col></Row><Row><Col id=\"VALUE\">38</Col><Col id=\"NAME\">38</Col></Row><Row><Col id=\"VALUE\">39</Col><Col id=\"NAME\">39</Col></Row><Row><Col id=\"VALUE\">40</Col><Col id=\"NAME\">40</Col></Row><Row><Col id=\"VALUE\">41</Col><Col id=\"NAME\">41</Col></Row><Row><Col id=\"VALUE\">42</Col><Col id=\"NAME\">42</Col></Row><Row><Col id=\"VALUE\">43</Col><Col id=\"NAME\">43</Col></Row><Row><Col id=\"VALUE\">44</Col><Col id=\"NAME\">44</Col></Row><Row><Col id=\"VALUE\">45</Col><Col id=\"NAME\">45</Col></Row><Row><Col id=\"VALUE\">46</Col><Col id=\"NAME\">46</Col></Row><Row><Col id=\"VALUE\">47</Col><Col id=\"NAME\">47</Col></Row><Row><Col id=\"VALUE\">48</Col><Col id=\"NAME\">48</Col></Row><Row><Col id=\"VALUE\">49</Col><Col id=\"NAME\">49</Col></Row><Row><Col id=\"VALUE\">50</Col><Col id=\"NAME\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_col_list","15","148","500","401",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_sql_col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"98\"/><Column size=\"104\"/><Column size=\"195\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"컬럼순서\"/><Cell col=\"1\" text=\"화면표시 제외\"/><Cell col=\"2\" text=\"컬럼 사이즈(px)\"/><Cell col=\"3\" text=\"금액속성 제외(콤마 미사용)\"/></Band><Band id=\"body\"><Cell displaytype=\"combo\" edittype=\"combo\" editfilter=\"number\" text=\"bind:CLUM_ORDR\" editlengthunit=\"utf8\" combodataset=\"ds_ordr\" combocodecol=\"VALUE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:INDICT_YN\" combodataset=\"ds_dispYn\" combocodecol=\"CM_CD\" combodatacol=\"CD_NM\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CLUM_SIZE\" combodataset=\"ds_size\" combocodecol=\"VALUE\" combodatacol=\"NAME\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:CLUM_ATB\" combodataset=\"ds_moneyYn\" combocodecol=\"CM_CD\" combodatacol=\"CD_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","15","3","508","15",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","15","33","508","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","0","15","580",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","516","0","15","580",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","14","18","284","16",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("다양한조회(SQL) 컬럼속성 설정");
            obj.set_cssclass("sta_WF_popTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","15","568","508","12",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","16","144","507","5",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","507","0","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm","435","550","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic");
            obj.set_tooltiptext("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","477","550","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic");
            obj.set_tooltiptext("취소");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hlpMsg",null,"46","498","21","18",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("1. 미설정시 default값(숫자형일때 콤마표시, 합계적용, 우측정렬)으로 적용됩니다.");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rowAdd",null,"122","67","21","84",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            obj.set_tooltiptext("행 추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rowDel",null,"122","67","21","14",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            obj.set_tooltiptext("행 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","18","127","133","15",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("컬럼별 속성");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hlpMsg02",null,"63","498","21","18",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("2. default로 적용되는 컬럼(순서)에서 별도로 제외 하고자 할때 설정합니다.");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hlpMsg00",null,"81","498","21","19",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("3. 설정을 마친 후 확인을 클릭하고 호출한 화면에서 저장시에 반영됩니다. (최대 50개)");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hlpMsg01",null,"99","498","21","19",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("4. 컬럼순서는 SELECT 문장안의 첫번째 컬럼을 기준으로 1부터 시작됩니다.");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","117","507","5",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",530,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSL01520P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 대륜E&S 빌링시스템
         * 업무명 		: 다양한SQL 킬럼속성 설정
         * 파일명 		: CMSL01520P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.11.25
         *
         * 설  명		: 다양한SQL 킬럼속성 설정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.11.25	진성하   	최초작성
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        // 2017.11.14 추가 (기본 SQL ID)
        var param_sql_id = this.parent.arg0;
        var fv_MAX_COL_SIZE = 50;
        var fv_value = "";
        var fv_value2 = "";
        var fv_value3 = "";
        var fv_value4 = "";
        // onlad함수(화면이 호출될때 바로 실행되는 함수)
        this.cmd_onload = function (obj, e)
        {
        	this.gfn_formOnLoad(obj);

        	if (param_sql_id == undefined || param_sql_id == 'undefined' || param_sql_id == '0')
        	{
        		param_sql_id = '';
        	}
        	trace("param_sql_id(PK SQL_ID)   = " + param_sql_id);

        	// SQL ID가 넘어왓을 경우 자동조회(수정화면 모드)
        	if (param_sql_id != '')
        	{
        		trace(param_sql_id + ' : 수정화면...');
        		this.selectSqlColmList(); //수정화면에서(수정화면에서도 변경된 부분을 유지하고 싶은데 잘 안되넹..)
        	}
        	else
        	{
        		trace('등록화면...');
        		this.fn_openerSqlColmSet(); //등록화면에서
        	}
        };
        // 부모창의 현재 컬럼속성 DataSet정보를 읽어와서 셋팅한다.
        this.fn_openerSqlColmSet = function ()
        {
        	var objData = this.opener.objects["ds_sql_cols"];
        	// 부모창의 데이타셋에서 read
        	this.ds_sql_col.clearData();

        	var openerRowCnt = objData.getRowCount();
        	this.ds_sql_col.addColumn("SQL_ID", "Int", 10);
        	this.ds_sql_col.addColumn("CLUM_ORDR", "Int", 10);
        	this.ds_sql_col.addColumn("INDICT_YN", "String", 1);
        	this.ds_sql_col.addColumn("CLUM_SIZE", "Int", 10);
        	this.ds_sql_col.addColumn("CLUM_ATB", "String", 100);
        	// var nRow = this.ds_sql_col.addRow();
        	// this.ds_sql_col.appendData(objData, false, true);
        	for (var i = 0; i < openerRowCnt; i++)
        	{
        		var sql_id = objData.getColumn(i, "SQL_ID");
        		var clum_ordr = objData.getColumn(i, "CLUM_ORDR");
        		var indict_yn = objData.getColumn(i, "INDICT_YN");
        		var clum_size = objData.getColumn(i, "CLUM_SIZE");
        		var clum_atb = objData.getColumn(i, "CLUM_ATB");
        		var nRow = this.ds_sql_col.addRow();
        		if (sql_id == undefined || sql_id == 'undefined')
        		{
        			sql_id = '0';
        		}
        		// trace('i = ' + i + ', nRow = ' + nRow + ', SQL_ID =  ' + sql_id + ', CLUM_ORDR = ' + clum_ordr);
        		this.ds_sql_col.setColumn(nRow, "SQL_ID", sql_id);
        		this.ds_sql_col.setColumn(nRow, "CLUM_ORDR", clum_ordr);
        		this.ds_sql_col.setColumn(nRow, "INDICT_YN", indict_yn);
        		this.ds_sql_col.setColumn(nRow, "CLUM_SIZE", clum_size);
        		this.ds_sql_col.setColumn(nRow, "CLUM_ATB", clum_atb);
        	}
        	var nRowCnt = this.ds_sql_col.getRowCount();
        	trace("fn_openerSqlColmSet end : nRowCnt = " + nRowCnt + ", OpenerRowCnt = " + openerRowCnt);
        };
        // 다양한SQL 컬럼설정 리스트 조회(X)
        this.selectSqlColmList = function ()
        {
        	var sSvcID = "selectSqlColmList";
        	var sController = "/cmsl01000/selectSqlColmList.do";
        	var sOutDatasets = "ds_sql_col=ds_output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	sArgs += this.gfn_setParam("SQL_ID", param_sql_id);
        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs, "fn_callBack");
        };
        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}
        	// 트랜잭션 오류 발생시

        	if (strSvcId == "selectSqlParamList")
        	{
        		/*
        		 trace("ds_param_combo = " + this.ds_param_combo.getRowCount());
        		 var rowResult = this.ds_param_combo.insertRow(0);
        		 this.ds_param_combo.setColumn(rowResult, "SQL_ID", "");
        		 this.ds_param_combo.setColumn(rowResult, "SQL_NAME", "선택");
        		 */
        	}
        };

        /**************************************************************************
         * 6. 이벤트
         ***************************************************************************/
        /* 행추가 */
        this.btn_add_onclick = function (obj, e)
        {
        	var rowCount = Number(this.ds_sql_col.getRowCount());
        	trace('btn_add_onclick(): rowCount=' + rowCount);
        	if (Number(rowCount) > Number(fv_MAX_COL_SIZE - 1))
        	{
        		// this.gfn_alert('더이상 추가할 수 없습니다. (최대' + MAX_PARAM_CNT + '개)');
        		// 더이상 추가할 수 없습니다. (최대 {0}개)
        		this.gfn_Message("IMCMD0089", fv_MAX_COL_SIZE, "info");
        		return;
        	}
        	if (rowCount == 0)
        	{
        		// [주의-by 진성하 2017.11] ds_sql_col의 userclientout=true로 할경우 행이 0일때 추가가 되긴하나
        		// 확인 버튼을 눌러서 부모창에 dataset을 append할 경우에 문제가 발생하여 반드시,
        		// userclientout=false로 하고 먼저 addColumn을 해주어야 함.(부모창으로 appendData를 하지 않는 경우에는 상관없음)
        		this.ds_sql_col.addColumn("SQL_ID", "Int", 10);
        		this.ds_sql_col.addColumn("CLUM_ORDR", "Int", 10);
        		this.ds_sql_col.addColumn("INDICT_YN", "String", 1);
        		this.ds_sql_col.addColumn("CLUM_SIZE", "Int", 10);
        		this.ds_sql_col.addColumn("CLUM_ATB", "String", 100);

        		var nRow = this.ds_sql_col.addRow();
        		/* 행 추가시 default */
        		this.ds_sql_col.setColumn(0, "CLUM_ORDR", 1);
        		if (param_sql_id != '')
        		{
        			// 수정시..
        			this.ds_sql_col.setColumn(0, "SQL_ID", param_sql_id);
        		}
        		this.ds_sql_col.setColumn(0, "INDICT_YN", "N"); //화면표시 제외
        		this.ds_sql_col.setColumn(0, "CLUM_SIZE", "20"); //컬럼 사이즈(default)
        		this.ds_sql_col.setColumn(0, "CLUM_ATB", "Y"); //금액속성 제외(콤마 미표시)
        		trace('rowCount == 0, nRow= ' + nRow + ' : btn_add_onclick() End.');
        	}
        	else
        	{
        		var nRow = this.ds_sql_col.addRow();
        		trace('0+:btn_add_onclick(): nRow=' + nRow);
        		this.fn_cusGrdIsNullCheck(rowCount, "CLUM_ORDR"); //trace('addRow() rowCount = ' + rowCount);
        		this.ds_sql_col.setColumn(nRow, "CLUM_ORDR", (nRow + 1));
        		if (param_sql_id != '')
        		{
        			// 수정시..
        			this.ds_sql_col.setColumn(nRow, "SQL_ID", param_sql_id);
        		}
        		this.ds_sql_col.setColumn(nRow, "INDICT_YN", "N"); //화면표시 제외
        		this.ds_sql_col.setColumn(nRow, "CLUM_SIZE", "20"); //컬럼 사이즈(default)
        		this.ds_sql_col.setColumn(nRow, "CLUM_ATB", "Y"); //금액속성 제외(콤마 미표시)
        	}
        };
        /* 행삭제 */
        this.btn_delete_onclick = function (obj, e)
        {
        	var grdCodeList,nCurRow;
        	nCurRow = this.ds_sql_col.rowposition; //삭제 버튼을 클릭한 그리드의 위치 정보
        	trace('deleteRow() nCurRow = ' + nCurRow);
        	if (Number(nCurRow) < 0)
        	{
        		this.gfn_Message("IMCMM0189", "삭제할 행을", "info"); //{삭제할 행을} 선택하세요.
        		return;
        	}
        	this.ds_sql_col.deleteRow(nCurRow); //해당 위치정보에 ROW 삭제
        };
        // 선택(확인) 버튼 클릭시
        this.btn_confirm_onclick = function (obj, e)
        {
        	// Unique + Validation Check...
        	var cnt = this.ds_sql_col.getRowCount();
        	trace('btn_confirm_onclick : ' + cnt);

        	if (cnt == 0)
        	{
        		// 설정된 {0}(이)가 없습니다.
        		this.gfn_Message("IMCMM0244", "SQL컬럼 속성", "info");
        		// return;
        		// 고의적으로 모두 없앨수도 있으므로 메시지만 띄워주고 opener에서 0개 처리로 변경함.
        	}
        	// 컬럼순서 중복여부Check
        	for (var i = 0; i < cnt; i++)
        	{
        		var ordr1 = this.ds_sql_col.getColumn(i, "CLUM_ORDR");
        		for (var j = (i + 1); j < cnt; j++)
        		{
        			var ordr2 = this.ds_sql_col.getColumn(j, "CLUM_ORDR");
        			/*
        			 if(param_sql_id != '') {
        			 trace('row = ' + (i+1) + '번째 : ordr1 vs ordr2 = [' + ordr1 + '] vs [' + ordr2 + ']');
        			 }
        			 */
        			if (Number(ordr1) == Number(ordr2))
        			{
        				// {0}(이)가 중복되었습니다. {1}번째
        				var arr = new Array("컬럼순서", (i + 1));
        				this.gfn_Message("IMCMM0245", arr, "info");
        				return;
        			}
        		}
        	}

        	// Clear
        	this.opener.objects["ds_sql_cols"].clearData(); //Init(Opener)
        	trace("opener.object Clear! ...");
        	var objData = this.opener.objects["ds_sql_cols"];
        	// 부모창의 데이타셋에 append
        	var nRowCnt = objData.appendData(this.ds_sql_col, false, true);
        	var openerRowCnt = objData.getRowCount();
        	trace("appendData end : nRowCnt = " + nRowCnt + ", OpenerRowCnt = " + openerRowCnt);
        	this.opener.fn_append_confirm_after(); //성공후 Opener함수 호출

        	var arr = [cnt];
        	this.gfn_popupClose(arr);
        };

        this.fn_close = function ()
        {
        	this.gfn_popupClose("CLOSE");
        };
        // 닫기 버튼 클릭시
        this.btn_close_onclick = function (obj, e)
        {
        	this.fn_close();
        };
        /* dataSet의 위치와 column명으로 해당 value 값을 리턴 */
        this.fn_cusGrdIsNullCheck = function (rowposition, col)
        {
        	return this.ds_sql_col.getColumn(rowposition, col);
        };
        // 컬럼순서 클릭시
        this.grd_col_list_oncellclick = function (obj, e)
        {
        	/*
        	 if(e.col == 0) {
        	 var clum_ordr = this.ds_sql_col.getColumn(e.row, "CLUM_ORDR");
        	 //trace('row = ' + (e.row+1) + ', CLUM_ORDR = ' + clum_ordr);
        	 }
        	 */
        };
        // 헤더 클릭시 정렬기능
        this.grd_list_onheadclick = function (obj, e)
        {
        	// Grid 정렬
        	if (e.col == 0)
        	{
        		this.gfn_ProcGrdSort(obj, e.cell);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmd_onload,this);
            this.grd_col_list.addEventHandler("oncellclick",this.grd_col_list_oncellclick,this);
            this.grd_col_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_rowAdd.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_rowDel.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("CMSL01520P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
