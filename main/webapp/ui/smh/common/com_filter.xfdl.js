(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_filter");
            this.set_titletext("com_filter");
            if (Form == this.constructor)
            {
                this._setFormPosition(250,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_values", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_textfilter", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DESC\">Equals</Col><Col id=\"CD\">EQ</Col></Row><Row><Col id=\"DESC\">Does Not Equal</Col><Col id=\"CD\">NEQ</Col></Row><Row><Col id=\"DESC\">Begins With</Col><Col id=\"CD\">BW</Col></Row><Row><Col id=\"DESC\">Ends With</Col><Col id=\"CD\">EW</Col></Row><Row><Col id=\"DESC\">Contains</Col><Col id=\"CD\">C</Col></Row><Row><Col id=\"DESC\">Does Not Contain</Col><Col id=\"CD\">NC</Col></Row><Row><Col id=\"DESC\">Is Blank</Col><Col id=\"CD\">IB</Col></Row><Row><Col id=\"DESC\">Is Not Blank</Col><Col id=\"CD\">INB</Col></Row><Row><Col id=\"DESC\">Custom Filter</Col><Col id=\"CD\">CF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_textfilterCustom", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DESC\">Equals</Col><Col id=\"CD\">EQ</Col></Row><Row><Col id=\"DESC\">Does Not Equal</Col><Col id=\"CD\">NEQ</Col></Row><Row><Col id=\"DESC\">Begins With</Col><Col id=\"CD\">BW</Col></Row><Row><Col id=\"DESC\">Ends With</Col><Col id=\"CD\">EW</Col></Row><Row><Col id=\"DESC\">Contains</Col><Col id=\"CD\">C</Col></Row><Row><Col id=\"DESC\">Does Not Contain</Col><Col id=\"CD\">NC</Col></Row><Row><Col id=\"DESC\">Is Blank</Col><Col id=\"CD\">IB</Col></Row><Row><Col id=\"DESC\">Is Not Blank</Col><Col id=\"CD\">INB</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab","2","2",null,null,"2","39",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab);
            obj.set_text("Values");
            this.tab.addChild(obj.name, obj);

            obj = new Edit("edt_values","0","5",null,"20","0",null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("Enter text to search...");
            obj.set_visible("false");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_values","0","6",null,null,"0","1",null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_values");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"43\"/><Column size=\"196\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"(ALL)\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:DESC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab);
            obj.set_text("Text Filters");
            this.tab.addChild(obj.name, obj);

            obj = new Edit("edt_textfilter","0","44",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("0");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_textfilter","0","17",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_textfilter");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("DESC");
            obj.set_text("Begins With");
            obj.set_value("BW");
            obj.set_index("2");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_values","0","46",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_values2");
            obj.set_codecolumn("DESC");
            obj.set_datacolumn("DESC");
            obj.set_visible("false");
            obj.set_value("BW");
            obj.set_index("2");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_custom","1","61",null,"160","1",null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_textfilter","50","7",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_textfilterCustom");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("DESC");
            obj.set_text("Begins With");
            obj.set_value("BW");
            obj.set_index("2");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Combo("cbo_values","50","36",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_values2");
            obj.set_codecolumn("DESC");
            obj.set_datacolumn("DESC");
            obj.set_visible("false");
            obj.set_value("BW");
            obj.set_index("2");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Edit("edt_textfilter","50","34",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("2");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Combo("cbo_textfilter2","50","95",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_textfilterCustom");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("DESC");
            obj.set_text("Begins With");
            obj.set_value("BW");
            obj.set_index("2");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Combo("cbo_values2","50","124",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_values2");
            obj.set_codecolumn("DESC");
            obj.set_datacolumn("DESC");
            obj.set_visible("false");
            obj.set_value("BW");
            obj.set_index("2");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Edit("edt_textfilter2","50","122",null,"20","0",null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("5");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Radio("rdo_andOr","53","65","117","20",null,null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var tab_Tabpage2_form_div_custom_form_rdo_andOr_innerdataset = new nexacro.NormalDataset("tab_Tabpage2_form_div_custom_form_rdo_andOr_innerdataset", obj);
            tab_Tabpage2_form_div_custom_form_rdo_andOr_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">and</Col><Col id=\"datacolumn\">And</Col></Row><Row><Col id=\"codecolumn\">or</Col><Col id=\"datacolumn\">Or</Col></Row></Rows>");
            obj.set_innerdataset(tab_Tabpage2_form_div_custom_form_rdo_andOr_innerdataset);
            obj.set_text("And");
            obj.set_value("and");
            obj.set_index("0");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Static("sta_00","-1","6","49","20",null,null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("7");
            obj.set_text("First");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Static("sta_00_00","-1","94","49","20",null,null,null,null,null,null,this.tab.Tabpage2.form.div_custom.form);
            obj.set_taborder("8");
            obj.set_text("Second");
            this.tab.Tabpage2.form.div_custom.addChild(obj.name, obj);

            obj = new Button("btn_clearfilter","10",null,"96","24",null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Clear Filter");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"56","24","6","5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",250,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_filter.xfdl", function() {
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
        this.objGrd;
        this.objGrdCol;
        this.objGrdCell;
        this.objDsNm;
        this.filterCols;

        var grdObj;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.tab.Tabpage1.form.grd_values.removeEventHandler("onheadclick", this.nfn_grd_onheadclick, this);
        	this.tab.Tabpage1.form.grd_values.removeEventHandler("onexpandup", this.nfn_grd_onexpandup, this);
        	this.tab.Tabpage1.form.grd_values.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this);
        	this.fn_setDsValues();
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
        this.fn_setDsValues = function ()
        {
        	//this.ds_values.clearData();
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	if(objDs== null) return;
        	grdObj = this.parent.parent.nfn_getComponent(this, this.objGrd.name, Grid);
        	var colNm = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");
        	for(var i=0; i<objDs.rowcount; i++){
        		var seekVal = objDs.getColumn(i,colNm);
        		if(this.ds_values.findRow("DESC",this.gfn_isEmpty(seekVal))>=0) continue;

        		var row = this.ds_values.addRow();
        		this.ds_values.setColumn(row,"DESC",this.gfn_isEmpty(seekVal));
        		if(this.ds_values.rowcount>100) break;
        	}
        	this.ds_values.set_rowposition(0);

        	var row = this.ds_values2.addRow();
        	this.ds_values2.setColumn(row,"DESC","Select a Value..");
        	this.ds_values2.appendData(this.ds_values);
        }

        this.fn_setCustomFilter = function(objNm, strFilter)
        {
        	if(this.gfn_isNull(strFilter)) return;
        	var strAndOr = (this.tab.Tabpage2.form.div_custom.form.rdo_andOr.value=="and")?" && ":" || ";
        	if(objNm=="cbo_textfilter" || objNm=="cbo_values" || objNm=="edt_textfilter"){
        		var strFilter2 = this.tab_Tabpage2_div_custom_cbo_textfilter2_onitemchanged()
        					+ this.tab_Tabpage2_div_custom_cbo_values2_onitemchanged()
        					+ this.tab_Tabpage2_div_custom_edt_textfilter2_canchange();
        		if(!this.gfn_isNull(strFilter2)){
        			strFilter = strFilter + strAndOr + strFilter2;
        		}
        	}else{
        		var strFilter2 = this.tab_Tabpage2_div_custom_cbo_textfilter_onitemchanged()
        					+ this.tab_Tabpage2_div_custom_cbo_values_onitemchanged()
        					+ this.tab_Tabpage2_div_custom_edt_textfilter_canchange();
        		if(!this.gfn_isNull(strFilter2)){
        			strFilter = strFilter + strAndOr + strFilter2;
        		}
        	}
        	//trace(strFilter);
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	objDs.filter(strFilter);
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.btn_close_onclick = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var filterstr = objDs.filterstr;
        	trace("filterstr-->"+filterstr);
        	trace("this.objGrdCell-->"+this.objGrdCell);

        	if(this.gfn_isNull(filterstr)){
        		grdObj.setCellProperty("head",this.objGrdCell,"expandsize","23");
        		grdObj.setCellProperty("head",this.objGrdCell,"expandshow","hide");
        	}else{
        	/*
        		for(var i=0; i<grdObj.getCellCount("head"); i++){
        			grdObj.setCellProperty("head",i,"expandshow","hide");
        		}
        	*/
        		grdObj.setCellProperty("head",this.objGrdCell,"expandimage","theme://images/grd_head_icon11_F.png");
        		grdObj.setCellProperty("head",this.objGrdCell,"expandshow","show");
        		grdObj.setCellProperty("head",this.objGrdCell,"expandsize","24");
        	}

        	this.parent.closePopup();
        };

        this.tab_Tabpage1_grd_values_oncellclick = function(obj,e)
        {
        	if(e.row<0) return;
        	var colNm = grdObj.getCellProperty("Body", this.objGrdCol, "text").replace("bind:","");
        	var strFilter = "";
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);
        	//trace("objColInfo-->"+objColInfo.type);
        	var sQuote = "";
        	if("INT,FLOAT,BIGDECIMAL".indexOf(objColInfo.type)<0) sQuote = "'";
        	var j=0;
        	for(var i=0; i<this.ds_values.rowcount; i++){
        		if(this.ds_values.getColumn(i,"CHK")=="1"){
        			if(j==0)
        				strFilter = colNm + "=="+sQuote+this.ds_values.getColumn(i,"DESC")+sQuote;
        			else
        				strFilter = strFilter + " || " + colNm + "=="+sQuote+this.ds_values.getColumn(i,"DESC")+sQuote;
        			j++;
        		}
        	}
        	trace(strFilter);
        	objDs.filter(strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage1_grd_values_onheadclick = function(obj,e)
        {
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);

        	// Grid 정렬
        	this.gfn_ProcGrdSort(obj, e.cell);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	var strFilter = "";
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);
        	//trace("objColInfo-->"+objColInfo.type);
        	var sQuote = "";
        	if("INT,FLOAT,BIGDECIMAL".indexOf(objColInfo.type)<0) sQuote = "'";

        	var j=0;
        	for(var i=0; i<this.ds_values.rowcount; i++){
        		if(this.ds_values.getColumn(i,"CHK")=="1"){
        			if(j==0)
        				strFilter = colNm + "=="+sQuote+this.ds_values.getColumn(i,"DESC")+sQuote;
        			else
        				strFilter = strFilter + " || " + colNm + "=="+sQuote+this.ds_values.getColumn(i,"DESC")+sQuote;
        			j++;
        		}
        	}
        	//trace(strFilter);
        	objDs.filter(strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.btn_clearfilter_onclick = function(obj,e)
        {
        	for(var i=0; i<this.ds_values.rowcount; i++){
        		this.ds_values.setColumn(i,"CHK","0")
        	}

        	var objDs = this.parent.parent.objects[this.objDsNm];
        	objDs.filter("");
        	this.fn_setDsValues();
        	for(var i=0; i<grdObj.getCellCount("head"); i++){
        		grdObj.setCellProperty("head",i,"expandshow","23");
        		grdObj.setCellProperty("head",i,"expandshow","hide");
        	}
        	this.filterCols = "";
        };

        this.tab_Tabpage2_cbo_textfilter_onitemchanged = function(obj,e)
        {
        	strFilter = "";
        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	this.tab.Tabpage2.form.cbo_values.set_visible(false);
        	this.tab.Tabpage2.form.edt_textfilter.set_visible(false);
        	this.tab.Tabpage2.form.btn_edt_textfilter.set_visible(false);
        	this.tab.Tabpage2.form.cbo_values.set_index(0);
        	this.tab.Tabpage2.form.edt_textfilter.set_value("");
        	this.tab.Tabpage2.form.div_custom.set_visible(false);
        	switch(e.postvalue) {
        		case "EQ":	//Equals
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			break;
        		case "NEQ":	//Does Not Equal
        			this.tab.Tabpage2.form.cbo_values.set_visible(true);
        			break;
        		case "BW":	//Begins With
        			this.tab.Tabpage2.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "EW":	//Ends With
        			this.tab.Tabpage2.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "C":	//Contains
        			this.tab.Tabpage2.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "NC":	//Does Not Contain
        			this.tab.Tabpage2.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "IB":	//Is Blank
        			strFilter = colNm + "==''"
        			objDs.filter(strFilter);
        			break;
        		case "INB":	//Is Not Blank
        			strFilter = colNm + "!=''"
        			objDs.filter(strFilter);
        			break;
        		case "CF":	//Custom Filter
        			this.tab.Tabpage2.form.div_custom.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.set_top(46);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage2_edt_textfilter_canchange = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	var strFilter = "";
        	var val = e.postvalue;

        	if(this.gfn_isNull(e.postvalue)) val = "";

        	switch(this.tab.Tabpage2.form.cbo_textfilter.value) {
        		case "BW":	//Begins With
        			strFilter = colNm + ".substring(0,"+ val.length + ")==" + this.gfn_quote(val);
        			objDs.filter(strFilter);
        			break;
        		case "EW":	//Ends With
        			if(this.gfn_isNull(e.postvalue)){
        				objDs.filter("");
        			}else{
        				strFilter = colNm + ".substring("+ colNm + ".length-"+val.length +","+ colNm + ".length)==" + this.gfn_quote(val);
        				objDs.filter(strFilter);
        			}
        			break;
        		case "C":	//Contains
        			strFilter = colNm + ".indexOf(" + this.gfn_quote(val)+") >= 0";
        			objDs.filter(strFilter);
        			break;
        		case "NC":	//Does Not Contain
        			strFilter = colNm + ".indexOf(" + this.gfn_quote(val)+") < 0";
        			objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };



        this.tab_Tabpage2_cbo_values_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	var strFilter = "";
        	switch(this.tab.Tabpage2.form.cbo_textfilter.value) {
        		case "EQ":	//Equals
        			strFilter = colNm + "==" + this.gfn_quote(e.postvalue);
        			objDs.filter(strFilter);
        			break;
        		case "NEQ":	//Does Not Equal
        			strFilter = colNm + "!=" +  this.gfn_quote(e.postvalue);
        			objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        this.tab_Tabpage2_div_custom_cbo_textfilter_onitemchanged = function(obj,e)
        {
        	this.tab.Tabpage2.form.div_custom.form.cbo_values.set_visible(false);
        	this.tab.Tabpage2.form.div_custom.form.edt_textfilter.set_visible(false);
        	this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter.set_visible(false);
        	var strFilter="";
        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	switch(this.tab.Tabpage2.form.div_custom.form.cbo_textfilter.value) {
        		case "EQ":	//Equals
        			this.tab.Tabpage2.form.div_custom.form.cbo_values.set_visible(true);
        			break;
        		case "NEQ":	//Does Not Equal
        			this.tab.Tabpage2.form.div_custom.form.cbo_values.set_visible(true);
        			break;
        		case "BW":	//Begins With
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "EW":	//Ends With
        			this.tab.Tabpage2.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "C":	//Contains
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "NC":	//Does Not Contain
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter.set_visible(true);
        			break;
        		case "IB":	//Is Blank
        			strFilter = colNm + "==''"
        			//objDs.filter(strFilter);
        			break;
        		case "INB":	//Is Not Blank
        			strFilter = colNm + "!=''"
        			//objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}
        	if(this.tab.Tabpage2.form.div_custom.form.isValidObject(obj)){
        		this.fn_setCustomFilter(obj.name, strFilter);
        		this.tab.Tabpage2.form.div_custom.form.cbo_values.set_index(0);
        		this.tab.Tabpage2.form.div_custom.form.edt_textfilter.set_value("");
        	}else{
        		return strFilter;
        	}

        };

        this.tab_Tabpage2_div_custom_edt_textfilter_canchange = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	var strFilter = "";
        	var val =this.tab.Tabpage2.form.div_custom.form.edt_textfilter.value;

        	if(this.gfn_isNull(val)){
        		val = "";
        		return val;
        	}
        	switch(this.tab.Tabpage2.form.div_custom.form.cbo_textfilter.value) {
        		case "BW":	//Begins With
        			strFilter = colNm + ".substring(0,"+ val.length + ")==" + this.gfn_quote(val);
        			//objDs.filter(strFilter);
        			break;
        		case "EW":	//Ends With
        			if(this.gfn_isNull(val)){
        				//objDs.filter("");
        			}else{
        				strFilter = colNm + ".substring("+ colNm + ".length-"+val.length +","+ colNm + ".length)==" + this.gfn_quote(val);
        				//objDs.filter(strFilter);
        			}
        			break;
        		case "C":	//Contains
        			strFilter = colNm + ".indexOf(" + this.gfn_quote(val)+") >= 0";
        			//objDs.filter(strFilter);
        			break;
        		case "NC":	//Does Not Contain
        			strFilter = colNm + ".indexOf(" + this.gfn_quote(val)+") < 0";
        			//objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        	if(this.tab.Tabpage2.form.div_custom.form.isValidObject(obj)){
        		this.fn_setCustomFilter(obj.name, strFilter);
        	}else{
        		return strFilter;
        	}
        };

        this.tab_Tabpage2_div_custom_cbo_values_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	if(this.gfn_isNull(this.tab.Tabpage2.form.div_custom.form.cbo_values.value)) return "";

        	var strFilter = "";
        	switch(this.tab.Tabpage2.form.div_custom.form.cbo_textfilter.value) {
        		case "EQ":	//Equals
        			strFilter = colNm + "==" + this.gfn_quote(this.tab.Tabpage2.form.div_custom.form.cbo_values.value);
        			//objDs.filter(strFilter);
        			break;
        		case "NEQ":	//Does Not Equal
        			strFilter = colNm + "!=" +  this.gfn_quote(this.tab.Tabpage2.form.div_custom.form.cbo_values.value);
        			//objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(this.tab.Tabpage2.form.div_custom.form.isValidObject(obj)){
        		this.fn_setCustomFilter(obj.name, strFilter);
        	}else{
        		return strFilter;
        	}
        };

        this.tab_Tabpage2_div_custom_cbo_textfilter2_onitemchanged = function(obj,e)
        {
        	this.tab.Tabpage2.form.div_custom.form.cbo_values2.set_visible(false);
        	this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.set_visible(false);
        	this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter2.set_visible(false);
        	var strFilter = "";
        	switch(this.tab.Tabpage2.form.div_custom.form.cbo_textfilter2.value) {
        		case "EQ":	//Equals
        			this.tab.Tabpage2.form.div_custom.form.cbo_values2.set_visible(true);
        			break;
        		case "NEQ":	//Does Not Equal
        			this.tab.Tabpage2.form.div_custom.form.cbo_values2.set_visible(true);
        			break;
        		case "BW":	//Begins With
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter2.set_visible(true);
        			break;
        		case "EW":	//Ends With
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter2.set_visible(true);
        			break;
        		case "C":	//Contains
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter2.set_visible(true);
        			break;
        		case "NC":	//Does Not Contain
        			this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.set_visible(true);
        			this.tab.Tabpage2.form.div_custom.form.btn_edt_textfilter2.set_visible(true);
        			break;
        		case "IB":	//Is Blank
        			strFilter = colNm + "==''"
        			//objDs.filter(strFilter);
        			break;
        		case "INB":	//Is Not Blank
        			strFilter = colNm + "!=''"
        			//objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        	if(this.tab.Tabpage2.form.div_custom.form.isValidObject(obj)){
        		this.fn_setCustomFilter(obj.name, strFilter);
        		this.tab.Tabpage2.form.div_custom.form.cbo_values2.set_index(0);
        		this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.set_value("");
        	}else{
        		return strFilter;
        	}
        };


        this.tab_Tabpage2_div_custom_edt_textfilter2_canchange = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	var strFilter = "";
        	var val = this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.value;

        	if(this.gfn_isNull(val)){
        		val = "";
        		return val;
        	}

        	switch(this.tab.Tabpage2.form.div_custom.form.cbo_textfilter2.value) {
        		case "BW":	//Begins With
        			strFilter = colNm + ".substring(0,"+ val.length + ")==" + this.gfn_quote(val);
        			//objDs.filter(strFilter);
        			break;
        		case "EW":	//Ends With
        			if(this.gfn_isNull(val)){
        				//objDs.filter("");
        			}else{
        				strFilter = colNm + ".substring("+ colNm + ".length-"+val.length +","+ colNm + ".length)==" + this.gfn_quote(val);
        				//objDs.filter(strFilter);
        			}
        			break;
        		case "C":	//Contains
        			strFilter = colNm + ".indexOf(" + this.gfn_quote(val)+") >= 0";
        			//objDs.filter(strFilter);
        			break;
        		case "NC":	//Does Not Contain
        			strFilter = colNm + ".indexOf(" + this.gfn_quote(val)+") < 0";
        			//objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        	if(this.tab.Tabpage2.form.div_custom.form.isValidObject(obj)){
        		this.fn_setCustomFilter(obj.name, strFilter);
        	}else{
        		return strFilter;
        	}
        };

        this.tab_Tabpage2_div_custom_cbo_values2_onitemchanged = function(obj,e)
        {
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	var objColInfo = objDs.getColumnInfo(colNm);

        	var colNm = grdObj.getCellProperty("Body", this.objGrdCell, "text").replace("bind:","");
        	var strFilter = "";
        	if(this.gfn_isNull(this.tab.Tabpage2.form.div_custom.form.cbo_values2.value)) return "";
        	switch(this.tab.Tabpage2.form.div_custom.form.cbo_textfilter2.value) {
        		case "EQ":	//Equals
        			strFilter = colNm + "==" + this.gfn_quote(this.tab.Tabpage2.form.div_custom.form.cbo_values2.value);
        			//objDs.filter(strFilter);
        			break;
        		case "NEQ":	//Does Not Equal
        			strFilter = colNm + "!=" +  this.gfn_quote(this.tab.Tabpage2.form.div_custom.form.cbo_values2.value);
        			//objDs.filter(strFilter);
        			break;
        		default:
        	}
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        	if(this.tab.Tabpage2.form.div_custom.form.isValidObject(obj)){
        		this.fn_setCustomFilter(obj.name, strFilter);
        	}else{
        		return strFilter;
        	}
        };

        this.tab_Tabpage2_div_custom_rdo_andOr_onitemchanged = function(obj,e)
        {
        	var strAndOr = (this.tab.Tabpage2.form.div_custom.form.rdo_andOr.value=="and")?" && ":" || ";
        	var strFilter1 = this.tab_Tabpage2_div_custom_cbo_textfilter_onitemchanged()
        				+ this.tab_Tabpage2_div_custom_cbo_values_onitemchanged()
        				+ this.tab_Tabpage2_div_custom_edt_textfilter_canchange();
        	var strFilter2 = this.tab_Tabpage2_div_custom_cbo_textfilter2_onitemchanged()
        				+ this.tab_Tabpage2_div_custom_cbo_values2_onitemchanged()
        				+ this.tab_Tabpage2_div_custom_edt_textfilter2_canchange();
        	if(!this.gfn_isNull(strFilter1) && !this.gfn_isNull(strFilter2) ){
        		strFilter = strFilter1 + strAndOr + strFilter2;
        	}else if(!this.gfn_isNull(strFilter1)){
        		strFilter = strFilter1;
        	}else{
        		strFilter = strFilter2;
        	}
        	trace(strFilter);
        	var objDs = this.parent.parent.objects[this.objDsNm];
        	objDs.filter(strFilter);
        	if(!this.gfn_isNull(strFilter)) {
        		this.filterCols = colNm;  //this.filterCols = this.filterCols + "," + this.objGrdCol;
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab.Tabpage1.form.grd_values.addEventHandler("oncellclick",this.tab_Tabpage1_grd_values_oncellclick,this);
            this.tab.Tabpage1.form.grd_values.addEventHandler("onheadclick",this.tab_Tabpage1_grd_values_onheadclick,this);
            this.tab.Tabpage2.form.edt_textfilter.addEventHandler("canchange",this.tab_Tabpage2_edt_textfilter_canchange,this);
            this.tab.Tabpage2.form.cbo_textfilter.addEventHandler("onitemchanged",this.tab_Tabpage2_cbo_textfilter_onitemchanged,this);
            this.tab.Tabpage2.form.cbo_values.addEventHandler("onitemchanged",this.tab_Tabpage2_cbo_values_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_textfilter.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_textfilter_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_values.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_values_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.edt_textfilter.addEventHandler("canchange",this.tab_Tabpage2_div_custom_edt_textfilter_canchange,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_textfilter2.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_textfilter2_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.cbo_values2.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_cbo_values2_onitemchanged,this);
            this.tab.Tabpage2.form.div_custom.form.edt_textfilter2.addEventHandler("canchange",this.tab_Tabpage2_div_custom_edt_textfilter2_canchange,this);
            this.tab.Tabpage2.form.div_custom.form.rdo_andOr.addEventHandler("onitemchanged",this.tab_Tabpage2_div_custom_rdo_andOr_onitemchanged,this);
            this.btn_clearfilter.addEventHandler("onclick",this.btn_clearfilter_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("com_filter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
