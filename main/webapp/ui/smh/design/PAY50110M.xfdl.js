(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY50110M");
            this.set_titletext("연봉정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","36",null,null,"10","68",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell text=\"년도\" tooltiptext=\"년도\"/><Cell col=\"1\" text=\"월균등지급액\" tooltiptext=\"월균등지급액\"/><Cell col=\"2\" text=\"설추석지급액\" tooltiptext=\"설추석지급액\"/><Cell col=\"3\" text=\"연봉\" tooltiptext=\"연봉\"/><Cell col=\"4\" text=\"예상퇴직금\" tooltiptext=\"예상퇴직금\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","15",null,null,"24","10","34",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("* 개인별 연봉정보는 [인비사항]이므로 본인의 연봉정보를 타인에게 공개해서는 안됩니다.");
            obj.set_cssclass("sta_font_red");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01","15",null,null,"24","10","10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("* 예상퇴직금은 현재 시점의 예상 퇴직금이므로, 실제 퇴직금과 차이가 있을 수 있습니다.");
            obj.set_cssclass("sta_font_black");
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
        this.registerScript("PAY50110M.xfdl", function() {

        this.Static19_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static19_onclick,this);
        };
        this.loadIncludeScript("PAY50110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
