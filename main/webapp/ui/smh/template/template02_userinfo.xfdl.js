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
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"고객ID\">gv_userId</Col><Col id=\"사업자번호\">gf_getUserId</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"고객ID\">gv_userAcnt</Col><Col id=\"사업자번호\">gf_getUserAcnt</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"고객ID\">gv_loginId</Col><Col id=\"사업자번호\">gf_getLoginId</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"고객ID\">gv_personId</Col><Col id=\"사업자번호\">gf_getPersonId</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"고객ID\">gv_assignmentId</Col><Col id=\"사업자번호\">gf_getAssignmentId</Col></Row><Row><Col id=\"사업자번호\">gf_getUserNm</Col><Col id=\"고객ID\">gv_userNm</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_00","15","11","405","319",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"고객ID\"/><Cell col=\"4\" text=\"MES고객명\"/><Cell col=\"5\" text=\"Site별고객명\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"대표자명\"/><Cell col=\"9\" text=\"전화번호\"/><Cell col=\"10\" text=\"Fax번호\"/><Cell col=\"11\" text=\"납품처\"/><Cell col=\"12\" text=\"매출처\"/><Cell col=\"13\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"14\" text=\"생성자\"/><Cell col=\"15\" text=\"생성일\"/><Cell col=\"16\" text=\"수정자\"/><Cell col=\"17\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:사업자번호\"/><Cell col=\"3\" text=\"bind:고객ID\"/><Cell col=\"4\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Site별고객명\"/><Cell col=\"6\" text=\"bind:설명\"/><Cell col=\"7\" text=\"bind:주소\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:대표자명\"/><Cell col=\"9\" text=\"bind:전화번호\"/><Cell col=\"10\" text=\"bind:Fax번호\"/><Cell col=\"11\" text=\"bind:납품처\"/><Cell col=\"12\" text=\"bind:매출처\"/><Cell col=\"13\" text=\"bind:유효상태\"/><Cell col=\"14\" text=\"bind:생성자\"/><Cell col=\"15\" text=\"bind:생성일\"/><Cell col=\"16\" text=\"bind:수정자\"/><Cell col=\"17\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","530","11","480","739",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_wordWrap("char");
            obj.set_font(" ");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","430","11","90","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("All");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","15","350","405","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기존처럼 사용하고 싶을때");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","15","408","405","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신규방식으로 사용하고 싶을때");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
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
        this.registerScript("template02_userinfo.xfdl", function() {
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

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function(obj, e){
          //alert('detail init');
          this.nfn_formInit(obj); //...... 샘플이니깐 안항.
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

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // all
        this.Button00_onclick = function(obj,e){
          //this.sendMsg();

          var userInfo = this._userInfo;
          var keys = Object.keys(userInfo);

          var setText = '';

          for( var i = 0; i < keys.length; i++ ){
            setText += keys[i]+' : '+userInfo[keys[i]]+'\r\n';
        	trace(userInfo[keys[i]]);
          }

          this.TextArea00_00.set_value(setText);

        };

        // grid row change
        this.ds_grd00_canrowposchange = function(obj,e){
          var fnName = this.ds_grd00.getColumn(e.newrow, 2);
          var valStr = this.ds_grd00.getColumn(e.newrow, 3);

          //alert( fnName );
          //alert( valStr );
          var result = eval('this.'+fnName+'()');
          this.TextArea00_00.set_value(result);
        };









        this.Button00_00_onclick = function(obj,e){
        	var userName = this.gf_getUserNm();
        	alert(userName);
        };

        this.Button00_00_00_onclick = function(obj,e){
          alert( this._userInfo.userNm );



          this.gfn_Message("test_msg", null, "info", "ok");




        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
            this.ds_grd00.addEventHandler("canrowposchange",this.ds_grd00_canrowposchange,this);
        };
        this.loadIncludeScript("template02_userinfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
