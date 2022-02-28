(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01000M");
            this.set_titletext("LOT 재투입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productionOrderList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SALESPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSMM\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPECAPPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSWIP\" type=\"STRING\" size=\"256\"/><Column id=\"UNDERAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STDINPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOTINPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTINPUTQTY\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOTSIZE\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANEL\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ACTUALINPUTLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PUREORDERLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MULTIPLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINNERPUBLIC\" type=\"STRING\" size=\"256\"/><Column id=\"USEBOMCNT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reinputReason", this);
            obj._setContents("<ColumnInfo><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"COCENM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productVersionSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_prodVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lineNoSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotStartNoSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotStartNo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTSTARTNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_newlotList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"JOINTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productionOrder", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SALESPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSMM\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSPECAPPROVE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PUREINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SURPLUSWIP\" type=\"STRING\" size=\"256\"/><Column id=\"UNDERAGE\" type=\"STRING\" size=\"256\"/><Column id=\"STDINPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOTINPUTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTINPUTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TESTLOTYN\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"REASON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reinputReasonSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popSearch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONORDERID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINENO");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productionOrderId","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("투입구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTINPUTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productionOrderId",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_lineNo","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODEID");
            obj.set_datacolumn("COCENM");
            obj.set_innerdataset("ds_lineNo");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_lotInputType","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,LotInputType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefVersion","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_prodVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("title","0","0","65","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("수주 List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_lot","0","74%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("1");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_lot);
            obj.set_text("Lot List");
            this.div_work.form.tab_lot.addChild(obj.name, obj);

            obj = new Static("title","0","0","59","34",null,null,null,null,null,null,this.div_work.form.tab_lot.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_lot.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_lotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_lot.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"단위\"/><Cell col=\"3\" text=\"수량\"/><Cell col=\"4\" text=\"수량(PNL)\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\"/><Cell col=\"1\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:UNIT\" displaytype=\"normal\" combocodecol=\"C.Segment,,Y,N\"/><Cell col=\"3\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:PNLQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_lot.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_lot);
            obj.set_text("재투입 사유");
            this.div_work.form.tab_lot.addChild(obj.name, obj);

            obj = new Static("title","0","0","84","34",null,null,null,null,null,null,this.div_work.form.tab_lot.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("재투입 사유");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_lot.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_reinputReason","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_lot.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_reinputReason");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"재투입 차수\"/><Cell col=\"2\" text=\"재투입 사유\"/><Cell col=\"3\" text=\"생성일\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INPUTSEQUENCE\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CREATEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_lot.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_productList","0","51.14%",null,null,"0","tab_lot:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_productList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"230\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"Roll/Sheet\"/><Cell col=\"5\" text=\"실투입량\" tooltiptext=\"REALINPUTPCS\"/><Cell col=\"6\" text=\"Lot Size\"/><Cell col=\"7\" text=\"판넬\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"접합수\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RTRSHT\"/><Cell col=\"5\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:LOTSIZE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"7\" text=\"bind:PANEL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" edittype=\"mask\" cssclass=\"cell_bg_yellow\"/><Cell col=\"8\" text=\"bind:UNIT\" displaytype=\"normal\" combocodecol=\"C.Segment,,Y,N\"/><Cell col=\"9\" text=\"bind:JOINTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_detail","0",null,null,"66","0","grd_productList:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label05","59.50%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("15");
            obj.set_text("잉여 적용량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label02","0","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("순투입대상량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label07","0","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("Lot Size");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label08","19.94%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("재투입 차수");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label04","39.67%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("수율(%)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label09","39.67%","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("재투입 사유");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label03","19.94%","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("14");
            obj.set_text("실 투입량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("label05_00","79.50%","10","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("16");
            obj.set_text("기준투입(PNL)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_testYn","80.54%","35","105","21",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("Test Lot 여부");
            obj.set_fittocontents("width");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_reason","label09:10","35",null,"20","chk_testYn:10",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("7");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_pureInput","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_realInput","label03:10","10",null,"20","label04:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_yield","label04:10","10",null,"20","label05:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_format("#,##0.#0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_surplusApply","label05:10","10",null,"20","label05_00:4",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_realInputPanel","label05_00:10","10",null,"20","9",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("4");
            obj.set_format("#,##0");
            obj.set_readonly("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_lotSizePanel","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("5");
            obj.set_format("#,##0");
            obj.set_readonly("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_reInputSequence","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("6");
            obj.set_format("#,##0");
            obj.set_readonly("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Grid("grd_productionOrderList","0","34",null,null,"0","div_detail:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_productionOrderList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"105\"/><Column size=\"107\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"S/O번호\"/><Cell col=\"1\" text=\"라인\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"Rev.\"/><Cell col=\"4\" text=\"품목명\"/><Cell col=\"5\" text=\"수주량\"/><Cell col=\"6\" text=\"생산구분\"/><Cell col=\"7\" text=\"합수\" tooltiptext=\"ARRAY\"/><Cell col=\"8\" text=\"납기일자\" tooltiptext=\"DELIVERYDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"9\" text=\"수주일자\" tooltiptext=\"ORDERDATE\"/><Cell col=\"10\" text=\"투입일자\" tooltiptext=\"STARTEDDATE\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTIONORDERID\"/><Cell col=\"1\" text=\"bind:LINENO\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PLANQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"6\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\"/><Cell col=\"7\" text=\"bind:PCSPNL\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"bind:PLANENDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"9\" text=\"bind:SALEORDERDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:STARTTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"84","34",null,"grd_productList:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("품목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_00",null,"247","45","10","751",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip02_01",null,"323","45","34","645",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01000M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01000M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:  LOT 투입
         * 파일명 		: PCM00500M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.03.08
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.08	방성혁   	최초작성
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
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

        	this.nfn_formInit(obj);
        	this.fn_searchClear();


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
            this.fn_searchClear();
        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_search.setColumn(sRow, "PRODUCTIONORDERID", this.tab_search.Tab1.form.edt_productionOrderId.value);
        	this.ds_search.setColumn(sRow, "LINENO", this.tab_search.Tab1.form.cmb_lineNo.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tab1.form.cmb_productDefVersion.value);
            this.ds_search.setColumn(sRow, "LOTINPUTTYPE", this.tab_search.Tab1.form.cmb_lotInputType.value);

        	var sSvcID       = "SEARCH_PRODUCTIONORDERLIST";
        	var sController  = "/pcm01000/selectProductionOrderListForReInput.do";
        	var sInDatasets  = "INPUT=ds_search";
        	var sOutDatasets = "ds_productionOrderList=output";
        	var sArgs        = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
           this.ds_productionOrder.clearData();
           if(this.ds_lotList.getRowCount() == 0)
        	{
        		this.gfn_Message("NoSaveData", null, "error", "ok");
        		return;
        	}

        	var mRow = this.ds_productionOrderList.rowposition;
        	var aRow = this.ds_productionOrder.addRow();

        	this.ds_productionOrder.copyRow(aRow, this.ds_productionOrderList, mRow);

        	this.ds_productionOrder.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_productionOrder.setColumn(aRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_productionOrder.setColumn(aRow, "TESTLOTYN", this.div_work.form.div_detail.form.chk_testYn.value);
        	this.ds_productionOrder.setColumn(aRow, "LOTPNL", this.div_work.form.div_detail.form.msk_lotSizePanel.value);
        	this.ds_productionOrder.setColumn(aRow, "STANDARDINPUT", this.div_work.form.div_detail.form.msk_realInputPanel.value);
        	this.ds_productionOrder.setColumn(aRow, "REASON", this.div_work.form.div_detail.form.edt_reason.value);
        	this.ds_productionOrder.setColumn(aRow, "INPUTSEQUENCE", this.div_work.form.div_detail.form.msk_reInputSequence.value);

        	var sSvcID      = "LOT_REINPUT";
        	var sController = "/pcm01000/saveReInputLot.do";
        	var sInDatasets  = "ds_productionOrder=ds_productionOrder:A ds_lotList=ds_lotList:A ";
        	var sOutDatasets = "";
        	var sArgs = "";

        	// trace(this.ds_lotList.saveXML());
        	// trace(this.ds_productionOrder.saveXML());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
           this.ds_search.clearData();
           this.ds_newlotList.clearData();
           this.ds_productionOrderList.clearData();
           this.ds_lotList.clearData();
           this.ds_productList.clearData();
           this.ds_lineNoSearch.clearData();
           this.ds_lineNo.clearData();
           this.ds_productVersionSearch.clearData();
           this.ds_prodVersion.clearData();
           this.div_work.form.tab_lot.set_tabindex(1);

           this.div_work.form.div_detail.form.chk_testYn.set_value(0);
           this.tab_search.Tab1.form.cmb_plantId.set_value(this.gf_getSiteType());
           this.div_work.form.div_detail.form.edt_reason.set_value("");
           this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
           this.AddAll(this.ds_lineNo,"CODEID","COCENM");

           this.tab_search.Tab1.form.cmb_lineNo.set_index(0);
           this.tab_search.Tab1.form.cmb_productDefVersion.set_index(0);

           this.div_work.form.div_detail.form.msk_pureInput.set_value(0);
           this.div_work.form.div_detail.form.msk_realInput.set_value(0);
           this.div_work.form.div_detail.form.msk_yield.set_value(0);
           this.div_work.form.div_detail.form.msk_surplusApply.set_value(0);
           this.div_work.form.div_detail.form.msk_realInputPanel.set_value(0);
           this.div_work.form.div_detail.form.msk_lotSizePanel.set_value(0);
           this.div_work.form.div_detail.form.msk_reInputSequence.set_value(0);

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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {

        	case "SEARCH_PRODUCTVERSION" :
        	      this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	      this.tab_search.Tab1.form.cmb_productDefVersion.set_index(0);
        		  break;
            case "SEARCH_LINENO":
        		  this.AddAll(this.ds_lineNo,"CODEID","COCENM");
        		  this.tab_search.Tab1.form.cmb_lineNo.set_index(0);

        		  break;
            case "SEARCH_PRODUCTLIST" :
        	      if (this.ds_productList.getRowCount() > 0)
        	      {
        			 this.fn_calProductList();
        	      }
        		  this.fn_reInputReasonList();
        	      break;
        	case "SEARCH_PRODUCTIONORDERLIST" :
        		   if (this.ds_productionOrderList.getRowCount() == 0)
        	      {
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return false;
        	      }
        	      break;
        	 case "LOT_REINPUT" :
        	       this.gfn_Message("ProcessingSuccess", "", "information", "ok");
        		   this.fn_search();

        	default :
        	      break;
        	}

        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return false;

            switch(sPopupId)
        	{
        		case "SEARCH_PRODUCT" :
        			this.tab_search.Tab1.form.edt_productDefId.set_value(rtn[0]);
        			this.fn_productVersionSearch();
        			break;
        		case "SEARCH_PRODUCTIONORDERID" :
        			this.tab_search.Tab1.form.edt_productionOrderId.set_value(rtn[0]);
        			this.tab_search.Tab1.form.edt_productDefId.set_value(rtn[1]);
        			this.fn_getLineNo();
        			this.fn_productVersionSearch();
        	      break;
        		default :
        			break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_productVersionSearch = function()
        {
        	this.ds_productVersionSearch.clearData();
        	this.ds_prodVersion.clearData();

        	var aRow = this.ds_productVersionSearch.addRow();
        	this.ds_productVersionSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_productVersionSearch.setColumn(aRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_productVersionSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQuerySync(this.ds_productVersionSearch, this.ds_prodVersion, "selectProductVersionMulty");

        	this.AddAll(this.ds_prodVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.tab_search.Tab1.form.cmb_productDefVersion.set_index(0);

        };

        this.fn_getLineNo = function()
        {
            this.ds_lineNoSearch.clearData();
        	this.ds_lineNo.clearData();

        	var aRow = this.ds_lineNoSearch.addRow();

        	this.ds_lineNoSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_lineNoSearch.setColumn(aRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_lineNoSearch.setColumn(aRow, "PRODUCTIONORDERID", this.tab_search.Tab1.form.edt_productionOrderId.value);
        	var sSvcID = "SEARCH_LINENO";
        	var sController = "/pcm00300/selectLineNo.do";
        	var sInDatasets = "INPUT=ds_lineNoSearch";
        	var sOutDatasets = "ds_lineNo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_productionDefinitionList = function()
        {
            //var sRow = this.div_work.form.grd_productionOrder.getSelectedDatasetRows();
        	var sRow = this.ds_productionOrderList.rowposition;
            this.ds_productList.set_enableevent(false);
        	this.ds_productList.clearData();
        	this.ds_search.setColumn(0, "PRODUCTIONORDERID", this.ds_productionOrderList.getColumn(sRow, "PRODUCTIONORDERID"));
        	this.ds_search.setColumn(0, "LINENO", this.ds_productionOrderList.getColumn(sRow, "LINENO"));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.ds_productionOrderList.getColumn(sRow, "PRODUCTDEFID"));
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.ds_productionOrderList.getColumn(sRow, "PRODUCTDEFVERSION"));


        	var sSvcID       = "SEARCH_PRODUCTLIST";
        	var sController  = "/pcm01000/selectProductDefinitionListByProductionOrder_YP.do";
        	var sInDatasets  = "INPUT=ds_search";
        	var sOutDatasets = "ds_productList=output";
        	var sArgs        = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);



        	this.ds_productList.set_enableevent(true);
        };
        this.fn_CalcProductionOrderInfo = function(sRow)
        {
             var planQty      = nexacro.toNumber(this.ds_productionOrderList.getColumn(sRow, "PLANQTY"));
        	 var pcsPnl       = nexacro.toNumber(this.ds_productionOrderList.getColumn(sRow, "PCSPNL"));
             var surplusStock = nexacro.toNumber(this.nfn_isNull(this.div_work.form.div_detail.form.msk_surplusApply.value) ? 0 : this.div_work.form.div_detail.form.msk_surplusApply.value);
        	 var RealInputPanel = nexacro.toNumber(this.nfn_isNull(this.div_work.form.div_detail.form.msk_realInputPanel.value) ? 0 : this.div_work.form.div_detail.form.msk_realInputPanel.value);

        	 this.div_work.form.div_detail.form.msk_pureInput.set_value(planQty - surplusStock);
        	 this.div_work.form.div_detail.form.msk_realInput.set_value(RealInputPanel * pcsPnl);

        	 var pureInput =  this.div_work.form.div_detail.form.msk_pureInput.value;
        	 var realInput =  this.div_work.form.div_detail.form.msk_realInput.value;

        	 if (realInput != 0)
        	 {
        	 	 this.div_work.form.div_detail.form.msk_yield.set_value((pureInput / realInput * 100));
        	 }
        	 else
        	 {
        	 	 this.div_work.form.div_detail.form.msk_yield.set_value(0);
        	 }
        };

        this.fn_calProductList = function()
        {
        	 var realInput    = nexacro.toNumber(this.nfn_isNull(this.div_work.form.div_detail.form.msk_realInput.value) ? 0 : this.div_work.form.div_detail.form.msk_realInput.value);
        	 var lotSizePanel =  this.div_work.form.div_detail.form.msk_lotSizePanel.value;
        	 for(var i = 0; i < this.ds_productList.getRowCount(); i++)
        	 {
        		var isinnerpublic = this.ds_productList.getColumn(i, "ISINNERPUBLIC") == "Y" ? 2 : 1 ;
        		this.ds_productList.setColumn(i, "QTY", realInput * this.ds_productList.getColumn(i, "USEBOMCNT") * isinnerpublic );
        		//this.ds_productList.setColumn(i,"QTY", nexacro.round(e.newvalue) * nexacro.round(this.ds_product.getColumn(e.row, "JOINTQTY")))
        		//this.ds_productList.setColumn(i, "PANEL", Math.ceil(this.ds_productList.getColumn(i, "QTY") /this.ds_productList.getColumn(i, "JOINTQTY")));
        		this.ds_productList.setColumn(i, "PANEL", this.div_work.form.div_detail.form.msk_realInputPanel.value);
        		this.ds_productList.setColumn(i, "LOTSIZE", lotSizePanel);
        	 }
        };
        this.fn_getBase36String = function(value)
        {
        	var data = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        	var idx = value % 36 ;

        	return data.substring(idx,1);


        };
        this.fn_reInputReasonList = function()
        {
        	this.ds_reinputReasonSearch.clearData();
        	this.ds_reinputReason.clearData();
        	var aRow = this.ds_reinputReasonSearch.addRow();
        	var mRow = this.ds_productionOrderList.rowposition;
        	this.ds_reinputReasonSearch.setColumn(aRow, "PRODUCTIONORDERID", this.ds_productionOrderList.getColumn(mRow, "PRODUCTIONORDERID"));
        	this.ds_reinputReasonSearch.setColumn(aRow, "LINENO"           , this.ds_productionOrderList.getColumn(mRow, "LINENO"));
        	this.ds_reinputReasonSearch.setColumn(aRow, "PRODUCTDEFID"     , this.ds_productionOrderList.getColumn(mRow, "PRODUCTDEFID"));

        	var sSvcID       = "SEARCH_REINPUTREASON";
        	var sController  = "/pcm01000/selectReinputReason.do";
        	var sInDatasets  = "INPUT=ds_reinputReasonSearch";
        	var sOutDatasets = "ds_reinputReason=output";
        	var sArgs        = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tab1_btn_productid_onclick = function(obj,e)
        {
        	this.ds_popSearch.clearData();
        	var aRow = this.ds_popSearch.addRow();
        	this.ds_popSearch.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_popSearch.setColumn(aRow, "PLANTID", this.tab_search.Tab1.form.cmb_plantId.value);
        	this.ds_popSearch.setColumn(aRow, "PRODUCTDEFID", this.tab_search.Tab1.form.edt_productDefId.value);
        	this.ds_popSearch.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
            var pProductDivsion = "Product";
        	this.openProduct_P00105("BA", this.ds_popSearch, pProductDivsion);
        };

        this.tab_search_Tab1_btn_productionOrderId_onclick = function(obj,e)
        {
        	 var txtSearch = ""
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_productionOrderId.value))
        	{
        		txtSearch = "PRODUCTIONORDERID="+ this.tab_search.Tab1.form.edt_productionOrderId.value;
        	}

        	var popupId = "SEARCH_PRODUCTIONORDERID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00146";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTIONORDERID|PRODUCTDEFID";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE|REINPUTYN";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType")+ "|1";
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.ds_productionOrderList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return false;
        	this.div_work.form.tab_lot.set_tabindex(1);

        	this.div_work.form.div_detail.form.edt_reason.set_value("");
        	this.div_work.form.div_detail.form.chk_testYn.set_value("0");

        	this.div_work.form.div_detail.form.msk_pureInput.set_value(this.ds_productionOrderList.getColumn(e.newrow, "PLANQTY"));
        	this.div_work.form.div_detail.form.msk_surplusApply.set_value(this.ds_productionOrderList.getColumn(e.newrow, "FIRSTINPUTQTY"));
        	this.div_work.form.div_detail.form.msk_reInputSequence.set_value(nexacro.toNumber(this.ds_productionOrderList.getColumn(e.newrow, "INPUTSEQUENCE")) + 1);
        	this.div_work.form.div_detail.form.msk_realInputPanel.set_value(this.ds_productionOrderList.getColumn(e.newrow, "STDINPUTPNLQTY"));
        	this.div_work.form.div_detail.form.msk_lotSizePanel.set_value(this.ds_productionOrderList.getColumn(e.newrow, "LOTINPUTPNLQTY"));

        	this.fn_CalcProductionOrderInfo(e.newrow);
        	this.fn_productionDefinitionList();


        };

        this.div_work_div_detail_msk_lotSizePanel_onkeyup = function(obj,e)
        {
        	var sRow = this.ds_productionOrderList.rowposition;
        	this.fn_CalcProductionOrderInfo(sRow);
        	this.fn_calProductList();
        };

        this.div_work_div_detail_msk_realInputPanel_onkeyup = function(obj,e)
        {
        	var sRow = this.ds_productionOrderList.rowposition;
        	this.fn_CalcProductionOrderInfo(sRow);
        	this.fn_calProductList();
        };

        this.ds_productList_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return false;

        	if (e.columnid == "PANEL")
        	{
        		this.ds_productList.setColumn(e.row, "QTY", this.ds_productList.getColumn(e.row, "PANEL") *  this.ds_productList.getColumn(e.row, "JOINTQTY") );
        	} else if (e.columnid == "CHK") {

        	   var siteCode = "";
        	   var productType = "";
        	   var values  = [];
        	   this.div_work.form.tab_lot.set_tabindex(0);

        	   this.ds_newlotList.clearData();

        	   var mRow    = this.ds_productionOrderList.rowposition;
        	   for(var k = 0 ; k < this.ds_productList.getRowCount(); k++)
        	   {
        	       if (this.ds_productList.getColumn(k,"CHK") == "0")
        		   {
        				continue;
        		   }

        		   var jointQty   = nexacro.round( this.ds_productList.getColumn(k,"JOINTQTY"));
        		   var rtrSht     = this.ds_productList.getColumn(k,"RTRSHT");
        		   var lotStartNo  = "";
        		   var reInput     = "";

        		   this.ds_lotStartNoSearch.clearData();
        		   this.ds_lotStartNo.clearData();
        		   var sRow = this.ds_lotStartNoSearch.addRow();
        		   this.ds_lotStartNoSearch.setColumn(sRow, "PRODUCTIONORDERID", this.ds_productionOrderList.getColumn(mRow, "PRODUCTIONORDERID"));
        		   this.ds_lotStartNoSearch.setColumn(sRow, "LINENO"           , this.ds_productionOrderList.getColumn(mRow, "LINENO"));
        		   this.ds_lotStartNoSearch.setColumn(sRow, "PRODUCTDEFID"     , this.ds_productionOrderList.getColumn(mRow, "PRODUCTDEFID"));

        		   var sSvcID       = "SEARCH_LOTSTARTNO";
        		   var sController  = "/pcm01000/getLotStartNo.do";
        		   var sInDatasets  = "INPUT=ds_lotStartNoSearch";
        		   var sOutDatasets = "ds_lotStartNo=output";
        		   var sArgs        = "";
        		   this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);


        		   if(this.ds_lotStartNo.getRowCount() == 0)
        		   {
        		        var errMsg = " S/O No:"+  this.ds_productionOrderList.getColumn(mRow, "PRODUCTIONORDERID") + ",  LINE NO: "+ this.ds_productionOrderList.getColumn(mRow, "LINENO") + ", product id : " + this.ds_productionOrderList.getColumn(mRow, "PRODUCTDEFID") ;
        				this.gfn_Message("NotExistLot", errMsg, "error", "ok");
        				return false;
        		   }
        		   if (this.gfn_isNum(this.gfn_left(this.ds_lotStartNo.getColumn(0, "LOTSTARTNO"),1)) == true) //ERP LOT
        		   {
        		   	   switch(this.ds_productionOrderList.getColumn(sRow,"PRODUCTIONTYPE")) {
        					case "Production":
        						productType = "M";
        						break;
        					case "Sample":
        					case "SampleTest" :
        						productType = "S";
        						break;
        					case "FirstProduction":
        						productType = "P";
        						break;
        					case "Test":
        						productType = "T";
        						break;
        					default :
        						productType = "C";
        						break;
        				}
        				switch(this.gf_getSiteType()) {
        				case "IFC" :
        					siteCode = "F";
        					break;
        				case "IFV" :
        					siteCode = "Y";
        					break;
        				case "CCT":
        					siteCode = "C";
        					break;
        				case "YPE":
        					siteCode = "Y";
        					break;
        				case "YPEV":
        					siteCode = "P";
        					break;
        				default:
        					break;
        				}

        		   	   lotStartNo =  this.gfn_right(this.gfn_today(),6) + siteCode;
        			   if (this.div_work.form.div_detail.form.chk_testYn.value == 1)
        			   {
        				   productType = "T";
        				   reInput     = "1";
        			   }
        			   else
        			   {
        				   reInput = this.div_work.form.div_detail.form.msk_reInputSequence.value;
        			   }

        			    lotStartNo =  productType+this.gfn_right(this.gfn_today(),6) + siteCode+ "001";
        		   }
        		   else
        		   {
        			   if (this.div_work.form.div_detail.form.chk_testYn.value == 1)
        			   {
        				   lotStartNo  = "T"+ this.gfn_right(this.ds_lotStartNo.getColumn(0, "LOTSTARTNO"), 10);
        				   reInput     = "1";
        			   }
        			   else
        			   {
        				   lotStartNo  = this.ds_lotStartNo.getColumn(0, "LOTSTARTNO");
        				   reInput     =  this.div_work.form.div_detail.form.msk_reInputSequence.value;
        			   }
        		   }

        		   var lotNo            =  lotStartNo;
        		   var materialClass    =  this.ds_productList.getColumn(k,"MATERIALCLASS");
        		   var materialSequence =  this.ds_productList.getColumn(k,"MATERIALSEQUENCE");

        		   if (this.nfn_isNull(materialClass) || this.nfn_isNull(materialSequence))
        		   {
        			   var errMsg = "product id :"+  this.ds_productList.getColumn(k, "PRODUCTDEFID") + ",  Product Version : "+ this.ds_productList.getColumn(k, "PRODUCTDEFVERSION") + ", Material Class : " + materialClass + ",  Material Sequence : "+ materialSequence;
        			   this.gfn_Message("NotExistsMaterialInfo", errMsg, "error", "ok");
        			   return false;
        		   }

        		   var material = "";

        		   if (this.ds_productList.getColumn(k,"PRODUCTDEFTYPE") == "SubAssembly")
        		   {
        				material = this.gfn_right( this.ds_productList.getColumn(k, "PRODUCTDEFID"), 7);
        		   }
        		   else
        		   {
        				material = materialClass ;
        		   }

        		   var lotDegree  = new Array();
        		   var txtDegree  = "";
        		   var lotSplit   = "000";

        		   var planQty          = this.ds_productionOrderList.getColumn(mRow, "PLANQTY");
        		   var pcsPnl           = this.ds_productionOrderList.getColumn(mRow, "PCSPNL");
        		   var pureInput        = this.div_work.form.div_detail.form.msk_pureInput.value;
        		   var realInput        = this.div_work.form.div_detail.form.msk_realInput.value;
        		   var panelPerLot      = this.div_work.form.div_detail.form.msk_lotSizePanel.value;
        		   var lotPnl           = this.ds_productList.getColumn(k, "LOTSIZE");
        		   var pnlQty           = this.ds_productList.getColumn(k, "PANEL");

        			switch(rtrSht) {
        			   case "RTR":
        				  lotDegree.push("000");
        				  lotSplit = "000";
        				  break;
        			   case "SHT":
        				  var nShtLotDegree =  Math.ceil(pnlQty / lotPnl) ;
        				  var totalSeq = 1;
        				  var lastSeq = 1;
        				  for (var i = 0; i < nShtLotDegree; i++)
        				  {
        					 	if (i >= 999)
        						{
        							if (totalSeq % 100 == 0)
        								totalSeq++;

        							var startIndex = this.gfn_left(totalSeq, 2) ;

        							if (lastSeq > 99)
        								lastSeq = 1;
        								lotDegree.push(this.fn_getBase36String(startIndex) + this.gfn_right( "00"+ lastSeq, 2));
        							//lotDegree.Add(CommonFunction.GetBase36String(startIndex) + lastSeq.ToString("00"));
        						}
        						else
        						{
        							//lotDegree.Add(lastSeq.ToString("000"));
        							 lotDegree.push(this.gfn_right( "000"+ lastSeq, 3));
        						}

        						totalSeq++;
        						lastSeq++;
        				  }
        				  lotSplit = "001";
        				  break;
        			   default:
        			}
        		    var addCount = 0;
        			for(var i = 0; i < lotDegree.length; i++)
        			{
        				var lotId = lotNo+"-"+reInput+"-"+material+"-"+lotDegree[i]+"-"+lotSplit;
        				var dRow = this.ds_newlotList.addRow();

        				this.ds_newlotList.setColumn(dRow, "ENTERPRISEID"      , nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        				this.ds_newlotList.setColumn(dRow, "PLANTID"           , this.gf_getSiteType());
        				this.ds_newlotList.setColumn(dRow, "PRODUCTDEFID"      , this.ds_productList.getColumn(k,"PRODUCTDEFID"));
        				this.ds_newlotList.setColumn(dRow, "PRODUCTDEFVERSION" , this.ds_productList.getColumn(k,"PRODUCTDEFVERSION"));
        				this.ds_newlotList.setColumn(dRow, "PRODUCTIONORDERID" , this.ds_productionOrderList.getColumn(mRow,"PRODUCTIONORDERID"));
        				this.ds_newlotList.setColumn(dRow, "LOTID"             , lotId);
        				this.ds_newlotList.setColumn(dRow, "PNLQTY"            , rtrSht == "RTR" ? pnlQty : nexacro.toNumber(addCount) == Math.floor(pnlQty / panelPerLot) ? (pnlQty % panelPerLot) : panelPerLot);
        				this.ds_newlotList.setColumn(dRow, "QTY"               , this.ds_newlotList.getColumn(dRow, "PNLQTY") * jointQty);
        				this.ds_newlotList.setColumn(dRow, "JOINTQTY"          , jointQty);
        				this.ds_newlotList.setColumn(dRow, "UNIT"              , this.ds_productList.getColumn(k,"UNIT"));
                        this.ds_newlotList.setColumn(dRow, "RTRSHT", rtrSht);
        			   // trace("UNIT = "+ this.ds_productList.getColumn(k,"UNIT"));
        				addCount ++;
        			}

        		}

        	    this.ds_lotList.copyData(this.ds_newlotList);
        		//this.div_work.form.sta_cnt_ds_lot.set_text("Count : <fc v='#f31d24'>"+this.ds_lot.getRowCount()+"</fc>");

        	}

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tab1.form.btn_productionOrderId.addEventHandler("onclick",this.tab_search_Tab1_btn_productionOrderId_onclick,this);
            this.tab_search.Tab1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tab1_btn_productid_onclick,this);
            this.div_work.form.div_detail.form.msk_realInputPanel.addEventHandler("onkeyup",this.div_work_div_detail_msk_realInputPanel_onkeyup,this);
            this.div_work.form.div_detail.form.msk_lotSizePanel.addEventHandler("onkeyup",this.div_work_div_detail_msk_lotSizePanel_onkeyup,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_productionOrderList.addEventHandler("onrowposchanged",this.ds_productionOrderList_onrowposchanged,this);
            this.ds_productList.addEventHandler("oncolumnchanged",this.ds_productList_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
