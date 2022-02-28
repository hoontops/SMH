(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_radio");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inner", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">예</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">아니오</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bind", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">N</Col></Row><Row><Col id=\"Column0\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sex", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">남자</Col><Col id=\"code\">M</Col></Row><Row><Col id=\"code\">W</Col><Col id=\"name\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Radio("Radio00","355","56","231","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_columncount("2");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","28","57","271","137",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_bind");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"Column0\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","378","139","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_inner");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","393","176","168","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_columncount("2");
            obj.set_innerdataset("ds_sex");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Radio00","value","ds_bind","Column0");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Combo00","value","ds_bind","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_radio.xfdl", function() {

        this.ds_bind_onrowposchanged = function (obj, e)
        {
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.ds_bind.addEventHandler("onrowposchanged",this.ds_bind_onrowposchanged,this);
        };
        this.loadIncludeScript("nexacro_radio.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
