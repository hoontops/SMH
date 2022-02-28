(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA01310P");
            this.set_titletext("파일다운로드");
            this.set_cssclass("form_PopupBg");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,291);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_file","1.25%","19",null,"225","1.25%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("common::com_file_down_b2.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"256","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"0","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,291,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_file_down_b2.xfdl");
        };
        
        // User Script
        this.registerScript("CMSA01310P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 대륜E&S 빌링시스템
         * 업무명 		: 파일 업로드 관리
         * 파일명 		: cmsa01200P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 파일 다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.03.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.div_file.form.jobSysCd = this.parent.arg_jobSysCd;
        	this.div_file.form.atchSrcKey = this.parent.arg_atchSrcKey;
        	this.div_file.form.atchTyCd = this.parent.arg_atchTyCd;
        	this.div_file.form.tableName = this.parent.arg_tableName;

        	this.nfn_formInit(obj);

        	this.div_file.form.fn_search();
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
        		if (trId.substring(0, 6) == "select")
        		{
        			alert("조회에 실패하였습니다." + errMsg + ".." + trId);
        		}
        		else
        		{
        			alert(errMsg);
        		}
        	}
        	else
        	{
        	}
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        /**
         * 5.1 (필수) Transaction 요청 처리 함수
         */

        /**
         * 5.2 (필수) CallBack 처리
         */
        /* callBack함수(strSvcId - 서비스 아이디, nErrorCode - 에러코드, strErrorMsg - 에러메시지) */
        // 조회 후 호출되는 함수
        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}
        	else
        	{
        		switch (strSvcId)
        		{
        			case "search":
        				break;
        			case "completeFileUpload":
        				trace(this.div_file.form.ds_file.saveXML());
        				break;
        			default:
        				break;
        		}
        	}
        };

        this.btn_close_onclick = function (obj, e)
        {
        	this.close();
        };

        this.btn_sel_onclick = function (obj, e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMSA01310P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
