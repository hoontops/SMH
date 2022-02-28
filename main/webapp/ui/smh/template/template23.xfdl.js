(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template23");
            this.set_titletext("DetailT+그리드B");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"양산구분\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"이전공정명\" type=\"STRING\" size=\"256\"/><Column id=\"이전작업장\" type=\"STRING\" size=\"256\"/><Column id=\"수량PCS\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("물류창고 입고");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","70","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("입고 입력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_label0","0","0","9.54%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Site ID");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_label1","25%","0","9.54%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","sta_label0:5","5",null,"20","sta_label1:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","sta_label1:5","5","19.08%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00","0","66","163","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("물류창고 입고 목록  <fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","100",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"양산구분\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"Rev.\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"공정수순\"/><Cell col=\"8\" text=\"공정명\"/><Cell col=\"9\" text=\"작업장\"/><Cell col=\"10\" text=\"이전공정명\"/><Cell col=\"11\" text=\"이전작업장\"/><Cell col=\"12\" text=\"수량(PCS)\"/><Cell col=\"13\" text=\"수량(PNL)\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LotNo\"/><Cell col=\"3\" text=\"bind:양산구분\"/><Cell col=\"4\" text=\"bind:품목코드\"/><Cell col=\"5\" text=\"bind:Rev\"/><Cell col=\"6\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:공정수순\"/><Cell col=\"8\" text=\"bind:공정명\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:이전공정명\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:이전작업장\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:수량PCS\"/><Cell col=\"13\" text=\"bind:수량PNL\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"72","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"72","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
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
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template23.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
