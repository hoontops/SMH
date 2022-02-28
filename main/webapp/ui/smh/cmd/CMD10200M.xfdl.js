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
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mytodoList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_noticeList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_BOARD_ITEM_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ITEM_GROUP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MAX_PAGE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LeadersToDoList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_1\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_2\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_3\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkMax", this);
            obj._setContents("<ColumnInfo><Column id=\"MAX_PAGE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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
            obj.set_binddataset("ds_mytodoList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"30\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"1\" text=\"상세구분\" tooltiptext=\"상세구분\"/><Cell col=\"2\" text=\"건수/단계\" tooltiptext=\"건수/단계\"/><Cell col=\"3\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell text=\"bind:ITEM_1\"/><Cell col=\"1\" text=\"bind:ITEM_2\"/><Cell col=\"2\" text=\"bind:ITEM_3\"/><Cell col=\"3\" expandimage=\"url(&apos;theme://images/btn_link.png&apos;)\" expandshow=\"expr:comp.parent.parent.parent.parent.parent.parent.gfn_isNull(dataset.getColumn(currow, &quot;ITEM_1&quot; ) ) ? &apos;hide&apos;:&apos;show&apos;\" expandsize=\"30\" text=\"bind:L_BTN\"/></Band></Format></Formats>");
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
            obj.set_binddataset("ds_LeadersToDoList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"30\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"1\" text=\"상세구분\" tooltiptext=\"상세구분\"/><Cell col=\"2\" text=\"단계\" tooltiptext=\"단계\"/><Cell col=\"3\" text=\"건수\" tooltiptext=\"건수\"/><Cell col=\"4\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell text=\"bind:ITEM_1\"/><Cell col=\"1\" text=\"bind:ITEM_2\"/><Cell col=\"2\" text=\"bind:ITEM_3\"/><Cell col=\"3\" text=\"bind:ITEM_4\"/><Cell col=\"4\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/btn_link.png&apos;)\" expandsize=\"30\" text=\"bind:LL_BTN\"/></Band></Format></Formats>");
            this.div_00.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_00.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_00.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_Lprev",null,"20","60","20","66",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("이전");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("이전");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_Lnext",null,"20","60","20","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("다음");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01",null,"490","48%","230","1.56%",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_notice","0","10",null,null,"0","0",null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_01.form.tab_notice);
            obj.set_text("Notices");
            obj.set_border("0px none");
            this.div_01.form.tab_notice.addChild(obj.name, obj);

            obj = new Grid("grd_Right","0","1",null,null,"0","0",null,null,null,null,this.div_01.form.tab_notice.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_binddataset("ds_noticeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"410\"/><Column size=\"30\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"날짜\" tooltiptext=\"날짜\"/><Cell col=\"1\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"2\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell text=\"bind:UPDATE_DATE\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" expandshow=\"expr:comp.parent.parent.parent.parent.parent.parent.gfn_isNull(dataset.getColumn(currow, &quot;TITLE&quot; ) ) ? &apos;hide&apos;:&apos;show&apos;\" expandimage=\"url(&apos;theme://images/btn_link.png&apos;)\" expandsize=\"30\" imagestretch=\"none\" text=\"bind:R_BTN\"/></Band></Format></Formats>");
            this.div_01.form.tab_notice.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_01.form.tab_notice.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_01.form.tab_notice.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_rPrev",null,"20","60","20","66",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("이전");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("이전");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_rNext",null,"20","60","20","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("다음");
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
        * 시스템명 	: HOME
        * 업무명 		: HOME
        * 파일명 		: CMD10200M.xfdl
        * 작성자 		: 이정훈
        * 작성일 		: 2022.02.18
        *
        * 설  명		: HOME
        *---------------------------------------------------------------------------------------
        * 변경일		변경자		변경내역
        *---------------------------------------------------------------------------------------
        * 2022.02.18	이정훈   	최초작성
        *---------------------------------------------------------------------------------------
        ****************************************************************************************/


        /**************************************************************************
        * 1. 필수 include
        ***************************************************************************/


        /**************************************************************************
        * 2. FORM 변수 선언 영역
        ***************************************************************************/

           this.personId
           this.userNm;
           var page = "";


        /**************************************************************************
        * 3. FORM LOAD
        ***************************************************************************/
        this.fn_init = function (obj, e)
        {
           //화면 초기화

           this.nfn_formInit(obj);

           this.div_00.form.btn_Lnext.set_visible(false);		//좌측 2개버튼 숨김
           this.div_00.form.btn_Lprev.set_visible(false);
        };

        this.fn_login_comp = function()
        {
           this.personId = this.gf_getPersonId(); 		 // 사용자계정
           this.fn_setPageInit();
           this.fn_search();
        }



        this.fn_search = function (obj, e)
        {	//[together search]

           var page_number = 1;

               //dataset clear
           this.ds_noticeList.clearData();					 //Target output Dataset clear
           this.ds_mytodoList.clearData();
           this.ds_search.clearData();						//Search Condition Dataset clear
           var nRow = this.ds_search.addRow();				//dataset에 row를 추가하고 데이터를 입력.

           this.ds_search.setColumn(nRow, "PERSONID",  this.personId); //사용자Id DATA
           this.ds_search.setColumn(nRow, "PAGE_NUMBER", page_number); //사용자Id DATA


           var sSvcID 			= "selectNoticeList"; 							 	// CallBack service name
           var sController 	= "/cmd10200/selectNoticeList.do" ;			        // CONTROLLER VALUE
           var sInDatasets 	= "INPUT=ds_search";						   		// DB INPUT  DATA
           var sOutDatasets 	= "ds_noticeList=output1 ds_mytodoList=output2 ds_checkMax=output3";  	// DB OUTPUT DATA
           var sArgs 			= "";

           this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.fn_search1 = function (obj, e)
        {	//[together search]

           var page_number = page; 	//현재페이지

            //dataset clear
            this.ds_noticeList.clearData();					 //Target output Dataset clear
            this.ds_search.clearData();						//Search Condition Dataset clear

        	var nRow = this.ds_search.addRow();				//dataset에 row를 추가하고 데이터를 입력.

           this.ds_search.setColumn(nRow, "PERSONID",  this.personId); //사용자Id DATA
           this.ds_search.setColumn(nRow, "PAGE_NUMBER", page_number); //사용자Id DATA


           var sSvcID 			= "selectNoticePageList"; 							 	// CallBack service name
           var sController	 	= "/cmd10200/selectNoticePageList.do" ;			        // CONTROLLER VALUE
           var sInDatasets 		= "INPUT=ds_search";						   		// DB INPUT  DATA
           var sOutDatasets 	= "ds_noticeList=output";  	// DB OUTPUT DATA
           var sArgs 			= "";

           this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_search2 = function (obj, e)
        {	//Leader's search
           //dataset clear
           this.ds_LeadersToDoList.clearData();

           this.ds_search.clearData();						//Search Condition Dataset clear
           var nRow = this.ds_search.addRow();				//dataset에 row를 추가하고 데이터를 입력.

           this.ds_search.setColumn(nRow, "PERSONID",  this.personId); //사용자Id DATA

           var sSvcID 			= "selectLeadersTodoList"; 							 	// CallBack service name
           var sController	 	= "/cmd10200/selectLeadersTodoList.do" ;			        // CONTROLLER VALUE
           var sInDatasets 		= "";// "INPUT=ds_search";						   		// DB INPUT  DATA
           var sOutDatasets 	= "ds_LeadersToDoList=output";  	// DB OUTPUT DATA
           var sArgs 			= "";

           this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /**************************************************************************
        * 5. TRANSACTION, CALLBACK 영역
        ***************************************************************************/


        this.fn_callBack = function (trId, errCD, errMsg)
        {
           if (errCD < 0)
           {
               this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
           }
           else
           {
               if (trId == "selectNoticeList") //조회 service name
               {

               }
           }
        };



        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 클릭이벤트로 받은 value 로 우측게시판 조회
         */

        this.fn_setPageInit = function (page)
        {
          // if(page <= 0 || gfn_isNull(page))
           if(page <= 0 || this.gfn_isNull(page))
           {
               page = 1;
               this.page = page;
           }else{
               this.page = page;
           }
           this.fn_search1();
        };

        /*
         * 기능 : 버튼클릭시 페이지이동 value
         */

        this.onChangePage = function (obj, e)
        {
           page;
           var checkMaxPage = this.ds_checkMax.getColumn(0, "MAX_PAGE"); 	//maxpage
               if(obj.name == "btn_rPrev")
               {
        		   page--;
        		   if(page + 1  == checkMaxPage - 1)
        		   {
        			   this.div_01.form.btn_rNext.set_enable(true);
        		   }
                   if(page <= 0)
                   {
                       page = 1;
                   }
        	   }
               else
               {
                   page++;
                   if(page + 1 == checkMaxPage)
                   {
        			   this.div_01.form.btn_rNext.set_enable(false);	//마지막페이지 이후 다음버튼 잠금처리
                       alert("마지막 페이지 입니다.");
        			   return;
                   }
               }

           this.fn_setPageInit(page);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        /************************************************************************
        * 기능 :  페이지이동 (SEQ) 해당페이지로 이동.
        comment : 해당 function은 grid 내의 이미지 컬럼에 demmy 데이터를 바인딩하여
                  nfn_isEqualcol function 으로 true와 false 를 리턴, 이동하려는 페이지에서
                  추가적으로 구현해야한다. +query(xml) 에서도 추가해 줘야합니다.
        ************************************************************************/


        this.fn_Linked = function(obj,e)
        {
           if(e.row<0) return;
           if (this.nfn_isEqualCol(obj, e.cell, "R_BTN"))
           {
               var seq = this.ds_noticeList.getColumn(e.row, "HJSHR_BOARD_ITEM_SEQ");
               if(!this.gfn_isNull(seq))
               {
                   var sUrl = "hra::HRA30510M.xfdl";
                   var objArgs = {
                       menuName : "CMD10200M",
                       objList : ["P_SEQ", seq]
                       // "param name" , value
                   };
                   var bReload = true;
                   this.gfn_goPage(sUrl, objArgs, bReload);
               }
           }
           else if(this.nfn_isEqualCol(obj, e.cell, "L_BTN"))
           {
               var item = this.ds_mytodoList.getColumn(e.row, "ITEM_1");
               if(!this.gfn_isNull(item))
               {
                   var sUrl = "pay::PAY40110M.xfdl";
                   var objArgs = {
                       menuName : "CMD10200M",
                       objList : ["P_ITEM",item ]
                       // "param name" , value
                   };
                   var bReload = true;
                   this.gfn_goPage(sUrl, objArgs, bReload);
               }
           }
           else if(this.nfn_isEqualCol(obj, e.cell, "LL_BTN"))
           {
               var item1 = this.ds_LeadersToDoList.getColumn(e.row, "ITEM_1");
               if(!this.gfn_isNull(item1))
               {
                   var sUrl = "pay::PAY40210M.xfdl";
                   var objArgs = {
                       menuName : "CMD10200M",
                       objList : ["P_ITEM1", item1]
                       // "param name" , value
                   };
                   var bReload = true;
                   this.gfn_goPage(sUrl, objArgs, bReload);
               }
           }
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_00.form.tab_00.addEventHandler("onchanged",this.fn_search2,this);
            this.div_00.form.tab_00.Tabpage1.form.grd_Left.addEventHandler("onexpandup",this.fn_Linked,this);
            this.div_00.form.tab_00.Tabpage2.form.grd_Left1.addEventHandler("onexpandup",this.fn_Linked,this);
            this.div_01.form.tab_notice.Tabpage1.form.grd_Right.addEventHandler("onexpandup",this.fn_Linked,this);
            this.div_01.form.btn_rPrev.addEventHandler("onclick",this.onChangePage,this);
            this.div_01.form.btn_rNext.addEventHandler("onclick",this.onChangePage,this);
        };
        this.loadIncludeScript("CMD10200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
