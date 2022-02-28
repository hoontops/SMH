(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDA00200M");
            this.set_titletext("1. 공급자 제조LOT 입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_SPLIT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ONHAND_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_LOT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result2", this);
            obj._setContents("<ColumnInfo><Column id=\"SPLIT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ONHAND_QTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_SPLIT_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultStack", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_SPLIT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ONHAND_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_LOT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_SPLIT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECV_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ONHAND_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_LOT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title00_00","15","74",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_ITEM_CODE","145","74",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00","15","120",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_ITEM_DESC","145","120",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00","15","166",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("입고일자");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00","15","212",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_ONHAND_QTY","145","212",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_00","15","272",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("LOT 번호");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_LOT_NO","145","272",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result2","5","318",null,"125","5",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_result2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"126\"/><Column size=\"50\"/><Column size=\"292\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분할번호\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"수량\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"LOT NO\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:SPLIT_NUM\" font=\"normal bold 16px/normal &quot;Arial&quot;\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:ONHAND_QTY\" font=\"normal bold 16px/normal &quot;Arial&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOT_NUM\" font=\"normal bold 16px/normal &quot;Arial&quot;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_RECV_DATE","145","166",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","1",null,"54","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_SPLIT_NUM","145","7",null,"39","30",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","14","11","110","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("분할번호");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_area_id","value","ds_work","WORKER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_P_ITEM_CODE","value","ds_result","P_ITEM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_P_ITEM_DESC","value","ds_result","P_ITEM_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_P_RECV_DATE","value","ds_result","P_RECV_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_P_ONHAND_QTY","value","ds_result","P_ONHAND_QTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EDA00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수
         * 파일명 		: PDA00200M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: 인수
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.parent.parent.sta_back.set_visible(true);
        	this.fv_currDate = this.nfn_getCurrentSystemTime();

        	this.div_search.form.edt_P_SPLIT_NUM.setFocus();
        	//this.setTimer( 1000, 500 );
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_result.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_SPLIT_NUM", this.div_search.form.edt_P_SPLIT_NUM.value);
        	var sSvcID = "selectFifo11";
        	var sController = "/eda00200/selectFifo11.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_result=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        /*
        	if(this.gfn_isNull(this.ds_result.getColumn(0,"P_ITEM_CODE"))){
        		this.gfn_Message("NoSaveData", null, "info", "ok");
        		return;
        	}

        	if(this.gfn_isNull(this.edt_P_LOT_NO.value)){
        		this.gfn_Message("InputSomeThing", "LOT NO", "info", "ok");
        		return;
        	}
        	this.ds_result.setColumn(0,"P_LOT_NO",this.edt_P_LOT_NO.value);
        */
        	this.ds_resultSave.copyRow(0,this.ds_resultStack,0);
        	this.ds_resultStack.deleteRow(0);

        	//trace(this.ds_resultSave.saveXML());
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "executeFifo12"+Math.random();
        	var sController = "/eda00200/executeFifo12.do";
        	var sInDatasets = "INPUT=ds_resultSave";
        	var sOutDatasets = "ds_result2=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", false);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
        {
        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message(errMsg, "", "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectFifo11")
        		{
        			if(this.gfn_isNull(this.ds_result.getColumn(0,"P_ITEM_CODE"))){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			this.edt_P_LOT_NO.set_value("");
        			this.edt_P_LOT_NO.setFocus();

        		}
        		if (trId.substring(0,13) == "executeFifo12")
        		{
        			trace("executeFifo12...");
        			//this.gfn_Message("SuccessSave", null, "info", "ok");
        			//this.ds_result.clearData();
        			//this.div_search.form.edt_P_SPLIT_NUM.set_value("");
        			//this.edt_P_LOT_NO.set_value("");
        			//this.div_search.form.edt_P_SPLIT_NUM.setFocus();
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;



        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.edt_P_SPLIT_NUM_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.fn_search();
        	}
        };

        this.edt_P_LOT_NO_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		//this.fn_save();
        		if(this.gfn_isNull(this.ds_result.getColumn(0,"P_ITEM_CODE"))){
        			this.gfn_Message("NoSaveData", null, "info", "ok");
        			return;
        		}

        		if(this.gfn_isNull(this.edt_P_LOT_NO.value)){
        			this.gfn_Message("InputSomeThing", "LOT NO", "info", "ok");
        			return;
        		}
        		this.ds_result.setColumn(0,"P_LOT_NO",this.edt_P_LOT_NO.value);

        		var nRow = this.ds_resultStack.addRow();
        		this.ds_resultStack.copyRow(nRow,this.ds_result,this.ds_result.rowposition);

        		this.setTimer( 1000, 500 );
        		this.div_search.form.edt_P_SPLIT_NUM.set_value("");
        		//this.edt_P_LOT_NO.set_value("");
        		this.div_search.form.edt_P_SPLIT_NUM.setFocus();
        		this.ds_result.clearData();
        	}
        };

        this.EDA00200M_ontimer = function(obj,e)
        {
        	var id = e.timerid;
        	if (id == 1000)
        	{
        		this.killTimer(id);
        		this.fn_save();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.EDA00200M_ontimer,this);
            this.edt_P_LOT_NO.addEventHandler("onkeydown",this.edt_P_LOT_NO_onkeydown,this);
            this.div_search.form.edt_P_SPLIT_NUM.addEventHandler("onkeydown",this.edt_P_SPLIT_NUM_onkeydown,this);
        };
        this.loadIncludeScript("EDA00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
