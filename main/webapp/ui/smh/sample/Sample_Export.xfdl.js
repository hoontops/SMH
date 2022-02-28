(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("exprt_test");
            this.set_titletext("New Form");
            this.set_locale("es_AR");
            if (Form == this.constructor)
            {
                this._setFormPosition(916,489);
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
            obj._setContents("<ColumnInfo><Column id=\"int\" type=\"INT\" size=\"256\"/><Column id=\"float\" type=\"FLOAT\" size=\"256\"/><Column id=\"bigdecimal\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"int\">0</Col><Col id=\"float\">1</Col><Col id=\"Column3\">https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png</Col><Col id=\"bigdecimal\">123123</Col></Row><Row><Col id=\"int\">0</Col><Col id=\"float\">1</Col><Col id=\"bigdecimal\">64</Col><Col id=\"Column3\">https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png</Col></Row><Row><Col id=\"int\">0</Col><Col id=\"float\">123</Col><Col id=\"bigdecimal\">15</Col><Col id=\"Column3\">https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png</Col></Row><Row><Col id=\"int\">1</Col><Col id=\"float\">12.3</Col><Col id=\"Column3\">https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png</Col><Col id=\"bigdecimal\">123123.5</Col></Row><Row><Col id=\"int\">1</Col><Col id=\"float\">11.1</Col><Col id=\"Column3\">https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png</Col><Col id=\"bigdecimal\">444.444</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"INT\" size=\"256\"/><Column id=\"Column1\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1000</Col><Col id=\"Column1\">222222222</Col><Col id=\"Column2\">가나다다라마 가나다다라마  가나다다라마  가나다다라마</Col><Col id=\"Column3\">1231231 12312312  12312312  123123 </Col><Col id=\"Column4\">aaaaaaa aaaaa aaaaa aaaaa aaaa</Col></Row><Row><Col id=\"Column0\">1111111</Col><Col id=\"Column1\">1000</Col><Col id=\"Column2\">가가가&#10;    나나나&#10;    다다다&#10;    </Col></Row><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","32","24","134","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Export");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","76","532","148",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"int\"/><Cell col=\"1\" text=\"float\"/><Cell col=\"2\" text=\"bigdecimal\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"bind:int\"/><Cell col=\"1\" displaytype=\"number\" text=\"bind:float\"/><Cell col=\"2\" displaytype=\"number\" text=\"bind:bigdecimal\"/><Cell col=\"3\" displaytype=\"image\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","24","294","532","148",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset01");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"146\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" expr=\"expr:dataset.getRowType(currow)==1?&quot;a&quot;:&quot;b&quot;\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"bind:Column2\" wordWrap=\"none\"/><Cell col=\"3\" text=\"bind:Column3\" wordWrap=\"char\"/><Cell col=\"4\" text=\"bind:Column4\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","24","232","134","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("CSV Export");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",916,489,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_Export.xfdl", function() {
        // this.url = "http://172.10.13.61:8080/tobe/XExportImport";
        this.url = nexacro.getEnvironment().services["svcurl"].url + "/XExportImportServlet";

        this.Button00_onclick = function (obj, e)
        {
        	this.exportObj = new ExcelExportObject();


        	this.exportObj.addEventHandler("onexport", this.Export00_onexport, this);
        	this.exportObj.addEventHandler("onerror", this.Export00_onerror, this);
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);


        	this.exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.exportObj.set_exporturl(this.url);
        	this.exportObj.set_exportfilename("aaaa");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid00, "Sheet1!A1", "", "", "", "", "image");

        	this.exportObj.set_exportfilename("asdf");

        	trace("exporturl== " + this.exportObj.exporturl);


        	// var result = this.exportObj.exportData("filepassword=123");
        	var result = this.exportObj.exportData();
        };


        this.Button01_onclick = function (obj, e)
        {
        	this.exportObj = new ExcelExportObject();


        	this.exportObj.addEventHandler("onexport", this.Export00_onexport, this);
        	this.exportObj.addEventHandler("onerror", this.Export00_onerror, this);
        	this.exportObj.addEventHandler("onsuccess", this.Export00_onsuccess, this);


        	this.exportObj.set_exporttype(nexacro.ExportTypes.CSV);
        	this.exportObj.set_exporturl(this.url);
        	this.exportObj.set_exportfilename("aaaa");
        	this.exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.Grid01, "Sheet1!A1");

        	this.exportObj.set_exportfilename("asdf");


        	// var result = this.exportObj.exportData("filepassword=123");
        	var result = this.exportObj.exportData("", "", true);
        };


        this.Export00_onsuccess = function (obj, e)
        {
        	trace(e.url);
        };

        this.Export00_onerror = function (obj, e)
        {
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Sample_Export.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
