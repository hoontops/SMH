(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("calendar");
            this.set_titletext("Calendar");
            if (Form == this.constructor)
            {
                this._setFormPosition(150,20);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_hour", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">00</Col><Col id=\"value\">00</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"value\">01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">02</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"value\">03</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"value\">04</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"value\">05</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"value\">06</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"value\">07</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"value\">08</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"value\">09</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"value\">10</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"value\">11</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"value\">12</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_min", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">00</Col><Col id=\"code\">00</Col></Row><Row><Col id=\"code\">01</Col><Col id=\"value\">01</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"value\">02</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"value\">03</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"value\">04</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"value\">05</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"value\">06</Col></Row><Row><Col id=\"code\">07</Col><Col id=\"value\">07</Col></Row><Row><Col id=\"code\">08</Col><Col id=\"value\">08</Col></Row><Row><Col id=\"code\">09</Col><Col id=\"value\">09</Col></Row><Row><Col id=\"code\">10</Col><Col id=\"value\">10</Col></Row><Row><Col id=\"code\">11</Col><Col id=\"value\">11</Col></Row><Row><Col id=\"code\">12</Col><Col id=\"value\">12</Col></Row><Row><Col id=\"code\">13</Col><Col id=\"value\">13</Col></Row><Row><Col id=\"code\">14</Col><Col id=\"value\">14</Col></Row><Row><Col id=\"code\">15</Col><Col id=\"value\">15</Col></Row><Row><Col id=\"code\">16</Col><Col id=\"value\">16</Col></Row><Row><Col id=\"code\">17</Col><Col id=\"value\">17</Col></Row><Row><Col id=\"code\">18</Col><Col id=\"value\">18</Col></Row><Row><Col id=\"code\">19</Col><Col id=\"value\">19</Col></Row><Row><Col id=\"code\">20</Col><Col id=\"value\">20</Col></Row><Row><Col id=\"code\">21</Col><Col id=\"value\">21</Col></Row><Row><Col id=\"code\">22</Col><Col id=\"value\">22</Col></Row><Row><Col id=\"code\">23</Col><Col id=\"value\">23</Col></Row><Row><Col id=\"code\">24</Col><Col id=\"value\">24</Col></Row><Row><Col id=\"code\">25</Col><Col id=\"value\">25</Col></Row><Row><Col id=\"code\">26</Col><Col id=\"value\">26</Col></Row><Row><Col id=\"code\">27</Col><Col id=\"value\">27</Col></Row><Row><Col id=\"code\">28</Col><Col id=\"value\">28</Col></Row><Row><Col id=\"code\">29</Col><Col id=\"value\">29</Col></Row><Row><Col id=\"code\">30</Col><Col id=\"value\">30</Col></Row><Row><Col id=\"code\">31</Col><Col id=\"value\">31</Col></Row><Row><Col id=\"code\">32</Col><Col id=\"value\">32</Col></Row><Row><Col id=\"code\">33</Col><Col id=\"value\">33</Col></Row><Row><Col id=\"code\">34</Col><Col id=\"value\">34</Col></Row><Row><Col id=\"code\">35</Col><Col id=\"value\">35</Col></Row><Row><Col id=\"code\">36</Col><Col id=\"value\">36</Col></Row><Row><Col id=\"code\">37</Col><Col id=\"value\">37</Col></Row><Row><Col id=\"code\">38</Col><Col id=\"value\">38</Col></Row><Row><Col id=\"code\">39</Col><Col id=\"value\">39</Col></Row><Row><Col id=\"code\">40</Col><Col id=\"value\">40</Col></Row><Row><Col id=\"code\">41</Col><Col id=\"value\">41</Col></Row><Row><Col id=\"code\">42</Col><Col id=\"value\">42</Col></Row><Row><Col id=\"code\">43</Col><Col id=\"value\">43</Col></Row><Row><Col id=\"code\">44</Col><Col id=\"value\">44</Col></Row><Row><Col id=\"code\">45</Col><Col id=\"value\">45</Col></Row><Row><Col id=\"code\">46</Col><Col id=\"value\">46</Col></Row><Row><Col id=\"code\">47</Col><Col id=\"value\">47</Col></Row><Row><Col id=\"code\">48</Col><Col id=\"value\">48</Col></Row><Row><Col id=\"code\">49</Col><Col id=\"value\">49</Col></Row><Row><Col id=\"code\">50</Col><Col id=\"value\">50</Col></Row><Row><Col id=\"code\">51</Col><Col id=\"value\">51</Col></Row><Row><Col id=\"code\">52</Col><Col id=\"value\">52</Col></Row><Row><Col id=\"code\">53</Col><Col id=\"value\">53</Col></Row><Row><Col id=\"code\">54</Col><Col id=\"value\">54</Col></Row><Row><Col id=\"code\">55</Col><Col id=\"value\">55</Col></Row><Row><Col id=\"code\">56</Col><Col id=\"value\">56</Col></Row><Row><Col id=\"code\">57</Col><Col id=\"value\">57</Col></Row><Row><Col id=\"code\">58</Col><Col id=\"value\">58</Col></Row><Row><Col id=\"code\">59</Col><Col id=\"value\">59</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calStart","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_data","0","20","267","390",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStart","10","10",null,"280","10",null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_period");
            obj.set_usetrailingday("true");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Combo("Combo04","10","300","50","20",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_innerdataset("ds_hour");
            obj.set_displayrowcount("6");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("08");
            obj.set_value("08");
            obj.set_index("8");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Combo("Combo05","85","300","50","20",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("value");
            obj.set_innerdataset("ds_min");
            obj.set_displayrowcount("6");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("30");
            obj.set_value("30");
            obj.set_index("30");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Radio("Radio00","165","300","90","21",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("rdo_lineBox");
            obj.set_direction("vertical");
            var pdiv_data_form_Radio00_innerdataset = new nexacro.NormalDataset("pdiv_data_form_Radio00_innerdataset", obj);
            pdiv_data_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">오전</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">오후</Col></Row></Rows>");
            obj.set_innerdataset(pdiv_data_form_Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Button("Button00","135","340","60","28",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Button("Button01","70","340","60","28",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","60","300","20","20",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("6");
            obj.set_text("시");
            obj.set_cssclass("sta_WF_unit");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","135","300","20","20",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("7");
            obj.set_text("분");
            obj.set_cssclass("sta_WF_unit");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01","70","320","125","20",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00","85","368","100","20",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_01","80","290","125","10",null,null,null,null,null,null,this.pdiv_data.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.pdiv_data.addChild(obj.name, obj);

            obj = new Edit("dateTime","0","424","130","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_displaynulltext("null");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",150,20,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_calendar.xfdl", function() {
        /***************************************************************************************
         * 시스템명	 	: IFC MES시스템
         * 업무명 		: UI공통
         * 파일명 		: com_calendar.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.09.24
         *
         * 설  명		: 시간이 있는 달력
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /***************************************************************************************
         * 1. 필수 include(필수)
         ****************************************************************************************/
        // include "lib::comLib.xjs";

        /***************************************************************************************
         * 2. FORM 변수 선언 영역
         ****************************************************************************************/


        /***************************************************************************************
         * 3. FORM 정의
         ****************************************************************************************/


        /* 온로드시 초기값 세팅 */
        this.calendar_onload = function (obj, e)
        {
        	var initDate = this.fn_dateSetting();
        	initDate = initDate + "0830";
        	if (this.calStart.value == null)
        	{
        		this.calStart.set_value(initDate);
        	}

        };

        /* 취소버튼 클릭 시 */
        this.pdiv_data_Button01_onclick = function (obj, e)
        {
        	this.pdiv_data.closePopup();
        };

        /* 확인버튼 클릭 시 */
        this.pdiv_data_Button00_onclick = function (obj, e)
        {
        	var objDate;
        	var objHour;
        	var objMin;
        	var sDate;
        	objDate = this.pdiv_data.form.calStart.value;
        	objHour = this.pdiv_data.form.Combo04.value;
        	objMin = this.pdiv_data.form.Combo05.value;

        	// 'PM'일때 시간값에 12시간 더해줌
        	if (this.pdiv_data.form.Radio00.value == "2")
        	{
        		objHour = objHour - (-12);
        	}

        	// 년월일이 null일때 오늘날짜 세팅
        	if (objDate == null)
        	{
        		objDate = this.fn_dateSetting();
        	}

        	sDate = objDate + objHour + objMin + "00000";
        	this.calStart.set_value(sDate);
        	this.dateTime.set_value(this.gfn_left(sDate, 12));


        	this.pdiv_data.closePopup();
        };

        /* 달력 호출 위치 세팅*/
        this.calStart_ondropdown = function (obj, e)
        {
        	var nX = system.screenToClientX(nexacro.getApplication().mainframe, system.clientToScreenX(obj, 0));
        	var nY = system.screenToClientY(nexacro.getApplication().mainframe, system.clientToScreenY(obj, 0)) + parseInt(obj.getOffsetHeight());

        	this.pdiv_data.trackPopup(nX, nY);

        	return false;
        };

        // this.pdiv_data_onpopup = function(obj:PopupDiv, e:nexacro.EventInfo)
        // {
        // var sdatetime = this.calStart.value;
        // var sdate = sdatetime.substring(0,7);
        // trace(sdate);
        //
        // }


        /* 년월일 세팅(현재날짜) */
        this.fn_dateSetting = function ()
        {
        	var tempDate = new Date();
        	var nYear = tempDate.getYear();
        	nYear = nYear.toString();
        	var nMonth = tempDate.getMonth() + 1;
        	if (nMonth < 10)
        	{
        		nMonth = "0" + nMonth.toString();
        	}
        	else
        	{
        		nMonth = nMonth.toString();
        	}
        	var nDay = tempDate.getDate();
        	if (nDay < 10)
        	{
        		nDay = "0" + nDay.toString();
        	}
        	else
        	{
        		nDay = nDay.toString();
        	}
        	var todayDate = (nYear + nMonth + nDay);

        	// tempDate.setDate(parseInt(this.pdiv_data.calStart.value, 10));
        	// tempDate.setHours(this.pdiv_data.Combo04.value, this.pdiv_data.Combo05.value);

        	return todayDate;
        };

        /* 입력된 날짜가 빨간색으로 표시되도록 이벤트처리 */
        this.calStart_onlbuttondown = function (obj, e)
        {
        	var aDate = this.gfn_left(this.calStart.value, 8);
        	this.pdiv_data.form.calStart.set_value(aDate);
        	if(this.calStart.value.length>=10){
        		var hour = nexacro.toNumber(this.calStart.value.substring(8,10));
        		this.pdiv_data.form.Radio00.set_value("1");
        		if(hour>=12){
        			hour = hour - 12;
        			this.pdiv_data.form.Radio00.set_value("2");
        		}
        		var prev = (hour<10)?"0":"";
        		this.pdiv_data.form.Combo04.set_value(prev + hour);
        	}
        	if(this.calStart.value.length>=12)
        		this.pdiv_data.form.Combo05.set_value(this.calStart.value.substring(10,12));
        }
        	// //'시' 콤보박스 변경시 이벤트
        	// this.pdiv_data_Combo04_onitemchanged = function(obj:Combo, e:nexacro.ItemChangeEventInfo)
        	// {
        	// if(this.pdiv_data.Combo04.value == "03")
        	// {
        	// if(this.pdiv_data.Radio00.value == 2)
        	// {
        	// this.alert("00시는 AM일때만 선택 가능합니다.");
        	// }
        	// }
        	// }


        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.calendar_onload,this);
            this.calStart.addEventHandler("ondropdown",this.calStart_ondropdown,this);
            this.calStart.addEventHandler("onlbuttondown",this.calStart_onlbuttondown,this);
            this.pdiv_data.form.Combo04.addEventHandler("onitemchanged",this.pdiv_data_Combo04_onitemchanged,this);
            this.pdiv_data.form.Button00.addEventHandler("onclick",this.pdiv_data_Button00_onclick,this);
            this.pdiv_data.form.Button01.addEventHandler("onclick",this.pdiv_data_Button01_onclick,this);
        };
        this.loadIncludeScript("com_calendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
