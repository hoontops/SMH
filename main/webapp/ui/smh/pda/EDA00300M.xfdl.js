(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDA00300M");
            this.set_titletext("2. 공정출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_SUBINVENTORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSUE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSUE_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSUE_TYP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DEMAND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ONHAND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSFER_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_DEMAND_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_EXISTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"P_DEMAND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSUE_QTY1\" type=\"STRING\" size=\"256\"/><Column id=\"P_ONHAND_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"P_TRANSFER_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result5", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_REQ_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_timer", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"P_ISSUE_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_SPLIT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSUE_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"P_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title00_00","15","91","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("번호");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_ISSUE_NUM","sta_title00_00:0","94","171","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","10","188","463","222",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_result2");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재코드\" font=\"normal 400 15px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" text=\"청구량\" font=\"normal 400 15px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"2\" text=\"불출량\" font=\"normal 400 15px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" text=\"재고량\" font=\"normal 400 15px/1.1000000238418579 &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:ITEM_CODE\" font=\"normal 15px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:DEMAND_QTY\" displaytype=\"number\" textAlign=\"right\" font=\"normal 15px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:ISSUE_QTY\" displaytype=\"number\" textAlign=\"right\" font=\"normal 15px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:ONHAND_QTY\" displaytype=\"number\" textAlign=\"right\" font=\"normal 15px/normal &quot;Dotum&quot;,&quot;돋움&quot;,&quot;Arial&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","1",null,"54","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_DEMAND_NUM","145","7","328","39",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("");
            obj.set_imemode("alpha");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","14","11","110","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("청구번호1");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01","edt_P_ISSUE_NUM:10","91","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("창고");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_SUBINVENTORY_CODE","sta_title00_00_01:0","94","171","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00","15","137","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_ISSUE_DATE","sta_title00_00:0","140","171","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01_00","edt_P_ISSUE_NUM:10","137","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_ISSUE_TYPE","sta_title00_00_01:0","140","171","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ACCEPT","318","413",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("처리");
            obj.set_font("normal 700 24pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk_CANCEL","183","413","117","72",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_font("normal 900 24pt/normal \"Arial\"");
            obj.set_accessibilityrole("checkbox");
            obj.set_fittocontents("none");
            obj.set_cssclass("chk_WF_module_l");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00","3.13%","51",null,"39","73.75%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("분할번호");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_SPLIT_NUM","30.21%","51","40.63%","39",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_P_SPLIT_NUM2","72.92%","51","25.63%","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","15","216","412","94",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_timer");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"P_ISSUE_NUM\"/><Cell col=\"1\" text=\"P_SPLIT_NUM\"/><Cell col=\"2\" text=\"P_ISSUE_QTY\"/><Cell col=\"3\" text=\"P_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:P_ISSUE_NUM\"/><Cell col=\"1\" text=\"bind:P_SPLIT_NUM\"/><Cell col=\"2\" text=\"bind:P_ISSUE_QTY\"/><Cell col=\"3\" text=\"bind:P_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_P_ISSUE_NUM","value","ds_result","P_ISSUE_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_P_SUBINVENTORY_CODE","value","ds_result","P_SUBINVENTORY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_P_ISSUE_DATE","value","ds_result","P_ISSUE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_P_ISSUE_TYPE","value","ds_result","P_ISSUE_TYP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EDA00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재 PDA - 2.공정출고
         * 파일명 		: PDA00300M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.06.01
         *
         * 설  명		: 자재 PDA - 2.공정출고
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.01	최성민   	최초작성
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

        	this.div_search.form.edt_P_DEMAND_NUM.setFocus();

        	this.setTimer( 0, 100 );
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        // Step 1
        this.fn_search = function (obj, e)
        {
        	this.ds_result.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_DEMAND_NUM", 	this.div_search.form.edt_P_DEMAND_NUM.value);
        	this.ds_search.setColumn(0, "P_USER_ID", 		this.gf_getUserId());
        	this.ds_search.setColumn(0, "P_USER_NAME", 		this.gf_getUserNm());

        	var sSvcID 			= "selectFifo21";
        	var sController 	= "/eda00300/selectFifo21.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        // Step 2
        this.fn_searchList = function (obj, e)
        {
        	this.ds_result2.clearData();

        	var sSvcID 			= "selectFifo22";
        	var sController 	= "/eda00300/selectFifo22.do";
        	var sInDatasets 	= "INPUT=ds_result";
        	var sOutDatasets 	= "ds_result2=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", false, true);
        };

        // Step 3
        this.fn_searchExists = function (obj, e)
        {
        	this.ds_result3.clearData();
        	var issueNum 	= this.ds_timer.getColumn(0, "P_ISSUE_NUM");
        	var splitNum 	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        	var issueQty 	= this.ds_timer.getColumn(0, "P_ISSUE_QTY");

        	if(this.nfn_isNull(issueNum) || this.nfn_isNull(splitNum)){
        		return;
        	}

        	var sSvcID 			= "selectFifo23";
        	var sController 	= "/eda00300/selectFifo23.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_result3=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("P_ISSUE_NUM"	, issueNum);
        		sArgs 			+= this.gfn_setParam("P_SPLIT_NUM"	, splitNum);
        		sArgs 			+= this.gfn_setParam("P_ISSUE_QTY"	, issueQty);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", false, true);
        };

        // Step 4
        this.fn_searchExistsAfter = function (obj, e)
        {
        	this.ds_result4.clearData();
        	var issueNum 	= this.ds_timer.getColumn(0, "P_ISSUE_NUM");
        	var splitNum 	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        	var issueQty 	= this.ds_timer.getColumn(0, "P_ISSUE_QTY");

        	if(this.nfn_isNull(issueNum) || this.nfn_isNull(splitNum)){
        		return;
        	}

        	var sSvcID 			= "selectFifo24";
        	var sController 	= "/eda00300/selectFifo24.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_result4=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("P_ISSUE_NUM"	, issueNum);
        		sArgs 			+= this.gfn_setParam("P_USER_ID"	, this.gf_getUserId());
        		sArgs 			+= this.gfn_setParam("P_SPLIT_NUM"	, splitNum);
        		sArgs 			+= this.gfn_setParam("P_ISSUE_QTY"	, issueQty);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", false, true);
        };

        /*
         * 기능 : 취소처리 전 검증
         */
        this.fn_searchCancelExists = function (obj, e)
        {
        	this.ds_result3.clearData();
        	var issueNum 	= this.ds_timer.getColumn(0, "P_ISSUE_NUM");
        	var splitNum 	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        	var issueQty 	= this.ds_timer.getColumn(0, "P_ISSUE_QTY");

        	if(this.nfn_isNull(issueNum) || this.nfn_isNull(splitNum)){
        		return;
        	}

        	var sSvcID 			= "selectFifo26";
        	var sController 	= "/eda00300/selectFifo26.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_result3=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("P_ISSUE_NUM"	, issueNum);
        		sArgs 			+= this.gfn_setParam("P_SPLIT_NUM"	, splitNum);
        		sArgs 			+= this.gfn_setParam("P_ISSUE_QTY"	, issueQty);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", false, true);
        };


        /*
         * 기능 : 취소처리
         */
        this.fn_cancel = function (obj, e)
        {
        	this.ds_result4.clearData();
        	var issueNum 	= this.ds_timer.getColumn(0, "P_ISSUE_NUM");
        	var splitNum 	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        	var issueQty 	= this.ds_timer.getColumn(0, "P_ISSUE_QTY");

        	if(this.nfn_isNull(issueNum) || this.nfn_isNull(splitNum)){
        		return;
        	}

        	var sSvcID 			= "selectFifo25";
        	var sController 	= "/eda00300/selectFifo25.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_result4=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("P_ISSUE_NUM"	, issueNum);
        		sArgs 			+= this.gfn_setParam("P_USER_ID"	, this.gf_getUserId());
        		sArgs 			+= this.gfn_setParam("P_SPLIT_NUM"	, splitNum);
        		sArgs 			+= this.gfn_setParam("P_ISSUE_QTY"	, issueQty);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", false, true);
        };

        /*
         * 기능 : 정상처리
         */
        this.fn_save = function (obj, e)
        {
        	this.ds_result5.clearData();
        	var sSvcID 			= "moveTrx";
        	var sController 	= "/eda00300/moveTrx.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_result5=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("P_ISSUE_NUM"	, this.ds_result.getColumn(0, "P_ISSUE_NUM"));
        		sArgs 			+= this.gfn_setParam("P_USER_ID"	, this.gf_getUserId());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", false, true);
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message(errMsg, "", "error", "ok");
        		//this.fn_clearValue();
        		this.ds_timer.clearData();
        	} else {
        		if (trId == "selectFifo21")
        		{
        			this.fn_searchList();
        		}
        		if (trId == "selectFifo22")
        		{
        			this.edt_P_SPLIT_NUM.setFocus();
        		}
        		if (trId == "selectFifo23") // 분할번호 체크검증
        		{
        			if(this.ds_result3.rowcount>0){
        				var msg = this.ds_result3.getColumn(0, "P_EXISTS");
        				trace("msg====" + msg);
        				if(msg != "Y"){
        					var issueNum 	= this.ds_result.getColumn(0, "P_ISSUE_NUM");
        					this.ds_timer.filter("P_TYPE=='APPLY' && P_ISSUE_NUM=='"+issueNum+"'");
        					var splitNum	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        					this.ds_timer.filter("");

        					alert("분할번호:"+splitNum+"\n" +msg);

        					//this.fn_clearValue();
        					this.fn_deleteTimer("APPLY");
        				} else {
        					this.fn_searchExistsAfter();
        				}
        			}
        		}
        		if (trId == "selectFifo24") // 분할번호 체크완료
        		{
        			if(this.ds_result4.rowcount>0){
        				var issueNum		= this.ds_result.getColumn(0, "P_ISSUE_NUM")
        				var itemCode 		= this.ds_result4.getColumn(0, "P_ITEM_CODE");
        				var itemDesc 		= this.ds_result4.getColumn(0, "P_ITEM_DESC");
        				var demandQty 		= this.ds_result4.getColumn(0, "P_DEMAND_QTY");
        				var issueQty 		= this.ds_result4.getColumn(0, "P_ISSUE_QTY1");
        				var onhandQty 		= this.ds_result4.getColumn(0, "P_ONHAND_QTY");
        				var transferFlag 	= this.ds_result4.getColumn(0, "P_TRANSFER_FLAG");

        				var fRow = this.ds_result2.findRow("ITEM_CODE", itemCode);

        				if(fRow<0){
        					return;
        				}

        				this.ds_result2.setColumn(fRow, "ITEM_DESC", 	itemDesc);
        				this.ds_result2.setColumn(fRow, "DEMAND_QTY", 	demandQty);
        				this.ds_result2.setColumn(fRow, "ISSUE_QTY", 	issueQty);
        				this.ds_result2.setColumn(fRow, "ONHAND_QTY", 	onhandQty);
        				this.ds_result2.setColumn(fRow, "TRANSFER_FLAG",transferFlag);

        				this.fn_deleteTimer("APPLY");

        			}
        				//this.fn_clearValue();
        		}

        		if (trId == "selectFifo26") //취소검증
        		{
        			if(this.ds_result3.rowcount>0){
        				var msg = this.ds_result3.getColumn(0, "P_EXISTS");
        				if(msg != "Y"){
        					var issueNum 	= this.ds_result.getColumn(0, "P_ISSUE_NUM");
        					this.ds_timer.filter("P_TYPE=='CANCEL' && P_ISSUE_NUM=='"+issueNum+"'");
        					var splitNum	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        					this.ds_timer.filter("");

        					alert("분할번호:"+splitNum+"\n" +msg);
        					//this.fn_clearValue();
        					this.fn_deleteTimer("CANCEL");
        				} else {
        					this.fn_cancel();
        				}
        			}
        		}
        		if (trId == "selectFifo25")  //취소완료
        		{
        			if(this.ds_result4.rowcount>0){
        				var itemCode 		= this.ds_result4.getColumn(0, "P_ITEM_CODE");
        				var itemDesc 		= this.ds_result4.getColumn(0, "P_ITEM_DESC");
        				var demandQty 		= this.ds_result4.getColumn(0, "P_DEMAND_QTY");
        				var issueQty 		= this.ds_result4.getColumn(0, "P_ISSUE_QTY1");
        				var onhandQty 		= this.ds_result4.getColumn(0, "P_ONHAND_QTY");
        				var transferFlag 	= this.ds_result4.getColumn(0, "P_TRANSFER_FLAG");

        				var fRow = this.ds_result2.findRow("ITEM_CODE", itemCode);
        				if(fRow<0){
        					return;
        				}

        				this.ds_result2.setColumn(fRow, "ITEM_DESC", 	itemDesc);
        				this.ds_result2.setColumn(fRow, "DEMAND_QTY", 	demandQty);
        				this.ds_result2.setColumn(fRow, "ISSUE_QTY", 	issueQty);
        				this.ds_result2.setColumn(fRow, "ONHAND_QTY", 	onhandQty);
        				this.ds_result2.setColumn(fRow, "TRANSFER_FLAG",transferFlag);

        				this.fn_deleteTimer("CANCEL");
        			}
        			//this.fn_clearValue();
        		}
        		if (trId == "moveTrx")  //처리완료
        		{
        			if(this.ds_result5.rowcount>0){
        				var reqId 		= this.ds_result5.getColumn(0, "P_REQ_ID");
        				if(reqId=="0"){ //오류
        					this.gfn_Message(errMsg, "", "error", "ok");
        				} else {
        					this.fn_search();
        				}
        			}
        		}
        	}
        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_ACCEPT_onclick = function(obj,e)
        {
        	//공정출고 처리하시겠습니까?
        	if(this.gfn_Message("CheckPDAOperation", null, "conf", "yesno")){
        		this.fn_save();
        	}
        };

        this.div_search_edt_P_DEMAND_NUM_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.fn_search();
        	}
        };

        this.edt_P_SPLIT_NUM_onkeydown = function(obj,e)
        {
        	if(e.keycode==13 && !this.nfn_isNull(obj.value)){
        		var isCancel = this.chk_CANCEL.value;
        		if(isCancel=="1"){
        			//this.fn_searchCancelExists();
        			this.fn_addTimer("CANCEL");
        		} else {
        			this.fn_addTimer("APPLY");
        			//this.fn_searchExists();
        		}
        	}
        };

        this.fn_clearValue = function()
        {
        	this.edt_P_SPLIT_NUM.set_value(null);
        	this.edt_P_SPLIT_NUM2.set_value(null);
        	this.edt_P_SPLIT_NUM.setFocus();
        }

        //타이머 Ds에 추가
        this.fn_addTimer = function(type)
        {
        	var splitNum		= this.edt_P_SPLIT_NUM.value;
        	var issueQty		= this.edt_P_SPLIT_NUM2.value;
        	var issueNum 		= this.ds_result.getColumn(0, "P_ISSUE_NUM");

        	//중복자료 체크
        	var fRow = this.ds_timer.findRowExpr("P_TYPE=='"+type+"' && P_ISSUE_NUM=='"+issueNum+"' && P_SPLIT_NUM=='"+splitNum+"'");

        	//중복자료 없는경우 insert
        	if(fRow<0){
        		var nRow = this.ds_timer.addRow();
        		this.ds_timer.setColumn(nRow, "P_TYPE", type);
        		this.ds_timer.setColumn(nRow, "P_ISSUE_NUM", issueNum);
        		this.ds_timer.setColumn(nRow, "P_SPLIT_NUM", splitNum);
        		this.ds_timer.setColumn(nRow, "P_ISSUE_QTY", issueQty);

        		var nRow = this.ds_timer2.addRow();
        		this.ds_timer2.setColumn(nRow, "P_TYPE", type);
        		this.ds_timer2.setColumn(nRow, "P_ISSUE_NUM", issueNum);
        		this.ds_timer2.setColumn(nRow, "P_SPLIT_NUM", splitNum);
        		this.ds_timer2.setColumn(nRow, "P_ISSUE_QTY", issueQty);
        	}
        	this.fn_clearValue();
        }

        //타이머 이벤트
        this.EDA00300M_ontimer = function(obj,e)
        {
        	if(this.ds_timer.rowcount>0){
        		var type 		= this.ds_timer.getColumn(0, "P_TYPE");
        		var issueNum 	= this.ds_timer.getColumn(0, "P_ISSUE_NUM");
        		var splitNum 	= this.ds_timer.getColumn(0, "P_SPLIT_NUM");
        		var issueQty 	= this.ds_timer.getColumn(0, "P_ISSUE_QTY");

        		if(type=="CANCEL"){
        			this.fn_searchCancelExists();
        		} else if(type=="APPLY"){
        			this.fn_searchExists();
        		}

        		this.killTimer( 0);
        	}
        };


        this.fn_deleteTimer = function(type)
        {
        	//타이머 Ds 1번째 행 삭제
        	var issueNum 		= this.ds_result.getColumn(0, "P_ISSUE_NUM");
        	this.ds_timer.filter("P_TYPE=='"+type+"' && P_ISSUE_NUM=='"+issueNum+"'");
        	this.ds_timer.deleteRow(0);
        	this.ds_timer.filter("");

        	this.setTimer( 0, 100 );
        }
        this.chk_CANCEL_onchanged = function(obj,e)
        {
        	this.edt_P_SPLIT_NUM.setFocus();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.EDA00300M_ontimer,this);
            this.div_search.form.edt_P_DEMAND_NUM.addEventHandler("onkeydown",this.div_search_edt_P_DEMAND_NUM_onkeydown,this);
            this.btn_ACCEPT.addEventHandler("onclick",this.btn_ACCEPT_onclick,this);
            this.chk_CANCEL.addEventHandler("onchanged",this.chk_CANCEL_onchanged,this);
            this.edt_P_SPLIT_NUM.addEventHandler("onkeydown",this.edt_P_SPLIT_NUM_onkeydown,this);
            this.edt_P_SPLIT_NUM.addEventHandler("onchanged",this.edt_P_SPLIT_NUM_onchanged,this);
            this.edt_P_SPLIT_NUM2.addEventHandler("onkeydown",this.edt_P_SPLIT_NUM_onkeydown,this);
        };
        this.loadIncludeScript("EDA00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
