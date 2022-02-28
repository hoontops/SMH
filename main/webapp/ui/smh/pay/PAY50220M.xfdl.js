(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY50220M");
            this.set_titletext("급여명세서-상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_datailData", this);
            obj._setContents("<ColumnInfo><Column id=\"PAYOUT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PAY_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EARN_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DED_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIFF_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INFO44\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSPAY_RUN_RESULT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_income", this);
            obj._setContents("<ColumnInfo><Column id=\"ELE_VALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ded", this);
            obj._setContents("<ColumnInfo><Column id=\"DED_ELE_VALUE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DED_MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">QCAction003</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">QCAction004</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">3333</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"value\">444</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"value\">5555</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"value\">6666</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"value\">777</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"value\">8888</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"value\">999</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_clear1",null,"8","60","20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("출력");
            obj.set_tooltiptext("출력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1_00",null,"8","60","20","66",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","36",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0.00%","0","16.74%","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_name","17.18%","5","15.42%","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("성명");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","33.26%","0","16.74%","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_orgName","50.33%","5","14.98%","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("부서");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","66.52%","0","16.74%","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_rank","83.59%","5","14.43%","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("직급");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Div("div_00","0","69",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","-1","161","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("급여내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("급여내역");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","33",null,"94","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_scrolltype("none");
            obj.set_selecttype("cell");
            obj.set_binddataset("ds_datailData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"지급년월\" tooltiptext=\"지급년월\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:PAYOUT_DATE\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"급여유형\" tooltiptext=\"급여유형\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" expandshow=\"hide\" expandsize=\"16\" text=\"bind:PAY_TYPE_NAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"원천징수비율\"/><Cell col=\"5\" text=\"bind:INFO44\" displaytype=\"normal\" edittype=\"none\" maskedittype=\"number\" maskeditpostfixtext=\"%\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"지급총액\" tooltiptext=\"지급총액\"/><Cell row=\"1\" col=\"1\" displaytype=\"currency\" text=\"bind:EARN_TOT\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"공제총액\" tooltiptext=\"공제총액\"/><Cell row=\"1\" col=\"3\" displaytype=\"currency\" text=\"bind:DED_TOT\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"실지급액\" tooltiptext=\"실지급액\"/><Cell row=\"1\" col=\"5\" displaytype=\"currency\" text=\"bind:DIFF_TOT\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"급여계좌\" tooltiptext=\"급여계좌\"/><Cell row=\"2\" col=\"1\" text=\"bind:BANK_NAME\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"계좌번호\" tooltiptext=\"계좌번호\"/><Cell row=\"2\" col=\"3\" text=\"bind:BANK_ACCOUNT\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\"/><Cell row=\"2\" col=\"5\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_inCome","0","132","49.8%",null,null,"34",null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_income");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소득항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:MEANING\"/><Cell col=\"1\" text=\"bind:ELE_VALUE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_deduction",null,"132","49.8%",null,"0","34",null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_ded");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\"/><Cell col=\"1\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:DED_MEANING\"/><Cell col=\"1\" text=\"bind:DED_ELE_VALUE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static16_01","15",null,null,"24","15","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("※ 귀하의 노고에 감사 드립니다.");
            obj.set_cssclass("sta_font_black");
            this.div_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_subTitle.form.edt_name","value","ds_basicInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_subTitle.form.edt_orgName","value","ds_basicInfo","DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_subTitle.form.edt_rank","value","ds_basicInfo","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PAY50220M.xfdl", function() {

        //급여리스트 seq
        var seq;


        this.fn_init = function(obj, e){
            trace('50220 detail init');
        	this.gfn_detail_init(this);
        }


        this.fn_anyWhere = function( oArgs ){

            trace('50220 detail fn_anyWhere');
        	trace(oArgs.ttl);

        	trace("======= request data ===========")
        	trace(oArgs.sds);

        	var rowData = oArgs.sds;
        	seq = rowData;

        	this.basicInfo(); //기본정보
        	this.datail_search(rowData); //상세정보

        }

        this.basicInfo = function() {

        	var sSvcID = "selectBasicInfo";
        	var sController = "/pay50220/selectBasicInfo.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_basicInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        this.datail_search = function(data) {




        	this.ds_datailData.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "HJSPAY_RUN_RESULT_SEQ", data);
        	//this.ds_search.setColumn(0, "LANGUAGE", 'US');


        	var sSvcID = "selectDetailData";
        	var sController = "/pay50220/selectDetailData.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_datailData=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        }


        this.div_search_btn_clear1_onclick = function(obj,e){
          //this.sendMsg();
          this.gfn_detail_close(this);
        };


        /* 팝업호출(modal) 버튼 클릭 이벤트 */
        this.btn_popup_onclick = function (obj, e){
        	//var strField = this.gfn_strParameterData(this.ds_list, "code", "value");  //code : parameter 순서 : 1,2....
        	//또는 strField = [$1값][$2값]....[$n값];
        	//var sRptName = "HJSPAYR05211";  // HJSTXR00090.mrd
        	//var sRptPath = "";
        	//strField = "[SELSC] [2020/12] [2020/12] [] [6623]";

        	var oArg = {
        		sRptPath : "",
        		sRptName : "HJSPAYR05211",  // HJSTXR00090.mrd
        		strField : "["+seq+"]",
        		bModalless : false
        	};
        	//this.alert(seq);
        	var sOption = "titletext=급여명세서,modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
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
        		if (trId == "selectDetailData")
        		{
        			trace("selectDetailData !!!!!!!!!!!!!!!!!!!!! complete!!!!!!!!!!!!!");
        			this.ds_search.clearData();
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "HJSPAY_RUN_RESULT_SEQ", seq);


        			var sSvcID = "selectDetailInAndDed";
        			var sController = "/pay50220/selectDetailInAndDed.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_income=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}

        		if (trId == "selectDetailInAndDed")
        		{
        			trace("selectDetailInAndDed !!!!!!!!!!!!!!!!!!!!! complete~~~~~");
        			this.ds_search.clearData();
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "HJSPAY_RUN_RESULT_SEQ", seq);


        			var sSvcID = "selectDetailDed";
        			var sController = "/pay50220/selectDetailDed.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_ded=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}


        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_clear1.addEventHandler("onclick",this.btn_popup_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_clear1_00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_name.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.edt_orgName.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname00_onchanged,this);
            this.div_00.form.grd_inCome.addEventHandler("onselectchanged",this.grd_batchCtrls_onselectchanged,this);
            this.div_00.form.grd_deduction.addEventHandler("onselectchanged",this.grd_batchCtrls_onselectchanged,this);
        };
        this.loadIncludeScript("PAY50220M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
