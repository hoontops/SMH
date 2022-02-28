(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA10610M0");
            this.set_titletext("주소검색(DAUM API)");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static05",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0%","0","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"0","23","23","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","10","400","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("주소 검색");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","-4",null,"100%","15",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static_hline00","0%","0",null,"10","0%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"60","21","20","14",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            this.addChild(obj.name, obj);

            obj = new Static("Static_hline170","2",null,null,"10","1","35",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web","20","41","420","500",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.getSetter("onkillfocus").set("web_onkillfocus");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("searchPost.xfdl", function() {
        /***************************************************************************************
        * 시스템명 	:
        * 업무명 		: 주소검색(DAUM API호출)
        * 파일명 		:
        * 작성자 		:
        * 작성일 		:
        *
        * 설  명		: 주소검색(DAUM API호출) 호출 제공
        *---------------------------------------------------------------------------------------
        * 변경일		변경자		변경내역
        *---------------------------------------------------------------------------------------
        *
        *---------------------------------------------------------------------------------------
        ****************************************************************************************/

        /**************************************************************************
         * 10. 필수 include(필수)
        ***************************************************************************/

        /**************************************************************************
         * 20. FORM 변수 선언 영역
        ***************************************************************************/

        /**************************************************************************
         * 30. FORM 정의
        ***************************************************************************/
        //*****(필수) 화면 로딩후에 실행되는 함수
        this.fn_init = function(obj, e)
        {
        	//http://localhost:8011/html/drcr/searchPostCode.html
        	var sUrl = nexacro.getEnvironment().services["svcurl"].url;
        	sUrl = sUrl + "/html/searchPostCode.html";

        	this.web.set_url(sUrl);
        }

        /**************************************************************************
         * 40. TRANSACTION 영역
        ***************************************************************************/

        /**************************************************************************
         * 45. CALLBACK 영역
        ***************************************************************************/

        //webbrowser에서 넘어옴
        this.web_onusernotify = function(obj, e)
        {
        trace(e.userdata);
          var udata = e.userdata;
          var tstr = e.userdata+'';
          if( tstr.indexOf('{"zonecode') >= 0 ){
        	udata = JSON.parse(tstr);
          }


        	var postno       = udata.zonecode;		//5자리 새우편번호 사용

            if( postno ){
            var jibunAddress = udata.jibunAddress;
            var roadAddress  = udata.roadAddress;

            var buildingName = udata.buildingName;	//건물명
            var sido    	 = udata.sido;			//시/도
            var sigungu 	 = udata.sigungu;		//시/군/구
            var bcode        = udata.bcode;		//법정동/법정리 코드
            var bname    	 = udata.bname;		//법정동/법정리
            var bname1   	 = udata.bname1;		//법정리의 읍/면
            var roadname     = udata.roadname;		//도로명

        	trace('postno : '+postno);
            var arrJibun = (jibunAddress+"").split(" ");
            var arrRoad  = (roadAddress+"").split(" ");
            var jibuns = arrJibun[arrJibun.length-1].split("-");
            var roads = arrRoad[arrRoad.length-1].split("-");

            //return value
         	var rtnArray = new Array();
         	rtnArray[0]  = postno;			//우편번호
         	rtnArray[1]  = sido;			//시도
         	rtnArray[2]  = sigungu;			//구군
         	rtnArray[3]  = this.nfn_isNull(bname1) ? bname : bname1;	//읍면동(법정동)
         	rtnArray[4]  = jibuns[0];		//(구주소)번지
         	rtnArray[5]  = jibuns.length > 1 ? jibuns[1] : ""; //(구주소)지번
         	rtnArray[6]  = bcode; 			//(신주소)도로번호
         	rtnArray[7]  = roadname;	    //(신주소)도로명
         	rtnArray[8]  = roads[0];		//(신주소)본번
         	rtnArray[9]  = roads.length > 1 ? roads[1] : ""; //(신주소)부번
         	rtnArray[10] = buildingName;	//(신주소)건물명

         	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        	}
        	else{
        	trace('userdata not found');
        	}
        }

        /**************************************************************************
        * 50. 기타 함수 시작
        **************************************************************************/


        /**************************************************************************
         * 60. 이벤트
        ***************************************************************************/
        //버튼>>닫기 클릭
        this.btn_close_onclick = function(obj,  e)
        {
         	var rtnArray = new Array();
         	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        /**************************************************************************
         * 70. 페이징
        ***************************************************************************/

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.sta_title.addEventHandler("onclick",this.sta_title_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.web.addEventHandler("onusernotify",this.web_onusernotify,this);
        };
        this.loadIncludeScript("searchPost.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
