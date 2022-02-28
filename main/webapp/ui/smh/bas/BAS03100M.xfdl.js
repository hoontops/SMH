(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03100M");
            this.set_titletext("Routing Roll Loss ");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_routionRollLoss", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSMM\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPONENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rolllossOperation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"OPERATIONID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOSSM\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROLLLOSSM\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"BASELOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUMMARY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSMM\" type=\"FLOAT\" size=\"256\"/><Column id=\"APPLYLOSSYSIZE\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"COMPONENTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rollLoss", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("품목버젼");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F1B109EEB0FB4D82A7ADE1DEDC2B114E");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","126","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","126","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15",null,"0","0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15",null,null,"0",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02","0","0",null,"10","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"106","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","132","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productDefId",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefVersion","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_search_Tabpage1_form_cmb_productDefType_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cmb_productDefType_innerdataset", obj);
            tab_search_Tabpage1_form_cmb_productDefType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체조회</Col><Col id=\"codecolumn\"/></Row><Row><Col id=\"datacolumn\">제품</Col><Col id=\"codecolumn\">Product</Col></Row><Row><Col id=\"datacolumn\">반제품</Col><Col id=\"codecolumn\">SubAssembly</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cmb_productDefType_innerdataset);
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","85","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

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

            obj = new Static("title","0","0","141","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("품목리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDPRODUCTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_RolllossOperation","31.32%","253",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_rolllossOperation");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"84\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" cssclass=\"cell_point\" color=\"#333333\"/><Cell col=\"2\" text=\"공정ID\" cssclass=\"cell_point\" color=\"#333333\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"Loss M\"/><Cell col=\"5\" text=\"Loss PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOSSM\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"5\" maskeditformat=\"#,##0.###\" text=\"bind:LOSSPNL\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,##0.###\" expr=\"dataset.getSum(&quot;LOSSM&quot;) \"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;LOSSPNL&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_RoutionRollLoss","0","34",null,null,"grd_RolllossOperation:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_routionRollLoss");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"94\"/><Column size=\"89\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"TXTPRODUCTDEFNAME\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"REV\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"PRODUCTDEFVERSION\" autosizerow=\"default\" autosizecol=\"limitmax\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"TXTPRODUCTDEFNAME2\" autosizecol=\"limitmax\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title3_00","31.32%","219","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("공정별 Loss");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ROLLLOSSOPERATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","31.32%","34",null,"185","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("datarow");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_binddataset("ds_detail");
            obj.set_cssclass("grd_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" displaytype=\"text\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"3\" colspan=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"자재코드\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" displaytype=\"text\" tooltiptext=\"MATERIALDEF\"/><Cell row=\"1\" col=\"1\" text=\"bind:MATERIALDEFID\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"자재명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\" tooltiptext=\"MATERIALNAME\"/><Cell row=\"1\" col=\"3\" colspan=\"3\" text=\"bind:MATERIALDEFNAME\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"2\" text=\"Roll Loss PNL\" cssclass=\"cell_head\" textAlign=\"left\"/><Cell row=\"2\" col=\"1\" text=\"bind:PNL\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0.###\"/><Cell row=\"2\" col=\"2\" textAlign=\"left\" cssclass=\"cell_head\" text=\"Roll Loss M\" tooltiptext=\"ROLLLOSSM\"/><Cell row=\"2\" col=\"3\" text=\"bind:ROLLLOSSM\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0.###\" edittype=\"none\"/><Cell row=\"2\" col=\"4\" textAlign=\"left\" cssclass=\"cell_head\" text=\"Loss율(%)\" tooltiptext=\"LOSS\"/><Cell row=\"2\" col=\"5\" text=\"bind:LOSS\" textAlign=\"right\" maskeditformat=\"#,##0.##\" displaytype=\"mask\"/><Cell row=\"3\" text=\"인정Loss(%)\" cssclass=\"cell_head\" tooltiptext=\"BASELOSS\" textAlign=\"left\"/><Cell row=\"3\" col=\"1\" text=\"bind:BASELOSS\" maskeditformat=\"#,###.##\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"3\" col=\"2\" textAlign=\"left\" cssclass=\"cell_head\" text=\"합수\" tooltiptext=\"SUMMARY\"/><Cell row=\"3\" col=\"3\" text=\"bind:SUMMARY\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell row=\"3\" col=\"4\" textAlign=\"left\" cssclass=\"cell_head\" text=\"산출수\" tooltiptext=\"CALCULATION\"/><Cell row=\"3\" col=\"5\" text=\"bind:PCSMM\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell row=\"4\" text=\"Loss적용 Y Size\" cssclass=\"cell_head\" tooltiptext=\"APPLYLOSSYSIZE\" textAlign=\"left\"/><Cell row=\"4\" col=\"1\" text=\"bind:APPLYLOSSYSIZE\" maskeditformat=\"#,##0.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"4\" col=\"2\" textAlign=\"left\" cssclass=\"cell_head\" text=\"PNL Size X\" tooltiptext=\"PNLSIZEX\"/><Cell row=\"4\" col=\"3\" text=\"bind:PNLSIZEXAXIS\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\"/><Cell row=\"4\" col=\"4\" textAlign=\"left\" cssclass=\"cell_head\" text=\"PNL Size Y\" tooltiptext=\"PNLSIZEY\"/><Cell row=\"4\" col=\"5\" text=\"bind:PNLSIZEYAXIS\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"mask\"/><Cell row=\"5\" text=\"소요량\" cssclass=\"cell_head\" tooltiptext=\"COMPONENTQTY\" textAlign=\"left\"/><Cell row=\"5\" col=\"1\" text=\"bind:COMPONENTQTY\" maskeditformat=\"#,##0.####0\" displaytype=\"mask\" textAlign=\"right\"/><Cell row=\"5\" col=\"2\" textAlign=\"left\" cssclass=\"cell_head\" text=\"등록일\" tooltiptext=\"WRITEDATE\"/><Cell row=\"5\" col=\"3\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd ddd HH:mm:ss\" calendardisplaynulltype=\"none\" calendardisplayinvalidtype=\"none\" displaytype=\"normal\" textAlign=\"left\"/><Cell row=\"5\" col=\"4\" textAlign=\"left\" cssclass=\"cell_head\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/><Cell row=\"5\" col=\"5\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" displaytype=\"normal\" textAlign=\"left\"/><Cell row=\"6\" text=\" \"/><Cell row=\"6\" col=\"1\" text=\"  \" tooltiptext=\" \"/><Cell row=\"6\" col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" cssclass=\"cell_head\" textAlign=\"left\"/><Cell row=\"6\" col=\"3\" text=\"bind:CREATOR\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"6\" col=\"4\" text=\"수정자\" tooltiptext=\"MODIFIER\" cssclass=\"cell_head\" textAlign=\"left\"/><Cell row=\"6\" col=\"5\" text=\"bind:MODIFIER\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_routionRollLoss","title:2","0",null,"34","763",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_rolllossOperation","title3_00:2","219",null,"34","153",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
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
            obj.set_taborder("10");
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

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
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
        this.addIncludeScript("BAS03100M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Routing Roll Loss
         * 파일명 		: BAS03100M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.02.03
         *
         * 설  명		: ID Serial 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.03	방성혁   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
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

        	//sort 제거
        	this.div_work.form.grd_RolllossOperation.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거
        	this.div_work.form.grd_RolllossOperation.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.div_work.form.grd_RolllossOperation.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리

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
            this.ds_rolllossOperation.clearData();
        	this.ds_detail.clearData();
        	this.ds_routionRollLoss.clearData();
        	this.ds_search.clearData();
        	var sRow = this.ds_search.addRow();
        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "RODUCTDEFTYPE", this.tab_search.Tabpage1.form.cmb_productDefType.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.edt_productDefVersion.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);


        	var sSvcID = "RoutionRollLossList";
        	var sController = "/bas03100/selectRoutionRollLossList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_routionRollLoss=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        	if (!this.gfn_dsIsUpdated(this.ds_rolllossOperation) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	this.ds_rollLoss.clearData()

        	var aRow = this.ds_rollLoss.addRow();
        	var mRow = this.ds_routionRollLoss.rowposition;

        	this.ds_rollLoss.setColumn(aRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_rollLoss.setColumn(aRow, "PLANTID",  this.ds_routionRollLoss.getColumn(mRow, "PLANTID"));
        	this.ds_rollLoss.setColumn(aRow, "PRODUCTDEFID",  this.ds_routionRollLoss.getColumn(mRow, "PRODUCTDEFID"));
        	this.ds_rollLoss.setColumn(aRow, "PRODUCTDEFVERSION",  this.ds_routionRollLoss.getColumn(mRow, "PRODUCTDEFVERSION"));
        	this.ds_rollLoss.setColumn(aRow, "MATERIALID",  this.ds_routionRollLoss.getColumn(mRow, "MATERIALDEFID"));
        	this.ds_rollLoss.setColumn(aRow, "DESCRIPTION",  this.ds_routionRollLoss.getColumn(mRow, "DESCRIPTION"));
            this.ds_rollLoss.setColumn(aRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	trace(this.ds_rollLoss.saveXML());
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveRolllossOperation";
        	var sController = "/bas03100/saveRolllossOperation.do";
        	var sInDatasets = "ds_rolllossOperation=ds_rolllossOperation:A ds_rollLoss=ds_rollLoss:A";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

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
        	case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
        			break;
        		}
        	case "RoutionRollLossList":
        	     if (this.ds_routionRollLoss.getRowCount() == 0)
        	     {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		 }
        		 trace (this.ds_routionRollLoss.saveXML())

        		break;
        	case "RolllossOperationList":
        	     if (this.ds_rolllossOperation.getRowCount() > 0)
        	     {

        	     	this.RolllossOperationDetail();
        	     } else {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		 }
        		 trace(this.ds_detail.saveXML());
        		break;
        	case "saveRolllossOperation" :
        	      trace(this.ds_rolllossOperation.saveXML());
        		  this.gfn_Message("SuccedSave", null, "info", "ok");
        		 //  var sRow = this.ds_routionRollLoss.findRowExpr("PRODUCTDEFID == '"+this.ds_routionRollLoss.getColumn(this.div_work.form.grd_RoutionRollLoss.getSelectedDatasetRows(), "PRODUCTDEFID")+"'");
        		  var sRow = this.ds_routionRollLoss.rowposition;
        		  // this.RolllossOperationListSelect(sRow);
        		   this.RolllossOperationListSelect(sRow);
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

        	if(sPopupId == "SEARCH_PRODUCTD")
        	{
        		this.tab_search.Tabpage1.form.edt_productDefId.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_productDefVersion.set_value(rtn[2]);
        	}

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.RolllossOperationListSelect = function(SRow)
        {
        	this.ds_rolllossOperation.clearData();

            this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.ds_routionRollLoss.getColumn(SRow,"PRODUCTDEFVERSION"));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.ds_routionRollLoss.getColumn(SRow,"PRODUCTDEFID"));
            this.ds_search.setColumn(0, "LANGUAGETYPE",  nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID = "RolllossOperationList";
        	var sController = "/bas03100/selectRolllossOperationList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_rolllossOperation=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        this.RolllossOperationDetail = function()
        {
             var masterRow = this.ds_routionRollLoss.findRowExpr("PRODUCTDEFID == '"+this.ds_search.getColumn(0, "PRODUCTDEFID")+"'");
        	 this.ds_detail.deleteAll();
        	 var dRow = this.ds_detail.addRow();

        	 var PRODUCTDEFID       = this.ds_routionRollLoss.getColumn(masterRow,"PRODUCTDEFID");
        	 var PRODUCTDEFVERSION   = this.ds_routionRollLoss.getColumn(masterRow,"PRODUCTDEFVERSION");
        	 var PRODUCTDEFNAME      = this.ds_routionRollLoss.getColumn(masterRow,"PRODUCTDEFNAME");
        	 var PLANTID             = this.ds_routionRollLoss.getColumn(masterRow,"PLANTID");
        	 var PCSPNL              = this.ds_routionRollLoss.getColumn(masterRow,"PCSPNL");
        	 var PCSMM               = this.ds_routionRollLoss.getColumn(masterRow,"PCSMM");
        	 var PNLSIZEYAXIS        = this.ds_routionRollLoss.getColumn(masterRow,"PNLSIZEYAXIS");
        	 var PNLSIZEXAXIS        = this.ds_routionRollLoss.getColumn(masterRow,"PNLSIZEXAXIS");
        	 var MATERIALDEFID       = this.ds_routionRollLoss.getColumn(masterRow,"MATERIALDEFID");
        	 var MATERIALDEFNAME     = this.ds_routionRollLoss.getColumn(masterRow,"MATERIALDEFNAME");
        	 var COMPONENTQTY        = this.ds_routionRollLoss.getColumn(masterRow,"COMPONENTQTY");
        	 var ENTERPRISEID        = this.ds_routionRollLoss.getColumn(masterRow,"ENTERPRISEID");
        	 var OPERATIONID         = this.ds_routionRollLoss.getColumn(masterRow,"OPERATIONID");
        	 var USERSEQUENCE        = this.ds_routionRollLoss.getColumn(masterRow,"USERSEQUENCE");
        	 var CREATOR             = this.ds_routionRollLoss.getColumn(masterRow,"CREATOR");
        	 var CREATEDTIME         = this.ds_routionRollLoss.getColumn(masterRow,"CREATEDTIME");
        	 var MODIFIER            = this.ds_routionRollLoss.getColumn(masterRow,"MODIFIER");
        	 var MODIFIEDTIME        = this.ds_routionRollLoss.getColumn(masterRow,"MODIFIEDTIME");
        	 var DESCRIPTION         = this.ds_routionRollLoss.getColumn(masterRow,"DESCRIPTION");

        	 var lossMSum = 0;
        	 var lossPnlSum = 0;
        	 for(var i = 0 ; i < this.ds_rolllossOperation.getRowCount(); i++)
        	 {
        	    lossMSum   +=  nexacro.toNumber(this.ds_rolllossOperation.getColumn(i, "LOSSM") == undefined ? 0 : this.ds_rolllossOperation.getColumn(i, "LOSSM"));
        		lossPnlSum +=  nexacro.toNumber(this.ds_rolllossOperation.getColumn(i, "LOSSPNL") == undefined ? 0 : this.ds_rolllossOperation.getColumn(i, "LOSSPNL"));
        	 }
        	 this.ds_detail.set_enableevent(false);
        	 this.ds_detail.setColumn(dRow,"PRODUCTDEFID", PRODUCTDEFID);
        	 this.ds_detail.setColumn(dRow,"PRODUCTDEFNAME", PRODUCTDEFNAME);
        	 this.ds_detail.setColumn(dRow,"MATERIALDEFID", MATERIALDEFID);
        	 this.ds_detail.setColumn(dRow,"MATERIALDEFNAME", MATERIALDEFNAME);

        	 this.ds_detail.setColumn(dRow,"PNL", lossPnlSum);
        	 this.ds_detail.setColumn(dRow,"ROLLLOSSM", lossMSum);
        	// alert("lossMSum = " + lossMSum);
        	// this.ds_detail.setColumn(dRow,"LOSS", PNLSIZEYAXIS*lossPnlSum/1000); // PNLSIZEYAXIS*lossPnlSum
        	 this.ds_detail.setColumn(dRow,"LOSS", lossMSum/100 * 100);
        	 this.ds_detail.setColumn(dRow,"COMPONENTQTY", COMPONENTQTY);
        	 this.ds_detail.setColumn(dRow, "SUMMARY", PCSPNL);
        	 this.ds_detail.setColumn(dRow, "PCSMM", PCSMM);

        	 this.ds_detail.setColumn(dRow, "PNLSIZEXAXIS", PNLSIZEXAXIS);
        	 this.ds_detail.setColumn(dRow, "PNLSIZEYAXIS", PNLSIZEYAXIS);
        	 this.ds_detail.setColumn(dRow, "APPLYLOSSYSIZE", COMPONENTQTY * PCSPNL);

        	 if (PNLSIZEYAXIS != 0 && this.ds_detail.getColumn(0,"APPLYLOSSYSIZE") !=0)
        	 {
        	 	 this.ds_detail.setColumn(dRow,"BASELOSS", this.ds_detail.getColumn(dRow,"APPLYLOSSYSIZE") * 1000/ PNLSIZEYAXIS * 100);
        	 } else {
        		this.ds_detail.setColumn(dRow,"BASELOSS", 0);
        	}

             this.ds_detail.setColumn(dRow, "CREATOR", CREATOR);
        	 this.ds_detail.setColumn(dRow, "CREATEDTIME", CREATEDTIME);
        	 this.ds_detail.setColumn(dRow, "MODIFIER", MODIFIER);
        	 this.ds_detail.setColumn(dRow, "MODIFIEDTIME", MODIFIEDTIME);

        	 this.ds_detail.set_enableevent(true);



        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.div_work_btn_addRow_onclick = function(obj,e)
        {

        };


        this.div_work_grd_RoutionRollLoss_oncellclick = function(obj,e)
        {

        	//this.RolllossOperationListSelect(e.row);

        };

        this.tab_search_Tabpage1_btn_productCode_onclick = function(obj,e)
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
        	var txtSearch = "";

        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_productDefId.value))
        	{
        		txtSearch = "PRODUCTDEFID="+ this.tab_search.Tabpage1.form.edt_productDefId.value;
        	}

        	var popupId = "SEARCH_PRODUCTD";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00022";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        /**************************************************************************
         * 공정별Loss 그리드가 변경 되었을때 처리
         ***************************************************************************/
        this.ds_rolllossOperation_oncolumnchanged = function(obj,e)
        {

           var sValue =  this.ds_detail.getColumn(0,"PNLSIZEYAXIS") * e.newvalue/1000;
           this.ds_rolllossOperation.setColumn(e.row, "LOSSM", sValue);

           this.RolllossOperationDetail();


        };


        this.ds_routionRollLoss_onrowposchanged = function(obj,e)
        {
             if (e.newrow < 0)
             {
             	return false;
             }

        	 this.RolllossOperationListSelect(e.newrow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_productDefId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productCode_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_routionRollLoss.addEventHandler("onrowposchanged",this.ds_routionRollLoss_onrowposchanged,this);
            this.ds_rolllossOperation.addEventHandler("oncolumnchanged",this.ds_rolllossOperation_oncolumnchanged,this);
        };
        this.loadIncludeScript("BAS03100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
