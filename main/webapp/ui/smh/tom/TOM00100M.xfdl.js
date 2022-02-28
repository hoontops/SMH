(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00100M");
            this.set_titletext("치공구 제작 의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_request", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOOLPROGRESSSTATUSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVALUSE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPROGRESSSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALNO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERYN\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERYNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTORID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLREGISTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ORDERNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"FORMID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OLB\" type=\"STRING\" size=\"256\"/><Column id=\"NETPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPROGRESSSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVALUSE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestDetailRow", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"FORMID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSELAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEX\" type=\"STRING\" size=\"256\"/><Column id=\"SCALEY\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OLB\" type=\"STRING\" size=\"256\"/><Column id=\"NETPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPROGRESSSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVALUSE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTIDX\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("11");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","248","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","248","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"228","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","254","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("내부 Rev");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productRev","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productName","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaId","76","388","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_value("AreaID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("AreaID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_venderId","76","428","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_value("VendorId(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("VendorId(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_requestor","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("의뢰자");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_requestor","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_requestor",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_state","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_toolRegistType","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,ToolRegistType,,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lineNo","76","468","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_value("LineNo(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("LineNo(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("발주번호");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_orderno","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","250","34",null,null,null,null,null,null,this);
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

            obj = new Div("Div01_00","0","49.00%",null,"185","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_product","0","10","9.31%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_productName","25.94%","10","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_jobType","60%","10","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("작업 구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_productionType","80%","10","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_text("생산 구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_toolMakeType","0","35","9.31%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_text("제작구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_summary","25.94%","35","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("5");
            obj.set_text("합수");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_orderQty","42.99%","35","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("6");
            obj.set_text("수주량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_manufactId","59.94%","35","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("7");
            obj.set_text("제작처");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_requestDate","79.92%","35","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("8");
            obj.set_text("의뢰일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_toolCategory","0","60","9.31%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("9");
            obj.set_text("치공구 구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_qty","25.94%","60","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("10");
            obj.set_text("의뢰수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_olb","42.99%","60","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("11");
            obj.set_text("OLB 도피");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_area","59.94%","60","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("12");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_dept","79.92%","60","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("13");
            obj.set_text("의뢰부서");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("tool_form","0","85","9.31%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("14");
            obj.set_text("치공구 형식");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_scalx","25.94%","85","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("15");
            obj.set_text("SCAL X");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_netPnl","42.99%","85","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("16");
            obj.set_text("NET_PNL");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_deliveryDate","59.94%","85","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("17");
            obj.set_text("납기일자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_requestUser","79.92%","85","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("18");
            obj.set_text("의뢰자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_toolkind","0","110","9.31%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("19");
            obj.set_text("치공구 종류");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_scaly","25.94%","110","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("20");
            obj.set_text("SCAL Y");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_requestComment","42.99%","110","9.41%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("21");
            obj.set_text("의뢰 사유");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("sta_description","0","135","9.31%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("22");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_productId","sta_product:5","10","8.89%","20",null,null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_product2",null,"10","22","20","sta_productName:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_productVer","edt_productId:3","10",null,"20","btn_product2:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("44");
            obj.set_readonly("false");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_productName","sta_productName:5","10",null,"20","sta_jobType:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("45");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_text("AMB667TY01 MAIN(4L)-M2/3L-IFV직납");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_jobType","sta_jobType:5","10",null,"20","sta_productionType:-1",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            obj.set_text("변경");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_productionType","sta_productionType:5","10",null,"20","5",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("47");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo_toolMakeType","sta_toolMakeType:5","35",null,"20","sta_summary:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("24");
            obj.set_codecolumn("C,ToolMakeType,SEL,Y,Y");
            obj.set_autoselect("true");
            obj.set_text("");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_summary","sta_summary:5","35",null,"20","sta_orderQty:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("29");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_orderQty","sta_orderQty:5","35",null,"20","sta_manufactId:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("33");
            obj.set_value("0");
            obj.set_autoselect("true");
            obj.set_format("#,##9");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"35","22","20","sta_requestDate:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_finder");
            obj.set_tabstop("false");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","sta_manufactId:5","35",null,"20","btn_vendor:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("37");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDate","sta_requestDate:5","35",null,"20","5",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_qty","sta_qty:5","60",null,"20","sta_olb:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("30");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_olb","sta_olb:5","60",null,"20","sta_area:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("34");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"60","22","20","sta_dept:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_finder");
            obj.set_tabstop("false");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_area","sta_area:5","60",null,"20","btn_area:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("38");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Calendar("cal_deliveryDate","sta_deliveryDate:5","85",null,"20","sta_requestUser:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("39");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_dept","sta_dept:5","60",null,"20","5",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("41");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_requestUser","sta_requestUser:5","85",null,"20","5",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("42");
            obj.set_readonly("false");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_scalx","sta_scalx:5","85",null,"20","sta_netPnl:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("31");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_scaly","sta_scaly:5","110",null,"20","sta_requestComment:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("32");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new MaskEdit("edt_netPnl","sta_netPnl:5","85",null,"20","sta_deliveryDate:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("35");
            obj.set_value("0");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_requestComment","sta_requestComment:5","110",null,"20","5",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("36");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new TextArea("edt_description","sta_description:5","135",null,"38","5",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("28");
            obj.set_visible("true");
            obj.set_autoselect("true");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo_toolCategory","sta_toolCategory:5","60",null,"20","sta_qty:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("25");
            obj.set_type("filter");
            obj.set_autoselect("true");
            obj.set_text("");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo_form","tool_form:5","85",null,"20","sta_scalx:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("26");
            obj.set_type("filter");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Combo("cbo_toolKind","sta_toolkind:5","110",null,"20","sta_scaly:0",null,null,null,null,null,this.div_work.form.Div01_00.form);
            obj.set_taborder("27");
            obj.set_type("filter");
            obj.set_enable("true");
            obj.set_autoselect("true");
            obj.set_text("");
            this.div_work.form.Div01_00.addChild(obj.name, obj);

            obj = new Grid("grd_requestDetail","0","Div01_00:34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_requestDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"58\"/><Column size=\"52\"/><Column size=\"0\"/><Column size=\"115\"/><Column size=\"90\"/><Column size=\"35\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"115\"/><Column size=\"85\"/><Column size=\"0\"/><Column size=\"85\"/><Column size=\"0\"/><Column size=\"85\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"50\"/><Column size=\"61\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"제작구분\"/><Cell col=\"2\" text=\"의뢰순번\"/><Cell col=\"3\" text=\"IDX\"/><Cell col=\"4\" text=\"Tool 코드\" textAlign=\"center\"/><Cell col=\"5\" text=\"치공구 ID\" textAlign=\"center\"/><Cell col=\"6\" text=\"Ver.\"/><Cell col=\"7\" text=\"수주량\"/><Cell col=\"8\" text=\"Tool구분Id\"/><Cell col=\"9\" text=\"치공구명\"/><Cell col=\"10\" text=\"치공구 구분\"/><Cell col=\"11\" text=\"TOOL유형Id\"/><Cell col=\"12\" text=\"치공구 형식\"/><Cell col=\"13\" text=\"상세유형Id\"/><Cell col=\"14\" text=\"치공구 종류\"/><Cell col=\"15\" text=\"PRODUCTDEFID---HIDDEN\"/><Cell col=\"16\" text=\"ROWSTATUS---HIDDEN\"/><Cell col=\"17\" text=\"FILMUSELAYER1---HIDDEN\"/><Cell col=\"18\" text=\"USELAYER---HIDDEN\"/><Cell col=\"19\" text=\"FILMUSELAYER2---HIDDEN\"/><Cell col=\"20\" text=\"합수\"/><Cell col=\"21\" text=\"의뢰수량\"/><Cell col=\"22\" text=\"SCALEX\"/><Cell col=\"23\" text=\"SCALEY\"/><Cell col=\"24\" text=\"제작처\"/><Cell col=\"25\" text=\"작업장\"/><Cell col=\"26\" text=\"OLB도피\"/><Cell col=\"27\" text=\"NET_PNL\"/><Cell col=\"28\" text=\"REQUESTDATE\"/><Cell col=\"29\" text=\"REQUESTDEPARTMENT\"/><Cell col=\"30\" text=\"REQUESTUSER\"/><Cell col=\"31\" text=\"납기일자\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"32\" text=\"특이사항\"/><Cell col=\"33\" text=\"의뢰사유\"/><Cell col=\"34\" text=\"생산구분\"/><Cell col=\"35\" text=\"제작구분코드\"/><Cell col=\"36\" text=\"작업장명\"/><Cell col=\"37\" text=\"생산구분명\"/><Cell col=\"38\" text=\"LINENO\"/><Cell col=\"39\" text=\"발주번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:TOOLMAKETYPENAME\"/><Cell col=\"2\" text=\"bind:REQUESTSEQUENCE\"/><Cell col=\"3\" text=\"bind:REQUESTIDX\"/><Cell col=\"4\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLCODE\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOOLVERSION\"/><Cell col=\"7\" text=\"bind:QTY\"/><Cell col=\"8\" text=\"bind:TOOLCATEGORYID\"/><Cell col=\"9\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLCATEGORY\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLCATEGORYDETAILID\"/><Cell col=\"12\" text=\"bind:FORM\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:TOOLDETAILID\"/><Cell col=\"14\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"16\" text=\"bind:ROWSTATUS\"/><Cell col=\"17\" text=\"bind:FILMUSELAYER1\"/><Cell col=\"18\" text=\"bind:USELAYER\"/><Cell col=\"19\" text=\"bind:FILMUSELAYER2\"/><Cell col=\"20\" text=\"bind:SUMMARY\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:SCALEX\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:SCALEY\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:VENDORNAME\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:RECEIPTAREANAME\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:OLB\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:NETPNL\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:REQUESTDATE\"/><Cell col=\"29\" text=\"bind:REQUESTDEPARTMENT\"/><Cell col=\"30\" text=\"bind:REQUESTUSER\"/><Cell col=\"31\" text=\"bind:DELIVERYDATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"32\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:PRODUCTIONTYPE\"/><Cell col=\"35\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"36\" text=\"bind:RECEIPTAREANAME\"/><Cell col=\"37\" text=\"bind:PRODUCTIONTYPENAME\"/><Cell col=\"38\" text=\"bind:LINENO\" textAlign=\"left\"/><Cell col=\"39\" text=\"bind:ORDERNO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_request","0","34",null,null,"0","Div01_00:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_request");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"124\"/><Column size=\"0\"/><Column size=\"49\"/><Column size=\"0\"/><Column size=\"66\"/><Column size=\"91\"/><Column size=\"33\"/><Column size=\"229\"/><Column size=\"52\"/><Column size=\"76\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"61\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"진행상태\"/><Cell col=\"1\" text=\"의뢰일자\"/><Cell col=\"2\" text=\"의뢰일자8자리---HIDDEN\"/><Cell col=\"3\" text=\"의뢰순번\"/><Cell col=\"4\" text=\"제작구분---HIDDEN\"/><Cell col=\"5\" text=\"제작구분\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"Rev\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"의뢰수량\"/><Cell col=\"10\" text=\"납기일자\"/><Cell col=\"11\" text=\"승인사용\"/><Cell col=\"12\" text=\"의뢰자아이디---HIDDEN\"/><Cell col=\"13\" text=\"의뢰자\"/><Cell col=\"14\" text=\"의뢰부서명\"/><Cell col=\"15\" text=\"의뢰사유\" textAlign=\"center\"/><Cell col=\"16\" text=\"진행상태코드---HIDDEN\"/><Cell col=\"17\" text=\"진행상태코드---HIDDEN\"/><Cell col=\"18\" text=\"발주여부\"/></Band><Band id=\"body\"><Cell text=\"bind:TOOLPROGRESSSTATUSNAME\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:REQUESTDATE2\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REQUESTDATE\" textAlign=\"center\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLMAKETYPE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLMAKETYPENAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:REQUESTQTY\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:DELIVERYDATE\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ISAPPROVALUSE\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:REQUESTUSER\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:REQUESTUSERNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:REQUESTDEPARTMENT\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:REQUESTCOMMENT\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:TOOLPROGRESSSTATUS\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:APPROVALNO\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:ORDERYNNAME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","0","Div01_00:0","85","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("치공구 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title00","0","grd_request:0","84","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("치공구 의뢰");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_append",null,"grd_request:6","46","24","43",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("추가");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"Div01_00:6","26","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_toolSelect",null,"Div01_00:6","88","24","btn_grdDel:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("치공구 선택");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","178","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("치공구 제작/수정 의뢰 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_request","title0:13","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_requestDetail","89","Div01_00:0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_reset2",null,"grd_request:5","26","24","8",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","6",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","37",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","99",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("치공구 제작 의뢰");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_03",null,"16","84","24","btn_save:13",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("수신자 확인");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_orderCancel",null,"16","68","24","btn_03:6",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("발주취소");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_order",null,"16","44","24","btn_orderCancel:6",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("발주");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_requestPrint",null,"16","56","24","btn_order:6",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("의뢰서");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","67",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            obj.set_enable("true");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.Div01_00.form.edt_productId","value","ds_requestDetailRow","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.Div01_00.form.edt_productVer","value","ds_requestDetailRow","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.Div01_00.form.edt_productName","value","ds_requestDetailRow","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.Div01_00.form.edt_productionType","value","ds_requestDetailRow","PRODUCTIONTYPENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.Div01_00.form.edt_jobType","value","ds_requestDetailRow","JOBTYPENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.Div01_00.form.edt_qty","value","ds_requestDetailRow","QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.Div01_00.form.edt_summary","value","ds_requestDetailRow","SUMMARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.Div01_00.form.edt_scalx","value","ds_requestDetailRow","SCALEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.Div01_00.form.edt_scaly","value","ds_requestDetailRow","SCALEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.Div01_00.form.edt_orderQty","value","ds_requestDetailRow","ORDERQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.Div01_00.form.edt_olb","value","ds_requestDetailRow","OLB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.Div01_00.form.edt_netPnl","value","ds_requestDetailRow","NETPNL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.Div01_00.form.edt_vendor","value","ds_requestDetailRow","VENDORNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.Div01_00.form.edt_area","value","ds_requestDetailRow","RECEIPTAREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.Div01_00.form.edt_dept","value","ds_requestDetailRow","REQUESTDEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.Div01_00.form.cal_deliveryDate","value","ds_requestDetailRow","DELIVERYDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.form.Div01_00.form.cal_requestDate","value","ds_requestDetailRow","REQUESTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work.form.Div01_00.form.edt_requestUser","value","ds_requestDetailRow","REQUESTUSERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work.form.Div01_00.form.edt_requestComment","value","ds_requestDetailRow","REQUESTCOMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.form.Div01_00.form.edt_description","value","ds_requestDetailRow","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.form.Div01_00.form.cbo_toolMakeType","value","ds_requestDetailRow","TOOLMAKETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.Div01_00.form.cbo_toolCategory","value","ds_requestDetailRow","TOOLCATEGORYID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.Div01_00.form.cbo_form","value","ds_requestDetailRow","FORMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.Div01_00.form.cbo_toolKind","value","ds_requestDetailRow","TOOLKINDID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_search.Tabpage1.form.edt_areaId","value","ds_requestDetailRow","RECEIPTAREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_search.Tabpage1.form.edt_venderId","value","ds_requestDetailRow","VENDORID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_search.Tabpage1.form.edt_lineNo","value","ds_requestDetailRow","LINENO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00100M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00100M.xfdl", function() {
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

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.detailDiv = this.div_work.form.Div01_00.form; //상세화면 영역
        this.btnDiv = this.div_work.form; //추가버튼,Toll선택버튼 영역
        this.headerDiv = this.div_header.form; //저장영역

        this.requestorId = ''; //의뢰자Id(조회조건)

        //그리드에서 크릭한건의 제작구분을 저장한다. 상세 입력화면의 필수입력 및 Enable처리
        this.toolMakeType = '';

        //저장버튼 클릭시 저장유형 설정 :
        //0:(Clear상태),
        //1:(상세 수정 상태:수정저장가능),
        //2:click 이후 해당건 추가기능으로 grid에 추가한 상태 ----> 상세기능 저장시 데이터셋 복사는 제외 한다.
        //-1:(상세 편집불가 상태:저장시 복사Skip),
        //9:Reset New 상태(의뢰순번 별도 채번)
        this.trFlag = 0;

        //저장전 마스터의 위치를 저장한다, 저장후에 위치 복원에 사용
        this.oldRequestDate = '';
        this.oldRequestSequence = '';
        this.oldToolCode = '';
        this.oldToolVersion = '';

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        //공통팝업:검색키구별값
        this.productKeyType = '1'; //1:조회조건-품목, 2:상세-품목

        //아래Grid의 클릭이후 상세페이지 변경값 적용 변수
        this.underEditFlag = false;
        this.lineNo = 100;

        //상단그리드 클릭시 하단Grid 수정데이터 존재시 Alert 관련 변수
        this.oldRequestPos = 0;

        //20210423:상단Grid를 선택해서 의뢰를 하는경우와 RESET버튼을 통한 입력을 구분하는 변수선언
        this.dateSect = '2'; //1:GRID, 2:RESET
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();

        	//작업구분 : C,JobType,ALL,Y,Y
        	//생산구분 : C,ProductionType,ALL,Y,Y
        	//유형 : C,DurableClass,SEL,Y,Y
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (상단 현황 조회)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_request.clearData();
        	this.ds_requestDetail.clearData();
        	this.ds_requestDetailRow.clearData();

        	this.ds_search.clearData();

        	//의뢰자명이 공백이면 의뢰자Id 공백 처리
        	if(this.searchDiv.edt_requestor.value=='') {
        		this.requestorId = '';
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));	//Site코드
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.searchDiv.edt_product.value, "")); //품목ID
        	this.ds_search.setColumn(0, "PRODUCTDEFVER", 			this.nfn_nvl(this.searchDiv.edt_productRev.value, "")); //품목Ver
        	this.ds_search.setColumn(0, "PRODUCTDEFNAME", 			this.nfn_nvl(this.searchDiv.edt_productName.value, "")); //품목명
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_REQUESTDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "P_TOOLREGISTTYPE", 		this.nfn_nvl(this.searchDiv.cbo_toolRegistType.value, "")); //내역 등록여부
        	this.ds_search.setColumn(0, "P_REQUESTORID", 			this.nfn_nvl(this.requestorId, "")); //의뢰자ID
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolRequest");

        	this.ds_search.setColumn(0, "P_ORDERNO", 				this.nfn_nvl(this.searchDiv.edt_orderno.value, "")); //발주번호

        	var sSvcID 			= "selectToolRequest";
        	var sController 	= "/tom00100/selectToolRequest.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_request=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (하단 툴정보 조회)
         */
        this.fn_detailSearch = function ()
        {
        	this.ds_requestDetail.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE")));
        	this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE")));
        	this.ds_search.setColumn(0, "P_TOOLMAKETYPE", 			this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLMAKETYPE"))); //제작구분
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolDetail");

        	this.ds_search.setColumn(0, "P_ORDERNO", 				this.nfn_nvl(this.searchDiv.edt_orderno.value, "")); //발주번호

        	var sSvcID 			= "selectToolDetail";
        	var sController 	= "/tom00100/selectToolDetail.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_requestDetail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세 화면 Setter (하단 tool정보 click이벤트에서만 옴)
         */
        this.fn_detailInfo = function ()
        {
        	this.ds_requestDetailRow.clearData();
        	var iRow = this.ds_requestDetailRow.addRow(); //append row
        	var sRow = this.ds_requestDetail.rowposition; //detail currently row

        	var toolCategory = this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLCATEGORYID"); //Tool구분ID
        	var toolForm = this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "FORMID"); //Tool유형ID
        	this.fn_initToolCategoryDetailCombo2(toolCategory); //TOOL유형을 H/L 변경 한다.
        	this.fn_initToolDetailCombo(toolCategory, toolForm); //TOOL종류를 H/L 변경 한다.

        	this.ds_requestDetailRow.copyRow(iRow, this.ds_requestDetail, sRow);  //(임시dataset으로 복사 한다.)
        	//-----------------------------------------------------------------------------
        	this.ds_requestDetailRow.set_updatecontrol(false); //설정 : 변경없음으로 설정
        	var bSucc = this.ds_requestDetailRow.setRowType(iRow, Dataset.ROWTYPE_NORMAL);
        	this.ds_requestDetailRow.set_updatecontrol(true); //복원
        	//------------------------------------------------------------------------------
        	this.toolMakeType = this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLMAKETYPE"); //detail의 제작구분 세팅
        	this.fn_requierEnableCheck();
        	this.trFlag = 1; //1:(상세 수정 상태:수정저장가능)

        	//내역등록상태는 수정불가 처리
        	var toolProgressStatus = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLPROGRESSSTATUS")); //현재Row의 결재진행상태
        	if(toolProgressStatus == 'DetailRegist'){
        		this.fn_editLock(false); //내역등록상태일경우 DETAIL 상세 모두 비활성화
        		//
        		this.btnDiv.btn_append.set_enable(false);
        		this.btnDiv.btn_toolSelect.set_enable(false);
        		this.btnDiv.btn_grdDel.set_enable(false);
        	}else{
        		this.detailDiv.btn_vendor.set_enable(true);
        		this.detailDiv.btn_area.set_enable(true);
        		//
        		this.btnDiv.btn_append.set_enable(true);
        		this.btnDiv.btn_toolSelect.set_enable(true);
        		this.btnDiv.btn_grdDel.set_enable(true);
        		//20210421수정사항:세부사항수정반영(tool선택 처리시 100이상 값으로 적용 grid에 미존재 할수도 있다. grid변경 무효화 된다. 수정액션을 통한 수정만 grid에 반영 한다.)
        		this.searchDiv.edt_lineNo.value = this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "LINENO");
        		this.underEditFlag = true;
        	}

        	//20210408수정사항:세부사항클릭시 품목정보 편집불가 처리
        	this.detailDiv.edt_productId.set_enable(false);
        	this.detailDiv.edt_productVer.set_enable(false);
        	this.detailDiv.btn_product2.set_enable(false);
        	this.detailDiv.edt_productName.set_enable(false);
        	this.detailDiv.edt_jobType.set_enable(false);
        	this.detailDiv.edt_productionType.set_enable(false);
        	this.detailDiv.cbo_toolMakeType.set_enable(false); //20210421:클릭시 제작구분도 비활성화
        };

        /*
         * 기능 : 저장
         * 결재진행상태 : [Create]:등록,[DetailRegist]:내역등록,[Request]:결재요청,[Approval]:결재승인 <- (SELECT * FROM CMD_LOOKUP_VALUES WHERE LOOKUP_TYPE = 'ToolProgressStatus')
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_requestDetail) &&
        	   !this.gfn_dsIsUpdated(this.ds_requestDetailRow)
        	   ){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//alert(this.tomfn_getDeptCd()+"/"+this.tomfn_getDeptNm()+"/"+this.trFlag);

        	//2. 필수입력 체크 (상세 입력 화면 : 1일경우만 detail 수정(저장가능) 상태이다.)
        	if(this.trFlag==1){
        		if(this.fn_MandatoryCheck()){
        			this.fn_updateRow(); //의뢰내역Dataset copy
        		}else{
        			return;
        		}
        	}else{
        		//alert('Dataset copy skip :: TR Flag :: '+this.trFlag);
        	}

        	//Save master pos
        	this.oldRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE"); //상단 저장위치
        	this.oldRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");
        	this.oldToolCode = this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLCODE"); //하단 저장위치
        	this.oldToolVersion = this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLVERSION");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveToolGrid";
        	var sController 	= "/tom00100/saveToolGrid.do";
        	var sInDatasets 	= "INPUT=ds_request:U INPUT_DET=ds_requestDetail:U INPUT_DET2=ds_requestDetail:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 추가
         */
        this.fn_append = function (obj, e)
        {
        	//0. 의뢰수량은 100개 이하로 설정Alert(변경가능성 존재)
        	var tempQty = this.detailDiv.edt_qty.value; //입력된 의뢰수량
        	if(tempQty==0){
        		alert('의뢰수량을 입력 바랍니다.');
        		return;
        	}
        	if(tempQty>100){
        		alert('의뢰수량은 100개 이하로 입력후 추가 바랍니다.(추후 변경 가능성 존재)');
        		return;
        	}

        	//0. 제작구분별 필수입력 체크
        	if(!this.fn_MandatoryCheck()){
        		return;
        	}

        	var tempToolMakeType = this.detailDiv.cbo_toolMakeType.value; //선택된 제작구분 세팅

        	//1. 중복건 체크
        	//if(tempToolMakeType == 'New' || tempToolMakeType == 'Add' || tempToolMakeType=="Repair" || tempToolMakeType=="Modify"){ //증작/수리/수정의 경우는 중복 체크 한다.
        		//치공구ID = TOOL코드+제품코드+tool종류
        		var tempToolCategory = this.detailDiv.cbo_toolCategory.value;
        		var tempProductId = this.detailDiv.edt_productId.value; //제품코드뒷2자리는제거하고 TOOLID를 만들어서 존재여부 파악 한다.
        		var lenTempProductId = tempProductId.length;
        		tempProductId = tempProductId.substring(0,lenTempProductId-2);
        		var tempToolKind = this.detailDiv.cbo_toolKind.value;
        		var tempToolId = tempToolCategory + tempProductId + tempToolKind;
        		var tempToolName = this.detailDiv.cbo_toolCategory.text + '_' + this.detailDiv.edt_productName.value + '-' + this.detailDiv.cbo_toolKind.text;

        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLCODE", tempToolId);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLNAME", tempToolName);

        		//alert("TOOLID :: "+this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLCODE")+'/'+this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLVERSION")));

        		//의뢰IDX를 구한다.
        		var idx = 0;

        		if(tempToolMakeType == 'New'){ //신규이면 TOOLCODE만 중복체크
        			var chkCnt = this.ds_requestDetail.getCaseCount("TOOLCODE=='" + this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLCODE")) +"'");
        			if (chkCnt>0)
        			{
        				this.gfn_Message("AleadyToolAppended", "", "warning", "ok"); //이미 추가된 TOOL 입니다. (신규)
        				return;
        			}
        			idx = 1;
        		}else if(tempToolMakeType == 'Add'){ //증작이면 TOOLCODE + VER 2개 체크 한다.
        			var chkCnt = this.ds_requestDetail.getCaseCount("TOOLCODE=='" + this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLCODE")) +"' && TOOLVERSION=='" +this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLVERSION"))+"'");
        			if (chkCnt>0)
        			{
        				this.gfn_Message("AleadyToolAppended", "", "warning", "ok"); //이미 추가된 TOOL 입니다. (증작)
        				return;
        			}
        			idx = 1;
        		}else{ //그외(수정/수리)는 TOOLNUMBER만 체크 한다.
        			var chkCnt = this.ds_requestDetail.getCaseCount("TOOLNUMBER=='" + this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLNUMBER"))+"'");
        			if (chkCnt>0){
        				this.gfn_Message("AleadyToolAppended", "", "warning", "ok"); //이미 추가된 TOOL 입니다. (수리/수정)
        				return;
        			}else{
        				//--------------------------------------------------------------------------------------------------------------------------
        				var tempToolcode1 = this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLCODE"));
        				var tempToolversion1 = this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLVERSION"));
        				//--------------------------------------------------------------------------------------------------------------------------
        				var tempIdx = 0;
        				for(var k=0; k<this.ds_requestDetail.rowcount; k++){
        					//--------------------------------------------------------------------------------------------------------------------------
        					tempToolcode2 = this.nfn_nvl(this.ds_requestDetail.getColumn(k, "TOOLCODE"));
        					tempToolversion2 = this.nfn_nvl(this.ds_requestDetail.getColumn(k, "TOOLVERSION"));
        					//--------------------------------------------------------------------------------------------------------------------------
        					tempIdx = Number(this.nfn_nvl(this.ds_requestDetail.getColumn(k, "REQUESTIDX"), 1));
        					if(tempToolcode1==tempToolcode2 && tempToolversion1==tempToolversion2){ //TOOL코드+버젼이 같으면 최대 IDX인지 계속 확인 한다.
        						if(idx<tempIdx){
        							idx = tempIdx;
        						}
        					}
        				}
        				idx = idx + 1; //의뢰IDX를 1 증가해서 Append 한다.
        			}
        		}
        	//}

        	//2. 변경데이터 확인
        	if(!this.gfn_dsIsUpdated(this.ds_requestDetailRow)){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//3. 툴정보(하단)에 복사
        	var iRow = this.ds_requestDetail.addRow(); //append row
        	var sRow = this.ds_requestDetailRow.rowposition; //치공구 의뢰 상세 입력화면 row
        	this.ds_requestDetail.copyRow(iRow, this.ds_requestDetailRow, sRow);  //(툴정보dataset으로 복사 한다.)
        	//=======================================================================================================================================
        	if(tempToolMakeType == 'New'){
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "TOOLVERSION", "");
        	}else{
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "TOOLVERSION", this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "TOOLVERSION")));
        	}
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"CHK",					"0");
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"ENTERPRISEID", 			this.gf_getEnterpriseId());
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"PLANTID", 				this.searchDiv.cbo_siteId.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLPROGRESSSTATUS", 	"Create");
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	if(this.detailDiv.cal_requestDate.value==''){
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTDATE",		this.tomfn_getCurrentlyDate("YYYY-MM-DD")); //의뢰일자 없으면 금일 세팅
        	}else{
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTDATE",		this.detailDiv.cal_requestDate.value); //의뢰일자
        	}
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"QTY",					this.detailDiv.edt_qty.value); //의뢰수량
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLCATEGORYID",			this.detailDiv.cbo_toolCategory.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLCATEGORY",			this.detailDiv.cbo_toolCategory.text); //TOOL구분명
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"FORMID",					this.detailDiv.cbo_form.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"FORM",					this.detailDiv.cbo_form.text); //TOOL형식명
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLKINDID",				this.detailDiv.cbo_toolKind.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLKIND",				this.detailDiv.cbo_toolKind.text); //TOOL종류명
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"VENDORID",				this.searchDiv.edt_venderId.value); //제작처Id
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"RECEIPTAREAID",			this.searchDiv.edt_areaId.value); //작업장Id
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"PRODUCTDEFID",			this.detailDiv.edt_productId.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"PRODUCTDEFVERSION",		this.detailDiv.edt_productVer.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"DESCRIPTION",			this.detailDiv.edt_description.value); //**************특이사항(설명)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"SUMMARY",				this.detailDiv.edt_summary.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"SCALEX",					this.detailDiv.edt_scalx.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"SCALEY",					this.detailDiv.edt_scaly.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"VENDORID",				this.searchDiv.edt_venderId.value); //제작처(HIDDEN)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"RECEIPTAREAID",			this.searchDiv.edt_areaId.value); //작업장(HIDDEN)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTDEPARTMENT",		this.tomfn_getDeptNm()); //의뢰부서 (신규시 저장됨)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTUSER",			this.tomfn_getUserId()); //의뢰자 (신규시 저장됨)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTUSERNAME", 		this.tomfn_getUserNm()); //의뢰자명
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"DELIVERYDATE",			this.detailDiv.cal_deliveryDate.value); //납기일자
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTCOMMENT",			this.detailDiv.edt_requestComment.value); //**************의뢰사유
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"OLB",					this.detailDiv.edt_olb.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"NETPNL",					this.detailDiv.edt_netPnl.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLMAKETYPE",			this.detailDiv.cbo_toolMakeType.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"ORDERQTY",				this.detailDiv.edt_orderQty.value); //수주량
        	//=======================================================================================================================================
        	var seq = 0;
        	if(this.trFlag==9){
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLMAKETYPE",		this.detailDiv.cbo_toolMakeType.value);
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLMAKETYPENAME",	this.detailDiv.cbo_toolMakeType.text);
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTSEQUENCE",	seq); //서버에서 일련번호 채번 한다.
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"ROWFLAG",			"9"); //그리드에서 클릭시 9 이면 클릭액션 무효화 처리 한다.
        	}else{
        		if (this.ds_request.rowcount > 0) {
        			seq = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");
        		}
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTSEQUENCE",	seq);
        	}
        	//=======================================================================================================================================
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTIDX",	idx); //의뢰IDX를 세팅 한다.
        	//=======================================================================================================================================
        	if(this.trFlag<9){
        		this.trFlag = 2; //추가 작업후 계속 작업
        	}
        	//=======================================================================================================================================
        	var toolName2 = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLNAME"),"");
        	if(toolName2==""){ //치공구명이 비어있으면 만들어서 DETAIL에 추가 한다.
        		toolName2 = this.detailDiv.cbo_toolCategory.value+"_"+
        					this.detailDiv.edt_productName.value+"_"+
        					this.detailDiv.cbo_toolKind.text;
        		this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLNAME",			toolName2);
        	}
        	//=======================================================================================================================================
        	//alert(this.trFlag+'/의뢰순번:'+seq+'/제작구분:'+this.detailDiv.cbo_toolMakeType.value+"/"+this.detailDiv.cbo_toolMakeType.text);
        	//this.toolMakeType = ''; //검색이므로 초기화 한다.
        	//this.fn_requierEnableCheck(); //Requier/Enable init.
        	//=======================================================================================================================================
        	this.detailDiv.cbo_toolMakeType.set_enable(false); //[267]추가 작업후 제작구분 수정 불가
        	//=======================================================================================================================================
        	this.gfn_Message("APPENDED", "", "warning", "ok"); //추가되었습니다.
        };

        /*
         * 기능 : 삭제 (상단)
         */
        this.fn_delete = function (obj, e)
        {
        	//1. 상태 확인
        	var toolProgressStatus = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS")); //현재Row의 결재진행상태
        	if(toolProgressStatus == 'DetailRegist'){
        		this.gfn_Message("ValidateTooRequestStatusRegistAndApproval", "", "warning", "ok"); //내역등록 상태 에서는 데이터를 수정할 수 없습니다.
        		return;
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "REQUESTDATE", 				this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE")));
        	this.ds_search.setColumn(0, "REQUESTSEQUENCE", 			this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE")));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectToolDetail");

        	var sSvcID 			= "deleteRequest";
        	var sController 	= "/tom00100/deleteRequest.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_request=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제 (하단)
         */
        this.fn_delete_detail = function (obj, e)
        {
        	//1. 상태 확인
        	var toolProgressStatus = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLPROGRESSSTATUS")); //현재Row의 결재진행상태
        	if(toolProgressStatus == 'DetailRegist'){
        		this.gfn_Message("ValidateTooRequestStatusRegistAndApproval", "", "warning", "ok"); //내역등록 상태 에서는 데이터를 수정할 수 없습니다.
        		return;
        	}

        	this.basfn_deleteRow(this.ds_requestDetail, null, "IsDeleted");

        	this.fn_detailInfo();
        	//this.toolMakeType = ''; //검색이므로 초기화 한다.
        	//this.fn_requierEnableCheck(); //Requier/Enable init.

        	//2021-04-27 : 삭제후, 0 건이면 reset
        	if (this.ds_requestDetail.rowcount == 0) {
        		this.fn_deleteInit();
        	}
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
        		case "selectToolRequest":
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
        				this.fn_detailSearch();
        			}else{
        				//데이터가 존재하지 않으면 상세영역은 초기화 상태로 만든다.
        				this.toolMakeType = ''; //검색이므로 초기화 한다.
        				this.fn_requierEnableCheck(); //Requier/Enable init.
        			}
        			this.orderBtnControl(); //조회시 발주/발주취소 버튼 처리
        			break;
        		case "selectDurableClassIDByToolList":
        			break;
        		case "selectToolDetail":
        			if (this.ds_requestDetail.rowcount > 0)
        			{
        				//하단도 저장후 위치 복원:20210409/PHW
        				if(this.oldToolCode != '' && this.oldToolVersion != ''){//save pos restore
        					var restorePos = this.ds_requestDetail.findRowExpr("TOOLCODE=='" + this.oldToolCode + "' && TOOLVERSION=='" + this.oldToolVersion + "'");
        					this.ds_requestDetail.set_rowposition(restorePos);
        					this.oldToolCode  = "";
        					this.oldToolVersion  = "";
        				}else{
        					this.ds_requestDetail.set_rowposition(0);
        				}
        				this.fn_detailInfo(); //하단 의뢰내역의 첫번째 row의 상세내용을 출력 한다.
        			}else{
        				//데이터가 존재하지 않으면 상세영역은 초기화 상태로 만든다.
        				this.toolMakeType = ''; //검색이므로 초기화 한다.
        				this.fn_requierEnableCheck(); //Requier/Enable init.
        			}
        			//제작구분에 따라 치공구코드/치공구ID 컬럼 스위칭 보여주자
        			var tempToolMakeType = this.ds_request.getColumn(this.ds_request.rowposition, "TOOLMAKETYPE"); //제작구분
        			var pos1 = this.btnDiv.grd_requestDetail.getBindCellIndex("body","TOOLNUMBER");
        			var pos2 = this.btnDiv.grd_requestDetail.getBindCellIndex("body","TOOLCODE");
        			if(tempToolMakeType=='Repair' || tempToolMakeType=='Modify'){
        				this.btnDiv.grd_requestDetail.setFormatColProperty(pos1, "size", 115);
        				this.btnDiv.grd_requestDetail.setFormatColProperty(pos2, "size", 0);
        			}else{//신규 or 증작의 경우는 tool code를 보여 준다.
        				this.btnDiv.grd_requestDetail.setFormatColProperty(pos1, "size", 0);
        				this.btnDiv.grd_requestDetail.setFormatColProperty(pos2, "size", 90);
        			}
        			break;
        		case "saveToolGrid":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		case "deleteRequest":
        			this.gfn_Message("SuccessDelete", null, "info", "ok"); //삭제작업이 완료되었습니다.
        			this.fn_search();
        			break;
        		default:
        	}
        };

        //TOOL구분 Callback
        this.fn_callBack_L1 = function (trId, errCD, errMsg)
        {
        	var toolCategory = this.nfn_nvl(this.detailDiv.cbo_toolCategory.value, ""); //Tool구분값
        	this.fn_initToolCategoryDetailCombo(toolCategory); //Tool형식 콤보(상세내역)
        }

        this.fn_callBack_L2 = function (trId, errCD, errMsg)
        {
        	var toolCategory = this.nfn_nvl(this.detailDiv.cbo_toolCategory.value, ""); //Tool구분값
        	var toolForm = this.nfn_nvl(this.detailDiv.cbo_form.value, ""); //Tool형식값
        	this.fn_initToolDetailCombo(toolCategory, toolForm); //Tool종류(상세내역)
        }


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
        		if(this.productKeyType=='2'){
        			oArg.arg_searchStr = "PRODUCTDEFID="+this.nfn_nvl(this.searchDiv.edt_product.value, "");//조회조건의 품목명 엔터
        		}else if(this.productKeyType=='1'){
        			oArg.arg_searchStr = "PRODUCTDEFID="+this.nfn_nvl(this.detailDiv.edt_productId.value, "");//상세화면의 품목명 엔터
        		}
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION|PRODUCTIONTYPENAME|JOBTYPENAME";
        	}else if(popId=="P00115"){ //외주작업장 조회
        		oArg.arg_searchStr = "P_AREANAME="+this.detailDiv.edt_area.value;
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.detailDiv.edt_vendor.value;
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
        	}else if(popId=="P00194"){ //의뢰자 조회
        		oArg.arg_searchStr = "USERNAME="+this.searchDiv.edt_requestor.value;
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
        		this.searchDiv.edt_product.set_value(rtn[0]);
        		this.searchDiv.edt_productRev.set_value(rtn[2]);
        		this.searchDiv.edt_productName.set_value(rtn[1]);
        	}else if(sPopupId == "SCH_PRODUCT2")
        	{
        		this.detailDiv.edt_productId.set_value(rtn[0]);
        		this.detailDiv.edt_productVer.set_value(rtn[2]);
        		this.detailDiv.edt_productName.set_value(rtn[1]);
        		this.detailDiv.edt_productionType.set_value(rtn[3]);
        		this.detailDiv.edt_jobType.set_value(rtn[4]);
        	}else if(sPopupId == "SCH_AREA")
        	{
        		this.detailDiv.edt_area.set_value(rtn[1]);
        		this.searchDiv.edt_areaId.set_value(rtn[0]); //HIDDEN 필드
        	}else if(sPopupId == "SCH_VENDOR")
        	{
        		this.detailDiv.edt_vendor.set_value(rtn[1]);
        		this.searchDiv.edt_venderId.set_value(rtn[0]); //HIDDEN 필드
        	}else if(sPopupId == "SCH_USERS")
        	{
        		this.searchDiv.edt_requestor.set_value(rtn[1]);
        		this.requestorId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_TOOLSELECT_POP") //툴선택으로부터 데이터 LOAD 처리
        	{
        		var oldUnderEditFlag = this.underEditFlag;
        		this.underEditFlag = false; //시작시 변경이벤트 무력화

        		var rtnArr = rtn.split('^');
        		if (this.ds_requestDetailRow.rowcount==0)//초기화를 통한 상세화면은 데이터셋이 없으므로 추가한다.
        		{
        			this.ds_requestDetailRow.addRow();
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "CHK", "0");
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "ENTERPRISEID", this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "PLANTID", this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        		}

        		//alert("[remote : 제작처 : "+rtnArr[9]+"/"+rtnArr[10]+"/작업장 : "+rtnArr[7]+"/"+rtnArr[8]+"/납기일자 : "+rtnArr[15]);
        		this.fn_initToolCategoryDetailCombo2(rtnArr[3]); //TOOL유형을 H/L 변경 한다.
        		this.fn_initToolDetailCombo(rtnArr[3], rtnArr[4]); //TOOL종류를 H/L 변경 한다.
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "PRODUCTDEFID", rtnArr[0]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "PRODUCTDEFVERSION", rtnArr[1]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "PRODUCTDEFNAME", rtnArr[2]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "TOOLCATEGORYID", rtnArr[3]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "FORMID", rtnArr[4]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "TOOLKINDID", rtnArr[5]);

        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTSEQUENCE", rtnArr[6]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "RECEIPTAREAID", rtnArr[7]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "RECEIPTAREANAME", rtnArr[8]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "VENDORID", rtnArr[9]);

        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "VENDORNAME", rtnArr[10]);
        		var tempToolMakeType = this.detailDiv.cbo_toolMakeType.value;
        		if(tempToolMakeType=="Repair" || tempToolMakeType=="Modify"){ //수리/수정의 경우 의뢰수량 1 로 세팅
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "QTY", "1");
        		}else{
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "QTY", rtnArr[11]);
        		}
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "ORDERQTY", rtnArr[12]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "OLB", rtnArr[13]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "NETPNL", rtnArr[14]);

        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "DELIVERYDATE", rtnArr[15]);
        		//this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTCOMMENT", this.nfn_nvl(rtnArr[16])); //의뢰사유
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTCOMMENT", ""); //의뢰사유
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "DESCRIPTION", ""); //특이사항
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "SUMMARY", rtnArr[17]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "SCALEX", rtnArr[18]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "SCALEY", rtnArr[19]);
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "TOOLCODE", rtnArr[20]); //TOOLCODE

        		if(tempToolMakeType=="Add" || tempToolMakeType=="Repair" || tempToolMakeType=="Modify"){
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "TOOLVERSION", rtnArr[21]); //TOOLVERSION
        		}

        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "TOOLNAME", rtnArr[22]); //TOOLNAME
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "TOOLNUMBER", this.nfn_nvl(rtnArr[23])); //TOOLNUMBER (수리의 경우 LOT번호 필요)

        		//의뢰일,의뢰부서,의뢰자
        		if(this.dateSect=='1'){
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTDATE", this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE")));
        		}else{
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTDATE", this.tomfn_getCurrentlyDate("YYYY-MM-DD"));
        		}
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTDEPARTMENT", this.tomfn_getDeptNm());
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTUSER", this.tomfn_getUserId());
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "REQUESTUSERNAME", this.tomfn_getUserNm());

        		if(tempToolMakeType=="Add"){ //증작시 의뢰수량 0 으로 초기화
        			this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "QTY", "0");
        		}

        		//TOOL선택으로 상세영역 채워지면 LINENO값 사용/증가 처리 한다.
        		this.searchDiv.edt_lineNo.value = this.lineNo+"";
        		this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition, "LINENO", this.lineNo+"");
        		this.lineNo = this.lineNo + 1;
        		this.underEditFlag = oldUnderEditFlag; //원래값으로 복원

        		this.detailDiv.cbo_form.set_enable(false);
        		this.detailDiv.cbo_toolKind.set_enable(false);

        	}else if(sPopupId == "orderForm"){
        	}else if(sPopupId == "emailOrder"){
        		this.fn_saveRequestRowPos(); //request row pos save
        		this.fn_search();
        	}else if(sPopupId == "emailOrderCancel"){
        		this.fn_saveRequestRowPos(); //request row pos save
        		this.fn_search();
        	}else if(sPopupId == "emailReceiverConfirm"){
        	}
        }

        this.fn_saveRequestRowPos = function ()
        {
        	//Save master pos
        	this.oldRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	this.oldRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");
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

        	this.fn_initToolCategoryCombo(); //Tool구분 콤보(상세내역)

        	this.toolMakeType = '';
        	this.fn_requierEnableCheck(); //Requier/Enable init.

        	//x이벤트
        	this.detailDiv.btn_edt_productId.addEventHandler("onclick", this.fn_detailProductIdXbtn, this);
        }

        //this.tab_search.Tabpage1.form.btn_edt_productdefid.addEventHandler(     "onclick", this.tab_search.Tabpage1.form.btn_edt_onclick, this);
        this.fn_detailProductIdXbtn = function ()
        {
        	this.detailDiv.edt_productId.set_value('');
        	this.detailDiv.edt_productVer.set_value('');
        	this.detailDiv.edt_productName.set_value('');
        	this.detailDiv.edt_jobType.set_value('');
        	this.detailDiv.edt_productionType.set_value('');
        }

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
         * 기능 : 'TOOL구분' 콤보 조회
         */
        this.fn_initToolCategoryCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("DURABLECLASSTYPE", "Tool");
        	sArgs += this.gfn_setParam("PLANTID", 			this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.detailDiv.cbo_toolCategory // Object
        								, "selectDurableClassIDByToolList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_L1"); //콜백함수 지정
        }

        /*
         * 기능 : 'TOOL유형' 콤보 조회
         */
        this.fn_initToolCategoryDetailCombo = function (toolCategory)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("DURABLECLASSID", 	toolCategory);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.detailDiv.cbo_form // Object
        								, "selectCodeClassIDListByToolList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack_L2"); //콜백함수 지정
        }

        //=====================================================================================================
        //콜백을 통하지 않고 바로 호출 할때 사용 한다.
        this.fn_initToolCategoryDetailCombo2 = function (toolCategory)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("DURABLECLASSID", 	toolCategory);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.detailDiv.cbo_form // Object
        								, "selectCodeClassIDListByToolList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }
        //=====================================================================================================

        /*
         * 기능 : 'TOOL종류' 콤보 조회
         *			GetToolFormMoldToolKind
         */
        this.fn_initToolDetailCombo = function (toolCategory, toolForm)
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	sArgs += this.gfn_setParam("DURABLECLASSID", 	toolCategory);
        	sArgs += this.gfn_setParam("FORMID", 			toolForm);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.detailDiv.cbo_toolKind // Object
        								, "selectDetailListByToolList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 화면 초기화 처리(조회조건 초기화 버튼 클릭시 실행)
         */
        this.fn_initReClear = function ()
        {
        	this.ds_request.clearData();
        	this.ds_requestDetail.clearData();
        	this.ds_requestDetailRow.clearData();

        	this.toolMakeType = '';
        	this.fn_requierEnableCheck();

        	this.trFlag = 0; //초기상태
        }

        this.fn_requierEnableCheck = function ()
        {
        	//노랑색 class : point
        	//Add:증작, Modify(수정), New(신규), Repair(수리)
        	if(this.toolMakeType=='New'){ //신규
        		this.detailDiv.edt_productId.set_cssclass('point'); 		this.detailDiv.edt_productId.set_enable(true);
        		this.detailDiv.edt_productVer.set_cssclass(''); 			this.detailDiv.edt_productVer.set_enable(false);
        		this.detailDiv.edt_productName.set_cssclass(''); 			this.detailDiv.edt_productName.set_enable(false);
        		this.detailDiv.edt_jobType.set_cssclass(''); 				this.detailDiv.edt_jobType.set_enable(false);
        		this.detailDiv.edt_productionType.set_cssclass(''); 		this.detailDiv.edt_productionType.set_enable(false); //1st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolMakeType.set_cssclass(''); 			this.detailDiv.cbo_toolMakeType.set_enable(true);
        		this.detailDiv.edt_summary.set_cssclass('point'); 			this.detailDiv.edt_summary.set_enable(true);
        		this.detailDiv.edt_orderQty.set_cssclass(''); 				this.detailDiv.edt_orderQty.set_enable(true);
        		this.detailDiv.edt_vendor.set_cssclass('point'); 			this.detailDiv.edt_vendor.set_enable(true);
        		this.detailDiv.cal_requestDate.set_cssclass(''); 			this.detailDiv.cal_requestDate.set_enable(false); //2st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolCategory.set_cssclass('point'); 		this.detailDiv.cbo_toolCategory.set_enable(true);
        		this.detailDiv.edt_qty.set_cssclass('point'); 				this.detailDiv.edt_qty.set_enable(true);
        		this.detailDiv.edt_olb.set_cssclass(''); 					this.detailDiv.edt_olb.set_enable(true);
        		this.detailDiv.edt_area.set_cssclass('point'); 				this.detailDiv.edt_area.set_enable(true);
        		this.detailDiv.edt_dept.set_cssclass(''); 					this.detailDiv.edt_dept.set_enable(false); //3st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_form.set_cssclass('point');				this.detailDiv.cbo_form.set_enable(true);
        		this.detailDiv.edt_scalx.set_cssclass(''); 					this.detailDiv.edt_scalx.set_enable(true);
        		this.detailDiv.edt_netPnl.set_cssclass(''); 				this.detailDiv.edt_netPnl.set_enable(true);
        		this.detailDiv.cal_deliveryDate.set_cssclass('point'); 		this.detailDiv.cal_deliveryDate.set_enable(true);
        		this.detailDiv.edt_requestUser.set_cssclass(''); 			this.detailDiv.edt_requestUser.set_enable(false); //4st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolKind.set_cssclass('point'); 			this.detailDiv.cbo_toolKind.set_enable(true);
        		this.detailDiv.edt_scaly.set_cssclass(''); 					this.detailDiv.edt_scaly.set_enable(true);
        		this.detailDiv.edt_requestComment.set_cssclass(''); 		this.detailDiv.edt_requestComment.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.edt_description.set_cssclass(''); 			this.detailDiv.edt_description.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.btnDiv.btn_append.set_enable(true); //추가
        		this.btnDiv.btn_toolSelect.set_visible(false); //신규일때 비활성화
        		//this.headerDiv.btn_save.set_enable(true);
        		//this.btnDiv.btn_grdDel.set_visible(true);

        	}else if(this.toolMakeType=='Add'){ //증작
        		this.detailDiv.edt_productId.set_cssclass(''); 				this.detailDiv.edt_productId.set_enable(true);
        		this.detailDiv.edt_productVer.set_cssclass(''); 			this.detailDiv.edt_productVer.set_enable(false);
        		this.detailDiv.edt_productName.set_cssclass(''); 			this.detailDiv.edt_productName.set_enable(false);
        		this.detailDiv.edt_jobType.set_cssclass(''); 				this.detailDiv.edt_jobType.set_enable(false);
        		this.detailDiv.edt_productionType.set_cssclass(''); 		this.detailDiv.edt_productionType.set_enable(false); //1st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolMakeType.set_cssclass('point'); 		this.detailDiv.cbo_toolMakeType.set_enable(true);
        		this.detailDiv.edt_summary.set_cssclass(''); 				this.detailDiv.edt_summary.set_enable(false);
        		this.detailDiv.edt_orderQty.set_cssclass(''); 				this.detailDiv.edt_orderQty.set_enable(false);
        		this.detailDiv.edt_vendor.set_cssclass(''); 				this.detailDiv.edt_vendor.set_enable(true);
        		this.detailDiv.cal_requestDate.set_cssclass(''); 			this.detailDiv.cal_requestDate.set_enable(false); //2st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolCategory.set_cssclass(''); 			this.detailDiv.cbo_toolCategory.set_enable(false);
        		this.detailDiv.edt_qty.set_cssclass('point'); 				this.detailDiv.edt_qty.set_enable(true);
        		this.detailDiv.edt_olb.set_cssclass(''); 					this.detailDiv.edt_olb.set_enable(false);
        		this.detailDiv.edt_area.set_cssclass(''); 					this.detailDiv.edt_area.set_enable(true);
        		this.detailDiv.edt_dept.set_cssclass(''); 					this.detailDiv.edt_dept.set_enable(false); //3st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_form.set_cssclass(''); 					this.detailDiv.cbo_form.set_enable(false);
        		this.detailDiv.edt_scalx.set_cssclass(''); 					this.detailDiv.edt_scalx.set_enable(false); //2021-04-23요청사항반영(202)
        		this.detailDiv.edt_netPnl.set_cssclass(''); 				this.detailDiv.edt_netPnl.set_enable(false);
        		this.detailDiv.cal_deliveryDate.set_cssclass('point'); 		this.detailDiv.cal_deliveryDate.set_enable(true);
        		this.detailDiv.edt_requestUser.set_cssclass(''); 			this.detailDiv.edt_requestUser.set_enable(false); //4st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolKind.set_cssclass(''); 				this.detailDiv.cbo_toolKind.set_enable(false);
        		this.detailDiv.edt_scaly.set_cssclass(''); 					this.detailDiv.edt_scaly.set_enable(false); //2021-04-23요청사항반영(202)
        		this.detailDiv.edt_requestComment.set_cssclass('point'); 	this.detailDiv.edt_requestComment.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.edt_description.set_cssclass(''); 			this.detailDiv.edt_description.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.btnDiv.btn_append.set_enable(true); //추가
        		this.btnDiv.btn_toolSelect.set_visible(true); //Tool선택
        		this.btnDiv.btn_toolSelect.set_enable(true);
        		//this.headerDiv.btn_save.set_enable(true); //저장
        		//this.btnDiv.btn_grdDel.set_visible(true); //삭제

        	}else if(this.toolMakeType=='Modify'){ //수정
        		this.detailDiv.edt_productId.set_cssclass(''); 				this.detailDiv.edt_productId.set_enable(true);
        		this.detailDiv.edt_productVer.set_cssclass(''); 			this.detailDiv.edt_productVer.set_enable(false);
        		this.detailDiv.edt_productName.set_cssclass(''); 			this.detailDiv.edt_productName.set_enable(false);
        		this.detailDiv.edt_jobType.set_cssclass(''); 				this.detailDiv.edt_jobType.set_enable(false);
        		this.detailDiv.edt_productionType.set_cssclass(''); 		this.detailDiv.edt_productionType.set_enable(false); //1st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolMakeType.set_cssclass('point'); 		this.detailDiv.cbo_toolMakeType.set_enable(true);
        		this.detailDiv.edt_summary.set_cssclass('point'); 			this.detailDiv.edt_summary.set_enable(true);
        		this.detailDiv.edt_orderQty.set_cssclass(''); 				this.detailDiv.edt_orderQty.set_enable(false);
        		this.detailDiv.edt_vendor.set_cssclass(''); 				this.detailDiv.edt_vendor.set_enable(false);
        		this.detailDiv.cal_requestDate.set_cssclass(''); 			this.detailDiv.cal_requestDate.set_enable(false); //2st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolCategory.set_cssclass(''); 			this.detailDiv.cbo_toolCategory.set_enable(false);
        		this.detailDiv.edt_qty.set_cssclass(''); 					this.detailDiv.edt_qty.set_enable(false);
        		this.detailDiv.edt_olb.set_cssclass(''); 					this.detailDiv.edt_olb.set_enable(false);
        		this.detailDiv.edt_area.set_cssclass(''); 					this.detailDiv.edt_area.set_enable(true);
        		this.detailDiv.edt_dept.set_cssclass(''); 					this.detailDiv.edt_dept.set_enable(false); //3st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_form.set_cssclass(''); 					this.detailDiv.cbo_form.set_enable(false);
        		this.detailDiv.edt_scalx.set_cssclass(''); 					this.detailDiv.edt_scalx.set_enable(true);
        		this.detailDiv.edt_netPnl.set_cssclass(''); 				this.detailDiv.edt_netPnl.set_enable(false);
        		this.detailDiv.cal_deliveryDate.set_cssclass('point'); 		this.detailDiv.cal_deliveryDate.set_enable(true);
        		this.detailDiv.edt_requestUser.set_cssclass(''); 			this.detailDiv.edt_requestUser.set_enable(false); //4st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolKind.set_cssclass(''); 				this.detailDiv.cbo_toolKind.set_enable(false);
        		this.detailDiv.edt_scaly.set_cssclass(''); 					this.detailDiv.edt_scaly.set_enable(true);
        		this.detailDiv.edt_requestComment.set_cssclass('point'); 	this.detailDiv.edt_requestComment.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.edt_description.set_cssclass(''); 			this.detailDiv.edt_description.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.btnDiv.btn_append.set_enable(true); //추가
        		this.btnDiv.btn_toolSelect.set_visible(true); //Tool선택
        		this.btnDiv.btn_toolSelect.set_enable(true);
        		//this.headerDiv.btn_save.set_enable(true); //저장
        		//this.btnDiv.btn_grdDel.set_visible(true);

        	}else if(this.toolMakeType=='Repair'){ //수리
        		this.detailDiv.edt_productId.set_cssclass(''); 				this.detailDiv.edt_productId.set_enable(true);
        		this.detailDiv.edt_productVer.set_cssclass(''); 			this.detailDiv.edt_productVer.set_enable(false);
        		this.detailDiv.edt_productName.set_cssclass(''); 			this.detailDiv.edt_productName.set_enable(false);
        		this.detailDiv.edt_jobType.set_cssclass(''); 				this.detailDiv.edt_jobType.set_enable(false);
        		this.detailDiv.edt_productionType.set_cssclass(''); 		this.detailDiv.edt_productionType.set_enable(false); //1st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolMakeType.set_cssclass('point'); 		this.detailDiv.cbo_toolMakeType.set_enable(true);
        		this.detailDiv.edt_summary.set_cssclass(''); 				this.detailDiv.edt_summary.set_enable(false);
        		this.detailDiv.edt_orderQty.set_cssclass(''); 				this.detailDiv.edt_orderQty.set_enable(false);
        		this.detailDiv.edt_vendor.set_cssclass(''); 				this.detailDiv.edt_vendor.set_enable(true);
        		this.detailDiv.cal_requestDate.set_cssclass(''); 			this.detailDiv.cal_requestDate.set_enable(false); //2st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolCategory.set_cssclass(''); 			this.detailDiv.cbo_toolCategory.set_enable(false);
        		this.detailDiv.edt_qty.set_cssclass(''); 					this.detailDiv.edt_qty.set_enable(false);
        		this.detailDiv.edt_olb.set_cssclass(''); 					this.detailDiv.edt_olb.set_enable(false);
        		this.detailDiv.edt_area.set_cssclass(''); 					this.detailDiv.edt_area.set_enable(true);
        		this.detailDiv.edt_dept.set_cssclass(''); 					this.detailDiv.edt_dept.set_enable(false); //3st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_form.set_cssclass(''); 					this.detailDiv.cbo_form.set_enable(false);
        		this.detailDiv.edt_scalx.set_cssclass(''); 					this.detailDiv.edt_scalx.set_enable(false);
        		this.detailDiv.edt_netPnl.set_cssclass(''); 				this.detailDiv.edt_netPnl.set_enable(false);
        		this.detailDiv.cal_deliveryDate.set_cssclass('point'); 		this.detailDiv.cal_deliveryDate.set_enable(true);
        		this.detailDiv.edt_requestUser.set_cssclass(''); 			this.detailDiv.edt_requestUser.set_enable(false); //4st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolKind.set_cssclass(''); 				this.detailDiv.cbo_toolKind.set_enable(false);
        		this.detailDiv.edt_scaly.set_cssclass(''); 					this.detailDiv.edt_scaly.set_enable(false);
        		this.detailDiv.edt_requestComment.set_cssclass('point'); 	this.detailDiv.edt_requestComment.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.edt_description.set_cssclass(''); 			this.detailDiv.edt_description.set_enable(true);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.btnDiv.btn_append.set_enable(true); //추가
        		this.btnDiv.btn_toolSelect.set_visible(true); //Tool선택
        		this.btnDiv.btn_toolSelect.set_enable(true);
        		//this.headerDiv.btn_save.set_enable(true);
        		//this.btnDiv.btn_grdDel.set_visible(true);

        	}else if(this.toolMakeType==''){ //init,초기상태
        		this.ds_requestDetailRow.clearData();
        		this.ds_requestDetailRow.addRow();
        		this.detailDiv.edt_productId.set_cssclass(''); 				this.detailDiv.edt_productId.set_enable(true);
        		this.detailDiv.edt_productVer.set_cssclass(''); 			this.detailDiv.edt_productVer.set_enable(false);
        		this.detailDiv.edt_productName.set_cssclass(''); 			this.detailDiv.edt_productName.set_enable(false);
        		this.detailDiv.edt_jobType.set_cssclass(''); 				this.detailDiv.edt_jobType.set_enable(false);
        		this.detailDiv.edt_productionType.set_cssclass(''); 		this.detailDiv.edt_productionType.set_enable(false); //1st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolMakeType.set_cssclass(''); 			this.detailDiv.cbo_toolMakeType.set_enable(true);
        		this.detailDiv.edt_summary.set_cssclass(''); 				this.detailDiv.edt_summary.set_enable(false); //합수
        		this.detailDiv.edt_summary.set_value(0);
        		this.detailDiv.edt_orderQty.set_cssclass(''); 				this.detailDiv.edt_orderQty.set_enable(false); //수주량
        		this.detailDiv.edt_orderQty.set_value(0);
        		this.detailDiv.edt_vendor.set_cssclass(''); 				this.detailDiv.edt_vendor.set_enable(false);
        		this.detailDiv.cal_requestDate.set_cssclass(''); 			this.detailDiv.cal_requestDate.set_enable(false); //2st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolCategory.set_cssclass(''); 			this.detailDiv.cbo_toolCategory.set_enable(false);
        		this.detailDiv.edt_qty.set_cssclass(''); 					this.detailDiv.edt_qty.set_enable(false); //의뢰수량
        		this.detailDiv.edt_qty.set_value(0);
        		this.detailDiv.edt_olb.set_cssclass(''); 					this.detailDiv.edt_olb.set_enable(false); //OLB도피
        		this.detailDiv.edt_olb.set_value(0);
        		this.detailDiv.edt_area.set_cssclass(''); 					this.detailDiv.edt_area.set_enable(false);
        		this.detailDiv.edt_dept.set_cssclass(''); 					this.detailDiv.edt_dept.set_enable(false); //3st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_form.set_cssclass(''); 					this.detailDiv.cbo_form.set_enable(false);
        		this.detailDiv.edt_scalx.set_cssclass(''); 					this.detailDiv.edt_scalx.set_enable(false);
        		this.detailDiv.edt_scalx.set_value(0);
        		this.detailDiv.edt_netPnl.set_cssclass(''); 				this.detailDiv.edt_netPnl.set_enable(false); //NET-PNL
        		this.detailDiv.edt_netPnl.set_value(0);
        		this.detailDiv.cal_deliveryDate.set_cssclass(''); 			this.detailDiv.cal_deliveryDate.set_enable(false);
        		this.detailDiv.edt_requestUser.set_cssclass(''); 			this.detailDiv.edt_requestUser.set_enable(false); //4st row end
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.cbo_toolKind.set_cssclass(''); 				this.detailDiv.cbo_toolKind.set_enable(false);
        		this.detailDiv.edt_scaly.set_cssclass(''); 					this.detailDiv.edt_scaly.set_enable(false);
        		this.detailDiv.edt_scaly.set_value(0);
        		this.detailDiv.edt_requestComment.set_cssclass(''); 		this.detailDiv.edt_requestComment.set_enable(false);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.detailDiv.edt_description.set_cssclass(''); 			this.detailDiv.edt_description.set_enable(false);
        		//---------------------------------------------------------------------------------------------------------------------------
        		this.btnDiv.btn_append.set_enable(false); //아래 3개 버튼은 비활성화 한다.
        		this.btnDiv.btn_toolSelect.set_visible(false);
        		this.btnDiv.btn_toolSelect.set_enable(true);
        		//this.headerDiv.btn_save.set_enable(false);
        		//this.btnDiv.btn_grdDel.set_visible(false);
        		this.trFlag = 0; //상태없슴
        	}
        }

        //신규를 선택하면 합수~특이사항 항목의 내용을 삭제 한다.
        this.fn_newVarSet = function ()
        {
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"CHK","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLCODE","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLNAME","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLVERSION","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"QTY","0");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLCATEGORYID","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLCATEGORY","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"FORMID","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"FORM","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLKINDID","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLKIND","");
        	//this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"PRODUCTDEFID","");
        	//this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"PRODUCTDEFVERSION","");
        	//this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"PRODUCTDEFNAME","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"ROWSTATUS","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"FILMUSELAYER1","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"USELAYER","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"FILMUSELAYER2","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"DESCRIPTION",""); //특이사항(설명)
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"SUMMARY","0");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"SCALEX","0");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"SCALEY","0");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"VENDORID","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"VENDORNAME","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"RECEIPTAREAID","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"RECEIPTAREANAME","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"REQUESTDATE", this.tomfn_getToday());
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"REQUESTDEPARTMENT", this.tomfn_getDeptNm()); //의뢰부서
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"REQUESTUSER", this.tomfn_getUserId()); //의뢰자Id
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"REQUESTUSERNAME", this.tomfn_getUserNm()); //의뢰자명
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"DELIVERYDATE", this.tomfn_getToday());
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"REQUESTCOMMENT",""); //의뢰사유
        	//this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"PRODUCTIONTYPE","");
        	//this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"PRODUCTIONTYPENAME","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"OLB","0");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"NETPNL","0");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLMAKETYPE","New");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLMAKETYPENAME","신규");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"ORDERQTY","0"); //수주량
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"TOOLPROGRESSSTATUS","Create");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"ISAPPROVALUSE","N");
        	//Hidden
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"VENDORID","");
        	this.ds_requestDetailRow.setColumn(this.ds_requestDetailRow.rowposition,"RECEIPTAREAID","");
        	this.searchDiv.edt_venderId.value = '';
        	this.searchDiv.edt_areaId.value = '';
        	this.detailDiv.btn_product2.set_enable(true);
        	this.detailDiv.btn_vendor.set_enable(true);
        	this.detailDiv.btn_area.set_enable(true);
        }

        /*
         * 기능 : 제작구분별 필수입력 체크
         *			합수/의뢰수량 0 이면 필수 입력 체크 되도록 처리 : 2021.07.21 최창선 (edt_summary, edt_qty)
         */
        this.fn_MandatoryCheck = function ()
        {
        	var bSucc = false;
        	//==================================================================================================================================================
        	if(this.toolMakeType=='New'){ //신규
        		if(this.gfn_isNull(this.detailDiv.edt_productId.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"PRODUCTDEFID"), "warning", "ok");
        			this.detailDiv.edt_productId.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_summary.value) || this.detailDiv.edt_summary.value=='0'){ //합수 필수입력 그리도 0 이상
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("SUMMARY"),"SUMMARY"), "warning", "ok");
        			this.detailDiv.edt_summary.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_vendor.value) || this.gfn_isNull(this.searchDiv.edt_venderId.value)) { //제작업체
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("VENDORNAME"),"VENDORNAME"), "warning", "ok");
        			this.detailDiv.edt_vendor.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cbo_toolCategory.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("TOOLCATEGORY"),"TOOLCATEGORY"), "warning", "ok");
        			this.detailDiv.cbo_toolCategory.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_qty.value) || this.detailDiv.edt_qty.value=='0'){ //의뢰수량 필수입력 그리도 0 이상
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("QTY"),"QTY"), "warning", "ok"); //의뢰수량
        			this.detailDiv.edt_qty.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_area.value) || this.gfn_isNull(this.searchDiv.edt_areaId.value)){ //작업장
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("RECEIPTAREANAME"),"RECEIPTAREANAME"), "warning", "ok");
        			this.detailDiv.edt_area.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cbo_form.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("FORM"),"FORM"), "warning", "ok");
        			this.detailDiv.cbo_form.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cal_deliveryDate.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("DELIVERYDATE"),"DELIVERYDATE"), "warning", "ok");
        			this.detailDiv.cal_deliveryDate.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cbo_toolKind.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("TOOLKIND"),"TOOLKIND"), "warning", "ok");
        			this.detailDiv.cbo_toolKind.setFocus();
        			return bSucc;
        		}
        	//==================================================================================================================================================
        	}else if(this.toolMakeType=='Add'){ //증작
        		if(this.gfn_isNull(this.detailDiv.cbo_toolMakeType.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("TOOLMAKETYPE"),"TOOLMAKETYPE"), "warning", "ok");
        			this.detailDiv.cbo_toolMakeType.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_qty.value) || this.detailDiv.edt_qty.value=='0'){ //의뢰수량 필수입력 그리도 0 이상
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("QTY"),"QTY"), "warning", "ok");
        			this.detailDiv.edt_receiptQty.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cal_deliveryDate.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("DELIVERYDATE"),"DELIVERYDATE"), "warning", "ok");
        			this.detailDiv.cal_deliveryDate.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_requestComment.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("REQUESTCOMMENT"),"REQUESTCOMMENT"), "warning", "ok");
        			this.detailDiv.edt_receiptReason.setFocus();
        			return bSucc;
        		}
        	//==================================================================================================================================================
        	}else if(this.toolMakeType=='Modify'){ //수정
        		if(this.gfn_isNull(this.detailDiv.cbo_toolMakeType.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("TOOLMAKETYPE"),"TOOLMAKETYPE"), "warning", "ok");
        			this.detailDiv.cbo_toolMakeType.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_summary.value) || this.detailDiv.edt_summary.value=='0'){ //합수 필수입력 그리도 0 이상
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("SUMMARY"),"SUMMARY"), "warning", "ok");
        			this.detailDiv.edt_summary.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cal_deliveryDate.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("DELIVERYDATE"),"DELIVERYDATE"), "warning", "ok");
        			this.detailDiv.cal_deliveryDate.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_requestComment.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("REQUESTCOMMENT"),"REQUESTCOMMENT"), "warning", "ok");
        			this.detailDiv.edt_receiptReason.setFocus();
        			return bSucc;
        		}
        	//==================================================================================================================================================
        	}else if(this.toolMakeType=='Repair'){ //수리
        		if(this.gfn_isNull(this.detailDiv.cbo_toolMakeType.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("TOOLMAKETYPE"),"TOOLMAKETYPE"), "warning", "ok");
        			this.detailDiv.cbo_toolMakeType.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.cal_deliveryDate.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("DELIVERYDATE"),"DELIVERYDATE"), "warning", "ok");
        			this.detailDiv.cal_deliveryDate.setFocus();
        			return bSucc;
        		}
        		if(this.gfn_isNull(this.detailDiv.edt_requestComment.value)){
        			this.gfn_Message("REQUIREDITEM", this.nfn_nvl(this.nfn_getDictionarynameUpper("REQUESTCOMMENT"),"REQUESTCOMMENT"), "warning", "ok");
        			this.detailDiv.edt_receiptReason.setFocus();
        			return bSucc;
        		}
        	}
        	return true;
        }

        //저장 시, 상세내역 데이터를 의뢰내역 Grid에 update
        this.fn_updateRow = function ()
        {
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTDATE",			this.detailDiv.cal_requestDate.value); //의뢰일자
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTSEQUENCE",		this.nfn_nvl(this.ds_requestDetailRow.getColumn(this.ds_requestDetailRow.rowposition, "REQUESTSEQUENCE"))); //의뢰순번
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"QTY",					this.detailDiv.edt_qty.value); //의뢰수량
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLCATEGORYID",			this.detailDiv.cbo_toolCategory.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLCATEGORY",			this.detailDiv.cbo_toolCategory.text); //TOOL구분명
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"FORMID",					this.detailDiv.cbo_form.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"FORM",					this.detailDiv.cbo_form.text); //TOOL형식명
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLKINDID",				this.detailDiv.cbo_toolKind.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLKIND",				this.detailDiv.cbo_toolKind.text); //TOOL종류명
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"VENDORID",				this.searchDiv.edt_venderId.value); //제작처Id
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"RECEIPTAREAID",			this.searchDiv.edt_areaId.value); //작업장Id
        	//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"PRODUCTDEFID",			this.detailDiv.edt_productId.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"PRODUCTDEFVERSION",		this.detailDiv.edt_productVer.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"DESCRIPTION",			this.detailDiv.edt_description.value); //**************특이사항(설명)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"SUMMARY",				this.detailDiv.edt_summary.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"SCALEX",					this.detailDiv.edt_scalx.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"SCALEY",					this.detailDiv.edt_scaly.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"VENDORID",				this.searchDiv.edt_venderId.value); //제작처(HIDDEN)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"RECEIPTAREAID",			this.searchDiv.edt_areaId.value); //작업장(HIDDEN)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTDEPARTMENT",		this.tomfn_getDeptCd()); //의뢰부서 (신규시 저장됨)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTUSER",			this.tomfn_getUserId()); //의뢰자 (신규시 저장됨)
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"DELIVERYDATE",			this.detailDiv.cal_deliveryDate.value); //납기일자
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"REQUESTCOMMENT",			this.detailDiv.edt_requestComment.value); //**************의뢰사유
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"OLB",					this.detailDiv.edt_olb.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"NETPNL",					this.detailDiv.edt_netPnl.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"TOOLMAKETYPE",			this.detailDiv.cbo_toolMakeType.value);
        	this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition,"ORDERQTY",				this.detailDiv.edt_orderQty.value); //수주량
        	this.ds_requestDetailRow.clearData();
        }

        this.orderBtnControlPrepare = function(pRow)
        {
        	this.ds_request.set_rowposition(pRow);
        	this.orderBtnControl();
        }

        //발주/발주취소 버튼 처리
        this.orderBtnControl = function()
        {
        	this.headerDiv.btn_order.set_enable(false);
        	this.headerDiv.btn_orderCancel.set_enable(false);

        	//발주/발주취소 가능여부 버튼 활성화/비활성화 처리
        	var toolProgressStatus = this.ds_request.getColumn(this.ds_request.rowposition, "TOOLPROGRESSSTATUS");
        	var orderYn = this.nfn_nvl(this.ds_request.getColumn(this.ds_request.rowposition, "ORDERYN"),'');
        	//alert(toolProgressStatus+'/'+orderYn);
        	//if((orderYn == '' || orderYn == 'N') && toolProgressStatus == 'Create'){ //의뢰상태일 경우만 발주 가능
        	if(toolProgressStatus == 'Create'){ //의뢰상태일 경우만 발주 가능
        		this.headerDiv.btn_order.set_enable(true); //발주
        		//this.headerDiv.btn_orderCancel.set_enable(false); //발주취소
        		this.headerDiv.btn_orderCancel.set_enable(true); //발주취소
        	//}else if(orderYn == 'Y'){ //발주상태일 경우만 발주취소 가능
        	}else{
        		//if(toolProgressStatus == 'Create'){
        		//	this.headerDiv.btn_orderCancel.set_enable(true);
        		//}else{ //내역등록상태일때 발주취소 불가능
        			//this.headerDiv.btn_orderCancel.set_enable(false);
        		//}
        	}
        }

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	//detail을 clear 한다.
        	this.ds_requestDetail.clearData();
        	this.ds_requestDetailRow.clearData();

        	//상세 입력상태
        	this.ds_requestDetailRow.addRow();

        	this.fn_newVarSet();

        	//상세입력도 clear 한다.
        	this.toolMakeType = '';
        	this.fn_requierEnableCheck();

        	this.trFlag = 9; //추가 모드

        	//20200408수정사항:세부사항클릭시 품목정보 편집가 처리
        	this.detailDiv.edt_productId.set_enable(true);
        	this.detailDiv.btn_product2.set_enable(true);

        	var strCnt = 'Count : <fc v="#f31d24">'+this.ds_requestDetail.rowcount+'</fc><fc v="#999999"></fc>'
        	this.btnDiv.sta_cnt_ds_requestDetail.set_text(strCnt);

        	this.dateSect = '2'; //의뢰일자GRP 구분(금일로 처리)
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

        //[조회조건]품목코드 버튼 클릭 :: 공통팝업
        //품목유형구분/PRODUCTDEFTYPE/C,ProductDefType,,Y,Y/조회조건항목 삭제함:2021-04-05
        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.productKeyType = "2";
        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        //상단 현황 그리드 Click 이벤트 OR 키DOWN/UP 이벤트
        this.div_work_grd_request_oncellclick = function(obj,e)
        {
        	//1. 변경 데이터 존재 확인:사용자에게Alert(요청사항236-8)
        	if(this.gfn_dsIsUpdated(this.ds_requestDetailRow)){ //변경데이터 Alert
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) {
        			return;
        		}
        	}

        	this.oldRequestPos = this.ds_request.rowposition;
        	this.orderBtnControl();
        	this.fn_detailSearch(); //하단 툴정보 Grid 검색

        	this.dateSect = '1'; //의뢰일자GRP 구분(상단Grid의 일자로 처리)
        };



        //하단 툴정보 그리드 Click 이벤트
        this.div_work_grd_requestDetail_oncellclick = function(obj,e)
        {
        	//1. 변경 데이터 존재 확인:사용자에게Alert(요청사항236-8)
        	if(this.gfn_dsIsUpdated(this.ds_requestDetailRow)){ //변경데이터 Alert
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) {
        			return;
        		}
        	}

        	//# 상태 확인
        	var toolProgressStatus = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "TOOLPROGRESSSTATUS")); //현재Row의 상태
        	var rowFlag = this.nfn_nvl(this.ds_requestDetail.getColumn(this.ds_requestDetail.rowposition, "ROWFLAG"));
        	if(rowFlag=='9'){
        		//alert('Reset 등록건으로 상세편집모드로 처리 하지 않는다.');
        		return;
        	}
        	if(toolProgressStatus == 'DetailRegist'){ //내역등록상태
        		this.trFlag = -1; //저장불가
        	}else{
        		this.trFlag = 1; //편집저장가능(Detail로 dataset복사후 수정 저장됨)
        	}

        	this.underEditFlag = false;
        	this.fn_detailInfo(); //하단 툴정보의 해당 row 상세 내역 조회
        };

        //[상세입력화면] 품목코드 버튼 클릭 :: 공통팝업
        this.div_work_Div01_00_btn_product2_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.productKeyType = "1";
        	this.fn_openPop("SCH_PRODUCT2","P00126", sArgs); //품목코드 조회
        };

        //작업장 버튼 클릭 :: 공통팝업
        this.div_work_Div01_00_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("P_OWNTYPE", "Y");
        	sArgs += this.gfn_setParam("USERID", this.tomfn_getUserId());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00115", sArgs); //작업장 조회
        };

        //제작처(협력업체) 조회 :: 공통팝업
        //거래처타입/C,VendorType,ALL,Y,Y/2021-04-05삭제함.
        this.div_work_Div01_00_btn_vendor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        };

        this.tab_search_Tabpage1_btn_requestor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_USERS","P00194", sArgs); //의뢰자 조회
        };

        this.div_work_btn_toolSelect_onclick = function(obj,e)
        {
        	var popupId = "SCH_TOOLSELECT_POP";
        	var oArg = {};
        	var opts = "width=1250,height=750";

        	var component = this.div_work.form.Div01_00;
        	var strColIdList = "edt_productId";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"품목코드");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}

        	oArg.arg_toolMakeType = this.nfn_nvl(this.detailDiv.cbo_toolMakeType.value, "");	//제작구분
        	oArg.arg_siteId = this.nfn_nvl(this.searchDiv.cbo_siteId.value, "");	//Site코드
        	oArg.arg_periodType = this.nfn_nvl(this.searchDiv.cbo_periodType.value, "");	//Period타입
        	oArg.arg_periodFr = this.nfn_nvl(this.searchDiv.cal_periodFr.value, ""); //시작일자
        	oArg.arg_periodTo = this.nfn_nvl(this.searchDiv.cal_periodTo.value, ""); //종료일자
        	oArg.arg_productId = this.nfn_nvl(this.detailDiv.edt_productId.value, ""); //품목코드(필수로 넘겨야 한다.)
        	oArg.arg_productVer = this.nfn_nvl(this.detailDiv.edt_productVer.value, ""); //품목VER (필수로 넘겨야 한다.)
        	oArg.arg_productName = this.nfn_nvl(this.detailDiv.edt_productName.value, ""); //품목명

        	//this.gfn_Message("DATA 1:: "+oArg.arg_toolMakeType+'/'+oArg.arg_siteId+'/'+oArg.arg_periodType+'/'+oArg.arg_periodFr+'/'+oArg.arg_periodTo, "", "error", "ok");
        	//this.gfn_Message("DATA 2:: "+oArg.arg_productId+'/'+oArg.arg_productVer+'/'+oArg.arg_productName, "", "error", "ok");

        	this.gfn_openPopup(popupId,"tom::TOM00101P.xfdl",oArg,opts);
        };


        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        //==================================
        //제작 구분을 변경시 이벤트 처리
        //==================================
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        this.div_work_Div01_00_cbo_toolMakeType_onitemchanged = function(obj,e)
        {
        	this.toolMakeType = this.detailDiv.cbo_toolMakeType.value; //선택된 제작구분 세팅
        	if(this.toolMakeType == 'New'){
        		this.fn_newVarSet();
        	}
        	this.fn_requierEnableCheck(); //Requier/Enable init.
        	//수정 저장 가능 :: 추가/툴선택 처리 가능
        };
        //===============================================================================================================

        //왼쪽 초기화 버튼 클릭시 처리

        //[조회조건] site 변경시 -> 치공구 의뢰 입력 영역 콤보 변경
        this.tab_search_Tabpage1_cbo_siteId_onitemchanged = function(obj,e)
        {
        	this.fn_initReClear();
        };

        //의뢰서 출력 (엑셀)
        this.div_header_btn_requestPrint_onclick = function(obj,e)
        {
        	var tempRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	var tempRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");

        	var popupId = "orderForm";
        	var oArg = {};

        	oArg.arg_requestDate = this.nfn_nvl(tempRequestDate, "");	//의뢰일자
        	oArg.arg_requestSequence = this.nfn_nvl(tempRequestSequence, "");	//의뢰순번

        	this.gfn_openPopup(popupId,"tom::TOM00103P.xfdl",oArg,"width=975,height=975");
        };

        //발주 : 상태변경 및 메일 발송
        this.div_header_btn_order_onclick = function(obj,e)
        {
        	if(this.ds_requestDetail.getCaseCount("CHK == 1") <=0)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}

        	//선택된ROW의 의뢰순번+IDX 를 배열에 저장해서 파라메터로 넘긴다.
        	var selStr = '';
        	for(var j=0; j<this.ds_requestDetail.rowcount; j++){
        		if(this.ds_requestDetail.getColumn(j,"CHK")!="1") continue;
        		selStr = selStr + this.ds_requestDetail.getColumn(j, "TOOLCODE")+"|"+
        				          this.ds_requestDetail.getColumn(j, "TOOLVERSION")+"|"+
        						  this.ds_requestDetail.getColumn(j, "REQUESTDATE")+"|"+
        				          this.ds_requestDetail.getColumn(j, "REQUESTSEQUENCE")+"|"+
        				          this.ds_requestDetail.getColumn(j, "REQUESTIDX")+",";
        	}
        	selStr = selStr + "@";
        	selStr = this.tomfn_replaceAll(selStr,",@","");

        	var tempRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	var tempRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");
        	var tempRequestDeptNm = this.tomfn_getDeptNm();
        	var tempRequestUserNm = this.tomfn_getUserNm();

        	var printPlantId = this.ds_request.getColumn(this.ds_request.rowposition, "PLANTID");
        	var printProductId = this.ds_request.getColumn(this.ds_request.rowposition, "PRODUCTDEFID");
        	var printProductVersion = this.ds_request.getColumn(this.ds_request.rowposition, "PRODUCTDEFVERSION");
        	var printProductName = this.ds_request.getColumn(this.ds_request.rowposition, "PRODUCTDEFNAME");
        	var printTitle = ' - ' + printPlantId + ' ' + printProductId + ' ' + printProductVersion + ' ' + printProductName;

        	var popupId = "emailOrder";
        	var oArg = {
        				subject : "치공구 발주 요청"+printTitle,
        				contents : "<div>아래와 같이 치공구 발주 요청 합니다.</div><div><br></div><div>- 의뢰 일자 : "+this.tomfn_getCurrentlyDate('YYYY-MM-DD HH:MM')+"</div><div><br></div><div>- 의뢰부서 : "+tempRequestDeptNm+"</div><div><br></div><div>- 의뢰자 : "+tempRequestUserNm+"</div>",
        				//objAddrList : ["sungha.jin@interflex.co.kr", "sunghajin@built1.com"],
        				//objUserList : ["진성하", "진성하"],
        				atchSrc : "TOMTOOLREQUEST",
        				mailType : "1", //발주
        				selStr : selStr, //선택건 전달
        				atchSrcKey : tempRequestDate +"|"+tempRequestSequence
        				};
        	this.gfn_openPopup(popupId,"tom::TOM00102P.xfdl",oArg,"width=1500,height=900");
        };

        //발주 취소 : 상태변경 및 발주취소 메일 발송
        this.div_header_btn_orderCancel_onclick = function(obj,e)
        {
        	if(this.ds_requestDetail.getCaseCount("CHK == 1") <=0)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}

        	//선택된ROW의 의뢰순번+IDX 를 배열에 저장해서 파라메터로 넘긴다.
        	var selStr = '';
        	for(var j=0; j<this.ds_requestDetail.rowcount; j++){
        		if(this.ds_requestDetail.getColumn(j,"CHK")!="1") continue;
        		selStr = selStr + this.ds_requestDetail.getColumn(j, "TOOLCODE")+"|"+
        				          this.ds_requestDetail.getColumn(j, "TOOLVERSION")+"|"+
        						  this.ds_requestDetail.getColumn(j, "REQUESTDATE")+"|"+
        				          this.ds_requestDetail.getColumn(j, "REQUESTSEQUENCE")+"|"+
        				          this.ds_requestDetail.getColumn(j, "REQUESTIDX")+",";
        	}
        	selStr = selStr + "@";
        	selStr = this.tomfn_replaceAll(selStr,",@","");

        	var tempRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	var tempRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");
        	var tempRequestDeptNm = this.tomfn_getDeptNm();
        	var tempRequestUserNm = this.tomfn_getUserNm();

        	var printPlantId = this.ds_request.getColumn(this.ds_request.rowposition, "PLANTID");
        	var printProductId = this.ds_request.getColumn(this.ds_request.rowposition, "PRODUCTDEFID");
        	var printProductVersion = this.ds_request.getColumn(this.ds_request.rowposition, "PRODUCTDEFVERSION");
        	var printProductName = this.ds_request.getColumn(this.ds_request.rowposition, "PRODUCTDEFNAME");
        	var printTitle = ' - ' + printPlantId + ' ' + printProductId + ' ' + printProductVersion + ' ' + printProductName;

        	var popupId = "emailOrderCancel";
        	var oArg = {
        				subject : "치공구 발주 취소 요청"+printTitle,
        				contents : "<div>아래의 치공구 의뢰한 내용을 발주 취소 요청 합니다.</div><div><br></div><div>- 취소 요청 일자 : "+this.tomfn_getCurrentlyDate('YYYY-MM-DD HH:MM')+"</div><div><br></div><div>- 의뢰부서 : "+tempRequestDeptNm+"</div><div><br></div><div>- 의뢰자 : "+tempRequestUserNm+"</div>",
        				//objAddrList : ["sungha.jin@interflex.co.kr", "sunghajin@built1.com"],
        				//objUserList : ["진성하", "진성하"],
        				atchSrc : "TOMTOOLREQUEST",
        				mailType : "2", //발주취소
        				selStr : selStr, //선택건 전달
        				atchSrcKey : tempRequestDate +"|"+tempRequestSequence
        				};
        	this.gfn_openPopup(popupId,"tom::TOM00102P.xfdl",oArg,"width=1500,height=900");
        };

        /*
         * 기능 : 수신자 확인
         */
        this.btn_email_onclick = function(obj,e)
        {
        	var tempRequestDate = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTDATE");
        	var tempRequestSequence = this.ds_request.getColumn(this.ds_request.rowposition, "REQUESTSEQUENCE");
        	var tempRequestDeptNm = this.tomfn_getDeptNm();
        	var tempRequestUserNm = this.tomfn_getUserNm();

        	var popupId = "emailReceiverConfirm";
        	var oArg = {
        				atchSrc : "TOMTOOLREQUEST",
        				mailType : "3", //수신자확인
        				atchSrcKey : tempRequestDate +"|"+tempRequestSequence
        				};
        	this.gfn_openPopup(popupId,"tom::TOM00104P.xfdl",oArg,"width=875,height=790");
        };

        this.div_work_Div01_00_cbo_toolCategory_onitemchanged = function(obj,e)
        {
        	var toolCategory = this.nfn_nvl(this.detailDiv.cbo_toolCategory.value, ""); //Tool구분값
        	this.fn_initToolCategoryDetailCombo(toolCategory); //Tool형식 콤보(상세내역)
        };

        this.div_work_Div01_00_cbo_form_onitemchanged = function(obj,e)
        {
        	var toolCategory = this.nfn_nvl(this.detailDiv.cbo_toolCategory.value, ""); //Tool구분값
        	var toolForm = this.nfn_nvl(this.detailDiv.cbo_form.value, ""); //Tool형식값
        	this.fn_initToolDetailCombo(toolCategory, toolForm); //Tool종류 콤보(상세내역)
        };

        this.div_work_Div01_00_edt_productId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.productKeyType = '1';
        		this.div_work_Div01_00_btn_product2_onclick();
        	}
        };

        this.div_work_Div01_00_edt_vendor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_00_btn_vendor_onclick();
        	}
        };

        this.div_work_Div01_00_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_00_btn_area_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.productKeyType = "2";
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_requestor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_requestor_onclick();
        	}
        };

        //내역등록 상태는 편집불가 처리:20210409/PHW
        this.fn_editLock = function (flag)
        {
        	this.detailDiv.edt_productId.set_enable(flag);
        	this.detailDiv.edt_productVer.set_enable(flag);
        	this.detailDiv.edt_productName.set_enable(flag);
        	this.detailDiv.edt_jobType.set_enable(flag);
        	this.detailDiv.edt_productionType.set_enable(flag); //1st row end
        	//---------------------------------------------------------------------------------------------------------------------------
        	this.detailDiv.cbo_toolMakeType.set_enable(flag);
        	this.detailDiv.edt_summary.set_enable(flag);
        	this.detailDiv.edt_orderQty.set_enable(flag);
        	this.detailDiv.edt_vendor.set_enable(flag);
        	this.detailDiv.cal_requestDate.set_enable(flag); //2st row end
        	//---------------------------------------------------------------------------------------------------------------------------
        	this.detailDiv.cbo_toolCategory.set_enable(flag);
        	this.detailDiv.edt_qty.set_enable(flag);
        	this.detailDiv.edt_olb.set_enable(flag);
        	this.detailDiv.edt_area.set_enable(flag);
        	this.detailDiv.edt_dept.set_enable(flag); //3st row end
        	//---------------------------------------------------------------------------------------------------------------------------
        	this.detailDiv.cbo_form.set_enable(flag);
        	this.detailDiv.edt_scalx.set_enable(flag);
        	this.detailDiv.edt_netPnl.set_enable(flag);
        	this.detailDiv.cal_deliveryDate.set_enable(flag);
        	this.detailDiv.edt_requestUser.set_enable(flag); //4st row end
        	//---------------------------------------------------------------------------------------------------------------------------
        	this.detailDiv.cbo_toolKind.set_enable(flag);
        	this.detailDiv.edt_scaly.set_enable(flag);
        	this.detailDiv.edt_requestComment.set_enable(flag);
        	//---------------------------------------------------------------------------------------------------------------------------
        	this.detailDiv.edt_description.set_enable(flag);
        	//---------------------------------------------------------------------------------------------------------------------------
        	this.detailDiv.btn_vendor.set_enable(flag);
        	this.detailDiv.btn_area.set_enable(flag);
        }

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");

        	this.requestorId = '';
        };

        this.div_work_Div01_00_edt_summary_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "SUMMARY", this.nfn_nvl(this.detailDiv.edt_summary.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_qty_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "QTY", this.nfn_nvl(this.detailDiv.edt_qty.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_scalx_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "SCALEX", this.nfn_nvl(this.detailDiv.edt_scalx.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_scaly_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "SCALEY", this.nfn_nvl(this.detailDiv.edt_scaly.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_orderQty_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "ORDERQTY", this.nfn_nvl(this.detailDiv.edt_orderQty.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_olb_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "OLB", this.nfn_nvl(this.detailDiv.edt_olb.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_netPnl_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "NETPNL", this.nfn_nvl(this.detailDiv.edt_netPnl.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_requestComment_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "REQUESTCOMMENT", this.nfn_nvl(this.detailDiv.edt_requestComment.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_description_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "DESCRIPTION", this.nfn_nvl(this.detailDiv.edt_description.value));
        		}
        	}
        };

        this.div_work_Div01_00_cal_deliveryDate_onkeyup = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "DELIVERYDATE", this.nfn_nvl(this.detailDiv.cal_deliveryDate.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_vendor_onchanged = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "VENDORID", this.nfn_nvl(this.edt_venderId));
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "VENDORNAME", this.nfn_nvl(this.detailDiv.edt_vendor.value));
        		}
        	}
        };

        this.div_work_Div01_00_edt_area_onchanged = function(obj,e)
        {
        	if(this.underEditFlag==true){
        		if (this.ds_requestDetail.getCaseCount("LINENO == '"+this.nfn_nvl(this.searchDiv.edt_lineNo.value)+"'")>0) {
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "RECEIPTAREAID", this.nfn_nvl(this.edt_areaId));
        			this.ds_requestDetail.setColumn(this.ds_requestDetail.rowposition, "RECEIPTAREANAME", this.nfn_nvl(this.detailDiv.edt_area.value));
        		}
        	}
        };

        this.ds_request_canrowposchange = function(obj,e)
        {
        };

        this.div_work_grd_request_onkeyup = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_requestDetailRow)){ //변경데이터 Alert
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) {
        			return;
        		}
        	}

        	this.oldRequestPos = e.row;
        	this.orderBtnControlPrepare(e.row);
        	this.fn_detailSearch();

        	this.dateSect = '1'; //의뢰일자GRP 구분(상단Grid의 일자로 처리)
        };

        //삭제 이벤트 이후 아래 로직으로 체크 한다. :: detail에 data가 0 이면 reset 버튼 누른것 처럼 만든다.
        this.fn_deleteInit = function ()
        {
        	//detail을 clear 한다.
        	this.ds_requestDetailRow.clearData();

        	//상세 입력상태
        	this.ds_requestDetailRow.addRow();

        	this.fn_newVarSet();

        	//상세입력도 clear 한다.
        	this.toolMakeType = '';
        	this.fn_requierEnableCheck();

        	this.trFlag = 2; //해당건 추가 모드

        	//20200408수정사항:세부사항클릭시 품목정보 편집가 처리
        	this.detailDiv.edt_productId.set_enable(true);
        	this.detailDiv.btn_product2.set_enable(true);

        	var strCnt = 'Count : <fc v="#f31d24">'+this.ds_requestDetail.rowcount+'</fc><fc v="#999999"></fc>'
        	this.btnDiv.sta_cnt_ds_requestDetail.set_text(strCnt);

        	this.dateSect = '2'; //의뢰일자GRP 구분(금일로 처리)
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_requestor.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_requestor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_requestor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_requestor_onclick,this);
            this.div_work.form.Div01_00.form.edt_productId.addEventHandler("onkeydown",this.div_work_Div01_00_edt_productId_onkeydown,this);
            this.div_work.form.Div01_00.form.btn_product2.addEventHandler("onclick",this.div_work_Div01_00_btn_product2_onclick,this);
            this.div_work.form.Div01_00.form.cbo_toolMakeType.addEventHandler("onitemchanged",this.div_work_Div01_00_cbo_toolMakeType_onitemchanged,this);
            this.div_work.form.Div01_00.form.edt_summary.addEventHandler("onkeyup",this.div_work_Div01_00_edt_summary_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_orderQty.addEventHandler("onkeyup",this.div_work_Div01_00_edt_orderQty_onkeyup,this);
            this.div_work.form.Div01_00.form.btn_vendor.addEventHandler("onclick",this.div_work_Div01_00_btn_vendor_onclick,this);
            this.div_work.form.Div01_00.form.edt_vendor.addEventHandler("onkeydown",this.div_work_Div01_00_edt_vendor_onkeydown,this);
            this.div_work.form.Div01_00.form.edt_vendor.addEventHandler("onchanged",this.div_work_Div01_00_edt_vendor_onchanged,this);
            this.div_work.form.Div01_00.form.edt_qty.addEventHandler("onkeyup",this.div_work_Div01_00_edt_qty_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_olb.addEventHandler("onkeyup",this.div_work_Div01_00_edt_olb_onkeyup,this);
            this.div_work.form.Div01_00.form.btn_area.addEventHandler("onclick",this.div_work_Div01_00_btn_area_onclick,this);
            this.div_work.form.Div01_00.form.edt_area.addEventHandler("onkeydown",this.div_work_Div01_00_edt_area_onkeydown,this);
            this.div_work.form.Div01_00.form.edt_area.addEventHandler("onchanged",this.div_work_Div01_00_edt_area_onchanged,this);
            this.div_work.form.Div01_00.form.cal_deliveryDate.addEventHandler("onkeyup",this.div_work_Div01_00_cal_deliveryDate_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_scalx.addEventHandler("onkeyup",this.div_work_Div01_00_edt_scalx_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_scaly.addEventHandler("onkeyup",this.div_work_Div01_00_edt_scaly_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_netPnl.addEventHandler("onkeyup",this.div_work_Div01_00_edt_netPnl_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_requestComment.addEventHandler("onkeyup",this.div_work_Div01_00_edt_requestComment_onkeyup,this);
            this.div_work.form.Div01_00.form.edt_description.addEventHandler("onkeyup",this.div_work_Div01_00_edt_description_onkeyup,this);
            this.div_work.form.Div01_00.form.cbo_toolCategory.addEventHandler("onitemchanged",this.div_work_Div01_00_cbo_toolCategory_onitemchanged,this);
            this.div_work.form.Div01_00.form.cbo_form.addEventHandler("onitemchanged",this.div_work_Div01_00_cbo_form_onitemchanged,this);
            this.div_work.form.grd_requestDetail.addEventHandler("oncellclick",this.div_work_grd_requestDetail_oncellclick,this);
            this.div_work.form.grd_request.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_work.form.grd_request.addEventHandler("onkeyup",this.div_work_grd_request_onkeyup,this);
            this.div_work.form.btn_append.addEventHandler("onclick",this.fn_append,this);
            this.div_work.form.btn_grdDel.addEventHandler("onclick",this.fn_delete_detail,this);
            this.div_work.form.btn_toolSelect.addEventHandler("onclick",this.div_work_btn_toolSelect_onclick,this);
            this.div_work.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_03.addEventHandler("onclick",this.btn_email_onclick,this);
            this.div_header.form.btn_orderCancel.addEventHandler("onclick",this.div_header_btn_orderCancel_onclick,this);
            this.div_header.form.btn_order.addEventHandler("onclick",this.div_header_btn_order_onclick,this);
            this.div_header.form.btn_requestPrint.addEventHandler("onclick",this.div_header_btn_requestPrint_onclick,this);
            this.div_header.form.btn_delete.addEventHandler("onclick",this.fn_delete,this);
        };
        this.loadIncludeScript("TOM00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
