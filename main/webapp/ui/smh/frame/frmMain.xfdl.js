(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("main");
            this.set_titletext("main");
            this.getSetter("classname").set("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Notice", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dashBoard", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DASH_TG_ID\" type=\"string\" size=\"255\"/><Column id=\"DASH_TG_ID_NM\" type=\"string\" size=\"255\"/><Column id=\"MENU_ID\" type=\"string\" size=\"255\"/><Column id=\"LINK_IMG\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aaa", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_bar","4","8",null,null,"10","14",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_main","270","215","340","237",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Main Page");
            obj.set_font("normal 50pt/normal \"Arial\"");
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
        this.registerScript("frmMain.xfdl", function() {
        //include "lib::comLib.xjs"

        this.main_onload = function(obj, e)
        {
            //this.fn_getDashInfo();

        	this.sta_main.set_left(nexacro.getApplication().mainframe.width/2 - this.sta_main.width/2);

            this.form_init();

        	//form load ?????? ?????? ?????? ??????
        	nexacro.getApplication().afn_completeLoadForm("main");

        }

        //????????? ?????? ??? ?????? ??????
        this.form_init = function()
        {
        	return;
        	/*
        	var sMenuId = application.gds_menu.lookup("PAGE_URL", "system::CMSY02500M.xfdl", "MENU_ID");
        	if(this.gfn_isNull(sMenuId)){
        		trace("???????????? ??????ID ?????????... ????????? ??????");
        		return;
        	}
        	this.gfn_showWork(sMenuId);
        	*/
        }

        //????????? ???????????? ?????? ??????????????? ???????????? ???????????? ??????
        this.fn_setDomanProperty = function()
        {

        	//this.gfn_getDomainToString(); //????????? ?????? ?????? ?????? ??????????????? ????????????????????? ?????????????????? ??????

        	this.div_dash.Static06.domainId = "TXT00010";    //?????????
        	this.div_dash.Static01.domainId = "TXT00200";    //????????????
        	this.tab_main.tabpage1.domainId = "TXT00006";    //????????????
        	this.tab_main.tabpage2.domainId = "TXT00007";    //??????

            this.div_dash.div_cont01.stc_title01.domainId = "TXT00310";    //????????????
            this.div_dash.div_cont02.stc_title02.domainId = "TXT00320";    //????????????
        }

        this.fn_domainChange = function()
        {
            this.gfn_setDomainCheange();
        }
        //???????????? ??????.
        this.fn_setDashBoard = function() {

             if ( this.ds_dashBoard.getRowCount()  ==  0 ) {
                  return;
             }
             for( var i=0;i<this.ds_dashBoard.getRowCount() ;i++ ) {
                var objDivCont =   this.$O( "div_cont"+this.gfn_lpad( (i+1) , "0", 1) );

                objDivCont.set_visible(true);

                var objStc           =   this.$O( "stc_title"  +this.gfn_lpad( (i+1) , "0", 1) );
                objStc.set_text(  this.ds_dashBoard.getColumn( i , "DASH_TG_ID_NM" )  );
                objStc.style.set_background(    this.ds_dashBoard.getColumn( i , "LINK_IMG" )   );

                var objSubDiv        =   this.$O( "div_contSub"+this.gfn_lpad( (i+1) , "0", 1) );
                objSubDiv.DASH_TG_ID =   this.ds_dashBoard.getColumn( i , "DASH_TG_ID" );

                     objSubDiv.set_url (  "cpmgmt.board::dashBordSubPage.xfdl"  );
                if( objSubDiv.DASH_TG_ID  == "7" ) {

                     objSubDiv.set_url (  "cpmgmt.board::dashBordSubPage.xfdl"  );
                }else{

                     objSubDiv.set_url (  "cpmgmt.board::dashBordSubPage.xfdl"  );
                }

             }
        }
        // gfnService ?????? ??? callback ??????
        this.fn_callBack = function (strServiceId, strErrorCode, strErrorMsg)
        {
        	if (strErrorCode < 0)
        	{

        		return this.gfn_alert(strErrorMsg, "error");
        	}

        	switch (strServiceId)
        	{
        		case "dashboard":
                    this.fn_setDashBoard();
                    this.gfn_formOnLoad(this);
                   // this.gfn_formOnLoad(this);
                   // this.gfn_getDomainToString();
                   // this.fn_setDomanProperty();
        			break;
        		default:
        			break;
        	}
        }

        this.div_dash_div_cont02_stc_dataCnt02_steel_onclick = function(obj,  e)
        {

        }

        this.div_dash_div_cont05_grd_itemData_oncellclick = function(obj, e)
        {
            gv_appTabFrame.form.fn_menuSetOpenProcess();
        	this.gfn_setFrameChange("work");
        }



        this.Button00_onclick = function(obj,  e)
        {

        }

        this.fn_getDashInfo = function() {

        //     this.ds_search.clearData();
        //     var cRow = this.ds_search.addRow();
        //     this.ds_search.setColumn( cRow , "USER_NO",  this.gfn_getSession("USER_NO") );
        //
        //
        // 	var sSvcID        = "dashboard";
        // 	var sURL          = "/common/selectDashBoard.do";
        // 	var sInDatasets   = "ds_search=ds_search";
        // 	var sOutDatasets  = "ds_dashBoard=ds_dashBoard";
        // 	var sCallbackFunc = "fn_callBack";
        //    this.gfn_transaction(sSvcID, sURL, sInDatasets, sOutDatasets  );
              this.fn_callBack("dashboard",0,"");
        }
        this.main_onclose = function(obj, e)
        {

        }

        this.main_onbeforeclose = function(obj, e)
        {

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.main_onload,this);
            this.addEventHandler("onbeforeclose",this.main_onbeforeclose,this);
            this.Notice.addEventHandler("onrowposchanged",this.Notice_onrowposchanged,this);
        };
        this.loadIncludeScript("frmMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
