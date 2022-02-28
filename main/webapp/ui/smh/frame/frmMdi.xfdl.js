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
            this.set_background("#e5eef5");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_mdi_bg01");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMdi","40","0",null,"100","71",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_MDI");
            obj.set_showextrabutton("true");
            obj.set_tabbuttonheight("30");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabMdi);
            obj.set_text("Tabpage2");
            this.tabMdi.addChild(obj.name, obj);

            obj = new Button("btn_home","5","0","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_home_S");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"0","26","30","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_allClose");
            obj.set_tooltiptext("CloseAll");
            this.addChild(obj.name, obj);

            obj = new Button("btn_openList",null,"0","35","30","36",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_openList");
            obj.set_tooltiptext("OpenFormList");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_openlist","1055","131","220","246",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_layerPOP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_openlist","3","2",null,null,"2","2",null,null,null,null,this.pdv_openlist.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_openList");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"160\"/><Column size=\"24\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:chk\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" padding=\"0px\"/><Cell col=\"1\" text=\"bind:MENU_NM\" padding=\"0px\"/><Cell col=\"2\" padding=\"0px\" cssclass=\"cell_delete\"/></Band></Format></Formats>");
            this.pdv_openlist.addChild(obj.name, obj);

            obj = new Button("btn_openList00",null,"0","35","30","176",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_openList");
            obj.set_tooltiptext("OpenFormList");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi.xfdl", function() {

        this.application = nexacro.getApplication();

        this.fm_mdi_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        	this.tabMdi.removeTabpage(0);
        };

        this.tabMdi_onchanged = function(obj,e)
        {
        	var sWinId = obj.tabpages[e.postindex].name;
        	gv_appWorkFrameSet[sWinId].form.setFocus();
        	var menuId = nexacro.getApplication().gdsOpenMenu.lookup( "WINID", sWinId, "MENU_ID");
        	var menuPath = gv_appTopFrame.form.fn_createMenuPath(menuId,true);
        	gv_appBottomFrame.form.sta_menuPath.set_text(menuPath);


        	this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,0,*");
        	this.btn_home.set_cssclass("btn_MDI_home");

        };

        this.tabMdi_onextrabuttonclick = function(obj,e)
        {
        	var sWinId = obj.tabpages[e.index].name;
        	obj.removeTabpage(e.index);

        	gv_appWorkFrameSet[sWinId].form.close();

        	gv_appLeftFrame.form.fn_DelOpenMenu(sWinId);
        };

        // 탭 추가
        this.fn_AddTabPage = function(pvWinId, pvMenuNm)
        {
        	var nIndex = this.tabMdi.insertTabpage(pvWinId, -1, "", pvMenuNm);
        	this.tabMdi.set_tabindex(nIndex);
        	var objChildFrame = gv_appWorkFrameSet.frames[pvWinId];
        	objChildFrame.form.setFocus();
        }

        this.fn_DeleteTabpage = function(pvWinId)
        {
        	var nCnt = this.tabMdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(this.tabMdi.tabpages[i].name == pvWinId)
        		{
        			this.tabMdi.removeTabpage(i);
        			gv_appLeftFrame.form.fn_DelOpenMenu(pvWinId);
        			return;
        		}
        	}
        }

        this.fn_ActiveTabPage = function(pvWinId, objArgs, bReload)
        {
        	var nCnt = this.tabMdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		this.tabMdi.tabpages[i].set_cssclass("tab_MDI_D");
        		if(this.tabMdi.tabpages[i].name == pvWinId)
        		{
        			this.tabMdi.tabpages[i].set_cssclass("tab_MDI");
        			this.tabMdi.set_tabindex(i);
        			var objChildFrame = gv_appWorkFrameSet.frames[pvWinId];
        			objChildFrame.form.setFocus();

        			this.tabMdi.tabpages[i].arguments = [];
        			if ( objArgs && !this.gfn_isNull(objArgs) )
        			{
        				for ( var key in objArgs )
        				{
        					if ( objArgs.hasOwnProperty(key) )
        					{
        						this.tabMdi.tabpages[i].arguments[key] = objArgs[key];
        					}
        				}
        			}
        			if(bReload){
        				var objChildFrame = gv_appWorkFrameSet.frames[pvWinId];
        				objChildFrame.form.setFocus();
        				if ( objArgs && !this.gfn_isNull(objArgs) )
        				{
        					for ( var key in objArgs )
        					{
        						if ( objArgs.hasOwnProperty(key) )
        						{
        							objChildFrame.arguments[key] = objArgs[key];
        						}
        					}
        				}
        				objChildFrame.form.reload();
        			}
        			return;
        		}
        	}

        }

        this.btnCloseAll_onclick = function(obj,e)
        {
        	var WorkFrame = gv_appWorkFrameSet.all;
        	for(var i=WorkFrame.length-1; i>=0; i--)
        	{
        		WorkFrame[i].form.close();
        		this.tabMdi.removeTabpage(i);
        	}
        };

        this.btn_openList_onclick = function(obj,e)
        {
        	var top = nexacro.toNumber(obj.top) + gv_appTopFrame.height;
        	var left = nexacro.toNumber(gv_appTopFrame.width) - nexacro.toNumber(obj.right);
        	trace("top-->"+top);
        	trace("left-->"+left);
        	this.pdv_openlist.trackPopup(left, top);
        };

        this.pdv_openlist_grd_openlist_oncellclick = function(obj,e)
        {
        	if(e.col==1){
        		var sMenuId = nexacro.getApplication().gdsOpenMenu.getColumn(e.row, "MENU_ID");
        		this.gfn_showWork(sMenuId);
        		this.pdv_openlist.closePopup();
        	}else if(e.col==2){
        		var sWinId = nexacro.getApplication().gdsOpenMenu.getColumn(e.row, "WINID");
        		this.pdv_openlist.closePopup();
        		gv_appWorkFrameSet[sWinId].form.close();
        		gv_appLeftFrame.form.fn_DelOpenMenu(sWinId);
        		this.fn_DeleteTabpage(sWinId);
        	}
        };

        this.btn_home_onclick = function(obj,e)
        {
        	//gv_appBodyFrameSet.set_separatesize("76,0,*,0,27");
        	var separatesize = this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.separatesize;
        	if(separatesize=="30,*,0"){
        		this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,0,*");
        		obj.set_cssclass("btn_MDI_home");
        	}else{
        		this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,*,0");
        		obj.set_cssclass("btn_MDI_home_S");
        		// 이때 홈 조회
        		this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.WorkFrame.form.fn_login_comp();
        	}

        };


        this.tabMdi_onlbuttondown = function(obj,e)
        {
        	this.application.mainframe.VFrameSet.HFrameSet0.VFrameSet0.set_separatesize("30,0,*");
        	this.btn_home.set_cssclass("btn_MDI_home");
        };

        this.btn_openList00_onclick = function(obj,e){

        	var winid = this.tabMdi.tabpages[this.tabMdi.tabindex].name;
        	trace(winid);
        	var oArg = {winid:winid}
        	this.gfn_openPopup('aaaaaaaa',"template::template02_ds_view.xfdl",oArg,"");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fm_mdi_onload,this);
            this.tabMdi.addEventHandler("onchanged",this.tabMdi_onchanged,this);
            this.tabMdi.addEventHandler("onextrabuttonclick",this.tabMdi_onextrabuttonclick,this);
            this.tabMdi.addEventHandler("onmousedown",this.tabMdi_onmousedown,this);
            this.tabMdi.addEventHandler("onlbuttondown",this.tabMdi_onlbuttondown,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.btn_closeAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
            this.btn_openList.addEventHandler("onclick",this.btn_openList_onclick,this);
            this.pdv_openlist.form.grd_openlist.addEventHandler("oncellclick",this.pdv_openlist_grd_openlist_oncellclick,this);
            this.btn_openList00.addEventHandler("onclick",this.btn_openList00_onclick,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
