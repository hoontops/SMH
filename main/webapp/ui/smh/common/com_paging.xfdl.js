(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("paging");
            this.set_titletext("공통_페이징");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_paging.xfdl", function() {
        /*
         Paging Module
         */

        // 페이지 표시용 버튼의 기본 사이즈
        // 컴포넌트에 표시될 내용에 맞게 사이즈는 조정된다.
        this.DEFAULT_PAGE_BUTTON_SIZE = [27, 24];

        // 버튼 최소 크기 지정
        this.MIN_PAGE_BUTTON_SIZE = [27, 24];

        // 버튼 사이 간격
        this.PAGE_BUTTON_GAP = 3;

        // 페이지 입력 기능 사용 여부
        this.USE_INPUT_PAGE = false;

        // 페이지 총카운트 보이기/안보이기
        this.USE_VIEW_TOTAL = false;

        this.Paging_onload = function (obj, e)
        {
        };

        /**
         * 페이징에 필요한 컴포넌트 생성 및 초기화
         * @param {number} listCount 한페이지에 보여질 목록 건수
         * @param {number} pageCount 페이지 개수
         * @param {function} pageChangeNotify 페이지 변경이 발생한 경우 호출될 함수로
         *                                    현재 선택된 페이지 번호를 인자를 넘긴다.
         * @param {object=} scope pageChangeNotify 실행시 this 로 사용할 scope
         */
        this.initPaging = function (listCount, pageCount, pageChangeNotify, scope)
        {
        	Eco.XComp.setUserProperty(this, "listCount", listCount);
        	Eco.XComp.setUserProperty(this, "pageCount", pageCount);
        	Eco.XComp.setUserProperty(this, "currentPage", 1);
        	Eco.XComp.setUserProperty(this, "pageChangeNotify", pageChangeNotify);
        	Eco.XComp.setUserProperty(this, "scope", scope);

        	var xy = {
        		x : 0,
        		y : 0
        	};
        	var comps = [],comp;

        	// total record count
        	comp = new Static();
        	comp.init("totalRow", "absolute", 0, 0, 1, 1);
        	comp.set_visible(false);
        //	  comp.set_wordwrap(false);
        //	comp.style.set_font("bold 9 Malgun Gothic");
        //	comp.style.set_align("left middle");
        	this.addChild(comp.name, comp);
        	comp.show();
        	comps.push(comp);

        	// first page
        	comp = new Button();
        	comp.init("firstPage", "absolute", 0, 0, 1, 1);
        	// comp.set_cssclass("btn_WF_pageAllaw2L");btn_WF_PagePP
        	comp.set_cssclass("btn_paging_first");
        	comp.set_visible(false);
        	comp.addEventHandler("onclick", this.pagingOnClickHandler, this);
        	this.addChild(comp.name, comp);
        	comp.show();
        	comps.push(comp);

        	// prev page block
        	comp = new Button();
        	comp.init("prevPageBlock", "absolute", 0, 0, 1, 1);
        	// comp.set_cssclass("btn_WF_pageAllawL");
        	comp.set_cssclass("btn_paging_prev");
        	comp.set_visible(false);
        	comp.addEventHandler("onclick", this.pagingOnClickHandler, this);
        	this.addChild(comp.name, comp);
        	comp.show();
        	comps.push(comp);

        	// page numbering
        	var page;
        	for (var i = 0; i < pageCount; i++)
        	{
        		page = (i + 1).toString();
        		comp = new Button();
        		comp.init("page_" + page, "absolute", 0, 0, 1, 1);
          	    //comp.set_cssclass("btn_WF_page");
        		comp.set_cssclass("btn_paging_num");
        		// comp.style.set_border("1 solid #808080ff");
        		comp.set_visible(false);
        		comp.addEventHandler("onclick", this.pagingOnClickHandler, this);
        		this.addChild(comp.name, comp);
        		comp.show();
        		comps.push(comp);
        	}

        	// next page block
        	comp = new Button();
        	comp.init("nextPageBlock", "absolute", 0, 0, 1, 1);
        	// comp.set_cssclass("btn_WF_pageAllawR");btn_WF_PageN
        	comp.set_cssclass("btn_paging_next");
        	comp.set_visible(false);
        	comp.addEventHandler("onclick", this.pagingOnClickHandler, this);
        	this.addChild(comp.name, comp);
        	comp.show();
        	comps.push(comp);

        	// last page
        	comp = new Button();
        	comp.init("lastPage", "absolute", 0, 0, 1, 1);
        	// comp.set_cssclass("btn_WF_pageAllaw2R");
        	comp.set_cssclass("btn_paging_end");
        	comp.set_visible(false);
        	comp.addEventHandler("onclick", this.pagingOnClickHandler, this);
        	this.addChild(comp.name, comp);
        	comp.show();
        	comps.push(comp);

        	// 생성된 컴포넌트 참조 속성 추가
        	Eco.XComp.setUserProperty(this, "pageComps", comps);

        	if (this.USE_INPUT_PAGE)
        	{
        		// input number page
        		comp = new Edit();
        		comp.init("inputPage", "absolute", 0, 0, 1, 1);
        		comp.set_autoselect(true);
        		comp.set_inputtype("number");
        		comp.set_visible(false);
        		comp.style.set_align("left top");
        		this.addChild(comp.name, comp);
        		comp.addEventHandler("onkeydown", this.pagingOnKeyDownHandler, this);
        		comp.show();

        		// total page count
        		comp = new Static();
        		comp.init("totalPage", "absolute", 0, 0, 1, 1);
        		comp.set_visible(false);
        		//comp.set_wordwrap(false);
        		comp.style.set_align("center middle");
        		this.addChild(comp.name, comp);
        		comp.show();
        	}
        };

        /**
         * onclick Event Handler
         * @param {Static} obj Event가 발생한 Static Component
         * @param {ClickEventInfo} e ClickEventInfo
         */
        this.pagingOnClickHandler = function (obj, e)
        {
        	var pThis = obj.parent;

        	// 현재 선택된 페이지번호를 지정
        	var page = Eco.XComp.getUserProperty(obj, "pageNumber");

        	// 현재 페이지 지정
        	Eco.XComp.setUserProperty(this, "currentPage", page);

        	// 페이지 변경 알림 함수 호출
        	this.callPageChangeNotify(page);
        };

        /**
         * onkeydown Event Handler
         * @param {Edit} obj Event가 발생한 Edit Component
         * @param {KeyEventInfo} e KeyEventInfo
         */
        this.pagingOnKeyDownHandler = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		var totalPage = Eco.XComp.getUserProperty(obj, "totalPage");
        		var page = obj.value;

        		if (!Eco.isEmpty(page))
        		{
        			page = parseInt(page);
        			if (totalPage < page)
        			{
        				obj.set_value(Eco.XComp.getUserProperty(this, "currentPage"));
        			}
        			else
        			{
        				// 현재 페이지 지정
        				Eco.XComp.setUserProperty(this, "currentPage", page);

        				// 페이지 변경 알림 함수 호출
        				this.callPageChangeNotify(page);
        			}
        		}
        	}
        };

        /**
         * @class 문자열의 오른쪽부분을 지정한 길이만큼 Return
         * @param  sText - 오른쪽부분을 얻어올 원본 문자열
         * @param  nSize - 얻어올 크기. [Default Value = 0]
         * @return String - 오른쪽 부분이 얻어진 문자열
         */
        this.gfn_right = function (sText, nSize)
        {
        	var nStart = String(sText).length;
        	var nEnd = Number(nStart) - Number(nSize);
        	var rtnVal = String(sText).substring(nStart, nEnd);

        	return rtnVal;
        };

        /**
         * 페이지 변경 알림 함수 호출
         * @param {number} totalCount 총 개수
         */
        this.callPageChangeNotify = function (page)
        {
        	// click 된 button cssclass 변경
        	var comps = this.components,comp,nBtnPage,nCurrPage;
        	for (var i = 0; i < comps.length; i = i + 1)
        	{
        		comp = comps[i];
        		nBtnPage = this.gfn_right(comp.text, 1);
        		nCurrPage = this.gfn_right(page, 1);
        		if (comp.name.substring(0, 4) == "page")
        		{
        			if (nBtnPage == nCurrPage)
        			{
        				comp.set_cssclass("btn_paging_num_S");
        			}
        			else
        			{
        				comp.set_cssclass("btn_paging_num");
        			}
        		}
        	}


        	// pageChangeNotify 호출
        	var func = Eco.XComp.getUserProperty(this, "pageChangeNotify");
        	var scope = Eco.XComp.getUserProperty(this, "scope");

        	// scope 를 지정하지 않았다면 본화면을 포함하는 Form
        	if (Eco.isEmpty(scope))
        	{
        		scope = this.parent;
        	}

        	if (func)
        	{
        		func.call(scope, page);
        	}
        };

        /**
         * 페이징 구성
         * @param {number} totalCount 총 개수
         */
        this.setPage = function (totalCount)
        {
        	// 총건수를 담아두자.
        	Eco.XComp.setUserProperty(this, "totalCount", totalCount);

        	var listCount = Eco.XComp.getUserProperty(this, "listCount");
        	var pageCount = Eco.XComp.getUserProperty(this, "pageCount");
        	var currentPage = Eco.XComp.getUserProperty(this, "currentPage");

        	var comp;
        	var comps = Eco.XComp.getUserProperty(this, "pageComps");
        	for (var i = 0,len = comps.length; i < len; i++)
        	{
        		comp = comps[i];
        		comp._used = false;
        		comp.set_visible(false);
        	}

        	var totalPage = Math.floor(totalCount / listCount) + (Math.floor(totalCount % listCount) > 0 ? 1 : 0);



        	// var totalPage= Math.ceil(totalCount/listCount);
        	// this.alert("totalPage : "+ totalPage  + "  listCount : " + listCount);

        	var prevPage = (Math.floor((currentPage - 1) / pageCount) * pageCount) + 1;
        	var nextPage = prevPage + pageCount;

        	var index = 0;
        	var wh = {
        		w : 0,
        		h : 0
        	};
        	var defaultButtonSize = this.DEFAULT_PAGE_BUTTON_SIZE;

        	var enable = (prevPage > pageCount ? true : false);

        	// 페이지 총카운트 보이기/안보이기
        	if (this.USE_VIEW_TOTAL)
        	{
        		this.setPagingComponent(index, 1, enable, 280, wh, "전체조회건수 : " + Eco.number.getMaskFormatString(totalCount, "999,999"));
        	}

        	index++;
        	// 첫페이지 컴포넌트 설정
        	if (enable)
        	{
        		this.setPagingComponent(index, 1, enable, defaultButtonSize[0], wh);
        	}
        	index++;

        	// 이전 페이지 블럭 컴포넌트 설정
        	enable = (prevPage > pageCount ? true : false);
        	if (enable)
        	{
        		this.setPagingComponent(index, (prevPage - 1), enable, defaultButtonSize[0], wh);
        	}
        	index++;

        	// 페이지 번호 컴포넌트 설정
        	for (var i = prevPage; i < nextPage; i++)
        	{
        		if (i <= totalPage)
        		{
        			enable = (i == currentPage ? false : true);
        			this.setPagingComponent(index, i, enable, null, wh, i.toString());
        		}
        		index++;
        	}

        	// 다음 페이지 블럭 컴포넌트 설정
        	enable = (nextPage <= totalPage ? true : false);
        	if (enable)
        	{
        		this.setPagingComponent(index, nextPage, enable, defaultButtonSize[0], wh);
        	}
        	index++;

        	// 마지막페이지 컴포넌트 설정
        	enable = (nextPage < totalPage ? true : false);
        	if (enable)
        	{
        		this.setPagingComponent(index, totalPage, enable, defaultButtonSize[0], wh);
        	}

        	// 센터 정렬을 위해 위치 조정
        	var gap = this.PAGE_BUTTON_GAP;

        	// 페이지가 한자리 숫자일경우 간격 좁힘
        	if (nextPage < 20)
        	{
        		gap--;
        	}

        	var len = comps.length,nBtnPage,nCurrPage;
        	var x = Math.floor((this.getOffsetWidth() - (wh.w + gap * (len - 1)) - 140) / 2);
        	var y = Math.floor((this.getOffsetHeight() - wh.h) / 2);
        	for (var i = 0; i < len; i++)
        	{
        		comp = comps[i];
        		if (comp._used)
        		{
        			if (comp.name.substring(0, 4) == "page")
        			{
        				comp.move(x, y);

        				// 현재 페이지 cssclass 지정
        				nBtnPage = this.gfn_right(comp.text, 1);
        				nCurrPage = this.gfn_right(currentPage, 1);
        				if (nBtnPage == nCurrPage)
        				{
        					comp.set_cssclass("btn_paging_num_S");
        				}
        				else
        				{
        					comp.set_cssclass("btn_paging_num");
        				}
        			}
        			else
        			{
        				comp.move(x, y - 2);
        			}
        			comp.set_visible(true);
        			x = x + comp.getOffsetWidth() + gap;
        		}
        	}

        	// total count
        	var totalRowComp = this.components["totalRow"];
        	totalRowComp.move(10, -3, 280, 20);
        	// 페이지 번호 입력 및 총 페이지수 컴포넌트 설정
        	if (this.USE_INPUT_PAGE)
        	{
        		var inputPageComp = this.components["inputPage"];
        		var totalPageComp = this.components["totalPage"];

        		inputPageComp.set_value(currentPage.toString());

        		// 총 페이지 건수를 담아두자.
        		Eco.XComp.setUserProperty(inputPageComp, "totalPage", totalPage);

        		totalPageComp.set_text("of " + totalPage);

        		var sz = Eco.XComp.PositionSize.getContentSize(totalPageComp);

        		var w = sz[0] + 2;
        		var h = sz[1] + 2;
        		y = Math.floor((this.getOffsetHeight() - h) / 2) - 1;

        		x = this.getOffsetWidth() - ((w + gap) * 2);
        		inputPageComp.move(x, y, w, h);

        		x = x + w + gap;
        		totalPageComp.move(x, y, w, h);

        		inputPageComp.set_visible(true);
        		totalPageComp.set_visible(true);
        	}
        };

        /**
         * 페이징 컴포넌트 display 관련 처리
         * @param {number} index 페이징 컴포넌트 리스트 index
         * @param {number} pageNumber 페이지 번호
         * @param {boolean} enable 페이지 컴포넌트 활성화 여부
         * @param {number|array=} size 페이지 컴포넌트의 크기지정
         * @param {object} wh 전체 페이지 컴포넌트 크기를 구하기 위한 사이즈(reference)
         * @param {string=} text 페이지 컴포넌트에 표시될 텍스트
         */
        this.setPagingComponent = function (index, pageNumber, enable, size, wh, text)
        {
        	var comps = Eco.XComp.getUserProperty(this, "pageComps");
        	var comp = comps[index];

        	//comp.style.set_cursor((enable ? "hand" : "default"));
        	comp.set_enable(enable);

        	Eco.XComp.setUserProperty(comp, "pageNumber", pageNumber);

        	var width = height = 0;
        	if (!Eco.isNull(size))
        	{
        		if (Eco.isArray(size))
        		{
        			width = size[0];
        			height = size[1];
        		}
        		else
        		{
        			width = height = size;
        		}
        	}

        	if (!Eco.isEmpty(text))
        	{
        		comp.set_text(text);


        		var sz = Eco.XComp.PositionSize.getTextSize(comp, text, false);
        		width = sz[0] + 2;
        		height = sz[1] + 2;
        	}

        	var minButtonSize = this.MIN_PAGE_BUTTON_SIZE;

        	width = Math.max(minButtonSize[0], width);
        	height = Math.max(minButtonSize[1], height);

        	comp.resize(width, height);

        	wh.w = wh.w + width;
        	wh.h = height;

        	comp._used = true;
        };

        /**
         * 현재 페이지 번호 지정
         * @param {number} page 페이지 번호
         * @return {boolean} 지정 여부
         */
        this.setCurrentPage = function (page)
        {
        	return Eco.XComp.setUserProperty(this, "currentPage", page);
        };

        /**
         * 현재 페이지 번호 반환
         * @return {number} 페이지 번호
         */
        this.getCurrentPage = function ()
        {
        	return Eco.XComp.getUserProperty(this, "currentPage");
        };

        /**
         * 페이지 리로드
         * @return N/A
         */
        this.fn_reload = function ()
        {
        	this.reload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Paging_onload,this);
        };
        this.loadIncludeScript("com_paging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();