(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample77");
            this.set_titletext("이미지");
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
            obj._setContents("<ColumnInfo><Column id=\"blob\" type=\"BLOB\" size=\"256\"/><Column id=\"filenm\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","8.4%","40",null,"31","62.5%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("case 1 - ui project 내에 image 접근");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","40.63%","40",null,"224","0.78%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","8.4%","80",null,"31","62.5%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("case 2 - ui project 내에 image 접근");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","7.91%","376",null,"317","53.13%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"292\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"141\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" displaytype=\"image\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","48.54%","376",null,"82","9.96%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("DB 컬럼이 BLOB 형식 일때 그리드 이미지로 보여주기");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","85.55%","297",null,"26","6.35%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Button02");
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
        this.registerScript("Sample77.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	this.ImageViewer00.set_image("image::sample_main_after.jpg");
        };

        this.Button01_onclick = function (obj, e)
        {
        	// 이미지는 브라우저에서 url 로 호출되어지는 주소만 가능.
        	// 이미지 다운로드 경로 등으로는 안됨.
        	this.ImageViewer00.set_image("http://fcm.krpost.go.kr:8100/cmd/image/waitimage.gif");
        };

        this.Button02_onclick = function (obj, e)
        {
        	var filePath = "\"C:\\KakaoTalk_Setup.exe\"";
        	system.execShell(filePath);
        	/*
        	 var filePath = "\"C:\\Temp\\가나다라마.exe\""; //\" 쌍따움표 표시를 위해 사용
        	 Extension._ext_excuteProcess(filePath );
        	 */
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("Sample77.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
