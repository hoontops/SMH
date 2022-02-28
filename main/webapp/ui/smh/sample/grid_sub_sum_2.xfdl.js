(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_sample");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_keystring("G:Group_code");
            obj._setContents("<ColumnInfo><Column id=\"Group_code\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"소계\"/><Column id=\"Data_code\" type=\"INT\" size=\"256\"/><Column id=\"Data_Str\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Group_code\">C</Col><Col id=\"Data_code\">100</Col><Col id=\"Data_Str\">100</Col></Row><Row><Col id=\"Group_code\">C</Col><Col id=\"Data_code\">200</Col><Col id=\"Data_Str\">200</Col></Row><Row><Col id=\"Group_code\">A</Col><Col id=\"Data_code\">10</Col><Col id=\"Data_Str\">10</Col></Row><Row><Col id=\"Group_code\">B</Col><Col id=\"Data_code\">20</Col><Col id=\"Data_Str\">20</Col></Row><Row><Col id=\"Group_code\">B</Col><Col id=\"Data_Str\">30</Col><Col id=\"Data_code\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","1.37%","41",null,"275","55.76%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Group_code\"/><Cell col=\"1\" text=\"Data_code\"/><Cell col=\"2\" text=\"Data_Str\"/></Band><Band id=\"body\"><Cell text=\"bind:Group_code\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Data_code\"/><Cell col=\"2\" text=\"bind:Data_Str\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24","12","434","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("데이터 셋의 prop 을 이용한 부분합계 레이블 변경");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
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
        this.loadIncludeScript("grid_sub_sum_2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
