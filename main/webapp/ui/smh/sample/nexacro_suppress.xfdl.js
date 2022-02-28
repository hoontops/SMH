(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_suppress");
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
            obj.set_keystring("Column0");
            obj._setContents("<ColumnInfo><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"INT\" size=\"256\"/><Column id=\"Column2\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column3\">a</Col><Col id=\"Column0\">a</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">9</Col></Row><Row><Col id=\"Column3\">a</Col><Col id=\"Column0\">a</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">10</Col></Row><Row><Col id=\"Column3\">b</Col><Col id=\"Column0\">b</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">10</Col></Row><Row><Col id=\"Column3\">b</Col><Col id=\"Column0\">b</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">10</Col></Row><Row><Col id=\"Column3\">b</Col><Col id=\"Column0\">b</Col><Col id=\"Column1\">5</Col><Col id=\"Column2\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Suppress", this);
            obj.set_preload("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column type=\"STRING\" size=\"255\" id=\"col1\"/><Column type=\"STRING\" size=\"256\" id=\"col2\"/><Column type=\"STRING\" size=\"255\" id=\"col3\"/><Column type=\"INT\" size=\"255\" id=\"col4\"/></ColumnInfo><Rows><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">맛있을라면</Col><Col id=\"col4\">1</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">안양라면</Col><Col id=\"col4\">5</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">심양</Col><Col id=\"col3\">심양라면</Col><Col id=\"col4\">2</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">센라면</Col><Col id=\"col4\">3</Col></Row><Row><Col id=\"col1\">라면류</Col><Col id=\"col2\">농섬</Col><Col id=\"col3\">언성탕면</Col><Col id=\"col4\">4</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">투깨더</Col><Col id=\"col4\">5</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">방그레</Col><Col id=\"col3\">바바빅</Col><Col id=\"col4\">6</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">메롱바</Col><Col id=\"col4\">7</Col></Row><Row><Col id=\"col1\">빙과류</Col><Col id=\"col2\">로데</Col><Col id=\"col3\">스크롤바</Col><Col id=\"col4\">8</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","79","83","329","269",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column3\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/></Band><Band id=\"body\"><Cell text=\"bind:Column3\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column0\"/><Cell col=\"2\" text=\"bind:Column1\"/><Cell col=\"3\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","457","83","329","269",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Suppress");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"col1\"/><Cell col=\"1\" text=\"col2\"/><Cell col=\"2\" text=\"col3\"/><Cell col=\"3\" text=\"col4\"/></Band><Band id=\"body\"><Cell text=\"bind:col1\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:col2\"/><Cell col=\"2\" text=\"bind:col3\"/><Cell col=\"3\" text=\"bind:col4\"/></Band></Format></Formats>");
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
            this._addPreloadList("data","","ds_Suppress");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("nexacro_suppress.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
