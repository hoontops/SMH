(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_grdRMouseDown");
            this.set_titletext("Grid Menu");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(123,219);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">AUTOSIZE_COL</Col><Col id=\"DESC\">Best Fit</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"DESC\">Best Fit(All Columns)</Col><Col id=\"CD\">AUTOSIZE_ALLCOL</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"DESC\">복사</Col><Col id=\"CD\">COPY</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"DESC\">행 복사</Col><Col id=\"CD\">COPY_ROW</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"DESC\">붙여넣기</Col><Col id=\"CD\">PASTE</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"DESC\">열고정</Col><Col id=\"CD\">FIX_COL</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"CD\">UNFIX_COL</Col><Col id=\"DESC\">열고정 취소</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"DESC\">엑셀내보내기</Col><Col id=\"CD\">EXPORT</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">AUTOSIZE_COL</Col><Col id=\"DESC\">Best Fit</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">AUTOSIZE_ALLCOL</Col><Col id=\"DESC\">Best Fit(All Columns)</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">COPY</Col><Col id=\"DESC\">Copy</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">COPY_ROW</Col><Col id=\"DESC\">Copy Row</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">PASTE</Col><Col id=\"DESC\">Paste</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">FIX_COL</Col><Col id=\"DESC\">Fix Col</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">UNFIX_COL</Col><Col id=\"DESC\">Unfix Col</Col></Row><Row><Col id=\"LANG_CD\">en-US</Col><Col id=\"CD\">EXPORT</Col><Col id=\"DESC\">Export Excel</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_menu","1","2",null,null,"-3","1",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_list");
            obj.set_scrolltype("vertical");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"123\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:DESC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",123,219,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_grdMenu.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES 시스템
         * 업무명 		: 그리드메뉴
         * 파일명 		: com_grdMenu.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.03.18
         *
         * 설  명		: 그리드메뉴
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.16	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.objGrdNm;
        this.objGrdMenu;
        this.objGrdMenuRow;
        this.objGrdMenuCell;
        this.objGrdMenuCol;
        this.objDsNm;
        this.colFixYn;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.objGrdMenu = this.parent.objGrdMenu;
        	//this.objGrdMenuRow = this.parent.objGrdMenuRow;
        	//this.objGrdMenuCell = this.parent.objGrdMenuCell;
        	//this.objGrdMenuCol = this.parent.objGrdMenuCol;
        	var strFilter = ""
        	if(this.gf_getLanguageType()=="ko-KR"){
        		strFilter = "LANG_CD=='ko-KR'";
        	}else{
        		strFilter = "LANG_CD=='en-US'";
        	}
        	if(this.colFixYn=="Y"){
        		strFilter = strFilter + "&CD!='FIX_COL'";
        	}else{
        		strFilter = strFilter + "&CD!='UNFIX_COL'";
        	}
        	this.ds_list.filter(strFilter);
        	if(this.parent.parent.objects["ds_grdMenu"] != null){
        		//trace(this.ds_list.saveXML());
        		var objDs = this.parent.parent.objects["ds_grdMenu"];
        		for(var i=0; i<objDs.rowcount; i++){
        			if(objDs.getColumn(i,"GRD_NM") == this.objGrdNm){
        				var row = this.ds_list.addRow();
        				//this.ds_list.setColumn(row,"DESC",objDs.getColumn(i,"MENU_NM"));
        				var desc = this.nfn_getDictionaryname(objDs.getColumn(i,"DICTIONARYID"),true);
        				if(this.gfn_isNull(desc)) desc = objDs.getColumn(i,"MENU_NM")
        				this.ds_list.setColumn(row,"DESC",desc);
        				this.ds_list.setColumn(row,"FUNC",objDs.getColumn(i,"FUNC"));
        			}
        		}
        	}

        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.grd_menu_oncellclick = function(obj,e)
        {
        	var browser = system.navigatorname;
        	var parentGrdObj = this.parent.parent.nfn_getComponent(this, this.objGrdMenu.name, Grid);	//this.objGrdMenu;	//
        	switch(this.ds_list.getColumn(e.row,"CD")) {
        		case "AUTOSIZE_COL":
        			parentGrdObj.autoSizeCol("body",this.objGrdMenuCol);
        			break;
        		case "AUTOSIZE_ALLCOL":
        			for(var i=0; i<parentGrdObj.getCellCount("body") - 1; i++){
        				if(parentGrdObj.getRealColSize(i)==0) continue;
        				parentGrdObj.autoSizeCol("body",i);
        			}
        			break;
        		case "COPY":
        			//var content = eval("this.parent.parent."+this.objGrdMenu.name+".getCellValue("+this.objGrdMenuRow+","+this.objGrdMenuCell+");");
        			var content = parentGrdObj.getCellText(this.objGrdMenuRow,this.objGrdMenuCell);
        			if(browser == "IE"){
        				system.clearClipboard();
        				system.setClipboard("CF_TEXT",content);
        			}else{
        				var oArg = {arg_content:content, arg_type:"G"};
        				this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"");
        			}
        			break;
        		case "COPY_ROW":
        			var dsObj = this.parent.parent.objects[this.objDsNm];
        			if(dsObj == null) return;
        			//var row = dsObj.insertRow(dsObj.rowposition+1);
        			//dsObj.copyRow(row, dsObj, dsObj.rowposition-1);
        			var row = dsObj.addRow();
        			dsObj.copyRow(row, dsObj, this.objGrdMenuRow);
        			/*
        			var content = "";
        			for(var i=0; i<parentGrdObj.getCellCount("Body"); i++){
        				content = content +"	"+ parentGrdObj.getCellValue(this.objGrdMenuRow,i);
        			}
        			if(browser == "IE"){
        				system.clearClipboard();
        				system.setClipboard("CF_TEXT",content);
        			}else{
        				var oArg = {arg_content:content};
        				this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"");
        			}
        			*/
        			break;
        		case "PASTE":
        			if(browser == "IE"){
        				var content = system.getClipboard("CF_TEXT");
        				var parentDsObj = this.parent.parent.objects[parentGrdObj.binddataset];
        				var colId = parentGrdObj.getCellProperty("Body", this.objGrdMenuCell, "text").replace("bind:","")
        				parentDsObj.setColumn(this.objGrdMenuRow,colId,content)
        			}
        			break;
        		case "FIX_COL":
        			//this.parent.parent.nfn_cellUnFix(parentGrdObj);
        			this.parent.parent.nfn_cellFix(parentGrdObj,this.objGrdMenuCell);
        			break;
        		case "UNFIX_COL":
        			this.parent.parent.nfn_cellUnFix(parentGrdObj);
        			break;
        		case "EXPORT":
        			var sGrdName = this.objGrdMenu.name;//	"grd_lookupValues";
        			// 저장될 엑셀명
        			var sFileName = this.objGrdMenu.name;
        			this.parent.parent.gfn_export_excel2(sGrdName, "Sheet1", sFileName, "EXCEL");
        			break;
        		default:
        			this.parent.parent.components["pdv_grdMenu"].closePopup();
        			var func = this.ds_list.getColumn(e.row,"FUNC");
        			if(!this.gfn_isNull(func)){
        				eval("this.parent.parent."+func+"();");
        			}
        			break;
        	}
        	this.parent.parent.components["pdv_grdMenu"].closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_menu.addEventHandler("oncellclick",this.grd_menu_oncellclick,this);
        };
        this.loadIncludeScript("com_grdMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
