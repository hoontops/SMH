(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60510M");
            this.set_titletext("신협여수신조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
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

            obj = new Div("div_work","0","36",null,"274","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","161","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("신협수신 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("팀원 근태 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","169","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"상품명\" tooltiptext=\"상품명\"/><Cell col=\"1\" text=\"계약일자\" tooltiptext=\"계약일자\"/><Cell col=\"2\" text=\"만기일자\" tooltiptext=\"만기일자\"/><Cell col=\"3\" text=\"계약금\" tooltiptext=\"계약금\"/><Cell col=\"4\" text=\"잔액\" tooltiptext=\"잔액\"/><Cell col=\"5\" text=\"최종거래일\" tooltiptext=\"최종거래일\"/><Cell col=\"6\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"7\" text=\"관계\" tooltiptext=\"관계\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_work00","0","310",null,null,"10","58",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","161","34",null,null,null,null,null,null,this.div_work00.form);
            obj.set_taborder("0");
            obj.set_text("신협여신 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("신협여신 내역");
            this.div_work00.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","169","0","140","34",null,null,null,null,null,null,this.div_work00.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work00.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work00.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"상품명\" tooltiptext=\"상품명\"/><Cell col=\"1\" text=\"계약일자\" tooltiptext=\"계약일자\"/><Cell col=\"2\" text=\"만기일자\" tooltiptext=\"만기일자\"/><Cell col=\"3\" text=\"대출금액\" tooltiptext=\"대출금액\"/><Cell col=\"4\" text=\"잔액\" tooltiptext=\"잔액\"/><Cell col=\"5\" text=\"최종거래일\" tooltiptext=\"최종거래일\"/><Cell col=\"6\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"7\" text=\"관계\" tooltiptext=\"관계\"/></Band></Format></Formats>");
            this.div_work00.addChild(obj.name, obj);

            obj = new Static("Static16","15",null,null,"24","25","34",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("※ 신협 여수신 내역을 조회하는 화면입니다. (당월정보)");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 신협 여수신 내역을 조회하는 화면입니다. (당월정보)");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","15",null,null,"24","25","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("※ 신협협동조합 홈페이지 (G/W >  Bulletin Board ->Company Board-> Korea H/O -> 신협정보 ");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 신협협동조합 홈페이지 (G/W >  Bulletin Board ->Company Board-> Korea H/O -> 신협정보 ");
            this.addChild(obj.name, obj);
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
        };
        this.loadIncludeScript("BEN60510M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
