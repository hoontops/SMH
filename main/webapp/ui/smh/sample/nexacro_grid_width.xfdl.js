(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(198,763);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bookmark", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"image\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"no\" type=\"STRING\" size=\"256\"/><Column id=\"del\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bookmark00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row><Row><Col id=\"MENU_NAME\">웹예약오픈관리</Col></Row><Row><Col id=\"MENU_NAME\">예약마킹</Col></Row><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row><Row><Col id=\"MENU_NAME\">티업타임요금변경</Col></Row><Row><Col id=\"MENU_NAME\">예약접수</Col></Row><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row><Row><Col id=\"MENU_NAME\">웹예약오픈관리</Col></Row><Row><Col id=\"MENU_NAME\">예약마킹</Col></Row><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row><Row><Col id=\"MENU_NAME\">티업타임요금변경</Col></Row><Row><Col id=\"MENU_NAME\">예약접수</Col></Row><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row><Row><Col id=\"MENU_NAME\">예약시트마킹</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_bookmark","0","38","198","650",null,null,null,null,null,null,this);
            obj.set_cssclass("grd_LF_bookmark");
            obj.set_taborder("0");
            obj.set_binddataset("ds_bookmark");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/></Columns><Rows><Row size=\"22\"/></Rows><Band id=\"body\"><Cell displaytype=\"image\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",198,763,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_grid_width.xfdl", function() {

        this.form_onload = function (obj, e)
        {
        	this.ds_bookmark.copyData(this.ds_bookmark00);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("nexacro_grid_width.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
