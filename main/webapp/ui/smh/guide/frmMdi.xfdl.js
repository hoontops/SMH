(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_mdi");
            this.set_titletext("mdi");
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            this.set_background("#f0f5f4");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">모델등록 및 진행현황</Col></Row><Row><Col id=\"name\">마스터품목(사양)</Col></Row><Row><Col id=\"name\">CAM 작업의뢰</Col></Row><Row><Col id=\"name\">품목사양정보</Col></Row><Row><Col id=\"name\">Routing</Col></Row><Row><Col id=\"name\">공정 Spec 등록</Col></Row><Row><Col id=\"name\">승인처리</Col></Row><Row><Col id=\"name\">수주 사양 결재</Col></Row><Row><Col id=\"name\">CNC Data 관리</Col></Row><Row><Col id=\"name\">사양변경등록비교</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tabMdi","40","0",null,"60","125",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_MDI");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonheight("30");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMdi);
            obj.set_text("업무화면명");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabMdi);
            obj.set_text("Tabpage2");
            obj.set_cssclass("tab_MDI_D");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"0","26","30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_allClose");
            obj.set_tooltiptext("모두닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_openList",null,"0","35","30","btn_closeAll:0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_openList");
            obj.set_tooltiptext("열린화면 목록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"0","27","30","btn_openList:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_next");
            obj.set_tooltiptext("다음");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev",null,"0","27","30","btn_next:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_prev");
            obj.set_tooltiptext("이전");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","10","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_home");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_01","0","80","240","127",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("홈버튼은\r\n-기본 btn_MDI_home\r\n-활성화 btn_MDI_home_S\r\n\r\nMDI 탭은 \r\n-기본 css:tab_MDI \r\n-비활성화 css : tab_MDI_D");
            obj.set_cssclass("guideTip");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 15px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home00","10","40","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_home_S");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_openList00",null,"40","35","30","36",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_MDI_openList_S");
            obj.set_tooltiptext("열린화면 목록");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_00",null,"70","220","296","36",null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_layerPOP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","3","2","213","240",null,null,null,null,null,null,this.pdiv_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_openList");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"160\"/><Column size=\"24\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:name\" padding=\"0px\"/><Cell col=\"2\" padding=\"0px\" cssclass=\"cell_delete\"/></Band></Format></Formats>");
            this.pdiv_00.addChild(obj.name, obj);

            obj = new Button("btn_00","10","256","96","28",null,null,null,null,null,null,this.pdiv_00.form);
            obj.set_taborder("1");
            obj.set_text("선택닫기");
            obj.set_cssclass("btn_pop_no");
            this.pdiv_00.addChild(obj.name, obj);

            obj = new Button("btn_00_00","111","256","97","28",null,null,null,null,null,null,this.pdiv_00.form);
            obj.set_taborder("2");
            obj.set_text("전체닫기");
            obj.set_cssclass("btn_pop_no");
            this.pdiv_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","490","115","213","240",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("grd_openList");
            obj.set_binddataset("ds_list");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"160\"/><Column size=\"24\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:name\" padding=\"0px\"/><Cell col=\"2\" padding=\"0px\" cssclass=\"cell_delete\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,30,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {
        this.application = null;

        this.fm_mdi_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        	this.tabMdi.removeTabpage(0);
        };

        this.tabMdi_onchanged = function(obj,e)
        {
        	var sWinId = obj.tabpages[e.postindex].name;

        	this.application.WorkFrame[sWinId].form.setFocus();
        };

        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	var sWinId = obj.tabpages[e.index].name;
        	obj.removeTabpage(e.index);

        	this.application.WorkFrame[sWinId].form.close();

        	this.application.LeftFrame.form.fn_DelOpenMenu(sWinId);
        };

        // 탭 추가
        this.fn_AddTabPage = function(pvWinId, pvMenuNm)
        {
        	this.tabMdi.insertTabpage(pvWinId, -1, "", pvMenuNm);
        }

        this.fn_DeleteTabpage = function(pvWinId)
        {
        	var nCnt = this.tabMdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.tabMdi.tabpages[i].name == pvWinId)
        		{
        			this.tabMdi.removeTabpage(i);
        			this.application.LeftFrame.form.fn_DelOpenMenu(pvWinId);
        			return;
        		}
        	}
        }

        this.fn_ActiveTabPage = function(pvWinId)
        {
        	var nCnt = this.tabMdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.tabMdi.tabpages[i].name == pvWinId)
        		{
        			this.tabMdi.set_tabindex(i);
        			return;
        		}
        	}
        }

        this.btnCloseAll_onclick = function(obj,e)
        {
        	var WorkFrame = this.application.WorkFrame.all;
        	for(var i=WorkFrame.length-1; i>=0; i--)
        	{
        		WorkFrame[i].form.close();
        		this.tabMdi.removeTabpage(i);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fm_mdi_onload,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.btn_closeAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
