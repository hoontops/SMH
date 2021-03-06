(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMD10200M");
            this.set_titletext("Home");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticeList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ITEM_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"LINK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_00","0","0",null,"488","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/myHR_home_img.png\') no-repeat center top #ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","1.56%","490","48%","230",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","10",null,null,"0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_00.form.tab_00);
            obj.set_text("My To-Do List");
            obj.set_border("0px none");
            this.div_00.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_Left","0","1",null,null,"0","0",null,null,null,null,this.div_00.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"??????\" tooltiptext=\"??????\"/><Cell col=\"1\" text=\"????????????\" tooltiptext=\"????????????\"/><Cell col=\"2\" text=\"??????/??????\" tooltiptext=\"??????/??????\"/><Cell col=\"3\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.div_00.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_00.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_00.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_00.form.tab_00);
            obj.set_text("Leader\'s To-Do List");
            obj.set_border("0px none");
            this.div_00.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_Left1","0","1",null,null,"0","0",null,null,null,null,this.div_00.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"??????\" tooltiptext=\"??????\"/><Cell col=\"1\" text=\"????????????\" tooltiptext=\"????????????\"/><Cell col=\"2\" text=\"??????/??????\" tooltiptext=\"??????/??????\"/><Cell col=\"3\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.div_00.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_00.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_00.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_Lprev",null,"20","60","20","66",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("??????");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_Lnext",null,"20","60","20","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("??????");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01",null,"490","48%","230","1.56%",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00_00","0","10",null,null,"0","0",null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_01.form.tab_00_00);
            obj.set_text("Notices");
            obj.set_border("0px none");
            this.div_01.form.tab_00_00.addChild(obj.name, obj);

            obj = new Grid("grd_Right","0","1",null,null,"0","0",null,null,null,null,this.div_01.form.tab_00_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_binddataset("ds_notices");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"410\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"??????\" tooltiptext=\"??????\"/><Cell col=\"1\" text=\"??????\" tooltiptext=\"??????\"/><Cell col=\"2\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell text=\"bind:UPDATE_DATE\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.div_01.form.tab_00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_01.form.tab_00_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_01.form.tab_00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_Rprev",null,"20","60","20","66",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("??????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("??????");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_Rnext",null,"20","60","20","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("??????");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("??????");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMD10200M.xfdl", function() {

        /***************************************************************************************
         * ???????????? 	: HOME
         * ????????? 		: HOME
         * ????????? 		: CMD10200M.xfdl
         * ????????? 		: ?????????
         * ????????? 		: 2022.02.18
         *
         * ???  ???		: HOME
         *---------------------------------------------------------------------------------------
         * ?????????		?????????		????????????
         *---------------------------------------------------------------------------------------
         * 2022.02.18	?????????   	????????????
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. ?????? include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM ?????? ?????? ??????
         ***************************************************************************/

        	this.personId;
        	this.userNm;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//?????? ?????????
        	this.nfn_formInit(obj);
        	this.fn_search();
        	//this.svrdate = this.gfn_svrToday();  //????????????

        };

        /**************************************************************************
         * 4. ?????????????????? (?????? ????????????!!!!)
         ***************************************************************************/
        /*
         * ?????? : ?????? [left] , [right]

        this.fn_search = function (obj:Button, e:nexacro.ClickEventInfo)
        {

        	this.ds_counselingList.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();							 //Search Condition Dataset clear

        	var nRow = this.ds_search.addRow();			//dataset??? row??? ???????????? ???????????? ??????.

        	this.ds_search.setColumn(nRow, "PERSONID",  this.personId); //?????????Id DATA

        	var sSvcID 			= "selectTodoList"; 							 	// CallBack service name
        	var sController 	= "/cmd10200/selectTodoList.do" ;			        // CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_search";						   			// DB INPUT  DATA
        	var sOutDatasets 	= "ds_searchList = output1";						    // DB OUTPUT DATA
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        */



        /*
         * ?????? : ??????[NOTICE]
         */


        this.fn_search = function (obj, e)
        {
        	//dataset clear
        	this.ds_counselingList.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();							 //Search Condition Dataset clear

        	var nRow = this.ds_search.addRow();			//dataset??? row??? ???????????? ???????????? ??????.

        	this.ds_search.setColumn(nRow, "PERSONID",  this.personId); //?????????Id DATA

        	var sSvcID 			= "selectNoticeList"; 							 	// CallBack service name
        	var sController 	= "/cmd10200/selectNoticeList.do" ;			        // CONTROLLER VALUE
        	var sInDatasets 	= "";						   			// DB INPUT  DATA
        	var sOutDatasets 	= "ds_noticeList = output1";						    // DB OUTPUT DATA
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        /*
         * ?????? :


        this.fn_searchDetail = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        {
        	if (e.col == obj.getBindCellIndex("body", "STATUS_NAME"))
        	{
        		//Dataset clear
        		this.ds_counselinginfo.clearData();
        		this.ds_search.clearData();

        	   // ????????? dataset?????? ????????? ?????? ???????????? ???????????? ?????????.
        		var counselingSeq = this.ds_counselingList.getColumn(this.ds_counselingList.rowposition, "HJSHR_COUNSELING_SEQ");
        		var nRow = this.ds_search.addRow();			//dataset??? row??? ???????????? ???????????? ??????.
        		this.ds_search.setColumn(nRow, "HJSHR_COUNSELING_SEQ",  counselingSeq); //?????????Id DATA

        		var sSvcID 			= "selectCounselingDetail"; 						// CallBack service name
        		var sController 	= "/hra30110/selectCounselingDetail.do" ;			// CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_search";						   		// DB INPUT  DATA
        		var sOutDatasets 	= "ds_counselinginfo=output";						// DB OUTPUT DATA
        		var sArgs 			= "";

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        	}
        };
         */


        /*
         * ?????? : ??????
         */
         this.fn_save = function(obj,e)
        {

        };

        /*
         * ?????? : ?????????
         */
        this.fn_delline = function(obj,e)
        {

        };


        /*
         * ?????? : ????????????
         */
        this.fn_apply = function(obj,e)
        {

        };

        /*
         * ?????? : ????????????
         */
        this.fn_cancle = function(obj,e)
        {

        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/


        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
            {
                this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
            }
            else
            {
                if (trId == "selectNoticeList") //?????? service name
                {
        		alert("callback ?????????");
        		}

        	}
        };

        /**************************************************************************
         * 6. ?????? ??????/??????
         **************************************************************************/


        /**************************************************************************
         * 7. ?????? ??????(?????? ?????? ??????)
         **************************************************************************/


        /**************************************************************************
         * 8. ?????????
         ***************************************************************************/
        		// ????????? ????????????
        // this.fn_textAreaMaxkey = function(obj:nexacro.TextArea,e:nexacro.KeyEventInfo)
        // {
        // 	var strCnt = '<fc v="red">*</fc>????????????\n('+ this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.text.length +'/ 1000)'
        // 	this.div_work.Tabpage3.form.div_basicInfo.form.sta_prevcareer.set_text(strCnt);
        // };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_00.form.tab_00.addEventHandler("onchanged",this.div_00_tab_00_onchanged,this);
        };
        this.loadIncludeScript("CMD10200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
