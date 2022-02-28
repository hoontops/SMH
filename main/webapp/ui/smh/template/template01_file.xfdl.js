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

            
            // UI Components Initialize
            obj = new Div("div_file","0.98%","5",null,"165","1.37%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("common::com_file_b4.xfdl");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","10","180","329","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Tobe용 파일 팝업");
            obj.set_font("20px/normal NanumSquareRoundB, NanumSquareRoundBold");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_00","349","180","329","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("AS 파일구조 그대로 이동 팝업");
            obj.set_font("20px/normal NanumSquareRoundB, NanumSquareRoundBold");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01","681","180","329","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("save");
            obj.set_font("20px/normal NanumSquareRoundB, NanumSquareRoundBold");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01_00","10","365","333","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("save");
            obj.set_font("20px/normal NanumSquareRoundB, NanumSquareRoundBold");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_00","349","240","661","520",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01_00_00","11","240","329","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("load");
            obj.set_font("20px/normal NanumSquareRoundB, NanumSquareRoundBold");
            this.addChild(obj.name, obj);

            obj = new Div("div_file00","0.98%","290","333","65",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("common::com_file_b3.xfdl");
            obj.set_border("0px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("Button01_01_00_01","11","420","333","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("download");
            obj.set_font("20px/normal NanumSquareRoundB, NanumSquareRoundBold");
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
            this._addPreloadList("fdl","common::com_file_b4.xfdl");
            this._addPreloadList("fdl","common::com_file_b3.xfdl");
        };
        
        // User Script
        this.registerScript("template01_file.xfdl", function() {


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function(obj, e){


        /*

            var jobSysCd = "CMD"; //업무구분코드 CMD,BAS....
            var subDir = "manual";	//세부업무약어
            var atchSrcKey = '1689';//테이블의 키 값  //RESOURCEID
            var tableName = "MANUAL";  //RESOURCETYPE
            var comments = "manual";  //파일설명 //
            var fileCnt = "5"; // 업로드 수

        	*/

        	var jobSysCd = "HRA"; //업무구분코드 CMD,BAS....
            var subDir = "pubic_board";	//세부업무약어
            var atchSrcKey = '0';//테이블의 키 값  //RESOURCEID
            var tableName = "pubic_board";  //RESOURCETYPE
            var comments = "제목의 파일성격을 활용...";  //파일설명 //
            var fileCnt = "5"; // 업로드 수


        	this.div_file.form.jobSysCd = jobSysCd;
        	this.div_file.form.subDir = subDir;
        	this.div_file.form.atchSrcKey = atchSrcKey;
        	this.div_file.form.fileExts = '';
        	this.div_file.form.tableName = tableName;
        	this.div_file.form.desc = '';
        	this.fv_nFileCnt = fileCnt;

        	this.nfn_formInit(obj);

        	this.div_file.form.fn_search();




        	// single............................

        	var jobSysCd = "SINGLE"; //업무구분코드 CMD,BAS....
            var subDir = "single_board";	//세부업무약어
            var atchSrcKey = '1';//테이블의 키 값  //RESOURCEID
            var tableName = "single_board";  //RESOURCETYPE
            var comments = "single test 단건처리...";  //파일설명 //
            var fileCnt = "1"; // 업로드 수


        	this.div_file00.form.jobSysCd = jobSysCd;
        	this.div_file00.form.subDir = subDir;
        	this.div_file00.form.atchSrcKey = atchSrcKey;
        	this.div_file00.form.fileExts = '';
        	this.div_file00.form.tableName = tableName;
        	this.div_file00.form.desc = '';
        	this.div_file00.form.sCallBack = 'JJJJCallback';
        	this.div_file00.form.sBeforeFn = 'beforeFnCallback';

        	this.div_file00.form.loadCallback = "loadCallBack";

        	this.div_file00.form.fn_search();












        };


        this.fn_search = function(obj,e){
        trace('debug test');


        trace('next');

        	alert('real time append script');

        trace('next2222');
        };


        this.Button01_onclick = function(obj,e) {


        /*

            var jobSysCd = "CMD"; //업무구분코드 CMD,BAS....
            var subDir = "manual";	//세부업무약어
            var atchSrcKey = '1689';//테이블의 키 값  //RESOURCEID
            var tableName = "MANUAL";  //RESOURCETYPE
            var comments = "manual";  //파일설명 //
            var fileCnt = "5"; // 업로드 수

        	*/

        	var jobSysCd = "HRA"; //업무구분코드 CMD,BAS....
            var subDir = "pubic_board";	//세부업무약어
            var atchSrcKey = '0';//테이블의 키 값  //RESOURCEID
            var tableName = "pubic_board";  //RESOURCETYPE
            var comments = "제목의 파일성격을 활용...";  //파일설명 //
            var fileCnt = "5"; // 업로드 수

            var oArg = { arg_jobSysCd:jobSysCd
        	           , arg_atchSrcKey:atchSrcKey
        			   , arg_tableName:tableName
        			   , arg_desc:comments
        			   , arg_subDir:subDir
        			   , arg_fileCnt:fileCnt
        			   };
            this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");


        };

        this.Button01_00_onclick = function(obj,e) {
          alert('as 화면중 파일 다루는 화면 발견시 처리');
        };

        this.Button01_01_onclick = function(obj,e)
        {
          this.div_file.form.fn_upload();
        };

        this.Button01_single_onclick = function(obj,e)
        {

                var fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        	var strService = nexacro.getEnvironment().services["svcurl"].url;



        		var upUrl = fv_upUrl + "/comm/uploadFile/SINGLE/single_board.do";
        		trace("this.fv_upUrl : " + fv_upUrl);
        		trace("fn_upload url : " + upUrl);

        		// waitCursor 보여주기
        		//this.setWaitCursor(true, true);

        	this.div_file00.form.fn_upload();
        };
        //this.SUCC_YN = 'ssssssssssssssssss';

        this.beforeFnCallback = function(a,b,c){
          trace( 'beforeFnCallback callered' );
          return true;
        }

        this.JJJJCallback = function(a,b,c){
        	this.div_file00.form.fn_search();
        }


        /*

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "JOB_SYS_CD", this.jobSysCd);
        	this.ds_search.setColumn(0, "ATCH_SRC_KEY", this.atchSrcKey);
        	this.ds_search.setColumn(0, "ATCH_TY_CD", this.atchTyCd);
        	this.ds_search.setColumn(0, "TABLE_NAME", this.tableName);
        	var sSvcID = "selectAtchFileList";
        	var sController = "/cmsa01200/selectAtchFileList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_file=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectAtchFileList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        */






        this.Button01_load_onclick = function(obj,e) {
        	var jobSysCd = "SINGLE"; //업무구분코드 CMD,BAS....
            var subDir = "single_board";	//세부업무약어
            var atchSrcKey = '1';//테이블의 키 값  //RESOURCEID
            var tableName = "single_board";  //RESOURCETYPE
            var comments = "single test 단건처리...";  //파일설명 //
            var fileCnt = "1"; // 업로드 수


        	this.div_file00.form.jobSysCd = jobSysCd;
        	this.div_file00.form.subDir = subDir;
        	this.div_file00.form.atchSrcKey = atchSrcKey;
        	this.div_file00.form.fileExts = '';
        	this.div_file00.form.tableName = tableName;
        	this.div_file00.form.desc = '';
        	this.div_file00.form.sCallBack = 'JJJJCallback';
        	this.div_file00.form.sBeforeFn = 'beforeFnCallback';

        	this.div_file00.form.loadCallback = "loadCallBack";

        	this.div_file00.form.fn_search();

        };





        this.loadCallBack = function( fileInfo ){

          var keys = Object.keys(fileInfo);

          var setText = '';

          for( var i = 0; i < keys.length; i++ ){
            setText += keys[i]+' : '+fileInfo[keys[i]]+'\r\n';
          }

        	this.txa_00.set_value(setText);


        }

        this.Button01_single_down_onclick = function(obj,e)
        {

        	var bSucc = this.div_file00.form.download();
        	alert(bSucc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button01_00.addEventHandler("onclick",this.Button01_00_onclick,this);
            this.Button01_01.addEventHandler("onclick",this.Button01_01_onclick,this);
            this.Button01_01_00.addEventHandler("onclick",this.Button01_single_onclick,this);
            this.Button01_01_00_00.addEventHandler("onclick",this.Button01_load_onclick,this);
            this.Button01_01_00_01.addEventHandler("onclick",this.Button01_single_down_onclick,this);
        };
        this.loadIncludeScript("template01_file.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
