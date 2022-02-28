(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDA01100M");
            this.set_titletext("인수작업장 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitArea", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"UISEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_work", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GOODQTY\">0</Col><Col id=\"GOODPNLQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"DEFECTPNLQTY\">0</Col><Col id=\"COMMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREANM\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTNM\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title00_00","15","143","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","145","143",null,"39","90",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00","15","184","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","145","184",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00","15","225","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00","15","266","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RESOURCENAME","145","266",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_00","15","102","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("LOT 번호");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","145","102",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSSEGMENTNAME","145","225",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","265","435","122","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("변경");
            obj.set_tooltiptext("변경");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_cssclass("btn_SA_search");
            obj.set_background("darkslategray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","121","435","122","56",null,null,null,null,null,null,this);
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

            obj = new Static("sta_title00_00_01","15","61","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area","145","61",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"61","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","20","465","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_01","15","307","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PNLQTY","145","307","85","39",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","238","307","49","39",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("PNL");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PCSQTY",null,"307","85","39","90",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00",null,"307","49","39","33",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("PCS");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_innerRevisionText",null,"143","59","39","30",null,null,null,null,null,this);
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

            obj = new Edit("edt_worker_id","71","465","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_transitArea","15","386","121","39",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("변경자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","540","358",null,"37","-365",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_font("normal 15pt/normal \"Arial\"");
            obj.set_innerdataset("ds_transitArea");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_02","15","348","111","39",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("현 상태");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_WipProcessState","145","348",null,"37","30",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_codecolumn("C,WipProcessState,,Y,N");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_resource","526","397","305","120",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_resource","0","0",null,null,"0","0",null,null,null,null,this.pdv_resource.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_transitArea");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"303\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"자원\" font=\"normal bold 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCENAME\" font=\"normal bold 16px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_resource.addChild(obj.name, obj);

            obj = new Edit("edt_resource","145","387",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_resource",null,"387","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_resource_id","71","443","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_visible("false");
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
        this.addIncludeScript("PDA01100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PDA01100M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PDA01100M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PDA01100M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PDA01100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PDA01100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자원변경(인수작업장 변경)
         * 파일명 		: PDA01100M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: 자원변경
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

        var bMsgShow = false;

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
        	if(rtn == false) return;


        	this.ds_lotInfo.clearData();

        	this.ds_message.clearData();
        	this.ds_messageDtl.clearData();
        	var msg = "";
        	var v2 = this.pdv_msg.form.Web.getProperty("document").getProperty("body");
        	v2.setProperty( "innerHTML", msg);
        	this.pdv_msg.form.Web.setProperty( "document", v2 );
        	bMsgShow= false;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_USERID",  this.gf_getUserId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "P_LOTID", this.edt_lotId.value);
        	this.ds_search.setColumn(0, "P_AREAID", this.edt_area_id.value);
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION",  "10002");

        	var sSvcID 			= "selectWipTransAreaList";
        	var sController 	= "/pda00600/selectWipTransAreaList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output ds_transitArea=ds_transitArea";
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
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (this.ds_lotInfo.rowcount < 1) {
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	if(this.fn_onValidateContent()) return;

        	/* 인계작업장 관련 로직 추가 */
        	var strTransitArea = "";
        	//var strResourceid = this.cbo_transitArea.value;
        	var strResourceid = this.edt_resource_id.value;
        	if(!this.gfn_isNull(strResourceid)){
        		strTransitArea = this.ds_transitArea.lookup("RESOURCEID",strResourceid,"AREAID");
        	}
        	var _processSegmentType     = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTTYPE"), "");
        	var _isInspectionProcess	= false;

        	this.ds_dataInfo.clearData();
        	this.ds_dataInfo.addRow();
        	this.ds_dataInfo.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_dataInfo.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_dataInfo.setColumn(0, "TRANSRESOURCEID", strResourceid);
        	this.ds_dataInfo.setColumn(0, "TRANSAREAID", strTransitArea);
        	this.ds_dataInfo.setColumn(0, "LOTID", this.ds_lotInfo.getColumn(0, "LOTID"));
        	//{ "transAreaList" , dt },
        	this.ds_dataInfo.setColumn(0, "UISEGMENT", this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"));


        	var sSvcID = "saveChangeArea";
        	var sController = "/pcm02800/saveChangeArea.do";
        	var sInDatasets = "ds_dataInfo=ds_dataInfo ds_transAreaList=ds_dataInfo";
        	var sOutDatasets = "";
        	var sArgs = "";
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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectWipTransAreaList" :
        			if(this.ds_lotInfo.rowcount==0){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				this.fn_clearDetailInfo();
        				this.edt_lotId.set_value("");
        				this.edt_lotId.setFocus();
        				break;
        				return;
        			}
        			//this.sta_isPRODUCT.set_visible(true);
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
        		case "saveChangeArea":

        			this.fn_clearDetailInfo();

        			this.g_LotId       = "";
        			this.edt_lotId.set_value("");
        			this.edt_lotId.setFocus();

        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			break;

        		case "selectLotMessage":
        			if(this.ds_messageDtl.rowcount==0) return;
        			var msg = this.ds_messageDtl.getColumn(0,"MESSAGE");
        			var v2 = this.pdv_msg.form.Web.getProperty("document").getProperty("body");
        			v2.setProperty( "innerHTML", msg);
        			this.pdv_msg.form.Web.setProperty( "document", v2 );
        			break;

        	  case "getAreaList":  // LotProductTypePathType, getAreaList

        		this.primaryAreaId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "AREAID"), "");
        		/*
        		this.cbo_transitArea.set_value(this.primaryAreaId);
        		this.cbo_transitArea.set_codecolumn("AREAID");
        		this.cbo_transitArea.set_datacolumn("AREANAME");
        		*/
        		this.edt_resource_id.set_value(this.primaryAreaId);
        		this.fn_setControlsInfo3();


        		break;

        	  case "getTransitAreaList": // TransitAreaList


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
        			this.fn_clearDetailInfo();
        			break;

        		case "SEARCH_RESOURCE" :
        			if(rtn.resultCd == "OK")
        			{
        				this.ds_body.clearData();
        				this.ds_body.addRow();

        				this.ds_body.setColumn(0, "LOTID", 		this.nfn_nvl(this.ds_search.getColumn(0, "LOTID"), ""));
        				this.ds_body.setColumn(0, "RESOURCEID", this.nfn_nvl(rtn.resourceId, "")); // 팝업 리턴값
        				this.ds_body.setColumn(0, "VERSION", 	"10031");

        				var sSvcID 			= "saveLotResourceId";
        				var sController 	= "/pcmWorkProcess/saveLotResourceId.do";
        				var sInDatasets 	= "INPUT=ds_body";
        				var sOutDatasets 	= "";
        				var sArgs 			= "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        				//this.fn_search();
        			} else {
        				// 현재 공정에서 사용할 자원을 선택하시기 바랍니다.
        				this.gfn_Message("SelectResourceForCurrentProcess", null, "warning", "ok");
        			}

        			break;

        		default :
        			break;
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

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
        	this.edt_innerRevisionText.set_value("");
        	this.sta_isRework.set_visible(false);
        	this.sta_isRCLot.set_visible(false);
        	this.ds_lotInfo.clearData();
        	this.ds_work.clearData();
        	this.ds_work.addRow();

        	this.ds_transitArea.clearData();
        	this.ds_lotInfo.clearData();
        	this.ds_work.clearData();
        	this.ds_comment.clearData();
        //	this.ds_processSpec.clearData();
        //	this.ds_postProcessEquipmentWipInfo.clearData();
        	this.ds_message.clearData();
        	this.ds_messageDtl.clearData();
        //	this.ds_defect.clearData();
        };

        this.fn_checkLotProcessStateByStepType = function (processType, processState, stepType)
        {
        	var processStateByCurrentStep = this.fn_GetProcessStateByProcessType(processType);
        	this.currStepType = stepType;
        	var stepList = 	stepType+",";
        	// 유효하지 않은 Process Type 인지 체크
        	if (this.gfn_isNull(processStateByCurrentStep))
        		return false;

        	// Process State 다국어 정보 조회
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "CODECLASSID" , "WipProcessState");
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION", "00001");

        	var sSvcID = "getCodeList";
        	var sController = "/pcm01700/getCodeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_processStateDictionary=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        	trace("ds_processStateDictionary-->"+this.ds_processStateDictionary.saveXML());
        	var rtnBoolean = this.fn_getCodeList_CallBack();

        	if (!rtnBoolean)
        	{
        		this.fn_clearDetailInfo();

        		this.edt_lotId.set_value("");
        		this.edt_lotId.setFocus();
        		return;
        	}

        	//채공 상태 체크
        	var lotId = this.edt_lotId.value;

        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramMain.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_paramMain.setColumn(0, "AREAID", this.g_areaId);
        	this.ds_paramMain.setColumn(0, "LOTID", lotId);
        	this.ds_paramMain.setColumn(0, "PROCESSSTATE","WaitForReceive");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", "10001");


        	var sSvcID = "getCheckStaying";
        	var sController = "/pcm01700/getCheckStaying.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_dtStaying=output";
        	var sArgs = "";
        	trace("ds_dtStaying-->"+this.ds_dtStaying.saveXML());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        	if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        		// 채공팝업
        		var popupId = "SEARCH_StayReasonCode";
        		var oArg = {};

        		oArg.arg_ds_dtStaying = this.ds_dtStaying;
        		this.gfn_openPopup(popupId,"pda::PDA00201P.xfdl",oArg,"width=556,height=409");	// Step2_2 popupAfter 호출
        		return;
        	}

        	var state = "";

        	// 현재 Process State가 Step Type에 있는지 체크
        	if (stepList.length < 1 || stepList.indexOf(processStateByCurrentStep+",")<0)
        	{
        		// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        		//MSGBox.Show(MessageBoxType.Information, invalidProcessStateInStepTypeMsg.Title, invalidProcessStateInStepTypeMsg.Message, this.currStepType, processState);
        		//this.gfn_Message("InvalidProcessStateInStepType", [stepType,processState], "info", "ok");
        		this.fn_getStepName(stepType, processState);
        		return false;
        	}

        	switch (processType)
        	{
        		case ProcessType.LotAccept:
        			if (processState == Constants.WaitForReceive)
        			{
        				return true;
        			}
        			else if (processState == Constants.Wait)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//this.ds_processStateDictionary.filter("");

        				// state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        				// 인수 처리된 Lot 입니다. 인수 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.Run)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리된 Lot 입니다. 인수 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 인수 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		case ProcessType.StartWork:
        			if (processState == Constants.WaitForReceive)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") == -1)
        				{
        					return true;
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        					return false;
        				}
        			}
        			else if (processState == Constants.Wait)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") > -1)
        				{
        					return true;
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.Run)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리된 Lot 입니다. 작업 시작 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 작업 시작 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		case ProcessType.WorkCompletion:
        			if (processState == Constants.WaitForReceive)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") == -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						return true;
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        					return false;
        				}
        			}
        			else if (processState == Constants.Wait)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") > -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						return true;
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.Run)
        			{
        				if (stepList.indexOf(Constants.Wait+",") > -1)
        				{
        					return true;
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 작업 완료 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		case ProcessType.TransitRegist:
        			if (processState == Constants.WaitForReceive)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") == -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						if (stepList.indexOf(Constants.Run+",") == -1)
        						{
        							return true;
        						}
        						else
        						{
        							var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        							state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        							//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        							// 작업완료 처리가 진행되지 않았습니다. 작업 완료 처리를 먼저 진행하시기 바랍니다.
        							this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        							return false;
        						}
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        					return false;
        				}
        			}
        			else if (processState == Constants.Wait)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") > -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						if (stepList.indexOf(Constants.Run+",") == -1)
        						{
        							return true;
        						}
        						else
        						{
        							var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        							state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        							//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        							// 작업완료 처리가 진행되지 않았습니다. 작업 완료 처리를 먼저 진행하시기 바랍니다.
        							this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        							return false;
        						}
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.Run)
        			{
        				if (stepList.indexOf(Constants.Wait+",") > -1)
        				{
        					if (stepList.indexOf(Constants.Run+",") == -1)
        					{
        						return true;
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        						// 작업완료 처리가 진행되지 않았습니다. 작업 완료 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				if (stepList.indexOf(Constants.Run+",") > -1)
        				{
        					return true;
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		default:
        			return false;
        	}
        };

        this.fn_GetProcessStateByProcessType = function (processType, processState, stepType)
        {
        	switch (processType)
        	{
        		case ProcessType.LotAccept:
        			return "WaitForReceive";
        		case ProcessType.StartWork:
        			return "Wait";
        		case ProcessType.WorkCompletion:
        			return "Run";
        		case ProcessType.TransitRegist:
        			return "WaitForSend";
        		default:
        			return "";
        	}
        }

        this.fn_StayReasonCode_CallBack = function ()
        {
        	this.ds_plantParam.clearData();
        	this.ds_plantParam.addRow();
        	this.ds_plantParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId() );
        	this.ds_plantParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_plantParam.setColumn(0, "VERSION", "10001");

        	var sSvcID = "getPlantIsWipSurvey";
        	var sController = "/pcm01700/getPlantIsWipSurvey.do";
        	var sInDatasets = "INPUT=ds_plantParam";
        	var sOutDatasets = "ds_isWipSurveyResult=output";
        	var sArgs = "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_checkRCLot = function(ds_lotInfo)
        {
        	var isPrintLotCard   = this.nfn_nvl(ds_lotInfo.getColumn(0, "ISPRINTLOTCARD"), "");
        	var isPrintRcLotCard = this.nfn_nvl(ds_lotInfo.getColumn(0, "ISPRINTRCLOTCARD"), "");

        	if (isPrintLotCard == "N" && isPrintRcLotCard == "Y")
        	{
        		var lotId 			  = this.nfn_nvl(ds_lotInfo.getColumn(0, "LOTID"), "");
        		var productDefId 	  = this.nfn_nvl(ds_lotInfo.getColumn(0, "PRODUCTDEFID"), "");
        		var productDefVersion = this.nfn_nvl(ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"), "");

        		var productRevision = productDefId + productDefVersion;


        		var popupId = "SEARCH_productRevision";
        		var oArg = {};

        		oArg.arg_lotId = lotId;
        		oArg.arg_productRevision = productRevision;

        		// 바코드 출력
        		//this.gfn_openPopup(popupId,"pcm::PCM01700P3.xfdl",oArg,"width=456,height=260");
        		alert("PC에서 변경 Lot Card의 '품목 Barcode' 를 스캔 하십시오.\n변경 Lot Card가 없는 경우 출력/교체 후 재 진행 하시기 바랍니다.");

        		return false;
        	}


        	return true;
        };

        this.fn_productRevision_CallBack = function ()
        {
        	var isHold    = this.ds_lotInfo.getColumn(0, "ISHOLD");
        	var isLocking = this.ds_lotInfo.getColumn(0, "ISLOCKING");

        	if (isHold == "Y")
        	{
        		// 보류 상태의 Lot 입니다.
        		this.gfn_Message("LotIsHold", this.edt_lotId.value, "warning", "ok");

        		this.fn_clearDetailInfo();

        		this.edt_lotId.set_value("");
        		this.edt_lotId.setFocus();

        		return;
        	}

        	if (isLocking == "Y")
        	{
        		// Locking 상태의 Lot 입니다.
        		this.gfn_Message("LotIsLocking", this.edt_lotId.value, "warning", "ok");

        		this.fn_clearDetailInfo();

        		this.edt_lotId.set_value("");
        		this.edt_lotId.setFocus();

        		return;
        	}

        	var productDefVersion = this.ds_lotInfo.getColumn(0,"PRODUCTDEFVERSION");
        	var isRcLot = this.ds_lotInfo.getColumn(0,"ISRCLOT");
        	this.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework")
        		this.sta_isRework.set_visible(true);
        	else
        		this.sta_isRework.set_visible(false);
        	if (isRcLot == "Y")
        		this.sta_isRCLot.set_visible(true);
        	else
        		this.sta_isRCLot.set_visible(false);
        	/*
        	this.g_LotId       = this.edt_lotId.value;
        	this.g_PanelperQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        	this.g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        	this.g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));
        	this.div_work.form.div_pfsInfo.form.setControlsInfo(this.g_areaId, this.g_LotId, this.ds_lotInfo, this.queryVersion);
        	*/
        //	this.div_work.form.tab.tpgMessage.form.fn_search();
        };

        /// <summary>
        /// 데이터를 저장 할 때 컨텐츠 영역의 유효성을 검사한다.
        /// </summary>
        this.fn_onValidateContent = function()
        {
        	if (this.ds_transitArea.rowcount == 0)
        	{
        		//저장할 데이터가 존재하지 않습니다.
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return true;
        	}


        	//if(this.gfn_isNull(this.cbo_transitArea.value))
        	if(this.gfn_isNull(this.edt_resource_id.value))
        	{
        		//대상 작업장이 선택되지 않았습니다.
        		this.gfn_Message("NoSelectTargetArea", null, "warning", "ok");
        		return true;
        	}

        	return false;
        };

        this.fn_validateData = function()
        {
        /*
        	for(var i = 0; i < this.ds_defect.rowcount; i++)
        	{
        		var defectCode = this.nfn_nvl(this.ds_defect.getColumn(i, "DEFECTCODE"), "");
        		var defectName = this.nfn_nvl(this.ds_defect.getColumn(i, "DEFECTCODENAME"), "");
        		var pnlQty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getColumn(i, "PNLQTY"), "0"));
        		var qty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getColumn(i, "QTY"), "0"));
        		if (pnlQty <= 0 || qty <= 0)
        		{
        			// 불량수량을 입력해야 합니다.
        			this.gfn_Message("DefectQtyRequired", null, "warning", "ok");
        			return false;
        		}
        	}
        */

        	 //필수 자재 체크
        	if(!this.fn_CheckConusumable())
        	{
        		this.gfn_Message("CheckRequireConsum", "", "info", "ok");
        		return false;
        	}
        	if (!this.fn_CheckDurable())
        	{
        		this.gfn_Message("CheckRequireDurable", "", "info", "ok");
        		return false;
        	}

        	// 치공구 중복 여부 체크
        	if (this.ds_lotInfo.getColumn(0,"ISBEFOREROLLCUTTING")=="Y" && this.ds_equipment.getCaseCount("CHK=='1'") > 1)
        	{
        		// Roll Lot 인 경우 Roll Cutting 공정보다 이전 공정은 설비를 한 대만 선택해야 합니다.
        		this.gfn_Message("SelectOneEquipmentBeforeRollCutting", "", "info", "ok");
        		return false;
        	}
        	if (this.ds_BORDurable.rowcount > 0 && this.ds_equipment.getCaseCount("CHK=='1'") > 0)
        	{
        		var equipmentCount = this.ds_equipment.getCaseCount("CHK=='1'");
        		var durableLotCount = this.ds_durable.getCaseCount("EQUIPMENTID!=''");

        		if (equipmentCount != durableLotCount)
        		{
        			// 선택한 설비 대수와 치공구 개수가 일치하지 않습니다.
        			this.gfn_Message("EquipmentCountNotEqualDurableCount", "", "info", "ok");
        			return false;
        		}
        	}

        	for(var i=0; i<this.ds_durable.rowcount; i++){
        		if(this.ds_durable.findRowExpr("DURABLEDEFID=='"+this.ds_durable.getColumn(i,"DURABLEDEFID")+"' && DURABLEDEFVERSION=='"+this.ds_durable.getColumn(i,"DURABLEDEFVERSION")+"' && EQUIPMENTID=='"+this.ds_durable.getColumn(i,"EQUIPMENTID")+"'",i+1)>=0){
        			// 동일 설비에 중복으로 사용되는 치공구가 존재합니다. 치공구 ID : {0}, 치공구 버전 : {1}, 설비 ID : {2}
        			this.gfn_Message("ExistsDuplicateDurable", [this.ds_durable.getColumn(i,"DURABLEDEFID"),this.ds_durable.getColumn(i,"DURABLEDEFVERSION"),this.ds_durable.getColumn(i,"EQUIPMENTID")], "info", "ok");
        			return false;
        		}
        	}
        	return true;
        };

        this.fn_RESOURCE_CallBack = function ()
        {
        	//this.button.isBusy = true;

        	//buttons.ForEach(button => button.IsBusy = true);
        	//pnlContent.ShowWaitArea();

        	// 재작업 여부 확인
        	var lotId = this.edt_lotId.value;
        	this.g_areaId = this.edt_area_id.value;
        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramMain.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_paramMain.setColumn(0, "AREAID", this.g_areaId);
        	this.ds_paramMain.setColumn(0, "LOTID", lotId);
        	this.ds_paramMain.setColumn(0, "PROCESSSTATE","WaitForReceive");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", "10001");

        	var sSvcID = "getProcessDefTypeByProcess";
        	var sController = "/pcm01700/getProcessDefTypeByProcess.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_processDefTypeInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_getCodeList_CallBack = function ()
        {

        	var processStateByCurrentStep = this.fn_GetProcessStateByProcessType(this.currProcessType);
        	var processState = this.processState;
        	var stepList = this.currStepType+',';

        	var state = "";


        	// 유효하지 않은 Process Type 인지 체크
        	if (this.gfn_isNull(processStateByCurrentStep))
        		return false;

        	// 현재 Process State가 Step Type에 있는지 체크
        	if (stepList.length < 1 || stepList.indexOf(processStateByCurrentStep+",") == -1)
        	{
        		// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        		//this.gfn_Message("InvalidProcessStateInStepType", [this.currStepType, processState], "info", "ok");
        		this.fn_getStepName(this.currStepType, processState);
        		return false;
        	}

        	return true;
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

        this.fn_setControlsInfo2 = function ()
         {
         	this.ds_search.clearData();
         	this.ds_search.addRow();
         	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); //??? ==> 세션
         	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
         	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value );
         	this.ds_search.setColumn(0, "PROCESSSEGMENTID", this.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTID"));
         	this.ds_search.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTVERSION"));
         	this.ds_search.setColumn(0, "RESOURCETYPE", "Resource");
         	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());


         	switch (this.currProcessType)
         	{
         		case ProcessType.LotAccept:
        			this.fn_setControlsInfo3();
         			break;
         		case ProcessType.StartWork:
        			this.fn_setControlsInfo3();
         			break;
         		case ProcessType.WorkCompletion:
         			var processSegmentType = this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTTYPE");
         			var isWeekMng = this.ds_lotInfo.getColumn(0, "ISWEEKMNG");
         			var stepType = this.ds_lotInfo.getColumn(0, "STEPTYPE")+",";
        			/*
         			if (isWeekMng == "Y") {
         				this.sta_printWeek.set_visible(true);
        				this.sta_printWeek.set_enable(true);
         				this.edt_printWeek.set_visible(true);
        				this.edt_printWeek.set_enable(true);
         			}
         			else
         			{
         				this.sta_printWeek.set_visible(false);
        				this.sta_printWeek.set_enable(false);
         				this.edt_printWeek.set_visible(false);
        				this.edt_printWeek.set_enable(false);
         			}
         			*/
         			// TODO : Resource
         			// 인계 작업장
         			if ((this.currStepType+",").indexOf("WaitForSend"+",") == -1)
         			{

         				this.sta_transitArea.set_visible(true);
        				this.sta_transitArea.set_enable(true);
         				this.cbo_transitArea.set_visible(true);
        				this.cbo_transitArea.set_enable(true);


        				this.fn_getLotProductTypePathType();


         			}
         			else
         			{
         				this.sta_transitArea.set_visible(false);
        				this.sta_transitArea.set_enable(false);
         				this.cbo_transitArea.set_visible(false);
        				this.cbo_transitArea.set_enable(false);
         				this.cbo_transitArea.set_innerdataset(null);

        				this.fn_setControlsInfo3();
         			}


         			break;
         		case ProcessType.TransitRegist:

        			this.fn_getLotProductTypePathType();

         			break;
         	} //switch end


         };

         this.fn_setControlsInfo3 = function ()
         {
         	var defectUnit = this.ds_lotInfo.getColumn(0, "DEFECTUNIT");

         	if (this.gfn_isNull(defectUnit))
         	{
         		var materialClass = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "MATERIALCLASS"), "");

        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("PNL") ; //  콤보리스트에서 PNL 선택
        		this.ds_work.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         //			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0)
        			{
         	//			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("EA");
        				this.ds_work.setColumn(0, "UNIT", "EA");
        			}

         //			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         	}
         	else
         	{
        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value(defectUnit);
        		this.ds_work.setColumn(0, "UNIT", defectUnit);
        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(false);
         	}
        //	this.cbo_unitOfMaterial_onitemchanged();
        // 	var unitOfMaterial = this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.value;

        // 	this.div_work.form.div_pfsInfo.form.spn_numGoodQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"))); //
        // 	this.div_work.form.div_pfsInfo.form.spn_numGoodPnlQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0")));

        	this.ds_work.setColumn(0, "GOODQTY"   , nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0")));
        	this.ds_work.setColumn(0, "GOODPNLQTY", nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0")));

        	// 메인 창 콜백
        	this.fn_setControlsInfo_CallBack();
         };

        this.fn_setControlsInfo_CallBack = function ()
        {

        	var productDefVersion =this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION");
        	var isRcLot = this.ds_lotInfo.getColumn(0, "ISRCLOT");

        	this.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework")
        	{
        		this.sta_isRework.set_visible(true);
        		this.sta_isRework.set_enable(true);
        	}
        	else
        	{
        		this.sta_isRework.set_visible(false);
        		this.sta_isRework.set_enable(false);
        	}
        	if (isRcLot == "Y")
        	{
        		this.sta_isRCLot.set_visible(true);
        		this.sta_isRCLot.set_enable(true);
        	}
        	else
        	{
        		this.sta_isRCLot.set_visible(false);
        		this.sta_isRCLot.set_enable(false);
        	}

        //	this.fn_setUnitOfMaterialControlEnable();

        	//this.pfsDetail_tabSearch();
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
        	if(e.keycode == 13){
        		this.fn_search();
        	}
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

        this.btn_resource_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        	var left = 145;
        	var top = obj.top;
        	//this.pdv_resource.set_height(33 * (1 + nexacro.toNumber(this.ds_transitArea.rowcount)));
        	this.pdv_resource.trackPopup(left, top, this.pdv_resource.width, this.pdv_resource.height, "fn_Callback_pdv");
        	this.pdv_resource.show();
        };

        this.pdv_resource_grd_resource_oncellclick = function(obj,e)
        {
        	this.edt_resource.set_value(this.ds_transitArea.getColumn(e.row,"RESOURCENAME"));
        	this.edt_resource_id.set_value(this.ds_transitArea.getColumn(e.row,"RESOURCEID"));
        	this.pdv_resource.closePopup();
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
            this.pdv_resource.form.grd_resource.addEventHandler("oncellclick",this.pdv_resource_grd_resource_oncellclick,this);
            this.edt_resource.addEventHandler("onkeydown",this.edt_area_onkeydown,this);
            this.btn_resource.addEventHandler("onclick",this.btn_resource_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PDA01100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
