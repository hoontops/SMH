(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample05");
            this.set_titletext("Tracnsaction(paging)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Log", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOG_ID\" type=\"INT\" size=\"256\"/><Column id=\"LOG_KND_CD\" type=\"STRING\" size=\"30\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_CD\" type=\"STRING\" size=\"2\"/><Column id=\"REQ_URI\" type=\"STRING\" size=\"300\"/><Column id=\"PGM_NM\" type=\"STRING\" size=\"300\"/><Column id=\"REQ_FULL_URL\" type=\"STRING\" size=\"300\"/><Column id=\"BEFORE_URL\" type=\"STRING\" size=\"300\"/><Column id=\"CNCT_IP\" type=\"STRING\" size=\"50\"/><Column id=\"CN\" type=\"STRING\" size=\"4000\"/><Column id=\"RM\" type=\"STRING\" size=\"4000\"/><Column id=\"WK_EXC_TIMEMS\" type=\"INT\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"INT\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"INT\" size=\"256\"/><Column id=\"LAST_UPDATED_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_LOGIN\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_log_knd", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CM_CD\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_logCount", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOG_KND_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CN\" type=\"STRING\" size=\"256\"/><Column id=\"P_START\" type=\"STRING\" size=\"256\"/><Column id=\"P_END\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new MaskEdit("mEdit_totCnt",null,"86","81","21","131",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.getSetter("mask").set("#,###");
            obj.set_background("transparent");
            obj.set_border("1px none rgba(204,204,204,1)");
            obj.set_textAlign("right");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_count",null,"87","31","21","171",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("(??????");
            obj.set_color("rgba(102,102,102,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static25",null,"87","19","21","122",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("???)");
            obj.set_color("rgba(102,102,102,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_logList","0","113",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            obj.set_binddataset("ds_Log");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_readonly("true");
            obj.set_nodatatext("?????? ????????? ????????????.");
            obj.set_selecttype("row");
            obj.set_selectchangetype("down");
            obj.set_scrollpixel("none");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"111\"/><Column size=\"164\"/><Column size=\"89\"/><Column size=\"201\"/><Column size=\"111\"/><Column size=\"94\"/><Column size=\"111\"/><Column size=\"72\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" text=\"??????\"/><Cell col=\"1\" text=\"????????????\"/><Cell col=\"2\" text=\"????????????\"/><Cell col=\"3\" text=\"???????????????\"/><Cell col=\"4\" text=\"??????URI\"/><Cell col=\"5\" text=\"??????IP\"/><Cell col=\"6\" text=\"????????????(Sec)\"/><Cell col=\"7\" text=\"?????? ??????\"/><Cell col=\"8\" text=\"?????????\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"normal\" text=\"bind:RNUM\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"normal\" text=\"bind:LOG_KND_NM\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\" padding=\"0px 0px 0px 10px\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" text=\"bind:CREATION_DATE\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:JOB_NM\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:REQ_URI\" editautoselect=\"true\"/><Cell col=\"5\" edittype=\"normal\" text=\"bind:LGN_IP\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"6\" edittype=\"normal\" text=\"expr:(WK_EXEC_TIMEMS)/1000\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"7\" text=\"bind:CN\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"normal\" text=\"bind:CREATED_BY\" editautoselect=\"true\" textAlign=\"center\" verticalAlign=\"middle\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" textAlign=\"left\" verticalAlign=\"middle\"><Cell colspan=\"4\" expr=\"expr:&apos; Total : &apos;+comp.parent.ds_Log. getRowCount()\" textAlign=\"left\" verticalAlign=\"middle\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","35%",null,"494","20",null,"10",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_url("common::com_paging.xfdl");
            obj.set_async("false");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"87","110","21","10",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("??????????????????");
            obj.set_cssclass("btn_File_Down");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","304",null,"313","10",null,"0",null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","304",null,"313","10",null,"30",null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","304",null,"313","20",null,"10",null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("?????????????????????");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","10","576","0",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"74","10",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","66","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","209","10","66","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("????????????");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","236","41","98","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("?????????");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","41","99","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("???????????? ?????????");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static14","1","32","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1","1","20","72",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","1","1","131","10",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","1","63","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","75","1","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","115","33","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_logKnd","85","11","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_log_knd");
            obj.set_codecolumn("CM_CD");
            obj.set_datacolumn("CD_NM");
            obj.set_displayrowcount("-1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","190","1","20","41",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","217","32","20","41",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_count","125","42","92","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var cmb_count_innerdataset = new nexacro.NormalDataset("cmb_count_innerdataset", obj);
            cmb_count_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row></Rows>");
            obj.set_innerdataset(cmb_count_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","265","1","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","278","32","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_logStrt","275","11","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_value("20141201");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_logEnd","397","11","105","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_value("20141207");
            obj.set_dateformat("yyyy.MM.dd");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","380","10","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_logCnTxt2","383","11","11","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("~");
            obj.set_color("rgba(102,102,102,1)");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","392","10","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","791","1",null,"10","11",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11",null,"1","20","41","94",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","791","32",null,"10","11",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09",null,"1","25","53","11",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("25");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"11","58","21","36",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("??????");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_logCn","288","42",null,"21","239",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maxlength("20");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","74","168","15",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static81",null,"74","169","13","10",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static23",null,"108","171","5","10",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cbo_logKnd","value","ds_param","LOG_KND_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cal_logStrt","value","ds_param","PRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_logEnd","value","ds_param","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_logCn","value","ds_param","CN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Sample05.xfdl","lib::comLib.xjs");
        this.registerScript("Sample05.xfdl", function() {
        /***************************************************************************************
         * ???????????? 	: IFC MES?????????
         * ????????? 		: ????????????
         * ????????? 		: CMLM01100M.xfdl
         * ????????? 		: ?????????
         * ????????? 		: 2017.03.16
         *
         * ???  ???		: ???????????? ?????? ??? ????????????
         *---------------------------------------------------------------------------------------
         * ?????????		?????????		????????????
         *---------------------------------------------------------------------------------------
         * 2017.03.16	?????????   	????????????
         * 2017.04.23	?????????   	????????? ?????? ??????
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. ?????? include(??????)
         ***************************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        /**************************************************************************
         * 2. FORM ?????? ?????? ??????
         ***************************************************************************/
        this.div_page.set_visible(true);
        var year,month,day,result,toDate,preDate,dt,preDateResult,toDateResult;

        /* Paging ?????? ?????? */
        this.LIST_COUNT = this.cmb_count.value; //this.LIST_COUNT = 10; // [?????????] ??????????????? ????????? ?????? ??????
        this.PAGE_COUNT = 10; //[?????????] ????????? ?????? ??????
        this.page;
        /**************************************************************************
         * 3. FORM ??????
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.fn_paging_onload(obj);

        	this.ds_param.addRow(0);


        	this.gfn_GetCmCdCombo("kndSearch", this.ds_log_knd, this.cbo_logKnd, "CMD_LOG_KND", "", "ALL");
        	preDateResult = this.fn_dateUtil("preDate"); //???????????? ??????
        	toDateResult = this.fn_dateUtil(); //?????? ??????
        	if (this.validCheck(preDateResult, toDateResult))
        	{
        		this.fn_calendarSet(preDateResult, toDateResult);
        	}
        };

        this.fn_paging_onload = function (obj)
        {
        	this.page = Eco.XComp.getUserProperty(obj, "pageNum"); //????????? ?????? ????????? ????????? ??? ???????????? ???????????? ??????,
        	if (Eco.isEmpty(this.page))
        	{
        		this.page = 1;
        	}
        	// ?????? null ?????? 1?????????
        	this.div_page.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this); //????????? ??? ?????????
        	this.div_page.setCurrentPage(this.page); //????????? ??? ?????????
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK ??????
         ***************************************************************************/
        this.fn_Search = function ()
        {
        	var sSvcID = "logSearch";
        	var sController = "/cmlm01100/selectLogList.do";
        	var sInDatasets = "ds_param=ds_param";
        	var sOutDatasets = "ds_Log=ds_Log ds_logCount=ds_logCount";
        	var strCallbackFunc = "fn_callBack";

        	var nFistPage;
        	var nLastPage;
        	if (this.page == 1)
        	{
        		nFistPage = 1;
        		nLastPage = this.page + parseInt(this.cmb_count.value) - 1;
        	}
        	else
        	{
        		nFistPage = (parseInt(this.cmb_count.value) * (this.page - 1)) + 1;
        		nLastPage = Number(nFistPage) + Number(this.cmb_count.value) - 1;
        	}
        	this.ds_param.setColumn("0", "P_START", nFistPage);
        	this.ds_param.setColumn("0", "P_END", nLastPage);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, "", strCallbackFunc);
        };
        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}
        	if (strSvcId == "logSearch")
        	{
        		this.div_page.set_visible(true);
        		this.div_page.setPage(this.ds_logCount.getColumn(0, "COUNT"));
        		this.mEdit_totCnt.set_value(this.ds_logCount.getColumn(0, "COUNT"));
        	}
        };
        /**************************************************************************
         * 7. ?????? ?????? ??????
         **************************************************************************/
        this.fn_searchEtr = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.btn_logSearch_onclick();
        	}
        };

        // param??? value ?????? ?????? ??????(??????/?????????) ??????
        this.fn_dateUtil = function (param)
        {
        	dt = new Date();
        	day = dt.getDate();
        	if (param == "preDate")
        	{
        		preDate = dt - day - 7 * 1000 * 60 * 60 * 24;
        		dt = new Date(preDate);
        		day = dt.getDate();
        	}
        	year = dt.getYear();
        	month = dt.getMonth() + 1;
        	if (Number(month) < 10)
        	{
        		month = "0" + month;
        	}
        	if (Number(day) < 10)
        	{
        		day = "0" + day;
        	}
        	toDate = year.toString() + month.toString() + day.toString();
        	return toDate;
        };
        // validCheck ?????? param00, param01??? ?????? null , ????????? ?????? false ??????
        this.validCheck = function (param00, param01)
        {
        	if (param00 != null && param00 != "" && param01 != null && param01 != "")
        	{
        		return true;
        	}
        	else
        	{
        		return false;
        	}
        };

        // ????????? param00, param01 ??????
        this.fn_calendarSet = function (param00, param01)
        {
        	this.cal_logStrt.set_value(param00); //???????????? ????????? ????????? ??????
        	this.cal_logEnd.set_value(param01); //?????? ????????? ????????? ??????
        };


        this.fn_preDateChanged = function (obj, e)
        {
        	var preDateChanged = this.cal_logStrt.value;
        	var postDateChanged = this.cal_logEnd.value;

        	if (toDateResult < preDateChanged)
        	{
        		this.alert("??????????????? ???????????? ??? ????????????.");
        		this.cal_logStrt.set_value(toDateResult);
        	}
        	else if (preDateChanged > postDateChanged)
        	{
        		this.alert("??????????????? ?????????????????? ??? ??? ????????????.");
        	}
        };

        // ???????????? Valid Check (?????????????????? ?????? ?????? ??????)
        this.fn_postDateChanged = function (obj, e)
        {
        	var postDateChanged = this.cal_logEnd.value;
        	if (postDateChanged < this.cal_logStrt.value)
        	{
        		this.alert("?????????????????? ????????? ??????????????? ????????????.");
        		// this.gfn_Message("IMCMLM0002","","info");
        		this.cal_logEnd.set_value(this.fn_dateUtil());
        	}
        	if (postDateChanged > this.fn_dateUtil())
        	{
        		this.alert("?????? ????????? ?????? ?????? ????????????.");
        		this.cal_logEnd.set_value(this.fn_dateUtil());
        	}
        };

        /**************************************************************************
         * 8. ?????????
         ***************************************************************************/
        /* ????????? ?????? 1????????? ?????? */
        this.fn_setPageInit = function ()
        {
        	this.page = 1;
        	this.div_page.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this);
        };

        /* ????????? ?????? ??? ????????? */
        this.onChangePage = function (page)
        {
        	Eco.XComp.setUserProperty(this, "pageNum", page);
        	this.page = page;
        	this.div_page.setCurrentPage(page);
        	this.fn_Search();
        };

        /* ?????? ?????? ????????? */
        this.cmb_count_onitemchanged = function (obj, e)
        {
        	this.LIST_COUNT = obj.value;

        	// ???????????? ?????? ?????? ?????? ????????? paging ?????? reload ??????
        	this.div_page.fn_reload();

        	// paging?????? ???????????? ??????
        	this.fn_paging_onload(this);

        	this.btn_search.click();
        };

        this.btn_logSearch_onclick = function (obj, e)
        {
        	this.page = 1;
        	this.div_page.setCurrentPage(this.page);
        	this.fn_Search();
        };

        this.btn_exceldn_onclick = function (obj, e)
        {
        	var grdLogCount = this.grd_logList.rowcount;
        	if (grdLogCount == 0)
        	{
        		this.alert("??????????????? ???????????? ????????????");
        	}
        	else
        	{
        		if (this.confirm("???????????? ????????? ????????? ???????????? ???????????????????"))
        		{
        			this.gfn_export_excel("grd_logList", "logList");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static25.addEventHandler("onclick",this.Static25_onclick,this);
            this.Button00.addEventHandler("onclick",this.btn_exceldn_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.cbo_logKnd.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.cmb_count.addEventHandler("onitemchanged",this.cmb_count_onitemchanged,this);
            this.cal_logStrt.addEventHandler("onchanged",this.fn_preDateChanged,this);
            this.cal_logStrt.addEventHandler("oneditclick",this.cal_logStrt_oneditclick,this);
            this.cal_logEnd.addEventHandler("onchanged",this.fn_postDateChanged,this);
            this.btn_search.addEventHandler("onclick",this.btn_logSearch_onclick,this);
            this.edt_logCn.addEventHandler("onkeydown",this.fn_searchEtr,this);
            this.ds_Log.addEventHandler("onvaluechanged",this.ds_Log_onvaluechanged,this);
        };
        this.loadIncludeScript("Sample05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
