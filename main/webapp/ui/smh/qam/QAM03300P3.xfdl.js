(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03300P3");
            this.set_titletext("차트 확대보기");
            this.set_tooltiptext("VIEWENLARGEDCHART");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,1000);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chart", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP1_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUP2_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamOverallStatus", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEARCHGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCNT\" type=\"INT\" size=\"256\"/><Column id=\"NGCNT\" type=\"INT\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RJRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SEARCHGROUP\">2021/06</Col><Col id=\"INSPECTIONCNT\">69</Col><Col id=\"NGCNT\">23</Col><Col id=\"TARGETVALUE\">60</Col><Col id=\"RJRATE\">33.3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"86","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new BasicChart("chartView","20","20",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_qamOverallStatus");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#4c4c4c"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#eaeaea",
            		"linestyle": "1px solid #d5d5d5",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#c9c9c9",
            		"size": "12"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletext": "categoryaxis",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #525252",
            		"ticklinestyle": "1px solid #525252",
            		"boardlinestyle": "1px solid #d0d0d0"
            	},
            	"seriesset": [
            	  {
            		"id": "series0",
            		"titletext": "series",
            		"barvisible": true,
            		"barsize": "65",
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 12pt '맑은 고딕'",
            		"valuecolumn": "bind:INSPECTIONCNT"
            	  },
            	  {
            		"id": "series1",
            		"titletext": "series",
            		"barvisible": true,
            		"barsize": "65",
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 12pt '맑은 고딕'",
            		"valuecolumn": "bind:NGCNT"
            	  },
            	  {
            		"id": "series2",
            		"titletext": "series",
            		"barvisible": true,
            		"barsize": "65",
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 12pt '맑은 고딕'",
            		"valuecolumn": "bind:TARGETVALUE"
            	  },
            	  {
            		"id": "series3",
            		"titletext": "series",
            		"barvisible": true,
            		"barsize": "65",
            		"itemtextvisible": true,
            		"itemtextcolor": "#003860",
            		"itemtextfont": "bold 12pt '맑은 고딕'",
            		"valuecolumn": "bind:RJRATE"
            	  }
            	],
            	"valueaxes": [
            	  {
            		"id": "valueaxis0",
            		"titletext": "valueaxis",
            		"boardlinevisible": true,
            		"boardlinestyle": "1px solid #d0d0d0",
            		"labeltextcolor": "#6f6f6f",
            		"labeltextfont": "10pt/normal '맑은 고딕'",
            		"titletextcolor": "#4c4c4c",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"ticklinestyle": "1px solid #525252",
            		"axislinestyle": "1px solid #525252"
            	  }
            	]
            });
            obj.set_categorycolumn("bind:TITLE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,1000,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03300P3.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM03300P3.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM03300P3.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 차트 확대보기 팝업
         * 파일명 		: QAM03300P3.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.06.28
         *
         * 설  명		: 차트 확대보기 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.28	권혜영   	최초작성
         *---------------------------------------------------------------------------------------

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

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
         this.fv_objContents = {};
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
         * 7. 기타 함수 시작
         **************************************************************************/
        //최초 호출되는 초기화 함수
        this.fn_formInit = function ()
        {
        	//this.fn_removeChart();
        	this.fn_createChart();
        };

        /*
         * 차트 제거
         */
        this.fn_removeChart = function()
        {
        	var objRtn = this.removeChild(this.chartView.name);

        	if(objRtn != null) {
        		objRtn.destroy();
        		objRtn= null;
        	}
        };

        /*
         * 차트 생성 >>> 현재 사용하지 않음 (제거 후 생성 로직 안씀)
         * 차트를 제거하고 새로 생성할 경우에는
           => set_categorycolumn > _setContents > set_binddataset > show 순으로 해줌.
         */
        this.fn_createChartBackup = function()
        {
        	//BasicChart 생성
        	var objBasicChart = new BasicChart();
        	var objId = "chartView";

        	objBasicChart.init(objId, 20, 20, null, null, 20, 20); //left, top, width, height, right, bottom

        	//BasicChart  설정
        	objBasicChart.set_categorycolumn("bind:" + this.parent.bindCategoryColumn);
        	this.addChild(objId, objBasicChart);

        	objBasicChart.set_border("1px solid #e8e8e8");
        	objBasicChart._setContents(this.parent.contents);

        	objBasicChart.set_binddataset(this.parent.objDs);
        	objBasicChart.show();
        };

        /*
         * 차트 생성
         * 생성되어 있는 차트를 새로 그릴 경우에는
           => set_categorycolumn > set_binddataset > set_contents > show 순으로 해줌.
         */
        this.fn_createChart = function()
        {
        	var pObjDs 				= this.parent.objDs;
        	var pContents 			= this.parent.contents;
        	var pObjChart 			= this.parent.objChart;
        	var pCategoryColumn 	= this.parent.bindCategoryColumn;

        	//현재창 contents 설정
        	this.chartView.set_border("1px solid #e8e8e8");

        	this.chartView.set_categorycolumn("bind:" + pCategoryColumn);
        	this.chartView.set_binddataset(pObjDs);
        	this.chartView.set_contents(pContents);

        	this.chartView.show();
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
        };
        this.loadIncludeScript("QAM03300P3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
