(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM011000P");
            this.set_titletext("상세내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(556,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Info", this);
            obj._setContents("<ColumnInfo><Column id=\"INFODATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPLAN\" type=\"STRING\" size=\"256\"/><Column id=\"PCSRSLT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_save00","21","21","516","157",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","0","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("0");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DATE");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_00","124","5",null,"20","10",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("210115F002-1-FG00-002-001");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label06","0","31","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("2");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_01","124","36",null,"20","10",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label11","0","62","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("4");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_02","124","67",null,"20","10",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("제품");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label16","0","93","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("6");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ITEMCODE");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_03","124","98",null,"20","10",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("PCS");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label16_00","0","124","22.96%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("8");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ITEMNAME");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_03_00","124","129",null,"20","10",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("PCS");
            this.div_save00.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","div_save00:13","516","191",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_list");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"CREATOR\"/><Cell col=\"1\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell col=\"2\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell col=\"3\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell col=\"4\" text=\"금액\" tooltiptext=\"OSPDAY04AMOUNT\"/></Band><Band id=\"body\"><Cell text=\"bind:CREATOR\"/><Cell col=\"1\" text=\"bind:PCS\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PNL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:MM\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:AMOUNT\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",556,450,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_save00.form.edt_00","value","ds_Info","INFODATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_save00.form.edt_01","value","ds_Info","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_save00.form.edt_02","value","ds_Info","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_save00.form.edt_03","value","ds_Info","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_save00.form.edt_03_00","value","ds_Info","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PCM011000P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 상세내역
         * 파일명 		: PCM011000P.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.04.27
         *
         * 설  명		: 공통팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.27	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initParam();
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "getTransitAreaList":


        			break;
        		default:

        			break;
        	}
        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_initParam = function()
        {
        	var sArgArr = this.parent.objList;
        	this.ds_Info.setColumn(0,"INFODATE", sArgArr[0]);//일자
        	this.ds_Info.setColumn(0,"PRODUCTIONTYPE", sArgArr[1]);//생산구분
        	this.ds_Info.setColumn(0,"CUSTOMERNAME", sArgArr[2]);//고객사
        	this.ds_Info.setColumn(0,"PRODUCTDEFID", sArgArr[3]);//품목ID
        	this.ds_Info.setColumn(0,"PRODUCTDEFNAME",sArgArr[4]);//품목명

        	this.ds_Info.setColumn(0,"PRODUCTDEFVERSION",sArgArr[5]);//Rev.
        	this.ds_Info.setColumn(0,"PCSPLAN",sArgArr[6]);//PCS계획
        	this.ds_Info.setColumn(0,"PCSRSLT",sArgArr[7]);//PCS실적

        	this.ds_list.clearData();

        	var sSvcID 			= "selectinputlotrecordperplangridDetail";
        	var sController 	= "/pcm01100/selectinputlotrecordperplangridDetail.do";
        	var sInDatasets 	= "INPUT=ds_Info";
        	var sOutDatasets 	= "ds_list=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        this.btn_close_onclick = function (obj, e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_list.addEventHandler("onrowposchanged",this.ds_messageList_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM011000P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
