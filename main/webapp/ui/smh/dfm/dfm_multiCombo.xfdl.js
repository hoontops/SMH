(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_multiCombo");
            this.set_titletext("Multi Select Combo");
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_initData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectData", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edt_comboResult","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("선택");
            obj.set_padding("0px 21px 0px 8px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dropcombo",null,"0","21",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px none rgba(128,128,128,1)");
            obj.set_background("url(\'theme://images/cmb_WF_Drop.png\') no-repeat center center");
            obj.set_cssclass("btn_com_basic");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_data","0","21","150","200",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btn_all_check","5","5","68","19",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("1");
            obj.set_text("전체선택");
            obj.set_cssclass("btn_WF_basic");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Button("btn_select_data",null,"5","51","19","4",null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Grid("grd_data","0","29",null,null,"0","0",null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_initData");
            obj.set_border("2px solid rgba(51,51,51,1), 0px none rgba(204,204,204,1), 0px none rgba(204,204,204,1), 0px none rgba(204,204,204,1)");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"152\"/></Columns><Rows><Row size=\"21\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"center\" verticalAlign=\"middle\" padding=\"0px -10px 0px -10px\" border=\"1px none rgba(128,128,128,1)\"/><Cell col=\"1\" text=\"bind:VALUE\" border=\"1px none rgba(128,128,128,1)\"/></Band></Format></Formats>");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Button("btn_hide","0","0",null,null,"22","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_border("1px none #808080");
            obj.set_cssclass("btn_com_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","22","30","5",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","119","22","30","5",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1","46","30","5",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","119","46","30","5",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1","21","5","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","144","22","5","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",150,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("dfm_multiCombo.xfdl", function() {
        /***************************************************************************************
         * 시스템명	 	: IFC MES시스템
         * 업무명 		: UI공통개발
         * 파일명 		: dfm_multiCombo.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.11.19
         *
         * 설  명		: 멀티셀렉트 콤보박스
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.11.19	진성하		최초생성(참조)
         * 2021.05.11	김진현		VALUE 대문자구현 및 전체선택시 다른값 선택 안되도록 COPY 사용
         * 2021.06.18   김진현     전체선택시 체크 되도록 수정
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /***************************************************************************************
         * 1. 필수 include(필수)
         ****************************************************************************************/
        // include "lib::comLib.xjs";


        /***************************************************************************************
         * 2. FORM 변수 선언 영역
         ****************************************************************************************/
        var allChkIdx = 0;

        /***************************************************************************************
         * 3. FORM 정의
         ****************************************************************************************/

        /* 멀티콤보 데이터 초기화 */
        this.fn_init_multicombo_data = function (objDs)
        {

        	this.ds_initData.clearData();
        	this.ds_initData.appendData(objDs);
        	this.ds_selectData.clearData();



        	this.fn_initText();

        	var v_max_length = this.ds_initData.getMax("String(value).length");

        	var v_grid_checkbox_width = 20;
        	var v_grid_valuecolumn_width = (v_max_length * 8) + 10;

        	this.pdiv_data.form.grd_data.setFormatColProperty(0, "size", v_grid_checkbox_width);

        	if ((v_grid_checkbox_width + v_grid_valuecolumn_width) > this.getOffsetWidth())
        	{
        		this.pdiv_data.form.grd_data.setFormatColProperty(1, "size", v_grid_valuecolumn_width);
        		this.pdiv_data.set_width((v_grid_checkbox_width + v_grid_valuecolumn_width) + 2);
        	}
        	else
        	{
        		this.pdiv_data.form.grd_data.setFormatColProperty(1, "size", (this.getOffsetWidth() - (v_grid_checkbox_width) - 2));
        		this.pdiv_data.set_width(this.getOffsetWidth());
        	}

        	var dsRowCnt = this.ds_initData.getRowCount();
        	this.pdiv_data.set_height(((dsRowCnt) * 22) + 30);
        };


        /***************************************************************************************
         * 4. 함수 처리
         ****************************************************************************************/

        /* 초기 선택된 값이 있을때 text값 세팅 */
        this.fn_initText = function ()
        {
        	// (21.06.18) 한건 선택된 상태이면 그 값으로 설정
        	var nChkCnt = this.ds_initData.getCaseCount("CHK=='1'");

        	var findRow = this.ds_initData.findRow(0, 1);

        	// (21.06.18) 한건 선택된 상태이면 그 값으로 설정
        	if(nChkCnt == 1)
        	{
        		this.edt_comboResult.set_value(this.ds_initData.getColumn(findRow,"VALUE"));
        		return;
        	}

        	if (findRow != -1)
        	{
        		console.log("다중 선택");
        		var val = "";

        		for(var i = 0; i < this.ds_selectData.rowcount; i++)
        		{
        			val += this.nfn_nvl(this.ds_selectData.getColumn(i, "VALUE"), "") + ",";
        		}

        		if(val.length > 0)
        			val = val.substring(0, val.length-1);

        		this.edt_comboResult.set_value(val);
        	}

        	// 초기화 필요
        	if (findRow == -1)
        	{
        		this.edt_comboResult.set_value("데이터 미 선택");
        	}

        };


        /***************************************************************************************
         * 5. 이벤트 처리
         ****************************************************************************************/

        /* 콤보 펼치기 버튼 온클릭 이벤트 */
        this.btn_dropcombo_onclick = function (obj, e)
        {
        	var nLeft = system.screenToClientX(nexacro.getApplication().mainframe, system.clientToScreenX(this.edt_comboResult, 0));
        	var nTop = system.screenToClientY(nexacro.getApplication().mainframe, system.clientToScreenY(this.edt_comboResult, 0)) + parseInt(this.edt_comboResult.getOffsetHeight());

        	this.pdiv_data.trackPopup(nLeft, nTop);
        };

        /* 그리드 셀클릭 이벤트 */
        this.pdiv_data_grd_data_oncellclick = function (obj, e)
        {
        	var nIndex = obj.getCellPos();
        	if (nIndex == 0)
        	{
        		// 전체선택의 경우 제외
        		if(this.gfn_isNull(this.ds_initData.getColumn(e.row, 1)))
        		{
        			// 나머지 체크 해제
        			for (var i = 0; i < this.ds_initData.getRowCount(); i++)
        			{
        				// 전체선택의 경우 제외
        				var nCode = this.ds_initData.getColumn(i,1);
        				if(!this.gfn_isNull(nCode))
        				{
        					this.ds_initData.setColumn(i, 0, "0");
        				}
        			}
        		}

        		// (21.06.18) 전체 조회가 체크 된 상태이면 (전체조회 이외의값 선택시)  체크 해제
        		else
        		{
        			// 나머지 체크 해제
        			for (var i = 0; i < this.ds_initData.getRowCount(); i++)
        			{
        				// 전체선택의 경우 제외
        				var nCode = this.ds_initData.getColumn(i,1);
        				if(this.gfn_isNull(nCode))
        				{
        					this.ds_initData.setColumn(i, 0, "0");
        				}
        			}
        		}

        		/*
        		else
        		{
        			trace(" 여기 설정!!!(전)"+this.ds_initData.getColumn(e.row, 0));
        			if (this.ds_initData.getColumn(e.row, 0) == 1)
        			{
        				this.ds_initData.setColumn(e.row, 0, 0);
        			}
        			else
        			{
        				this.ds_initData.setColumn(e.row, 0, 1);
        			}
        			trace(" 여기 설정!!!(후)"+this.ds_initData.getColumn(e.row, 0));
        		}
        		*/
        	}
        	else
        	{
        		return false;
        	}
        };

        /* 전체선택 버튼 온클릭 이벤트 */
        this.pdiv_data_btn_all_check_onclick = function (obj, e)
        {
        	if (obj.text == "전체선택")
        	{
        		obj.set_text("전체해제");
        	}
        	else
        	{
        		obj.set_text("전체선택");
        	}

        	if (allChkIdx == 0)
        	{
        		for (var i = 0; i < this.ds_initData.getRowCount(); i++)
        		{
        			// 전체선택의 경우 제외
        			var nCode = this.ds_initData.getColumn(i,1);
        			if(this.gfn_isNull(nCode))
        			{
        				this.ds_initData.setColumn(i, 0, "0");
        			}
        			//-------------------------------------------
        			else
        			{
        				this.ds_initData.setColumn(i, 0, "1");
        			}
        		}
        		allChkIdx = 1;
        	}
        	else
        	{
        		for (var i = 0; i < this.ds_initData.getRowCount(); i++)
        		{
        			this.ds_initData.setColumn(i, 0, "0");
        		}
        		allChkIdx = 0;
        	}
        };

        /* 확인 버튼 온클릭 이벤트 */
        this.pdiv_data_btn_select_data_onclick = function (obj, e)
        {
        	var filterVal = "CHK==1";

        	this.ds_selectData.clearData();
        	this.ds_initData.filter("");
        	this.ds_initData.filter(filterVal);
        	this.ds_selectData.copyData(this.ds_initData, true);
        	this.ds_initData.filter("");

        	if (this.ds_selectData.getRowCount() == 1)
        	{
        		this.edt_comboResult.set_value(this.ds_selectData.getColumn(0, "VALUE"));
        	}
        	else if (this.ds_selectData.getRowCount() > 0)
        	{
        		console.log("다중 선택");

        		var val = "";

        		for(var i = 0; i < this.ds_selectData.rowcount; i++)
        		{
        			val += this.nfn_nvl(this.ds_selectData.getColumn(i, "VALUE"), "") + ",";
        		}

        		if(val.length > 0)
        			val = val.substring(0, val.length-1);

        		this.edt_comboResult.set_value(val);
        	}
        	else
        	{
        		this.edt_comboResult.set_value("데이터 미 선택");
        	}

        	this.pdiv_data.closePopup();
        };


        /*
         * 멀티 콤보 닫힐때 값 없으면 초기화
         */
        this.pdiv_data_oncloseup = function(obj,e)
        {
        	var filterVal = "CHK==1";

        	this.ds_selectData.clearData();
        	this.ds_initData.filter("");
        	this.ds_initData.filter(filterVal);
        	this.ds_selectData.copyData(this.ds_initData, true);
        	this.ds_initData.filter("");

        	if (this.ds_selectData.getRowCount() == 1)
        	{
        		this.edt_comboResult.set_value(this.ds_selectData.getColumn(0, "VALUE"));
        	}
        	else if (this.ds_selectData.getRowCount() > 0)
        	{
        		console.log("다중 선택");

        		var val = "";

        		for(var i = 0; i < this.ds_selectData.rowcount; i++)
        		{
        			val += this.nfn_nvl(this.ds_selectData.getColumn(i, "VALUE"), "") + ",";
        		}

        		if(val.length > 0)
        			val = val.substring(0, val.length-1);

        		this.edt_comboResult.set_value(val);
        	}
        	else
        	{
        		this.edt_comboResult.set_value("데이터 미 선택");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_dropcombo.addEventHandler("onclick",this.btn_dropcombo_onclick,this);
            this.pdiv_data.addEventHandler("oncloseup",this.pdiv_data_oncloseup,this);
            this.pdiv_data.form.btn_all_check.addEventHandler("onclick",this.pdiv_data_btn_all_check_onclick,this);
            this.pdiv_data.form.btn_select_data.addEventHandler("onclick",this.pdiv_data_btn_select_data_onclick,this);
            this.pdiv_data.form.grd_data.addEventHandler("oncellclick",this.pdiv_data_grd_data_oncellclick,this);
            this.btn_hide.addEventHandler("onclick",this.btn_dropcombo_onclick,this);
        };
        this.loadIncludeScript("dfm_multiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
