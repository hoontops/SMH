(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60510M");
            this.set_titletext("신협여수신조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_creditList", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PRODUCT_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TRADE_START_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TRADE_END_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TRADE_AMOUNT\" type=\"BIGDECIMAL\" size=\"30\"/><ConstColumn id=\"BALANCE\" type=\"BIGDECIMAL\" size=\"30\"/><ConstColumn id=\"LAST_TRADE_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_unionList", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"PRODUCT_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TRADE_START_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TRADE_END_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"TRADE_AMOUNT\" type=\"BIGDECIMAL\" size=\"30\"/><ConstColumn id=\"BALANCE\" type=\"BIGDECIMAL\" size=\"30\"/><ConstColumn id=\"LAST_TRADE_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","36",null,"274","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","161","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("신협수신 내역");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_creditList","169","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_creditList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상품명\" tooltiptext=\"상품명\"/><Cell col=\"1\" text=\"계약일자\" tooltiptext=\"계약일자\"/><Cell col=\"2\" text=\"만기일자\" tooltiptext=\"만기일자\"/><Cell col=\"3\" text=\"계약금\" tooltiptext=\"계약금\"/><Cell col=\"4\" text=\"잔액\" tooltiptext=\"잔액\"/><Cell col=\"5\" text=\"최종거래일\" tooltiptext=\"최종거래일\"/><Cell col=\"6\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"7\" text=\"관계\" tooltiptext=\"관계\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:TRADE_START_DATE\"/><Cell col=\"2\" text=\"bind:TRADE_END_DATE\"/><Cell col=\"3\" text=\"bind:TRADE_AMOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"bind:BALANCE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:LAST_TRADE_DATE\"/><Cell col=\"6\" text=\"bind:NAME\"/><Cell col=\"7\" text=\"bind:RELATIONSHIP_NAME\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;parseInt(TRADE_AMOUNT)&apos;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;parseInt(BALANCE)&apos;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_work00","0","310",null,null,"10","58",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","161","34",null,null,null,null,null,null,this.div_work00.form);
            obj.set_taborder("0");
            obj.set_text("신협여신 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("신협여신 내역");
            this.div_work00.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_unionList","169","0","140","34",null,null,null,null,null,null,this.div_work00.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work00.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work00.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_unionList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"상품명\" tooltiptext=\"상품명\"/><Cell col=\"1\" text=\"계약일자\" tooltiptext=\"계약일자\"/><Cell col=\"2\" text=\"만기일자\" tooltiptext=\"만기일자\"/><Cell col=\"3\" text=\"계약금\" tooltiptext=\"계약금\"/><Cell col=\"4\" text=\"잔액\" tooltiptext=\"잔액\"/><Cell col=\"5\" text=\"최종거래일\" tooltiptext=\"최종거래일\"/><Cell col=\"6\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"7\" text=\"관계\" tooltiptext=\"관계\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:TRADE_START_DATE\"/><Cell col=\"2\" text=\"bind:TRADE_END_DATE\"/><Cell col=\"3\" text=\"bind:TRADE_AMOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"bind:BALANCE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:LAST_TRADE_DATE\"/><Cell col=\"6\" text=\"bind:NAME\"/><Cell col=\"7\" text=\"bind:RELATIONSHIP_NAME\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;parseInt(TRADE_AMOUNT)&apos;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;parseInt(BALANCE)&apos;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_work00.addChild(obj.name, obj);

            obj = new Static("Static16","15",null,null,"24","25","34",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※ 신협 여수신 내역을 조회하는 화면입니다. (당월정보)");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 신협 여수신 내역을 조회하는 화면입니다. (당월정보)");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","15",null,null,"24","25","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("※ 신협협동조합 홈페이지 (G/W >  Bulletin Board ->Company Board-> Korea H/O -> 신협정보 ");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 신협협동조합 홈페이지 (G/W >  Bulletin Board ->Company Board-> Korea H/O -> 신협정보 ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BEN60510M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 신협여수신조회
         * 파일명 		: BEN60510M.xfdl
         * 작성자 		: 정우영
         * 작성일 		: 2022.01.27
         * 설  명		: 임직원 본인은 신협 여수신 내역을 조회하는 화면입니다.
         *                Grid의 CheckBox edittype => dataset.getColumn(currow, "APPROVE_YN")=="N"?'checkbox':'none'
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.27	정우영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	var employee_number = this.gf_getUserAcnt();
        	var person_id       = this.gf_getPersonId();
        	var assignmentId    = this.gf_getAssignmentId();

        	//trace("사번 => " + employee_number + ", 개인id => " +  person_id + ", 발령id => " +  assignmentId);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /*
         * 기능 : 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };


        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	// 매개변수 초기화
        	this.ds_search.clearData();
        	this.ds_creditList.clearData();
        	this.ds_unionList.clearData();

        	var sRow = this.ds_search.addRow();
        	var personID = this.gf_getPersonId();
        	//trace("personID => " + personID);
        	this.ds_search.setColumn(sRow, "PERSON_ID", personID);

        	// 신협 여수신 내역 조회
        	var sSvcID       = "selectCreditUnionList";
        	var sController  = "/ben60510/selectCreditUnionList.do";
        	var sInDatasets  = "INPUT=ds_search";
        	var sOutDatasets = "ds_creditList=output1 ds_unionList=output2";
        	var sArgs        = "";
        	sArgs += this.gfn_setParam("method", "selectCreditUnionList");
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
        		// 여/수신 조회 결과
        		if (trId == "selectCreditUnionList")
        		{
        			if ((this.ds_creditList.rowcount + this.ds_unionList.rowcount) < 1)
        			{
        				 this.gfn_Message("NotExistList", "신협여수신", "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        	}
        };


        /**************************************************************************
         * 6. 이벤트
         ***************************************************************************/
        this.fn_ = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("BEN60510M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
