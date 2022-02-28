(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA90110M");
            this.set_titletext("Organization Chart");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ORG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_members", this);
            obj._setContents("<ColumnInfo><Column id=\"GRADE_TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"EFFECTIVE_ORG_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"GRADE_SEQ\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"JOB_FAMILY\" type=\"STRING\" size=\"32\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"EMPLOYEE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"RETIRE_REASON\" type=\"STRING\" size=\"32\"/><Column id=\"POSITION_GRADE_SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"32\"/><Column id=\"RETIRE_DATE\" type=\"STRING\" size=\"32\"/><Column id=\"PROMOTION_DATE\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","36",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","0","0","40%",null,null,"10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_tree");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj.set_binddataset("ds_tree");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"168\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" edittype=\"tree\" displaytype=\"treeitemcontrol\" treelevel=\"bind:LEVEL\" cssclass=\"expr:lev==&quot;0&quot;?&apos;lev0&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory",null,"34","59%",null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_members");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"1\" text=\"호칭\" tooltiptext=\"호칭\"/><Cell col=\"2\" text=\"직책\" tooltiptext=\"직책\"/><Cell col=\"3\" text=\"직무\" tooltiptext=\"직무\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPLOYEE_NAME\"/><Cell col=\"1\" text=\"bind:TITLE_NAME\"/><Cell col=\"2\" text=\"bind:POSITION_NAME\"/><Cell col=\"3\" text=\"bind:JOB_NAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","41.10%","0","180","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Members");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("Members");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("Grid01_00_00","40","0","0",null,null,"93",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA90110M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 조직도
         * 업무명 		: 조직도 조회
         * 파일명 		: HRA90110M.xfdl
         * 작성자 		: 한만섭
         * 설  명		: 조직도 조회
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
         //전역변수 선언
        var changed = false;
        var personId = this.gf_getPersonId();
        var personDeptCd = this.gf_getDeptCd();

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_getOrgTreeInfo(); 	// 조직도 트리 정보
        };

        /**************************************************************************
         * 4. 이벤트 영역
         ***************************************************************************/



        //************************************************
        // 조직도 트리 정보
        //************************************************
        this.fn_getOrgTreeInfo = function(obj, e)
        {
        	trace("조직도 트리 정보 INFO===============================");
        	this.ds_search.setColumn(0, "ORG_ID", personDeptCd);

        	var sSvcID = "selectOrgTree";
        	var sController = "/hra90110/selectOrgTree.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tree=ds_tree ds_members=ds_members";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        //************************************************
        // 조직원 정보
        //************************************************
        this.fn_getMemberList = function(obj,e)
        {
        	if(this.changed) {
        		trace("조직원 정보 INFO===============================");

        		var dsTree = this.ds_tree,
        			orgId = dsTree.getColumn(e.row, 'ORG_ID');

        		this.ds_search.setColumn(0, "ORG_ID", orgId);
        		this.ds_members.clearData();

        		var sSvcID = "selectMembers";
        		var sController = "/hra90110/selectMembers.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_members=ds_members";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        }

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
        		if (trId == "selectOrgTree")
        		{
        			var ds = this.ds_tree,
        				nRow = ds.findRow( "ORG_ID", personDeptCd);

        			ds.set_rowposition(nRow);
        			this.changed = true;
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.Grid01_00.addEventHandler("onselectchanged",this.fn_getMemberList,this);
        };
        this.loadIncludeScript("HRA90110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
