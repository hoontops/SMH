(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("home");
            this.set_titletext("Home");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_00","0","0",null,"488","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("url(\'theme://images/myHR_home_img.png\') no-repeat center top #ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","1.56%","490","48%","230",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","10",null,null,"0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_00.form.tab_00);
            obj.set_text("My To-Do List");
            obj.set_border("0px none");
            this.div_00.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","1",null,null,"0","0",null,null,null,null,this.div_00.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"1\" text=\"상세구분\" tooltiptext=\"상세구분\"/><Cell col=\"2\" text=\"건수/단계\" tooltiptext=\"건수/단계\"/><Cell col=\"3\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.div_00.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_00.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_00.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_00.form.tab_00);
            obj.set_text("Leader\'s To-Do List");
            obj.set_border("0px none");
            this.div_00.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","1",null,null,"0","0",null,null,null,null,this.div_00.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"구분\" tooltiptext=\"구분\"/><Cell col=\"1\" text=\"상세구분\" tooltiptext=\"상세구분\"/><Cell col=\"2\" text=\"건수/단계\" tooltiptext=\"건수/단계\"/><Cell col=\"3\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.div_00.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_00.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_00.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_prev",null,"20","60","20","66",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("이전");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("이전");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"20","60","20","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("다음");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_01",null,"490","48%","230","1.56%",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00_00","0","10",null,null,"0","0",null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_01.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_01.form.tab_00_00);
            obj.set_text("Notices");
            obj.set_border("0px none");
            this.div_01.form.tab_00_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","1",null,null,"0","0",null,null,null,null,this.div_01.form.tab_00_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"410\"/><Column size=\"100\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"날짜\" tooltiptext=\"날짜\"/><Cell col=\"1\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"2\" text=\"Link\" tooltiptext=\"Link\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.div_01.form.tab_00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_00","0","1",null,"1","0",null,null,null,null,null,this.div_01.form.tab_00_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #1476c7,0px none,0px none");
            this.div_01.form.tab_00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_prev",null,"20","60","20","66",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("이전");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("이전");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"20","60","20","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("다음");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("다음");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("home.xfdl", function() {

        this.div_01_tab_00_00_Tabpage1_lsb_00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_00.form.btn_prev.addEventHandler("onclick",this.fn_save,this);
            this.div_00.form.btn_next.addEventHandler("onclick",this.fn_save,this);
            this.div_01.form.btn_prev.addEventHandler("onclick",this.fn_save,this);
            this.div_01.form.btn_next.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("home.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
