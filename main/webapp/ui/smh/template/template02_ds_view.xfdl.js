(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sample_application_07");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dslist", this);
            obj._setContents("<ColumnInfo><Column id=\"ds_id\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"ddddddddddd\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_collist", this);
            obj._setContents("<ColumnInfo><Column id=\"colname\" type=\"STRING\" size=\"256\"/><Column id=\"coltype\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_00","10","40","160","220",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_dslist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"146\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ds_id\"/></Band><Band id=\"body\"><Cell text=\"bind:ds_id\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","800","8","90","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("All");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"5","25","25","11",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","180","40","830","710",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("none");
            obj.set_autosizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ddddddddddd\"/></Band><Band id=\"body\"><Cell text=\"bind:ddddddddddd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_01","10","270","160","480",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_collist");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"143\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"colname\"/><Cell col=\"1\" text=\"coltype\"/></Band><Band id=\"body\"><Cell text=\"bind:colname\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:coltype\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.registerScript("template02_ds_view.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 화면간 데이터 전송 샘플
         * 업무명 		:
         * 파일명 		:
         * 작성자 		: quristyle
         * 작성일 		: 2015.03.18
         *
         * 설  명		: 확장 가능한 화면간 데이터 전송.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.18	quristyle   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var _winid = '';
        var isBindComp = false;
        var _dsCnt = 0;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function(obj, e){
          //alert('detail init');
          this.nfn_formInit(obj); //...... 샘플이니깐 안항.


          _winid = this.parent.winid;

          var ocFrm = gv_appWorkFrameSet.frames[_winid];

        	for( var i = 0; i < ocFrm.form.components[0].form.objects.length; i++ ){
        	  var c = ocFrm.form.components[0].form.objects[i];
        	  if(typeof c == "object" && c._type_name == "Dataset" ){
        	    trace( c.id );
        		var ridx = this.ds_dslist.addRow();
        		this.ds_dslist.setColumn(ridx, 0, c.id);
        		_dsCnt++;
        	  }
        	}
          this.gc_f('bindComplate');
        }


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/


        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.bindComplate = function(){
          if( _dsCnt == this.ds_dslist.rowcount ){
            isBindComp = true;
        	this.show_datasetinfo(this.ds_dslist.rowcount-1);
          }
          else{
            this.gc_f('bindComplate');
          }
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        // grid row change
        this.ds_grd00_canrowposchange = function(obj,e){
          if( isBindComp ){ this.show_datasetinfo(e.newrow); }
        };

        this.show_datasetinfo = function(ridx){

          if( ridx == null ){
            //ridx = this.ds_dslist.rowcount-1;
        	return;
          }

          //var ridx = this.ds_dslist.rowposition;
          trace('1 -----------> '+ridx);
          var ds_id = this.ds_dslist.getColumn(ridx, 0);
          if(ds_id==undefined){
            return;
          }

          trace('2 -----------> '+ridx +'   dsname : '+ds_id);

          var ocFrm = gv_appWorkFrameSet.frames[_winid];
          var dsObj = ocFrm.form.components[0].form.objects[ds_id];

          this.ds_collist.clearData();

          for( var i = 0; i < dsObj.colcount; i++ ){
            var ci = dsObj.getColumnInfo(i);
        	var ridx = this.ds_collist.addRow();
        	this.ds_collist.setColumn(ridx, 0, ci.name);
        	this.ds_collist.setColumn(ridx, 1, ci.type);
          }




          var dobjXml = dsObj.saveXML();

          this.ds_result.clear();

          this.ds_result.loadXML(dobjXml);

          this.grd_00_00.setBindDataset(this.ds_result);
          this.grd_00_00.createFormat();


        }


        this.btn_close_onclick = function(obj,e) {
        	this.close();
        };

        this.Button00_onclick = function(obj,e)
        {
          isBindComp = true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_dslist.addEventHandler("canrowposchange",this.ds_grd00_canrowposchange,this);
        };
        this.loadIncludeScript("template02_ds_view.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
