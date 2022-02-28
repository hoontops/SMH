(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01900P1");
            this.set_titletext("라우팅 선택");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("SELECTREWORKROUTING");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_reworkRoutingList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_currentRoutingList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reworkRoutingArea", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_currentRoutingArea", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREA\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_currentRoutingTop","50.5%","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","5","100","20",null,null,null,null,null,null,this.div_currentRoutingTop.form);
            obj.set_taborder("0");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("DEFECTLOTID");
            this.div_currentRoutingTop.addChild(obj.name, obj);

            obj = new Edit("edt_subDefectLotid","105","5",null,"20","652",null,null,null,null,null,this.div_currentRoutingTop.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("200908F004-1-FG00-001-A01");
            this.div_currentRoutingTop.addChild(obj.name, obj);

            obj = new Combo("cbo_currentRoutingArea","108","5","165","20",null,null,null,null,null,null,this.div_currentRoutingTop.form);
            obj.set_taborder("2");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_currentRoutingArea");
            obj.set_datacolumn("RESOURCENAME");
            this.div_currentRoutingTop.addChild(obj.name, obj);

            obj = new Div("div_currentRouting","50.5%","div_currentRoutingTop:20",null,null,"2.00%","58",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_background("");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_currentRoutingList","245","0",null,"31","64",null,null,null,null,null,this.div_currentRouting.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_currentRouting.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","10","0",null,"31","sta_cnt_ds_currentRoutingList:0",null,null,null,null,null,this.div_currentRouting.form);
            obj.set_taborder("0");
            obj.set_text("재작업 후 공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("PROCESSAFTERREWORK");
            this.div_currentRouting.addChild(obj.name, obj);

            obj = new Grid("grd_currentRouting","5","36",null,null,"1.20%","5",null,null,null,null,this.div_currentRouting.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_currentRoutingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"3\" text=\"공정ID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"4\" text=\"공정 Rev.\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"7\" text=\"작업완료시간\" tooltiptext=\"WORKENDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"center\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"6\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:WORKSTARTTIME\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"7\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:WORKENDTIME\" cssclass=\"expr:dataset.getColumn(currow, &quot;DISPLAYSEQUENCE&quot;)==&quot;1&quot;?&apos;cell_bg_yellow&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_currentRouting.addChild(obj.name, obj);

            obj = new Div("div_reworkRoutingTop","20","20",null,"32","505",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","5","100","20",null,null,null,null,null,null,this.div_reworkRoutingTop.form);
            obj.set_taborder("0");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTLOTID");
            this.div_reworkRoutingTop.addChild(obj.name, obj);

            obj = new Edit("edt_subDefectLotid","105","5",null,"20","652",null,null,null,null,null,this.div_reworkRoutingTop.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("200908F004-1-FG00-001-A01");
            this.div_reworkRoutingTop.addChild(obj.name, obj);

            obj = new Combo("cbo_reworkRoutingArea","108","5","165","20",null,null,null,null,null,null,this.div_reworkRoutingTop.form);
            obj.set_taborder("2");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_reworkRoutingArea");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_enable("false");
            this.div_reworkRoutingTop.addChild(obj.name, obj);

            obj = new Div("div_reworkRouting","20","div_reworkRoutingTop:20",null,null,"div_currentRouting:10","58",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_reworkRoutingVersion","279","41",null,"20","130",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("200908F004-1-FG00-001-A01");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Button("btn_reworkRouting",null,"41","22","20","edt_reworkRoutingVersion:5",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_reworkRouting",null,"41","143","20","btn_reworkRouting:0",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("1");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Static("sta_reworkRouting","5","41",null,"20","edt_reworkRouting:10",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("0");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REWORKROUTING");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_reworkRoutingList","255","0",null,"31","54",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","10","0",null,"31","sta_cnt_ds_reworkRoutingList:0",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("3");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("REWORKROUTING");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Grid("grd_reworkRouting","5","71",null,null,"1.20%","5",null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_reworkRoutingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정ID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"공정 Rev.\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"4\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","31","50","10",null,null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","61","50","10",null,null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new CheckBox("chk_productRouting",null,"41","90","20","20",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("8");
            obj.set_text("품목 라우팅");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_reworkRouting_id","399","9",null,"20","0",null,null,null,null,null,this.div_reworkRouting.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_tooltiptext("재작업라우팅ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.div_reworkRouting.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","btn_confirm:5",null,"70","28",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"214","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","20","52","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,550,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01900P1.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM01900P1.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM01900P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 라우팅 선택(품질관리-불량품 폐기취소)
         * 파일명 		: QAM01900P1.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.23
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.23	yanghee.kim   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.lang;
        this.userId;
        this.plantId;
        this.enterpriseId;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.lang = this.gf_getLanguageType();
        	this.userId = this.gf_getUserId();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();
        	this.qam_rtnvalue = null;
        	this.fn_formInit();    //최초 호출되는 초기화 함수
        	this.fn_searchRoutings();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 확정
         */
        this.fn_apply = function (obj, e)
        {
        	// 라우팅 타입이 품목일때는 체크박스 선택유뮤를 확인한다.
        	if (this.div_reworkRouting.form.chk_productRouting.value == true)
        	{
        		var chkCount = this.ds_reworkRoutingList.getCaseCount("CHK == '1'");

        		if (chkCount == 0)
        		{
        			this.gfn_Message("GridNoChecked", "", "warning", "ok");
        			return false;
        		}
        		else if (this.nfn_isNull(this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.text))
        		{
        			this.gfn_Message("ISREQUIREDRESOURCE", "", "warnig", "ok");
        			return false;
        		}
        		else
        		{
        			var nRow = this.ds_reworkRoutingList.findRow("CHK", "1");
                    var reworkArea = this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.text;
        			if (!this.nfn_isNull(reworkArea))
        			{
        				var nAreaRow   = this.ds_reworkRoutingArea.findRow("RESOURCENAME", reworkArea);
        				var resourceId = this.ds_reworkRoutingArea.getColumn(nAreaRow, "RESOURCEID");
        				var areaId     = this.ds_reworkRoutingArea.getColumn(nAreaRow, "AREAID");

        				this.ds_reworkRoutingList.setColumn(nRow, "RESOURCEID",   resourceId);
        				this.ds_reworkRoutingList.setColumn(nRow, "AREAID",       areaId);
        				this.ds_reworkRoutingList.setColumn(nRow, "RESOURCENAME", reworkArea);
        			}

        			for (var i=0; i<this.ds_reworkRoutingList.getColCount(); i++)
        			{
        				var a =this.ds_reworkRoutingList.getColumn(nRow, i);
        				this.qam_rtnValue[0][i] = this.ds_reworkRoutingList.getColumn(nRow, i);
        			}
        		}
        	}

        	// 라우팅 타입이 재작업일때는 체크박스가 없다
        	else
        	{
        		var chkReCount = this.ds_reworkRoutingList.getCaseCount("CHK == '1'");
        		var chkCuCount = this.ds_currentRoutingList.getCaseCount("CHK == '1'");

        		// 재작업 라우팅 그리드 확인
        		if (chkReCount == 0)
        		{
        			this.gfn_Message("NoSelectReworkRouting", "", "warning", "ok"); //재작업 라우팅이 선택되지 않았습니다.
        			return false;
        		}
        		// 재작업 후 공정 그리드 확인
        		else if (chkCuCount == 0)
        		{
        			this.gfn_Message("NoSelectReworkProcess", "", "warning", "ok"); //재작업 후 공정이 선택되지 않았습니다.
        			return false;
        		}
        		else if ( this.nfn_isNull(this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.text)
        		        ||this.nfn_isNull(this.div_currentRoutingTop.form.cbo_currentRoutingArea.text))
        		{
        			this.gfn_Message("ISREQUIREDRESOURCE", "", "warning", "ok"); //대상자원은 필수항목입니다.
        			return false;
        		}
        		else
        		{
        			if (this.ds_reworkRoutingList.getColIndex("ISSKIP") == -1)
        			{
        				this.ds_reworkRoutingList.addColumn("ISSKIP",  "string",  10 );
                        this.ds_reworkRoutingList.addColumn("LOTID",  "string",  250 );
        			}

        			for (var i=0; i<this.ds_reworkRoutingList.getRowCount(); i++)
        			{
        				this.ds_reworkRoutingList.setColumn(i, "ISSKIP", "N");
        				var reworkArea = this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.text;
        				if (!this.nfn_isNull(reworkArea))
        				{
        					var nAreaRow   = this.ds_reworkRoutingArea.findRow("RESOURCENAME", reworkArea);
        					var resourceId = this.ds_reworkRoutingArea.getColumn(nAreaRow, "RESOURCEID");
        					var areaId     = this.ds_reworkRoutingArea.getColumn(nAreaRow, "AREAID");

        					this.ds_reworkRoutingList.setColumn(i, "RESOURCEID",   resourceId);
        					this.ds_reworkRoutingList.setColumn(i, "AREAID",       areaId);
        					this.ds_reworkRoutingList.setColumn(i, "RESOURCENAME", reworkArea);
        				}
        			}

        			for (var i=0; i<this.ds_currentRoutingList.getRowCount(); i++)
        			{
        				if (this.ds_currentRoutingList.getColumn(i, "CHK") == 1)
        				{
        					var currArea   = this.div_currentRoutingTop.form.cbo_currentRoutingArea.text;
        					var nAreaRow   = this.ds_currentRoutingArea.findRow("RESOURCENAME", currArea);
        					var resourceId = this.ds_currentRoutingArea.getColumn(nAreaRow, "RESOURCEID");
        					var areaId     = this.ds_currentRoutingArea.getColumn(nAreaRow, "AREAID");

        					this.ds_currentRoutingList.setColumn(i, "RESOURCEID",   resourceId);
        					this.ds_currentRoutingList.setColumn(i, "AREAID",       areaId);
        					this.ds_currentRoutingList.setColumn(i, "RESOURCENAME", currArea);
        				}
        			}

        			for (var i=0; i<this.ds_reworkRoutingList.getColCount(); i++)
        			{
        				this.qam_rtnValue[0][i] = this.ds_reworkRoutingList.getColumn(0, i);
        			}

        			var nRow = this.ds_currentRoutingList.findRow("CHK", "1");
        			for (var i=0; i<this.ds_currentRoutingList.getColCount(); i++)
        			{
        				this.qam_rtnValue[1][i] = this.ds_currentRoutingList.getColumn(nRow, i);
        			}

        			var rtnArr = new Array();
        			for (var i=0; i< this.ds_reworkRoutingList.getRowCount(); i++)
        			{
        			    var colArr = new Array();
        				for (var j=0; j<this.ds_reworkRoutingList.getColCount(); j++)
        				{
        					colArr[j] = this.ds_reworkRoutingList.getColumn(i, j);
        				}
        				this.qam_rtnValue[2][i] = colArr;
        			}
        		}
        	}

        	this.close();
        };


        /*
         * 기능 : 재작업 라우팅 검색
         */
        this.fn_refreshReworkRoutingPath = function (pProcessDefid, pProcessDefVersion)
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "ENTERPRISEID",      this.enterpriseId);
        	this.ds_search.setColumn(nRow, "PROCESSDEFID",      pProcessDefid);
        	this.ds_search.setColumn(nRow, "PROCESSDEFVERSION", pProcessDefVersion);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",      this.lang);
        	this.ds_search.setColumn(nRow, "VERSION",           "10021");

        	this.ds_reworkRoutingList.clearData();
        	var sSvcID        = "selectProcessPathList";
        	var sController   = "/qam01900/selectProcessPathList.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_reworkRoutingList=output";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 재작업 후 공정 검색
         */
        this.fn_searchCurrentRouting = function (obj, e)
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	/*20210810
        	this.ds_search.setColumn(nRow, "LOTID",             this.parent.parentLotId);
        	*/
        	this.ds_search.setColumn(nRow, "LOTID",             this.parent.lotId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",      this.lang);

        	this.ds_currentRoutingList.clearData();
        	var sSvcID        = "selectCurrentRoutingByLotList";
        	var sController   = "/qam01900/selectCurrentRoutingByLotList.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_currentRoutingList=output";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
                if (trId == "selectProductRoutingPreviousProcessPathsList")
        		{
        		}
        		else if (trId =="selectCurrentRoutingByLotList")
        		{
        		}
        		else if (trId =="selectProcessPathList")
        		{
        			this.div_reworkRouting.form.grd_reworkRouting.set_enable(true);
        		}
        		else if (trId == "saveLotDefectMakeup")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_close();
                }
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=490,height=500";

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

             this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };


        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "REWORKROUTING") //재작업 라우팅
        	{
        		if (!this.nfn_isNull(rtn))
        		{
        			this.div_reworkRouting.form.edt_reworkRouting_id.set_value(rtn[0]);
        			this.div_reworkRouting.form.edt_reworkRouting.set_value(rtn[2]);
        			this.div_reworkRouting.form.edt_reworkRoutingVersion.set_value(rtn[1]);
        			this.fn_refreshReworkRoutingPath(rtn[0], rtn[1])
        		}

        		return;
            }
        };

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        //최초 호출되는 초기화 함수
        this.fn_formInit = function ()
        {
        	// 취소사유가 불량취소 또는 양품인계일 경우 품목라우팅만 세팅
         	if (this.parent.cancelCode == "Retest" || this.parent.cancelCode == "TakeoverGoods")
         	{
         		this.div_reworkRouting.form.chk_productRouting.set_value(true);
         		this.div_reworkRouting.form.chk_productRouting.set_enable(false);
         	}

        	this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.set_value("");
        	this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_value("");
        };

        /*
         * 재작업 후 공정 그리드 공정 선택시 작업장 재조회
         */
        this.fn_routingStateCheck = function ()
        {
        	var nRow = this.ds_currentRoutingList.rowposition;
        	if (this.ds_currentRoutingList.getColumn(nRow, "DISPLAYSEQUENCE") != "0")
        	{
        		this.ds_currentRoutingList.setColumn(nRow, "CHK", "1");
        	}

        	if (this.ds_currentRoutingList.getRowCount() == 0 || this.div_reworkRouting.form.chk_productRouting.value == true)
        	{
        		this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_value("");
        		this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_enable(false);
        	}
        	else
        	{
        		var chkCount = this.ds_currentRoutingList.getCaseCount("CHK == '1'");
        		if ( chkCount == 0)
        		{
        			this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_value("");
        			this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_enable(false);
        		}
        		else
        		{
        			var nRow = this.ds_currentRoutingList.findRow("CHK", "1");
        			//작업장 재조회
        			this.fn_setTopArea(this.ds_currentRoutingList, nRow, this.ds_currentRoutingArea, "P");
        		}
        	}
        };

        /*
         * 기능 : 품목라우팅 체크박스 체크상태 변경시 이벤트 처리
         */
        this.fn_searchRoutings = function()
        {
        	// 품목라우팅 선택한경우
        	if (this.div_reworkRouting.form.chk_productRouting.value == true)
        	{
        		this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_enable(false);
        		this.ds_currentRoutingArea.clearData();
        		this.div_currentRouting.form.grd_currentRouting.set_enable(false);
        		this.ds_currentRoutingList.clearData();
        		this.div_currentRouting.form.sta_cnt_ds_currentRoutingList.set_text('Count : <fc v="#f31d24">0</fc>');

                this.div_reworkRouting.form.btn_reworkRouting.set_enable(false);
        		this.div_reworkRouting.form.edt_reworkRouting.set_value("");
        		this.div_reworkRouting.form.edt_reworkRouting.set_enable(false);
        		this.div_reworkRouting.form.edt_reworkRouting_id.set_value("");
        		this.div_reworkRouting.form.edt_reworkRoutingVersion.set_value("");

                this.ds_search.clearData();
        		var nRow = this.ds_search.addRow();

        		this.ds_search.setColumn(nRow, "LOTID",             this.parent.parentLotId);
        		this.ds_search.setColumn(nRow, "CANCELCODE",        this.parent.cancelCode);
        		this.ds_search.setColumn(nRow, "PROCESSDEFID",      this.parent.parentProcessDefId);
        		this.ds_search.setColumn(nRow, "PROCESSDEFVERSION", this.parent.parentProcessDefVersion);
        		this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",  this.parent.processSegmentId);
        		this.ds_search.setColumn(nRow, "LANGUAGETYPE",      this.lang);
        		this.ds_search.setColumn(nRow, "VERSION",           "10002");

        		this.ds_reworkRoutingList.clearData();
        		var sSvcID        = "selectProductRoutingPreviousProcessPathsList";
        		var sController   = "/qam01900/selectProductRoutingPreviousProcessPathsList.do";
        		var sInDatasets   = "INPUT=ds_search";
        		var sOutDatasets  = "ds_reworkRoutingList=output";
        		var sArgs         = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        		this.fn_refreshArea();
        	}
        	// 재작업라우팅 선택한경우
        	else
        	{
        		this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_enable(true);
        		this.div_currentRouting.form.grd_currentRouting.set_enable(true);
        		this.ds_reworkRoutingList.clearData();
        		this.div_reworkRouting.form.btn_reworkRouting.set_enable(true);
        		this.div_reworkRouting.form.edt_reworkRouting.set_enable(true);
        		this.div_reworkRouting.form.sta_cnt_ds_reworkRoutingList.set_text('Count : <fc v="#f31d24">0</fc>');

                this.ds_search.clearData();
        		var nRow = this.ds_search.addRow();
        		/*20210810
        		this.ds_search.setColumn(nRow, "LOTID",             this.parent.parentLotId);*/
        		this.ds_search.setColumn(nRow, "LOTID",             this.parent.lotId);
        		this.ds_search.setColumn(nRow, "LANGUAGETYPE",      this.lang);

        		this.ds_reworkRoutingList.clearData();
        		this.ds_currentRoutingList.clearData();

        		var sSvcID        = "selectCurrentRoutingByLotList";
        		var sController   = "/qam01900/selectCurrentRoutingByLotList.do";
        		var sInDatasets   = "INPUT=ds_search";
        		var sOutDatasets  = "ds_currentRoutingList=output";
        		var sArgs         = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        		this.fn_refreshArea();
        	}
        };

        /*
         * 기능 : 작업장 정보 재조회
         *         pSDataset : 조회조건에 셋팅될 값을 가지고 있는 데이터 셋
         *         pSRow     : 조회조건에 셋팅될 값을 가지고 있는 데이터 셋의 행
         *         pTDataset : 조회결과를 가지고 있는 데이터 셋
         *         pJobFlag  : 재작업 라우팅(R), 재작업 공정(P)
         */
        this.fn_setTopArea = function(pSDataset, pSRow, pTDataset, pJobFlag)
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "ENTERPRISEID",          this.enterpriseId);
        	this.ds_search.setColumn(nRow, "PLANTID",               this.plantId);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",          this.parent.productDefId);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFVERSION",     this.parent.productDefVersion);
        	this.ds_search.setColumn(nRow, "PROCESSDEFID",          pSDataset.getColumn(pSRow, "PROCESSDEFID"));
        	this.ds_search.setColumn(nRow, "PROCESSDEFVERSION",     pSDataset.getColumn(pSRow, "PROCESSDEFVERSION"));
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",      pSDataset.getColumn(pSRow, "PROCESSSEGMENTID"));
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTVERSION", pSDataset.getColumn(pSRow, "PROCESSSEGMENTVERSION"));
        	this.ds_search.setColumn(nRow, "PROCESSPATHID",         pSDataset.getColumn(pSRow, "PROCESSPATHID"));
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",          this.lang);

        	pTDataset.clearData();
        	var sSvcID        = "selectTransitAreaList";
        	var sController   = "/qam01900/selectTransitAreaList.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = pTDataset.name+"=output";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        	var objArea;
        	if (pJobFlag == "R")
        	    objArea = this.div_reworkRoutingTop.form.cbo_reworkRoutingArea;
        	else
        	    objArea = this.div_currentRoutingTop.form.cbo_currentRoutingArea;

        	for (var i = 0; i < pTDataset.getRowCount(); i++)
        	{
        		var areaId = pTDataset.getColumn(i,"AREAID");
        		// 불량처리된 작업장을 기본자원으로 설정
        		if (this.parent.areaId == areaId)
        		{
        			objArea.set_index(i);
        			break;
        		}

        		// 불량처리된 작업장이 존재하지 않는다면 Primary가 Y로 설정된 작업장을 기본자원으로 설정
        		if (this.nfn_isNull(objArea.value))
        		{
        			if (pTDataset.getColumn(i,"ISPRIMARYRESOURCE") == "Y")
        			    objArea.set_index(i);
        		}
        	}//for
        };

        /*
         * 작업장 정보 재조회
         */
        this.fn_refreshArea = function ()
        {
        	if (this.ds_reworkRoutingList.getRowCount() == 0)
        	{
        		this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.set_value("");
        		this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.set_enable(false);
        	}
        	else
        	{
        		if (this.div_reworkRouting.form.chk_productRouting.value == true)
        		{
        			this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_value("");
        			this.div_currentRoutingTop.form.cbo_currentRoutingArea.set_enable(false);

                    var chkCount = this.ds_reworkRoutingList.getCaseCount("CHK == '1'");
        			if ( chkCount == 0)
        			{
        				this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.set_value("");
        				this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.set_enable(false);
        			}
        			else
        			{
        				var nRow = this.ds_reworkRoutingList.findRow("CHK", "1")
        				//작업장 셋팅
        				this.fn_setTopArea(this.ds_reworkRoutingList, nRow, this.ds_reworkRoutingArea, "R");
        			}//if chkCount
        		}//품목라우팅
        		else
        		{
        			// 불량처리된 작업장이 존재하지 않는다면 Primary가 Y로 설정된 작업장을 기본자원으로 설정
        			//checkpoint 재작업라우팅인데...cboReworkAfterArea의 값비교함...확인필요
                    this.fn_setTopArea(this.ds_reworkRoutingList, 0, this.ds_reworkRoutingArea, "R");
        		}//
        	}//if this.ds_reworkRoutingList.getRowCount()
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
            this.close();
        };

        /*
         * 재작업 라우팅 값 변경시
         */
        this.ds_reworkRoutingList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CHK")
        	{
        		if (e.newvalue == "1")
        		{
        		    this.div_reworkRoutingTop.form.cbo_reworkRoutingArea.set_enable(true);
        			var chkCount = obj.getCaseCount("CHK == '1'");
        			if (chkCount == 2)
        			{
        				var nRow = obj.findRow("CHK", "1");
        				if (nRow == e.row)
        				{
                           nRow = obj.findRow("CHK", "1", nRow+1);
        				}
        				obj.setColumn(nRow, "CHK", false);
        			}
        		}
        		//재작업 라우팅 그리드 공정 선택시 작업장 재조회
        		this.fn_refreshArea();
        	} //if e.columnid
        };

        /*
         * 재작업 후 공정
         */
        this.ds_currentRoutingList_oncolumnchanged= function(obj,e)
        {
        	if (e.columnid == "CHK")
        	{
        		if (e.newvalue == "1")
        		{
        			var chkCount = obj.getCaseCount("CHK == '1'");
        			if (chkCount == 2)
        			{
        				var nRow = obj.findRow("CHK", "1");
        				if (nRow == e.row)
        				{
                           nRow = obj.findRow("CHK", "1", nRow+1);
        				}
        				obj.setColumn(nRow, "CHK", false);
        			}
        		}

        		// 재작업 후 공정 그리드 공정 선택시 작업장 재조회
        		this.fn_routingStateCheck();

        	} //if e.columnid
        };

        /*
         * 기능 : 재작업 라우팅 팝업호출
         */
        this.fn_popup_click = function(obj,e)
        {
        	var oArg = {parentLotId: this.parent.parentLotId};
        	this.gfn_openPopup("REWORKROUTING", "qam::QAM01900P3.xfdl", oArg, "width=800,height=510");
        };

        this.div_reworkRouting_chk_productRouting_onchanged = function(obj,e)
        {
        	this.fn_searchRoutings();
        };


        /*
         * 이벤트 : 재작업 라우팅의 재작업 라우팅 클리어
         *           폼로딩시 enable, visible 에 따라 삭제버튼이 생성되어 제어하기 위해 공통함수를 여기에 기술함
         */
        this.nfn_editBtnClear = function()
        {
        	//사용가능일 경우만 값 초기화
        	if (this.div_reworkRouting.form.edt_reworkRouting.enable)
        	{
        		this.div_reworkRouting.form.edt_reworkRouting.set_value("");
        		this.div_reworkRouting.form.edt_reworkRouting_id.set_value("");
        		this.div_reworkRouting.form.edt_reworkRoutingVersion.set_value("");
        		this.ds_reworkRoutingList.clearData();
        		this.div_reworkRouting.form.sta_cnt_ds_reworkRoutingList.set_text('Count : <fc v="#f31d24">0</fc>');
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_reworkRouting.form.btn_reworkRouting.addEventHandler("onclick",this.fn_popup_click,this);
            this.div_reworkRouting.form.chk_productRouting.addEventHandler("onchanged",this.div_reworkRouting_chk_productRouting_onchanged,this);
            this.btn_confirm.addEventHandler("onclick",this.fn_apply,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_close,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.ds_reworkRoutingList.addEventHandler("oncolumnchanged",this.ds_reworkRoutingList_oncolumnchanged,this);
            this.ds_currentRoutingList.addEventHandler("oncolumnchanged",this.ds_currentRoutingList_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM01900P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
