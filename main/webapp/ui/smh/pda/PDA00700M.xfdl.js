(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDA00700M");
            this.set_titletext("인수취소");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTINCOMETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title00_00","15","146","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","145","146",null,"39","90",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00","15","188","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","145","188",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00","15","230","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00","15","272","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RESOURCENAME","145","272",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_00","15","104","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("LOT 번호");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","145","104",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSSEGMENTNAME","145","230",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","265","405","122","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소처리");
            obj.set_tooltiptext("취소처리");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_cssclass("btn_SA_search");
            obj.set_background("darkslategray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","121","405","122","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_font("normal 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid gray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isPRODUCT",null,"8","86","42","178",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("양산");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isRework",null,"8","86","42","92",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("재작업");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_background("BLUE");
            obj.set_color("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isRCLot",null,"8","86","42","6",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("변경품");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_background("RED");
            obj.set_color("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01","15","62","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area","145","62",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"62","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","20","405","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_01","15","314","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PNLQTY","145","314","85","39",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","238","314","49","39",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("PNL");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PCSQTY",null,"314","85","39","90",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00",null,"314","49","39","33",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("PCS");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_innerRevisionText",null,"146","59","39","30",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_font("normal 700 16px/normal \"Dotum\",\"돋움\",\"Arial\"");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.set_text("FA1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_msg","2","5","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("전달사항");
            obj.set_font("normal bold 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_msg","12","784","376","392",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","39",null,null,"0","167",null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_message");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/><Column size=\"79\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"수순\" tooltiptext=\"USERSEQUENCE\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"center\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("1");
            obj.set_border("1px solid gray");
            obj.set_text("주요 전달 사항");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","35","35","0",null,null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new WebBrowser("Web","0","226",null,null,"0","0",null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("3");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_msg","52","784","376","392",null,null,null,null,null,null,this.pdv_msg.form);
            obj.set_visible("false");
            obj.set_background("white");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","39",null,null,"0","167",null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_message");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/><Column size=\"79\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"수순\" tooltiptext=\"USERSEQUENCE\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("1");
            obj.set_border("1px solid gray");
            obj.set_text("주요 전달 사항");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","4",null,null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new WebBrowser("Web","0","226",null,null,"0","0",null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("3");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new Edit("edt_worker_id","71","405","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_02","15","357","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("현 상태");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_WipProcessState","145","357",null,"37","30",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_codecolumn("C,WipProcessState,,Y,N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_PRODUCTDEFID","value","ds_lotInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_PRODUCTDEFNAME","value","ds_lotInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_RESOURCENAME","value","ds_lotInfo","RESOURCENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_PROCESSSEGMENTNAME","value","ds_lotInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_PNLQTY","value","ds_lotInfo","PNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_PCSQTY","value","ds_lotInfo","PCSQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cbo_WipProcessState","value","ds_lotInfo","WIPPROCESSSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","sta_isPRODUCT","text","ds_lotInfo","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDA00700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PDA00700M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PDA00700M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PDA00700M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PDA00700M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PDA00700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수취소
         * 파일명 		: PDA00700M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: 인수취소
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var ProcessType = {
        		LotAccept :	0   	// 인수 등록
        	  , StartWork : 1   		// 작업 시작
        	  , WorkCompletion : 2 	//작업 완료
        	  , SelectedLotId : 3 		//인계 등록
         };
        var Constants = {
        		WaitForReceive :	"WaitForReceive"  	// 인수 대기
        	  , Wait :	"Wait"  	// 인수
        	  , Run :	"Run"  	// 작업
        	  , WaitForSend :	"WaitForSend"  	// 인수 대기
        	  , NormaLotCardPath :	"NormaLotCardPath"  	// 일반 Lot Card 위치
        	  , NormaLotCardPath_YP :	"NormaLotCardPath_YP"  	// 일반 Lot Card 위치(영풍)
        	  , ReworkLotCardPath :	"Micube.SmartMES.Commons.Report.LotCardProduction_Rework.repx"  	// 인수 대기
        	  , YOUNGPOONG :	"YOUNGPOONG"  	// 영풍
        	  , INTERFLEX :	"INTERFLEX"  	// 영풍
         };

        this.currProcessType = ProcessType.TransitRegist;
        this.processDefType;
        this.pnlQty_enter = false;
        this._lotId;
        this.currStepType;
        this.g_areaId;

        this.g_LotId       = "";
        this.g_PanelperQty = -1;
        this.g_PnlQty      = -1;
        this.g_PcsQty      = -1;
        this.queryVersion = "";

        var bMsgShow= false;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	if(!this.gfn_isNull(this.parent.parent.areaId)){
        		this.edt_area_id.set_value(this.parent.parent.areaId);
        		this.edt_area.set_value(this.parent.parent.areaNm);
        		this.edt_lotId.setFocus();
        	}
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this;
        	var strColIdList = "edt_area_id,edt_lotId";
        	var strColNmList = "AREA,LOTID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;


        	this.ds_lotInfo.clearData();
           // this.ds_search.clearData();
        	this.ds_message.clearData();
        	this.ds_messageDtl.clearData();

        	var sRow = 0;
        	var msg = "";
        	var v2 = this.pdv_msg.form.Web.getProperty("document").getProperty("body");
        	v2.setProperty( "innerHTML", msg);
        	this.pdv_msg.form.Web.setProperty( "document", v2 );
        	bMsgShow= false;

        	this.ds_search.setColumn(sRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(sRow, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", this.ds_comment.getColumn(0,"LANGUAGETYPE"));
        	this.ds_search.setColumn(sRow, "AREAID", this.edt_area_id.value);
        	this.ds_search.setColumn(sRow, "LOTID", this.edt_lotId.value);
        	this.ds_search.setColumn(sRow, "PROCESSSTATE", "Wait");
        	this.ds_search.setColumn(sRow, "PREVPROCESSSTATE", "WaitForReceive");
        	this.ds_search.setColumn(sRow, "TRANSITTYPE", "ReceiveCancel");

        	var sSvcID 			= "selectLotWorkCancelList";
        	var sController 	= "/pda00600/selectLotWorkCancelList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	if(!this.gfn_isNull(this.parent.parent.areaId)){
        		this.edt_area_id.set_value(this.parent.parent.areaId);
        		this.edt_area.set_value(this.parent.parent.areaNm);
        		this.edt_lotId.setFocus();
        	}
        	this.sta_isPRODUCT.set_text("");
        	this.sta_isPRODUCT.set_visible(false);
        	this.ds_transitArea.clearData();
        	this.edt_area.setFocus();
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장(승인)
         */
        this.fn_save = function (obj, e)
        {
        	if (this.ds_lotInfo.rowcount < 1) {
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	this.ds_comment.clearData();
        	this.ds_comment.addRow();
        	this.ds_comment.setColumn(0,"USERID",this.gf_getUserId());
        	this.ds_comment.setColumn(0,"COMMENT","인계취소");
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "savePcmLotAcceptCancel";
        	var sController 	= "/pcm02500/savePcmLotAcceptCancel.do";
        	var sInDatasets 	= "ds_pcmLotAcceptCancel=ds_lotInfo ds_comment=ds_comment:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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
        	if (errCD < 0)
        	{
        		this.gfn_Message(errMsg, "", "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectLotWorkCancelList":
        			if(this.ds_lotInfo.rowcount==0){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				this.fn_clearDetailInfo();
        				this.edt_lotId.set_value("");
        				this.edt_lotId.setFocus();
        				break;
        				return;
        			}
        			this.sta_isPRODUCT.set_visible(true);
        			this.ds_messageParam.clearData();
        			this.ds_messageParam.addRow();
        			this.ds_messageParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        			this.ds_messageParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        			this.ds_messageParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        			this.ds_messageParam.setColumn(0, "LOTID", this.ds_lotInfo.getColumn(0, "LOTID"));
        			this.ds_messageParam.setColumn(0, "PRODUCTDEFID", this.ds_lotInfo.getColumn(0, "PRODUCTDEFID"));
        			this.ds_messageParam.setColumn(0, "PRODUCTDEFVERSION", this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"));
        			this.ds_messageParam.setColumn(0, "PROCESSSEGMENTID", this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"));
        			this.ds_messageParam.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTVERSION"));
        			this.ds_messageParam.setColumn(0, "VERSION", "10001");


        			var sSvcID = "selectLotHistoryMessage";
        			var sController = "/pcm01700/selectLotHistoryMessage.do";
        			var sInDatasets = "INPUT=ds_messageParam";
        			var sOutDatasets = "ds_message=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			break;

        			break;

        		case "selectLotHistoryMessage":
        			bMsgShow= false;
        			if (this.ds_message.getRowCount() > 0)
        			{
        				var isRealAllMessage = true;

        				for(var i = 0; i < this.ds_message.getRowCount(); i++)
        				{
        					if(this.nfn_nvl(this.ds_message.getColumn(i, "ISREAD"), "") == "N" && this.ds_message.getColumn(i, "SHOWTYPE")=="Y")
        					{
        						isRealAllMessage = false;
        						break;
        					}
        				}
        				if (!isRealAllMessage)
        				{
        					this.btn_msg_onclick(this.btn_msg,nexacro.ClickEventInfo);
        				}
        			}
        			break;
        		case "selectLotMessage":
        			if(this.ds_messageDtl.rowcount==0) return;
        			var msg = this.ds_messageDtl.getColumn(0,"MESSAGE");
        			var v2 = this.pdv_msg.form.Web.getProperty("document").getProperty("body");
        			v2.setProperty( "innerHTML", msg);
        			this.pdv_msg.form.Web.setProperty( "document", v2 );
        			break;

        		case "savePcmLotAcceptCancel":

        			this.fn_clearDetailInfo();

        			this.edt_lotId.set_value("");
        			this.edt_lotId.setFocus();

        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			break;

        		default:
        			break;
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.gfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "AREA_ID" :
        			this.edt_area.set_value(rtn[1]);
        			this.edt_area_id.set_value(rtn[0]);			// 작업장Id
        			this.edt_lotId.setFocus();
        			//this.fn_clearDetailInfo();
        			break;

        		default :
        			break;
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_searchStaying = function()
        {
        	this.ds_dtStaying.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "AREAID", this.edt_area_id.value);
        	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value);
        	this.ds_search.setColumn(0, "PROCESSSTATE","WaitForReceive");
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION", "10001");
        	var sSvcID = "getCheckStaying";
        	var sController = "/pcm01700/getCheckStaying.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_dtStaying=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=450,height=500";

        	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00148"){ //창고 명 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "1=1|TXTAREA=" + this.edt_area.value;	// 검색 조건

        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,opts);
        }

        this.fn_clearDetailInfo = function()
        {
        	this.ds_lotInfo.clearData();
        	//this.edt_area_id.set_value("");
        	this.edt_lotId.set_value("");
        };

        this.fn_setUserInfo = function ()
         {
         	//GetUserList 10001
         	var txtSearch = ""
         	if (!this.gfn_isNull(this.edt_area_id.value))
         	{
         		txtSearch = "USERIDNAME="+ this.edt_worker.value;
         	}

         	var popupId = "SEARCH_UserList";  ///pcmCommon/getUserList.do
         	var oArg = {};
         	oArg.arg_type = "DA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00195";
         	oArg.arg_popupNm = "사용자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME";
         	oArg.arg_paramCols = "PLANTID";
         	oArg.arg_paramValues = this.gf_getSiteType() ;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };
        this.fn_setUserInfoByArea = function ()
         {
         	//GetUserList 10001
         	var txtSearch = "1=1"
         	if (!this.gfn_isNull(this.edt_worker.value))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ this.edt_worker.value;
         	}


         	// 자사구분
         	//workerCondition.GridColumns.AddComboBoxColumn("OWNTYPE", 100, new SqlQuery("GetCodeList", "00001", "CODECLASSID=OwnType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));
         	// 작업자유형
         	//workerCondition.GridColumns.AddComboBoxColumn("WORKERTYPE", 120, new SqlQuery("GetCodeList", "00001", "CODECLASSID=WorkerType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));

         	//???  ==> 디폴트 , 작업자유형 팝업
         	//this.g_areaId = this.edt_area_id.value;
         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  this.g_areaId;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,"width=450,height=500");

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.div_work_div_search_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_work_div_search_btn_area_onclick();
        	}
        };

        this.div_work_div_search_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("AREATYPE", "Area");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());
        	this.fn_openPop("AREA_ID","P00148", sArgs); //작업장 조회
        };

        this.div_work_div_search_edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fn_search();
        	}
        };

        this.btn_workerSrh_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
         	if (this.currProcessType == ProcessType.LotAccept || this.currProcessType == ProcessType.TransitRegist)
         	{
         		this.fn_setUserInfo();
         	}
         	else
         	{
         		this.fn_setUserInfoByArea();
         	}
        };



        this.btn_msg_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        	bMsgShow = true;
        	var left = nexacro.toNumber(obj.left) + 30;
        	var top = nexacro.toNumber(obj.top) + 100;
        	this.pdv_msg.trackPopup(left, top, this.pdv_msg.width, this.pdv_msg.height, "fn_Callback_pdv_grdMenu");
        	this.pdv_msg.show();
        	this.pdv_msg_grd_message_onselectchanged();
        };

        this.pdv_msg_btn_close_onclick = function(obj,e)
        {
        	this.pdv_msg.closePopup();
        };

        this.edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_work_div_search_btn_area_onclick();
        	}
        };

        this.edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) this.fn_search();
        };

        this.pdv_msg_grd_message_onselectchanged = function(obj,e)
        {
        	if(this.ds_message.rowposition<0) return;

        	if(!bMsgShow) return;
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "P_TXNHISTKEY", this.ds_message.getColumn(this.ds_message.rowposition, "TXNHISTKEY"));
        	this.ds_param.setColumn(0, "P_LOTID", this.ds_message.getColumn(this.ds_message.rowposition, "LOTID"));
        	this.ds_param.setColumn(0, "P_PROCESSSEGMENTID", this.ds_message.getColumn(this.ds_message.rowposition, "PROCESSSEGMENTID"));
        	this.ds_param.setColumn(0, "P_USERSEQUENCE", this.ds_message.getColumn(this.ds_message.rowposition, "USERSEQUENCE"));
        	this.ds_param.setColumn(0, "VERSION", "10001");
        	if("N"==this.ds_message.getColumn(this.ds_message.rowposition, "ISREAD")){
        		this.ds_param.setColumn(0, "ISREAD", "Y");
        		this.ds_param.setColumn(0, "LOTID", this.ds_message.getColumn(this.ds_message.rowposition, "LOTID"));
        		this.ds_param.setColumn(0, "SEQUENCE", this.ds_message.getColumn(this.ds_message.rowposition, "TXNHISTKEY"));
        		this.ds_param.setColumn(0, "PRODUCTDEFID", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PRODUCTDEFID"));
        		this.ds_param.setColumn(0, "PRODUCTDEFVERSION", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PRODUCTDEFVERSION"));
        		this.ds_param.setColumn(0, "PROCESSSEGMENTID", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PROCESSSEGMENTID"));
        		this.ds_param.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PROCESSSEGMENTVERSION"));
        	}

        	var sSvcID = "selectLotMessage";
        	var sController = "/pcm01700/selectLotMessage.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_messageDtl=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.edt_lotId.addEventHandler("onkeydown",this.edt_lotId_onkeydown,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.edt_area.addEventHandler("onkeydown",this.edt_area_onkeydown,this);
            this.btn_area.addEventHandler("onclick",this.div_work_div_search_btn_area_onclick,this);
            this.btn_msg.addEventHandler("onclick",this.btn_msg_onclick,this);
            this.pdv_msg.form.grd_message.addEventHandler("onselectchanged",this.pdv_msg_grd_message_onselectchanged,this);
            this.pdv_msg.form.btn_close.addEventHandler("onclick",this.pdv_msg_btn_close_onclick,this);
            this.pdv_msg.form.pdv_msg.form.grd_message.addEventHandler("onselectchanged",this.pdv_msg_grd_message_onselectchanged,this);
            this.pdv_msg.form.pdv_msg.form.btn_close00.addEventHandler("onclick",this.pdv_msg_btn_close00_onclick,this);
        };
        this.loadIncludeScript("PDA00700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
