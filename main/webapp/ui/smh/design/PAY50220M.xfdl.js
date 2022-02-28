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

            
            // UI Components Initialize
            obj = new Button("btn_search",null,"5","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"5","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("출력");
            obj.set_tooltiptext("출력");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1_00",null,"5","60","20","142",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","36",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0.00%","0","16.74%","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","17.18%","5","15.42%","20",null,null,null,null,null,null,this.div_subTitle.form);
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

            obj = new Edit("edt_insepctionclassname00","50.33%","5","14.98%","20",null,null,null,null,null,null,this.div_subTitle.form);
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

            obj = new Edit("edt_insepctionclassname00_00","83.59%","5","14.43%","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("직급");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Div("div_00","0","69",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","-5","161","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("급여내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("급여내역");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","27",null,"94","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_scrolltype("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"지급년월\" tooltiptext=\"지급년월\"/><Cell col=\"1\" displaytype=\"normal\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"급여유형\" tooltiptext=\"급여유형\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" expandshow=\"hide\" expandsize=\"16\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"원천징수비율\" tooltiptext=\"원천징수비율\"/><Cell col=\"5\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"지급총액\" tooltiptext=\"지급총액\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"공제총액\" tooltiptext=\"공제총액\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"실지급액\" tooltiptext=\"실지급액\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"급여계좌\" tooltiptext=\"급여계좌\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"계좌번호\" tooltiptext=\"계좌번호\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\"/><Cell row=\"2\" col=\"5\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_batchCtrls","0.00%","126","49%",null,null,"44",null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_batchCtrls");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소득항목\" tooltiptext=\"소득항목\"/><Cell col=\"1\" displaytype=\"normal\" text=\"금액\" tooltiptext=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID)?&apos;combo&apos;:&apos;none&apos;\" text=\"bind:CMD_JOB_GUBUNCD\" combocodecol=\"C,SystemWorkType,SEL,Y,Y\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID)?&apos;text&apos;:&apos;none&apos;\" text=\"bind:BATCH_CD\" editlimit=\"10\" editautoselect=\"true\" editlengthunit=\"utf16\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_batchCtrls00",null,"126","49%",null,"0","44",null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_batchCtrls");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공제항목\" tooltiptext=\"공제항목\"/><Cell col=\"1\" displaytype=\"normal\" text=\"금액\" tooltiptext=\"금액\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID)?&apos;combo&apos;:&apos;none&apos;\" text=\"bind:CMD_JOB_GUBUNCD\" combocodecol=\"C,SystemWorkType,SEL,Y,Y\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID)?&apos;text&apos;:&apos;none&apos;\" text=\"bind:BATCH_CD\" editlimit=\"10\" editautoselect=\"true\" editlengthunit=\"utf16\" textAlign=\"left\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static16_01","15",null,null,"24","15","10",null,null,null,null,this.div_00.form);
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_clear1_00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_insepctionclassname.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_00.form.grd_batchCtrls.addEventHandler("onselectchanged",this.grd_batchCtrls_onselectchanged,this);
            this.div_00.form.grd_batchCtrls00.addEventHandler("onselectchanged",this.grd_batchCtrls_onselectchanged,this);
        };
        this.loadIncludeScript("PAY50220M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
