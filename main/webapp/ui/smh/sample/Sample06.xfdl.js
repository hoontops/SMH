(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_001");
            this.set_titletext("Div접기/펴기");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명2\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명3\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">텍스트텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col></Row><Row><Col id=\"Column0\">텍스트텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col></Row><Row><Col id=\"Column0\">텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_unFold","85","41","28","14",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_ContentsOpen");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","0","41","82","14",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Fold","85","41","28","14",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("btn_WF_ContentsClose");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","65","910","270",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("탭명 00001");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0%","0",null,"43","0%",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static23","2.2%","10",null,"21","92.29%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("53");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","21.26%","10",null,"21","67.73%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("55");
            obj.set_value("ABCDEFG");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","6.61%","10",null,"21","86.01%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("56");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","13.88%","10",null,"21","78.74%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("57");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","38.88%","10",null,"21","50.11%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("58");
            obj.set_font("9pt \"Dotum\"");
            obj.set_value("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","52.09%","10",null,"21","43.5%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("59");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","56.5%","10",null,"21","32.49%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("62");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Combo00_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button52","92.51%","10",null,"21","1.1%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("63");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0%","46",null,"187","0%",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"85\"/><Column size=\"523\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("탭명 00002");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("탭명 00003");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static19","0","1","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Div 접기/펴기");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("hideBar","0","65","909","1",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("Static61");
            obj.set_visible("false");
            obj.set_background("rgba(175,175,175,1)");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","343","910","236",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_background("antiquewhite");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","9","333","14",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","35","386","187",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid02","524","35","386","187",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button67","432","75","54","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button70","419","142","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("전체 추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button71","419","168","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("전체 삭제");
            obj.set_cssclass("btn_WF_GridMinus02");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button72","432","101","54","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_GridMinus02");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static15","374","2","169","31",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("DIV 영역");
            obj.set_visible("true");
            obj.set_background("transparent");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","85.76%","27",null,"19","6.96%",null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample06.xfdl","lib::comLib.xjs");
        this.addIncludeScript("Sample06.xfdl","cuslib::nbdfComLib.xjs");
        this.registerScript("Sample06.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Div 접기/펴기 버튼 Sample
         * 파일명 		: Sample06.xfdl
         * 작성자 		: 진성하(UI공통)
         * 작성일 		: 2014.04.17
         *
         * 설  명		: Div 접기 및 펴기 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        this.executeIncludeScript("cuslib::nbdfComLib.xjs"); /*include "cuslib::nbdfComLib.xjs"*/


        // 숨김처리 될 영역의 height값 지정
        var h = this.Tab00.height;


        // 접기(▲)버튼 온클릭 이벤트
        this.btn_Fold_onclick = function (obj, e)
        {
        	// 접기함수 호출
        	this.gfn_fold(this.Tab00, this.Div00, this.btn_Fold, this.btn_unFold, this.hideBar, h); //함수 경로 lib::comForm.xjs

        	/**************************************************************************************
        	 this.gfn_fold(this.Tab00, this.Div00, this.btn_Fold, this.btn_unFold, this.hideBar, h)
        	 Arguments	: tObj	:	접었을때 비활성화 될 상단 Div의 id값
        	 bObj	:	접었을때 위로 올라갈 하단 Div의 id값
        	 fBtn	:	접기버튼 id값
        	 uBtn	:	펴기버튼 id값
        	 hBar	:	하이드바 id값
        	 h		:	상단 Div의 높이값
        	 **************************************************************************************/
        };

        // 펴기(▼)버튼 온클릭 이벤트
        this.btn_unFold_onclick = function (obj, e)
        {
        	// 펴기함수 호출
        	this.gfn_unFold(this.Tab00, this.Div00, this.btn_Fold, this.btn_unFold, this.hideBar, h); //함수 경로 lib::comForm.xjs

        	/****************************************************************************************
        	 this.gfn_unFold(this.Tab00, this.Div00, this.btn_Fold, this.btn_unFold, this.hideBar, h)
        	 * Arguments	: tObj	:	폈을때 활성화 될 상단 Div의 id값
        	 bObj	:	폈을때 아래로 내려갈 하단 Div의 id값
        	 fBtn	:	접기버튼 id값
        	 uBtn	:	펴기버튼 id값
        	 hBar	:	하이드바 id값
        	 h		:	상단 Div의 높이값
        	 ****************************************************************************************/
        };
        this.Button00_onclick = function (obj, e)
        {
        	var sSvcID = "executeShell";
        	var sController = "/cmsa00400/executeShell.do";
        	var sInDatasets = "";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("EXE_PATH", "C:\\KakaoTalk_Setup.exe");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_unFold.addEventHandler("onclick",this.btn_unFold_onclick,this);
            this.btn_Fold.addEventHandler("onclick",this.btn_Fold_onclick,this);
            this.Tab00.tabpage1.form.Div00.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Sample06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
