(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06800M");
            this.set_titletext("설비별 실적현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectPerformancestatusbyEquipment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTQTY\" type=\"INT\" size=\"256\"/><Column id=\"PNLQTY\" type=\"INT\" size=\"256\"/><Column id=\"M2\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"WORKMINUTE\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("설비별 실적현황");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","167","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaId","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentid","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_111111","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_owntype","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegmentid","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","61","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaid","108","84",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaid",null,"84","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ProductionType","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processsegmentid",null,"111","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","184","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_owntype","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","10","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","162","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0","117","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("설비별 실적 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_selectPerformancestatusbyEquipment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_selectPerformancestatusbyEquipment");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"30\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업장\" tooltiptext=\"AREA\"/><Cell col=\"2\" text=\"설비ID\"/><Cell col=\"3\" text=\"설비명\"/><Cell col=\"4\" text=\"작업시작시간\"/><Cell col=\"5\" text=\"작업종료시간\"/><Cell col=\"6\" text=\"LotNo.\"/><Cell col=\"7\" text=\"공정명\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"품목명\"/><Cell col=\"10\" text=\"층수\"/><Cell col=\"11\" text=\"수량(PCS)\"/><Cell col=\"12\" text=\"수량(PNL)\"/><Cell col=\"13\" text=\"M2\"/><Cell col=\"14\" text=\"작업시간(분)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:AREANAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TRACKINTIME\" expr=\"dataset.getRowLevel(currow) == 0 ?  TRACKINTIME : &quot;소계&quot;\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TRACKOUTTIME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:LAYER\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:LOTQTY\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PNLQTY\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:M2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"center\" maskeditformat=\"#,##0.00 \" displaytype=\"mask\"/><Cell col=\"14\" text=\"bind:WORKMINUTE\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"center\" displaytype=\"mask\" maskeditformat=\"#,##0.00 \"/></Band><Band id=\"summary\"><Cell colspan=\"11\" text=\"총계\" textAlign=\"center\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;LOTQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;PNLQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;M2&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;WORKMINUTE&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_selectPerformancestatusbyEquipment",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM06800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06800M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM06800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 설비실적현황
         * 파일명 		: PCM06800M.xfdl
         * 작성자 		: 이용국
         * 작성일 		: 2021.02.15
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.15	이용국   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
             if (this.nfn_isNull(this.tab_search.Tabpage1.form.cal_periodFr.value))
        	{
        		this.gfn_Message("조회기간(FROM)을 입력햐여 주십시요", "", "error", "ok");
        		this.tab_search.Tabpage1.form.cal_periodFr.setFocus();
        		return false;
        	}
        	if (this.nfn_isNull(this.tab_search.Tabpage1.form.cal_periodTo.value))
        	{
        		this.gfn_Message("조회기간(To)을 입력햐여 주십시요", "", "error", "ok");
        		this.tab_search.Tabpage1.form.cal_periodTo.setFocus();
        		return false;
        	}

        	this.ds_selectPerformancestatusbyEquipment.clearData();
        // 	this.ds_search.clearData();
        // 	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(0, "PLANTID", 			this.tab_search.Tabpage1.form.cbo_plantId.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_search.setColumn(0, "SQL_ID", 			"SelectPerformancestatusbyEquipment");
        	this.ds_search.setColumn(0, "PERIODFR", 		this.tab_search.Tabpage1.form.cal_periodFr.value);
        	this.ds_search.setColumn(0, "PERIODTO", 		this.tab_search.Tabpage1.form.cal_periodTo.value);
         	this.ds_search.setColumn(0, "AREAID", 			this.ds_search.getColumn(0,"AREAID"));
         	this.ds_search.setColumn(0, "PROCESSSEGMENTID", this.ds_search.getColumn(0,"PROCESSSEGMENTID"));
        	this.ds_search.setColumn(0, "PRODUCTIONTYPE", 	this.tab_search.Tabpage1.form.cbo_ProductionType.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFTYPE", 	this.tab_search.Tabpage1.form.cbo_productdeftype.value);
        	this.ds_search.setColumn(0, "OWNTYPE", 	        this.tab_search.Tabpage1.form.cbo_owntype.value);

        	var sSvcID = "SelectPerformancestatusbyEquipment";
        	var sController = "/pcm06800/selectCustomQuery.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_selectPerformancestatusbyEquipment=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
            this.fn_formInit();
        	//그리드 기능 제외
        	//sort 제거
        	this.div_work.form.grd_selectPerformancestatusbyEquipment.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거
        	this.div_work.form.grd_selectPerformancestatusbyEquipment.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.grd_selectPerformancestatusbyEquipment.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {

        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {

        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", "\n"+ errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "SelectPerformancestatusbyEquipment":
        			 if (this.ds_selectPerformancestatusbyEquipment.getRowCount() == 0)
        			 {
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        			 } else {
        				this.ds_selectPerformancestatusbyEquipment.set_keystring("G:+EQUIPMENTID+PROCESSSEGMENTID+WORKCOUNT");
        			 }
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.Tabpage1.form.edt_areaid.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
        			}
        			else
        			{
        				var value = [];
        				var dsval = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 2) == 0)
        					{
        						dsval.push(rtn[i]);
        					}
        					else
        					{
        						value.push(rtn[i]);
        					}
        				}
        				this.tab_search.Tabpage1.form.edt_areaid.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "AREAID",          dsval.join(",") );
        			}
        		}
        		break;
        		case "POPUP_PROCESSSEGMENTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_processsegmentid.set_value( rtn[1]);
        			this.ds_search.setColumn( 0, "PROCESSSEGMENTID",           rtn[0] );
        		}
        		break;
        		case "SEARCH_LOTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_LOTID.set_value( rtn[1]);
        			this.ds_search.setColumn( 0, "LOTID",           rtn[0] );
        		}
        		break;
        		default :
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_formInit = function()
        {
        	this.tab_search.Tabpage1.form.btn_edt_areaid.addEventHandler(           "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        	this.tab_search.Tabpage1.form.btn_edt_processsegmentid.addEventHandler( "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);

        	this.tab_search.Tabpage1.form.cbo_plantId.set_value(this.gf_getSiteType());
            this.basfn_getPeriodData("ds_periodType");
        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");
        	this.tab_search.Tabpage1.form.cbo_ProductionType.set_value(null);

        		//sort 제거
        	this.div_work.form.grd_selectPerformancestatusbyEquipment.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거
        	this.div_work.form.grd_selectPerformancestatusbyEquipment.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.grd_selectPerformancestatusbyEquipment.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.fn_setDate = function (periodType)
        {
        	this.tab_search.Tabpage1.form.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tabpage1.form.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        this.tab_search_Tabpage1_btn_popup_onclick = function(obj,e)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅 : C:
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var oArg = {};
        	switch(obj.name)
        	{
        		case "btn_areaid" :
        		{
        			if (this.tab_search.Tabpage1.form.edt_areaid.value != "")
        			{
        				oArg.arg_type        = "CA";
        			}
        			else
        			{
        				oArg.arg_type        = "C";
        			}
        			oArg.arg_popupCd     = "P00157";
        			oArg.arg_popupNm     = "작업장 선택";
        			oArg.arg_rtnCols     = "AREAID|AREANAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        			oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.tab_search.Tabpage1.form.cbo_plantId.value;
        			oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tabpage1.form.edt_areaid.value;
        			this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_processsegmentid" :
        		{
        			if (this.tab_search.Tabpage1.form.edt_processsegmentid.value != "")
        			{
        				oArg.arg_type        = "BA";
        			}
        			else
        			{
        				oArg.arg_type        = "B";
        			}
        			oArg.arg_popupCd     = "P00156";
        			oArg.arg_popupNm     = "공정 선택";
        			oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        			oArg.arg_searchStr   = "P_PROCESSSEGMENT=" +this.tab_search.Tabpage1.form.edt_processsegmentid.value;
        			this.gfn_openPopup( "POPUP_PROCESSSEGMENTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		default :
        		{
        		}
        		break;
        	};
        };

        this.tab_search.Tabpage1.form.btn_edt_onclick = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btn_edt_areaid" :
        		{
        			this.ds_search.setColumn( 0, "AREAID", "" );
        		}
        		break;
        		case "btn_edt_processsegmentid" :
        		{
        			this.ds_search.setColumn( 0, "PROCESSSEGMENTID", "" );
        		}
        		break;
        		default :
        		{
        		}
        		break;
        	};

        	trace( 'btn_edt_onclick ?' +  this.ds_search.saveXML());
        };

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"CA");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_areaid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_processsegmentid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
        };
        this.loadIncludeScript("PCM06800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
