(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09600M");
            this.set_titletext("출하 합/불 판정(작업완료)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd_t01_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"분할LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL2\" type=\"STRING\" size=\"256\"/><Column id=\"PCS2\" type=\"STRING\" size=\"256\"/><Column id=\"PNL3\" type=\"STRING\" size=\"256\"/><Column id=\"PCS3\" type=\"STRING\" size=\"256\"/><Column id=\"불량률\" type=\"STRING\" size=\"256\"/><Column id=\"PCS4\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t02_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"주차\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t03", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"고객Rev\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"사양담당자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"사양변경\" type=\"STRING\" size=\"256\"/><Column id=\"변경점\" type=\"STRING\" size=\"256\"/><Column id=\"사양변경내용\" type=\"STRING\" size=\"256\"/><Column id=\"특이사항\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t04_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t05_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"분할LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"모Lot\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"분할수량\" type=\"STRING\" size=\"256\"/><Column id=\"검사자명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"SO번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"이전공정명\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"납기일\" type=\"STRING\" size=\"256\"/><Column id=\"주차\" type=\"STRING\" size=\"256\"/><Column id=\"수량PCS\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"내부Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목유형구분\" type=\"STRING\" size=\"256\"/><Column id=\"작업장ID\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"후공정\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"투입일자\" type=\"STRING\" size=\"256\"/><Column id=\"Locking여부\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LotNo\">210202F001-1-FG00-001-001</Col><Col id=\"공정수순\">820</Col><Col id=\"SO번호\">40017468</Col><Col id=\"작업장\">출하검사 1F</Col><Col id=\"수량PNL\">30</Col><Col id=\"이전공정명\">최종검사</Col><Col id=\"품목코드\">1060776A4</Col><Col id=\"납기일\">2019-12-15</Col><Col id=\"수량PCS\">9,880</Col><Col id=\"공정명\">출하검사</Col><Col id=\"내부Rev\">FA1</Col><Col id=\"품목유형구분\">제품</Col><Col id=\"작업장ID\">F101001</Col><Col id=\"MM\">5.11</Col><Col id=\"후공정\">포장</Col><Col id=\"생산구분\">양산</Col><Col id=\"고객명\">MOON</Col><Col id=\"PCSPNL\">336.00</Col><Col id=\"SiteID\">IFC</Col><Col id=\"투입일자\">2019-12-11</Col><Col id=\"Locking여부\">N</Col><Col id=\"단위\">PCS</Col><Col id=\"ISRCLOT\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t01_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드명\" type=\"STRING\" size=\"256\"/><Column id=\"품질공정명\" type=\"STRING\" size=\"256\"/><Column id=\"불량수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량률\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t05_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"자원ID\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드명\" type=\"STRING\" size=\"256\"/><Column id=\"품질공정명\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"불량률\" type=\"STRING\" size=\"256\"/><Column id=\"원인품목\" type=\"STRING\" size=\"256\"/><Column id=\"원인LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"원인공정\" type=\"STRING\" size=\"256\"/><Column id=\"원인작업장\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t02_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t04_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t04_3", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitArea", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_work", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GOODQTY\">0</Col><Col id=\"GOODPNLQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"DEFECTPNLQTY\">0</Col><Col id=\"COMMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_print:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","200","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("출하 합/불 판정(작업완료)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","332",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("분할 LOT 합불/판정");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1_01_01",null,"34","250","34","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("이미지 추가");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","68",null,null,"706","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t01_1");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"분할 Lot No.\"/><Cell col=\"3\" rowspan=\"2\" text=\"차수\"/><Cell col=\"4\" colspan=\"2\" text=\"전체\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" colspan=\"2\" text=\"양품 수량\" cssclass=\"cell_headMaster\"/><Cell col=\"8\" colspan=\"3\" text=\"불량수량\" cssclass=\"cell_headMaster\"/><Cell col=\"11\" text=\"검사 수량\" cssclass=\"cell_headMaster\"/><Cell col=\"12\" rowspan=\"2\" text=\"판정결과\"/><Cell row=\"1\" col=\"4\" text=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\"/><Cell row=\"1\" col=\"6\" text=\"PNL\"/><Cell row=\"1\" col=\"7\" text=\"PCS\"/><Cell row=\"1\" col=\"8\" text=\"PNL\"/><Cell row=\"1\" col=\"9\" text=\"PCS\"/><Cell row=\"1\" col=\"10\" text=\"불량률\"/><Cell row=\"1\" col=\"11\" text=\"PCS\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:분할LotNo\"/><Cell col=\"3\" text=\"bind:차수\"/><Cell col=\"4\" text=\"bind:PNL\"/><Cell col=\"5\" text=\"bind:PCS\"/><Cell col=\"6\" text=\"bind:PNL2\"/><Cell col=\"7\" text=\"bind:PCS2\"/><Cell col=\"8\" text=\"bind:PNL3\"/><Cell col=\"9\" text=\"bind:PCS3\"/><Cell col=\"10\" text=\"bind:불량률\"/><Cell col=\"11\" text=\"bind:PCS4\"/><Cell col=\"12\" text=\"bind:판정결과\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" expandshow=\"show\" expandsize=\"24\" expandchar=\"%\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_01_00","grd_00:10","34","62","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("불량정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_00",null,"68","250",null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_02","10","66.88%",null,null,"10","10",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("img_01","10","35.06%",null,null,"10","img_02:5",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("img_00","10","10",null,null,"10","img_01:5",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("title1_01","0","34","127","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("분할 LOT 합불/판정");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","9","48","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("판정기준");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label00:5","9","150","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"40","26","24","260",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"40","26","24","286",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_01",null,"68","436",null,"260","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd_t01_2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량코드명\"/><Cell col=\"2\" text=\"품질공정명\"/><Cell col=\"3\" text=\"불량수량\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"불량률\"/><Cell col=\"5\" text=\"판정결과\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:불량코드명\"/><Cell col=\"2\" text=\"bind:품질공정명\"/><Cell col=\"3\" text=\"bind:불량수량\"/><Cell col=\"4\" text=\"bind:불량률\"/><Cell col=\"5\" text=\"bind:판정결과\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"5\"/><Cell col=\"4\" text=\"1.60\" expandshow=\"show\" expandchar=\"%\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button21_02",null,"9","70","20","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("임시저장");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"40","86","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","title1_01_00:5","43","57","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("NG횟수");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","label00_00:5","43",null,"20","496",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("13");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_00","msk_00:0","43","75","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("최종검사자");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00_00","label00_00_00:5","43",null,"20","317",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("15");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01","grd_00:10","9","45","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("분할 Lot");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00","label00_01:5","9","230","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("17");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("주차 정보");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","0","10","402",null,null,"0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t02_1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"주차\"/><Cell col=\"3\" colspan=\"2\" text=\"수량\" cssclass=\"cell_headMaster,cell_end\"/><Cell row=\"1\" col=\"3\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"4\" text=\"수량\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:공정명\"/><Cell col=\"2\" text=\"bind:주차\"/><Cell col=\"3\" text=\"bind:수량PNL\"/><Cell col=\"4\" text=\"bind:수량\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01","412","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd_t02_2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"5\" colspan=\"2\" text=\"수량\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"5\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"6\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:품목코드\"/><Cell col=\"2\" text=\"bind:Rev\"/><Cell col=\"3\" text=\"bind:품목명\"/><Cell col=\"4\" text=\"bind:LotNo\"/><Cell col=\"5\" text=\"bind:수량PNL\"/><Cell col=\"6\" text=\"bind:수량\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_00);
            obj.set_text("변경 이력");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t03");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"고객 Rev\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"사양 담당자\"/><Cell col=\"7\" text=\"생성일\"/><Cell col=\"8\" text=\"사양변경\"/><Cell col=\"9\" text=\"변경점\"/><Cell col=\"10\" text=\"사양변경내용\"/><Cell col=\"11\" text=\"특이사항\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:품목코드\"/><Cell col=\"3\" text=\"bind:고객Rev\"/><Cell col=\"4\" text=\"bind:Rev\"/><Cell col=\"5\" text=\"bind:품목명\"/><Cell col=\"6\" text=\"bind:사양담당자\"/><Cell col=\"7\" text=\"bind:생성일\"/><Cell col=\"8\" text=\"bind:사양변경\"/><Cell col=\"9\" text=\"bind:변경점\"/><Cell col=\"10\" text=\"bind:사양변경내용\"/><Cell col=\"11\" text=\"bind:특이사항\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab_00);
            obj.set_text("전달사항");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34","262",null,null,"0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t04_1");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:LotNo\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Div("Div01","830","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_border("1px solid #b3b3b3,1px solid #e8e8e8,0px none");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","21.13%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form.Div01.form);
            obj.set_taborder("1");
            obj.set_value("샘플");
            obj.set_readonly("true");
            obj.set_text("샘플");
            this.div_work.form.tab_00.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailBg");
            this.div_work.form.tab_00.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","21.13%",null,null,"0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_00","Static30_00:5","36",null,null,"5","5",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form.Div01.form);
            obj.set_taborder("4");
            this.div_work.form.tab_00.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Static("title1_01_00","830","0","92","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_text("전달사항 입력");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button21_02",null,"9","34","20","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("등록");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_01","272","34","262",null,null,"0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t04_2");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:공정명\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_02","544","34","276",null,null,"0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t04_3");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"생성자명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:생성자명\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work.form.tab_00);
            obj.set_text("불량(폐기)처리");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_01","412","68",null,null,"360","0",null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_grd_t05_2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"자원 ID\"/><Cell col=\"2\" rowspan=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" rowspan=\"2\" text=\"품질공정 명\"/><Cell col=\"4\" colspan=\"2\" text=\"불량수량\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률\"/><Cell col=\"7\" rowspan=\"2\" text=\"원인 품목\"/><Cell col=\"8\" rowspan=\"2\" text=\"원인 LOTID\"/><Cell col=\"9\" rowspan=\"2\" text=\"원인 공정\"/><Cell col=\"10\" rowspan=\"2\" text=\"원인 작업장\"/><Cell row=\"1\" col=\"4\" text=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:자원ID\"/><Cell col=\"2\" text=\"bind:불량코드명\"/><Cell col=\"3\" text=\"bind:품질공정명\"/><Cell col=\"4\" text=\"bind:PCS\"/><Cell col=\"5\" text=\"bind:PNL\"/><Cell col=\"6\" text=\"bind:불량률\"/><Cell col=\"7\" text=\"bind:원인품목\"/><Cell col=\"8\" text=\"bind:원인LOTID\"/><Cell col=\"9\" text=\"bind:원인공정\"/><Cell col=\"10\" text=\"bind:원인작업장\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("title1_01_01","grd_01:10","34","79","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("9");
            obj.set_text("이미지 추가");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","10","402",null,null,"0",null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd_t05_1");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"자원 ID\" cssclass=\"cell_headMaster\"/><Cell col=\"2\" rowspan=\"2\" text=\"차수\"/><Cell col=\"3\" colspan=\"2\" text=\"전체\" cssclass=\"cell_headMaster,cell_end\"/><Cell row=\"1\" col=\"1\" text=\"분할 Lot No.\"/><Cell row=\"1\" col=\"3\" text=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:분할LotNo\"/><Cell col=\"2\" text=\"bind:차수\"/><Cell col=\"3\" text=\"bind:PNL\"/><Cell col=\"4\" text=\"bind:PCS\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("label00_01","412","9","69","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_text("분할 Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("edt_00","label00_01:5","9","230","20",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("2");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Static("title1_01_00","412","34","62","34","784",null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("3");
            obj.set_text("불량정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"40","26","24","386",null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"40","26","24","360",null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"40","86","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button21_02",null,"9","70","20","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("임시저장");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Div("div_00",null,"68","350",null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("10");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new ImageViewer("img_01","50.86%","10",null,null,"10","10",null,null,null,null,this.div_work.form.tab_00.Tabpage5.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage5.form.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("img_00","10","10",null,null,"img_01:5","10",null,null,null,null,this.div_work.form.tab_00.Tabpage5.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage5.form.div_00.addChild(obj.name, obj);

            obj = new Div("Div00","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","0","10","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_wordWrap("english");
            this.div_work.form.Div00.addChild(obj.name, obj);

            obj = new Static("label01","33.52%","10","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_wordWrap("english");
            this.div_work.form.Div00.addChild(obj.name, obj);

            obj = new Static("label02","67.04%","10","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_wordWrap("english");
            this.div_work.form.Div00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label02:5","10","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div00.form);
            obj.set_taborder("3");
            this.div_work.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","0","241",null,"57","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label06","75%","5","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("검사자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03","25%","5","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("양품 수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_05","label06:24","5",null,"20","252",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_00","50%","5","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("불량 수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01","label03_00:5","5",null,"20","label06:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"5","22","20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","label06:5","5",null,"20","btn_search00:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_00_00","50.00%","30","9.32%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("title1_01","0","298","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("출하검사 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lotInfo","0","52",null,"180","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds_lotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"Site ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PLANTID\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"공정수순\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"Rev\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"투입일자\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:INPUTDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"S/O번호\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONORDERID \"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"납기일\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"DUEDATE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:DUEDATE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"품목유형구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"Locking 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISLOCKING\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISLOCKING\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"작업장\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"AREANAME\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:AREANAME\" displaytype=\"normal\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"주차\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"WEEK\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:WEEK\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"작업장 ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"AREAID\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:AREAID\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"고객명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"단위\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:UNIT\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"수량(PNL)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PNLQTY\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PNLQTY\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PCS)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCSQTY\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PCSQTY\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"MM\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"MM\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:MM\"/><Cell row=\"4\" col=\"6\" cssclass=\"cell_head\" text=\"MM\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCS/PNL\"/><Cell row=\"4\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PCS/PNL\"/><Cell row=\"4\" col=\"8\" cssclass=\"cell_head\" text=\"PCS/PNL\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCS/PNL\"/><Cell row=\"4\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PANELPERQTY\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","74","68",null,"20","1134",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area","130","68",null,"20","929",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"68","22","20","907",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","500","68","15.82%","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("label00","115","296","3.50%","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_uom","169","296","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_uom");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("PNL");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","436","295",null,"20","630",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_value("6663");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","750","318","197","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_transitArea");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_tooltiptext("TRANSITAREA");
            obj.set_readonly("false");
            obj.set_visible("true");
            obj.set_text("cmb_00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_area_id","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_area","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.divSearch.form.edt_area_id","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_lotId","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.Div00.form.label01.addEventHandler("onclick",this.div_work_Div00_label01_onclick,this);
            this.div_work.form.grd_lotInfo.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_productInfo_onexpandup,this);
            this.div_work.form.grd_lotInfo.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productInfo_oncloseup,this);
            this.edt_area.addEventHandler("onkeydown",this.div_work_divSearch_edt_area_onkeydown,this);
            this.edt_area.addEventHandler("onchanged",this.div_work_divSearch_edt_area_onchanged,this);
            this.btn_area.addEventHandler("onclick",this.div_work_divSearch_btn_area_onclick,this);
            this.edt_lotId.addEventHandler("onkeydown",this.div_work_divSearch_edt_lotId_onkeydown,this);
        };
        this.loadIncludeScript("PCM09600M____.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
