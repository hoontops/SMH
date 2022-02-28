(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_maskedit");
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
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"STRING\" size=\"5\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"type\">J</Col><Col id=\"nm\">주민등록번호</Col></Row><Row><Col id=\"type\">T</Col><Col id=\"nm\">전화번호</Col></Row><Row><Col id=\"type\">YMD</Col><Col id=\"nm\">년월일</Col></Row><Row><Col id=\"type\">YM</Col><Col id=\"nm\">년월</Col></Row><Row><Col id=\"type\">MD</Col><Col id=\"nm\">월일</Col></Row><Row><Col id=\"type\">Y</Col><Col id=\"nm\">년도</Col></Row><Row><Col id=\"type\">YMDSM</Col><Col id=\"nm\">년월일시분초</Col></Row><Row><Col id=\"type\">MS</Col><Col id=\"nm\">시분초</Col></Row><Row><Col id=\"type\">P</Col><Col id=\"nm\">우편번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("MaskEdit00","22","30","144","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","171","30","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("type");
            obj.set_datacolumn("nm");
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
        this.registerScript("nexacro_maskedit.xfdl", function() {

        this.Combo00_onitemchanged = function (obj, e)
        {
        	trace(e.postvalue);
        	switch (e.postvalue)
        	{
        		case 'J':
        			// 주민번호
        			this.MaskEdit00.set_mask('######-#{######}');
        			break;
        		case 'T':
        			// 전화번호
        			this.MaskEdit00.set_mask('###-####-####');
        			break;
        		case 'YMD':
        			// 년월일
        			this.MaskEdit00.set_mask('####-##-##');
        			break;
        		case 'YM':
        			// 년월
        			this.MaskEdit00.set_mask('######-#{######}');
        			break;
        		case 'MD':
        			// 월일
        			this.MaskEdit00.set_mask('##-##');
        			break;
        		case 'Y':
        			// 년
        			this.MaskEdit00.set_mask('####');
        			break;
        		case 'YMDSM':
        			// 년월일시분초
        			this.MaskEdit00.set_mask('####-##-## ##:##:##');
        			break;
        		case 'MS':
        			// 시분초
        			this.MaskEdit00.set_mask('##:##:##');
        			break;
        		case 'P':
        			// 우편번호
        			this.MaskEdit00.set_mask('###-###');
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("nexacro_maskedit.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
