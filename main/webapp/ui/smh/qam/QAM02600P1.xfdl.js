(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02600P1");
            this.set_tooltiptext("TABCURRENTBYITEM");
            this.set_titletext("품목별 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOCALEDIV\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LINKPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INTERPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODSHAPETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"P_ROOTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"P_EXCEPTDEFECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectStatusByProductList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PCSDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSDEFECTOCC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREAINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTOCC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTOCC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_defectStatusByProductList","20","20",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectStatusByProductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"170\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"65\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"제품타입\" tooltiptext=\"PRODUCTSHAPE\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"5\" rowspan=\"2\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/><Cell col=\"6\" colspan=\"2\" text=\"PCS 불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPCSDEFECTRATE\"/><Cell col=\"8\" colspan=\"2\" text=\"면적당(㎡) 불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPAREADEFECTRATE\"/><Cell col=\"10\" colspan=\"2\" text=\"금액 불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPRICEDEFECTRATE\"/><Cell col=\"12\" colspan=\"3\" text=\"투입량\" cssclass=\"cell_headMaster,cell_end\"/><Cell row=\"1\" col=\"6\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"7\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"8\" text=\"불량M2\" tooltiptext=\"DEFECTM2\"/><Cell row=\"1\" col=\"9\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"10\" text=\"불량금액\" tooltiptext=\"DEFECTPRICE\"/><Cell row=\"1\" col=\"11\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"12\" text=\"PCS\"/><Cell row=\"1\" col=\"13\" text=\"M2 수량\"/><Cell row=\"1\" col=\"14\" text=\"금액\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTSHAPE\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PCSDEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"bind:PCSDEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\"/><Cell col=\"8\" text=\"bind:AREADEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"##0.#0\"/><Cell col=\"9\" text=\"bind:AREADEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\"/><Cell col=\"10\" text=\"bind:PRICEDEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"11\" text=\"bind:PRICEDEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\"/><Cell col=\"12\" text=\"bind:PCSINPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"13\" text=\"bind:AREAINPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#0\"/><Cell col=\"14\" text=\"bind:PRICEINPUTQTY\" cssclass=\"cell_end\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;PCSDEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:nexacro.round((dataset.getSum(&quot;PCSDEFECTQTY&quot;)/dataset.getAvg(&quot;PCSINPUTQTY&quot;))*100,2)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;AREADEFECTQTY&quot;)\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"9\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:nexacro.round((dataset.getSum(&quot;AREADEFECTQTY&quot;)/dataset.getAvg(&quot;AREAINPUTQTY&quot;))*100,2)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;PRICEDEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"11\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:nexacro.round((dataset.getSum(&quot;PRICEDEFECTQTY&quot;)/dataset.getAvg(&quot;PRICEINPUTQTY&quot;))*100,2)\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM02600P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02600P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수율현황>>불량별 현황
         * 파일명         : QAM02600M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.06.26
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.26   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
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
        	this.ds_search.clearData();
        	this.ds_search.copyData(this.opener.ds_search);
        	this.fn_search();
        	//공정수입 검사 현황 정보를 셋팅
        	//var rtnValue = this.opener.fv_rtnValue;
        	//this.opener.fv_rtnValue = "";
        	//this.qamfn_setDataset(rtnValue, this.ds_search, "");

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_defectStatusByProductList.clearData();
            //this.fn_setSearchParam();

            var sSvcID        = "selectDefectStatusByProductList";
            var sController   = "/qam02600/selectDefectStatusByProductList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectStatusByProductList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        	    if (trId == "selectDefectStatusByProductList")
                {
        			if (this.ds_defectStatusByProductList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("QAM02600P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
