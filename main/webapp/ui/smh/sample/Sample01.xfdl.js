(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample01");
            this.set_titletext("팝업오픈");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rtn_1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn_2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">3</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">4</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">5</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">6</Col></Row><Row><Col id=\"Column0\">7</Col><Col id=\"Column1\">7</Col></Row><Row><Col id=\"Column0\">8</Col><Col id=\"Column1\">8</Col></Row><Row><Col id=\"Column0\">9</Col><Col id=\"Column1\">9</Col></Row><Row><Col id=\"Column0\">10</Col><Col id=\"Column1\">10</Col></Row><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">11</Col></Row><Row><Col id=\"Column0\">12</Col><Col id=\"Column1\">12</Col></Row><Row><Col id=\"Column0\">13</Col><Col id=\"Column1\">13</Col></Row><Row><Col id=\"Column0\">14</Col><Col id=\"Column1\">14</Col></Row><Row><Col id=\"Column0\">15</Col><Col id=\"Column1\">15</Col></Row><Row><Col id=\"Column0\">16</Col><Col id=\"Column1\">16</Col></Row><Row><Col id=\"Column0\">17</Col><Col id=\"Column1\">17</Col></Row><Row><Col id=\"Column0\">18</Col><Col id=\"Column1\">18</Col></Row><Row><Col id=\"Column0\">19</Col><Col id=\"Column1\">19</Col></Row><Row><Col id=\"Column0\">20</Col><Col id=\"Column1\">20</Col></Row><Row><Col id=\"Column0\">21</Col><Col id=\"Column1\">21</Col></Row><Row><Col id=\"Column0\">22</Col><Col id=\"Column1\">22</Col></Row><Row><Col id=\"Column0\">23</Col><Col id=\"Column1\">23</Col></Row><Row><Col id=\"Column0\">24</Col><Col id=\"Column1\">24</Col></Row><Row><Col id=\"Column0\">25</Col><Col id=\"Column1\">25</Col></Row><Row><Col id=\"Column0\">26</Col><Col id=\"Column1\">26</Col></Row><Row><Col id=\"Column0\">27</Col><Col id=\"Column1\">27</Col></Row><Row><Col id=\"Column0\">28</Col><Col id=\"Column1\">28</Col></Row><Row><Col id=\"Column0\">29</Col><Col id=\"Column1\">29</Col></Row><Row><Col id=\"Column0\">30</Col><Col id=\"Column1\">30</Col></Row><Row><Col id=\"Column0\">31</Col><Col id=\"Column1\">31</Col></Row><Row><Col id=\"Column0\">32</Col><Col id=\"Column1\">32</Col></Row><Row><Col id=\"Column0\">33</Col><Col id=\"Column1\">33</Col></Row><Row><Col id=\"Column0\">34</Col><Col id=\"Column1\">34</Col></Row><Row><Col id=\"Column0\">35</Col><Col id=\"Column1\">35</Col></Row><Row><Col id=\"Column0\">36</Col><Col id=\"Column1\">36</Col></Row><Row><Col id=\"Column0\">37</Col><Col id=\"Column1\">37</Col></Row><Row><Col id=\"Column0\">38</Col><Col id=\"Column1\">38</Col></Row><Row><Col id=\"Column0\">39</Col><Col id=\"Column1\">39</Col></Row><Row><Col id=\"Column0\">40</Col><Col id=\"Column1\">40</Col></Row><Row><Col id=\"Column0\">41</Col><Col id=\"Column1\">41</Col></Row><Row><Col id=\"Column0\">42</Col><Col id=\"Column1\">42</Col></Row><Row><Col id=\"Column0\">43</Col><Col id=\"Column1\">43</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">여</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">남</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">홍길순</Col><Col id=\"Column2\">0</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">이순신</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">고길동</Col><Col id=\"Column2\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","24","31","212","39",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달(Modal) 팝업창 오픈");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa_return","24","78",null,null,"127","5",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0%","4",null,"21","2.39%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("모달(Modal) 팝업창 호출 후 팝업창으로 부터 파라미터 전달 샘플");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","27.07%","31",null,"39","51.09%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("모달리스(Modaless) 팝업창 오픈");
            this.addChild(obj.name, obj);

            obj = new Button("btn_msgBox",null,"152","115","31","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("공통 메세지");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"200","115","31","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장 메세지 알림");
            this.addChild(obj.name, obj);

            obj = new Button("btn_msg2",null,"259","112","30","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("this.gfn_messageBox()");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample01.xfdl","lib::comLib.xjs");
        this.registerScript("Sample01.xfdl", function() {
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        this.ParserStr = "^&^";

        this.form_onload = function (obj, e)
        {
        	/* Form onload 시 가장 먼저 호출되는 공통함수 - 필수 */
        	this.gfn_formOnLoad(obj);



        	trace("this.name : " + this.name);
        	trace("this.url : " + this.url);

        	trace("this.parent.pv_menuId : " + this.parent.pv_menuId);

        	trace("this.menuParam : " + this.gfn_getFrameAguments("menuParam"));
        };


        this.Button00_onclick = function (obj, e)
        {
        	this.txa_return.set_value("");
        	this.ds_rtn_1.clear();
        	this.ds_rtn_2.clear();

        	var oArg = {
        		arg1 : "타이틀 보이기",
        		arg2 : "bbb"
        	};
        	// alert(oArg[1]);

        	this.gfn_openPopup("StringReturnSample", "sample::Sample01_pop.xfdl", oArg, "");
        };

        /*----------------------------------------------------------------------------------------------
         * 설명      : 팝업 콜백 함수
         *---------------------------------------------------------------------------------------------*/
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	trace("sPopupId ==> " + sPopupId + ", Variant ==>" + Variant);

        	switch (sPopupId)
        	{
        		case "StringReturnSample":
        			// 반환받은 문자열데이타 형변환(String, Array, Object) 처리
        			var rtn = this.gfn_getPopupRtn();


        			if (rtn instanceof Array)
        			{
        				// Array 인 경우
        				var rtnStr = "";
        				for (var i in rtn)
        				{
        					rtnStr += i + " 번째 Array 내용 >>>> " + rtn[i] + "\n\n";

        					if (rtn[i].indexOf("<Dataset") != -1 && rtn[i].indexOf("</Dataset>") != -1)
        					{
        						if (i == 1)
        						{
        							this.ds_rtn_1.loadXML(rtn[i]);
        						}
        						else if (i == 2)
        						{
        							this.ds_rtn_2.loadXML(rtn[i]);
        						}
        					}
        				}
        				this.txa_return.set_value(rtnStr);
        			}
        			else if (rtn instanceof Object)
        			{
        				// Object 인 경우
        				var rtnStr = "";
        				for (var i in rtn)
        				{
        					var rtnVal = decodeURI(rtn[i]);
        					rtnStr += i + " 번째 Object 내용 >>>> " + rtnVal + "\n\n";

        					if (rtnVal.indexOf("<Dataset") != -1 && rtnVal.indexOf("</Dataset>") != -1)
        					{
        						if (i == "key2")
        						{
        							this.ds_rtn_1.loadXML(rtnVal);
        						}
        						else if (i == "key3")
        						{
        							this.ds_rtn_2.loadXML(rtnVal);
        						}
        					}
        				}
        				this.txa_return.set_value(rtnStr);
        			}
        			else
        			{
        				// 문자열인 경우
        				this.txa_return.set_value("전달받은 내용 >>>> " + Variant);
        			}
        			break;
        		case "commonMessage":
        			trace("메세지 팝업 종료...");
        			// 후단 스크립트 실행 가능
        			break;
        		default:
        			break;
        	}
        };

        // 파라미터 반환
        this.fn_getPopupRtn = function (sPopupId, Variant)
        {
        	if (String(Variant).length > 0)
        	{
        		if (String(Variant).indexOf(this.ParserStr) != -1)
        		{
        			var arr = Variant.split(this.ParserStr);
        			return arr;
        		}
        		else if (String(Variant).substr(0, 1) == "{" && String(Variant).substr(String(Variant).length - 1, 1) == "}")
        		{
        			var obj = this.gf_StringToJSON(Variant);
        			return obj;
        		}
        		else
        		{
        			return Variant;
        		}
        		return;
        	}
        	else
        	{
        		return Variant;
        	}
        };

        // Modal 팝업화면 호출
        this.popup = function (sPopupId, sPopupUrl, sArgument)
        {
        	var childFrame = new ChildFrame;

        	childFrame.init(sPopupId, "absolute", -1, -1, 400, 400, null, null, sPopupUrl);

        	childFrame.set_openalign("center middle");
        	childFrame.set_showtitlebar(true);
        	childFrame.set_autosize(true);
        	childFrame.set_resizable(false);

        	childFrame.showModal(this.getOwnerFrame(), sArgument, this, "fn_callback", false);
        };

        /******************************************************************************
         * Function name: gf_JSONToString
         * Description	: JSON Object를 JSON String으로 변환하여 리턴한다.
         * Parameter 	: JSON Object
         * Return		: JSON String
         ******************************************************************************/
        this.gf_JSONToString = function (object)
        {
        	var isArray = (object.join && object.pop && object.push
        		 && object.reverse && object.shift && object.slice && object.splice);
        	var results = [];

        	for (var i in object)
        	{
        		var value = object[i];

        		results.push((isArray ? "" : "\"" + i.toString() + "\" : ")
        			 + (typeof value == "string" ? "\"" + value + "\"" : value));
        	}

        	return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
        };

        /******************************************************************************
         * Function name: gf_StringToJSON
         * Description	: JSON String을 JSON Object으로 변환하여 리턴한다.
         * Parameter 	: JSON String
         * Return		: JSON Object
         ******************************************************************************/
        this.gf_StringToJSON = function (strJson)
        {
        	return eval("(" + strJson + ")");
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.txa_return.set_value("");
        	this.ds_rtn_1.clear();
        	this.ds_rtn_2.clear();

        	var oArg = {
        		arg1 : "타이틀 보이기",
        		arg2 : "bbb"
        	};
        	// alert(oArg[1]);


        	// var sOption = "titletext=샘플팝업,modeless=true";

        	/* reload 처리 필요시 - 이미 해당 ID로 열린 팝업일 때 함수 호출 가이드
        	 *사용법 - reload 시 autosize=true 이면, 팝업 사이즈가 form에 따라 변경된다.
        	 * 			따라서 reload 사용시는 autosize=false 옵션을 반드시 같이 사용한다.
        	 * 			또한 autosize가 안되므로 팝업사이즈(width, height)는 명확히 기술한다.
        	 */
        	var sOption = "titletext=샘플팝업,modeless=true,reload=true,autosize=false,width=1000,height=420";

        	this.gfn_openPopup("StringReturnSample", "sample::Sample01_pop.xfdl", oArg, sOption);
        };

        // 공통메세지 박스 사용 샘플
        this.btn_msgBox_onclick = function (obj, e)
        {
        	var sMsg = "테스트 message 입니다.";
        	sMsg += "테스트 message 입니다.";
        	sMsg += "테스트 message 입니다.";
        	sMsg += "테스트 message 입니다.";
        	sMsg += "테스트 message 입니다.";

        	// this.gfn_messageBox(sMsg, "fn_popupAfter");
        	this.gfn_messageBox(sMsg);
        };



        this.Button02_onclick = function (obj, e)
        {
        	this.gfn_messageBox2("저장되었습니다.aaa");
        };

        /**
         * 사용자 정의 메세지 보여주기
         * @param  {string} msg - 메세지 문자열
         * @return  N/A
         * @example
         * @memberOf public
         */
        this.gfn_messageBox2 = function (msg)
        {
        	if (nexacro.getApplication().gv_quickView == "quick")
        	{
        		trace("QuickView 에서는 지원하지 않습니다.");
        		return;
        	}
        	var objForm = gv_appWorkFrameSet.getActiveFrame().form;

        	var objDiv;
        	if (objForm.components["div_workFrameMessageBox"])
        	{
        		objDiv = objForm.components["div_workFrameMessageBox"];
        	}
        	else
        	{
        		objDiv = new Div();
        		objDiv.init("div_workFrameMessageBox", "absolute", 0, 0, null, 30, 0, null);
        		objForm.addChild("div_workFrameMessageBox", objDiv);
        		objDiv.show();
        	}
        	objDiv.set_visible(true);


        	if (!this.gfn_isNull(msg))
        	{
        		objDiv.set_text(msg);
        	}

        	$('div[id*="div_workFrameMessageBox"]').slideToggle(3000, function ()
        	{
        		$('div[id*="div_workFrameMessageBox"]').slideDown("fast", function ()
        		{
        			trace("end slide..");
        		});
        	});
        };


        this.btn_msg2_onclick = function (obj, e)
        {
        	this.gfn_messageBox("저장되었습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn_msgBox.addEventHandler("onclick",this.btn_msgBox_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.btn_msg2.addEventHandler("onclick",this.btn_msg2_onclick,this);
        };
        this.loadIncludeScript("Sample01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
