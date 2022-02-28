(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS05400M");
            this.set_titletext("PCS 이미지 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_imgMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILEDATA\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"SAFEFILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOCALFILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSINGSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEGUID\" type=\"STRING\" size=\"256\"/><Column id=\"X_BTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_imageSize", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_searchPage",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_itemCode","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("2");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F112527EF89E45D8BA876725E97E3B30");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("sta_rev","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("3");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("sta_is","0","188","103","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("4");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_visible("false");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","100","102","36",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"80","45","20","91",null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","131","10","27",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Combo("cmb_validState","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","60","103","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("10");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Edit("edt_itemCode","108","10",null,"20","37",null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("11");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Button("btn_itemCode",null,"10","22","20","15",null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Edit("edt_rev","108","35","165","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Edit("edt_id","108","188","165","20",null,null,null,null,null,null,this.tab_search.tab_searchPage.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            this.tab_search.tab_searchPage.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_gridTitle","0","0","125","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("이미지 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("IMAGELIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34","370",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_imgMain");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"24\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" cssclass=\"cell_point\" tooltiptext=\"PRODUCTDEFID\" border=\"1px solid #e0e0e0,0px solid #e0e0e0,1px solid #e0e0e0,1px solid #e0e0e0\"/><Cell col=\"2\" autosizecol=\"default\"/><Cell col=\"3\" text=\"Rev\" cssclass=\"cell_point\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"4\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"5\" text=\"가로\" tooltiptext=\"HORIZONTAL\"/><Cell col=\"6\" text=\"세로\" tooltiptext=\"VERTICAL\"/><Cell col=\"7\" text=\"유효상태\" cssclass=\"cell_end\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" border=\"1px solid #f1f1f1,0px solid #f1f1f1,1px solid #f1f1f1,1px solid #f1f1f1\" displaytype=\"normal\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"2\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" text=\"bind:X_BTN\" autosizecol=\"default\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;text&apos;:&apos;none&apos;\"/><Cell col=\"4\" textAlign=\"left\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"5\" text=\"bind:WIDTH\" textAlign=\"right\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" edittype=\"mask\" displaytype=\"mask\" editautoselect=\"true\" maskeditautoselect=\"true\" maskeditformat=\"!#,##0.99\"/><Cell col=\"6\" text=\"bind:HEIGHT\" textAlign=\"right\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"!#,##0.99\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\" cssclass=\"expr:dataset.getRowType(currow)==&quot;2&quot;? &quot;cell_bg_blue&quot; : (dataset.getRowType(currow)==&quot;4&quot;?&quot;cell_bg_yellow&quot;:&quot;&quot;)\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_imgTitle","380","0","38","34","540",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("상세");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DETAIL");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","sta_imgTitle:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"6","29","24","btn_xlDn_grd_main:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add","283","6",null,"24","btn_del:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_image","380","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailBg");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new Static("sta_width","0","0","12.15%","31",null,null,null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("0");
            obj.set_text("가로");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WIDTH");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new Static("sta_height","27.78%","0","12.15%","31",null,null,null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("1");
            obj.set_text("세로");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_tooltiptext("HEIGHT");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new MaskEdit("msk_width","sta_width:5","5",null,"20","sta_height:5",null,null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("3");
            obj.set_value("333.4049");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            obj.set_format("!#,##0.99999");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new MaskEdit("msk_height","sta_height:6","5","13.89%","20",null,null,null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("4");
            obj.set_value("462.65512");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_textAlign("right");
            obj.set_format("!#,##0.99999");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new Edit("edt_fileName","10","41",null,"24","87",null,null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new Button("btn_procImage",null,"41","74","24","10",null,null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("이미지 처리");
            obj.set_tooltiptext("IMAGEPROCESSING");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new ImageViewer("img_procImg","10","69",null,null,"10","10",null,null,null,null,this.div_work.form.div_image.form);
            obj.set_taborder("7");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fixaspectratio");
            obj.set_imagealign("center middle");
            this.div_work.form.div_image.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_imgMain","sta_gridTitle:17","0","88","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_resetMain",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_resetMain:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","35","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            obj.set_fittocontents("none");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","130","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("PCS 이미지 관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_GERBERDATACONVERSIONTOPNG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_gerberSetup",null,"16","140","24","btn_save:25",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("GBR 변환 프로그램");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GERBERSETUP_PROG");
            this.div_header.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","1143","770","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.div_image.form.msk_width","value","ds_imgMain","WIDTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.div_image.form.msk_height","value","ds_imgMain","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.div_image.form.edt_fileName","value","ds_imgMain","FILENAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS05400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("BAS05400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("BAS05400M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("BAS05400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: PCS 이미지 관리
         * 파일명 		: BAS05400M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.05.06
         *
         * 설  명		: 기준관리 - 품질기준정보 - PCS 이미지 관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.06	김진현   	최초작성
         * 2021.07.16	김진현		삭제시 이미지 있는 경우 (이미지 테이블 정보 삭제 추가)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_pcmImageId 	= "";     	// 이미지 파일 값
        this.fv_preimgRow	= "";		// 이미지 업로드 후 재조회시 이전 위치 찾기

        this.fv_preProdDefId 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정
        this.fv_preProdDefRev 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	// 품목코드 x 버튼 이벤트 설정
        	this.tab_search.tab_searchPage.form.btn_edt_itemCode.setEventHandler( "onclick", this.fn_clickItemCode, this );

        	// 그리드 팝업창 x 버튼 추가(설비단)
        	var nEqpXBtnIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","X_BTN");
        	this.div_work.form.grd_main.setCellProperty("body",nEqpXBtnIdx,"expandimage","URL('theme://images/img_WF_inputDel_N.png')") ;   // 테마 이미지


        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_imgMain.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0,"P_PRODUCTDEFID"			,this.tab_search.tab_searchPage.form.edt_itemCode.value);
        	this.ds_search.setColumn(0,"P_PRODUCTDEFVERSION"	,this.tab_search.tab_searchPage.form.edt_rev.value);
        	this.ds_search.setColumn(0,"P_VALIDSTATE"			,this.tab_search.tab_searchPage.form.cmb_validState.value);

        	// (21.04.23 추가 대/중/소 복사붙여넣기시 정합성 체크)
        	this.ds_search.setColumn(0,"PLANTID"				,this.gf_getSiteType());
        	this.ds_search.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());

        	var sSvcID 			= "selectPCSImageList";
        	var sController 	= "/bas05400/selectPCSImageList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_imgMain=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };


        /*
         * 기능 : 검색 초기화
         */
        this.fn_reset = function(obj,e)
        {
        	this.ds_imgMain.clearData();
        	this.fv_pcmImageId 	= "";     	// 이미지 파일 값
        	this.fv_preimgRow	= "";		// 이미지 업로드 후 재조회시 이전 위치 찾기
        	this.fn_setGridCnt();
        	this.div_work.form.div_image.form.img_procImg.set_image("");

        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {



        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	// 수정된 내용 있는지확인
            if (!this.gfn_dsIsUpdated(this.ds_imgMain))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}


        	// 메인 그리드 필수값 체크
        	var component = this.div_work.form.grd_main;
        	var strColIdList = "PRODUCTDEFID,PRODUCTDEFVERSION,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// 메인 그리드내 중복값 체크
        	if(!this.fn_checkGridDup(	this.ds_imgMain
        								, "PRODUCTDEFID|PRODUCTDEFVERSION"
        								, "DuplicationUserSequence|DuplicationSegmentID"
        								, this.div_work.form.sta_gridTitle.text
        								)){ return;}


        	this.fn_setZero();			// 가로, 세로 값  0으로 설정

        	// 21.05.10 초기화 설정
        	this.fv_preProdDefId 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정
        	this.fv_preProdDefRev 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정

        	this.fn_setPreProdId();

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "savePcmImage";
        	var sController 	= "/bas05400/savePcmImage.do";		// 설비, 설비단 둘다 저장(설비 우성 -> 설비단 ,삭제시 설비단 조회 후 없으면 넘어감)
        	var sInDatasets 	= "ds_imgMain=ds_imgMain:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);



        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {

        };

        /*
         * 기능 : 행복사
         */
        this.fn_copy = function(obj,e)
        {

        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		if (trId == "savePcmImage")
        		{

        			// 21.05.10 초기화 설정
        			this.fv_preProdDefId 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정
        			this.fv_preProdDefRev 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정

        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		}
        		else if(trId == "savePCSImageSize")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		}
        		else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectPCSImageList": 			//[메인 조회]
        			if(this.ds_imgMain.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");

        				// 21.05.10 초기화 설정
        				this.fv_preProdDefId 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정
        				this.fv_preProdDefRev 	= "";		// 저장시 마지막 row의 품목id값 가지고 포커스 설정


        				// 21.06.15  (초기화 추가)
        				this.fn_setImageView("");
        				return
        			}

        			//trace("   [메인 조회 후  체크] : "+this.fv_preimgRow+" || "+this.fv_pcmImageId);
        			if(!this.gfn_isNull(this.fv_preimgRow))
        			{
        				this.ds_imgMain.set_rowposition(this.fv_preimgRow);
        				this.div_work.form.grd_main.setCellPos(0, this.fv_preimgRow);		// 21.05.10
        				this.fv_preimgRow = "";
        			}
        			// 21.05.10 추가
        			if(!this.gfn_isNull(this.fv_preProdDefId))
        			{
        				var nPos = this.ds_imgMain.findRowExpr("PRODUCTDEFID == '"+this.fv_preProdDefId+"' && PRODUCTDEFVERSION == '"+this.fv_preProdDefRev+"'");
        				this.ds_imgMain.set_rowposition(nPos);
        			}

        			break;

        		case "savePcmImage": 			// [저장 후 재조회]

        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			this.fn_search();
        			break;
        		case "savePCSImageSize": 		// [가로 세로 조회]

        			this.fn_search();
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
        		case "ITEM_ID_F" :			// 필터 품목

        			var nId 	= rtn[0];
        			var nNm 	= rtn[1];
        			var nRev 	= rtn[2];

        			this.tab_search.tab_searchPage.form.edt_itemCode.set_value(nId);		// IetemCode
        			this.tab_search.tab_searchPage.form.edt_rev.set_value(nRev);			// Rev

        			break;

        		case "ITEM_ID_M" :			// 메인 그리드 품목

        			var nId 	= rtn[0];
        			var nNm 	= rtn[1];
        			var nRev 	= rtn[2];

        			var nMainPos = this.ds_imgMain.rowposition;
        			this.ds_imgMain.setColumn(nMainPos,"PRODUCTDEFID",nId);
        			this.ds_imgMain.setColumn(nMainPos,"PRODUCTDEFVERSION",nRev);
        			this.ds_imgMain.setColumn(nMainPos,"PRODUCTDEFNAME",nNm);

        			break;
        		case "file_upload" :

        			if (this.gfn_isNull(this.fv_rtnValue))
        			{
        				return;
        			}
        			/*
        			var nArr  = this.fv_rtnValue;
        			var nKey  =	nArr[4];
        			trace(" ========================= > : "+nKey);
        			if (this.gfn_isNull(nKey))
        			{
        				this.fn_search();
        			}
        			else
        			{
        				this.fn_setImgSize();		// 이미지 설정 후 가로 세로 설정
        			}
        			*/
        			this.fn_setImgSize();		// 이미지 설정 후 가로 세로 설정(없는 경우 null로 저장 - 삭제의경우)
        			break;

        		default :
        			break;
        	}
        };



         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";		// 단일 선택 / 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00260"){ //품목(필터)
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";						// 리턴 받을 값

        		var nItemId = "";
        		if(svcId == 'ITEM_ID_M')
        		{
        			oArg.arg_type = "B";		// 단일 선택
        			nItemId = this.ds_imgMain.getColumn(this.ds_imgMain.rowposition,"PRODUCTDEFID");
        		}
        		else
        		{
        			nItemId = this.tab_search.tab_searchPage.form.edt_itemCode.value;
        		}
        		oArg.arg_searchStr = "PRODUCTDEF="+nItemId;	// 검색 조건(이미 입력 된값)
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
         /*
         * 필터 품목코드 x 버튼 클릭시
         */
        this.fn_clickItemCode = function ()
        {
        	this.tab_search.tab_searchPage.form.edt_itemCode.set_value("");		// IetemCode
        	this.tab_search.tab_searchPage.form.edt_rev.set_value("");			// Rev
        };

        /*
         * 행 추가 / 삭제시  Count 변경
         */
        this.fn_setGridCnt = function ()
        {
        	var nCnt 	= this.ds_imgMain.rowcount;
        	this.div_work.form.sta_cnt_ds_imgMain.set_text("Count : <fc v='#f31d24'>"+nCnt+"</fc>");
        };

        /*
         * 메인 그리드 품목 코드 팝업 호출
         */
        this.fn_getProdId = function ()
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"		, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"			, this.gf_getSiteType());

        	this.fn_openPop("ITEM_ID_M","P00260", sArgs); //품목 코드 조회
        };

        /*******************************************************************************
         * fn_checkGridDup
         * 기능 : 그리드내 중복값 존재여부 체크
         * 최성민(복사해수 구현)
         * Parameter  :
         *				obj 	: 체크 Dataset
         *				chkCol  : 체크 컬럼ID (COLUMN_A|COLUMN_B|COLUMN_C)
         *				msg		: 체크컬럼 오류시 메세지 ID (MSG_A|MSG_B|MSG_C)
        *******************************************************************************/
         this.fn_checkGridDup = function (obj, chkCol, msg, tableNm)
         {
        	//속도문제로 로딩바 이미지 표시
        	if(this.nfn_isNull(chkCol)) return true;
        	var chkColList = chkCol.split("|");
        	for(var i=0; i <obj.rowcount; i++){

        		var nChkStr = "";
        		for(var j=0; j <chkColList.length; j++){
        			var chkKey = chkColList[j];
        			var chkValue = obj.getColumn(i,chkKey);

        			nChkStr += j==0? chkKey+"== '" + chkValue+"'"
        							:" && " +chkKey+"== '" + chkValue+"'";
        		}
        		// 중복 조건
        		var chkCnt = obj.getCaseCount(nChkStr);

        		if(chkCnt > 1){
        			var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        			this.gfn_Message("CannotInputDupSomething",tableNm , "warning", "ok");
        			return false;
        		}
        	}
        	return true;
         };

        /*
         * 저장된 이미지 호출 설정
         */
        this.fn_setImageView = function (nFile)
        {
        	if(!this.gfn_isNull(nFile))
        	{
        		upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + nFile + ".do";
        	}
        	else
        	{
        		upUrl = "";
        	}
        	this.div_work.form.div_image.form.img_procImg.set_image(upUrl);
        };

        /*
         * 이미지 가로 세로 설정
         */
        this.fn_setImgSize = function ()
        {
        	this.ds_imageSize.clearData();
        	this.ds_imageSize.addRow();
        	this.ds_imageSize.setColumn(0,"PRODUCTDEFID"		,this.ds_imgMain.getColumn(this.fv_preimgRow, "PRODUCTDEFID"));
        	this.ds_imageSize.setColumn(0,"PRODUCTDEFVERSION"	,this.ds_imgMain.getColumn(this.fv_preimgRow, "PRODUCTDEFVERSION"));


        	var sSvcID 			= "savePCSImageSize";
        	var sController 	= "/bas05400/savePCSImageSize.do";
        	var sInDatasets 	= "ds_imageSize=ds_imageSize";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 저장전 가로,세로값 0으로 설정
         */
        this.fn_setZero = function ()
        {
        	var nCnt  = this.ds_imgMain.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nType = this.ds_imgMain.getRowType(i);
        		if(nType == Dataset.ROWTYPE_INSERT || nType == Dataset.ROWTYPE_UPDATE)
        		{
        			var nH = this.ds_imgMain.getColumn(i, "HEIGHT");
        			var nW = this.ds_imgMain.getColumn(i, "WIDTH");
        			if(this.gfn_isNull(nH))
        			{
        				this.ds_imgMain.setColumn(i, "HEIGHT", 0);
        			}
        			if(this.gfn_isNull(nW))
        			{
        				this.ds_imgMain.setColumn(i, "WIDTH", 0);
        			}
        		}
        	}
        };



        /*
         * 저장시 row 위치 파악  (Test - 1010760A1)
         */
        this.fn_setPreProdId = function ()
        {
        	var nPos = this.ds_imgMain.rowposition;

        	if(nPos != -1)
        	{
        		// 21.05.10 초기화 설정
        		this.fv_preProdDefId 	= this.ds_imgMain.getColumn(nPos, "PRODUCTDEFID");			// 저장시 마지막 row의 품목id값 가지고 포커스 설정
        		this.fv_preProdDefRev 	= this.ds_imgMain.getColumn(nPos, "PRODUCTDEFVERSION");;	// 저장시 마지막 row의 품목id값 가지고 포커스 설정
        	}

        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 필터 초기화 버튼
         */
        this.fn_initSearch = function(obj,e)
        {
        	this.tab_search.tab_searchPage.form.edt_itemCode.set_value("");		// IetemCode
        	this.tab_search.tab_searchPage.form.edt_rev.set_value("");			// Rev
        	this.tab_search.tab_searchPage.form.edt_id.set_value("");			// ID
        	this.tab_search.tab_searchPage.form.cmb_validState.set_index(0);	// 유효상태
        };

        /*
         * 필터 풀목 코드 팝업 호출
         */
        this.tab_search_tab_searchPage_btn_itemCode_onclick = function(obj,e)
        {
        	// 필수 조회 조건
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID"		, this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID"			, this.gf_getSiteType());

        	this.fn_openPop("ITEM_ID_F","P00260", sArgs); //품목 코드 조회
        };

        /*
         * 메인 그리드 추가
         */
        this.fn_addMain = function(obj,e)
        {
        	var nAdd 	= this.ds_imgMain.addRow();

        	this.ds_imgMain.setColumn(nAdd, "VALIDSTATE" 			, "Valid");
        	this.ds_imgMain.setColumn(nAdd, "WIDTH" 				, "0");
        	this.ds_imgMain.setColumn(nAdd, "HEIGHT" 				, "0");

        	this.fn_setGridCnt();

        	this.div_work.form.grd_main.setCellPos(1, nAdd);
        };

        /*
         * 메인 그리드 삭제
         */
        this.fn_delMain = function(obj,e)
        {
        	var nChkCnt = this.ds_imgMain.rowcount;
        	var nDsPos  = this.ds_imgMain.rowposition

        	// 삭제건 체크
        	if (nChkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}
        	this.ds_imgMain.deleteRow(nDsPos);

        	this.fn_setGridCnt();
        };

        /*
         * 메인 그리드 품목코드 선택 팝업
         */
        this.div_work_grd_main_onexpanddown = function(obj,e)
        {
        	var nProdIdIdx 	= this.div_work.form.grd_main.getBindCellIndex("body","PRODUCTDEFID");
        	var nXIdx 		= this.div_work.form.grd_main.getBindCellIndex("body","X_BTN");

        	if(e.cell == nProdIdIdx)		// Area Id Popup
        	{
        		// 팝업 호출
        		this.fn_getProdId(e.row);
        	}
        	else if(e.cell == nXIdx)
        	{
        		this.ds_imgMain.setColumn(e.row, "PRODUCTDEFID","");
        		this.ds_imgMain.setColumn(e.row, "PRODUCTDEFVERSION","");
        		this.ds_imgMain.setColumn(e.row, "PRODUCTDEFNAME","");
        	}
        };

        /*
         * 이미지 처리 버튼 클릭
         */
        this.div_work_div_image_btn_procImage_onclick = function(obj,e)
        {
        	var nCnt = this.ds_imgMain.rowcount;
        	if(nCnt == 0)
        	{
        		return;
        	}

        	var nType = this.ds_imgMain.getRowType(this.ds_imgMain.rowposition);
        	if(nType == Dataset.ROWTYPE_INSERT)
        	{
        		this.gfn_Message("CheckAfterAdd", null, "warning", "ok");//추가된 내용이 있습니다. 저장 후 진행해 주십시오.
        		return;
        	}

        	var nProcId	= this.ds_imgMain.getColumn(this.ds_imgMain.rowposition,"PRODUCTDEFID");
        	if(this.gfn_isNull(nProcId))
        	{
        		return;
        	}

        	// 허용 파일 확장자
        	// Filter = "Image Files (*.bmp, *.jpg, *.jpeg, *.png)|*.BMP;*.JPG;*.JPEG;*.PNG",

        	//var mRow = this.ds_LotList.rowcount == 1 ? 0 : this.ds_LotList.rowposition;
        	var nRow = this.ds_imgMain.rowcount == 1 ? 0 : this.ds_imgMain.rowposition;

        	// 재조회시 위치 찾기
        	this.fv_preimgRow = nRow;

        	var srcKey = "";
        	if(nRow >= 0 ) {//bind:DEFECTCODE
        		srcKey = this.ds_imgMain.getColumn(nRow, "PRODUCTDEFID")
        				+ "|" + this.ds_imgMain.getColumn(nRow,"PRODUCTDEFVERSION")
        			   ;
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var jobSysCd 		= "BAS"; 					//업무구분코드 CMD,BAS....
        	var subDir 			= "BAS"; 					//세부업무약어
        	var resouceid 		= srcKey;					//테이블의 키 값
        	var resourcetype 	= "BAS_QCPCSIMAGE"; 		//테이블명
        	var comments 		= "PCM(사진)"; 				//파일설명
        	var fileCnt 		= '1'; 						//업로드수
        	//var fileExts 		= [".BMP", ".JPG", ".JPEG", ".PNG"];	//허용 파일 확장자

        	var oArg = {
        		arg_jobSysCd 	: jobSysCd,
        		arg_atchSrcKey 	: resouceid,
        		arg_tableName 	: resourcetype,
        		arg_desc 		: comments,
        		arg_subDir 		: fileCnt,
        		arg_fileCnt 	: fileCnt
        		//,arg_fileExts	: fileExts
        	};
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");		// 실장님화면
        };

        /*
         * 메인 그리드 데이터셋 row 변경시
         */
        this.ds_imgMain_onrowposchanged = function(obj,e)
        {
        	if(e.newrow > -1  && e.oldrow != e.newrow) {
        		this.fv_pcmImageId 	 	= this.ds_imgMain.getColumn(e.newrow, "FILEGUID");
        		//trace(" ---(row 변경시확인) : "+this.fv_pcmImageId+" || "+this.fv_preimgRow);
        		this.fn_setImageView(this.fv_pcmImageId);
        	}
        };


        /*
         * Gbr -> 이미지 변환 프로그램 다운로드
         */
        this.div_header_btn_gerberSetup_onclick = function(obj,e)
        {
        	var url = nexacro.getEnvironment().services["svcurl"].url;
        	trace(" [url] ===> : "+url);
        	var dnUrl = url + "/comm/downFIleFullSaveCours.do?fullSaveCours=/MES_NAS/INTERFLEX_GerberSetup.msi";
        	trace(" [최종 url] ===> : "+dnUrl);
        	this.FileDownload00.set_downloadurl(dnUrl);
        	var bSucc = this.FileDownload00.download();
        	trace("bSucc >> " + bSucc);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_searchPage.form.btn_clear.addEventHandler("onclick",this.fn_initSearch,this);
            this.tab_search.tab_searchPage.form.btn_itemCode.addEventHandler("onclick",this.tab_search_tab_searchPage_btn_itemCode_onclick,this);
            this.div_work.form.grd_main.addEventHandler("onexpanddown",this.div_work_grd_main_onexpanddown,this);
            this.div_work.form.btn_del.addEventHandler("onclick",this.fn_delMain,this);
            this.div_work.form.btn_add.addEventHandler("onclick",this.fn_addMain,this);
            this.div_work.form.div_image.form.btn_procImage.addEventHandler("onclick",this.div_work_div_image_btn_procImage_onclick,this);
            this.div_header.form.btn_resetMain.addEventHandler("onclick",this.fn_reset,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_gerberSetup.addEventHandler("onclick",this.div_header_btn_gerberSetup_onclick,this);
            this.ds_imgMain.addEventHandler("onrowposchanged",this.ds_imgMain_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS05400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
