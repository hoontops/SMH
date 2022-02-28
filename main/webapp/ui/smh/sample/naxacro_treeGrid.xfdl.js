(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("naxacro_treeGrid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_NAME\" type=\"string\" size=\"50\"/><Column id=\"MENU_LEVEL\" type=\"INT\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NAME\">root</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_NAME\">Sample</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_NAME\">CRUD테스트</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">공통코드</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">메세지</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">다국어</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">pos테스트</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">엑셀 Import / Export</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">파일 Upload / Download</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">Validation</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">팝업</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">사용자정보</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">3333</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">template</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_NAME\">template1</Col><Col id=\"MENU_LEVEL\">2</Col></Row><Row><Col id=\"MENU_NAME\">template2</Col><Col id=\"MENU_LEVEL\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","34","17","270","303",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_tooltiptype("hover");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"252\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"MENU_NAME\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:MENU_NAME\" treelevel=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","336","22","93","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","337","63","421","254",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"MENU_NAME\"/><Cell col=\"1\" text=\"MENU_LEVEL\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:MENU_NAME\"/><Cell col=\"1\" text=\"bind:MENU_LEVEL\"/></Band></Format></Formats>");
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
        this.registerScript("naxacro_treeGrid.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	var nCurRow = this.ds_menu.rowposition;
        	var nCurLevel = this.ds_menu.getColumn(nCurRow, "MENU_LEVEL");
        	var nRow = this.ds_menu.insertRow(nCurRow + 1);

        	this.ds_menu.setColumn(nRow, "MENU_LEVEL", nCurLevel + 1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("naxacro_treeGrid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
