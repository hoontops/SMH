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
            obj = new Dataset("ds_exsit_data", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/><Column id=\"MES고객명\" type=\"STRING\" size=\"256\"/><Column id=\"Site별고객명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"대표자명\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"Fax번호\" type=\"STRING\" size=\"256\"/><Column id=\"납품처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_orginal", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/><Column id=\"MES고객명\" type=\"STRING\" size=\"256\"/><Column id=\"Site별고객명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"대표자명\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"Fax번호\" type=\"STRING\" size=\"256\"/><Column id=\"납품처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">황인섭,마사로시</Col><Col id=\"주소\">경기 수원시 영통구 매탄동 416</Col><Col id=\"MES고객명\">도시바삼성</Col><Col id=\"고객ID\">1016</Col><Col id=\"사업자번호\">124-86-17441</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">최혜원</Col><Col id=\"주소\">경기 평택 서탄면 금암2길 48-5</Col><Col id=\"MES고객명\">제성</Col><Col id=\"고객ID\">10168</Col><Col id=\"사업자번호\">134-24-98083</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">이윤우</Col><Col id=\"주소\">충남 아산시 배방면 북수리 산74</Col><Col id=\"MES고객명\">삼성전자-온양</Col><Col id=\"고객ID\">1017</Col><Col id=\"사업자번호\">312-85-05185</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">김기순</Col><Col id=\"주소\">경남 창원시 마산회원구 양덕동 973-6번지</Col><Col id=\"MES고객명\">노키아티엠씨</Col><Col id=\"고객ID\">1018</Col><Col id=\"사업자번호\">608-81-07219</Col><Col id=\"SiteID\">IFC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_exsit_data2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/><Column id=\"MES고객명\" type=\"STRING\" size=\"256\"/><Column id=\"Site별고객명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"대표자명\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"Fax번호\" type=\"STRING\" size=\"256\"/><Column id=\"납품처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","95","10","225","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("데이터존재");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","95","70",null,"170","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_exsit_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"고객ID\"/><Cell col=\"4\" text=\"MES고객명\"/><Cell col=\"5\" text=\"Site별고객명\"/><Cell col=\"6\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:사업자번호\"/><Cell col=\"3\" text=\"bind:고객ID\"/><Cell col=\"4\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Site별고객명\"/><Cell col=\"6\" text=\"bind:설명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","335","10","235","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("데이터 미존재");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","95","255",null,"170","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_exsit_data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"고객ID\"/><Cell col=\"4\" text=\"MES고객명\"/><Cell col=\"5\" text=\"Site별고객명\"/><Cell col=\"6\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:사업자번호\"/><Cell col=\"3\" text=\"bind:고객ID\"/><Cell col=\"4\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Site별고객명\"/><Cell col=\"6\" text=\"bind:설명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00_00_00","95","580",null,"170","14",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_exsit_data2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SiteID\"/><Cell col=\"1\" text=\"사업자번호\"/><Cell col=\"2\" text=\"고객ID\"/><Cell col=\"3\" text=\"MES고객명\"/><Cell col=\"4\" text=\"Site별고객명\"/></Band><Band id=\"body\"><Cell text=\"bind:SiteID\"/><Cell col=\"1\" text=\"bind:사업자번호\"/><Cell col=\"2\" text=\"bind:고객ID\"/><Cell col=\"3\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:Site별고객명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","27","106","43","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00","27","330","43","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("미적용");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","95","468","225","45",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("exsit data");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_00","650","480","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("not Found Data 적용");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_2","345","480","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("데이터 존재");
            this.addChild(obj.name, obj);

            obj = new Div("div_monthFrom","725","19","165","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("____-__");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","905","15","90","45",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("년월");
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
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("template02_rowsNotFound.xfdl", function() {
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
          this.nfn_formInit(obj); //....필수
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
        this.customCallBack = function(svcId, b, c){
          if( svcId == 'test_1' ){
            this.notFoundView(this.grd_00);  // 적용 하려면 데이터 받은 콜백에서 notFoundView 함수 호출
          }
          else if( svcId == 'test_2' ){
            this.notFoundView(this.grd_00);  // 적용 하려면 데이터 받은 콜백에서 notFoundView 함수 호출
          }
          else if( svcId == 'test_3' ){
            if( this.ckb_00.value == true ){
              this.notFoundView(this.grd_00_00_00);  // 적용 하려면 데이터 받은 콜백에서 notFoundView 함수 호출
        	}
        	else{  // 적용 안하려면 데이터 받은 콜백에서 아무것도 안하면 되고... 원래 하듯이 하면 됨.
        	}
          }
        }


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 부모한테 데이터 보내기
        this.Button00_onclick = function(obj,e){
          // 가짜로 데이터 받아왔다고 치자
          this.ds_exsit_data.clearData();
          this.ds_exsit_data.copyData( this.ds_orginal );




          // 데이터 호출하기 했다고 치고...중요한건 콜백.
          this.gfn_transaction('test_1','','','','','customCallBack',0,1);
        };

        // 부모한테 데이터 보내고 난 닫고..
        this.Button00_00_onclick = function(obj,e){
          this.ds_exsit_data.clearData();


          // 데이터 호출하기 했다고 치고...중요한건 콜백.
          this.gfn_transaction('test_2','','','','','customCallBack',0,1);
        };


        this.Button00_01_onclick = function(obj,e) {

          this.ds_exsit_data2.clearData();
          if( this.ckb_2.value == true ){ // 데이터 생성
            this.ds_exsit_data2.copyData( this.ds_orginal );
          }
          if(!this.ckb_00.value){
            this.notFoundViewClear(this.grd_00_00_00); // 동적으로 적용 했다가 안했다가 할때는 적용값 clear 가 필요..
          }


          // 데이터 호출하기 했다고 치고...중요한건 콜백.
          this.gfn_transaction('test_3','','','','','customCallBack',0,1);
        };

        this.Button00_00_00_onclick = function(obj,e)
        {
          var month = this.div_monthFrom.form.fn_getText();
          alert( month );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.Button00_01.addEventHandler("onclick",this.Button00_01_onclick,this);
            this.Button00_00_00.addEventHandler("onclick",this.Button00_00_00_onclick,this);
        };
        this.loadIncludeScript("template02_rowsNotFound.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
