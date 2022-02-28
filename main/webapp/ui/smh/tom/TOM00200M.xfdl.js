(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00200M");
            this.set_titletext("치공구 내역 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_request", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLPROGRESSSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPROGRESSSTATUSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVALUSE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INOUTCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTORID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLREGISTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLREGISTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANDELIVERYDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"FORMID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OLB\" type=\"STRING\" size=\"256\"/><Column id=\"NETPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPROGRESSSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVALUSE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestDetailLot", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDORRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDORRECEIPTDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","115","10","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_term","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("의뢰기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","115","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","200","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","17","200","145","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","86",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","206","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","17","110","93","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","115","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","115","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_state","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_toolRegistType","115","35","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,ToolRegistType,,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_state00","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("제작구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_toolMakeType","115","60","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ToolMakeType,ALL,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_requestor","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("의뢰자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_requestor","115","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_requestor",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","260","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","34",null,"49.79%","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_request");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"124\"/><Column size=\"0\"/><Column size=\"54\"/><Column size=\"0\"/><Column size=\"56\"/><Column size=\"65\"/><Column size=\"90\"/><Column size=\"55\"/><Column size=\"175\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"76\"/><Column size=\"125\"/><Column size=\"165\"/><Column size=\"165\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"진행상태\"/><Cell col=\"1\" text=\"의뢰일\"/><Cell col=\"2\" text=\"의뢰일_8자리\"/><Cell col=\"3\" text=\"의뢰순번\"/><Cell col=\"4\" text=\"제작구분---HIDDEN\"/><Cell col=\"5\" text=\"의뢰수량\"/><Cell col=\"6\" text=\"제작구분\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\" 품목 Rev\"/><Cell col=\"9\" text=\"품목명\"/><Cell col=\"10\" text=\"납기일자\"/><Cell col=\"11\" text=\"승인사용\"/><Cell col=\"12\" text=\"의뢰자아이디---HIDDEN\"/><Cell col=\"13\" text=\"사용자명\"/><Cell col=\"14\" text=\"의뢰부서ID\"/><Cell col=\"15\" text=\"의뢰사유\"/><Cell col=\"16\" text=\"설명\"/><Cell col=\"17\" text=\"진행상태코드---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLPROGRESSSTATUSNAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:REQUESTDATE2\" textAlign=\"center\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd ddd\"/><Cell col=\"2\" text=\"bind:REQUESTDATE\" textAlign=\"left\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLMAKETYPE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REQUESTQTY\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:TOOLMAKETYPENAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:DELIVERYDATE\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"11\" text=\"bind:ISAPPROVALUSE\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:REQUESTUSER\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:USERNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:REQUESTDEPARTMENT\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:TOOLPROGRESSSTATUS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","2","grd_head:0",null,"34","898",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("치공구 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","-1","title2:0",null,null,"450","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_requestDetail");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"58\"/><Column size=\"95\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"27\"/><Column size=\"66\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"101\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"95\"/><Column size=\"135\"/><Column size=\"135\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"125\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"58\"/><Column size=\"61\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"제작구분\"/><Cell col=\"2\" text=\"치공구 ID\"/><Cell col=\"3\" text=\"TOOL Rev.---HIDDEN\"/><Cell col=\"4\" text=\"TOOL명\"/><Cell col=\"5\" text=\"Tool구분Id\"/><Cell col=\"6\" text=\"Ver.\"/><Cell col=\"7\" text=\"TOOL구분\"/><Cell col=\"8\" text=\"TOOL유형Id\"/><Cell col=\"9\" text=\"TOOL형식\"/><Cell col=\"10\" text=\"상세유형Id\"/><Cell col=\"11\" text=\"TOOL종류\"/><Cell col=\"12\" text=\"PRODUCTDEFID---HIDDEN\"/><Cell col=\"13\" text=\"ROWSTATUS---HIDDEN\"/><Cell col=\"14\" text=\"FILMUSELAYER1---HIDDEN\"/><Cell col=\"15\" text=\"USELAYER---HIDDEN\"/><Cell col=\"16\" text=\"FILMUSELAYER2---HIDDEN\"/><Cell col=\"17\" text=\"보증타수\" cssclass=\"cell_point\"/><Cell col=\"18\" text=\"연마기준타수\" cssclass=\"cell_point\"/><Cell col=\"19\" text=\"입고예정일\" cssclass=\"cell_point\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"20\" text=\"제작처\" cssclass=\"cell_point\"/><Cell col=\"21\" text=\"작업장\" cssclass=\"cell_point\"/><Cell col=\"22\" text=\"합수\"/><Cell col=\"23\" text=\"SCALEX\"/><Cell col=\"24\" text=\"SCALEY\"/><Cell col=\"25\" text=\"OLB도피\"/><Cell col=\"26\" text=\"NET_PNL\"/><Cell col=\"27\" text=\"REQUESTDATE\"/><Cell col=\"28\" text=\"REQUESTDEPARTMENT\"/><Cell col=\"29\" text=\"REQUESTUSER\"/><Cell col=\"30\" text=\"납기일자\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"31\" text=\"특이사항\"/><Cell col=\"32\" text=\"의뢰사유\"/><Cell col=\"33\" text=\"등록일자\"/><Cell col=\"34\" text=\"생산구분---HIDDEN\"/><Cell col=\"35\" text=\"제작구분코드---HIDDEN\"/><Cell col=\"36\" text=\"작업장\"/><Cell col=\"37\" text=\"생산구분명---HIDDEN\"/><Cell col=\"38\" text=\"의뢰수량---HIDDEN\"/><Cell col=\"39\" text=\"제작업체\"/><Cell col=\"40\" text=\"의뢰수량\"/><Cell col=\"41\" text=\"SEQUENCE\"/><Cell col=\"42\" text=\"IDX\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:TOOLMAKETYPENAME\"/><Cell col=\"2\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TOOLVERSION\"/><Cell col=\"4\" text=\"bind:TOOLNAME\"/><Cell col=\"5\" text=\"bind:TOOLCATEGORYID\"/><Cell col=\"6\" text=\"bind:TOOLVERSION\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:TOOLCATEGORY\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:FORMID\"/><Cell col=\"9\" text=\"bind:FORM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLKINDID\"/><Cell col=\"11\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"13\" text=\"bind:ROWSTATUS\"/><Cell col=\"14\" text=\"bind:FILMUSELAYER1\"/><Cell col=\"15\" text=\"bind:USELAYER\"/><Cell col=\"16\" text=\"bind:FILMUSELAYER2\"/><Cell col=\"17\" text=\"bind:USEDLIMIT\" textAlign=\"right\" edittype=\"mask\" displaytype=\"maskeditcontrol\" maskeditformat=\"#,###\"/><Cell col=\"18\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" edittype=\"mask\" displaytype=\"maskeditcontrol\" maskeditformat=\"#,###\"/><Cell col=\"19\" text=\"bind:PLANDELIVERYDATE\" displaytype=\"calendarcontrol\" edittype=\"expr:comp.parent.parent.parent.isEditable?&apos;date&apos;:&apos;none&apos;\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"20\" text=\"bind:VENDORNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\" expandshow=\"show\"/><Cell col=\"21\" text=\"bind:RECEIPTAREANAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\" expandshow=\"show\"/><Cell col=\"22\" text=\"bind:SUMMARY\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:SCALEX\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:SCALEY\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:OLB\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:NETPNL\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:REQUESTDATE\"/><Cell col=\"28\" text=\"bind:REQUESTDEPARTMENT\"/><Cell col=\"29\" text=\"bind:REQUESTUSER\"/><Cell col=\"30\" text=\"bind:DELIVERYDATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"31\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:CREATEDATE\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:PRODUCTIONTYPE\"/><Cell col=\"35\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"36\" text=\"bind:RECEIPTAREAID\"/><Cell col=\"37\" text=\"bind:PRODUCTIONTYPENAME\"/><Cell col=\"38\" text=\"bind:REQUESTQTY\"/><Cell col=\"39\" text=\"bind:VENDORID\"/><Cell col=\"40\" text=\"bind:QTY\" textAlign=\"right\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"41\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"right\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"42\" text=\"bind:REQUESTIDX\" textAlign=\"right\" edittype=\"none\" displaytype=\"text\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","129","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("치공구 의뢰 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_request","title0:12","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_requestDetail","title2:0","grd_head:0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_requestDetailLot",null,"grd_head:5","26","24","4",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2_00","grd_detail:10","grd_head:0","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("Tool 코드 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_requestDetailLot","title2_00:13","grd_head:0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detailLot","grd_detail:10","sta_cnt_ds_requestDetailLot:0",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_fillareatype("none");
            obj.set_binddataset("ds_requestDetailLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"32\"/><Column size=\"128\"/><Column size=\"124\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"0\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Tool 코드\"/><Cell col=\"2\" text=\"입고/출고일\"/><Cell col=\"3\" text=\"입고/출고일_8자리\"/><Cell col=\"4\" text=\"사업장아이디---HIDDEN\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"사용타수\"/><Cell col=\"7\" text=\"누적타수\"/><Cell col=\"8\" text=\"연마횟수\"/><Cell col=\"9\" text=\"수리횟수\"/><Cell col=\"10\" text=\"상태아이디---HIDDEN\"/><Cell col=\"11\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:DURABLELOTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SENDORRECEIPTDATE2\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:SENDORRECEIPTDATE\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USEDCOUNT\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:TOTALCLEANCOUNT\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:TOTALREPAIRCOUNT\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:DURABLESTATE\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:DURABLESTATENAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","6",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","39",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("치공구 내역 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"16","105","24","btn_save:16",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("내역등록 취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_black");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1290,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00200M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        //제작업체 : expr:comp.parent.parent.parent.isEditable?'show':'hide'
        //작업장 :

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.headerDiv = this.div_header.form; //저장영역
        this.tabDiv = this.div_work.form;

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)

        this.requestorId = ''; //의뢰자Id(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수
        this.isEditable = false;

        //저장전 마스터의 위치를 저장한다, 저장후에 위치 복원에 사용
        this.oldRequestDate = '';
        this.oldRequestSequence = '';

        //공통팝업:검색키구별값
        this.gridAreaName = '';
        this.gridVendorName = '';

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (상단 조회)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_request.clearData();
        	this.ds_requestDetail.clearData();
        	this.ds_requestDetailLot.clearData();

        	this.ds_search.clearData();

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//의뢰자명이 공백이면 의뢰자Id 공백 처리
        	if(this.searchDiv.edt_requestor.value=='') {
        		this.requestorId = '';
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "P_TOOLREGISTTYPE", 		this.nfn_nvl(this.searchDiv.cbo_toolRegistType.value, "")); //진행상태
        	this.ds_search.setColumn(0, "TOOLMAKETYPE", 			this.nfn_nvl(this.searchDiv.cbo_toolMakeType.value, "")); //제작구분
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //제품ID
        	this.ds_search.setColumn(0, "P_REQUESTORID", 			this.nfn_nvl(this.requestorId, "")); //의뢰자ID
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectRequestToolMakingRegister");

        	var sSvcID 			= "selectRequestToolMakingRegister";
        	var sController 	= "/tom00200/selectRequestToolMakingRegister.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_request=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (하단 조회)
         */
        this.fn_detailSearch = function ()
        {
        	var tempToolProgressStatus = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS")); //진행상태
        	var tempToolMakeType = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLMAKETYPE")); //제작구분
        	//alert(">>>>> 진행상태 :: "+tempToolProgressStatus + "/제작구분 :: " +tempToolMakeType);

        	this.ds_requestDetail.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE")));
        	this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	if(tempToolProgressStatus=='DetailRegist' && (tempToolMakeType=='Repair' || tempToolMakeType=='Modify')){
        		this.ds_search.setColumn(0, "SQL_ID", 					"selectRequestToolMakingRegisterDetail2");
        	}else{
        		this.ds_search.setColumn(0, "SQL_ID", 					"selectRequestToolMakingRegisterDetail");
        	}

        	var sSvcID 			= "selectRequestToolMakingRegisterDetail";
        	var sController 	= "/tom00200/selectRequestToolMakingRegisterDetail.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_requestDetail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (의뢰Lot 조회)
         */
        this.fn_detailSubSearch = function ()
        {
        	var tempToolProgressStatus = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS")); //진행상태
        	var tempToolMakeType = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLMAKETYPE")); //제작구분
        	//alert(">>>>> 진행상태 :: "+tempToolProgressStatus + "/제작구분 :: " +tempToolMakeType);

        	this.ds_requestDetailLot.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE")));
        	this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE")));
        	this.ds_search.setColumn(0, "REQUESTIDX", 				this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "REQUESTIDX")));
        	this.ds_search.setColumn(0, "DURABLEDEFID", 			this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLCODE")));
        	this.ds_search.setColumn(0, "DURABLEDEFVERSION", 		this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLVERSION")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	if(tempToolProgressStatus=='DetailRegist' && (tempToolMakeType=='Repair' || tempToolMakeType=='Modify')){
        		this.ds_search.setColumn(0, "P_PLANDELIVERYDATE",		this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "PLANDELIVERYDATE"))); //입고예정일
        		this.ds_search.setColumn(0, "SQL_ID", 					"selectRequestToolMakingRegisterDetailSub2");
        	}else{
        		this.ds_search.setColumn(0, "SQL_ID", 					"selectRequestToolMakingRegisterDetailSub");
        	}

        	var sSvcID 			= "selectRequestToolMakingRegisterDetailSub";
        	var sController 	= "/tom00200/selectRequestToolMakingRegisterDetailSub.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_requestDetailLot=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장 (내역등록)
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_requestDetail) && !this.gfn_dsIsUpdated(this.ds_requestDetailLot)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_detail;
        	var strColIdList = "USEDLIMIT,CLEANLIMIT,PLANDELIVERYDATE,VENDORID,RECEIPTAREAID";

        	/* 그리드 필수 입력 체크 */
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	//Save master pos
        	this.oldRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	this.oldRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveToolRequestDetail";
        	var sController 	= "/tom00200/saveToolRequestDetail.do";
        	var sInDatasets 	= "INPUT=ds_requestDetail:A INPUT_SUB=ds_requestDetailLot:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 내역 등록 취소
         */
        this.fn_requestCancel = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE")));
        	this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE")));
        	this.ds_search.setColumn(0, "TOOLMAKETYPE", 			this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLMAKETYPE")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"saveRequestCancel");

        	//Save master pos
        	this.oldRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	this.oldRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveRequestCancel";
        	var sController 	= "/tom00200/saveRequestCancel.do";
        	var sInDatasets 	= "INPUT=ds_search:U";
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
         * 기능 : 복사
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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.requestorId = this.tomfn_getUserId();
        			this.searchDiv.edt_requestor.set_value(this.tomfn_getUserNm());
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectRequestToolMakingRegister": //[상단]그리드 CALLBACK
        			if (this.ds_request.rowcount > 0)
        			{
        				if(this.oldRequestDate != '' && this.oldRequestSequence != ''){//save pos restore
        					var restorePos = this.ds_request.findRowExpr("REQUESTDATE=='" + this.oldRequestDate + "' && REQUESTSEQUENCE=='" + this.oldRequestSequence + "'");
        					this.ds_request.set_rowposition(restorePos);
        					this.oldRequestDate  = "";
        					this.oldRequestSequence  = "";
        				}else{
        					this.ds_request.set_rowposition(0);
        				}

        				this.btnControl();

        				this.fn_detailSearch();

        				this.btnValidEditable(); //편집가능한지 체크

        			}
        			break;
        		case "selectRequestToolMakingRegisterDetail": //[하단]그리드 CALLBACK
        			if (this.ds_requestDetail.rowcount > 0)
        			{
        				//우측 의뢰Lot 목록 조회
        				this.fn_detailSubSearch();
        			}
        			//alert(isApprovalUse+'/'+toolProgressStatus+'/'+requestUser+'/'+userId+'/'+lotExistsYn+'/편집가능여부:'+this.isEditable);
        			break;
        		case "selectRequestToolMakingRegisterDetailSub": //[Lot List]그리드 CALLBACK
        			//수리/수정의 경우 : 하단 오른쪽 - 버튼(삭제버튼) 안보이게 처리
        			var tempToolMakeType = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLMAKETYPE")); //제작구분
        			if(tempToolMakeType=='Repair' || tempToolMakeType=='Modify'){
        				this.tabDiv.btn_delRow_ds_requestDetailLot.set_enable(false);
        			}
        			break;
        		case "saveToolRequestDetail":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		case "saveRequestCancel":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
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
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.nfn_nvl(this.searchDiv.edt_product.value,'');//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.nfn_nvl(this.gridAreaName,'');
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.nfn_nvl(this.gridVendorName,'');
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
        	}else if(popId=="P00194"){ //의뢰자 조회
        		oArg.arg_searchStr = "USERNAME="+this.nfn_nvl(this.searchDiv.edt_requestor.value,'');
        		oArg.arg_rtnCols = "USERID|USERNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	} else if(sPopupId == "SCH_AREA")
        	{
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "AREAID", rtn[0]);
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "RECEIPTAREANAME", rtn[1]);
        	}else if(sPopupId == "SCH_VENDOR")
        	{
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "VENDORID", rtn[0]);
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "VENDORNAME", rtn[1]);
        	}else if(sPopupId == "SCH_USERS")
        	{
        		this.searchDiv.edt_requestor.set_value(rtn[1]);
        		this.requestorId = rtn[0]; //HIDDEN 필드
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo();
        }

        this.tab_search_Tabpage1_btn_requestor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //의뢰자 조회
        };

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /*
         * 기능 : 하단 그리드 - '제작업체' 공통팝업 조회
         */
        this.fn_gridVendorSelectPop = function ()
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        }

        /*
         * 기능 : 하단 그리드 - '작업장' 공통팝업 조회
         */
        this.fn_gridAreaSelectPop = function ()
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.div_work_grd_request_oncellclick = function(obj,e)
        {
        	this.isEditable = false;
        	var isApprovalUse = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "ISAPPROVALUSE")); //승인상태
        	var toolProgressStatus = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS")); //진행상태
        	var requestUser = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTUSER")); //의뢰자ID
        	var userId = this.tomfn_getUserId();
        	if(isApprovalUse=='N'){ //승인상태가 아닐때는 Create, DetailRegist에서만 수정이 가능하다
        		if(toolProgressStatus=='Create'){
        			this.isEditable = true;
        		}
        		if(toolProgressStatus=='DetailRegist'){
        			if(requestUser==userId){//내역등록상태일때는 본인이 제작의뢰한 당사자일때만 수정이 가능하다.
        				this.isEditable = true;
        			}
        		}
        		//alert(isApprovalUse+'/'+toolProgressStatus+'/'+requestUser+'/'+userId+'/'+this.isEditable);
        	}

        	this.btnControl();

        	this.fn_detailSearch(); //하단 툴정보 Grid 검색
        };

        this.btnControlPrepare = function(pRow)
        {
        	this.ds_request.set_rowposition(pRow);
        	this.btnControl();
        }

        this.btnControl = function()
        {
        	var toolProgressStatus = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS")); //진행상태
        	if(toolProgressStatus=='Create'){
        		this.headerDiv.btn_cancel.set_enable(false);
        		this.headerDiv.btn_save.set_enable(true);
        		//this.tabDiv.btn_delRow_ds_requestDetailLot.set_enable(true);
        	}else{
        		//########################################################################################
        		//의뢰단계가 아닌경우 만일을 위해 내역등록취소불가,저장불가,LOT삭제불가로 만든다
        		this.headerDiv.btn_cancel.set_enable(false);
        		this.headerDiv.btn_save.set_enable(false);
        		//this.tabDiv.btn_delRow_ds_requestDetailLot.set_enable(false);
        		//########################################################################################
        	}
        	//############################################################################################
        	//############################################################################################
        	//############################################################################################
        	if(toolProgressStatus=='DetailRegist'){ //내역등록 상태만 취소만 가능하게 한다.
        		this.headerDiv.btn_cancel.set_enable(true);
        		this.headerDiv.btn_save.set_enable(false);
        		//this.tabDiv.btn_delRow_ds_requestDetailLot.set_enable(false);
        	}
        	//입고/출고일이 존재하면 내역등록 취소 불가
        	var inoutcnt = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "INOUTCNT")); //입출고일자존재건수
        	if(inoutcnt>0){
        		this.headerDiv.btn_cancel.set_enable(false);
        	}
        }

        this.div_work_grd_detail_oncloseup = function(obj,e)
        {
        	this.ds_requestDetail.updateToDataset();
        };

        this.div_work_grd_detail_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "VENDORNAME")) { //제작처 팝업
        		this.gridVendorName = '';
        		this.fn_gridVendorSelectPop();
        	}
        	if (this.nfn_isEqualCol(obj, e.col, "RECEIPTAREANAME")) { //작업장 팝업
        		this.gridAreaName = '';
        		this.fn_gridAreaSelectPop();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.div_work_grd_requestDetail_oncellclick = function(obj,e)
        {
        	this.fn_detailSubSearch(); //오른쪽 의뢰 Lot Grid 검색
        };

        //내역 등록 취소
        this.div_header_btn_cancel_onclick = function(obj,e)
        {
        	this.fn_requestCancel();
        };

        this.tab_search_Tabpage1_edt_requestor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_requestor_onclick();
        	}
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        	this.requestorId = this.tomfn_getUserId();
        	this.searchDiv.edt_requestor.set_value(this.tomfn_getUserNm());

        	this.productId = '';
        	this.productVer = '';
        	this.requestorId = '';

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_request.clearData();
        	this.ds_requestDetail.clearData();
        	this.ds_requestDetailLot.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_request.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_requestDetail.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_requestDetailLot.set_text(strCnt);
        };

        this.tab_search_Tabpage1_edt_requestor_onchanged = function(obj,e)
        {
        };

        this.div_work_grd_head_onkeyup = function(obj,e)
        {
        	this.btnValidEditable(); //편집가능한지 체크

        	this.btnControlPrepare(e.row);

        	this.fn_detailSearch(); //하단 툴정보 Grid 검색
        };

        this.btnValidEditable = function()
        {
        	this.isEditable = false;
        	var isApprovalUse = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "ISAPPROVALUSE")); //승인상태
        	var toolProgressStatus = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS")); //진행상태
        	var requestUser = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTUSER")); //의뢰자ID
        	var userId = this.tomfn_getUserId();
        	if(isApprovalUse=='N'){ //승인상태가 아닐때는 Create, DetailRegist에서만 수정이 가능하다.
        		if(toolProgressStatus=='Create'){
        			this.isEditable = true;
        		}
        		if(toolProgressStatus=='DetailRegist'){
        			if(requestUser==userId){//내역등록상태일때는 본인이 제작의뢰한 당사자일때만 수정이 가능하다.
        				this.isEditable = true;
        			}
        		}
        		//alert(isApprovalUse+'/'+toolProgressStatus+'/'+requestUser+'/'+userId+'/'+this.isEditable);
        	}
        }

        this.div_work_grd_detail_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		if (obj.currentcell == obj.getBindCellIndex("body", "VENDORNAME")) {
        			this.gridVendorName = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "VENDORNAME"),'');
        			this.fn_gridVendorSelectPop();
        		} else if (obj.currentcell == obj.getBindCellIndex("body", "RECEIPTAREANAME")) {
        			this.gridAreaName = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "RECEIPTAREANAME"),'');
        			this.fn_gridAreaSelectPop();
        		}
        	}
        };

        this.div_work_btn_delRow_ds_requestDetailLot_onclick = function(obj,e)
        {
        	this.headerDiv.btn_save.set_enable(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_requestor.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_requestor_onkeydown,this);
            this.tab_search.Tabpage1.form.edt_requestor.addEventHandler("onchanged",this.tab_search_Tabpage1_edt_requestor_onchanged,this);
            this.tab_search.Tabpage1.form.btn_requestor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_requestor_onclick,this);
            this.div_work.form.grd_head.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_work.form.grd_head.addEventHandler("onkeyup",this.div_work_grd_head_onkeyup,this);
            this.div_work.form.grd_detail.addEventHandler("oncellclick",this.div_work_grd_requestDetail_oncellclick,this);
            this.div_work.form.grd_detail.addEventHandler("oncloseup",this.div_work_grd_detail_oncloseup,this);
            this.div_work.form.grd_detail.addEventHandler("onexpandup",this.div_work_grd_detail_onexpandup,this);
            this.div_work.form.grd_detail.addEventHandler("onkeyup",this.div_work_grd_detail_onkeyup,this);
            this.div_work.form.btn_delRow_ds_requestDetailLot.addEventHandler("onclick",this.div_work_btn_delRow_ds_requestDetailLot_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_cancel.addEventHandler("onclick",this.div_header_btn_cancel_onclick,this);
        };
        this.loadIncludeScript("TOM00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
