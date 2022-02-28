(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA90210M");
            this.set_titletext("Organization Photo Chart");
            if (Form == this.constructor)
            {
                this._setFormPosition(1260,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_members", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"EMP_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ORGANIZATION_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"NVL(DEF\" type=\"STRING\" size=\"32\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"EMP_AGE\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PARENT_ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BOLB_IMAGE\" type=\"BLOB\" size=\"0\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTH_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"ORG_GUNJAE\" type=\"STRING\" size=\"32\"/><Column id=\"PROMOTION_DATE\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_part_leader", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"EMP_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"ORGANIZATION_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"EMP_AGE\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PARENT_ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"HIRE_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"BLOB_IMAGE\" type=\"BLOB\" size=\"0\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"BIRTH_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"ORG_GUNJAE\" type=\"STRING\" size=\"32\"/><Column id=\"PROMOTION_DATE\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","305","36",null,"73","10",null,null,null,"75",null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle","21","0",null,"32","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","115","31",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_00","118","5","240","20",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("sdlkdjf");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_dept_search","364","5","84","20",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("부서찾기");
            obj.set_tooltiptext("부서찾기");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_upperOrg","454","5","84","20",null,null,null,null,null,null,this.div_00.form.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_text("Uppor Org");
            obj.set_tooltiptext("Uppor Org");
            obj.set_enable("false");
            this.div_00.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static16","35","42",null,"24","165",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("* ‘Staff’을 누르시면 산하 소속 임직원을 조회하실 수 있습니다.");
            obj.set_cssclass("sta_font_blue");
            this.div_00.addChild(obj.name, obj);

            obj = new Div("div_topPhoto","0","36","295","169",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_cssclass("div_topPhoto");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","32","295","1",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("0");
            obj.set_border("0px none,0px none,1px solid #cccccc");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00","6","6","213","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_value("부서 명칭");
            obj.set_readonly("true");
            obj.set_text("부서 명칭");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer_00","10","46","90","106",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("2");
            obj.set_stretch("fixaspectratio");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00","103","48","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            obj.set_font("normal 700 12px/1.1  \"Nanum Gothic\", \"나눔 고딕\",\"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00","103","70","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직책");
            obj.set_tooltiptext("직책");
            obj.set_font("normal 700 12px/1.1  \"Nanum Gothic\", \"나눔 고딕\",\"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","103","92","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("호칭");
            obj.set_tooltiptext("호칭");
            obj.set_font("normal 700 12px/1.1  \"Nanum Gothic\", \"나눔 고딕\",\"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","103","114","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("직무");
            obj.set_tooltiptext("직무");
            obj.set_font("normal 700 12px/1.1  \"Nanum Gothic\", \"나눔 고딕\",\"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","103","136","70","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서일");
            obj.set_tooltiptext("부서일");
            obj.set_font("normal 700 12px/1.1  \"Nanum Gothic\", \"나눔 고딕\",\"Arial\"");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","183","48","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_text("홍길동");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","183","70","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_text("팀장");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","183","92","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_text("차장");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","183","114","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_text("선복 및 장비운영");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Calendar("cal_00","183","136","100","20",null,null,null,null,null,null,this.div_topPhoto.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_topPhoto.addChild(obj.name, obj);

            obj = new Div("div_work","0","205","1250",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Members");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("Members");
            this.div_work.addChild(obj.name, obj);

            obj = new ListView("ListView00","0.00%","35","100.00%",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_members");
            obj.set_cssclass("listView");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"295\" height=\"189\" cssclass=\"div_memPhoto\"><Cell id=\"Cell14\" left=\"0\" top=\"0\" width=\"100%\" height=\"169\" border=\"3px solid royalblue,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell id=\"Cell00\" left=\"0\" top=\"32\" width=\"295\" text=\"\" displaytype=\"normal\" verticalAlign=\"\" wordWrap=\"\" cssclass=\"div_bottom_line\" height=\"1\"/><Cell id=\"Cell01\" left=\"6\" top=\"6\" width=\"213\" text=\"bind:ORGANIZATION_NAME\" displaytype=\"normal\" cssclass=\"title\" height=\"20\" padding=\"0px 5px\"/><Cell id=\"btnStaff\" top=\"6\" width=\"60\" text=\"Staff\" cssclass=\"expr:EMP_TYPE === &apos;10&apos; || EMP_TYPE === &apos;20&apos; ? &apos;button&apos; : &apos;&apos;\" height=\"20\" right=\"10\" displaytype=\"expr:EMP_TYPE === &apos;10&apos; || EMP_TYPE === &apos;20&apos; ? &apos;buttoncontrol&apos; : &apos;none&apos;\" cursor=\"expr:EMP_TYPE === &apos;10&apos; || EMP_TYPE === &apos;20&apos; ? &apos;pointer&apos; : &apos;&apos;\" expandshow=\"hide\"/><Cell id=\"Cell03\" left=\"10\" top=\"46\" width=\"90\" text=\"bind:BLOB_IMAGE\" displaytype=\"imagecontrol\" imagestretch=\"fixaspectratio\" cssclass=\"image \" height=\"106\"/><Cell id=\"Cell04\" left=\"103\" top=\"45\" width=\"70\" text=\"성명\" displaytype=\"normal\" verticalAlign=\"middle\" wordWrap=\"\" cssclass=\"sta_WF_Label \" height=\"20\"/><Cell id=\"Cell05\" left=\"103\" top=\"67\" width=\"70\" text=\"직책\" displaytype=\"normal\" verticalAlign=\"middle\" wordWrap=\"\" cssclass=\"sta_WF_Label \" height=\"20\"/><Cell id=\"Cell06\" left=\"103\" top=\"89\" width=\"70\" text=\"호칭\" displaytype=\"normal\" verticalAlign=\"middle\" wordWrap=\"\" cssclass=\"sta_WF_Label \" height=\"20\"/><Cell id=\"Cell07\" left=\"103\" top=\"111\" width=\"70\" text=\"직무\" displaytype=\"normal\" verticalAlign=\"middle\" wordWrap=\"\" cssclass=\"sta_WF_Label \" height=\"20\"/><Cell id=\"Cell08\" left=\"103\" top=\"133\" width=\"70\" text=\"부서일\" displaytype=\"normal\" verticalAlign=\"middle\" wordWrap=\"\" cssclass=\"sta_WF_Label \" height=\"20\"/><Cell id=\"Cell09\" left=\"183\" top=\"45\" width=\"100\" text=\"bind:EMPLOYEE_NAME\" displaytype=\"editcontrol\" cssclass=\"display \" height=\"20\"/><Cell id=\"Cell10\" left=\"183\" top=\"67\" width=\"100\" text=\"bind:POSITION_NAME\" displaytype=\"editcontrol\" cssclass=\"display \" height=\"20\"/><Cell id=\"Cell11\" left=\"183\" top=\"89\" width=\"100\" text=\"bind:GRADE_TITLE\" displaytype=\"editcontrol\" cssclass=\"display \" height=\"20\"/><Cell id=\"Cell12\" left=\"183\" top=\"111\" width=\"100\" text=\"bind:JOB_NAME\" displaytype=\"editcontrol\" cssclass=\"display \" height=\"20\"/><Cell id=\"Cell13\" left=\"183\" top=\"133\" width=\"100\" text=\"bind:HIRE_DATE\" displaytype=\"editcontrol\" cssclass=\"display \" height=\"20\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1260,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_00.form.div_subTitle.form.edt_00","value","ds_search","ORG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_topPhoto.form.edt_00","value","ds_part_leader","ORGANIZATION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_topPhoto.form.edt_00_00","value","ds_part_leader","EMPLOYEE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_topPhoto.form.ImageViewer_00","image","ds_part_leader","BLOB_IMAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_topPhoto.form.edt_00_00_00_00","value","ds_part_leader","GRADE_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_topPhoto.form.edt_00_00_00_00_00","value","ds_part_leader","JOB_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_topPhoto.form.cal_00","value","ds_part_leader","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_topPhoto.form.edt_00_00_00","value","ds_part_leader","POSITION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA90210M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 조직도 사진
         * 업무명 		: 조직도 사진 조회
         * 파일명 		: HRA90210M.xfdl
         * 작성자 		: 한만섭
         * 설  명		: 조직도 사진 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.18	한만섭			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        // 사용자 정보
        var personId = this.gf_getPersonId();
        var personDeptCd = this.gf_getDeptCd();
        var personDeptNm = this.gf_getDeptNm();

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	var dsSearch = this.ds_search;
        	dsSearch.setColumn(0, "ORG_ID", personDeptCd);
        	dsSearch.setColumn(0, "ORG_NAME", personDeptNm);
        	trace('personDeptNm', personDeptNm);

        	this.fn_getMembers();
        };

        /**************************************************************************
         * 4. 이벤트 영역
         ***************************************************************************/



        //************************************************
        // 조직도 트리 정보
        //************************************************
        this.fn_getMembers = function(obj, e)
        {
        	trace("조직도 사진 정보 INFO===============================");
        	this.ds_part_leader.clearData();
        	this.ds_members.clearData();

        	var sSvcID = "selectMembers";
        	var sController = "/hra90210/selectMembers.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_part_leader=ds_part_leader ds_members=ds_members";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        //************************************************
        // 부서찾기 팝업
        //************************************************
        this.fn_deptSearch = function(obj,e)
        {
        	var popupId = "SEARCH_DEPT";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00210";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "ORG_ID|ORG_NAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId, "cmd::CMSA00100P.xfdl", oArg, "");
        };

        //************************************************
        // 리스트뷰 클릭 이벤트
        //************************************************
        this.div_work_ListView00_oncellclick = function(obj,e)
        {
        	var dsSearch = this.ds_search,
        		ds = this.ds_members,
        		empType = ds.getColumn(e.row, "EMP_TYPE");

        	if(e.cellid !== 'btnStaff' || (empType !== '10' && empType !== '20')) {
        		return false;
        	}


        	var	pOrgId = ds.getColumn(e.row, "ORGANIZATION_ID"),
        		pOrgNm = ds.getColumn(e.row, "ORGANIZATION_NAME");

        	dsSearch.setColumn(0, 'ORG_ID', pOrgId);
        	dsSearch.setColumn(0, 'ORG_NAME', pOrgNm);

        	this.fn_getMembers();
        };

        //************************************************
        // Upper Org 클릭 이벤트
        //************************************************
        this.fn_upperOrg = function(obj,e)
        {
        	var parentOrgId = this.ds_part_leader.getColumn(0, 'PARENT_ORGANIZATION_ID'),
        		dsSearch = this.ds_search;

        	dsSearch.setColumn(0, 'ORG_ID', parentOrgId);
        	dsSearch.setColumn(0, 'ORG_NAME', null);

        	this.fn_getMembers();
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
        		if (trId == "selectMembers")
        		{
        			var ds = this.ds_part_leader,
        				dsSearch = this.ds_search;
        				parentOrgId = ds.getColumn(0, 'PARENT_ORGANIZATION_ID'),
        				orgNm = ds.getColumn(0, 'ORGANIZATION_NAME'),
        				btnUpperOrg = this.div_00.form.div_subTitle.form.btn_upperOrg;

        			dsSearch.setColumn(0, 'ORG_NAME', orgNm);

        			if(!!parentOrgId) {
        				btnUpperOrg.set_enable(true);
        			} else {
        				btnUpperOrg.set_enable(false);
        			}
        		}
        	}
        }

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_DEPT")
        	{
        		var dsSearch = this.ds_search;
        		dsSearch.setColumn(0, 'ORG_ID', rtn[0].toString());
        		dsSearch.setColumn(0, 'ORG_NAME', rtn[1]);

        		this.fn_getMembers();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_favorite.addEventHandler("onclick",this.btn_favorite_onclick,this);
            this.div_00.form.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_00.form.div_subTitle.form.edt_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_00.form.div_subTitle.form.btn_dept_search.addEventHandler("onclick",this.fn_deptSearch,this);
            this.div_00.form.div_subTitle.form.btn_upperOrg.addEventHandler("onclick",this.fn_upperOrg,this);
            this.div_topPhoto.form.ImageViewer_00.addEventHandler("onclick",this.div_topPhoto_ImageViewer_00_onclick,this);
            this.div_topPhoto.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_00_00_00_onclick,this);
            this.div_topPhoto.form.edt_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_topPhoto.form.edt_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_topPhoto.form.edt_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_topPhoto.form.edt_00_00_00_00_00.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.ListView00.addEventHandler("oncellclick",this.div_work_ListView00_oncellclick,this);
        };
        this.loadIncludeScript("HRA90210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
