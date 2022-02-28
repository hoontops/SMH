(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01600P1");
            this.set_titletext("출하검사 NCR 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssue", this);
            obj._setContents("<ColumnInfo><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRISSUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20","270","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("출하검사 NCR 팝업");
            obj.set_cssclass("sta_WF_title");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("QUALITYSPECIFICATIONISSUE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitleBasInfo","20","sta_title:5","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이상발생 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ABNORMALINFO");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"70","28","btn_close:5","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Div("div_basInfo","20","93",null,"187","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_ncrissuedate","0","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("NCR 발행일시");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NCRISSUEDATE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ncrissuedate","sta_ncrissuedate:5","5","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_parentlotid","50%","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("모Lot");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PARENTLOT");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_parentlotid","sta_parentlotid:5","5","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_reasoncode","0%","155","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("사유코드명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("REASONCODENAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reasoncode","sta_reasoncode:5","161","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_ngcount","0","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("6");
            obj.set_text("NG횟수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NGCOUNT");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ngcount","sta_ngcount:5","36","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_lotid","50%","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("8");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_defectrate","50%","124","9.84%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_text("불량률");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEFECTRATE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_defectrate","sta_defectrate:5","129","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","62","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5","67","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefname","50%","62","10%","20%",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("TXTPRODUCTDEFNAME2");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefname","sta_productdefname:5","67","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("14");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_description","50%","155","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("15");
            obj.set_text("설명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DESCRIPTION");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_description","sta_description:5","161","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("16");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_defectcodename","0","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("17");
            obj.set_text("불량코드명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEFECTCODENAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_defectcodename","sta_defectcodename:5","98","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("18");
            obj.set_usesoftkeyboard("false");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionqty","50%","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("20");
            obj.set_text("검사 수량");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NCRINSPECTIONQTY");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inspectionqty","sta_inspectionqty:5","98","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("19");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5","36","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("21");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_defectqty","0.00%","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("22");
            obj.set_text("불량 수량");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEFECTQTY");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_defectqty","sta_defectqty:5","129","39%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("23");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Div("div_ncrProcess","20","div_basInfo:10",null,null,"20","58",null,null,"570",null,this);
            obj.set_taborder("5");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,930,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basInfo.form.edt_ncrissuedate","value","ds_qamIssue","NCRISSUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basInfo.form.edt_parentlotid","value","ds_qamIssue","PARENTLOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basInfo.form.edt_ngcount","value","ds_qamIssue","NGCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basInfo.form.edt_productdefname","value","ds_qamIssue","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basInfo.form.edt_productdefid","value","ds_qamIssue","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basInfo.form.edt_inspectionqty","value","ds_qamIssue","INSPECTIONQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basInfo.form.edt_defectcodename","value","ds_qamIssue","DEFECTCODENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basInfo.form.edt_lotid","value","ds_qamIssue","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basInfo.form.edt_defectqty","value","ds_qamIssue","DEFECTQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basInfo.form.edt_defectrate","value","ds_qamIssue","DEFECTRATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_basInfo.form.edt_reasoncode","value","ds_qamIssue","REASONCODENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basInfo.form.edt_description","value","ds_qamIssue","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01600P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01600P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01600P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: CAR 요청팝업
         * 파일명 		: QAM01600P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.08
         *
         * 설  명		: 품질관리 > 수입검사 > 출하검사이상발생 (AS-IS : 품질관리 > 출하검사 > 출하검사 이살발생)
         * 				  품질 규격 측정값중 NG가 발생한 항목들에 대해 CAR 요청을 할 수 있다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.06	권혜영   	최초작성
         * 2021.08.18   20210818    메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//하위 NCR 진행현황 DIV form의 save 함수 호출
        	this.div_ncrProcess.form.fn_save();
        };

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

        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_qamIssue.clearData();
        	this.ds_qamIssue.addRow();

        	//rowPos
        	this.ds_qamIssue.copyRow(0, this.parent.ds_qamIssue, this.parent.rowPos);
        	this.qamfn_setCompControl(this.div_basInfo.form.components, "disable");

        	/*
        	 * div 동적으로 폼 연결 시 호출 parameter
        	 * 	- dataset
        	 *	- 부모창 programID
        	 */
        	this.div_ncrProcess.set_url("qam::QAM01200D1.xfdl");
        	this.div_ncrProcess.form.fn_formInit(this.ds_qamIssue, "QAM01600", this.MENU_AUTH);

        	//20210818 메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
        	this.qamfn_ncrMenuAuth(this.INS_AUTH_YN, this.UPD_AUTH_YN, this.DEL_AUTH_YN);
        };

        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        /*
         * 기능 : div 영역에서 save 후에 호출될 함수. 현재 팝업 닫고, opener 새로 검색 (만약에 opener search 안할 경우에는 this.fn_close 호출
         */
        this.fn_closeAndParentSearch = function()
        {
        	this.opener.fn_search();
        	this.close();
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.div_basInfo.form.edt_ncrissuedate.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_parentlotid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_reasoncode.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_ngcount.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_defectrate.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdefid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdefname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_description.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_defectcodename.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_inspectionqty.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_lotid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_defectqty.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
        };
        this.loadIncludeScript("QAM01600P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
