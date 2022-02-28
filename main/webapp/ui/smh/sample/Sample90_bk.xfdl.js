(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample90");
            this.set_titletext("Report");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">QCAction003</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">QCAction004</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"value\">테스트</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"value\">공통</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"value\">프레임</Col></Row><Row><Col id=\"code\">d</Col><Col id=\"value\">전문</Col></Row><Row><Col id=\"code\">e</Col><Col id=\"value\">딤딩</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"value\">화이팅</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">a</Col><Col id=\"value\">테스트</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"value\">공통</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"value\">프레임</Col></Row><Row><Col id=\"code\">d</Col><Col id=\"value\">전문</Col></Row><Row><Col id=\"code\">e</Col><Col id=\"value\">딤딩</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"value\">화이팅</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">atchFileId</Col><Col id=\"value\">5</Col></Row><Row><Col id=\"code\">b</Col><Col id=\"value\">공통</Col></Row><Row><Col id=\"code\">c</Col><Col id=\"value\">프레임</Col></Row><Row><Col id=\"code\">d</Col><Col id=\"value\">전문</Col></Row><Row><Col id=\"code\">e</Col><Col id=\"value\">딤딩</Col></Row><Row><Col id=\"code\">f</Col><Col id=\"value\">화이팅</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","0","1","1015","57",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Report","140","6","172","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Report 호출(SQL방식)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popup","638","6","172","37",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팝업호출(modal)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","482","6","142","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("팝업으로 호출하기 =>");
            this.addChild(obj.name, obj);

            obj = new Div("div_report","0","74","1024","694",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("리포트");
            obj.set_url("common::com_report.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","9","6","103","37",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("SQL방식");
            obj.set_font("bold 11pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_report.xfdl");
        };
        
        // User Script
        this.registerScript("Sample90_bk.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Report viewer 관리
         * 파일명 		: rexpertViewer.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.09.08
         *
         * 설  명		: 리포트 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        //include "lib::comLib.xjs"
        //include "lib::comReport.xjs"
        // 리포트 전용 라이브러리 include 처리
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_strXML = "";


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	/*화면 호출시 리포트를 바로 보여주고자 할 때 아래와 같이 처리*/
        	// rexpert OofData 생성
        	//var strField = this.gfn_fieldData(this.ds_list, "code", "value");

        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	//var strXML = this.gfn_getOofSqlData("/oracle_sample.ozr", strField, "report", "ratetest");
        	//this.fv_strXML = strXML;
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /*-------------------------------------------------------------------------
         * 설명      : 팝업 콜백 함수
         *------------------------------------------------------------------------*/
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	trace("sPopupId ==> " + sPopupId + ", Variant ==>" + Variant);
        	switch (sPopupId)
        	{
        		case "rexpertViewer":
        			break;
        		default:
        			break;
        	}
        };

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /* clipReport 호출(SQL방식) 버튼 클릭 */
        this.btn_Report_onclick = function (obj, e)
        {
        	// rexpert OofData 생성
        	var strField = this.gfn_strParameterData(this.ds_list, "code", "value");  //code : parameter 순서 : 1,2....
        	trace("strField-->"+strField);  //[$1값][$2값]....[$n값];strField = "[QCAction003][QCAction004]"
        	//또는 strField = [$1값][$2값]....[$n값];
        	var sRptName = "test.mrd";
        	var sRptPath = "/bas/";

        	this.div_report.form.fn_WebBrowserCall(sRptPath, strField, sRptName);
        };

        /* 팝업호출(modal) 버튼 클릭 이벤트 */
        this.btn_popup_onclick = function (obj, e)
        {
        	var strField = this.gfn_strParameterData(this.ds_list, "code", "value");  //code : parameter 순서 : 1,2....
        	//또는 strField = [$1값][$2값]....[$n값];
        	var oArg = {
        		sRptPath : "/bas/",
        		sRptName : "test.mrd",
        		strField : strField,
        		bModalless : false
        	};
        	var sOption = "titletext=Report modal 실행 샘플,modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };


        /* 팝업호출(modeless) 버튼 클릭 이벤트 */
        this.btn_popup00_onclick = function (obj, e)
        {
        	// rexpert OofData 생성
        	var strField = this.gfn_strParameterData(this.ds_list, "code", "value");
        	//또는 strField = [$1값][$2값]....[$n값];
        	var oArg = {
        		sRptPath : "/bas/",
        		sRptName : "test.mrd",
        		strField : strField,
        		bModalless : true
        	};
        	// 사이즈 조절이 필요할 때는 autosize옵션과 함께 width, height 값으로 처리.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Report 샘플,modeless=true";
        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };



        /////////하단 무시////////
        /* clipReport 호출(XML방식) 버튼 클릭 */
        this.btn_clipReportXML_onclick = function (obj, e)
        {
        	/*********************************************************************/
        	/*************************** 일반 case ******************************/
        	/*********************************************************************/
        	// /* webbrowser onloadcompleted 이후 호출 가능 */
        	// /* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	// var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list);
        	//
        	// //rexpert 호출
        	// this.div_report.fn_callReport(strXML);


        	/*********************************************************************/
        	/********************* param 값 사용시 case *************************/
        	/*********************************************************************/

        	// XML방식 사용시 rexpert OofData 생성
        	var arrFieldList = [];
        	arrFieldList.push(["param1", "담당자"]);
        	arrFieldList.push(["param2", "홍길동"]);
        	arrFieldList.push(["param3", "결재자"]);
        	arrFieldList.push(["param4", "이순신"]);

        	/*case 2 - webbrowser onloadcompleted 이후 호출 가능*/
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list, arrFieldList);
        	trace(strXML);
        	// rexpert 호출
        	this.div_report.form.fn_callReport(strXML);
        };

        /* 팝업호출(modal) 버튼 클릭 이벤트 (XML방식) */
        this.btn_popup01_onclick = function (obj, e)
        {
        	// rexpert OofData 생성
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list);

        	var oArg = {
        		arg1 : "타이틀 보이기",
        		strXML : strXML
        	};
        	var sOption = "titletext=Report 샘플,modeless=false";
        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /* 팝업호출(modeless) 버튼 클릭 이벤트(XML방식) */
        this.btn_popup02_onclick = function (obj, e)
        {
        	// rexpert OofData 생성
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", this.ds_list);

        	var oArg = {
        		arg1 : "타이틀 보이기",
        		strXML : strXML
        	};
        	// alert(oArg[1]);

        	// 사이즈 조절이 필요할 때는 autosize옵션과 함께 width, height 값으로 처리.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Report 샘플,modeless=true";

        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };


        /* 버튼 클릭 이벤트 (XML방식- Multi) */
        this.btn_clipReportXML00_onclick = function (obj, e)
        {
        	var objDsList = [this.ds_list, this.ds_list00, this.ds_list01];

        	/*case 2 - webbrowser onloadcompleted 이후 호출 가능*/
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", objDsList);


        	// rexpert 호출
        	this.div_report.form.fn_callReport(strXML);
        };


        /* 팝업호출(modal) 버튼 클릭 이벤트 (XML방식- Multi) */
        this.btn_popup03_onclick = function (obj, e)
        {
        	var objDsList = [this.ds_list, this.ds_list00, this.ds_list01];

        	// rexpert OofData 생성
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", objDsList);

        	var oArg = {
        		arg1 : "타이틀 보이기",
        		strXML : strXML
        	};
        	// alert(oArg[1]);

        	var sOption = "titletext=Report 샘플,modeless=false";

        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /* 팝업호출(modeless) 버튼 클릭 이벤트(XML방식- Multi) */
        this.btn_popup04_onclick = function (obj, e)
        {
        	var objDsList = [this.ds_list, this.ds_list00, this.ds_list01];

        	// rexpert OofData 생성
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofXMLData("/oracle_sample.ozr", objDsList);

        	var oArg = {
        		arg1 : "타이틀 보이기",
        		strXML : strXML
        	};
        	// alert(oArg[1]);

        	// 사이즈 조절이 필요할 때는 autosize옵션과 함께 width, height 값으로 처리.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Report 샘플,modeless=true";

        	this.gfn_reportPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        }
        ;


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_Report.addEventHandler("onclick",this.btn_Report_onclick,this);
            this.btn_popup.addEventHandler("onclick",this.btn_popup_onclick,this);
        };
        this.loadIncludeScript("Sample90_bk.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
