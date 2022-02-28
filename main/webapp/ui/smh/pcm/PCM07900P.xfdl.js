(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07900P");
            this.set_titletext("포장실적등록_Inv No 팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_invoice", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INVHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"POSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"POETC\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"SUM\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainChk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"COMP\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERMODELNM\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERPRODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOXSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CARDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACKNO\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"PONO\" type=\"STRING\" size=\"256\"/><Column id=\"REV\" type=\"STRING\" size=\"256\"/><Column id=\"DNO\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"ASN\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SUMPCS\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_USER\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"CREATER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainReg", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dcCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainSre", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGHDRID\" type=\"STRING\" size=\"256\"/><Column id=\"INVNO\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CARDQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"47","24","10","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("삭제");
            obj.set_tooltiptext("ERASE");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_summary","10","10","39","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("합계");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SUM");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("msk_sum","59","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_format("!#,##9");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_use","149","10","39","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("8CD6983793804615A4B87B0E59AA4DA0");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("msk_use","198","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_format("!#,##9");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_remain","288","10","39","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("잔여");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REMAIN");
            this.div_search.addChild(obj.name, obj);

            obj = new MaskEdit("msk_remain","337","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_format("!#,##9");
            obj.set_textAlign("right");
            obj.set_readonly("true");
            obj.set_displaynulltext("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"47","24","btn_delete:3","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("저장");
            obj.set_tooltiptext("SEARCH_BUTTON");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_invNo",null,"10","130","20","btn_save:10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("210125S-BI-31");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_remain00","434","10",null,"20","edt_invNo:5",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("INVOICE NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","64","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","66","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_invoiceTitle","20","62","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("lnvoice");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INVOICE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_invoice","sta_invoiceTitle:0","62","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_invoice","20","98",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_invoice");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"260\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"PO No\" tooltiptext=\"PONO\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"순번\" tooltiptext=\"MAINTSEQUENCE\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"양품 수량\" tooltiptext=\"GOODQTY\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"출고일\" tooltiptext=\"RECEIPTDATEISSUE\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"D/C\" tooltiptext=\"DC\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"LOT\" tooltiptext=\"LOT\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"기타\" tooltiptext=\"ETCCOST\"/><Cell col=\"8\" text=\"Attribute1\"/><Cell col=\"9\" text=\"Attribute2\"/><Cell col=\"10\" text=\"Attribute3\"/><Cell col=\"11\" text=\"Attribute4\"/><Cell col=\"12\" text=\"Attribute5\"/><Cell col=\"13\" text=\"Inv No\" tooltiptext=\"INVNO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PONO\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\"/><Cell col=\"2\" text=\"bind:POSEQ\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:GOODQTY\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"right\" maskeditformat=\"!#,##9\"/><Cell col=\"4\" text=\"bind:RELEASEDATE\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;calendarcontrol&quot;:&quot;date&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;date&quot;:&quot;none&quot;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:DC\" displaytype=\"expr:comp.parent.fn_gridType() == &apos;R&apos; ? &apos;combocontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.fn_gridType() == &apos;R&apos; ? &apos;combo&apos;: &apos;none&apos;\" combodataset=\"ds_dcCombo\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"6\" text=\"bind:LOTID\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:POETC\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:ATTRIBUTE1\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ATTRIBUTE2\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ATTRIBUTE3\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ATTRIBUTE4\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:ATTRIBUTE5\" displaytype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;editcontrol&quot;:&quot;normal&quot;\" edittype=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;normal&quot;:&quot;none&quot;\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:INVNO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del_ds_invoice",null,"69","26","24","20",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add_ds_invoice",null,"69","26","24","btn_del_ds_invoice:3",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM07900P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM07900P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM07900P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장실적등록_Inv No 팝업
         * 파일명 		: PCM07900P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.03
         *
         * 설  명		: 포장실적 (품목코드 팝업)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.03	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.div_search.form;

        var lv_rtnCols;

        this.parentDc;			// 화면에서 넘어온 주차정보

        this.v_popType;			// 화면에서 호출시 type (R/S) -> 등록 조회 구분


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 공통 기능 호출
        	this.nfn_formInit(obj);

        	// 넘겨받은 필수값
        	this.ds_mainReg.clearData();
        	this.ds_mainSre.clearData();
        	this.v_popType = this.parent.arg_Type;


        	if(this.v_popType == 'R')
        	{
        		var nAdd = this.ds_mainReg.addRow();
        		this.ds_mainReg.setColumn(nAdd,"ENTERPRISEID",this.parent.arg_Ent);
        		this.ds_mainReg.setColumn(nAdd,"PLANTID",this.parent.arg_Site);
        		this.ds_mainReg.setColumn(nAdd,"PACKINGHDRID",this.parent.arg_Hdr);
        		this.ds_mainReg.setColumn(nAdd,"INVNO",this.parent.arg_invNo);
        		this.ds_mainReg.setColumn(nAdd,"MODIFIER",this.gf_getUserId());

        		// (21.05.27) - 수량정보 db 조회 후 설정 변경적용
        		//this.searchDiv.msk_sum.set_value(this.parent.arg_Sum);	// 합계 설정

        		// 저장 버튼 활성화, 삭제버튼 비활성화, edit 입력창 활성화
        		this.searchDiv.edt_invNo.set_value(this.parent.arg_invNo);
        		this.searchDiv.edt_invNo.set_enable(true);
        		this.searchDiv.btn_delete.set_enable(false);
        		this.searchDiv.btn_delete.set_enableevent(false);
        		this.searchDiv.btn_save.set_enable(true);
        		this.searchDiv.btn_save.set_enableevent(true);
        		// 추가 삭제 버트 활성화
        		this.fn_setPlusMiusBtn(true);
        		// DC 값 콤보로 구성 (21.05.28) dc도 dno에 해당하는 dc 값으로 조회 설정  -> 조회후 다시 세팅
        		//this.fn_setCombo(this.parent.arg_Dc);


        		// 21.05.27 수량정보를 db에서 조회 한다.
        		var nAdd = this.ds_mainSre.addRow();
        		this.ds_mainSre.setColumn(nAdd,"ENTERPRISEID",this.parent.arg_Ent);
        		this.ds_mainSre.setColumn(nAdd,"PLANTID",this.parent.arg_Site);
        		this.ds_mainSre.setColumn(nAdd,"PACKINGHDRID",this.parent.arg_Hdr);
        		this.ds_mainSre.setColumn(nAdd,"INVNO",this.parent.arg_invNo);
        		this.ds_mainSre.setColumn(nAdd,"MODIFIER",this.gf_getUserId());
        		trace(" =====> 수량 정보 조회 조건 : "+this.ds_mainSre.saveXML());
        		this.fn_setQty();
        	}
        	else
        	{
        		this.searchDiv.edt_invNo.set_enable(false);
        		this.searchDiv.btn_delete.set_enable(true);
        		this.searchDiv.btn_delete.set_enableevent(true);
        		this.searchDiv.btn_save.set_enable(false);
        		this.searchDiv.btn_save.set_enableevent(false);
        		// 추가 삭제 버트 비활성화
        		this.fn_setPlusMiusBtn(false);

        		var nAdd = this.ds_mainSre.addRow();
        		this.ds_mainSre.setColumn(nAdd,"ENTERPRISEID",this.parent.arg_Ent);
        		this.ds_mainSre.setColumn(nAdd,"PLANTID",this.parent.arg_Site);
        		this.ds_mainSre.setColumn(nAdd,"PACKINGHDRID",this.parent.arg_Hdr);
        		this.ds_mainSre.setColumn(nAdd,"INVNO",this.parent.arg_invNo);
        		this.ds_mainSre.setColumn(nAdd,"MODIFIER",this.gf_getUserId());
        		this.searchDiv.edt_invNo.set_value(this.parent.arg_invNo);
        		this.fn_search();
        	}


        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_invoice.clearData(); 		//Target Dataset clear
        	var sSvcID 			= "selectPackInvNoList";
        	var sController 	= "/pcm07900/selectPackInvNoList.do";		// 다른쪽에서 생성 한것 가져다 활용(x) chk 박스 필요
        	var sInDatasets 	= "INPUT=ds_mainSre";
        	var sOutDatasets 	= "ds_invoice=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//합계수량 정보, inv no 정보 설정
        	var nCnt = this.ds_invoice.rowcount;
        	//var nSum = this.div_search.form.msk_sum.value;
        	var nInv = this.div_search.form.edt_invNo.value;
        	for(var i = 0; i<nCnt; i++)
        	{
        		//this.ds_invoice.setColumn(i,"SUM",nSum);
        		this.ds_invoice.setColumn(i,"INVNO",nInv);
        	}

        	// 수정사항 확인
        	if (!this.gfn_dsIsUpdated(this.ds_invoice))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}
        	// main inv no 변경
        	this.ds_mainReg.setColumn(0,"INVNO",nInv);

        	// 그리드 필수체크 (상단) -> 입력 가능이 전부 필수 값은 아닐 것 같음?
        	var inv 	= this.grd_invoice;
        	var strInv 	= "PONO,POSEQ,GOODQTY,RELEASEDATE,DC,INVNO,LOTID";		// Inv
        	// 그리드 체크
        	if(!this.nfn_MandatoryCheckGrid(inv, strInv)) return;
        	// (main) 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(	this.ds_invoice
        								, "PONO|LOTID|DC"
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.sta_invoiceTitle.text
        								)){ return;}
        	// 저장(등록 후 저장)
        	var sSvcID 			= "savePackInvNo";
        	var sController 	= "/pcm07900/savePackInvNo.do";
        	var sInDatasets 	= "ds_invoice=ds_invoice:U ds_mainReg=ds_mainReg:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		/*
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        		*/

        		if (trId == "savePackInvNo")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			}
        			/*
        			else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        			*/
        		}
        		else
        		{
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        		return;
        	}

        	switch(trId) {

        		case "selectPackInvNoList":	//[메인조회] 품목코드 list
        				//trace(" ===[메인 조회 성공] : "+this.ds_invoice.saveXML());
        				var nCnt = this.ds_invoice.rowcount;
        				if(nCnt == 0)
        				{
        					// 조회 조건 없는 경우 msg 출력
        					this.gfn_Message("NoSelectData", null, "warning", "ok");
        					return;
        				}

        				var nSumQty  	= this.ds_invoice.getColumn(0,"SUM")		// 합계 (어디서 조회를 하는지??)
        				var nUseQty 	= 0;		// 사용
        				var nRemainQty 	= 0;		// 잔여

        				// 두값과 합수 값이 존재 해야 계산 가능.
        				for(var i=0; i<nCnt; i++)
        				{
        					var nGoodQty = this.ds_invoice.getColumn(i, "GOODQTY");
        					nGoodQty = this.nfn_nvl(nGoodQty,0);
        					nUseQty = nUseQty + parseInt(nGoodQty);
        				}
        				trace(" ====== : "+nUseQty+" > "+nSumQty);
        				if(nUseQty > nSumQty)
        				{
        					var nSumTitle = this.searchDiv.sta_summary.text;
        					var nUseTitle = this.searchDiv.sta_use.text;

        					this.gfn_Message("CheckSumQty", [nUseTitle, nSumTitle], "warning", "ok");
        					return;
        				}

        				nRemainQty = (nSumQty - nUseQty);

        				this.searchDiv.msk_sum.set_value(nSumQty);
        				this.searchDiv.msk_use.set_value(nUseQty);
        				this.searchDiv.msk_remain.set_value(nRemainQty);

        			break;

        		case "deletePackInvNo":
        		case "savePackInvNo":	//[메인조회] 품목코드 list
        				this.fn_selectData();
        			break;

        		// (21.05.27~28) dno에 따른 인보이스 등록 수정
        		case "selectPackInvNoQtyList":	//[메인조회] 품목코드 list

        			var nCnt 	= this.ds_qty.rowcount;
        			var nSumQty = this.ds_qty.getColumn(0,"GOODQTY");
        			if((nCnt == 0) || this.gfn_isNull(nSumQty))
        			{
        				// 조회 조건 없는 경우 msg 출력	[합계]
        				this.gfn_Message("MessageParamIsNull", this.nfn_getDictionaryname("SUMAMOUNT",true), "warning", "ok");		// {0}가 없습니다.
        				this.opener.fv_rtnValue = "";
        				this.close();
        				return;
        			}

        			this.searchDiv.msk_sum.set_value(nSumQty);	// 합계 설정

        			// DB 조회시 DC 못가져올 경우 넘겨받은 값으로 설정
        			var nDcCnt	= this.ds_dcCombo.rowcount;
        			if(nDcCnt == 0)
        			{
        				this.fn_setCombo(this.parent.arg_Dc);
        			}

        			break;

        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {


        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();
        }

        /*
         * 추가 / 삭제 버튼 활성화 비활성화
         */
        this.fn_setPlusMiusBtn = function (nType)
        {
        	this.btn_add_ds_invoice.set_enable(nType);
        	this.btn_add_ds_invoice.set_enableevent(nType);
        	this.btn_del_ds_invoice.set_enable(nType);
        	this.btn_del_ds_invoice.set_enableevent(nType);
        };

        /*
         * 그리드 콤보 설정(입력창)
         */
        this.fn_gridType = function ()
        {
        	return this.v_popType;
        };

        /*
         * DC(주차) 콤보 설정
         */
        this.fn_setCombo = function (nDc)
        {
        	this.ds_dcCombo.clearData();

        	if(!this.gfn_isNull(nDc))
        	{
        		var nArr = nDc.split(",");

        		for(var i=0; i<nArr.length; i++)
        		{
        			var nCode = nArr[i];
        			var nAdd  = this.ds_dcCombo.addRow();
        			this.ds_dcCombo.setColumn(nAdd, "CODE", nCode);
        			this.ds_dcCombo.setColumn(nAdd, "NAME", nCode);
        		}
        	}
        };

        /*
         * dno로 같은 dno의 수량 정보 조회(dno 하나만 선택해도 동일한 dno에 같은 인보이스 생성되어야함) + dc 도 가져 와야 될것 같음
         */
        this.fn_setQty = function ()
        {
        	this.ds_invoice.clearData(); 		//Target Dataset clear
        	this.ds_dcCombo.clearData();		// 주차도 dno로 조회 해서 설정

        	var sSvcID 			= "selectPackInvNoQtyList";
        	var sController 	= "/pcm07900/selectPackInvNoQtyList.do";		// 다른쪽에서 생성 한것 가져다 활용(x) chk 박스 필요
        	var sInDatasets 	= "INPUT=ds_mainSre";
        	var sOutDatasets 	= "ds_qty=output1 ds_dcCombo=output2";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	// 쿼리 작성 대기중..(line + lot 둘다 봐야됨)
        };


        /*******************************************************************************
         * fn_checkGridDup
         * 기능 : 그리드내 중복값 존재여부 체크
         * 최성민(복사해수 구현)
         * Parameter  :
         *				obj 	: 체크 Dataset
         *				chkCol  : 체크 컬럼ID (COLUMN_A|COLUMN_B|COLUMN_C)
         *				msg		: 체크컬럼 오류시 메세지 ID (MSG_A|MSG_B|MSG_C)
        *******************************************************************************/
         this.fn_checkGridDup = function (obj, chkCol, msg, tableNm)
         {
        	//속도문제로 로딩바 이미지 표시
        	if(this.nfn_isNull(chkCol)) return true;
        	var chkColList = chkCol.split("|");
        	//var msgList = msg.split("|");
        	for(var i=0; i <obj.rowcount; i++){

        		var nChkStr = "";
        		for(var j=0; j <chkColList.length; j++){
        			var chkKey = chkColList[j];
        			var chkValue = obj.getColumn(i,chkKey);

        			nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        							:" && " +chkKey+"== '" + chkValue+"'";
        		}
        		// 중복 조건
        		var chkCnt = obj.getCaseCount(nChkStr);

        		if(chkCnt > 1){
        			var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        			//this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        			this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        			return false;
        		}
        	}
        	return true;
         };


        /*
         * 적용 버튼 클릭시 해당 값 담는 함수
         */
        this.fn_selectData = function()
        {
        	var rtnArray = new Array();
        	rtnArray[0] = 'ok';
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        /*
         * (Inv No)그리드 양품수량 값 변경시
         */
        this.ds_invoice_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid != 'GOODQTY')			// 양품 수량인 경우만
        	{
        		return;
        	}

        	var nCnt = this.ds_invoice.rowcount;

        	var nSumQty  = this.searchDiv.msk_sum.value;		// 합계 (어디서 조회를 하는지??)
        	var nUseQty = 0;		// 사용
        	var nRemainQty = 0;		// 잔여


        	// 두값과 합수 값이 존재 해야 계산 가능.
        	for(var i=0; i<nCnt; i++)
        	{
        		var nGoodQty = this.ds_invoice.getColumn(i, "GOODQTY");
        		nGoodQty = this.nfn_nvl(nGoodQty,0);
        		nUseQty = nUseQty + parseInt(nGoodQty);
        	}

        	if(nUseQty > nSumQty)
        	{
        		var nSumTitle = this.searchDiv.sta_summary.text;
        		var nUseTitle = this.searchDiv.sta_use.text;

        		this.gfn_Message("CheckSumQty", [nUseTitle, nSumTitle], "warning", "ok");
        		return;
        	}

        	nRemainQty = (nSumQty - nUseQty);

        	this.searchDiv.msk_sum.set_value(nSumQty);
        	this.searchDiv.msk_use.set_value(nUseQty);
        	this.searchDiv.msk_remain.set_value(nRemainQty);

        };
        /*
         * 추가 버튼 클릭
         */
        this.btn_add_ds_invoice_onclick = function(obj,e)
        {
        	var nAddRow = this.ds_invoice.addRow();

        	// 날짜 처리, 날짜 테스트, 서버 일시
        	var sYDate = this.nfn_getCurrentSystemTime(0,0,'yesterday');
        	var arrDate = sYDate.split(",");
        	var sDateFrom = arrDate[1];		// 어제
        	var sDate = arrDate[2];			// 오늘
        	var sDateTo = arrDate[0];		// 현재
        	var sTime = sDateTo.substring(8,14);
        	// 08:30 이전이면 전날 선택
        	var nRdate = "";
        	if(parseInt(sTime) >= parseInt('083000'))
        	{
        		this.ds_invoice.setColumn(nAddRow,"RELEASEDATE",sDate);			// 08:30 이후 이면 오늘 날짜
        	}
        	else
        	{
        		this.ds_invoice.setColumn(nAddRow,"RELEASEDATE",sDateFrom);		// 08:30 이전 이면 어제 날짜
        	}

        	// 추가
        	this.ds_invoice.setColumn(nAddRow, "ENTERPRISEID"	, this.ds_mainReg.getColumn(0,"ENTERPRISEID"));
        	this.ds_invoice.setColumn(nAddRow, "PLANTID"	    , this.ds_mainReg.getColumn(0,"PLANTID"));
        	this.ds_invoice.setColumn(nAddRow, "INVNO"	    , this.ds_mainReg.getColumn(0,"INVNO"));
        	this.ds_invoice.setColumn(nAddRow, "CREATER"	    , this.gf_getUserId());



        };
        /*
         * 삭제 버튼 클릭
         */
        this.btn_del_ds_invoice_onclick = function(obj,e)
        {
        	var nChkCnt = this.ds_invoice.rowcount;
        	var nDsPos  = this.ds_invoice.rowposition
        	// 삭제건 체크
        	if (nChkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        	// 그리드 선택된행 삭제
        	this.ds_invoice.deleteRow(nDsPos);
        };

        /*
         * 일괄 삭제 클릭시
         */
        this.div_search_btn_delete_onclick = function(obj,e)
        {
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false) return;


        	// 저장(등록 후 저장)
        	var sSvcID 			= "deletePackInvNo";
        	var sController 	= "/pcm07900/deletePackInvNo.do";
        	var sInDatasets 	= "ds_mainSre=ds_mainSre";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btn_delete.addEventHandler("onclick",this.div_search_btn_delete_onclick,this);
            this.div_search.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_del_ds_invoice.addEventHandler("onclick",this.btn_del_ds_invoice_onclick,this);
            this.btn_add_ds_invoice.addEventHandler("onclick",this.btn_add_ds_invoice_onclick,this);
            this.ds_invoice.addEventHandler("oncolumnchanged",this.ds_invoice_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM07900P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
