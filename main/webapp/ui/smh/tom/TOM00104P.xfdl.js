(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00104P");
            this.set_titletext("[메일] 수신자 확인");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1160,794);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_receiver", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SNDNG_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SNDNG_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","0.95%","6",null,"31","86.32%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Mail 수신자 조회");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","6",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_receiver","5","84",null,"706","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_receiver");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"29\"/><Column size=\"49\"/><Column size=\"86\"/><Column size=\"150\"/><Column size=\"113\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"142\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"이메일주소\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"전송결과\"/><Cell col=\"7\" text=\"전송시간\"/><Cell col=\"8\" text=\"구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SENDTYPENAME\" expandshow=\"hide\"/><Cell col=\"2\" text=\"bind:USER_NM\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:EMAIL_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:JIKWI_NM\"/><Cell col=\"6\" text=\"bind:SNDNG_RESULT\"/><Cell col=\"7\" text=\"bind:CREATION_DATE\" calendardateformat=\"yyyy-MM-dd hh24:mi:ss\" maskedittype=\"string\"/><Cell col=\"8\" text=\"bind:ORDERNM\" calendardateformat=\"yyyy-MM-dd\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","7","51","141","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수신자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1160,794,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","txa_description00","value","ds_lookupTypes","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00104P.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00104P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사용자정보 수정
         * 파일명 		: cmam00100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.20
         *
         * 설  명		: 사용자정보 수정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.20	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var fv_atchSrcKey;
        this.fv_mailType; //메일타입:3:수신자확인

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fv_mailType = this.gfn_isEmpty(this.parent.mailType);
        	if(this.fv_mailType=="3"){ //수신자 조회
        		this.sta_title.set_text("Mail 수신자 조회");
        	}

        	fv_atchSrcKey = this.parent.atchSrcKey;

        	this.fn_search();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ATCH_SRC_KEY", fv_atchSrcKey);

        	var sSvcID = "selectToolRecvList";
        	var sController = "/tomCommon/selectToolRecvList.do"; //메일 발송 이력을 가져 온다.
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_receiver=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectToolRecvList");
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
        		if (trId == "selectToolRecvList")
        		{
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
        }


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function (obj, e)
        {
        	var rtnArray = new Array();
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };


        this.btn_addRow_ds_receiver_onclick = function(obj,e)
        {
        };

        this.grd_receiver_onexpandup = function(obj,e)
        {
        };

        this.TOM00102P_ontimer = function(obj,e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.TOM00102P_ontimer,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_receiver.addEventHandler("onexpandup",this.grd_receiver_onexpandup,this);
        };
        this.loadIncludeScript("TOM00104P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
