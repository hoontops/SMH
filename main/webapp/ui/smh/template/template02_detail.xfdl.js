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
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"사업자번호\" type=\"STRING\" size=\"256\"/><Column id=\"고객ID\" type=\"STRING\" size=\"256\"/><Column id=\"MES고객명\" type=\"STRING\" size=\"256\"/><Column id=\"Site별고객명\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"주소\" type=\"STRING\" size=\"256\"/><Column id=\"대표자명\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"Fax번호\" type=\"STRING\" size=\"256\"/><Column id=\"납품처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"Fax번호\"/><Col id=\"대표자명\">황인섭,마사로시</Col><Col id=\"주소\">경기 수원시 영통구 매탄동 416</Col><Col id=\"MES고객명\">도시바삼성</Col><Col id=\"고객ID\">1016</Col><Col id=\"사업자번호\">124-86-17441</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">최혜원</Col><Col id=\"주소\">경기 평택 서탄면 금암2길 48-5</Col><Col id=\"MES고객명\">제성</Col><Col id=\"고객ID\">10168</Col><Col id=\"사업자번호\">134-24-98083</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"수정일\">2020-03-20 16:05:00</Col><Col id=\"수정자\">INTERFACE</Col><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">이윤우</Col><Col id=\"주소\">충남 아산시 배방면 북수리 산74</Col><Col id=\"MES고객명\">삼성전자-온양</Col><Col id=\"고객ID\">1017</Col><Col id=\"사업자번호\">312-85-05185</Col><Col id=\"SiteID\">IFC</Col></Row><Row><Col id=\"생성일\">2020-03-06 02:36:33</Col><Col id=\"생성자\">정원식</Col><Col id=\"유효상태\">유효</Col><Col id=\"대표자명\">김기순</Col><Col id=\"주소\">경남 창원시 마산회원구 양덕동 973-6번지</Col><Col id=\"MES고객명\">노키아티엠씨</Col><Col id=\"고객ID\">1018</Col><Col id=\"사업자번호\">608-81-07219</Col><Col id=\"SiteID\">IFC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","560","35","390","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부른놈한테 다시 돌려 보내기");
            obj.set_font("22px/normal NanumSquareRoundL, NanumSquareRoundLight");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","35","26","490","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut viverra nunc, a condimentum tortor. Ut consequat erat finibus dolor iaculis volutpat. Maecenas id facilisis elit. Mauris lacinia interdum purus, eu varius diam lobortis hendrerit. Sed hendrerit arcu vitae neque consectetur, vel dictum est volutpat. Ut justo ante, feugiat vel malesuada in, malesuada in lorem. Sed mi libero, commodo id tempus sit amet, convallis non orci. Donec rhoncus nisl id tincidunt tincidunt. Suspendisse potenti. Fusce sit amet faucibus urna. Suspendisse porttitor a neque eu dictum. Vestibulum efficitur rhoncus nisi at sodales.");
            obj.set_wordWrap("char");
            obj.set_font(" ");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","25","260",null,"319","209",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"300\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"사업자번호\"/><Cell col=\"3\" text=\"고객ID\"/><Cell col=\"4\" text=\"MES고객명\"/><Cell col=\"5\" text=\"Site별고객명\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"대표자명\"/><Cell col=\"9\" text=\"전화번호\"/><Cell col=\"10\" text=\"Fax번호\"/><Cell col=\"11\" text=\"납품처\"/><Cell col=\"12\" text=\"매출처\"/><Cell col=\"13\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"14\" text=\"생성자\"/><Cell col=\"15\" text=\"생성일\"/><Cell col=\"16\" text=\"수정자\"/><Cell col=\"17\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:사업자번호\"/><Cell col=\"3\" text=\"bind:고객ID\"/><Cell col=\"4\" text=\"bind:MES고객명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:Site별고객명\"/><Cell col=\"6\" text=\"bind:설명\"/><Cell col=\"7\" text=\"bind:주소\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:대표자명\"/><Cell col=\"9\" text=\"bind:전화번호\"/><Cell col=\"10\" text=\"bind:Fax번호\"/><Cell col=\"11\" text=\"bind:납품처\"/><Cell col=\"12\" text=\"bind:매출처\"/><Cell col=\"13\" text=\"bind:유효상태\"/><Cell col=\"14\" text=\"bind:생성자\"/><Cell col=\"15\" text=\"bind:생성일\"/><Cell col=\"16\" text=\"bind:수정자\"/><Cell col=\"17\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00_00","35","140","490","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("돌려보내기");
            obj.set_wordWrap("char");
            obj.set_font(" ");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","560","180","390","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("부른놈한테 다시 돌려 보내고 닫기");
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
        this.registerScript("template02_detail.xfdl", function() {
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
          //this.nfn_formInit(obj); //...... 샘플이니깐 안항.
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

        // 부모가 날 부름
        this.fn_anyWhere = function( oArgs ){
        	this.TextArea00.set_value(oArgs.msg);
        	this.ds_grd00.clear();
        	this.ds_grd00.copyData(oArgs.sds);
        }


        // 부모 함수를 호출 하고.. 결과 받아 보기.
        this.sendMsg = function(){
          var sendMsg = this.TextArea00_00.value;
          var oArgs = {msg:sendMsg };
          var msg = this.gfn_getMaster().getDetailData(oArgs);
          //this.gfn_alert(msg);
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 부모한테 데이터 보내기
        this.Button00_onclick = function(obj,e){
          this.sendMsg();
        };

        // 부모한테 데이터 보내고 난 닫고..
        this.Button00_00_onclick = function(obj,e){
          this.sendMsg();
          this.gfn_detail_close();
        };

        // grid row change
        this.ds_grd00_canrowposchange = function(obj,e){
          var sendMsg = this.TextArea00_00.value;
          var addMsg = this.ds_grd00.getColumn(e.newrow, 2);
          this.TextArea00_00.set_value(sendMsg+'\r\n'+addMsg);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
            this.ds_grd00.addEventHandler("canrowposchange",this.ds_grd00_canrowposchange,this);
        };
        this.loadIncludeScript("template02_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
