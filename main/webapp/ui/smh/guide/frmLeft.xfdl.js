(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_left");
            this.set_titletext("left");
            if (Form == this.constructor)
            {
                this._setFormPosition(251,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_myMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">업무화면예시</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work01.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시2</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work02.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시3</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work03.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">업무화면예시1</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work01.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시2</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work02.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시3</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work03.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">업무화면예시2</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_NM\">화면예시1</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_NM\">화면예시2</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_NM\">화면예시3</Col></Row><Row><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">업무화면예시3</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_NM\">화면예시1</Col></Row><Row><Col id=\"MENU_LVL\">1</Col><Col id=\"MENU_NM\">화면예시2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_LF_bg");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","0",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("30");
            obj.set_cssclass("tab_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("메뉴");
            obj.set_border("0px none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("시스템 관리");
            obj.set_cssclass("sta_LF_title");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdLeft","10","46",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("gdsLeftMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_scrollbartype("auto");
            obj.set_cssclass("grd_LF_menu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"24\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\" cssclass=\"expr:MENU_LVL==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/><Cell col=\"1\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" cssclass=\"expr:MENU_LVL==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\" padding=\"0px\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("나의 메뉴");
            obj.set_border("0px none");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","10","46",null,null,"0","42",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_myMenu");
            obj.set_treeusecheckbox("true");
            obj.set_treeinitstatus("expand,null");
            obj.set_visible("false");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_LF_mymenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/><Column size=\"24\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" cssclass=\"cell_delete\"/></Band></Format></Formats>");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("나의 메뉴");
            obj.set_font("normal 700 16px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,null,"72","27","0","5",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_pop_no");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"72","27","Button00_00:5","5",null,null,null,null,this.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("메뉴설정");
            obj.set_cssclass("btn_pop_yes");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("Tab00_00","494","58",null,null,"-484","-58",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("30");
            obj.set_cssclass("tab_LF_menu");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00_00);
            obj.set_text("메뉴");
            obj.set_border("0px none");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.Tab00_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("시스템 관리");
            obj.set_cssclass("sta_LF_title");
            this.Tab00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdLeft","10","46",null,null,"0","0",null,null,null,null,this.Tab00_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_scrollbartype("auto");
            obj.set_cssclass("grd_LF_menu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"24\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\" cssclass=\"expr:MENU_LVL==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/><Cell col=\"1\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" cssclass=\"expr:MENU_LVL==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.Tab00_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00_00);
            obj.set_text("나의 메뉴");
            obj.set_border("0px none");
            this.Tab00_00.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","10","46",null,null,"0","42",null,null,null,null,this.Tab00_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_myMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("true");
            obj.set_treeinitstatus("expand,null");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_LF_mymenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"199\"/><Column size=\"32\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" cssclass=\"cell_delete\" padding=\"0px\"/></Band></Format></Formats>");
            this.Tab00_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.Tab00_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("나의 메뉴");
            obj.set_cssclass("sta_LF_title");
            this.Tab00_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,null,"72","27","3","5",null,null,null,null,this.Tab00_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_pop_no");
            obj.set_fittocontents("width");
            this.Tab00_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"72","27","Button00_00:5","5",null,null,null,null,this.Tab00_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("메뉴설정");
            obj.set_cssclass("btn_pop_yes");
            obj.set_fittocontents("width");
            this.Tab00_00.Tabpage2.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_LF_menu","874","0","251","710",null,null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this.pdiv_LF_menu.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_bg");
            this.pdiv_LF_menu.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","0",null,null,"10","0",null,null,null,null,this.pdiv_LF_menu.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("30");
            obj.set_cssclass("tab_LF_menu");
            this.pdiv_LF_menu.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.pdiv_LF_menu.form.Tab00);
            obj.set_text("메뉴");
            obj.set_border("0px none");
            this.pdiv_LF_menu.form.Tab00.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.pdiv_LF_menu.form.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("시스템 관리");
            obj.set_cssclass("sta_LF_title");
            this.pdiv_LF_menu.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdLeft","10","46",null,null,"0","0",null,null,null,null,this.pdiv_LF_menu.form.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("gdsLeftMenu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_scrollbartype("auto");
            obj.set_cssclass("grd_LF_menu");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/><Column size=\"24\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\" cssclass=\"expr:MENU_LVL==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/><Cell col=\"1\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_LVL\" cssclass=\"expr:MENU_LVL==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\" padding=\"0px\"/></Band></Format></Formats>");
            this.pdiv_LF_menu.form.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.pdiv_LF_menu.form.Tab00);
            obj.set_text("나의 메뉴");
            obj.set_border("0px none");
            this.pdiv_LF_menu.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","10","46",null,null,"0","42",null,null,null,null,this.pdiv_LF_menu.form.Tab00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_myMenu");
            obj.set_treeusecheckbox("true");
            obj.set_treeinitstatus("expand,null");
            obj.set_visible("false");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_LF_mymenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"208\"/><Column size=\"24\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" cssclass=\"cell_delete\"/></Band></Format></Formats>");
            this.pdiv_LF_menu.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","10","13",null,"30","0",null,null,null,null,null,this.pdiv_LF_menu.form.Tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("나의 메뉴");
            obj.set_font("normal 700 16px/normal \"Arial\",\"Malgun Gothic\",\"Gulim\"");
            this.pdiv_LF_menu.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,null,"72","27","0","5",null,null,null,null,this.pdiv_LF_menu.form.Tab00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_pop_no");
            obj.set_fittocontents("width");
            this.pdiv_LF_menu.form.Tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00",null,null,"72","27","Button00_00:5","5",null,null,null,null,this.pdiv_LF_menu.form.Tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("메뉴설정");
            obj.set_cssclass("btn_pop_yes");
            obj.set_fittocontents("width");
            this.pdiv_LF_menu.form.Tab00.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",251,710,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLeft.xfdl", function() {
        /*
         * 01. 업무구분 : frame
         * 02. 화면명   : leftFrame.xfdl
         * 03. 화면설명 : 프레임 메뉴화면
         * 04. 작성일   : 2017.01.21
         * 05. 작성자   : sian
         * 06. 수정이력 :
         *********************************************************************
         *     수정일          이  름    사유
         *********************************************************************
         *
         *********************************************************************
         */

        /****************************************************************************************
         include 선언
         ****************************************************************************************/
        //include "lib::comLib.xjs";

        this.application = null;

        this.fm_left_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();
        };

        this.divLeft_grdLeft_oncellclick = function(obj,e)
        {
        	var sMenuId = this.application.gdsLeftMenu.getColumn(e.row, "MENU_CD");

        	this.fn_openMenu(sMenuId);
        };

        this.fn_openMenu = function(sMenuId)
        {
        	var objMdiFrame = this.application.MdiFrame;
        	var objWorkFrame = this.application.WorkFrame;

        	var nFRow;
        	var sPGMPATH;
        	var sPGMID;

        	var nFRowOpen;
        	var sWinId;
        	var sMenuNm;
        	var sMenuNavi;

        	var objMenuDs = this.application.gdsLeftMenu;
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	nFRow 		= objMenuDs.findRow("MENU_CD", sMenuId);
        	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PGM_PATH");
        	sPGMID 		= objMenuDs.getColumn(nFRow, "PGM_ID")
        	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");

        	nFRowOpen = objOpenMenuDs.findRow("MENU_CD", sMenuId);
        	sWinId = objOpenMenuDs.getColumn(nFRowOpen, "WINID");

        	if (nFRow==-1)
        	{
        		alert("Menu가 존재하지 않습니다.");
        		return;

        	}else if(this.gfnIsNull(sPGMPATH)==true)
        	{
        		return;
        	}

        	if(nFRowOpen>-1)
        	{
        		objMdiFrame.form.fn_ActiveTabPage(sWinId);
        		return;
        	}

        	if(objOpenMenuDs.rowcount > 12)
        	{
        		alert("메뉴는  8개이상 오픈할 수 없습니다.");
        		return;
        	}

        	sWinId = sMenuId + "_" + objOpenMenuDs.rowcount+ "_" + parseInt(Math.random() * 100);

        	var oParam = { FORM_ID : sWinId,
                           MENU_NM : sMenuNm,
                           FORM_URL : sPGMPATH+"::"+sPGMID
        				   };

        	var objChildFrame = new ChildFrame();
        	objChildFrame.init(sWinId, 0, 0, null, null, 0, 0);

        	objWorkFrame.addChild(objChildFrame.name, objChildFrame);
        	objChildFrame.param = oParam;
        	objChildFrame.set_resizable(true);
        	objChildFrame.set_showtitlebar(false);
         	objChildFrame.set_openstatus("maximize");
        	objChildFrame.set_formurl("frame::frmWork.xfdl");
        	objChildFrame.show();

        	objMdiFrame.form.fn_AddTabPage(sWinId, sMenuNm);

        	this.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);

        	objMdiFrame.form.fn_ActiveTabPage(sWinId);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnAddOpenMenu
        함 수 설 명 : 열린화면리스트 저장
        파 라 미 터 : pvWinId – 업무화면 ID
        			   pvMenuCd – 메뉴코드
        			   pvMenuNm – 메뉴명
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_AddOpenMenu = function(pvWinId, pvMenuCd, pvMenuNm)
        {
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	var nAddRow = objOpenMenuDs.addRow();
        	objOpenMenuDs.setColumn(nAddRow, "WINID", pvWinId);
        	objOpenMenuDs.setColumn(nAddRow, "MENU_CD", pvMenuCd);
        	objOpenMenuDs.setColumn(nAddRow, "MENU_NM", pvMenuNm);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnDelOpenMenu
        함 수 설 명 : 열린화면리스트 삭제
        파 라 미 터 : pvWinId – 업무화면 ID
        리 턴 내 용 : 없음
        *****************************************************************************/
        this.fn_DelOpenMenu = function(pvWinId)
        {
        	var objOpenMenuDs = this.application.gdsOpenMenu;

        	var nRow = objOpenMenuDs.findRow("WINID", pvWinId);

        	objOpenMenuDs.deleteRow(nRow);
        }

        /*****************************************************************************
        함 수 명 칭 : gfnIsNull
        함 수 설 명 : 입력값 Null 체크 함수
        파 라 미 터 : pvVal – 입력값
        리 턴 내 용 : true/false 값이 Null일 경우 true
        *****************************************************************************/
        this.gfnIsNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}

        	return false;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fm_left_onload,this);
            this.Tab00.Tabpage1.form.grdLeft.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.Tab00.Tabpage2.form.grdMyMenu.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.Tab00_00.Tabpage1.form.grdLeft.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.Tab00_00.Tabpage2.form.grdMyMenu.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.pdiv_LF_menu.form.Tab00.Tabpage1.form.grdLeft.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.pdiv_LF_menu.form.Tab00.Tabpage2.form.grdMyMenu.addEventHandler("oncellclick",this.divLeft_grdLeft_oncellclick,this);
            this.ds_myMenu.addEventHandler("onvaluechanged",this.ds_myMenu_onvaluechanged,this);
            this.ds_Menu.addEventHandler("onvaluechanged",this.ds_myMenu_onvaluechanged,this);
        };
        this.loadIncludeScript("frmLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
