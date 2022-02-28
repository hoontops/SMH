(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cellexpand");
            this.set_titletext("Grid_Cell(spin)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column5\">0</Col></Row><Row><Col id=\"Column5\">1</Col></Row><Row><Col id=\"Column5\">2</Col></Row><Row><Col id=\"Column5\">3</Col></Row><Row><Col id=\"Column5\">4</Col></Row><Row><Col id=\"Column5\">5</Col></Row><Row><Col id=\"Column5\">6</Col></Row><Row><Col id=\"Column5\">8</Col></Row><Row><Col id=\"Column5\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","69","130","520","327",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column5\"/><Cell col=\"1\" text=\"Column4\"/><Cell col=\"2\" text=\"Column3\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column1\"/><Cell col=\"5\" text=\"Column0\"/></Band><Band id=\"body\"><Cell text=\"bind:Column5\" expandshow=\"show\" imagestretch=\"fit\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/grd_expand_spin.png&apos;)\" textAlign=\"right\" cssclass=\"cell_spin\" displaytype=\"maskeditcontrol\" edittype=\"mask\"/><Cell col=\"1\" text=\"bind:Column4\"/><Cell col=\"2\" text=\"bind:Column3\"/><Cell col=\"3\" text=\"bind:Column2\"/><Cell col=\"4\" text=\"bind:Column1\"/><Cell col=\"5\" text=\"bind:Column0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid Component");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","51",null,"34","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.set_cssclass("sta_guide_Label");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","70","96","92","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Spin Type");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","254","374","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass : cell_spin");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00","99","358","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_00","616","130","568","501",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_wordWrap("char");
            obj.set_value("\nthis.Grid00_onexpanddown = function(obj:nexacro.Grid,e:nexacro.GridMouseEventInfo)\n{\n\t/* 좌표확인\n\tvar nCanvasX = e.canvasx;\n\tvar nCanvasY = e.canvasy;\n\ttrace(\"CanvasX : \" + nCanvasX + \" , CanvasY : \" + nCanvasY);\n\t*/\n\t\n\tvar nCanvasY = e.canvasy;\t\n\t\n\t//데이터 셋에서 row의 셀 값 찾아오기\n\tvar objDataset = obj.getBindDataset();\n\tvar nGetColumn = objDataset.getColumn(e.row, \"Column5\");\n\t\n\tvar nCellSize = obj.getFormatRowProperty(e.col , \"size\");\n\tvar nHalfPos  = nexacro.round(nCellSize/2);\n\t\n\tif(nHalfPos > nCanvasY)\n\t{\n\t\t//클릭 위치가 셀의 높이 값 반보다 클 때 ▲ (위쪽 클릭)\n\t\tnGetColumn ++;\n\t}\n\telse\n\t{\n\t\t//클릭 위치가 셀의 높이 값 반보다 작을 때 ▼ (아랫쪽 클릭)\n\t\tnGetColumn --;\n\t}\n\t\n\tobjDataset.setColumn(e.row, \"Column5\", nGetColumn);\n};\n");
            this.addChild(obj.name, obj);

            obj = new Static("Static62_00","616","106","92","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Script");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cellexpand.xfdl", function() {

        this.Grid00_onexpanddown = function(obj,e)
        {
        	/* 좌표확인
        	var nCanvasX = e.canvasx;
        	var nCanvasY = e.canvasy;
        	trace("CanvasX : " + nCanvasX + " , CanvasY : " + nCanvasY);
        	*/

        	var nCanvasY = e.canvasy;

        	//데이터 셋에서 row의 셀 값 찾아오기
        	var objDataset = obj.getBindDataset();
        	var nGetColumn = objDataset.getColumn(e.row, "Column5");

        	var nCellSize = obj.getFormatRowProperty(e.col , "size");
        	var nHalfPos  = nexacro.round(nCellSize/2);

        	if(nHalfPos > nCanvasY)
        	{
        		//클릭 위치가 셀의 높이 값 반보다 클 때 ▲ (위쪽 클릭)
        		nGetColumn ++;
        	}
        	else
        	{
        		//클릭 위치가 셀의 높이 값 반보다 작을 때 ▼ (아랫쪽 클릭)
        		nGetColumn --;
        	}

        	objDataset.setColumn(e.row, "Column5", nGetColumn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("onexpanddown",this.Grid00_onexpanddown,this);
        };
        this.loadIncludeScript("cellexpand.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
