(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02800P3");
            this.set_titletext("결재정보");
            this.set_tooltiptext("APPROVALINFORMATION");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALNO\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userApproval", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approval", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalState", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalList1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalList2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalList3", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalList4", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","51",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_user","264","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("사용자ID / 사용자명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("IDNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","60","8","13",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","4.91%","24","39",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01",null,null,"60","8","13","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_user","409","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_site","125","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"86","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"214","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","20","93","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_approvalInfo","20","20",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("결재정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("APPROVALINFORMATION");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("sta_userInfo","20","div_search:20","250","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("USERLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_userApproval","20","div_search:61","42%",null,null,"58",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_userApproval");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"3\" text=\"ID\" tooltiptext=\"ID\"/><Cell col=\"4\" text=\"사용자명\" tooltiptext=\"USERNAME\"/><Cell col=\"5\" text=\"이메일주소\" tooltiptext=\"EMAILADDRESS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PLANTID\"/><Cell col=\"3\" text=\"bind:CHARGERID\"/><Cell col=\"4\" text=\"bind:USERNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EMAILADDRESS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_QCApproval","grd_userApproval:10","div_search:20",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Div("div_QCApproval1","0","0",null,"24%","0",null,null,null,null,null,this.div_QCApproval.form);
            obj.set_taborder("0");
            obj.set_background("");
            obj.set_text("");
            this.div_QCApproval.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","48","0","250","31",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval1.form);
            obj.set_taborder("0");
            obj.set_text("요청");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("REQUEST");
            this.div_QCApproval.form.div_QCApproval1.addChild(obj.name, obj);

            obj = new Grid("grd_approvalList","50","41",null,null,"0","0",null,null,null,null,this.div_QCApproval.form.div_QCApproval1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_approvalList1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"CLASS\" text=\"구분\"/><Cell col=\"3\" text=\"결재상태\" tooltiptext=\"APPROVALSTATE\"/><Cell col=\"4\" text=\"사용자명\" tooltiptext=\"USERNAME\"/><Cell col=\"5\" text=\"부서\" tooltiptext=\"DEPARTMENT\"/><Cell col=\"6\" text=\"이메일주소\" tooltiptext=\"EMAILADDRESS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHARGETYPE\" displaytype=\"combotext\" combodataset=\"ds_approval\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:APPROVALSTATE\" displaytype=\"combotext\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" combodataset=\"ds_approvalState\"/><Cell col=\"4\" text=\"bind:USERNAME\"/><Cell col=\"5\" text=\"bind:DEPARTMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMAILADDRESS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_QCApproval.form.div_QCApproval1.addChild(obj.name, obj);

            obj = new Button("btn_add","0","41","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval1.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'image::button_right.png\')");
            this.div_QCApproval.form.div_QCApproval1.addChild(obj.name, obj);

            obj = new Button("btn_minus","0","83","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval1.form);
            obj.set_taborder("3");
            obj.set_icon("url(\'image::button_left.png\')");
            this.div_QCApproval.form.div_QCApproval1.addChild(obj.name, obj);

            obj = new Div("div_QCApproval2","0","25%",null,"24%","0",null,null,null,null,null,this.div_QCApproval.form);
            obj.set_taborder("1");
            obj.set_background("");
            obj.set_text("");
            this.div_QCApproval.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","48","0","250","31",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval2.form);
            obj.set_taborder("0");
            obj.set_text("검토/합의");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("AGREEMENT");
            this.div_QCApproval.form.div_QCApproval2.addChild(obj.name, obj);

            obj = new Grid("grd_approvalList","50","41",null,null,"0","0",null,null,null,null,this.div_QCApproval.form.div_QCApproval2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_approvalList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"CLASS\" text=\"구분\"/><Cell col=\"3\" text=\"결재상태\" tooltiptext=\"APPROVALSTATE\"/><Cell col=\"4\" text=\"사용자명\" tooltiptext=\"USERNAME\"/><Cell col=\"5\" text=\"부서\" tooltiptext=\"DEPARTMENT\"/><Cell col=\"6\" text=\"이메일주소\" tooltiptext=\"EMAILADDRESS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHARGETYPE\" displaytype=\"combotext\" combodataset=\"ds_approval\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:APPROVALSTATE\" displaytype=\"combotext\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" combodataset=\"ds_approvalState\"/><Cell col=\"4\" text=\"bind:USERNAME\"/><Cell col=\"5\" text=\"bind:DEPARTMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMAILADDRESS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_QCApproval.form.div_QCApproval2.addChild(obj.name, obj);

            obj = new Button("btn_add","0","41","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval2.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'image::button_right.png\')");
            this.div_QCApproval.form.div_QCApproval2.addChild(obj.name, obj);

            obj = new Button("btn_minus","0","83","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval2.form);
            obj.set_taborder("3");
            obj.set_icon("url(\'image::button_left.png\')");
            this.div_QCApproval.form.div_QCApproval2.addChild(obj.name, obj);

            obj = new Div("div_QCApproval3","0","50%",null,"24%","0",null,null,null,null,null,this.div_QCApproval.form);
            obj.set_taborder("2");
            obj.set_background("");
            obj.set_text("");
            this.div_QCApproval.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","48","0","250","31",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval3.form);
            obj.set_taborder("0");
            obj.set_text("승인");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("APPROBAL");
            this.div_QCApproval.form.div_QCApproval3.addChild(obj.name, obj);

            obj = new Grid("grd_approvalList","50","41",null,null,"0","0",null,null,null,null,this.div_QCApproval.form.div_QCApproval3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_approvalList3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"CLASS\" text=\"구분\"/><Cell col=\"3\" text=\"결재상태\" tooltiptext=\"APPROVALSTATE\"/><Cell col=\"4\" text=\"사용자명\" tooltiptext=\"USERNAME\"/><Cell col=\"5\" text=\"부서\" tooltiptext=\"DEPARTMENT\"/><Cell col=\"6\" text=\"이메일주소\" tooltiptext=\"EMAILADDRESS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHARGETYPE\" displaytype=\"combotext\" combodataset=\"ds_approval\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:APPROVALSTATE\" displaytype=\"combotext\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" combodataset=\"ds_approvalState\"/><Cell col=\"4\" text=\"bind:USERNAME\"/><Cell col=\"5\" text=\"bind:DEPARTMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMAILADDRESS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_QCApproval.form.div_QCApproval3.addChild(obj.name, obj);

            obj = new Button("btn_add","0","41","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval3.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'image::button_right.png\')");
            this.div_QCApproval.form.div_QCApproval3.addChild(obj.name, obj);

            obj = new Button("btn_minus","0","83","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval3.form);
            obj.set_taborder("3");
            obj.set_icon("url(\'image::button_left.png\')");
            this.div_QCApproval.form.div_QCApproval3.addChild(obj.name, obj);

            obj = new Div("div_QCApproval4","0","75%",null,"25%","0",null,null,null,null,null,this.div_QCApproval.form);
            obj.set_taborder("3");
            obj.set_background("");
            obj.set_text("");
            this.div_QCApproval.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","48","0","250","31",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval4.form);
            obj.set_taborder("0");
            obj.set_text("수신");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("RECEPTION");
            this.div_QCApproval.form.div_QCApproval4.addChild(obj.name, obj);

            obj = new Grid("grd_approvalList","50","41",null,null,"0","0",null,null,null,null,this.div_QCApproval.form.div_QCApproval4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_approvalList4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"CLASS\" text=\"구분\"/><Cell col=\"3\" text=\"결재상태\" tooltiptext=\"APPROVALSTATE\"/><Cell col=\"4\" text=\"사용자명\" tooltiptext=\"USERNAME\"/><Cell col=\"5\" text=\"부서\" tooltiptext=\"DEPARTMENT\"/><Cell col=\"6\" text=\"이메일주소\" tooltiptext=\"EMAILADDRESS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHARGETYPE\" displaytype=\"combotext\" combodataset=\"ds_approval\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:APPROVALSTATE\" displaytype=\"combotext\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" combodataset=\"ds_approvalState\"/><Cell col=\"4\" text=\"bind:USERNAME\"/><Cell col=\"5\" text=\"bind:DEPARTMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMAILADDRESS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_QCApproval.form.div_QCApproval4.addChild(obj.name, obj);

            obj = new Button("btn_add","0","41","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval4.form);
            obj.set_taborder("2");
            obj.set_icon("url(\'image::button_right.png\')");
            this.div_QCApproval.form.div_QCApproval4.addChild(obj.name, obj);

            obj = new Button("btn_minus","0","83","40","38",null,null,null,null,null,null,this.div_QCApproval.form.div_QCApproval4.form);
            obj.set_taborder("3");
            obj.set_icon("url(\'image::button_left.png\')");
            this.div_QCApproval.form.div_QCApproval4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM02800P3.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM02800P3.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM02800P3.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 결재정보 팝업
         * 파일명 		: QAM02800P3.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.24
         *
         * 설  명		: 변경점 신청서 등록/수정 > 결재자 추가 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.24	권혜영   	최초작성
         *---------------------------------------------------------------------------------------


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_userid = this.gf_getUserId();
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_selectChargeType("RoleClassification");
        	this.fn_selectApprovalState("ReviewSettleState");

        	this.ds_approvalList.appendData(this.opener.ds_approvalList, true);

        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	// 유효성 검증
        	if(!this.fn_checkValidationApproval()) return;

        	this.opener.fn_saveApproval(this.ds_approvalList);
        	this.close();
        };

        /*
         * 기능 : 검색 (사용자 검색)
         */
        this.fn_search = function (obj, e)
        {
            this.ds_userApproval.clearData();
        	var sSvcID 			= "selectUserApproval";
        	var sController 	= "/qam02800/selectUserApproval.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_userApproval=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", 		"selectUserApproval");
        		sArgs 			+= this.gfn_setParam("PLANTID", 	this.div_search.form.cbo_site.value);
        		sArgs 			+= this.gfn_setParam("USERIDNAME", 	this.div_search.form.edt_user.value);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.div_search.form.cbo_site.set_value(this.gf_getSiteType());
        	this.div_search.form.edt_user.set_value("");
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectChargeType") {

        		} else if (trId == "selectApprovalState") {

        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        //최초 호출되는 초기화 함수
        this.fn_formInit = function ()
        {
        	this.fn_searchClear();
        	this.fn_setDataset();
        	this.fn_setAddMinusButtonEnable();
        };

        /*
         * PROCESSTYPE 에 따른 dataset에 set
         */
        this.fn_setDataset = function ()
        {
        	for(var i = 1; i <= 4; i++) {
        		var objDs = eval("this.ds_approvalList" + i);

        		this.ds_approvalList.filter("PROCESSTYPE == '"+this.fn_getProcessType(i)+"'");

        		objDs.appendData(this.ds_approvalList, true);
        		objDs.set_rowposition(0);

        		this.ds_approvalList.filter("");
        	}
        };

        /*
         * 순번으로 PROCESSTYPE return
         */
        this.fn_getProcessType = function (idx)
        {
        	var processType;
        	switch (idx)
        	{
        		case 1:
        			processType = "Draft";
        			break;
        		case 2:
        			processType = "Review";
        			break;
        		case 3:
        			processType = "Approval";
        			break;
        		case 4:
        			processType = "Receiving";
        			break;
        		default:
        			processType = "";
        			break;
        	}
        	return processType;
        };

        /*
         * 결재정보 그리드 > 구분 콤보 조회
         */
        this.fn_selectChargeType = function (chargeType)
        {
        	this.ds_approval.clearData();
        	var sSvcID 			= "selectChargeType";
        	var sController 	= "/qam02800/selectApprovalType.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_approval=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("APPROVALTYPE", chargeType);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callback", true, false);
        };

        /*
         * 결재정보 그리드 > 결재상태 콤보 조회
         */
        this.fn_selectApprovalState = function (approvalState)
        {
        	this.ds_approvalState.clearData();
        	var sSvcID 			= "selectApprovalState";
        	var sController 	= "/qam02800/selectApprovalType.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_approvalState=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("APPROVALTYPE", approvalState);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callback", true, false);
        };

        /*
         * 사용자 추가
         */
        this.fn_addApprovalUser = function(idx)
        {
        	if(this.ds_userApproval.getCaseCount("CHK == '1'") <= 0) return;

        	var objDs = eval("this.ds_approvalList" + idx);
        	var processType = this.fn_getProcessType(idx);
        	var sequence = 0;

        	//sequence check
        	if(!this.fn_checkSequence(objDs)) {
        		this.gfn_Message("ApprovalAddMinusCheck3", null , "warning","ok");   //결재자 변경 권한이 아직 없습니다
        		return;
        	}

        	// 모든 그리드의 dataset 합치기
        	this.fn_mergeAllDs();
        	if(objDs.rowcount > 0) {
        		sequence = nexacro.toNumber(objDs.getMax("SEQUENCE"));
        	}

        	this.ds_userApproval.filter("CHK == '1'");
        	for(var i = 0; i < this.ds_userApproval.rowcount; i++) {
        		var chargerid = this.ds_userApproval.getColumn(i, "CHARGERID");
        		var filterStr = "CHARGERID == '" + chargerid + "'";

        		var iThisGrd = objDs.getCaseCount(filterStr);
        		var iAllGrd = this.ds_approvalList.getCaseCount(filterStr);

        		//동일인 체크
        		if (iThisGrd == 0 && iAllGrd == 0) {
        			this.ds_userApproval.setColumn(i, "CHK", "0");

        			var nRow = objDs.addRow();
        			objDs.copyRow(nRow, this.ds_userApproval, i);

        			//값 세팅
        			objDs.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        			objDs.setColumn(nRow, "PLANTID", this.gf_getSiteType());
        			objDs.setColumn(nRow, "SEQUENCE", sequence + 1);
        			objDs.setColumn(nRow, "PROCESSTYPE", processType);

        			//요청그리드
        			if(idx == 1) {
        				//Request(기안), Approval(승인), Review(검토)
        				if(objDs.rowcount > 0) {
        					objDs.setColumn(nRow, "CHARGETYPE", "");
        				} else {
        					objDs.setColumn(nRow, "CHARGETYPE", "Request");
        				}
        			}
        		} else {
        			this.gfn_Message("ApprovalAllInfo", null , "warning","ok"); //동일한 사람이 다른 결제정보에 존재 합니다
        			this.ds_userApproval.filter("");
        			return;
        		}
        	}
        	this.ds_userApproval.filter("");
        };

        /*
         * 사용자 삭제
         */
        this.fn_delApprovalUser = function(idx)
        {
        	var objDs = eval("this.ds_approvalList" + idx);
        	if(objDs.getCaseCount("CHK == '1'") <= 0) return;

        	// Draft && 기안자가 포함되었으면
        	if(idx == 1 && objDs.getCaseCount("PROCESSTYPE == 'Draft' && CHARGETYPE == 'Request'") > 0) {
        		this.gfn_Message("ApprovalDraftDelete", null , "warning","ok"); //요청자가 등록되지 않았습니다
        		return;
        	}

        	// 실제 delete 부분과 공통 부분
        	if(objDs.getCaseCount("APPROVALSTATE == 'Approval' || APPROVALSTATE == 'Reclamation' || APPROVALSTATE == 'Companion'") > 0) {
        		this.gfn_Message("ApprovalDeleteCheckByState", null , "warning","ok"); //승인, 회수, 반려 인 결재상태는 삭제 될 수 없습니다.
        		return;
        	}
        	this.fn_delRow(objDs);
        };

        /*
         * 사용자 삭제
         */
        this.fn_delRow = function(objDs)
        {
        	var arrDelRow = [];
        	for(var i = 0; i < objDs.rowcount; i++) {
        		if(objDs.getColumn(i, "CHK") == "1") {
        			arrDelRow.push(i);
        		}
        	}
        	objDs.deleteMultiRows(arrDelRow);
        };
        /*
         * 모든 dataset 합치기
         */
        this.fn_mergeAllDs = function()
        {
        	this.ds_approvalList.clearData();
        	for(var i = 1; i <= 4; i++) {
        		var objDs = eval("this.ds_approvalList" + i);
        		this.ds_approvalList.appendData(objDs);
        	}
        };

        /*
         * add, minus button enable 처리 (AS-IS : SetAddMinusButtonEnable)
         */
        this.fn_setAddMinusButtonEnable = function ()
        {
        	// 요청자 ID
        	this.ds_approvalList1.filter("CHARGETYPE == 'Request'");  //CHARGETYPE == Request의 첫번째 행
        	var chargerid = this.ds_approvalList1.getColumn(0, "CHARGERID");
        	var approvalstate = this.ds_approvalList1.getColumn(0, "APPROVALSTATE");

        	//요청자가 로그인
        	if(chargerid == this.fv_userid) {
        		//요청자가 승인
        		if(approvalstate == "Approval") {
        			//모든 버튼 비활성화
        			this.fn_setEnableAddMinusButton("disable");
        			this.btn_save.set_enable(false);
        		}
        		//요청자가 승인 안함
        		else {
        			//모든 버튼 활성화
        			this.fn_setEnableAddMinusButton("enable");
        		}
        	}
        	// 결재자 로그인
        	else {
        		this.fn_setAddMinusButtonEnableByProcessType();
        	}

        };

        /*
         * processtype 별 그리드 button enable 처리
         */
        this.fn_setAddMinusButtonEnableByProcessType = function()
        {
        	for(var i = 1; i <= 4; i++) {
        		var objDs = eval("this.ds_approvalList" + i);
        		var rowCnt = objDs.rowcount;

        		if( (rowCnt > 0 && objDs.getCaseCount("APPROVALSTATE == 'Approval'") == rowCnt) //모두 승인됨
        			|| objDs.getCaseCount("CHARGERID == '"+this.fv_userid+"'") == 0 //결재부서에 없음
        			|| objDs.getCaseCount("CHARGERID == '"+this.fv_userid+"' && APPROVALSTATE == 'Approval'") == 1 //승인자
        			|| !this.fn_checkSequence(objDs)) //결재순서
        		{
        			//Draft 비활성화
        			this.qamfn_setCompControl(this.div_QCApproval.form["div_QCApproval" + i ].form.components, "disable", [Button]);
        		}
        	}
        };

        /*
         * button 모두 활성화 또는 비활성화 처리
         */
        this.fn_setEnableAddMinusButton = function(type)
        {
        	for(var i = 1; i <= 4; i++) {
        		this.qamfn_setCompControl(this.div_QCApproval.form["div_QCApproval" + i ].form.components, type, [Button]);
        	}
        };

        /*
         * check sequence (AS-IS : CheckSequence)
         */
        this.fn_checkSequence = function(objDs)
        {
        	var ret = true;
        	var filterStr = "", caseCount = 0;
        	var sequence = 0, maxSequence = 0;

        	// STEP1. CHARGERID check
        	filterStr = "CHARGERID == '" + this.fv_userid + "'";
        	caseCount = objDs.getCaseCount(filterStr);

        	if(caseCount > 0) {
        		objDs.filter(filterStr);
        		sequence = nexacro.toNumber(objDs.getMin("SEQUENCE")); //제일 첫번째 seq
        		objDs.filter("");
        	}

        	// STEP2. APPROVALSTATE  Approval check
        	filterStr = "APPROVALSTATE == 'Approval'";
        	caseCount = objDs.getCaseCount(filterStr);

        	if(caseCount > 0) {
        		objDs.filter(filterStr);
        		maxSequence = nexacro.toNumber(objDs.getMax("SEQUENCE")); //max seq
        		objDs.filter("");

        		if(maxSequence + 1 != sequence) {
        			ret = false;
        		}
        	}
        	return ret;
        };

        /*
         * 유효성 검증 (결재정보)
         * - 결재부서 필수 체크 : 요청부서,승인부서,수신부서 등록되지 않았습니다.
         */
        this.fn_checkValidationApproval = function()
        {
        	if(this.ds_approvalList1.rowcount == 0) {
        		this.gfn_Message("ApprovalApprobalCheck1",null , "warning","ok"); //요청부서가 등록되지 않았습니다.
        		return false;

        	} else if(this.ds_approvalList3.rowcount  == 0) {
        		this.gfn_Message("ApprovalApprobalCheck2",null , "warning","ok");//승인부서가 등록되지 않았습니다.
        		return false;

        	} else if(this.ds_approvalList4.rowcount  == 0) {
        		this.gfn_Message("ApprovalApprobalCheck3",null , "warning","ok");//수신부서가 등록되지 않았습니다.
        		return false;
        	}

        	// 모든 그리드의 dataset 합치기
        	this.fn_mergeAllDs();
        	var objDs = this.ds_approvalList, rowCnt = objDs.rowcount;

        	for(var i = 0; i < rowCnt; i++) {
        		objDs.setColumn(i, "SEQUENCE", i+1);
        		objDs.setColumn(i, "APPROVALTYPE", "ReliabilityVerificationRequestNonRegular");
        		objDs.setColumn(i, "APPROVALSTATE_ORG", objDs.getColumn(i, "APPROVALSTATE"));
        	}
        	var nCnt = objDs.getCaseCount("CHARGETYPE == 'Request' || CHARGETYPE == 'Approval' || CHARGETYPE == 'Review'");
        	if(rowCnt != nCnt) {
        		this.gfn_Message("RoleClassification", null , "warning","ok"); //역활구분을 선택해주세요.
        		return false;
        	}
        	return true;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        // 조회 > 사용자ID / 사용자명 edit key down event
        this.div_search_edt_user_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fn_search();
        	}
        };

        // 요청 그리드 > 행추가
        this.div_QCApproval_div_QCApproval1_btn_add_onclick = function(obj,e)
        {
        	this.fn_addApprovalUser(1);
        };

        // 검토/합의 그리드 > 행추가
        this.div_QCApproval_div_QCApproval2_btn_add_onclick = function(obj,e)
        {
        	this.fn_addApprovalUser(2);
        };

        // 승인 그리드 > 행추가
        this.div_QCApproval_div_QCApproval3_btn_add_onclick = function(obj,e)
        {
        	this.fn_addApprovalUser(3);
        };

        // 수신 그리드 > 행추가
        this.div_QCApproval_div_QCApproval4_btn_add_onclick = function(obj,e)
        {
        	this.fn_addApprovalUser(4);
        };

        // 요청 그리드 > 행삭제
        this.div_QCApproval_div_QCApproval1_btn_minus_onclick = function(obj,e)
        {
        	this.fn_delApprovalUser(1);
        };

        // 검토/합의 그리드 > 행삭제
        this.div_QCApproval_div_QCApproval2_btn_minus_onclick = function(obj,e)
        {
        	this.fn_delApprovalUser(2);
        };

        // 승인 그리드 > 행삭제
        this.div_QCApproval_div_QCApproval3_btn_minus_onclick = function(obj,e)
        {
        	this.fn_delApprovalUser(3);
        };

        // 수신 그리드 > 행삭제
        this.div_QCApproval_div_QCApproval4_btn_minus_onclick = function(obj,e)
        {
        	this.fn_delApprovalUser(4);
        };

        // 그리드 > 결재 상태 조회
        this.grd_approvalList_oncellclick = function(obj,e)
        {
        	if (e.cell == obj.getBindCellIndex("body", "CHARGETYPE")) {
        		var objDs = obj.getBindDataset();

        		var filterStr = "";
        		var chargeType = "";
        		var processType = objDs.getColumn(e.row, "PROCESSTYPE");
        		var chargeType = objDs.getColumn(e.row, "CHARGETYPE");
        		var chargeId = objDs.getColumn(e.row, "CHARGERID");
        		var approvalState = objDs.getColumn(e.row, "APPROVALSTATE");


        		//기안(요청)그리드에 본인만 기안자로 인식하고 나머지는 승인,검토자로 인식한다.
        		if(processType == "Draft" && chargeId != this.fv_userid) {
        			processType = "Review";
        		}

        		if(processType == "Draft") {
        			chargeType = "RoleClassification1";
        		} else {
        			chargeType = "RoleClassification2";
        		}

        		filterStr = "LOOKUP_TYPE == '"+chargeType+"'";

        		//승인자가 존재하면 CHARGETYPE은 승인만 선택 가능 하다
        		if(objDs.getCaseCount("CHARGETYPE == 'Approval' && APPROVALSTATE == 'Approval'") > 0) {
        			//결재구분 (Review 검토자)는 삭제 한다
        			filterStr += " && LOOKUP_CODE != 'Review'";
        		}

        		this.ds_approval.filter("");
        		this.ds_approval.filter(filterStr);
        	}
        };

        // dataset 변경 전 이벤트
        this.ds_approvalList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CHK") return;
        	var iThisGrdApprovalCnt = obj.getCaseCount("APPROVALSTATE == 'Approval'");

        	if(obj.rowcount > 0 && iThisGrdApprovalCnt == obj.rowcount) {
        		this.gfn_Message("ApprovalAddMinusCheck5", null , "warning","ok");  //승인 완료 그룹은 변경이 불가능 합니다
        		return false;
        	}

        	//processType = "Draft"일 경우에만

        	if(obj == this.ds_approvalList1) {
        		var chargerid ="", approvalstate = "", sequence = 0;

        		obj.filter("PROCESSTYPE == 'Draft' && CHARGETYPE == 'Request'");
        		if(obj.rowcount > 0) {
        			chargerid = obj.getColumn(0, "CHARGERID");
        			approvalstate = obj.getColumn(0, "APPROVALSTATE");
        		}
        		obj.filter("");
        		//요청자가 로그인
        		if(chargerid == this.fv_userid && approvalstate == "Approval") {

        			//로그인 유저가 해당 구역에 존재 하는지 검사
        			if(obj.getCaseCount("CHARGERID == '"+this.fv_userid+"'") == 0) {
        				this.gfn_Message("ApprovalAddMinusCheck4", null , "warning","ok");  //자신이 속한 그룹에만 변경 권한이 있습니다
        				return false;
        			}

        			if(obj.getCaseCount("CHARGERID == '"+this.fv_userid+"'") > 0) {
        				approvalstate = obj.getColumn(0, "APPROVALSTATE");
        				sequence = nexacro.toNumber(obj.getColumn(0, "SEQUENCE"));

        				if(approvalstate == "Approval") {
        					this.gfn_Message("ApprovalAddMinusCheck2", null , "warning","ok"); //승인자는 변경 권한이 없습니다.
        					return false;
        				}
        				//sequence check
        				if(!this.fn_checkSequence(obj)) {
        					this.gfn_Message("ApprovalAddMinusCheck3", null , "warning","ok");   //결재자 변경 권한이 아직 없습니다
        					return;
        				}
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btnReset.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_search.form.edt_user.addEventHandler("onkeydown",this.div_search_edt_user_onkeydown,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.div_QCApproval.form.div_QCApproval1.form.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.div_QCApproval.form.div_QCApproval1.form.btn_add.addEventHandler("onclick",this.div_QCApproval_div_QCApproval1_btn_add_onclick,this);
            this.div_QCApproval.form.div_QCApproval1.form.btn_minus.addEventHandler("onclick",this.div_QCApproval_div_QCApproval1_btn_minus_onclick,this);
            this.div_QCApproval.form.div_QCApproval2.form.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.div_QCApproval.form.div_QCApproval2.form.btn_add.addEventHandler("onclick",this.div_QCApproval_div_QCApproval2_btn_add_onclick,this);
            this.div_QCApproval.form.div_QCApproval2.form.btn_minus.addEventHandler("onclick",this.div_QCApproval_div_QCApproval2_btn_minus_onclick,this);
            this.div_QCApproval.form.div_QCApproval3.form.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.div_QCApproval.form.div_QCApproval3.form.btn_add.addEventHandler("onclick",this.div_QCApproval_div_QCApproval3_btn_add_onclick,this);
            this.div_QCApproval.form.div_QCApproval3.form.btn_minus.addEventHandler("onclick",this.div_QCApproval_div_QCApproval3_btn_minus_onclick,this);
            this.div_QCApproval.form.div_QCApproval4.form.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.div_QCApproval.form.div_QCApproval4.form.btn_add.addEventHandler("onclick",this.div_QCApproval_div_QCApproval4_btn_add_onclick,this);
            this.div_QCApproval.form.div_QCApproval4.form.btn_minus.addEventHandler("onclick",this.div_QCApproval_div_QCApproval4_btn_minus_onclick,this);
            this.ds_approvalList.addEventHandler("cancolumnchange",this.ds_approvalList_cancolumnchange,this);
            this.ds_approvalList1.addEventHandler("cancolumnchange",this.ds_approvalList_cancolumnchange,this);
            this.ds_approvalList2.addEventHandler("cancolumnchange",this.ds_approvalList_cancolumnchange,this);
            this.ds_approvalList3.addEventHandler("cancolumnchange",this.ds_approvalList_cancolumnchange,this);
            this.ds_approvalList4.addEventHandler("cancolumnchange",this.ds_approvalList_cancolumnchange,this);
        };
        this.loadIncludeScript("QAM02800P3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
