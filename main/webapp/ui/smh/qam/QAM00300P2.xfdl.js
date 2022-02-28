(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00300P2");
            this.set_titletext("사용자 리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(992,626);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"작업장ID\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"사용자ID\" type=\"STRING\" size=\"256\"/><Column id=\"사용자명\" type=\"STRING\" size=\"256\"/><Column id=\"자사구분\" type=\"STRING\" size=\"256\"/><Column id=\"이메일주소\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_02_00_00",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_01",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","62","280","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDUSERLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","20","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"240\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"작업장ID\"/><Cell col=\"3\" text=\"작업장\"/><Cell col=\"4\" text=\"사용자ID\"/><Cell col=\"5\" text=\"사용자명\"/><Cell col=\"6\" text=\"자사구분\"/><Cell col=\"7\" text=\"이메일주소\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:작업장ID\"/><Cell col=\"3\" text=\"bind:작업장\"/><Cell col=\"4\" text=\"bind:사용자ID\"/><Cell col=\"5\" text=\"bind:사용자명\"/><Cell col=\"6\" text=\"bind:자사구분\"/><Cell col=\"7\" text=\"bind:이메일주소\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02_00_00_00_00","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","120","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("사용자ID/명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("USERIDNAME");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label01","264","10","140","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("작업장 코드/명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TXTAREAID");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","60","8","13",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("7");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","4.91%","24","39",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01",null,null,"60","8","13","0",null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","409","10","140","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("1");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","125","10","140","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("0");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",992,626,this,function(p){});
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

        };
        this.loadIncludeScript("QAM00300P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
